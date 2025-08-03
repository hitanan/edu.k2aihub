import React from 'react';
import Link from 'next/link';
import { Mail, Heart, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const modulesByCategory = [
    {
      title: 'Foundation Level',
      icon: '🌟',
      color: 'text-blue-400',
      modules: [
        { name: 'Địa Lý Việt Nam', href: '/city', icon: '🌏' },
        { name: 'AI Của Tôi', href: '/ai', icon: '🤖' },
      ]
    },
    {
      title: 'Professional Skills',
      icon: '💼',
      color: 'text-purple-400',
      modules: [
        { name: 'Digital Marketing', href: '/learning/digital-marketing', icon: '📱' },
        { name: 'Financial Literacy', href: '/learning/financial-literacy', icon: '💰' },
        { name: 'Green Technology', href: '/learning/green-technology', icon: '🌱' },
      ]
    },
    {
      title: 'Creative & Technology',
      icon: '🎨',
      color: 'text-pink-400',
      modules: [
        { name: 'Game Development', href: '/learning/game-development', icon: '🎮' },
        { name: 'AI Art & Creative Tech', href: '/learning/ai-art-creative-tech', icon: '🎨' },
      ]
    },
    {
      title: 'Security & Science',
      icon: '🔬',
      color: 'text-emerald-400',
      modules: [
        { name: 'Cybersecurity', href: '/learning/cybersecurity', icon: '🔒' },
        { name: 'Biotechnology', href: '/learning/biotechnology', icon: '🧬' },
      ]
    },
    {
      title: 'Programming',
      icon: '💻',
      color: 'text-cyan-400',
      modules: [
        { name: 'Python Programming', href: '/learning/python', icon: '🐍' },
        { name: 'Arduino & IoT', href: '/learning/arduino', icon: '⚡' },
        { name: 'Robotics', href: '/learning/robotics', icon: '🤖' },
        { name: 'Scratch Programming', href: '/learning/scratch', icon: '🎯' },
      ]
    },
    {
      title: 'STEM Foundation',
      icon: '🔬',
      color: 'text-orange-400',
      modules: [
        { name: 'STEM Education', href: '/learning/stem', icon: '🔬' },
        { name: 'Mental Health Tech', href: '/learning/mental-health-tech', icon: '🧠' },
      ]
    }
  ];

  const quickLinks = [
    { name: 'Trang Chủ', href: '/', icon: '🏠' },
    { name: 'Phản Hồi', href: '/feedback', icon: '💬' },
    { name: 'Về Chúng Tôi', href: '/about', icon: 'ℹ️' },
    { name: 'Liên Hệ', href: '/contact', icon: '📧' },
  ];

  const stats = [
    { label: 'Learning Modules', value: '14+', icon: '📚' },
    { label: 'Interactive Lessons', value: '100+', icon: '🎯' },
    { label: 'Real Projects', value: '50+', icon: '🚀' },
    { label: 'Study Hours', value: '200+', icon: '⏰' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Top section - Brand and stats */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            {/* Brand */}
            <div className="mb-8 lg:mb-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-lg">K2</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    K2AI
                  </h2>
                  <p className="text-gray-400 text-sm">Nền tảng học tập thông minh, Công nghệ AI dẫn lối</p>
                </div>
              </div>
              <p className="text-gray-300 max-w-md text-sm leading-relaxed">
                Nền tảng giáo dục toàn diện với 14+ module chuyên sâu, từ cơ bản đến nâng cao, 
                giúp bạn master các kỹ năng cần thiết cho tương lai công nghệ.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content - Module links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {modulesByCategory.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className={`text-lg font-semibold ${category.color} flex items-center space-x-2`}>
                <span className="text-xl">{category.icon}</span>
                <span>{category.title}</span>
              </h3>
              <div className="space-y-2">
                {category.modules.map((module) => (
                  <Link
                    key={module.name}
                    href={module.href}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      {module.icon}
                    </span>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                      {module.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center space-x-2">
            <span>⚡</span>
            <span>Quick Links</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center space-x-2 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </span>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start space-x-2">
                <span>© {currentYear} K2AI - Phát triển với</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>cho giáo dục Việt Nam</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Nền tảng học tập thông minh - Công nghệ AI dẫn lối
              </p>
            </div>

            {/* Social/Contact */}
            <div className="flex items-center space-x-4">
              <Link
                href="/feedback"
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Liên hệ</span>
              </Link>
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
