/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Play,
  Trophy,
  Clock,
  Target,
  X,
  ArrowLeft,
  RotateCcw,
  Lightbulb,
} from 'lucide-react';
import { GAME_DATA, GAME_PROGRESS } from '@/data/gameData';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';
import { EducationalGame } from '@/data/educationalGames';

interface MiniGameProps {
  game: EducationalGame;
  onComplete: (score: number) => void;
  onExit: () => void;
}

export function MiniGamePlayer({ game, onComplete, onExit }: MiniGameProps) {
  const [currentGameState, setCurrentGameState] = useState<string>('menu');
  const [startTime, setStartTime] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(120); // 2 minutes per game
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  const addScore = (points: number, isCorrect: boolean = true) => {
    if (isCorrect) {
      const streakMultiplier = Math.min(streak + 1, 5); // Max 5x multiplier
      const bonusPoints = points * streakMultiplier;
      setScore((prev) => prev + bonusPoints);
      setStreak((prev) => {
        const newStreak = prev + 1;
        setMaxStreak((current) => Math.max(current, newStreak));
        return newStreak;
      });
    } else {
      setStreak(0);
      setLives((prev) => Math.max(0, prev - 1));
    }
  };

  const getTimeBonus = useCallback(() => {
    const timeUsed = 120 - timeLeft;
    const timePercentage = timeUsed / 120;
    return Math.max(0, Math.round(50 * (1 - timePercentage))); // Up to 50 bonus points
  }, [timeLeft]);

  const startGame = () => {
    setCurrentGameState('playing');
    setStartTime(Date.now());
    setTimeLeft(120); // 2 minutes for better gameplay
    setScore(0);
    setLives(3);
    setStreak(0);
    setMaxStreak(0);
    setIsTimerActive(true);
  };

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
    startTime,
    game.id,
    onComplete,
    getTimeBonus,
  ]);

  const endGame = (success: boolean, rawScore: number = score) => {
    setIsTimerActive(false);
    const elapsedTime = Date.now() - startTime;
    const timeBonus = getTimeBonus();
    const streakBonus = maxStreak * 10;
    const perfectBonus = lives === 3 ? 25 : 0;
    const finalScore = Math.round(
      rawScore + timeBonus + streakBonus + perfectBonus,
    );

    GAME_PROGRESS.saveProgress(game.id, {
      score: finalScore,
      accuracy: success ? Math.min(100, rawScore) : Math.max(0, rawScore),
      timeMs: elapsedTime,
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
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'ai-prompt-challenge':
        return (
          <AIPromptGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'python-coding-puzzle':
        return (
          <PythonCodingGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'arduino-circuit-builder':
        return (
          <ArduinoCircuitGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'stem-experiment-lab':
        return (
          <STEMExperimentGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'robotics-navigation':
        return (
          <RoboticsNavigationGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'scratch-animation-studio':
        return (
          <ScratchAnimationGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'ai-ethics-dilemma':
        return (
          <AIEthicsGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'quantum-basics':
        return (
          <QuantumBasicsGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'blockchain-explorer':
        return (
          <BlockchainExplorerGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'climate-modeling':
        return (
          <ClimateModelingGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'cybersecurity-defense':
        return (
          <CybersecurityDefenseGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'data-visualization':
        return (
          <DataVisualizationGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'space-exploration':
        return (
          <SpaceExplorationGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'neural-network-builder':
        return (
          <NeuralNetworkBuilderGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'math-puzzle':
        return (
          <MathPuzzleGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'chemistry-lab':
        return (
          <ChemistryLabGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'biology-ecosystem':
        return (
          <BiologyEcosystemGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'history-timeline':
        return (
          <HistoryTimelineGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      case 'robot-navigation-3d':
        return (
          <RobotNavigation3DGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('menu')}
          />
        );
      default:
        return <div className="text-white">Game not implemented yet!</div>;
    }
  };

  if (currentGameState === 'menu') {
    // Find the educational game data to get related lessons
    const educationalGame = EDUCATIONAL_GAMES_DATA.find(
      (g) => g.id === game.id,
    );

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full border border-white/10">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{game.icon}</div>
            <h1 className="text-2xl font-bold text-white mb-2">{game.title}</h1>
            <p className="text-gray-300 mb-4">{game.description}</p>

            <div className="flex justify-center space-x-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{game.estimatedTime}</span>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-1" />
                <span>{game.difficulty}</span>
              </div>
              <div className="flex items-center">
                <Trophy className="w-4 h-4 mr-1" />
                <span>{game.points} điểm</span>
              </div>
            </div>

            {/* Related Lessons Section */}
            {educationalGame?.relatedLessons &&
              educationalGame.relatedLessons.length > 0 && (
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center justify-center">
                    📚 Bài học liên quan
                  </h3>
                  <div className="space-y-2">
                    {educationalGame.relatedLessons.map((lesson, index) => (
                      <div key={index} className="bg-black/20 rounded-lg p-3">
                        <div className="flex items-start space-x-3">
                          <div className="text-purple-400 font-semibold">
                            {index + 1}.
                          </div>
                          <div className="flex-1 text-left">
                            <h4 className="text-white font-medium">
                              {lesson.title}
                            </h4>
                            <p className="text-gray-300 text-sm mt-1">
                              {lesson.connection}
                            </p>
                            <div className="mt-2 text-xs text-gray-400">
                              📖 Module: {lesson.moduleId} | Lesson:{' '}
                              {lesson.lessonId}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-gray-400 text-center">
                    💡 Chơi game này sẽ giúp bạn hiểu sâu hơn về các bài học
                    trên
                  </div>
                </div>
              )}
          </div>

          <div className="space-y-3">
            <button
              onClick={startGame}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Bắt đầu chơi
            </button>

            <button
              onClick={onExit}
              className="w-full bg-white/10 text-white py-3 px-6 rounded-xl font-medium hover:bg-white/20 transition-all duration-200"
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    );
  }

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
                onClick={() => setCurrentGameState('menu')}
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
                onClick={startGame}
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

// Individual game components
function GeographyQuizGame({ gameData, onComplete, timeLeft, onRestart }: any) {
  // Shuffle questions for randomization
  const [shuffledQuestions] = useState(() => {
    const questions = [...gameData.questions];
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = shuffledQuestions[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === question.correct) {
      setScore((prev) => prev + 20);
    }

    setTimeout(() => {
      if (currentQuestion < shuffledQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        onComplete(true, score + (answerIndex === question.correct ? 20 : 0));
      }
    }, 2000);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>
            Câu {currentQuestion + 1}/{shuffledQuestions.length}
          </span>
          <span>Điểm: {score}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${(currentQuestion / shuffledQuestions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-4">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option: string, index: number) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                selectedAnswer === index
                  ? index === question.correct
                    ? 'bg-green-500/20 border-green-500/50 text-green-300'
                    : 'bg-red-500/20 border-red-500/50 text-red-300'
                  : selectedAnswer !== null && index === question.correct
                    ? 'bg-green-500/20 border-green-500/50 text-green-300'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="mt-4 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
            <div className="flex items-start">
              <Lightbulb className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
              <div>
                <p className="text-blue-300 font-medium mb-1">Giải thích:</p>
                <p className="text-gray-300 text-sm">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AIPromptGame({ gameData, onComplete, timeLeft, onRestart }: any) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedPrompt, setSelectedPrompt] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showHints, setShowHints] = useState(false);

  const scenario = gameData.scenarios[currentScenario];

  const handlePromptSelect = (promptIndex: number) => {
    setSelectedPrompt(promptIndex);

    if (promptIndex === scenario.correct) {
      setScore((prev) => prev + 25);
    }

    setTimeout(() => {
      if (currentScenario < gameData.scenarios.length - 1) {
        setCurrentScenario((prev) => prev + 1);
        setSelectedPrompt(null);
        setShowHints(false);
      } else {
        onComplete(true, score + (promptIndex === scenario.correct ? 25 : 0));
      }
    }, 2000);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Tình huống:</h3>
        <p className="text-gray-300 text-lg">{scenario.situation}</p>
      </div>

      {!showHints && (
        <button
          onClick={() => setShowHints(true)}
          className="mb-4 text-yellow-400 hover:text-yellow-300 transition-colors flex items-center"
        >
          <Lightbulb className="w-4 h-4 mr-1" />
          Xem gợi ý
        </button>
      )}

      {showHints && (
        <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
          <p className="text-yellow-300 font-medium mb-2">Gợi ý:</p>
          <ul className="text-gray-300 text-sm space-y-1">
            {scenario.hints.map((hint: string, index: number) => (
              <li key={index}>• {hint}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-6">
        <h4 className="text-white font-medium mb-3">Chọn prompt tốt nhất:</h4>
        <div className="space-y-3">
          {scenario.examples.map((example: string, index: number) => (
            <button
              key={index}
              onClick={() => handlePromptSelect(index)}
              disabled={selectedPrompt !== null}
              className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                selectedPrompt === index
                  ? index === scenario.correct
                    ? 'bg-green-500/20 border-green-500/50 text-green-300'
                    : 'bg-red-500/20 border-red-500/50 text-red-300'
                  : selectedPrompt !== null && index === scenario.correct
                    ? 'bg-green-500/20 border-green-500/50 text-green-300'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function PythonCodingGame({ gameData, onComplete, timeLeft, onRestart }: any) {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [score, setScore] = useState(0);

  const challenge = gameData.challenges[currentChallenge];

  const checkSolution = () => {
    // Simple check if user code contains key elements
    const solutionKeywords = challenge.solution.toLowerCase().split(/\s+/);
    const userKeywords = userCode.toLowerCase().split(/\s+/);

    let matches = 0;
    solutionKeywords.forEach((keyword: string) => {
      if (userKeywords.includes(keyword)) matches++;
    });

    const accuracy = matches / solutionKeywords.length;

    if (accuracy > 0.6) {
      setScore((prev) => prev + 30);
      setTimeout(() => {
        if (currentChallenge < gameData.challenges.length - 1) {
          setCurrentChallenge((prev) => prev + 1);
          setUserCode('');
          setShowSolution(false);
        } else {
          onComplete(true, score + 30);
        }
      }, 2000);
    } else {
      setShowSolution(true);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{challenge.title}</h3>
        <p className="text-gray-300 mb-2">{challenge.description}</p>
        <p className="text-yellow-300 text-sm">💡 {challenge.hint}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-white font-medium mb-2">Viết code Python:</h4>
        <textarea
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          className="w-full h-32 bg-gray-800 text-green-400 p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none font-mono text-sm"
          placeholder="# Viết code của bạn ở đây..."
        />
      </div>

      <div className="mb-6">
        <h4 className="text-white font-medium mb-2">Test cases:</h4>
        {challenge.testCases.map(
          (testCase: { input: any; output: any }, index: number) => (
            <div key={index} className="bg-gray-800 p-2 rounded mb-2 text-sm">
              <span className="text-blue-300">
                Input: {JSON.stringify(testCase.input)}
              </span>
              <span className="text-green-300 ml-4">
                Output: {JSON.stringify(testCase.output)}
              </span>
            </div>
          ),
        )}
      </div>

      {!showSolution && (
        <button
          onClick={checkSolution}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
        >
          Kiểm tra
        </button>
      )}

      {showSolution && (
        <div className="mt-4 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
          <p className="text-blue-300 font-medium mb-2">Đáp án:</p>
          <pre className="bg-gray-800 p-3 rounded text-green-400 text-sm overflow-x-auto">
            {challenge.solution}
          </pre>
        </div>
      )}
    </div>
  );
}

function ArduinoCircuitGame({
  gameData,
  onComplete,
  timeLeft,
  onRestart,
}: any) {
  const [currentCircuit, setCurrentCircuit] = useState(0);
  const [placedComponents, setPlacedComponents] = useState<
    Record<string, boolean>
  >({});
  const [score, setScore] = useState(0);

  const circuit = gameData?.circuits?.[currentCircuit];

  useEffect(() => {
    if (!circuit) {
      console.warn('Circuit data not available:', gameData);
    }
  }, [circuit, gameData]);

  const checkCircuit = () => {
    if (!circuit || !circuit.components) return;

    const allPlaced = circuit.components.every((comp: any) => {
      const componentKey = comp.id || comp.name || comp;
      return placedComponents[componentKey];
    });
    if (allPlaced) {
      const completionBonus = 25;
      const finalScore = score + completionBonus;
      setScore(finalScore);

      setTimeout(() => {
        if (currentCircuit < (gameData?.circuits?.length || 0) - 1) {
          setCurrentCircuit((prev) => prev + 1);
          setPlacedComponents({});
        } else {
          onComplete(true, finalScore);
        }
      }, 2000);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

  if (!circuit) {
    return (
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="text-center text-white">
          <p className="mb-4">Không thể tải dữ liệu mạch điện.</p>
          <button
            onClick={onRestart}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{circuit.name}</h3>
        <p className="text-gray-300 mb-4">{circuit.explanation}</p>
        <div className="text-blue-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Linh kiện:</h4>
          <div className="space-y-2">
            {circuit.components?.map((component: any, index: number) => {
              const componentKey = component.id || component.name || component;
              const componentName = component.name || component;
              return (
                <div
                  key={index}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    placedComponents[componentKey]
                      ? 'bg-green-500/20 border-green-500/50 text-green-300'
                      : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50'
                  }`}
                  onClick={() => {
                    if (!placedComponents[componentKey]) {
                      setPlacedComponents((prev) => ({
                        ...prev,
                        [componentKey]: true,
                      }));
                      setScore((prev) => prev + 10);
                      checkCircuit();
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{componentName}</span>
                    {placedComponents[componentKey] && (
                      <span className="text-green-400">✓</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Workspace:</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 min-h-48 border-2 border-dashed border-gray-600">
            <p className="text-gray-400 text-center mb-4">
              Nhấp vào linh kiện để đặt vào workspace
            </p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(placedComponents).map(([key, placed]) =>
                placed ? (
                  <div
                    key={key}
                    className="bg-blue-500/20 border border-blue-400 rounded p-2 text-center text-xs text-blue-300"
                  >
                    {key}
                  </div>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </div>

      {circuit.code && (
        <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
          <h4 className="text-white font-medium mb-3">Code Arduino:</h4>
          <pre className="bg-gray-900 p-4 rounded text-green-400 text-sm overflow-x-auto">
            {circuit.code}
          </pre>
        </div>
      )}
    </div>
  );
}
function STEMExperimentGame({
  gameData,
  onComplete,
  timeLeft,
  onRestart,
}: any) {
  const [currentStep, setCurrentStep] = useState(0);
  const [experimentComplete, setExperimentComplete] = useState(false);
  const [score, setScore] = useState(0);

  const experiment = gameData.experiments[0];

  const nextStep = () => {
    if (currentStep < experiment.procedure.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setExperimentComplete(true);
    }
  };

  const answerQuiz = (answerIndex: number) => {
    if (answerIndex === experiment.quiz.correct) {
      setScore((prev) => prev + 40);
      onComplete(true, score + 40);
    } else {
      setTimeout(() => onRestart(), 1000);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{experiment.name}</h3>

        <div className="mb-4">
          <h4 className="text-white font-medium mb-2">Vật liệu cần thiết:</h4>
          <div className="flex flex-wrap gap-2">
            {experiment.materials.map((material: string, index: number) => (
              <span
                key={index}
                className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
              >
                {material}
              </span>
            ))}
          </div>
        </div>
      </div>

      {!experimentComplete ? (
        <div>
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>
                Bước {currentStep + 1}/{experiment.procedure.length}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentStep + 1) / experiment.procedure.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-white font-medium mb-2">
              Bước {currentStep + 1}:
            </h4>
            <p className="text-gray-300 text-lg">
              {experiment.procedure[currentStep]}
            </p>
          </div>

          <button
            onClick={nextStep}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
          >
            {currentStep < experiment.procedure.length - 1
              ? 'Bước tiếp theo'
              : 'Hoàn thành thí nghiệm'}
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <h4 className="text-white font-medium mb-2">Quan sát:</h4>
            <p className="text-gray-300 mb-4">{experiment.observation}</p>

            <h4 className="text-white font-medium mb-2">Giải thích:</h4>
            <p className="text-gray-300 mb-6">{experiment.explanation}</p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">
              {experiment.quiz.question}
            </h4>
            <div className="space-y-3">
              {experiment.quiz.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => answerQuiz(index)}
                  className="w-full p-4 text-left rounded-lg border bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RoboticsNavigationGame({
  gameData,
  onComplete,
  timeLeft,
  onRestart,
}: any) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [robotPosition, setRobotPosition] = useState<[number, number]>([0, 0]);
  const [commands, setCommands] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [pathHistory, setPathHistory] = useState<[number, number][]>([]);
  const [algorithmVisualization, setAlgorithmVisualization] = useState<{
    openSet: [number, number][];
    closedSet: [number, number][];
    path: [number, number][];
  }>({ openSet: [], closedSet: [], path: [] });
  const [showAlgorithm, setShowAlgorithm] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<
    'A*' | 'Dijkstra' | 'BFS'
  >('A*');
  const [movingObstacles, setMovingObstacles] = useState<
    Array<{
      position: [number, number];
      originalPos: [number, number];
      pattern: string;
      speed: number;
    }>
  >([]);
  const [levelStartTime, setLevelStartTime] = useState(Date.now());

  // Import robotics levels data
  const ROBOTICS_LEVELS = [
    {
      id: 1,
      name: 'Bước đầu tiên',
      difficulty: 'Dễ',
      algorithm: 'BFS',
      grid: Array(5)
        .fill(null)
        .map(() => Array(5).fill(0)),
      start: [0, 0],
      end: [4, 4],
      timeLimit: 60,
      minMoves: 8,
      description: 'Di chuyển robot từ góc trái trên xuống góc phải dưới',
      tips: ['Sử dụng các mũi tên để điều khiển', 'BFS tìm đường ngắn nhất'],
      pointValue: 10,
    },
    {
      id: 2,
      name: 'Tránh vật cản đơn giản',
      difficulty: 'Dễ',
      algorithm: 'BFS',
      grid: (() => {
        const grid = Array(6)
          .fill(null)
          .map(() => Array(6).fill(0));
        [
          [2, 2],
          [2, 3],
          [3, 2],
          [3, 3],
        ].forEach(([x, y]) => (grid[x][y] = 1));
        return grid;
      })(),
      start: [0, 0],
      end: [5, 5],
      timeLimit: 90,
      minMoves: 10,
      description: 'Tránh khối vật cản 2x2 ở giữa',
      tips: ['Đi vòng quanh vật cản', 'Lập kế hoạch trước khi di chuyển'],
      pointValue: 15,
    },
    {
      id: 3,
      name: 'Hành lang hẹp',
      difficulty: 'Dễ',
      algorithm: 'BFS',
      grid: (() => {
        const grid = Array(7)
          .fill(null)
          .map(() => Array(7).fill(0));
        [
          [1, 1],
          [1, 2],
          [1, 4],
          [1, 5],
          [2, 1],
          [2, 5],
          [3, 1],
          [3, 5],
          [4, 1],
          [4, 5],
          [5, 1],
          [5, 2],
          [5, 4],
          [5, 5],
        ].forEach(([x, y]) => (grid[x][y] = 1));
        return grid;
      })(),
      start: [0, 3],
      end: [6, 3],
      timeLimit: 120,
      minMoves: 12,
      description: 'Di chuyển qua hành lang hẹp',
      tips: ['Giữ đúng hướng trong hành lang', 'Không thể quay đầu'],
      pointValue: 20,
    },
  ];

  // Add more levels up to 100 with increasing difficulty
  for (let i = 4; i <= 100; i++) {
    const size = Math.min(6 + Math.floor(i / 10), 20);
    const difficulty =
      i <= 10 ? 'Dễ' : i <= 30 ? 'Trung bình' : i <= 70 ? 'Khó' : 'Chuyên gia';
    const algorithm = ['A*', 'Dijkstra', 'BFS'][i % 3] as
      | 'A*'
      | 'Dijkstra'
      | 'BFS';

    const grid = Array(size)
      .fill(null)
      .map(() => Array(size).fill(0));
    const wallCount = Math.floor(size * size * (0.15 + (i / 100) * 0.25));

    // Generate random walls
    for (let w = 0; w < wallCount; w++) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      if ((x !== 0 || y !== 0) && (x !== size - 1 || y !== size - 1)) {
        grid[x][y] = 1;
      }
    }

    ROBOTICS_LEVELS.push({
      id: i,
      name: `Thử thách ${i}`,
      difficulty: difficulty as any,
      algorithm,
      grid,
      start: [0, 0],
      end: [size - 1, size - 1],
      timeLimit: 60 + i * 5,
      minMoves: Math.floor(size * 1.5),
      description: `Level ${i} - ${difficulty}`,
      tips: ['Sử dụng thuật toán phù hợp', 'Lập kế hoạch cẩn thận'],
      pointValue: 10 + i * 2,
    });
  }

  const currentLevelData = ROBOTICS_LEVELS[currentLevel];
  const maze = {
    grid: currentLevelData.grid,
    start: currentLevelData.start,
    end: currentLevelData.end,
  };

  // A* Algorithm implementation
  const calculateAStar = (start: [number, number], end: [number, number]) => {
    const openSet: Array<{
      pos: [number, number];
      f: number;
      g: number;
      h: number;
      parent: [number, number] | null;
    }> = [];
    const closedSet: [number, number][] = [];
    const visited = new Set<string>();

    const heuristic = (a: [number, number], b: [number, number]) =>
      Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

    openSet.push({
      pos: start,
      f: heuristic(start, end),
      g: 0,
      h: heuristic(start, end),
      parent: null,
    });

    const steps = [];

    while (openSet.length > 0) {
      openSet.sort((a, b) => a.f - b.f);
      const current = openSet.shift()!;

      steps.push({
        openSet: openSet.map((n) => n.pos),
        closedSet: [...closedSet],
        current: current.pos,
      });

      if (current.pos[0] === end[0] && current.pos[1] === end[1]) {
        const path: [number, number][] = [];
        let node: any = current;
        const parentMap = new Map();

        // Build parent map
        steps.forEach((step) => {
          const curr = step.current;
          openSet.forEach((n) => {
            if (n.parent) {
              parentMap.set(`${n.pos[0]},${n.pos[1]}`, n.parent);
            }
          });
        });

        // Reconstruct path
        while (node) {
          path.unshift(node.pos);
          const parentKey = `${node.pos[0]},${node.pos[1]}`;
          const parent = parentMap.get(parentKey);
          if (!parent) break;
          node = { pos: parent };
        }

        return { steps, path, algorithm: 'A*' };
      }

      closedSet.push(current.pos);
      visited.add(`${current.pos[0]},${current.pos[1]}`);

      const neighbors = [
        [current.pos[0] - 1, current.pos[1]],
        [current.pos[0] + 1, current.pos[1]],
        [current.pos[0], current.pos[1] - 1],
        [current.pos[0], current.pos[1] + 1],
      ] as [number, number][];

      for (const neighbor of neighbors) {
        const [x, y] = neighbor;

        if (x < 0 || x >= maze.grid.length || y < 0 || y >= maze.grid[0].length)
          continue;
        if (maze.grid[x][y] === 1) continue;
        if (visited.has(`${x},${y}`)) continue;

        const g = current.g + 1;
        const h = heuristic(neighbor, end);
        const f = g + h;

        const existingNode = openSet.find(
          (n) => n.pos[0] === x && n.pos[1] === y,
        );
        if (!existingNode || g < existingNode.g) {
          if (existingNode) {
            existingNode.g = g;
            existingNode.f = f;
            existingNode.parent = current.pos;
          } else {
            openSet.push({
              pos: neighbor,
              f,
              g,
              h,
              parent: current.pos,
            });
          }
        }
      }
    }

    return { steps, path: [], algorithm: 'A*' };
  };

  // Dijkstra Algorithm implementation
  const calculateDijkstra = (
    start: [number, number],
    end: [number, number],
  ) => {
    const distances = new Map<string, number>();
    const previous = new Map<string, [number, number] | null>();
    const unvisited = new Set<string>();
    const steps = [];

    // Initialize distances
    for (let i = 0; i < maze.grid.length; i++) {
      for (let j = 0; j < maze.grid[0].length; j++) {
        if (maze.grid[i][j] === 0) {
          const key = `${i},${j}`;
          distances.set(key, i === start[0] && j === start[1] ? 0 : Infinity);
          previous.set(key, null);
          unvisited.add(key);
        }
      }
    }

    while (unvisited.size > 0) {
      // Find unvisited node with minimum distance
      let currentKey = '';
      let minDistance = Infinity;

      for (const key of unvisited) {
        const dist = distances.get(key) || Infinity;
        if (dist < minDistance) {
          minDistance = dist;
          currentKey = key;
        }
      }

      if (currentKey === '' || minDistance === Infinity) break;

      const [currentX, currentY] = currentKey.split(',').map(Number) as [
        number,
        number,
      ];
      unvisited.delete(currentKey);

      steps.push({
        current: [currentX, currentY] as [number, number],
        visited: Array.from(distances.keys())
          .filter((k) => !unvisited.has(k))
          .map((k) => k.split(',').map(Number) as [number, number]),
        distances: new Map(distances),
      });

      if (currentX === end[0] && currentY === end[1]) {
        // Reconstruct path
        const path: [number, number][] = [];
        let current: [number, number] | null = [currentX, currentY];

        while (current) {
          path.unshift(current);
          current = previous.get(`${current[0]},${current[1]}`) || null;
        }

        return { steps, path, algorithm: 'Dijkstra' };
      }

      // Check neighbors
      const neighbors = [
        [currentX - 1, currentY],
        [currentX + 1, currentY],
        [currentX, currentY - 1],
        [currentX, currentY + 1],
      ] as [number, number][];

      for (const [nx, ny] of neighbors) {
        const neighborKey = `${nx},${ny}`;

        if (
          nx >= 0 &&
          nx < maze.grid.length &&
          ny >= 0 &&
          ny < maze.grid[0].length &&
          maze.grid[nx][ny] === 0 &&
          unvisited.has(neighborKey)
        ) {
          const altDistance = minDistance + 1;
          const currentDistance = distances.get(neighborKey) || Infinity;

          if (altDistance < currentDistance) {
            distances.set(neighborKey, altDistance);
            previous.set(neighborKey, [currentX, currentY]);
          }
        }
      }
    }

    return { steps, path: [], algorithm: 'Dijkstra' };
  };

  // BFS Algorithm implementation
  const calculateBFS = (start: [number, number], end: [number, number]) => {
    const queue: Array<{ pos: [number, number]; path: [number, number][] }> =
      [];
    const visited = new Set<string>();
    const steps = [];

    queue.push({ pos: start, path: [start] });
    visited.add(`${start[0]},${start[1]}`);

    while (queue.length > 0) {
      const current = queue.shift()!;
      const [x, y] = current.pos;

      steps.push({
        current: current.pos,
        queue: queue.map((q) => q.pos),
        visited: Array.from(visited).map(
          (v) => v.split(',').map(Number) as [number, number],
        ),
        currentPath: current.path,
      });

      if (x === end[0] && y === end[1]) {
        return { steps, path: current.path, algorithm: 'BFS' };
      }

      const neighbors = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ] as [number, number][];

      for (const [nx, ny] of neighbors) {
        const neighborKey = `${nx},${ny}`;

        if (
          nx >= 0 &&
          nx < maze.grid.length &&
          ny >= 0 &&
          ny < maze.grid[0].length &&
          maze.grid[nx][ny] === 0 &&
          !visited.has(neighborKey)
        ) {
          visited.add(neighborKey);
          queue.push({
            pos: [nx, ny],
            path: [...current.path, [nx, ny]],
          });
        }
      }
    }

    return { steps, path: [], algorithm: 'BFS' };
  };

  // Execute selected algorithm
  const executePathfinding = () => {
    const start = robotPosition;
    const end = [maze.end[0], maze.end[1]] as [number, number];

    let result;
    switch (selectedAlgorithm) {
      case 'A*':
        result = calculateAStar(start, end);
        break;
      case 'Dijkstra':
        result = calculateDijkstra(start, end);
        break;
      case 'BFS':
        result = calculateBFS(start, end);
        break;
      default:
        result = calculateAStar(start, end);
    }

    if (result.path.length > 0) {
      setAlgorithmVisualization({
        openSet: [],
        closedSet:
          result.steps.length > 0
            ? (result.steps[result.steps.length - 1] as any).visited || []
            : [],
        path: result.path,
      });
      setShowAlgorithm(true);

      // Auto-execute the found path
      setTimeout(() => {
        executeAutoPath(result.path);
      }, 1000);
    }
  };

  const executeAutoPath = (path: [number, number][]) => {
    if (path.length < 2) return;

    setIsRunning(true);
    let currentIndex = 0;

    const executeNextMove = () => {
      if (currentIndex < path.length - 1) {
        const currentPos = path[currentIndex];
        const nextPos = path[currentIndex + 1];

        setRobotPosition(nextPos);
        setPathHistory((prev) => [...prev, nextPos]);

        currentIndex++;
        setTimeout(executeNextMove, 300);
      } else {
        setIsRunning(false);
        checkLevelComplete();
      }
    };

    executeNextMove();
  };

  const checkLevelComplete = () => {
    const [endX, endY] = maze.end;
    const [robotX, robotY] = robotPosition;

    if (robotX === endX && robotY === robotY) {
      const timeUsed = Date.now() - levelStartTime;
      const timeBonus = Math.max(
        0,
        (currentLevelData.timeLimit * 1000 - timeUsed) / 1000,
      );
      const moveBonus = Math.max(
        0,
        (currentLevelData.minMoves - commands.length) * 5,
      );
      const levelScore =
        currentLevelData.pointValue + Math.floor(timeBonus) + moveBonus;

      setScore(levelScore);
      setTotalScore((prev) => prev + levelScore);

      if (currentLevel < ROBOTICS_LEVELS.length - 1) {
        setTimeout(() => {
          setCurrentLevel((prev) => prev + 1);
          setScore(0);
        }, 2000);
      } else {
        // Game complete
        onComplete(true, totalScore + levelScore);
      }
    }
  };

  const resetLevel = () => {
    setRobotPosition([currentLevelData.start[0], currentLevelData.start[1]]);
    setCommands([]);
    setPathHistory([]);
    setIsRunning(false);
    setAlgorithmVisualization({ openSet: [], closedSet: [], path: [] });
    setShowAlgorithm(false);
    setLevelStartTime(Date.now());
  };

  const skipToLevel = (levelId: number) => {
    if (levelId >= 0 && levelId < ROBOTICS_LEVELS.length) {
      setCurrentLevel(levelId);
    }
  };

  const getLevelColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Dễ':
        return 'text-green-400';
      case 'Trung bình':
        return 'text-yellow-400';
      case 'Khó':
        return 'text-orange-400';
      case 'Chuyên gia':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const addCommand = (command: string) => {
    if (!isRunning) {
      setCommands((prev) => [...prev, command]);
    }
  };

  const runCommands = () => {
    setIsRunning(true);
    let currentPos: [number, number] = [maze.start[0], maze.start[1]];
    const newPathHistory: [number, number][] = [currentPos];

    commands.forEach((command, index) => {
      setTimeout(() => {
        let newPos: [number, number] = [...currentPos];

        // Enhanced command processing with emoji support
        switch (command) {
          case '⬆️ Lên':
          case 'UP':
            if (
              currentPos[0] > 0 &&
              maze.grid[currentPos[0] - 1][currentPos[1]] !== 1
            ) {
              newPos[0]--;
            }
            break;
          case '⬇️ Xuống':
          case 'DOWN':
            if (
              currentPos[0] < maze.grid.length - 1 &&
              maze.grid[currentPos[0] + 1][currentPos[1]] !== 1
            ) {
              newPos[0]++;
            }
            break;
          case '⬅️ Trái':
          case 'LEFT':
            if (
              currentPos[1] > 0 &&
              maze.grid[currentPos[0]][currentPos[1] - 1] !== 1
            ) {
              newPos[1]--;
            }
            break;
          case '➡️ Phải':
          case 'RIGHT':
            if (
              currentPos[1] < maze.grid[0].length - 1 &&
              maze.grid[currentPos[0]][currentPos[1] + 1] !== 1
            ) {
              newPos[1]++;
            }
            break;
          case '🔍 Tìm đường':
          case '🤖 A* Algorithm':
            const result = calculateAStar(currentPos, [
              maze.end[0],
              maze.end[1],
            ]);
            if (result.path.length > 0) {
              newPos = result.path[1] || newPos; // Move to next step in optimal path
              setAlgorithmVisualization({
                openSet: result.steps[result.steps.length - 1]?.openSet || [],
                closedSet:
                  result.steps[result.steps.length - 1]?.closedSet || [],
                path: result.path,
              });
              setShowAlgorithm(true);
            }
            break;
        }

        currentPos = newPos;
        newPathHistory.push(newPos);
        setRobotPosition(newPos);
        setPathHistory([...newPathHistory]);

        if (index === commands.length - 1) {
          setIsRunning(false);

          // Check if reached the goal
          if (newPos[0] === maze.end[0] && newPos[1] === maze.end[1]) {
            const levelScore = Math.max(100 - commands.length * 5, 20); // Reward efficient solutions
            setScore((prev) => prev + levelScore);

            if (currentLevel < gameData.mazes.length - 1) {
              setTimeout(() => {
                setCurrentLevel((prev) => prev + 1);
                resetRobot();
                alert(
                  `🎉 Hoàn thành cấp độ ${currentLevel + 1}! Điểm: ${levelScore}. Tiến tới cấp độ ${currentLevel + 2}!`,
                );
              }, 1000);
            } else {
              onComplete(true, score + levelScore);
            }
          }
        }
      }, index * 800);
    });
  };

  const resetRobot = useCallback(() => {
    setRobotPosition([maze.start[0], maze.start[1]]);
    setCommands([]);
    setIsRunning(false);
    setPathHistory([]);
    setAlgorithmVisualization({ openSet: [], closedSet: [], path: [] });
    setShowAlgorithm(false);
  }, [maze]);

  const getCellStyle = (i: number, j: number) => {
    const isStart = maze.start[0] === i && maze.start[1] === j;
    const isEnd = maze.end[0] === i && maze.end[1] === j;
    const isWall = maze.grid[i][j] === 1;
    const isPit = maze.grid[i][j] === 3;
    const isInPath = pathHistory.some(([x, y]) => x === i && y === j);
    const isInAlgorithmPath =
      showAlgorithm &&
      algorithmVisualization.path.some(([x, y]) => x === i && y === j);
    const isInOpenSet =
      showAlgorithm &&
      algorithmVisualization.openSet.some(([x, y]) => x === i && y === j);
    const isInClosedSet =
      showAlgorithm &&
      algorithmVisualization.closedSet.some(([x, y]) => x === i && y === j);

    const baseStyle =
      'w-8 h-8 border border-gray-600 flex items-center justify-center text-xs font-bold transition-all duration-300 transform hover:scale-110';

    if (isWall)
      return `${baseStyle} bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg`;
    if (isPit)
      return `${baseStyle} bg-gradient-to-br from-red-900 to-red-800 shadow-lg`;
    if (isInAlgorithmPath)
      return `${baseStyle} bg-gradient-to-br from-yellow-400 to-orange-400 shadow-lg animate-pulse`;
    if (isInOpenSet)
      return `${baseStyle} bg-gradient-to-br from-green-400 to-green-500 shadow-lg`;
    if (isInClosedSet)
      return `${baseStyle} bg-gradient-to-br from-red-400 to-red-500 shadow-lg`;
    if (isInPath)
      return `${baseStyle} bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg`;
    if (isStart || isEnd)
      return `${baseStyle} bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg`;

    return `${baseStyle} bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10`;
  };

  const getCellContent = (i: number, j: number) => {
    const isRobot = robotPosition[0] === i && robotPosition[1] === j;
    const isStart = maze.start[0] === i && maze.start[1] === j;
    const isEnd = maze.end[0] === i && maze.end[1] === j;
    const isPit = maze.grid[i][j] === 3;

    if (isRobot) return '🤖';
    if (isEnd) return '🎯';
    if (isStart && !isRobot) return '🟢';
    if (isPit) return '🕳️';
    return '';
  };

  useEffect(() => {
    resetRobot();
  }, [currentLevel, resetRobot]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

  if (!maze) {
    return (
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="text-center text-white">
          <p>Đang tải dữ liệu game...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">
              🤖 Level {currentLevel + 1}: {currentLevelData.name}
            </h3>
            <div className="flex items-center gap-4 mt-2">
              <span
                className={`font-medium ${getLevelColor(currentLevelData.difficulty)}`}
              >
                {currentLevelData.difficulty}
              </span>
              <span className="text-blue-400">
                Algorithm: {currentLevelData.algorithm}
              </span>
              <span className="text-purple-400">
                Score: {totalScore + score}
              </span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-gray-300 text-sm">
              Thời gian:{' '}
              {Math.max(
                0,
                Math.floor(
                  currentLevelData.timeLimit -
                    (Date.now() - levelStartTime) / 1000,
                ),
              )}
              s
            </div>
            <div className="text-gray-300 text-sm">
              Moves: {commands.length}/{currentLevelData.minMoves}
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-2">
          {currentLevelData.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {currentLevelData.tips.map((tip, index) => (
            <span
              key={index}
              className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
            >
              💡 {tip}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Maze Navigation:</h4>
          <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
            <div
              className="grid gap-1"
              style={{
                gridTemplateColumns: `repeat(${maze.grid[0]?.length || 1}, 1fr)`,
                maxWidth: '300px',
                aspectRatio: '1',
              }}
            >
              {maze.grid.map((row, i) =>
                row.map((cell, j) => {
                  const isStart = i === maze.start[0] && j === maze.start[1];
                  const isEnd = i === maze.end[0] && j === maze.end[1];
                  const isRobot =
                    i === robotPosition[0] && j === robotPosition[1];
                  const isPath = pathHistory.some(
                    ([x, y]) => x === i && y === j,
                  );
                  const isAlgorithmPath =
                    showAlgorithm &&
                    algorithmVisualization.path.some(
                      ([x, y]) => x === i && y === j,
                    );
                  const isOpenSet =
                    showAlgorithm &&
                    algorithmVisualization.openSet.some(
                      ([x, y]) => x === i && y === j,
                    );
                  const isClosedSet =
                    showAlgorithm &&
                    algorithmVisualization.closedSet.some(
                      ([x, y]) => x === i && y === j,
                    );

                  let bgColor = 'bg-gray-800';
                  if (cell === 1) bgColor = 'bg-gray-600'; // Wall
                  if (isStart) bgColor = 'bg-green-500';
                  if (isEnd) bgColor = 'bg-red-500';
                  if (isOpenSet) bgColor = 'bg-yellow-400/50';
                  if (isClosedSet) bgColor = 'bg-blue-400/50';
                  if (isAlgorithmPath) bgColor = 'bg-purple-500/70';
                  if (isPath) bgColor = 'bg-cyan-400/70';
                  if (isRobot) bgColor = 'bg-orange-500';

                  return (
                    <div
                      key={`${i}-${j}`}
                      className={`${bgColor} border border-gray-700 flex items-center justify-center text-xs font-bold`}
                      style={{ aspectRatio: '1' }}
                    >
                      {isRobot && '🤖'}
                      {isStart && !isRobot && '🟢'}
                      {isEnd && !isRobot && '🎯'}
                    </div>
                  );
                }),
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={() => addCommand('⬆️ Lên')}
              disabled={isRunning}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium disabled:opacity-50"
            >
              ⬆️ Lên
            </button>
            <button
              onClick={() => addCommand('⬇️ Xuống')}
              disabled={isRunning}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium disabled:opacity-50"
            >
              ⬇️ Xuống
            </button>
            <button
              onClick={() => addCommand('⬅️ Trái')}
              disabled={isRunning}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium disabled:opacity-50"
            >
              ⬅️ Trái
            </button>
            <button
              onClick={() => addCommand('➡️ Phải')}
              disabled={isRunning}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium disabled:opacity-50"
            >
              ➡️ Phải
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Algorithm Control:</h4>

          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
            <div className="mb-3">
              <label className="text-white text-sm mb-2 block">
                Select Algorithm:
              </label>
              <select
                value={selectedAlgorithm}
                onChange={(e) => setSelectedAlgorithm(e.target.value as any)}
                className="w-full bg-gray-700 text-white rounded px-3 py-2"
                disabled={isRunning}
              >
                <option value="A*">A* - Optimal + Fast</option>
                <option value="Dijkstra">Dijkstra - Guaranteed Optimal</option>
                <option value="BFS">BFS - Shortest Path</option>
              </select>
            </div>

            <button
              onClick={executePathfinding}
              disabled={isRunning}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded font-medium mb-2 disabled:opacity-50"
            >
              🔍 Find Path ({selectedAlgorithm})
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={runCommands}
                disabled={isRunning || commands.length === 0}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-medium disabled:opacity-50"
              >
                ▶️ Run
              </button>
              <button
                onClick={resetLevel}
                disabled={isRunning}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-medium disabled:opacity-50"
              >
                🔄 Reset
              </button>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
            <h5 className="text-white font-medium mb-2">Commands Queue:</h5>
            <div className="bg-gray-900/50 rounded p-2 min-h-16 max-h-24 overflow-y-auto">
              {commands.length === 0 ? (
                <p className="text-gray-400 text-sm">No commands yet</p>
              ) : (
                <div className="flex flex-wrap gap-1">
                  {commands.map((cmd, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs"
                    >
                      {cmd}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4">
            <h5 className="text-white font-medium mb-2">Level Progress:</h5>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-300">Current Level:</span>
                <span className="text-white">{currentLevel + 1}/100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Difficulty:</span>
                <span className={getLevelColor(currentLevelData.difficulty)}>
                  {currentLevelData.difficulty}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Points Available:</span>
                <span className="text-yellow-400">
                  {currentLevelData.pointValue}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentLevel + 1) / 100) * 100}%` }}
                />
              </div>
            </div>

            {currentLevel < 10 && (
              <div className="mt-3">
                <label className="text-white text-sm mb-2 block">
                  Quick Level Select (1-10):
                </label>
                <div className="grid grid-cols-5 gap-1">
                  {Array.from({ length: 10 }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => skipToLevel(i)}
                      className={`px-2 py-1 rounded text-xs ${
                        currentLevel === i
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScratchAnimationGame({
  gameData,
  onComplete,
  timeLeft,
  onRestart,
}: any) {
  const [placedBlocks, setPlacedBlocks] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [catPosition, setCatPosition] = useState(50);
  const [direction, setDirection] = useState(1);
  const [score, setScore] = useState(0);

  const project = gameData?.projects?.[0];

  // Extract all blocks from available blocks categories
  const allBlocks = useMemo(() => {
    if (!project?.availableBlocks) return [];
    const blocks: any[] = [];
    project.availableBlocks.forEach((category: any) => {
      if (category.blocks) {
        blocks.push(...category.blocks);
      }
    });
    return blocks;
  }, [project]);

  const addBlock = (blockName: string) => {
    if (!isAnimating) {
      setPlacedBlocks((prev) => [...prev, blockName]);
    }
  };

  const runAnimation = () => {
    const requiredBlocks = [
      'when green flag clicked',
      'forever',
      'move 10 steps',
      'if on edge, bounce',
    ];
    const hasAllBlocks = requiredBlocks.every((block) =>
      placedBlocks.some((placed) => placed.includes(block.split(' ')[0])),
    );

    if (hasAllBlocks) {
      setIsAnimating(true);
      setScore((prev) => prev + 45);

      const animationInterval = setInterval(() => {
        setCatPosition((prev) => {
          let newPos = prev + direction * 5;

          if (newPos <= 0 || newPos >= 100) {
            setDirection((d) => d * -1);
            newPos = prev + direction * -5;
          }

          return newPos;
        });
      }, 100);

      setTimeout(() => {
        clearInterval(animationInterval);
        setIsAnimating(false);
        onComplete(true, score + 45);
      }, 5000);
    } else {
      // Provide feedback about missing blocks
      const missingBlocks = requiredBlocks.filter(
        (block) =>
          !placedBlocks.some((placed) => placed.includes(block.split(' ')[0])),
      );
      alert(`Cần thêm các khối: ${missingBlocks.join(', ')}`);
    }
  };

  const resetProject = () => {
    setPlacedBlocks([]);
    setCatPosition(50);
    setDirection(1);
    setIsAnimating(false);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

  if (!project) {
    return (
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="text-center text-white">
          <p>Đang tải dữ liệu game...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-gray-300">{project.challenge}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Khối lệnh:</h4>
          <div className="space-y-2 mb-4">
            {allBlocks.map((block: any, index: number) => (
              <button
                key={index}
                onClick={() => addBlock(block.name)}
                disabled={isAnimating}
                className={`w-full p-3 rounded hover:opacity-80 transition-colors disabled:opacity-50 text-sm text-left text-white`}
                style={{
                  backgroundColor: block.color + '40',
                  borderLeft: `4px solid ${block.color}`,
                }}
              >
                {block.name}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <h5 className="text-white text-sm mb-2">Chương trình:</h5>
            <div className="bg-gray-800 p-3 rounded min-h-[100px]">
              {placedBlocks.map((block, index) => (
                <div key={index} className="text-orange-300 text-sm mb-1">
                  {block}
                </div>
              ))}
              {placedBlocks.length === 0 && (
                <div className="text-gray-500 text-sm">
                  Kéo thả các khối lệnh vào đây
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={runAnimation}
              disabled={isAnimating}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 px-4 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 disabled:opacity-50"
            >
              {isAnimating ? 'Đang chạy...' : 'Chạy chương trình'}
            </button>

            <button
              onClick={resetProject}
              disabled={isAnimating}
              className="w-full bg-white/10 text-white py-2 px-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 disabled:opacity-50"
            >
              Reset
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Sân khấu:</h4>
          <div className="bg-gradient-to-b from-blue-400 to-green-400 h-48 rounded-lg relative overflow-hidden">
            <div
              className="absolute text-2xl transition-all duration-100"
              style={{
                left: `${catPosition}%`,
                top: '50%',
                transform: `translate(-50%, -50%) scaleX(${direction})`,
              }}
            >
              🐱
            </div>
          </div>

          <div className="mt-4">
            <h5 className="text-white text-sm mb-2">Hướng dẫn:</h5>
            <ol className="text-gray-300 text-sm space-y-1">
              {project.steps.map((step: string, index: number) => (
                <li key={index}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

// New Game Components

function AIEthicsGame({ gameData, onComplete, timeLeft, onRestart }: any) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const scenario = gameData.scenarios[currentScenario];

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === scenario.correctApproach;
    const points = isCorrect ? 30 : 0;
    setScore((prev) => prev + points);

    setTimeout(() => {
      if (currentScenario < gameData.scenarios.length - 1) {
        setCurrentScenario((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        onComplete(true, score + points);
      }
    }, 2000);
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-4">
          Tình huống đạo đức AI
        </h3>
        <div className="text-blue-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="bg-white/5 rounded-lg p-6 mb-6">
        <h4 className="text-white font-medium mb-4">Tình huống:</h4>
        <p className="text-gray-300 mb-6">{scenario.dilemma}</p>

        <div className="space-y-3">
          {scenario.options.map((option: string, index: number) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedOption !== null}
              className={`w-full p-4 rounded-lg text-left transition-all duration-200 ${
                selectedOption === index
                  ? index === scenario.correctApproach
                    ? 'bg-green-500/20 border-green-500/50 text-green-300'
                    : 'bg-red-500/20 border-red-500/50 text-red-300'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedOption !== null && (
          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h5 className="text-blue-300 font-medium mb-2">Giải thích:</h5>
            <p className="text-gray-300">{scenario.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function QuantumBasicsGame({ gameData, onComplete, timeLeft, onRestart }: any) {
  const [currentConcept, setCurrentConcept] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const concept = gameData.concepts[currentConcept];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === concept.quiz.correct;
    const points = isCorrect ? 35 : 0;
    setScore((prev) => prev + points);

    setTimeout(() => {
      if (currentConcept < gameData.concepts.length - 1) {
        setCurrentConcept((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        onComplete(true, score + points);
      }
    }, 2000);
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Lượng tử cơ bản</h3>
        <div className="text-purple-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 mb-6">
        <h4 className="text-white font-bold text-lg mb-2">{concept.name}</h4>
        <p className="text-gray-300 mb-4">{concept.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {concept.states.map((state: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
            >
              {state}
            </span>
          ))}
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <h5 className="text-white font-medium mb-3">
            {concept.quiz.question}
          </h5>
          <div className="space-y-2">
            {concept.quiz.options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
                  selectedAnswer === index
                    ? index === concept.quiz.correct
                      ? 'bg-green-500/20 border-green-500/50 text-green-300'
                      : 'bg-red-500/20 border-red-500/50 text-red-300'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedAnswer !== null && (
            <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-gray-300">{concept.quiz.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MathPuzzleGame({ gameData, onComplete, timeLeft, onRestart }: any) {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const puzzle = gameData.puzzles[currentPuzzle];

  const handleSubmit = () => {
    const isCorrect =
      userAnswer.toLowerCase().trim() === String(puzzle.answer).toLowerCase();
    const points = isCorrect ? 25 : 0;
    setScore((prev) => prev + points);
    setShowResult(true);

    setTimeout(() => {
      if (currentPuzzle < gameData.puzzles.length - 1) {
        setCurrentPuzzle((prev) => prev + 1);
        setUserAnswer('');
        setShowResult(false);
      } else {
        onComplete(true, score + points);
      }
    }, 3000);
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Câu đố Toán học</h3>
        <div className="text-yellow-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-white font-bold text-lg">{puzzle.title}</h4>
          <span
            className={`px-2 py-1 rounded text-xs ${
              puzzle.difficulty === 'Cơ bản'
                ? 'bg-green-500/20 text-green-300'
                : puzzle.difficulty === 'Trung bình'
                  ? 'bg-yellow-500/20 text-yellow-300'
                  : 'bg-red-500/20 text-red-300'
            }`}
          >
            {puzzle.difficulty}
          </span>
        </div>

        <p className="text-gray-300 mb-6 text-lg">{puzzle.question}</p>

        <div className="space-y-4">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Nhập đáp án của bạn..."
            disabled={showResult}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
          />

          <button
            onClick={handleSubmit}
            disabled={!userAnswer || showResult}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 disabled:opacity-50"
          >
            Trả lời
          </button>

          {showResult && (
            <div
              className={`p-4 rounded-lg ${
                userAnswer.toLowerCase().trim() ===
                String(puzzle.answer).toLowerCase()
                  ? 'bg-green-500/10 border border-green-500/20'
                  : 'bg-red-500/10 border border-red-500/20'
              }`}
            >
              <p
                className={`font-medium mb-2 ${
                  userAnswer.toLowerCase().trim() ===
                  String(puzzle.answer).toLowerCase()
                    ? 'text-green-300'
                    : 'text-red-300'
                }`}
              >
                {userAnswer.toLowerCase().trim() ===
                String(puzzle.answer).toLowerCase()
                  ? 'Chính xác!'
                  : 'Sai rồi!'}
              </p>
              <p className="text-gray-300 mb-2">Đáp án đúng: {puzzle.answer}</p>
              <p className="text-gray-300">{puzzle.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Interactive Game Components
function BlockchainExplorerGame({ onComplete, timeLeft, onRestart }: any) {
  const [currentBlock, setCurrentBlock] = useState(0);
  const [score, setScore] = useState(0);
  const [verifiedTransactions, setVerifiedTransactions] = useState<Set<number>>(
    new Set(),
  );

  const blocks = [
    {
      id: 1,
      hash: '0x1a2b3c...',
      previousHash: '0x000000...',
      transactions: [
        { id: 1, from: 'Alice', to: 'Bob', amount: 10, fee: 0.1 },
        { id: 2, from: 'Charlie', to: 'David', amount: 5.5, fee: 0.05 },
        { id: 3, from: 'Eve', to: 'Frank', amount: 2.3, fee: 0.02 },
      ],
      nonce: 12345,
      timestamp: '2024-01-01 10:30:00',
    },
    {
      id: 2,
      hash: '0x4d5e6f...',
      previousHash: '0x1a2b3c...',
      transactions: [
        { id: 4, from: 'Bob', to: 'Grace', amount: 8.7, fee: 0.08 },
        { id: 5, from: 'Henry', to: 'Alice', amount: 12.0, fee: 0.12 },
      ],
      nonce: 67890,
      timestamp: '2024-01-01 10:35:00',
    },
  ];

  const currentBlockData = blocks[currentBlock];

  const verifyTransaction = (transactionId: number) => {
    if (!verifiedTransactions.has(transactionId)) {
      setVerifiedTransactions((prev) => new Set([...prev, transactionId]));
      setScore((prev) => prev + 15);
    }
  };

  const nextBlock = () => {
    if (currentBlock < blocks.length - 1) {
      setCurrentBlock((prev) => prev + 1);
    } else {
      onComplete(true, score);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          🔗 Blockchain Explorer - Block #{currentBlockData.id}
        </h3>
        <div className="text-blue-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Block Information:</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Hash:</span>
              <span className="text-cyan-400 font-mono text-sm">
                {currentBlockData.hash}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Previous Hash:</span>
              <span className="text-gray-400 font-mono text-sm">
                {currentBlockData.previousHash}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Nonce:</span>
              <span className="text-yellow-400">{currentBlockData.nonce}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Timestamp:</span>
              <span className="text-green-400">
                {currentBlockData.timestamp}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">
            Transactions ({currentBlockData.transactions.length}):
          </h4>
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
                  {verifiedTransactions.has(tx.id) && (
                    <span className="text-green-400">✓</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {verifiedTransactions.size === currentBlockData.transactions.length && (
        <button
          onClick={nextBlock}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
        >
          {currentBlock < blocks.length - 1
            ? 'Next Block →'
            : 'Complete Blockchain ✓'}
        </button>
      )}
    </div>
  );
}

function ClimateModelingGame({ onComplete, timeLeft, onRestart }: any) {
  const [currentYear, setCurrentYear] = useState(2020);
  const [co2Level, setCo2Level] = useState(415);
  const [temperature, setTemperature] = useState(1.1);
  const [policies, setPolicies] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const policyOptions = [
    {
      id: 'renewable',
      name: 'Năng lượng tái tạo',
      impact: { co2: -5, temp: -0.1 },
      cost: 20,
    },
    {
      id: 'forest',
      name: 'Trồng rừng',
      impact: { co2: -3, temp: -0.05 },
      cost: 15,
    },
    {
      id: 'electric',
      name: 'Xe điện',
      impact: { co2: -4, temp: -0.08 },
      cost: 25,
    },
    {
      id: 'industry',
      name: 'Công nghệ sạch',
      impact: { co2: -6, temp: -0.12 },
      cost: 30,
    },
  ];

  const advanceYear = () => {
    let newCo2 = co2Level + 2; // Base increase
    let newTemp = temperature + 0.02; // Base increase
    let yearCost = 0;

    policies.forEach((policyId) => {
      const policy = policyOptions.find((p) => p.id === policyId);
      if (policy) {
        newCo2 += policy.impact.co2;
        newTemp += policy.impact.temp;
        yearCost += policy.cost;
      }
    });

    setCo2Level(Math.max(350, newCo2));
    setTemperature(Math.max(0.5, newTemp));
    setCurrentYear((prev) => prev + 1);

    // Calculate score based on climate improvement
    const climateScore = Math.max(
      0,
      500 - (newCo2 - 350) - (newTemp - 0.5) * 100,
    );
    setScore(climateScore);

    if (currentYear >= 2030) {
      const finalScore = climateScore + (newTemp < 1.5 ? 100 : 0); // Paris Agreement bonus
      onComplete(true, finalScore);
    }
  };

  const togglePolicy = (policyId: string) => {
    setPolicies((prev) =>
      prev.includes(policyId)
        ? prev.filter((p) => p !== policyId)
        : [...prev, policyId],
    );
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          🌍 Mô hình khí hậu - Năm {currentYear}
        </h3>
        <div className="text-green-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Chỉ số khí hậu:</h4>
          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">CO₂ (ppm):</span>
                <span
                  className={`font-bold ${co2Level > 450 ? 'text-red-400' : co2Level > 400 ? 'text-yellow-400' : 'text-green-400'}`}
                >
                  {co2Level.toFixed(1)}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${co2Level > 450 ? 'bg-red-500' : co2Level > 400 ? 'bg-yellow-500' : 'bg-green-500'}`}
                  style={{ width: `${Math.min(100, (co2Level - 300) / 2)}%` }}
                />
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Nhiệt độ (°C):</span>
                <span
                  className={`font-bold ${temperature > 2 ? 'text-red-400' : temperature > 1.5 ? 'text-yellow-400' : 'text-green-400'}`}
                >
                  +{temperature.toFixed(2)}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${temperature > 2 ? 'bg-red-500' : temperature > 1.5 ? 'bg-yellow-500' : 'bg-green-500'}`}
                  style={{ width: `${Math.min(100, temperature * 25)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Chính sách khí hậu:</h4>
          <div className="space-y-2">
            {policyOptions.map((policy) => (
              <div
                key={policy.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  policies.includes(policy.id)
                    ? 'bg-green-500/20 border-green-500/50'
                    : 'bg-gray-800/50 border-gray-600 hover:bg-gray-700/50'
                }`}
                onClick={() => togglePolicy(policy.id)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">{policy.name}</div>
                    <div className="text-gray-400 text-sm">
                      CO₂: {policy.impact.co2} ppm | Temp: {policy.impact.temp}
                      °C
                    </div>
                    <div className="text-yellow-400 text-sm">
                      Chi phí: ${policy.cost}B
                    </div>
                  </div>
                  {policies.includes(policy.id) && (
                    <span className="text-green-400">✓</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={advanceYear}
        className="w-full mt-6 bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-200"
      >
        Tiến tới năm {currentYear + 1} →
      </button>
    </div>
  );
}

function CybersecurityDefenseGame({ onComplete, timeLeft, onRestart }: any) {
  const [threats, setThreats] = useState([
    {
      id: 1,
      type: 'malware',
      name: 'Trojan.exe',
      severity: 'high',
      blocked: false,
    },
    {
      id: 2,
      type: 'phishing',
      name: 'Fake Email',
      severity: 'medium',
      blocked: false,
    },
    {
      id: 3,
      type: 'ddos',
      name: 'DDoS Attack',
      severity: 'critical',
      blocked: false,
    },
    {
      id: 4,
      type: 'ransomware',
      name: 'CryptoLocker',
      severity: 'critical',
      blocked: false,
    },
  ]);
  const [securityLevel, setSecurityLevel] = useState(60);
  const [score, setScore] = useState(0);

  const blockThreat = (threatId: number) => {
    setThreats((prev) =>
      prev.map((threat) =>
        threat.id === threatId ? { ...threat, blocked: true } : threat,
      ),
    );
    setSecurityLevel((prev) => Math.min(100, prev + 10));

    const threat = threats.find((t) => t.id === threatId);
    const points =
      threat?.severity === 'critical'
        ? 30
        : threat?.severity === 'high'
          ? 20
          : 15;
    setScore((prev) => prev + points);
  };

  const allThreatsBlocked = threats.every((threat) => threat.blocked);

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  useEffect(() => {
    if (allThreatsBlocked) {
      setTimeout(() => onComplete(true, score + 50), 1000);
    }
  }, [allThreatsBlocked, score, onComplete]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          🛡️ Phòng thủ An ninh mạng
        </h3>
        <div className="flex justify-between">
          <div className="text-red-400 font-medium">Điểm: {score}</div>
          <div
            className={`font-medium ${securityLevel > 80 ? 'text-green-400' : securityLevel > 60 ? 'text-yellow-400' : 'text-red-400'}`}
          >
            Bảo mật: {securityLevel}%
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-white font-medium mb-3">
          Mối đe dọa được phát hiện:
        </h4>
        <div className="space-y-3">
          {threats.map((threat) => (
            <div
              key={threat.id}
              className={`p-4 rounded-lg border transition-all ${
                threat.blocked
                  ? 'bg-green-500/20 border-green-500/50'
                  : threat.severity === 'critical'
                    ? 'bg-red-500/20 border-red-500/50'
                    : threat.severity === 'high'
                      ? 'bg-orange-500/20 border-orange-500/50'
                      : 'bg-yellow-500/20 border-yellow-500/50'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white font-medium">{threat.name}</div>
                  <div className="text-gray-400 text-sm">
                    Type: {threat.type} | Severity: {threat.severity}
                  </div>
                </div>
                {threat.blocked ? (
                  <span className="text-green-400 font-bold">BLOCKED ✓</span>
                ) : (
                  <button
                    onClick={() => blockThreat(threat.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Block
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {allThreatsBlocked && (
        <div className="text-center p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
          <div className="text-green-400 font-bold text-lg">
            🎉 All Threats Blocked!
          </div>
          <div className="text-gray-300">System Security: 100%</div>
        </div>
      )}
    </div>
  );
}

function DataVisualizationGame({ onComplete, timeLeft, onRestart }: any) {
  const [selectedChart, setSelectedChart] = useState<string | null>(null);
  const [dataSet, setDataSet] = useState('sales');
  const [score, setScore] = useState(0);

  const data = {
    sales: [
      { month: 'Jan', value: 120 },
      { month: 'Feb', value: 150 },
      { month: 'Mar', value: 180 },
      { month: 'Apr', value: 200 },
      { month: 'May', value: 220 },
    ],
    users: [
      { category: 'Desktop', value: 45 },
      { category: 'Mobile', value: 35 },
      { category: 'Tablet', value: 20 },
    ],
  };

  const chartTypes = [
    { id: 'bar', name: 'Bar Chart', bestFor: 'sales', points: 20 },
    { id: 'line', name: 'Line Chart', bestFor: 'sales', points: 25 },
    { id: 'pie', name: 'Pie Chart', bestFor: 'users', points: 25 },
    { id: 'scatter', name: 'Scatter Plot', bestFor: 'none', points: 10 },
  ];

  const selectChart = (chartId: string) => {
    setSelectedChart(chartId);
    const chart = chartTypes.find((c) => c.id === chartId);
    const isOptimal = chart?.bestFor === dataSet;
    const points = isOptimal
      ? chart.points
      : Math.floor(chart?.points ?? 0 / 2) || 5;
    setScore((prev) => prev + points);
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          📊 Trực quan hóa dữ liệu
        </h3>
        <div className="text-indigo-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Chọn loại dữ liệu:</h4>
          <div className="space-y-2 mb-4">
            <button
              onClick={() => setDataSet('sales')}
              className={`w-full p-3 rounded-lg text-left transition-all ${
                dataSet === 'sales'
                  ? 'bg-blue-500/20 border-blue-500/50 border'
                  : 'bg-gray-800/50 border border-gray-600 hover:bg-gray-700/50'
              }`}
            >
              <div className="text-white font-medium">Sales Data</div>
              <div className="text-gray-400 text-sm">Monthly sales figures</div>
            </button>
            <button
              onClick={() => setDataSet('users')}
              className={`w-full p-3 rounded-lg text-left transition-all ${
                dataSet === 'users'
                  ? 'bg-blue-500/20 border-blue-500/50 border'
                  : 'bg-gray-800/50 border border-gray-600 hover:bg-gray-700/50'
              }`}
            >
              <div className="text-white font-medium">User Data</div>
              <div className="text-gray-400 text-sm">
                Device usage breakdown
              </div>
            </button>
          </div>

          <h4 className="text-white font-medium mb-3">Dữ liệu hiện tại:</h4>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <pre className="text-gray-300 text-sm">
              {JSON.stringify(data[dataSet as keyof typeof data], null, 2)}
            </pre>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Chọn loại biểu đồ:</h4>
          <div className="space-y-2">
            {chartTypes.map((chart) => (
              <button
                key={chart.id}
                onClick={() => selectChart(chart.id)}
                disabled={selectedChart === chart.id}
                className={`w-full p-3 rounded-lg text-left transition-all ${
                  selectedChart === chart.id
                    ? 'bg-green-500/20 border-green-500/50 border'
                    : chart.bestFor === dataSet
                      ? 'bg-indigo-500/20 border-indigo-500/50 border hover:bg-indigo-500/30'
                      : 'bg-gray-800/50 border border-gray-600 hover:bg-gray-700/50'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">{chart.name}</div>
                    <div className="text-gray-400 text-sm">
                      {chart.bestFor === dataSet
                        ? '✓ Optimal for this data'
                        : 'Available option'}
                    </div>
                  </div>
                  <div className="text-yellow-400">{chart.points} pts</div>
                </div>
                {selectedChart === chart.id && (
                  <div className="mt-2 text-green-400 text-sm">Selected ✓</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedChart && (
        <button
          onClick={() => onComplete(true, score)}
          className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-600 hover:to-blue-600 transition-all duration-200"
        >
          Complete Visualization ✓
        </button>
      )}
    </div>
  );
}

function SpaceExplorationGame({ onComplete, timeLeft, onRestart }: any) {
  const [currentMission, setCurrentMission] = useState(0);
  const [fuel, setFuel] = useState(100);
  const [oxygen, setOxygen] = useState(100);
  const [samples, setSamples] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);

  const missions = [
    {
      name: 'Mars Sample Collection',
      objective: 'Collect 3 soil samples from different locations',
      targetSamples: 3,
      environment: 'Mars Surface',
    },
    {
      name: 'Asteroid Mining',
      objective: 'Extract valuable minerals from asteroid belt',
      targetSamples: 2,
      environment: 'Asteroid Belt',
    },
  ];

  const currentMissionData = missions[currentMission];

  const moveSpacecraft = (direction: string) => {
    if (fuel <= 0) return;

    const newPos = { ...position };
    switch (direction) {
      case 'up':
        newPos.y = Math.max(-3, newPos.y - 1);
        break;
      case 'down':
        newPos.y = Math.min(3, newPos.y + 1);
        break;
      case 'left':
        newPos.x = Math.max(-3, newPos.x - 1);
        break;
      case 'right':
        newPos.x = Math.min(3, newPos.x + 1);
        break;
    }

    setPosition(newPos);
    setFuel((prev) => Math.max(0, prev - 5));
    setOxygen((prev) => Math.max(0, prev - 2));
  };

  const collectSample = () => {
    if (position.x !== 0 || position.y !== 0) {
      setSamples((prev) => prev + 1);
      setScore((prev) => prev + 25);
    }
  };

  const refuel = () => {
    setFuel(100);
    setOxygen(100);
    setScore((prev) => Math.max(0, prev - 10));
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  useEffect(() => {
    if (samples >= currentMissionData.targetSamples) {
      if (currentMission < missions.length - 1) {
        setCurrentMission((prev) => prev + 1);
        setSamples(0);
        setPosition({ x: 0, y: 0 });
      } else {
        onComplete(true, score + 100);
      }
    }
  }, [
    samples,
    currentMissionData.targetSamples,
    currentMission,
    missions.length,
    score,
    onComplete,
  ]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          🚀 {currentMissionData.name}
        </h3>
        <p className="text-gray-300 text-sm">{currentMissionData.objective}</p>
        <div className="text-purple-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">
            Không gian: {currentMissionData.environment}
          </h4>
          <div
            className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg p-4 relative"
            style={{ height: '200px' }}
          >
            {/* Grid representation */}
            {Array.from({ length: 7 }, (_, i) =>
              Array.from({ length: 7 }, (_, j) => {
                const x = j - 3;
                const y = i - 3;
                const isSpacecraft = position.x === x && position.y === y;
                const isHome = x === 0 && y === 0;
                return (
                  <div
                    key={`${i}-${j}`}
                    className={`absolute border border-gray-600/30 ${
                      isSpacecraft
                        ? 'bg-cyan-400'
                        : isHome
                          ? 'bg-green-400/50'
                          : 'bg-gray-800/20'
                    }`}
                    style={{
                      width: '20px',
                      height: '20px',
                      left: `${j * 22 + 10}px`,
                      top: `${i * 22 + 10}px`,
                    }}
                  >
                    {isSpacecraft && <span className="text-xs">🚀</span>}
                    {isHome && <span className="text-xs">🏠</span>}
                  </div>
                );
              }),
            )}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div></div>
            <button
              onClick={() => moveSpacecraft('up')}
              disabled={fuel <= 0}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded disabled:opacity-50"
            >
              ⬆️
            </button>
            <div></div>
            <button
              onClick={() => moveSpacecraft('left')}
              disabled={fuel <= 0}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded disabled:opacity-50"
            >
              ⬅️
            </button>
            <button
              onClick={collectSample}
              disabled={position.x === 0 && position.y === 0}
              className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded text-sm disabled:opacity-50"
            >
              📦 Collect
            </button>
            <button
              onClick={() => moveSpacecraft('right')}
              disabled={fuel <= 0}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded disabled:opacity-50"
            >
              ➡️
            </button>
            <div></div>
            <button
              onClick={() => moveSpacecraft('down')}
              disabled={fuel <= 0}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded disabled:opacity-50"
            >
              ⬇️
            </button>
            <div></div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Spacecraft Status:</h4>
          <div className="space-y-3">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Fuel:</span>
                <span className={fuel > 20 ? 'text-green-400' : 'text-red-400'}>
                  {fuel}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${fuel > 20 ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{ width: `${fuel}%` }}
                />
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Oxygen:</span>
                <span
                  className={oxygen > 20 ? 'text-blue-400' : 'text-red-400'}
                >
                  {oxygen}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${oxygen > 20 ? 'bg-blue-500' : 'bg-red-500'}`}
                  style={{ width: `${oxygen}%` }}
                />
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Samples Collected:</span>
                <span className="text-yellow-400">
                  {samples}/{currentMissionData.targetSamples}
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Position:</span>
                <span className="text-cyan-400">
                  ({position.x}, {position.y})
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={refuel}
            className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200"
          >
            🔋 Emergency Refuel (-10 pts)
          </button>
        </div>
      </div>
    </div>
  );
}

function NeuralNetworkBuilderGame({ onComplete, timeLeft, onRestart }: any) {
  const [layers, setLayers] = useState([
    { id: 1, type: 'input', neurons: 3, name: 'Input Layer' },
    { id: 2, type: 'output', neurons: 1, name: 'Output Layer' },
  ]);
  const [currentAccuracy, setCurrentAccuracy] = useState(45);
  const [trainingEpochs, setTrainingEpochs] = useState(0);
  const [score, setScore] = useState(0);

  const addHiddenLayer = () => {
    const newLayer = {
      id: layers.length + 1,
      type: 'hidden',
      neurons: 4,
      name: `Hidden Layer ${layers.filter((l) => l.type === 'hidden').length + 1}`,
    };

    const newLayers = [...layers];
    newLayers.splice(-1, 0, newLayer); // Insert before output layer
    setLayers(newLayers);
    setCurrentAccuracy((prev) => Math.min(95, prev + 15));
  };

  const adjustNeurons = (layerId: number, change: number) => {
    setLayers((prev) =>
      prev.map((layer) =>
        layer.id === layerId
          ? {
              ...layer,
              neurons: Math.max(1, Math.min(10, layer.neurons + change)),
            }
          : layer,
      ),
    );
    setCurrentAccuracy((prev) => Math.min(95, prev + Math.random() * 5));
  };

  const trainNetwork = () => {
    setTrainingEpochs((prev) => prev + 10);
    const improvement = Math.random() * 10;
    setCurrentAccuracy((prev) => Math.min(98, prev + improvement));
    setScore((prev) => prev + Math.floor(improvement * 2));
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          🧠 Neural Network Builder
        </h3>
        <div className="flex justify-between">
          <div className="text-pink-400 font-medium">Điểm: {score}</div>
          <div
            className={`font-medium ${currentAccuracy > 90 ? 'text-green-400' : currentAccuracy > 70 ? 'text-yellow-400' : 'text-red-400'}`}
          >
            Accuracy: {currentAccuracy.toFixed(1)}%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Network Architecture:</h4>
          <div className="space-y-3">
            {layers.map((layer, index) => (
              <div
                key={layer.id}
                className={`p-4 rounded-lg border ${
                  layer.type === 'input'
                    ? 'bg-blue-500/20 border-blue-500/50'
                    : layer.type === 'hidden'
                      ? 'bg-purple-500/20 border-purple-500/50'
                      : 'bg-green-500/20 border-green-500/50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">{layer.name}</div>
                    <div className="text-gray-400 text-sm">
                      Neurons: {layer.neurons}
                    </div>
                  </div>
                  {layer.type === 'hidden' && (
                    <div className="flex gap-1">
                      <button
                        onClick={() => adjustNeurons(layer.id, -1)}
                        className="bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded text-sm"
                      >
                        -
                      </button>
                      <button
                        onClick={() => adjustNeurons(layer.id, 1)}
                        className="bg-green-600 hover:bg-green-700 text-white w-8 h-8 rounded text-sm"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addHiddenLayer}
            disabled={layers.filter((l) => l.type === 'hidden').length >= 3}
            className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            + Add Hidden Layer
          </button>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Training Control:</h4>
          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Training Progress:</span>
                <span className="text-blue-400">{trainingEpochs} epochs</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, trainingEpochs)}%` }}
                />
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Model Accuracy:</span>
                <span
                  className={
                    currentAccuracy > 90
                      ? 'text-green-400'
                      : currentAccuracy > 70
                        ? 'text-yellow-400'
                        : 'text-red-400'
                  }
                >
                  {currentAccuracy.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentAccuracy > 90
                      ? 'bg-green-500'
                      : currentAccuracy > 70
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                  }`}
                  style={{ width: `${currentAccuracy}%` }}
                />
              </div>
            </div>

            <button
              onClick={trainNetwork}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              🔄 Train Network (+10 epochs)
            </button>

            {currentAccuracy > 90 && (
              <button
                onClick={() => onComplete(true, score + 100)}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
              >
                🎯 Deploy Model (90%+ accuracy!)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChemistryLabGame({ onComplete, timeLeft, onRestart }: any) {
  const [currentExperiment, setCurrentExperiment] = useState(0);
  const [selectedCompounds, setSelectedCompounds] = useState<string[]>([]);
  const [temperature, setTemperature] = useState(25);
  const [experimentResult, setExperimentResult] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const experiments = [
    {
      name: 'Acid-Base Reaction',
      description: 'Mix acid and base to create salt and water',
      requiredCompounds: ['HCl', 'NaOH'],
      optimalTemp: 25,
      result: 'NaCl + H2O',
      points: 30,
    },
    {
      name: 'Combustion Reaction',
      description: 'Burn methane in oxygen',
      requiredCompounds: ['CH4', 'O2'],
      optimalTemp: 500,
      result: 'CO2 + H2O + Energy',
      points: 40,
    },
  ];

  const availableCompounds = ['HCl', 'NaOH', 'CH4', 'O2', 'H2O', 'NaCl', 'CO2'];
  const currentExp = experiments[currentExperiment];

  const selectCompound = (compound: string) => {
    if (!selectedCompounds.includes(compound)) {
      setSelectedCompounds((prev) => [...prev, compound]);
    }
  };

  const removeCompound = (compound: string) => {
    setSelectedCompounds((prev) => prev.filter((c) => c !== compound));
  };

  const runExperiment = () => {
    const hasRequiredCompounds = currentExp.requiredCompounds.every((comp) =>
      selectedCompounds.includes(comp),
    );
    const isOptimalTemp = Math.abs(temperature - currentExp.optimalTemp) < 50;

    if (hasRequiredCompounds && isOptimalTemp) {
      setExperimentResult(`Success! Produced: ${currentExp.result}`);
      setScore((prev) => prev + currentExp.points);

      setTimeout(() => {
        if (currentExperiment < experiments.length - 1) {
          setCurrentExperiment((prev) => prev + 1);
          setSelectedCompounds([]);
          setTemperature(25);
          setExperimentResult(null);
        } else {
          onComplete(true, score + currentExp.points);
        }
      }, 2000);
    } else {
      setExperimentResult(
        'Experiment failed! Check compounds and temperature.',
      );
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          ⚗️ {currentExp.name}
        </h3>
        <p className="text-gray-300 text-sm">{currentExp.description}</p>
        <div className="text-emerald-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Available Compounds:</h4>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {availableCompounds.map((compound) => (
              <button
                key={compound}
                onClick={() => selectCompound(compound)}
                disabled={selectedCompounds.includes(compound)}
                className="p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white hover:bg-gray-700/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {compound}
              </button>
            ))}
          </div>

          <h4 className="text-white font-medium mb-3">Temperature Control:</h4>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Temperature:</span>
              <span className="text-orange-400">{temperature}°C</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={temperature}
              onChange={(e) => setTemperature(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0°C</span>
              <span>500°C</span>
              <span>1000°C</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Reaction Chamber:</h4>
          <div className="bg-gradient-to-br from-emerald-900/50 to-cyan-900/50 rounded-lg p-4 min-h-32 border-2 border-dashed border-gray-600">
            <div className="text-center mb-4">
              <div className="text-gray-400 text-sm">Selected Compounds:</div>
              {selectedCompounds.length === 0 ? (
                <div className="text-gray-500 italic">
                  No compounds selected
                </div>
              ) : (
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {selectedCompounds.map((compound, index) => (
                    <span
                      key={index}
                      onClick={() => removeCompound(compound)}
                      className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-emerald-500/30 transition-colors"
                    >
                      {compound} ×
                    </span>
                  ))}
                </div>
              )}
            </div>

            {experimentResult && (
              <div
                className={`text-center p-3 rounded-lg ${
                  experimentResult.includes('Success')
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {experimentResult}
              </div>
            )}
          </div>

          <div className="mt-4">
            <div className="text-white text-sm mb-2">
              Experiment Requirements:
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3 text-sm">
              <div className="text-gray-300">
                Required: {currentExp.requiredCompounds.join(' + ')}
              </div>
              <div className="text-gray-300">
                Optimal temp: {currentExp.optimalTemp}°C
              </div>
              <div className="text-yellow-400">
                Expected: {currentExp.result}
              </div>
            </div>
          </div>

          <button
            onClick={runExperiment}
            disabled={selectedCompounds.length === 0}
            className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 px-4 rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            🧪 Run Experiment
          </button>
        </div>
      </div>
    </div>
  );
}

function BiologyEcosystemGame({ onComplete, timeLeft, onRestart }: any) {
  const [ecosystem, setEcosystem] = useState({
    plants: 50,
    herbivores: 30,
    carnivores: 10,
    decomposers: 20,
  });
  const [events, setEvents] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [year, setYear] = useState(1);

  const addOrganism = (type: keyof typeof ecosystem) => {
    setEcosystem((prev) => ({
      ...prev,
      [type]: prev[type] + 5,
    }));
  };

  const simulateYear = () => {
    const newEcosystem = { ...ecosystem };
    const eventLog: string[] = [];

    // Natural growth and interactions
    if (newEcosystem.plants > 30) {
      newEcosystem.herbivores = Math.min(60, newEcosystem.herbivores + 2);
      eventLog.push('🌿 Abundant plants support herbivore growth');
    }

    if (newEcosystem.herbivores > 40) {
      newEcosystem.carnivores = Math.min(30, newEcosystem.carnivores + 1);
      eventLog.push('🐰 Herbivore abundance attracts carnivores');
    }

    if (newEcosystem.carnivores > 20) {
      newEcosystem.herbivores = Math.max(10, newEcosystem.herbivores - 3);
      eventLog.push('🦅 Carnivores reduce herbivore population');
    }

    // Random events
    const randomEvent = Math.random();
    if (randomEvent < 0.3) {
      newEcosystem.plants = Math.max(20, newEcosystem.plants - 10);
      eventLog.push('🌪️ Natural disaster affects plant population');
    } else if (randomEvent < 0.6) {
      newEcosystem.decomposers = Math.min(40, newEcosystem.decomposers + 5);
      eventLog.push('🍄 Favorable conditions boost decomposer growth');
    }

    // Calculate balance score
    const total = Object.values(newEcosystem).reduce((a, b) => a + b, 0);
    const balance =
      1 -
      Math.abs(0.5 - newEcosystem.plants / total) -
      Math.abs(0.3 - newEcosystem.herbivores / total) -
      Math.abs(0.1 - newEcosystem.carnivores / total) -
      Math.abs(0.1 - newEcosystem.decomposers / total);

    setScore((prev) => prev + Math.floor(balance * 50));
    setEcosystem(newEcosystem);
    setEvents(eventLog);
    setYear((prev) => prev + 1);

    if (year >= 10) {
      onComplete(true, score + Math.floor(balance * 50));
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  const total = Object.values(ecosystem).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          🌿 Ecosystem Simulation - Year {year}
        </h3>
        <div className="text-lime-400 font-medium">Balance Score: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Population Control:</h4>
          <div className="space-y-3">
            {Object.entries(ecosystem).map(([type, count]) => (
              <div key={type} className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white capitalize">{type}:</span>
                  <span className="text-green-400 font-bold">{count}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-700 rounded-full h-2 mr-3">
                    <div
                      className="bg-gradient-to-r from-green-400 to-lime-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(count / total) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={() => addOrganism(type as keyof typeof ecosystem)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                  >
                    +5
                  </button>
                </div>
                <div className="text-gray-400 text-xs mt-1">
                  {((count / total) * 100).toFixed(1)}% of ecosystem
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Ecosystem Status:</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🌍</div>
              <div className="text-white">Total Population: {total}</div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">🌿 Plants:</span>
                <span className="text-green-400">
                  {ecosystem.plants} (
                  {((ecosystem.plants / total) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">🐰 Herbivores:</span>
                <span className="text-yellow-400">
                  {ecosystem.herbivores} (
                  {((ecosystem.herbivores / total) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">🦅 Carnivores:</span>
                <span className="text-red-400">
                  {ecosystem.carnivores} (
                  {((ecosystem.carnivores / total) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">🍄 Decomposers:</span>
                <span className="text-orange-400">
                  {ecosystem.decomposers} (
                  {((ecosystem.decomposers / total) * 100).toFixed(1)}%)
                </span>
              </div>
            </div>
          </div>

          {events.length > 0 && (
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
              <h5 className="text-blue-400 font-medium mb-2">Recent Events:</h5>
              <div className="space-y-1">
                {events.map((event, index) => (
                  <div key={index} className="text-gray-300 text-sm">
                    {event}
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={simulateYear}
            disabled={year >= 10}
            className="w-full bg-gradient-to-r from-lime-500 to-green-500 text-white py-3 px-4 rounded-lg font-medium hover:from-lime-600 hover:to-green-600 transition-all duration-200 disabled:opacity-50"
          >
            {year < 10
              ? `⏭️ Advance to Year ${year + 1}`
              : '🎯 Simulation Complete'}
          </button>
        </div>
      </div>
    </div>
  );
}

function HistoryTimelineGame({ onComplete, timeLeft, onRestart }: any) {
  const [events] = useState([
    { id: 1, year: 1945, event: 'Tuyên bố Độc lập', placed: false },
    { id: 2, year: 1975, event: 'Thống nhất đất nước', placed: false },
    { id: 3, year: 1986, event: 'Đổi mới', placed: false },
    { id: 4, year: 2007, event: 'Gia nhập WTO', placed: false },
    { id: 5, year: 1954, event: 'Chiến thắng Điện Biên Phủ', placed: false },
  ]);

  const [timeline, setTimeline] = useState<
    Array<{ id: number; year: number; event: string }>
  >([]);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const addToTimeline = (eventId: number) => {
    const event = events.find((e) => e.id === eventId);
    if (!event || timeline.find((t) => t.id === eventId)) return;

    const newTimeline = [...timeline, event].sort((a, b) => a.year - b.year);
    setTimeline(newTimeline);

    // Check if correctly placed
    const correctOrder = events.slice().sort((a, b) => a.year - b.year);
    const currentIndex = newTimeline.length - 1;
    const isCorrect =
      newTimeline[currentIndex].id === correctOrder[currentIndex].id;

    if (isCorrect) {
      setScore((prev) => prev + 20);
    } else {
      setScore((prev) => Math.max(0, prev - 10));
    }

    if (newTimeline.length === events.length) {
      const finalScore = score + (isCorrect ? 20 : -10);
      setGameComplete(true);
      setTimeout(() => onComplete(true, finalScore), 1500);
    }
  };

  const removeFromTimeline = (eventId: number) => {
    setTimeline((prev) => prev.filter((t) => t.id !== eventId));
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  const unplacedEvents = events.filter(
    (e) => !timeline.find((t) => t.id === e.id),
  );

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          📚 Vietnam History Timeline
        </h3>
        <div className="text-amber-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Historical Events:</h4>
          <div className="space-y-2">
            {unplacedEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => addToTimeline(event.id)}
                className="w-full p-3 bg-amber-500/20 border border-amber-500/50 rounded-lg text-left hover:bg-amber-500/30 transition-all"
              >
                <div className="text-white font-medium">{event.event}</div>
                <div className="text-amber-400 text-sm">{event.year}</div>
              </button>
            ))}
          </div>

          {unplacedEvents.length === 0 && !gameComplete && (
            <div className="text-center p-4 bg-blue-500/20 border border-blue-500/50 rounded-lg">
              <div className="text-blue-400">All events placed!</div>
            </div>
          )}
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">
            Timeline (Chronological Order):
          </h4>
          <div className="space-y-2">
            {timeline.length === 0 ? (
              <div className="text-center p-8 border-2 border-dashed border-gray-600 rounded-lg">
                <div className="text-gray-400">
                  Drag events here to build timeline
                </div>
              </div>
            ) : (
              timeline.map((event, index) => (
                <div
                  key={event.id}
                  className="p-3 bg-gray-800/50 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700/50"
                  onClick={() => removeFromTimeline(event.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-medium">
                        {event.event}
                      </div>
                      <div className="text-gray-400 text-sm">
                        Position {index + 1}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-400 font-bold">
                        {event.year}
                      </div>
                      <div className="text-gray-500 text-xs">
                        Click to remove
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {gameComplete && (
            <div className="mt-4 text-center p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
              <div className="text-green-400 font-bold text-lg">
                🎉 Timeline Complete!
              </div>
              <div className="text-gray-300">
                Great job learning Vietnam history!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Robot Navigation 3D Game Component
function RobotNavigation3DGame({
  gameData,
  onComplete,
  timeLeft,
  onRestart,
}: any) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, z: 0 });
  const [goalPosition, setGoalPosition] = useState({ x: 7, y: 0, z: 7 });
  const [isMoving, setIsMoving] = useState(false);
  const [score, setScore] = useState(0);
  const [collectedItems, setCollectedItems] = useState<Set<string>>(new Set());
  const [pathHistory, setPathHistory] = useState<
    Array<{ x: number; y: number; z: number }>
  >([]);
  const [showPath, setShowPath] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('astar');
  const [isCalculatingPath, setIsCalculatingPath] = useState(false);
  const [currentPath, setCurrentPath] = useState<
    Array<{ x: number; y: number; z: number }>
  >([]);

  const level = gameData?.levels?.[currentLevel];

  useEffect(() => {
    if (level) {
      setRobotPosition(level.start);
      setGoalPosition(level.goal);
      setCollectedItems(new Set());
      setPathHistory([level.start]);
      setCurrentPath([]);
    }
  }, [level, currentLevel]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

  // A* pathfinding algorithm for 3D space
  const calculatePath = useCallback(
    (
      start: { x: number; y: number; z: number },
      goal: { x: number; y: number; z: number },
    ) => {
      if (!level) return [];

      setIsCalculatingPath(true);

      // A* implementation
      const openSet: Array<{
        pos: { x: number; y: number; z: number };
        f: number;
        g: number;
        h: number;
        parent?: any;
      }> = [];
      const closedSet: Set<string> = new Set();

      const heuristic = (
        a: { x: number; y: number; z: number },
        b: { x: number; y: number; z: number },
      ) => {
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);
      };

      const isObstacle = (pos: { x: number; y: number; z: number }) => {
        return level.obstacles.some(
          (obs: any) => obs.x === pos.x && obs.y === pos.y && obs.z === pos.z,
        );
      };

      const isInBounds = (pos: { x: number; y: number; z: number }) => {
        return (
          pos.x >= 0 &&
          pos.x < level.dimensions.width &&
          pos.y >= 0 &&
          pos.y < level.dimensions.height &&
          pos.z >= 0 &&
          pos.z < level.dimensions.depth
        );
      };

      const startNode = {
        pos: start,
        g: 0,
        h: heuristic(start, goal),
        f: 0,
        parent: null,
      };
      startNode.f = startNode.g + startNode.h;
      openSet.push(startNode);

      while (openSet.length > 0) {
        // Find node with lowest f score
        const currentIndex = openSet.reduce(
          (minIndex, node, index) =>
            node.f < openSet[minIndex].f ? index : minIndex,
          0,
        );
        const current = openSet.splice(currentIndex, 1)[0];

        const currentKey = `${current.pos.x},${current.pos.y},${current.pos.z}`;
        closedSet.add(currentKey);

        // Check if we reached the goal
        if (
          current.pos.x === goal.x &&
          current.pos.y === goal.y &&
          current.pos.z === goal.z
        ) {
          const path: Array<{ x: number; y: number; z: number }> = [];
          let node = current;
          while (node) {
            path.unshift(node.pos);
            node = node.parent;
          }
          setIsCalculatingPath(false);
          return path;
        }

        // Check all 6 neighbors (3D movement)
        const neighbors = [
          { x: current.pos.x + 1, y: current.pos.y, z: current.pos.z },
          { x: current.pos.x - 1, y: current.pos.y, z: current.pos.z },
          { x: current.pos.x, y: current.pos.y + 1, z: current.pos.z },
          { x: current.pos.x, y: current.pos.y - 1, z: current.pos.z },
          { x: current.pos.x, y: current.pos.y, z: current.pos.z + 1 },
          { x: current.pos.x, y: current.pos.y, z: current.pos.z - 1 },
        ];

        for (const neighbor of neighbors) {
          const neighborKey = `${neighbor.x},${neighbor.y},${neighbor.z}`;

          if (
            !isInBounds(neighbor) ||
            isObstacle(neighbor) ||
            closedSet.has(neighborKey)
          ) {
            continue;
          }

          const tentativeG = current.g + 1;

          const existingNode = openSet.find(
            (node) =>
              node.pos.x === neighbor.x &&
              node.pos.y === neighbor.y &&
              node.pos.z === neighbor.z,
          );

          if (!existingNode) {
            const neighborNode = {
              pos: neighbor,
              g: tentativeG,
              h: heuristic(neighbor, goal),
              f: 0,
              parent: current,
            };
            neighborNode.f = neighborNode.g + neighborNode.h;
            openSet.push(neighborNode);
          } else if (tentativeG < existingNode.g) {
            existingNode.g = tentativeG;
            existingNode.f = existingNode.g + existingNode.h;
            existingNode.parent = current;
          }
        }
      }

      setIsCalculatingPath(false);
      return []; // No path found
    },
    [level],
  );

  const moveRobot = (direction: 'x+' | 'x-' | 'y+' | 'y-' | 'z+' | 'z-') => {
    if (isMoving || !level) return;

    const newPos = { ...robotPosition };
    switch (direction) {
      case 'x+':
        newPos.x++;
        break;
      case 'x-':
        newPos.x--;
        break;
      case 'y+':
        newPos.y++;
        break;
      case 'y-':
        newPos.y--;
        break;
      case 'z+':
        newPos.z++;
        break;
      case 'z-':
        newPos.z--;
        break;
    }

    // Check bounds
    if (
      newPos.x < 0 ||
      newPos.x >= level.dimensions.width ||
      newPos.y < 0 ||
      newPos.y >= level.dimensions.height ||
      newPos.z < 0 ||
      newPos.z >= level.dimensions.depth
    ) {
      return;
    }

    // Check obstacles
    const isObstacle = level.obstacles.some(
      (obs: any) =>
        obs.x === newPos.x && obs.y === newPos.y && obs.z === newPos.z,
    );
    if (isObstacle) return;

    setIsMoving(true);
    setTimeout(() => {
      setRobotPosition(newPos);
      setPathHistory((prev) => [...prev, newPos]);

      // Check for collectibles
      const collectible = level.collectibles?.find(
        (item: any) =>
          item.x === newPos.x && item.y === newPos.y && item.z === newPos.z,
      );
      if (collectible) {
        const itemKey = `${newPos.x},${newPos.y},${newPos.z}`;
        if (!collectedItems.has(itemKey)) {
          setCollectedItems((prev) => new Set([...prev, itemKey]));
          setScore(
            (prev) =>
              prev +
              (collectible.type === 'energy'
                ? 50
                : collectible.type === 'data'
                  ? 30
                  : 10),
          );
        }
      }

      // Check if reached goal
      if (
        newPos.x === goalPosition.x &&
        newPos.y === goalPosition.y &&
        newPos.z === goalPosition.z
      ) {
        const timeBonus = Math.max(0, timeLeft * 2);
        const pathEfficiency = Math.max(0, 100 - pathHistory.length);
        const collectibleBonus = collectedItems.size * 20;
        const finalScore =
          score + timeBonus + pathEfficiency + collectibleBonus;

        if (currentLevel < gameData?.levels?.length - 1) {
          setCurrentLevel((prev) => prev + 1);
          setScore(finalScore);
        } else {
          onComplete(true, finalScore);
        }
      }

      setIsMoving(false);
    }, 300);
  };

  const autoNavigate = () => {
    const path = calculatePath(robotPosition, goalPosition);
    if (path.length > 1) {
      setCurrentPath(path);
      setShowPath(true);

      // Execute path step by step
      let stepIndex = 1; // Skip first position (current)
      const executeStep = () => {
        if (stepIndex < path.length) {
          const currentPos = path[stepIndex - 1];
          const nextPos = path[stepIndex];

          if (nextPos.x > currentPos.x) moveRobot('x+');
          else if (nextPos.x < currentPos.x) moveRobot('x-');
          else if (nextPos.y > currentPos.y) moveRobot('y+');
          else if (nextPos.y < currentPos.y) moveRobot('y-');
          else if (nextPos.z > currentPos.z) moveRobot('z+');
          else if (nextPos.z < currentPos.z) moveRobot('z-');

          stepIndex++;
          setTimeout(executeStep, 500);
        }
      };

      setTimeout(executeStep, 500);
    }
  };

  const resetLevel = () => {
    if (level) {
      setRobotPosition(level.start);
      setCollectedItems(new Set());
      setPathHistory([level.start]);
      setCurrentPath([]);
      setShowPath(false);
    }
  };

  if (!level) {
    return (
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="text-center text-white">
          <p>Đang tải dữ liệu game...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{level.name}</h3>
            <p className="text-gray-300 text-sm">{level.description}</p>
          </div>
          <div className="text-right">
            <div className="text-cyan-400 font-bold">
              Cấp độ {currentLevel + 1}
            </div>
            <div className="text-yellow-400">Điểm: {score}</div>
          </div>
        </div>

        {/* Educational Info */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-4">
          <h4 className="text-white font-semibold mb-2">📚 Kiến thức:</h4>
          <p className="text-gray-300 text-sm mb-1">
            <strong>Khái niệm:</strong> {level.educational.concept}
          </p>
          <p className="text-gray-300 text-sm mb-1">
            <strong>Thuật toán:</strong> {level.educational.algorithmFocus}
          </p>
          <p className="text-gray-300 text-sm">
            <strong>Mục tiêu:</strong> {level.educational.learningGoal}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* 3D Visualization - Full Width */}
        <div>
          <h4 className="text-white font-medium mb-3">
            🎮 Môi trường 3D Robot Navigation:
          </h4>
          <div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 relative overflow-hidden"
            style={{ height: '500px', perspective: '1200px' }}
          >
            {/* 3D Grid Visualization */}
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(45deg) rotateY(30deg)',
              }}
            >
              {/* Render 3D Grid */}
              {Array.from({ length: level.dimensions.depth }, (_, z) =>
                Array.from({ length: level.dimensions.width }, (_, x) =>
                  Array.from({ length: level.dimensions.height }, (_, y) => {
                    const isRobot =
                      robotPosition.x === x &&
                      robotPosition.y === y &&
                      robotPosition.z === z;
                    const isGoal =
                      goalPosition.x === x &&
                      goalPosition.y === y &&
                      goalPosition.z === z;
                    const isObstacle = level.obstacles.some(
                      (obs: any) => obs.x === x && obs.y === y && obs.z === z,
                    );
                    const collectible = level.collectibles?.find(
                      (item: any) =>
                        item.x === x && item.y === y && item.z === z,
                    );
                    const isCollected = collectedItems.has(`${x},${y},${z}`);
                    const isInPath = currentPath.some(
                      (pos) => pos.x === x && pos.y === y && pos.z === z,
                    );

                    let className =
                      'absolute border border-gray-600/30 transition-all duration-300 ';
                    let content = '';

                    if (isRobot) {
                      className +=
                        'bg-cyan-500 border-cyan-300 shadow-lg shadow-cyan-500/50 ';
                      content = '🤖';
                    } else if (isGoal) {
                      className +=
                        'bg-green-500 border-green-300 shadow-lg shadow-green-500/50 ';
                      content = '🎯';
                    } else if (isObstacle) {
                      className += 'bg-red-500 border-red-300 opacity-80 ';
                      content = '🧱';
                    } else if (collectible && !isCollected) {
                      className +=
                        'bg-yellow-500 border-yellow-300 opacity-80 ';
                      content =
                        collectible.type === 'energy'
                          ? '⚡'
                          : collectible.type === 'data'
                            ? '💾'
                            : '💰';
                    } else if (isInPath && showPath) {
                      className += 'bg-blue-400/50 border-blue-300 ';
                    } else {
                      className += 'bg-gray-700/20 ';
                    }

                    const scale = 30; // Optimized pixel size for better 3D visibility
                    const xOffset = x * scale;
                    const yOffset = y * scale;
                    const zOffset = z * scale;

                    return (
                      <div
                        key={`${x}-${y}-${z}`}
                        className={className}
                        style={{
                          width: `${scale}px`,
                          height: `${scale}px`,
                          transform: `translate3d(${xOffset + zOffset * 0.7}px, ${yOffset - zOffset * 0.7}px, ${zOffset}px)`,
                          transformOrigin: 'center center',
                          fontSize: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: isRobot ? 100 : isGoal ? 90 : 10,
                          position: 'absolute',
                          boxShadow:
                            isRobot || isGoal
                              ? '0 4px 12px rgba(0,0,0,0.6)'
                              : '0 2px 6px rgba(0,0,0,0.3)',
                        }}
                      >
                        {content}
                      </div>
                    );
                  }),
                ),
              )}
            </div>

            {/* Enhanced Controls Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                <div className="text-white text-sm mb-3 text-center font-medium">
                  🕹️ Điều khiển Robot (Góc nhìn 3D)
                </div>

                {/* Y (Height) Controls - Corrected for 3D perspective */}
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <div></div>
                  <button
                    onClick={() => moveRobot('y-')}
                    disabled={isMoving}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded text-sm disabled:opacity-50 font-medium"
                    title="Lên cao (từ góc nhìn 3D)"
                  >
                    ⬆️ Cao
                  </button>
                  <div></div>
                </div>

                {/* Z and X Controls */}
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <button
                    onClick={() => moveRobot('z-')}
                    disabled={isMoving}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded text-sm disabled:opacity-50 font-medium"
                    title="Lui (Z-)"
                  >
                    🔺 Lui
                  </button>
                  <button
                    onClick={() => moveRobot('x-')}
                    disabled={isMoving}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded text-sm disabled:opacity-50 font-medium"
                    title="Trái (X-)"
                  >
                    ⬅️ Trái
                  </button>
                  <button
                    onClick={() => moveRobot('x+')}
                    disabled={isMoving}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded text-sm disabled:opacity-50 font-medium"
                    title="Phải (X+)"
                  >
                    ➡️ Phải
                  </button>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-3 gap-2">
                  <div></div>
                  <button
                    onClick={() => moveRobot('y+')}
                    disabled={isMoving}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded text-sm disabled:opacity-50 font-medium"
                    title="Xuống thấp (từ góc nhìn 3D)"
                  >
                    ⬇️ Thấp
                  </button>
                  <button
                    onClick={() => moveRobot('z+')}
                    disabled={isMoving}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded text-sm disabled:opacity-50 font-medium"
                    title="Tới (Z+)"
                  >
                    🔻 Tới
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls and Info - Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Algorithm Controls */}
          <div>
            <h4 className="text-white font-medium mb-3">🎛️ Điều khiển:</h4>

            {/* Algorithm Selection */}
            <div className="mb-4">
              <label className="text-white text-sm mb-2 block">
                Thuật toán:
              </label>
              <select
                value={selectedAlgorithm}
                onChange={(e) => setSelectedAlgorithm(e.target.value)}
                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600"
              >
                <option value="astar">A* (Tối ưu)</option>
                <option value="dijkstra">Dijkstra (Đảm bảo)</option>
                <option value="bfs">BFS (Đơn giản)</option>
              </select>
            </div>

            {/* Auto Navigation */}
            <div className="space-y-2">
              <button
                onClick={autoNavigate}
                disabled={isMoving || isCalculatingPath}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50"
              >
                {isCalculatingPath
                  ? 'Đang tính toán...'
                  : '🤖 Tự động điều hướng'}
              </button>

              <button
                onClick={() => setShowPath(!showPath)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                {showPath ? '👁️ Ẩn đường đi' : '👁️ Hiện đường đi'}
              </button>

              <button
                onClick={resetLevel}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200"
              >
                🔄 Khởi động lại
              </button>
            </div>
          </div>

          {/* Game Stats */}
          <div>
            <h5 className="text-white font-medium mb-3">📊 Thống kê:</h5>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Vị trí hiện tại:</span>
                  <span className="text-cyan-400">
                    ({robotPosition.x}, {robotPosition.y}, {robotPosition.z})
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Mục tiêu:</span>
                  <span className="text-green-400">
                    ({goalPosition.x}, {goalPosition.y}, {goalPosition.z})
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Số bước đã đi:</span>
                  <span className="text-yellow-400">
                    {pathHistory.length - 1}
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Vật phẩm thu thập:</span>
                  <span className="text-purple-400">
                    {collectedItems.size}/{level.collectibles?.length || 0}
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Thuật toán:</span>
                  <span className="text-blue-400 capitalize">
                    {selectedAlgorithm}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div>
            <h5 className="text-white font-medium mb-3">🎯 Tiến độ:</h5>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="w-full bg-gray-700 rounded-full h-3 mb-3">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentLevel + 1) / (gameData?.levels?.length || 1)) * 100}%`,
                  }}
                />
              </div>
              <p className="text-gray-300 text-sm text-center">
                Cấp độ {currentLevel + 1} / {gameData?.levels?.length || 1}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
