'use client';

import React, { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TocItem[];
  className?: string;
}

export default function TableOfContents({ headings, className = '' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -80% 0%'
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8 ${className}`}>
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        Mục Lục
      </h3>
      
      <nav>
        <ul className="space-y-2">
          {headings.map(({ id, title, level }) => (
            <li key={id}>
              <button
                onClick={() => scrollToHeading(id)}
                className={`
                  w-full text-left transition-colors duration-200 text-sm
                  ${level === 1 ? 'font-medium' : 'font-normal'}
                  ${level === 2 ? 'pl-4' : level === 3 ? 'pl-8' : ''}
                  ${activeId === id 
                    ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600 pr-2' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }
                  py-2 px-3 rounded-l block
                `}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Progress indicator */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 mb-2">Tiến độ đọc</div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((headings.findIndex(h => h.id === activeId) + 1) / headings.length) * 100}%`
            }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {headings.findIndex(h => h.id === activeId) + 1} / {headings.length} phần
        </div>
      </div>
    </div>
  );
}
