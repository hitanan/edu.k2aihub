import type { Metadata } from 'next';

import ModulePageTemplate, {
  type ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { BlockchainLessons } from '@/data/blockchain-technology';
import { K2Module } from '@/data/moduleNavigation';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'Blockchain Technology & Development - Công Nghệ Blockchain',
  'Học công nghệ blockchain từ cơ bản đến nâng cao. Từ cryptocurrency đến smart contracts và DeFi applications.',
  ['blockchain technology', 'cryptocurrency', 'smart contracts', 'web3 development', 'defi', 'nft', 'ethereum', 'k2aihub'],
  'blockchain-technology'
);

export default function BlockchainTechnologyPage() {
  const moduleData: ModuleData = {
    id: 'blockchain-technology',
    title: 'Blockchain Technology & Development',
    subtitle: 'Công nghệ blockchain & phát triển Web3',
    description:
      'Khám phá thế giới blockchain và Web3 development. Từ cryptocurrency fundamentals đến smart contracts, DeFi protocols và NFT development.',
    level: 'Trung bình đến Nâng cao',
    duration: '20-28 giờ',
    category: 'Technology & Finance',
    primaryColor: 'amber',
    gradientColors: 'from-slate-900 via-amber-900 to-orange-900',
    basePath: '/learning/blockchain-technology',
    heroImageUrl:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop',
    features: [
      'Blockchain Fundamentals & Architecture',
      'Cryptocurrency & Digital Assets',
      'Smart Contract Development',
      'DeFi Protocols & Applications',
      'NFT Creation & Marketplace',
      'Web3 Development Stack',
      'Security & Auditing',
      'Blockchain Integration',
    ],
    icon: '⛓️',
    color: 'from-amber-600 to-orange-600',
    statsConfig: {
      lessons: `${BlockchainLessons.length}+ bài`,
      duration: '20-28 giờ',
      level: 'Trung bình đến Nâng cao',
      projects: '15+ blockchain projects',
    },
    marketData: {
      marketSize: '$163 Billion',
      marketNote: 'Global blockchain market by 2025',
      jobGrowth: '67% Growth',
      jobNote: 'Blockchain developer jobs by 2030',
      reduction: '40% Cost',
      reductionNote: 'Transaction cost reduction',
      startups: '2800+ Projects',
      startupsNote: 'Active blockchain projects worldwide',
    },
    objectives: [
      'Hiểu sâu về blockchain architecture và consensus mechanisms',
      'Phát triển smart contracts với Solidity và Ethereum',
      'Xây dựng DeFi applications và protocols',
      'Tạo và deploy NFT collections',
      'Thành thạo Web3 development stack',
      'Audit và bảo mật blockchain applications',
    ],
    prerequisites: [
      'Lập trình cơ bản (JavaScript, Python)',
      'Hiểu biết về web development',
      'Kiến thức về cryptography cơ bản',
      'Tư duy logic và giải quyết vấn đề',
    ],
    careerPaths: [
      'Blockchain Developer (30-60 triệu VNĐ)',
      'Smart Contract Developer (35-70 triệu VNĐ)',
      'DeFi Protocol Engineer (40-80 triệu VNĐ)',
      'Blockchain Security Auditor (35-65 triệu VNĐ)',
      'Cryptocurrency Analyst (25-50 triệu VNĐ)',
      'Web3 Product Manager (45-85 triệu VNĐ)',
      'Blockchain Architect (50-100 triệu VNĐ)',
      'Crypto Trading Strategist (30-120+ triệu VNĐ)',
    ],
    industryApplications: [
      'Cryptocurrency exchanges và wallets',
      'DeFi platforms và protocols',
      'NFT marketplaces và gaming',
      'Supply chain management',
      'Digital identity và authentication',
      'Real estate và property tokenization',
      'Healthcare data management',
      'Voting systems và governance',
      'Cross-border payments và remittance',
      'Carbon credits và sustainability',
    ],
    technicalHighlights: [
      {
        title: 'Core Blockchain',
        icon: '⛓️',
        items: [
          'Bitcoin & Ethereum',
          'Consensus Algorithms',
          'Cryptographic Hashing',
          'Merkle Trees',
        ],
      },
      {
        title: 'Smart Contracts',
        icon: '📝',
        items: [
          'Solidity Programming',
          'Gas Optimization',
          'Contract Patterns',
          'Testing & Deployment',
        ],
      },
      {
        title: 'DeFi Development',
        icon: '🏦',
        items: [
          'AMM Protocols',
          'Yield Farming',
          'Lending/Borrowing',
          'Governance Tokens',
        ],
      },
      {
        title: 'Web3 Stack',
        icon: '🌐',
        items: [
          'React + Web3.js',
          'IPFS Storage',
          'MetaMask Integration',
          'The Graph Protocol',
        ],
      },
      {
        title: 'Security & Auditing',
        icon: '🔒',
        items: [
          'Smart Contract Security',
          'Vulnerability Testing',
          'Code Auditing',
          'Best Practices',
        ],
      },
      {
        title: 'NFT & Gaming',
        icon: '🎮',
        items: [
          'ERC-721/1155',
          'NFT Marketplaces',
          'GameFi Development',
          'Metaverse Integration',
        ],
      },
    ],
    relatedModules: [
      K2Module.BlockchainDeFi,
      K2Module.FinancialLiteracy,
      K2Module.Cybersecurity,
    ],
  };

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={BlockchainLessons} />
  );
}
