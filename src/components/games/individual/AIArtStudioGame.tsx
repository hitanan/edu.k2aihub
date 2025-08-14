'use client';

import React, { useState, useEffect } from 'react';
import { Palette, Wand2, Sparkles, Eye, Target, Lightbulb, Camera, Star, Download, RefreshCw } from 'lucide-react';

interface ArtStyle {
  id: string;
  name: string;
  description: string;
  basePrompt: string;
  difficulty: number;
  color: string;
  icon: string;
}

interface ArtChallenge {
  id: string;
  title: string;
  description: string;
  targetStyle: string;
  requiredElements: string[];
  hints: string[];
  maxScore: number;
  timeLimit: number;
}

interface GeneratedArt {
  id: string;
  prompt: string;
  style: string;
  quality: number;
  creativity: number;
  accuracy: number;
  timestamp: number;
  preview: string;
}

const ART_STYLES: ArtStyle[] = [
  {
    id: 'photorealistic',
    name: 'Chân Thực',
    description: 'Hình ảnh giống như chụp từ camera thật',
    basePrompt: 'photorealistic, high detail, professional photography',
    difficulty: 1,
    color: 'blue',
    icon: '📸',
  },
  {
    id: 'digital-art',
    name: 'Nghệ Thuật Số',
    description: 'Phong cách digital art hiện đại',
    basePrompt: 'digital art, concept art, trending on artstation',
    difficulty: 2,
    color: 'purple',
    icon: '🎨',
  },
  {
    id: 'anime',
    name: 'Anime/Manga',
    description: 'Phong cách anime Nhật Bản',
    basePrompt: 'anime style, manga, japanese animation',
    difficulty: 2,
    color: 'pink',
    icon: '🌸',
  },
  {
    id: 'oil-painting',
    name: 'Tranh Sơn Dầu',
    description: 'Phong cách tranh sơn dầu cổ điển',
    basePrompt: 'oil painting, classical art, renaissance style',
    difficulty: 3,
    color: 'amber',
    icon: '🖼️',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Tương lai dystopian với neon và công nghệ',
    basePrompt: 'cyberpunk, neon lights, futuristic, sci-fi',
    difficulty: 3,
    color: 'cyan',
    icon: '🌆',
  },
  {
    id: 'watercolor',
    name: 'Màu Nước',
    description: 'Phong cách vẽ màu nước mềm mại',
    basePrompt: 'watercolor painting, soft colors, artistic',
    difficulty: 2,
    color: 'green',
    icon: '🎭',
  },
];

const ART_CHALLENGES: ArtChallenge[] = [
  {
    id: 'portrait-basic',
    title: 'Chân Dung Cơ Bản',
    description: 'Tạo một chân dung người với ánh sáng tự nhiên',
    targetStyle: 'photorealistic',
    requiredElements: ['portrait', 'natural lighting', 'human face'],
    hints: [
      'Sử dụng "natural lighting" để có ánh sáng đẹp',
      'Thêm "high detail" để tăng độ sắc nét',
      'Thử "professional photography" cho chất lượng cao',
    ],
    maxScore: 100,
    timeLimit: 180,
  },
  {
    id: 'fantasy-landscape',
    title: 'Phong Cảnh Kỳ Ảo',
    description: 'Tạo một thế giới fantasy với phép thuật và sinh vật thần thoại',
    targetStyle: 'digital-art',
    requiredElements: ['fantasy', 'magical', 'landscape', 'creatures'],
    hints: [
      'Dùng "epic fantasy" để tạo cảm giác hùng vĩ',
      'Thêm "magical creatures" cho sinh vật thần thoại',
      'Sử dụng "dramatic lighting" cho ánh sáng ấn tượng',
    ],
    maxScore: 150,
    timeLimit: 240,
  },
  {
    id: 'anime-character',
    title: 'Nhân Vật Anime',
    description: 'Thiết kế một nhân vật anime với trang phục đặc biệt',
    targetStyle: 'anime',
    requiredElements: ['anime girl', 'colorful outfit', 'detailed eyes'],
    hints: [
      'Dùng "anime girl" hoặc "anime boy" cho nhân vật',
      'Thêm "detailed eyes" để có đôi mắt đẹp',
      'Sử dụng "colorful outfit" cho trang phục nổi bật',
    ],
    maxScore: 120,
    timeLimit: 200,
  },
];

const PROMPT_KEYWORDS = {
  quality: ['high quality', 'masterpiece', 'best quality', '8k', '4k', 'ultra detailed'],
  lighting: ['natural lighting', 'dramatic lighting', 'soft lighting', 'golden hour', 'studio lighting'],
  composition: ['close-up', 'wide shot', 'portrait', 'full body', 'profile view'],
  mood: ['happy', 'mysterious', 'epic', 'peaceful', 'dramatic', 'magical'],
  colors: ['vibrant colors', 'pastel colors', 'monochrome', 'warm colors', 'cool colors'],
};

