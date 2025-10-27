import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import InternationalBusinessSim from '@/components/practice/InternationalBusinessSim';

export const metadata: Metadata = createGameMetadata('international-business-sim');

export default function InternationalBusinessSimPage() {
  return <InternationalBusinessSim />;
}
