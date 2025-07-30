import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("Học Arduino & IoT - Lập Trình Phần Cứng"),
  description: createDescription("Khóa học Arduino và IoT từ cơ bản đến nâng cao. Học cách lập trình vi điều khiển, kết nối cảm biến và xây dựng dự án IoT thông minh"),
  keywords: createKeywords(["arduino", "IoT", "vi điều khiển", "cảm biến", "lập trình phần cứng", "electronics", "ESP32", "WiFi"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Học Arduino & IoT - K2AiHub"),
    description: createDescription("Khám phá thế giới IoT và điện tử với Arduino - từ LED đơn giản đến hệ thống thông minh"),
    type: "website",
  },
};

export default function ArduinoModule() {
  const moduleInfo = {
    title: '⚡ Arduino & IoT',
    description: 'Thực hành với Arduino để tạo ra các dự án IoT thú vị. Từ LED đơn giản đến hệ thống thông minh.',
    icon: '⚡',
    difficulty: 'Trung cấp',
    duration: '20 giờ học',
  };

  const arduinoLessons = [
    {
      id: 'arduino-basics',
      title: 'Làm Quen Với Arduino',
      description: 'Giới thiệu về Arduino, thiết lập môi trường phát triển và chương trình đầu tiên',
      icon: '🔧',
      difficulty: 'Cơ bản',
      duration: '60 phút',
      href: '/arduino/arduino-basics',
      objectives: [
        'Hiểu về bo mạch Arduino và các thành phần',
        'Cài đặt và sử dụng Arduino IDE',
        'Viết và upload chương trình đầu tiên',
        'Hiểu cấu trúc cơ bản của Arduino sketch'
      ],
      topics: ['Arduino IDE', 'Hardware', 'Setup', 'Blink LED']
    },
    {
      id: 'arduino-setup',
      title: 'Cài Đặt và Cấu Hình Arduino',
      description: 'Hướng dẫn chi tiết cài đặt Arduino IDE, drivers và cấu hình môi trường phát triển',
      icon: '⚙️',
      difficulty: 'Cơ bản',
      duration: '45 phút',
      href: '/arduino/arduino-setup',
      objectives: [
        'Cài đặt Arduino IDE thành công',
        'Hiểu cấu trúc của Arduino board',
        'Kết nối Arduino với máy tính',
        'Upload chương trình đầu tiên'
      ],
      topics: ['IDE Installation', 'Drivers', 'Board Configuration', 'First Upload']
    },
    {
      id: 'arduino-communication',
      title: 'Giao Tiếp và Networking',
      description: 'Serial, I2C, SPI communication và kết nối WiFi/Bluetooth với Arduino',
      icon: '🌐',
      difficulty: 'Trung bình',
      duration: '120 phút',
      href: '/arduino/arduino-communication',
      objectives: [
        'Hiểu các giao thức giao tiếp',
        'Sử dụng Serial, I2C, SPI',
        'Kết nối WiFi với ESP32',
        'Xây dựng web server đơn giản'
      ],
      topics: ['Serial Communication', 'I2C', 'SPI', 'WiFi', 'Web Server']
    },
    {
      id: 'arduino-sensors',
      title: 'Sensors và Data Processing',
      description: 'Kết nối và xử lý dữ liệu từ các loại sensor phổ biến',
      icon: '�',
      difficulty: 'Trung bình',
      duration: '90 phút',
      href: '/arduino/arduino-sensors',
      objectives: [
        'Kết nối cảm biến nhiệt độ, độ ẩm',
        'Đọc và xử lý dữ liệu analog/digital',
        'Hiển thị dữ liệu trên Serial Monitor',
        'Tích hợp nhiều sensor trong một dự án'
      ],
      topics: ['DHT22', 'LDR', 'Ultrasonic', 'Serial Communication', 'Data Processing']
    },
    {
      id: 'arduino-advanced-projects',
      title: 'Advanced Arduino Projects',
      description: 'Xây dựng các dự án Arduino phức tạp và thực tế với tích hợp IoT',
      icon: '🚀',
      difficulty: 'Nâng cao',
      duration: '180 phút',
      href: '/arduino/arduino-advanced-projects',
      objectives: [
        'Tích hợp nhiều cảm biến và actuator',
        'Tạo dashboard web với real-time data',
        'Xây dựng hệ thống cảnh báo thông minh',
        'Kết nối cloud và mobile app'
      ],
      topics: ['System Integration', 'Dashboard', 'Alert System', 'IoT', 'Cloud Connectivity']
    }
  ];

  const arduinoProjects = [
    {
      title: 'Trạm Thời Tiết',
      description: 'Đo nhiệt độ, độ ẩm và hiển thị dữ liệu real-time trên web',
      icon: '🌤️',
      difficulty: 'Trung bình',
      components: ['DHT22', 'ESP32', 'LCD', 'WiFi'],
      features: ['Web Dashboard', 'Data Logging', 'Alert System']
    },
    {
      title: 'Hệ Thống An Ninh',
      description: 'Camera giám sát với cảm biến chuyển động và cảnh báo qua app',
      icon: '🔒',
      difficulty: 'Nâng cao',
      components: ['ESP32-CAM', 'PIR Sensor', 'Buzzer', 'LED'],
      features: ['Motion Detection', 'Live Streaming', 'Mobile Notification']
    },
    {
      title: 'Nhà Thông Minh',
      description: 'Điều khiển đèn, quạt, cửa thông qua giọng nói và app di động',
      icon: '🏡',
      difficulty: 'Nâng cao',
      components: ['ESP32', 'Relay Module', 'Voice Recognition', 'Servo'],
      features: ['Voice Control', 'Mobile App', 'Automation', 'Schedule']
    }
  ];

  const hardwareComponents = [
    {
      name: 'Arduino Uno',
      description: 'Bo mạch vi điều khiển cơ bản, phù hợp cho người mới bắt đầu',
      icon: '🔧',
      price: '~300.000 VND'
    },
    {
      name: 'ESP32',
      description: 'Vi điều khiển tích hợp WiFi và Bluetooth cho dự án IoT',
      icon: '📶',
      price: '~150.000 VND'
    },
    {
      name: 'Cảm Biến DHT22',
      description: 'Cảm biến nhiệt độ và độ ẩm chính xác cao',
      icon: '🌡️',
      price: '~80.000 VND'
    },
    {
      name: 'Servo Motor',
      description: 'Motor chính xác cao để điều khiển chuyển động',
      icon: '⚙️',
      price: '~50.000 VND'
    }
  ];

  const { title, description, icon, difficulty, duration } = moduleInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-teal-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">{icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="bg-white/10 px-3 py-1 rounded-full">🎯 {difficulty}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">⏱️ {duration}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">📚 {arduinoLessons.length} bài học</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            📚 Nội Dung Khóa Học
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Từng bước khám phá thế giới Arduino và IoT - từ cơ bản đến dự án thực tế
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {arduinoLessons.map((lesson, index) => (
            <Link key={index} href={lesson.href}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20 cursor-pointer group">
                <div className="text-4xl mb-4">{lesson.icon}</div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                  Bài {index + 1}: {lesson.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
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
                  <h4 className="text-sm font-semibold text-green-300 mb-2">📋 Nội dung:</h4>
                  <div className="flex flex-wrap gap-1">
                    {lesson.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-green-500/20 text-green-200 text-xs px-2 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>⏱️ {lesson.duration}</span>
                  <span>🔧 {lesson.difficulty}</span>
                </div>

                <div className="mt-4 text-green-300 font-semibold text-sm group-hover:text-green-200 transition-colors duration-300">
                  Bắt Đầu Học →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🚀 Dự Án Thực Tế
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Những dự án IoT thú vị bạn sẽ xây dựng trong khóa học
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {arduinoProjects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4 text-center">{project.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{project.title}</h3>
                <p className="text-gray-300 text-center mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-300 mb-2">🛠️ Linh kiện:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.components.map((component, compIndex) => (
                      <span key={compIndex} className="bg-blue-500/20 text-blue-200 text-xs px-2 py-1 rounded-full">
                        {component}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-green-300 mb-2">✨ Tính năng:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featIndex) => (
                      <span key={featIndex} className="bg-green-500/20 text-green-200 text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    project.difficulty === 'Trung bình' 
                      ? 'bg-yellow-500/20 text-yellow-200' 
                      : 'bg-red-500/20 text-red-200'
                  }`}>
                    🎯 {project.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hardware Components */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🛠️ Linh Kiện Cần Thiết
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Danh sách linh kiện cơ bản để bắt đầu với Arduino và IoT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hardwareComponents.map((component, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl mb-3">{component.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{component.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{component.description}</p>
              <div className="text-green-400 font-semibold text-sm">{component.price}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            💡 Tip: Bạn có thể mua starter kit Arduino để có đầy đủ linh kiện cơ bản (~500.000 VND)
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-12 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ⚡ Sẵn Sàng Xây Dựng IoT?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Bắt đầu hành trình Arduino và IoT ngay hôm nay. Từ LED đơn giản đến hệ thống nhà thông minh!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              ← Trang Chủ
            </Link>
            <a
              href="https://www.arduino.cc/en/software"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              📥 Tải Arduino IDE
              <span className="ml-2">↗</span>
            </a>
            <Link 
              href="/scratch"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300"
            >
              🎨 Tiếp Theo: Scratch →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
