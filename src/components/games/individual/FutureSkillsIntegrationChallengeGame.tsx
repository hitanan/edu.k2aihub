import React, { useState, useEffect } from 'react';
import { Zap, Star, ArrowRight, RotateCcw, Target } from 'lucide-react';

interface FutureSkillsIntegrationChallengeGameProps {
  onComplete: (score: number, feedback: string) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface SkillScenario {
  id: string;
  title: string;
  scenario: string;
  skills: string[];
  challenge: string;
  solutions: {
    option: string;
    points: number;
    skills: string[];
    feedback: string;
  }[];
}

const scenarios: SkillScenario[] = [
  {
    id: 'ai-creativity',
    title: 'AI & Creative Problem Solving',
    scenario: 'Bạn làm việc trong team marketing và cần tạo campaign cho sản phẩm mới. Team có AI tools nhưng thiếu ý tưởng sáng tạo.',
    skills: ['AI Tools', 'Creative Thinking', 'Collaboration', 'Data Analysis'],
    challenge: 'Làm thế nào để kết hợp AI với creative thinking để tạo campaign hiệu quả?',
    solutions: [
      {
        option: 'Dùng AI tạo content tự động và đăng luôn',
        points: 10,
        skills: ['AI Tools'],
        feedback: 'Cách này nhanh nhưng thiếu creativity và human touch.'
      },
      {
        option: 'Brainstorm ý tưởng creative trước, sau đó dùng AI để optimize và analyze',
        points: 30,
        skills: ['AI Tools', 'Creative Thinking', 'Data Analysis'],
        feedback: 'Excellent! Kết hợp tốt human creativity với AI efficiency.'
      },
      {
        option: 'Bỏ qua AI, chỉ làm creative manual',
        points: 15,
        skills: ['Creative Thinking'],
        feedback: 'Creative tốt nhưng bỏ lỡ cơ hội tối ưu với AI tools.'
      }
    ]
  },
  {
    id: 'remote-leadership',
    title: 'Digital Leadership & Communication',
    scenario: 'Bạn lead một team remote có members ở nhiều quốc gia khác nhau. Dự án gặp khó khăn về timeline và communication.',
    skills: ['Digital Communication', 'Leadership', 'Project Management', 'Cultural Intelligence'],
    challenge: 'Làm sao để lead hiệu quả team đa văn hóa trong môi trường digital?',
    solutions: [
      {
        option: 'Tăng số lượng meetings để control chặt hơn',
        points: 10,
        skills: ['Digital Communication'],
        feedback: 'Có thể gây meeting fatigue và không giải quyết root cause.'
      },
      {
        option: 'Thiết lập clear communication protocol, respect cultural differences, và dùng collaboration tools hiệu quả',
        points: 35,
        skills: ['Digital Communication', 'Leadership', 'Cultural Intelligence', 'Project Management'],
        feedback: 'Perfect! Approach toàn diện cho remote leadership hiệu quả.'
      },
      {
        option: 'Chuyển tất cả sang làm offline',
        points: 5,
        skills: [],
        feedback: 'Không thực tế trong thời đại remote work và bỏ lỡ global talent.'
      }
    ]
  },
  {
    id: 'sustainability-innovation',
    title: 'Green Technology & Innovation',
    scenario: 'Company bạn muốn chuyển đổi xanh nhưng lo về cost và productivity. Bạn được assign lead green innovation project.',
    skills: ['Sustainability', 'Innovation', 'Change Management', 'Business Analysis'],
    challenge: 'Làm thế nào để implement green solutions mà vẫn maintain business efficiency?',
    solutions: [
      {
        option: 'Focus chỉ vào các giải pháp rẻ nhất',
        points: 15,
        skills: ['Business Analysis'],
        feedback: 'Cost-conscious tốt nhưng có thể miss long-term sustainability benefits.'
      },
      {
        option: 'Research green tech innovations, pilot small projects, measure ROI và scale up gradually',
        points: 40,
        skills: ['Sustainability', 'Innovation', 'Change Management', 'Business Analysis'],
        feedback: 'Outstanding! Strategic approach cho sustainable transformation.'
      },
      {
        option: 'Implement tất cả green solutions một lúc',
        points: 8,
        skills: ['Sustainability'],
        feedback: 'Good intention nhưng có thể overwhelming và risky cho business.'
      }
    ]
  }
];

const FutureSkillsIntegrationChallengeGame: React.FC<FutureSkillsIntegrationChallengeGameProps> = ({
  onComplete,
  timeLeft,
  onRestart
}) => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [skillsEarned, setSkillsEarned] = useState<Set<string>>(new Set());
  const [gamePhase, setGamePhase] = useState<'playing' | 'completed'>('playing');

