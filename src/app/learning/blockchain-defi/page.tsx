import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { blockchainLessons } from '@/data/blockchain-defi';
import { K2Module } from '@/data/k2-modules';
import type { ModuleData } from '@/types';
import { createModuleMetadata } from '@/utils/seo';

export const blockchainDeFiModuleData: ModuleData = {
  id: 'blockchain-defi',
  title: 'Blockchain & DeFi',
  subtitle: 'Từ nền tảng đến tài chính phi tập trung và NFT',
  description:
    'Khám phá thế giới của công nghệ blockchain, từ các nguyên tắc cơ bản về tiền điện tử đến các ứng dụng phức tạp trong Tài chính Phi tập trung (DeFi) và thế giới của NFT. Khóa học này cung cấp kiến thức toàn diện và kỹ năng thực hành để bạn có thể xây dựng và đổi mới trong nền kinh tế số.',
  level: 'Nâng cao',
  duration: '25-30 giờ',
  category: 'Programming & Development',
  primaryColor: 'green',
  gradientColors: 'from-green-600 to-emerald-600',
  color: 'green',
  heroImageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop',
  icon: '🔗',
  features: [
    'Hiểu sâu về cơ chế hoạt động của blockchain',
    'Lập trình hợp đồng thông minh với Solidity',
    'Xây dựng ứng dụng phi tập trung (dApps)',
    'Phân tích và áp dụng các giao thức DeFi',
  ],
  objectives: [
    'Nắm vững các khái niệm cơ bản và nâng cao của công nghệ blockchain.',
    'Phát triển, kiểm thử và triển khai hợp đồng thông minh trên nền tảng Ethereum.',
    'Hiểu và phân tích các giao thức DeFi phổ biến như AMM, lending, và yield farming.',
    'Tạo và quản lý NFT, hiểu rõ các tiêu chuẩn và ứng dụng của chúng.',
    'Nhận thức về các vấn đề bảo mật và quy định pháp lý trong không gian blockchain.',
  ],
  prerequisites: [
    'Kiến thức vững chắc về lập trình (Python, JavaScript được ưu tiên).',
    'Hiểu biết cơ bản về cấu trúc dữ liệu và thuật toán.',
    'Có kiến thức nền tảng về tài chính là một lợi thế.',
  ],
  careerOutcomes: [
    'Kỹ sư Blockchain',
    'Nhà phát triển Hợp đồng thông minh',
    'Chuyên gia phân tích DeFi',
    'Nhà phát triển dApp',
    'Chuyên gia tư vấn công nghệ Blockchain',
  ],
  industryApplications: [
    'Tài chính phi tập trung (DeFi)',
    'Chuỗi cung ứng và Logistics',
    'Quản lý danh tính số',
    'Bầu cử và Quản trị',
    'Nghệ thuật số và Sưu tầm (NFT)',
  ],
  marketDemand: {
    averageSalary: '30-60 triệu VNĐ/tháng',
    jobGrowth: '+50%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.Cybersecurity, K2Module.AdvancedAI, K2Module.AIApplications],
};

export const metadata: Metadata = createModuleMetadata(
  blockchainDeFiModuleData.title,
  blockchainDeFiModuleData.description,
  [
    'blockchain',
    'defi',
    'smart contracts',
    'cryptocurrency',
    'nft',
    'solidity',
    'web3',
    'fintech',
    'vietnam blockchain',
    'digital currency',
    'K2AI',
  ],
  blockchainDeFiModuleData.id,
);

export default function BlockchainPage() {
  return <ModulePageTemplate lessons={blockchainLessons} moduleData={blockchainDeFiModuleData} />;
}
