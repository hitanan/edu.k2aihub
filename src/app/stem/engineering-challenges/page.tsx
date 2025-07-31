import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { stemLessons } from '@/data/stem';
import { getModuleNavigation, getNavigationConfig } from '@/utils/moduleNavigation';
import YouTubePlayer from '@/components/YouTubePlayer';

export const metadata: Metadata = {
  title: createTitle("Thử Thách Kỹ Thuật - STEM"),
  description: createDescription("Trở thành kỹ sư nhí với những thử thách xây dựng thú vị! Thiết kế cầu từ giấy, tạo tháp chịu động đất, xây dựng máy bay giấy bay xa nhất"),
  keywords: createKeywords(["engineering challenges", "kỹ thuật trẻ em", "xây dựng cầu", "thiết kế kết cấu", "STEM engineering"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Thử Thách Kỹ Thuật"),
    description: createDescription("Học kỹ thuật qua các thử thách xây dựng thực tế"),
    type: "website",
  },
};

export default function EngineeringChallengesLesson() {
  const lesson = stemLessons.find(l => l.id === 'engineering-challenges');
  const navigation = getModuleNavigation('stem', 'engineering-challenges');
  const navConfig = navigation ? getNavigationConfig(navigation, '/stem') : null;
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const engineeringPrinciples = [
    {
      title: "Kết Cấu Tam Giác",
      description: "Tam giác là hình mạnh nhất trong kỹ thuật vì không thể biến dạng",
      icon: "📐",
      example: "Cầu treo, tháp Eiffel, khung xe đạp"
    },
    {
      title: "Phân Phối Tải Trọng",
      description: "Chia sức nặng đều cho nhiều điểm để tăng khả năng chịu tải",
      icon: "⚖️",
      example: "Móng nhà, bánh xe nhiều căm, cầu nhiều trụ"
    },
    {
      title: "Trọng Tâm và Cân Bằng",
      description: "Vật ổn định khi trọng tâm nằm trong diện tích đế",
      icon: "🎯",
      example: "Kim tự tháp, chân đế rộng, thăng bằng"
    },
    {
      title: "Độ Cứng và Độ Dẻo",
      description: "Vật liệu cần đủ cứng để chịu lực nhưng đủ dẻo để không gãy",
      icon: "🔧",
      example: "Tre, thép, composite carbon"
    }
  ];

  const buildingTips = [
    {
      category: "Vật Liệu",
      tips: [
        "Cuộn giấy thành ống để tăng độ cứng",
        "Gấp giấy theo nếp để tạo độ bền",
        "Dùng băng keo tiết kiệm, đặt đúng chỗ",
        "Kết hợp nhiều vật liệu khác nhau"
      ],
      icon: "📦"
    },
    {
      category: "Thiết Kế",
      tips: [
        "Vẽ thiết kế trước khi xây dựng",
        "Bắt đầu từ nền móng vững chắc",
        "Tạo khung trước, chi tiết sau",
        "Dự phòng vật liệu thừa 20%"
      ],
      icon: "📝"
    },
    {
      category: "Test & Debug",
      tips: [
        "Test từng phần trước khi lắp ghép",
        "Tăng tải từ từ để quan sát",
        "Ghi chép điểm yếu để cải tiến",
        "Học từ thất bại của bạn khác"
      ],
      icon: "🔬"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/stem" className="text-orange-400 hover:text-orange-300 transition-colors duration-300">
              ← Quay lại STEM
            </Link>
            {navConfig && (
              <div className="ml-auto text-sm text-gray-400">
                Bài {navConfig.progress.current} / {navConfig.progress.total}
              </div>
            )}
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🏗️</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {lesson.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              {lesson.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-orange-500/20 text-orange-200 px-3 py-1 rounded-full">
                ⏱️ {lesson.duration}
              </span>
              <span className="bg-red-500/20 text-red-200 px-3 py-1 rounded-full">
                🎯 {lesson.difficulty}
              </span>
              <span className="bg-yellow-500/20 text-yellow-200 px-3 py-1 rounded-full">
                🏗️ {lesson.category.toUpperCase()}
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
                <span className="text-orange-400 mr-3 mt-1">✓</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Engineering Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🔧 Nguyên Lý Kỹ Thuật
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringPrinciples.map((principle, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-500/20">
                <div className="text-3xl mb-3">{principle.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{principle.description}</p>
                <div className="bg-orange-500/20 rounded-lg p-3">
                  <p className="text-orange-200 text-xs"><strong>Ví dụ:</strong> {principle.example}</p>
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
              <div key={index} className="bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-lg p-4 text-center border border-orange-500/20">
                <div className="text-2xl mb-2">📦</div>
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

        {/* Building Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            💡 Bí Quyết Xây Dựng
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buildingTips.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-gray-300 text-sm flex items-start">
                      <span className="text-orange-400 mr-2 mt-0.5">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Challenges */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🏗️ Thử Thách Kỹ Thuật
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
                  <h4 className="text-orange-300 font-semibold mb-3 flex items-center">
                    <span className="text-xl mr-2">📋</span>
                    Hướng dẫn từng bước:
                  </h4>
                  <div className="space-y-3">
                    {exercise.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-300 rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-0.5 flex-shrink-0 border border-orange-500/30">
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
                      Thành công khi:
                    </h4>
                    <p className="text-gray-300 text-sm">{exercise.expectedResult}</p>
                  </div>
                  
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2 flex items-center">
                      <span className="text-lg mr-2">💡</span>
                      Mẹo hay:
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

                {/* Engineering Concept */}
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="text-purple-300 font-semibold mb-2 flex items-center">
                    <span className="text-lg mr-2">⚙️</span>
                    Nguyên lý kỹ thuật:
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {exercise.id === 'ex1-paper-bridge' 
                      ? "Cầu hoạt động dựa trên nguyên lý phân phối tải trọng. Cấu trúc tam giác tạo độ cứng, trong khi hình dầm phân tán lực xuống các trụ đỡ. Kỹ sư thực tế sử dụng các nguyên lý tương tự để thiết kế cầu có thể chịu được xe tải và gió mạnh."
                      : "Tháp chống động đất sử dụng nguyên lý cản chấn và phân tán năng lượng. Nền móng rộng giúp ổn định, cấu trúc linh hoạt hấp thụ dao động. Các tòa nhà cao tầng hiện đại có hệ thống tương tự để chống lại động đất và gió."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Famous Engineers */}
        <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-2xl p-8 border border-yellow-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            👨‍🔬 Kỹ Sư Nổi Tiếng
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-3">🗼</div>
              <h3 className="text-lg font-bold text-white mb-2">Gustave Eiffel</h3>
              <p className="text-gray-300 text-sm mb-2">Thiết kế tháp Eiffel - biểu tượng của kỹ thuật kim loại</p>
              <div className="bg-yellow-500/20 rounded p-2">
                <p className="text-yellow-200 text-xs">💡 Sử dụng kết cấu thép tam giác để tạo tháp cao 324m</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-3">🌉</div>
              <h3 className="text-lg font-bold text-white mb-2">Isambard Brunel</h3>
              <p className="text-gray-300 text-sm mb-2">Thiết kế cầu treo và đường sắt ở Anh</p>
              <div className="bg-yellow-500/20 rounded p-2">
                <p className="text-yellow-200 text-xs">💡 Tiên phong trong thiết kế cầu treo hiện đại</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">Wernher von Braun</h3>
              <p className="text-gray-300 text-sm mb-2">Cha đẻ của tên lửa không gian</p>
              <div className="bg-yellow-500/20 rounded p-2">
                <p className="text-yellow-200 text-xs">💡 Thiết kế tên lửa Saturn V đưa con người lên Mặt Trăng</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-lg font-bold text-white mb-2">Ada Lovelace</h3>
              <p className="text-gray-300 text-sm mb-2">Người phụ nữ đầu tiên lập trình máy tính</p>
              <div className="bg-yellow-500/20 rounded p-2">
                <p className="text-yellow-200 text-xs">💡 Viết thuật toán đầu tiên cho máy tính cơ học</p>
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
                  <div className="text-2xl mb-2">🏗️</div>
                  <div className="text-blue-300 text-sm font-semibold">{app}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        {navConfig && (
          <div className="flex justify-between items-center">
            <Link 
              href={navConfig.previous.href}
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              {navConfig.previous.label}
            </Link>
            
            {navConfig.next.href !== '/stem' && (
              <Link 
                href={navConfig.next.href}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300"
              >
                {navConfig.next.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
