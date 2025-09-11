import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import CareerDevelopmentVirtualMentor3D from '@/components/games/CareerDevelopmentVirtualMentor3D';

export const metadata: Metadata = createGameMetadata('career-development-virtual-mentor-3d');

export default function CareerDevelopmentVirtualMentor3DPage() {
  return <CareerDevelopmentVirtualMentor3D />;
}
