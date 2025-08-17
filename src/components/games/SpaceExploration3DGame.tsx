'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import để tránh SSR issues với Three.js
const SpaceExploration3DGame = dynamic(() => import('./individual/SpaceExploration3DGame'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
        <p className="text-gray-300">Đang tải môi trường không gian 3D...</p>
        <div className="mt-4 text-sm text-gray-400">
          <div className="flex items-center justify-center gap-2">
            <span className="animate-pulse">🚀</span>
            <span>Khởi động động cơ vũ trụ...</span>
            <span className="animate-pulse">✨</span>
          </div>
        </div>
      </div>
    </div>
  ),
});

interface GameState {
  score: number;
  completed: boolean;
  timeLeft: number;
}

export default function SpaceExploration3DGameWrapper() {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    completed: false,
    timeLeft: 600, // 10 minutes
  });

  // Game timer
  useEffect(() => {
    if (gameState.timeLeft > 0 && !gameState.completed) {
      const timer = setInterval(() => {
        setGameState(prev => ({
          ...prev,
          timeLeft: Math.max(0, prev.timeLeft - 1)
        }));
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [gameState.timeLeft, gameState.completed]);

  // Preload Three.js modules
  useEffect(() => {
    const preloadThreeJS = async () => {
      try {
        await import('three');
        await import('@react-three/fiber');
        await import('@react-three/drei');
        console.log('Three.js modules preloaded for Space Exploration');
      } catch (error) {
        console.log('Three.js preload optional:', error);
      }
    };

    preloadThreeJS();
  }, []);

  const handleGameComplete = (success: boolean, score: number) => {
    setGameState(prev => ({
      ...prev,
      score,
      completed: true
    }));

    // Save completion to localStorage
    const gameProgress = JSON.parse(localStorage.getItem('gameProgress') || '{}');
    gameProgress['space-exploration-3d'] = {
      completed: success,
      score,
      timestamp: new Date().toISOString(),
      timeLeft: gameState.timeLeft
    };
    localStorage.setItem('gameProgress', JSON.stringify(gameProgress));
  };

  const handleRestart = () => {
    setGameState({
      score: 0,
      completed: false,
      timeLeft: 600
    });
  };

  return (
    <div className="min-h-screen">
      {!gameState.completed ? (
        <SpaceExploration3DGame
          onComplete={handleGameComplete}
          timeLeft={gameState.timeLeft}
        />
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md text-center text-white">
            <div className="text-6xl mb-4">
              {gameState.score > 1000 ? '🏆' : gameState.score > 500 ? '🥇' : '🎯'}
            </div>
            <h2 className="text-2xl font-bold mb-4">
              {gameState.score > 1000 ? 'Phi hành gia xuất sắc!' : 
               gameState.score > 500 ? 'Nhiệm vụ thành công!' : 
               'Hoàn thành nhiệm vụ!'}
            </h2>
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <div className="text-3xl font-bold text-yellow-400">{gameState.score}</div>
              <div className="text-sm text-gray-300">Điểm số</div>
              <div className="mt-2 text-xs text-gray-400">
                Thời gian còn lại: {gameState.timeLeft}s
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleRestart}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                🔄 Chơi lại
              </button>
              <button
                onClick={() => window.location.href = '/games'}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
              >
                🏠 Về trang game
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
