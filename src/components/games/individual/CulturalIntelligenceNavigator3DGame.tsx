import React, { useState, useEffect, useCallback } from 'react';
import { 
  Globe, 
  Users, 
  Compass, 
  Heart, 
  Star, 
  Award,
  Play,
  RotateCcw,
  Map,
  MessageSquare,
  Coffee,
  Handshake,
  Languages,
  Eye,
  CheckCircle,
  AlertTriangle,
  Target
} from 'lucide-react';

interface CulturalIntelligenceNavigator3DGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface CulturalScenario {
  id: string;
  title: string;
  country: string;
  context: string;
  description: string;
  culturalFactors: string[];
  challenges: string[];
  flag: string;
}

interface CulturalResponse {
  id: string;
  text: string;
  culturalScore: number; // 1-10
  reasoning: string;
  consequences: string;
  isRecommended: boolean;
}

interface CulturalDimension {
  name: string;
  description: string;
  lowEnd: string;
  highEnd: string;
  score: number;
}

const CULTURAL_SCENARIOS: CulturalScenario[] = [
  {
    id: 'japan-business',
    title: 'Cuộc Họp Kinh Doanh Tại Nhật Bản',
    country: 'Nhật Bản',
    context: 'Cuộc họp với đối tác Nhật Bản',
    description: 'Bạn được mời tham dự cuộc họp quan trọng với một công ty lớn ở Tokyo. Đây là lần đầu tiên bạn làm việc với đối tác Nhật Bản và muốn tạo ấn tượng tốt.',
    culturalFactors: [
      'Tôn trọng thứ bậc (Hierarchy)',
      'Sự lịch sự và khiêm tốn',
      'Tầm quan trọng của danh thiếp',
      'Quy trình ra quyết định tập thể',
      'Tránh làm mất mặt người khác'
    ],
    challenges: [
      'Cách chào hỏi phù hợp',
      'Thứ tự ngồi trong cuộc họp',
      'Cách trao đổi danh thiếp',
      'Phong cách thuyết trình',
      'Xử lý bất đồng ý kiến'
    ],
    flag: '🇯🇵'
  },
  {
    id: 'arabia-negotiation',
    title: 'Đàm Phán Kinh Doanh Ở UAE',
    country: 'UAE (Các Tiểu Vương Quốc Ả Rập Thống Nhất)',
    context: 'Đàm phán hợp đồng tại Dubai',
    description: 'Bạn đang đàm phán một hợp đồng xuất khẩu lớn với một công ty ở Dubai. Đối tác rất quan tâm nhưng quá trình đàm phán kéo dài và có nhiều yếu tố văn hóa cần cân nhắc.',
    culturalFactors: [
      'Tầm quan trọng của mối quan hệ cá nhân',
      'Kiên nhẫn trong đàm phán',
      'Tôn trọng truyền thống Hồi giáo',
      'Khái niệm thời gian linh hoạt',
      'Vai trò của danh dự và uy tín'
    ],
    challenges: [
      'Xây dựng lòng tin trước khi kinh doanh',
      'Hiểu về tập quán tôn giáo',
      'Điều chỉnh kỳ vọng về thời gian',
      'Thể hiện sự tôn trọng văn hóa địa phương',
      'Cân bằng giữa chuyên nghiệp và cá nhân'
    ],
    flag: '🇦🇪'
  },
  {
    id: 'brazil-team',
    title: 'Làm Việc Nhóm Ở Brazil',
    country: 'Brazil',
    context: 'Dự án nhóm quốc tế tại São Paulo',
    description: 'Bạn được phân công làm việc với một đội ngũ đa văn hóa tại Brazil. Dự án rất quan trọng nhưng phong cách làm việc ở đây khác hoàn toàn so với kinh nghiệm trước đây của bạn.',
    culturalFactors: [
      'Mối quan hệ cá nhân quan trọng hơn nhiệm vụ',
      'Phong cách giao tiếp trực tiếp và cảm xúc',
      'Linh hoạt về thời gian và kế hoạch',
      'Tầm quan trọng của việc chia sẻ cá nhân',
      'Văn hóa celebration và team bonding'
    ],
    challenges: [
      'Tham gia các hoạt động xã hội nhóm',
      'Thích nghi với lịch trình linh hoạt',
      'Xây dựng mối quan hệ cá nhân',
      'Hiểu cách thức ra quyết định của nhóm',
      'Cân bằng giữa work và life'
    ],
    flag: '🇧🇷'
  },
  {
    id: 'germany-precision',
    title: 'Dự Án Kỹ Thuật Ở Đức',
    country: 'Đức',
    context: 'Quản lý dự án công nghệ tại Berlin',
    description: 'Bạn được giao quản lý một dự án công nghệ phức tạp với đội ngũ kỹ sư người Đức. Họ có tiêu chuẩn rất cao về chất lượng và quy trình làm việc.',
    culturalFactors: [
      'Chính xác và chi tiết trong mọi việc',
      'Tôn trọng quy trình và thời gian',
      'Giao tiếp trực tiếp và thẳng thắn',
      'Tầm quan trọng của chuyên môn',
      'Phân biệt rõ ràng giữa công việc và đời tư'
    ],
    challenges: [
      'Duy trì tiêu chuẩn chất lượng cao',
      'Giao tiếp feedback trực tiếp',
      'Lập kế hoạch chi tiết và tuân thủ',
      'Thể hiện năng lực chuyên môn',
      'Tôn trọng work-life balance'
    ],
    flag: '🇩🇪'
  }
];

