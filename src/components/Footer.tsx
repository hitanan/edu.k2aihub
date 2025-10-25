'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Heart, Star } from 'lucide-react';
import { moduleNavigation } from '@/data/moduleNavigation';
import { moduleStats } from '@/utils/moduleStats';
import { isModuleData, isModuleNavigation } from '@/utils/typeguards';
import { ModuleNavigation } from '@/types';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [faviconError, setFaviconError] = useState(false);

  const getCategorizedModules = () => {
    const categoryMap: Record<
      string,
      {
        title: string;
        icon: string;
        color: string;
        modules: Array<{ name: string; href: string; icon: string }>;
      }
    > = {};

    const coreModules = moduleNavigation.filter(isModuleNavigation).filter((module) => module.coreModule);
    if (coreModules.length > 0) {
      categoryMap['core'] = {
        title: 'Core Modules',
        icon: '🌟',
        color: 'text-blue-400',
        modules: coreModules.map((module) => ({
          name: module.title,
          href: module.href || '/',
          icon: module.icon || '📚',
        })),
      };
    }

    const categoryNames: Record<string, { title: string; icon: string; color: string }> = {
      trending: { title: '2025 Trending', icon: '🚀', color: 'text-purple-400' },
      professional: { title: 'Professional Skills', icon: '💼', color: 'text-emerald-400' },
      creative: { title: 'Creative & Tech', icon: '🎨', color: 'text-pink-400' },
      programming: { title: 'Programming', icon: '💻', color: 'text-cyan-400' },
      stem: { title: 'STEM & Hardware', icon: '🔬', color: 'text-orange-400' },
    };

    moduleNavigation.forEach((module) => {
      const category = isModuleData(module) ? module.category : (module as ModuleNavigation).category;
      const isCore = isModuleNavigation(module) && module.coreModule;

      if (!isCore && category) {
        const categoryKeys = Array.isArray(category) ? category : [category];

        categoryKeys.forEach((key) => {
          if (!categoryNames[key]) return;

          if (!categoryMap[key]) {
            categoryMap[key] = {
              ...categoryNames[key],
              modules: [],
            };
          }

          categoryMap[key].modules.push({
            name: module.title,
            href: isModuleData(module) ? `/learning/${module.id}` : (module as ModuleNavigation).href || '#',
            icon: module.icon || '📚',
          });
        });
      }
    });

    Object.keys(categoryMap).forEach((key) => {
      categoryMap[key].modules = categoryMap[key].modules.slice(0, 4);
    });

    return Object.values(categoryMap).slice(0, 4);
  };

  const modulesByCategory = getCategorizedModules();

  const quickLinks = [
    { name: 'Trang Chủ', href: '/', icon: '🏠' },
    { name: 'Tất Cả Khóa Học', href: '/learning', icon: '📚' },
    { name: 'Chính Sách Bảo Mật', href: '/privacy', icon: '🔒' },
    { name: 'Về Chúng Tôi', href: '/about', icon: 'ℹ️' },
  ];

  const stats = [
    { label: 'Learning Modules', value: `${moduleStats.totalModules}+`, icon: '📚' },
    { label: 'Interactive Lessons', value: `${moduleStats.totalLessons}+`, icon: '🎯' },
    { label: 'Study Hours', value: `${moduleStats.totalHours}+`, icon: '⏰' },
    { label: 'Educational Games', value: `123+`, icon: '🎮' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section - Brand and stats */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          {/* Brand */}
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                {!faviconError ? (
                  <Image
                    src="/favicon.ico"
                    alt="K2AI Logo"
                    width={20}
                    height={20}
                    className="object-contain"
                    onError={() => setFaviconError(true)}
                  />
                ) : (
                  <span className="text-white font-bold">K2</span>
                )}
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  K2AI
                </h2>
                <p className="text-gray-400 text-xs">Học tập thông minh</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md text-sm">
              Nền tảng giáo dục với {moduleStats.totalModules}+ module chuyên sâu cho tương lai công nghệ.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl mb-1">{stat.icon}</div>
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content - Module links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {modulesByCategory.map((category, index) => (
            <div key={index} className="space-y-3">
              <h3 className={`font-semibold ${category.color} flex items-center space-x-2`}>
                <span>{category.icon}</span>
                <span className="text-sm">{category.title}</span>
              </h3>
              <div className="space-y-1">
                {category.modules.map((module) => (
                  <Link
                    key={module.name}
                    href={module.href}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                  >
                    <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                      {module.icon}
                    </span>
                    <span className="text-xs text-gray-300 group-hover:text-white transition-colors duration-200">
                      {module.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 group"
            >
              <span className="group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start space-x-2">
                <span>© {currentYear} K2AI - Phát triển với</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>cho giáo dục</span>
              </p>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-3">
              <Link
                href="/feedback"
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Liên hệ</span>
              </Link>
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
