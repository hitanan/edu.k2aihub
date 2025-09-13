import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { blockchainLessons, blockchainModuleData } from '@/data/modules/blockchain-technology';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'Công nghệ Blockchain & Phát triển Web3',
  'Khám phá thế giới blockchain và Web3. Từ nền tảng tiền điện tử đến hợp đồng thông minh, ứng dụng DeFi và phát triển NFT.',
  ['công nghệ blockchain', 'tiền điện tử', 'hợp đồng thông minh', 'phát triển web3', 'DeFi', 'NFT', 'Ethereum', 'K2AI'],
  'blockchain-technology',
);

export default function BlockchainTechnologyPage() {
  return <ModulePageTemplate moduleData={blockchainModuleData} lessons={blockchainLessons} />;
}
