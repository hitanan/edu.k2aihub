import type { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import RobotNavigation3DPage from './RobotNavigation3DPage';

export const metadata: Metadata = createGameMetadata('robot-navigation-3d');

export default function RobotNavigation3DGamePage() {
  return <RobotNavigation3DPage />;
}
