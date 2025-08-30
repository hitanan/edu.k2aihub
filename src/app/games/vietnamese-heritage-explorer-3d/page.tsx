import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import VietnameseHeritageExplorer3D from '@/components/games/VietnameseHeritageExplorer3D';

export const metadata: Metadata = createGameMetadata('vietnamese-heritage-explorer-3d');

export default function VietnameseHeritageExplorer3DPage() {
  return <VietnameseHeritageExplorer3D />;
}
