import { Metadata } from 'next';
import SpaceStationBuilder3D from '@/components/practice/SpaceStationBuilder3D';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('space-station-builder-3d');

export default function SpaceStationBuilder3DPage() {
  return (
    <div className="min-h-screen">
      <SpaceStationBuilder3D />
    </div>
  );
}
