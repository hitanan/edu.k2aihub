import type { Metadata } from 'next';
import ModulePageTemplate, {
  type ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { SpaceLessons } from '@/data/space-exploration';
import { K2Module } from '@/data/moduleNavigation';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Space Technology & Exploration - Công Nghệ Vũ Trụ'),
  description: createDescription(
    'Khám phá công nghệ vũ trụ và tương lai của nhân loại trong không gian. Từ rocket science đến space missions và colonization.',
  ),
  keywords: [
    'space technology',
    'space exploration',
    'rocket science',
    'satellite technology',
    'space missions',
    'aerospace engineering',
    'k2aihub',
  ],
  authors: [{ name: 'K2AiHub Team' }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: 'Space Technology & Exploration',
    description:
      'Học công nghệ vũ trụ và khám phá tương lai của nhân loại trong không gian',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function SpaceExplorationPage() {
  const moduleData: ModuleData = {
    id: 'space-exploration',
    title: 'Space Technology & Exploration',
    subtitle: 'Công nghệ vũ trụ & khám phá không gian',
    description:
      'Khám phá thế giới công nghệ vũ trụ từ rocket science đến space missions. Học về satellite technology, space exploration missions và tương lai của nhân loại trong không gian.',
    level: 'Trung bình đến Nâng cao',
    duration: '15-20 giờ',
    category: 'Engineering & Technology',
    primaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-indigo-900 to-purple-900',
    basePath: '/learning/space-exploration',
    heroImageUrl:
      'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop',
    features: [
      'Rocket Science & Propulsion Systems',
      'Satellite Technology & Communications',
      'Space Mission Planning & Operations',
      'Orbital Mechanics & Trajectory Design',
      'Space Exploration History & Future',
      'International Space Cooperation',
      'Commercial Space Industry',
      'Mars Colonization & Deep Space',
    ],
    icon: '🚀',
    color: 'from-indigo-600 to-purple-600',
    statsConfig: {
      lessons: `${SpaceLessons.length}+ bài`,
      duration: '15-20 giờ',
      level: 'Trung bình đến Nâng cao',
      projects: '8+ missions thực tế',
    },
    marketData: {
      marketSize: '$469 Billion',
      marketNote: 'Global space economy by 2025',
      jobGrowth: '42% Growth',
      jobNote: 'Space industry jobs by 2030',
      reduction: '90% Cost',
      reductionNote: 'Launch cost reduction since 2000',
      startups: '3000+ Companies',
      startupsNote: 'Space tech companies worldwide',
    },
    objectives: [
      'Hiểu nguyên lý rocket science và propulsion systems',
      'Thiết kế và mô phỏng space missions',
      'Phân tích orbital mechanics và trajectory planning',
      'Khám phá satellite technology và applications',
      'Nghiên cứu space exploration history và future plans',
      'Phát triển space technology solutions',
    ],
    prerequisites: [
      'Vật lý đại cương (mechanics, thermodynamics)',
      'Toán học cao cấp (calculus, differential equations)',
      'Kiến thức về engineering principles',
      'Tư duy logic và khả năng giải quyết vấn đề',
    ],
    careerPaths: [
      'Aerospace Engineer (25-45 triệu VNĐ)',
      'Mission Operations Specialist (20-35 triệu VNĐ)',
      'Satellite Systems Engineer (22-40 triệu VNĐ)',
      'Propulsion Engineer (25-42 triệu VNĐ)',
      'Space Systems Analyst (18-32 triệu VNĐ)',
      'Flight Dynamics Engineer (24-38 triệu VNĐ)',
      'Space Program Manager (30-55 triệu VNĐ)',
      'Planetary Scientist (20-45 triệu VNĐ)',
    ],
    industryApplications: [
      'Commercial space companies (SpaceX, Blue Origin)',
      'Government space agencies (NASA, ESA)',
      'Satellite communications providers',
      'Earth observation and mapping',
      'National defense và security',
      'Scientific research institutions',
      'Space tourism companies',
      'Mining và resource exploration',
      'Climate monitoring systems',
      'GPS và navigation services',
    ],
    technicalHighlights: [
      {
        title: 'Propulsion Systems',
        icon: '🚀',
        items: [
          'Chemical Rockets',
          'Ion Propulsion',
          'Nuclear Thermal',
          'Solar Sails',
        ],
      },
      {
        title: 'Satellite Technology',
        icon: '🛰️',
        items: [
          'Communication Sats',
          'Earth Observation',
          'Navigation Systems',
          'Scientific Instruments',
        ],
      },
      {
        title: 'Mission Design',
        icon: '🎯',
        items: [
          'Trajectory Planning',
          'Launch Windows',
          'Orbital Mechanics',
          'Gravity Assists',
        ],
      },
      {
        title: 'Space Exploration',
        icon: '🌌',
        items: [
          'Planetary Missions',
          'Deep Space Probes',
          'Human Spaceflight',
          'Mars Colonization',
        ],
      },
      {
        title: 'Space Operations',
        icon: '🏗️',
        items: [
          'Mission Control',
          'Ground Stations',
          'Telemetry Systems',
          'Emergency Procedures',
        ],
      },
      {
        title: 'Future Technology',
        icon: '⚡',
        items: [
          'Reusable Rockets',
          'Space Elevators',
          'Interstellar Travel',
          'Space Manufacturing',
        ],
      },
    ],
    relatedModules: [
      K2Module.AerospaceEngineering,
      K2Module.AdvancedAI,
      K2Module.DataScienceAnalytics,
    ],
  };

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={SpaceLessons} />
  );
}