export default function AIArtStudioGame() {
  const [currentChallenge, setCurrentChallenge] = useState<ArtChallenge | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<ArtStyle>(ART_STYLES[0]);
  const [prompt, setPrompt] = useState('');
  const [generatedArt, setGeneratedArt] = useState<GeneratedArt | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);
  const [gallery, setGallery] = useState<GeneratedArt[]>([]);

  // Timer for challenges
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (currentChallenge && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentChallenge, timeLeft]);

  const generateArt = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate AI art generation with realistic timing
    setTimeout(
      () => {
        const fullPrompt = `${prompt}, ${selectedStyle.basePrompt}`;

        // Calculate quality scores based on prompt complexity and style match
        let quality = Math.min(100, 50 + Math.random() * 50);
        const creativity = Math.min(100, 40 + Math.random() * 60);
        let accuracy = 70;

        // Bonus for using quality keywords
        PROMPT_KEYWORDS.quality.forEach((keyword) => {
          if (fullPrompt.toLowerCase().includes(keyword)) {
            quality += 10;
          }
        });

        // Check challenge requirements
        if (currentChallenge) {
          let matches = 0;
          currentChallenge.requiredElements.forEach((element) => {
            if (fullPrompt.toLowerCase().includes(element.toLowerCase())) {
              matches++;
              accuracy += 10;
            }
          });

          if (selectedStyle.id === currentChallenge.targetStyle) {
            accuracy += 20;
          }

          accuracy = Math.min(100, accuracy);
        }

        // Generate art preview (simulated with emoji combinations)
        const artPreviews = [
          '🎨🌟✨',
          '🖼️🎭🌈',
          '🎪🎨🦄',
          '🌸🎨🌙',
          '🔥🎨⚡',
          '🌊🎨🐚',
          '🍃🎨🌺',
          '⭐🎨🌌',
          '🎨🦋🌸',
          '🎨🔮✨',
        ];

        const newArt: GeneratedArt = {
          id: Date.now().toString(),
          prompt: fullPrompt,
          style: selectedStyle.name,
          quality: Math.round(quality),
          creativity: Math.round(creativity),
          accuracy: Math.round(accuracy),
          timestamp: Date.now(),
          preview: artPreviews[Math.floor(Math.random() * artPreviews.length)],
        };

        setGeneratedArt(newArt);
        setGallery((prev) => [newArt, ...prev.slice(0, 8)]);

        // Calculate score
        const artScore = Math.round((quality + creativity + accuracy) / 3);
        setScore((prev) => prev + artScore);

        // Level up based on score
        if (score > 0 && score % 500 === 0) {
          setLevel((prev) => prev + 1);
        }

        setIsGenerating(false);
      },
      2000 + Math.random() * 3000,
    ); // 2-5 seconds generation time
  };

  const startChallenge = (challenge: ArtChallenge) => {
    setCurrentChallenge(challenge);
    setTimeLeft(challenge.timeLimit);
    setPrompt('');
    setGeneratedArt(null);
  };

  const endChallenge = () => {
    if (currentChallenge && generatedArt) {
      const challengeScore = Math.round((generatedArt.accuracy / 100) * currentChallenge.maxScore);
      setScore((prev) => prev + challengeScore);
    }
    setCurrentChallenge(null);
    setTimeLeft(0);
  };

  const addKeyword = (keyword: string) => {
    if (!prompt.includes(keyword)) {
      setPrompt((prev) => (prev ? `${prev}, ${keyword}` : keyword));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-800 rounded-xl text-white">
      {/* Tutorial Modal */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-xl max-w-2xl mx-4">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">🎨 Hướng Dẫn AI Art Studio</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                • <strong>Viết Prompt:</strong> Mô tả chi tiết những gì bạn muốn tạo
              </p>
              <p>
                • <strong>Chọn Style:</strong> Mỗi style có đặc điểm và độ khó khác nhau
              </p>
              <p>
                • <strong>Keywords:</strong> Sử dụng từ khóa gợi ý để cải thiện chất lượng
              </p>
              <p>
                • <strong>Challenges:</strong> Hoàn thành thử thách để nhận điểm cao
              </p>
              <p>
                • <strong>Gallery:</strong> Lưu trữ và chia sẻ tác phẩm của bạn
              </p>
            </div>
            <button
              onClick={() => setShowTutorial(false)}
              className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-bold"
            >
              Bắt đầu sáng tạo! ✨
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Palette className="w-8 h-8 text-pink-400" />
          <h1 className="text-3xl font-bold">AI Art Studio</h1>
          <Sparkles className="w-8 h-8 text-purple-400" />
        </div>

        <div className="flex justify-center gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{score}</div>
            <div className="text-gray-300">Điểm</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{level}</div>
            <div className="text-gray-300">Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{gallery.length}</div>
            <div className="text-gray-300">Tác phẩm</div>
          </div>
        </div>
      </div>

      {/* Challenge Status */}
      {currentChallenge && (
        <div className="mb-6 p-4 bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg border border-purple-400">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-purple-300">{currentChallenge.title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm bg-purple-700 px-2 py-1 rounded">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
              <button onClick={endChallenge} className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded">
                Kết thúc
              </button>
            </div>
          </div>
          <p className="text-purple-100 mb-2">{currentChallenge.description}</p>
          <div className="text-sm text-purple-200">
            <strong>Yêu cầu:</strong> {currentChallenge.requiredElements.join(', ')}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Art Creation Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Style Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🎭 Chọn Phong Cách</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {ART_STYLES.map((style) => (
                <div
                  key={style.id}
                  onClick={() => setSelectedStyle(style)}
                  className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${
                    selectedStyle.id === style.id
                      ? 'border-pink-400 bg-pink-900'
                      : 'border-gray-600 bg-gray-700 hover:border-gray-500'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{style.icon}</div>
                    <div className="font-bold">{style.name}</div>
                    <div className="text-xs text-gray-400 mt-1">{style.description}</div>
                    <div className="flex justify-center mt-2">
                      {[...Array(style.difficulty)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt Input */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Wand2 className="w-6 h-6" />
              Viết Prompt
            </h2>

            <div className="space-y-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Mô tả chi tiết những gì bạn muốn tạo... VD: một cô gái anime với mái tóc xanh, đứng trong vườn hoa anh đào"
                className="w-full h-32 p-4 bg-gray-700 rounded-lg border border-gray-600 text-white resize-none"
                disabled={isGenerating}
              />

              {/* Keyword Suggestions */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(PROMPT_KEYWORDS).map(([category, keywords]) => (
                  <div key={category} className="bg-gray-700 p-3 rounded-lg">
                    <h4 className="font-bold text-sm mb-2 capitalize">{category}:</h4>
                    <div className="flex flex-wrap gap-1">
                      {keywords.slice(0, 3).map((keyword) => (
                        <button
                          key={keyword}
                          onClick={() => addKeyword(keyword)}
                          className="text-xs bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded transition-colors"
                          disabled={isGenerating}
                        >
                          {keyword}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={generateArt}
                disabled={!prompt.trim() || isGenerating}
                className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Đang tạo nghệ thuật...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Tạo Nghệ Thuật AI
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generated Art Display */}
          {generatedArt && (
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6" />
                Tác Phẩm Vừa Tạo
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <div className="text-6xl mb-4">{generatedArt.preview}</div>
                  <div className="text-sm text-gray-400">Xem trước tác phẩm</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <strong>Prompt:</strong> {generatedArt.prompt}
                  </div>
                  <div>
                    <strong>Style:</strong> {generatedArt.style}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{generatedArt.quality}%</div>
                      <div className="text-xs text-gray-400">Chất lượng</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{generatedArt.creativity}%</div>
                      <div className="text-xs text-gray-400">Sáng tạo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{generatedArt.accuracy}%</div>
                      <div className="text-xs text-gray-400">Độ chính xác</div>
                    </div>
                  </div>

                  <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Lưu vào Gallery
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Challenges */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Thử Thách
            </h3>

            <div className="space-y-3">
              {ART_CHALLENGES.map((challenge) => (
                <div key={challenge.id} className="bg-gray-800 p-4 rounded-lg">
                  <div className="font-bold mb-1">{challenge.title}</div>
                  <div className="text-sm text-gray-400 mb-2">{challenge.description}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-yellow-400">{challenge.maxScore} điểm</span>
                    <button
                      onClick={() => startChallenge(challenge)}
                      disabled={!!currentChallenge}
                      className="text-sm bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed px-3 py-1 rounded transition-colors"
                    >
                      Bắt đầu
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Camera className="w-6 h-6" />
              Gallery ({gallery.length}/9)
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {gallery.map((art) => (
                <div key={art.id} className="bg-gray-800 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-1">{art.preview}</div>
                  <div className="text-xs text-gray-400">{art.style}</div>
                  <div className="text-xs text-yellow-400">
                    {Math.round((art.quality + art.creativity + art.accuracy) / 3)}%
                  </div>
                </div>
              ))}

              {/* Empty slots */}
              {[...Array(Math.max(0, 9 - gallery.length))].map((_, i) => (
                <div key={`empty-${i}`} className="bg-gray-800 p-3 rounded-lg text-center opacity-50">
                  <div className="text-2xl mb-1">📷</div>
                  <div className="text-xs text-gray-500">Trống</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-6 h-6" />
              Mẹo Hay
            </h3>

            <div className="space-y-3 text-sm text-gray-300">
              <div>💡 Sử dụng từ khóa &quot;high quality&quot; để tăng chất lượng</div>
              <div>🎨 Mô tả chi tiết màu sắc và ánh sáng</div>
              <div>📐 Chỉ định tỷ lệ: &quot;portrait&quot;, &quot;landscape&quot;, &quot;square&quot;</div>
              <div>⭐ Thêm tên artist nổi tiếng để có style đặc biệt</div>
              <div>🔥 Dùng &quot;trending on artstation&quot; cho style hiện đại</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
