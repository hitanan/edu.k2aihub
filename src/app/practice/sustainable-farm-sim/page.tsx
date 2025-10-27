import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import SustainableFarmSim from '@/components/practice/SustainableFarmSim';

export const metadata: Metadata = createGameMetadata('sustainable-farm-sim');

export default function SustainableFarmSimPage() {
  return <SustainableFarmSim />;
}
