'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, BookOpen, Hash, GamepadIcon, PenTool, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { getAllModules } from '@/data/module.registry';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';
import { ModuleData, BlogMetadata } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';
import { debounce } from '@/utils/debounce';
import { enhancedVietnameseSearch } from '@/utils/vietnameseSearch';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'module' | 'lesson' | 'game' | 'blog';
  url: string;
  category?: string;
  moduleId?: string;
  score: number;
  duration?: string;
  difficulty?: string;
  author?: string;
  date?: string;
}

interface SearchPageClientProps {
  initialQuery?: string;
  initialCategory?: string;
  initialType?: string;
  blogPosts: BlogMetadata[];
}

const RESULTS_PER_PAGE = 12;

export default function SearchPageClient({
  initialQuery = '',
  initialCategory,
  initialType,
  blogPosts,
}: SearchPageClientProps) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeType, setActiveType] = useState<'all' | 'module' | 'lesson' | 'game' | 'blog'>(
    (initialType as 'all' | 'module' | 'lesson' | 'game' | 'blog') || 'all',
  );
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || 'all');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // Load search history
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('k2ai-search-history');
      if (saved) {
        setSearchHistory(JSON.parse(saved));
      }
    }
  }, []);

  // Initialize query from URL ?q= when present
  useEffect(() => {
    const q = searchParams?.get('q') || '';
    if (q && q !== query) {
      setQuery(q);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Enhanced fuzzy search with Vietnamese support
  const fuzzyMatch = useCallback((searchTerm: string, text: string): number => {
    if (!searchTerm || !text) return 0;

    const search = searchTerm.toLowerCase().trim();
    const target = text.toLowerCase();

    // Use enhanced Vietnamese search for better matching
    if (enhancedVietnameseSearch(search, target)) {
      // Exact match gets highest score
      if (target.includes(search)) {
        return target.indexOf(search) === 0 ? 100 : 85; // Prefer matches at start
      }
      return 70; // Vietnamese enhanced match
    }

    // Fallback to character-based fuzzy matching
    let score = 0;
    let searchIndex = 0;

    for (let i = 0; i < target.length && searchIndex < search.length; i++) {
      if (target[i] === search[searchIndex]) {
        score += 2;
        searchIndex++;
      }
    }

    // Bonus for matching word starts
    const words = target.split(/\\s+/);
    words.forEach((word) => {
      if (word.startsWith(search)) {
        score += 20;
      }
    });

    return searchIndex === search.length ? score : 0;
  }, []);

  // Main search function
  const performSearch = useCallback(
    async (searchTerm: string) => {
      if (searchTerm.trim().length < 2) {
        setResults([]);
        setFilteredResults([]);
        return;
      }

      setIsLoading(true);
      const searchResults: SearchResult[] = [];

      try {
        // Get all data sources
        const allModules = getAllModules();
        // blogPosts is passed as prop from server component

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
              category: Array.isArray(moduleData.category) ? moduleData.category.join(', ') : moduleData.category,
              score,
              duration: moduleData.duration,
              difficulty: moduleData.level,
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
                  duration: lesson.duration,
                  difficulty: lesson.difficulty,
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
              difficulty: game.difficulty,
            });
          }
        });

        // Search blog posts
        blogPosts.forEach((post) => {
          const titleScore = fuzzyMatch(searchTerm, post.title);
          const descScore = fuzzyMatch(searchTerm, post.description || '');
          const score = Math.max(titleScore, descScore * 0.7);

          if (score > 0) {
            searchResults.push({
              id: post.slug,
              title: post.title,
              description: post.description || '',
              type: 'blog',
              url: `/blog/${post.slug}`,
              category: post.category,
              score,
              author: post.author,
              date: post.date,
            });
          }
        });

        // Sort by score
        const sortedResults = searchResults.sort((a, b) => b.score - a.score);
        setResults(sortedResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    [fuzzyMatch, blogPosts],
  );

  // Debounced search
  const debouncedSearch = useMemo(() => debounce(performSearch, 300), [performSearch]);

  // Effect for initial search and query changes
  useEffect(() => {
    if (query.length >= 2) {
      debouncedSearch(query);
    } else {
      setResults([]);
      setFilteredResults([]);
    }
    return () => debouncedSearch.cancel();
  }, [query, debouncedSearch]);

  // Filter results by type and category
  useEffect(() => {
    let filtered = results;

    // Filter by type
    if (activeType !== 'all') {
      filtered = filtered.filter((result) => result.type === activeType);
    }

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter((result) => result.category?.toLowerCase().includes(activeCategory.toLowerCase()));
    }

    setFilteredResults(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [results, activeType, activeCategory]);

  // Save search to history
  const saveToHistory = useCallback(
    (searchTerm: string) => {
      if (searchTerm.trim().length < 2) return;

      const newHistory = [searchTerm, ...searchHistory.filter((item) => item !== searchTerm)].slice(0, 10);
      setSearchHistory(newHistory);

      if (typeof window !== 'undefined') {
        localStorage.setItem('k2ai-search-history', JSON.stringify(newHistory));
      }
    },
    [searchHistory],
  );

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      saveToHistory(query);
      performSearch(query);
    }
  };

  // Get unique categories from results
  const categories = useMemo(() => {
    const cats = new Set(results.map((result) => result.category).filter(Boolean));
    return Array.from(cats).sort();
  }, [results]);

  // Pagination
  const totalPages = Math.ceil(filteredResults.length / RESULTS_PER_PAGE);
  const paginatedResults = filteredResults.slice((currentPage - 1) * RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE);

  // Get type icon
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

  // Get type label
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'module':
        return 'Khóa học';
      case 'lesson':
        return 'Bài học';
      case 'game':
        return 'Trò chơi';
      case 'blog':
        return 'Blog';
      default:
        return 'Khác';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tìm Kiếm K2AiHub</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá hàng ngàn khóa học, bài học, trò chơi giáo dục và nội dung blog chất lượng cao
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Tìm kiếm khóa học, bài học, trò chơi..."
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                autoFocus
              />
            </div>
          </form>

          {/* Search History */}
          {query.length < 2 && searchHistory.length > 0 && (
            <div className="max-w-2xl mx-auto mt-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-500">Tìm kiếm gần đây:</span>
                {searchHistory.slice(0, 5).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(item)}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <Clock className="w-3 h-3 inline mr-1" />
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        {results.length > 0 && (
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            {/* Type Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 self-center">Loại:</span>
              {(['all', 'module', 'lesson', 'game', 'blog'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                    activeType === type
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {type === 'all' ? 'Tất cả' : getTypeLabel(type)}
                  {type !== 'all' && (
                    <span className="ml-1 text-xs opacity-75">({results.filter((r) => r.type === type).length})</span>
                  )}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 self-center">Danh mục:</span>
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                    activeCategory === 'all'
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Tất cả
                </button>
                {categories.slice(0, 5).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category || '')}
                    className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                      activeCategory === category
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Đang tìm kiếm...</p>
          </div>
        )}

        {/* Results Count */}
        {!isLoading && query.length >= 2 && (
          <div className="mb-6">
            <p className="text-gray-600">
              Tìm thấy <span className="font-semibold text-gray-900">{filteredResults.length}</span> kết quả
              {query && (
                <span>
                  {' '}
                  cho &ldquo;<span className="font-semibold text-blue-600">{query}</span>&rdquo;
                </span>
              )}
            </p>
          </div>
        )}

        {/* Results Grid */}
        {!isLoading && paginatedResults.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedResults.map((result) => (
              <Link
                key={`${result.type}-${result.id}`}
                href={result.url}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(result.type)}
                    <span className="text-sm font-medium text-blue-600">{getTypeLabel(result.type)}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {result.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{result.description}</p>

                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  {result.category && <span className="px-2 py-1 bg-gray-100 rounded">{result.category}</span>}
                  {result.duration && <span className="px-2 py-1 bg-gray-100 rounded">{result.duration}</span>}
                  {result.difficulty && <span className="px-2 py-1 bg-gray-100 rounded">{result.difficulty}</span>}
                  {result.author && <span className="px-2 py-1 bg-gray-100 rounded">{result.author}</span>}
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 text-sm rounded ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && query.length >= 2 && filteredResults.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Không tìm thấy kết quả</h3>
            <p className="text-gray-600 mb-6">Hãy thử với từ khóa khác hoặc kiểm tra chính tả.</p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>💡 Gợi ý tìm kiếm:</p>
              <p>
                • Thử các từ khóa như &ldquo;AI&rdquo;, &ldquo;Python&rdquo;, &ldquo;Marketing&rdquo;,
                &ldquo;Game&rdquo;
              </p>
              <p>• Sử dụng từ khóa tiếng Việt: &ldquo;trí tuệ nhân tạo&rdquo;, &ldquo;lập trình&rdquo;</p>
              <p>• Tìm kiếm theo chủ đề: &ldquo;STEM&rdquo;, &ldquo;Công nghệ&rdquo;, &ldquo;Giáo dục&rdquo;</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && query.length < 2 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Bắt đầu tìm kiếm</h3>
            <p className="text-gray-600">Nhập ít nhất 2 ký tự để bắt đầu tìm kiếm nội dung học tập.</p>
          </div>
        )}
      </div>
    </div>
  );
}
