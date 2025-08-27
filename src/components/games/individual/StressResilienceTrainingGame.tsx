import React, { useState, useEffect, useCallback } from 'react';
import { 
  Heart, 
  Brain, 
  Shield, 
  Activity, 
  Compass, 
  Award,
  Play,
  RotateCcw,
  Target,
  Timer,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Zap,
  Coffee,
  Moon
} from 'lucide-react';

interface StressResilienceTrainingGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface StressScenario {
  id: string;
  title: string;
  description: string;
  stressLevel: number; // 1-10
  category: 'work' | 'personal' | 'social' | 'health';
  triggers: string[];
  physicalSymptoms: string[];
  emotionalSymptoms: string[];
  immediateThoughts: string[];
}

interface CopingStrategy {
  id: string;
  name: string;
  type: 'breathing' | 'cognitive' | 'physical' | 'mindfulness' | 'social';
  effectiveness: number; // 1-10
  timeRequired: number; // minutes
  description: string;
  steps: string[];
  icon: React.ReactNode;
  bestFor: string[];
}

interface TrainingSession {
  scenario: StressScenario;
  selectedStrategies: CopingStrategy[];
  stressReduction: number;
  resilienceGain: number;
  effectiveness: number;
}

const STRESS_SCENARIOS: StressScenario[] = [
  {
    id: 'deadline-pressure',
    title: 'Áp Lực Deadline Công Việc',
    description: 'Bạn có 3 dự án quan trọng cần hoàn thành trong tuần này nhưng thời gian không đủ. Sếp liên tục hỏi tiến độ.',
    stressLevel: 8,
    category: 'work',
    triggers: ['Thời gian không đủ', 'Áp lực từ cấp trên', 'Khối lượng công việc quá lớn'],
    physicalSymptoms: ['Đau đầu', 'Căng thẳng cơ vai gáy', 'Khó ngủ', 'Mệt mỏi'],
    emotionalSymptoms: ['Lo lắng', 'Cáu gắt', 'Cảm giác bất lực', 'Sợ thất bại'],
    immediateThoughts: ['Tôi không thể hoàn thành được', 'Tôi sẽ bị sa thải', 'Tôi quá tệ']
  },
  {
    id: 'relationship-conflict',
    title: 'Xung Đột Trong Mối Quan Hệ',
    description: 'Bạn và người yêu vừa có cuộc cãi vã lớn về tương lai. Cả hai đều tức giận và không muốn nói chuyện.',
    stressLevel: 7,
    category: 'personal',
    triggers: ['Bất đồng quan điểm', 'Thiếu hiểu biết', 'Kỳ vọng không thực tế'],
    physicalSymptoms: ['Tim đập nhanh', 'Khó thở', 'Căng thẳng', 'Mất ngủ'],
    emotionalSymptoms: ['Tủi thân', 'Tức giận', 'Buồn bã', 'Cô đơn'],
    immediateThoughts: ['Mối quan hệ này không có tương lai', 'Tôi không đủ tốt', 'Tại sao lại như vậy?']
  },
  {
    id: 'public-presentation',
    title: 'Thuyết Trình Trước Đám Đông',
    description: 'Bạn cần thuyết trình một dự án quan trọng trước 100 người, bao gồm cấp trên và đối tác. Thời gian chuẩn bị không nhiều.',
    stressLevel: 9,
    category: 'social',
    triggers: ['Sợ bị đánh giá', 'Lo sai sót', 'Thiếu tự tin'],
    physicalSymptoms: ['Run tay', 'Đổ mồ hôi', 'Khô miệng', 'Buồn nôn'],
    emotionalSymptoms: ['Lo lắng cực độ', 'Sợ hãi', 'Tự ti', 'Hoảng loạn'],
    immediateThoughts: ['Tôi sẽ thất bại thảm hại', 'Mọi người sẽ cười nhạo tôi', 'Tôi không xứng đáng']
  },
  {
    id: 'health-concern',
    title: 'Lo Lắng Về Sức Khỏe',
    description: 'Bạn phát hiện một khối u nhỏ trên cơ thể và phải chờ 1 tuần nữa mới có kết quả xét nghiệm.',
    stressLevel: 10,
    category: 'health',
    triggers: ['Không chắc chắn về tương lai', 'Sợ bệnh tật', 'Cảm giác mất kiểm soát'],
    physicalSymptoms: ['Mất ngủ hoàn toàn', 'Không ăn được', 'Tim đập nhanh', 'Hoa mắt chóng mặt'],
    emotionalSymptoms: ['Sợ chết', 'Tuyệt vọng', 'Lo lắng cực độ', 'Trầm cảm'],
    immediateThoughts: ['Tôi có thể bị ung thư', 'Tôi sẽ chết', 'Gia đình tôi sẽ ra sao?']
  }
];

