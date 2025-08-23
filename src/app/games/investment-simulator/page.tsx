import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';
import InvestmentSimulatorGame from '@/components/games/individual/InvestmentSimulatorGame';

export const metadata: Metadata = {
  title: createTitle('Mô Phỏng Đầu Tư - Game Tài Chính'),
  description: createDescription('Học đầu tư thông minh qua game mô phỏng. Quản lý danh mục đầu tư, phân tích rủi ro và tối ưu hóa lợi nhuận trong môi trường thị trường thực tế.'),
  keywords: ['đầu tư', 'tài chính', 'chứng khoán', 'quản lý danh mục', 'fintech', 'game giáo dục'],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: 'Mô Phỏng Đầu Tư - Game Tài Chính',
    description: 'Master investment strategies through interactive simulation with real market scenarios.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function InvestmentSimulatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            💰 Mô Phỏng Đầu Tư
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Học cách đầu tư thông minh qua game mô phỏng thực tế. Quản lý danh mục đầu tư, phân tích rủi ro và tối ưu hóa lợi nhuận!
          </p>
        </div>
        
        <InvestmentSimulatorGame />
      </div>
    </div>
  );
}
