import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("AI Apps - Ứng Dụng AI Thực Tế"),
  description: createDescription("Khám phá các ứng dụng AI thực tế trong đời sống và công việc hàng ngày"),
  keywords: createKeywords(["ai applications", "artificial intelligence", "ai tools", "practical ai"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("AI Apps - Ứng Dụng AI Thực Tế"),
    description: createDescription("Tìm hiểu cách sử dụng AI trong đời sống thực"),
    type: "website",
  },
};

const aiApps = [
  {
    category: "Productivity & Work",
    icon: "💼",
    apps: [
      {
        name: "ChatGPT",
        description: "Trợ lý AI cho viết, nghiên cứu và giải quyết vấn đề",
        features: ["Viết email chuyên nghiệp", "Tóm tắt tài liệu", "Brainstorming ý tưởng", "Code assistance"],
        link: "https://chat.openai.com",
        pricing: "Freemium",
        icon: "🤖"
      },
      {
        name: "Claude",
        description: "AI assistant từ Anthropic cho phân tích và viết lách",
        features: ["Phân tích văn bản dài", "Viết content chất lượng", "Research assistance", "Safe AI"],
        link: "https://claude.ai",
        pricing: "Freemium",
        icon: "🧠"
      },
      {
        name: "Grammarly",
        description: "AI kiểm tra ngữ pháp và cải thiện văn phong",
        features: ["Sửa lỗi ngữ pháp", "Cải thiện văn phong", "Plagiarism detection", "Writing insights"],
        link: "https://grammarly.com",
        pricing: "Freemium",
        icon: "✍️"
      },
      {
        name: "Notion AI",
        description: "AI tích hợp trong workspace để tăng năng suất",
        features: ["Tự động tóm tắt", "Viết content", "Dịch thuật", "Brainstorm ideas"],
        link: "https://notion.so/ai",
        pricing: "Paid addon",
        icon: "📝"
      }
    ]
  },
  {
    category: "Creative & Design",
    icon: "🎨",
    apps: [
      {
        name: "Midjourney",
        description: "Tạo ảnh nghệ thuật từ text prompts",
        features: ["High-quality art generation", "Multiple art styles", "Image variations", "Community gallery"],
        link: "https://midjourney.com",
        pricing: "Subscription",
        icon: "🖼️"
      },
      {
        name: "DALL-E 3",
        description: "AI tạo ảnh chất lượng cao từ OpenAI",
        features: ["Photorealistic images", "Creative illustrations", "Text integration", "Safe content"],
        link: "https://openai.com/dall-e-3",
        pricing: "Pay per use",
        icon: "🎭"
      },
      {
        name: "Canva AI",
        description: "AI design tools trong Canva",
        features: ["Magic Design", "Background remover", "AI presenter", "Text to image"],
        link: "https://canva.com/ai",
        pricing: "Freemium",
        icon: "🖌️"
      },
      {
        name: "Runway ML",
        description: "AI cho video editing và creative projects",
        features: ["Video generation", "Motion graphics", "Green screen", "Style transfer"],
        link: "https://runwayml.com",
        pricing: "Subscription",
        icon: "🎬"
      }
    ]
  },
  {
    category: "Development & Coding",
    icon: "💻",
    apps: [
      {
        name: "GitHub Copilot",
        description: "AI pair programmer cho developers",
        features: ["Code suggestions", "Function generation", "Documentation", "Multiple languages"],
        link: "https://github.com/features/copilot",
        pricing: "Subscription",
        icon: "👨‍💻"
      },
      {
        name: "Cursor",
        description: "AI-powered code editor",
        features: ["AI code completion", "Natural language edits", "Codebase chat", "Debug assistance"],
        link: "https://cursor.so",
        pricing: "Freemium",
        icon: "⌨️"
      },
      {
        name: "Replit AI",
        description: "AI coding assistant trong browser",
        features: ["Code generation", "Debugging help", "Explanation", "Multiple languages"],
        link: "https://replit.com/ai",
        pricing: "Freemium",
        icon: "🔧"
      },
      {
        name: "Tabnine",
        description: "AI code completion cho nhiều IDE",
        features: ["Smart completions", "Team learning", "Privacy focused", "IDE integration"],
        link: "https://tabnine.com",
        pricing: "Freemium",
        icon: "🔮"
      }
    ]
  },
  {
    category: "Business & Marketing",
    icon: "📈",
    apps: [
      {
        name: "Jasper AI",
        description: "AI content marketing platform",
        features: ["Blog writing", "Ad copy", "Social media", "SEO optimization"],
        link: "https://jasper.ai",
        pricing: "Subscription",
        icon: "📊"
      },
      {
        name: "Copy.ai",
        description: "AI copywriting tool cho marketing",
        features: ["Sales copy", "Email campaigns", "Product descriptions", "Social posts"],
        link: "https://copy.ai",
        pricing: "Freemium",
        icon: "📝"
      },
      {
        name: "HubSpot AI",
        description: "AI tools trong HubSpot CRM",
        features: ["Lead scoring", "Content optimization", "Email personalization", "Analytics insights"],
        link: "https://hubspot.com/ai",
        pricing: "Freemium",
        icon: "🎯"
      },
      {
        name: "Salesforce Einstein",
        description: "AI cho sales và customer service",
        features: ["Predictive analytics", "Lead scoring", "Automated responses", "Sales forecasting"],
        link: "https://salesforce.com/einstein",
        pricing: "Enterprise",
        icon: "⚡"
      }
    ]
  },
  {
    category: "Education & Learning",
    icon: "📚",
    href: '/ai/ai-apps/education-learning',
    apps: [
      {
        name: "Khan Academy AI",
        description: "AI tutor cá nhân cho học tập",
        features: ["Personalized learning", "Practice problems", "Progress tracking", "Multiple subjects"],
        link: "https://khanacademy.org/ai",
        pricing: "Free",
        icon: "🎓"
      },
      {
        name: "Duolingo",
        description: "AI-powered language learning",
        features: ["Adaptive lessons", "Speech recognition", "Personalized review", "Gamification"],
        link: "https://duolingo.com",
        pricing: "Freemium",
        icon: "🗣️"
      },
      {
        name: "Coursera AI",
        description: "AI trong online courses",
        features: ["Course recommendations", "Auto-grading", "Personalized feedback", "Career guidance"],
        link: "https://coursera.org",
        pricing: "Freemium",
        icon: "📖"
      },
      {
        name: "Quizlet AI",
        description: "AI study tools và flashcards",
        features: ["Smart study modes", "Auto-generated questions", "Spaced repetition", "Progress analytics"],
        link: "https://quizlet.com",
        pricing: "Freemium",
        icon: "🃏"
      }
    ]
  },
  {
    category: "Personal & Lifestyle",
    icon: "🌱",
    apps: [
      {
        name: "MyFitnessPal AI",
        description: "AI nutrition và fitness tracking",
        features: ["Food recognition", "Meal planning", "Workout suggestions", "Health insights"],
        link: "https://myfitnesspal.com",
        pricing: "Freemium",
        icon: "🏃‍♂️"
      },
      {
        name: "Spotify AI DJ",
        description: "AI DJ cá nhân từ Spotify",
        features: ["Personalized playlists", "Music discovery", "Voice narration", "Mood matching"],
        link: "https://spotify.com",
        pricing: "Premium",
        icon: "🎵"
      },
      {
        name: "Google Assistant",
        description: "AI assistant cho cuộc sống hàng ngày",
        features: ["Voice commands", "Smart home control", "Scheduling", "Information lookup"],
        link: "https://assistant.google.com",
        pricing: "Free",
        icon: "🗣️"
      },
      {
        name: "Replika",
        description: "AI companion cho mental health",
        features: ["Emotional support", "Daily conversations", "Mood tracking", "Personal growth"],
        link: "https://replika.ai",
        pricing: "Freemium",
        icon: "💝"
      }
    ]
  }
];

