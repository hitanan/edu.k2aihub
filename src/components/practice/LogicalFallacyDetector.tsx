import React, { useState, useEffect } from 'react';

interface LogicalFallacy {
  id: string;
  name: string;
  description: string;
  example: string;
  category: 'Formal' | 'Informal' | 'Statistical' | 'Appeal';
}

interface Scenario {
  id: string;
  title: string;
  situation: string;
  arguments: Array<{
    text: string;
    fallacy?: string;
    isValid: boolean;
    explanation: string;
  }>;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  context: string;
}

// Component props
interface LogicalFallacyDetectorProps {
  onComplete?: (success: boolean, rawScore?: number) => void;
  timeLeft?: number;
  onRestart?: () => void;
}

const LogicalFallacyDetector: React.FC<LogicalFallacyDetectorProps> = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedArgument, setSelectedArgument] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes per scenario
  const [gameStarted, setGameStarted] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);

  const fallacies: LogicalFallacy[] = [
    {
      id: 'ad-hominem',
      name: 'Ad Hominem',
      description: 'Tấn công người đưa ra lập luận thay vì tấn công lập luận đó',
      example: 'Bạn không thể tin tưởng ý kiến của anh ta về kinh tế vì anh ta từng thất bại trong kinh doanh.',
      category: 'Informal',
    },
    {
      id: 'strawman',
      name: 'Straw Man',
      description: 'Bóp méo lập luận của đối phương để dễ dàng phản bác',
      example: 'Người ta nói cần cải thiện hệ thống y tế, nhưng họ muốn tiêu tốn hết ngân sách quốc gia.',
      category: 'Informal',
    },
    {
      id: 'false-dilemma',
      name: 'False Dilemma',
      description: 'Đưa ra chỉ hai lựa chọn khi thực tế có nhiều lựa chọn khác',
      example: 'Hoặc là bạn ủng hộ hoàn toàn, hoặc là bạn phản đối hoàn toàn.',
      category: 'Informal',
    },
    {
      id: 'appeal-to-authority',
      name: 'Appeal to Authority',
      description: 'Sử dụng uy tín của ai đó thay vì bằng chứng logic',
      example: 'Một diễn viên nổi tiếng nói rằng sản phẩm này tốt, nên nó phải tốt.',
      category: 'Appeal',
    },
    {
      id: 'bandwagon',
      name: 'Bandwagon',
      description: 'Cho rằng điều gì đó đúng vì nhiều người tin vậy',
      example: 'Tất cả mọi người đều dùng mạng xã hội này, nên bạn cũng nên dùng.',
      category: 'Appeal',
    },
  ];

  const scenarios: Scenario[] = [
    {
      id: 'social-media-debate',
      title: 'Tranh Luận Trên Mạng Xã Hội',
      situation: 'Một cuộc tranh luận về việc nên cấm xe máy trong thành phố hay không.',
      context: 'Mạng xã hội Việt Nam',
      difficulty: 'Cơ bản',
      arguments: [
        {
          text: 'Xe máy gây ô nhiễm và tắc nghẽn, nên chúng ta phải cấm hoàn toàn.',
          isValid: false,
          fallacy: 'false-dilemma',
          explanation:
            'Đây là False Dilemma - chỉ đưa ra hai lựa chọn cực đoan (cấm hoàn toàn hoặc không làm gì), trong khi có thể có nhiều giải pháp trung gian như hạn chế theo giờ, cải thiện phương tiện công cộng.',
        },
        {
          text: 'Nghiên cứu của Viện Giao thông Vận tải cho thấy xe máy chiếm 65% phương tiện di chuyển tại TP.HCM.',
          isValid: true,
          explanation: 'Đây là lập luận hợp lý dựa trên dữ liệu từ nguồn đáng tin cậy và chuyên môn.',
        },
        {
          text: 'Ông A ủng hộ cấm xe máy, nhưng ông ta thường xuyên vi phạm giao thông, nên ý kiến của ông ta không đáng tin.',
          isValid: false,
          fallacy: 'ad-hominem',
          explanation:
            'Đây là Ad Hominem - tấn công cá nhân thay vì phản bác lập luận. Hành vi cá nhân của ông A không làm cho lập luận của ông ta trở nên sai.',
        },
      ],
    },
    {
      id: 'education-reform',
      title: 'Cải Cách Giáo Dục',
      situation: 'Thảo luận về việc có nên đưa AI vào giảng dạy ở trường phổ thông.',
      context: 'Hội nghị giáo dục',
      difficulty: 'Trung bình',
      arguments: [
        {
          text: 'Tất cả các nước phát triển đều đang sử dụng AI trong giáo dục, Việt Nam cũng phải theo.',
          isValid: false,
          fallacy: 'bandwagon',
          explanation:
            'Đây là Bandwagon fallacy - cho rằng điều gì đó đúng chỉ vì nhiều người hoặc nhiều nước làm vậy, mà không xem xét điều kiện cụ thể của Việt Nam.',
        },
        {
          text: 'Bill Gates nói AI sẽ thay đổi giáo dục, nên chúng ta nên áp dụng ngay.',
          isValid: false,
          fallacy: 'appeal-to-authority',
          explanation:
            'Đây là Appeal to Authority - dựa vào uy tín của Bill Gates thay vì bằng chứng cụ thể về hiệu quả của AI trong bối cảnh giáo dục Việt Nam.',
        },
        {
          text: 'Nghiên cứu thí điểm tại 10 trường THPT cho thấy học sinh sử dụng AI hỗ trợ có điểm số cải thiện 15% so với nhóm kiểm soát.',
          isValid: true,
          explanation: 'Lập luận hợp lý dựa trên dữ liệu thực nghiệm cụ thể và có thể kiểm chứng.',
        },
      ],
    },
    {
      id: 'climate-action',
      title: 'Hành Động Chống Biến Đổi Khí Hậu',
      situation: 'Tranh luận về các biện pháp giảm phát thải carbon tại Việt Nam.',
      context: 'Diễn đàn môi trường quốc gia',
      difficulty: 'Nâng cao',
      arguments: [
        {
          text: 'Hoặc là chúng ta dừng hoàn toàn việc sử dụng than, hoặc là chúng ta sẽ không thể giảm phát thải.',
          isValid: false,
          fallacy: 'false-dilemma',
          explanation:
            'False Dilemma - bỏ qua các lựa chọn trung gian như giảm dần sử dụng than, chuyển sang than sạch hơn, hoặc kết hợp nhiều nguồn năng lượng.',
        },
        {
          text: 'Theo báo cáo của Bộ Tài nguyên và Môi trường, Việt Nam đã giảm 8.2% phát thải so với kịch bản thông thường trong giai đoạn 2011-2020.',
          isValid: true,
          explanation: 'Lập luận dựa trên dữ liệu chính thức và có thể kiểm chứng từ cơ quan có thẩm quyền.',
        },
        {
          text: 'Những người phản đối năng lượng tái tạo chỉ quan tâm đến lợi nhuận từ nhiên liệu hóa thạch.',
          isValid: false,
          fallacy: 'ad-hominem',
          explanation:
            'Ad Hominem - quy động cơ cho nhóm người mà không giải quyết các lập luận cụ thể của họ về năng lượng tái tạo.',
        },
      ],
    },
  ];

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleTimeUp();
    }
  }, [timeLeft, gameStarted]);

  const handleTimeUp = () => {
    setFeedback('⏰ Hết thời gian! Hãy chọn một lập luận.');
    setShowExplanation(true);
  };

  const startGame = () => {
    setGameStarted(true);
    setTimeLeft(120);
    setScore(0);
    setCurrentScenario(0);
    setSelectedArgument(null);
    setFeedback('');
    setShowExplanation(false);
    setHintsUsed(0);
  };

  const selectArgument = (index: number) => {
    if (selectedArgument !== null || !gameStarted) return;

    setSelectedArgument(index);
    const argument = scenarios[currentScenario].arguments[index];

    if (argument.isValid) {
      setScore(score + 100 - hintsUsed * 20);
      setFeedback('🎉 Chính xác! Đây là lập luận hợp lý.');
    } else {
      setScore(Math.max(0, score - 50));
      setFeedback(
        `❌ Không chính xác. Đây là lỗi lập luận: ${argument.fallacy ? fallacies.find((f) => f.id === argument.fallacy)?.name : 'Lỗi logic'}`,
      );
    }

    setShowExplanation(true);
  };

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedArgument(null);
      setFeedback('');
      setShowExplanation(false);
      setTimeLeft(120);
      setHintsUsed(0);
    } else {
      endGame();
    }
  };

  const endGame = () => {
    setGameStarted(false);
    setFeedback(`🎯 Interactive Practice kết thúc! Điểm số cuối cùng: ${score}`);
  };

  const getHint = () => {
    if (hintsUsed >= 2) return;

    setHintsUsed(hintsUsed + 1);
    const invalidArgs = scenarios[currentScenario].arguments.filter((arg) => !arg.isValid);
    if (invalidArgs.length > 0) {
      const hint = invalidArgs[Math.floor(Math.random() * invalidArgs.length)];
      setFeedback(
        `💡 Gợi ý: Hãy chú ý đến lỗi lập luận "${hint.fallacy ? fallacies.find((f) => f.id === hint.fallacy)?.name : 'Lỗi logic'}" trong một trong các lập luận.`,
      );
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!gameStarted) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-purple-300 mb-4">🧠 Logical Fallacy Detector</h2>
          <p className="text-gray-300 text-lg">
            Phát triển kỹ năng tư duy phê phán bằng cách nhận biết các lỗi lập luận trong các tình huống thực tế tại
            Việt Nam.
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-400/20">
              <h3 className="font-semibold text-purple-200 mb-2">🎯 Mục tiêu</h3>
              <p className="text-sm text-gray-300">Nhận biết lập luận hợp lý và các lỗi lập luận phổ biến</p>
            </div>
            <div className="bg-pink-900/30 rounded-lg p-4 border border-pink-400/20">
              <h3 className="font-semibold text-pink-200 mb-2">⏱️ Thời gian</h3>
              <p className="text-sm text-gray-300">2 phút cho mỗi tình huống</p>
            </div>
            <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-400/20">
              <h3 className="font-semibold text-purple-200 mb-2">🏆 Điểm số</h3>
              <p className="text-sm text-gray-300">+100 điểm đúng, -50 điểm sai</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-lg p-6 border border-purple-400/30">
            <h3 className="font-semibold text-purple-200 mb-4">Các loại lỗi lập luận bạn sẽ gặp:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {fallacies.slice(0, 4).map((fallacy) => (
                <div key={fallacy.id} className="text-left">
                  <h4 className="font-medium text-pink-300">{fallacy.name}</h4>
                  <p className="text-sm text-gray-400">{fallacy.description}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={startGame}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            🚀 Bắt đầu Interactive Practice
          </button>
        </div>
      </div>
    );
  }

  const scenario = scenarios[currentScenario];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-purple-300">🧠 Logical Fallacy Detector</h2>
          <p className="text-gray-400">
            Tình huống {currentScenario + 1}/{scenarios.length} - {scenario.difficulty}
          </p>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-pink-300">⏱️ {formatTime(timeLeft)}</div>
          <div className="text-purple-300">🏆 {score} điểm</div>
        </div>
      </div>

      {/* Scenario */}
      <div className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-lg p-6 mb-6 border border-purple-400/20">
        <h3 className="text-xl font-semibold text-purple-200 mb-2">{scenario.title}</h3>
        <p className="text-gray-300 mb-2">{scenario.situation}</p>
        <p className="text-sm text-gray-400">📍 Bối cảnh: {scenario.context}</p>
      </div>

      {/* Arguments */}
      <div className="space-y-4 mb-6">
        <h4 className="text-lg font-semibold text-pink-300">Hãy chọn lập luận HỢP LÝ nhất:</h4>
        {scenario.arguments.map((argument, index) => (
          <button
            key={index}
            onClick={() => selectArgument(index)}
            disabled={selectedArgument !== null}
            className={`w-full text-left p-4 rounded-lg border transition-all ${
              selectedArgument === index
                ? argument.isValid
                  ? 'bg-green-900/30 border-green-400/50 text-green-300'
                  : 'bg-red-900/30 border-red-400/50 text-red-300'
                : selectedArgument !== null
                  ? 'bg-gray-800/30 border-gray-600/30 text-gray-500'
                  : 'bg-purple-800/20 border-purple-400/30 text-gray-300 hover:bg-purple-700/30 hover:border-purple-400/50'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="font-semibold text-pink-400">{String.fromCharCode(65 + index)}.</span>
              <span>{argument.text}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={getHint}
          disabled={hintsUsed >= 2 || selectedArgument !== null}
          className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          💡 Gợi ý ({2 - hintsUsed} còn lại)
        </button>

        {showExplanation && (
          <button
            onClick={nextScenario}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
          >
            {currentScenario < scenarios.length - 1 ? '➡️ Tiếp theo' : '🏁 Kết thúc'}
          </button>
        )}
      </div>

      {/* Feedback */}
      {feedback && (
        <div className="bg-gradient-to-r from-blue-800/20 to-purple-800/20 rounded-lg p-4 border border-blue-400/30">
          <p className="text-blue-200 font-medium mb-2">{feedback}</p>
          {showExplanation && selectedArgument !== null && (
            <p className="text-gray-300 text-sm">
              <strong>Giải thích:</strong> {scenario.arguments[selectedArgument].explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default LogicalFallacyDetector;
