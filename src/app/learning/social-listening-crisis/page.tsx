import type { Metadata } from 'next';

import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate, {
  type ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { socialListeningLessons } from '@/data/social-listening-crisis';
import { K2Module } from '@/data/moduleNavigation';

export const metadata: Metadata = createModuleMetadata(
  'Social Listening & Crisis Management - Quản Lý Khủng Hoảng',
  'Master social listening và crisis management strategies. Học cách monitor brand reputation và handle PR crises effectively.',
  ['social listening', 'crisis management', 'brand reputation', 'pr crisis', 'social media monitoring', 'damage control', 'vietnam social media'],
  'social-listening-crisis'
);

export default function SocialListeningCrisisPage() {
  const moduleData: ModuleData = {
    id: 'social-listening-crisis',
    title: 'Social Listening & Crisis Management',
    subtitle: 'Quản lý thương hiệu & khủng hoảng truyền thông',
    description:
      'Khám phá các strategies để monitor brand reputation, detect potential crises early, và respond effectively để protect và rebuild trust trong digital landscape.',
    level: 'Nâng cao',
    duration: '16-22 giờ',
    category: 'Digital Marketing & Communication',
    primaryColor: 'red',
    gradientColors: 'from-slate-900 via-red-900 to-rose-900',
    basePath: '/learning/social-listening-crisis',
    heroImageUrl:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop',
    features: [
      'Social Media Monitoring & Analytics',
      'Crisis Detection & Early Warning Systems',
      'Reputation Management Strategies',
      'Crisis Communication Planning',
      'Damage Control & Recovery Tactics',
      'Vietnamese Market Crisis Patterns',
      'Cross-Platform Response Coordination',
      'Stakeholder Communication Management',
    ],
    icon: '🚨',
    color: 'from-red-600 to-rose-600',
    statsConfig: {
      lessons: `${socialListeningLessons.length}+ bài`,
      duration: '16-22 giờ',
      level: 'Nâng cao',
      projects: '10+ crisis scenarios',
    },
    marketData: {
      marketSize: '$13.8 Billion',
      marketNote: 'Social listening market size by 2026',
      jobGrowth: '58% Growth',
      jobNote: 'Digital PR specialist roles by 2030',
      reduction: '73% Faster',
      reductionNote: 'Crisis response time with monitoring',
      startups: '89% Companies',
      startupsNote: 'Use social listening for brand protection',
    },
    objectives: [
      'Master social listening tools và monitoring strategies',
      'Develop early crisis detection systems',
      'Create comprehensive crisis communication plans',
      'Execute effective damage control campaigns',
      'Build reputation recovery và management processes',
      'Understand Vietnamese social media crisis patterns',
    ],
    prerequisites: [
      'Experience với social media management',
      'Understanding của brand communication',
      'Basic knowledge của public relations',
      'Familiarity với analytics và monitoring tools',
    ],
    careerPaths: [
      'Crisis Communication Manager (35-60 triệu VNĐ)',
      'Social Media Reputation Specialist (28-50 triệu VNĐ)',
      'Digital PR Manager (40-70 triệu VNĐ)',
      'Brand Protection Analyst (30-55 triệu VNĐ)',
      'Community Management Lead (25-45 triệu VNĐ)',
      'Corporate Communications Director (50-90 triệu VNĐ)',
      'Social Listening Consultant (35-75 triệu VNĐ)',
      'Reputation Management Advisor (40-80 triệu VNĐ)',
    ],
    industryApplications: [
      'Corporate crisis management và PR',
      'E-commerce reputation protection',
      'Political campaign management',
      'Healthcare organization communication',
      'Financial services compliance',
      'Entertainment industry PR',
      'Tourism và hospitality reputation',
      'Food và beverage brand safety',
      'Technology company communications',
      'NGO và non-profit messaging',
    ],
    technicalHighlights: [
      {
        title: 'Monitoring Tools',
        icon: '👁️',
        items: [
          'Hootsuite Insights',
          'Sprout Social',
          'Mention',
          'Brand24',
        ],
      },
      {
        title: 'Crisis Detection',
        icon: '🚨',
        items: [
          'Alert Systems',
          'Sentiment Analysis',
          'Trend Monitoring',
          'Influencer Tracking',
        ],
      },
      {
        title: 'Response Strategy',
        icon: '💬',
        items: [
          'Message Templates',
          'Escalation Protocols',
          'Media Relations',
          'Stakeholder Communication',
        ],
      },
      {
        title: 'Recovery Tactics',
        icon: '🔄',
        items: [
          'Reputation Repair',
          'Trust Rebuilding',
          'Content Strategy',
          'Community Engagement',
        ],
      },
      {
        title: 'Vietnamese Context',
        icon: '🇻🇳',
        items: [
          'Local Platform Dynamics',
          'Cultural Sensitivities',
          'Regulatory Compliance',
          'Media Landscape',
        ],
      },
      {
        title: 'Analytics & Reporting',
        icon: '📊',
        items: [
          'Impact Measurement',
          'Recovery Tracking',
          'Performance Metrics',
          'ROI Analysis',
        ],
      },
    ],
    relatedModules: [
      K2Module.DigitalMarketing,
      K2Module.ContentCreator,
      K2Module.EthicalMarketingPurpose,
    ],
  };

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={socialListeningLessons} />
  );
}
