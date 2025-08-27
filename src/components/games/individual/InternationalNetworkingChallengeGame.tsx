import React, { useState, useEffect, useCallback } from 'react';
import { 
  Network, 
  Users, 
  MessageSquare, 
  Globe, 
  Star, 
  Award,
  Play,
  RotateCcw,
  Target,
  CheckCircle,
  User,
  Building,
  TrendingUp,
  Coffee,
  Handshake,
  Mail,
  Phone,
  Calendar,
  MapPin
} from 'lucide-react';

interface InternationalNetworkingChallengeProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface NetworkingContact {
  id: string;
  name: string;
  title: string;
  company: string;
  country: string;
  industry: string;
  interests: string[];
  personality: 'formal' | 'casual' | 'analytical' | 'creative';
  networkValue: number; // 1-10
  difficulty: number; // 1-10
  preferredApproach: string;
  flag: string;
  avatar: string;
}

interface NetworkingStrategy {
  id: string;
  name: string;
  description: string;
  effectiveness: { [personality: string]: number };
  timeRequired: number;
  successRate: number;
}

interface NetworkingOpportunity {
  id: string;
  event: string;
  location: string;
  contacts: NetworkingContact[];
  timeLimit: number; // seconds
  objectives: string[];
  challenges: string[];
}

const NETWORKING_CONTACTS: NetworkingContact[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    title: 'VP of Innovation',
    company: 'TechGlobal Singapore',
    country: 'Singapore',
    industry: 'Technology',
    interests: ['AI/ML', 'Startups', 'Digital Transformation'],
    personality: 'analytical',
    networkValue: 9,
    difficulty: 7,
    preferredApproach: 'Data-driven discussion, specific use cases',
    flag: '🇸🇬',
    avatar: '👩‍💼'
  },
  {
    id: 'carlos-martinez',
    name: 'Carlos Martinez',
    title: 'Regional Director',
    company: 'Latin America Ventures',
    country: 'Mexico',
    industry: 'Investment',
    interests: ['FinTech', 'Sustainable Business', 'Market Expansion'],
    personality: 'casual',
    networkValue: 8,
    difficulty: 6,
    preferredApproach: 'Personal stories, relationship building',
    flag: '🇲🇽',
    avatar: '👨‍💼'
  },
  {
    id: 'dr-yuki-tanaka',
    name: 'Dr. Yuki Tanaka',
    title: 'Research Director',
    company: 'Kyoto Biotech Institute',
    country: 'Japan',
    industry: 'Biotechnology',
    interests: ['Medical Research', 'Innovation', 'International Collaboration'],
    personality: 'formal',
    networkValue: 10,
    difficulty: 9,
    preferredApproach: 'Respectful introduction, professional credentials',
    flag: '🇯🇵',
    avatar: '👨‍🔬'
  },
  {
    id: 'emma-wilson',
    name: 'Emma Wilson',
    title: 'Creative Director',
    company: 'London Design Studio',
    country: 'UK',
    industry: 'Creative Industry',
    interests: ['Design Thinking', 'Brand Strategy', 'Cultural Trends'],
    personality: 'creative',
    networkValue: 7,
    difficulty: 5,
    preferredApproach: 'Creative ideas, visual thinking, inspiration',
    flag: '🇬🇧',
    avatar: '👩‍🎨'
  },
  {
    id: 'ahmed-hassan',
    name: 'Ahmed Hassan',
    title: 'CEO',
    company: 'Middle East Energy',
    country: 'UAE',
    industry: 'Energy',
    interests: ['Renewable Energy', 'Sustainability', 'Regional Development'],
    personality: 'formal',
    networkValue: 9,
    difficulty: 8,
    preferredApproach: 'Long-term vision, mutual benefits, respect for tradition',
    flag: '🇦🇪',
    avatar: '👨‍💼'
  },
  {
    id: 'lisa-andersson',
    name: 'Lisa Andersson',
    title: 'Innovation Manager',
    company: 'Nordic Solutions',
    country: 'Sweden',
    industry: 'Sustainability',
    interests: ['Clean Tech', 'Social Impact', 'Work-Life Balance'],
    personality: 'casual',
    networkValue: 8,
    difficulty: 4,
    preferredApproach: 'Authentic conversation, shared values, practical solutions',
    flag: '🇸🇪',
    avatar: '👩‍💻'
  }
];

