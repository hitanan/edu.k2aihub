import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { stemLessons } from '@/data/stem';
import { getModuleNavigation, getNavigationConfig } from '@/utils/moduleNavigation';
import YouTubePlayer from '@/components/YouTubePlayer';
import ModuleNavigation from '@/components/ModuleNavigation';

export const metadata: Metadata = {
  title: createTitle("Giải Pháp Môi Trường - STEM"),
  description: createDescription("Sử dụng khoa học và công nghệ để giải quyết các vấn đề môi trường. Tìm hiểu về năng lượng tái tạo và bảo vệ hành tinh"),
  keywords: createKeywords(["môi trường", "sustainability", "năng lượng tái tạo", "biến đổi khí hậu", "tái chế"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Giải Pháp Môi Trường"),
    description: createDescription("Khoa học và công nghệ cho môi trường xanh"),
    type: "website",
  },
};

export default function EnvironmentalSolutionsLesson() {
  const lesson = stemLessons.find(l => l.id === 'environmental-solutions');
  const navigation = getModuleNavigation('stem', 'environmental-solutions');
  const navConfig = navigation ? getNavigationConfig(navigation, '/stem') : null;
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const environmentalChallenges = [
    {
      problem: "Biến Đổi Khí Hậu",
      causes: ["Khí thải CO₂", "Phá rừng", "Công nghiệp hóa", "Giao thông"],
      solutions: [
        "Năng lượng tái tạo (gió, mặt trời)",
        "Xe điện và giao thông xanh",
        "Trồng cây và bảo vệ rừng",
        "Giảm tiêu thụ năng lượng"
      ],
      tech: "AI dự đoán thời tiết, IoT giám sát môi trường",
      icon: "🌡️",
      color: "from-red-600/20 to-orange-600/20"
    },
    {
      problem: "Ô Nhiễm Nước",
      causes: ["Chất thải công nghiệp", "Rác thải nhựa", "Hóa chất nông nghiệp", "Dầu tràn"],
      solutions: [
        "Hệ thống lọc nước thông minh",
        "Công nghệ phân hủy sinh học",
        "Tái chế nước thải",
        "Cảm biến chất lượng nước"
      ],
      tech: "Nano filter, UV sterilization, Smart sensors",
      icon: "💧",
      color: "from-blue-600/20 to-cyan-600/20"
    },
    {
      problem: "Rác Thải Nhựa",
      causes: ["Sản xuất quá mức", "Thiếu tái chế", "Túi nhựa dùng 1 lần", "Đóng gói thừa"],
      solutions: [
        "Nhựa sinh học phân hủy được",
        "Robot phân loại rác tự động",
        "Tái chế thành sản phẩm mới",
        "Ứng dụng theo dõi rác thải"
      ],
      tech: "Biodegradable plastics, AI sorting, 3D printing",
      icon: "♻️",
      color: "from-green-600/20 to-teal-600/20"
    },
    {
      problem: "Mất Đa Dạng Sinh Học",
      causes: ["Phá rừng", "Ô nhiễm", "Thay đổi khí hậu", "Săn bắt quá mức"],
      solutions: [
        "Drone giám sát động vật hoang dã",
        "DNA banking bảo tồn gen",
        "Hành lang sinh thái thông minh",
        "Ứng dụng báo cáo vi phạm"
      ],
      tech: "Drones, GPS tracking, Genetic analysis",
      icon: "🦋",
      color: "from-purple-600/20 to-pink-600/20"
    }
  ];

  const renewableEnergy = [
    {
      type: "Năng Lượng Mặt Trời",
      how: "Pin mặt trời chuyển ánh sáng thành điện",
      advantages: ["Vô hạn", "Sạch", "Giảm hóa đơn điện", "Dễ lắp đặt"],
      applications: ["Nhà ở", "Trạm sạc xe điện", "Đèn đường", "Vệ tinh"],
      diy: "Làm pin mặt trời mini cho đồ chơi",
      icon: "☀️",
      efficiency: "15-22%"
    },
    {
      type: "Năng Lượng Gió",
      how: "Cánh quạt gió quay máy phát điện",
      advantages: ["Không phát khí thải", "Chi phí vận hành thấp", "Tạo công việc", "Khả năng mở rộng"],
      applications: ["Trang trại gió", "Tuabin nhỏ cho nhà", "Năng lượng biển", "Hệ thống lai"],
      diy: "Chế tạo tuabin gió từ chai nhựa",
      icon: "💨",
      efficiency: "35-45%"
    },
    {
      type: "Năng Lượng Nước",
      how: "Dòng nước xoay tuabin tạo ra điện",
      advantages: ["Ổn định", "Tuổi thọ cao", "Kiểm soát lũ lụt", "Cung cấp nước"],
      applications: ["Đập thủy điện", "Tuabin sông nhỏ", "Sóng biển", "Thủy triều"],
      diy: "Làm bánh xe nước phát điện",
      icon: "🌊",
      efficiency: "80-90%"
    },
    {
      type: "Năng Lượng Sinh Học",
      how: "Chuyển đổi chất hữu cơ thành nhiên liệu",
      advantages: ["Từ rác thải", "Carbon trung tính", "Có thể tái tạo", "Giảm rác"],
      applications: ["Biogas từ rác", "Ethanol từ cây", "Pellet gỗ", "Dầu tảo"],
      diy: "Tạo biogas từ rác thực phẩm",
      icon: "🌱",
      efficiency: "25-35%"
    }
  ];

  const greenTech = [
    {
      category: "Smart Home",
      technologies: [
        "Thermostat thông minh tiết kiệm năng lượng",
        "Đèn LED điều khiển tự động",
        "Hệ thống tưới cây thông minh",
        "Cảm biến chất lượng không khí"
      ],
      benefits: "Giảm 30% hóa đơn điện",
      icon: "🏠"
    },
    {
      category: "Giao Thông Xanh",
      technologies: [
        "Xe điện và hybrid",
        "Ứng dụng chia sẻ xe",
        "Hệ thống giao thông thông minh",
        "Nhiên liệu hydrogen"
      ],
      benefits: "Giảm 50% khí thải",
      icon: "🚗"
    },
    {
      category: "Nông Nghiệp Thông Minh",
      technologies: [
        "Drone giám sát cây trồng",
        "Sensor độ ẩm đất",
        "Hydroponic và aquaponic",
        "AI dự đoán sâu bệnh"
      ],
      benefits: "Tăng 40% năng suất",
      icon: "🌾"
    },
    {
      category: "Quản Lý Rác Thải",
      technologies: [
        "Thùng rác thông minh",
        "Robot phân loại tự động",
        "Ứng dụng theo dõi rác",
        "Máy tái chế tại chỗ"
      ],
      benefits: "Tái chế 80% rác thải",
      icon: "🗂️"
    }
  ];

  const climateHeroes = [
    {
      name: "Greta Thunberg",
      age: "Sinh năm 2003",
      contribution: "Vận động toàn cầu chống biến đổi khí hậu",
      achievement: "Khởi xướng phong trào Fridays for Future",
      quote: "&ldquo;Làm sao các bạn dám làm vậy? Các bạn đã đánh cắp ước mơ và tuổi thơ của tôi!&rdquo;",
      icon: "🌍"
    },
    {
      name: "Elon Musk",
      age: "Sinh năm 1971",
      contribution: "Phát triển xe điện và năng lượng tái tạo",
      achievement: "Tesla, SpaceX, SolarCity",
      quote: "&ldquo;Chúng ta phải chuyển sang năng lượng bền vững. Đó không phải là lựa chọn.&rdquo;",
      icon: "⚡"
    },
    {
      name: "Jane Goodall",
      age: "Sinh năm 1934",
      contribution: "Bảo vệ động vật hoang dã và môi trường",
      achievement: "Nghiên cứu tinh tinh và bảo tồn",
      quote: "&ldquo;Những gì bạn làm tạo ra sự khác biệt, và bạn phải quyết định loại khác biệt nào.&rdquo;",
      icon: "🐵"
    },
    {
      name: "Boyan Slat",
      age: "Sinh năm 1994",
      contribution: "Dọn rác thải nhựa trong đại dương",
      achievement: "The Ocean Cleanup Project",
      quote: "&ldquo;Tại sao chúng ta phải chờ đợi? Tại sao chúng ta không thể tự làm điều đó?&rdquo;",
      icon: "🌊"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/stem" className="text-green-400 hover:text-green-300 transition-colors duration-300">
              ← Quay lại STEM
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
            <div className="text-5xl mb-4">🌍</div>
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
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full">
                🌱 {lesson.category.toUpperCase()}
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

        {/* Environmental Challenges */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🚨 Thách Thức Môi Trường & Giải Pháp
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {environmentalChallenges.map((challenge, index) => (
              <div key={index} className={`bg-gradient-to-br ${challenge.color} rounded-xl p-6 border border-white/20`}>
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{challenge.icon}</div>
                  <h3 className="text-xl font-bold text-white">{challenge.problem}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-red-300 font-semibold mb-2">Nguyên nhân:</h4>
                  <div className="flex flex-wrap gap-2">
                    {challenge.causes.map((cause, causeIndex) => (
                      <span key={causeIndex} className="bg-red-500/20 text-red-200 text-xs px-2 py-1 rounded-full">
                        {cause}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-green-300 font-semibold mb-2">Giải pháp:</h4>
                  <ul className="space-y-1">
                    {challenge.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-green-400 mr-2 mt-0.5">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-500/20 rounded-lg p-3">
                  <h4 className="text-blue-300 font-semibold mb-1 text-sm">Công nghệ hỗ trợ:</h4>
                  <p className="text-gray-300 text-xs">{challenge.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Renewable Energy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            ⚡ Năng Lượng Tái Tạo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renewableEnergy.map((energy, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-xl p-6 border border-yellow-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{energy.icon}</div>
                    <h3 className="text-lg font-bold text-white">{energy.type}</h3>
                  </div>
                  <div className="bg-green-500/20 px-2 py-1 rounded text-green-200 text-xs">
                    {energy.efficiency}
                  </div>
                </div>
                
                <p className="text-yellow-200 text-sm mb-3 font-semibold">{energy.how}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <h4 className="text-green-300 font-semibold mb-2 text-sm">Ưu điểm:</h4>
                    <ul className="space-y-1">
                      {energy.advantages.map((advantage, advIndex) => (
                        <li key={advIndex} className="text-gray-300 text-xs flex items-start">
                          <span className="text-green-400 mr-1 mt-0.5">+</span>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-300 font-semibold mb-2 text-sm">Ứng dụng:</h4>
                    <ul className="space-y-1">
                      {energy.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-gray-300 text-xs flex items-start">
                          <span className="text-blue-400 mr-1 mt-0.5">•</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-500/20 rounded-lg p-3">
                  <h4 className="text-purple-300 font-semibold mb-1 text-sm">DIY Project:</h4>
                  <p className="text-gray-300 text-xs">{energy.diy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🛠️ Vật Liệu Cần Thiết
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {lesson.materials.map((material, index) => (
              <div key={index} className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-lg p-4 text-center border border-green-500/20">
                <div className="text-2xl mb-2">🌱</div>
                <div className="text-gray-300 text-sm font-medium">{material}</div>
              </div>
            ))}
          </div>
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

        {/* Green Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            💚 Công Nghệ Xanh
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {greenTech.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{tech.icon}</div>
                  <h3 className="text-lg font-bold text-white">{tech.category}</h3>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {tech.technologies.map((technology, techIndex) => (
                    <li key={techIndex} className="text-gray-300 text-sm flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">🔧</span>
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="bg-teal-500/20 rounded-lg p-3">
                  <p className="text-teal-200 text-sm font-semibold">💡 Lợi ích: {tech.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Climate Heroes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🦸 Những Người Hùng Khí Hậu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {climateHeroes.map((hero, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-start mb-3">
                  <div className="text-3xl mr-3">{hero.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{hero.name}</h3>
                    <p className="text-blue-300 text-sm">{hero.age}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-3">{hero.contribution}</p>
                
                <div className="bg-purple-500/20 rounded-lg p-3 mb-3">
                  <p className="text-purple-200 text-xs font-semibold mb-1">Thành tựu:</p>
                  <p className="text-gray-300 text-xs">{hero.achievement}</p>
                </div>
                
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <p className="text-blue-200 text-xs font-semibold mb-1">Quote:</p>
                  <p className="text-gray-300 text-xs italic" dangerouslySetInnerHTML={{__html: hero.quote}}></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🛠️ Bài Tập Thực Hành
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
                
                <div className="mb-6">
                  <h4 className="text-green-300 font-semibold mb-3 flex items-center">
                    <span className="text-xl mr-2">🌱</span>
                    Hướng dẫn thực hiện:
                  </h4>
                  <div className="space-y-3">
                    {exercise.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <div className="bg-green-500/20 text-green-300 rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-0.5 flex-shrink-0 border border-green-500/30">
                          {stepIndex + 1}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <span className="text-lg mr-2">🎯</span>
                      Kết quả mong đợi:
                    </h4>
                    <p className="text-gray-300 text-sm">{exercise.expectedResult}</p>
                  </div>
                  
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2 flex items-center">
                      <span className="text-lg mr-2">💡</span>
                      Mẹo thực hiện:
                    </h4>
                    <ul className="space-y-1">
                      {exercise.hints.map((hint, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2 mt-0.5">•</span>
                          {hint}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Environmental Impact */}
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h4 className="text-yellow-300 font-semibold mb-2 flex items-center">
                    <span className="text-lg mr-2">🌍</span>
                    Tác động môi trường:
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {exercise.id === 'ex1-solar-phone-charger' 
                      ? "Sạc điện thoại bằng năng lượng mặt trời giúp giảm sử dụng điện từ lưới quốc gia (thường từ than đá). Một bộ sạc 5W sử dụng trong năm có thể giảm 10-15kg CO₂. Nếu triển khai rộng rãi, đây là bước quan trọng hướng tới tương lai carbon neutral."
                      : "Thùng rác thông minh giúp tối ưu hóa việc thu gom rác, giảm 30% lượt xe chạy không cần thiết. Hệ thống phân loại tự động tăng 40% hiệu quả tái chế. Điều này giảm đáng kể rác thải đến bãi chôn lấp và khí methane - chất gây hiệu ứng nhà kính mạnh gấp 25 lần CO₂."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Actions */}
        <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-2xl p-8 border border-green-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🤝 Hành Động Cá Nhân Cho Môi Trường
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-green-300 font-semibold mb-2">Tiết Kiệm Năng Lượng</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Tắt đèn khi không dùng</li>
                <li>• Sử dụng đèn LED</li>
                <li>• Ngắt điện các thiết bị</li>
                <li>• Sử dụng điều hòa 26°C</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-3">♻️</div>
              <h3 className="text-blue-300 font-semibold mb-2">Tái Chế Thông Minh</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Phân loại rác đúng cách</li>
                <li>• Tái sử dụng chai nhựa</li>
                <li>• Ủ compost từ rác thực phẩm</li>
                <li>• Donate đồ không dùng</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-3">🚲</div>
              <h3 className="text-purple-300 font-semibold mb-2">Giao Thông Xanh</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Đi bộ/xe đạp quãng gần</li>
                <li>• Sử dụng xe buýt</li>
                <li>• Chia sẻ xe với bạn bè</li>
                <li>• Học online khi có thể</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-yellow-300 font-semibold mb-2">Bảo Vệ Thiên Nhiên</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Trồng cây xanh</li>
                <li>• Không xả rác bừa bãi</li>
                <li>• Bảo vệ động vật</li>
                <li>• Chia sẻ kiến thức môi trường</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real World Applications */}
        {lesson.realWorldApplications && lesson.realWorldApplications.length > 0 && (
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              🌍 Ứng Dụng Thực Tế
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lesson.realWorldApplications.map((app, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">🌱</div>
                  <div className="text-blue-300 text-sm font-semibold">{app}</div>
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
