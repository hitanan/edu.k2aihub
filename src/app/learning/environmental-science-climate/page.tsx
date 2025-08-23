import type { Metadata } from 'next';
import ModulePageTemplate, { type ModuleData } from '@/components/learning/ModulePageTemplate';
import { environmentalClimateLessons } from '@/data/environmental-science-climate';
import { K2Module } from '@/data/moduleNavigation';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Environmental Science & Climate Change - Khoa Học Môi Trường'),
  description: createDescription(
    'Master environmental science & climate change solutions. Learn sustainable practices và green technology for Vietnam.',
  ),
  keywords: [
    'environmental science',
    'climate change',
    'sustainability',
    'green technology',
    'renewable energy',
    'vietnam environment',
    'eco solutions',
    'climate action',
    'environmental conservation',
    'k2aihub',
  ],
  authors: [{ name: 'K2AiHub Team' }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: 'Environmental Science & Climate Solutions',
    description: 'Comprehensive environmental education for sustainable future',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function EnvironmentalScienceClimatePage() {
  const moduleData: ModuleData = {
    id: 'environmental-science-climate',
    title: 'Environmental Science & Climate Change',
    subtitle: 'Khoa học môi trường & giải pháp biến đổi khí hậu',
    description:
      'Khám phá environmental science fundamentals, climate change impacts và sustainable solutions cho Vietnam. Learn green technologies và conservation strategies.',
    level: 'Trung bình đến Nâng cao',
    duration: '22-30 giờ',
    category: 'Environmental Science & Sustainability',
    primaryColor: 'green',
    gradientColors: 'from-slate-900 via-green-900 to-emerald-900',
    basePath: '/learning/environmental-science-climate',
    heroImageUrl: 'https://images.unsplash.com/photo-1569163139394-de44cb7f2d3c?w=1200&h=600&fit=crop',
    features: [
      'Climate Science & Meteorology',
      'Environmental Chemistry & Biology',
      'Renewable Energy Technologies',
      'Sustainable Agriculture & Food Systems',
      'Vietnam Environmental Challenges',
      'Conservation & Biodiversity Protection',
      'Green Technology Innovation',
      'Environmental Policy & Governance',
    ],
    icon: '🌍',
    color: 'from-green-600 to-emerald-600',
    statsConfig: {
      lessons: `${environmentalClimateLessons.length}+ bài`,
      duration: '22-30 giờ',
      level: 'Trung bình đến Nâng cao',
      projects: '15+ eco projects',
    },
    marketData: {
      marketSize: '$2.5 Trillion',
      marketNote: 'Global green technology market by 2030',
      jobGrowth: '85% Growth',
      jobNote: 'Clean energy jobs by 2030',
      reduction: '45% Cut',
      reductionNote: 'GHG emissions needed by 2030',
      startups: '$150 Billion',
      startupsNote: 'Climate tech investment in 2021',
    },
    objectives: [
      'Understand climate science và environmental systems',
      'Analyze environmental challenges facing Vietnam',
      'Design sustainable solutions cho local communities',
      'Master renewable energy technologies',
      'Implement conservation strategies',
      'Develop environmental policy recommendations',
    ],
    prerequisites: [
      'Basic chemistry và biology knowledge',
      'Interest trong environmental issues',
      'Understanding của scientific method',
      'Willingness to engage với sustainability topics',
    ],
    careerPaths: [
      'Environmental Scientist (35-70 triệu VNĐ)',
      'Climate Change Analyst (40-75 triệu VNĐ)',
      'Sustainability Consultant (45-85 triệu VNĐ)',
      'Renewable Energy Engineer (50-95 triệu VNĐ)',
      'Environmental Policy Advisor (40-80 triệu VNĐ)',
      'Conservation Biologist (35-65 triệu VNĐ)',
      'Green Technology Developer (45-90 triệu VNĐ)',
      'Environmental Education Specialist (30-60 triệu VNĐ)',
    ],
    industryApplications: [
      'Renewable energy development',
      'Environmental consulting',
      'Government environmental agencies',
      'NGOs và conservation organizations',
      'Sustainable agriculture',
      'Green building và architecture',
      'Waste management và recycling',
      'Water treatment và management',
      'Climate research institutions',
      'Environmental education',
    ],
    technicalHighlights: [
      {
        title: 'Climate Science',
        icon: '🌡️',
        items: ['Greenhouse Effect', 'Weather Patterns', 'Climate Models', 'Temperature Trends'],
      },
      {
        title: 'Renewable Energy',
        icon: '⚡',
        items: ['Solar Power', 'Wind Energy', 'Hydroelectric', 'Biomass Energy'],
      },
      {
        title: 'Conservation',
        icon: '🌳',
        items: ['Biodiversity Protection', 'Habitat Restoration', 'Species Conservation', 'Ecosystem Services'],
      },
      {
        title: 'Sustainability',
        icon: '♻️',
        items: ['Circular Economy', 'Life Cycle Assessment', 'Green Chemistry', 'Sustainable Design'],
      },
      {
        title: 'Vietnam Focus',
        icon: '🇻🇳',
        items: ['Mekong Delta', 'Coastal Erosion', 'Air Quality', 'Deforestation'],
      },
      {
        title: 'Research Tools',
        icon: '🔬',
        items: ['GIS Mapping', 'Data Analysis', 'Field Research', 'Environmental Monitoring'],
      },
    ],
    relatedModules: [K2Module.GreenTechnology, K2Module.RenewableEnergy, K2Module.DataScienceAnalytics],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={environmentalClimateLessons} />;
}
