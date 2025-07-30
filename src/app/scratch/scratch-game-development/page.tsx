import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { scratchLessons } from '@/data/scratch';
import { getModuleNavigation, getNavigationConfig } from '@/utils/moduleNavigation';
import YouTubePlayer from '@/components/YouTubePlayer';

export const metadata: Metadata = {
  title: createTitle("Phát Triển Game - Scratch"),
  description: createDescription("Tạo game hoàn chỉnh với Scratch programming"),
  keywords: createKeywords(["scratch game", "game development", "scratch projects", "interactive games", "programming games"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Phát Triển Game với Scratch"),
    description: createDescription("Học cách tạo game thú vị với Scratch"),
    type: "website",
  },
};

export default function ScratchGameDevelopmentLesson() {
  const lesson = scratchLessons.find(l => l.id === 'scratch-game-development');
  const navigation = getModuleNavigation('scratch', 'scratch-game-development');
  const navConfig = navigation ? getNavigationConfig(navigation, '/scratch') : null;
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/scratch" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
              ← Quay lại Scratch
            </Link>
            {navConfig && (
              <div className="ml-auto text-sm text-gray-400">
                Bài {navConfig.progress.current} / {navConfig.progress.total}
              </div>
            )}
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🎮</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {lesson.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              {lesson.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full">
                ⏱️ {lesson.duration}
              </span>
              <span className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full">
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
                <span className="text-purple-400 mr-3 mt-1">✓</span>
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

        {/* Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🎮 Dự Án Game
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
                
                {exercise.requiredBlocks && (
                  <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20 mb-4">
                    <h4 className="text-purple-300 font-semibold mb-3 flex items-center">
                      🧩 Khối Scratch cần sử dụng:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {exercise.requiredBlocks.map((block, idx) => (
                        <div key={idx} className="bg-white/10 rounded-lg p-3 text-center">
                          <span className="text-purple-200 text-sm font-mono">{block}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {exercise.expectedBehavior && (
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">🎯 Game Features:</h4>
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

                {exercise.steps && (
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-3">🎮 Các bước phát triển game:</h4>
                    <ol className="space-y-2">
                      {exercise.steps.map((step, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">{idx + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Game Development Tips */}
        <div className="bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-2xl p-8 border border-pink-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🎯 Tips Phát Triển Game
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-pink-300">🎨 Game Design</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Tạo storyline thú vị cho game</li>
                <li>• Thiết kế character đặc sắc</li>
                <li>• Cân bằng độ khó của game</li>
                <li>• Thêm sound effects hấp dẫn</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-300">⚡ Programming Tips</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Sử dụng variables để track score</li>
                <li>• Tạo collision detection chính xác</li>
                <li>• Implement level progression</li>
                <li>• Test game thoroughly</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real World Applications */}
        {lesson.realWorldApplications && lesson.realWorldApplications.length > 0 && (
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-500/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              🌍 Ứng Dụng Thực Tế
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lesson.realWorldApplications.map((app, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎮</div>
                  <div className="text-purple-300 text-sm font-semibold">{app}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        {navConfig && (
          <div className="flex justify-between items-center">
            <Link 
              href={navConfig.previous.href}
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              {navConfig.previous.label}
            </Link>
            
            <Link 
              href={navConfig.next.href}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              {navConfig.next.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
