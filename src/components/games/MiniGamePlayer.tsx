/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Trophy,
  Clock,
  X,
  ArrowLeft,
  RotateCcw,
  Lightbulb,
} from 'lucide-react';
import { GAME_DATA, GAME_PROGRESS } from '@/data/gameData';
import { EducationalGame } from '@/data/educationalGames';
import { 
  BiologyEcosystemGame, 
  HistoryTimelineGame, 
  ChemistryLabGame,
  RoboticsNavigationGame,
  RobotNavigation3DGame,
  NeuralNetworkBuilderGame,
  SpaceExplorationGame
} from './individual';

interface MiniGameProps {
  game: EducationalGame;
  onComplete: (score: number) => void;
  onExit: () => void;
}

export function MiniGamePlayer({ game, onComplete, onExit }: MiniGameProps) {
  const [currentGameState, setCurrentGameState] = useState<string>('playing');
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [timeLeft, setTimeLeft] = useState<number>(120); // 2 minutes per game
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);

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
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'ai-prompt-challenge':
        return (
          <AIPromptGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'python-coding-puzzle':
        return (
          <PythonCodingGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'arduino-circuit-builder':
        return (
          <ArduinoCircuitGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'stem-experiment-lab':
        return (
          <STEMExperimentGame
            gameData={GAME_DATA[game.id]}
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
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'quantum-basics':
        return (
          <QuantumBasicsGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'blockchain-explorer':
        return (
          <BlockchainExplorerGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'climate-modeling':
        return (
          <ClimateModelingGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'cybersecurity-defense':
        return (
          <CybersecurityDefenseGame
            gameData={GAME_DATA[game.id]}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => setCurrentGameState('playing')}
          />
        );
      case 'data-visualization':
        return (
          <DataVisualizationGame
            gameData={GAME_DATA[game.id]}
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
            gameData={GAME_DATA[game.id]}
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
