'use client';

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';
import { useEducationalGames, GameCard } from '@/components/games/EducationalGames';
import { PageTracker } from '@/components/gamification/VisitTracker';
import { gameDataExternalPlatforms } from '@/data/games/gameDataExternalPlatforms';
import ExternalGameCard from './ExternalGameCard';
import { GameCardSkeleton } from '@/components/LoadingSpinner';

export default function EducationalGamesMain() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get initial values from URL params
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const { completedGames, isLoaded } = useEducationalGames();

  // Initialize state from URL parameters
  useEffect(() => {
    if (searchParams) {
      const categoryParam = searchParams.get('category');
      const difficultyParam = searchParams.get('difficulty');
      const searchParam = searchParams.get('search');

      if (categoryParam) setSelectedCategory(categoryParam);
      if (difficultyParam) setSelectedDifficulty(difficultyParam);
      if (searchParam) setSearchTerm(searchParam);
    }
  }, [searchParams]);

  // Function to update URL with current filter state
  const updateURL = (newCategory: string, newDifficulty: string, newSearch: string) => {
    const params = new URLSearchParams();

    if (newCategory && newCategory !== 'all') params.set('category', newCategory);
    if (newDifficulty && newDifficulty !== 'all') params.set('difficulty', newDifficulty);
    if (newSearch) params.set('search', newSearch);

    const queryString = params.toString();
    const newUrl = queryString ? `/games?${queryString}` : '/games';

    // Use replace instead of push to avoid creating too many history entries
    router.replace(newUrl, { scroll: false });
  };

  // Handle category change with URL update
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateURL(category, selectedDifficulty, searchTerm);
  };

  // Handle difficulty change with URL update
  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    updateURL(selectedCategory, difficulty, searchTerm);
  };

  // Handle search change with URL update
  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    updateURL(selectedCategory, selectedDifficulty, search);
  };

  // Add loading simulation for better UX
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Simulate loading time

    return () => clearTimeout(loadingTimer);
  }, []);

  // Filter and order games (reverse order to show newest 3D games first)
  const filteredGames = EDUCATIONAL_GAMES_DATA.slice()
    .reverse() // Reverse to show games at bottom of array first (newest first)
    .filter((game) => {
      const matchesSearch =
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (game.skills && game.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())));

      const matchesCategory = selectedCategory === 'all' || game.category.includes(selectedCategory);
      const matchesDifficulty = selectedDifficulty === 'all' || game.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });

  // Statistics
  const totalGames = EDUCATIONAL_GAMES_DATA.length;
  const completedCount = completedGames.length;
  const progressPercentage = Math.round((completedCount / totalGames) * 100);

  const categories = [
    { value: 'all', label: '🎯 Tất cả', count: EDUCATIONAL_GAMES_DATA.length },
    {
      value: 'quiz',
      label: '❓ Quiz',
      count: EDUCATIONAL_GAMES_DATA.filter((g) => g.category.includes('quiz')).length,
    },
    {
      value: 'puzzle',
      label: '🧩 Puzzle',
      count: EDUCATIONAL_GAMES_DATA.filter((g) => g.category.includes('puzzle')).length,
    },
    {
      value: 'simulation',
      label: '🎮 Mô phỏng',
      count: EDUCATIONAL_GAMES_DATA.filter((g) => g.category.includes('simulation')).length,
    },
    {
      value: 'coding',
      label: '💻 Lập trình',
      count: EDUCATIONAL_GAMES_DATA.filter((g) => g.category.includes('coding')).length,
    },
    {
      value: 'memory',
      label: '🧠 Trí nhớ',
      count: EDUCATIONAL_GAMES_DATA.filter((g) => g.category.includes('memory')).length,
    },
    {
      value: 'strategy',
      label: '🎯 Chiến lược',
      count: EDUCATIONAL_GAMES_DATA.filter((g) => g.category.includes('strategy')).length,
    },
    {
      value: '3D',
      label: '🎮 3D',
      count: EDUCATIONAL_GAMES_DATA.filter((g) => g.category.includes('3D')).length,
    },
  ];

  const difficulties = [
    { value: 'all', label: 'Tất cả cấp độ' },
    { value: 'Cơ bản', label: '🟢 Cơ bản' },
    { value: 'Trung bình', label: '🟡 Trung bình' },
    { value: 'Nâng cao', label: '🔴 Nâng cao' },
  ];

  // Show loading skeleton while loading
  if (isLoading || !isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <PageTracker path="/games" title="Trò Chơi Giáo Dục" moduleType="learning" />

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-pink-600/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">🎮 Trò Chơi Giáo Dục</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Khám phá <strong className="text-purple-300">{totalGames} trò chơi học tập</strong> thú vị từ quiz địa
                lý, thử thách AI, puzzle lập trình đến mô phỏng khoa học. Học tập hiệu quả qua trải nghiệm chơi game!
              </p>

              {/* Loading Progress Stats */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-8 bg-gray-600 animate-pulse rounded mx-auto mb-2"></div>
                    <div className="text-sm text-gray-300">Tổng số game</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-600 animate-pulse rounded mx-auto mb-2"></div>
                    <div className="text-sm text-gray-300">Đã hoàn thành</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-8 bg-gray-600 animate-pulse rounded mx-auto mb-2"></div>
                    <div className="text-sm text-gray-300">Tiến độ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">⭐</div>
                    <div className="text-sm text-gray-300">Điểm thưởng</div>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <div className="w-full h-16 bg-gray-700/50 animate-pulse rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
            <div className="flex flex-wrap gap-6 items-center">
              <div className="w-32 h-10 bg-gray-700/50 animate-pulse rounded-lg"></div>
              <div className="w-32 h-10 bg-gray-700/50 animate-pulse rounded-lg"></div>
              <div className="ml-auto w-24 h-6 bg-gray-700/50 animate-pulse rounded"></div>
            </div>
          </div>

          {/* Loading Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <GameCardSkeleton key={index} />
            ))}
          </div>
        </div>

        {/* Loading Message */}
        <div className="text-center py-8">
          <div className="inline-flex items-center text-gray-400">
            <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mr-3"></div>
            Đang tải trò chơi...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <PageTracker path="/games" title="Trò Chơi Giáo Dục" moduleType="learning" />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">🎮 Trò Chơi Giáo Dục</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Khám phá <strong className="text-purple-300">{totalGames} trò chơi học tập</strong> thú vị từ quiz địa lý,
              thử thách AI, puzzle lập trình đến mô phỏng khoa học. Học tập hiệu quả qua trải nghiệm chơi game!
            </p>

            {/* Progress Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">{totalGames}</div>
                  <div className="text-sm text-gray-300">Tổng số game</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{completedCount}</div>
                  <div className="text-sm text-gray-300">Đã hoàn thành</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{progressPercentage}%</div>
                  <div className="text-sm text-gray-300">Tiến độ</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">⭐</div>
                  <div className="text-sm text-gray-300">Điểm thưởng</div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm trò chơi..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
          <div className="flex flex-wrap gap-6 items-center">
            {/* Category Filter */}
            <div className="flex items-center space-x-3">
              <span className="text-white font-medium">Danh mục:</span>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="bg-gray-800/80 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center space-x-3">
              <span className="text-white font-medium">Cấp độ:</span>
              <select
                value={selectedDifficulty}
                onChange={(e) => handleDifficultyChange(e.target.value)}
                className="bg-gray-800/80 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty.value} value={difficulty.value}>
                    {difficulty.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="ml-auto text-white">Tìm thấy {filteredGames.length} trò chơi</div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold text-white mb-2">Không tìm thấy trò chơi</h3>
            <p className="text-gray-400">Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
          </div>
        )}
      </div>

      {/* External Game Platforms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">🌐 Nền tảng Game Giáo dục Bên ngoài</h2>
          <p className="text-gray-300">Khám phá các trang web và ứng dụng game giáo dục hàng đầu thế giới</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameDataExternalPlatforms.map((platform) => (
            <ExternalGameCard key={platform.id} platform={platform} />
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Danh mục phổ biến</h2>
          <p className="text-gray-300">Khám phá các loại trò chơi học tập khác nhau</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(1).map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.value
                  ? 'bg-purple-500/20 border-purple-400 text-purple-300'
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <div className="text-3xl mb-3">{category.label.split(' ')[0]}</div>
              <h3 className="text-lg font-semibold mb-2">{category.label.split(' ').slice(1).join(' ')}</h3>
              <p className="text-sm opacity-80">{category.count} trò chơi</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
