'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Clock,
  Play,
  ExternalLink,
  CheckCircle,
  Trophy,
  Target,
} from 'lucide-react';
import { EducationalGame } from '@/data/educationalGames';
import { useEducationalGames } from '@/components/games/EducationalGames';
import { MiniGamePlayer } from '@/components/games/MiniGamePlayer';
import { PageTracker } from '@/components/gamification/VisitTracker';
import { useLearningProgress } from '@/components/gamification/LearningProgress';

interface GamePageClientProps {
  game: EducationalGame;
}

export default function GamePageClient({ game }: GamePageClientProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { completedGames, markGameCompleted } = useEducationalGames();
  const { completLesson } = useLearningProgress();
  const isCompleted = completedGames.includes(game.id);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Cơ bản':
        return 'text-green-400 bg-green-500/20';
      case 'Trung bình':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'Nâng cao':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-blue-400 bg-blue-500/20';
    }
  };

  const getCategoryIcon = (category: EducationalGame['category']) => {
    switch (category) {
      case 'quiz':
        return '❓';
      case 'puzzle':
        return '🧩';
      case 'simulation':
        return '🎮';
      case 'coding':
        return '💻';
      case 'memory':
        return '🧠';
      case 'strategy':
        return '🎯';
      default:
        return '🎯';
    }
  };

  const handlePlay = () => {
    if (game.isInternal) {
      setIsLoading(true);
      // Simulate loading time for better UX
      setTimeout(() => {
        setIsLoading(false);
        setIsPlaying(true);
      }, 500);
    } else if (game.url) {
      window.open(game.url, '_blank', 'noopener,noreferrer');
      // Track external game play
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'external_game_play', {
          game_id: game.id,
          game_title: game.title,
        });
      }
    }
  };

  const handleGameComplete = (score: number) => {
    markGameCompleted(game.id, score);
    completLesson('games', game.id, 15); // 15 minutes average play time
    setIsPlaying(false);
  };

  if (isPlaying && game.isInternal) {
    return (
      <MiniGamePlayer
        game={game}
        onComplete={handleGameComplete}
        onExit={() => setIsPlaying(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <PageTracker
        path={`/games/${game.id}`}
        title={game.title}
        moduleType="learning"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/games"
          className="inline-flex items-center text-purple-300 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Quay lại danh sách trò chơi
        </Link>
      </div>

      {/* Game Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-gradient-to-r ${game.color} rounded-3xl p-1 mb-8`}>
          <div className="bg-slate-900/90 rounded-3xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-6xl">{game.icon}</span>
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-2">
                      {game.title}
                    </h1>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(game.difficulty)}`}
                      >
                        {game.difficulty}
                      </span>
                      <span className="text-gray-300 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {game.estimatedTime}
                      </span>
                      {isCompleted && (
                        <span className="text-green-400 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Đã hoàn thành
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6">{game.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {game.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={handlePlay}
                  disabled={isPlaying || isLoading}
                  className={`inline-flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isPlaying || isLoading
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Đang tải...
                    </>
                  ) : isPlaying ? (
                    <>
                      <div className="animate-pulse h-5 w-5 bg-white/50 rounded mr-3"></div>
                      Đang chơi...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-3" />
                      {game.isInternal ? 'Chơi ngay' : 'Mở trò chơi'}
                      {!game.isInternal && (
                        <ExternalLink className="w-4 h-4 ml-2" />
                      )}
                    </>
                  )}
                </button>
              </div>

              <div className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Thông tin chi tiết
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Danh mục:</span>
                    <span className="text-white flex items-center">
                      <span className="mr-2">
                        {getCategoryIcon(game.category)}
                      </span>
                      {game.category}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Cấp độ:</span>
                    <span
                      className={`px-2 py-1 rounded text-sm ${getDifficultyColor(game.difficulty)}`}
                    >
                      {game.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Thời gian:</span>
                    <span className="text-white">{game.estimatedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Điểm thưởng:</span>
                    <span className="text-yellow-400 flex items-center">
                      <Trophy className="w-4 h-4 mr-1" />
                      {game.points} điểm
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Loại:</span>
                    <span className="text-white">
                      {game.isInternal ? '🏠 Nội bộ' : '🔗 Bên ngoài'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Description */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Target className="w-6 h-6 mr-3 text-purple-400" />
            Mục tiêu học tập
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Kỹ năng phát triển
              </h3>
              <ul className="space-y-2">
                {game.skills.map((skill, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Hướng dẫn chơi
              </h3>
              <div className="text-gray-300 space-y-2">
                {game.category === 'quiz' && (
                  <>
                    <p>• Đọc câu hỏi và chọn đáp án đúng</p>
                    <p>• Mỗi câu hỏi có 4 lựa chọn</p>
                    <p>• Hoàn thành tất cả câu hỏi để nhận điểm</p>
                  </>
                )}
                {game.category === 'puzzle' && (
                  <>
                    <p>• Sử dụng logic để giải các bài toán</p>
                    <p>• Kéo thả để sắp xếp các phần tử</p>
                    <p>• Hoàn thành càng nhanh càng nhiều điểm</p>
                  </>
                )}
                {game.category === 'simulation' && (
                  <>
                    <p>• Tương tác với giao diện mô phỏng</p>
                    <p>• Thực hiện các thí nghiệm ảo</p>
                    <p>• Quan sát và ghi nhận kết quả</p>
                  </>
                )}
                {game.category === 'coding' && (
                  <>
                    <p>• Viết code để giải quyết bài toán</p>
                    <p>• Kiểm tra và sửa lỗi syntax</p>
                    <p>• Chạy thử và xem kết quả</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Games */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Trò chơi liên quan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* This would show related games - implement based on category or moduleType */}
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">🎮</div>
              <p>Thêm trò chơi sẽ được cập nhật sớm!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
