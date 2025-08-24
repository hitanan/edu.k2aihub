import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';
import SmartCityPlanner3D from '@/components/games/SmartCityPlanner3D';

export const metadata: Metadata = {
  title: createTitle('Smart City Planner 3D - Quy hoạch Thành phố Thông minh'),
  description: createDescription(
    'Thiết kế và quy hoạch thành phố thông minh với công nghệ IoT, giao thông xanh và hạ tầng bền vững trong môi trường 3D.',
  ),
  keywords: ['smart city', '3d planning', 'urban development', 'quy hoạch đô thị', 'thành phố thông minh', 'k2aihub'],
  openGraph: {
    title: 'Smart City Planner 3D - Quy hoạch Thành phố Thông minh',
    description: 'Thiết kế và quy hoạch thành phố thông minh với công nghệ IoT, giao thông xanh và hạ tầng bền vững',
    type: 'website',
    siteName: 'K2AiHub',
    locale: 'vi_VN',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=1200&h=600&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Smart City Planning 3D Game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('Smart City Planner 3D - Quy hoạch Thành phố Thông minh'),
    description: createDescription('Thiết kế và quy hoạch thành phố thông minh với công nghệ IoT và hạ tầng bền vững'),
    images: ['https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=1200&h=600&fit=crop'],
  },
};

export default function SmartCityPlanner3DPage() {
  return <SmartCityPlanner3D />;
}
