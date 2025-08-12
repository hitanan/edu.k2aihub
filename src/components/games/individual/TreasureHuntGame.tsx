'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

interface Treasure {
  x: number;
  y: number;
  type: 'gold' | 'gem' | 'artifact' | 'key';
  value: number;
  collected: boolean;
}

interface Enemy {
  x: number;
  y: number;
  type: 'guard' | 'trap' | 'monster';
  damage: number;
  pattern?: string; // Movement pattern for guards
}

interface Level {
  id: number;
  name: string;
  description: string;
  dimensions: { width: number; height: number };
  playerStart: Position;
  exit: Position;
  treasures: Treasure[];
  enemies: Enemy[];
  walls: Position[];
  timeLimit: number;
  minTreasures: number; // Minimum treasures needed to unlock exit
  educational: {
    concept: string;
    skill: string;
    lesson: string;
  };
}

interface TreasureHuntGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart?: () => void;
}

export function TreasureHuntGame({ onComplete, timeLeft, onRestart }: TreasureHuntGameProps) {
  const levels: Level[] = [
    {
      id: 1,
      name: 'Kho báu cổ đại',
      description: 'Khám phá ngôi đền cổ và thu thập kho báu',
      dimensions: { width: 8, height: 6 },
      playerStart: { x: 0, y: 0 },
      exit: { x: 7, y: 5 },
      treasures: [
        { x: 2, y: 1, type: 'gold', value: 20, collected: false },
        { x: 4, y: 2, type: 'gem', value: 30, collected: false },
        { x: 6, y: 3, type: 'artifact', value: 50, collected: false },
      ],
      enemies: [
        { x: 3, y: 2, type: 'trap', damage: 10 },
        { x: 5, y: 4, type: 'guard', damage: 15, pattern: 'patrol' },
      ],
      walls: [
        { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 3 },
        { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 },
      ],
      timeLimit: 120,
      minTreasures: 2,
      educational: {
        concept: 'Pathfinding & Strategy',
        skill: 'Tư duy logic và lập kế hoạch',
        lesson: 'Học cách tối ưu hóa đường đi và quản lý rủi ro',
      },
    },
    {
      id: 2,
      name: 'Hang động bí ẩn',
      description: 'Thám hiểm hang động đầy nguy hiểm',
      dimensions: { width: 10, height: 8 },
      playerStart: { x: 0, y: 3 },
      exit: { x: 9, y: 4 },
      treasures: [
        { x: 2, y: 1, type: 'key', value: 40, collected: false },
        { x: 4, y: 6, type: 'gold', value: 25, collected: false },
        { x: 6, y: 2, type: 'gem', value: 35, collected: false },
        { x: 7, y: 6, type: 'artifact', value: 60, collected: false },
      ],
      enemies: [
        { x: 3, y: 3, type: 'monster', damage: 20 },
        { x: 5, y: 4, type: 'trap', damage: 15 },
        { x: 7, y: 2, type: 'guard', damage: 18, pattern: 'circle' },
      ],
      walls: [
        { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 1 },
        { x: 4, y: 3 }, { x: 5, y: 2 }, { x: 6, y: 4 },
        { x: 2, y: 5 }, { x: 3, y: 6 }, { x: 4, y: 5 },
      ],
      timeLimit: 180,
      minTreasures: 3,
      educational: {
        concept: 'Risk Management',
        skill: 'Đánh giá rủi ro và ra quyết định',
        lesson: 'Cân bằng giữa phần thưởng và rủi ro',
      },
    },
    {
      id: 3,
      name: 'Lâu đài ma quái',
      description: 'Chinh phục lâu đài đầy thử thách',
      dimensions: { width: 12, height: 10 },
      playerStart: { x: 0, y: 5 },
      exit: { x: 11, y: 5 },
      treasures: [
        { x: 2, y: 2, type: 'gold', value: 30, collected: false },
        { x: 4, y: 7, type: 'key', value: 50, collected: false },
        { x: 6, y: 1, type: 'gem', value: 40, collected: false },
        { x: 8, y: 8, type: 'artifact', value: 70, collected: false },
        { x: 10, y: 3, type: 'gold', value: 35, collected: false },
      ],
      enemies: [
        { x: 3, y: 4, type: 'guard', damage: 25, pattern: 'zigzag' },
        { x: 5, y: 5, type: 'monster', damage: 30 },
        { x: 7, y: 3, type: 'trap', damage: 20 },
        { x: 9, y: 6, type: 'guard', damage: 22, pattern: 'patrol' },
      ],
      walls: [
        { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 2 },
        { x: 4, y: 3 }, { x: 5, y: 1 }, { x: 6, y: 2 },
        { x: 2, y: 7 }, { x: 3, y: 8 }, { x: 4, y: 9 },
        { x: 7, y: 7 }, { x: 8, y: 6 }, { x: 9, y: 7 },
      ],
      timeLimit: 240,
      minTreasures: 4,
      educational: {
        concept: 'Advanced Strategy',
        skill: 'Chiến lược phức tạp và thích ứng',
        lesson: 'Xử lý tình huống phức tạp và đa mục tiêu',
      },
    },
  ];

  const [currentLevel, setCurrentLevel] = useState(0);
  const [playerPosition, setPlayerPosition] = useState<Position>({ x: 0, y: 0 });
  const [playerHealth, setPlayerHealth] = useState(100);
  const [score, setScore] = useState(0);
  const [treasures, setTreasures] = useState<Treasure[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const [moves, setMoves] = useState(0);
  const [message, setMessage] = useState('');
  const [isMoving, setIsMoving] = useState(false);

  const level = levels[currentLevel];

  // Initialize level
  useEffect(() => {
    if (level) {
      setPlayerPosition(level.playerStart);
      setPlayerHealth(100);
      setTreasures(level.treasures.map(t => ({ ...t, collected: false })));
      setGameState('playing');
      setMoves(0);
      setMessage('Tìm kho báu và thoát khỏi mê cung!');
    }
  }, [currentLevel, level]);

  // Check time limit
  useEffect(() => {
    if (timeLeft <= 0 && gameState === 'playing') {
      setGameState('lost');
      setMessage('Hết thời gian! Thử lại nhé.');
      setTimeout(() => {
        if (onRestart) onRestart();
        else onComplete(false, score);
      }, 2000);
    }
  }, [timeLeft, gameState, onComplete, onRestart, score]);

  // Check win condition
  useEffect(() => {
    if (gameState === 'won') {
      const levelBonus = (currentLevel + 1) * 50;
      const timeBonus = Math.max(0, timeLeft * 2);
      const healthBonus = Math.max(0, (playerHealth - 50) * 2);
      const finalScore = score + levelBonus + timeBonus + healthBonus;
      
      if (currentLevel < levels.length - 1) {
        setTimeout(() => {
          setCurrentLevel(prev => prev + 1);
          setScore(finalScore);
        }, 2000);
      } else {
        setTimeout(() => {
          onComplete(true, finalScore);
        }, 2000);
      }
    }
  }, [gameState, currentLevel, levels.length, score, timeLeft, playerHealth, onComplete]);

  const isValidMove = useCallback((newPos: Position) => {
    if (newPos.x < 0 || newPos.x >= level.dimensions.width || 
        newPos.y < 0 || newPos.y >= level.dimensions.height) {
      return false;
    }
    
    // Check walls
    if (level.walls.some(wall => wall.x === newPos.x && wall.y === newPos.y)) {
      return false;
    }
    
    return true;
  }, [level]);

  const checkCollisions = useCallback((pos: Position) => {
    // Check treasures
    const treasureIndex = treasures.findIndex(
      t => !t.collected && t.x === pos.x && t.y === pos.y
    );
    
    if (treasureIndex >= 0) {
      setTreasures(prev => {
        const newTreasures = [...prev];
        newTreasures[treasureIndex].collected = true;
        return newTreasures;
      });
      
      setScore(prev => prev + treasures[treasureIndex].value);
      setMessage(`Tìm thấy ${treasures[treasureIndex].type}! +${treasures[treasureIndex].value} điểm`);
      
      setTimeout(() => setMessage(''), 2000);
    }
    
    // Check enemies
    const enemy = level.enemies.find(e => e.x === pos.x && e.y === pos.y);
    if (enemy) {
      setPlayerHealth(prev => {
        const newHealth = Math.max(0, prev - enemy.damage);
        if (newHealth <= 0) {
          setGameState('lost');
          setMessage('Bạn đã bị tiêu diệt!');
        } else {
          setMessage(`Bị tấn công! -${enemy.damage} HP`);
          setTimeout(() => setMessage(''), 2000);
        }
        return newHealth;
      });
    }
    
    // Check exit
    if (pos.x === level.exit.x && pos.y === level.exit.y) {
      const collectedCount = treasures.filter(t => t.collected).length;
      if (collectedCount >= level.minTreasures) {
        setGameState('won');
        setMessage('Hoàn thành level!');
      } else {
        setMessage(`Cần thu thập thêm ${level.minTreasures - collectedCount} kho báu để mở khóa lối ra!`);
        setTimeout(() => setMessage(''), 3000);
      }
    }
  }, [treasures, level]);

  const movePlayer = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    if (isMoving || gameState !== 'playing') return;
    
    setIsMoving(true);
    const { x, y } = playerPosition;
    const newPos = { x, y };
    
    switch (direction) {
      case 'up': newPos.y = Math.max(0, y - 1); break;
      case 'down': newPos.y = Math.min(level.dimensions.height - 1, y + 1); break;
      case 'left': newPos.x = Math.max(0, x - 1); break;
      case 'right': newPos.x = Math.min(level.dimensions.width - 1, x + 1); break;
    }
    
    if (isValidMove(newPos)) {
      setPlayerPosition(newPos);
      setMoves(prev => prev + 1);
      checkCollisions(newPos);
    }
    
    setTimeout(() => setIsMoving(false), 200);
  }, [playerPosition, isMoving, gameState, level, isValidMove, checkCollisions]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp': 
        case 'w': 
        case 'W': 
          e.preventDefault();
          movePlayer('up');
          break;
        case 'ArrowDown': 
        case 's': 
        case 'S':
          e.preventDefault();
          movePlayer('down');
          break;
        case 'ArrowLeft': 
        case 'a': 
        case 'A':
          e.preventDefault();
          movePlayer('left');
          break;
        case 'ArrowRight': 
        case 'd': 
        case 'D':
          e.preventDefault();
          movePlayer('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [movePlayer]);

  const getCellContent = (x: number, y: number) => {
    if (playerPosition.x === x && playerPosition.y === y) {
      return { content: '🧙‍♂️', className: 'bg-blue-500 animate-pulse' };
    }
    
    if (level.exit.x === x && level.exit.y === y) {
      const collectedCount = treasures.filter(t => t.collected).length;
      const isUnlocked = collectedCount >= level.minTreasures;
      return { 
        content: isUnlocked ? '🚪' : '🔒', 
        className: isUnlocked ? 'bg-green-500 animate-bounce' : 'bg-gray-600' 
      };
    }
    
    if (level.walls.some(wall => wall.x === x && wall.y === y)) {
      return { content: '🧱', className: 'bg-gray-800' };
    }
    
    const treasure = treasures.find(t => !t.collected && t.x === x && t.y === y);
    if (treasure) {
      const icons = { gold: '🪙', gem: '💎', artifact: '🏺', key: '🗝️' };
      return { 
        content: icons[treasure.type], 
        className: 'bg-yellow-400 animate-pulse' 
      };
    }
    
    const enemy = level.enemies.find(e => e.x === x && e.y === y);
    if (enemy) {
      const icons = { guard: '⚔️', trap: '🕳️', monster: '👹' };
      return { 
        content: icons[enemy.type], 
        className: 'bg-red-500 animate-bounce' 
      };
    }
    
    return { content: '', className: 'bg-gray-200/20' };
  };

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white">🗺️ Treasure Hunt Adventure</h3>
          <div className="text-white text-sm">
            Level {currentLevel + 1}/{levels.length}
          </div>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
          <h4 className="text-white font-semibold mb-2">{level.name}</h4>
          <p className="text-gray-300 text-sm mb-2">{level.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-400">
            <span>⏱️ {timeLeft}s</span>
            <span>💖 {playerHealth} HP</span>
            <span>🎯 {score} điểm</span>
            <span>👟 {moves} bước</span>
          </div>
        </div>

        {/* Educational Info */}
        <div className="bg-purple-900/30 rounded-lg p-3 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
            <div>
              <span className="text-purple-200 font-medium">Khái niệm:</span>
              <div className="text-purple-100">{level.educational.concept}</div>
            </div>
            <div>
              <span className="text-purple-200 font-medium">Kỹ năng:</span>
              <div className="text-purple-100">{level.educational.skill}</div>
            </div>
            <div>
              <span className="text-purple-200 font-medium">Bài học:</span>
              <div className="text-purple-100">{level.educational.lesson}</div>
            </div>
          </div>
        </div>

        {/* Status and Message */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4 text-sm">
            <span className="text-yellow-400">
              🏆 Thu thập: {treasures.filter(t => t.collected).length}/{level.minTreasures}
            </span>
          </div>
          {message && (
            <div className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-lg text-sm animate-pulse">
              {message}
            </div>
          )}
        </div>
      </div>

      {/* Game Grid */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
            <div className="grid gap-1" style={{ 
              gridTemplateColumns: `repeat(${level.dimensions.width}, minmax(0, 1fr))` 
            }}>
              {Array.from({ length: level.dimensions.height }, (_, y) =>
                Array.from({ length: level.dimensions.width }, (_, x) => {
                  const cellData = getCellContent(x, y);
                  return (
                    <div
                      key={`${x}-${y}`}
                      className={`
                        w-8 h-8 md:w-10 md:h-10 rounded-sm flex items-center justify-center text-sm font-bold
                        transition-all duration-200 border border-gray-600/30
                        ${cellData.className}
                      `}
                    >
                      {cellData.content}
                    </div>
                  );
                })
              ).flat()}
            </div>
          </div>
        </div>

        {/* Controls and Legend */}
        <div className="w-full lg:w-80">
          {/* Controls */}
          <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
            <h4 className="text-white font-medium mb-3">Điều khiển</h4>
            <div className="grid grid-cols-3 gap-2 max-w-48 mx-auto">
              <div></div>
              <button
                onClick={() => movePlayer('up')}
                disabled={isMoving}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-2 px-3 rounded-lg transition-colors"
              >
                ↑
              </button>
              <div></div>
              <button
                onClick={() => movePlayer('left')}
                disabled={isMoving}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-2 px-3 rounded-lg transition-colors"
              >
                ←
              </button>
              <div className="flex items-center justify-center text-white text-xs">W,A,S,D</div>
              <button
                onClick={() => movePlayer('right')}
                disabled={isMoving}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-2 px-3 rounded-lg transition-colors"
              >
                →
              </button>
              <div></div>
              <button
                onClick={() => movePlayer('down')}
                disabled={isMoving}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-2 px-3 rounded-lg transition-colors"
              >
                ↓
              </button>
              <div></div>
            </div>
            <p className="text-gray-400 text-xs text-center mt-2">
              Hoặc sử dụng phím mũi tên / WASD
            </p>
          </div>

          {/* Legend */}
          <div className="bg-gray-800/50 rounded-xl p-4">
            <h4 className="text-white font-medium mb-2">Chú giải</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <span>🧙‍♂️</span>
                <span className="text-gray-300">Nhân vật (bạn)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🚪</span>
                <span className="text-gray-300">Lối ra (mở khóa)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span className="text-gray-300">Lối ra (bị khóa)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🪙💎🏺🗝️</span>
                <span className="text-gray-300">Kho báu</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚔️👹🕳️</span>
                <span className="text-gray-300">Kẻ thù/Bẫy</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🧱</span>
                <span className="text-gray-300">Tường</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
