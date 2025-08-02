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
  title: createTitle("Nghệ Thuật Gặp Khoa Học - STEAM"),
  description: createDescription("Khám phá sự kết hợp tuyệt vời giữa nghệ thuật và khoa học. Tạo ra những tác phẩm nghệ thuật với nguyên lý khoa học"),
  keywords: createKeywords(["nghệ thuật khoa học", "STEAM education", "sáng tạo", "màu sắc", "âm thanh", "hình học"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Nghệ Thuật Gặp Khoa Học"),
    description: createDescription("Sự kết hợp tuyệt vời giữa nghệ thuật và khoa học"),
    type: "website",
  },
};

export default function ArtMeetsScienceLesson() {
  const lesson = stemLessons.find(l => l.id === 'art-meets-science');
  const navigation = getModuleNavigation('stem', 'art-meets-science');
  const navConfig = navigation ? getNavigationConfig(navigation, '/stem') : null;
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const artScienceAreas = [
    {
      title: "Khoa Học Màu Sắc",
      description: "Nghiên cứu cách màu sắc được tạo ra và tác động lên tâm lý",
      concepts: ["Quang phổ ánh sáng", "Hỗn hợp màu", "Tâm lý màu sắc", "Sắc tố"],
      projects: [
        "Tạo cầu vồng bằng lăng kính",
        "Pha trộn màu từ màu cơ bản",
        "Thí nghiệm màu thay đổi theo pH",
        "Vẽ tranh với màu phát sáng"
      ],
      icon: "🎨",
      color: "from-red-600/20 to-orange-600/20"
    },
    {
      title: "Âm Thanh & Âm Nhạc",
      description: "Tìm hiểu vật lý của âm thanh và cách tạo ra âm nhạc",
      concepts: ["Sóng âm", "Tần số", "Cộng hưởng", "Harmonic"],
      projects: [
        "Chế tạo đàn từ dây và hộp",
        "Tạo ống sáo từ ống nhựa",
        "Thí nghiệm với nước và tần số",
        "Quan sát sóng âm qua cát"
      ],
      icon: "🎵",
      color: "from-blue-600/20 to-purple-600/20"
    },
    {
      title: "Hình Học Nghệ Thuật",
      description: "Ứng dụng toán học để tạo ra những tác phẩm nghệ thuật",
      concepts: ["Đối xứng", "Fractal", "Tỷ lệ vàng", "Tessellation"],
      projects: [
        "Vẽ mandala với compass",
        "Tạo fractal bằng tay",
        "Thiết kế pattern lặp lại",
        "Ứng dụng tỷ lệ vàng"
      ],
      icon: "📐",
      color: "from-purple-600/20 to-pink-600/20"
    },
    {
      title: "Khoa Học Vật Liệu",
      description: "Nghiên cứu tính chất vật liệu để tạo ra nghệ thuật",
      concepts: ["Tính chất vật liệu", "Phản ứng hóa học", "Thay đổi trạng thái", "Composite"],
      projects: [
        "Tạo slime với tính chất khác nhau",
        "Điêu khắc với đất sét tự làm",
        "Thí nghiệm với từ tính",
        "Tạo polymer tại nhà"
      ],
      icon: "🧪",
      color: "from-green-600/20 to-blue-600/20"
    }
  ];

  const famousArtists = [
    {
      name: "Leonardo da Vinci",
      field: "Nghệ Thuật & Khoa Học",
      contribution: "Kết hợp nghệ thuật với nghiên cứu khoa học về giải phẫu, kỹ thuật",
      work: "Vitruvian Man - biểu tượng của sự kết hợp hoàn hảo",
      icon: "🎨",
      science: "Giải phẫu học, Kỹ thuật học"
    },
    {
      name: "M.C. Escher",
      field: "Toán Học & Nghệ Thuật",
      contribution: "Tạo ra những tác phẩm nghệ thuật dựa trên toán học",
      work: "Lithograph 'Relativity' - cầu thang vô hạn",
      icon: "♾️",
      science: "Hình học, Topology, Optical illusion"
    },
    {
      name: "Wassily Kandinsky",
      field: "Màu Sắc & Âm Nhạc",
      contribution: "Nghiên cứu mối liên hệ giữa màu sắc và âm thanh",
      work: "Abstract art dựa trên lý thuyết màu sắc",
      icon: "🎼",
      science: "Tâm lý học màu sắc, Âm học"
    },
    {
      name: "Alexander Calder",
      field: "Vật Lý & Điêu Khắc",
      contribution: "Tạo ra mobile sculpture dựa trên nguyên lý cân bằng",
      work: "Mobile - tác phẩm động dựa trên vật lý",
      icon: "⚖️",
      science: "Cơ học, Động lực học"
    }
  ];

  const scienceInArt = [
    {
      technique: "Color Theory",
      science: "Quang học & Tâm lý học",
      application: "Hiểu cách mắt nhận biết màu và tác động tâm lý của màu sắc",
      example: "Màu ấm (đỏ, cam) tạo cảm giác gần gũi, màu lạnh (xanh) tạo cảm giác xa",
      icon: "🌈"
    },
    {
      technique: "Perspective Drawing",
      science: "Hình học & Quang học",
      application: "Sử dụng toán học để tạo cảm giác chiều sâu trên mặt phẳng",
      example: "One-point perspective, two-point perspective dựa trên hình học",
      icon: "📏"
    },
    {
      technique: "Sound Art",
      science: "Vật lý sóng",
      application: "Tạo ra nghệ thuật từ sóng âm, tần số và vibration",
      example: "Cymatics - tạo hình ảnh từ sóng âm trên bột hoặc nước",
      icon: "🔊"
    },
    {
      technique: "Digital Art",
      science: "Khoa học máy tính",
      application: "Sử dụng algorithm và toán học để tạo ra nghệ thuật số",
      example: "Fractal art, generative art, pixel manipulation",
      icon: "💻"
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
            <div className="text-5xl mb-4">🎨</div>
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
                🎨 {lesson.category.toUpperCase()}
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

        {/* Art Science Areas */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🔬 Lĩnh Vực Nghệ Thuật - Khoa Học
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artScienceAreas.map((area, index) => (
              <div key={index} className={`bg-gradient-to-br ${area.color} rounded-xl p-6 border border-white/20`}>
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{area.icon}</div>
                  <h3 className="text-xl font-bold text-white">{area.title}</h3>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{area.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-purple-300 font-semibold mb-2">Khái niệm khoa học:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.concepts.map((concept, conceptIndex) => (
                      <span key={conceptIndex} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-yellow-300 font-semibold mb-2">Dự án thực hành:</h4>
                  <ul className="space-y-1">
                    {area.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-yellow-400 mr-2 mt-0.5">•</span>
                        {project}
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
                <div className="text-2xl mb-2">🎨</div>
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

        {/* Famous Artists */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🌟 Nghệ Sĩ Nổi Tiếng Kết Hợp Khoa Học
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {famousArtists.map((artist, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-xl p-6 border border-yellow-500/20">
                <div className="flex items-start mb-3">
                  <div className="text-3xl mr-3">{artist.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{artist.name}</h3>
                    <p className="text-yellow-300 text-sm font-semibold">{artist.field}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-3">{artist.contribution}</p>
                
                <div className="bg-white/10 rounded-lg p-3 mb-3">
                  <p className="text-yellow-200 text-xs font-semibold mb-1">Tác phẩm nổi tiếng:</p>
                  <p className="text-gray-300 text-xs">{artist.work}</p>
                </div>
                
                <div className="bg-orange-500/20 rounded-lg p-3">
                  <p className="text-orange-200 text-xs font-semibold mb-1">Khoa học ứng dụng:</p>
                  <p className="text-gray-300 text-xs">{artist.science}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Science in Art Techniques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🔬 Khoa Học Trong Kỹ Thuật Nghệ Thuật
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scienceInArt.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.technique}</h3>
                    <p className="text-green-300 text-sm">{item.science}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-3">{item.application}</p>
                
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <p className="text-blue-200 text-xs font-semibold mb-1">Ví dụ:</p>
                  <p className="text-gray-300 text-xs">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🎨 Bài Tập Thực Hành
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
                    <span className="text-xl mr-2">🎨</span>
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
                      Mẹo sáng tạo:
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

                {/* Science Connection */}
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h4 className="text-yellow-300 font-semibold mb-2 flex items-center">
                    <span className="text-lg mr-2">🔬</span>
                    Kết nối khoa học:
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {exercise.id === 'ex1-rainbow-science' 
                      ? "Cầu vồng được tạo ra khi ánh sáng trắng bị khúc xạ qua lăng kính hoặc giọt nước. Ánh sáng trắng thực chất là tổng hợp của 7 màu cơ bản (đỏ, cam, vàng, lục, lam, chàm, tím). Mỗi màu có bước sóng khác nhau nên bị bẻ cong với góc độ khác nhau."
                      : "Âm thanh là sóng cơ học lan truyền qua không khí. Khi dây đàn rung động, nó tạo ra sóng âm với tần số nhất định. Dây dài hơn tạo ra âm thấp hơn, dây ngắn hơn tạo ra âm cao hơn. Điều này giải thích tại sao đàn guitar có nhiều phím để thay đổi độ dài dây."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DIY Science Art Projects */}
        <div className="bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-2xl p-8 border border-pink-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🧪 Dự Án Nghệ Thuật Khoa Học DIY
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl mb-2">🌋</div>
              <h3 className="text-pink-300 font-semibold mb-2">Núi Lửa Màu Sắc</h3>
              <p className="text-gray-300 text-sm mb-3">
                Kết hợp phản ứng hóa học với nghệ thuật. Tạo &ldquo;núi lửa&rdquo; với màu sắc khác nhau.
              </p>
              <div className="bg-pink-500/20 rounded p-2">
                <p className="text-pink-200 text-xs">🧪 Khoa học: Phản ứng acid-base, màu sắc</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl mb-2">🎭</div>
              <h3 className="text-purple-300 font-semibold mb-2">Mặt Nạ Thay Đổi Màu</h3>
              <p className="text-gray-300 text-sm mb-3">
                Tạo mặt nạ với chất liệu thay đổi màu theo nhiệt độ hoặc ánh sáng UV.
              </p>
              <div className="bg-purple-500/20 rounded p-2">
                <p className="text-purple-200 text-xs">🌡️ Khoa học: Thermochromic, photochromic</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl mb-2">💫</div>
              <h3 className="text-blue-300 font-semibold mb-2">Tranh Phát Sáng</h3>
              <p className="text-gray-300 text-sm mb-3">
                Vẽ tranh với chất phosphorescent, tạo hiệu ứng phát sáng trong tối.
              </p>
              <div className="bg-blue-500/20 rounded p-2">
                <p className="text-blue-200 text-xs">💡 Khoa học: Phosphorescence, photoluminescence</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl mb-2">🧲</div>
              <h3 className="text-green-300 font-semibold mb-2">Điêu Khắc Từ Tính</h3>
              <p className="text-gray-300 text-sm mb-3">
                Tạo tác phẩm điêu khắc có thể thay đổi hình dạng bằng nam châm.
              </p>
              <div className="bg-green-500/20 rounded p-2">
                <p className="text-green-200 text-xs">🧲 Khoa học: Từ trường, ferrofluid</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl mb-2">🎼</div>
              <h3 className="text-yellow-300 font-semibold mb-2">Hình Ảnh Từ Âm Thanh</h3>
              <p className="text-gray-300 text-sm mb-3">
                Sử dụng cymatics để tạo hình ảnh từ sóng âm trên cát hoặc bột.
              </p>
              <div className="bg-yellow-500/20 rounded p-2">
                <p className="text-yellow-200 text-xs">🔊 Khoa học: Cymatics, sóng âm</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl mb-2">🌈</div>
              <h3 className="text-red-300 font-semibold mb-2">Tranh Hologram</h3>
              <p className="text-gray-300 text-sm mb-3">
                Tạo tranh có hiệu ứng hologram đơn giản bằng plastic và ánh sáng.
              </p>
              <div className="bg-red-500/20 rounded p-2">
                <p className="text-red-200 text-xs">✨ Khoa học: Giao thoa ánh sáng, difraction</p>
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
                  <div className="text-2xl mb-2">🎨</div>
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
