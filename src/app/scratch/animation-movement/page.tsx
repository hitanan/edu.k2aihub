import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { scratchLessons } from '@/data/scratch';

export const metadata: Metadata = {
  title: createTitle("Bài 2: Animation và Movement - Scratch Programming"),
  description: createDescription("Học cách tạo animation và chuyển động trong Scratch với sprites và effects"),
  keywords: createKeywords(["scratch animation", "sprite movement", "visual programming", "coding kids"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 2: Animation và Movement"),
    description: createDescription("Tạo animation thú vị và chuyển động mượt mà trong Scratch"),
    type: "website",
  },
};

export default function ScratchAnimationLesson() {
  const lesson = scratchLessons.find(l => l.id === 'scratch-sprites-sounds');
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const animationTechniques = [
    {
      technique: 'Costume Animation',
      description: 'Thay đổi costume để tạo hiệu ứng animation',
      blocks: ['next costume', 'switch costume to', 'costume number'],
      example: 'Nhân vật đi bộ, chim bay',
      icon: '🎭'
    },
    {
      technique: 'Motion Animation',
      description: 'Di chuyển sprite để tạo chuyển động',
      blocks: ['move steps', 'glide to', 'change x by', 'change y by'],
      example: 'Xe chạy, bóng bay, tàu di chuyển',
      icon: '🚀'
    },
    {
      technique: 'Effect Animation',
      description: 'Sử dụng graphic effects tạo hiệu ứng đặc biệt',
      blocks: ['change color effect', 'set ghost effect', 'change size by'],
      example: 'Biến mất, đổi màu, phóng to/thu nhỏ',
      icon: '✨'
    },
    {
      technique: 'Rotation Animation',
      description: 'Xoay sprite tạo hiệu ứng quay',
      blocks: ['turn degrees', 'point in direction', 'set rotation style'],
      example: 'Bánh xe quay, quạt gió, kim đồng hồ',
      icon: '🔄'
    }
  ];

  const soundFeatures = [
    {
      feature: 'Sound Effects',
      description: 'Thêm âm thanh vào animation',
      blocks: ['play sound', 'play sound until done', 'stop all sounds'],
      usage: 'Tạo âm thanh khi nhân vật hành động',
      icon: '🔊'
    },
    {
      feature: 'Music & Rhythm',
      description: 'Tạo nhạc nền và rhythm',
      blocks: ['play note', 'set instrument', 'change tempo'],
      usage: 'Nhạc nền cho game, rhythm games',
      icon: '🎵'
    },
    {
      feature: 'Voice & Speech',
      description: 'Ghi âm và phát lại giọng nói',
      blocks: ['record sound', 'play recorded sound'],
      usage: 'Lồng tiếng cho nhân vật, hướng dẫn',
      icon: '🎤'
    }
  ];

  const projects = [
    {
      title: 'Nhân Vật Đi Bộ',
      description: 'Tạo animation nhân vật đi bộ với costume switching',
      difficulty: 'Dễ',
      time: '20 phút',
      steps: [
        'Chọn sprite có nhiều costume walking',
        'Sử dụng "next costume" trong forever loop',
        'Thêm "move 2 steps" để di chuyển',
        'Điều chỉnh timing với wait'
      ],
      blocks: ['when green flag clicked', 'forever', 'next costume', 'move 2 steps', 'wait 0.1 seconds'],
      icon: '🚶'
    },
    {
      title: 'Bướm Bay Trong Vườn',
      description: 'Bướm bay theo đường cong với sound effects',
      difficulty: 'Trung bình',
      time: '30 phút',
      steps: [
        'Tạo sprite bướm với animation bay',
        'Sử dụng "glide to" với random positions',
        'Thêm âm thanh thiên nhiên',
        'Tạo trail effect với pen'
      ],
      blocks: ['glide 2 secs to random position', 'play sound', 'pen down', 'change color effect'],
      icon: '🦋'
    },
    {
      title: 'Ô Tô Chạy Trên Đường',
      description: 'Xe chạy với bánh xe quay và âm thanh engine',
      difficulty: 'Khó',
      time: '40 phút',
      steps: [
        'Tạo sprite ô tô chính',
        'Tạo sprite bánh xe riêng',
        'Đồng bộ chuyển động xe và bánh',
        'Thêm sound engine và horn'
      ],
      blocks: ['broadcast', 'when I receive', 'turn degrees', 'play sound until done'],
      icon: '🚗'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/scratch" className="text-orange-400 hover:text-orange-300 transition-colors duration-300">
              ← Quay lại Scratch
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🎬</div>
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

        {/* Animation Techniques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🎬 Kỹ Thuật Animation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {animationTechniques.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{tech.icon}</div>
                  <h3 className="text-xl font-bold text-white">{tech.technique}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{tech.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-blue-300 text-sm font-semibold mb-2">Khối sử dụng:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.blocks.map((block, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-sm font-mono">
                          {block}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <span className="text-green-300 text-sm font-semibold">Ví dụ: </span>
                    <span className="text-gray-300 text-sm">{tech.example}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sound Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🔊 Tính Năng Âm Thanh
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {soundFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">{feature.feature}</h3>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-purple-300 text-sm font-semibold mb-2">Khối:</h4>
                    <div className="space-y-1">
                      {feature.blocks.map((block, idx) => (
                        <div key={idx} className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded text-sm font-mono">
                          {block}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                    <span className="text-yellow-300 text-xs font-semibold">Ứng dụng: </span>
                    <span className="text-gray-300 text-xs">{feature.usage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🛠️ Dự Án Thực Hành
          </h2>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{project.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.difficulty === 'Dễ' ? 'bg-green-500/20 text-green-200' :
                      project.difficulty === 'Trung bình' ? 'bg-yellow-500/20 text-yellow-200' :
                      'bg-red-500/20 text-red-200'
                    }`}>
                      {project.difficulty}
                    </span>
                    <div className="text-blue-300 text-sm mt-1">⏱️ {project.time}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-green-300 text-sm font-semibold mb-3">📋 Các bước thực hiện:</h4>
                    <ol className="space-y-2">
                      {project.steps.map((step, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-green-400 mr-2 font-bold">{idx + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-300 text-sm font-semibold mb-3">🧩 Khối cần dùng:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.blocks.map((block, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs font-mono">
                          {block}
                        </span>
                      ))}
                    </div>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-blue-300 text-sm font-semibold mb-2">Khối cần dùng:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exercise.requiredBlocks.map((block, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs font-mono">
                          {block}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-green-300 text-sm font-semibold mb-2">Kết quả mong đợi:</h4>
                    <p className="text-gray-300 text-sm">{exercise.expectedBehavior}</p>
                  </div>
                </div>
                
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
                <div className="text-2xl mb-2">🎨</div>
                <div className="text-purple-300 text-sm font-semibold">{app}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/scratch/scratch-intro"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            ← Bài trước: Giới thiệu
          </Link>
          
          <Link 
            href="/scratch/sound-effects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300"
          >
            Bài tiếp theo: Âm thanh →
          </Link>
        </div>
      </div>
    </div>
  );
}
