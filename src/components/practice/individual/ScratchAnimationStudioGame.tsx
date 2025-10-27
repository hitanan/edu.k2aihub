import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Layers, Palette } from 'lucide-react';

interface ScratchAnimationStudioGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface SpriteData {
  id: string;
  name: string;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  visible: boolean;
}

interface AnimationFrame {
  sprites: SpriteData[];
  duration: number;
}

export default function ScratchAnimationStudioGame({ 
  onComplete, 
  timeLeft, 
  onRestart 
}: ScratchAnimationStudioGameProps) {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [selectedSprite, setSelectedSprite] = useState<string>('cat');
  const [animationFrames, setAnimationFrames] = useState<AnimationFrame[]>([]);
  const [sprites, setSprites] = useState<SpriteData[]>([
    {
      id: 'cat',
      name: '🐱 Mèo',
      x: 50,
      y: 50,
      rotation: 0,
      color: '#FF6B6B',
      size: 50,
      visible: true,
    },
    {
      id: 'ball',
      name: '⚽ Bóng',
      x: 150,
      y: 100,
      rotation: 0,
      color: '#4ECDC4',
      size: 30,
      visible: true,
    },
  ]);

  const [challenges] = useState([
    {
      id: 1,
      title: 'Làm cho mèo di chuyển',
      description: 'Tạo animation để mèo di chuyển từ trái sang phải',
      points: 25,
      completed: false,
    },
    {
      id: 2,
      title: 'Xoay bóng',
      description: 'Làm cho bóng xoay 360 độ',
      points: 20,
      completed: false,
    },
    {
      id: 3,
      title: 'Thay đổi kích thước',
      description: 'Tạo hiệu ứng phóng to/thu nhỏ cho sprite',
      points: 30,
      completed: false,
    },
  ]);

  // Animation playback
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && animationFrames.length > 0) {
      interval = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % animationFrames.length);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, animationFrames.length]);

  // Game timer
  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  const addFrame = () => {
    const newFrame: AnimationFrame = {
      sprites: sprites.map(sprite => ({ ...sprite })),
      duration: 500,
    };
    setAnimationFrames([...animationFrames, newFrame]);
    setScore(prev => prev + 10);
  };

  const updateSpriteProperty = (spriteId: string, property: keyof SpriteData, value: number) => {
    setSprites(prev => 
      prev.map(sprite => 
        sprite.id === spriteId 
          ? { ...sprite, [property]: value }
          : sprite
      )
    );
  };

  const playAnimation = () => {
    if (animationFrames.length === 0) {
      addFrame(); // Auto-add first frame
    }
    setIsPlaying(!isPlaying);
    setScore(prev => prev + 5);
  };

  const clearAnimation = () => {
    setAnimationFrames([]);
    setIsPlaying(false);
    setCurrentFrame(0);
  };

  const completeChallenge = (challengeId: number) => {
    const challenge = challenges.find(c => c.id === challengeId);
    if (challenge) {
      setScore(prev => prev + challenge.points);
      
      // Check if all challenges completed
      const completedChallenges = challenges.filter(c => c.completed).length + 1;
      if (completedChallenges >= 2) {
        onComplete(true, score + challenge.points);
      }
    }
  };

  const renderStage = () => {
    const currentSprites = isPlaying && animationFrames.length > 0 
      ? animationFrames[currentFrame]?.sprites || sprites
      : sprites;

    return (
      <div className="relative bg-white rounded-lg h-64 overflow-hidden border-2 border-gray-300">
        {currentSprites.map((sprite) => (
          sprite.visible && (
            <div
              key={sprite.id}
              className="absolute transition-all duration-300 cursor-pointer flex items-center justify-center font-bold"
              style={{
                left: `${sprite.x}px`,
                top: `${sprite.y}px`,
                transform: `rotate(${sprite.rotation}deg)`,
                color: sprite.color,
                fontSize: `${sprite.size}px`,
                width: `${sprite.size}px`,
                height: `${sprite.size}px`,
              }}
              onClick={() => setSelectedSprite(sprite.id)}
            >
              {sprite.name.split(' ')[0]}
            </div>
          )
        ))}
        {!isPlaying && (
          <div className="absolute top-2 left-2 text-gray-500 text-sm">
            Stage - Click sprites to select
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          🎨 Scratch Animation Studio
        </h3>
        <div className="text-purple-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stage */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-medium mb-3 flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Sân khấu Animation
          </h4>
          {renderStage()}
          
          {/* Animation Controls */}
          <div className="mt-4 flex gap-2">
            <button
              onClick={playAnimation}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isPlaying ? 'Dừng' : 'Chạy'}
            </button>
            <button
              onClick={addFrame}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Layers className="w-4 h-4 mr-2" />
              Thêm Frame
            </button>
            <button
              onClick={clearAnimation}
              className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Xóa
            </button>
          </div>
          
          <div className="mt-2 text-gray-400 text-sm">
            Frames: {animationFrames.length} | Current: {currentFrame + 1}
          </div>
        </div>

        {/* Controls Panel */}
        <div>
          <h4 className="text-white font-medium mb-3 flex items-center">
            <Palette className="w-4 h-4 mr-2" />
            Điều khiển Sprite
          </h4>
          
          {/* Sprite Selection */}
          <div className="space-y-2 mb-4">
            {sprites.map((sprite) => (
              <button
                key={sprite.id}
                onClick={() => setSelectedSprite(sprite.id)}
                className={`w-full p-2 rounded-lg text-left transition-all ${
                  selectedSprite === sprite.id
                    ? 'bg-purple-500/20 border-purple-500/50 border'
                    : 'bg-gray-800/50 border border-gray-600 hover:bg-gray-700/50'
                }`}
              >
                <div className="text-white text-sm">{sprite.name}</div>
              </button>
            ))}
          </div>

          {/* Sprite Properties */}
          {selectedSprite && (
            <div className="space-y-3">
              <div>
                <label className="text-gray-400 text-sm block mb-1">Vị trí X</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={sprites.find(s => s.id === selectedSprite)?.x || 0}
                  onChange={(e) => updateSpriteProperty(selectedSprite, 'x', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="text-gray-400 text-sm block mb-1">Vị trí Y</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={sprites.find(s => s.id === selectedSprite)?.y || 0}
                  onChange={(e) => updateSpriteProperty(selectedSprite, 'y', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="text-gray-400 text-sm block mb-1">Xoay (độ)</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={sprites.find(s => s.id === selectedSprite)?.rotation || 0}
                  onChange={(e) => updateSpriteProperty(selectedSprite, 'rotation', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="text-gray-400 text-sm block mb-1">Kích thước</label>
                <input
                  type="range"
                  min="20"
                  max="80"
                  value={sprites.find(s => s.id === selectedSprite)?.size || 50}
                  onChange={(e) => updateSpriteProperty(selectedSprite, 'size', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          )}

          {/* Challenges */}
          <div className="mt-6">
            <h4 className="text-white font-medium mb-3">Thử thách:</h4>
            <div className="space-y-2">
              {challenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className="p-3 bg-gray-800/50 rounded-lg border border-gray-600"
                >
                  <div className="text-white text-sm font-medium">{challenge.title}</div>
                  <div className="text-gray-400 text-xs mb-2">{challenge.description}</div>
                  <button
                    onClick={() => completeChallenge(challenge.id)}
                    className="text-yellow-400 text-xs hover:text-yellow-300"
                  >
                    Hoàn thành (+{challenge.points} điểm)
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {score >= 50 && (
        <button
          onClick={() => onComplete(true, score)}
          className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
        >
          Hoàn thành Animation Studio ✓
        </button>
      )}
    </div>
  );
}
