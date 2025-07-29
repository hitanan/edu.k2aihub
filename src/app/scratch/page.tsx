import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("Học Lập Trình Scratch - Coding Cho Trẻ Em"),
  description: createDescription("Khóa học lập trình Scratch dành cho trẻ em và người mới bắt đầu. Học cách tạo game, animation và ứng dụng tương tác một cách thú vị"),
  keywords: createKeywords(["scratch", "lập trình trẻ em", "visual programming", "coding for kids", "game development", "animation"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Học Lập Trình Scratch - K2AiHub"),
    description: createDescription("Khám phá thế giới lập trình với Scratch - ngôn ngữ lập trình trực quan dành cho trẻ em"),
    type: "website",
  },
};

export default function ScratchModule() {
  const moduleInfo = {
    title: '🎨 Lập Trình Scratch',
    description: 'Học lập trình một cách trực quan và thú vị với Scratch. Tạo ra các trò chơi và ứng dụng đầu tiên của bạn.',
    icon: '🎨',
    difficulty: 'Dành cho người mới bắt đầu',
    duration: '15 giờ học',
  };

  const scratchLessons = [
    {
      id: 'scratch-introduction',
      title: 'Giới Thiệu Scratch',
      description: 'Làm quen với giao diện Scratch và các khái niệm lập trình cơ bản qua kéo thả',
      icon: '🌟',
      difficulty: 'Cơ bản',
      duration: '45 phút',
      href: '/scratch/scratch-intro',
      objectives: [
        'Hiểu giao diện Scratch và các thành phần chính',
        'Tạo dự án Scratch đầu tiên',
        'Sử dụng blocks cơ bản để điều khiển Sprite'
      ],
      topics: ['Giao diện', 'Sprite', 'Stage', 'Blocks']
    },
    {
      id: 'scratch-sprites-sounds',
      title: 'Sprites và Âm Thanh',
      description: 'Tìm hiểu cách sử dụng nhiều sprites, thêm âm thanh và tạo tương tác',
      icon: '🎵',
      difficulty: 'Cơ bản',
      duration: '60 phút',
      href: '/scratch/sound-effects',
      objectives: [
        'Thêm và tùy chỉnh nhiều sprites',
        'Sử dụng âm thanh trong dự án',
        'Tạo tương tác giữa các sprites'
      ],
      topics: ['Sprites', 'Sound', 'Broadcasting', 'Interaction']
    },
    {
      id: 'scratch-variables-logic',
      title: 'Animation và Chuyển Động',
      description: 'Sử dụng biến để lưu trữ dữ liệu và câu lệnh điều kiện để tạo logic phức tạp',
      icon: '�',
      difficulty: 'Trung bình',
      duration: '75 phút',
      href: '/scratch/animation-movement',
      objectives: [
        'Điều khiển chuyển động Sprite',
        'Tạo hiệu ứng animation mượt mà',
        'Sử dụng biến và logic điều kiện'
      ],
      topics: ['Animation', 'Variables', 'Logic', 'Movement']
    }
  ];

  const scratchFeatures = [
    {
      title: 'Lập Trình Trực Quan',
      description: 'Kéo thả các khối lệnh thay vì gõ code phức tạp',
      icon: '🧩'
    },
    {
      title: 'Sáng Tạo Không Giới Hạn',
      description: 'Tạo game, animation, story và nhiều project thú vị khác',
      icon: '🚀'
    },
    {
      title: 'Cộng Đồng Toàn Cầu',
      description: 'Chia sẻ và học hỏi từ hàng triệu project trên thế giới',
      icon: '🌟'
    },
    {
      title: 'Miễn Phí 100%',
      description: 'Hoàn toàn miễn phí và chạy trực tiếp trên trình duyệt',
      icon: '💎'
    }
  ];

  const sampleProjects = [
    {
      name: 'Mèo Nhảy',
      description: 'Game đầu tiên với mèo Scratch nhảy qua các chướng ngại vật',
      icon: '🐱',
      difficulty: 'Dễ làm',
      color: 'green'
    },
    {
      name: 'Vẽ Tranh Tự Động',
      description: 'Tạo chương trình vẽ tranh tự động với nhiều màu sắc đẹp mắt',
      icon: '🎨',
      difficulty: 'Thú vị',
      color: 'yellow'
    },
    {
      name: 'Tàu Vũ Trụ',
      description: 'Game bắn súng trong không gian với hiệu ứng và âm thanh',
      icon: '🚀',
      difficulty: 'Thách thức',
      color: 'purple'
    }
  ];

  const { title, description, icon, difficulty, duration } = moduleInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">{icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="bg-white/10 px-3 py-1 rounded-full">🎯 {difficulty}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">⏱️ {duration}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">📚 {scratchLessons.length} bài học</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            📚 Nội Dung Khóa Học
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Từng bước khám phá thế giới lập trình với Scratch - từ cơ bản đến tạo game hoàn chỉnh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scratchLessons.map((lesson, index) => (
            <Link key={index} href={lesson.href}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20 cursor-pointer group">
                <div className="text-4xl mb-4">{lesson.icon}</div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                  Bài {index + 1}: {lesson.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {lesson.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-yellow-300 mb-2">🎯 Mục tiêu:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {lesson.objectives.map((objective, objIndex) => (
                      <li key={objIndex} className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-orange-300 mb-2">📋 Nội dung:</h4>
                  <div className="flex flex-wrap gap-1">
                    {lesson.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-orange-500/20 text-orange-200 text-xs px-2 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>⏱️ {lesson.duration}</span>
                  <span>🔧 {lesson.difficulty}</span>
                </div>

                <div className="mt-4 text-orange-300 font-semibold text-sm group-hover:text-orange-200 transition-colors duration-300">
                  Bắt Đầu Học →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ⭐ Tại Sao Chọn Scratch?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Scratch là ngôn ngữ lập trình hoàn hảo để bắt đầu hành trình coding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scratchFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🎮 Dự Án Mẫu
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Một số project thú vị bạn sẽ tạo ra trong khóa học Scratch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleProjects.map((project, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-4 text-center">{project.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{project.name}</h3>
              <p className="text-gray-300 text-center mb-4">
                {project.description}
              </p>
              <div className="text-center">
                <span className={`${
                  project.color === 'green' ? 'bg-green-500/20 text-green-200' :
                  project.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-200' :
                  'bg-purple-500/20 text-purple-200'
                } text-xs px-3 py-1 rounded-full`}>
                  ✅ {project.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-3xl p-12 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🎨 Sẵn Sàng Tạo Game Đầu Tiên?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Bắt đầu hành trình lập trình với Scratch ngay hôm nay. Miễn phí, dễ học và cực kỳ thú vị!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              ← Trang Chủ
            </Link>
            <a
              href="https://scratch.mit.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            >
              🚀 Bắt Đầu Với Scratch
              <span className="ml-2">↗</span>
            </a>
            <Link 
              href="/python"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              🐍 Tiếp Theo: Python →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
