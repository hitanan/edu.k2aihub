import React, { useState, useEffect } from 'react';
import { blockchainBlocks } from '@/data/games/blockchainData';

interface BlockchainExplorerGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export default function BlockchainExplorerGame({ onComplete, timeLeft, onRestart }: BlockchainExplorerGameProps) {
  const [currentBlock, setCurrentBlock] = useState(0);
  const [score, setScore] = useState(0);
  const [verifiedTransactions, setVerifiedTransactions] = useState<Set<number>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const blocks = blockchainBlocks;
  const currentBlockData = blocks[currentBlock];

  // Educational questions about blockchain concepts
  const questions = [
    {
      id: 1,
      question: "Blockchain hoạt động như thế nào?",
      options: [
        "Dữ liệu được lưu tập trung trên một server",
        "Mỗi block chứa hash của block trước đó, tạo thành chuỗi liên kết",
        "Chỉ một người có thể kiểm soát toàn bộ mạng",
        "Dữ liệu có thể được thay đổi bất cứ lúc nào"
      ],
      correct: 1,
      explanation: "Blockchain là chuỗi các block liên kết với nhau thông qua hash, đảm bảo tính toàn vẹn dữ liệu.",
      points: 20
    },
    {
      id: 2,
      question: "Mining trong blockchain có ý nghĩa gì?",
      options: [
        "Đào tiền từ lòng đất",
        "Giải thuật toán phức tạp để xác thực và thêm block mới",
        "Mua bán cryptocurrency",
        "Tạo ví điện tử mới"
      ],
      correct: 1,
      explanation: "Mining là quá trình giải thuật toán để tìm nonce phù hợp, xác thực transactions và tạo block mới.",
      points: 25
    },
    {
      id: 3,
      question: "Tại sao blockchain được coi là bảo mật?",
      options: [
        "Có mật khẩu mạnh",
        "Sử dụng encryption và phân tán trên nhiều node",
        "Chỉ chính phủ kiểm soát",
        "Không ai có thể truy cập"
      ],
      correct: 1,
      explanation: "Blockchain bảo mật nhờ mã hóa, phân tán và cơ chế đồng thuận, khó bị tấn công hoặc thay đổi.",
      points: 30
    }
  ];

  const verifyTransaction = (transactionId: number) => {
    if (!verifiedTransactions.has(transactionId)) {
      setVerifiedTransactions((prev) => new Set([...prev, transactionId]));
      setScore((prev) => prev + 15);
    }
  };

  const answerQuestion = (answerIndex: number) => {
    setSelectedAnswer(answerIndex.toString());
    const question = questions[currentQuestion];
    if (answerIndex === question.correct) {
      setScore(prev => prev + question.points);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      nextBlock();
    }
  };

  const nextBlock = () => {
    if (currentBlock < blocks.length - 1) {
      setCurrentBlock((prev) => prev + 1);
      setVerifiedTransactions(new Set());
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      onComplete(true, score);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">🔗 Blockchain Explorer - Block #{currentBlockData.id}</h3>
        <div className="text-blue-400 font-medium">Điểm: {score}</div>
        <div className="text-gray-400 text-sm">Câu hỏi {currentQuestion + 1}/{questions.length}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Block Information */}
        <div>
          <h4 className="text-white font-medium mb-3">Block Information:</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Hash:</span>
              <span className="text-cyan-400 font-mono text-sm">{currentBlockData.hash}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Previous Hash:</span>
              <span className="text-gray-400 font-mono text-sm">{currentBlockData.previousHash}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Nonce:</span>
              <span className="text-yellow-400">{currentBlockData.nonce}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Timestamp:</span>
              <span className="text-green-400">{currentBlockData.timestamp}</span>
            </div>
          </div>

          {/* Transactions */}
          <h4 className="text-white font-medium mb-3 mt-4">Transactions ({currentBlockData.transactions.length}):</h4>
          <div className="space-y-2">
            {currentBlockData.transactions.map((tx) => (
              <div
                key={tx.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  verifiedTransactions.has(tx.id)
                    ? 'bg-green-500/20 border-green-500/50'
                    : 'bg-gray-800/50 border-gray-600 hover:bg-gray-700/50'
                }`}
                onClick={() => verifyTransaction(tx.id)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white text-sm">
                      {tx.from} → {tx.to}
                    </div>
                    <div className="text-gray-400 text-xs">
                      Amount: {tx.amount} | Fee: {tx.fee}
                    </div>
                  </div>
                  {verifiedTransactions.has(tx.id) && <span className="text-green-400">✓</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Quiz */}
        <div>
          <h4 className="text-white font-medium mb-3">Kiến thức Blockchain:</h4>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="text-white font-medium mb-4">{currentQuestionData.question}</div>
            
            <div className="space-y-2">
              {currentQuestionData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => answerQuestion(index)}
                  disabled={showExplanation}
                  className={`w-full p-3 text-left rounded-lg transition-all ${
                    selectedAnswer === index.toString()
                      ? index === currentQuestionData.correct
                        ? 'bg-green-500/20 border-green-500/50 border'
                        : 'bg-red-500/20 border-red-500/50 border'
                      : 'bg-gray-700/50 border border-gray-600 hover:bg-gray-600/50'
                  } disabled:cursor-not-allowed`}
                >
                  <div className="text-white text-sm">{option}</div>
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="mt-4 p-3 bg-blue-500/20 border border-blue-500/50 rounded-lg">
                <div className="text-blue-300 text-sm font-medium mb-1">Giải thích:</div>
                <div className="text-gray-300 text-sm">{currentQuestionData.explanation}</div>
                <button
                  onClick={nextQuestion}
                  className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {currentQuestion < questions.length - 1 ? 'Câu tiếp theo' : 'Block tiếp theo'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {verifiedTransactions.size === currentBlockData.transactions.length && showExplanation && currentQuestion === questions.length - 1 && (
        <button
          onClick={nextBlock}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
        >
          {currentBlock < blocks.length - 1 ? 'Next Block →' : 'Complete Blockchain ✓'}
        </button>
      )}
    </div>
  );
}
