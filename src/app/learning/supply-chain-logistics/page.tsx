import type { Metadata } from 'next';
import ModulePageTemplate, {
  type ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { supplyChainLogisticsLessons } from '@/data/supply-chain-logistics';
import { K2Module } from '@/data/moduleNavigation';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Supply Chain & Logistics - Quản Lý Chuỗi Cung Ứng'),
  description: createDescription(
    'Master supply chain logistics management với advanced technology. Học optimization, inventory management và distribution trong global supply chains.',
  ),
  keywords: [
    'supply chain',
    'logistics',
    'inventory management',
    'distribution',
    'supply chain optimization',
    'warehouse management',
    'vietnam logistics',
    'k2aihub',
  ],
  authors: [{ name: 'K2AiHub Team' }],
  openGraph: {
    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',
    title: 'Supply Chain & Logistics Management',
    description:
      'Master advanced supply chain optimization and logistics technology',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function SupplyChainLogisticsPage() {
  const moduleData: ModuleData = {
    id: 'supply-chain-logistics',
    title: 'Supply Chain & Logistics',
    subtitle: 'Quản lý chuỗi cung ứng thông minh',
    description:
      'Khám phá advanced supply chain management techniques, từ inventory optimization đến global distribution strategies trong digital age.',
    level: 'Nâng cao',
    duration: '18-24 giờ',
    category: 'Business Technology',
    primaryColor: 'orange',
    gradientColors: 'from-slate-900 via-orange-900 to-amber-900',
    basePath: '/learning/supply-chain-logistics',
    heroImageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop',
    features: [
      'Supply Chain Optimization Algorithms',
      'Inventory Management Systems',
      'Distribution Network Design',
      'Supplier Relationship Management',
      'Demand Forecasting & Planning',
      'Warehouse Management Technology',
      'Transportation Optimization',
      'Risk Management & Resilience',
    ],
    icon: '🚛',
    color: 'from-orange-600 to-amber-600',
    statsConfig: {
      lessons: `${supplyChainLogisticsLessons.length}+ bài`,
      duration: '18-24 giờ',
      level: 'Nâng cao',
      projects: '12+ optimization projects',
    },
    marketData: {
      marketSize: '$37.4 Billion',
      marketNote: 'Global supply chain management software market by 2027',
      jobGrowth: '65% Growth',
      jobNote: 'Supply chain technology roles by 2030',
      reduction: '25% Cost',
      reductionNote: 'Reduction through supply chain optimization',
      startups: '94% Companies',
      startupsNote: 'Investing in supply chain digitalization',
    },
    objectives: [
      'Master supply chain optimization strategies và algorithms',
      'Implement advanced inventory management systems',
      'Design efficient distribution networks',
      'Develop demand forecasting capabilities',
      'Create supplier relationship management frameworks',
      'Build resilient supply chain architectures',
    ],
    prerequisites: [
      'Business operations understanding',
      'Basic data analysis skills',
      'Project management experience',
      'Strategic thinking capabilities',
    ],
    careerPaths: [
      'Supply Chain Manager (45-80 triệu VNĐ)',
      'Logistics Technology Specialist (35-65 triệu VNĐ)',
      'Operations Research Analyst (40-75 triệu VNĐ)',
      'Procurement Technology Manager (45-85 triệu VNĐ)',
      'Distribution Network Designer (40-70 triệu VNĐ)',
      'Supply Chain Data Scientist (50-90 triệu VNĐ)',
      'Warehouse Automation Engineer (45-80 triệu VNĐ)',
      'Supply Chain Consultant (50-100 triệu VNĐ)',
    ],
    industryApplications: [
      'Manufacturing supply chain optimization',
      'E-commerce fulfillment networks',
      'Retail inventory management',
      'Automotive supply chains',
      'Food & beverage distribution',
      'Pharmaceutical cold chain',
      'Fashion & apparel logistics',
      'Construction material supply',
      'Electronics component sourcing',
      'Healthcare supply management',
    ],
    technicalHighlights: [
      {
        title: 'Optimization Algorithms',
        icon: '🔄',
        items: [
          'Linear Programming',
          'Network Optimization',
          'Genetic Algorithms',
          'Machine Learning Models',
        ],
      },
      {
        title: 'Technology Stack',
        icon: '💻',
        items: [
          'ERP Systems',
          'WMS Platforms',
          'IoT Sensors',
          'Blockchain Tracking',
        ],
      },
      {
        title: 'Analytics Tools',
        icon: '📊',
        items: [
          'Demand Forecasting',
          'Performance Dashboards',
          'Risk Analytics',
          'Cost Optimization',
        ],
      },
      {
        title: 'Integration Systems',
        icon: '🔗',
        items: [
          'API Integrations',
          'EDI Systems',
          'Cloud Platforms',
          'Real-time Tracking',
        ],
      },
      {
        title: 'Vietnamese Context',
        icon: '🇻🇳',
        items: [
          'ASEAN Trade Routes',
          'Local Supplier Networks',
          'Regulatory Compliance',
          'Cultural Considerations',
        ],
      },
      {
        title: 'Emerging Tech',
        icon: '🚀',
        items: [
          'AI/ML Optimization',
          'Drone Delivery',
          'Autonomous Vehicles',
          'Digital Twins',
        ],
      },
    ],
    relatedModules: [
      K2Module.DataScienceAnalytics,
      K2Module.ProfessionalSkills,
      K2Module.DigitalMarketing,
    ],
  };

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={supplyChainLogisticsLessons} />
  );
}