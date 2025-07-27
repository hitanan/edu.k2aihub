'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

export default function FAQ({ items, title = "Câu Hỏi Thường Gặp", className = '' }: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {title}
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              aria-expanded={openItems.has(index)}
            >
              <span className="font-medium text-gray-900 pr-4">
                {item.question}
              </span>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                  openItems.has(index) ? 'transform rotate-180' : ''
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openItems.has(index) && (
              <div className="px-6 pb-4 text-gray-700 leading-relaxed border-t border-gray-100">
                <div className="pt-4">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-600 text-sm">
          Không tìm thấy câu trả lời bạn cần? 
          <a href="/feedback" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
            Liên hệ với chúng tôi
          </a>
        </p>
      </div>
    </div>
  );
}
