import type { Metadata } from 'next';

import { createModuleMetadata } from '@/utils/seo';
import Link from 'next/link';
import { 
  Briefcase, 
  Palette, 
  GraduationCap, 
  TrendingUp, 
  Sprout, 
  Code,
  ArrowRight,
  Star,
  Clock,
  Users
} from 'lucide-react';

export const metadata: Metadata = createModuleMetadata(
  'AI Của Tôi - Hướng dẫn AI thực tế',
  'Tổng quan toàn diện về 6 chuyên mục AI thực tế: Office & Work, Creative & Design, Education & Learning, Business & Marketing, Daily Life, Programming & Development.',
  ['AI thực tế', 'hướng dẫn AI', 'ChatGPT', 'Midjourney', 'AI office', 'AI creative', 'AI education', 'AI business', 'AI programming'],
  'ai'
);

const aiCategories = [
  {
    id: 'office-work',
    title: 'Office & Work',
    subtitle: 'AI cho công việc văn phòng',
    description: 'ChatGPT cho email chuyên nghiệp, Excel automation, AI presentations, và smart time management',
    icon: <Briefcase className="w-8 h-8" />,
    color: 'from-blue-600 to-indigo-600',
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    lessons: 25,
    duration: '8 giờ',
    difficulty: 'Cơ bản - Trung bình',
    href: '/learning/ai/office-work',
    highlights: [
      'Professional email writing với ChatGPT',
      'Excel automation và VBA integration',
      'AI-powered presentation creation',
      'Smart scheduling và productivity hacks'
    ]
  },
  {
    id: 'creative-design',
    title: 'Creative & Design',
    subtitle: 'AI cho sáng tạo và thiết kế',
    description: 'Midjourney mastery, Canva AI Magic Studio, AI content writing, và photo editing workflows',
    icon: <Palette className="w-8 h-8" />,
    color: 'from-purple-600 to-pink-600',
    bgColor: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
    lessons: 30,
    duration: '10 giờ',
    difficulty: 'Cơ bản - Nâng cao',
    href: '/learning/ai/creative-design',
    highlights: [
      'Midjourney prompt engineering mastery',
      'Canva AI Magic Studio workflows',
      'AI copywriting và content creation',
      'Advanced photo editing với AI tools'
    ]
  },
  {
    id: 'education-learning',
    title: 'Education & Learning',
    subtitle: 'AI cho giáo dục và học tập',
    description: 'AI tutoring, research methodologies, language learning acceleration, và document summarization',
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'from-green-600 to-emerald-600',
    bgColor: 'bg-green-500/10',
    iconColor: 'text-green-400',
    lessons: 28,
    duration: '9 giờ',
    difficulty: 'Cơ bản - Trung bình',
    href: '/learning/ai/education-learning',
    highlights: [
      'Personalized AI tutoring strategies',
      'Research acceleration với AI tools',
      'Language learning optimization',
      'Academic writing enhancement'
    ]
  },
  {
    id: 'business-marketing',
    title: 'Business & Marketing',
    subtitle: 'AI cho kinh doanh và marketing',
    description: 'Marketing automation, data analysis platforms, chatbot development, và SEO optimization',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-orange-600 to-red-600',
    bgColor: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
    lessons: 32,
    duration: '11 giờ',
    difficulty: 'Trung bình - Nâng cao',
    href: '/learning/ai/business-marketing',
    highlights: [
      'Advanced marketing automation strategies',
      'AI-powered data analysis và insights',
      'Customer service chatbot development',
      'SEO optimization với AI tools'
    ]
  },
  {
    id: 'daily-life',
    title: 'Daily Life',
    subtitle: 'AI cho cuộc sống hàng ngày',
    description: 'Personal productivity, health & fitness optimization, financial planning, và entertainment',
    icon: <Sprout className="w-8 h-8" />,
    color: 'from-teal-600 to-cyan-600',
    bgColor: 'bg-teal-500/10',
    iconColor: 'text-teal-400',
    lessons: 22,
    duration: '7 giờ',
    difficulty: 'Cơ bản',
    href: '/learning/ai/daily-life',
    highlights: [
      'Personal productivity enhancement',
      'Health và fitness optimization',
      'Smart financial planning',
      'Travel planning và entertainment'
    ]
  },
  {
    id: 'programming-dev',
    title: 'Programming & Development',
    subtitle: 'AI cho lập trình và phát triển',
    description: 'GitHub Copilot mastery, code review automation, documentation generation, và testing strategies',
    icon: <Code className="w-8 h-8" />,
    color: 'from-violet-600 to-purple-600',
    bgColor: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    lessons: 35,
    duration: '12 giờ',
    difficulty: 'Trung bình - Nâng cao',
    href: '/learning/ai/programming-dev',
    highlights: [
      'GitHub Copilot advanced techniques',
      'Automated code review workflows',
      'AI-powered documentation generation',
      'Testing strategies với AI assistance'
    ]
  }
];

