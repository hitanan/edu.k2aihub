import { ModuleNavigation } from '@/types';

export const blockchainTechnologyModuleData: ModuleNavigation = {
  id: 'blockchain-technology',
  title: 'Blockchain Technology',
  subtitle: 'Công nghệ chuỗi khối',
  description: 'Học blockchain từ fundamentals đến smart contracts và DeFi applications',
  category: ['professional', 'programming'],
  icon: '⛓️',
  color: 'from-orange-600 to-yellow-600',
  totalDuration: '16-20 giờ',
  difficulty: 'Trung bình đến Nâng cao',
  level: 'Trung bình',
  duration: '16-20 giờ',
  href: '/learning/blockchain-technology',
  features: ['Blockchain Fundamentals', 'Smart Contracts', 'DeFi Protocols', 'Enterprise Applications'],
  tags: ['blockchain', 'smart contracts', 'defi', 'ethereum'],
  prerequisites: [
    'Programming experience (JavaScript/Solidity)',
    'Basic cryptography understanding',
    'Web development knowledge',
    'Financial concepts awareness',
  ],
  lessons: [
    {
      id: 'blockchain-fundamentals',
      title: 'Blockchain Fundamentals & Architecture',
      duration: '180 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'smart-contracts-development',
      title: 'Smart Contracts Development',
      duration: '200 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'defi-protocols',
      title: 'DeFi Protocols & Applications',
      duration: '180 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'enterprise-blockchain',
      title: 'Enterprise Blockchain Solutions',
      duration: '160 phút',
      difficulty: 'Trung bình',
    },
  ],
};
