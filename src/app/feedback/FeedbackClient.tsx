'use client';

import React from 'react';
import Link from 'next/link';
import FeedbackForm from '@/components/FeedbackForm';

export default function FeedbackClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center text-white text-sm">
                  💬
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  Liên Hệ Góp Ý
                </h1>
              </Link>
              <nav className="hidden md:flex items-center gap-1 ml-6">
                <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">
                  Trang Chủ
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <span className="text-gray-900 text-sm font-medium">
                  Liên Hệ
                </span>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FeedbackForm />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              Nền Tảng Thông Tin Tương Tác - Góp Ý & Phản Hồi
            </p>
            <p className="text-sm text-gray-500">
              Chúng tôi luôn lắng nghe và cải thiện dựa trên ý kiến của bạn
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
