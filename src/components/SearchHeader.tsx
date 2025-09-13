'use client';

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import AdvancedSearch from './AdvancedSearch';

interface SearchHeaderProps {
  className?: string;
}

export default function SearchHeader({ className = '' }: SearchHeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle keyboard shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsSearchOpen(true)}
        className={`flex items-center gap-3 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${className}`}
      >
        <Search className="w-4 h-4" />
        <span className="text-sm">Tìm kiếm...</span>
        <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-gray-500 bg-gray-200 dark:bg-gray-600 rounded">
          ⌘K
        </kbd>
      </button>

      <AdvancedSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
