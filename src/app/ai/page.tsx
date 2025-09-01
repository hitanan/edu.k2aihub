import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'AI Của Tôi - Ứng Dụng AI Thực Tế',
  'Khám phá các ứng dụng AI thực tế trong đời sống và công việc hàng ngày. Từ ChatGPT, Midjourney đến GitHub Copilot - học cách sử dụng AI hiệu quả.',
  [
    'AI',
    'trí tuệ nhân tạo',
    'ChatGPT',
    'Midjourney',
    'GitHub Copilot',
    'AI tools',
    'hướng dẫn AI',
    'AI Việt Nam',
    'AI apps',
  ],
  'ai',
);

const featuredAIApps = [
  {
    name: 'ChatGPT',
    description: 'Trợ lý AI cho viết, nghiên cứu và giải quyết vấn đề',
    category: 'Productivity',
    features: ['Viết email chuyên nghiệp', 'Tóm tắt tài liệu', 'Brainstorming ý tưởng', 'Code assistance'],
    link: 'https://chat.openai.com',
    pricing: 'Freemium',
    icon: '🤖',
    color: 'from-green-500 to-blue-500',
  },
  {
    name: 'Claude 3.5 Sonnet',
    description: 'AI assistant từ Anthropic cho phân tích và reasoning',
    category: 'Analysis',
    features: ['Phân tích văn bản dài', 'Reasoning logic mạnh', 'Code review chuyên sâu', 'Artifacts creation'],
    link: 'https://claude.ai',
    pricing: 'Freemium',
    icon: '🧠',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Cursor IDE',
    description: 'AI-native code editor cho developers',
    category: 'Development',
    features: ['AI pair programming', 'Codebase chat', 'Multi-file editing', 'Claude integration'],
    link: 'https://cursor.com',
    pricing: 'Freemium',
    icon: '💻',
    color: 'from-purple-500 to-blue-500',
  },
  {
    name: 'Midjourney',
    description: 'Tạo ảnh nghệ thuật từ text prompts',
    category: 'Creative',
    features: ['High-quality art generation', 'Multiple art styles', 'Image variations', 'Community gallery'],
    link: 'https://midjourney.com',
    pricing: 'Subscription',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Perplexity AI',
    description: 'AI search engine với citations và real-time data',
    category: 'Research',
    features: ['Real-time web search', 'Source citations', 'Academic research', 'Follow-up questions'],
    link: 'https://perplexity.ai',
    pricing: 'Freemium',
    icon: '🔍',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer cho developers',
    category: 'Development',
    features: ['Code suggestions', 'Function generation', 'Documentation', 'Multiple languages'],
    link: 'https://github.com/features/copilot',
    pricing: 'Subscription',
    icon: '👨‍💻',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Canva AI',
    description: 'AI design tools trong Canva',
    category: 'Design',
    features: ['Magic Design', 'Background remover', 'AI presenter', 'Text to image'],
    link: 'https://canva.com/ai',
    pricing: 'Freemium',
    icon: '🖌️',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Windsurf IDE',
    description: 'AI-first code editor với agentic workflows',
    category: 'Development',
    features: ['Agentic coding', 'Multi-file awareness', 'Natural language commands', 'Free tier'],
    link: 'https://codeium.com/windsurf',
    pricing: 'Freemium',
    icon: '🌊',
    color: 'from-teal-500 to-green-500',
  },
  {
    name: 'NotebookLM',
    description: 'AI research assistant từ Google',
    category: 'Research',
    features: ['Document analysis', 'Podcast generation', 'Source grounding', 'Note organization'],
    link: 'https://notebooklm.google.com',
    pricing: 'Free',
    icon: '📚',
    color: 'from-amber-500 to-orange-500',
  },
];

const aiCategories = [
  {
    title: 'Office & Work',
    description: 'AI cho văn phòng và công việc',
    href: '/learning/ai/office-work',
    icon: '💼',
    color: 'from-blue-600 to-indigo-600',
    topics: ['Email tự động', 'Excel thông minh', 'Thuyết trình AI', 'Quản lý thời gian'],
  },
  {
    title: 'Creative & Design',
    description: 'AI cho sáng tạo và thiết kế',
    href: '/learning/ai/creative-design',
    icon: '🎨',
    color: 'from-purple-600 to-pink-600',
    topics: ['Tạo ảnh AI', 'Design tự động', 'Content sáng tạo', 'Video AI'],
  },
  {
    title: 'Education & Learning',
    description: 'AI hỗ trợ học tập',
    href: '/learning/ai/education-learning',
    icon: '📚',
    color: 'from-green-600 to-teal-600',
    topics: ['AI Tutor', 'Nghiên cứu', 'Học ngôn ngữ', 'Tóm tắt tài liệu'],
  },
  {
    title: 'Business & Marketing',
    description: 'AI cho kinh doanh',
    href: '/learning/ai/business-marketing',
    icon: '📈',
    color: 'from-orange-600 to-red-600',
    topics: ['Marketing AI', 'Phân tích khách hàng', 'Chatbot', 'SEO AI'],
  },
  {
    title: 'Daily Life',
    description: 'AI trong đời sống',
    href: '/learning/ai/daily-life',
    icon: '🏠',
    color: 'from-emerald-600 to-cyan-600',
    topics: ['Trợ lý cá nhân', 'Tài chính thông minh', 'Sức khỏe', 'Du lịch'],
  },
  {
    title: 'Programming & Dev',
    description: 'AI cho lập trình',
    href: '/learning/ai/programming-dev',
    icon: '💻',
    color: 'from-slate-600 to-blue-600',
    topics: ['Code AI', 'Debug thông minh', 'Review tự động', 'Testing AI'],
  },
];

