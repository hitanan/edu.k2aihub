import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { stemLessons } from '@/data/stem';
import { getModuleNavigation, getNavigationConfig } from '@/utils/moduleNavigation';
import YouTubePlayer from '@/components/YouTubePlayer';

export const metadata: Metadata = {
  title: createTitle("Thí Nghiệm Vật Lý Thú Vị - STEM"),
  description: createDescription("Biến nhà bếp thành phòng thí nghiệm! Khám phá các hiện tượng vật lý qua những thí nghiệm đơn giản nhưng kỳ diệu"),
  keywords: createKeywords(["thí nghiệm vật lý", "khoa học trẻ em", "density tower", "static electricity", "vật lý thực hành"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Thí Nghiệm Vật Lý Thú Vị"),
    description: createDescription("Khám phá vật lý qua thí nghiệm thực hành"),
    type: "website",
  },
};

export default function PhysicsExperimentsLesson() {
  const lesson = stemLessons.find(l => l.id === 'fun-physics-experiments');
  const navigation = getModuleNavigation('stem', 'fun-physics-experiments');
  const navConfig = navigation ? getNavigationConfig(navigation, '/stem') : null;
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const scienceFacts = [
    {
      title: "Mật độ và Trọng lực",
      description: "Các chất có mật độ khác nhau sẽ phân tầng theo trọng lực. Nguyên lý này được ứng dụng trong khoan dầu biển.",
      icon: "⚖️"
    },
    {
      title: "Điện tích và Lực hút",
      description: "Điện tĩnh tạo ra bởi ma sát electrons. Sét cũng là một dạng điện tĩnh khổng lồ!",
      icon: "⚡"
    },
    {
      title: "Áp suất và Chất lỏng",
      description: "Áp suất tăng theo độ sâu. Điều này giải thích tại sao thợ lặn cần thiết bị đặc biệt.",
      icon: "🌊"
    },
    {
      title: "Ánh sáng và Màu sắc",
      description: "Ánh sáng trắng chứa tất cả màu sắc. Cầu vồng là ví dụ tự nhiên của hiện tượng này!",
      icon: "🌈"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 py-12">
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
              <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full">
                🔬 {lesson.category.toUpperCase()}
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

        {/* Materials Needed */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🛠️ Vật Liệu Cần Thiết
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {lesson.materials.map((material, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg p-4 text-center border border-purple-500/20">
                <div className="text-2xl mb-2">🧪</div>
                <div className="text-gray-300 text-sm font-medium">{material}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300 text-sm">
              💡 <strong>Gợi ý:</strong> Hầu hết vật liệu đều có sẵn trong nhà bếp! 
              Đây là điều tuyệt vời của khoa học - nó ở khắp nọi xung quanh chúng ta.
            </p>
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

        {/* Physics Concepts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧠 Khái Niệm Vật Lý
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scienceFacts.map((fact, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/20">
                <div className="text-3xl mb-3">{fact.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{fact.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Guidelines */}
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            ⚠️ Hướng Dẫn An Toàn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">👨‍👩‍👧‍👦</span>
              <div>
                <h3 className="text-red-300 font-semibold mb-1">Có người lớn giám sát</h3>
                <p className="text-gray-300 text-sm">Luôn có bố mẹ hoặc giáo viên bên cạnh khi làm thí nghiệm</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">🥽</span>
              <div>
                <h3 className="text-red-300 font-semibold mb-1">Bảo vệ mắt</h3>
                <p className="text-gray-300 text-sm">Đeo kính bảo hộ nếu có, tránh để chất lỏng bắn vào mắt</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">🧼</span>
              <div>
                <h3 className="text-red-300 font-semibold mb-1">Vệ sinh tay</h3>
                <p className="text-gray-300 text-sm">Rửa tay sạch sau khi hoàn thành thí nghiệm</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">🏠</span>
              <div>
                <h3 className="text-red-300 font-semibold mb-1">Bảo vệ không gian</h3>
                <p className="text-gray-300 text-sm">Làm thí nghiệm ở nơi dễ dọn dẹp, tránh gây bẩn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experiments */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧪 Thí Nghiệm Thực Hành
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
                    <span className="text-xl mr-2">🔬</span>
                    Các bước thực hiện:
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
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2 flex items-center">
                      <span className="text-lg mr-2">📊</span>
                      Kết quả mong đợi:
                    </h4>
                    <p className="text-gray-300 text-sm">{exercise.expectedResult}</p>
                  </div>
                  
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <h4 className="text-yellow-300 font-semibold mb-2 flex items-center">
                      <span className="text-lg mr-2">💡</span>
                      Gợi ý:
                    </h4>
                    <ul className="space-y-1">
                      {exercise.hints.map((hint, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-yellow-400 mr-2 mt-0.5">•</span>
                          {hint}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quick Science Explanation */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                    <span className="text-lg mr-2">🧠</span>
                    Tại sao lại như vậy?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {exercise.id === 'ex1-density-tower' 
                      ? "Mỗi chất lỏng có mật độ khác nhau. Chất có mật độ cao hơn (nặng hơn) sẽ chìm xuống dưới, tạo thành các tầng riêng biệt. Đây chính là nguyên lý hoạt động của nhiều thiết bị tách chất trong công nghiệp!"
                      : "Khi cọ xát, electron di chuyển từ vật này sang vật khác, tạo ra điện tích. Điện tích trái dấu hút nhau, cùng dấu đẩy nhau. Hiện tượng này có ứng dụng trong máy photocopy, máy in laser và nhiều thiết bị khác!"}
                  </p>
                </div>
              </div>
            ))}
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
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-blue-300 text-sm font-semibold">{app}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Extend Your Learning */}
        <div className="bg-gradient-to-r from-green-600/10 to-yellow-600/10 rounded-2xl p-8 border border-green-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🌟 Mở Rộng Học Tập
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                <span className="text-2xl mr-2">📚</span>
                Thí nghiệm thêm
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Tạo volcano baking soda</li>
                <li>• Làm slime không độc hại</li>
                <li>• Thí nghiệm với từ tính</li>
                <li>• Tạo crystal muối màu</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                <span className="text-2xl mr-2">📖</span>
                Tìm hiểu thêm
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Các nguyên tử và phân tử</li>
                <li>• Trạng thái của vật chất</li>
                <li>• Lực và chuyển động</li>
                <li>• Năng lượng và nhiệt</li>
              </ul>
            </div>
          </div>
        </div>

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
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
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
