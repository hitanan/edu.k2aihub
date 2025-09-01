'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Users, Target, Brain, Heart, MessageSquare, Play, RotateCcw, Award } from 'lucide-react';

interface CulturalIntelligenceNavigator3DProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface CulturalScenario {
  id: string;
  title: string;
  country: string;
  context: string;
  situation: string;
  options: Array<{
    id: string;
    action: string;
    culturalSensitivity: number;
    effectiveness: number;
    explanation: string;
  }>;
  correctOption: string;
  points: number;
}

const CULTURAL_SCENARIOS: CulturalScenario[] = [
  {
    id: 'japan-business-meeting',
    title: 'Cuộc Họp Kinh Doanh tại Nhật Bản',
    country: 'Japan',
    context: 'Bạn tham gia cuộc họp quan trọng với đối tác Nhật Bản',
    situation: 'Trong cuộc họp, bạn nhận thấy có một vấn đề trong đề xuất của họ. Bạn nên xử lý như thế nào?',
    options: [
      {
        id: 'direct-confrontation',
        action: 'Chỉ ra vấn đề trực tiếp trước mặt mọi người',
        culturalSensitivity: 2,
        effectiveness: 3,
        explanation: 'Ở Nhật Bản, việc chỉ trích công khai có thể làm người khác "mất mặt" và được coi là bất lịch sự.',
      },
      {
        id: 'private-discussion',
        action: 'Đề nghị thảo luận riêng sau cuộc họp',
        culturalSensitivity: 9,
        effectiveness: 8,
        explanation: 'Đây là cách tiếp cận phù hợp với văn hóa Nhật, tránh làm người khác xấu hổ trước mặt đám đông.',
      },
      {
        id: 'ignore-problem',
        action: 'Im lặng và không nhắc đến vấn đề',
        culturalSensitivity: 6,
        effectiveness: 2,
        explanation: 'Tuy tôn trọng văn hóa nhưng không giải quyết được vấn đề kinh doanh.',
      },
    ],
    correctOption: 'private-discussion',
    points: 150,
  },
  {
    id: 'india-religious-festival',
    title: 'Lễ Hội Tôn Giáo tại Ấn Độ',
    country: 'India',
    context: 'Bạn được mời tham gia lễ hội Diwali cùng đồng nghiệp Ấn Độ',
    situation: 'Họ mời bạn tham gia nghi lễ tôn giáo. Bạn không cùng tôn giáo nhưng muốn thể hiện sự tôn trọng.',
    options: [
      {
        id: 'decline-politely',
        action: 'Từ chối một cách lịch sự vì khác tôn giáo',
        culturalSensitivity: 5,
        effectiveness: 4,
        explanation: 'Tuy lịch sự nhưng có thể bỏ lỡ cơ hội xây dựng mối quan hệ.',
      },
      {
        id: 'participate-respectfully',
        action: 'Tham gia với thái độ tôn trọng và học hỏi',
        culturalSensitivity: 9,
        effectiveness: 9,
        explanation: 'Thể hiện sự cởi mở và tôn trọng văn hóa, tạo dựng lòng tin với đồng nghiệp.',
      },
      {
        id: 'make-excuses',
        action: 'Tìm cớ để tránh không tham gia',
        culturalSensitivity: 2,
        effectiveness: 2,
        explanation: 'Có thể được hiểu là thiếu tôn trọng và ảnh hưởng đến mối quan hệ.',
      },
    ],
    correctOption: 'participate-respectfully',
    points: 180,
  },
  {
    id: 'arab-business-negotiation',
    title: 'Đàm Phán Kinh Doanh tại UAE',
    country: 'UAE',
    context: 'Bạn đàm phán hợp đồng quan trọng với đối tác Ả Rập',
    situation: 'Cuộc đàm phán kéo dài và đối tác đề nghị dừng lại để cầu nguyện. Phản ứng của bạn?',
    options: [
      {
        id: 'show-impatience',
        action: 'Thể hiện sự bực bội vì phải dừng đàm phán',
        culturalSensitivity: 1,
        effectiveness: 1,
        explanation: 'Rất thiếu tôn trọng và có thể làm hỏng toàn bộ thương vụ.',
      },
      {
        id: 'wait-respectfully',
        action: 'Chờ đợi một cách tôn trọng và sử dụng thời gian nghỉ',
        culturalSensitivity: 10,
        effectiveness: 9,
        explanation: 'Thể hiện sự tôn trọng sâu sắc đối với tôn giáo và văn hóa của đối tác.',
      },
      {
        id: 'suggest-reschedule',
        action: 'Đề nghị dời cuộc họp sang thời gian khác',
        culturalSensitivity: 4,
        effectiveness: 3,
        explanation: 'Tuy có ý tốt nhưng có thể được hiểu là không hiểu văn hóa địa phương.',
      },
    ],
    correctOption: 'wait-respectfully',
    points: 200,
  },
];

