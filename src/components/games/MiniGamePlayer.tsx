/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import { useState, useEffect, useCallback } from 'react';
import {
  Trophy,
  Clock,
  X,
  ArrowLeft,
  RotateCcw,
} from 'lucide-react';
import { GAME_DATA, STEMExperimentLabGameData, AIEthicsDilemmaGameData, QuantumBasicsGameData, MathPuzzleGameData } from '@/data/games/gameData';
import { GAME_PROGRESS } from '@/data/gameData';
import { EducationalGame } from '@/data/educationalGames';
import { 
  BiologyEcosystemGame, 
  HistoryTimelineGame, 
  ChemistryLabGame,
  RoboticsNavigationGame,
  RobotNavigation3DGame,
  NeuralNetworkBuilderGame,
  SpaceExplorationGame,
  DataVisualizationGame,
  GeographyQuizGame,
  AIPromptGame,
  PythonCodingGame,
  ArduinoCircuitGame,
  STEMExperimentGame,
  AIEthicsGame,
  MathPuzzleGame,
  QuantumBasicsGame,
  BlockchainExplorerGame,
  ClimateModelingGame,
  CybersecurityDefenseGame
} from './individual';

interface MiniGameProps {
  game: EducationalGame;
  onComplete: (score: number) => void;
  onExit: () => void;
}

