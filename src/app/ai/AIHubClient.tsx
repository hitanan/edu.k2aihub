'use client';

import React from 'react';
import Link from 'next/link';
import { EducationalGame, ModuleNavigation, ModuleData } from '@/types';
import { BookOpen, Cpu, Gamepad2, Sparkles, Wrench } from 'lucide-react';

interface AIHubClientProps {
  lessons: (ModuleNavigation | ModuleData)[];
  games: EducationalGame[];
}

const featuredAIApps = [
  {
    name: 'ChatGPT',
    description: 'Trợ lý AI cho viết, nghiên cứu và giải quyết vấn đề',
    category: 'Productivity',
    link: 'https://chat.openai.com',
    icon: '🤖',
  },
  {
    name: 'Midjourney',
    description: 'Tạo ảnh nghệ thuật từ text prompts',
    category: 'Creative',
    link: 'https://midjourney.com',
    icon: '🎨',
  },
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer cho developers',
    category: 'Development',
    link: 'https://github.com/features/copilot',
    icon: '👨‍💻',
  },
  {
    name: 'Claude',
    description: 'Mô hình ngôn ngữ tiên tiến cho phân tích và tóm tắt',
    category: 'Analysis',
    link: 'https://claude.ai',
    icon: '🧠',
  },
  {
    name: 'Perplexity AI',
    description: 'Công cụ tìm kiếm và trả lời dựa trên AI',
    category: 'Research',
    link: 'https://perplexity.ai',
    icon: '🔍',
  },
  {
    name: 'Canva AI',
    description: 'Bộ công cụ thiết kế thông minh tích hợp AI',
    category: 'Design',
    link: 'https://canva.com/ai',
    icon: '🖌️',
  },
];

const AIHubClient: React.FC<AIHubClientProps> = ({ lessons, games }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-blue-100 to-white dark:from-blue-900/30 dark:to-gray-900 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-blue-200/50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full px-4 py-1 mb-4 font-semibold">
            Trung tâm Trí tuệ Nhân tạo
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">AI Của Tôi</h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Khám phá, học hỏi và ứng dụng Trí tuệ Nhân tạo vào mọi lĩnh vực. Tất cả bài học, công cụ và Interactive Practice AI đều
            ở đây.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="#ai-lessons"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Bắt đầu học
            </Link>
            <Link
              href="#ai-tools"
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Khám phá công cụ
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 sm:py-24">
        {/* AI Tools Section */}
        <section id="ai-tools" className="mb-16 sm:mb-24">
          <div className="flex items-center justify-center mb-8">
            <Wrench className="w-8 h-8 mr-3 text-blue-500" />
            <h2 className="text-3xl font-bold text-center">Công Cụ AI Phổ Biến</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {featuredAIApps.map((tool) => (
              <a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-center p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
              </a>
            ))}
          </div>
        </section>

        {/* AI Lessons Section */}
        <section id="ai-lessons" className="mb-16 sm:mb-24">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="w-8 h-8 mr-3 text-green-500" />
            <h2 className="text-3xl font-bold text-center">Học AI Theo Lĩnh Vực</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={lesson.href || `/learning/${lesson.id}`}
                className="group block bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg mr-4">
                    <Sparkles className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{lesson.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{lesson.description}</p>
                <div className="flex items-center text-green-600 dark:text-green-400 font-semibold">
                  Xem các bài học
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* AI Games Section */}
        <section id="ai-games">
          <div className="flex items-center justify-center mb-8">
            <Gamepad2 className="w-8 h-8 mr-3 text-purple-500" />
            <h2 className="text-3xl font-bold text-center">Interactive Practice AI</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/practice/${game.id}`}
                className="group block bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-4">
                    <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{game.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{game.description}</p>
                <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold">
                  Practice
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIHubClient;
