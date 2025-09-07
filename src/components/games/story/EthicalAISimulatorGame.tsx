'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Repeat, Trophy, BarChart, Users, Shield } from 'lucide-react';
import { useEducationalGames } from '../EducationalGames';

interface Choice {
  text: string;
  consequences: {
    ethics: number;
    effectiveness: number;
    publicTrust: number;
  };
  feedback: string;
}

interface Scenario {
  id: number;
  title: string;
  description: string;
  choices: Choice[];
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: 'Thuật toán tuyển dụng AI',
    description:
      'Công ty của bạn đang phát triển một thuật toán AI để sàng lọc hồ sơ ứng viên. Dữ liệu huấn luyện chủ yếu từ các nhân viên nam thành công trước đây. Bạn nhận thấy mô hình có xu hướng đánh giá thấp ứng viên nữ. Bạn sẽ làm gì?',
    choices: [
      {
        text: 'Báo cáo vấn đề và đề xuất thu thập thêm dữ liệu đa dạng.',
        consequences: { ethics: 10, effectiveness: -5, publicTrust: 5 },
        feedback:
          'Một lựa chọn có đạo đức! Ưu tiên sự công bằng có thể làm chậm tiến độ nhưng xây dựng được sản phẩm tốt hơn và đáng tin cậy hơn về lâu dài.',
      },
      {
        text: 'Tự mình điều chỉnh thuật toán để cố gắng giảm thiểu độ lệch.',
        consequences: { ethics: 5, effectiveness: 5, publicTrust: 0 },
        feedback:
          'Một nỗ lực đáng khen, nhưng việc tự điều chỉnh có thể dẫn đến các sai lệch không lường trước. Hợp tác và minh bạch là chìa khóa.',
      },
      {
        text: 'Lờ đi vấn đề vì thời hạn dự án đang đến gần.',
        consequences: { ethics: -10, effectiveness: 10, publicTrust: -10 },
        feedback:
          'Lựa chọn này ưu tiên tốc độ hơn đạo đức, có thể dẫn đến hậu quả pháp lý và tổn hại danh tiếng nghiêm trọng cho công ty.',
      },
    ],
  },
  {
    id: 2,
    title: 'Xe tự lái và tình huống khó xử',
    description:
      'Bạn đang lập trình cho một chiếc xe tự lái. Trong một tình huống tai nạn không thể tránh khỏi, xe phải lựa chọn giữa việc đâm vào một nhóm người đi bộ hoặc chuyển hướng và gây nguy hiểm cho hành khách trên xe. Bạn ưu tiên điều gì?',
    choices: [
      {
        text: 'Ưu tiên bảo vệ hành khách bằng mọi giá.',
        consequences: { ethics: -5, effectiveness: 5, publicTrust: -5 },
        feedback:
          'Lựa chọn này có thể hấp dẫn người mua xe, nhưng đặt ra câu hỏi đạo đức lớn về giá trị của các sinh mạng khác nhau.',
      },
      {
        text: 'Lập trình để giảm thiểu tổng số thương vong, ngay cả khi gây hại cho hành khách.',
        consequences: { ethics: 5, effectiveness: 0, publicTrust: 5 },
        feedback:
          'Một cách tiếp cận vị lợi, nhưng rất khó để thực hiện và có thể không được xã hội chấp nhận rộng rãi.',
      },
      {
        text: 'Đề xuất một ủy ban đạo đức để thiết lập các quy tắc minh bạch.',
        consequences: { ethics: 10, effectiveness: -10, publicTrust: 10 },
        feedback:
          'Lựa chọn tốt nhất! Các quyết định phức tạp này đòi hỏi sự đồng thuận của xã hội và các chuyên gia, không chỉ từ một lập trình viên.',
      },
    ],
  },
  // Add more scenarios here
];

