import type { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';
import CityPageClient from './CityPageClient';

export const metadata: Metadata = {
  title: createTitle('34 Tỉnh Thành Việt Nam - Khám phá Địa lý với Bản đồ Tương tác'),
  description: createDescription(
    'Khám phá 34 tỉnh thành Việt Nam qua bản đồ tương tác thông minh. Tìm hiểu địa lý, văn hóa, lịch sử các vùng miền với công nghệ AI.',
  ),
  keywords: [
    '34 tỉnh thành Việt Nam',
    'bản đồ việt nam',
    'địa lý việt nam',
    'tỉnh thành việt nam',
    'bản đồ tương tác',
    'địa lý tương tác',
    'học địa lý',
    'K2AI',
    'giáo dục địa lý',
  ],
  openGraph: {
    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: createTitle('34 Tỉnh Thành Việt Nam - Khám phá Địa lý với Bản đồ Tương tác'),
    description:
      'Khám phá 34 tỉnh thành Việt Nam qua bản đồ tương tác thông minh. Tìm hiểu địa lý, văn hóa, lịch sử các vùng miền với công nghệ AI.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function CityPage() {
  return <CityPageClient />;
}
