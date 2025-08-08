'use client';

import { useState } from 'react';
import { Play, Trophy, Target, Brain, Zap, Star } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  EducationalGame,
  EDUCATIONAL_GAMES_DATA,
} from '@/data/educationalGames';

// Custom hook for game management
export function useEducationalGames() {
  const [completedGames, setCompletedGames] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('k2ai_completed_games');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const markGameCompleted = (gameId: string, score?: number) => {
    if (!completedGames.includes(gameId)) {
      const newCompleted = [...completedGames, gameId];
      setCompletedGames(newCompleted);
      localStorage.setItem(
        'k2ai_completed_games',
        JSON.stringify(newCompleted),
      );

      // Track game completion for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'game_complete', {
          event_category: 'engagement',
          event_label: gameId,
          value: score || 1,
        });
      }
    }
  };

  const getGamesForModule = (moduleType: string): EducationalGame[] => {
    return EDUCATIONAL_GAMES_DATA.filter(
      (game) => game.moduleType === moduleType,
    );
  };

  const getRecommendedGames = (limit = 6): EducationalGame[] => {
    return EDUCATIONAL_GAMES_DATA.filter(
      (game) => !completedGames.includes(game.id),
    )
      .sort((a, b) => b.points - a.points)
      .slice(0, limit);
  };

  return {
    completedGames,
    markGameCompleted,
    getGamesForModule,
    getRecommendedGames,
  };
}

// Game card component
export function GameCard({
  game,
  onPlay,
}: {
  game: EducationalGame;
  onPlay?: () => void;
}) {
  const { completedGames } = useEducationalGames();
  const router = useRouter();
  const isCompleted = completedGames.includes(game.id);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Cơ bản':
        return 'bg-green-500/20 text-green-400';
      case 'Trung bình':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Nâng cao':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-blue-500/20 text-blue-400';
    }
  };

  const getCategoryIcon = (category: EducationalGame['category']) => {
    switch (category) {
      case 'quiz':
        return <Brain className="w-4 h-4" />;
      case 'puzzle':
        return <Target className="w-4 h-4" />;
      case 'simulation':
        return <Zap className="w-4 h-4" />;
      case 'coding':
        return <Play className="w-4 h-4" />;
      case 'memory':
        return <Star className="w-4 h-4" />;
      case 'strategy':
        return <Trophy className="w-4 h-4" />;
      default:
        return <Play className="w-4 h-4" />;
    }
  };

  const handlePlay = () => {
    if (game.isInternal) {
      // Handle internal game
      if (onPlay) {
        onPlay();
      } else if (typeof window !== 'undefined') {
        router.push(`/games/${game.id}`);
      }
    } else if (game.url) {
      // Open external game
      window.open(game.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`bg-gradient-to-r ${game.color} rounded-xl p-1 ${isCompleted ? 'opacity-75' : ''}`}
    >
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 h-full">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">{game.icon}</span>
          {isCompleted && (
            <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
              ✓ Hoàn thành
            </div>
          )}
        </div>

        <h3 className="text-lg font-bold text-white mb-2">{game.title}</h3>
        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
          {game.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}
          >
            {game.difficulty}
          </span>
          <span className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs font-medium flex items-center">
            {getCategoryIcon(game.category)}
            <span className="ml-1 capitalize">{game.category}</span>
          </span>
        </div>

        <div className="text-xs text-gray-400 mb-3">
          ⏱️ {game.estimatedTime}
          {game.isInternal && game.points > 0 && (
            <span className="ml-2">🏆 {game.points} điểm</span>
          )}
        </div>

        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-1">Kỹ năng:</div>
          <div className="flex flex-wrap gap-1">
            {game.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="bg-white/5 text-gray-300 px-2 py-0.5 rounded text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={handlePlay}
          className="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg py-2 px-4 transition-colors duration-200 flex items-center justify-center font-medium"
        >
          <Play className="w-4 h-4 mr-2" />
          {game.isInternal ? 'Chơi ngay' : 'Mở game'}
        </button>
      </div>
    </div>
  );
}

// Games showcase component
export function EducationalGamesShowcase({
  moduleType,
  limit = 6,
}: {
  moduleType?: string;
  limit?: number;
}) {
  const { getGamesForModule, getRecommendedGames } = useEducationalGames();

  const games = moduleType
    ? getGamesForModule(moduleType).slice(0, limit)
    : getRecommendedGames(limit);

  if (games.length === 0) {
    return null;
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white flex items-center">
          <Trophy className="w-6 h-6 mr-3 text-yellow-400" />
          {moduleType ? 'Trò chơi học tập' : 'Trò chơi đề xuất'}
        </h3>
        {!moduleType && (
          <Link
            href="/games"
            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200 flex items-center"
          >
            Xem tất cả
            <Play className="w-4 h-4 ml-1" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onPlay={() => {
              // Handle internal game play
              console.log(`Playing game: ${game.id}`);
            }}
          />
        ))}
      </div>

      {moduleType && (
        <div className="mt-6 text-center">
          <Link
            href="/games"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
          >
            Xem tất cả trò chơi
            <Play className="w-5 h-5 ml-2" />
          </Link>
        </div>
      )}
    </div>
  );
}

// Simple internal quiz game component
export function QuizGame({
  questions,
  onComplete,
}: {
  questions: Array<{
    question: string;
    options: string[];
    correct: number;
  }>;
  onComplete: (score: number) => void;
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);

    setTimeout(() => {
      if (answerIndex === questions[currentQuestion].correct) {
        setScore(score + 1);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setIsComplete(true);
        onComplete(Math.round((score / questions.length) * 100));
      }
    }, 1000);
  };

  if (isComplete) {
    return (
      <div className="text-center">
        <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
        <h3 className="text-2xl font-bold text-white mb-2">Hoàn thành!</h3>
        <p className="text-gray-300 mb-4">
          Điểm số: {score}/{questions.length} (
          {Math.round((score / questions.length) * 100)}%)
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>
            Câu {currentQuestion + 1}/{questions.length}
          </span>
          <span>Điểm: {score}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">
          {questions[currentQuestion].question}
        </h3>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                selectedAnswer === index
                  ? index === questions[currentQuestion].correct
                    ? 'bg-green-500/20 border-green-500/50 text-green-300'
                    : 'bg-red-500/20 border-red-500/50 text-red-300'
                  : selectedAnswer !== null &&
                      index === questions[currentQuestion].correct
                    ? 'bg-green-500/20 border-green-500/50 text-green-300'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
