import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const educationModules = [
    { name: '🐍 Python', href: '/python', color: 'text-green-400' },
    { name: '🤖 Arduino', href: '/arduino', color: 'text-blue-400' },
    { name: '🔧 Robotics', href: '/robotics', color: 'text-purple-400' },
    { name: '🎨 Scratch', href: '/scratch', color: 'text-orange-400' },
  ];

  const mainPlatforms = [
    { name: '🏠 Trang Chủ', href: '/', color: 'text-gray-300' },
    { name: '🗺️ Địa Lý Việt Nam', href: '/city', color: 'text-green-400' },
    { name: '🤖 AI Của Tôi', href: '/ai', color: 'text-purple-400' },
    { name: '💬 Phản Hồi', href: '/feedback', color: 'text-blue-400' },
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Education Modules */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center">
              📚 Module Học Tập
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {educationModules.map((module) => (
                <Link
                  key={module.name}
                  href={module.href}
                  className={`${module.color} hover:text-white transition-colors duration-200 text-sm py-2 px-3 rounded-lg hover:bg-gray-800 flex items-center`}
                >
                  {module.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Main Platforms */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
              🌟 Nền Tảng Chính
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {mainPlatforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.href}
                  className={`${platform.color} hover:text-white transition-colors duration-200 text-sm py-2 px-3 rounded-lg hover:bg-gray-800 flex items-center`}
                >
                  {platform.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom section - simplified */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K2</span>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                K2AI HUB
              </span>
              <p className="text-xs text-gray-400">Nền tảng học tập thông minh</p>
            </div>
          </div>

          <div className="text-center md:text-right text-sm text-gray-400">
            <p>© {currentYear} K2AI HUB. Phát triển với ❤️ cho giáo dục Việt Nam</p>
            <p className="mt-1 text-xs">
              � Nền tảng học tập thông minh - Công nghệ AI dẫn lối
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