const CULTURAL_RESPONSES: { [scenarioId: string]: CulturalResponse[] } = {
  'japan-business': [
    {
      id: 'bow-formally',
      text: 'Cúi chào sâu và trao danh thiếp bằng hai tay, chờ được mời ngồi',
      culturalScore: 9,
      reasoning: 'Thể hiện sự tôn trọng phù hợp với văn hóa Nhật Bản',
      consequences: 'Tạo ấn tượng tích cực, được đánh giá cao về hiểu biết văn hóa',
      isRecommended: true
    },
    {
      id: 'handshake-casual',
      text: 'Bắt tay thân thiện và giới thiệu bản thân một cách tự tin',
      culturalScore: 4,
      reasoning: 'Phong cách Western không phù hợp hoàn toàn với văn hóa Nhật',
      consequences: 'Không tạo ấn tượng xấu nhưng bỏ lỡ cơ hội thể hiện sự tôn trọng',
      isRecommended: false
    },
    {
      id: 'direct-presentation',
      text: 'Thuyết trình trực tiếp về lợi ích và yêu cầu quyết định nhanh',
      culturalScore: 3,
      reasoning: 'Quá trực tiếp và gây áp lực không phù hợp với văn hóa đồng thuận',
      consequences: 'Có thể làm đối tác cảm thấy không thoải mái và khó chịu',
      isRecommended: false
    }
  ],
  'arabia-negotiation': [
    {
      id: 'relationship-first',
      text: 'Dành thời gian tìm hiểu về gia đình và sở thích của đối tác trước khi bàn về kinh doanh',
      culturalScore: 9,
      reasoning: 'Xây dựng mối quan hệ cá nhân là nền tảng cho thành công kinh doanh',
      consequences: 'Tạo lòng tin, đối tác sẽ cởi mở và hợp tác hơn trong đàm phán',
      isRecommended: true
    },
    {
      id: 'time-pressure',
      text: 'Nhấn mạnh deadline và yêu cầu đối tác đưa ra quyết định trong tuần này',
      culturalScore: 2,
      reasoning: 'Gây áp lực về thời gian trái với văn hóa kiên nhẫn và mối quan hệ',
      consequences: 'Đối tác có thể cảm thấy bị xúc phạm và từ chối hợp tác',
      isRecommended: false
    },
    {
      id: 'cultural-respect',
      text: 'Thể hiện sự tôn trọng với truyền thống địa phương và kiên nhẫn trong quy trình',
      culturalScore: 8,
      reasoning: 'Tôn trọng văn hóa và tôn giáo là yếu tố quan trọng trong kinh doanh',
      consequences: 'Được đánh giá cao về sự hiểu biết và tôn trọng văn hóa',
      isRecommended: true
    }
  ],
  'brazil-team': [
    {
      id: 'social-bonding',
      text: 'Tham gia tích cực các hoạt động nhóm và chia sẻ về cuộc sống cá nhân',
      culturalScore: 9,
      reasoning: 'Xây dựng mối quan hệ cá nhân là chìa khóa thành công ở Brazil',
      consequences: 'Được nhóm chấp nhận, tạo môi trường làm việc hài hòa và hiệu quả',
      isRecommended: true
    },
    {
      id: 'task-focused',
      text: 'Tập trung hoàn toàn vào công việc và tránh các cuộc trò chuyện cá nhân',
      culturalScore: 3,
      reasoning: 'Quá tập trung vào nhiệm vụ mà bỏ qua yếu tố con người',
      consequences: 'Được coi là lạnh lùng, khó hòa nhập và ảnh hưởng đến hiệu quả nhóm',
      isRecommended: false
    },
    {
      id: 'flexible-approach',
      text: 'Thích ứng với lịch trình linh hoạt và phong cách làm việc của địa phương',
      culturalScore: 8,
      reasoning: 'Thể hiện sự thích ứng với văn hóa làm việc Brazil',
      consequences: 'Dễ hợp tác, nhưng cần cân bằng để đảm bảo tiến độ dự án',
      isRecommended: true
    }
  ],
  'germany-precision': [
    {
      id: 'detailed-planning',
      text: 'Chuẩn bị kế hoạch chi tiết, timeline rõ ràng và tuân thủ nghiêm ngặt',
      culturalScore: 10,
      reasoning: 'Hoàn toàn phù hợp với văn hóa chính xác và có tổ chức của Đức',
      consequences: 'Được tin tưởng và đánh giá cao về năng lực quản lý chuyên nghiệp',
      isRecommended: true
    },
    {
      id: 'casual-flexible',
      text: 'Giữ phong cách linh hoạt và điều chỉnh kế hoạch theo tình hình',
      culturalScore: 2,
      reasoning: 'Thiếu tính có tổ chức và chính xác mà văn hóa Đức đề cao',
      consequences: 'Mất lòng tin, được coi là thiếu chuyên nghiệp và không đáng tin cậy',
      isRecommended: false
    },
    {
      id: 'direct-feedback',
      text: 'Đưa ra feedback trực tiếp và xây dựng, tập trung vào giải pháp',
      culturalScore: 9,
      reasoning: 'Phù hợp với phong cách giao tiếp thẳng thắn và hiệu quả',
      consequences: 'Được đánh giá cao về sự chân thành và khả năng đóng góp xây dựng',
      isRecommended: true
    }
  ]
};

