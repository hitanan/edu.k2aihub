'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Repeat, Trophy, FileText, Search, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { useEducationalGames } from '../EducationalGames';

// ... existing code ...
interface Action {
  name: string;
  description: string;
  timeCost: number;
  isCorrect: boolean;
}
// ... existing code ...

const story = {
  title: 'Vụ án lô hàng mất tích',
  introduction:
    'Bạn là một nhà khoa học dữ liệu tại một công ty logistics lớn. Một lô hàng điện tử giá trị cao đã biến mất khỏi kho. Dữ liệu là manh mối duy nhất của bạn. Hãy phân tích dữ liệu để tìm ra chuyện gì đã xảy ra.',
  clues: [
    { id: 1, text: 'Nhật ký truy cập cho thấy một lượt truy cập trái phép vào kho lúc 2 giờ sáng.', isRelevant: true },
    {
      id: 2,
      text: 'Dữ liệu GPS của xe tải cho thấy một điểm dừng không có kế hoạch gần một bến cảng.',
      isRelevant: true,
    },
    { id: 3, text: 'Hồ sơ nhân sự cho thấy một nhân viên kho có vấn đề về tài chính.', isRelevant: true },
    { id: 4, text: 'Dữ liệu bán hàng tuần trước cho thấy doanh số tăng đột biến.', isRelevant: false },
    { id: 5, text: 'Camera an ninh bị "lỗi" trong 15 phút quanh thời điểm xảy ra vụ việc.', isRelevant: true },
    { id: 6, text: 'Một email nội bộ phàn nàn về chất lượng cà phê trong phòng giải lao.', isRelevant: false },
  ],
  actions: [
    {
      name: 'Phân tích nhật ký truy cập',
      description: 'Kiểm tra các lần ra vào bất thường tại kho hàng.',
      timeCost: 2,
      isCorrect: true,
    },
    {
      name: 'Kiểm tra dữ liệu GPS của các xe tải',
      description: 'Tìm kiếm các tuyến đường hoặc điểm dừng đáng ngờ.',
      timeCost: 3,
      isCorrect: true,
    },
    {
      name: 'Đối chiếu hồ sơ nhân viên',
      description: 'Tìm kiếm các nhân viên có động cơ hoặc hành vi bất thường.',
      timeCost: 4,
      isCorrect: true,
    },
    {
      name: 'Phân tích dữ liệu bán hàng',
      description: 'Xem xét các xu hướng bán hàng gần đây để tìm sự bất thường.',
      timeCost: 5,
      isCorrect: false,
    },
    {
      name: 'Yêu cầu bản ghi camera an ninh',
      description: 'Kiểm tra lại các đoạn phim an ninh để tìm bằng chứng hình ảnh.',
      timeCost: 2,
      isCorrect: true,
    },
  ],
  conclusion: {
    correct:
      'Xuất sắc! Bằng cách kết hợp các manh mối, bạn đã phát hiện ra một nhân viên đã tạo một lượt truy cập giả, lấy trộm lô hàng và lái xe đến một bến cảng. Dữ liệu đã nói lên sự thật!',
    incorrect:
      'Bạn đã gần đúng, nhưng một số phân tích không chính xác đã làm bạn mất thời gian. Lô hàng đã được tìm thấy, nhưng thủ phạm đã có thời gian để che giấu dấu vết. Hãy thử lại và chú ý hơn đến các chi tiết!',
  },
};

const DataDetectiveGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [timeUsed, setTimeUsed] = useState(0);
  const [foundClues, setFoundClues] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [finalMessage, setFinalMessage] = useState('');
  const { markGameCompleted } = useEducationalGames();
  const timeLimit = 10;

  const handleAction = (action: Action) => {
    if (isFinished) return;

    setTimeUsed((prev) => prev + action.timeCost);
    if (action.isCorrect) {
      const relevantClue = story.clues.find((c) => c.isRelevant && !foundClues.includes(c.id));
      if (relevantClue) {
        setFoundClues((prev) => [...prev, relevantClue.id]);
      }
    }
  };

  const solveMystery = () => {
    const correctCluesFound = foundClues.length;
    const totalCorrectClues = story.clues.filter((c) => c.isRelevant).length;

    if (correctCluesFound >= totalCorrectClues && timeUsed <= timeLimit) {
      setFinalMessage(story.conclusion.correct);
      markGameCompleted('data-detective-missing-shipment', 100 - timeUsed);
    } else {
      setFinalMessage(story.conclusion.incorrect);
      markGameCompleted('data-detective-missing-shipment', Math.max(0, 50 - timeUsed));
    }
    setIsFinished(true);
  };

  const restartGame = () => {
    setIsGameStarted(true);
    setTimeUsed(0);
    setFoundClues([]);
    setIsFinished(false);
    setFinalMessage('');
  };

  if (!isGameStarted) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">{story.title}</h2>
        <p className="text-gray-300 mb-6">{story.introduction}</p>
        <button
          onClick={() => setIsGameStarted(true)}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center mx-auto"
        >
          <Play className="mr-2" /> Bắt đầu điều tra
        </button>
      </div>
    );
  }

  if (isFinished) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
        <Trophy className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
        <h2 className="text-3xl font-bold text-white mb-4">Kết thúc điều tra!</h2>
        <p className="text-gray-300 mb-6">{finalMessage}</p>
        <div className="flex justify-around max-w-md mx-auto mb-8">
          <div className="text-center">
            <p className="text-sm font-bold mt-2 text-white">Thời gian sử dụng</p>
            <p className="text-2xl font-bold text-purple-300">
              {timeUsed} / {timeLimit} giờ
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-bold mt-2 text-white">Manh mối tìm thấy</p>
            <p className="text-2xl font-bold text-purple-300">
              {foundClues.length} / {story.clues.filter((c) => c.isRelevant).length}
            </p>
          </div>
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Panel: Actions */}
      <div className="md:col-span-1">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Search className="mr-2" /> Hành động
        </h3>
        <div className="space-y-3">
          {story.actions.map((action) => (
            <button
              key={action.name}
              onClick={() => handleAction(action)}
              disabled={isFinished || timeUsed >= timeLimit}
              className="w-full text-left p-3 bg-gray-800 rounded-lg border-2 border-gray-700 hover:border-purple-500 transition-colors disabled:opacity-50"
            >
              <p className="font-semibold text-white">{action.name}</p>
              <p className="text-sm text-gray-400">{action.description}</p>
              <p className="text-xs text-purple-300 mt-1">Chi phí: {action.timeCost} giờ</p>
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel: Clues & Status */}
      <div className="md:col-span-2">
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <FileText className="mr-2" /> Bảng chứng cứ
          </h3>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-white flex items-center">
                <Clock className="mr-2" /> Thời gian đã sử dụng
              </p>
              <p className={`font-bold text-lg ${timeUsed > timeLimit * 0.75 ? 'text-red-400' : 'text-green-400'}`}>
                {timeUsed} / {timeLimit} giờ
              </p>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(timeUsed / timeLimit) * 100}%` }}
              />
            </div>
            {timeUsed >= timeLimit && !isFinished && (
              <p className="text-red-400 text-sm mt-2 flex items-center">
                <AlertTriangle className="mr-1 w-4 h-4" /> Hết thời gian! Hãy giải quyết vụ án.
              </p>
            )}
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-white mb-3">Các manh mối đã tìm thấy:</h4>
            <AnimatePresence>
              {foundClues.length > 0 ? (
                <ul className="space-y-2">
                  {foundClues.map((clueId) => {
                    const clue = story.clues.find((c) => c.id === clueId);
                    return (
                      <motion.li
                        key={clueId}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-3 bg-green-500/10 rounded-lg flex items-start"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{clue?.text}</span>
                      </motion.li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-gray-500 italic">Chưa tìm thấy manh mối nào. Hãy bắt đầu phân tích!</p>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={solveMystery}
            disabled={isFinished}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
          >
            <Trophy className="mr-2" /> Giải quyết vụ án
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataDetectiveGame;
