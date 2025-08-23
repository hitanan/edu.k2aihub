import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';
import ProfilePageClient from './ProfilePageClient';

export const metadata: Metadata = {
  title: createTitle('Hồ Sơ Học Tập - Thống Kê Tiến Độ'),
  description: createDescription(
    'Xem thống kê học tập chi tiết, thành tích đạt được, và tiến độ cá nhân trên nền tảng K2AiHub. Theo dõi điểm số, chuỗi ngày học và các badge đã mở khóa.',
  ),
  keywords: [
    'hồ sơ',
    'thống kê học tập',
    'tiến độ',
    'thành tích',
    'K2AI',
    'học tập cá nhân',
  ],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: 'Hồ Sơ Học Tập - Thống Kê Tiến Độ | K2AiHub',
    description:
      'Xem thống kê học tập chi tiết và thành tích đạt được trên K2AiHub',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function ProfilePage() {
  return <ProfilePageClient />;
}
