'use client';

import React, { useState, useEffect } from 'react';
import { Users, MessageCircle, Heart, Clock, Target, RotateCcw, Star, CheckCircle, AlertCircle } from 'lucide-react';

interface SoftSkillsScenarioGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Scenario {
  id: string;
  category: 'communication' | 'leadership' | 'teamwork' | 'problem-solving' | 'empathy';
  title: string;
  situation: string;
  challenge: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  points: number;
  completed: boolean;
}

interface Choice {
  id: string;
  text: string;
  outcome: string;
  skillImpact: {
    communication?: number;
    leadership?: number;
    teamwork?: number;
    empathy?: number;
  };
  score: number;
}

const SoftSkillsScenarioGame: React.FC<SoftSkillsScenarioGameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'menu' | 'scenario' | 'result' | 'completed'>('menu');
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [skillLevels, setSkillLevels] = useState({
    communication: 50,
    leadership: 50,
    teamwork: 50,
    empathy: 50,
  });

  const [scenarios, setScenarios] = useState<Scenario[]>([
    {
      id: 'team-conflict',
      category: 'teamwork',
      title: 'Xung Đột Trong Team',
      situation:
        'Hai thành viên trong team của bạn đang có tranh cãi về hướng tiếp cận dự án. Một người muốn làm theo cách truyền thống, người kia muốn thử nghiệm công nghệ mới.',
      challenge: 'Bạn cần giải quyết xung đột và tìm giải pháp phù hợp cho cả team.',
      difficulty: 'intermediate',
      points: 75,
      completed: false,
    },
    {
      id: 'difficult-conversation',
      category: 'communication',
      title: 'Cuộc Trò Chuyện Khó Khăn',
      situation:
        'Bạn cần thông báo với khách hàng rằng dự án sẽ bị delay 2 tuần do những vấn đề kỹ thuật không lường trước.',
      challenge: 'Làm sao truyền đạt tin xấu một cách chuyên nghiệp và duy trì được niềm tin.',
      difficulty: 'advanced',
      points: 100,
      completed: false,
    },
    {
      id: 'motivate-team',
      category: 'leadership',
      title: 'Động Viên Team',
      situation:
        'Team của bạn vừa trải qua một dự án thất bại. Morale của mọi người đang rất thấp và họ có vẻ mất đi động lực làm việc.',
      challenge: 'Bạn cần khôi phục tinh thần và tạo động lực cho team tiếp tục công việc.',
      difficulty: 'advanced',
      points: 120,
      completed: false,
    },
    {
      id: 'client-complaint',
      category: 'empathy',
      title: 'Khách Hàng Khiếu Nại',
      situation:
        'Một khách hàng rất tức giận vì sản phẩm không hoạt động như mong đợi. Họ đang la mắng và đe dọa sẽ hủy hợp đồng.',
      challenge: 'Bạn cần xử lý tình huống với sự thấu hiểu và tìm giải pháp thỏa mãn.',
      difficulty: 'intermediate',
      points: 80,
      completed: false,
    },
    {
      id: 'new-member',
      category: 'communication',
      title: 'Thành Viên Mới',
      situation: 'Một thành viên mới vừa gia nhập team nhưng có vẻ ngại ngùng và chưa hòa nhập được với mọi người.',
      challenge: 'Bạn cần giúp họ cảm thấy thoải mái và tích hợp vào team hiệu quả.',
      difficulty: 'basic',
      points: 50,
      completed: false,
    },
  ]);

  const getChoicesForScenario = (scenario: Scenario): Choice[] => {
    const choicesByScenario: Record<string, Choice[]> = {
      'team-conflict': [
        {
          id: 'choice1',
          text: 'Tổ chức meeting để cả hai bên trình bày quan điểm và tìm điểm chung',
          outcome: 'Team đánh giá cao cách tiếp cận minh bạch. Quyết định kết hợp cả hai phương pháp.',
          skillImpact: { teamwork: 15, leadership: 10, communication: 10 },
          score: 20,
        },
        {
          id: 'choice2',
          text: 'Quyết định theo ý kiến của senior member vì có kinh nghiệm hơn',
          outcome: 'Junior member cảm thấy không được lắng nghe, ảnh hưởng đến động lực.',
          skillImpact: { leadership: 5, teamwork: -5 },
          score: 10,
        },
        {
          id: 'choice3',
          text: 'Để họ tự giải quyết và chờ xem kết quả',
          outcome: 'Xung đột leo thang, làm ảnh hưởng đến toàn bộ team.',
          skillImpact: { leadership: -10, teamwork: -10 },
          score: 0,
        },
      ],
      'difficult-conversation': [
        {
          id: 'choice1',
          text: 'Gọi điện trực tiếp, giải thích rõ ràng lý do và đưa ra kế hoạch khắc phục',
          outcome: 'Khách hàng đánh giá cao sự minh bạch và chuyên nghiệp. Dự án được tiếp tục.',
          skillImpact: { communication: 20, leadership: 10 },
          score: 25,
        },
        {
          id: 'choice2',
          text: 'Gửi email thông báo delay kèm theo một số lý do kỹ thuật',
          outcome: 'Khách hàng không hài lòng với cách thông báo qua email trong tình huống quan trọng.',
          skillImpact: { communication: -5 },
          score: 10,
        },
        {
          id: 'choice3',
          text: 'Trì hoãn thông báo và cố gắng tăng tốc để bù đắp thời gian',
          outcome: 'Khách hàng phát hiện và mất hết niềm tin. Dự án bị hủy bỏ.',
          skillImpact: { communication: -15, leadership: -15 },
          score: 0,
        },
      ],
      'motivate-team': [
        {
          id: 'choice1',
          text: 'Tổ chức retrospective meeting để học hỏi từ thất bại và lên kế hoạch cải tiến',
          outcome: 'Team cảm thấy được hỗ trợ và học được nhiều điều. Morale được cải thiện đáng kể.',
          skillImpact: { leadership: 20, empathy: 15, teamwork: 15 },
          score: 30,
        },
        {
          id: 'choice2',
          text: 'Tập trung vào dự án tiếp theo và không nhắc đến thất bại trước đó',
          outcome: 'Team vẫn mang trong mình cảm giác thất bại. Hiệu suất không được cải thiện.',
          skillImpact: { leadership: 5 },
          score: 10,
        },
        {
          id: 'choice3',
          text: 'Chỉ trích những sai lầm để mọi người không lặp lại',
          outcome: 'Morale xuống thấp hơn. Một số thành viên muốn rời team.',
          skillImpact: { leadership: -15, empathy: -20, teamwork: -10 },
          score: 0,
        },
      ],
      'client-complaint': [
        {
          id: 'choice1',
          text: 'Lắng nghe tích cực, thấu hiểu frustration của họ và đưa ra giải pháp cụ thể',
          outcome: 'Khách hàng cảm thấy được hiểu và hài lòng với giải pháp. Quan hệ được cải thiện.',
          skillImpact: { empathy: 20, communication: 15 },
          score: 25,
        },
        {
          id: 'choice2',
          text: 'Giải thích kỹ thuật về vấn đề và hướng dẫn cách sử dụng đúng',
          outcome: 'Khách hàng cảm thấy bị đổ lỗi. Tình huống không được cải thiện.',
          skillImpact: { empathy: -10 },
          score: 10,
        },
        {
          id: 'choice3',
          text: 'Đề nghị chuyển sang bộ phận khác xử lý vì không thuộc trách nhiệm',
          outcome: 'Khách hàng cảm thấy bị đẩy đi. Khiếu nại leo thang lên cấp cao.',
          skillImpact: { empathy: -15, communication: -10 },
          score: 0,
        },
      ],
      'new-member': [
        {
          id: 'choice1',
          text: 'Chủ động giới thiệu và tổ chức activity team building để mọi người làm quen',
          outcome: 'Thành viên mới nhanh chóng hòa nhập và đóng góp tích cực cho team.',
          skillImpact: { communication: 15, teamwork: 15, empathy: 10 },
          score: 20,
        },
        {
          id: 'choice2',
          text: 'Assign một buddy để hướng dẫn và hỗ trợ thành viên mới',
          outcome: 'Quá trình hòa nhập diễn ra tự nhiên và hiệu quả.',
          skillImpact: { leadership: 10, teamwork: 10 },
          score: 15,
        },
        {
          id: 'choice3',
          text: 'Để họ tự làm quen theo thời gian, không can thiệp',
          outcome: 'Thành viên mới cảm thấy bị cô lập và chưa phát huy được năng lực.',
          skillImpact: { empathy: -5, teamwork: -5 },
          score: 5,
        },
      ],
    };

    return choicesByScenario[scenario.id] || [];
  };

  const startScenario = (scenario: Scenario) => {
    setCurrentScenario(scenario);
    setGameState('scenario');
    setSelectedChoice(null);
  };

  const makeChoice = (choice: Choice) => {
    setSelectedChoice(choice);
    setScore((prev) => prev + choice.score);

    // Update skill levels
    setSkillLevels((prev) => ({
      communication: Math.max(0, Math.min(100, prev.communication + (choice.skillImpact.communication || 0))),
      leadership: Math.max(0, Math.min(100, prev.leadership + (choice.skillImpact.leadership || 0))),
      teamwork: Math.max(0, Math.min(100, prev.teamwork + (choice.skillImpact.teamwork || 0))),
      empathy: Math.max(0, Math.min(100, prev.empathy + (choice.skillImpact.empathy || 0))),
    }));

    // Mark scenario as completed if choice was good
    if (choice.score > 15) {
      setScenarios((prev) => prev.map((s) => (s.id === currentScenario?.id ? { ...s, completed: true } : s)));
    }

    setGameState('result');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'basic':
        return 'bg-green-900/30 text-green-400 border-green-700';
      case 'intermediate':
        return 'bg-yellow-900/30 text-yellow-400 border-yellow-700';
      case 'advanced':
        return 'bg-red-900/30 text-red-400 border-red-700';
      default:
        return 'bg-gray-900/30 text-gray-400 border-gray-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'communication':
        return <MessageCircle className="w-5 h-5" />;
      case 'leadership':
        return <Target className="w-5 h-5" />;
      case 'teamwork':
        return <Users className="w-5 h-5" />;
      case 'empathy':
        return <Heart className="w-5 h-5" />;
      case 'problem-solving':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getSkillBarColor = (skillName: string, level: number) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-yellow-500';
    if (level >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  // Game completion check
  useEffect(() => {
    const completedCount = scenarios.filter((s) => s.completed).length;
    if (completedCount >= scenarios.length * 0.8) {
      setGameState('completed');
      onComplete(true, score);
    }
  }, [scenarios, score, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete(false, score);
    }
  }, [timeLeft, onComplete, score]);

  if (gameState === 'menu') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <Users className="w-12 h-12 text-pink-400 mr-4" />
              <div>
                <h2 className="text-3xl font-bold">Kịch Bản Kỹ Năng Mềm</h2>
                <p className="text-lg text-gray-300">Rèn luyện kỹ năng giao tiếp và làm việc nhóm</p>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-400" />
                <span className="font-semibold">{score} điểm</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="font-semibold">{Math.max(0, timeLeft)}s</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Scenarios */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Kịch Bản Thực Tế</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scenarios.map((scenario) => (
                  <div
                    key={scenario.id}
                    className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 border-2 transition-all cursor-pointer hover:scale-105 ${
                      scenario.completed ? 'border-green-500 bg-green-900/20' : 'border-pink-500 hover:border-pink-400'
                    }`}
                    onClick={() => !scenario.completed && startScenario(scenario)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                          {getCategoryIcon(scenario.category)}
                        </div>
                        <div className={`text-xs px-2 py-1 rounded border ${getDifficultyColor(scenario.difficulty)}`}>
                          {scenario.difficulty.toUpperCase()}
                        </div>
                      </div>
                      {scenario.completed && <CheckCircle className="w-5 h-5 text-green-400" />}
                    </div>

                    <h4 className="font-bold text-lg mb-2">{scenario.title}</h4>
                    <p className="text-sm text-gray-300 mb-3 line-clamp-3">{scenario.situation}</p>

                    <div className="flex justify-between items-center">
                      <span className="text-yellow-400 font-semibold">+{scenario.points} điểm</span>
                      <span className="text-xs text-gray-400 capitalize">{scenario.category.replace('-', ' ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Panel */}
            <div className="space-y-6">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400" />
                  Kỹ Năng Của Bạn
                </h3>

                <div className="space-y-4">
                  {Object.entries(skillLevels).map(([skill, level]) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium capitalize flex items-center">
                          {getCategoryIcon(skill)}
                          <span className="ml-2">
                            {skill === 'communication'
                              ? 'Giao tiếp'
                              : skill === 'leadership'
                                ? 'Lãnh đạo'
                                : skill === 'teamwork'
                                  ? 'Teamwork'
                                  : 'Đồng cảm'}
                          </span>
                        </span>
                        <span className="text-xs text-gray-400">{level}/100</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${getSkillBarColor(skill, level)}`}
                          style={{ width: `${level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Tiến Trình</h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">
                    {scenarios.filter((s) => s.completed).length}/{scenarios.length}
                  </div>
                  <div className="text-sm text-gray-400">Kịch bản hoàn thành</div>
                </div>
              </div>

              <button
                onClick={onRestart}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Làm Mới Kỹ Năng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'scenario' && currentScenario) {
    const choices = getChoicesForScenario(currentScenario);

    return (
      <div className="w-full h-full bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">{currentScenario.title}</h2>
              <div className="flex items-center space-x-2 mt-2">
                {getCategoryIcon(currentScenario.category)}
                <span className="capitalize">{currentScenario.category.replace('-', ' ')}</span>
                <div className={`text-xs px-2 py-1 rounded border ${getDifficultyColor(currentScenario.difficulty)}`}>
                  {currentScenario.difficulty.toUpperCase()}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="font-semibold">{Math.max(0, timeLeft)}s</span>
              </div>
              <button
                onClick={() => setGameState('menu')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors"
              >
                ← Quay Lại
              </button>
            </div>
          </div>

          {/* Scenario Content */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-pink-300">Tình Huống:</h3>
              <p className="text-gray-200 leading-relaxed mb-6">{currentScenario.situation}</p>

              <h3 className="text-xl font-semibold mb-4 text-yellow-300">Thách Thức:</h3>
              <p className="text-gray-200 leading-relaxed">{currentScenario.challenge}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-300">Bạn sẽ làm gì?</h3>
              <div className="space-y-4">
                {choices.map((choice, index) => (
                  <button
                    key={choice.id}
                    onClick={() => makeChoice(choice)}
                    className="w-full bg-black/30 hover:bg-black/50 border border-gray-600 hover:border-pink-400 p-6 rounded-lg text-left transition-all transform hover:scale-102"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <div className="flex-1">
                        <p className="text-white leading-relaxed">{choice.text}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'result' && selectedChoice && currentScenario) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 text-center">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                selectedChoice.score > 15 ? 'bg-green-500' : selectedChoice.score > 10 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
            >
              {selectedChoice.score > 15 ? (
                <CheckCircle className="w-10 h-10" />
              ) : selectedChoice.score > 10 ? (
                <AlertCircle className="w-10 h-10" />
              ) : (
                <AlertCircle className="w-10 h-10" />
              )}
            </div>

            <h2 className="text-2xl font-bold mb-4">
              {selectedChoice.score > 15 ? 'Xuất Sắc!' : selectedChoice.score > 10 ? 'Khá Tốt!' : 'Cần Cải Thiện!'}
            </h2>

            <p className="text-lg text-gray-200 mb-6 leading-relaxed">{selectedChoice.outcome}</p>

            <div className="bg-black/20 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Kỹ Năng Thay Đổi:</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(selectedChoice.skillImpact).map(([skill, change]) => {
                  if (change === 0) return null;
                  return (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="capitalize flex items-center">
                        {getCategoryIcon(skill)}
                        <span className="ml-2">
                          {skill === 'communication'
                            ? 'Giao tiếp'
                            : skill === 'leadership'
                              ? 'Lãnh đạo'
                              : skill === 'teamwork'
                                ? 'Teamwork'
                                : 'Đồng cảm'}
                        </span>
                      </span>
                      <span className={`font-bold ${change! > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {change! > 0 ? '+' : ''}
                        {change}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-yellow-400 text-xl font-bold mb-6">+{selectedChoice.score} điểm</div>

            <button
              onClick={() => setGameState('menu')}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Tiếp Tục
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'completed') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white flex items-center justify-center">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl text-center max-w-md mx-4">
          <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-10 h-10 text-pink-900" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Chuyên Gia Soft Skills!</h2>
          <p className="text-lg mb-4">Bạn đã thành thạo các kỹ năng mềm quan trọng!</p>
          <div className="text-pink-200 space-y-1 mb-6">
            <div>Điểm cuối: {score}</div>
            <div>
              Kịch bản hoàn thành: {scenarios.filter((s) => s.completed).length}/{scenarios.length}
            </div>
            <div>Kỹ năng trung bình: {Math.round(Object.values(skillLevels).reduce((a, b) => a + b, 0) / 4)}/100</div>
          </div>
          <button
            onClick={onRestart}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Thử Thách Mới
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default SoftSkillsScenarioGame;
