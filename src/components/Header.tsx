'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Home, Globe, Brain, Code } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLearningDropdownOpen, setIsLearningDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Core modules - always visible
  const coreModules = [
    { name: 'Trang Chủ', href: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'Địa Lý Việt Nam', href: '/city', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Của Tôi', href: '/ai', icon: <Brain className="w-4 h-4" /> },
  ];

  // Learning modules - grouped by category
  const learningModules = [
    {
      category: 'Vietnamese-Specific',
      icon: '🇻🇳',
      modules: [
        { name: 'Vietnamese Language Tech', href: '/learning/vietnamese-language-tech', icon: '🇻🇳' },
        { name: 'Vietnamese Business', href: '/learning/vietnamese-business', icon: '🏪' },
        { name: 'Digital Government', href: '/learning/digital-government', icon: '🏛️' },
        { name: 'Vietnamese Culture', href: '/learning/vietnamese-culture', icon: '🏛️' },
        { name: 'Vietnamese Healthcare', href: '/learning/vietnamese-healthcare', icon: '🏥' },
      ]
    },
    {
      category: 'Professional Skills',
      icon: '💼',
      modules: [
        { name: 'Digital Marketing', href: '/learning/digital-marketing', icon: '📱' },
        { name: 'Financial Literacy', href: '/learning/financial-literacy', icon: '💰' },
        { name: 'Green Technology', href: '/learning/green-technology', icon: '🌱' },
        { name: 'Mental Health Tech', href: '/learning/mental-health-tech', icon: '🧠' },
      ]
    },
    {
      category: 'Creative & Technology',
      icon: '🎨',
      modules: [
        { name: 'Game Development', href: '/learning/game-development', icon: '🎮' },
        { name: 'AI Art & Creative Tech', href: '/learning/ai-art-creative-tech', icon: '🎨' },
      ]
    },
    {
      category: 'Security & Science',
      icon: '🔬',
      modules: [
        { name: 'Cybersecurity', href: '/learning/cybersecurity', icon: '🔒' },
        { name: 'Biotechnology', href: '/learning/biotechnology', icon: '🧬' },
      ]
    },
    {
      category: 'Programming',
      icon: '💻',
      modules: [
        { name: 'Python Programming', href: '/learning/python', icon: '🐍' },
        { name: 'Arduino & IoT', href: '/learning/arduino', icon: '⚡' },
        { name: 'Robotics', href: '/learning/robotics', icon: '🤖' },
        { name: 'Scratch Programming', href: '/learning/scratch', icon: '�' },
      ]
    },
    {
      category: 'STEM Foundation',
      icon: '🔬',
      modules: [
        { name: 'STEM Education', href: '/learning/stem', icon: '🔬' },
      ]
    }
  ];

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

            {/* Learning dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsLearningDropdownOpen(true)}
              onMouseLeave={() => setIsLearningDropdownOpen(false)}
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

              {/* Dropdown content */}
              {isLearningDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200/50 backdrop-blur-md overflow-hidden z-50">
                  <div className="p-6 max-h-96 overflow-y-auto">
                    {learningModules.map((category, index) => (
                      <div key={category.category} className={index > 0 ? 'mt-6' : ''}>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                          <span>{category.icon}</span>
                          <span>{category.category}</span>
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {category.modules.map((module) => (
                            <Link
                              key={module.name}
                              href={module.href}
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                              onClick={() => setIsLearningDropdownOpen(false)}
                            >
                              <span className="text-lg">{module.icon}</span>
                              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                {module.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Mở menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg z-40">
            <div className="px-2 pt-4 pb-6 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
              {/* Core modules */}
              {coreModules.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
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

              {/* Learning modules */}
              <div className="pt-4">
                <h3 className="px-4 text-sm font-semibold text-gray-900 mb-3">Learning Modules</h3>
                {learningModules.map((category) => (
                  <div key={category.category} className="mb-4">
                    <h4 className="px-4 text-xs font-medium text-gray-500 mb-2 flex items-center space-x-2">
                      <span>{category.icon}</span>
                      <span>{category.category}</span>
                    </h4>
                    {category.modules.map((module) => (
                      <Link
                        key={module.name}
                        href={module.href}
                        className="flex items-center space-x-3 px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg mx-2 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{module.icon}</span>
                        <span>{module.name}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