const NETWORKING_STRATEGIES: NetworkingStrategy[] = [
  {
    id: 'elevator-pitch',
    name: 'Elevator Pitch',
    description: 'Giới thiệu ngắn gọn về bản thân và dự án trong 30 giây',
    effectiveness: {
      formal: 7,
      casual: 5,
      analytical: 6,
      creative: 4
    },
    timeRequired: 30,
    successRate: 70
  },
  {
    id: 'common-interest',
    name: 'Tìm Điểm Chung',
    description: 'Khởi đầu bằng cách tìm sở thích hoặc kinh nghiệm chung',
    effectiveness: {
      formal: 6,
      casual: 9,
      analytical: 7,
      creative: 8
    },
    timeRequired: 60,
    successRate: 80
  },
  {
    id: 'value-proposition',
    name: 'Đề Xuất Giá Trị',
    description: 'Trình bày cụ thể giá trị mà bạn có thể mang lại cho đối phương',
    effectiveness: {
      formal: 8,
      casual: 6,
      analytical: 9,
      creative: 7
    },
    timeRequired: 90,
    successRate: 75
  },
  {
    id: 'story-telling',
    name: 'Kể Chuyện',
    description: 'Sử dụng câu chuyện cá nhân hoặc case study để tạo kết nối',
    effectiveness: {
      formal: 5,
      casual: 8,
      analytical: 6,
      creative: 9
    },
    timeRequired: 120,
    successRate: 85
  },
  {
    id: 'question-asking',
    name: 'Đặt Câu Hỏi Thông Minh',
    description: 'Đặt câu hỏi mở để hiểu rõ nhu cầu và quan tâm của đối phương',
    effectiveness: {
      formal: 7,
      casual: 8,
      analytical: 8,
      creative: 7
    },
      timeRequired: 75,
    successRate: 82
  },
  {
    id: 'mutual-connection',
    name: 'Người Quen Chung',
    description: 'Tìm và nhắc đến người quen chung hoặc mối liên kết có sẵn',
    effectiveness: {
      formal: 9,
      casual: 7,
      analytical: 6,
      creative: 6
    },
    timeRequired: 45,
    successRate: 90
  }
];

const NETWORKING_OPPORTUNITIES: NetworkingOpportunity[] = [
  {
    id: 'tech-conference',
    event: 'Global Tech Innovation Summit',
    location: 'Singapore',
    contacts: NETWORKING_CONTACTS.slice(0, 3),
    timeLimit: 300, // 5 minutes total
    objectives: [
      'Kết nối với ít nhất 2 contacts chất lượng cao',
      'Tìm cơ hội hợp tác công nghệ',
      'Xây dựng pipeline cho dự án tương lai'
    ],
    challenges: [
      'Thời gian có hạn với mỗi người',
      'Cạnh tranh với nhiều participants khác',
      'Cần thể hiện chuyên môn và credibility'
    ]
  },
  {
    id: 'business-mixer',
    event: 'International Business Mixer',
    location: 'Dubai',
    contacts: NETWORKING_CONTACTS.slice(3, 6),
    timeLimit: 360, // 6 minutes total
    objectives: [
      'Mở rộng network ra các ngành nghề khác nhau',
      'Tìm hiểu về thị trường và culture địa phương',
      'Xây dựng quan hệ dài hạn'
    ],
    challenges: [
      'Đa dạng văn hóa và ngành nghề',
      'Cần adapt approach cho từng personality',
      'Balance giữa professional và personal'
    ]
  }
];

