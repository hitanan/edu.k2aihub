'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Shield, AlertCircle, CheckCircle, Users, MessageSquare, Zap } from 'lucide-react';

interface DigitalCitizenshipEthicsSimulatorGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface EthicsScenario {
  id: string;
  title: string;
  description: string;
  situation: string;
  options: {
    id: string;
    text: string;
    ethical: boolean;
    consequence: string;
    points: number;
  }[];
  principle: string;
}

const ethicsScenarios: EthicsScenario[] = [
  {
    id: 'privacy-data',
    title: 'Bảo Mật Dữ Liệu Cá Nhân',
    description: 'Bạn phát hiện thấy một ứng dụng đang thu thập dữ liệu cá nhân của người dùng mà không có sự đồng ý.',
    situation:
      'Công ty bạn phát triển một ứng dụng mới và muốn thu thập thêm dữ liệu để cải thiện sản phẩm. Bạn sẽ làm gì?',
    options: [
      {
        id: 'a',
        text: 'Thu thập dữ liệu ngầm để có thêm thông tin hữu ích',
        ethical: false,
        consequence: 'Vi phạm quyền riêng tư của người dùng, có thể bị phạt pháp lý',
        points: -20,
      },
      {
        id: 'b',
        text: 'Xin phép người dùng một cách minh bạch trước khi thu thập',
        ethical: true,
        consequence: 'Xây dựng niềm tin với người dùng và tuân thủ pháp luật',
        points: 30,
      },
      {
        id: 'c',
        text: 'Chỉ thu thập dữ liệu cần thiết nhất với sự đồng ý',
        ethical: true,
        consequence: 'Cân bằng tốt giữa cải thiện sản phẩm và bảo vệ quyền riêng tư',
        points: 40,
      },
    ],
    principle: 'Quyền riêng tư và minh bạch dữ liệu',
  },
  {
    id: 'social-media',
    title: 'Nội Dung Trên Mạng Xã Hội',
    description: 'Bạn thấy một bài viết có thông tin sai lệch đang được chia sẻ rộng rãi.',
    situation: 'Một bài viết có thông tin không chính xác về vấn đề y tế đang viral. Bạn sẽ phản ứng như thế nào?',
    options: [
      {
        id: 'a',
        text: 'Bỏ qua vì không phải việc của mình',
        ethical: false,
        consequence: 'Thông tin sai lệch tiếp tục lan truyền, có thể gây hại',
        points: -10,
      },
      {
        id: 'b',
        text: 'Chia sẻ thông tin chính xác và báo cáo bài viết sai',
        ethical: true,
        consequence: 'Giúp ngăn chặn thông tin sai lệch và giáo dục cộng đồng',
        points: 35,
      },
      {
        id: 'c',
        text: 'Chỉ trích công khai người đăng bài một cách gay gắt',
        ethical: false,
        consequence: 'Tạo ra xung đột, không giải quyết được vấn đề gốc rễ',
        points: -15,
      },
    ],
    principle: 'Trách nhiệm thông tin và văn hóa mạng',
  },
  {
    id: 'ai-bias',
    title: 'Thiên Kiến Trong AI',
    description: 'Hệ thống AI mà team bạn phát triển có dấu hiệu thiên kiến về giới tính trong quá trình tuyển dụng.',
    situation: 'Dữ liệu huấn luyện cho AI tuyển dụng chủ yếu từ hồ sơ nam giới. Bạn sẽ xử lý như thế nào?',
    options: [
      {
        id: 'a',
        text: 'Tiếp tục sử dụng vì kết quả dự đoán khá chính xác',
        ethical: false,
        consequence: 'Duy trì và gia tăng bất bình đẳng giới trong tuyển dụng',
        points: -25,
      },
      {
        id: 'b',
        text: 'Cân bằng lại dữ liệu và test để loại bỏ thiên kiến',
        ethical: true,
        consequence: 'Tạo ra hệ thống công bằng và đa dạng hơn',
        points: 40,
      },
      {
        id: 'c',
        text: 'Thông báo vấn đề nhưng không có thời gian sửa',
        ethical: false,
        consequence: 'Nhận thức vấn đề nhưng không hành động, vẫn gây thiệt hại',
        points: -5,
      },
    ],
    principle: 'Công bằng và đa dạng trong AI',
  },
];

