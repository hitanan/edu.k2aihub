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
            // Time's up, end game
            const elapsedTime = Date.now() - startTime;
            const timeBonus = getTimeBonus();
            const streakBonus = maxStreak * 10;
            const perfectBonus = lives === 3 ? 25 : 0;
            const finalScore = Math.round(
              score + timeBonus + streakBonus + perfectBonus,
            );

            GAME_PROGRESS.saveProgress(game.id, {
              score: finalScore,
              accuracy: Math.max(0, score),
              timeMs: elapsedTime,
              completed: score > 50,
              lastPlayed: Date.now(),
            });

            setCurrentGameState('results');
            onComplete(finalScore);
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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = gameData.questions[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === question.correct) {
      setScore((prev) => prev + 20);
    }

    setTimeout(() => {
      if (currentQuestion < gameData.questions.length - 1) {
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
            Câu {currentQuestion + 1}/{gameData.questions.length}
          </span>
          <span>Điểm: {score}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${(currentQuestion / gameData.questions.length) * 100}%`,
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
  const [draggedComponent, setDraggedComponent] = useState<string | null>(null);
  const [placedComponents, setPlacedComponents] = useState<
    Record<string, boolean>
  >({});
  const [score, setScore] = useState(0);
  const [isDropZoneActive, setIsDropZoneActive] = useState(false);

  const circuit = gameData.circuits[currentCircuit];

  const handleDragStart = (component: string) => {
    setDraggedComponent(component);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDropZoneActive(true);
  };

  const handleDragLeave = () => {
    setIsDropZoneActive(false);
  };

  const handleDrop = (e: React.DragEvent | null, component?: string) => {
    if (e) {
      e.preventDefault();
    }

    const componentToDrop = component || draggedComponent;
    if (componentToDrop) {
      setPlacedComponents((prev) => ({
        ...prev,
        [componentToDrop]: true,
      }));
      setScore((prevScore) => prevScore + 10); // Add points for each component placed
    }

    setDraggedComponent(null);
    setIsDropZoneActive(false);
  };

  const checkCircuit = () => {
    const allPlaced = circuit.components.every(
      (comp: string) => placedComponents[comp],
    );
    if (allPlaced) {
      const completionBonus = 25;
      const finalScore = score + completionBonus;
      setScore(finalScore);

      setTimeout(() => {
        if (currentCircuit < gameData.circuits.length - 1) {
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
            {circuit.components.map((component: string, index: number) => (
              <div
                key={index}
                draggable={!placedComponents[component]}
                onDragStart={() => handleDragStart(component)}
                className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                  placedComponents[component]
                    ? 'bg-green-500/20 border-green-500/50 text-green-300'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:scale-105'
                } ${draggedComponent === component ? 'opacity-50 scale-95' : ''}`}
                onClick={() =>
                  !placedComponents[component] && handleDrop(null, component)
                }
              >
                <div className="flex items-center justify-between">
                  <span>{component}</span>
                  {placedComponents[component] && (
                    <span className="text-green-400">✓</span>
                  )}
                  {!placedComponents[component] && (
                    <span className="text-gray-500">⋮⋮</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Bảng mạch:</h4>
          <div
            className={`min-h-48 p-4 rounded-lg border-2 border-dashed transition-all duration-200 ${
              isDropZoneActive
                ? 'border-blue-400 bg-blue-400/10'
                : 'border-gray-600 bg-gray-800/50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center text-gray-400 mb-4">
              {isDropZoneActive
                ? 'Thả linh kiện vào đây'
                : 'Kéo thả hoặc click linh kiện'}
            </div>

            <div className="space-y-2">
              <h5 className="text-white text-sm font-medium">Kết nối:</h5>
              {circuit.connections.map((connection: string, index: number) => (
                <div
                  key={index}
                  className="p-2 bg-gray-700 rounded text-sm text-gray-300 border border-gray-600"
                >
                  {connection}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-white font-medium mb-2">Code Arduino:</h4>
        <pre className="bg-gray-800 p-3 rounded text-green-400 text-sm overflow-x-auto border border-gray-700">
          {circuit.code}
        </pre>
      </div>

      <button
        onClick={checkCircuit}
        disabled={
          !circuit.components.every((comp: string) => placedComponents[comp])
        }
        className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-xl font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {circuit.components.every((comp: string) => placedComponents[comp])
          ? 'Kiểm tra mạch ✓'
          : `Kiểm tra mạch (${Object.keys(placedComponents).length}/${circuit.components.length})`}
      </button>
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
  const [robotPosition, setRobotPosition] = useState([0, 0]);
  const [commands, setCommands] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [pathHistory, setPathHistory] = useState<[number, number][]>([]);
  const [algorithmVisualization, setAlgorithmVisualization] = useState<{
    openSet: [number, number][];
    closedSet: [number, number][];
    path: [number, number][];
  }>({ openSet: [], closedSet: [], path: [] });
  const [showAlgorithm, setShowAlgorithm] = useState(false);

  const maze = gameData.mazes[currentLevel];

  // A* Algorithm implementation for path finding
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
      // Find node with lowest f score
      openSet.sort((a, b) => a.f - b.f);
      const current = openSet.shift()!;

      steps.push({
        openSet: openSet.map((n) => n.pos),
        closedSet: [...closedSet],
        current: current.pos,
      });

      if (current.pos[0] === end[0] && current.pos[1] === end[1]) {
        // Reconstruct path
        const path: [number, number][] = [];
        let node: any = current;
        while (node) {
          path.unshift(node.pos);
          node = openSet.find(
            (n) =>
              n.pos[0] === node.parent?.[0] && n.pos[1] === node.parent?.[1],
          ) || { pos: node.parent, parent: null };
          if (!node.parent) break;
        }
        return { steps, path };
      }

      closedSet.push(current.pos);
      visited.add(`${current.pos[0]},${current.pos[1]}`);

      // Check neighbors
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
        if (maze.grid[x][y] === 1) continue; // Wall
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

    return { steps, path: [] };
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
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-white">
            🤖 Điều hướng Robot 3D
          </h3>
          <div className="text-sm text-gray-300">
            Cấp độ {currentLevel + 1}/{gameData.mazes.length}
          </div>
        </div>
        <h4 className="text-lg text-cyan-400 mb-2">{maze.name}</h4>
        <p className="text-gray-300">
          Lập trình robot thông minh di chuyển từ vị trí xuất phát 🟢 đến đích
          🎯 sử dụng thuật toán tối ưu
        </p>

        {showAlgorithm && (
          <div className="mt-3 p-3 bg-yellow-900/30 rounded-lg border border-yellow-500/50">
            <div className="text-yellow-300 text-sm">
              <strong>🧠 A* Algorithm đang hoạt động:</strong>
              <div className="mt-1 grid grid-cols-3 gap-2 text-xs">
                <div>🟢 Open Set: {algorithmVisualization.openSet.length}</div>
                <div>
                  🔴 Closed Set: {algorithmVisualization.closedSet.length}
                </div>
                <div>🟡 Optimal Path: {algorithmVisualization.path.length}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-white font-medium">🗺️ Mê cung 3D:</h4>
            <div className="text-xs text-gray-400">
              {maze.grid.length}×{maze.grid[0]?.length} grid
            </div>
          </div>

          <div
            className="inline-block p-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-2xl border border-white/10"
            style={{
              perspective: '1000px',
              transform: 'rotateX(5deg) rotateY(-5deg)',
            }}
          >
            <div
              className="grid gap-1"
              style={{
                gridTemplateColumns: `repeat(${maze.grid[0]?.length || 8}, minmax(0, 1fr))`,
                transform: 'translateZ(20px)',
              }}
            >
              {maze.grid.map((row: number[], i: number) =>
                row.map((cell: number, j: number) => (
                  <div
                    key={`${i}-${j}`}
                    className={getCellStyle(i, j)}
                    title={`Position: (${i}, ${j})`}
                  >
                    {getCellContent(i, j)}
                  </div>
                )),
              )}
            </div>
          </div>

          {pathHistory.length > 0 && (
            <div className="mt-3 text-sm text-gray-400">
              📊 Đường đi: {pathHistory.length} bước | 🎯 Hiệu quả:{' '}
              {Math.round(
                (1 -
                  (pathHistory.length - maze.solution.length) /
                    maze.solution.length) *
                  100,
              )}
              %
            </div>
          )}
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">🎮 Lệnh điều khiển:</h4>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {maze.commands.map((command: string, index: number) => (
              <button
                key={index}
                onClick={() => addCommand(command)}
                disabled={isRunning}
                className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded hover:from-cyan-500/30 hover:to-blue-500/30 transition-all disabled:opacity-50 text-sm font-medium border border-cyan-500/30"
              >
                {command}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <h5 className="text-white text-sm mb-2">
              📋 Chuỗi lệnh ({commands.length}):
            </h5>
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-3 rounded-lg min-h-[50px] text-sm text-gray-300 border border-white/10 max-h-32 overflow-y-auto">
              {commands.length > 0 ? (
                <div className="space-y-1">
                  {commands.map((cmd, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="text-cyan-400 mr-2">{idx + 1}.</span>
                      <span>{cmd}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 italic">Chưa có lệnh nào...</div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={runCommands}
              disabled={isRunning || commands.length === 0}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 disabled:opacity-50 shadow-lg transform hover:scale-105"
            >
              {isRunning ? '🚀 Đang thực thi...' : '▶️ Chạy chương trình'}
            </button>

            <button
              onClick={resetRobot}
              disabled={isRunning}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 disabled:opacity-50"
            >
              🔄 Reset Robot
            </button>

            <button
              onClick={() => setShowAlgorithm(!showAlgorithm)}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-200"
            >
              {showAlgorithm ? '🔍 Ẩn thuật toán' : '🧠 Hiển thị A*'}
            </button>
          </div>

          <div className="mt-4 text-xs text-gray-400 space-y-1">
            <div>
              💡 <strong>Mẹo:</strong> Sử dụng &quot;🤖 A* Algorithm&quot; để
              xem đường đi tối ưu
            </div>
            <div>
              🎯 <strong>Mục tiêu:</strong> Hoàn thành với ít bước nhất để được
              điểm cao
            </div>
            <div>
              ⚡ <strong>Điểm số:</strong> {score} | Cấp độ hiện tại:{' '}
              {currentLevel + 1}
            </div>
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

// Placeholder components for other games
function BlockchainExplorerGame({ onComplete, timeLeft, onRestart }: any) {
  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">Blockchain Explorer</h3>
      <p className="text-gray-300 mb-6">
        Khám phá cách thức hoạt động của blockchain...
      </p>
      <button
        onClick={() => onComplete(true, 50)}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium"
      >
        Hoàn thành
      </button>
    </div>
  );
}

function ClimateModelingGame({ onComplete, timeLeft, onRestart }: any) {
  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">Mô hình khí hậu</h3>
      <p className="text-gray-300 mb-6">
        Tìm hiểu về tác động của biến đổi khí hậu...
      </p>
      <button
        onClick={() => onComplete(true, 50)}
        className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-6 rounded-lg font-medium"
      >
        Hoàn thành
      </button>
    </div>
  );
}

function CybersecurityDefenseGame({ onComplete, timeLeft, onRestart }: any) {
  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">
        Phòng thủ An ninh mạng
      </h3>
      <p className="text-gray-300 mb-6">
        Học cách bảo vệ hệ thống khỏi các cuộc tấn công...
      </p>
      <button
        onClick={() => onComplete(true, 50)}
        className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 px-6 rounded-lg font-medium"
      >
        Hoàn thành
      </button>
    </div>
  );
}

function DataVisualizationGame({ onComplete, timeLeft, onRestart }: any) {
  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">
        Trực quan hóa dữ liệu
      </h3>
      <p className="text-gray-300 mb-6">
        Tạo các biểu đồ và trực quan hóa dữ liệu...
      </p>
      <button
        onClick={() => onComplete(true, 50)}
        className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium"
      >
        Hoàn thành
      </button>
    </div>
  );
}

function SpaceExplorationGame({ onComplete, timeLeft, onRestart }: any) {
  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">Khám phá Vũ trụ</h3>
      <p className="text-gray-300 mb-6">
        Lên kế hoạch cho các sứ mệnh không gian...
      </p>
      <button
        onClick={() => onComplete(true, 50)}
        className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-6 rounded-lg font-medium"
      >
        Hoàn thành
      </button>
    </div>
  );
}

function NeuralNetworkBuilderGame({ onComplete, timeLeft, onRestart }: any) {
  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">
        Xây dựng mạng Neural
      </h3>
      <p className="text-gray-300 mb-6">
        Thiết kế và huấn luyện mạng neural...
      </p>
      <button
        onClick={() => onComplete(true, 50)}
        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-6 rounded-lg font-medium"
      >
        Hoàn thành
      </button>
    </div>
  );
}

function ChemistryLabGame({ onComplete, timeLeft, onRestart }: any) {
  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">
        Phòng thí nghiệm Hóa học
      </h3>
      <p className="text-gray-300 mb-6">
        Thực hiện các thí nghiệm hóa học an toàn...
      </p>
      <button
        onClick={() => onComplete(true, 50)}
        className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium"
      >
        Hoàn thành
      </button>
    </div>
  );
}

function BiologyEcosystemGame({ onComplete, timeLeft, onRestart }: any) {
  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">
        Hệ sinh thái Sinh học
      </h3>
      <p className="text-gray-300 mb-6">
        Khám phá chuỗi thức ăn và hệ sinh thái...
      </p>
      <button
        onClick={() => onComplete(true, 50)}
        className="w-full bg-gradient-to-r from-lime-500 to-green-500 text-white py-3 px-6 rounded-lg font-medium"
      >
        Hoàn thành
      </button>
    </div>
  );
}

function HistoryTimelineGame({ onComplete, timeLeft, onRestart }: any) {
  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">
        Dòng thời gian Lịch sử
      </h3>
      <p className="text-gray-300 mb-6">
        Sắp xếp các sự kiện lịch sử theo thứ tự...
      </p>
      <button
        onClick={() => onComplete(true, 50)}
        className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 px-6 rounded-lg font-medium"
      >
        Hoàn thành
      </button>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 3D Visualization */}
        <div>
          <h4 className="text-white font-medium mb-3">🎮 Môi trường 3D:</h4>
          <div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 relative overflow-hidden"
            style={{ height: '400px', perspective: '1000px' }}
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

                    const scale = 20; // Pixel size per grid unit
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
                          left: `${xOffset + zOffset * 0.5}px`,
                          top: `${yOffset - zOffset * 0.5}px`,
                          transformOrigin: 'center center',
                          fontSize: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: isRobot ? 100 : isGoal ? 90 : 10,
                        }}
                      >
                        {content}
                      </div>
                    );
                  }),
                ),
              )}
            </div>

            {/* Controls Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="grid grid-cols-3 gap-2 mb-2">
                <button
                  onClick={() => moveRobot('y+')}
                  disabled={isMoving}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded text-sm disabled:opacity-50"
                >
                  ⬆️ Y+
                </button>
                <button
                  onClick={() => moveRobot('z-')}
                  disabled={isMoving}
                  className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded text-sm disabled:opacity-50"
                >
                  🔺 Z-
                </button>
                <button
                  onClick={() => moveRobot('z+')}
                  disabled={isMoving}
                  className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded text-sm disabled:opacity-50"
                >
                  🔻 Z+
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => moveRobot('y-')}
                  disabled={isMoving}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded text-sm disabled:opacity-50"
                >
                  ⬇️ Y-
                </button>
                <button
                  onClick={() => moveRobot('x-')}
                  disabled={isMoving}
                  className="bg-green-600 hover:bg-green-700 text-white p-2 rounded text-sm disabled:opacity-50"
                >
                  ⬅️ X-
                </button>
                <button
                  onClick={() => moveRobot('x+')}
                  disabled={isMoving}
                  className="bg-green-600 hover:bg-green-700 text-white p-2 rounded text-sm disabled:opacity-50"
                >
                  ➡️ X+
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Controls and Info */}
        <div>
          <h4 className="text-white font-medium mb-3">🎛️ Điều khiển:</h4>

          {/* Algorithm Selection */}
          <div className="mb-4">
            <label className="text-white text-sm mb-2 block">Thuật toán:</label>
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
          <div className="space-y-2 mb-4">
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

          {/* Game Stats */}
          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
            <h5 className="text-white font-medium mb-2">📊 Thống kê:</h5>
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
                <span>Thời gian còn lại:</span>
                <span className="text-red-400">{Math.max(0, timeLeft)}s</span>
              </div>
            </div>
          </div>

          {/* Level Progress */}
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg p-4">
            <h5 className="text-white font-medium mb-2">🎯 Tiến độ:</h5>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentLevel + 1) / (gameData?.levels?.length || 1)) * 100}%`,
                }}
              />
            </div>
            <p className="text-gray-300 text-sm">
              Cấp độ {currentLevel + 1} / {gameData?.levels?.length || 1}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
