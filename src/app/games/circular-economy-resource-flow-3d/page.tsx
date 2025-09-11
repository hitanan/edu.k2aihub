import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import CircularEconomyResourceFlow3D from '@/components/games/CircularEconomyResourceFlow3D';

export const metadata: Metadata = createGameMetadata('circular-economy-resource-flow-3d');

export default function CircularEconomyResourceFlow3DPage() {
  return <CircularEconomyResourceFlow3D />;
}
