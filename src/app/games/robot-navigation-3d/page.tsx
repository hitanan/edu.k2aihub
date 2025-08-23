import type { Metadata } from 'next';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import RobotNavigation3DPage from './RobotNavigation3DPage';

export const metadata: Metadata = {
  title: createTitle('Robot Navigation 3D - Thế giới khối 3D với AI dẫn đường'),
  description: createDescription(
    'Khám phá thế giới khối 3D với robot thông minh. Học thuật toán A*, pathfinding và điều hướng trong không gian 3D tương tác với Three.js và WebGL.',
  ),
  keywords: createKeywords([
    'robot navigation 3d',
    'thuật toán A*',
    'pathfinding 3d',
    'three.js',
    'webgl',
    'minecraft inspired',
    'block world',
    'ai pathfinding',
    'robotics',
    '3d game development',
  ]),
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: 'Robot Navigation 3D - Thế giới khối 3D với AI dẫn đường',
    description:
      'Khám phá thế giới khối 3D với robot thông minh. Học thuật toán A*, pathfinding và điều hướng trong không gian 3D tương tác.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function RobotNavigation3DGamePage() {
  return <RobotNavigation3DPage />;
}
