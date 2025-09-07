import { ModuleData } from '@/types';
import { K2Module } from '@/data/moduleNavigation';

export const genZMarketingModuleData: ModuleData = {
  id: 'genz-marketing',
  title: 'Gen Z Marketing & Authentic Branding',
  subtitle: 'Marketing cho thế hệ Gen Z',
  description: 'Hiểu sâu về tâm lý Gen Z và develop authentic marketing strategies resonate với thế hệ digital natives. Course này sẽ teach psychology-driven approaches, inclusive messaging và purpose-driven brand activism.',
  level: 'Trung bình',
  duration: '8-9 giờ',
  category: 'Marketing Psychology & Brand Strategy',
  features: [
    'Gen Z Psychology & Behavior Analysis từ research data',
    'Inclusive & Diverse Messaging cho authentic connection',
    'Purpose-Driven Brand Activism với social impact',
    'Authenticity Framework Development cho long-term trust'
  ],
  icon: '🎯',
  color: 'cyan',
  heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
  objectives: [
    'Understand Gen Z psychology và decision-making patterns',
    'Develop inclusive marketing messages với diverse representation',
    'Create purpose-driven campaigns với authentic social impact',
    'Build authenticity framework cho sustainable brand relationships'
  ],
  prerequisites: [
    'Basic marketing knowledge và digital platforms familiarity',
    'Understanding of social media platforms used by Gen Z',
    'Cultural sensitivity awareness và open mindset',
    'Commitment to ethical marketing practices'
  ],
  careerOutcomes: [
    'Gen Z Marketing Specialist với authentic brand expertise',
    'Inclusive Marketing Manager focused trên diversity',
    'Brand Purpose Strategist với social impact focus',
    'Digital Marketing Consultant cho Gen Z engagement'
  ],
  industryApplications: [
    'Fashion và beauty brands targeting young consumers',
    'Tech companies developing products for Gen Z',
    'Social impact organizations và NGOs',
    'Entertainment industry và media companies'
  ],
  marketDemand: {
    averageSalary: '22-48 triệu VNĐ',
    jobGrowth: '+32%',
    hireDemand: 'Cao'
  },
  relatedModules: [
    K2Module.EthicalMarketingPurpose,
    K2Module.MicroInfluencerEconomy,
    K2Module.DigitalMarketing,
    K2Module.ContentCreator
  ]
};
