import type { Metadata } from 'next';

import ModulePageTemplate, {
  type ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { transportationTechnologyLessons } from '@/data/transportation-technology';
import { K2Module } from '@/data/moduleNavigation';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'Transportation Technology - Công Nghệ Giao Thông',
  'Master smart transportation systems và autonomous vehicle technology. Học traffic optimization và mobility solutions trong smart cities.',
  ['transportation technology', 'smart transportation', 'autonomous vehicles', 'traffic management', 'mobility solutions', 'logistics tech', 'vietnam transportation', 'k2aihub'],
  'transportation-technology'
);

export default function TransportationTechnologyPage() {
  const moduleData: ModuleData = {
    id: 'transportation-technology',
    title: 'Transportation Technology',
    subtitle: 'Công nghệ giao thông thông minh',
    description:
      'Khám phá smart transportation systems, autonomous vehicle technology và traffic optimization solutions trong future mobility ecosystems.',
    level: 'Nâng cao',
    duration: '20-26 giờ',
    category: 'Transportation Technology',
    primaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-indigo-900 to-purple-900',
    basePath: '/learning/transportation-technology',
    heroImageUrl:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
    features: [
      'Autonomous Vehicle Systems',
      'Traffic Management Optimization',
      'Smart Public Transportation',
      'Mobility as a Service (MaaS)',
      'Electric Vehicle Infrastructure',
      'Route Optimization Algorithms',
      'Transportation Analytics',
      'Connected Vehicle Networks',
    ],
    icon: '🚗',
    color: 'from-indigo-600 to-purple-600',
    statsConfig: {
      lessons: `${transportationTechnologyLessons.length}+ bài`,
      duration: '20-26 giờ',
      level: 'Nâng cao',
      projects: '14+ transport projects',
    },
    marketData: {
      marketSize: '$214.1 Billion',
      marketNote: 'Global intelligent transportation systems market by 2027',
      jobGrowth: '78% Growth',
      jobNote: 'Transportation technology roles by 2030',
      reduction: '45% Reduction',
      reductionNote: 'In traffic congestion through smart systems',
      startups: '91% Cities',
      startupsNote: 'Investing in smart transportation infrastructure',
    },
    objectives: [
      'Design autonomous vehicle control systems',
      'Optimize traffic flow algorithms',
      'Develop smart public transport solutions',
      'Create mobility service platforms',
      'Build electric vehicle infrastructure',
      'Implement connected vehicle networks',
    ],
    prerequisites: [
      'Engineering fundamentals',
      'Programming skills (Python/C++)',
      'Understanding của transportation systems',
      'Data analysis capabilities',
    ],
    careerPaths: [
      'Autonomous Vehicle Engineer (55-105 triệu VNĐ)',
      'Traffic Systems Manager (45-85 triệu VNĐ)',
      'Smart Mobility Developer (50-95 triệu VNĐ)',
      'Transportation Data Scientist (50-90 triệu VNĐ)',
      'Electric Vehicle Engineer (45-90 triệu VNĐ)',
      'Connected Systems Specialist (50-95 triệu VNĐ)',
      'Transportation Technology Consultant (55-110 triệu VNĐ)',
      'Urban Mobility Planner (40-80 triệu VNĐ)',
    ],
    industryApplications: [
      'Smart city traffic management',
      'Autonomous vehicle development',
      'Ride-sharing platform optimization',
      'Public transportation systems',
      'Electric vehicle charging networks',
      'Logistics route optimization',
      'Airport traffic control',
      'Maritime transportation tracking',
      'Railway management systems',
      'Emergency vehicle routing',
    ],
    technicalHighlights: [
      {
        title: 'Autonomous Systems',
        icon: '🤖',
        items: [
          'Self-Driving Algorithms',
          'Sensor Fusion',
          'Path Planning',
          'Object Detection',
        ],
      },
      {
        title: 'Traffic Management',
        icon: '🚦',
        items: [
          'Smart Traffic Lights',
          'Flow Optimization',
          'Congestion Prediction',
          'Incident Management',
        ],
      },
      {
        title: 'Connectivity',
        icon: '📡',
        items: [
          'V2V Communication',
          'V2I Integration',
          'IoT Sensors',
          '5G Networks',
        ],
      },
      {
        title: 'Electric Mobility',
        icon: '🔋',
        items: [
          'Charging Infrastructure',
          'Battery Management',
          'Grid Integration',
          'Energy Optimization',
        ],
      },
      {
        title: 'Vietnamese Context',
        icon: '🇻🇳',
        items: [
          'ASEAN Transport Corridors',
          'Motorbike Integration',
          'Urban Planning Challenges',
          'Infrastructure Development',
        ],
      },
      {
        title: 'Analytics & AI',
        icon: '📊',
        items: [
          'Predictive Maintenance',
          'Demand Forecasting',
          'Route Optimization',
          'Performance Analytics',
        ],
      },
    ],
    relatedModules: [
      K2Module.AIApplications,
      K2Module.ElectricVehicleTech,
      K2Module.SmartManufacturing,
    ],
  };

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={transportationTechnologyLessons} />
  );
}