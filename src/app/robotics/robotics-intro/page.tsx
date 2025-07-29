import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { roboticsLessons } from '@/data/robotics';

export const metadata: Metadata = {
  title: createTitle("Bài 1: Giới Thiệu Robotics - Thế Giới Robot"),
  description: createDescription("Tìm hiểu về lịch sử robotics, các thành phần cơ bản của robot và ứng dụng trong đời sống"),
  keywords: createKeywords(["robotics cơ bản", "lịch sử robot", "thành phần robot", "ứng dụng robotics"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 1: Giới Thiệu Robotics"),
    description: createDescription("Khám phá thế giới robot - từ lịch sử đến ứng dụng thực tế"),
    type: "website",
  },
};

export default function RoboticsIntroLesson() {
  const lesson = roboticsLessons.find(l => l.id === 'basic-robotics-intro');
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const robotHistory = [
    {
      year: '1921',
      event: 'Karel Čapek đặt ra thuật ngữ "robot"',
      description: 'Từ tiếng Czech "robota" có nghĩa là lao động cưỡng bức',
      icon: '📚'
    },
    {
      year: '1950',
      event: 'Isaac Asimov - Ba định luật robotics',
      description: 'Đưa ra khung đạo đức cho robot trong khoa học viễn tưởng',
      icon: '⚖️'
    },
    {
      year: '1961',
      event: 'Unimate - Robot công nghiệp đầu tiên',
      description: 'Được sử dụng tại nhà máy General Motors',
      icon: '🏭'
    },
    {
      year: '1997',
      event: 'Deep Blue đánh bại Kasparov',
      description: 'Máy tính IBM thắng nhà vô địch cờ vua thế giới',
      icon: '♟️'
    },
    {
      year: '2000s',
      event: 'Robot gia đình',
      description: 'Roomba, Aibo và các robot phục vụ đời sống',
      icon: '🏠'
    },
    {
      year: '2020s',
      event: 'AI và Robot thông minh',
      description: 'Kết hợp AI, machine learning với robotics',
      icon: '🤖'
    }
  ];

  const robotComponents = [
    {
      name: 'Cảm biến (Sensors)',
      description: 'Thu thập thông tin từ môi trường xung quanh',
      examples: ['Camera', 'Cảm biến nhiệt độ', 'Cảm biến khoảng cách', 'Microphone'],
      icon: '👁️',
      color: 'text-blue-400'
    },
    {
      name: 'Bộ xử lý (Controller)',
      description: 'Não bộ của robot, xử lý thông tin và ra quyết định',
      examples: ['Microcontroller', 'Raspberry Pi', 'Arduino', 'Computer'],
      icon: '🧠',
      color: 'text-green-400'
    },
    {
      name: 'Cơ cấu chấp hành (Actuators)',
      description: 'Thực hiện các hành động dựa trên lệnh từ bộ xử lý',
      examples: ['Servo motor', 'DC motor', 'Stepper motor', 'Pneumatic'],
      icon: '🦾',
      color: 'text-red-400'
    },
    {
      name: 'Nguồn điện (Power Supply)',
      description: 'Cung cấp năng lượng cho tất cả các thành phần',
      examples: ['Pin lithium', 'Adapter', 'Solar panel', 'Fuel cell'],
      icon: '🔋',
      color: 'text-yellow-400'
    },
    {
      name: 'Khung cấu trúc (Frame)',
      description: 'Khung xương giữ các bộ phận và tạo hình dáng robot',
      examples: ['Nhôm', 'Nhựa 3D', 'Carbon fiber', 'Thép'],
      icon: '🏗️',
      color: 'text-purple-400'
    },
    {
      name: 'Giao tiếp (Communication)',
      description: 'Kết nối với con người hoặc robot khác',
      examples: ['WiFi', 'Bluetooth', 'Radio', 'Ethernet'],
      icon: '📡',
      color: 'text-pink-400'
    }
  ];

  const robotTypes = [
    {
      category: 'Robot Công Nghiệp',
      description: 'Tự động hóa sản xuất và lắp ráp',
      applications: ['Hàn xì', 'Sơn phun', 'Lắp ráp ô tô', 'Đóng gói'],
      advantages: ['Chính xác cao', 'Làm việc 24/7', 'An toàn', 'Năng suất cao'],
      icon: '🏭'
    },
    {
      category: 'Robot Dịch Vụ',
      description: 'Hỗ trợ con người trong cuộc sống hàng ngày',
      applications: ['Dọn dẹp nhà', 'Chăm sóc người già', 'Bảo vệ', 'Giải trí'],
      advantages: ['Tiện lợi', 'Tiết kiệm thời gian', 'Cải thiện chất lượng cuộc sống'],
      icon: '🤖'
    },
    {
      category: 'Robot Y Tế',
      description: 'Hỗ trợ chẩn đoán và điều trị bệnh',
      applications: ['Phẫu thuật chính xác', 'Phục hồi chức năng', 'Chăm sóc bệnh nhân'],
      advantages: ['Chính xác cao', 'Ít xâm lấn', 'Giảm rủi ro'],
      icon: '🏥'
    },
    {
      category: 'Robot Giáo Dục',
      description: 'Công cụ học tập STEM',
      applications: ['Dạy lập trình', 'Thí nghiệm khoa học', 'Tương tác học tập'],
      advantages: ['Học tập thú vị', 'Phát triển tư duy logic', 'Kỹ năng thực hành'],
      icon: '🎓'
    }
  ];

  const modernApplications = [
    {
      field: 'Giao thông vận tải',
      examples: ['Xe tự lái', 'Drone giao hàng', 'Robot điều khiển không lưu'],
      impact: 'Giảm tai nạn, tối ưu hóa tuyến đường, giao hàng nhanh chóng',
      icon: '🚗'
    },
    {
      field: 'Nông nghiệp',
      examples: ['Robot thu hoạch', 'Drone phun thuốc', 'Hệ thống tưới tự động'],
      impact: 'Tăng năng suất, giảm lãng phí, nông nghiệp chính xác',
      icon: '🌾'
    },
    {
      field: 'Khám phá không gian',
      examples: ['Robot sao Hỏa', 'Tay robot trên ISS', 'Vệ tinh thám hiểm'],
      impact: 'Mở rộng kiến thức về vũ trụ, nghiên cứu an toàn',
      icon: '🚀'
    },
    {
      field: 'Cứu hộ và an ninh',
      examples: ['Robot dò mìn', 'Robot cứu hộ', 'Hệ thống giám sát'],
      impact: 'Bảo vệ tính mạng con người, phản ứng nhanh trong khẩn cấp',
      icon: '🛡️'
    }
  ];

  const vietnamRobotics = [
    {
      organization: 'VinAI Research',
      focus: 'Nghiên cứu AI và robotics ứng dụng',
      achievements: 'Phát triển robot phục vụ trong khách sạn và bệnh viện',
      icon: '🏢'
    },
    {
      organization: 'Đại học Bách Khoa Hà Nội',
      focus: 'Đào tạo và nghiên cứu robotics',
      achievements: 'Nhiều giải thưởng quốc tế về robot',
      icon: '🎓'
    },
    {
      organization: 'FPT Software',
      focus: 'Ứng dụng AI và robotics trong doanh nghiệp',
      achievements: 'Phát triển chatbot và robot customer service',
      icon: '💼'
    },
    {
      organization: 'Các startup Việt',
      focus: 'Robot giáo dục và giải trí',
      achievements: 'OHSTEM, Techkids và các sản phẩm robot học tập',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/robotics" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
              ← Quay lại Robotics
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🤖</div>
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

        {/* Robot Definition */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🤔 Robot là gì?
          </h2>
          
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-500/20">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Định nghĩa Robot</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">👁️</div>
                <h4 className="text-lg font-bold text-white mb-2">Cảm nhận</h4>
                <p className="text-gray-300 text-sm">Robot có thể thu thập thông tin từ môi trường xung quanh</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🧠</div>
                <h4 className="text-lg font-bold text-white mb-2">Xử lý</h4>
                <p className="text-gray-300 text-sm">Robot có thể phân tích và ra quyết định dựa trên thông tin</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🦾</div>
                <h4 className="text-lg font-bold text-white mb-2">Hành động</h4>
                <p className="text-gray-300 text-sm">Robot có thể thực hiện các hành động vật lý</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white/10 rounded-xl">
              <p className="text-white text-center text-lg font-semibold">
                &ldquo;Robot là máy móc có thể cảm nhận môi trường, xử lý thông tin và thực hiện hành động một cách tự động hoặc bán tự động&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            📜 Lịch Sử Phát Triển Robotics
          </h2>
          
          <div className="space-y-6">
            {robotHistory.map((item, index) => (
              <div key={index} className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mr-6">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm font-bold mr-4">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.event}</h3>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Robot Components */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🔧 Các Thành Phần Chính Của Robot
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {robotComponents.map((component, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className={`text-3xl mb-4 ${component.color}`}>{component.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{component.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{component.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-200">Ví dụ:</h4>
                  <div className="flex flex-wrap gap-1">
                    {component.examples.map((example, idx) => (
                      <span key={idx} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Robot Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🏷️ Phân Loại Robot
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {robotTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{type.icon}</div>
                  <h3 className="text-xl font-bold text-white">{type.category}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{type.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Ứng dụng:</h4>
                    <div className="flex flex-wrap gap-1">
                      {type.applications.map((app, idx) => (
                        <span key={idx} className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded text-xs">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-green-300 mb-2">Ưu điểm:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {type.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Applications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🌟 Ứng Dụng Robotics Hiện Đại
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modernApplications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{app.icon}</div>
                  <h3 className="text-xl font-bold text-white">{app.field}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-300 mb-2">Ví dụ ứng dụng:</h4>
                    <div className="flex flex-wrap gap-1">
                      {app.examples.map((example, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-yellow-300 mb-2">Tác động:</h4>
                    <p className="text-gray-300 text-sm">{app.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vietnam Robotics Scene */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🇻🇳 Robotics tại Việt Nam
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vietnamRobotics.map((org, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{org.icon}</div>
                  <h3 className="text-lg font-bold text-white">{org.organization}</h3>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-semibold text-green-300">Lĩnh vực: </span>
                    <span className="text-gray-300 text-sm">{org.focus}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-yellow-300">Thành tựu: </span>
                    <span className="text-gray-300 text-sm">{org.achievements}</span>
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
        <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🌍 Ứng Dụng Thực Tế
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lesson.realWorldApplications.map((app, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🤖</div>
                <div className="text-purple-300 text-sm font-semibold">{app}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🏆 Cuộc Thi Robotics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.competitions.map((competition, index) => (
              <div key={index} className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg p-4 border border-yellow-300/30">
                <span className="text-yellow-200 flex items-center">
                  <span className="text-yellow-400 mr-2">🏅</span>
                  {competition}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Future of Robotics */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🔮 Tương Lai Của Robotics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-gray-300 text-sm">Robot sẽ thông minh hơn, học hỏi và thích ứng tự động</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-white mb-2">Human-Robot Collaboration</h3>
              <p className="text-gray-300 text-sm">Con người và robot làm việc cùng nhau một cách tự nhiên</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-lg font-bold text-white mb-2">IoT & Connected Robots</h3>
              <p className="text-gray-300 text-sm">Robot kết nối mạng, chia sẻ thông tin và học hỏi tập thể</p>
            </div>
          </div>
        </div>

        {/* Discussion Questions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            💭 Câu Hỏi Thảo Luận
          </h2>
          
          <div className="space-y-4">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-yellow-300 font-semibold mb-2">1. Đạo đức trong Robotics</h3>
              <p className="text-gray-300 text-sm">Robot có nên có quyền như con người không? Làm sao để đảm bảo robot phục vụ lợi ích nhân loại?</p>
            </div>
            
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-blue-300 font-semibold mb-2">2. Tác động đến việc làm</h3>
              <p className="text-gray-300 text-sm">Robot sẽ thay thế con người trong những công việc nào? Chúng ta cần chuẩn bị gì cho tương lai?</p>
            </div>
            
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-green-300 font-semibold mb-2">3. Robot trong giáo dục</h3>
              <p className="text-gray-300 text-sm">Robot có thể giúp giáo dục như thế nào? Những lợi ích và thách thức khi sử dụng robot trong trường học?</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/robotics"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            ← Quay lại Robotics
          </Link>
          
          <Link 
            href="/robotics/sensors-signals"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Bài tiếp theo: Cảm biến →
          </Link>
        </div>
      </div>
    </div>
  );
}
