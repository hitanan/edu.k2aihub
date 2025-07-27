'use client';

import React from 'react';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "K2AiHub",
    "alternateName": "K2 AI Hub - Nền Tảng Giáo Dục Tương Tác",
    "description": "Nền tảng giáo dục tương tác với hai module chính: Địa Lý Việt Nam (34 tỉnh thành) và AI Của Tôi (hướng dẫn sử dụng AI thực tế)",
    "url": "https://k2aihub.github.io",
    "sameAs": [
      "https://github.com/k2aihub"
    ],
    "educationalUse": ["learning", "research", "reference"],
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "provider": {
      "@type": "Organization",
      "name": "K2AiHub Team"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Educational Modules",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Địa Lý Việt Nam",
          "description": "Khám phá 34 đơn vị hành chính cấp tỉnh của Việt Nam với bản đồ tương tác",
          "provider": {
            "@type": "Organization", 
            "name": "K2AiHub"
          }
        },
        {
          "@type": "Course",
          "name": "AI Của Tôi",
          "description": "Hướng dẫn sử dụng AI hiệu quả trong công việc và cuộc sống hàng ngày",
          "provider": {
            "@type": "Organization",
            "name": "K2AiHub"
          }
        }
      ]
    }
  };

  const modules = [
    {
      title: 'Địa Lý Việt Nam',
      description: 'Khám phá 34 đơn vị hành chính cấp tỉnh của Việt Nam với bản đồ tương tác và thông tin chi tiết về kinh tế, văn hóa, lịch sử.',
      href: '/city',
      icon: '🗺️',
      color: 'from-blue-600 to-green-600',
      stats: ['34 Tỉnh Thành', '9 Vùng Miền', '102 Triệu Dân']
    },
    {
      title: 'AI Của Tôi',
      description: 'Khám phá cách sử dụng AI hiệu quả trong công việc và cuộc sống hàng ngày. Học cách tận dụng công nghệ AI cho các lĩnh vực khác nhau.',
      href: '/ai',
      icon: '🤖',
      color: 'from-purple-600 to-pink-600',
      stats: ['Hướng Dẫn Thực Hành', 'Công Cụ AI', 'Ứng Dụng Thực Tế']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData data={websiteStructuredData} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl flex items-center justify-center text-2xl">
                📚
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              K2AI HUB
              <span className="block text-blue-300">Nền Tảng Thông Tin Tương Tác</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Khám phá kiến thức qua các module học tập hiện đại, tương tác và thú vị. 
              Học tập không còn là gánh nặng mà trở thành niềm đam mê.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                ✨ Tương Tác Cao
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                🎯 Học Theo Cấp Độ
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                📱 Responsive Design
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                🚀 Công Nghệ Hiện Đại
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Các Module Học Tập
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chọn module phù hợp với nhu cầu học tập của bạn. Mỗi module được thiết kế 
            với phương pháp giảng dạy hiện đại và công nghệ tương tác cao.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <div key={index} className="group relative">
              <Link href={module.href}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                  <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {module.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {module.stats.map((stat, statIndex) => (
                      <span key={statIndex} className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full">
                        {stat}
                      </span>
                    ))}
                  </div>
                  <div className={`bg-gradient-to-r ${module.color} text-white px-6 py-3 rounded-xl text-center font-semibold group-hover:shadow-lg transition-shadow duration-300`}>
                    Khám Phá Ngay →
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn Nền Tảng Của Chúng Tôi?
            </h2>
            <p className="text-lg text-gray-600">
              Được xây dựng với công nghệ hiện đại và phương pháp giảng dạy tiên tiến
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎮
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Học Tập Tương Tác
              </h3>
              <p className="text-gray-600">
                Trải nghiệm học tập sinh động với các công cụ tương tác, mô phỏng và trò chơi giáo dục
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Theo Dõi Tiến Độ
              </h3>
              <p className="text-gray-600">
                Hệ thống theo dõi học tập chi tiết giúp bạn nắm rõ tiến độ và kế hoạch học tập hiệu quả
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Cá Nhân Hóa
              </h3>
              <p className="text-gray-600">
                Nội dung học tập được tùy chỉnh theo trình độ và sở thích cá nhân của từng học viên
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-xl flex items-center justify-center text-xl">
                📚
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">K2AiHub</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Xây dựng tương lai giáo dục với công nghệ hiện đại và phương pháp giảng dạy tiên tiến. 
              Học tập không giới hạn, khám phá không ngừng.
            </p>
            
            {/* Feedback Link */}
            <div className="mb-6">
              <Link
                href="/feedback"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                💬 Góp Ý & Liên Hệ
              </Link>
            </div>
            
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2025 K2 AI Hub</span>
              <span>•</span>
              <span>Được xây dựng với ❤️ và K2</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