const quickStartSteps = [
  {
    title: 'Bắt đầu với ChatGPT',
    description: 'Tạo tài khoản miễn phí và thử các prompt cơ bản',
    icon: '1️⃣',
    action: 'Thử ngay',
    link: 'https://chat.openai.com',
  },
  {
    title: 'Học Prompt Engineering',
    description: 'Nắm vững cách viết prompts hiệu quả',
    icon: '2️⃣',
    action: 'Học ngay',
    link: '/learning/ai/office-work',
  },
  {
    title: 'Khám phá các công cụ khác',
    description: 'Thử Midjourney, Canva AI, và các tools khác',
    icon: '3️⃣',
    action: 'Khám phá',
    link: '/learning/ai/creative-design',
  },
];

export default function AIModule() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section - Cyber AI theme */}
      <section className="relative min-h-screen bg-gradient-to-br from-black via-purple-900 to-black py-20">
        {/* Animated AI grid background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>
          {/* AI particles */}
          <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>

          {/* Neural network lines */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/50 to-transparent"></div>
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex items-center min-h-screen">
          <div className="w-full">
            {/* AI Brain icon */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center text-6xl shadow-2xl shadow-blue-500/30 animate-pulse">
                🤖
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI CỦA TÔI
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-8">
              <span className="text-blue-400">Thực Tế</span> •<span className="text-purple-400">Ứng Dụng</span> •
              <span className="text-pink-400">Hiệu Quả</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Khám phá sức mạnh của <span className="text-blue-400 font-bold">AI thực tế</span> trong
              <span className="text-purple-400 font-bold"> công việc hàng ngày</span> - từ
              <span className="text-pink-400 font-bold">ChatGPT đến Midjourney</span>
            </p>

            {/* AI Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
              {[
                { number: '100+', label: 'AI Tools', icon: '🔧' },
                { number: '6', label: 'Lĩnh Vực', icon: '📊' },
                { number: '∞', label: 'Ứng Dụng', icon: '🚀' },
                { number: '100%', label: 'Thực Tế', icon: '✨' },
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
                    <div className="text-5xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
                    <div className="text-3xl font-black text-blue-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                  <div className="absolute inset-0 bg-blue-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#featured-apps"
                className="relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-black font-black">🚀 BẮT ĐẦU NGAY</span>
              </a>
              <a
                href="#ai-categories"
                className="relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden border-2 border-pink-400"
              >
                <div className="absolute inset-0 bg-pink-400/10 rounded-2xl"></div>
                <div className="absolute inset-0 bg-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-pink-400 font-black">🎯 KHÁM PHÁ AI</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured AI Apps - Neon cards */}
      <section id="featured-apps" className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI TOOLS
              </span>
              <span className="block text-pink-400 mt-2">PHỔ BIẾN</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Những công cụ AI được sử dụng nhiều nhất hiện nay, từ miễn phí đến chuyên nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAIApps.map((app, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  {/* Pricing badge */}
                  <div
                    className={`absolute -top-3 left-6 px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                      app.pricing === 'Free'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-500/30'
                        : app.pricing === 'Freemium'
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-blue-500/30'
                          : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-yellow-500/30'
                    }`}
                  >
                    {app.pricing}
                  </div>

                  {/* App icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-2xl mb-6 mt-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30`}
                  >
                    {app.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{app.description}</p>

                  <div className="space-y-2 mb-6">
                    {app.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300 text-sm">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    DÙNG THỬ →
                  </a>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Categories - Matrix style */}
      <section id="ai-categories" className="py-20 bg-gradient-to-br from-black via-slate-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">HỌC AI</span>
              <span className="block text-blue-400 mt-2">THEO LĨNH VỰC</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Chọn lĩnh vực bạn quan tâm để học cách áp dụng AI một cách hiệu quả nhất
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCategories.map((category, index) => (
              <Link key={index} href={category.href} className="group relative">
                <div className="relative bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="text-blue-400 font-bold group-hover:text-blue-300 transition-colors flex items-center">
                    <span>HỌC NGAY</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>

                  {/* Matrix effect hint */}
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide - Futuristic design */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">BẮT ĐẦU</span>
              <span className="block text-purple-400 mt-2">VỚI AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">3 bước đơn giản để bắt đầu hành trình AI của bạn</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickStartSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-blue-500/30">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                <a
                  href={step.link}
                  target={step.link.startsWith('http') ? '_blank' : '_self'}
                  rel={step.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {step.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - AI finale */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-black relative overflow-hidden">
        {/* AI particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl p-12 border border-blue-400/30 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              🎯{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                THÀNH THẠO AI
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bắt đầu với <span className="text-blue-400 font-bold">AI tools miễn phí</span> và
              <span className="text-purple-400 font-bold"> nâng cao dần kỹ năng</span> của bạn
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://chat.openai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden border-2 border-blue-400"
              >
                <div className="absolute inset-0 bg-blue-400/10 rounded-2xl"></div>
                <div className="absolute inset-0 bg-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-blue-400 font-black">🤖 THỬ CHATGPT</span>
              </a>
              <Link
                href="/learning/ai/office-work"
                className="relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-black font-black">📚 HỌC AI CƠ BẢN</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
