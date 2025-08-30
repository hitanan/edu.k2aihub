import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { blockchainLessons, type BlockchainLesson } from '@/data/blockchain-defi';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';

// Convert BlockchainLesson to BaseLessonData
function convertToBaseLessonData(lesson: BlockchainLesson): BaseLessonData {
  return {
    id: lesson.id,
    title: lesson.title,
    description: lesson.description,
    duration: lesson.duration,
    difficulty: lesson.difficulty,
    videoUrl: lesson.videoUrl,
    imageUrl: lesson.imageUrl,
    objectives: lesson.objectives,
    prerequisites: lesson.prerequisites,
    exercises: lesson.exercises,
    realWorldApplications: lesson.realWorldApplications,
    caseStudies: lesson.caseStudies?.map((study) => ({
      title: study.title,
      organization: study.organization,
      problem: study.problem,
      solution: study.solution,
      impact: study.impact,
      innovations: study.technologies || [],
    })),
    resources: lesson.resources,
  };
}

export const metadata: Metadata = createModuleMetadata(
  'Blockchain & DeFi Technology - Công Nghệ Blockchain',
  'Master blockchain development và DeFi protocols. Smart contracts, cryptocurrency, NFT, stablecoin development với Vietnamese market focus. Solidity, Web3, regulatory compliance.',
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
  'blockchain-defi',
);

export default function BlockchainDeFiPage() {
  const moduleData = {
    id: 'blockchain-defi',
    title: 'Blockchain & DeFi Technology',
    subtitle: 'Công Nghệ Blockchain & Tài Chính Phi Tập Trung',
    description:
      'Comprehensive blockchain development education từ fundamentals đến advanced DeFi protocols. Master smart contract development, cryptocurrency systems, NFT technology, và regulatory compliance với focus đặc biệt trên Vietnamese fintech ecosystem.',
    level: 'Nâng cao',
    duration: '15-20 giờ',
    category: 'Advanced Technology',
    features: [
      'Blockchain Fundamentals và Cryptography cho secure decentralized systems',
      'Smart Contract Development với Solidity và Web3 integration',
      'DeFi Protocols: DEXs, lending, yield farming với Vietnamese market applications',
      'NFT Technology và Metaverse development cho cultural preservation',
      'Regulatory Compliance và Security best practices cho Vietnamese legal framework',
    ],
    icon: '⛓️',
    color: 'from-orange-600 to-red-600',
    heroImageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop&auto=format',
    objectives: [
      'Master blockchain architecture và cryptographic principles cho secure systems',
      'Develop production-ready smart contracts với Solidity và security best practices',
      'Build DeFi protocols: AMMs, lending platforms, yield farming strategies',
      'Create NFT platforms và metaverse applications cho Vietnamese cultural preservation',
      'Implement regulatory compliance systems cho Vietnamese cryptocurrency legal framework',
    ],
    prerequisites: [
      'Strong programming skills trong JavaScript/TypeScript hoặc Python',
      'Understanding của web development và APIs',
      'Basic knowledge của finance và economic principles',
      'Familiarity với cryptography concepts và security practices',
      'Interest trong decentralized systems và financial innovation',
    ],
    careerOutcomes: [
      'Blockchain Developer (35-80 triệu VNĐ/tháng)',
      'Smart Contract Engineer (40-90 triệu VNĐ/tháng)',
      'DeFi Protocol Developer (45-100 triệu VNĐ/tháng)',
      'Blockchain Security Auditor (50-120 triệu VNĐ/tháng)',
      'Cryptocurrency Exchange Engineer (38-85 triệu VNĐ/tháng)',
      'NFT Platform Developer (32-70 triệu VNĐ/tháng)',
      'Blockchain Product Manager (50-110 triệu VNĐ/tháng)',
    ],
    industryApplications: [
      'Cryptocurrency exchanges và digital wallet development trong Vietnam',
      'Cross-border remittance solutions cho Vietnamese overseas workers',
      'Supply chain transparency systems cho Vietnamese agriculture exports',
      'DeFi platforms serving Vietnamese SMEs và individuals',
      'NFT marketplaces preserving Vietnamese cultural heritage',
      'Government blockchain applications cho transparency và efficiency',
      'Trade finance solutions cho Vietnamese import/export businesses',
    ],
    marketDemand: {
      averageSalary: '32-120 triệu VNĐ',
      jobGrowth: '+120%',
      hireDemand: 'Cao',
    },
    relatedModules: [K2Module.AdvancedAI, K2Module.Cybersecurity, K2Module.FinancialLiteracy, K2Module.Python],
  };

  // Convert lessons to BaseLessonData format
  const convertedLessons = blockchainLessons.map(convertToBaseLessonData);

  return <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />;
}
