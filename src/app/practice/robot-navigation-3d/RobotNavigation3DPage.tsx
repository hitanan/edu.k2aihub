'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { RobotNavigation3DGame } from '@/components/practice/individual/RobotNavigation3DGame';
import ShareButton from '@/components/ShareButton';

export default function RobotNavigation3DPage() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [gameCompleted, setGameCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [showGame, setShowGame] = useState(true);

  const handleGameComplete = useCallback((success: boolean, score: number) => {
    setGameCompleted(success);
    setFinalScore(score);
  }, []);

  const handleRestart = useCallback(() => {
    setTimeLeft(300);
    setGameCompleted(false);
    setFinalScore(0);
    setShowGame(true); // Ensure game is shown
  }, []);

  const handleBackToMenu = useCallback(() => {
    // Reset game state and trigger menu mode in game component
    setTimeLeft(300);
    setGameCompleted(false);
    setFinalScore(0);
    // Force game to reset to menu by re-rendering
    setShowGame(false);
    setTimeout(() => setShowGame(true), 10);
  }, []);

  const shareData = {
    title: 'Robot Navigation 3D - Thế giới khối 3D với AI dẫn đường',
    text: `Tôi vừa hoàn thành game Robot Navigation 3D với điểm ${finalScore}! Thử thách khả năng lập trình và tư duy thuật toán của bạn!`,
    url: typeof window !== 'undefined' ? window.location.href : '',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Game Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">🤖 Robot Navigation 3D</h1>
              <p className="text-gray-300 text-lg">Thế giới khối 3D với AI dẫn đường thông minh</p>
            </div>
            <div className="flex items-center gap-4">
              <ShareButton {...shareData} />
              <div className="bg-black/30 rounded-lg px-4 py-2 text-white">
                <span className="text-sm">Thời gian: </span>
                <span className="font-bold text-yellow-400">{timeLeft}s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Introduction */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-blue-900/30 rounded-2xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">📚 Kiến thức và Kỹ năng</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">🧠 Thuật toán A*</h3>
              <p className="text-gray-300 text-sm">
                Học cách robot tìm đường tối ưu trong không gian 3D với thuật toán A* pathfinding
              </p>
            </div>
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">🎯 Không gian 3D</h3>
              <p className="text-gray-300 text-sm">
                Hiểu về tọa độ 3D, điều hướng trong không gian và xử lý vật cản phức tạp
              </p>
            </div>
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">🎮 Three.js & WebGL</h3>
              <p className="text-gray-300 text-sm">
                Trải nghiệm công nghệ 3D web hiện đại với Three.js và rendering thời gian thực
              </p>
            </div>
          </div>
        </div>

        {/* Game Features */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-black/30 rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-white font-semibold mb-2">Mục tiêu rõ ràng</h3>
            <p className="text-gray-400 text-sm">
              Robot cần tìm đường từ vị trí xuất phát đến đích trong môi trường 3D
            </p>
          </div>

          <div className="bg-black/30 rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl mb-3">🧱</div>
            <h3 className="text-white font-semibold mb-2">Thế giới khối</h3>
            <p className="text-gray-400 text-sm">
              Môi trường 3D được xây dựng từ các khối như Minecraft với vật cản đa dạng
            </p>
          </div>

          <div className="bg-black/30 rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-white font-semibold mb-2">Robot thông minh</h3>
            <p className="text-gray-400 text-sm">
              AI robot sử dụng thuật toán A* để tìm đường đi tối ưu trong không gian 3D
            </p>
          </div>

          <div className="bg-black/30 rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-white font-semibold mb-2">Thời gian thực</h3>
            <p className="text-gray-400 text-sm">Xem robot di chuyển mượt mà với animation 3D và hiệu ứng visual</p>
          </div>
        </div>

        {/* Main Game Container */}
        <div className="relative">
          {showGame && <RobotNavigation3DGame onComplete={handleGameComplete} timeLeft={timeLeft} />}
        </div>

        {/* Learning Resources */}
        <div className="mt-12 bg-gradient-to-r from-green-900/30 via-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-green-500/20">
          <h2 className="text-2xl font-bold text-white mb-6">📖 Tài liệu học tập</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">🔗 Liên kết hữu ích</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="https://threejs.org/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    • Three.js Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/A*_search_algorithm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    • A* Algorithm Wikipedia
                  </a>
                </li>
                <li>
                  <Link href="/learning/robotics" className="hover:text-blue-400 transition-colors">
                    • K2AI Robotics Module
                  </Link>
                </li>
                <li>
                  <Link href="/learning/ai-machine-learning" className="hover:text-blue-400 transition-colors">
                    • AI &amp; Machine Learning
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">🎯 Kỹ năng phát triển</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Tư duy thuật toán và tối ưu hóa</li>
                <li>• Hiểu biết về không gian 3D và tọa độ</li>
                <li>• Lập trình đồ họa và visualization</li>
                <li>• Problem-solving trong môi trường phức tạp</li>
                <li>• Robotics và AI pathfinding</li>
                <li>• Web development với Three.js</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {gameCompleted && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-green-800 via-blue-800 to-purple-800 rounded-2xl p-8 max-w-md mx-4 border border-green-400/30">
              <div className="text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-white mb-4">Xuất sắc!</h2>
                <p className="text-lg text-gray-300 mb-2">Robot đã tìm được đường đi tối ưu!</p>
                <div className="text-2xl font-bold text-yellow-400 mb-6">Điểm số: {finalScore}</div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleRestart}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-colors"
                  >
                    🔄 Practice again cùng màn
                  </button>
                  <button
                    onClick={handleBackToMenu}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold text-white transition-colors"
                  >
                    📋 Về menu chọn màn
                  </button>
                  <ShareButton {...shareData} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
