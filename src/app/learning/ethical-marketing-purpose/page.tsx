import type { Metadata } from 'next';

import ModulePageTemplate, { type ModuleData } from '@/components/learning/ModulePageTemplate';
import { ethicalMarketingLessons } from '@/data/ethical-marketing-purpose';
import { K2Module } from '@/data/moduleNavigation';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'Ethical Marketing & Purpose-Driven Brands - Marketing Đạo Đức',
  'Học cách xây dựng thương hiệu có mục đích cao cả và marketing strategies theo đạo đức. Tạo impact tích cực cho xã hội.',
  ['ethical marketing', 'purpose-driven brands', 'sustainable marketing', 'social impact', 'conscious branding', 'vietnam marketing ethics', 'responsible advertising', 'k2aihub'],
  'ethical-marketing-purpose'
);

export default function EthicalMarketingPurposePage() {
  const moduleData: ModuleData = {
    id: 'ethical-marketing-purpose',
    title: 'Ethical Marketing & Purpose-Driven Brands',
    subtitle: 'Marketing đạo đức & thương hiệu có mục đích',
    description:
      'Khám phá cách xây dựng thương hiệu có tác động tích cực và marketing strategies theo đạo đức. Học cách cân bằng profit với purpose để tạo sustainable business success.',
    level: 'Nâng cao',
    duration: '18-24 giờ',
    category: 'Marketing & Social Impact',
    primaryColor: 'green',
    gradientColors: 'from-slate-900 via-green-900 to-emerald-900',
    basePath: '/learning/ethical-marketing-purpose',
    heroImageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop',
    features: [
      'Purpose-Driven Brand Strategy',
      'Ethical Marketing Frameworks',
      'Social Impact Measurement',
      'Sustainable Business Models',
      'Conscious Consumer Engagement',
      'Vietnamese Social Values Integration',
      'Corporate Social Responsibility',
      'Authentic Storytelling Methods',
    ],
    icon: '🌱',
    color: 'from-green-600 to-emerald-600',
    statsConfig: {
      lessons: `${ethicalMarketingLessons.length}+ bài`,
      duration: '18-24 giờ',
      level: 'Nâng cao',
      projects: '12+ ethical campaigns',
    },
    marketData: {
      marketSize: '$15.7 Billion',
      marketNote: 'Sustainable marketing market by 2026',
      jobGrowth: '43% Growth',
      jobNote: 'Purpose-driven marketing roles by 2030',
      reduction: '67% Consumers',
      reductionNote: 'Want brands with social purpose',
      startups: '94% Millennials',
      startupsNote: 'Support purpose-driven brands',
    },
    objectives: [
      'Develop authentic purpose-driven brand strategies',
      'Implement ethical marketing frameworks và practices',
      'Measure và communicate social impact effectively',
      'Create sustainable business models balancing profit và purpose',
      'Build trust through transparent và honest communication',
      'Understand Vietnamese cultural values trong responsible marketing',
    ],
    prerequisites: [
      'Basic marketing và branding knowledge',
      'Understanding của consumer psychology',
      'Awareness of social và environmental issues',
      'Interest trong business ethics và sustainability',
    ],
    careerPaths: [
      'Purpose Marketing Manager (40-65 triệu VNĐ)',
      'Sustainability Communications Lead (35-60 triệu VNĐ)',
      'Social Impact Marketing Specialist (30-55 triệu VNĐ)',
      'CSR Communications Manager (35-65 triệu VNĐ)',
      'Ethical Brand Consultant (40-80 triệu VNĐ)',
      'Sustainable Business Strategist (45-85 triệu VNĐ)',
      'Impact Measurement Analyst (30-50 triệu VNĐ)',
      'Conscious Brand Director (50-100 triệu VNĐ)',
    ],
    industryApplications: [
      'Sustainable fashion và beauty brands',
      'Organic food và beverage companies',
      'Clean technology và renewable energy',
      'Ethical finance và banking',
      'Social enterprise marketing',
      'Non-profit organization communications',
      'Fair trade và ethical sourcing',
      'Health và wellness with purpose',
      'Educational institutions with social mission',
      'B-Corp certified companies',
    ],
    technicalHighlights: [
      {
        title: 'Purpose Strategy',
        icon: '🎯',
        items: ['Mission Definition', 'Value Alignment', 'Stakeholder Mapping', 'Impact Goals'],
      },
      {
        title: 'Ethical Frameworks',
        icon: '⚖️',
        items: ['Truth in Advertising', 'Transparency Standards', 'Privacy Protection', 'Fair Pricing'],
      },
      {
        title: 'Impact Measurement',
        icon: '📊',
        items: ['Social ROI', 'ESG Metrics', 'Community Feedback', 'Environmental Impact'],
      },
      {
        title: 'Sustainable Models',
        icon: '♻️',
        items: ['Circular Economy', 'Regenerative Business', 'Shared Value Creation', 'Long-term Thinking'],
      },
      {
        title: 'Authentic Storytelling',
        icon: '📖',
        items: ['Values-Based Narratives', 'Real Impact Stories', 'Stakeholder Voices', 'Behind-the-Scenes'],
      },
      {
        title: 'Vietnamese Context',
        icon: '🇻🇳',
        items: ['Cultural Values', 'Community Focus', 'Family Orientation', 'Harmony Principles'],
      },
    ],
    relatedModules: [K2Module.DigitalMarketing, K2Module.GreenTechnology, K2Module.ContentCreator],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={ethicalMarketingLessons} />;
}
