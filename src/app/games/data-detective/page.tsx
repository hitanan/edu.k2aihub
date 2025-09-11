import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import DataDetective from '@/components/games/DataDetective';

export const metadata: Metadata = createGameMetadata('data-detective');

export default function DataDetectivePage() {
  return <DataDetective />;
}
