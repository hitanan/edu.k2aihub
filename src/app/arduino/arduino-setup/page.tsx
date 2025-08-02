import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { arduinoLessons } from '@/data/arduino';

export const metadata: Metadata = {
  title: createTitle("Bài 1: Arduino Setup - Arduino Programming"),
  description: createDescription("Học cách cài đặt Arduino IDE, kết nối board và viết chương trình đầu tiên"),
  keywords: createKeywords(["arduino setup", "arduino ide", "arduino programming", "electronics"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 1: Arduino Setup"),
    description: createDescription("Bắt đầu với Arduino - cài đặt và chương trình đầu tiên"),
    type: "website",
  },
};

export default function ArduinoSetupLesson() {
  const lesson = arduinoLessons.find(l => l.id === 'arduino-setup');
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/arduino" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
              ← Quay lại Arduino
            </Link>
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
            <div className="text-5xl mb-4">🔧</div>
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
              <span className="bg-cyan-500/20 text-cyan-200 px-3 py-1 rounded-full">
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
                <span className="text-blue-400 mr-3 mt-1">⚡</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Materials Needed */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🔧 Dụng Cụ Cần Thiết
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lesson.materials.map((material, index) => (
              <div key={index} className="bg-blue-500/20 rounded-lg p-4 border border-blue-300/30">
                <span className="text-blue-200 flex items-center">
                  <span className="text-yellow-400 mr-2">🔹</span>
                  {material}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Tutorial */}
        {lesson.videoUrl && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              🎥 Video Hướng Dẫn
            </h2>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <a 
                href={lesson.videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
              >
                ▶️ Xem Video Tutorial
              </a>
            </div>
          </div>
        )}

        {/* Code Example */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            � Ví Dụ Code
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-300 text-sm">
              <code>{lesson.codeExample}</code>
            </pre>
          </div>
          <div className="mt-4 p-4 bg-blue-500/20 rounded-lg border border-blue-300/30">
            <p className="text-blue-200 text-sm">
              💡 <strong>Gợi ý:</strong> Copy code này vào Arduino IDE và upload lên board để test!
            </p>
          </div>
        </div>

        {/* Exercises */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🏋️ Bài Tập Thực Hành
          </h2>
          <div className="grid gap-6">
            {lesson.exercises.map((exercise, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/30">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    exercise.difficulty === 'Dễ' ? 'bg-green-500/20 text-green-200' :
                    exercise.difficulty === 'Trung bình' ? 'bg-yellow-500/20 text-yellow-200' :
                    'bg-red-500/20 text-red-200'
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{exercise.description}</p>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-300 text-sm overflow-x-auto">
                    <code>{exercise.code}</code>
                  </pre>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-2">📋 Kết Quả Mong Đợi:</h4>
                  <p className="text-gray-300 bg-gray-800 p-3 rounded-lg">{exercise.expectedOutput}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">💡 Gợi Ý:</h4>
                    <ul className="space-y-1">
                      {exercise.hints.map((hint, hintIndex) => (
                        <li key={hintIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {hint}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-red-300 mb-2">🔧 Troubleshooting:</h4>
                    <ul className="space-y-1">
                      {exercise.troubleshooting.map((issue, issueIndex) => (
                        <li key={issueIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          {issue}
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
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🌍 Ứng Dụng Thực Tế
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lesson.realWorldApplications.map((application, index) => (
              <div key={index} className="bg-green-500/20 rounded-lg p-4 border border-green-300/30">
                <span className="text-green-200 flex items-center">
                  <span className="text-yellow-400 mr-2">🚀</span>
                  {application}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Competitions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🏆 Cuộc Thi Liên Quan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.competitions.map((competition, index) => (
              <div key={index} className="bg-purple-500/20 rounded-lg p-4 border border-purple-300/30">
                <span className="text-purple-200 flex items-center">
                  <span className="text-yellow-400 mr-2">🏅</span>
                  {competition}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/arduino"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            ← Quay lại Arduino
          </Link>
          
          <Link 
            href="/arduino/arduino-inputs"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
          >
            Bài tiếp theo: Inputs →
          </Link>
        </div>
      </div>
    </div>
  );
}
