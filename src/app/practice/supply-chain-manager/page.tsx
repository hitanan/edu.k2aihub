import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import SupplyChainManager from '@/components/practice/SupplyChainManager';

export const metadata: Metadata = createGameMetadata('supply-chain-manager');

export default function SupplyChainManagerPage() {
  return <SupplyChainManager />;
}
