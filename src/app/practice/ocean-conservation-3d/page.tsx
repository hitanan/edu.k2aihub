import { Metadata } from 'next';
import OceanConservation3D from '@/components/practice/OceanConservation3D';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('ocean-conservation-3d');

export default function OceanConservation3DPage() {
  return (
    <div className="min-h-screen">
      <OceanConservation3D />
    </div>
  );
}
