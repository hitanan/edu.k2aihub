import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Target,
  Heart,
  Users,
  Brain,
  Lightbulb,
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  BookOpen,
  Star,
} from 'lucide-react';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Về Chúng Tôi - Sứ Mệnh và Phương Pháp Giáo Dục'),
  description: createDescription(
    'Tìm hiểu về K2AI - nền tảng học tập thông minh với sứ mệnh cung cấp nền tảng giáo dục chất lượng cao qua công nghệ AI. Khám phá phương pháp giáo dục tiên tiến và cách tiếp cận unique của chúng tôi.',
  ),
  keywords: createKeywords([
    'về K2AI',
    'sứ mệnh giáo dục',
    'phương pháp học tập',
    'công nghệ AI giáo dục',
    'nền tảng học tập thông minh',
    'giáo dục Việt Nam',
    'học tập cá nhân hóa',
    'đổi mới giáo dục',
  ]),
  openGraph: {
    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: 'Về K2AI - Sứ Mệnh cung cấp nền tảng Giáo Dục Thông Minh',
    description:
      'Khám phá sứ mệnh, phương pháp và cách tiếp cận độc đáo của K2AI trong việc cung cấp giáo dục chất lượng cao với công nghệ AI tiên tiến.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

const AboutPage = () => {
  const stats = [
    {
      label: 'Modules Giáo Dục',
      value: '66+',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      label: 'Chủ Đề Học Tập',
      value: '100+',
      icon: <Brain className="w-6 h-6" />,
    },
    {
      label: 'Dự Án Thực Tế',
      value: '500+',
      icon: <Target className="w-6 h-6" />,
    },
    {
      label: 'Học Viên Mục Tiêu',
      value: '1M+',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Tận Tâm với Học Viên',
      description: 'Đặt nhu cầu và thành công của học viên làm trung tâm của mọi quyết định.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Đổi Mới Liên Tục',
      description: 'Luôn tiên phong trong việc áp dụng công nghệ mới và phương pháp giảng dạy tiến tiến.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Tiếp Cận Toàn Cầu',
      description: 'Kết hợp kiến thức quốc tế với bối cảnh và nhu cầu cụ thể của Việt Nam.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Cộng Đồng Học Tập',
      description: 'Xây dựng môi trường học tập hỗ trợ lẫn nhau và phát triển cùng nhau.',
      color: 'from-green-500 to-teal-500',
    },
  ];

  const challenges = [
    {
      problem: '📚 Thiếu Kiến Thức Thực Tiễn',
      solution: 'Học tập dựa trên dự án thực tế và case studies từ doanh nghiệp Việt Nam',
      impact: 'Tăng 85% khả năng ứng dụng kiến thức vào công việc',
    },
    {
      problem: '⏰ Thiếu Thời Gian Tập Trung',
      solution: 'Học tập micro-learning và mobile-first với sessions 15-30 phút',
      impact: 'Tăng 70% tỷ lệ hoàn thành khóa học',
    },
    {
      problem: '💰 Chi Phí Giáo Dục Cao',
      solution: 'Nội dung miễn phí chất lượng cao với AI cá nhân hóa',
      impact: 'Giảm 90% chi phí so với giáo dục truyền thống',
    },
    {
      problem: '🎯 Thiếu Động Lực Học Tập',
      solution: 'Gamification, progress tracking và cộng đồng học tập tích cực',
      impact: 'Tăng 60% engagement và retention',
    },
  ];

  const methodology = [
    {
      step: '01',
      title: 'Phân Tích Nhu Cầu',
      description: 'AI phân tích skill gaps và career goals để tạo learning path cá nhân hóa',
      features: ['Skill assessment tự động', 'Career goal mapping', 'Personalized curriculum'],
    },
    {
      step: '02',
      title: 'Học Tập Tương Tác',
      description: 'Kết hợp lý thuyết với practice thông qua hands-on projects và simulations',
      features: ['Interactive exercises', 'Real-world projects', 'Immediate feedback'],
    },
    {
      step: '03',
      title: 'Ứng Dụng Thực Tiễn',
      description: 'Portfolio building với industry mentorship và job placement support',
      features: ['Portfolio development', 'Industry connections', 'Career guidance'],
    },
    {
      step: '04',
      title: 'Đánh Giá & Cải Thiện',
      description: 'Continuous assessment và adaptive learning để optimize học tập hiệu quả',
      features: ['Performance analytics', 'Adaptive content', 'Skill certification'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Về{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">K2AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Nền tảng học tập thông minh với sứ mệnh <strong>cung cấp nền tảng giáo dục chất lượng cao</strong> thông
              qua công nghệ AI tiên tiến và phương pháp giảng dạy đổi mới
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#mission"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                🎯 Tìm Hiểu Sứ Mệnh
              </Link>
              <Link
                href="#methodology"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                🧠 Phương Pháp Học Tập
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">🎯 Sứ Mệnh Của Chúng Tôi</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Tạo ra một thế giới mà mọi người đều có thể tiếp cận giáo dục chất lượng cao, phù hợp với nhu cầu cá nhân
              và xu hướng công nghệ mới nhất.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tại Sao K2AI Ra Đời?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Gap Giữa Giáo Dục và Thực Tiễn</h4>
                    <p className="text-gray-600">
                      Hệ thống giáo dục truyền thống chưa theo kịp tốc độ phát triển của công nghệ và nhu cầu thị
                      trường.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Thiếu Cơ Hội Học Tập Chất Lượng</h4>
                    <p className="text-gray-600">
                      Nhiều người không có điều kiện tiếp cận giáo dục chất lượng cao do rào cản về địa lý, thời gian và
                      chi phí.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Nhu Cầu Học Tập Cá Nhân Hóa</h4>
                    <p className="text-gray-600">
                      Mỗi người có cách học, mức độ và mục tiêu khác nhau, cần giải pháp giáo dục linh hoạt và thích
                      ứng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Giải Pháp Của K2AI</h3>
              <div className="space-y-4">
                {[
                  'AI cá nhân hóa learning path theo skill và mục tiêu',
                  'Nội dung miễn phí chất lượng cao với công nghệ tiên tiến',
                  'Học tập based trên dự án thực tế và case studies',
                  'Mobile-first platform phù hợp với lối sống hiện đại',
                  'Cộng đồng học tập hỗ trợ và động viên lẫn nhau',
                  'Integration với industry để bridge gap giáo dục-việc làm',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">💎 Giá Trị Cốt Lõi</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Những nguyên tắc định hướng mọi hoạt động và quyết định của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-3xl text-white mb-6 group-hover:shadow-2xl transition-shadow duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">🎯 Giải Quyết Thách Thức Giáo Dục</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Chúng tôi nhận diện và giải quyết những khó khăn cốt lõi trong học tập của người Việt Nam
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Thách Thức</h3>
                    <p className="text-gray-700">{challenge.problem}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Giải Pháp K2AI</h3>
                    <p className="text-gray-700">{challenge.solution}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Impact Đo Được</h4>
                    <p className="text-blue-700">{challenge.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">🧠 Phương Pháp Học Tập K2AI</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Methodology 4-bước được thiết kế dựa trên research giáo dục hiện đại và AI personalization
            </p>
          </div>

          <div className="space-y-12">
            {methodology.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{step.description}</p>
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">
                        {index === 0 ? '🎯' : index === 1 ? '⚡' : index === 2 ? '🚀' : '📊'}
                      </div>
                      <p className="text-gray-600 font-medium">Bước {step.step}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bắt Đầu Hành Trình Học Tập Thông Minh</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Khám phá hơn 14 modules học tập với AI cá nhân hóa và cộng đồng học viên năng động
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🏠 Khám Phá Platform
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/ai"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              🤖 AI Của Tôi
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/feedback"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              💬 Liên Hệ & Phản Hồi
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
