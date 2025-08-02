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
  title: createTitle("Lập Trình Cho Trẻ Em - STEM"),
  description: createDescription("Học lập trình như chơi game! Sử dụng Scratch để tạo ra những trò chơi, hoạt cảnh thú vị và phát triển tư duy logic"),
  keywords: createKeywords(["Scratch programming", "lập trình trẻ em", "coding for kids", "game development", "tư duy logic"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Lập Trình Cho Trẻ Em"),
    description: createDescription("Học lập trình Scratch qua các dự án thú vị"),
    type: "website",
  },
};

export default function CodingForKidsLesson() {
  const lesson = stemLessons.find(l => l.id === 'coding-for-kids');
  const navigation = getModuleNavigation('stem', 'coding-for-kids');
  const navConfig = navigation ? getNavigationConfig(navigation, '/stem') : null;
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const programmingConcepts = [
    {
      title: "Tuần tự (Sequence)",
      description: "Máy tính thực hiện lệnh theo thứ tự từ trên xuống dưới",
      icon: "📝",
      example: "Di chuyển 10 bước → Quay 90 độ → Di chuyển 10 bước"
    },
    {
      title: "Lặp lại (Loop)",
      description: "Thực hiện một hành động nhiều lần để tránh viết lại code",
      icon: "🔄",
      example: "Lặp lại 4 lần: {Di chuyển 10 bước, Quay 90 độ}"
    },
    {
      title: "Điều kiện (If-Then)",
      description: "Máy tính đưa ra quyết định dựa trên điều kiện",
      icon: "❓",
      example: "Nếu chạm tường → Quay lại"
    },
    {
      title: "Biến số (Variables)",
      description: "Lưu trữ thông tin như điểm số, tên người chơi",
      icon: "📊",
      example: "Điểm = 0 → Khi ăn được coin → Điểm = Điểm + 10"
    }
  ];

  const scratchBlocks = [
    {
      category: "Chuyển động",
      color: "blue",
      blocks: ["move 10 steps", "turn 15 degrees", "go to x:0 y:0"],
      icon: "🚶"
    },
    {
      category: "Giao diện",
      color: "purple", 
      blocks: ["say Hello!", "think Hmm...", "show", "hide"],
      icon: "💭"
    },
    {
      category: "Âm thanh",
      color: "pink",
      blocks: ["play sound Meow", "play note 60", "set volume to 100%"],
      icon: "🔊"
    },
    {
      category: "Điều khiển",
      color: "orange",
      blocks: ["repeat 10", "if touching edge", "wait 1 seconds"],
      icon: "🎮"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/stem" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
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
            <div className="text-5xl mb-4">💻</div>
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
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full">
                💻 {lesson.category.toUpperCase()}
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

        {/* What is Programming? */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🤔 Lập Trình Là Gì?
          </h2>
          
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 border border-indigo-500/20 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Dạy Máy Tính Nghe Lời!</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                Lập trình giống như việc bạn viết một &ldquo;công thức nấu ăn&rdquo; cho máy tính. 
                Bạn cho máy tính biết từng bước một cách rất chi tiết để nó làm đúng những gì bạn muốn.
                Ví dụ: &ldquo;Di chuyển nhân vật sang phải 10 bước, sau đó nhảy lên!&rdquo;
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmingConcepts.map((concept, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">{concept.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{concept.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{concept.description}</p>
                <div className="bg-indigo-500/20 rounded-lg p-3">
                  <p className="text-indigo-200 text-xs font-mono">{concept.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scratch Introduction */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🐱 Giới Thiệu Scratch
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Tại sao chọn Scratch?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">🧩</span>
                    <span><strong>Lập trình bằng khối:</strong> Không cần gõ code, chỉ kéo thả</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">🎨</span>
                    <span><strong>Sáng tạo tự do:</strong> Tạo game, hoạt hình, music</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">👫</span>
                    <span><strong>Cộng đồng lớn:</strong> Chia sẻ và học từ người khác</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">🆓</span>
                    <span><strong>Hoàn toàn miễn phí:</strong> Chỉ cần trình duyệt web</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">Bắt đầu ngay!</h3>
                <p className="text-gray-300 mb-4">Truy cập scratch.mit.edu để bắt đầu</p>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-orange-200 text-sm">💡 Không cần cài đặt gì cả!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {scratchBlocks.map((category, index) => (
              <div key={index} className={`
                ${category.color === 'blue' ? 'bg-blue-500/20 border-blue-500/30' : ''}
                ${category.color === 'purple' ? 'bg-purple-500/20 border-purple-500/30' : ''}
                ${category.color === 'pink' ? 'bg-pink-500/20 border-pink-500/30' : ''}
                ${category.color === 'orange' ? 'bg-orange-500/20 border-orange-500/30' : ''}
                rounded-xl p-4 border
              `}>
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className={`text-lg font-bold mb-3 ${
                  category.color === 'blue' ? 'text-blue-200' :
                  category.color === 'purple' ? 'text-purple-200' :
                  category.color === 'pink' ? 'text-pink-200' :
                  'text-orange-200'
                }`}>{category.category}</h3>
                <div className="space-y-2">
                  {category.blocks.map((block, blockIndex) => (
                    <div key={blockIndex} className={`
                      ${category.color === 'blue' ? 'bg-blue-600/30 text-blue-100' : ''}
                      ${category.color === 'purple' ? 'bg-purple-600/30 text-purple-100' : ''}
                      ${category.color === 'pink' ? 'bg-pink-600/30 text-pink-100' : ''}
                      ${category.color === 'orange' ? 'bg-orange-600/30 text-orange-100' : ''}
                      rounded text-xs p-2 font-mono
                    `}>
                      {block}
                    </div>
                  ))}
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
              <div key={index} className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-lg p-4 text-center border border-indigo-500/20">
                <div className="text-2xl mb-2">💻</div>
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

        {/* Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🎮 Dự Án Thực Hành
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
                  <h4 className="text-indigo-300 font-semibold mb-3 flex items-center">
                    <span className="text-xl mr-2">📋</span>
                    Hướng dẫn từng bước:
                  </h4>
                  <div className="space-y-3">
                    {exercise.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <div className="bg-indigo-500/20 text-indigo-300 rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-0.5 flex-shrink-0 border border-indigo-500/30">
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

                {/* Coding Concepts Used */}
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="text-purple-300 font-semibold mb-2 flex items-center">
                    <span className="text-lg mr-2">🧠</span>
                    Khái niệm lập trình:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(exercise.id === 'ex1-animated-story' 
                      ? ['Tuần tự', 'Sự kiện', 'Hoạt cảnh', 'Âm thanh']
                      : ['Điều khiển', 'Va chạm', 'Biến số', 'Logic'])
                    .map((concept, conceptIndex) => (
                      <span key={conceptIndex} className="bg-purple-500/20 text-purple-200 text-xs px-2 py-1 rounded-full">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programming Challenges */}
        <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-2xl p-8 border border-yellow-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🏃‍♂️ Thử Thách Thêm
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                Sáng tạo nghệ thuật
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Vẽ hình bằng code (turtle graphics)</li>
                <li>• Tạo pattern đối xứng</li>
                <li>• Làm hiệu ứng ánh sáng nhấp nháy</li>
                <li>• Thiết kế poster động</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Game nâng cao
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Game đua xe với chướng ngại vật</li>
                <li>• Quiz kiến thức với điểm số</li>
                <li>• Game nhảy platform</li>
                <li>• Simulator nuôi thú cưng</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Programming Skills Benefits */}
        <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-2xl p-8 border border-green-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🌟 Lợi Ích Của Lập Trình
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🧩</div>
              <h3 className="text-lg font-bold text-white mb-2">Tư duy logic</h3>
              <p className="text-gray-300 text-sm">Học cách chia nhỏ vấn đề phức tạp thành các bước đơn giản</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-bold text-white mb-2">Sáng tạo không giới hạn</h3>
              <p className="text-gray-300 text-sm">Biến ý tưởng thành hiện thực qua lập trình</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="text-lg font-bold text-white mb-2">Kiên trì và kiên nhẫn</h3>
              <p className="text-gray-300 text-sm">Debug code dạy bạn không bỏ cuộc trước khó khăn</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-white mb-2">Hợp tác nhóm</h3>
              <p className="text-gray-300 text-sm">Chia sẻ project và học hỏi từ cộng đồng</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">Chuẩn bị tương lai</h3>
              <p className="text-gray-300 text-sm">Kỹ năng cần thiết cho thế kỷ 21</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">😊</div>
              <h3 className="text-lg font-bold text-white mb-2">Vui vẻ và thú vị</h3>
              <p className="text-gray-300 text-sm">Học lập trình như chơi game!</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl p-8 border border-indigo-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            📈 Bước Tiếp Theo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">🎯 Sau khi thành thạo Scratch:</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Python for Kids - Lập trình thật</li>
                <li>• App Inventor - Tạo ứng dụng mobile</li>
                <li>• Roblox Studio - Lập trình game 3D</li>
                <li>• HTML/CSS - Tạo website</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">🏆 Tham gia cộng đồng:</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Scratch Community - scratch.mit.edu</li>
                <li>• Hour of Code - code.org</li>
                <li>• Local coding clubs</li>
                <li>• Programming competitions</li>
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
                  <div className="text-2xl mb-2">💻</div>
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
