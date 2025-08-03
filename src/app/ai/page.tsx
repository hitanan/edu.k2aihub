import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("AI Của Tôi - Ứng Dụng AI Thực Tế"),
  description: createDescription("Khám phá các ứng dụng AI thực tế trong đời sống và công việc hàng ngày. Từ ChatGPT, Midjourney đến GitHub Copilot - học cách sử dụng AI hiệu quả"),
  keywords: createKeywords(["AI", "trí tuệ nhân tạo", "ChatGPT", "Midjourney", "GitHub Copilot", "AI tools", "hướng dẫn AI", "AI Việt Nam", "AI apps"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("AI Của Tôi - Ứng Dụng AI Thực Tế"),
    description: createDescription("Khám phá các ứng dụng AI thực tế trong đời sống và công việc hàng ngày"),
    type: "website",
  },
};

const featuredAIApps = [
  {
    name: "ChatGPT",
    description: "Trợ lý AI cho viết, nghiên cứu và giải quyết vấn đề",
    category: "Productivity",
    features: ["Viết email chuyên nghiệp", "Tóm tắt tài liệu", "Brainstorming ý tưởng", "Code assistance"],
    link: "https://chat.openai.com",
    pricing: "Freemium",
    icon: "🤖",
    color: "from-green-500 to-blue-500"
  },
  {
    name: "Midjourney",
    description: "Tạo ảnh nghệ thuật từ text prompts",
    category: "Creative",
    features: ["High-quality art generation", "Multiple art styles", "Image variations", "Community gallery"],
    link: "https://midjourney.com",
    pricing: "Subscription",
    icon: "🎨",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer cho developers",
    category: "Development",
    features: ["Code suggestions", "Function generation", "Documentation", "Multiple languages"],
    link: "https://github.com/features/copilot",
    pricing: "Subscription",
    icon: "👨‍💻",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Canva AI",
    description: "AI design tools trong Canva",
    category: "Design",
    features: ["Magic Design", "Background remover", "AI presenter", "Text to image"],
    link: "https://canva.com/ai",
    pricing: "Freemium",
    icon: "🖌️",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Grammarly",
    description: "AI kiểm tra ngữ pháp và cải thiện văn phong",
    category: "Writing",
    features: ["Sửa lỗi ngữ pháp", "Cải thiện văn phong", "Plagiarism detection", "Writing insights"],
    link: "https://grammarly.com",
    pricing: "Freemium",
    icon: "✍️",
    color: "from-emerald-500 to-teal-500"
  },
  {
    name: "Claude",
    description: "AI assistant từ Anthropic cho phân tích và viết lách",
    category: "Analysis",
    features: ["Phân tích văn bản dài", "Viết content chất lượng", "Research assistance", "Safe AI"],
    link: "https://claude.ai",
    pricing: "Freemium",
    icon: "🧠",
    color: "from-indigo-500 to-purple-500"
  }
];

