import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { arduinoLessons } from '@/data/arduino';
import YouTubePlayer from '@/components/YouTubePlayer';
import ModuleNavigation from '@/components/ModuleNavigation';
import { getModuleNavigation, getNavigationConfig } from '@/utils/moduleNavigation';

export const metadata: Metadata = {
  title: createTitle("Bài 1: Làm Quen Với Arduino - Cơ Bản Arduino"),
  description: createDescription("Học cách cài đặt Arduino IDE, hiểu về bo mạch Arduino và viết chương trình đầu tiên - Blink LED"),
  keywords: createKeywords(["arduino cơ bản", "arduino ide", "blink led", "vi điều khiển", "electronics"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 1: Làm Quen Với Arduino"),
    description: createDescription("Bước đầu tiên trong hành trình học Arduino - từ cài đặt IDE đến chương trình Hello World"),
    type: "website",
  },
};

export default function ArduinoBasicsLesson() {
  const lesson = arduinoLessons.find(l => l.id === 'arduino-setup');
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }
  
  const navigation = getModuleNavigation('arduino', 'arduino-basics');
  const navConfig = navigation ? getNavigationConfig(navigation, '/arduino') : null;
  const lessonContent = {
    title: lesson.title,
    description: lesson.description,
    duration: lesson.duration,
    difficulty: lesson.difficulty,
    objectives: lesson.objectives
  };

  const codeExample = lesson.codeExample;

  const steps = [
    {
      title: 'Bước 1: Tìm hiểu về Arduino',
      content: 'Arduino là một nền tảng điện tử mã nguồn mở, dựa trên phần cứng và phần mềm dễ sử dụng. Bo mạch Arduino có thể đọc tín hiệu đầu vào và biến đổi thành tín hiệu đầu ra.',
      icon: '🔍'
    },
    {
      title: 'Bước 2: Cài đặt Arduino IDE',
      content: 'Tải và cài đặt Arduino IDE từ arduino.cc. IDE là môi trường phát triển tích hợp giúp bạn viết, biên dịch và upload code lên bo mạch Arduino.',
      icon: '💻'
    },
    {
      title: 'Bước 3: Kết nối Arduino',
      content: 'Sử dụng cáp USB để kết nối Arduino với máy tính. Chọn đúng board và port trong Arduino IDE (Tools > Board và Tools > Port).',
      icon: '🔌'
    },
    {
      title: 'Bước 4: Viết code đầu tiên',
      content: 'Nhập đoạn code Blink LED vào Arduino IDE. Code này sẽ làm cho LED onboard (pin 13) nhấp nháy mỗi giây.',
      icon: '📝'
    },
    {
      title: 'Bước 5: Upload và kiểm tra',
      content: 'Click nút Upload (mũi tên sang phải) để biên dịch và tải code lên Arduino. Quan sát LED trên bo mạch nhấp nháy.',
      icon: '⬆️'
    }
  ];

  const components = lesson.materials.map((material, index) => ({
    name: material,
    description: `Thiết bị cần thiết cho bài học ${lesson.title}`,
    image: index === 0 ? '🔧' : index === 1 ? '🔌' : index === 2 ? '💻' : index === 3 ? '💡' : '⚡'
  }));

  const exercises = lesson.exercises;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/arduino" className="text-green-400 hover:text-green-300 transition-colors duration-300">
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
              {lessonContent.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              {lessonContent.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full">
                ⏱️ {lessonContent.duration}
              </span>
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full">
                🎯 {lessonContent.difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🎯 Mục Tiêu Bài Học
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lessonContent.objectives.map((objective, index) => (
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

        {/* Step-by-step Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            📋 Hướng Dẫn Từng Bước
          </h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{step.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Example */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            💻 Code Mẫu
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
            <div className="bg-gray-800/50 px-6 py-3 border-b border-white/10">
              <span className="text-green-400 font-mono text-sm">arduino_blink.ino</span>
            </div>
            <div className="p-6">
              <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
            <h4 className="text-blue-300 font-semibold mb-2">💡 Giải thích code:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <code className="text-yellow-300">setup()</code>: Chạy một lần khi Arduino khởi động</li>
              <li>• <code className="text-yellow-300">loop()</code>: Chạy liên tục sau khi setup() hoàn thành</li>
              <li>• <code className="text-yellow-300">pinMode()</code>: Thiết lập pin là input hay output</li>
              <li>• <code className="text-yellow-300">digitalWrite()</code>: Ghi giá trị HIGH hoặc LOW cho pin</li>
              <li>• <code className="text-yellow-300">delay()</code>: Dừng chương trình trong một khoảng thời gian (ms)</li>
            </ul>
          </div>
        </div>

        {/* Components Needed */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🛠️ Linh Kiện Cần Thiết
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {components.map((component, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">{component.image}</div>
                <h3 className="text-lg font-bold text-white mb-2">{component.name}</h3>
                <p className="text-gray-300 text-sm">{component.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🧩 Bài Tập Thực Hành
          </h2>
          
          <div className="space-y-6">
            {exercises.map((exercise, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white">{exercise.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    exercise.difficulty === 'Dễ' ? 'bg-green-500/20 text-green-200' :
                    exercise.difficulty === 'Trung bình' ? 'bg-yellow-500/20 text-yellow-200' :
                    'bg-red-500/20 text-red-200'
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
                <p className="text-gray-300 mb-3">{exercise.description}</p>
                
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-2">📊 Kết quả mong đợi:</h4>
                    <p className="text-gray-300 text-sm">{exercise.expectedOutput}</p>
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
                
                {exercise.troubleshooting && exercise.troubleshooting.length > 0 && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="text-red-300 font-semibold mb-2">🔧 Troubleshooting:</h4>
                    <ul className="space-y-1">
                      {exercise.troubleshooting.map((issue, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Real World Applications */}
        {lesson.realWorldApplications && lesson.realWorldApplications.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              🌟 Ứng Dụng Thực Tế
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lesson.realWorldApplications.map((application, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                  <div className="text-3xl mb-3 text-center">🚀</div>
                  <h3 className="text-lg font-bold text-white mb-3 text-center">Ứng dụng {index + 1}</h3>
                  <p className="text-gray-300 text-sm text-center">{application}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        {navConfig && (
          <ModuleNavigation navConfig={navConfig} />
        )}
      </div>
    </div>
  );
}
