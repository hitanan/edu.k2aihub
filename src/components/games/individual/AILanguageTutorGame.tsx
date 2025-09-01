'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, MessageCircle, Clock, Brain, Mic, Volume2, Star, Users } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Language {
  code: string;
  name: string;
  nativeName: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  speakers: string;
  marketDemand: number;
  culturalValue: number;
  economicValue: number;
}

interface LearningMethod {
  id: string;
  name: string;
  type: 'conversation' | 'grammar' | 'vocabulary' | 'culture' | 'pronunciation' | 'writing';
  effectiveness: number;
  engagement: number;
  retention: number;
  cost: number;
  aiComplexity: number;
  description: string;
}

interface TutorPersonality {
  id: string;
  name: string;
  style: 'friendly' | 'professional' | 'casual' | 'encouraging' | 'strict' | 'adaptive';
  patience_level: number;
  expertise_depth: number;
  cultural_awareness: number;
  motivation_skill: number;
  cost: number;
  description: string;
}

const LANGUAGES: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    difficulty: 'intermediate',
    speakers: '1.5B',
    marketDemand: 95,
    culturalValue: 85,
    economicValue: 100,
  },
  {
    code: 'zh',
    name: 'Chinese (Mandarin)',
    nativeName: '中文',
    difficulty: 'advanced',
    speakers: '918M',
    marketDemand: 90,
    culturalValue: 95,
    economicValue: 95,
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    difficulty: 'advanced',
    speakers: '125M',
    marketDemand: 85,
    culturalValue: 90,
    economicValue: 85,
  },
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    difficulty: 'advanced',
    speakers: '77M',
    marketDemand: 80,
    culturalValue: 85,
    economicValue: 80,
  },
  {
    code: 'th',
    name: 'Thai',
    nativeName: 'ภาษาไทย',
    difficulty: 'intermediate',
    speakers: '60M',
    marketDemand: 70,
    culturalValue: 80,
    economicValue: 75,
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    difficulty: 'intermediate',
    speakers: '280M',
    marketDemand: 75,
    culturalValue: 90,
    economicValue: 80,
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    difficulty: 'intermediate',
    speakers: '95M',
    marketDemand: 70,
    culturalValue: 85,
    economicValue: 85,
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    difficulty: 'beginner',
    speakers: '500M',
    marketDemand: 85,
    culturalValue: 85,
    economicValue: 80,
  },
];

const LEARNING_METHODS: LearningMethod[] = [
  {
    id: 'ai-conversation',
    name: 'AI Conversation Partner',
    type: 'conversation',
    effectiveness: 90,
    engagement: 95,
    retention: 85,
    cost: 60,
    aiComplexity: 95,
    description: 'Đối thoại thời gian thực với AI hiểu ngữ cảnh và văn hóa',
  },
  {
    id: 'adaptive-grammar',
    name: 'Adaptive Grammar System',
    type: 'grammar',
    effectiveness: 85,
    engagement: 70,
    retention: 90,
    cost: 50,
    aiComplexity: 80,
    description: 'Hệ thống ngữ pháp thích ứng theo trình độ người học',
  },
  {
    id: 'smart-vocabulary',
    name: 'Smart Vocabulary Builder',
    type: 'vocabulary',
    effectiveness: 80,
    engagement: 75,
    retention: 95,
    cost: 40,
    aiComplexity: 70,
    description: 'Học từ vựng thông minh với spaced repetition',
  },
  {
    id: 'cultural-immersion',
    name: 'Cultural Immersion VR',
    type: 'culture',
    effectiveness: 95,
    engagement: 100,
    retention: 80,
    cost: 80,
    aiComplexity: 85,
    description: 'Trải nghiệm văn hóa qua thực tế ảo và AI',
  },
  {
    id: 'pronunciation-coach',
    name: 'AI Pronunciation Coach',
    type: 'pronunciation',
    effectiveness: 90,
    engagement: 80,
    retention: 85,
    cost: 45,
    aiComplexity: 90,
    description: 'Huấn luyện phát âm với feedback realtime',
  },
  {
    id: 'writing-assistant',
    name: 'Writing Assistant AI',
    type: 'writing',
    effectiveness: 85,
    engagement: 70,
    retention: 90,
    cost: 55,
    aiComplexity: 85,
    description: 'Hỗ trợ viết và sửa lỗi với AI thông minh',
  },
];

