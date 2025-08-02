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
  title: createTitle("Toán Học Trong Đời Sống - STEM"),
  description: createDescription("Toán học không chỉ là con số khô khan! Khám phá toán học qua nấu ăn, shopping, thiết kế và nghệ thuật"),
  keywords: createKeywords(["toán học thực tế", "math in real life", "tỷ lệ nấu ăn", "xác suất", "hình học đời sống"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Toán Học Trong Đời Sống"),
    description: createDescription("Khám phá toán học qua các hoạt động hàng ngày"),
    type: "website",
  },
};

export default function MathInRealLifeLesson() {
  const lesson = stemLessons.find(l => l.id === 'math-in-real-life');
  const navigation = getModuleNavigation('stem', 'math-in-real-life');
  const navConfig = navigation ? getNavigationConfig(navigation, '/stem') : null;
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const mathInLife = [
    {
      area: "Nhà Bếp",
      concepts: ["Tỷ lệ", "Phân số", "Thời gian", "Nhiệt độ"],
      examples: [
        "Tăng/giảm nguyên liệu theo số người ăn",
        "Tính thời gian nấu cho từng món",
        "Chia bánh pizza thành từng phần bằng nhau",
        "Đo lường chính xác gia vị"
      ],
      icon: "👩‍🍳",
      color: "from-red-600/20 to-orange-600/20"
    },
    {
      area: "Mua Sắm",
      concepts: ["Giá cả", "Phần trăm", "Tiết kiệm", "So sánh"],
      examples: [
        "Tính giá giảm khi có khuyến mãi",
        "So sánh giá/kg của các sản phẩm",
        "Tính tổng tiền và tiền thối",
        "Lập kế hoạch ngân sách mua sắm"
      ],
      icon: "🛒",
      color: "from-green-600/20 to-blue-600/20"
    },
    {
      area: "Thể Thao",
      concepts: ["Thống kê", "Xác suất", "Tốc độ", "Quãng đường"],
      examples: [
        "Tính tỷ lệ thắng/thua của đội bóng",
        "Đo tốc độ chạy và cải thiện",
        "Tính góc ném bóng rổ hiệu quả",
        "Theo dõi điểm số qua các trận đấu"
      ],
      icon: "⚽",
      color: "from-blue-600/20 to-purple-600/20"
    },
    {
      area: "Nghệ Thuật",
      concepts: ["Hình học", "Đối xứng", "Tỷ lệ vàng", "Mẫu hình"],
      examples: [
        "Vẽ hình đối xứng chính xác",
        "Sử dụng tỷ lệ vàng trong thiết kế",
        "Tạo pattern lặp lại đều đặn",
        "Tính toán kích thước khung tranh"
      ],
      icon: "🎨",
      color: "from-purple-600/20 to-pink-600/20"
    }
  ];

  const funMathFacts = [
    {
      title: "Pizza và Hình Học",
      fact: "Một pizza 18 inch có diện tích lớn hơn hai pizza 12 inch!",
      explanation: "Diện tích = π × r². Pizza 18\" = 254 inch², hai pizza 12\" = 226 inch²",
      icon: "🍕"
    },
    {
      title: "Fibonacci Trong Tự Nhiên",
      fact: "Hoa hướng dương có 55 và 89 cánh hoa - số Fibonacci!",
      explanation: "Dãy Fibonacci: 1,1,2,3,5,8,13,21,34,55,89... xuất hiện khắp nơi trong tự nhiên",
      icon: "🌻"
    },
    {
      title: "Xác Suất Sinh Nhật",
      fact: "Trong lớp 23 học sinh, có 50% khả năng có 2 bạn cùng sinh nhật!",
      explanation: "Tưởng cần 183 người mới có 50%, nhưng thực tế chỉ cần 23 người",
      icon: "🎂"
    },
    {
      title: "Tỷ Lệ Vàng",
      fact: "Khuôn mặt đẹp có tỷ lệ chiều dài/chiều rộng ≈ 1.618",
      explanation: "Tỷ lệ vàng φ = 1.618... xuất hiện trong nghệ thuật, kiến trúc và thiên nhiên",
      icon: "✨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/stem" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
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
            <div className="text-5xl mb-4">🔢</div>
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
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full">
                🔢 {lesson.category.toUpperCase()}
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

        {/* Math in Daily Life */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🏠 Toán Học Xung Quanh Ta
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mathInLife.map((area, index) => (
              <div key={index} className={`bg-gradient-to-br ${area.color} rounded-xl p-6 border border-white/20`}>
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{area.icon}</div>
                  <h3 className="text-xl font-bold text-white">{area.area}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-purple-300 font-semibold mb-2">Khái niệm toán học:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.concepts.map((concept, conceptIndex) => (
                      <span key={conceptIndex} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-yellow-300 font-semibold mb-2">Ví dụ thực tế:</h4>
                  <ul className="space-y-1">
                    {area.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-yellow-400 mr-2 mt-0.5">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
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
              <div key={index} className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-4 text-center border border-purple-500/20">
                <div className="text-2xl mb-2">🧮</div>
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

        {/* Fun Math Facts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🤯 Sự Thật Toán Học Thú Vị
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funMathFacts.map((fact, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-xl p-6 border border-yellow-500/20">
                <div className="text-3xl mb-3">{fact.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{fact.title}</h3>
                <p className="text-yellow-300 text-sm font-semibold mb-2">{fact.fact}</p>
                <p className="text-gray-300 text-xs">{fact.explanation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧮 Bài Tập Thực Hành
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
                  <h4 className="text-purple-300 font-semibold mb-3 flex items-center">
                    <span className="text-xl mr-2">👨‍🍳</span>
                    Hướng dẫn thực hiện:
                  </h4>
                  <div className="space-y-3">
                    {exercise.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <div className="bg-purple-500/20 text-purple-300 rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-0.5 flex-shrink-0 border border-purple-500/30">
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
                      Mẹo tính toán:
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

                {/* Math Concept */}
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h4 className="text-yellow-300 font-semibold mb-2 flex items-center">
                    <span className="text-lg mr-2">🧠</span>
                    Khái niệm toán học:
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {exercise.id === 'ex1-cooking-ratios' 
                      ? "Tỷ lệ và phân số là nền tảng của toán học. Khi tăng gấp đôi số người ăn, ta nhân tất cả nguyên liệu với 2. Đây chính là phép nhân phân số: 4 người × 1.5 = 6 người. Kỹ năng này quan trọng trong kinh doanh, khoa học và đời sống."
                      : "Xác suất giúp ta hiểu khả năng xảy ra của sự kiện. Đồng xu có 2 mặt nên P(ngửa) = 1/2 = 50%. Nhưng trong thực tế, kết quả có thể khác vì số lần tung ít. Luật số lớn nói rằng càng tung nhiều, kết quả càng gần lý thuyết."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Math in Careers */}
        <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-2xl p-8 border border-green-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            💼 Toán Học Trong Nghề Nghiệp
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">👨‍⚕️</div>
              <h3 className="text-green-300 font-semibold mb-1">Bác Sĩ</h3>
              <p className="text-gray-300 text-sm">Tính liều thuốc, thống kê bệnh nhân, phân tích xét nghiệm</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">👨‍💼</div>
              <h3 className="text-blue-300 font-semibold mb-1">Doanh Nhân</h3>
              <p className="text-gray-300 text-sm">Tính lãi/lỗ, phân tích thị trường, lập ngân sách</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🎮</div>
              <h3 className="text-purple-300 font-semibold mb-1">Game Developer</h3>
              <p className="text-gray-300 text-sm">Toán 3D, vật lý game, thuật toán AI</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🏗️</div>
              <h3 className="text-orange-300 font-semibold mb-1">Kiến Trúc Sư</h3>
              <p className="text-gray-300 text-sm">Hình học không gian, tính toán kết cấu</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🎬</div>
              <h3 className="text-red-300 font-semibold mb-1">Animator</h3>
              <p className="text-gray-300 text-sm">Toán chuyển động, hiệu ứng hình ảnh</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="text-yellow-300 font-semibold mb-1">Data Scientist</h3>
              <p className="text-gray-300 text-sm">Thống kê, xác suất, machine learning</p>
            </div>
          </div>
        </div>

        {/* Fun Math Games */}
        <div className="bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-2xl p-8 border border-pink-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🎯 Trò Chơi Toán Học
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">🏪</span>
                Siêu Thị Toán Học
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Thiết lập &quot;cửa hàng&quot; với giá cả và chơi mua bán. Tính tổng tiền, tiền thối, so sánh giá.
              </p>
              <div className="bg-pink-500/20 rounded p-2">
                <p className="text-pink-200 text-xs">💡 Học: Cộng trừ, phần trăm, so sánh</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">🎲</span>
                Dự Đoán Xác Suất
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Tung xúc xắc nhiều lần, ghi chép kết quả và so sánh với dự đoán ban đầu.
              </p>
              <div className="bg-purple-500/20 rounded p-2">
                <p className="text-purple-200 text-xs">💡 Học: Xác suất, thống kê, dự đoán</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">📐</span>
                Thám Hiểm Hình Học
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Tìm các hình học trong nhà: tam giác, vuông, tròn. Đo và so sánh kích thước.
              </p>
              <div className="bg-blue-500/20 rounded p-2">
                <p className="text-blue-200 text-xs">💡 Học: Hình học, đo lường, so sánh</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">⏰</span>
                Chạy Đua Với Thời Gian
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Đo thời gian làm các việc khác nhau. Tính trung bình, tìm hoạt động nhanh/chậm nhất.
              </p>
              <div className="bg-green-500/20 rounded p-2">
                <p className="text-green-200 text-xs">💡 Học: Thời gian, trung bình, so sánh</p>
              </div>
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
                  <div className="text-2xl mb-2">📊</div>
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
