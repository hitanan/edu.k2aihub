import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { roboticsLessons } from '@/data/robotics';

export const metadata: Metadata = {
  title: createTitle("Bài 3: Vi Điều Khiển Cơ Bản - Robotics"),
  description: createDescription("Học cách sử dụng Arduino và vi điều khiển để lập trình robot thông minh"),
  keywords: createKeywords(["arduino", "vi điều khiển", "lập trình robotics", "microcontroller"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 3: Vi Điều Khiển Cơ Bản"),
    description: createDescription("Bước đầu tiên vào lập trình robot với Arduino"),
    type: "website",
  },
};

export default function MicrocontrollerBasicsLesson() {
  const lesson = roboticsLessons.find(l => l.id === 'microcontroller-basics');
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/robotics" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
              ← Quay lại Robotics
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🧠</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {lesson.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              {lesson.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full">
                ⏱️ {lesson.duration}
              </span>
              <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full">
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
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Code Example */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            💻 Code Mẫu
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
            <div className="bg-gray-800/50 px-6 py-3 border-b border-white/10">
              <span className="text-green-400 font-mono text-sm">arduino_basic.ino</span>
            </div>
            <div className="p-6">
              <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                <code>{lesson.codeExample}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Materials Needed */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🛠️ Vật Liệu Cần Thiết
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lesson.materials.map((material, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">📦</div>
                <h3 className="text-lg font-bold text-white mb-2">{material}</h3>
              </div>
            ))}
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
                
                {exercise.code && (
                  <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 mb-4">
                    <div className="bg-gray-800/50 px-4 py-2 border-b border-gray-700">
                      <span className="text-green-400 font-mono text-sm">{exercise.title.toLowerCase().replace(/ /g, '_')}.ino</span>
                    </div>
                    <div className="p-4">
                      <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                        <code>{exercise.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
                
                {exercise.expectedOutput && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-4">
                    <h4 className="text-green-300 font-semibold mb-2">📊 Kết quả mong đợi:</h4>
                    <p className="text-gray-300 text-sm">{exercise.expectedOutput}</p>
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
            ))}
          </div>
        </div>

        {/* Real World Applications */}
        <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-2xl p-8 border border-green-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🌍 Ứng Dụng Thực Tế
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lesson.realWorldApplications.map((app, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🏠</div>
                <div className="text-green-300 text-sm font-semibold">{app}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/robotics/basic-electronics"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            ← Bài trước: Điện tử cơ bản
          </Link>
          
          <Link 
            href="/robotics/sensors-actuators"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300"
          >
            Bài tiếp theo: Cảm biến →
          </Link>
        </div>
      </div>
    </div>
  );
}
