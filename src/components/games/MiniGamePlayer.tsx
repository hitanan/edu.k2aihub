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
  SpaceExplorationGame,
  DataVisualizationGame,
  GeographyQuizGame,
  AIPromptGame,
  PythonCodingGame,
  ArduinoCircuitGame
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


