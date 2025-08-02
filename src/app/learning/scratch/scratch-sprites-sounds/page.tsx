import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { scratchLessons } from '@/data/scratch';
import { getModuleNavigation, getNavigationConfig } from '@/utils/moduleNavigation';
import YouTubePlayer from '@/components/YouTubePlayer';
import ModuleNavigation from '@/components/ModuleNavigation';

export const metadata: Metadata = {
  title: createTitle("Bài 2: Sprites và Âm Thanh - Scratch Programming"),
  description: createDescription("Học cách thêm sprites và âm thanh vào dự án Scratch, tạo tương tác giữa các nhân vật"),
  keywords: createKeywords(["scratch sprites", "scratch sounds", "animation", "interactive programming"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 2: Sprites và Âm Thanh"),
    description: createDescription("Thêm sprites và âm thanh để tạo dự án Scratch sống động"),
    type: "website",
  },
};

export default function ScratchSpritesLesson() {
  const lesson = scratchLessons.find(l => l.id === 'scratch-sprites-sounds');
  const navigation = getModuleNavigation('scratch', 'scratch-sprites-sounds');
  const navConfig = navigation ? getNavigationConfig(navigation, '/scratch') : null;
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const spriteManagement = [
    {
      concept: 'Adding Sprites',
      description: 'Thêm nhân vật mới vào dự án',
      steps: [
        'Click vào icon Sprite ở góc dưới phải',
        'Chọn từ thư viện hoặc upload ảnh',
        'Đặt tên và vị trí cho sprite'
      ],
      icon: '👾'
    },
    {
      concept: 'Sprite Properties',
      description: 'Tùy chỉnh thuộc tính sprite',
      properties: [
        'Size (kích thước): phóng to/thu nhỏ',
        'Direction (hướng): xoay sprite',
        'Position (vị trí): x, y coordinates',
        'Visibility (hiển thị): show/hide'
      ],
      icon: '⚙️'
    },
    {
      concept: 'Costumes',
      description: 'Thay đổi hình dạng sprite',
      features: [
        'Nhiều costume cho animation',
        'Chỉnh sửa costume trong editor',
        'Switch costume để tạo hiệu ứng',
        'Import costume từ file'
      ],
      icon: '🎭'
    }
  ];

  const soundFeatures = [
    {
      feature: 'Sound Library',
      description: 'Thư viện âm thanh có sẵn',
      categories: ['Animal sounds', 'Musical instruments', 'Effects', 'Human voices'],
      icon: '🎵'
    },
    {
      feature: 'Recording',
      description: 'Ghi âm trực tiếp trong Scratch',
      tools: ['Microphone recording', 'Trim audio', 'Volume control'],
      icon: '🎤'
    },
    {
      feature: 'Sound Blocks',
      description: 'Khối lệnh điều khiển âm thanh',
      blocks: ['play sound', 'play sound until done', 'set volume', 'change pitch'],
      icon: '🔊'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/scratch" className="text-green-400 hover:text-green-300 transition-colors duration-300">
              ← Quay lại Scratch
            </Link>
            {navConfig && (
              <div className="ml-auto text-sm text-gray-400">
                Bài {navConfig.progress.current} / {navConfig.progress.total}
              </div>
            )}
          </div>
          
          <div className="text-center">
            {lesson.imageUrl && (
              <div className="mb-6">
                <Image 
                  src={lesson.imageUrl} 
                  alt={lesson.title}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-2xl object-cover mx-auto shadow-lg border border-white/20"
                />
              </div>
            )}
            <div className="text-5xl mb-4">🎭</div>
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
              <span className="bg-teal-500/20 text-teal-200 px-3 py-1 rounded-full">
                🎯 {lesson.difficulty}
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

        {/* Sprite Management */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            👾 Quản Lý Sprites
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spriteManagement.map((concept, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{concept.icon}</div>
                  <h3 className="text-xl font-bold text-white">{concept.concept}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{concept.description}</p>
                
                {concept.steps && (
                  <div className="space-y-2">
                    <h4 className="text-green-300 text-sm font-semibold">Các bước:</h4>
                    <ol className="space-y-1">
                      {concept.steps.map((step, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-green-400 mr-2">{idx + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                
                {concept.properties && (
                  <div className="space-y-2">
                    <h4 className="text-blue-300 text-sm font-semibold">Thuộc tính:</h4>
                    <ul className="space-y-1">
                      {concept.properties.map((prop, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {prop}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {concept.features && (
                  <div className="space-y-2">
                    <h4 className="text-purple-300 text-sm font-semibold">Tính năng:</h4>
                    <ul className="space-y-1">
                      {concept.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sound Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🎵 Âm Thanh Trong Scratch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {soundFeatures.map((sound, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{sound.icon}</div>
                  <h3 className="text-xl font-bold text-white">{sound.feature}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{sound.description}</p>
                
                {sound.categories && (
                  <div className="space-y-2">
                    <h4 className="text-yellow-300 text-sm font-semibold">Danh mục:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sound.categories.map((cat, idx) => (
                        <span key={idx} className="bg-yellow-500/20 text-yellow-200 px-2 py-1 rounded text-xs">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {sound.tools && (
                  <div className="space-y-2">
                    <h4 className="text-orange-300 text-sm font-semibold">Công cụ:</h4>
                    <ul className="space-y-1">
                      {sound.tools.map((tool, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {sound.blocks && (
                  <div className="space-y-2">
                    <h4 className="text-pink-300 text-sm font-semibold">Khối lệnh:</h4>
                    <div className="space-y-1">
                      {sound.blocks.map((block, idx) => (
                        <div key={idx} className="bg-pink-500/20 text-pink-200 px-2 py-1 rounded text-xs font-mono">
                          {block}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Code Blocks */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🧩 Khối Lệnh Quan Trọng
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
            <div className="bg-gray-800/50 px-6 py-3 border-b border-white/10">
              <span className="text-green-400 font-mono text-sm">Scratch Blocks for Sprites & Sounds</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lesson.codeBlocks.map((block, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                    <span className="text-green-300 text-sm font-mono">{block}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🎭 Bài Tập Thực Hành
          </h2>
          
          <div className="space-y-6">
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
                
                {exercise.requiredBlocks && (
                  <div className="bg-teal-900/30 rounded-xl p-6 border border-teal-500/20 mb-4">
                    <h4 className="text-teal-300 font-semibold mb-3 flex items-center">
                      🧩 Khối Scratch cần sử dụng:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exercise.requiredBlocks.map((block, idx) => (
                        <div key={idx} className="bg-white/10 rounded-lg p-3 text-center">
                          <span className="text-teal-200 text-sm font-mono">{block}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {exercise.expectedBehavior && (
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">🎯 Kết quả mong đợi:</h4>
                      <p className="text-gray-300 text-sm">{exercise.expectedBehavior}</p>
                    </div>
                  )}
                  
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
              </div>
            ))}
          </div>
        </div>

        {/* Real World Applications */}
        <div className="bg-gradient-to-r from-teal-600/10 to-green-600/10 rounded-2xl p-8 border border-teal-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🌍 Ứng Dụng Thực Tế
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lesson.realWorldApplications.map((app, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎭</div>
                <div className="text-teal-300 text-sm font-semibold">{app}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {navConfig && (
          <ModuleNavigation navConfig={navConfig} />
        )}
      </div>
    </div>
  );
}
