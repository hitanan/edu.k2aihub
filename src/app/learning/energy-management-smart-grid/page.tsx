import type { Metadata } from 'next';
import ModulePageTemplate, {
  type ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { energyManagementLessons } from '@/data/energy-management-smart-grid';
import { K2Module } from '@/data/moduleNavigation';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Energy Management & Smart Grid - Quản Lý Năng Lượng Thông Minh'),
  description: createDescription(
    'Master smart grid technology và energy management systems. Học renewable energy integration và grid optimization trong sustainable future.',
  ),
  keywords: [
    'energy management',
    'smart grid',
    'renewable energy',
    'grid optimization',
    'energy efficiency',
    'sustainability',
    'vietnam energy',
    'k2aihub',
  ],
  authors: [{ name: 'K2AiHub Team' }],
  openGraph: {
    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',
    title: 'Energy Management & Smart Grid',
    description:
      'Master renewable energy systems and smart grid technology',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function EnergyManagementSmartGridPage() {
  const moduleData: ModuleData = {
    id: 'energy-management-smart-grid',
    title: 'Energy Management & Smart Grid',
    subtitle: 'Quản lý năng lượng thông minh',
    description:
      'Khám phá smart grid technology và renewable energy systems, từ grid optimization đến sustainable energy management trong digital transformation.',
    level: 'Nâng cao',
    duration: '20-26 giờ',
    category: 'Green Technology',
    primaryColor: 'green',
    gradientColors: 'from-slate-900 via-green-900 to-emerald-900',
    basePath: '/learning/energy-management-smart-grid',
    heroImageUrl:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=600&fit=crop',
    features: [
      'Smart Grid Architecture Design',
      'Renewable Energy Integration',
      'Energy Storage Systems',
      'Grid Optimization Algorithms',
      'Demand Response Management',
      'Energy Trading Platforms',
      'Microgrid Development',
      'Sustainability Analytics',
    ],
    icon: '⚡',
    color: 'from-green-600 to-emerald-600',
    statsConfig: {
      lessons: `${energyManagementLessons.length}+ bài`,
      duration: '20-26 giờ',
      level: 'Nâng cao',
      projects: '15+ energy projects',
    },
    marketData: {
      marketSize: '$103.4 Billion',
      marketNote: 'Global smart grid market by 2026',
      jobGrowth: '76% Growth',
      jobNote: 'Renewable energy engineer roles by 2030',
      reduction: '40% Efficiency',
      reductionNote: 'Improvement through smart grid technology',
      startups: '92% Utilities',
      startupsNote: 'Investing in smart grid infrastructure',
    },
    objectives: [
      'Design và implement smart grid architectures',
      'Integrate renewable energy sources effectively',
      'Develop energy storage và management systems',
      'Create grid optimization algorithms',
      'Build demand response management platforms',
      'Understand sustainability metrics và reporting',
    ],
    prerequisites: [
      'Engineering fundamentals',
      'Understanding của electrical systems',
      'Data analysis capabilities',
      'Environmental awareness',
    ],
    careerPaths: [
      'Smart Grid Engineer (50-90 triệu VNĐ)',
      'Energy Management Specialist (40-75 triệu VNĐ)',
      'Renewable Energy Developer (45-85 triệu VNĐ)',
      'Grid Operations Manager (55-95 triệu VNĐ)',
      'Energy Trading Analyst (45-80 triệu VNĐ)',
      'Sustainability Technology Manager (50-90 triệu VNĐ)',
      'Microgrid System Designer (45-85 triệu VNĐ)',
      'Energy Efficiency Consultant (40-85 triệu VNĐ)',
    ],
    industryApplications: [
      'Utility grid modernization',
      'Industrial energy optimization',
      'Commercial building management',
      'Residential smart home systems',
      'Electric vehicle charging networks',
      'Renewable energy farms',
      'Energy storage facilities',
      'Smart city infrastructure',
      'Manufacturing energy systems',
      'Campus energy management',
    ],
    technicalHighlights: [
      {
        title: 'Grid Technology',
        icon: '🔌',
        items: [
          'Smart Meters',
          'Grid Sensors',
          'Automation Systems',
          'Communication Networks',
        ],
      },
      {
        title: 'Energy Sources',
        icon: '🌞',
        items: [
          'Solar Power',
          'Wind Energy',
          'Hydroelectric',
          'Battery Storage',
        ],
      },
      {
        title: 'Analytics & AI',
        icon: '🤖',
        items: [
          'Predictive Analytics',
          'Load Forecasting',
          'Optimization Algorithms',
          'Machine Learning',
        ],
      },
      {
        title: 'Management Systems',
        icon: '⚙️',
        items: [
          'SCADA Systems',
          'Energy Management',
          'Distribution Automation',
          'Demand Response',
        ],
      },
      {
        title: 'Vietnamese Context',
        icon: '🇻🇳',
        items: [
          'EVN Grid Integration',
          'Solar Potential',
          'Regulatory Framework',
          'Investment Opportunities',
        ],
      },
      {
        title: 'Sustainability',
        icon: '♻️',
        items: [
          'Carbon Reduction',
          'Energy Efficiency',
          'ESG Reporting',
          'Green Financing',
        ],
      },
    ],
    relatedModules: [
      K2Module.GreenTechnology,
      K2Module.DataScienceAnalytics,
      K2Module.EnvironmentalScienceClimate,
    ],
  };

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={energyManagementLessons} />
  );
}