const totalStats = {
  categories: aiCategories.length,
  lessons: aiCategories.reduce((sum, cat) => sum + cat.lessons, 0),
  totalHours: aiCategories.reduce((sum, cat) => sum + parseInt(cat.duration), 0),
  users: '50,000+'
};

export default function AIOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              AI Của Tôi
              <span className="block text-blue-400 text-2xl sm:text-3xl font-normal mt-2">
                Hướng dẫn AI thực tế cho mọi lĩnh vực
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Khám phá 6 chuyên mục AI comprehensive với hàng trăm use cases thực tế, 
              step-by-step tutorials, và advanced techniques cho mọi skill level.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">{totalStats.categories}</div>
                <div className="text-sm text-gray-300">Chuyên mục</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">{totalStats.lessons}</div>
                <div className="text-sm text-gray-300">Lessons</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">{totalStats.totalHours}+</div>
                <div className="text-sm text-gray-300">Giờ học</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-400">{totalStats.users}</div>
                <div className="text-sm text-gray-300">Người học</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            6 Chuyên mục AI Comprehensive
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Từ cơ bản đến advanced, mỗi chuyên mục được thiết kế với practical use cases 
            và real-world applications cho immediate impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10"
            >
              {/* Category Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`${category.bgColor} p-3 rounded-lg ${category.iconColor}`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-blue-400">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-semibold">{category.lessons}</span>
                  </div>
                  <div className="text-xs text-gray-400">Lessons</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-green-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">{category.duration}</span>
                  </div>
                  <div className="text-xs text-gray-400">Duration</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-purple-400">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-semibold">{category.difficulty.split(' - ')[0]}</span>
                  </div>
                  <div className="text-xs text-gray-400">Level</div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-semibold text-gray-200">Highlights:</h4>
                <ul className="space-y-1">
                  {category.highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white`}>
                  {category.difficulty}
                </span>
                <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="text-sm font-semibold">Khám phá</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Choose AI Của Tôi */}
      <div className="bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tại sao chọn AI Của Tôi?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Practical & Real-world</h3>
              <p className="text-gray-300">
                Mỗi lesson đều có practical use cases và real-world applications 
                để bạn apply ngay vào công việc và cuộc sống.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Step-by-step Guidance</h3>
              <p className="text-gray-300">
                Detailed tutorials với screenshots, examples, và best practices 
                từ basic đến advanced level.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Continuously Updated</h3>
              <p className="text-gray-300">
                Content được update liên tục với latest AI tools, techniques, 
                và industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sẵn sàng master AI cho mọi lĩnh vực?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Bắt đầu journey của bạn với AI Của Tôi và transform cách bạn work, create, và live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learning/ai/office-work"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              Bắt đầu với Office & Work
            </Link>
            <Link
              href="/learning/ai/creative-design"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <Palette className="w-5 h-5" />
              Khám phá Creative & Design
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
