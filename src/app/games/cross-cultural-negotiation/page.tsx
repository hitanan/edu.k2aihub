import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import CrossCulturalNegotiation from '@/components/games/CrossCulturalNegotiation';

export const metadata: Metadata = createGameMetadata('cross-cultural-negotiation');

export default function CrossCulturalNegotiationPage() {
  return <CrossCulturalNegotiation />;
}
