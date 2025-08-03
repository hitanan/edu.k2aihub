'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Home, Globe, Brain, Code, Heart } from 'lucide-react';
import { moduleNavigation } from '@/data/moduleNavigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLearningDropdownOpen, setIsLearningDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  // Improved mouse handlers for dropdown
  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsLearningDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsLearningDropdownOpen(false);
    }, 150);
    setDropdownTimeout(timeout);
  };
  const pathname = usePathname();

  // Core modules - always visible
  const coreModules = [
    { name: 'Trang Chủ', href: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'Địa Lý Việt Nam', href: '/city', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Của Tôi', href: '/ai', icon: <Brain className="w-4 h-4" /> },
    { name: 'Về Chúng Tôi', href: '/about', icon: <Heart className="w-4 h-4" /> },
  ];

  // Learning modules - dynamically generated from moduleNavigation
  const getLearningModulesByCategory = () => {
    const categoryMap: Record<string, { 
      category: string; 
      icon: string; 
      modules: Array<{name: string; href: string; icon: string}> 
    }> = {};
    
    moduleNavigation.forEach(module => {
      if (!module.coreModule && module.href?.startsWith('/learning/')) {
        let categoryKey = module.category;
        if (typeof categoryKey === 'string') {
          categoryKey = [categoryKey];
        }
        const categoryNames: Record<string, string> = {
          'trending': '🚀 2025 Trending',
          'vietnamese': '🇻🇳 Vietnamese Market', 
          'professional': '💼 Professional Skills',
          'creative': '🎨 Creative & Technology',
          'security': '🔒 Security & Science',
          'programming': '💻 Programming',
          'stem': '🔬 STEM Foundation'
        };

        categoryKey.forEach((key) => {
          if (!categoryMap[key]) {
            categoryMap[key] = {
              category: categoryNames[key] || key,
              icon: module.icon,
              modules: []
            };
          }

          categoryMap[key].modules.push({
            name: module.title,
            href: module.href || `/learning/${module.id}`,
            icon: module.icon
          });
        });
      }
    });

    // Limit to 4 modules per category and add "See All" link
    return Object.entries(categoryMap).map(([categoryKey, categoryData]) => ({
      ...categoryData,
      categoryKey,
      modules: categoryData.modules.slice(0, 4), // Limit to 4 modules
      hasMore: categoryData.modules.length > 4, // Check if there are more modules
      totalCount: categoryData.modules.length
    }));
  };

  const learningModules = getLearningModulesByCategory();

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const isLearningActive = () => {
    return pathname?.startsWith('/learning') || false;
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300">
              <span className="text-white font-bold text-sm">K2</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                K2AI
              </span>
              <p className="text-xs text-gray-500 -mt-1">Học tập thông minh</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {/* Core modules */}
            {coreModules.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  isActive(item.href)
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Learning dropdown with improved UX */}
            <div 
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  isLearningActive()
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Code className="w-4 h-4" />
                <span>Learning Modules</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Improved dropdown with proper positioning */}
              {isLearningDropdownOpen && (
                <div className="absolute top-full right-0 w-[90vw] max-w-5xl z-50">
                  {/* Invisible bridge to prevent dropdown from closing */}
                  <div className="h-2 bg-transparent" />
                  
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/50 backdrop-blur-md overflow-hidden">
                    <div className="p-6">
                      {/* Responsive grid layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {learningModules.map((category) => (
                          <div key={category.category} className="space-y-2">
                            <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center justify-between border-b border-gray-100 pb-1">
                              <div className="flex items-center space-x-1">
                                <span className="text-base">{category.icon}</span>
                                <span className="text-xs">{category.category}</span>
                              </div>
                              <span className="text-xs text-gray-500">({category.totalCount})</span>
                            </h3>
                            <div className="space-y-1">
                              {category.modules.map((module) => (
                                <Link
                                  key={module.name}
                                  href={module.href}
                                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group border border-transparent hover:border-blue-100"
                                  onClick={() => setIsLearningDropdownOpen(false)}
                                >
                                  <span className="text-sm">{module.icon}</span>
                                  <div className="flex-1">
                                    <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600 block leading-tight">
                                      {module.name}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                              {category.hasMore && (
                                <Link
                                  href={`/learning?category=${category.categoryKey}`}
                                  className="flex items-center space-x-2 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all duration-200 group border border-blue-200"
                                  onClick={() => setIsLearningDropdownOpen(false)}
                                >
                                  <span className="text-sm">👀</span>
                                  <div className="flex-1">
                                    <span className="text-xs font-medium text-blue-600 group-hover:text-blue-800 block leading-tight">
                                      Xem tất cả +{category.totalCount - 4}
                                    </span>
                                  </div>
                                </Link>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap justify-center gap-3">
                          <Link 
                            href="/learning" 
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                            onClick={() => setIsLearningDropdownOpen(false)}
                          >
                            📚 Tất Cả Khóa Học
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {coreModules.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <Link
                href="/learning"
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isLearningActive()
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Code className="w-4 h-4" />
                <span>Learning Modules</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
