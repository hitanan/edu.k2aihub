import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { scratchLessons } from '@/data/scratch';

export const metadata: Metadata = {
  title: createTitle("Bài 3: Sound Effects và Music - Scratch Programming"),
  description: createDescription("Học cách thêm âm thanh, hiệu ứng âm thanh và tạo nhạc trong Scratch"),
  keywords: createKeywords(["scratch sounds", "music programming", "sound effects", "audio coding"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 3: Sound Effects và Music"),
    description: createDescription("Tạo âm thanh và nhạc tuyệt vời cho dự án Scratch"),
    type: "website",
  },
};

export default function ScratchSoundLesson() {
  const lesson = scratchLessons.find(l => l.id === 'sound-effects');
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const soundBlocks = [
    {
      category: 'Basic Sound',
      icon: '🔊',
      blocks: [
        { name: 'play sound', description: 'Phát âm thanh song song với code khác', color: 'purple' },
        { name: 'play sound until done', description: 'Phát âm thanh và đợi hoàn thành', color: 'purple' },
        { name: 'stop all sounds', description: 'Dừng tất cả âm thanh đang phát', color: 'purple' },
        { name: 'set volume to', description: 'Đặt âm lượng (0-100)', color: 'purple' },
        { name: 'change volume by', description: 'Thay đổi âm lượng thêm/bớt', color: 'purple' }
      ]
    },
    {
      category: 'Music & Notes',
      icon: '🎵',
      blocks: [
        { name: 'play note for beats', description: 'Phát note nhạc trong thời gian beats', color: 'blue' },
        { name: 'set instrument to', description: 'Chọn nhạc cụ (piano, guitar, drum...)', color: 'blue' },
        { name: 'set tempo to', description: 'Đặt tốc độ nhạc (beats per minute)', color: 'blue' },
        { name: 'change tempo by', description: 'Thay đổi tốc độ nhạc', color: 'blue' },
        { name: 'rest for beats', description: 'Tạm nghỉ trong thời gian beats', color: 'blue' }
      ]
    },
    {
      category: 'Advanced Audio',
      icon: '🎛️',
      blocks: [
        { name: 'record sound', description: 'Ghi âm từ microphone', color: 'green' },
        { name: 'play recorded sound', description: 'Phát âm thanh đã ghi', color: 'green' },
        { name: 'set pitch effect to', description: 'Thay đổi cao độ âm thanh', color: 'green' },
        { name: 'set pan left/right to', description: 'Điều chỉnh âm thanh trái/phải', color: 'green' }
      ]
    }
  ];

  const musicInstruments = [
    { id: 1, name: 'Piano', description: 'Âm thanh piano cổ điển', usage: 'Nhạc nền, melody', icon: '🎹' },
    { id: 2, name: 'Electric Piano', description: 'Piano điện tử hiện đại', usage: 'Nhạc pop, jazz', icon: '🎹' },
    { id: 3, name: 'Organ', description: 'Organ truyền thống', usage: 'Nhạc tôn giáo, rock', icon: '🎹' },
    { id: 4, name: 'Guitar', description: 'Guitar acoustic', usage: 'Nhạc folk, country', icon: '🎸' },
    { id: 5, name: 'Electric Guitar', description: 'Guitar điện', usage: 'Rock, metal', icon: '🎸' },
    { id: 6, name: 'Bass', description: 'Bass guitar', usage: 'Rhythm, groove', icon: '🎸' },
    { id: 7, name: 'Pizzicato', description: 'Violin gảy', usage: 'Hiệu ứng nhẹ nhàng', icon: '🎻' },
    { id: 8, name: 'Cello', description: 'Cello trầm ấm', usage: 'Nhạc cổ điển', icon: '🎻' },
    { id: 9, name: 'Trombone', description: 'Kèn trombone', usage: 'Jazz, orchestra', icon: '🎺' },
    { id: 10, name: 'Clarinet', description: 'Kèn clarinet', usage: 'Jazz, classical', icon: '🎺' },
    { id: 16, name: 'Wooden Flute', description: 'Sáo gỗ', usage: 'Nhạc dân gian', icon: '🎍' },
    { id: 17, name: 'Steel Drum', description: 'Trống thép', usage: 'Nhạc Caribbean', icon: '🥁' },
    { id: 18, name: 'Synth Lead', description: 'Synthesizer lead', usage: 'Nhạc điện tử', icon: '🎛️' },
    { id: 19, name: 'Synth Pad', description: 'Synthesizer pad', usage: 'Ambient, background', icon: '🎛️' }
  ];

  const soundProjects = [
    {
      title: 'Piano Ảo',
      description: 'Tạo piano có thể chơi bằng phím bàn phím',
      difficulty: 'Trung bình',
      time: '45 phút',
      features: [
        'Phím A-L chơi các note Do-Ti',
        'Hiển thị phím đang nhấn',
        'Chọn nhạc cụ khác nhau',
        'Record và playback'
      ],
      blocks: ['when key pressed', 'play note', 'set instrument', 'broadcast'],
      tips: [
        'Sử dụng "when key pressed" cho mỗi phím',
        'Tạo sprite piano keys để hiển thị',
        'Dùng broadcast để đồng bộ visual và audio'
      ],
      icon: '🎹'
    },
    {
      title: 'Trò Chơi Nhạc Rhythm',
      description: 'Game bấm theo nhịp như Guitar Hero',
      difficulty: 'Khó',
      time: '60 phút',
      features: [
        'Notes rơi từ trên xuống',
        'Bấm đúng thời điểm ghi điểm',
        'Multiple tracks/lanes',
        'Hiệu ứng âm thanh khi bấm'
      ],
      blocks: ['clone', 'when I receive', 'touching', 'play sound', 'timer'],
      tips: [
        'Dùng clone cho notes rơi',
        'Timer để sync với nhạc',
        'Touching để detect hits'
      ],
      icon: '🎮'
    },
    {
      title: 'Máy Thu Âm Mini',
      description: 'Ứng dụng ghi âm và chỉnh sửa đơn giản',
      difficulty: 'Dễ',
      time: '30 phút',
      features: [
        'Record âm thanh từ mic',
        'Play/Stop recorded sounds',
        'Thay đổi pitch và volume',
        'Visual feedback khi ghi âm'
      ],
      blocks: ['record sound', 'play recorded sound', 'set pitch effect', 'set volume'],
      tips: [
        'Tạo button interface đơn giản',
        'Visual indicator khi recording',
        'Test microphone permission'
      ],
      icon: '🎤'
    }
  ];

  const soundTips = [
    {
      category: 'Performance',
      icon: '⚡',
      tips: [
        'Sử dụng "play sound" thay vì "play sound until done" khi không cần đợi',
        'Tránh phát quá nhiều âm thanh cùng lúc',
        'Compress file âm thanh để giảm lag',
        'Test trên thiết bị yếu để đảm bảo performance'
      ]
    },
    {
      category: 'Quality',
      icon: '🎯',
      tips: [
        'Sử dụng âm thanh chất lượng cao (16-bit, 44.1kHz)',
        'Normalize volume của tất cả sounds',
        'Tránh distortion bằng cách không set volume > 100',
        'Test với headphone và speaker'
      ]
    },
    {
      category: 'User Experience',
      icon: '👤',
      tips: [
        'Thêm option để user tắt âm thanh',
        'Feedback âm thanh cho mọi user action',
        'Âm thanh phù hợp với theme của project',
        'Volume control dễ tiếp cận'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/scratch" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
              ← Quay lại Scratch
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🎵</div>
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
                <span className="text-purple-400 mr-3 mt-1">♪</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Sound Blocks */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧩 Các Khối Âm Thanh
          </h2>
          
          <div className="space-y-8">
            {soundBlocks.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.blocks.map((block, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className={`text-sm font-mono font-bold mb-2 ${
                        block.color === 'purple' ? 'text-purple-300' :
                        block.color === 'blue' ? 'text-blue-300' :
                        'text-green-300'
                      }`}>
                        {block.name}
                      </div>
                      <p className="text-gray-300 text-sm">{block.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Music Instruments */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🎼 Nhạc Cụ Trong Scratch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {musicInstruments.map((instrument) => (
              <div key={instrument.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div className="text-3xl mb-2">{instrument.icon}</div>
                <h3 className="text-white font-semibold mb-1">{instrument.name}</h3>
                <p className="text-gray-300 text-sm mb-2">{instrument.description}</p>
                <div className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs">
                  {instrument.usage}
                </div>
                <div className="text-xs text-gray-400 mt-2">ID: {instrument.id}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sound Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🛠️ Dự Án Âm Thanh
          </h2>
          
          <div className="space-y-6">
            {soundProjects.map((project, index) => (
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
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-green-300 text-sm font-semibold mb-3">✨ Tính năng:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-300 text-sm font-semibold mb-3">🧩 Khối chính:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.blocks.map((block, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs font-mono">
                          {block}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-yellow-300 text-sm font-semibold mb-3">💡 Tips:</h4>
                    <ul className="space-y-1">
                      {project.tips.map((tip, idx) => (
                        <li key={idx} className="text-gray-300 text-xs flex items-start">
                          <span className="text-yellow-400 mr-2">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sound Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            💡 Tips & Best Practices
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {soundTips.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{category.icon}</div>
                  <h3 className="text-lg font-bold text-white">{category.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.tips.map((tip, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
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
                <div className="text-2xl mb-2">🎵</div>
                <div className="text-purple-300 text-sm font-semibold">{app}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/scratch/animation-movement"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            ← Bài trước: Animation
          </Link>
          
          <Link 
            href="/scratch/game-development"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Bài tiếp theo: Game Dev →
          </Link>
        </div>
      </div>
    </div>
  );
}
