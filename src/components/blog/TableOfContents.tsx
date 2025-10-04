'use client';

import { useState, useEffect } from 'react';

// Utility: Strip HTML tags and decode HTML entities
function sanitizeHtmlToText(html: string): string {
  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, '');
  // Decode common HTML entities
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#x26;': '&',
    '&nbsp;': ' ',
  };
  text = text.replace(/&[a-zA-Z#0-9]+;/g, (entity) => entities[entity] || entity);
  return text;
}
import { Heading } from '@/types';

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="hidden lg:block sticky top-24 w-64 ml-8">
      <h3 className="text-lg font-semibold text-white mb-4">Nội dung bài viết</h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block text-sm transition-colors duration-200 ${
                  activeId === heading.id
                    ? 'text-blue-400 font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
                style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
              >
                {sanitizeHtmlToText(heading.text)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
