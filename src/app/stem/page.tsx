import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { stemLessons } from '@/data/stem';

export const metadata: Metadata = {
  title: createTitle("Học STEM & STEAM - Khoa Học Thực Hành"),
  description: createDescription("Khám phá thế giới STEM/STEAM qua các bài học thực hành thú vị. Từ thí nghiệm khoa học đến lập trình, kỹ thuật và nghệ thuật sáng tạo"),
  keywords: createKeywords(["STEM", "STEAM", "khoa học", "công nghệ", "kỹ thuật", "toán học", "nghệ thuật", "thí nghiệm", "lập trình trẻ em"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Học STEM & STEAM - K2AiHub"),
    description: createDescription("Khám phá khoa học, công nghệ, kỹ thuật, toán học và nghệ thuật qua học tập thực hành"),
    type: "website",
  },
};

export default function STEMModule() {
  const moduleInfo = {
    title: '🧪 Học STEM & STEAM',
    description: 'Khám phá thế giới khoa học, công nghệ, kỹ thuật, toán học và nghệ thuật qua các bài học thực hành đầy thú vị. Trải nghiệm STEM như một cuộc phiêu lưu!',
    icon: '🧪',
    difficulty: 'Từ cơ bản đến nâng cao',
    duration: '30+ giờ học',
  };

  const stemLessonsList = stemLessons.map((lesson) => ({
    id: lesson.id,
    title: lesson.title,
    description: lesson.description,
    icon: lesson.icon || '🧪',
    difficulty: lesson.difficulty,
    duration: lesson.duration,
    category: lesson.category,
    href: `/stem/${lesson.id}`,
    objectives: lesson.objectives.slice(0, 3),
    topics: lesson.topics || ['STEM', 'Thực hành', 'Sáng tạo']
  }));

  const stemCategories = [
    {
      title: 'Science (Khoa Học)',
      description: 'Thí nghiệm thú vị, khám phá tự nhiên',
      icon: '🔬',
      color: 'from-green-600 to-blue-600',
      lessons: stemLessonsList.filter(l => l.category === 'science')
    },
    {
      title: 'Technology (Công Nghệ)',
      description: 'Lập trình, ứng dụng, công nghệ số',
      icon: '💻',
      color: 'from-blue-600 to-purple-600',
      lessons: stemLessonsList.filter(l => l.category === 'technology')
    },
    {
      title: 'Engineering (Kỹ Thuật)',
      description: 'Thiết kế, xây dựng, giải quyết vấn đề',
      icon: '🏗️',
      color: 'from-orange-600 to-red-600',
      lessons: stemLessonsList.filter(l => l.category === 'engineering')
    },
    {
      title: 'Mathematics (Toán Học)',
      description: 'Toán học thực tế, logic, tính toán',
      icon: '🔢',
      color: 'from-purple-600 to-pink-600',
      lessons: stemLessonsList.filter(l => l.category === 'mathematics')
    },
    {
      title: 'Arts (Nghệ Thuật)',
      description: 'STEAM - Kết hợp nghệ thuật với khoa học',
      icon: '🎨',
      color: 'from-pink-600 to-yellow-600',
      lessons: stemLessonsList.filter(l => l.category === 'arts')
    }
  ];

  const skillsDeveloped = [
    {
      title: 'Tư Duy Khoa Học',
      description: 'Đặt câu hỏi, giả thuyết, thí nghiệm và kết luận',
      icon: '🧠'
    },
    {
      title: 'Giải Quyết Vấn Đề',
      description: 'Phân tích vấn đề và tìm giải pháp sáng tạo',
      icon: '🔍'
    },
    {
      title: 'Làm Việc Nhóm',
      description: 'Hợp tác và chia sẻ ý tưởng hiệu quả',
      icon: '🤝'
    },
    {
      title: 'Tự Tin Thuyết Trình',
      description: 'Trình bày ý tưởng và kết quả nghiên cứu',
      icon: '🎤'
    }
  ];

  const { title, description, icon, difficulty, duration } = moduleInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">{icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="bg-white/10 px-3 py-1 rounded-full">🎯 {difficulty}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">⏱️ {duration}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">📚 {stemLessonsList.length} bài học</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">🔬 5 lĩnh vực STEAM</span>
            </div>
          </div>
        </div>
      </div>

      {/* STEM Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🌟 Khám Phá 5 Lĩnh Vực STEAM
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Mỗi lĩnh vực mang đến những trải nghiệm học tập độc đáo và thú vị
          </p>
        </div>

        <div className="space-y-8">
          {stemCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{category.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
                <div className="ml-auto">
                  <span className="bg-yellow-500/20 text-yellow-200 text-sm px-3 py-1 rounded-full">
                    {category.lessons.length} bài học
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.lessons.map((lesson, lessonIndex) => (
                  <Link key={lessonIndex} href={lesson.href}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer group">
                      <div className="text-2xl mb-2">{lesson.icon}</div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {lesson.title}
                      </h4>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                        {lesson.description}
                      </p>
                      <div className="flex justify-between items-center text-xs text-gray-400">
                        <span>⏱️ {lesson.duration}</span>
                        <span>🔧 {lesson.difficulty}</span>
                      </div>
                      <div className="mt-2 text-blue-300 font-semibold text-sm group-hover:text-blue-200 transition-colors duration-300">
                        Khám Phá →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Development */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              💪 Kỹ Năng Phát Triển
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              STEM không chỉ dạy kiến thức mà còn phát triển những kỹ năng quan trọng cho tương lai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsDeveloped.map((skill, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Lessons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ⭐ Bài Học Nổi Bật
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Những bài học được yêu thích nhất với nội dung thú vị và thực hành tuyệt vời
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stemLessonsList.slice(0, 6).map((lesson, index) => (
            <Link key={index} href={lesson.href}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20 cursor-pointer group">
                <div className="text-4xl mb-4">{lesson.icon}</div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {lesson.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
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
                  <h4 className="text-sm font-semibold text-blue-300 mb-2">📋 Nội dung:</h4>
                  <div className="flex flex-wrap gap-1">
                    {lesson.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-blue-500/20 text-blue-200 text-xs px-2 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>⏱️ {lesson.duration}</span>
                  <span>🔧 {lesson.difficulty}</span>
                </div>

                <div className="mt-4 text-blue-300 font-semibold text-sm group-hover:text-blue-200 transition-colors duration-300">
                  Bắt Đầu Học →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Learning Benefits */}
      <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🚀 Tại Sao Chọn STEM?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              STEM chuẩn bị cho bạn những kỹ năng cần thiết trong thế kỷ 21
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                🎯 Học Tập Hiệu Quả
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  Học qua thực hành và trải nghiệm trực tiếp
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  Kết nối kiến thức với cuộc sống thực tế
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  Phát triển tư duy phản biện và sáng tạo
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  Tăng cường khả năng giải quyết vấn đề
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                🌟 Chuẩn Bị Tương Lai
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  Nghề nghiệp trong lĩnh vực công nghệ cao
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  Kỹ năng cần thiết cho thời đại số
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  Tư duy đổi mới và khởi nghiệp
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  Thích ứng với thay đổi công nghệ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-green-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🧪 Sẵn Sàng Khám Phá STEM?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Bắt đầu hành trình STEM đầy thú vị ngay hôm nay. Từ những thí nghiệm đơn giản đến dự án sáng tạo phức tạp!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              ← Trang Chủ
            </Link>
            <Link 
              href="/stem/stem-introduction"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              🧪 Bắt Đầu Bài 1
            </Link>
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