export default function DigitalCitizenshipEthicsSimulatorGame({
  onComplete,
  timeLeft,
  onRestart,
}: DigitalCitizenshipEthicsSimulatorGameProps) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [scenarioResults, setScenarioResults] = useState<{ scenarioId: string; points: number; correct: boolean }[]>(
    [],
  );

  const handleOptionSelect = useCallback(
    (optionId: string) => {
      if (showResult) return;
      setSelectedOption(optionId);
    },
    [showResult],
  );

  const handleConfirmChoice = useCallback(() => {
    if (!selectedOption) return;

    const scenario = ethicsScenarios[currentScenario];
    const option = scenario.options.find((opt) => opt.id === selectedOption);

    if (option) {
      const newScore = totalScore + option.points;
      setTotalScore(newScore);
      setScenarioResults((prev) => [
        ...prev,
        {
          scenarioId: scenario.id,
          points: option.points,
          correct: option.ethical,
        },
      ]);
      setShowResult(true);
    }
  }, [selectedOption, currentScenario, totalScore]);

  const handleNextScenario = useCallback(() => {
    if (currentScenario < ethicsScenarios.length - 1) {
      setCurrentScenario((prev) => prev + 1);
      setSelectedOption('');
      setShowResult(false);
    } else {
      setGameComplete(true);
      const finalScore = Math.max(0, Math.min(100, (totalScore / (ethicsScenarios.length * 40)) * 100));
      onComplete(totalScore > 0, finalScore);
    }
  }, [currentScenario, totalScore, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0 && !gameComplete) {
      const finalScore = Math.max(0, (totalScore / (ethicsScenarios.length * 40)) * 100);
      onComplete(totalScore > 0, finalScore);
    }
  }, [timeLeft, gameComplete, totalScore, onComplete]);

  const currentScenarioData = ethicsScenarios[currentScenario];
  // const selectedOptionData = currentScenarioData?.options.find(opt => opt.id === selectedOption);

  if (gameComplete) {
    const finalScore = Math.max(0, Math.min(100, (totalScore / (ethicsScenarios.length * 40)) * 100));
    const correctAnswers = scenarioResults.filter((result) => result.correct).length;

    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white rounded-xl">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h2 className="text-3xl font-bold mb-2">Kết Quả Digital Ethics</h2>
          <div className="text-6xl font-bold text-green-400 mb-4">{Math.round(finalScore)}%</div>
          <p className="text-xl mb-6">
            Bạn đã trả lời đúng {correctAnswers}/{ethicsScenarios.length} tình huống đạo đức
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              Điểm Mạnh
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore >= 80 && <li>• Hiểu rõ các nguyên tắc đạo đức số</li>}
              {finalScore >= 60 && <li>• Nhận thức tốt về trách nhiệm cá nhân</li>}
              {finalScore >= 40 && <li>• Có cơ sở tư duy đạo đức cần thiết</li>}
              {correctAnswers > 0 && <li>• Đưa ra quyết định có tính thân thiện môi trường số</li>}
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-orange-400" />
              Cần Cải Thiện
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore < 80 && <li>• Tăng cường hiểu biết về đạo đức AI</li>}
              {finalScore < 60 && <li>• Phát triển kỹ năng phân tích tình huống</li>}
              {finalScore < 40 && <li>• Học thêm về quyền số và bảo mật</li>}
              <li>• Thực hành nhiều tình huống thực tế hơn</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <Zap className="w-4 h-4 inline mr-2" />
            Thử Lại
          </button>
          <button
            onClick={() => onComplete(true, finalScore)}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Hoàn Thành
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Shield className="w-8 h-8 mr-3 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold">Digital Ethics Simulator</h2>
            <p className="text-blue-300">
              Tình huống {currentScenario + 1}/{ethicsScenarios.length}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-400">{totalScore} điểm</div>
          <div className="text-sm text-gray-300">
            ⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-2 mb-6">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentScenario + (showResult ? 1 : 0)) / ethicsScenarios.length) * 100}%` }}
        />
      </div>

      {/* Scenario Content */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-3 text-yellow-300">{currentScenarioData.title}</h3>
        <p className="text-gray-200 mb-4">{currentScenarioData.description}</p>

        <div className="bg-blue-900/50 rounded-lg p-4 mb-4">
          <div className="flex items-start">
            <MessageSquare className="w-5 h-5 mr-2 text-blue-300 flex-shrink-0 mt-0.5" />
            <p className="text-blue-100">{currentScenarioData.situation}</p>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentScenarioData.options.map((option) => (
            <div key={option.id} className="relative">
              <button
                onClick={() => handleOptionSelect(option.id)}
                disabled={showResult}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  selectedOption === option.id
                    ? showResult
                      ? option.ethical
                        ? 'border-green-500 bg-green-900/30'
                        : 'border-red-500 bg-red-900/30'
                      : 'border-blue-500 bg-blue-900/30'
                    : 'border-gray-600 bg-white/5 hover:bg-white/10'
                } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option.text}</span>
                  {showResult && selectedOption === option.id && (
                    <div className="flex items-center">
                      {option.ethical ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      )}
                      <span className="ml-2 font-semibold">
                        {option.points > 0 ? '+' : ''}
                        {option.points}
                      </span>
                    </div>
                  )}
                </div>
              </button>

              {showResult && selectedOption === option.id && (
                <div className="mt-2 p-3 bg-gray-800 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-sm text-gray-300">
                    <strong>Hậu quả:</strong> {option.consequence}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ethics Principle */}
      {showResult && (
        <div className="bg-purple-900/30 border border-purple-500 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-purple-300 mb-2">💡 Nguyên tắc đạo đức:</h4>
          <p className="text-purple-100">{currentScenarioData.principle}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        {!showResult ? (
          <button
            onClick={handleConfirmChoice}
            disabled={!selectedOption}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedOption
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Xác Nhận Lựa Chọn
          </button>
        ) : (
          <button
            onClick={handleNextScenario}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            {currentScenario < ethicsScenarios.length - 1 ? (
              <>
                <Users className="w-4 h-4 inline mr-2" />
                Tình Huống Tiếp Theo
              </>
            ) : (
              <>
                <Shield className="w-4 h-4 inline mr-2" />
                Xem Kết Quả
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