const CULTURAL_DIMENSIONS: CulturalDimension[] = [
  {
    name: 'Khoảng Cách Quyền Lực',
    description: 'Mức độ chấp nhận sự bất bình đẳng trong xã hội',
    lowEnd: 'Bình đẳng, informal',
    highEnd: 'Thứ bậc, formal',
    score: 5
  },
  {
    name: 'Chủ Nghĩa Cá Nhân vs Tập Thể',
    description: 'Ưu tiên lợi ích cá nhân hay nhóm',
    lowEnd: 'Tập thể, harmony',
    highEnd: 'Cá nhân, independence',
    score: 5
  },
  {
    name: 'Tránh Rủi Ro',
    description: 'Mức độ thoải mái với sự không chắc chắn',
    lowEnd: 'Linh hoạt, risk-taking',
    highEnd: 'Cẩn trọng, rule-following',
    score: 5
  },
  {
    name: 'Hướng Thời Gian',
    description: 'Tập trung vào quá khứ/hiện tại hay tương lai',
    lowEnd: 'Ngắn hạn, tradition',
    highEnd: 'Dài hạn, adaptation',
    score: 5
  }
];

const CulturalIntelligenceNavigator3DGame: React.FC<CulturalIntelligenceNavigator3DGameProps> = ({
  onComplete,
  timeLeft,
  onRestart
}) => {
  const [currentScenario, setCurrentScenario] = useState<CulturalScenario>(CULTURAL_SCENARIOS[0]);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selectedResponse, setSelectedResponse] = useState<CulturalResponse | null>(null);
  const [gamePhase, setGamePhase] = useState<'intro' | 'briefing' | 'scenario' | 'response' | 'feedback' | 'results'>('intro');
  const [score, setScore] = useState(0);
  const [culturalAwareness, setCulturalAwareness] = useState<CulturalDimension[]>(CULTURAL_DIMENSIONS.map(d => ({...d})));
  const [scenarioResults, setScenarioResults] = useState<Array<{scenario: CulturalScenario, response: CulturalResponse, score: number}>>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const evaluateResponse = useCallback((response: CulturalResponse) => {
    const baseScore = response.culturalScore * 10;
    const bonusScore = response.isRecommended ? 20 : 0;
    const finalScore = baseScore + bonusScore;
    
    // Update cultural awareness based on response quality
    setCulturalAwareness(prev => prev.map(dim => ({
      ...dim,
      score: Math.min(10, dim.score + (response.culturalScore >= 7 ? 0.5 : -0.2))
    })));
    
    setScore(prev => prev + finalScore);
    
    setScenarioResults(prev => [...prev, {
      scenario: currentScenario,
      response: response,
      score: finalScore
    }]);
  }, [currentScenario]);

  const nextScenario = () => {
    if (scenarioIndex < CULTURAL_SCENARIOS.length - 1) {
      setScenarioIndex(prev => prev + 1);
      setCurrentScenario(CULTURAL_SCENARIOS[scenarioIndex + 1]);
      setSelectedResponse(null);
      setGamePhase('briefing');
    } else {
      setGamePhase('results');
    }
  };

  const startGame = () => {
    setIsPlaying(true);
    setGamePhase('intro');
    setScenarioIndex(0);
    setCurrentScenario(CULTURAL_SCENARIOS[0]);
    setSelectedResponse(null);
    setScore(0);
    setCulturalAwareness(CULTURAL_DIMENSIONS.map(d => ({...d})));
    setScenarioResults([]);
  };

  const nextPhase = () => {
    switch (gamePhase) {
      case 'intro':
        setGamePhase('briefing');
        break;
      case 'briefing':
        setGamePhase('scenario');
        break;
      case 'scenario':
        setGamePhase('response');
        break;
      case 'response':
        if (selectedResponse) {
          evaluateResponse(selectedResponse);
          setGamePhase('feedback');
        }
        break;
      case 'feedback':
        nextScenario();
        break;
      case 'results':
        onComplete(score >= 300, score);
        break;
    }
  };

  const restartGame = () => {
    setCurrentScenario(CULTURAL_SCENARIOS[0]);
    setScenarioIndex(0);
    setSelectedResponse(null);
    setGamePhase('intro');
    setScore(0);
    setCulturalAwareness(CULTURAL_DIMENSIONS.map(d => ({...d})));
    setScenarioResults([]);
    setIsPlaying(false);
    onRestart();
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  useEffect(() => {
    if (timeLeft <= 0 && isPlaying) {
      onComplete(false, score);
    }
  }, [timeLeft, isPlaying, score, onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-teal-500/20 p-3 rounded-xl">
                <Globe className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">🌍 Điều Hướng Trí Tuệ Văn Hóa 3D</h1>
                <p className="text-teal-200">Phát triển kỹ năng làm việc đa văn hóa</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-teal-400">{Math.round(score)}</div>
                <div className="text-sm text-teal-200">Điểm số</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-cyan-400">
                  {Math.round(culturalAwareness.reduce((sum, dim) => sum + dim.score, 0) / culturalAwareness.length * 10)}
                </div>
                <div className="text-sm text-teal-200">IQ Văn hóa</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-yellow-400">{Math.ceil(timeLeft / 60)}</div>
                <div className="text-sm text-teal-200">Phút</div>
              </div>
            </div>
          </div>
        </div>

        {!isPlaying ? (
          /* Start Screen */
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center">
            <div className="bg-teal-500/20 p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Compass className="w-12 h-12 text-teal-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Chào Mừng Đến Thế Giới Đa Văn Hóa!</h2>
            <p className="text-teal-200 text-lg mb-8 max-w-2xl mx-auto">
              Khám phá và phát triển trí tuệ văn hóa qua các tình huống thực tế từ khắp nơi trên thế giới. 
              Học cách giao tiếp và hợp tác hiệu quả với người từ nhiều nền văn hóa khác nhau.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-blue-900/30 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-blue-200 mb-2">🎯 Kỹ Năng Phát Triển</h3>
                <ul className="text-blue-100 text-sm space-y-1">
                  <li>• Nhận thức văn hóa</li>
                  <li>• Giao tiếp đa văn hóa</li>
                  <li>• Thích ứng hành vi</li>
                  <li>• Xây dựng mối quan hệ quốc tế</li>
                </ul>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-purple-200 mb-2">🌏 Trải Nghiệm</h3>
                <ul className="text-purple-100 text-sm space-y-1">
                  <li>• 4 quốc gia (Nhật, UAE, Brazil, Đức)</li>
                  <li>• Tình huống kinh doanh thực tế</li>
                  <li>• Phản hồi chi tiết và học hỏi</li>
                  <li>• Đánh giá trí tuệ văn hóa</li>
                </ul>
              </div>
            </div>
            <button
              onClick={startGame}
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-2 mx-auto"
            >
              <Play className="w-6 h-6" />
              Bắt Đầu Hành Trình
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-teal-200">Tình huống {scenarioIndex + 1}/{CULTURAL_SCENARIOS.length}</span>
                <span className="text-cyan-300 capitalize">{gamePhase}</span>
              </div>
              <div className="w-full bg-cyan-900/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(scenarioIndex / CULTURAL_SCENARIOS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {gamePhase === 'intro' && (
              /* Introduction Phase */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">🌟 Trí Tuệ Văn Hóa Là Gì?</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-teal-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-teal-200 mb-3">📚 Định Nghĩa</h3>
                    <p className="text-white text-sm mb-3">
                      Cultural Intelligence (CQ) là khả năng hoạt động hiệu quả trong các môi trường đa văn hóa. 
                      Đây là kỹ năng quan trọng trong thời đại toàn cầu hóa.
                    </p>
                    <div className="text-teal-300 text-xs space-y-1">
                      <div>• <strong>CQ Drive:</strong> Động lực tìm hiểu văn hóa khác</div>
                      <div>• <strong>CQ Knowledge:</strong> Hiểu biết về hệ thống văn hóa</div>
                      <div>• <strong>CQ Strategy:</strong> Lập kế hoạch cho tương tác đa văn hóa</div>
                      <div>• <strong>CQ Action:</strong> Thích ứng hành vi phù hợp</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-200 mb-3">🌍 Tại Sao Quan Trọng?</h3>
                    <div className="space-y-3 text-sm">
                      <div className="bg-white/10 rounded p-2">
                        <div className="font-semibold text-white">Kinh Doanh Toàn Cầu</div>
                        <div className="text-gray-300">Thành công trong thương mại quốc tế</div>
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        <div className="font-semibold text-white">Đội Ngũ Đa Dạng</div>
                        <div className="text-gray-300">Hợp tác hiệu quả với đồng nghiệp quốc tế</div>
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        <div className="font-semibold text-white">Phát Triển Cá Nhân</div>
                        <div className="text-gray-300">Mở rộng tầm nhìn và cơ hội nghề nghiệp</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-purple-200 mb-3">🎯 Cách Đánh Giá</h3>
                  <div className="grid md:grid-cols-4 gap-3">
                    {CULTURAL_DIMENSIONS.map((dimension, index) => (
                      <div key={index} className="text-center">
                        <div className="font-semibold text-white text-sm mb-1">{dimension.name}</div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-blue-400 h-2 rounded-full"
                            style={{ width: `${dimension.score * 10}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-400">{dimension.score}/10</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Bắt Đầu Tình Huống Đầu Tiên
                </button>
              </div>
            )}

            {gamePhase === 'briefing' && (
              /* Scenario Briefing */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{currentScenario.flag}</span>
                  <h2 className="text-2xl font-bold text-white">{currentScenario.title}</h2>
                  <div className="ml-auto bg-teal-500/20 px-3 py-1 rounded-full">
                    <span className="text-teal-300 font-semibold">{currentScenario.country}</span>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4 mb-6">
                  <p className="text-white text-lg leading-relaxed">{currentScenario.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-200 mb-3 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Yếu Tố Văn Hóa Quan Trọng
                    </h3>
                    <ul className="space-y-2">
                      {currentScenario.culturalFactors.map((factor, index) => (
                        <li key={index} className="text-blue-100 text-sm flex items-start gap-2">
                          <Star className="w-3 h-3 text-blue-400 mt-1 flex-shrink-0" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-orange-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-200 mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Thách Thức Chính
                    </h3>
                    <ul className="space-y-2">
                      {currentScenario.challenges.map((challenge, index) => (
                        <li key={index} className="text-orange-100 text-sm flex items-start gap-2">
                          <AlertTriangle className="w-3 h-3 text-orange-400 mt-1 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Tiến Vào Tình Huống
                </button>
              </div>
            )}

            {gamePhase === 'scenario' && (
              /* 3D Scenario Visualization */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">🎬 Tình Huống Thực Tế</h2>
                
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10"></div>
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-2">{currentScenario.flag}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{currentScenario.context}</h3>
                      <div className="text-teal-300">{currentScenario.country}</div>
                    </div>
                    
                    {/* 3D Scene Representation */}
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center transform perspective-1000 rotate-y-12">
                        <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                        <div className="text-white font-semibold">Bạn</div>
                        <div className="text-xs text-gray-300">Visitor/Partner</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center transform perspective-1000">
                        <Handshake className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <div className="text-white font-semibold">Tương Tác</div>
                        <div className="text-xs text-gray-300">Cultural Exchange</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center transform perspective-1000 rotate-y-12">
                        <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <div className="text-white font-semibold">Đối Tác</div>
                        <div className="text-xs text-gray-300">Local Host</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-white text-lg mb-4">
                        Bạn đang ở: <span className="font-semibold text-teal-300">{currentScenario.context}</span>
                      </p>
                      <p className="text-gray-300">
                        Hãy chuẩn bị tinh thần để đưa ra quyết định phù hợp với văn hóa địa phương!
                      </p>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Đưa Ra Phản Ứng
                </button>
              </div>
            )}

            {gamePhase === 'response' && (
              /* Response Selection */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">🤔 Bạn Sẽ Phản Ứng Như Thế Nào?</h2>
                <p className="text-teal-200 mb-6">
                  Chọn cách phản ứng phù hợp nhất với tình huống và văn hóa địa phương:
                </p>
                
                <div className="space-y-4 mb-6">
                  {CULTURAL_RESPONSES[currentScenario.id]?.map((response, index) => (
                    <button
                      key={response.id}
                      onClick={() => setSelectedResponse(response)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                        selectedResponse?.id === response.id
                          ? 'border-teal-400 bg-teal-500/20'
                          : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-teal-500/20 text-teal-300 px-2 py-1 rounded text-xs font-semibold">
                              Lựa chọn {String.fromCharCode(65 + index)}
                            </span>
                          </div>
                          <p className="text-white text-sm">{response.text}</p>
                        </div>
                        {selectedResponse?.id === response.id && (
                          <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 ml-2" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={nextPhase}
                  disabled={!selectedResponse}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Xác Nhận Lựa Chọn
                </button>
              </div>
            )}

            {gamePhase === 'feedback' && selectedResponse && (
              /* Feedback Phase */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">📊 Phản Hồi Chi Tiết</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-200 mb-3">📈 Đánh Giá</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-300">Điểm Văn Hóa</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-blue-400 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${selectedResponse.culturalScore * 10}%` }}
                            ></div>
                          </div>
                          <span className={`font-semibold ${getScoreColor(selectedResponse.culturalScore * 10)}`}>
                            {selectedResponse.culturalScore}/10
                          </span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${selectedResponse.isRecommended ? 'text-green-400' : 'text-orange-400'}`}>
                          {selectedResponse.isRecommended ? '✅ Khuyến Khích' : '⚠️ Cần Cân Nhắc'}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-200 mb-3">💡 Phân Tích</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong className="text-white">Lý do:</strong>
                        <p className="text-purple-100 mt-1">{selectedResponse.reasoning}</p>
                      </div>
                      <div>
                        <strong className="text-white">Hệ quả:</strong>
                        <p className="text-purple-100 mt-1">{selectedResponse.consequences}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-teal-200 mb-3">🎯 Điểm Số Earned</h3>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                      +{selectedResponse.culturalScore * 10 + (selectedResponse.isRecommended ? 20 : 0)}
                    </div>
                    <div className="text-teal-200">điểm cho phản ứng này</div>
                  </div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  {scenarioIndex < CULTURAL_SCENARIOS.length - 1 ? 'Tình Huống Tiếp Theo' : 'Xem Kết Quả Cuối'}
                </button>
              </div>
            )}

            {gamePhase === 'results' && (
              /* Final Results */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">🌟 Kết Quả Trí Tuệ Văn Hóa</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">{Math.round(score)}</div>
                    <div className="text-blue-200 font-semibold">Tổng Điểm</div>
                    <div className="text-xs text-gray-300 mt-1">Tối đa: 400 điểm</div>
                  </div>
                  
                  <div className="bg-teal-900/30 rounded-lg p-4 text-center">
                    <div className="text-4xl font-bold text-teal-400 mb-2">
                      {Math.round(culturalAwareness.reduce((sum, dim) => sum + dim.score, 0) / culturalAwareness.length * 10)}
                    </div>
                    <div className="text-teal-200 font-semibold">CQ Score</div>
                    <div className="text-xs text-gray-300 mt-1">Cultural Intelligence</div>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4 text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {scenarioResults.filter(r => r.response.isRecommended).length}
                    </div>
                    <div className="text-purple-200 font-semibold">Phản Ứng Tối Ưu</div>
                    <div className="text-xs text-gray-300 mt-1">/ {CULTURAL_SCENARIOS.length} tình huống</div>
                  </div>
                </div>
                
                <div className="bg-cyan-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-cyan-200 mb-3">📋 Tóm Tắt Hành Trình</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {scenarioResults.map((result, index) => (
                      <div key={index} className="bg-white/5 rounded p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="font-semibold text-white">{result.scenario.country}</span>
                            <div className="text-xs text-gray-400">{result.scenario.title}</div>
                          </div>
                          <div className="text-right">
                            <div className={`font-semibold ${getScoreColor(result.score)}`}>
                              +{result.score}
                            </div>
                            <div className="text-xs">
                              {result.response.isRecommended ? '✅' : '⚠️'}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {score >= 320 ? '🌟 Chuyên Gia Văn Hóa!' : 
                     score >= 240 ? '👍 Nhận Thức Tốt!' : 
                     '📚 Cần Phát Triển Thêm'}
                  </h3>
                  <p className="text-teal-200">
                    {score >= 320 
                      ? 'Xuất sắc! Bạn có trí tuệ văn hóa cao và có thể thành công trong môi trường quốc tế.' 
                      : score >= 240 
                      ? 'Tốt! Bạn đã có nền tảng tốt, hãy tiếp tục phát triển kỹ năng này.' 
                      : 'Đây là bước đầu tuyệt vời! Hãy tiếp tục học hỏi về các văn hóa khác nhau.'
                    }
                  </p>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={restartGame}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Thử Lại
                  </button>
                  <button
                    onClick={() => onComplete(score >= 240, score)}
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
                  >
                    <Award className="w-5 h-5" />
                    Hoàn Thành
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

export default CulturalIntelligenceNavigator3DGame;