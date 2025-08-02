'use client';

import React from 'react';
import Link from 'next/link';

interface NavigationConfig {
  previous: {
    href: string;
    title: string;
    label: string;
  };
  next: {
    href: string;
    title: string;
    label: string;
  };
  progress: {
    current: number;
    total: number;
    percentage: number;
  };
}

interface ModuleNavigationProps {
  navConfig: NavigationConfig;
  className?: string;
}

export default function ModuleNavigation({ 
  navConfig,
  className = ""
}: ModuleNavigationProps) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <Link 
        href={navConfig.previous.href}
        className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
      >
        {navConfig.previous.label}
      </Link>
      
      <div className="hidden md:flex items-center text-sm text-gray-400">
        <span className="mr-2">Tiến độ:</span>
        <div className="flex items-center space-x-1">
          {Array.from({ length: navConfig.progress.total }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < navConfig.progress.current
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
        <span className="ml-2">
          {navConfig.progress.current}/{navConfig.progress.total}
        </span>
      </div>
      
      <Link 
        href={navConfig.next.href}
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
      >
        {navConfig.next.label}
      </Link>
    </div>
  );
}