const TUTOR_PERSONALITIES: TutorPersonality[] = [
  {
    id: 'friendly-mentor',
    name: 'Maya - Friendly Mentor',
    style: 'friendly',
    patience_level: 95,
    expertise_depth: 85,
    cultural_awareness: 90,
    motivation_skill: 95,
    cost: 40,
    description: 'Giáo viên thân thiện, kiên nhẫn, tạo môi trường học thoải mái',
  },
  {
    id: 'professional-expert',
    name: 'Dr. Chen - Professional Expert',
    style: 'professional',
    patience_level: 80,
    expertise_depth: 100,
    cultural_awareness: 95,
    motivation_skill: 85,
    cost: 70,
    description: 'Chuyên gia ngôn ngữ với kiến thức sâu và phương pháp chuyên nghiệp',
  },
  {
    id: 'casual-buddy',
    name: 'Alex - Casual Learning Buddy',
    style: 'casual',
    patience_level: 85,
    expertise_depth: 75,
    cultural_awareness: 80,
    motivation_skill: 90,
    cost: 30,
    description: 'Bạn học thoải mái, gần gũi, học qua trò chuyện hàng ngày',
  },
  {
    id: 'encouraging-coach',
    name: 'Lisa - Encouraging Coach',
    style: 'encouraging',
    patience_level: 90,
    expertise_depth: 80,
    cultural_awareness: 85,
    motivation_skill: 100,
    cost: 50,
    description: 'Huấn luyện viên động viên, giúp vượt qua khó khăn và xây dựng tự tin',
  },
  {
    id: 'strict-teacher',
    name: 'Prof. Kim - Strict Teacher',
    style: 'strict',
    patience_level: 70,
    expertise_depth: 95,
    cultural_awareness: 90,
    motivation_skill: 80,
    cost: 60,
    description: 'Giáo viên nghiêm khắc, kỷ luật, đảm bảo học đúng và học kỹ',
  },
  {
    id: 'adaptive-ai',
    name: 'Aria - Adaptive AI Tutor',
    style: 'adaptive',
    patience_level: 100,
    expertise_depth: 90,
    cultural_awareness: 100,
    motivation_skill: 95,
    cost: 80,
    description: 'AI thích ứng hoàn hảo, tự động điều chỉnh theo phong cách học của bạn',
  },
];

const AILanguageTutorGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<
    'briefing' | 'language-selection' | 'method-selection' | 'tutor-selection' | 'development' | 'results'
  >('briefing');
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [selectedMethods, setSelectedMethods] = useState<LearningMethod[]>([]);
  const [selectedTutor, setSelectedTutor] = useState<TutorPersonality | null>(null);
  const [budget] = useState(350);
  const [developmentProgress, setDevelopmentProgress] = useState(0);
  const [, setIsDeveloping] = useState(false);

  // Learning metrics
  const [learningEffectiveness, setLearningEffectiveness] = useState(0);
  const [studentEngagement, setStudentEngagement] = useState(0);
  const [knowledgeRetention, setKnowledgeRetention] = useState(0);

  const totalCost = selectedMethods.reduce((sum, m) => sum + m.cost, 0) + (selectedTutor ? selectedTutor.cost : 0);

  const canAfford = totalCost <= budget;

  const calculateTutorScore = () => {
    if (!selectedLanguage || selectedMethods.length === 0 || !selectedTutor) {
      return { effectiveness: 0, engagement: 0, retention: 0 };
    }

    // Learning effectiveness
    const methodEffectiveness = selectedMethods.reduce((sum, m) => sum + m.effectiveness, 0) / selectedMethods.length;
    const tutorExpertise = selectedTutor.expertise_depth;
    const languageDemand = selectedLanguage.marketDemand;
    const effectivenessScore = Math.round(methodEffectiveness * 0.5 + tutorExpertise * 0.3 + languageDemand * 0.2);

    // Student engagement
    const methodEngagement = selectedMethods.reduce((sum, m) => sum + m.engagement, 0) / selectedMethods.length;
    const tutorMotivation = selectedTutor.motivation_skill;
    const tutorPatience = selectedTutor.patience_level;
    const engagementScore = Math.round(methodEngagement * 0.4 + tutorMotivation * 0.35 + tutorPatience * 0.25);

    // Knowledge retention
    const methodRetention = selectedMethods.reduce((sum, m) => sum + m.retention, 0) / selectedMethods.length;
    const tutorCultural = selectedTutor.cultural_awareness;
    const culturalValue = selectedLanguage.culturalValue;
    const retentionScore = Math.round(methodRetention * 0.5 + tutorCultural * 0.3 + culturalValue * 0.2);

    return {
      effectiveness: Math.min(100, effectivenessScore),
      engagement: Math.min(100, engagementScore),
      retention: Math.min(100, retentionScore),
    };
  };

  const startDevelopment = () => {
    if (!selectedLanguage || selectedMethods.length === 0 || !selectedTutor || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('development');
    setIsDeveloping(true);

    const tutorResults = calculateTutorScore();
    setLearningEffectiveness(tutorResults.effectiveness);
    setStudentEngagement(tutorResults.engagement);
    setKnowledgeRetention(tutorResults.retention);

    const totalComplexity = selectedMethods.reduce((sum, m) => sum + m.aiComplexity, 0);

    const interval = setInterval(() => {
      setDevelopmentProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDeveloping(false);
          setGamePhase('results');
          return 100;
        }
        return prev + Math.max(1, (100 / totalComplexity) * 5);
      });
    }, 200);
  };

  const getOverallScore = () => {
    const tutorResults = calculateTutorScore();
    const costEfficiency = Math.round(((budget - totalCost) / budget) * 100);
    const languageDifficulty =
      selectedLanguage?.difficulty === 'advanced' ? 15 : selectedLanguage?.difficulty === 'intermediate' ? 10 : 5;
    const methodDiversity = selectedMethods.length >= 3 ? 10 : selectedMethods.length * 3;

    return Math.round(
      tutorResults.effectiveness * 0.35 +
        tutorResults.engagement * 0.3 +
        tutorResults.retention * 0.25 +
        costEfficiency * 0.05 +
        (languageDifficulty + methodDiversity) * 0.05,
    );
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-blue-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <MessageCircle className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">AI Language Tutor</h1>
            <p className="text-xl text-gray-300 mb-6">Xây dựng gia sư AI thông minh để dạy ngoại ngữ hiệu quả!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2 text-blue-400" />
                Tính năng AI Tutor
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn ngôn ngữ và đối tượng học</li>
                <li>• Thiết kế phương pháp học AI</li>
                <li>• Tùy chỉnh personality gia sư</li>
                <li>• Quản lý ngân sách 350 triệu VNĐ</li>
                <li>• Tối ưu hóa hiệu quả học tập</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Star className="w-6 h-6 mr-2 text-purple-400" />
                Tiêu chí thành công
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <span className="text-blue-400">Hiệu quả học (35%)</span> - Khả năng tiếp thu kiến thức
                </li>
                <li>
                  • <span className="text-green-400">Sự tham gia (30%)</span> - Động lực và hứng thú
                </li>
                <li>
                  • <span className="text-yellow-400">Ghi nhớ (25%)</span> - Lưu giữ kiến thức lâu dài
                </li>
                <li>
                  • <span className="text-purple-400">Hiệu quả (10%)</span> - Chi phí và đa dạng
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('language-selection')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu phát triển
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'language-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn ngôn ngữ dạy học</h2>
            <p className="text-gray-300">Ngân sách: {budget} triệu VNĐ</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {LANGUAGES.map((language) => {
              const isSelected = selectedLanguage?.code === language.code;

              return (
                <div
                  key={language.code}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected ? 'border-blue-500 bg-blue-500/20' : 'border-white/20 hover:border-blue-400/50'
                  }`}
                  onClick={() => setSelectedLanguage(language)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <MessageCircle className="w-8 h-8 text-blue-400" />
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        language.difficulty === 'beginner'
                          ? 'bg-green-500/20 text-green-400'
                          : language.difficulty === 'intermediate'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {language.difficulty}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{language.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{language.nativeName}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Người dùng:</span>
                      <span className="text-white">{language.speakers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Nhu cầu thị trường:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${language.marketDemand}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Giá trị văn hóa:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${language.culturalValue}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Giá trị kinh tế:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: `${language.economicValue}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('method-selection')}
              disabled={!selectedLanguage}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn phương pháp
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'method-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn phương pháp học AI (tối đa 4)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Ngôn ngữ: {selectedLanguage?.name}</span>
              <span>Đã chọn: {selectedMethods.length}/4</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {LEARNING_METHODS.map((method) => {
              const isSelected = selectedMethods.some((m) => m.id === method.id);
              const canSelect = selectedMethods.length < 4;

              return (
                <div
                  key={method.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-green-500 bg-green-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedMethods((prev) => prev.filter((m) => m.id !== method.id));
                    } else if (canSelect) {
                      setSelectedMethods((prev) => [...prev, method]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {method.type === 'conversation' && <MessageCircle className="w-6 h-6 text-blue-400" />}
                      {method.type === 'grammar' && <Brain className="w-6 h-6 text-green-400" />}
                      {method.type === 'vocabulary' && <Star className="w-6 h-6 text-yellow-400" />}
                      {method.type === 'culture' && <Users className="w-6 h-6 text-purple-400" />}
                      {method.type === 'pronunciation' && <Mic className="w-6 h-6 text-red-400" />}
                      {method.type === 'writing' && <Volume2 className="w-6 h-6 text-orange-400" />}
                    </div>
                    <span className="text-yellow-400 font-bold text-sm">{method.cost}M</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{method.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Hiệu quả:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-blue-500 h-1 rounded-full"
                          style={{ width: `${method.effectiveness}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Tham gia:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div className="bg-green-500 h-1 rounded-full" style={{ width: `${method.engagement}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Ghi nhớ:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div className="bg-yellow-500 h-1 rounded-full" style={{ width: `${method.retention}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">AI phức tạp:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-purple-500 h-1 rounded-full"
                          style={{ width: `${method.aiComplexity}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        method.type === 'conversation'
                          ? 'bg-blue-500/20 text-blue-400'
                          : method.type === 'grammar'
                            ? 'bg-green-500/20 text-green-400'
                            : method.type === 'vocabulary'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : method.type === 'culture'
                                ? 'bg-purple-500/20 text-purple-400'
                                : method.type === 'pronunciation'
                                  ? 'bg-red-500/20 text-red-400'
                                  : 'bg-orange-500/20 text-orange-400'
                      }`}
                    >
                      {method.type}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('tutor-selection')}
              disabled={selectedMethods.length === 0}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn gia sư
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'tutor-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn AI Tutor Personality</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Ngân sách còn lại: {budget - selectedMethods.reduce((sum, m) => sum + m.cost, 0)} triệu VNĐ</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {TUTOR_PERSONALITIES.map((tutor) => {
              const isSelected = selectedTutor?.id === tutor.id;
              const currentCostWithoutTutor = selectedMethods.reduce((sum, m) => sum + m.cost, 0);
              const canSelect = currentCostWithoutTutor + tutor.cost <= budget;

              return (
                <div
                  key={tutor.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-purple-500 bg-purple-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-purple-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedTutor(null);
                    } else if (canSelect) {
                      setSelectedTutor(tutor);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-8 h-8 text-purple-400" />
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold">{tutor.cost}M VNĐ</span>
                      <div
                        className={`text-xs px-2 py-1 rounded mt-1 ${
                          tutor.style === 'friendly'
                            ? 'bg-green-500/20 text-green-400'
                            : tutor.style === 'professional'
                              ? 'bg-blue-500/20 text-blue-400'
                              : tutor.style === 'casual'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : tutor.style === 'encouraging'
                                  ? 'bg-pink-500/20 text-pink-400'
                                  : tutor.style === 'strict'
                                    ? 'bg-red-500/20 text-red-400'
                                    : 'bg-purple-500/20 text-purple-400'
                        }`}
                      >
                        {tutor.style}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{tutor.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tutor.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">Kiên nhẫn:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${tutor.patience_level}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Chuyên môn:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${tutor.expertise_depth}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Văn hóa:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${tutor.cultural_awareness}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Động viên:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: `${tutor.motivation_skill}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt AI Language Tutor</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Ngôn ngữ</h4>
                <p className="text-gray-300 text-sm">
                  {selectedLanguage?.name} ({selectedLanguage?.nativeName})
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Phương pháp ({selectedMethods.length})</h4>
                {selectedMethods.map((method) => (
                  <p key={method.id} className="text-gray-300 text-sm">
                    {method.name}
                  </p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">AI Tutor</h4>
                <p className="text-gray-300 text-sm">{selectedTutor?.name || 'Chưa chọn'}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">Tổng chi phí: {totalCost} triệu VNĐ</span>
                <span className={`text-lg font-semibold ${canAfford ? 'text-green-400' : 'text-red-400'}`}>
                  {canAfford ? '✅ Trong ngân sách' : '❌ Vượt ngân sách'}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startDevelopment}
              disabled={!canAfford || !selectedTutor}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Phát triển AI Tutor
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'development') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-blue-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang phát triển AI Tutor...</h2>
            <p className="text-gray-300">Training AI models và tích hợp các phương pháp học</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ phát triển</span>
                <span>{Math.round(developmentProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-6 rounded-full transition-all duration-300"
                  style={{ width: `${developmentProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400">Hiệu quả học</span>
                  <span className="text-white font-bold">{learningEffectiveness}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${learningEffectiveness}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400">Sự tham gia</span>
                  <span className="text-white font-bold">{studentEngagement}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${studentEngagement}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-400">Ghi nhớ</span>
                  <span className="text-white font-bold">{knowledgeRetention}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-yellow-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${knowledgeRetention}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <Brain className="w-6 h-6 text-blue-400 animate-pulse" />
              <span>Đang training AI cho {selectedLanguage?.name}...</span>
              <MessageCircle className="w-6 h-6 text-purple-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const tutorResults = calculateTutorScore();
    const tutorScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-blue-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">AI Language Tutor hoàn thành!</h2>
            <p className="text-2xl text-gray-300 mb-2">{selectedLanguage?.name} Tutor</p>
            <div className="text-6xl font-bold text-white mb-4">{tutorScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Hiệu suất học tập</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-400">Hiệu quả học:</span>
                  <span className="text-white font-bold">{tutorResults.effectiveness}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-400">Sự tham gia:</span>
                  <span className="text-white font-bold">{tutorResults.engagement}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-yellow-400">Ghi nhớ kiến thức:</span>
                  <span className="text-white font-bold">{tutorResults.retention}/100</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá AI Tutor</h3>
              <div className="space-y-2 text-gray-300">
                {tutorScore >= 90 && (
                  <p>🏆 AI Tutor hoàn hảo! Có thể cạnh tranh với các ứng dụng học ngôn ngữ hàng đầu.</p>
                )}
                {tutorScore >= 80 && tutorScore < 90 && (
                  <p>🌟 AI Tutor xuất sắc! Học viên sẽ có trải nghiệm học tập tuyệt vời.</p>
                )}
                {tutorScore >= 70 && tutorScore < 80 && (
                  <p>✅ AI Tutor tốt! Cần cải thiện một số tính năng để tăng hiệu quả.</p>
                )}
                {tutorScore >= 60 && tutorScore < 70 && (
                  <p>⚠️ AI Tutor cơ bản! Cần nâng cấp thuật toán và phương pháp học.</p>
                )}
                {tutorScore < 60 && <p>❌ Cần cải thiện đáng kể để tạo ra trải nghiệm học tập hiệu quả.</p>}

                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Lưu ý:</strong> AI Language Tutor hiệu quả cần kết hợp công nghệ tiên tiến, hiểu biết văn
                    hóa sâu sắc và phương pháp giáo dục phù hợp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Phát triển tutor mới
            </button>
            <button
              onClick={() => onComplete(true, tutorScore)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Hoàn thành
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default AILanguageTutorGame;
