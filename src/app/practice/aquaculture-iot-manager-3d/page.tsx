import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import AquacultureIoTManager3D from '@/components/games/AquacultureIoTManager3D';

export const metadata: Metadata = createGameMetadata('aquaculture-iot-manager-3d');

export default function AquacultureIoTManager3DPage() {
  return <AquacultureIoTManager3D />;
}