const COPING_STRATEGIES: CopingStrategy[] = [
  {
    id: 'box-breathing',
    name: 'Hít Thở Hộp (Box Breathing)',
    type: 'breathing',
    effectiveness: 8,
    timeRequired: 3,
    description: 'Kỹ thuật hít thở để làm dịu hệ thần kinh và giảm lo lắng tức thì',
    steps: [
      'Hít vào từ từ trong 4 giây',
      'Giữ hơi trong 4 giây', 
      'Thở ra từ từ trong 4 giây',
      'Tạm dừng 4 giây trước khi hít tiếp',
      'Lặp lại 4-6 lần'
    ],
    icon: <Activity className="w-4 h-4" />,
    bestFor: ['Lo lắng cấp tính', 'Hoảng loạn', 'Căng thẳng']
  },
  {
    id: 'cognitive-reframe',
    name: 'Tái Cấu Trúc Nhận Thức',
    type: 'cognitive',
    effectiveness: 9,
    timeRequired: 10,
    description: 'Thay đổi cách nhìn nhận tình huống để giảm căng thẳng',
    steps: [
      'Xác định suy nghĩ tiêu cực',
      'Tự hỏi: "Suy nghĩ này có hợp lý không?"',
      'Tìm bằng chứng ủng hộ và phản bác',
      'Tạo ra suy nghĩ cân bằng hơn',
      'Tập trung vào điều có thể kiểm soát'
    ],
    icon: <Brain className="w-4 h-4" />,
    bestFor: ['Suy nghĩ tiêu cực', 'Lo lắng thái quá', 'Tự đánh giá thấp']
  },
  {
    id: 'progressive-relaxation',
    name: 'Thư Giãn Cơ Tiến Triển',
    type: 'physical',
    effectiveness: 7,
    timeRequired: 15,
    description: 'Căng và thả lỏng các nhóm cơ để giảm căng thẳng thể chất',
    steps: [
      'Tìm vị trí thoải mái để nằm/ngồi',
      'Bắt đầu từ ngón chân, căng cơ 5 giây',
      'Thả lỏng đột ngột và cảm nhận sự khác biệt',
      'Tiếp tục lên các nhóm cơ khác',
      'Kết thúc với thư giãn toàn thân'
    ],
    icon: <Shield className="w-4 h-4" />,
    bestFor: ['Căng thẳng cơ bắp', 'Khó ngủ', 'Stress thể chất']
  },
  {
    id: 'mindfulness-meditation',
    name: 'Thiền Chánh Niệm',
    type: 'mindfulness',
    effectiveness: 9,
    timeRequired: 10,
    description: 'Tập trung vào hiện tại để giảm lo lắng về tương lai',
    steps: [
      'Ngồi thẳng, nhắm mắt nhẹ nhàng',
      'Tập trung vào hơi thở tự nhiên',
      'Khi có suy nghĩ, nhẹ nhàng đưa chú ý về hơi thở',
      'Quan sát cảm giác trong cơ thể',
      'Chấp nhận mọi cảm xúc không phán xét'
    ],
    icon: <Compass className="w-4 h-4" />,
    bestFor: ['Lo lắng về tương lai', 'Stress mãn tính', 'Mất tập trung']
  },
  {
    id: 'social-support',
    name: 'Tìm Hỗ Trợ Xã Hội',
    type: 'social',
    effectiveness: 8,
    timeRequired: 30,
    description: 'Kết nối với người khác để chia sẻ và nhận được hỗ trợ',
    steps: [
      'Xác định người đáng tin cậy trong cuộc sống',
      'Chia sẻ cảm xúc một cách trung thực',
      'Yêu cầu hỗ trợ cụ thể nếu cần',
      'Lắng nghe lời khuyên và góc nhìn khác',
      'Cảm ơn và duy trì mối quan hệ'
    ],
    icon: <Heart className="w-4 h-4" />,
    bestFor: ['Cô đơn', 'Stress xã hội', 'Cần góc nhìn khách quan']
  },
  {
    id: 'physical-exercise',
    name: 'Hoạt Động Thể Chất',
    type: 'physical',
    effectiveness: 8,
    timeRequired: 20,
    description: 'Sử dụng vận động để giải phóng căng thẳng và cải thiện tâm trạng',
    steps: [
      'Chọn hoạt động yêu thích (đi bộ, chạy, yoga)',
      'Bắt đầu với cường độ nhẹ',
      'Tập trung vào cảm giác cơ thể',
      'Tăng dần cường độ nếu cảm thấy tốt',
      'Kết thúc với động tác giãn cơ'
    ],
    icon: <Zap className="w-4 h-4" />,
    bestFor: ['Stress thể chất', 'Năng lượng dư thừa', 'Tâm trạng tiêu cực']
  }
];

