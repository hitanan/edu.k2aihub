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
  openGraph: {
    title: 'Robot Navigation 3D - Thế giới khối 3D với AI dẫn đường',
    description:
      'Khám phá thế giới khối 3D với robot thông minh. Học thuật toán A*, pathfinding và điều hướng trong không gian 3D tương tác.',
    type: 'website',
  },
};

export default function RobotNavigation3DGamePage() {
  return <RobotNavigation3DPage />;
}
