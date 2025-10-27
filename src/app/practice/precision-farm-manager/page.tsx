import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import PrecisionFarmManager from '@/components/practice/PrecisionFarmManager';

export const metadata: Metadata = createGameMetadata('precision-farm-manager');

export default function PrecisionFarmManagerPage() {
  return <PrecisionFarmManager />;
}
