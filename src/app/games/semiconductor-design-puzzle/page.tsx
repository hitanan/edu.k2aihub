import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import SemiconductorDesignPuzzle from '@/components/games/SemiconductorDesignPuzzle';

export const metadata: Metadata = createGameMetadata('semiconductor-design-puzzle');

export default function SemiconductorDesignPuzzlePage() {
  return <SemiconductorDesignPuzzle />;
}
