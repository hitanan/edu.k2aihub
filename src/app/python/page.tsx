import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("Học Lập Trình Python - Bài Toán Cơ Bản"),
  description: createDescription("Khóa học Python cơ bản với các bài toán thực tế dành cho học sinh. Từ biến số, vòng lặp đến thuật toán và xử lý dữ liệu"),
  keywords: createKeywords(["python", "lập trình python", "python cơ bản", "bài toán python", "thuật toán", "học sinh", "programming"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Học Lập Trình Python - K2AiHub"),
    description: createDescription("Khám phá Python qua các bài toán thực tế và ví dụ dễ hiểu"),
    type: "website",
  },
};

export default function PythonModule() {
  const moduleInfo = {
    title: '🐍 Lập Trình Python',
    description: 'Học Python qua các bài toán cơ bản và thực tế. Từ syntax cơ bản đến giải thuật và xử lý dữ liệu.',
    icon: '🐍',
    difficulty: 'Từ cơ bản đến trung cấp',
    duration: '30 giờ học',
  };

  const pythonLessons = [
    {
      id: 'python-introduction',
      title: 'Giới Thiệu Python',
      description: 'Làm quen với Python: cài đặt, IDE và chương trình đầu tiên',
      icon: '�',
      difficulty: 'Cơ bản',
      duration: '60 phút',
      href: '/python/python-introduction',
      objectives: [
        'Hiểu Python là gì và tại sao nên học',
        'Cài đặt Python và IDE',
        'Viết chương trình đầu tiên'
      ],
      topics: ['Installation', 'IDE Setup', 'Hello World', 'Basic Syntax'],
      problems: ['Hello World Plus', 'Tính toán cơ bản', 'Input/Output']
    },
    {
      id: 'variables-data-types',
      title: 'Variables và Data Types',
      description: 'Học về biến, kiểu dữ liệu và cách sử dụng chúng trong Python',
      icon: '🔤',
      difficulty: 'Cơ bản',
      duration: '90 phút',
      href: '/python/variables-data-types',
      objectives: [
        'Hiểu về biến và kiểu dữ liệu',
        'Thực hiện các phép toán cơ bản',
        'Chuyển đổi giữa các kiểu dữ liệu'
      ],
      topics: ['Variables', 'Int/Float/String', 'Boolean', 'Type Conversion'],
      problems: ['Máy tính cá nhân', 'String Processor', 'BMI Calculator']
    },
    {
      id: 'control-structures',
      title: 'Cấu Trúc Điều Khiển',
      description: 'If-else, vòng lặp for, while và cách sử dụng trong giải quyết bài toán',
      icon: '🔀',
      difficulty: 'Cơ bản',
      duration: '120 phút',
      href: '/python/control-structures',
      objectives: [
        'Sử dụng if-else để ra quyết định',
        'Áp dụng vòng lặp for và while',
        'Giải quyết bài toán có điều kiện'
      ],
      topics: ['If-Else', 'For Loop', 'While Loop', 'Break & Continue'],
      problems: ['Grade Calculator', 'Số nguyên tố', 'Pattern printing']
    },
    {
      id: 'functions',
      title: 'Functions',
      description: 'Tạo và sử dụng functions để tổ chức code hiệu quả',
      icon: '📦',
      difficulty: 'Trung bình',
      duration: '120 phút',
      href: '/python/functions',
      objectives: [
        'Định nghĩa và gọi functions',
        'Sử dụng parameters và return values',
        'Hiểu scope của variables'
      ],
      topics: ['Function Definition', 'Parameters', 'Return Values', 'Scope'],
      problems: ['Math Utils Library', 'Calculator Functions', 'Recursion']
    },
    {
      id: 'lists-tuples',
      title: 'Lists và Tuples',
      description: 'Làm việc với collections - lists và tuples trong Python',
      icon: '📊',
      difficulty: 'Trung bình',
      duration: '100 phút',
      href: '/python/lists-tuples',
      objectives: [
        'Thao tác với Lists và Tuples',
        'Sử dụng list methods hiệu quả',
        'List comprehensions cơ bản'
      ],
      topics: ['Lists', 'Tuples', 'List Methods', 'Indexing', 'Slicing'],
      problems: ['Task Manager', 'Shopping List', 'Data Processing']
    },
    {
      id: 'dictionaries',
      title: 'Dictionaries',
      description: 'Sử dụng dictionaries để lưu trữ key-value data',
      icon: '�️',
      difficulty: 'Trung bình',
      duration: '100 phút',
      href: '/python/dictionaries',
      objectives: [
        'Tạo và sử dụng dictionaries',
        'Thao tác với key-value pairs',
        'Nested dictionaries'
      ],
      topics: ['Dict Creation', 'Key-Value', 'Dict Methods', 'Nested Dicts'],
      problems: ['Student Management', 'Dictionary Functions', 'Data Analysis']
    },
    {
      id: 'file-handling',
      title: 'File Handling',
      description: 'Đọc và ghi files, xử lý dữ liệu từ file',
      icon: '📄',
      difficulty: 'Trung bình',
      duration: '120 phút',
      href: '/python/file-handling',
      objectives: [
        'Đọc và ghi file text',
        'Xử lý file CSV',
        'Exception handling với files'
      ],
      topics: ['File I/O', 'CSV Processing', 'Error Handling', 'File Paths'],
      problems: ['Log Analyzer', 'Data Backup', 'Report Generator']
    },
    {
      id: 'oop-basics',
      title: 'OOP Cơ Bản',
      description: 'Học lập trình hướng đối tượng với classes và objects',
      icon: '🏗️',
      difficulty: 'Nâng cao',
      duration: '150 phút',
      href: '/python/oop-basics',
      objectives: [
        'Tạo classes và objects',
        'Hiểu inheritance và encapsulation',
        'Áp dụng OOP trong dự án'
      ],
      topics: ['Classes', 'Objects', 'Inheritance', 'Encapsulation'],
      problems: ['Bank Account System', 'Game Characters', 'Library System']
    }
  ];

  const practicalProjects = [
    {
      title: 'Máy Tính Khoa Học',
      description: 'Xây dựng máy tính với các phép toán cơ bản và nâng cao',
      icon: '🧮',
      difficulty: 'Cơ bản',
      skills: ['Functions', 'Math Module', 'User Interface'],
      estimatedTime: '2-3 giờ'
    },
    {
      title: 'Quản Lý Điểm Số',
      description: 'Ứng dụng quản lý điểm học sinh với file CSV',
      icon: '📊',
      difficulty: 'Trung bình',
      skills: ['File Handling', 'Data Processing', 'Statistics'],
      estimatedTime: '4-5 giờ'
    },
    {
      title: 'Trò Chơi Đoán Số',
      description: 'Game tương tác với AI và lưu high score',
      icon: '🎮',
      difficulty: 'Trung bình',
      skills: ['Random', 'Loops', 'File I/O', 'Game Logic'],
      estimatedTime: '3-4 giờ'
    },
    {
      title: 'Phân Tích Dữ Liệu Đơn Giản',
      description: 'Đọc và phân tích dữ liệu từ file CSV với charts',
      icon: '📈',
      difficulty: 'Nâng cao',
      skills: ['Data Analysis', 'CSV', 'Matplotlib', 'Statistics'],
      estimatedTime: '5-6 giờ'
    }
  ];

  const pythonAdvantages = [
    {
      title: 'Dễ Học, Dễ Hiểu',
      description: 'Syntax đơn giản, gần với ngôn ngữ tự nhiên',
      icon: '📖'
    },
    {
      title: 'Đa Mục Đích',
      description: 'Web, Data Science, AI, Game Development',
      icon: '🔧'
    },
    {
      title: 'Cộng Đồng Lớn',
      description: 'Hàng triệu developer và thư viện phong phú',
      icon: '👥'
    },
    {
      title: 'Việc Làm Cao',
      description: 'Ngôn ngữ được yêu cầu nhiều nhất hiện tại',
      icon: '💼'
    }
  ];

  const { title, description, icon, difficulty, duration } = moduleInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">{icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="bg-white/10 px-3 py-1 rounded-full">🎯 {difficulty}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">⏱️ {duration}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">📚 {pythonLessons.length} bài học</span>
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
            Từng bước học Python qua các bài toán thực tế - từ cơ bản đến nâng cao
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pythonLessons.map((lesson, index) => (
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
                  <h4 className="text-sm font-semibold text-blue-300 mb-2">📋 Chủ đề:</h4>
                  <div className="flex flex-wrap gap-1">
                    {lesson.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-blue-500/20 text-blue-200 text-xs px-2 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">🧩 Bài toán:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {lesson.problems.map((problem, probIndex) => (
                      <li key={probIndex} className="flex items-start">
                        <span className="text-purple-400 mr-2">▪</span>
                        {problem}
                      </li>
                    ))}
                  </ul>
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

      {/* Practical Projects */}
      <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🚀 Dự Án Thực Hành
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Các dự án thực tế giúp bạn áp dụng kiến thức Python vào thực tiễn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practicalProjects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4 text-center">{project.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-yellow-300 mb-2">🛠️ Kỹ năng:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-yellow-500/20 text-yellow-200 text-xs px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className={`px-2 py-1 rounded-full ${
                    project.difficulty === 'Cơ bản' ? 'bg-green-500/20 text-green-200' :
                    project.difficulty === 'Trung bình' ? 'bg-yellow-500/20 text-yellow-200' :
                    'bg-red-500/20 text-red-200'
                  }`}>
                    🎯 {project.difficulty}
                  </span>
                  <span>⏱️ {project.estimatedTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Python Advantages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ⭐ Tại Sao Học Python?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Python là ngôn ngữ lập trình phổ biến nhất thế giới hiện tại
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pythonAdvantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                {advantage.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{advantage.title}</h3>
              <p className="text-gray-300 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🛤️ Lộ Trình Học Tập
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hướng dẫn chi tiết để bạn học Python hiệu quả
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4 text-center">🌱</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Giai Đoạn 1: Cơ Bản</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Python Basics (Bài 1)</li>
                <li>• Control Structures (Bài 2)</li>
                <li>• Functions & Modules (Bài 3)</li>
                <li>• Dự án: Máy tính khoa học</li>
              </ul>
              <div className="mt-4 text-center">
                <span className="bg-green-500/20 text-green-200 text-xs px-3 py-1 rounded-full">
                  ⏱️ 2-3 tuần
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4 text-center">🌿</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Giai Đoạn 2: Trung Cấp</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Data Structures (Bài 4)</li>
                <li>• String Processing (Bài 5)</li>
                <li>• File Handling (Bài 6)</li>
                <li>• Dự án: Quản lý điểm số</li>
              </ul>
              <div className="mt-4 text-center">
                <span className="bg-yellow-500/20 text-yellow-200 text-xs px-3 py-1 rounded-full">
                  ⏱️ 3-4 tuần
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4 text-center">🌳</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Giai Đoạn 3: Nâng Cao</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Algorithms (Bài 7)</li>
                <li>• OOP Basics (Bài 8)</li>
                <li>• Advanced Projects</li>
                <li>• Dự án: Phân tích dữ liệu</li>
              </ul>
              <div className="mt-4 text-center">
                <span className="bg-red-500/20 text-red-200 text-xs px-3 py-1 rounded-full">
                  ⏱️ 4-5 tuần
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Module Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          🔗 Khám Phá Thêm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link 
            href="/stem/coding-for-kids"
            className="group bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-white mb-2">STEM - Coding for Kids</h3>
            <p className="text-gray-300 text-sm mb-4">
              Hiểu cơ bản về lập trình và tư duy khoa học công nghệ qua hoạt động STEM
            </p>
            <div className="text-green-400 text-sm font-semibold group-hover:text-green-300">
              Khám phá STEM →
            </div>
          </Link>

          <Link 
            href="/scratch"
            className="group bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-white mb-2">Scratch Programming</h3>
            <p className="text-gray-300 text-sm mb-4">
              Bắt đầu với lập trình trực quan dễ hiểu trước khi chuyển sang Python
            </p>
            <div className="text-orange-400 text-sm font-semibold group-hover:text-orange-300">
              Học Scratch →
            </div>
          </Link>

          <Link 
            href="/arduino"
            className="group bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Arduino IoT</h3>
            <p className="text-gray-300 text-sm mb-4">
              Ứng dụng Python trong các dự án phần cứng và IoT với Arduino
            </p>
            <div className="text-cyan-400 text-sm font-semibold group-hover:text-cyan-300">
              Khám phá Arduino →
            </div>
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🐍 Sẵn Sàng Chinh Phục Python?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Bắt đầu hành trình học Python ngay hôm nay. Từ những dòng code đầu tiên đến các dự án thực tế!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              ← Trang Chủ
            </Link>
            <a
              href="https://www.python.org/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              📥 Tải Python
              <span className="ml-2">↗</span>
            </a>
            <Link 
              href="/python/python-basics"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
            >
              🚀 Bắt Đầu Bài 1
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
