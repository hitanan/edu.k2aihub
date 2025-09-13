import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, X, Clock, Hash, BookOpen, GamepadIcon, PenTool } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAllModules } from '@/data/module.registry';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';
import { debounce } from '@/utils/debounce';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'module' | 'lesson' | 'game' | 'blog';
  url: string;
  category?: string;
  moduleId?: string;
  score: number;
}

interface AdvancedSearchProps {
  isOpen: boolean;
  onClose: () => void;
  placeholder?: string;
}

const SEARCH_HISTORY_KEY = 'k2ai-search-history';
const MAX_HISTORY_ITEMS = 10;
const MAX_RESULTS_PER_TYPE = 5;

export default function AdvancedSearch({
  isOpen,
  onClose,
  placeholder = 'Tìm kiếm modules, bài học, games...',
}: AdvancedSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [activeCategory, setActiveCategory] = useState<'all' | 'module' | 'lesson' | 'game' | 'blog'>('all');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Load search history from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedHistory = localStorage.getItem(SEARCH_HISTORY_KEY);
      if (savedHistory) {
        setSearchHistory(JSON.parse(savedHistory));
      }
    }
  }, []);

  // Save search to history
  const saveToHistory = useCallback(
    (searchTerm: string) => {
      if (searchTerm.trim().length < 2) return;

      const newHistory = [searchTerm, ...searchHistory.filter((item) => item !== searchTerm)].slice(
        0,
        MAX_HISTORY_ITEMS,
      );
      setSearchHistory(newHistory);

      if (typeof window !== 'undefined') {
        localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(newHistory));
      }
    },
    [searchHistory],
  );

  // Fuzzy search function
  const fuzzyMatch = useCallback((searchTerm: string, text: string): number => {
    const search = searchTerm.toLowerCase();
    const target = text.toLowerCase();

    // Exact match gets highest score
    if (target.includes(search)) {
      return 100;
    }

    // Calculate fuzzy score based on character matches
    let score = 0;
    let searchIndex = 0;

    for (let i = 0; i < target.length && searchIndex < search.length; i++) {
      if (target[i] === search[searchIndex]) {
        score += 2;
        searchIndex++;
      } else if (target[i] === search[searchIndex - 1]) {
        score += 1;
      }
    }

    // Bonus for matching word starts
    const words = target.split(/\s+/);
    words.forEach((word) => {
      if (word.startsWith(search)) {
        score += 20;
      }
    });

    return searchIndex === search.length ? score : 0;
  }, []);

  // Search function
  const performSearch = useCallback(
    async (searchTerm: string) => {
      if (searchTerm.trim().length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      const searchResults: SearchResult[] = [];

      try {
        // Get all modules
        const allModules = getAllModules();

        // Search modules
        allModules.forEach((moduleData: ModuleData) => {
          const titleScore = fuzzyMatch(searchTerm, moduleData.title);
          const descScore = fuzzyMatch(searchTerm, moduleData.description || '');
          const score = Math.max(titleScore, descScore * 0.7);

          if (score > 0) {
            searchResults.push({
              id: moduleData.id,
              title: moduleData.title,
              description: moduleData.description || '',
              type: 'module',
              url: `/learning/${moduleData.id}`,
              score,
            });
          }

          // Search lessons within modules
          if (moduleData.lessons) {
            moduleData.lessons.forEach((lesson: BaseLessonData) => {
              const lessonTitleScore = fuzzyMatch(searchTerm, lesson.title);
              const lessonDescScore = fuzzyMatch(searchTerm, lesson.description || '');
              const lessonScore = Math.max(lessonTitleScore, lessonDescScore * 0.7);

              if (lessonScore > 0) {
                searchResults.push({
                  id: lesson.id,
                  title: lesson.title,
                  description: lesson.description || '',
                  type: 'lesson',
                  url: `/learning/${moduleData.id}/${lesson.id}`,
                  moduleId: moduleData.id,
                  category: moduleData.title,
                  score: lessonScore,
                });
              }
            });
          }
        });

        // Search games
        EDUCATIONAL_GAMES_DATA.forEach((game) => {
          const titleScore = fuzzyMatch(searchTerm, game.title);
          const descScore = fuzzyMatch(searchTerm, game.description);
          const score = Math.max(titleScore, descScore * 0.7);

          if (score > 0) {
            searchResults.push({
              id: game.id,
              title: game.title,
              description: game.description,
              type: 'game',
              url: `/games/${game.id}`,
              category: Array.isArray(game.category) ? game.category.join(', ') : game.category,
              score,
            });
          }
        });

        // Sort by score and limit results per type
        const sortedResults = searchResults.sort((a, b) => b.score - a.score);

        // Group by type and limit
        const groupedResults: SearchResult[] = [];
        const typeCounts = { module: 0, lesson: 0, game: 0, blog: 0 };

        sortedResults.forEach((result) => {
          if (activeCategory === 'all' || result.type === activeCategory) {
            if (typeCounts[result.type] < MAX_RESULTS_PER_TYPE) {
              groupedResults.push(result);
              typeCounts[result.type]++;
            }
          }
        });

        setResults(groupedResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    [fuzzyMatch, activeCategory],
  );

  // Debounced search
  const debouncedSearch = useMemo(() => debounce(performSearch, 300), [performSearch]);

  useEffect(() => {
    debouncedSearch(query);
    return () => debouncedSearch.cancel();
  }, [query, debouncedSearch]);

  const handleResultClick = useCallback(
    (result: SearchResult) => {
      saveToHistory(query);
      router.push(result.url);
      onClose();
    },
    [saveToHistory, query, router, onClose],
  );

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > -1 ? prev - 1 : -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleResultClick(results[selectedIndex]);
          } else if (query.trim()) {
            saveToHistory(query);
            router.push(`/search?q=${encodeURIComponent(query)}`);
            onClose();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, query, router, onClose, saveToHistory, handleResultClick]);

  const handleHistoryClick = (historyItem: string) => {
    setQuery(historyItem);
    setSelectedIndex(-1);
  };

  const clearHistory = () => {
    setSearchHistory([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(SEARCH_HISTORY_KEY);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'module':
        return <BookOpen className="w-4 h-4" />;
      case 'lesson':
        return <Hash className="w-4 h-4" />;
      case 'game':
        return <GamepadIcon className="w-4 h-4" />;
      case 'blog':
        return <PenTool className="w-4 h-4" />;
      default:
        return <Search className="w-4 h-4" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="flex justify-center pt-20 px-4">
        <div
          className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Header */}
          <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500"
              autoFocus
            />
            {isLoading && (
              <div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full mr-2" />
            )}
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                activeCategory === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
              }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setActiveCategory('module')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                activeCategory === 'module'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
              }`}
            >
              Modules
            </button>
            <button
              onClick={() => setActiveCategory('lesson')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                activeCategory === 'lesson'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
              }`}
            >
              Bài học
            </button>
            <button
              onClick={() => setActiveCategory('game')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                activeCategory === 'game'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
              }`}
            >
              Games
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.trim().length < 2 && searchHistory.length > 0 && (
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Tìm kiếm gần đây
                  </h3>
                  <button onClick={clearHistory} className="text-xs text-gray-500 hover:text-red-500 transition-colors">
                    Xóa tất cả
                  </button>
                </div>
                <div className="space-y-1">
                  {searchHistory.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleHistoryClick(item)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {query.trim().length >= 2 && (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {results.length > 0 ? (
                  results.map((result, index) => (
                    <Link
                      key={`${result.type}-${result.id}`}
                      href={result.url}
                      onClick={() => handleResultClick(result)}
                      className={`block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                        selectedIndex === index ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-gray-400">{getTypeIcon(result.type)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                              {result.title}
                            </h4>
                            <span
                              className={`px-2 py-0.5 text-xs rounded-full ${
                                result.type === 'module'
                                  ? 'bg-blue-100 text-blue-800'
                                  : result.type === 'lesson'
                                    ? 'bg-green-100 text-green-800'
                                    : result.type === 'game'
                                      ? 'bg-purple-100 text-purple-800'
                                      : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {result.type === 'module'
                                ? 'Module'
                                : result.type === 'lesson'
                                  ? 'Bài học'
                                  : result.type === 'game'
                                    ? 'Game'
                                    : 'Blog'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{result.description}</p>
                          {result.category && (
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">trong {result.category}</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                    <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>Không tìm thấy kết quả cho &quot;{query}&quot;</p>
                    <p className="text-sm mt-1">Thử tìm kiếm với từ khóa khác</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>↑↓ để điều hướng, Enter để chọn, Esc để thoát</span>
              {results.length > 0 && <span>{results.length} kết quả</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