const tips = [
  {
    title: "Bắt đầu với Free Tools",
    description: "Thử nghiệm các công cụ miễn phí trước khi đầu tư vào phiên bản trả phí",
    icon: "💡"
  },
  {
    title: "Học Prompt Engineering",
    description: "Nắm vững cách viết prompts hiệu quả để có kết quả tốt nhất",
    icon: "🎯"
  },
  {
    title: "Combine Multiple Tools",
    description: "Kết hợp nhiều AI tools để tạo ra workflow mạnh mẽ",
    icon: "🔗"
  },
  {
    title: "Stay Updated",
    description: "AI phát triển nhanh, luôn cập nhật các tính năng mới",
    icon: "🔄"
  },
  {
    title: "Privacy First",
    description: "Chú ý đến chính sách bảo mật khi sử dụng AI tools",
    icon: "🔒"
  },
  {
    title: "Practice Regularly",
    description: "Thực hành thường xuyên để thành thạo các AI tools",
    icon: "🏋️‍♂️"
  }
];

export default function AIAppsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/ai" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
              ← Quay lại AI Module
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Apps - Ứng Dụng AI Thực Tế
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Khám phá các ứng dụng AI hàng đầu đang thay đổi cách chúng ta làm việc, học tập và sống. 
              Từ productivity tools đến creative platforms, tìm hiểu cách tận dụng sức mạnh của AI.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-500/20 text-purple-200 px-4 py-2 rounded-full">
                📱 100+ AI Apps
              </span>
              <span className="bg-pink-500/20 text-pink-200 px-4 py-2 rounded-full">
                🔄 Cập nhật thường xuyên
              </span>
              <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full">
                💡 Practical guides
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* AI Apps Categories */}
        <div className="space-y-16">
          {aiApps.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-8">
                <div className="text-4xl mr-4">{category.icon}</div>
                <h2 className="text-3xl font-bold text-white">{category.category}{category.href && <Link href={category.href} className="text-purple-300 hover:text-purple-200 transition-colors duration-300"> → App đặc biệt</Link>}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {category.apps.map((app, appIndex) => (
                  <div key={appIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="text-3xl mr-4">{app.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                            {app.name}
                          </h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            app.pricing === 'Free' ? 'bg-green-500/20 text-green-200' :
                            app.pricing === 'Freemium' ? 'bg-blue-500/20 text-blue-200' :
                            app.pricing === 'Subscription' ? 'bg-yellow-500/20 text-yellow-200' :
                            app.pricing === 'Enterprise' ? 'bg-red-500/20 text-red-200' :
                            'bg-purple-500/20 text-purple-200'
                          }`}>
                            {app.pricing}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{app.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-green-300 text-sm font-semibold mb-2">✨ Tính năng chính:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {app.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-300 text-sm">
                              <span className="text-green-400 mr-2">•</span>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-white/10">
                        <a 
                          href={app.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors text-sm font-semibold"
                        >
                          Truy cập {app.name} →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl p-8 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <span className="text-4xl mr-4">💡</span>
            Tips Sử Dụng AI Apps Hiệu Quả
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-300 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Trends */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <span className="text-4xl mr-4">📈</span>
            Xu Hướng AI 2024
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-white font-bold mb-2">Multimodal AI</h3>
              <p className="text-gray-300 text-sm">AI xử lý text, image, video, audio cùng lúc</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-white font-bold mb-2">Enterprise AI</h3>
              <p className="text-gray-300 text-sm">AI tích hợp sâu vào quy trình doanh nghiệp</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-white font-bold mb-2">Privacy AI</h3>
              <p className="text-gray-300 text-sm">AI bảo vệ quyền riêng tư và dữ liệu cá nhân</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-bold mb-2">Edge AI</h3>
              <p className="text-gray-300 text-sm">AI chạy trực tiếp trên thiết bị cá nhân</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              Sẵn sàng khám phá AI?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Bắt đầu với những AI tools miễn phí và từ từ mở rộng khi bạn đã thành thạo. 
              Hãy nhớ rằng AI là công cụ hỗ trợ, không thay thế hoàn toàn con người.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/ai"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                🔙 Quay lại AI Guide
              </Link>
              
              <a
                href="https://chat.openai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                🚀 Thử ChatGPT ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