const StressResilienceTrainingGame: React.FC<StressResilienceTrainingGameProps> = ({
  onComplete,
  timeLeft,
  onRestart
}) => {
  const [currentScenario, setCurrentScenario] = useState<StressScenario>(STRESS_SCENARIOS[0]);
  const [selectedStrategies, setSelectedStrategies] = useState<CopingStrategy[]>([]);
  const [gamePhase, setGamePhase] = useState<'intro' | 'scenario' | 'strategy' | 'practice' | 'results'>('intro');
  const [sessionHistory, setSessionHistory] = useState<TrainingSession[]>([]);
  const [currentSession, setCurrentSession] = useState(0);
  const [score, setScore] = useState(0);
  const [resilienceLevel, setResilienceLevel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [practiceTimer, setPracticeTimer] = useState(0);
  const [practiceActive, setPracticeActive] = useState(false);

  const evaluateStrategies = useCallback(() => {
    if (selectedStrategies.length === 0) return { effectiveness: 0, stressReduction: 0, resilienceGain: 0 };

    let totalEffectiveness = 0;
    let stressReduction = 0;
    let resilienceGain = 0;

    selectedStrategies.forEach(strategy => {
      // Base effectiveness
      let effectivenessScore = strategy.effectiveness;

      // Bonus for matching scenario type
      if (currentScenario.category === 'work' && strategy.type === 'cognitive') {
        effectivenessScore += 2;
      } else if (currentScenario.category === 'social' && strategy.type === 'breathing') {
        effectivenessScore += 3;
      } else if (currentScenario.category === 'health' && strategy.type === 'mindfulness') {
        effectivenessScore += 2;
      }

      // Bonus for high stress scenarios
      if (currentScenario.stressLevel >= 8 && strategy.type === 'breathing') {
        effectivenessScore += 2;
      }

      // Check if strategy is well-suited for scenario symptoms
      const isWellSuited = strategy.bestFor.some(condition => 
        currentScenario.emotionalSymptoms.some(symptom => 
          symptom.toLowerCase().includes(condition.toLowerCase().split(' ')[0])
        )
      );

      if (isWellSuited) {
        effectivenessScore += 1;
      }

      totalEffectiveness += effectivenessScore;
      stressReduction += Math.min(currentScenario.stressLevel, effectivenessScore);
      resilienceGain += effectivenessScore * 0.8;
    });

    // Penalty for too many strategies (overwhelm)
    if (selectedStrategies.length > 3) {
      totalEffectiveness *= 0.8;
    }

    // Bonus for diverse strategy types
    const uniqueTypes = new Set(selectedStrategies.map(s => s.type));
    if (uniqueTypes.size >= 2) {
      totalEffectiveness *= 1.2;
      resilienceGain *= 1.1;
    }

    return {
      effectiveness: Math.min(10, totalEffectiveness / selectedStrategies.length),
      stressReduction: Math.min(10, stressReduction / selectedStrategies.length),
      resilienceGain: Math.min(10, resilienceGain / selectedStrategies.length)
    };
  }, [selectedStrategies, currentScenario]);

  const completeSession = () => {
    const evaluation = evaluateStrategies();
    
    const session: TrainingSession = {
      scenario: currentScenario,
      selectedStrategies: [...selectedStrategies],
      stressReduction: evaluation.stressReduction,
      resilienceGain: evaluation.resilienceGain,
      effectiveness: evaluation.effectiveness
    };

    setSessionHistory(prev => [...prev, session]);
    setResilienceLevel(prev => prev + evaluation.resilienceGain);
    setScore(prev => prev + (evaluation.effectiveness * 10));

    if (currentSession < STRESS_SCENARIOS.length - 1) {
      setCurrentSession(prev => prev + 1);
      setCurrentScenario(STRESS_SCENARIOS[currentSession + 1]);
      setSelectedStrategies([]);
      setGamePhase('scenario');
    } else {
      setGamePhase('results');
    }
  };

  const startPractice = () => {
    setPracticeActive(true);
    setPracticeTimer(selectedStrategies.reduce((total, strategy) => total + strategy.timeRequired, 0) * 60);
  };

  const startGame = () => {
    setIsPlaying(true);
    setGamePhase('intro');
    setCurrentSession(0);
    setCurrentScenario(STRESS_SCENARIOS[0]);
    setSelectedStrategies([]);
    setSessionHistory([]);
    setScore(0);
    setResilienceLevel(0);
    setPracticeActive(false);
    setPracticeTimer(0);
  };

  const nextPhase = () => {
    switch (gamePhase) {
      case 'intro':
        setGamePhase('scenario');
        break;
      case 'scenario':
        setGamePhase('strategy');
        break;
      case 'strategy':
        setGamePhase('practice');
        break;
      case 'practice':
        completeSession();
        break;
      case 'results':
        onComplete(score >= 60, score);
        break;
    }
  };

  const restartGame = () => {
    setCurrentScenario(STRESS_SCENARIOS[0]);
    setSelectedStrategies([]);
    setGamePhase('intro');
    setSessionHistory([]);
    setCurrentSession(0);
    setScore(0);
    setResilienceLevel(0);
    setIsPlaying(false);
    setPracticeActive(false);
    setPracticeTimer(0);
    onRestart();
  };

  const toggleStrategy = (strategy: CopingStrategy) => {
    setSelectedStrategies(prev => {
      const exists = prev.find(s => s.id === strategy.id);
      if (exists) {
        return prev.filter(s => s.id !== strategy.id);
      } else if (prev.length < 3) { // Limit to 3 strategies
        return [...prev, strategy];
      }
      return prev;
    });
  };

  const getStressColor = (level: number) => {
    if (level >= 8) return 'text-red-400';
    if (level >= 6) return 'text-orange-400';
    if (level >= 4) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'work': return '💼';
      case 'personal': return '❤️';
      case 'social': return '👥';
      case 'health': return '🏥';
      default: return '📝';
    }
  };

  useEffect(() => {
    if (timeLeft <= 0 && isPlaying) {
      onComplete(false, score);
    }
  }, [timeLeft, isPlaying, score, onComplete]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (practiceActive && practiceTimer > 0) {
      interval = setInterval(() => {
        setPracticeTimer(prev => prev - 1);
      }, 1000);
    }
    
    if (practiceTimer === 0 && practiceActive) {
      setPracticeActive(false);
    }
    
    return () => clearInterval(interval);
  }, [practiceActive, practiceTimer]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 p-3 rounded-xl">
                <Heart className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">🧘 Rèn Luyện Khả Năng Chống Chịu Stress</h1>
                <p className="text-green-200">Học cách quản lý và vượt qua căng thẳng hiệu quả</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-green-400">{Math.round(score)}</div>
                <div className="text-sm text-green-200">Điểm số</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-400">{Math.round(resilienceLevel)}</div>
                <div className="text-sm text-green-200">Khả năng chống chịu</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-yellow-400">{Math.ceil(timeLeft / 60)}</div>
                <div className="text-sm text-green-200">Phút</div>
              </div>
            </div>
          </div>
        </div>

        {!isPlaying ? (
          /* Start Screen */
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center">
            <div className="bg-green-500/20 p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Shield className="w-12 h-12 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Chào Mừng Đến Trung Tâm Rèn Luyện Tâm Lý!</h2>
            <p className="text-green-200 text-lg mb-8 max-w-2xl mx-auto">
              Học cách nhận diện, quản lý và vượt qua căng thẳng trong cuộc sống. 
              Phát triển khả năng phục hồi tâm lý và sống khỏe mạnh hơn.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-blue-900/30 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-blue-200 mb-2">🎯 Mục tiêu</h3>
                <ul className="text-blue-100 text-sm space-y-1">
                  <li>• Nhận diện dấu hiệu stress</li>
                  <li>• Học kỹ thuật giảm căng thẳng</li>
                  <li>• Xây dựng khả năng phục hồi</li>
                  <li>• Áp dụng vào tình huống thực tế</li>
                </ul>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-purple-200 mb-2">📚 Nội dung</h3>
                <ul className="text-purple-100 text-sm space-y-1">
                  <li>• 4 tình huống stress thực tế</li>
                  <li>• 6 kỹ thuật ứng phó khoa học</li>
                  <li>• Thực hành có hướng dẫn</li>
                  <li>• Đánh giá và phản hồi chi tiết</li>
                </ul>
              </div>
            </div>
            <button
              onClick={startGame}
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-2 mx-auto"
            >
              <Play className="w-6 h-6" />
              Bắt Đầu Rèn Luyện
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-green-200">Tình huống {currentSession + 1}/{STRESS_SCENARIOS.length}</span>
                <span className="text-teal-300 capitalize">{gamePhase}</span>
              </div>
              <div className="w-full bg-teal-900/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-teal-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentSession) / STRESS_SCENARIOS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {gamePhase === 'intro' && (
              /* Introduction Phase */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">🌟 Giới Thiệu Chương Trình</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-green-200 mb-3">🧠 Stress Là Gì?</h3>
                    <p className="text-white text-sm mb-3">
                      Stress là phản ứng tự nhiên của cơ thể khi đối mặt với thách thức hoặc mối đe dọa. 
                      Nó có thể có lợi (eustress) hoặc có hại (distress).
                    </p>
                    <div className="text-gray-300 text-xs">
                      <strong>Tác động tích cực:</strong> Động lực, tập trung, hiệu suất<br/>
                      <strong>Tác động tiêu cực:</strong> Lo lắng, mệt mỏi, bệnh tật
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-200 mb-3">💪 Khả Năng Phục Hồi</h3>
                    <p className="text-white text-sm mb-3">
                      Resilience là khả năng thích ứng và phục hồi từ nghịch cảnh, stress, hoặc thay đổi. 
                      Đây là kỹ năng có thể học và rèn luyện.
                    </p>
                    <div className="text-gray-300 text-xs">
                      <strong>Yếu tố chính:</strong> Tư duy tích cực, hỗ trợ xã hội, kỹ năng ứng phó, chăm sóc bản thân
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-purple-200 mb-3">🎯 Phương Pháp Học</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <Target className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <div className="font-semibold text-white text-sm">Nhận Diện</div>
                      <div className="text-xs text-gray-300">Phân tích tình huống</div>
                    </div>
                    <div className="text-center">
                      <Brain className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="font-semibold text-white text-sm">Lựa Chọn</div>
                      <div className="text-xs text-gray-300">Chọn kỹ thuật phù hợp</div>
                    </div>
                    <div className="text-center">
                      <Activity className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <div className="font-semibold text-white text-sm">Thực Hành</div>
                      <div className="text-xs text-gray-300">Áp dụng kỹ thuật</div>
                    </div>
                    <div className="text-center">
                      <Award className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <div className="font-semibold text-white text-sm">Đánh Giá</div>
                      <div className="text-xs text-gray-300">Xem kết quả</div>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Bắt Đầu Tình Huống Đầu Tiên
                </button>
              </div>
            )}

            {gamePhase === 'scenario' && (
              /* Scenario Analysis Phase */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{getCategoryIcon(currentScenario.category)}</span>
                  <h2 className="text-2xl font-bold text-white">{currentScenario.title}</h2>
                  <span className={`text-sm px-2 py-1 rounded-full bg-black/20 ${getStressColor(currentScenario.stressLevel)}`}>
                    Mức độ: {currentScenario.stressLevel}/10
                  </span>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4 mb-6">
                  <p className="text-white text-lg leading-relaxed">{currentScenario.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-red-200 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Nguyên Nhân
                    </h3>
                    <ul className="space-y-1">
                      {currentScenario.triggers.map((trigger, index) => (
                        <li key={index} className="text-red-100 text-sm">• {trigger}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-orange-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-200 mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      Triệu Chứng Thể Chất
                    </h3>
                    <ul className="space-y-1">
                      {currentScenario.physicalSymptoms.map((symptom, index) => (
                        <li key={index} className="text-orange-100 text-sm">• {symptom}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-200 mb-3 flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Triệu Chứng Cảm Xúc
                    </h3>
                    <ul className="space-y-1">
                      {currentScenario.emotionalSymptoms.map((symptom, index) => (
                        <li key={index} className="text-yellow-100 text-sm">• {symptom}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-200 mb-3 flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      Suy Nghĩ Tức Thì
                    </h3>
                    <ul className="space-y-1">
                      {currentScenario.immediateThoughts.map((thought, index) => (
                        <li key={index} className="text-purple-100 text-sm">• {thought}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Chọn Chiến Lược Ứng Phó
                </button>
              </div>
            )}

            {gamePhase === 'strategy' && (
              /* Strategy Selection Phase */
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h2 className="text-xl font-bold text-white mb-4">🎯 Chọn Kỹ Thuật Ứng Phó</h2>
                  <p className="text-green-200 mb-6">
                    Chọn 1-3 kỹ thuật phù hợp với tình huống. Hãy cân nhắc loại stress và triệu chứng cụ thể.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {COPING_STRATEGIES.map((strategy) => {
                      const isSelected = selectedStrategies.find(s => s.id === strategy.id);
                      const canSelect = selectedStrategies.length < 3 || isSelected;
                      
                      return (
                        <button
                          key={strategy.id}
                          onClick={() => canSelect && toggleStrategy(strategy)}
                          disabled={!canSelect}
                          className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                            isSelected
                              ? 'border-green-400 bg-green-500/20'
                              : canSelect
                              ? 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                              : 'border-gray-700 bg-gray-900/50 opacity-50 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            {strategy.icon}
                            <span className="font-semibold text-white text-sm">{strategy.name}</span>
                          </div>
                          <p className="text-xs text-gray-300 mb-3">{strategy.description}</p>
                          <div className="flex justify-between items-center text-xs">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <TrendingUp className="w-3 h-3 text-green-400" />
                                <span className="text-green-300">{strategy.effectiveness}/10</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Timer className="w-3 h-3 text-blue-400" />
                                <span className="text-blue-300">{strategy.timeRequired}p</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-400 mt-2">
                            Tốt nhất cho: {strategy.bestFor.join(', ')}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  
                  {selectedStrategies.length > 0 && (
                    <div className="bg-blue-900/30 rounded-lg p-4 mb-6">
                      <h3 className="font-semibold text-blue-200 mb-2">✅ Kỹ Thuật Đã Chọn ({selectedStrategies.length}/3)</h3>
                      <div className="space-y-2">
                        {selectedStrategies.map((strategy, index) => (
                          <div key={strategy.id} className="flex items-center justify-between bg-white/5 rounded p-2">
                            <div className="flex items-center gap-2">
                              {strategy.icon}
                              <span className="text-white text-sm">{strategy.name}</span>
                            </div>
                            <div className="text-xs text-gray-300">{strategy.timeRequired} phút</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-sm text-blue-200">
                        Tổng thời gian: {selectedStrategies.reduce((total, s) => total + s.timeRequired, 0)} phút
                      </div>
                    </div>
                  )}
                  
                  <button
                    onClick={nextPhase}
                    disabled={selectedStrategies.length === 0}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Thực Hành Kỹ Thuật
                  </button>
                </div>
              </div>
            )}

            {gamePhase === 'practice' && (
              /* Practice Phase */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-6 h-6 text-green-400" />
                  <h2 className="text-2xl font-bold text-white">🧘 Thực Hành Kỹ Thuật</h2>
                </div>
                
                {!practiceActive ? (
                  <div className="space-y-6">
                    {selectedStrategies.map((strategy, index) => (
                      <div key={strategy.id} className="bg-teal-900/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          {strategy.icon}
                          <h3 className="font-semibold text-teal-200">{strategy.name}</h3>
                          <span className="text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded">
                            {strategy.timeRequired} phút
                          </span>
                        </div>
                        <p className="text-white text-sm mb-3">{strategy.description}</p>
                        <div className="space-y-1">
                          <h4 className="font-semibold text-teal-200 text-sm">Các bước thực hiện:</h4>
                          {strategy.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start gap-2 text-sm text-white">
                              <span className="text-teal-400 font-semibold">{stepIndex + 1}.</span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <button
                      onClick={startPractice}
                      className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Play className="w-5 h-5" />
                      Bắt Đầu Thực Hành
                    </button>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl p-8">
                      <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-4">
                        {Math.floor(practiceTimer / 60)}:{(practiceTimer % 60).toString().padStart(2, '0')}
                      </div>
                      <div className="text-xl text-green-200 mb-4">Thời gian thực hành</div>
                      <div className="w-full bg-teal-900/50 rounded-full h-3 mb-4">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-teal-400 h-3 rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${100 - (practiceTimer / (selectedStrategies.reduce((total, s) => total + s.timeRequired, 0) * 60)) * 100}%` 
                          }}
                        ></div>
                      </div>
                      <div className="text-teal-200">
                        Đang thực hành: {selectedStrategies.map(s => s.name).join(' → ')}
                      </div>
                    </div>
                    
                    {practiceTimer === 0 && (
                      <div className="bg-green-900/30 rounded-lg p-4">
                        <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <h3 className="font-semibold text-green-200 mb-2">🎉 Hoàn Thành Thực Hành!</h3>
                        <p className="text-white text-sm mb-4">
                          Tuyệt vời! Bạn đã hoàn thành việc thực hành các kỹ thuật ứng phó với stress.
                        </p>
                        <button
                          onClick={nextPhase}
                          className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                        >
                          Xem Kết Quả
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {gamePhase === 'results' && (
              /* Results Phase */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">📊 Kết Quả Chương Trình</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">{Math.round(score)}</div>
                    <div className="text-blue-200 font-semibold">Điểm Tổng Kết</div>
                    <div className="text-xs text-gray-300 mt-1">Dựa trên hiệu quả kỹ thuật</div>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-4 text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">{Math.round(resilienceLevel)}</div>
                    <div className="text-green-200 font-semibold">Khả Năng Phục Hồi</div>
                    <div className="text-xs text-gray-300 mt-1">Tăng qua mỗi phiên thực hành</div>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4 text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">{sessionHistory.length}</div>
                    <div className="text-purple-200 font-semibold">Tình Huống Hoàn Thành</div>
                    <div className="text-xs text-gray-300 mt-1">Tổng số bài học</div>
                  </div>
                </div>
                
                <div className="bg-teal-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-teal-200 mb-3">📋 Tóm Tắt Phiên Học</h3>
                  <div className="space-y-3">
                    {sessionHistory.map((session, index) => (
                      <div key={index} className="bg-white/5 rounded p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="font-semibold text-white">{session.scenario.title}</span>
                            <span className="text-xs text-gray-400 ml-2">
                              ({getCategoryIcon(session.scenario.category)} {session.scenario.category})
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-green-400 text-sm font-semibold">
                              {Math.round(session.effectiveness)}/10
                            </div>
                            <div className="text-xs text-gray-400">hiệu quả</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-300">
                          Kỹ thuật: {session.selectedStrategies.map(s => s.name).join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-green-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-green-200 mb-3">💡 Lời Khuyên Cho Tương Lai</h3>
                  <ul className="space-y-2 text-white text-sm">
                    <li>✓ Thực hành các kỹ thuật đã học hàng ngày, không chỉ khi căng thẳng</li>
                    <li>✓ Nhận diện sớm dấu hiệu stress để can thiệp kịp thời</li>
                    <li>✓ Xây dựng mạng lưới hỗ trợ xã hội mạnh mẽ</li>
                    <li>✓ Duy trì lối sống lành mạnh: ăn uống, vận động, nghỉ ngơi đầy đủ</li>
                    <li>✓ Tìm kiếm hỗ trợ chuyên nghiệp nếu cần thiết</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {score >= 80 ? '🌟 Xuất Sắc!' : score >= 60 ? '👍 Tốt!' : '📚 Cần Cải Thiện'}
                  </h3>
                  <p className="text-green-200 mb-6">
                    {score >= 80 
                      ? 'Bạn đã thành thạo các kỹ thuật quản lý stress! Tiếp tục áp dụng vào cuộc sống.' 
                      : score >= 60 
                      ? 'Bạn đã có nền tảng tốt. Hãy thực hành thêm để hoàn thiện kỹ năng.' 
                      : 'Đừng nản lòng! Quản lý stress là kỹ năng cần thời gian. Hãy thử lại và thực hành thêm.'
                    }
                  </p>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={restartGame}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Thực Hành Lại
                  </button>
                  <button
                    onClick={() => onComplete(score >= 60, score)}
                    className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
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

export default StressResilienceTrainingGame;