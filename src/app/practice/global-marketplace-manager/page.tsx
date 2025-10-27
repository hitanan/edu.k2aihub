import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import GlobalMarketplaceManager from '@/components/practice/GlobalMarketplaceManager';

export const metadata: Metadata = createGameMetadata('global-marketplace-manager');

export default function GlobalMarketplaceManagerPage() {
  return <GlobalMarketplaceManager />;
}
