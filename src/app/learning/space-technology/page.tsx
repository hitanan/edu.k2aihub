import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { SpaceTechnologyLessons } from '@/data/space-technology';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('Công Nghệ Vũ Trụ'),
    description: createDescription('Tìm hiểu về space technology, satellite systems và cơ hội cho Việt Nam trong kỷ nguyên khám phá không gian. Học về CubeSat, space missions và space entrepreneurship.'),
    keywords: ['space technology', 'satellite', 'cubesat', 'aerospace', 'vietnam space', 'công nghệ vũ trụ', 'K2AI'],
    openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

      title: 'Công Nghệ Vũ Trụ - K2AiHub',
      description: 'Khám phá không gian cho Việt Nam - Từ satellite technology đến space entrepreneurship',
      type: 'website',
    },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
  };
}

export default function SpaceTechnologyMainPage() {
  const moduleData = {
    id: 'space-technology',
    title: 'Công Nghệ Vũ Trụ',
    subtitle: 'Khám phá không gian cho Việt Nam',
    description: 'Tìm hiểu về space technology, satellite systems, space missions và cơ hội cho Việt Nam trong kỷ nguyên khám phá không gian. Từ CubeSat development đến space entrepreneurship và international cooperation.',
    level: 'Trung bình',
    duration: '10-12 giờ',
    category: 'Experimental Engineering',
    heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    features: [
      'Satellite technology và Earth observation',
      'CubeSat design và development',
      'Space mission engineering principles',
      'Space entrepreneurship và business models'
    ],
    icon: '🚀',
    color: 'from-indigo-600 to-purple-600',
    objectives: [
      'Hiểu về space technology fundamentals và applications',
      'Design và prototype CubeSat systems',
      'Learn space mission planning và engineering',
      'Explore space entrepreneurship opportunities',
      'Understand Vietnam\'s role trong regional space development'
    ],
    prerequisites: [
      'Kiến thức cơ bản về physics và mathematics',
      'Hiểu biết về technology và engineering concepts',
      'Interest trong science và space exploration'
    ],
    careerOutcomes: [
      'Aerospace Engineer trong Vietnamese space industry',
      'Satellite Operations Specialist',
      'Space Mission Analyst',
      'Space Technology Entrepreneur',
      'International Space Cooperation Specialist'
    ],
    industryApplications: [
      'Weather forecasting và climate monitoring',
      'Agricultural monitoring và crop management',
      'Disaster response và emergency communications',
      'Maritime surveillance và navigation',
      'Environmental protection và resource management'
    ],
    marketDemand: {
      averageSalary: '30-50 triệu VNĐ',
      jobGrowth: '+250%',
      hireDemand: 'Cao'
    },
    relatedModules: [
      K2Module.Arduino,
      K2Module.AdvancedAI,
      K2Module.GreenTechnology
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={SpaceTechnologyLessons}
    />
  );
}
