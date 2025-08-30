import type { Metadata } from 'next';

import ModulePageTemplate, {
  type ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { ClimateLessons } from '@/data/climate-science';
import { K2Module } from '@/data/moduleNavigation';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'Climate Science & Environmental Research - Khoa Học Khí Hậu',
  'Nghiên cứu khoa học khí hậu và môi trường. Từ climate modeling đến environmental data analysis và climate change solutions.',
  ['climate science', 'environmental research', 'climate change', 'climate modeling', 'environmental data', 'sustainability', 'k2aihub'],
  'climate-science'
);

export default function ClimateSciencePage() {
  const moduleData: ModuleData = {
    id: 'climate-science',
    title: 'Climate Science & Environmental Research',
    subtitle: 'Khoa học khí hậu & nghiên cứu môi trường',
    description:
      'Khám phá khoa học khí hậu và nghiên cứu môi trường với công nghệ hiện đại. Từ climate modeling đến environmental data analysis và sustainable solutions.',
    level: 'Trung bình đến Nâng cao',
    duration: '16-22 giờ',
    category: 'Science & Environment',
    primaryColor: 'emerald',
    gradientColors: 'from-slate-900 via-emerald-900 to-green-900',
    basePath: '/learning/climate-science',
    heroImageUrl:
      'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=1200&h=600&fit=crop',
    features: [
      'Climate System Understanding',
      'Environmental Data Analysis',
      'Climate Modeling & Simulation',
      'Carbon Footprint Assessment',
      'Renewable Energy Integration',
      'Sustainability Research Methods',
      'Climate Policy & Economics',
      'Ecosystem & Biodiversity Studies',
    ],
    icon: '🌍',
    color: 'from-emerald-600 to-green-600',
    statsConfig: {
      lessons: `${ClimateLessons.length}+ bài`,
      duration: '16-22 giờ',
      level: 'Trung bình đến Nâng cao',
      projects: '10+ research projects',
    },
    marketData: {
      marketSize: '$385 Billion',
      marketNote: 'Global environmental services market by 2025',
      jobGrowth: '55% Growth',
      jobNote: 'Environmental science jobs by 2030',
      reduction: '80% Emissions',
      reductionNote: 'Target reduction by 2050',
      startups: '15000+ Organizations',
      startupsNote: 'Environmental organizations worldwide',
    },
    objectives: [
      'Hiểu sâu về hệ thống khí hậu và biến đổi khí hậu',
      'Phân tích và xử lý environmental data với công nghệ hiện đại',
      'Phát triển climate models và simulation systems',
      'Đánh giá carbon footprint và environmental impact',
      'Nghiên cứu renewable energy solutions',
      'Thiết kế sustainability strategies cho tổ chức',
    ],
    prerequisites: [
      'Toán học và thống kê cơ bản',
      'Kiến thức về khoa học tự nhiên',
      'Hiểu biết về môi trường và sustainability',
      'Kỹ năng sử dụng máy tính và phần mềm',
    ],
    careerPaths: [
      'Climate Scientist (22-40 triệu VNĐ)',
      'Environmental Data Analyst (18-35 triệu VNĐ)',
      'Sustainability Consultant (25-45 triệu VNĐ)',
      'Climate Policy Researcher (20-38 triệu VNĐ)',
      'Environmental Engineer (24-42 triệu VNĐ)',
      'Carbon Markets Specialist (28-50 triệu VNĐ)',
      'Climate Risk Analyst (26-48 triệu VNĐ)',
      'Environmental Program Manager (30-55 triệu VNĐ)',
    ],
    industryApplications: [
      'Environmental consulting firms',
      'Government agencies và policy making',
      'Renewable energy companies',
      'Carbon trading và offset markets',
      'Insurance và financial services',
      'Agricultural và food companies',
      'Manufacturing và supply chain',
      'Research institutions và universities',
      'Non-profit environmental organizations',
      'International development agencies',
    ],
    technicalHighlights: [
      {
        title: 'Climate Modeling',
        icon: '🌡️',
        items: [
          'Atmospheric Models',
          'Ocean Circulation',
          'Ice Sheet Dynamics',
          'Ecosystem Models',
        ],
      },
      {
        title: 'Data Analysis',
        icon: '📊',
        items: [
          'Satellite Data',
          'Weather Stations',
          'Ocean Monitoring',
          'Paleoclimate Records',
        ],
      },
      {
        title: 'Environmental Assessment',
        icon: '🔬',
        items: [
          'Carbon Footprinting',
          'Life Cycle Analysis',
          'Environmental Impact',
          'Biodiversity Metrics',
        ],
      },
      {
        title: 'Technology Tools',
        icon: '💻',
        items: [
          'GIS & Remote Sensing',
          'Python/R Programming',
          'Climate Databases',
          'Visualization Tools',
        ],
      },
      {
        title: 'Policy & Economics',
        icon: '🏛️',
        items: [
          'Climate Policy',
          'Carbon Markets',
          'Economic Modeling',
          'Risk Assessment',
        ],
      },
      {
        title: 'Solutions & Mitigation',
        icon: '🌱',
        items: [
          'Renewable Energy',
          'Carbon Sequestration',
          'Adaptation Strategies',
          'Green Technology',
        ],
      },
    ],
    relatedModules: [
      K2Module.GreenTechnology,
      K2Module.EnvironmentalDataScience,
      K2Module.RenewableEnergy,
    ],
  };

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={ClimateLessons} />
  );
}
