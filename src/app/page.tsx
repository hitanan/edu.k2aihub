import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import ClientOnly from '@/components/ClientOnly';
import { LastVisitCard, LearningRecommendations, PageTracker } from '@/components/gamification/VisitTracker';
import { ProgressDashboard } from '@/components/gamification/LearningProgress';
import { EducationalGamesShowcase } from '@/components/games/EducationalGames';
import { createTitle, createDescription } from '@/utils/seo';
import { moduleStats } from '@/utils/moduleStats';

export const metadata: Metadata = {
  title: createTitle('Nền tảng học tập thông minh, Công nghệ AI dẫn lối'),
  description: createDescription(
    'K2AI - Nền tảng giáo dục tương tác miễn phí với AI, giúp bạn nắm vững kiến thức từ cơ bản đến nâng cao. 64+ modules học tập chất lượng cao.',
  ),
  keywords: [
    'K2AI',
    'nền tảng học tập',
    'giáo dục AI',
    'học trực tuyến',
    'địa lý Việt Nam',
    'AI thực tế',
    'lập trình',
    'miễn phí',
    'digital marketing',
    'cybersecurity',
    'biotechnology',
    'STEM',
  ],
  openGraph: {
    title: 'K2AI - Nền tảng học tập thông minh, Công nghệ AI dẫn lối',
    description: 'Nền tảng giáo dục tương tác miễn phí với 64+ modules học tập chất lượng cao từ cơ bản đến nâng cao.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K2AI - Nền tảng học tập thông minh',
    description: 'Học tập miễn phí với AI - 64+ modules chất lượng cao',
  },
};

