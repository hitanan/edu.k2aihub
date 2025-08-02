import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { roboticsLessons } from '@/data/robotics';
import { getModuleNavigation, getNavigationConfig } from '@/utils/moduleNavigation';

export const metadata: Metadata = {
  title: createTitle("Bài 2: Điện Tử Cơ Bản - Robotics"),
  description: createDescription("Học kiến thức điện tử cần thiết cho robotics: LED, nút nhấn, cảm biến và mạch cơ bản"),
  keywords: createKeywords(["điện tử cơ bản", "LED", "breadboard", "mạch điện", "robotics"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 2: Điện Tử Cơ Bản cho Robotics"),
    description: createDescription("Nền tảng điện tử quan trọng để hiểu cách robot hoạt động"),
    type: "website",
  },
};

export default function BasicElectronicsLesson() {
  const lesson = roboticsLessons.find(l => l.id === 'basic-electronics');
  const navigation = getModuleNavigation('robotics', 'basic-electronics');
  const navConfig = navigation ? getNavigationConfig(navigation, '/robotics') : null;
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const components = [
    {
      name: 'LED (Light Emitting Diode)',
      description: 'Đèn phát sáng khi có dòng điện chạy qua',
      properties: ['Có cực dương (+) và cực âm (-)', 'Cần điện trở bảo vệ', 'Nhiều màu sắc khác nhau'],
      icon: '💡',
      price: '500đ/cái'
    },
    {
      name: 'Điện trở (Resistor)',
      description: 'Hạn chế dòng điện trong mạch',
      properties: ['Đơn vị: Ohm (Ω)', 'Có nhiều giá trị khác nhau', 'Đọc giá trị qua màu sắc'],
      icon: '⚡',
      price: '200đ/cái'
    },
    {
      name: 'Nút nhấn (Push Button)',
      description: 'Công tắc tạm thời, chỉ hoạt động khi nhấn',
      properties: ['4 chân kết nối', 'Normally Open (NO)', 'Cần pull-up resistor'],
      icon: '🔘',
      price: '2,000đ/cái'
    },
    {
      name: 'Breadboard',
      description: 'Bảng mạch thử nghiệm không cần hàn',
      properties: ['Kết nối tạm thời', 'Có rails điện và signal', 'Tái sử dụng được'],
      icon: '📋',
      price: '50,000đ/cái'
    }
  ];

  const projects = [
    {
      title: 'Đèn LED Cơ Bản',
      description: 'Tạo mạch LED đơn giản với pin và điện trở',
      difficulty: 'Dễ',
      time: '15 phút',
      components: ['LED', 'Điện trở 220Ω', 'Pin 9V', 'Dây nối'],
      learning: ['Hiểu về cực của LED', 'Tính toán điện trở', 'Kết nối mạch cơ bản'],
      icon: '🔆'
    },
    {
      title: 'Đèn Giao Thông Mini',
      description: 'Hệ thống 3 LED mô phỏng đèn giao thông',
      difficulty: 'Trung bình',
      time: '30 phút',
      components: ['3 LED (đỏ, vàng, xanh)', '3 điện trở', 'Arduino', 'Breadboard'],
      learning: ['Điều khiển nhiều LED', 'Timing sequence', 'Lập trình Arduino cơ bản'],
      icon: '🚦'
    },
    {
      title: 'Nút Nhấn Điều Khiển',
      description: 'Sử dụng nút nhấn để bật/tắt LED',
      difficulty: 'Trung bình',
      time: '25 phút',
      components: ['LED', 'Push button', 'Pull-up resistor', 'Arduino'],
      learning: ['Input processing', 'Debouncing', 'State management'],
      icon: '⚙️'
    }
  ];

  const safetyTips = [
    {
      title: 'Kiểm tra cực tính',
      description: 'Luôn kiểm tra cực dương và âm của LED và pin trước khi kết nối',
      icon: '⚠️'
    },
    {
      title: 'Sử dụng điện trở',
      description: 'Không bao giờ kết nối LED trực tiếp với nguồn mà không có điện trở',
      icon: '🛡️'
    },
    {
      title: 'Kiểm tra kết nối',
      description: 'Kiểm tra tất cả kết nối trước khi cấp nguồn cho mạch',
      icon: '🔍'
    },
    {
      title: 'Nguồn điện an toàn',
      description: 'Sử dụng nguồn điện thấp (3.3V, 5V) cho các thí nghiệm đầu tiên',
      icon: '🔋'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/robotics" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
              ← Quay lại Robotics
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
            <div className="text-5xl mb-4">⚡</div>
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
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full">
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

        {/* Electronic Components */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🔧 Linh Kiện Điện Tử Cơ Bản
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {components.map((component, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{component.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{component.name}</h3>
                    <span className="text-green-300 text-sm">{component.price}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{component.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-yellow-300 text-sm font-semibold">Đặc điểm:</h4>
                  <ul className="space-y-1">
                    {component.properties.map((prop, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        {prop}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🛡️ An Toàn Điện Tử
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyTips.map((tip, index) => (
              <div key={index} className="bg-red-500/10 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">{tip.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                    <p className="text-gray-300 text-sm">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🛠️ Dự Án Thực Hành
          </h2>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{project.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.difficulty === 'Dễ' ? 'bg-green-500/20 text-green-200' :
                      'bg-yellow-500/20 text-yellow-200'
                    }`}>
                      {project.difficulty}
                    </span>
                    <div className="text-blue-300 text-sm mt-1">⏱️ {project.time}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-blue-300 text-sm font-semibold mb-2">Linh kiện cần:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.components.map((comp, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-green-300 text-sm font-semibold mb-2">Kiến thức học được:</h4>
                    <ul className="space-y-1">
                      {project.learning.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-xs flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧩 Bài Tập Thực Hành
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
              <div key={index} className="bg-white/10 rounded-lg p-4">
                <div className="text-green-300 text-sm font-semibold">{app}</div>
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