  useEffect(() => {
    if (timeLeft === 0 && gamePhase === 'playing') {
      handleGameComplete();
    }
  }, [timeLeft, gamePhase]);

  const handleSolutionSelect = (solutionIndex: number) => {
    const solution = scenarios[currentScenario].solutions[solutionIndex];
    setSelectedSolution(solution.option);
    setShowFeedback(true);
    
    // Update score and skills
    const newScore = totalScore + solution.points;
    setTotalScore(newScore);
    
    const newSkills = new Set(skillsEarned);
    solution.skills.forEach(skill => newSkills.add(skill));
    setSkillsEarned(newSkills);
  };

  const handleNextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedSolution(null);
      setShowFeedback(false);
    } else {
      handleGameComplete();
    }
  };

  const handleGameComplete = () => {
    setGamePhase('completed');
    const skillCount = skillsEarned.size;
    const maxScore = scenarios.reduce((sum, scenario) => sum + Math.max(...scenario.solutions.map(s => s.points)), 0);
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    let feedback = `Hoàn thành ${skillCount} kỹ năng tương lai! `;
    if (percentage >= 90) feedback += "🌟 Future Skills Master!";
    else if (percentage >= 70) feedback += "🚀 Xuất sắc về tích hợp kỹ năng!";
    else if (percentage >= 50) feedback += "✨ Tốt, cần phát triển thêm!";
    else feedback += "💪 Cần practice nhiều hơn về future skills!";

    onComplete(totalScore, feedback);
  };

  const currentScenarioData = scenarios[currentScenario];
  const progress = ((currentScenario + (showFeedback ? 1 : 0)) / scenarios.length) * 100;

  if (gamePhase === 'completed') {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Game Hoàn Thành!</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200">
            <div className="text-2xl font-bold text-purple-600 mb-2">{totalScore} điểm</div>
            <div className="text-lg text-gray-600 mb-4">
              Đã tích hợp {skillsEarned.size} kỹ năng tương lai
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {Array.from(skillsEarned).map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
            <button
              onClick={onRestart}
              className="flex items-center gap-2 mx-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Chơi Lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Future Skills Integration</h1>
            <div className="text-sm text-gray-500">
              Scenario {currentScenario + 1}/{scenarios.length} • {totalScore} điểm • ⏰ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div 
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Current Scenario */}
      <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-purple-600" />
          <h2 className="text-xl font-bold text-gray-800">{currentScenarioData.title}</h2>
        </div>

        {/* Skills Required */}
        <div className="flex flex-wrap gap-2 mb-4">
          {currentScenarioData.skills.map(skill => (
            <span 
              key={skill} 
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                skillsEarned.has(skill) 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-gray-100 text-gray-600 border border-gray-200'
              }`}
            >
              {skillsEarned.has(skill) && '✓ '}{skill}
            </span>
          ))}
        </div>

        {/* Scenario Description */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-gray-700 mb-3">{currentScenarioData.scenario}</p>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-purple-600" />
            <span className="font-medium text-gray-800">{currentScenarioData.challenge}</span>
          </div>
        </div>

        {/* Solutions */}
        {!showFeedback ? (
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 mb-3">Chọn giải pháp của bạn:</h3>
            {currentScenarioData.solutions.map((solution, index) => (
              <button
                key={index}
                onClick={() => handleSolutionSelect(index)}
                className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 group-hover:text-gray-800">{solution.option}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800">Lựa chọn của bạn:</span>
                <span className="text-purple-600 font-bold">
                  +{currentScenarioData.solutions.find(s => s.option === selectedSolution)?.points} điểm
                </span>
              </div>
              <p className="text-gray-700 mb-3">{selectedSolution}</p>
              <p className="text-sm text-purple-700">
                {currentScenarioData.solutions.find(s => s.option === selectedSolution)?.feedback}
              </p>
            </div>

            {/* Skills Earned */}
            {((currentScenarioData.solutions.find(s => s.option === selectedSolution)?.skills.length) || 0) > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="font-medium text-green-800 mb-2">Kỹ năng đạt được:</div>
                <div className="flex flex-wrap gap-2">
                  {currentScenarioData.solutions.find(s => s.option === selectedSolution)?.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleNextScenario}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              {currentScenario < scenarios.length - 1 ? (
                <>
                  Scenario Tiếp Theo
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  Hoàn Thành Game
                  <Star className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Score Display */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
          <Star className="w-4 h-4 text-purple-600" />
          <span className="font-medium text-purple-800">{totalScore} điểm</span>
          <span className="text-purple-600">•</span>
          <span className="font-medium text-purple-800">{skillsEarned.size} skills</span>
        </div>
      </div>
    </div>
  );
};

export default FutureSkillsIntegrationChallengeGame;