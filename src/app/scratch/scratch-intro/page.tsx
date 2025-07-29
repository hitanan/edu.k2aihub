import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("Bài 1: Giới Thiệu Scratch - Lập Trình Kéo Thả"),
  description: createDescription("Học cách sử dụng Scratch, ngôn ngữ lập trình trực quan dành cho trẻ em và người mới bắt đầu"),
  keywords: createKeywords(["scratch programming", "lập trình trẻ em", "scratch cơ bản", "visual programming"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 1: Giới Thiệu Scratch"),
    description: createDescription("Bước đầu tiên vào thế giới lập trình với Scratch - ngôn ngữ lập trình kéo thả thú vị"),
    type: "website",
  },
};

export default function ScratchIntroLesson() {
  const lessonContent = {
    title: 'Bài 1: Giới Thiệu Scratch',
    description: 'Khám phá thế giới lập trình với Scratch - ngôn ngữ lập trình trực quan và thú vị',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Hiểu về Scratch và lập trình kéo thả',
      'Làm quen với giao diện Scratch',
      'Tạo chương trình đầu tiên',
      'Nắm vững khái niệm sprite và backdrop'
    ]
  };

  const scratchFeatures = [
    {
      name: 'Kéo và Thả',
      description: 'Lập trình bằng cách kéo thả các khối lệnh',
      icon: '🧩',
      benefit: 'Dễ học, không cần gõ code'
    },
    {
      name: 'Trực Quan',
      description: 'Nhìn thấy kết quả ngay lập tức',
      icon: '👀',
      benefit: 'Hiểu logic lập trình nhanh chóng'
    },
    {
      name: 'Đa Phương Tiện',
      description: 'Kết hợp hình ảnh, âm thanh, animation',
      icon: '🎨',
      benefit: 'Tạo ra sản phẩm phong phú'
    },
    {
      name: 'Cộng Đồng',
      description: 'Chia sẻ và học hỏi từ người khác',
      icon: '🌍',
      benefit: 'Động lực học tập cao'
    }
  ];

  const interfaceGuide = [
    {
      area: 'Stage (Sân khấu)',
      description: 'Nơi hiển thị kết quả chương trình, các sprite thực hiện hành động',
      location: 'Góc trên bên phải',
      icon: '🎭',
      tips: ['Kích thước 480x360 pixel', 'Có thể thay đổi backdrop', 'Sprite di chuyển trong vùng này']
    },
    {
      area: 'Sprite List',
      description: 'Danh sách tất cả sprite trong dự án',
      location: 'Góc dưới bên phải',
      icon: '🐱',
      tips: ['Mỗi sprite có costume riêng', 'Có thể thêm/xóa sprite', 'Click để chọn sprite']
    },
    {
      area: 'Blocks Palette',
      description: 'Kho chứa tất cả các khối lệnh theo danh mục',
      location: 'Bên trái',
      icon: '🧰',
      tips: ['10 danh mục khác nhau', 'Tìm khối bằng màu sắc', 'Kéo khối vào Scripts Area']
    },
    {
      area: 'Scripts Area',
      description: 'Nơi xây dựng chương trình bằng cách ghép các khối',
      location: 'Ở giữa',
      icon: '📜',
      tips: ['Ghép khối theo chiều dọc', 'Nhiều script có thể chạy song song', 'Click để chạy script']
    }
  ];

  const blockCategories = [
    {
      category: 'Motion (Chuyển động)',
      color: 'bg-blue-500',
      description: 'Điều khiển di chuyển của sprite',
      examples: ['move 10 steps', 'turn 15 degrees', 'go to x: 0 y: 0'],
      icon: '➡️'
    },
    {
      category: 'Looks (Giao diện)',
      color: 'bg-purple-500',
      description: 'Thay đổi hình dạng và hiệu ứng',
      examples: ['say Hello', 'change color effect', 'set size to 100%'],
      icon: '🎨'
    },
    {
      category: 'Sound (Âm thanh)',
      color: 'bg-pink-500',
      description: 'Phát âm thanh và nhạc',
      examples: ['play sound meow', 'change volume', 'set instrument'],
      icon: '🔊'
    },
    {
      category: 'Events (Sự kiện)',
      color: 'bg-yellow-500',
      description: 'Khởi động chương trình',
      examples: ['when flag clicked', 'when key pressed', 'when sprite clicked'],
      icon: '🏁'
    },
    {
      category: 'Control (Điều khiển)',
      color: 'bg-orange-500',
      description: 'Vòng lặp và điều kiện',
      examples: ['repeat 10', 'if then', 'wait 1 seconds'],
      icon: '🔄'
    },
    {
      category: 'Sensing (Cảm biến)',
      color: 'bg-cyan-500',
      description: 'Phát hiện và tương tác',
      examples: ['touching color', 'distance to mouse', 'key space pressed?'],
      icon: '👁️'
    }
  ];

  const firstProjectSteps = [
    {
      step: 'Bước 1: Mở Scratch',
      instruction: 'Truy cập scratch.mit.edu và click "Create"',
      details: 'Bạn sẽ thấy con mèo Scratch Cat trên stage',
      icon: '🌐'
    },
    {
      step: 'Bước 2: Thêm khối Events',
      instruction: 'Kéo khối "when flag clicked" vào Scripts Area',
      details: 'Đây là khối khởi động chương trình',
      icon: '🏁'
    },
    {
      step: 'Bước 3: Thêm Motion',
      instruction: 'Kéo khối "move 10 steps" và ghép vào khối Events',
      details: 'Mèo sẽ di chuyển 10 bước về phía trước',
      icon: '➡️'
    },
    {
      step: 'Bước 4: Thêm âm thanh',
      instruction: 'Kéo khối "play sound meow" và ghép tiếp',
      details: 'Mèo sẽ kêu "meow" khi di chuyển',
      icon: '🔊'
    },
    {
      step: 'Bước 5: Chạy chương trình',
      instruction: 'Click cờ xanh để chạy chương trình',
      details: 'Quan sát mèo di chuyển và phát âm thanh',
      icon: '▶️'
    }
  ];

  const practicalExercises = [
    {
      title: 'Mèo đi dạo',
      description: 'Tạo chương trình khiến mèo di chuyển thành hình vuông',
      difficulty: 'Dễ',
      blocks: ['when flag clicked', 'repeat 4', 'move 100 steps', 'turn 90 degrees'],
      objective: 'Học về vòng lặp và chuyển động cơ bản',
      hint: 'Sử dụng khối repeat để lặp lại việc di chuyển và xoay'
    },
    {
      title: 'Mèo nói chuyện',
      description: 'Mèo giới thiệu bản thân và hỏi tên người dùng',
      difficulty: 'Trung bình',
      blocks: ['when flag clicked', 'say Hello', 'ask and wait', 'say answer'],
      objective: 'Học về tương tác với người dùng',
      hint: 'Sử dụng khối ask để nhận input từ người dùng'
    },
    {
      title: 'Mèo đổi màu',
      description: 'Mèo thay đổi màu sắc khi được click',
      difficulty: 'Trung bình',
      blocks: ['when this sprite clicked', 'change color effect', 'wait 1 seconds'],
      objective: 'Học về sự kiện và hiệu ứng',
      hint: 'Sử dụng sự kiện click và hiệu ứng màu sắc'
    }
  ];

  const tips = [
    {
      title: 'Bắt đầu từ đơn giản',
      content: 'Luôn bắt đầu với các chương trình đơn giản, từ từ thêm tính năng phức tạp',
      icon: '🚀'
    },
    {
      title: 'Thử nghiệm tự do',
      content: 'Đừng ngại thử nghiệm, Scratch rất an toàn và dễ khôi phục',
      icon: '🧪'
    },
    {
      title: 'Lưu tác phẩm thường xuyên',
      content: 'Tạo tài khoản và lưu dự án để không mất công sức',
      icon: '💾'
    },
    {
      title: 'Học từ cộng đồng',
      content: 'Xem các dự án khác và "See Inside" để học cách làm',
      icon: '👥'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600/20 to-yellow-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/scratch" className="text-orange-400 hover:text-orange-300 transition-colors duration-300">
              ← Quay lại Scratch
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🐱</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {lessonContent.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              {lessonContent.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-orange-500/20 text-orange-200 px-3 py-1 rounded-full">
                ⏱️ {lessonContent.duration}
              </span>
              <span className="bg-yellow-500/20 text-yellow-200 px-3 py-1 rounded-full">
                🎯 {lessonContent.difficulty}
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
            {lessonContent.objectives.map((objective, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-orange-400 mr-3 mt-1">✓</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* What is Scratch */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🤔 Scratch là gì?
          </h2>
          
          <div className="bg-gradient-to-r from-orange-600/10 to-yellow-600/10 rounded-2xl p-8 border border-orange-500/20 mb-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🐱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Scratch - Ngôn ngữ lập trình trực quan</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Scratch là ngôn ngữ lập trình được phát triển bởi MIT, được thiết kế đặc biệt cho trẻ em và người mới bắt đầu học lập trình. 
                Thay vì gõ code, bạn sẽ kéo thả các khối lệnh như ghép LEGO.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scratchFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2">
                  <span className="text-green-300 text-xs font-semibold">Lợi ích: </span>
                  <span className="text-gray-300 text-xs">{feature.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interface Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🖥️ Làm Quen Với Giao Diện Scratch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interfaceGuide.map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{area.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{area.area}</h3>
                    <span className="text-orange-300 text-sm">{area.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{area.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-yellow-300 text-sm font-semibold">Mẹo sử dụng:</h4>
                  <ul className="space-y-1">
                    {area.tips.map((tip, idx) => (
                      <li key={idx} className="text-gray-300 text-xs flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧩 Các Danh Mục Khối Lệnh
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blockCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{category.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{category.category}</h3>
                    <div className={`w-4 h-4 rounded ${category.color} inline-block ml-2`}></div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-blue-300 text-sm font-semibold">Ví dụ khối:</h4>
                  <div className="space-y-1">
                    {category.examples.map((example, idx) => (
                      <div key={idx} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs font-mono">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* First Project */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🚀 Dự Án Đầu Tiên: Mèo Di Chuyển
          </h2>
          
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Mục tiêu dự án</h3>
              <p className="text-gray-300">Tạo chương trình đơn giản khiến con mèo di chuyển và phát âm thanh khi click cờ xanh</p>
            </div>
          </div>

          <div className="space-y-6">
            {firstProjectSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{step.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{step.step}</h3>
                    <p className="text-orange-300 mb-2">{step.instruction}</p>
                    <p className="text-gray-300 text-sm">{step.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧩 Bài Tập Thực Hành
          </h2>
          
          <div className="space-y-6">
            {practicalExercises.map((exercise, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    exercise.difficulty === 'Dễ' ? 'bg-green-500/20 text-green-200' :
                    'bg-yellow-500/20 text-yellow-200'
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{exercise.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-blue-300 text-sm font-semibold mb-2">Khối cần dùng:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exercise.blocks.map((block, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs font-mono">
                          {block}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-green-300 text-sm font-semibold mb-2">Mục tiêu học:</h4>
                    <p className="text-gray-300 text-sm">{exercise.objective}</p>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                  <span className="text-yellow-300 text-sm font-semibold">💡 Gợi ý: </span>
                  <span className="text-gray-300 text-sm">{exercise.hint}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips for Success */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            💡 Mẹo Thành Công Với Scratch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">{tip.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                    <p className="text-gray-300 text-sm">{tip.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🏆 Thử Thách Cuối Bài
          </h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Tạo Trò Chơi Đơn Giản</h3>
            <p className="text-gray-300">
              Sử dụng kiến thức đã học để tạo một trò chơi đơn giản: mèo di chuyển theo con trỏ chuột và phát âm thanh khi chạm vào cạnh màn hình.
            </p>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h4 className="text-yellow-300 font-semibold mb-2">Yêu cầu:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Mèo luôn hướng về phía con trỏ chuột</li>
                <li>• Mèo di chuyển liên tục về phía chuột</li>
                <li>• Phát âm thanh khi chạm cạnh màn hình</li>
                <li>• Thêm backdrop đẹp cho trò chơi</li>
              </ul>
            </div>
            
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="text-blue-300 font-semibold mb-2">Khối gợi ý:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs font-mono">point towards mouse</span>
                <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs font-mono">move 5 steps</span>
                <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs font-mono">if on edge, bounce</span>
                <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs font-mono">forever</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/scratch"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            ← Quay lại Scratch
          </Link>
          
          <Link 
            href="/scratch/animation-movement"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-yellow-700 transition-all duration-300"
          >
            Bài tiếp theo: Animation →
          </Link>
        </div>
      </div>
    </div>
  );
}
