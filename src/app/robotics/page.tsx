import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("Học Robotics - Từ Cơ Bản Đến Nâng Cao"),
  description: createDescription("Khóa học robotics toàn diện với 6 bài học từ cơ bản đến nâng cao. Học cách thiết kế, lập trình và điều khiển robot thông minh"),
  keywords: createKeywords(["robotics", "robot", "lập trình robot", "arduino robot", "cảm biến", "động cơ servo", "IoT robot"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Học Robotics - K2AiHub"),
    description: createDescription("Khám phá thế giới robotics với các bài học thực hành và dự án thú vị"),
    type: "website",
  },
};

export default function RoboticsModule() {
  const moduleInfo = {
    title: '🤖 Học Robotics',
    description: 'Khám phá thế giới robotics từ cơ bản đến nâng cao. Học cách thiết kế, lập trình và điều khiển robot thông minh.',
    icon: '🤖',
    difficulty: 'Từ cơ bản đến nâng cao',
    duration: '24 giờ học',
  };

  const roboticsLessons = [
    {
      id: 'basic-robotics-intro',
      title: 'Giới Thiệu Robotics Cơ Bản',
      description: 'Khái niệm cơ bản về robotics, các thành phần chính của robot và ứng dụng trong đời sống',
      icon: '🤖',
      difficulty: 'Cơ bản',
      duration: '45 phút',
      href: '/robotics/robotics-intro',
      objectives: [
        'Hiểu khái niệm robot và robotics',
        'Nhận biết các thành phần chính của robot',
        'Phân biệt các loại robot khác nhau'
      ],
      topics: ['Robot cơ bản', 'Thành phần', 'Ứng dụng', 'Lý thuyết']
    },
    {
      id: 'basic-electronics',
      title: 'Điện Tử Cơ Bản',
      description: 'Kiến thức điện tử cần thiết để hiểu cách robot hoạt động: LED, nút nhấn, cảm biến',
      icon: '�',
      difficulty: 'Cơ bản',
      duration: '60 phút',
      href: '/robotics/basic-electronics',
      objectives: [
        'Hiểu các linh kiện điện tử cơ bản',
        'Đọc và vẽ sơ đồ mạch đơn giản',
        'Kết nối mạch cơ bản trên breadboard'
      ],
      topics: ['LED', 'Điện trở', 'Breadboard', 'Mạch điện']
    },
    {
      id: 'microcontroller-basics',
      title: 'Vi Điều Khiển Cơ Bản',
      description: 'Làm quen với Arduino và các vi điều khiển cơ bản, cách lập trình và kết nối phần cứng',
      icon: '🧠',
      difficulty: 'Trung bình',
      duration: '90 phút',
      href: '/robotics/microcontroller-basics',
      objectives: [
        'Hiểu cách hoạt động của vi điều khiển',
        'Cài đặt và sử dụng Arduino IDE',
        'Viết chương trình Arduino cơ bản'
      ],
      topics: ['Arduino', 'IDE', 'Programming', 'C++']
    }
  ];

  const realWorldApplications = [
    {
      title: 'Y Tế',
      description: 'Robot phẫu thuật, robot chăm sóc người bệnh, protêt thông minh',
      icon: '🏥'
    },
    {
      title: 'Sản Xuất',
      description: 'Robot công nghiệp, tự động hóa dây chuyền sản xuất',
      icon: '🏭'
    },
    {
      title: 'Gia Đình',
      description: 'Robot hút bụi, robot nấu ăn, robot giúp việc gia đình',
      icon: '🏠'
    },
    {
      title: 'Vũ Trụ',
      description: 'Robot thám hiểm sao Hỏa, robot bảo trì trạm vũ trụ',
      icon: '🚀'
    }
  ];

  const competitions = [
    {
      name: 'Robocon Vietnam',
      description: 'Cuộc thi robotics lớn nhất Việt Nam dành cho sinh viên',
      categories: ['Tự động', 'Bán tự động', 'Sáng tạo'],
      icon: '🏆'
    },
    {
      name: 'FLL (First Lego League)',
      description: 'Cuộc thi robotics quốc tế dành cho học sinh THCS',
      categories: ['Robot Mission', 'Innovation Project', 'Core Values'],
      icon: '🥇'
    },
    {
      name: 'VEX Robotics',
      description: 'Hệ thống cuộc thi robotics phổ biến trên toàn thế giới',
      categories: ['VRC', 'VEX IQ', 'VEX GO'],
      icon: '🤖'
    }
  ];

  const { title, description, icon, difficulty, duration } = moduleInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">{icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="bg-white/10 px-3 py-1 rounded-full">🎯 {difficulty}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">⏱️ {duration}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">📚 {roboticsLessons.length} bài học</span>
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
            Từng bước khám phá thế giới robotics với các bài học được thiết kế khoa học và thực hành
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roboticsLessons.map((lesson, index) => (
            <Link key={index} href={lesson.href}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20 cursor-pointer group">
                <div className="text-4xl mb-4">{lesson.icon}</div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
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
                  <h4 className="text-sm font-semibold text-blue-300 mb-2">📋 Nội dung:</h4>
                  <div className="flex flex-wrap gap-1">
                    {lesson.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-blue-500/20 text-blue-200 text-xs px-2 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>⏱️ {lesson.duration}</span>
                  <span>🔧 {lesson.difficulty}</span>
                </div>

                <div className="mt-4 text-blue-300 font-semibold text-sm group-hover:text-blue-200 transition-colors duration-300">
                  Bắt Đầu Học →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Real World Applications */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🌍 Ứng Dụng Thực Tế
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Robotics không chỉ là lý thuyết - đây là những ứng dụng thực tế đang thay đổi thế giới
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realWorldApplications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl mb-3">{app.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
                <p className="text-gray-300 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competition Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🏆 Cuộc Thi & Sự Kiện
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Thử thách bản thân với các cuộc thi robotics uy tín trong và ngoài nước
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitions.map((comp, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start">
                <div className="text-3xl mr-4">{comp.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{comp.name}</h3>
                  <p className="text-gray-300 mb-3">{comp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {comp.categories.map((category, catIndex) => (
                      <span key={catIndex} className="bg-yellow-500/20 text-yellow-200 text-xs px-2 py-1 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🚀 Sẵn Sàng Tạo Robot Đầu Tiên?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Bắt đầu hành trình robotics của bạn ngay hôm nay. Từ những robot đơn giản đến hệ thống IoT phức tạp!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              ← Trang Chủ
            </Link>
            <Link 
              href="/robotics/robotics-intro"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              🤖 Bắt Đầu Bài 1
            </Link>
            <Link 
              href="/arduino"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              ⚡ Tiếp Theo: Arduino →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