const CulturalIntelligenceNavigator3DGame: React.FC<CulturalIntelligenceNavigator3DProps> = ({
  onComplete,
  timeLeft,
  onRestart,
}) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gamePhase, setGamePhase] = useState<'intro' | 'playing' | 'result' | 'completed'>('intro');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [culturalKnowledge, setCulturalKnowledge] = useState(50);
  const [answeredScenarios, setAnsweredScenarios] = useState<string[]>([]);

  const currentScenario = CULTURAL_SCENARIOS[currentScenarioIndex];

  useEffect(() => {
    // Ensure the game starts with a valid scenario
    if (!currentScenario) {
      setCurrentScenarioIndex(0);
    }
  }, [currentScenario]);

  const startGame = () => {
    setGamePhase('playing');
    setCurrentScenarioIndex(0);
    setScore(0);
    setCulturalKnowledge(50);
    setAnsweredScenarios([]);
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    const selectedChoice = currentScenario.options.find((opt) => opt.id === optionId);

    if (selectedChoice) {
      const isCorrect = optionId === currentScenario.correctOption;
      const earnedPoints = isCorrect ? currentScenario.points : Math.floor(currentScenario.points * 0.3);

      setScore((prev) => prev + earnedPoints);
      setCulturalKnowledge((prev) => Math.min(100, prev + (isCorrect ? 10 : -5)));
      setFeedback(selectedChoice.explanation);
      setAnsweredScenarios((prev) => [...prev, currentScenario.id]);

      setTimeout(() => {
        if (currentScenarioIndex < CULTURAL_SCENARIOS.length - 1) {
          setCurrentScenarioIndex((prev) => prev + 1);
          setSelectedOption(null);
          setFeedback('');
        } else {
          setGamePhase('completed');
          onComplete(true, score + earnedPoints);
        }
      }, 3000);
    }
  };

  const render3DCulturalEnvironment = () => (
    <div className="relative w-full h-80 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-xl border border-purple-500/30 overflow-hidden">
      {/* 3D Cultural Environment */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, rgba(79,70,229,0.6) 0%, rgba(147,51,234,0.4) 50%, rgba(37,99,235,0.6) 100%)`,
          perspective: '1000px',
        }}
      >
        {/* Cultural Elements based on current scenario */}
        {currentScenario?.country === 'Japan' && (
          <>
            {/* Traditional Japanese Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-red-900/60 to-red-700/40"></div>
            {/* Torii Gate */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-16 border-4 border-red-400 rounded-t-full bg-red-600/20"></div>
            </div>
            {/* Cherry Blossoms */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-pink-400 rounded-full animate-pulse"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${20 + Math.random() * 40}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </>
        )}

        {currentScenario?.country === 'India' && (
          <>
            {/* Indian Cultural Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-900/60 to-yellow-700/40"></div>
            {/* Temple Architecture */}
            <div className="absolute bottom-16 right-8">
              <div className="w-16 h-20 bg-gradient-to-t from-yellow-600 to-orange-500 rounded-t-full"></div>
              <div className="w-20 h-4 bg-orange-600 -translate-x-1"></div>
            </div>
            {/* Diwali Lights */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"
                style={{
                  left: `${10 + i * 7}%`,
                  top: `${60 + Math.random() * 20}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </>
        )}

        {currentScenario?.country === 'UAE' && (
          <>
            {/* Arabic Cultural Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-900/60 to-amber-700/40"></div>
            {/* Mosque Architecture */}
            <div className="absolute bottom-24 left-8">
              <div className="w-12 h-24 bg-gradient-to-t from-blue-700 to-cyan-500 rounded-t-full"></div>
              <div className="absolute -top-2 left-5 w-2 h-8 bg-gold-400"></div>
            </div>
            {/* Desert Stars */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 50}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </>
        )}

        {/* Cultural Avatar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="w-12 h-16 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-lg border-2 border-blue-300">
              {/* Avatar Head */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full border-2 border-purple-300">
                <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Cultural Sensitivity Indicator */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-1 bg-black/60 px-2 py-1 rounded">
                <Heart className="w-3 h-3 text-red-400" />
                <span className="text-xs text-white">{culturalKnowledge}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scenario Context HUD */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-purple-500/30">
          <div className="text-purple-400 text-sm font-bold mb-1">
            {currentScenario?.country.toUpperCase()} SCENARIO
          </div>
          <div className="text-xs text-gray-300">Cultural Intelligence: {culturalKnowledge}%</div>
          <div className="text-xs text-gray-300">
            Progress: {answeredScenarios.length + 1}/{CULTURAL_SCENARIOS.length}
          </div>
        </div>
      </div>
    </div>
  );

  if (gamePhase === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🌍</div>
            <h1 className="text-4xl font-bold text-white mb-4">Cultural Intelligence Navigator 3D</h1>
            <p className="text-xl text-purple-100 mb-8">
              Phát triển trí tuệ văn hóa qua các tình huống thực tế trên thế giới
            </p>
          </div>

          {render3DCulturalEnvironment()}

          <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Brain className="mr-3" />
              Trí Tuệ Văn Hóa (Cultural Intelligence)
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-purple-600/20 rounded-lg">
                <Globe className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Nhận Thức Văn Hóa</h3>
                <p className="text-purple-100 text-sm">Hiểu biết về các nền văn hóa khác nhau</p>
              </div>
              <div className="text-center p-4 bg-blue-600/20 rounded-lg">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Tương Tác Đa Văn Hóa</h3>
                <p className="text-blue-100 text-sm">Giao tiếp hiệu quả qua các nền văn hóa</p>
              </div>
              <div className="text-center p-4 bg-indigo-600/20 rounded-lg">
                <Target className="w-12 h-12 text-indigo-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Thích Ứng Hành Vi</h3>
                <p className="text-indigo-100 text-sm">Điều chỉnh hành vi phù hợp văn hóa</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Các Tình Huống Bạn Sẽ Trải Nghiệm:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {CULTURAL_SCENARIOS.map((scenario, index) => (
                  <div key={scenario.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <h4 className="text-white font-medium">{scenario.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{scenario.context}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-xs text-purple-300">📍 {scenario.country}</span>
                      <span className="text-xs text-yellow-400">+{scenario.points} điểm</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={startGame}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center text-xl"
            >
              <Play className="mr-3" size={24} />
              Khám Phá Văn Hóa Thế Giới
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'playing' && currentScenario) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{currentScenario.title}</h2>
            <div className="flex items-center justify-center space-x-4 text-purple-100 mb-6">
              <span>📍 {currentScenario.country}</span>
              <span>•</span>
              <span>
                Scenario {currentScenarioIndex + 1}/{CULTURAL_SCENARIOS.length}
              </span>
              <span>•</span>
              <span>⭐ {score} điểm</span>
            </div>

            {render3DCulturalEnvironment()}
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Bối Cảnh:</h3>
              <p className="text-purple-100 mb-4">{currentScenario.context}</p>

              <h3 className="text-xl font-bold text-white mb-4">Tình Huống:</h3>
              <p className="text-blue-100 text-lg">{currentScenario.situation}</p>
            </div>

            {!selectedOption ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <MessageSquare className="mr-2" />
                  Bạn sẽ xử lý như thế nào?
                </h3>
                {currentScenario.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 rounded-lg transition-all duration-200 text-left"
                  >
                    <div className="text-white font-medium mb-2">{option.action}</div>
                    <div className="flex space-x-4 text-sm">
                      <span className="text-purple-300">🤝 Văn hóa: {option.culturalSensitivity}/10</span>
                      <span className="text-blue-300">⚡ Hiệu quả: {option.effectiveness}/10</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <div
                  className={`p-6 rounded-lg border-2 ${
                    selectedOption === currentScenario.correctOption
                      ? 'bg-green-900/30 border-green-500/50'
                      : 'bg-red-900/30 border-red-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-4">
                    {selectedOption === currentScenario.correctOption ? (
                      <>
                        <div className="text-4xl">🎉</div>
                        <h3 className="text-xl font-bold text-green-400">Xuất Sắc!</h3>
                      </>
                    ) : (
                      <>
                        <div className="text-4xl">📚</div>
                        <h3 className="text-xl font-bold text-yellow-400">Học Hỏi Thêm!</h3>
                      </>
                    )}
                  </div>
                  <p className="text-white mb-4">{feedback}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-300">
                      Điểm nhận được: +
                      {selectedOption === currentScenario.correctOption
                        ? currentScenario.points
                        : Math.floor(currentScenario.points * 0.3)}
                    </div>
                    <div className="text-sm text-purple-300">Trí tuệ văn hóa: {culturalKnowledge}%</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="animate-pulse text-purple-400">Chuyển sang tình huống tiếp theo...</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🌍🏆</div>
          <h1 className="text-4xl font-bold text-white mb-8">Cultural Intelligence Mastery!</h1>

          {render3DCulturalEnvironment()}

          <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-purple-400">{score}</div>
                <div className="text-purple-100">Tổng Điểm</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">{culturalKnowledge}%</div>
                <div className="text-purple-100">Trí Tuệ Văn Hóa</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">{answeredScenarios.length}</div>
                <div className="text-purple-100">Tình Huống Hoàn Thành</div>
              </div>
            </div>

            <div className="text-lg text-purple-100 mb-8">
              {score >= 450
                ? '🏆 Bạn là một navigator văn hóa xuất sắc! Khả năng thích ứng đa văn hóa rất cao.'
                : score >= 300
                  ? '🌟 Tốt lắm! Bạn có hiểu biết sâu sắc về các nền văn hóa khác nhau.'
                  : score >= 150
                    ? '👍 Khá tốt! Bạn đã học được nhiều về trí tuệ văn hóa.'
                    : '📚 Tiếp tục học hỏi để phát triển trí tuệ văn hóa!'}
            </div>

            <div className="bg-indigo-900/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Các Kỹ Năng Đã Phát Triển:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">✓</div>
                  <span className="text-white">Nhận thức văn hóa toàn cầu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">✓</div>
                  <span className="text-white">Giao tiếp đa văn hóa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">✓</div>
                  <span className="text-white">Thích ứng hành vi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">✓</div>
                  <span className="text-white">Tôn trọng đa dạng</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={onRestart}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
              >
                <RotateCcw className="mr-2" size={20} />
                Khám Phá Lại
              </button>
              <button
                onClick={() => onComplete(true, score)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
              >
                <Award className="mr-2" size={20} />
                Hoàn Thành
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CulturalIntelligenceNavigator3DGame;
