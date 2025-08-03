'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Clock, Star, ChevronRight, Filter } from 'lucide-react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { moduleNavigation } from '@/data/moduleNavigation';

// Transform moduleNavigation data to match AllLearningPageClient format
const allLearningModules = moduleNavigation
  .filter(module => !module.coreModule) // Exclude core modules (City, AI)
  .map(module => ({
    id: module.id,
    title: module.title,
    subtitle: module.subtitle || '',
    description: module.description,
    level: module.level || module.difficulty,
    duration: module.duration || module.totalDuration,
    href: module.href || `/learning/${module.id}`,
    color: module.color,
    category: module.category, // Now supports both string and string[]
    lessons: module.lessons.length,
    features: module.features || [],
    icon: module.icon,
    tags: module.tags || []
  }));

// Helper function to get all categories for a module
const getModuleCategories = (module: { category: string | string[] }): string[] => {
  return Array.isArray(module.category) ? module.category : [module.category];
};

// Helper function to check if module belongs to category
const moduleInCategory = (module: { category: string | string[] }, category: string): boolean => {
  const moduleCategories = getModuleCategories(module);
  return moduleCategories.includes(category);
};

// Count modules per category (supporting multi-category)
const countModulesInCategory = (category: string): number => {
  return allLearningModules.filter(module => moduleInCategory(module, category)).length;
};

const categories = {
  trending: { title: '🔥 Xu Hướng 2025', count: countModulesInCategory('trending') },
  vietnamese: { title: '🇻🇳 Thị Trường Việt Nam', count: countModulesInCategory('vietnamese') },
  professional: { title: '💼 Kỹ Năng Nghề Nghiệp', count: countModulesInCategory('professional') },
  creative: { title: '🎨 Sáng Tạo & Công Nghệ', count: countModulesInCategory('creative') },
  security: { title: '🔒 An Ninh Mạng', count: countModulesInCategory('security') },
  science: { title: '🧬 Khoa Học Đời Sống', count: countModulesInCategory('science') },
  programming: { title: '💻 Lập Trình', count: countModulesInCategory('programming') },
  stem: { title: '🚀 STEM & Hardware', count: countModulesInCategory('stem') }
};

const levels = ['Tất cả', 'Cơ bản', 'Trung bình', 'Nâng cao'];