const InternationalNetworkingChallengeGame: React.FC<InternationalNetworkingChallengeProps> = ({
  onComplete,
  timeLeft,
  onRestart
}) => {
  const [currentOpportunity, setCurrentOpportunity] = useState<NetworkingOpportunity>(NETWORKING_OPPORTUNITIES[0]);
  const [opportunityIndex, setOpportunityIndex] = useState(0);
  const [currentContact, setCurrentContact] = useState<NetworkingContact | null>(null);
  const [selectedStrategy, setSelectedStrategy] = useState<NetworkingStrategy | null>(null);
  const [gamePhase, setGamePhase] = useState<'intro' | 'briefing' | 'networking' | 'strategy' | 'conversation' | 'results'>('intro');
  const [score, setScore] = useState(0);
  const [networkingResults, setNetworkingResults] = useState<Array<{
    contact: NetworkingContact;
    strategy: NetworkingStrategy;
    success: boolean;
    score: number;
    feedback: string;
  }>>([]);
  const [contactIndex, setContactIndex] = useState(0);
  const [networkingTime, setNetworkingTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const calculateNetworkingSuccess = useCallback((contact: NetworkingContact, strategy: NetworkingStrategy) => {
    const baseEffectiveness = strategy.effectiveness[contact.personality];
    const difficultyPenalty = contact.difficulty * 0.02;
    const timeBonus = Math.max(0, 1 - (strategy.timeRequired / 120));
    
    const successProbability = (baseEffectiveness / 10) * (1 - difficultyPenalty) * (1 + timeBonus * 0.3);
    const isSuccess = Math.random() < successProbability;
    
    const baseScore = contact.networkValue * 10;
    const strategyBonus = baseEffectiveness * 2;
    const successBonus = isSuccess ? 30 : 0;
    
    return {
      success: isSuccess,
      score: Math.round(baseScore + strategyBonus + successBonus),
      effectiveness: Math.round(successProbability * 100)
    };
  }, []);

  const executeNetworking = () => {
    if (!currentContact || !selectedStrategy) return;

    const result = calculateNetworkingSuccess(currentContact, selectedStrategy);
    
    const feedback = result.success 
      ? `Tuyệt vời! ${currentContact.name} rất quan tâm đến đề xuất của bạn. ${
          result.effectiveness > 80 ? 'Kết nối này có tiềm năng hợp tác cao!' :
          result.effectiveness > 60 ? 'Đây là một kết nối có giá trị.' :
          'Bạn đã tạo được ấn tượng tích cực ban đầu.'
        }`
      : `${currentContact.name} ${
          result.effectiveness > 60 ? 'lịch sự lắng nghe nhưng chưa thể hiện sự quan tâm rõ ràng.' :
          result.effectiveness > 40 ? 'có vẻ chưa thấy được điểm kết nối.' :
          'dường như không phù hợp với approach này.'
        }`;

    setNetworkingResults(prev => [...prev, {
      contact: currentContact,
      strategy: selectedStrategy,
      success: result.success,
      score: result.score,
      feedback
    }]);

    setScore(prev => prev + result.score);
    setNetworkingTime(prev => prev + selectedStrategy.timeRequired);

    if (contactIndex < currentOpportunity.contacts.length - 1) {
      setContactIndex(prev => prev + 1);
      setCurrentContact(currentOpportunity.contacts[contactIndex + 1]);
      setSelectedStrategy(null);
      setGamePhase('networking');
    } else {
      setGamePhase('results');
    }
  };

  const nextOpportunity = () => {
    if (opportunityIndex < NETWORKING_OPPORTUNITIES.length - 1) {
      setOpportunityIndex(prev => prev + 1);
      setCurrentOpportunity(NETWORKING_OPPORTUNITIES[opportunityIndex + 1]);
      setContactIndex(0);
      setCurrentContact(NETWORKING_OPPORTUNITIES[opportunityIndex + 1].contacts[0]);
      setNetworkingTime(0);
      setGamePhase('briefing');
    } else {
      onComplete(score >= 500, score);
    }
  };

  const startGame = () => {
    setIsPlaying(true);
    setGamePhase('intro');
    setOpportunityIndex(0);
    setCurrentOpportunity(NETWORKING_OPPORTUNITIES[0]);
    setContactIndex(0);
    setCurrentContact(null);
    setSelectedStrategy(null);
    setScore(0);
    setNetworkingResults([]);
    setNetworkingTime(0);
  };

  const nextPhase = () => {
    switch (gamePhase) {
      case 'intro':
        setGamePhase('briefing');
        break;
      case 'briefing':
        setCurrentContact(currentOpportunity.contacts[0]);
        setGamePhase('networking');
        break;
      case 'networking':
        setGamePhase('strategy');
        break;
      case 'strategy':
        setGamePhase('conversation');
        break;
      case 'conversation':
        executeNetworking();
        break;
      case 'results':
        nextOpportunity();
        break;
    }
  };

  const restartGame = () => {
    setCurrentOpportunity(NETWORKING_OPPORTUNITIES[0]);
    setOpportunityIndex(0);
    setCurrentContact(null);
    setSelectedStrategy(null);
    setGamePhase('intro');
    setScore(0);
    setNetworkingResults([]);
    setContactIndex(0);
    setNetworkingTime(0);
    setIsPlaying(false);
    onRestart();
  };

  const getPersonalityColor = (personality: string) => {
    switch (personality) {
      case 'formal': return 'border-blue-400 bg-blue-500/20';
      case 'casual': return 'border-green-400 bg-green-500/20';
      case 'analytical': return 'border-purple-400 bg-purple-500/20';
      case 'creative': return 'border-orange-400 bg-orange-500/20';
      default: return 'border-gray-400 bg-gray-500/20';
    }
  };

  useEffect(() => {
    if (timeLeft <= 0 && isPlaying) {
      onComplete(false, score);
    }
  }, [timeLeft, isPlaying, score, onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-500/20 p-3 rounded-xl">
                <Network className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">🌐 Thử Thách Networking Quốc Tế</h1>
                <p className="text-indigo-200">Xây dựng mạng lưới kinh doanh toàn cầu</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-indigo-400">{Math.round(score)}</div>
                <div className="text-sm text-indigo-200">Điểm số</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-400">{networkingResults.length}</div>
                <div className="text-sm text-indigo-200">Connections</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-pink-400">{Math.ceil(timeLeft / 60)}</div>
                <div className="text-sm text-indigo-200">Phút</div>
              </div>
            </div>
          </div>
        </div>

        {!isPlaying ? (
          /* Start Screen */
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center">
            <div className="bg-indigo-500/20 p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Users className="w-12 h-12 text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Chào Mừng Đến Thế Giới Networking!</h2>
            <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
              Thách thức kỹ năng networking quốc tế của bạn. Kết nối với các chuyên gia từ khắp nơi 
              trên thế giới và xây dựng mạng lưới kinh doanh có giá trị.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-blue-900/30 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-blue-200 mb-2">🎯 Kỹ Năng Phát Triển</h3>
                <ul className="text-blue-100 text-sm space-y-1">
                  <li>• Giao tiếp và thuyết phục</li>
                  <li>• Xây dựng mối quan hệ</li>
                  <li>• Adaptability văn hóa</li>
                  <li>• Strategic networking</li>
                </ul>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-purple-200 mb-2">🌟 Trải Nghiệm</h3>
                <ul className="text-purple-100 text-sm space-y-1">
                  <li>• 6 personalities khác nhau</li>
                  <li>• Nhiều chiến lược networking</li>
                  <li>• Thời gian thực và pressure</li>
                  <li>• Feedback chi tiết và cải thiện</li>
                </ul>
              </div>
            </div>
            <button
              onClick={startGame}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-2 mx-auto"
            >
              <Play className="w-6 h-6" />
              Bắt Đầu Networking
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-indigo-200">Event {opportunityIndex + 1}/{NETWORKING_OPPORTUNITIES.length} - Contact {contactIndex + 1}/{currentOpportunity.contacts.length}</span>
                <span className="text-purple-300 capitalize">{gamePhase}</span>
              </div>
              <div className="w-full bg-purple-900/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((opportunityIndex * NETWORKING_OPPORTUNITIES[0].contacts.length + contactIndex) / (NETWORKING_OPPORTUNITIES.length * NETWORKING_OPPORTUNITIES[0].contacts.length)) * 100}%` }}
                ></div>
              </div>
            </div>

            {gamePhase === 'intro' && (
              /* Introduction Phase */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">🎯 Nghệ Thuật Networking Quốc Tế</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-indigo-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-indigo-200 mb-3">🧠 Tại Sao Networking Quan Trọng?</h3>
                    <div className="space-y-3 text-sm">
                      <div className="bg-white/10 rounded p-2">
                        <div className="font-semibold text-white">Cơ Hội Kinh Doanh</div>
                        <div className="text-gray-300">85% công việc được tìm thấy qua network</div>
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        <div className="font-semibold text-white">Tri Thức & Insight</div>
                        <div className="text-gray-300">Học hỏi từ kinh nghiệm của người khác</div>
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        <div className="font-semibold text-white">Hỗ Trợ & Mentoring</div>
                        <div className="text-gray-300">Xây dựng hệ thống support mạnh mẽ</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-200 mb-3">🎯 Các Personality Types</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 bg-blue-500/20 rounded p-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="text-blue-300 font-semibold">Formal:</span>
                        <span className="text-blue-100">Professional, structured</span>
                      </div>
                      <div className="flex items-center gap-2 bg-green-500/20 rounded p-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-green-300 font-semibold">Casual:</span>
                        <span className="text-green-100">Friendly, relationship-focused</span>
                      </div>
                      <div className="flex items-center gap-2 bg-purple-500/20 rounded p-2">
                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        <span className="text-purple-300 font-semibold">Analytical:</span>
                        <span className="text-purple-100">Data-driven, logical</span>
                      </div>
                      <div className="flex items-center gap-2 bg-orange-500/20 rounded p-2">
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <span className="text-orange-300 font-semibold">Creative:</span>
                        <span className="text-orange-100">Innovative, inspiration-focused</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-pink-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-pink-200 mb-3">⚡ Game Rules</h3>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-white/10 rounded p-2">
                      <div className="font-semibold text-white">Time Management</div>
                      <div className="text-gray-300">Mỗi event có thời gian giới hạn</div>
                    </div>
                    <div className="bg-white/10 rounded p-2">
                      <div className="font-semibold text-white">Strategy Matters</div>
                      <div className="text-gray-300">Chọn approach phù hợp với personality</div>
                    </div>
                    <div className="bg-white/10 rounded p-2">
                      <div className="font-semibold text-white">Quality over Quantity</div>
                      <div className="text-gray-300">Connections chất lượng = điểm cao hơn</div>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Vào Event Đầu Tiên
                </button>
              </div>
            )}

            {gamePhase === 'briefing' && (
              /* Event Briefing */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-2xl font-bold text-white">{currentOpportunity.event}</h2>
                  <div className="ml-auto flex items-center gap-2 bg-indigo-500/20 px-3 py-1 rounded-full">
                    <MapPin className="w-4 h-4 text-indigo-300" />
                    <span className="text-indigo-300 font-semibold">{currentOpportunity.location}</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-200 mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Objectives
                    </h3>
                    <ul className="space-y-2">
                      {currentOpportunity.objectives.map((objective, index) => (
                        <li key={index} className="text-blue-100 text-sm flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-blue-400 mt-1 flex-shrink-0" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-orange-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-200 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Challenges
                    </h3>
                    <ul className="space-y-2">
                      {currentOpportunity.challenges.map((challenge, index) => (
                        <li key={index} className="text-orange-100 text-sm flex items-start gap-2">
                          <Star className="w-3 h-3 text-orange-400 mt-1 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-purple-200 mb-3">👥 Available Contacts</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {currentOpportunity.contacts.map((contact, index) => (
                      <div key={contact.id} className="bg-white/10 rounded p-3 text-center">
                        <div className="text-2xl mb-1">{contact.avatar}</div>
                        <div className="font-semibold text-white text-sm">{contact.name}</div>
                        <div className="text-xs text-gray-400">{contact.title}</div>
                        <div className="text-xs text-purple-300">{contact.company}</div>
                        <div className="text-xs mt-1">{contact.flag}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Bắt Đầu Networking
                </button>
              </div>
            )}

            {gamePhase === 'networking' && currentContact && (
              /* Contact Introduction */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{currentContact.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-2xl font-bold text-white">{currentContact.name}</h2>
                      <span className="text-lg">{currentContact.flag}</span>
                    </div>
                    <div className="text-indigo-300 font-semibold">{currentContact.title}</div>
                    <div className="text-gray-400 text-sm">{currentContact.company} • {currentContact.country}</div>
                  </div>
                  <div className="text-right">
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getPersonalityColor(currentContact.personality)}`}>
                      {currentContact.personality}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Network Value: {currentContact.networkValue}/10</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-green-200 mb-3">🎯 Interests & Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentContact.interests.map((interest, index) => (
                        <span key={index} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                          {interest}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 text-sm text-green-100">
                      <strong>Industry:</strong> {currentContact.industry}
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-200 mb-3">💡 Networking Tips</h3>
                    <div className="text-blue-100 text-sm">
                      <div className="mb-2"><strong>Preferred Approach:</strong></div>
                      <div className="bg-white/10 rounded p-2">{currentContact.preferredApproach}</div>
                      <div className="mt-2 text-xs text-blue-300">
                        Difficulty: {currentContact.difficulty}/10 ⭐
                      </div>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Chọn Chiến Lược Networking
                </button>
              </div>
            )}

            {gamePhase === 'strategy' && (
              /* Strategy Selection */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">🎯 Chọn Chiến Lược Networking</h2>
                <p className="text-indigo-200 mb-6">
                  Chọn approach phù hợp nhất với personality và background của {currentContact?.name}:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {NETWORKING_STRATEGIES.map((strategy, index) => (
                    <button
                      key={strategy.id}
                      onClick={() => setSelectedStrategy(strategy)}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                        selectedStrategy?.id === strategy.id
                          ? 'border-indigo-400 bg-indigo-500/20'
                          : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-white">{strategy.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">{strategy.timeRequired}s</span>
                          {currentContact && (
                            <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                              {strategy.effectiveness[currentContact.personality]}/10
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">{strategy.description}</p>
                      <div className="mt-2 text-xs text-indigo-300">
                        Success Rate: {strategy.successRate}%
                      </div>
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={nextPhase}
                  disabled={!selectedStrategy}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Bắt Đầu Conversation
                </button>
              </div>
            )}

            {gamePhase === 'conversation' && selectedStrategy && currentContact && (
              /* Conversation Simulation */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">💬 Networking Conversation</h2>
                
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{currentContact.avatar}</div>
                    <div>
                      <div className="text-white font-semibold">{currentContact.name}</div>
                      <div className="text-gray-400 text-sm">{currentContact.title}</div>
                    </div>
                    <div className="ml-auto">
                      <div className="bg-indigo-500/20 px-3 py-1 rounded-full">
                        <span className="text-indigo-300 text-sm font-semibold">{selectedStrategy.name}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-white mb-2">🎯 Your Approach:</h3>
                    <p className="text-gray-300 text-sm">{selectedStrategy.description}</p>
                    <div className="mt-2 text-xs text-indigo-300">
                      Estimated time: {selectedStrategy.timeRequired} seconds
                    </div>
                  </div>
                  
                  <div className="bg-purple-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-200 mb-2">🔮 Predicted Outcome:</h3>
                    <div className="grid md:grid-cols-3 gap-3 text-sm">
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-400">
                          {selectedStrategy.effectiveness[currentContact.personality]}/10
                        </div>
                        <div className="text-purple-200">Personality Match</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-400">
                          {selectedStrategy.successRate}%
                        </div>
                        <div className="text-blue-200">Base Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-400">
                          {currentContact.networkValue * 10}
                        </div>
                        <div className="text-green-200">Potential Score</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Thực Hiện Networking
                </button>
              </div>
            )}

            {gamePhase === 'results' && (
              /* Final Results */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">🏆 Kết Quả Networking</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">{Math.round(score)}</div>
                    <div className="text-blue-200 font-semibold">Total Score</div>
                    <div className="text-xs text-gray-300 mt-1">Professional Network Value</div>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-4 text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {networkingResults.filter(r => r.success).length}
                    </div>
                    <div className="text-green-200 font-semibold">Successful Connections</div>
                    <div className="text-xs text-gray-300 mt-1">/ {networkingResults.length} total contacts</div>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4 text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">{networkingTime}s</div>
                    <div className="text-purple-200 font-semibold">Time Used</div>
                    <div className="text-xs text-gray-300 mt-1">Networking Efficiency</div>
                  </div>
                </div>
                
                <div className="bg-indigo-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-indigo-200 mb-3">📋 Networking Summary</h3>
                  <div className="space-y-3">
                    {networkingResults.map((result, index) => (
                      <div key={index} className="bg-white/5 rounded p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{result.contact.avatar}</span>
                            <div>
                              <span className="font-semibold text-white">{result.contact.name}</span>
                              <div className="text-xs text-gray-400">{result.contact.company}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`font-semibold ${result.success ? 'text-green-400' : 'text-orange-400'}`}>
                              {result.success ? '✅' : '⚠️'} +{result.score}
                            </div>
                            <div className="text-xs text-gray-400">{result.strategy.name}</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">{result.feedback}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {score >= 600 ? '🌟 Networking Master!' : 
                     score >= 400 ? '🎯 Professional Networker!' : 
                     '📚 Keep Building!'}
                  </h3>
                  <p className="text-indigo-200">
                    {score >= 600 
                      ? 'Outstanding! You have excellent networking skills and can build valuable professional relationships.' 
                      : score >= 400 
                      ? 'Great job! You show strong networking potential with room for strategic improvement.' 
                      : 'Good start! Continue practicing and refining your networking approach for better results.'
                    }
                  </p>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={restartGame}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Try Again
                  </button>
                  <button
                    onClick={() => onComplete(score >= 400, score)}
                    className="bg-gradient-to-r from-indigo-500 to-pink-600 hover:from-indigo-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
                  >
                    <Award className="w-5 h-5" />
                    Complete
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InternationalNetworkingChallengeGame;