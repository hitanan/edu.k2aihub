import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { digitalMarketingLessons } from '@/data/digital-marketing';

export const metadata: Metadata = {
  title: createTitle("Digital Marketing & Creator Economy - Học Marketing Số"),
  description: createDescription("Khóa học Digital Marketing toàn diện từ cơ bản đến nâng cao, bao gồm Creator Economy, Social Media Marketing, Content Marketing và Analytics"),
  keywords: createKeywords(["digital marketing", "creator economy", "social media marketing", "content marketing", "seo", "google ads"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Digital Marketing & Creator Economy"),
    description: createDescription("Trở thành chuyên gia Digital Marketing và Creator với khóa học thực tế từ K2AiHub"),
    type: "website",
  },
};

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
              ← Quay lại Trang chủ
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-6">📱</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Digital Marketing & Creator Economy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Khám phá thế giới Marketing số và Creator Economy. Từ Social Media Marketing đến Content Creation, 
              học cách xây dựng thương hiệu cá nhân và kiếm tiền từ sáng tạo của bạn.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full">
                📊 8 Bài học chuyên sâu
              </span>
              <span className="bg-purple-500/20 text-purple-200 px-4 py-2 rounded-full">
                🎯 Thực tế & Ứng dụng
              </span>
              <span className="bg-pink-500/20 text-pink-200 px-4 py-2 rounded-full">
                💰 Kiếm tiền từ sáng tạo
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Tổng Quan Khóa Học</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">🎯 Bạn sẽ học được gì?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  Xây dựng chiến lược Digital Marketing toàn diện
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  Quản lý và phát triển Social Media hiệu quả
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  Tạo nội dung hấp dẫn và viral trên các nền tảng
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  Kiếm tiền từ Creator Economy và Personal Branding
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  Phân tích dữ liệu và tối ưu hóa chiến dịch
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  Xử lý khủng hoảng truyền thông và quản lý danh tiếng
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">🚀 Tại sao học Digital Marketing?</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Digital Marketing là kỹ năng thiết yếu trong thời đại số. Với sự bùng nổ của Creator Economy, 
                việc hiểu và vận dụng được các công cụ marketing số không chỉ giúp bạn tìm được việc làm tốt 
                mà còn có thể tự kinh doanh và xây dựng thương hiệu cá nhân.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl mb-2">💼</div>
                  <h4 className="font-semibold text-white mb-1">Cơ hội nghề nghiệp</h4>
                  <p className="text-sm text-gray-400">Marketing Manager, Content Creator, Social Media Manager</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl mb-2">💰</div>
                  <h4 className="font-semibold text-white mb-1">Thu nhập cao</h4>
                  <p className="text-sm text-gray-400">Lương trung bình 15-30 triệu VNĐ/tháng</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4">📊 Thông tin khóa học</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Tổng thời lượng:</span>
                  <span className="text-white font-medium">12+ giờ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Số bài học:</span>
                  <span className="text-white font-medium">8 bài</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Độ khó:</span>
                  <span className="text-white font-medium">Cơ bản → Nâng cao</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Dự án thực tế:</span>
                  <span className="text-white font-medium">5+ dự án</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
              <h3 className="text-lg font-bold text-white mb-4">🏆 Chứng chỉ</h3>
              <p className="text-green-200 text-sm mb-4">
                Hoàn thành khóa học và nhận chứng chỉ Digital Marketing từ K2AiHub
              </p>
              <div className="text-2xl text-center">🎓</div>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nội Dung Khóa Học</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {digitalMarketingLessons.map((lesson, index) => (
              <Link 
                key={lesson.id}
                href={`/digital-marketing/${lesson.id}`}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {lesson.imageUrl ? (
                      <Image 
                        src={lesson.imageUrl} 
                        alt={lesson.title}
                        width={60}
                        height={60}
                        className="w-15 h-15 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-15 h-15 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl">
                        {index + 1}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {lesson.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded">
                        ⏱️ {lesson.duration}
                      </span>
                      <span className="text-xs bg-purple-500/20 text-purple-200 px-2 py-1 rounded">
                        🎯 {lesson.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center text-xs text-gray-400">
                      <span className="mr-2">🎬</span>
                      Video + Thực hành
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Sẵn sàng trở thành Digital Marketer?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Bắt đầu hành trình khám phá thế giới Digital Marketing và Creator Economy. 
            Từ zero đến hero với những kiến thức thực tế và dự án hands-on.
          </p>
          <Link 
            href="/digital-marketing/digital-marketing-fundamentals"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Bắt đầu học ngay →
          </Link>
        </div>

        {/* Cross-module Links */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Khóa học liên quan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/ai" 
              className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-white font-medium">AI Của Tôi</div>
              <div className="text-gray-400 text-sm">Sử dụng AI trong Marketing</div>
            </Link>
            
            <Link 
              href="/python" 
              className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl mb-2">🐍</div>
              <div className="text-white font-medium">Python</div>
              <div className="text-gray-400 text-sm">Automation & Analytics</div>
            </Link>
            
            <Link 
              href="/stem" 
              className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl mb-2">🔬</div>
              <div className="text-white font-medium">STEM</div>
              <div className="text-gray-400 text-sm">Data Science cho Marketing</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
