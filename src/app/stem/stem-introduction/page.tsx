import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { stemLessons } from '@/data/stem';
import { getModuleNavigation, getNavigationConfig } from '@/utils/moduleNavigation';
import YouTubePlayer from '@/components/YouTubePlayer';

export const metadata: Metadata = {
  title: createTitle("Giới Thiệu STEM & STEAM - STEM"),
  description: createDescription("Khám phá thế giới STEM/STEAM đầy màu sắc! Hiểu tại sao khoa học, công nghệ, kỹ thuật, toán học và nghệ thuật kết hợp tạo nên sức mạnh sáng tạo"),
  keywords: createKeywords(["STEM giới thiệu", "STEAM", "khoa học trẻ em", "công nghệ giáo dục", "kỹ thuật cơ bản", "toán học thực tế"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Giới Thiệu STEM & STEAM"),
    description: createDescription("Khám phá STEM/STEAM qua các hoạt động thú vị và thực hành"),
    type: "website",
  },
};

export default function STEMIntroductionLesson() {
  const lesson = stemLessons.find(l => l.id === 'stem-introduction');
  const navigation = getModuleNavigation('stem', 'stem-introduction');
  const navConfig = navigation ? getNavigationConfig(navigation, '/stem') : null;
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/stem" className="text-green-400 hover:text-green-300 transition-colors duration-300">
              ← Quay lại STEM
            </Link>
            {navConfig && (
              <div className="ml-auto text-sm text-gray-400">
                Bài {navConfig.progress.current} / {navConfig.progress.total}
              </div>
            )}
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🔬</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {lesson.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              {lesson.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full">
                ⏱️ {lesson.duration}
              </span>
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full">
                🎯 {lesson.difficulty}
              </span>
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full">
                🧪 {lesson.category.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Learning Objectives */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🎯 Mục Tiêu Bài Học
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.objectives.map((objective, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Materials Needed */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🛠️ Vật Liệu Cần Thiết
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {lesson.materials.map((material, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">📦</div>
                <div className="text-gray-300 text-sm">{material}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Tutorial */}
        {lesson.videoUrl && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              🎬 Video Hướng Dẫn
            </h2>
            <YouTubePlayer 
              videoUrl={lesson.videoUrl} 
              title={`${lesson.title} - Video Tutorial`}
            />
          </div>
        )}

        {/* STEM Explanation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧪 STEM Là Gì?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-xl p-6 border border-green-500/20">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-xl font-bold text-white mb-2">Science</h3>
              <h4 className="text-green-300 font-semibold mb-2">Khoa Học</h4>
              <p className="text-gray-300 text-sm">
                Quan sát, thí nghiệm và khám phá thế giới tự nhiên. Từ tế bào đến vũ trụ, khoa học giúp ta hiểu mọi thứ xung quanh.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-xl font-bold text-white mb-2">Technology</h3>
              <h4 className="text-blue-300 font-semibold mb-2">Công Nghệ</h4>
              <p className="text-gray-300 text-sm">
                Sử dụng công cụ, máy móc và phần mềm để giải quyết vấn đề. Từ smartphone đến robot, công nghệ làm cuộc sống dễ dàng hơn.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-xl p-6 border border-orange-500/20">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-2">Engineering</h3>
              <h4 className="text-orange-300 font-semibold mb-2">Kỹ Thuật</h4>
              <p className="text-gray-300 text-sm">
                Thiết kế và xây dựng những thứ hữu ích. Từ cầu đường đến tàu vũ trụ, kỹ sư biến ý tưởng thành hiện thực.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl mb-3">🔢</div>
              <h3 className="text-xl font-bold text-white mb-2">Mathematics</h3>
              <h4 className="text-purple-300 font-semibold mb-2">Toán Học</h4>
              <p className="text-gray-300 text-sm">
                Ngôn ngữ của vũ trụ! Toán giúp đo lường, tính toán và hiểu các mối quan hệ trong mọi thứ.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-pink-600/20 to-yellow-600/20 rounded-xl p-6 border border-pink-500/20">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">🎨</div>
              <div>
                <h3 className="text-xl font-bold text-white">+ Arts = STEAM!</h3>
                <h4 className="text-pink-300 font-semibold">Nghệ Thuật</h4>
              </div>
            </div>
            <p className="text-gray-300">
              Khi thêm nghệ thuật vào STEM, ta có STEAM! Nghệ thuật mang đến sự sáng tạo, thẩm mỹ và cách nhìn mới về thế giới. 
              Thiết kế, âm nhạc, hội họa tất cả đều có thể kết hợp với khoa học để tạo ra những điều kỳ diệu.
            </p>
          </div>
        </div>

        {/* Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧩 Bài Tập Thực Hành
          </h2>
          
          <div className="space-y-8">
            {lesson.exercises.map((exercise, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    exercise.difficulty === 'Dễ' ? 'bg-green-500/20 text-green-200' :
                    exercise.difficulty === 'Trung bình' ? 'bg-yellow-500/20 text-yellow-200' :
                    'bg-red-500/20 text-red-200'
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{exercise.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-green-300 font-semibold mb-2">📋 Các bước thực hiện:</h4>
                  <ol className="space-y-2">
                    {exercise.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="bg-green-500/20 text-green-300 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">📊 Kết quả mong đợi:</h4>
                    <p className="text-gray-300 text-sm">{exercise.expectedResult}</p>
                  </div>
                  
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <h4 className="text-yellow-300 font-semibold mb-2">💡 Gợi ý:</h4>
                    <ul className="space-y-1">
                      {exercise.hints.map((hint, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-yellow-400 mr-2">•</span>
                          {hint}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {exercise.materials && (
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <h4 className="text-purple-300 font-semibold mb-2">🛠️ Vật liệu cần thiết:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exercise.materials.map((material, matIndex) => (
                        <span key={matIndex} className="bg-purple-500/20 text-purple-200 text-xs px-2 py-1 rounded-full">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Real World Applications */}
        {lesson.realWorldApplications && lesson.realWorldApplications.length > 0 && (
          <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-2xl p-8 border border-green-500/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              🌍 Ứng Dụng Thực Tế
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lesson.realWorldApplications.map((app, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-green-300 text-sm font-semibold">{app}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Competitions */}
        {lesson.competitions && lesson.competitions.length > 0 && (
          <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-2xl p-8 border border-yellow-500/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              🏆 Cuộc Thi & Sự Kiện
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.competitions.map((competition, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 flex items-center">
                  <div className="text-2xl mr-4">🥇</div>
                  <div className="text-yellow-300 text-sm font-semibold">{competition}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fun STEM Facts */}
        <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🤩 Sự Thật Thú Vị Về STEM
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🧬</div>
              <h3 className="text-purple-300 font-semibold mb-2">DNA có thể lưu trữ dữ liệu!</h3>
              <p className="text-gray-300 text-sm">
                Một gram DNA có thể chứa 215 petabyte dữ liệu - đủ để lưu toàn bộ internet!
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="text-pink-300 font-semibold mb-2">NASA dùng smartphone cũ làm vệ tinh!</h3>
              <p className="text-gray-300 text-sm">
                PhoneSat project sử dụng điện thoại Android để điều khiển vệ tinh giá rẻ.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🐝</div>
              <h3 className="text-purple-300 font-semibold mb-2">Ong biết toán học!</h3>
              <p className="text-gray-300 text-sm">
                Ong có thể học cách cộng và trừ, và hiểu khái niệm số không (zero).
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="text-pink-300 font-semibold mb-2">AI có thể vẽ tranh đẹp!</h3>
              <p className="text-gray-300 text-sm">
                AI đã tạo ra những tác phẩm nghệ thuật được bán với giá hàng triệu đô la.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        {navConfig && (
          <div className="flex justify-between items-center">
            <Link 
              href={navConfig.previous.href}
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              {navConfig.previous.label}
            </Link>
            
            {navConfig.next.href !== '/stem' && (
              <Link 
                href={navConfig.next.href}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                {navConfig.next.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
