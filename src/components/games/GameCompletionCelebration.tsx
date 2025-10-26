'use client';
import React, { useState, useEffect } from 'react';

interface GameCompletionCelebrationProps {
  isVisible: boolean;
  gameName: string;
  finalScore: number;
  achievements?: string[];
  onClose: () => void;
  onPlayAgain?: () => void;
  onNextGame?: () => void;
  completionTime?: number; // in seconds
  level?: number;
  totalLevels?: number;
}

export default function GameCompletionCelebration({
  isVisible,
  gameName,
  finalScore,
  achievements = [],
  onClose,
  onPlayAgain,
  onNextGame,
  completionTime,
  level,
  totalLevels,
}: GameCompletionCelebrationProps) {
  const [showContent, setShowContent] = useState(false);
  const [fireworksActive, setFireworksActive] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowContent(true);
      setFireworksActive(true);
      
      // Auto hide fireworks after animation
      const timer = setTimeout(() => {
        setFireworksActive(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
      setFireworksActive(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const isGameComplete = level && totalLevels && level >= totalLevels;
  const congratulationMessage = isGameComplete 
    ? "🎉 Chúc mừng bạn đã hoàn thành toàn bộ Interactive Practice!"
    : level && totalLevels 
    ? `🎯 Hoàn thành Level ${level}/${totalLevels}!`
    : "🎉 Chúc mừng bạn đã hoàn thành Interactive Practice!";

  const getScoreRating = (score: number) => {
    if (score >= 100) return { text: "Xuất sắc!", color: "text-yellow-400", emoji: "🏆" };
    if (score >= 80) return { text: "Tuyệt vời!", color: "text-green-400", emoji: "⭐" };
    if (score >= 60) return { text: "Tốt lắm!", color: "text-blue-400", emoji: "👍" };
    return { text: "Cố gắng thêm!", color: "text-purple-400", emoji: "💪" };
  };

  const scoreRating = getScoreRating(finalScore);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Fireworks Animation */}
      {fireworksActive && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div 
        className={`
          relative bg-gradient-to-br from-slate-800 via-slate-900 to-black 
          rounded-3xl border border-white/20 shadow-2xl max-w-2xl w-full mx-4
          transform transition-all duration-500 ease-out
          ${showContent ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
        `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Đóng"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Main Congratulation */}
          <div className="mb-6">
            <div className="text-6xl mb-4 animate-bounce">
              {isGameComplete ? "🏆" : "🎉"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {congratulationMessage}
            </h2>
            <p className="text-xl text-gray-300">
              {gameName}
            </p>
          </div>

          {/* Score Section */}
          <div className="bg-black/40 rounded-2xl p-6 mb-6 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Final Score */}
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  {finalScore}
                </div>
                <div className="text-sm text-gray-400">Điểm số</div>
                <div className={`text-lg font-semibold ${scoreRating.color} mt-1`}>
                  {scoreRating.emoji} {scoreRating.text}
                </div>
              </div>

              {/* Completion Time */}
              {completionTime && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {Math.floor(completionTime / 60)}:{(completionTime % 60).toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-400">Thời gian</div>
                </div>
              )}

              {/* Level Progress */}
              {level && totalLevels && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {level}/{totalLevels}
                  </div>
                  <div className="text-sm text-gray-400">
                    {isGameComplete ? "Hoàn thành" : "Cấp độ"}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Achievements */}
          {achievements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">🏅 Thành tích đạt được</h3>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-3 border border-yellow-500/30"
                  >
                    <span className="text-yellow-300 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {onPlayAgain && (
              <button
                onClick={onPlayAgain}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                🔄 Chơi lại
              </button>
            )}
            
            {onNextGame && !isGameComplete && (
              <button
                onClick={onNextGame}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                ➡️ Game tiếp theo
              </button>
            )}

            <button
              onClick={onClose}
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              {isGameComplete ? "🏠 Về trang chủ" : "📚 Tiếp tục học"}
            </button>
          </div>

          {/* Motivational Message */}
          <div className="mt-6 p-4 bg-blue-900/30 rounded-xl border border-blue-500/30">
            <p className="text-blue-200 text-sm">
              {isGameComplete 
                ? "🌟 Bạn đã thể hiện kỹ năng xuất sắc! Hãy thử thách bản thân với các Interactive Practice khác để tiếp tục phát triển."
                : "💡 Việc hoàn thành từng cấp độ giúp bạn củng cố kiến thức và phát triển tư duy logic. Tiếp tục nỗ lực nhé!"
              }
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            ✨ Thành công! ✨
          </div>
        </div>
      </div>
    </div>
  );
}
