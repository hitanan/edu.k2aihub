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
    <div className="min-h-screen bg-gray-50">
      <StructuredData data={structuredData} />
      
      {/* Hero Section - Student-focused */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Học Tập Thông Minh
            <span className="block text-yellow-400 mt-2">Cùng Công Nghệ AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Nền tảng giáo dục tương tác miễn phí với AI, giúp bạn nắm vững kiến thức từ cơ bản đến nâng cao
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#featured-modules" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
            >
              Bắt Đầu Học Ngay
            </a>
            <a 
              href="#learning-paths" 
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 backdrop-blur-sm"
            >
              Xem Lộ Trình Học
            </a>
          </div>
        </div>
      </section>

      {/* Featured Modules - Curated selection */}
      <section id="featured-modules" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Khóa Học Nổi Bật
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Các khóa học được yêu thích nhất, phù hợp cho người mới bắt đầu và có thể áp dụng ngay
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredModules.map((module) => (
              <Link 
                key={module.id} 
                href={module.href}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                {/* Highlight badge */}
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {module.highlight}
                </div>
                
                {/* Icon and gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {module.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{module.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{module.difficulty}</span>
                  <span>{module.time}</span>
                </div>
                
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Học ngay →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths - Student categories */}
      <section id="learning-paths" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lộ Trình Học Cho Bạn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chọn lộ trình phù hợp với trình độ và mục tiêu của bạn
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <Link 
                key={index} 
                href={path.href}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${path.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {path.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{path.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{path.subtitle}</p>
                <p className="text-gray-600 mb-6">{path.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {path.modules.map((module, idx) => (
                    <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                      {module}
                    </span>
                  ))}
                </div>
                
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Khám phá lộ trình →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn Sàng Bắt Đầu Hành Trình Học Tập?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Tham gia hàng nghìn học viên đang học tập và phát triển cùng K2AiHub
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/city" 
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              🌏 Khám Phá Việt Nam
            </Link>
            <Link 
              href="/ai" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
            >
              🤖 Học AI Ngay
            </Link>
            <Link 
              href="/learning" 
              className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
            >
              📚 Tất Cả Khóa Học
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