export function MiniGamePlayer({ game, onComplete, onExit }: MiniGameProps) {
  const [currentGameState, setCurrentGameState] = useState<string>('playing');
  const [timeLeft, setTimeLeft] = useState<number>(120); // 2 minutes per game
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);

  const getTimeBonus = useCallback(() => {
    const timeUsed = 120 - timeLeft;
    const timePercentage = timeUsed / 120;
    return Math.max(0, Math.round(50 * (1 - timePercentage))); // Up to 50 bonus points
  }, [timeLeft]);

  // Enhanced timer with visual feedback
  useEffect(() => {
    if (currentGameState === 'playing' && timeLeft > 0 && isTimerActive) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Time's up, show timeout message and return to menu
            setIsTimerActive(false);
            setCurrentGameState('timeout');
            return 120;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [
    currentGameState,
    timeLeft,
    isTimerActive,
    score,
    maxStreak,
    lives,
    game.id,
    onComplete,
    getTimeBonus,
  ]);

  const endGame = (success: boolean, rawScore: number = score) => {
    setIsTimerActive(false);
    const timeBonus = getTimeBonus();
    const streakBonus = maxStreak * 10;
    const perfectBonus = lives === 3 ? 25 : 0;
    const finalScore = Math.round(
      rawScore + timeBonus + streakBonus + perfectBonus,
    );

    GAME_PROGRESS.saveProgress(game.id, {
      score: finalScore,
      accuracy: success ? Math.min(100, rawScore) : Math.max(0, rawScore),
      timeMs: (120 - timeLeft) * 1000,
      completed: success || rawScore > 50,
      lastPlayed: Date.now(),
    });

    setCurrentGameState('results');
    onComplete(finalScore);
  };

  const renderGameContent = () => {
    switch (game.id) {
      case 'vietnam-geography-quiz':
        return (
          <GeographyQuizGame
            gameData={GAME_DATA[game.id] as any}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'ai-prompt-challenge':
        return (
          <AIPromptGame
            gameData={GAME_DATA[game.id] as any}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'python-coding-puzzle':
        return (
          <PythonCodingGame
            gameData={GAME_DATA[game.id] as any}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'arduino-circuit-builder':
        return (
          <ArduinoCircuitGame
            gameData={GAME_DATA[game.id] as any}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'stem-experiment-lab':
        return (
          <STEMExperimentGame
            gameData={GAME_DATA[game.id] as STEMExperimentLabGameData}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'robotics-navigation':
        return (
          <RoboticsNavigationGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'ai-ethics-dilemma':
        return (
          <AIEthicsGame
            gameData={GAME_DATA[game.id] as AIEthicsDilemmaGameData}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'quantum-basics':
        return (
          <QuantumBasicsGame
            gameData={GAME_DATA[game.id] as QuantumBasicsGameData}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'blockchain-explorer':
        return (
          <BlockchainExplorerGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'climate-modeling':
        return (
          <ClimateModelingGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'cybersecurity-defense':
        return (
          <CybersecurityDefenseGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'data-visualization':
        return (
          <DataVisualizationGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'space-exploration':
        return (
          <SpaceExplorationGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'neural-network-builder':
        return (
          <NeuralNetworkBuilderGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'math-puzzle':
        return (
          <MathPuzzleGame
            gameData={GAME_DATA[game.id] as MathPuzzleGameData}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'chemistry-lab':
        return (
          <ChemistryLabGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'biology-ecosystem':
        return (
          <BiologyEcosystemGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'history-timeline':
        return (
          <HistoryTimelineGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'robot-navigation-3d':
        return (
          <RobotNavigation3DGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      default:
        return <div className="text-white">Game not implemented yet!</div>;
    }
  };

  if (currentGameState === 'timeout') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-red-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-red-500/20">
          <div className="text-center">
            <Clock className="w-16 h-16 mx-auto mb-4 text-red-400" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Hết thời gian!
            </h2>
            <p className="text-gray-300 mb-2">Thời gian chơi đã kết thúc.</p>
            <p className="text-sm text-gray-400 mb-6">
              Điểm số hiện tại: {score} điểm
            </p>

            <div className="space-y-3">
              <button
                onClick={onExit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Chơi lại
              </button>

              <button
                onClick={onExit}
                className="w-full bg-white/10 text-white py-3 px-6 rounded-xl font-medium hover:bg-white/20 transition-all duration-200"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentGameState === 'failed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-red-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-red-500/20">
          <div className="text-center">
            <X className="w-16 h-16 mx-auto mb-4 text-red-400" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Hết thời gian!
            </h2>
            <p className="text-gray-300 mb-6">Đừng lo, hãy thử lại!</p>

            <div className="space-y-3">
              <button
                onClick={onExit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Chơi lại
              </button>

              <button
                onClick={onExit}
                className="w-full bg-white/10 text-white py-3 px-6 rounded-xl font-medium hover:bg-white/20 transition-all duration-200"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      {/* Game Header */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10 relative overflow-hidden">
          {/* Streak effect */}
          {streak > 0 && (
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onExit}
                className="text-white hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">{game.title}</h1>
                <p className="text-sm text-gray-400">
                  {game.difficulty} • {game.category}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {/* Timer with visual warning */}
              <div
                className={`flex items-center space-x-1 ${timeLeft <= 30 ? 'text-red-400 animate-pulse' : timeLeft <= 60 ? 'text-yellow-400' : 'text-emerald-400'}`}
              >
                <Clock className="w-5 h-5" />
                <span className="font-bold text-lg">
                  {Math.floor(timeLeft / 60)}:
                  {(timeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Score with animation */}
              <div className="flex items-center space-x-1 text-yellow-400">
                <Trophy className="w-5 h-5" />
                <span className="font-bold text-lg">{score}</span>
              </div>

              {/* Streak counter */}
              {streak > 0 && (
                <div className="flex items-center space-x-1 text-orange-400 animate-bounce">
                  <span className="text-lg">🔥</span>
                  <span className="font-bold text-lg">{streak}x</span>
                </div>
              )}

              {/* Lives with hearts */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: 3 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${i < lives ? 'text-red-500' : 'text-gray-600'} transition-all duration-300`}
                  >
                    ❤️
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced progress bar with segments */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <span>Tiến độ thời gian</span>
              <span>{Math.round((timeLeft / 120) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-3 relative overflow-hidden">
              <div
                className={`h-3 rounded-full transition-all duration-1000 ${
                  timeLeft <= 30
                    ? 'bg-gradient-to-r from-red-500 to-orange-500'
                    : timeLeft <= 60
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                      : 'bg-gradient-to-r from-emerald-500 to-blue-500'
                }`}
                style={{ width: `${(timeLeft / 120) * 100}%` }}
              />
              {/* Pulse effect for low time */}
              {timeLeft <= 30 && (
                <div className="absolute inset-0 bg-red-400/30 animate-pulse rounded-full"></div>
              )}
            </div>
          </div>

          {/* Bonus indicators */}
          {(streak > 2 || timeLeft > 90) && (
            <div className="mt-3 flex justify-center space-x-4 text-xs">
              {streak > 2 && (
                <div className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full border border-orange-500/30">
                  🔥 Streak x{streak}
                </div>
              )}
              {timeLeft > 90 && (
                <div className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full border border-blue-500/30">
                  ⚡ Speed Bonus
                </div>
              )}
              {lives === 3 && score > 30 && (
                <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                  💎 Perfect Run
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Game Content */}
      <div className="max-w-4xl mx-auto">{renderGameContent()}</div>
    </div>
  );
}

