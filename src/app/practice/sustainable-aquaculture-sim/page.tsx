import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import SustainableAquacultureSim from '@/components/practice/SustainableAquacultureSim';

export const metadata: Metadata = createGameMetadata('sustainable-aquaculture-sim');

export default function SustainableAquacultureSimPage() {
  return <SustainableAquacultureSim />;
}