export default function AllLearningPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  // Initialize state from URL parameters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('Tất cả');
  const [sortBy, setSortBy] = useState('popular'); // popular, duration, newest

  // Effect to read URL parameters on mount
  useEffect(() => {
    if (!searchParams) return;
    
    const categoryFromUrl = searchParams.get('category');
    const levelFromUrl = searchParams.get('level');
    const searchFromUrl = searchParams.get('search');
    const sortFromUrl = searchParams.get('sort');

    if (categoryFromUrl && Object.keys(categories).includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
    if (levelFromUrl && levels.includes(levelFromUrl)) {
      setSelectedLevel(levelFromUrl);
    }
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    }
    if (sortFromUrl && ['popular', 'duration', 'newest'].includes(sortFromUrl)) {
      setSortBy(sortFromUrl);
    }
  }, [searchParams]);

  // Function to update URL when filters change
  const updateURL = (newCategory: string, newLevel: string, newSearch: string, newSort: string) => {
    if (!pathname) return;
    
    const params = new URLSearchParams();
    
    if (newCategory !== 'all') params.set('category', newCategory);
    if (newLevel !== 'Tất cả') params.set('level', newLevel);
    if (newSearch) params.set('search', newSearch);
    if (newSort !== 'popular') params.set('sort', newSort);
    
    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.replace(newUrl, { scroll: false });
  };

  // Updated handlers to sync with URL
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateURL(category, selectedLevel, searchTerm, sortBy);
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    updateURL(selectedCategory, level, searchTerm, sortBy);
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    updateURL(selectedCategory, selectedLevel, search, sortBy);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    updateURL(selectedCategory, selectedLevel, searchTerm, sort);
  };

  // Filter modules based on search and filters
  const filteredModules = allLearningModules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || moduleInCategory(module, selectedCategory);
    const matchesLevel = selectedLevel === 'Tất cả' || module.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Sort modules
  const sortedModules = [...filteredModules].sort((a, b) => {
    switch (sortBy) {
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      case 'newest':
        return b.id.localeCompare(a.id);
      default: // popular
        return b.lessons - a.lessons;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              📚 Tất Cả Khóa Học
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Khám phá <strong className="text-blue-300">{allLearningModules.length} khóa học chuyên sâu</strong> từ 
              Vietnamese business, AI technology đến programming và science. 
              Tất cả miễn phí và được thiết kế cho thị trường Việt Nam.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm khóa học, kỹ năng hoặc công nghệ..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
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
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-white font-medium">Danh mục:</span>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="bg-gray-800/80 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
              >
                <option value="all" className="bg-gray-800 text-white">Tất cả danh mục</option>
                {Object.entries(categories).map(([key, cat]) => (
                  <option key={key} value={key} className="bg-gray-800 text-white">{cat.title}</option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div className="flex items-center space-x-3">
              <span className="text-white font-medium">Cấp độ:</span>
              <select
                value={selectedLevel}
                onChange={(e) => handleLevelChange(e.target.value)}
                className="bg-gray-800/80 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
              >
                {levels.map(level => (
                  <option key={level} value={level} className="bg-gray-800 text-white">{level}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="flex items-center space-x-3">
              <span className="text-white font-medium">Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="bg-gray-800/80 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
              >
                <option value="popular" className="bg-gray-800 text-white">Phổ biến</option>
                <option value="duration" className="bg-gray-800 text-white">Thời lượng</option>
                <option value="newest" className="bg-gray-800 text-white">Mới nhất</option>
              </select>
            </div>

            {/* Results count */}
            <div className="ml-auto text-gray-300">
              Tìm thấy <span className="text-blue-300 font-semibold">{filteredModules.length}</span> khóa học
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedModules.map((module) => (
            <Link key={module.id} href={module.href}>
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {module.icon}
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex flex-wrap gap-1">
                      {getModuleCategories(module).slice(0, 2).map((cat, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full text-xs">
                          {categories[cat as keyof typeof categories]?.title.split(' ')[1] || cat}
                        </span>
                      ))}
                      {getModuleCategories(module).length > 2 && (
                        <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full text-xs">
                          +{getModuleCategories(module).length - 2}
                        </span>
                      )}
                    </div>
                    <span className="text-gray-400 text-sm">{module.lessons} bài học</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {module.title}
                  </h3>
                  
                  <p className="text-blue-300 mb-3 font-medium">
                    {module.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                  {module.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded-full text-xs flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    {module.level}
                  </span>
                  <span className="bg-green-500/20 text-green-200 px-2 py-1 rounded-full text-xs flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {module.duration}
                  </span>
                </div>
                
                <div className="space-y-1 mb-6">
                  {module.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                  {module.features.length > 3 && (
                    <div className="text-gray-400 text-sm">
                      +{module.features.length - 3} tính năng khác
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-blue-300 font-semibold group-hover:text-blue-200 transition-colors duration-300">
                  <span>Bắt đầu học</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No results */}
        {filteredModules.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">Không tìm thấy khóa học phù hợp</h3>
            <p className="text-gray-300 mb-6">
              Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để tìm khóa học khác
            </p>
            <button
              onClick={() => {
                handleSearchChange('');
                handleCategoryChange('all');
                handleLevelChange('Tất cả');
                handleSortChange('popular');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>

      {/* Popular Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">🔥 Danh Mục Phổ Biến</h2>
          <p className="text-gray-300">Khám phá theo chủ đề yêu thích</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => {
                handleCategoryChange(key);
                handleSearchChange('');
              }}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-blue-600/20 border-blue-400 text-blue-300'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className="text-2xl mb-2">{category.title.split(' ')[0]}</div>
              <div className="text-sm font-medium mb-1">{category.title.split(' ').slice(1).join(' ')}</div>
              <div className="text-xs text-gray-400">{category.count} khóa học</div>
            </button>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            🎯 Chưa biết bắt đầu từ đâu?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Hãy bắt đầu với các khóa học cơ bản hoặc khám phá theo lĩnh vực yêu thích!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/city"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            >
              🌏 Bắt đầu với Địa Lý Việt Nam
            </Link>
            <Link 
              href="/ai"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            >
              🤖 Khám phá AI
            </Link>
            <Link 
              href="/learning/vietnamese-business"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300"
            >
              🏢 Vietnamese Business
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
