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
  openGraph: {
    title: 'Hồ Sơ Học Tập - Thống Kê Tiến Độ | K2AiHub',
    description:
      'Xem thống kê học tập chi tiết và thành tích đạt được trên K2AiHub',
    type: 'profile',
  },
};

export default function ProfilePage() {
  return <ProfilePageClient />;
}