export default function HomePage() {
  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'K2AI',
    description: 'Nền tảng học tập thông minh với công nghệ AI',
    url: 'https://k2aihub.github.io',
    logo: 'https://k2aihub.github.io/logo.png',
    foundingDate: '2025',
    hasCourse: [
      {
        '@type': 'Course',
        name: 'Địa Lý Việt Nam',
        description: 'Interactive Vietnam geography with 34 provinces',
      },
      {
        '@type': 'Course',
        name: 'AI Của Tôi',
        description: 'Practical AI applications for daily life',
      },
    ],
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
      highlight: 'Phổ biến nhất',
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
      highlight: 'Xu hướng 2025',
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
      highlight: 'Hot 2025',
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
      highlight: 'Quan trọng',
    },
  ];

  // Learning paths for different student types
  const learningPaths = [
    {
      title: 'Học Sinh THPT',
      subtitle: 'Chuẩn bị tương lai',
      description:
        'Lộ trình học phù hợp với học sinh trung học, tập trung vào kỹ năng cơ bản và định hướng nghề nghiệp',
      modules: ['🌏 Địa Lý VN', '🤖 AI cơ bản', '🔬 STEM', '🎨 Scratch'],
      color: 'from-green-400 to-blue-400',
      icon: '📚',
      href: '/learning?category=stem',
    },
    {
      title: 'Sinh Viên',
      subtitle: 'Kỹ năng thực tế',
      description: 'Các khóa học nâng cao giúp sinh viên có lợi thế trong tìm việc và phát triển sự nghiệp',
      modules: ['📱 Digital Marketing', '💰 Tài chính', '🎮 Game Dev', '🔒 Security'],
      color: 'from-purple-400 to-pink-400',
      icon: '🎓',
      href: '/learning?category=professional',
    },
    {
      title: 'Người Đi Làm',
      subtitle: 'Nâng cao nghề nghiệp',
      description: 'Học thêm kỹ năng mới để thăng tiến trong công việc hoặc chuyển đổi nghề nghiệp',
      modules: ['🚀 Khởi nghiệp', '🧬 Biotech', '🌱 Green Tech', '💻 Python'],
      color: 'from-orange-400 to-red-400',
      icon: '💼',
      href: '/learning?category=trending',
    },
  ];

  // Stats to show impact
  const stats = [
    { number: `${moduleStats.totalModules}+`, label: 'Learning Modules', icon: '📚' },
    { number: `${moduleStats.totalLessons}+`, label: 'Bài Học Tương Tác', icon: '🎯' },
    { number: `${moduleStats.totalHours}+`, label: 'Giờ Học Chất Lượng', icon: '⏰' },
    { number: '100%', label: 'Miễn Phí', icon: '✨' },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <StructuredData data={structuredData} />

      {/* Hero Section - Dramatic neon-tech design */}
      <section className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-black py-20">
        {/* Animated cyber grid background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-violet-500/10"></div>
          {/* Animated floating elements */}
          <div className="absolute top-20 left-10 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>

          {/* Cyber grid lines */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-violet-400/50 to-transparent"></div>
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-400/50 to-transparent"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex items-center min-h-screen">
          <div className="w-full">
            {/* Glitch-style title */}
            <div className="relative mb-8">
              <h1 className="text-5xl md:text-8xl font-black text-white mb-4 relative">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent animate-pulse">
                  K2AI
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent opacity-75 animate-ping">
                  K2AI
                </div>
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-6">
                <span className="text-emerald-400">Tương Lai</span> •<span className="text-cyan-400">Học Tập</span> •
                <span className="text-violet-400">Thông Minh</span>
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Khám phá thế giới học tập <span className="text-emerald-400 font-bold">không giới hạn</span> với
              <span className="text-cyan-400 font-bold"> công nghệ AI tiên tiến</span> -
              <span className="text-violet-400 font-bold">hoàn toàn miễn phí</span>
            </p>

            {/* Neo-tech Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-300 group-hover:scale-105">
                    <div className="text-5xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
                    <div className="text-3xl font-black text-emerald-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-emerald-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              ))}
            </div>

            {/* Action buttons with neon effects */}
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#featured-modules"
                className="relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-black font-black">🚀 BẮT ĐẦU HỌC NGAY</span>
              </a>
              <a
                href="#learning-paths"
                className="relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden border-2 border-violet-400"
              >
                <div className="absolute inset-0 bg-violet-400/10 rounded-2xl"></div>
                <div className="absolute inset-0 bg-violet-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-violet-400 font-black">🗺️ XEM LỘ TRÌNH</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* User Progress & Gamification Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Last Visit & Recommendations */}
            <div>
              <ClientOnly
                fallback={
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6 animate-pulse">
                    <div className="h-24 bg-white/10 rounded"></div>
                  </div>
                }
              >
                <LastVisitCard />
                <LearningRecommendations />
              </ClientOnly>
            </div>

            {/* Progress Dashboard */}
            <div>
              <ClientOnly
                fallback={
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 animate-pulse">
                    <div className="h-32 bg-white/10 rounded"></div>
                  </div>
                }
              >
                <ProgressDashboard />
              </ClientOnly>
            </div>
          </div>

          {/* Educational Games Showcase */}
          <ClientOnly
            fallback={
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6 animate-pulse">
                <div className="h-40 bg-white/10 rounded"></div>
              </div>
            }
          >
            <EducationalGamesShowcase limit={30} randomize={true} />
          </ClientOnly>
        </div>
      </section>

      {/* Page Tracker */}
      <ClientOnly>
        <PageTracker path="/" title="K2AI - Trang chủ" moduleType="learning" />
      </ClientOnly>

      {/* Featured Modules - Cyber-punk card design */}
      <section id="featured-modules" className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-black">
                KHÓA HỌC
              </span>
              <span className="block text-violet-400 mt-2 font-black">NỔI BẬT</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Khóa học được thiết kế với công nghệ tiên tiến, cập nhật liên tục theo xu hướng thị trường
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredModules.map((module) => (
              <Link key={module.id} href={module.href} className="group relative">
                <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 overflow-hidden min-h-[420px]">
                  {/* Neon highlight badge */}
                  <div className="absolute -top-1 left-6 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-rose-500/30 z-10">
                    {module.highlight}
                  </div>

                  {/* Cyber glow icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl mb-6 mt-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30`}
                  >
                    {module.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors leading-tight">
                    {module.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed min-h-[60px]">{module.description}</p>

                  <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                    <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 font-bold text-xs">
                      {module.difficulty}
                    </span>
                    <span className="text-violet-300 font-bold text-xs">{module.time}</span>
                  </div>

                  <div className="text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors flex items-center mt-auto">
                    <span>HỌC NGAY</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-violet-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths - Matrix-style design */}
      <section id="learning-paths" className="py-20 bg-gradient-to-br from-black via-slate-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent font-black">
                LỘ TRÌNH
              </span>
              <span className="block text-emerald-400 mt-2 font-black">DÀNH CHO BẠN</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tùy chỉnh hành trình học tập phù hợp với mục tiêu và đam mê cá nhân
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <Link key={index} href={path.href} className="group relative">
                <div className="relative bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 hover:border-violet-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${path.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-violet-500/30`}
                  >
                    {path.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-lg text-rose-300 mb-4 font-bold">{path.subtitle}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{path.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {path.modules.map((module, idx) => (
                      <span
                        key={idx}
                        className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm border border-violet-500/30 font-bold"
                      >
                        {module}
                      </span>
                    ))}
                  </div>

                  <div className="text-emerald-400 font-bold group-hover:text-emerald-300 transition-colors flex items-center">
                    <span>KHÁM PHÁ LỘ TRÌNH</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>

                  {/* Matrix rain effect hint */}
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Futuristic finale */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-violet-900/20 relative overflow-hidden">
        {/* Cyber particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-violet-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-rose-400 rounded-full animate-ping"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl p-12 border border-emerald-400/30 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              🎯{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent font-black">
                THAY ĐỔI TƯƠNG LAI
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Gia nhập cộng đồng học tập <span className="text-emerald-400 font-bold">tiên phong</span> và
              <span className="text-violet-400 font-bold"> định hình tương lai</span> của chính bạn
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/city"
                className="relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden border-2 border-emerald-400"
              >
                <div className="absolute inset-0 bg-emerald-400/10 rounded-2xl"></div>
                <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-black font-black">🌏 KHÁM PHÁ VIỆT NAM</span>
              </Link>
              <Link
                href="/ai"
                className="relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-black font-black">🤖 HỌC AI NGAY</span>
              </Link>
              <Link
                href="/learning"
                className="relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden border-2 border-violet-400"
              >
                <div className="absolute inset-0 bg-violet-400/10 rounded-2xl"></div>
                <div className="absolute inset-0 bg-violet-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-violet-400 font-black">📚 TẤT CẢ KHÓA HỌC</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
