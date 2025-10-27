import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import SmartCityPlanner3D from '@/components/practice/SmartCityPlanner3D';

export const metadata: Metadata = createGameMetadata('smart-city-planner-3d');

export default function SmartCityPlanner3DPage() {
  return <SmartCityPlanner3D />;
}