const EthicalAISimulatorGame = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [scores, setScores] = useState({ ethics: 50, effectiveness: 50, publicTrust: 50 });
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const { markGameCompleted } = useEducationalGames();

  const handleChoice = (choice: Choice) => {
    setScores((prev) => ({
      ethics: Math.max(0, Math.min(100, prev.ethics + choice.consequences.ethics)),
      effectiveness: Math.max(0, Math.min(100, prev.effectiveness + choice.consequences.effectiveness)),
      publicTrust: Math.max(0, Math.min(100, prev.publicTrust + choice.consequences.publicTrust)),
    }));
    setFeedbackText(choice.feedback);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
    } else {
      setIsGameFinished(true);
      const finalScore = Math.round((scores.ethics + scores.effectiveness + scores.publicTrust) / 3);
      markGameCompleted('ethical-ai-simulator', finalScore);
    }
  };

  const restartGame = () => {
    setCurrentScenarioIndex(0);
    setScores({ ethics: 50, effectiveness: 50, publicTrust: 50 });
    setShowFeedback(false);
    setFeedbackText('');
    setIsGameStarted(true);
    setIsGameFinished(false);
  };

  if (!isGameStarted) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Mô phỏng Đạo đức AI</h2>
        <p className="text-gray-300 mb-6">
          Đối mặt với các tình huống khó xử trong thế giới thực và xem quyết định của bạn ảnh hưởng như thế nào đến đạo
          đức, hiệu quả và niềm tin của công chúng.
        </p>
        <button
          onClick={() => setIsGameStarted(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center mx-auto"
        >
          <Play className="mr-2" /> Bắt đầu
        </button>
      </div>
    );
  }

  if (isGameFinished) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
        <Trophy className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
        <h2 className="text-3xl font-bold text-white mb-4">Hoàn thành Mô phỏng!</h2>
        <p className="text-gray-300 mb-6">Đây là kết quả cuối cùng của bạn:</p>
        <div className="flex justify-around max-w-md mx-auto mb-8">
          <ScoreDisplay icon={<Shield />} label="Đạo đức" score={scores.ethics} />
          <ScoreDisplay icon={<BarChart />} label="Hiệu quả" score={scores.effectiveness} />
          <ScoreDisplay icon={<Users />} label="Niềm tin" score={scores.publicTrust} />
        </div>
        <button
          onClick={restartGame}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center mx-auto"
        >
          <Repeat className="mr-2" /> Chơi lại
        </button>
      </motion.div>
    );
  }

  const currentScenario = scenarios[currentScenarioIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScenarioIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-blue-300">Tình huống {currentScenario.id}</h2>
              <span className="text-sm text-gray-400">
                {currentScenarioIndex + 1} / {scenarios.length}
              </span>
            </div>
            <p className="text-lg font-semibold text-white mb-2">{currentScenario.title}</p>
            <p className="text-gray-300">{currentScenario.description}</p>
          </div>

          <div className="space-y-3">
            {currentScenario.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice)}
                disabled={showFeedback}
                className="w-full text-left p-4 bg-gray-800 rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-colors disabled:opacity-50 disabled:hover:border-gray-700"
              >
                {choice.text}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
          >
            <p className="text-gray-300 mb-4">{feedbackText}</p>
            <div className="flex justify-around mb-4">
              <ScoreChange
                label="Đạo đức"
                change={currentScenario.choices.find((c) => c.feedback === feedbackText)!.consequences.ethics}
              />
              <ScoreChange
                label="Hiệu quả"
                change={currentScenario.choices.find((c) => c.feedback === feedbackText)!.consequences.effectiveness}
              />
              <ScoreChange
                label="Niềm tin"
                change={currentScenario.choices.find((c) => c.feedback === feedbackText)!.consequences.publicTrust}
              />
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              Tiếp theo <ArrowRight className="ml-2" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8">
        <h3 className="text-center text-lg font-bold text-white mb-4">Chỉ số hiện tại</h3>
        <div className="flex justify-around">
          <ScoreDisplay icon={<Shield />} label="Đạo đức" score={scores.ethics} />
          <ScoreDisplay icon={<BarChart />} label="Hiệu quả" score={scores.effectiveness} />
          <ScoreDisplay icon={<Users />} label="Niềm tin" score={scores.publicTrust} />
        </div>
      </div>
    </div>
  );
};

const ScoreDisplay = ({ icon, label, score }: { icon: React.ReactNode; label: string; score: number }) => (
  <div className="text-center">
    <div className="relative w-20 h-20">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          className="text-gray-700"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          className="text-blue-400"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={`${score}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">{icon}</div>
    </div>
    <p className="text-sm font-bold mt-2 text-white">{label}</p>
    <p className="text-xs text-gray-400">{score}%</p>
  </div>
);

const ScoreChange = ({ label, change }: { label: string; change: number }) => {
  const isPositive = change > 0;
  const isNegative = change < 0;
  const color = isPositive ? 'text-green-400' : isNegative ? 'text-red-400' : 'text-gray-400';

  return (
    <div className="text-center">
      <p className="text-sm text-gray-300">{label}</p>
      <p className={`text-lg font-bold ${color}`}>
        {isPositive && '+'}
        {change}
      </p>
    </div>
  );
};

export default EthicalAISimulatorGame;
