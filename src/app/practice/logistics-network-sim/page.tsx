import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import LogisticsNetworkSim from '@/components/games/LogisticsNetworkSim';

export const metadata: Metadata = createGameMetadata('logistics-network-sim');

export default function LogisticsNetworkSimPage() {
  return <LogisticsNetworkSim />;
}
