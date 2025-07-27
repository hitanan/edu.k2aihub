import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Nền Tảng',
      links: [
        { name: 'Trang Chủ', href: '/' },
        { name: 'Địa Lý Việt Nam', href: '/city' },
        { name: 'AI Của Tôi', href: '/ai' },
        { name: 'Phản Hồi', href: '/feedback' },
      ],
    },
    {
      title: 'Địa Lý Việt Nam',
      links: [
        { name: '34 Tỉnh Thành', href: '/city' },
        { name: 'Vùng Bắc Bộ', href: '/city?region=Bắc Bộ' },
        { name: 'Vùng Trung Bộ', href: '/city?region=Trung Bộ' },
        { name: 'Vùng Nam Bộ', href: '/city?region=Nam Bộ' },
      ],
    },
    {
      title: 'AI Của Tôi',
      links: [
        { name: 'Văn Phòng & Công Việc', href: '/ai/office-work' },
        { name: 'Sáng Tạo & Thiết Kế', href: '/ai/creative-design' },
        { name: 'Giáo Dục & Học Tập', href: '/ai/education-learning' },
        { name: 'Kinh Doanh & Marketing', href: '/ai/business-marketing' },
      ],
    },
    {
      title: 'Liên Hệ',
      links: [
        { name: 'Gửi Phản Hồi', href: '/feedback' },
        { name: 'Email', href: 'mailto:jobtimeseo@gmail.com' },
        { name: 'GitHub', href: 'https://github.com/phamthainb/k2aihub' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K2</span>
            </div>
            <span className="text-xl font-bold">AI HUB</span>
          </div>

          <div className="text-center md:text-right text-sm text-gray-400">
            <p>© {currentYear} K2 AI HUB. Tất cả quyền được bảo lưu.</p>
            <p className="mt-1">
              Nền tảng thông tin tương tác về địa lý Việt Nam và AI, ..
            </p>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>
            Dữ liệu địa lý được cập nhật theo{' '}
            <Link
              href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              sáp nhập tỉnh thành 2025
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
