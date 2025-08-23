import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';
import AquacultureIoTManager3D from '@/components/games/AquacultureIoTManager3D';

export const metadata: Metadata = {
  title: createTitle('Aquaculture IoT Manager 3D - Quản lý Nuôi trồng Thủy sản IoT'),
  description: createDescription(
    'Quản lý hệ thống nuôi trồng thủy sản thông minh với IoT sensors trong môi trường 3D. Theo dõi chất lượng nước, cá và tối ưu hóa sản xuất.'
  ),
  keywords: ['aquaculture', 'iot', '3d game', 'nuôi trồng thủy sản', 'smart farming', 'k2aihub'],
  openGraph: {
    title: createTitle('Aquaculture IoT Manager 3D - Quản lý Nuôi trồng Thủy sản IoT'),
    description: createDescription(
      'Quản lý hệ thống nuôi trồng thủy sản thông minh với IoT sensors trong môi trường 3D'
    ),
    type: 'website',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',
    locale: 'vi_VN',
    url: 'https://k2aihub.com/games/aquaculture-iot-manager-3d',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=600&fit=crop',
        width: 1200,
        height: 600,
        alt: 'Aquaculture IoT Manager 3D - K2AiHub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('Aquaculture IoT Manager 3D - Quản lý Nuôi trồng Thủy sản IoT'),
    description: createDescription(
      'Quản lý hệ thống nuôi trồng thủy sản thông minh với IoT sensors trong môi trường 3D'
    ),
    images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=600&fit=crop'],
  },
};

export default function AquacultureIoTManager3DPage() {
  return <AquacultureIoTManager3D />;
}