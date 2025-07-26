import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "AI Của Tôi - Hướng Dẫn Sử Dụng AI Thực Tế",
  description: "Học cách sử dụng AI hiệu quả trong công việc và cuộc sống. Hướng dẫn chi tiết về ChatGPT, Midjourney, GitHub Copilot và các công cụ AI phổ biến khác.",
  keywords: "AI, trí tuệ nhân tạo, ChatGPT, Midjourney, GitHub Copilot, AI tools, hướng dẫn AI, AI Việt Nam",
  authors: [{ name: "AI Của Tôi Team" }],
  openGraph: {
    title: "AI Của Tôi - Hướng Dẫn AI Thực Tế",
    description: "Khám phá và học cách sử dụng AI trong 6 lĩnh vực: Công việc, Sáng tạo, Giáo dục, Kinh doanh, Đời sống và Lập trình",
    type: "website",
  },
};

export default function AIModule() {
  const aiCategories = [
    {
      title: 'AI cho Văn Phòng & Công Việc',
      description: 'Tận dụng AI để tăng hiệu suất làm việc, tự động hóa công việc văn phòng và cải thiện quy trình nghiệp vụ.',
      href: '/ai/office-work',
      icon: '💼',
      color: 'from-blue-600 to-indigo-600',
      topics: ['ChatGPT cho Email', 'Tự động hóa Excel', 'Trình bày với AI', 'Quản lý thời gian']
    },
    {
      title: 'AI cho Sáng Tạo & Thiết Kế',
      description: 'Khám phá cách sử dụng AI để tạo ra nội dung sáng tạo, thiết kế đồ họa và phát triển ý tưởng.',
      href: '/ai/creative-design',
      icon: '🎨',
      color: 'from-purple-600 to-pink-600',
      topics: ['Midjourney', 'Canva AI', 'Viết nội dung', 'Chỉnh sửa ảnh AI']
    },
    {
      title: 'AI cho Giáo Dục & Học Tập',
      description: 'Sử dụng AI để hỗ trợ học tập, nghiên cứu và phát triển kỹ năng cá nhân một cách hiệu quả.',
      href: '/ai/education-learning',
      icon: '📚',
      color: 'from-green-600 to-teal-600',
      topics: ['AI Tutor', 'Nghiên cứu với AI', 'Học ngôn ngữ', 'Tóm tắt tài liệu']
    },
    {
      title: 'AI cho Kinh Doanh & Marketing',
      description: 'Ứng dụng AI trong marketing, bán hàng, phân tích khách hàng và phát triển kinh doanh.',
      href: '/ai/business-marketing',
      icon: '📈',
      color: 'from-orange-600 to-red-600',
      topics: ['Marketing AI', 'Phân tích dữ liệu', 'Chatbot bán hàng', 'SEO với AI']
    },
    {
      title: 'AI cho Đời Sống Hàng Ngày',
      description: 'Khám phá cách AI có thể hỗ trợ các hoạt động hàng ngày từ nấu ăn đến quản lý tài chính cá nhân.',
      href: '/ai/daily-life',
      icon: '🏠',
      color: 'from-emerald-600 to-cyan-600',
      topics: ['AI Assistant', 'Quản lý tài chính', 'Sức khỏe & Fitness', 'Du lịch thông minh']
    },
    {
      title: 'Lập Trình & Phát Triển với AI',
      description: 'Tìm hiểu cách sử dụng AI để hỗ trợ lập trình, phát triển ứng dụng và tự động hóa code.',
      href: '/ai/programming-dev',
      icon: '💻',
      color: 'from-slate-600 to-blue-600',
      topics: ['GitHub Copilot', 'Code Review AI', 'No-Code AI', 'Debugging thông minh']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white text-sm">
                  🤖
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  AI Của Tôi
                </h1>
              </Link>
              <nav className="hidden md:flex items-center gap-1 ml-6">
                <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">
                  Trang Chủ
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <span className="text-gray-900 text-sm font-medium">
                  AI Của Tôi
                </span>
              </nav>
            </div>
            <nav className="flex items-center gap-6">
              <Link
                href="/feedback"
                className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
              >
                💬 Góp Ý
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl flex items-center justify-center text-3xl">
                🤖
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Của Tôi
              <span className="block text-purple-300">Hướng Dẫn Thực Hành</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Khám phá cách sử dụng AI hiệu quả trong công việc và cuộc sống hàng ngày. 
              Từ những công cụ cơ bản đến các ứng dụng nâng cao, chúng tôi sẽ hướng dẫn bạn 
              tận dụng tối đa sức mạnh của trí tuệ nhân tạo.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                🎯 Hướng Dẫn Từng Bước
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                🛠️ Công Cụ Thực Tế
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                📝 Ví Dụ Cụ Thể
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                🚀 Cập Nhật Liên Tục
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lĩnh Vực Ứng Dụng AI
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chọn lĩnh vực bạn quan tâm để học cách áp dụng AI một cách hiệu quả. 
            Mỗi danh mục đều có hướng dẫn chi tiết và ví dụ thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiCategories.map((category, index) => (
            <Link key={index} href={category.href}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="bg-purple-50 text-purple-600 text-sm px-3 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
                <div className={`bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-xl text-center font-semibold group-hover:shadow-lg transition-shadow duration-300`}>
                  Khám Phá →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bắt Đầu Với AI
            </h2>
            <p className="text-lg text-gray-600">
              Những bước đầu tiên để làm quen với AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                1️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tìm Hiểu Cơ Bản
              </h3>
              <p className="text-gray-600">
                Hiểu AI là gì, hoạt động như thế nào và có thể ứng dụng ở đâu trong cuộc sống hàng ngày
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                2️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Thực Hành Với Công Cụ
              </h3>
              <p className="text-gray-600">
                Bắt tay vào sử dụng các công cụ AI phổ biến như ChatGPT, Midjourney, và nhiều hơn nữa
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                3️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ứng Dụng Vào Công Việc
              </h3>
              <p className="text-gray-600">
                Tích hợp AI vào quy trình làm việc để tăng hiệu suất và chất lượng công việc
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-xl">
                🤖
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Của Tôi</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Cung cấp kiến thức và hướng dẫn thực tế để bạn có thể tận dụng tối đa sức mạnh của AI 
              trong công việc và cuộc sống hàng ngày.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2025 AI Của Tôi</span>
              <span>•</span>
              <span>Hướng dẫn thực hành AI cho người Việt</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