const aiCategories = [
  {
    title: 'Office & Work',
    description: 'AI cho văn phòng và công việc',
    href: '/learning/ai/office-work',
    icon: '💼',
    color: 'from-blue-600 to-indigo-600',
    topics: ['Email tự động', 'Excel thông minh', 'Thuyết trình AI', 'Quản lý thời gian']
  },
  {
    title: 'Creative & Design',
    description: 'AI cho sáng tạo và thiết kế',
    href: '/learning/ai/creative-design', 
    icon: '🎨',
    color: 'from-purple-600 to-pink-600',
    topics: ['Tạo ảnh AI', 'Design tự động', 'Content sáng tạo', 'Video AI']
  },
  {
    title: 'Education & Learning',
    description: 'AI hỗ trợ học tập',
    href: '/learning/ai/education-learning',
    icon: '📚',
    color: 'from-green-600 to-teal-600',
    topics: ['AI Tutor', 'Nghiên cứu', 'Học ngôn ngữ', 'Tóm tắt tài liệu']
  },
  {
    title: 'Business & Marketing',
    description: 'AI cho kinh doanh',
    href: '/learning/ai/business-marketing',
    icon: '📈',
    color: 'from-orange-600 to-red-600',
    topics: ['Marketing AI', 'Phân tích khách hàng', 'Chatbot', 'SEO AI']
  },
  {
    title: 'Daily Life',
    description: 'AI trong đời sống',
    href: '/learning/ai/daily-life',
    icon: '🏠',
    color: 'from-emerald-600 to-cyan-600',
    topics: ['Trợ lý cá nhân', 'Tài chính thông minh', 'Sức khỏe', 'Du lịch']
  },
  {
    title: 'Programming & Dev',
    description: 'AI cho lập trình',
    href: '/learning/ai/programming-dev',
    icon: '💻',
    color: 'from-slate-600 to-blue-600',
    topics: ['Code AI', 'Debug thông minh', 'Review tự động', 'Testing AI']
  }
];

const quickStartSteps = [
  {
    title: "Bắt đầu với ChatGPT",
    description: "Tạo tài khoản miễn phí và thử các prompt cơ bản",
    icon: "1️⃣",
    action: "Thử ngay",
    link: "https://chat.openai.com"
  },
  {
    title: "Học Prompt Engineering",
    description: "Nắm vững cách viết prompts hiệu quả",
    icon: "2️⃣",
    action: "Học ngay",
    link: "/learning/ai/office-work"
  },
  {
    title: "Khám phá các công cụ khác",
    description: "Thử Midjourney, Canva AI, và các tools khác",
    icon: "3️⃣",
    action: "Khám phá",
    link: "/learning/ai/creative-design"
  }
];

export default function AIModule() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl">
                🤖
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Của Tôi
              <span className="block text-purple-300 mt-2">Ứng Dụng AI Thực Tế</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Khám phá cách sử dụng AI hiệu quả trong công việc và cuộc sống hàng ngày. 
              Từ ChatGPT đến Midjourney, học cách tận dụng sức mạnh của AI một cách thực tế.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                🎯 100+ AI Tools
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                📝 Hướng dẫn thực hành
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                🚀 Cập nhật liên tục
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#featured-apps" 
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                Bắt Đầu Ngay
              </a>
              <a 
                href="#ai-categories" 
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 backdrop-blur-sm"
              >
                Khám Phá AI
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured AI Apps */}
      <section id="featured-apps" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Tools Phổ Biến Nhất
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những công cụ AI được sử dụng nhiều nhất hiện nay, từ miễn phí đến trả phí
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAIApps.map((app, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {app.icon}
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    app.pricing === 'Free' ? 'bg-green-100 text-green-700' :
                    app.pricing === 'Freemium' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {app.pricing}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{app.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{app.description}</p>
                
                <div className="space-y-2 mb-6">
                  {app.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white text-center py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200"
                  >
                    Dùng thử →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Categories */}
      <section id="ai-categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Học AI Theo Lĩnh Vực
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chọn lĩnh vực bạn quan tâm để học cách áp dụng AI một cách hiệu quả
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCategories.map((category, index) => (
              <Link key={index} href={category.href}>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-purple-50 text-purple-600 text-sm px-3 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                    Học ngay →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bắt Đầu Với AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3 bước đơn giản để bắt đầu hành trình AI của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickStartSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <a 
                  href={step.link}
                  target={step.link.startsWith('http') ? '_blank' : '_self'}
                  rel={step.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200"
                >
                  {step.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn Sàng Thành Thạo AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Bắt đầu với những AI tools miễn phí và từ từ mở rộng khi bạn đã thành thạo
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://chat.openai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              🤖 Thử ChatGPT Ngay
            </a>
            <Link 
              href="/learning/ai/office-work"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
            >
              📚 Học AI Từ Cơ Bản
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


