import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { createTitle, createDescription } from '@/utils/seo'

export const metadata: Metadata = {
  title: createTitle('Nền tảng học tập thông minh, Công nghệ AI dẫn lối'),
  description: createDescription('K2AI - Nền tảng giáo dục tương tác miễn phí với AI, giúp bạn nắm vững kiến thức từ cơ bản đến nâng cao. 14 modules học tập chất lượng cao.'),
  keywords: [
    'K2AI', 'nền tảng học tập', 'giáo dục AI', 'học trực tuyến',
    'địa lý Việt Nam', 'AI thực tế', 'lập trình', 'miễn phí',
    'digital marketing', 'cybersecurity', 'biotechnology', 'STEM'
  ],
  openGraph: {
    title: 'K2AI - Nền tảng học tập thông minh, Công nghệ AI dẫn lối',
    description: 'Nền tảng giáo dục tương tác miễn phí với 14 modules học tập chất lượng cao từ cơ bản đến nâng cao.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K2AI - Nền tảng học tập thông minh',
    description: 'Học tập miễn phí với AI - 14 modules chất lượng cao'
  }
}

export default function HomePage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "K2AI",
    "description": "Nền tảng học tập thông minh với công nghệ AI",
    "url": "https://k2aihub.github.io",
    "logo": "https://k2aihub.github.io/logo.png",
    "foundingDate": "2025",
    "hasCourse": [
      {
        "@type": "Course",
        "name": "Địa Lý Việt Nam",
        "description": "Interactive Vietnam geography with 34 provinces"
      },
      {
        "@type": "Course", 
        "name": "AI Của Tôi",
        "description": "Practical AI applications for daily life"
      }
    ]
  };

  // Featured modules for homepage - most popular/beginner-friendly
  const featuredModules = [
    {
      id: 'geography',
      title: 'Địa Lý Việt Nam',
      subtitle: 'Khám phá quê hương',
      description: 'Bản đồ tương tác 34 tỉnh thành với thông tin văn hóa và kinh tế',
      href: '/city',
      color: 'from-green-500 to-emerald-500',
      icon: '🌏',
      difficulty: 'Dễ học',
      time: '2 giờ',
      highlight: 'Phổ biến nhất'
    },
    {
      id: 'ai',
      title: 'AI Của Tôi',
      subtitle: 'AI trong cuộc sống',
      description: 'Học cách sử dụng ChatGPT, Midjourney hiệu quả trong học tập và công việc',
      href: '/ai',
      color: 'from-purple-500 to-indigo-500',
      icon: '🤖',
      difficulty: 'Dễ học',
      time: '3 giờ',
      highlight: 'Xu hướng 2025'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      subtitle: 'Marketing & Content Creation',
      description: 'Từ Social Media đến kiếm tiền online - kỹ năng thời đại số',
      href: '/learning/digital-marketing',
      color: 'from-pink-500 to-purple-500',
      icon: '📱',
      difficulty: 'Trung bình',
      time: '12 giờ',
      highlight: 'Hot 2025'
    },
    {
      id: 'python',
      title: 'Lập Trình Python',
      subtitle: 'Ngôn ngữ của AI',
      description: 'Học Python từ cơ bản đến AI và Data Science - ngôn ngữ quan trọng nhất',
      href: '/learning/python',
      color: 'from-blue-500 to-cyan-500',
      icon: '🐍',
      difficulty: 'Trung bình',
      time: '15 giờ',
      highlight: 'Quan trọng'
    }
  ];

  // Learning paths for different student types
  const learningPaths = [
    {
      title: 'Học Sinh THPT',
      subtitle: 'Chuẩn bị tương lai',
      description: 'Lộ trình học phù hợp với học sinh trung học, tập trung vào kỹ năng cơ bản và định hướng nghề nghiệp',
      modules: ['🌏 Địa Lý VN', '🤖 AI cơ bản', '🔬 STEM', '🎨 Scratch'],
      color: 'from-green-400 to-blue-400',
      icon: '📚',
      href: '/learning?category=stem'
    },
    {
      title: 'Sinh Viên',
      subtitle: 'Kỹ năng thực tế',
      description: 'Các khóa học nâng cao giúp sinh viên có lợi thế trong tìm việc và phát triển sự nghiệp',
      modules: ['📱 Digital Marketing', '💰 Tài chính', '🎮 Game Dev', '🔒 Security'],
      color: 'from-purple-400 to-pink-400',
      icon: '🎓',
      href: '/learning?category=professional'
    },
    {
      title: 'Người Đi Làm',
      subtitle: 'Nâng cao nghề nghiệp',
      description: 'Học thêm kỹ năng mới để thăng tiến trong công việc hoặc chuyển đổi nghề nghiệp',
      modules: ['🚀 Khởi nghiệp', '🧬 Biotech', '🌱 Green Tech', '💻 Python'],
      color: 'from-orange-400 to-red-400',
      icon: '💼',
      href: '/learning?category=trending'
    }
  ];

  // Stats to show impact
  const stats = [
    { number: '14+', label: 'Learning Modules', icon: '📚' },
    { number: '100+', label: 'Bài Học Tương Tác', icon: '🎯' },
    { number: '200+', label: 'Giờ Học Chất Lượng', icon: '⏰' },
    { number: '100%', label: 'Miễn Phí', icon: '✨' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <StructuredData data={structuredData} />
      
      {/* Hero Section - Modern coral-teal design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 py-20">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-rose-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent">
                K2AI Learning
              </span>
              <span className="block text-white mt-2">Thông Minh & Hiện Đại</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Nền tảng giáo dục tương tác với công nghệ AI tiên tiến - 
              <span className="text-rose-200 font-semibold"> Miễn phí hoàn toàn</span>
            </p>
            
            {/* Modern Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#featured-modules" 
                className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🚀 Bắt Đầu Học Ngay
              </a>
              <a 
                href="#learning-paths" 
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-md border border-white/30"
              >
                📈 Xem Lộ Trình Học
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Modules - Modern card design */}
      <section id="featured-modules" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Khóa Học Nổi Bật
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Các khóa học được thiết kế hiện đại, dễ học và áp dụng ngay vào thực tế
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredModules.map((module) => (
              <Link 
                key={module.id} 
                href={module.href}
                className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                {/* Modern highlight badge */}
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {module.highlight}
                </div>
                
                {/* Glassmorphism icon container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {module.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">{module.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{module.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full border border-teal-500/30">{module.difficulty}</span>
                  <span className="text-rose-300">{module.time}</span>
                </div>
                
                <div className="text-teal-400 font-semibold group-hover:text-teal-300 transition-colors flex items-center">
                  <span>Học ngay</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths - Enhanced with modern styling */}
      <section id="learning-paths" className="py-20 bg-gradient-to-br from-gray-800 via-slate-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Lộ Trình Dành Cho Bạn
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Chọn con đường học tập phù hợp với mục tiêu và đam mê của bạn
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <Link 
                key={index} 
                href={path.href}
                className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${path.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {path.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">{path.title}</h3>
                <p className="text-lg text-rose-300 mb-4 font-medium">{path.subtitle}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{path.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {path.modules.map((module, idx) => (
                    <span key={idx} className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm border border-teal-500/30">
                      {module}
                    </span>
                  ))}
                </div>
                
                <div className="text-teal-400 font-semibold group-hover:text-teal-300 transition-colors flex items-center">
                  <span>Khám phá lộ trình</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern coral-teal gradient */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-rose-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🎯 Sẵn Sàng Thay Đổi Tương Lai?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Tham gia cộng đồng học tập thông minh và khởi đầu hành trình phát triển bản thân
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/city" 
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-md border border-white/30 hover:scale-105"
              >
                🌏 Khám Phá Việt Nam
              </Link>
              <Link 
                href="/ai" 
                className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                🤖 Học AI Ngay
              </Link>
              <Link 
                href="/learning" 
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                📚 Tất Cả Khóa Học
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
