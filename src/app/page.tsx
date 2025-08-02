'use client';

import React from 'react';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "K2AI",
    "alternateName": "K2AI - Học tập thông minh, Công nghệ AI dẫn lối",
    "description": "Nền tảng giáo dục toàn diện với 14 module chính: Địa Lý Việt Nam, AI, Digital Marketing, Financial Literacy, Green Technology, Game Development, AI Art, Cybersecurity, Biotechnology, STEM, Scratch, Python, Arduino IoT và Robotics",
    "url": "https://k2aihub.com",
    "sameAs": ["https://k2aihub.com"],
    "educationalUse": ["learning", "research", "reference", "interactive"],
    "learningResourceType": ["interactive resource", "educational game", "tutorial", "programming course", "professional development", "career skills"],
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "general public"
    },
    "provider": {
      "@type": "Organization",
      "name": "K2AiHub Team"
    },
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
      },
      {
        "@type": "Course",
        "name": "Digital Marketing & Creator Economy",
        "description": "Comprehensive digital marketing and content creation"
      },
      {
        "@type": "Course",
        "name": "Financial Literacy & FinTech",
        "description": "Personal finance and financial technology"
      },
      {
        "@type": "Course",
        "name": "Green Technology & Sustainability",
        "description": "Renewable energy and environmental technology"
      },
      {
        "@type": "Course",
        "name": "Game Development & Interactive Media",
        "description": "Game creation with Unity and Unreal Engine"
      },
      {
        "@type": "Course",
        "name": "AI Art & Creative Technology",
        "description": "AI-powered creative tools and workflows"
      },
      {
        "@type": "Course",
        "name": "Cybersecurity & Ethical Hacking",
        "description": "Network security and penetration testing"
      },
      {
        "@type": "Course",
        "name": "Biotechnology & Life Sciences",
        "description": "Genetic engineering and medical biotechnology"
      },
      {
        "@type": "Course",
        "name": "STEM Education",
        "description": "Science, technology, engineering and mathematics"
      },
      {
        "@type": "Course",
        "name": "Scratch Programming",
        "description": "Visual programming for beginners"
      },
      {
        "@type": "Course",
        "name": "Python Programming",
        "description": "Python for AI and data science"
      },
      {
        "@type": "Course",
        "name": "Arduino & IoT",
        "description": "Hardware programming and IoT systems"
      },
      {
        "@type": "Course",
        "name": "Robotics",
        "description": "Robot design and autonomous systems"
      }
    ]
  };

  const modules = [
    // Foundation Level - Beginner Friendly
    {
      id: 'geography',
      title: 'Địa Lý Việt Nam',
      subtitle: 'Khám phá 34 tỉnh thành',
      description: 'Tương tác với bản đồ Việt Nam, tìm hiểu văn hóa và kinh tế từng vùng miền',
      level: 'Cơ bản',
      duration: '2-3 giờ',
      href: '/city',
      color: 'from-green-600 to-emerald-600',
      category: 'foundation',
      features: ['Bản đồ tương tác', 'Thông tin 34 tỉnh', 'Tìm kiếm thông minh', 'Chia sẻ dễ dàng'],
      icon: '🌏'
    },
    {
      id: 'ai',
      title: 'AI Của Tôi',
      subtitle: 'Ứng dụng AI thực tế',
      description: 'Học cách sử dụng ChatGPT, Midjourney và các công cụ AI trong cuộc sống',
      level: 'Cơ bản',
      duration: '3-4 giờ',
      href: '/ai',
      color: 'from-purple-600 to-indigo-600',
      category: 'foundation',
      features: ['6 lĩnh vực ứng dụng', 'Hướng dẫn chi tiết', 'Ví dụ thực tế', 'Cập nhật liên tục'],
      icon: '🤖'
    },

    // Professional Skills - Career Development
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      subtitle: 'Marketing & Creator Economy',
      description: 'Học Digital Marketing toàn diện, từ Social Media đến Content Creation và kiếm tiền online',
      level: 'Trung bình',
      duration: '12-15 giờ',
      href: '/learning/digital-marketing',
      color: 'from-pink-600 to-purple-600',
      category: 'professional',
      features: ['8 bài học marketing', 'Creator Economy', 'Social Media', 'Analytics & ROI'],
      icon: '📱'
    },
    {
      id: 'financial-literacy',
      title: 'Financial Literacy & FinTech',
      subtitle: 'Quản lý tài chính thông minh',
      description: 'Master personal finance, investment và FinTech tools để xây dựng tương lai tài chính bền vững',
      level: 'Trung bình',
      duration: '10-12 giờ',
      href: '/learning/financial-literacy',
      color: 'from-amber-600 to-orange-600',
      category: 'professional',
      features: ['Personal Finance', 'Investment Strategy', 'FinTech Tools', 'Cryptocurrency'],
      icon: '💰'
    },
    {
      id: 'green-technology',
      title: 'Green Technology',
      subtitle: 'Công nghệ xanh & Sustainability',
      description: 'Khám phá renewable energy, smart cities và sustainable solutions cho tương lai xanh',
      level: 'Trung bình',
      duration: '10-12 giờ',
      href: '/learning/green-technology',
      color: 'from-green-600 to-emerald-600',
      category: 'professional',
      features: ['Renewable Energy', 'Smart Cities IoT', 'Sustainability', 'Environmental Tech'],
      icon: '🌱'
    },

    // Creative & Technology - Modern Skills
    {
      id: 'game-development',
      title: 'Game Development & Interactive Media',
      subtitle: 'Phát triển game & multimedia',
      description: 'Tạo game với Unity/Unreal, learn game design, animation và interactive storytelling',
      level: 'Trung bình',
      duration: '15-18 giờ',
      href: '/learning/game-development',
      color: 'from-purple-600 to-pink-600',
      category: 'creative',
      features: ['Unity & Unreal Engine', 'Game Design', '2D/3D Animation', 'Publishing Strategy'],
      icon: '🎮'
    },
    {
      id: 'ai-art',
      title: 'AI Art & Creative Technology',
      subtitle: 'AI sáng tạo nội dung',
      description: 'Master AI tools như Midjourney, DALL-E, Stable Diffusion để tạo artwork và video đẳng cấp',
      level: 'Trung bình',
      duration: '8-10 giờ',
      href: '/learning/ai-art-creative-tech',
      color: 'from-pink-600 to-rose-600',
      category: 'creative',
      features: ['Midjourney Pro', 'Video Generation', 'Creative Workflows', 'Commercial Applications'],
      icon: '🎨'
    },

    // Security & Science - Advanced Topics
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Ethical Hacking',
      subtitle: 'An ninh mạng & hacking đạo đức',
      description: 'Học penetration testing, incident response và defense strategies để bảo vệ hệ thống',
      level: 'Nâng cao',
      duration: '20-25 giờ',
      href: '/learning/cybersecurity',
      color: 'from-red-600 to-orange-600',
      category: 'security',
      features: ['Penetration Testing', 'SIEM Systems', 'Incident Response', 'Threat Hunting'],
      icon: '🔒'
    },
    {
      id: 'biotechnology',
      title: 'Biotechnology & Life Sciences',
      subtitle: 'Công nghệ sinh học & y sinh',
      description: 'Khám phá genetic engineering, drug discovery và medical biotechnology cho tương lai y tế',
      level: 'Nâng cao',
      duration: '18-22 giờ',
      href: '/learning/biotechnology',
      color: 'from-emerald-600 to-teal-600',
      category: 'science',
      features: ['CRISPR Technology', 'Drug Discovery', 'Medical Devices', 'Bioethics'],
      icon: '🧬'
    },
    
    // Programming Level - Learn to Code
    {
      id: 'scratch',
      title: 'Lập Trình Scratch',
      subtitle: 'Coding cho người mới',
      description: 'Học lập trình trực quan với Scratch, tạo game và animation đầu tiên',
      level: 'Cơ bản',
      duration: '6-8 giờ',
      href: '/learning/scratch',
      color: 'from-orange-600 to-red-600',
      category: 'programming',
      features: ['Lập trình kéo thả', 'Tạo game', 'Animation', '5 bài học'],
      icon: '🎨'
    },
    {
      id: 'python',
      title: 'Lập Trình Python',
      subtitle: 'Ngôn ngữ AI & Data',
      description: 'Từ cơ bản đến nâng cao, làm chủ Python cho AI và phân tích dữ liệu',
      level: 'Trung bình',
      duration: '15-20 giờ',
      href: '/learning/python',
      color: 'from-blue-600 to-cyan-600',
      category: 'programming',
      features: ['Syntax cơ bản', 'OOP', 'Data handling', 'AI ready'],
      icon: '🐍'
    },
    
    // STEM & Hardware Level - Applied Science
    {
      id: 'stem',
      title: 'STEM Education',
      subtitle: 'Khoa học ứng dụng',
      description: 'Thí nghiệm vật lý, toán học thực tế và kỹ thuật sáng tạo',
      level: 'Cơ bản',
      duration: '8-10 giờ',
      href: '/learning/stem',
      color: 'from-teal-600 to-green-600',
      category: 'stem',
      features: ['7 chủ đề STEM', 'Thí nghiệm thực tế', 'Toán đời sống', 'Dự án sáng tạo'],
      icon: '🔬'
    },
    {
      id: 'arduino',
      title: 'Arduino & IoT',
      subtitle: 'Lập trình phần cứng',
      description: 'Xây dựng hệ thống IoT thông minh với Arduino từ cơ bản đến nâng cao',
      level: 'Nâng cao',
      duration: '12-15 giờ',
      href: '/learning/arduino',
      color: 'from-cyan-600 to-blue-600',
      category: 'stem',
      features: ['6 bài học Arduino', 'Dự án IoT', 'Sensors & Actuators', 'Smart Home'],
      icon: '⚡'
    },
    {
      id: 'robotics',
      title: 'Robotics',
      subtitle: 'Robot tự động',
      description: 'Thiết kế và lập trình robot, từ cơ bản đến AI robotics',
      level: 'Nâng cao',
      duration: '10-12 giờ',
      href: '/learning/robotics',
      color: 'from-purple-600 to-pink-600',
      category: 'stem',
      features: ['Cơ khí robot', 'Lập trình chuyển động', 'AI robotics', 'Autonomous systems'],
      icon: '🤖'
    }
  ];

  const categories = {
    foundation: {
      title: '🌟 Khởi Đầu',
      description: 'Dành cho người mới bắt đầu',
      modules: modules.filter(m => m.category === 'foundation')
    },
    professional: {
      title: '💼 Kỹ Năng Nghề Nghiệp',
      description: 'Phát triển sự nghiệp và kinh doanh',
      modules: modules.filter(m => m.category === 'professional')
    },
    creative: {
      title: '🎨 Sáng Tạo & Công Nghệ',
      description: 'Game development và AI creative tools',
      modules: modules.filter(m => m.category === 'creative')
    },
    programming: {
      title: '💻 Lập Trình',
      description: 'Học coding từ cơ bản đến nâng cao',
      modules: modules.filter(m => m.category === 'programming')
    },
    stem: {
      title: '🚀 STEM & Hardware',
      description: 'Khoa học, công nghệ và robot',
      modules: modules.filter(m => m.category === 'stem')
    },
    security: {
      title: '🔒 An Ninh & Bảo Mật',
      description: 'Cybersecurity và ethical hacking',
      modules: modules.filter(m => m.category === 'security')
    },
    science: {
      title: '🧬 Khoa Học Đời Sống',
      description: 'Biotechnology và life sciences',
      modules: modules.filter(m => m.category === 'science')
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <StructuredData data={websiteStructuredData} />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-8">
              <div className="text-6xl animate-bounce">🎓</div>
              <div className="text-6xl animate-bounce delay-100">🤖</div>
              <div className="text-6xl animate-bounce delay-200">🚀</div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                K2AI
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Nền tảng học tập thông minh
            </p>
            
            <p className="text-lg text-blue-300 mb-8 font-medium">
              Công nghệ AI dẫn lối
            </p>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Khám phá thế giới học tập hiện đại với <strong className="text-white">14 module toàn diện</strong>: 
                Từ địa lý Việt Nam, ứng dụng AI thực tế, digital marketing, financial literacy, green technology, 
                game development, AI art, cybersecurity, biotechnology đến lập trình, STEM và robotics. 
                <span className="text-blue-300"> Miễn phí và dễ tiếp cận cho mọi lứa tuổi!</span>
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  ✅ <span className="text-green-300">Hoàn toàn miễn phí</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  🎯 <span className="text-blue-300">Thực tế & ứng dụng</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  📱 <span className="text-purple-300">Tương tác & hiện đại</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modules by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {Object.entries(categories).map(([key, category]) => (
          <div key={key} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
              <p className="text-xl text-gray-300">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.modules.map((module) => (
                <Link key={module.id} href={module.href}>
                  <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {module.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {module.title}
                    </h3>
                    
                    <p className="text-lg text-blue-300 mb-4 font-medium">
                      {module.subtitle}
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {module.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">
                        {module.level}
                      </span>
                      <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">
                        ⏱️ {module.duration}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 text-blue-300 font-semibold group-hover:text-blue-200 transition-colors duration-300">
                      Khám phá ngay →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            🚀 Sẵn sàng bắt đầu hành trình học tập?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Chọn module phù hợp với bạn và bắt đầu khám phá kiến thức mới ngay hôm nay!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/city"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              🌏 Khám phá Việt Nam
            </Link>
            <Link 
              href="/ai"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              🤖 Học AI ngay
            </Link>
            <Link 
              href="/learning/digital-marketing"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              📱 Digital Marketing
            </Link>
            <Link 
              href="/learning/game-development"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              🎮 Game Development
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2025 K2AI. Nền tảng học tập thông minh, công nghệ AI dẫn lối.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/feedback" className="text-blue-400 hover:text-blue-300 transition-colors">
                📧 Phản hồi
              </Link>
              <Link href="/city" className="text-green-400 hover:text-green-300 transition-colors">
                🗺️ Bản đồ Việt Nam
              </Link>
              <Link href="/ai" className="text-purple-400 hover:text-purple-300 transition-colors">
                🤖 AI Guide
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
