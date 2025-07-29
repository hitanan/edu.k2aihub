import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { arduinoLessons } from '@/data/arduino';

export const metadata: Metadata = {
  title: createTitle("Bài 5: Dự Án Arduino Nâng Cao - Arduino Programming"),
  description: createDescription("Tích hợp tất cả kiến thức để tạo ra các dự án thực tế và phức tạp với Arduino"),
  keywords: createKeywords(["arduino advanced", "iot projects", "smart systems", "arduino integration", "real world projects"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 5: Dự Án Arduino Nâng Cao"),
    description: createDescription("Các dự án Arduino phức tạp và ứng dụng thực tế"),
    type: "website",
  },
};

export default function ArduinoAdvancedProjectsLesson() {
  const lesson = arduinoLessons.find(l => l.id === 'arduino-advanced-projects');
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const projectTypes = [
    {
      title: 'Smart Environmental Station',
      description: 'Trạm quan trắc môi trường với multiple sensors',
      features: ['Temperature/Humidity monitoring', 'Air quality measurement', 'Data logging to SD card', 'Web dashboard', 'Cloud integration'],
      complexity: 'Cao',
      icon: '🌡️',
      color: 'from-green-600/20 to-blue-600/20'
    },
    {
      title: 'Home Automation System',
      description: 'Hệ thống nhà thông minh hoàn chỉnh',
      features: ['Smart lighting control', 'Security system', 'Voice commands', 'Mobile app control', 'Energy monitoring'],
      complexity: 'Rất cao',
      icon: '🏠',
      color: 'from-purple-600/20 to-pink-600/20'
    },
    {
      title: 'Agricultural Monitoring',
      description: 'Giải pháp nông nghiệp thông minh',
      features: ['Soil moisture sensing', 'Automatic irrigation', 'Weather prediction', 'Crop monitoring', 'Remote alerts'],
      complexity: 'Cao',
      icon: '🌱',
      color: 'from-yellow-600/20 to-green-600/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/arduino" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
              ← Quay lại Arduino
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {lesson.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              {lesson.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full">
                ⏱️ {lesson.duration}
              </span>
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full">
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
                <span className="text-indigo-400 mr-3 mt-1">✓</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Advanced Project Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🚀 Các Loại Dự Án Nâng Cao
          </h2>
          
          <div className="space-y-8">
            {projectTypes.map((project, index) => (
              <div key={index} className={`bg-gradient-to-r ${project.color} rounded-2xl p-8 border border-white/20`}>
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-6">{project.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs ${
                      project.complexity === 'Cao' ? 'bg-yellow-500/20 text-yellow-200' : 'bg-red-500/20 text-red-200'
                    }`}>
                      Độ phức tạp: {project.complexity}
                    </span>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">✨ Tính năng chính:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <span className="text-green-400 mr-3">•</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Project Code Example */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            💻 Code Mẫu - Smart Environmental Station
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
            <div className="bg-gray-800/50 px-6 py-3 border-b border-white/10 flex justify-between items-center">
              <span className="text-indigo-400 font-mono text-sm">smart_environmental_station.ino</span>
              <span className="text-gray-400 text-xs">Complete IoT Project</span>
            </div>
            <div className="p-6">
              <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                <code>{lesson.codeExample}</code>
              </pre>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
              <h4 className="text-blue-300 font-semibold mb-2">🌐 WiFi & Connectivity</h4>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Auto-reconnect WiFi</li>
                <li>• HTTP POST to cloud</li>
                <li>• JSON data format</li>
                <li>• Error handling</li>
              </ul>
            </div>
            
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <h4 className="text-green-300 font-semibold mb-2">📊 Data Management</h4>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Multiple sensor reading</li>
                <li>• Data validation</li>
                <li>• Timestamp integration</li>
                <li>• Local storage backup</li>
              </ul>
            </div>
            
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
              <h4 className="text-purple-300 font-semibold mb-2">🎛️ User Interface</h4>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• OLED display output</li>
                <li>• Real-time updates</li>
                <li>• Status indicators</li>
                <li>• Mobile dashboard</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advanced Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧩 Dự Án Thực Hành Nâng Cao
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
                
                <p className="text-gray-300 mb-6">{exercise.description}</p>
                
                {/* Project Architecture */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-indigo-300 mb-3">🏗️ Kiến trúc dự án:</h4>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl mb-2">📱</div>
                        <div className="text-blue-300 font-semibold">Hardware Layer</div>
                        <div className="text-gray-400">Sensors & Actuators</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">🔄</div>
                        <div className="text-green-300 font-semibold">Logic Layer</div>
                        <div className="text-gray-400">Arduino Processing</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">🌐</div>
                        <div className="text-purple-300 font-semibold">Communication</div>
                        <div className="text-gray-400">IoT & Web Interface</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 mb-6">
                  <div className="bg-gray-800/50 px-4 py-2 border-b border-gray-700">
                    <span className="text-indigo-400 font-mono text-sm">{exercise.title.toLowerCase().replace(/ /g, '_')}.ino</span>
                  </div>
                  <div className="p-4">
                    <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                      <code>{exercise.code}</code>
                    </pre>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">📊 Kết quả mong đợi:</h4>
                      <p className="text-gray-300 text-sm">{exercise.expectedOutput}</p>
                    </div>
                    
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <h4 className="text-yellow-300 font-semibold mb-2">💡 Gợi ý phát triển:</h4>
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
                  
                  <div className="space-y-4">
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
                    
                    <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
                      <h4 className="text-indigo-300 font-semibold mb-2">🔮 Mở rộng:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Machine Learning integration</li>
                        <li>• Mobile app development</li>
                        <li>• Cloud analytics dashboard</li>
                        <li>• Real-time notifications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl p-8 border border-indigo-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🏭 Ứng Dụng Thực Tế Trong Công Nghiệp
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lesson.realWorldApplications.map((app, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">🏗️</div>
                <div className="text-indigo-300 text-sm font-semibold mb-2">{app}</div>
                <div className="text-gray-400 text-xs">Production Ready Solution</div>
              </div>
            ))}
          </div>
        </div>

        {/* Competition & Portfolio */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🏆 Cuộc Thi & Portfolio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-indigo-300 mb-4">📋 Các cuộc thi phù hợp:</h3>
              <ul className="space-y-2">
                {lesson.competitions.map((comp, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="text-yellow-400 mr-3">🏅</span>
                    {comp}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-4">💼 Xây dựng Portfolio:</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Document dự án với video demo
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  GitHub repository với code hoàn chỉnh
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Technical blog posts về challenges
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  3D models và circuit diagrams
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Cost analysis và business case
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/arduino/arduino-communication"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            ← Bài trước: Communication
          </Link>
          
          <Link 
            href="/arduino"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
          >
            Hoàn thành khóa học 🎉
          </Link>
        </div>
      </div>
    </div>
  );
}
