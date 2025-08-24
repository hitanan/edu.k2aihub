'use client';

import React, { useState, useCallback } from 'react';
import { Brain, Play, Settings, BookOpen } from 'lucide-react';

export default function NeuralNetworkBuilder3D() {
  const [started, setStarted] = useState(false);

  const handlePlayGame = useCallback(() => {
    setStarted(true);
  }, []);

  if (started) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <Brain className="w-16 h-16 mx-auto mb-4 text-purple-400" />
          <h1 className="text-4xl font-bold mb-4">Neural Network Builder 3D</h1>
          <p className="text-xl text-gray-300 mb-8">Xây dựng và huấn luyện mạng neural 3D</p>
          <button
            onClick={() => setStarted(true)}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold flex items-center gap-2 mx-auto"
          >
            <Play className="w-5 h-5" />
            Bắt Đầu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center p-8">
        <Brain className="w-24 h-24 mx-auto mb-6 text-purple-400" />
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Neural Network Builder 3D Advanced
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Xây dựng và huấn luyện mạng neural trong không gian 3D tương tác. Khám phá deep learning, backpropagation, và
          các kiến trúc neural network tiên tiến.
        </p>

        {/* Game Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-semibold text-white mb-2">3D Neural Architecture</h3>
            <p className="text-gray-300 text-sm">
              Thiết kế mạng neural trong không gian 3D với các layers, nodes, và connections trực quan
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-time Training</h3>
            <p className="text-gray-300 text-sm">
              Quan sát quá trình học của mạng neural trong thời gian thực với gradient visualization
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">Advanced Analytics</h3>
            <p className="text-gray-300 text-sm">Phân tích performance, loss functions, và optimization algorithms</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handlePlayGame}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Play className="w-6 h-6" />
            Chơi Game
          </button>

          <button
            className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-lg font-semibold transition-all duration-300"
            onClick={() => alert('Settings coming soon!')}
          >
            <Settings className="w-5 h-5" />
            Cài đặt
          </button>

          <button
            className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-lg font-semibold transition-all duration-300"
            onClick={() => alert('Tutorial coming soon!')}
          >
            <BookOpen className="w-5 h-5" />
            Hướng dẫn
          </button>
        </div>

        {/* Learning Objectives */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">🎯 Mục Tiêu Học Tập</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Hiểu cấu trúc và hoạt động của neural networks
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Thực hành xây dựng kiến trúc mạng đa tầng
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Nắm vững thuật toán backpropagation
              </li>
            </ul>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Tối ưu hóa hyperparameters và learning rate
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Áp dụng các activation functions khác nhau
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2">✓</span>
                Phân tích overfitting và regularization techniques
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
