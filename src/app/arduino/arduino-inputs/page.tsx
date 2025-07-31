import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { arduinoLessons } from '@/data/arduino';
import YouTubePlayer from '@/components/YouTubePlayer';

export const metadata: Metadata = {
  title: createTitle("Bài 2: Đọc Input và Điều Khiển - Arduino"),
  description: createDescription("Học cách đọc tín hiệu từ buttons, potentiometer và tạo tương tác với Arduino"),
  keywords: createKeywords(["arduino input", "button arduino", "potentiometer", "analog digital"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 2: Đọc Input và Điều Khiển"),
    description: createDescription("Tạo tương tác với Arduino thông qua input controls"),
    type: "website",
  },
};

export default function ArduinoInputsLesson() {
  const lesson = arduinoLessons.find(l => l.id === 'arduino-inputs');
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const inputTypes = [
    {
      type: 'Digital Input',
      description: 'Chỉ có 2 trạng thái: HIGH (1) hoặc LOW (0)',
      examples: ['Button', 'Switch', 'PIR Sensor'],
      function: 'digitalRead()',
      icon: '🔘'
    },
    {
      type: 'Analog Input',
      description: 'Có thể có nhiều mức giá trị từ 0-1023',
      examples: ['Potentiometer', 'LDR', 'Temperature Sensor'],
      function: 'analogRead()',
      icon: '📊'
    }
  ];

  const concepts = [
    {
      title: 'Pull-up Resistor',
      description: 'Điện trở kéo lên để đảm bảo input ổn định khi không có tín hiệu',
      usage: 'INPUT_PULLUP trong pinMode()',
      benefit: 'Tránh floating input, giảm nhiễu',
      icon: '⬆️'
    },
    {
      title: 'Debouncing',
      description: 'Kỹ thuật loại bỏ nhiễu khi nhấn button',
      usage: 'delay() hoặc kiểm tra trạng thái trước đó',
      benefit: 'Đọc button chính xác, tránh đếm sai',
      icon: '🔄'
    },
    {
      title: 'PWM Output',
      description: 'Tạo tín hiệu analog từ digital bằng pulse width modulation',
      usage: 'analogWrite() với giá trị 0-255',
      benefit: 'Điều khiển độ sáng LED, tốc độ motor',
      icon: '📡'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/arduino" className="text-green-400 hover:text-green-300 transition-colors duration-300">
              ← Quay lại Arduino
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🎛️</div>
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

        {/* Input Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            📥 Các Loại Input
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inputTypes.map((input, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{input.icon}</div>
                  <h3 className="text-xl font-bold text-white">{input.type}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{input.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-blue-300 text-sm font-semibold mb-2">Ví dụ:</h4>
                    <div className="flex flex-wrap gap-2">
                      {input.examples.map((example, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <code className="text-green-300 text-sm">{input.function}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Concepts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧠 Khái Niệm Quan Trọng
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {concepts.map((concept, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4 text-center">{concept.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">{concept.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{concept.description}</p>
                
                <div className="space-y-2">
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                    <span className="text-yellow-300 text-xs font-semibold">Cách dùng: </span>
                    <span className="text-gray-300 text-xs">{concept.usage}</span>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <span className="text-green-300 text-xs font-semibold">Lợi ích: </span>
                    <span className="text-gray-300 text-xs">{concept.benefit}</span>
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
              <span className="text-green-400 font-mono text-sm">button_led_control.ino</span>
            </div>
            <div className="p-6">
              <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                <code>{lesson.codeExample}</code>
              </pre>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
            <h4 className="text-blue-300 font-semibold mb-2">💡 Giải thích code:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <code className="text-yellow-300">INPUT_PULLUP</code>: Kích hoạt điện trở kéo lên nội bộ</li>
              <li>• <code className="text-yellow-300">digitalRead()</code>: Đọc trạng thái HIGH/LOW</li>
              <li>• <code className="text-yellow-300">LOW</code>: Button được nhấn (do pull-up)</li>
              <li>• <code className="text-yellow-300">delay(50)</code>: Debouncing để tránh nhiễu</li>
            </ul>
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
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-4">
                  <h4 className="text-green-300 font-semibold mb-2">📊 Kết quả mong đợi:</h4>
                  <p className="text-gray-300 text-sm">{exercise.expectedOutput}</p>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-4">
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
                <div className="text-2xl mb-2">🎛️</div>
                <div className="text-green-300 text-sm font-semibold">{app}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/arduino/led-digital-outputs"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            ← Bài trước: LED & Digital Outputs
          </Link>
          
          <Link 
            href="/arduino/arduino-sensors"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300"
          >
            Bài tiếp theo: Cảm biến →
          </Link>
        </div>
      </div>
    </div>
  );
}
