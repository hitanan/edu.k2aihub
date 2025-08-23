import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { K2Module } from '@/data/moduleNavigation';
import { vietnameseCultureLessons } from '@/data/vietnamese-culture';
import { createTitle, createDescription } from '@/utils/seo';

export async function generateMetadata() {
  return {
    title: createTitle('Văn Hóa Việt Nam & Di Sản Số'),
    description: createDescription(
      'Học cách số hóa và bảo tồn di sản văn hóa Việt Nam. Phát triển tourism technology và cultural experience platforms cho thị trường Việt Nam.',
    ),
    keywords: [
      'văn hóa việt nam',
      'di sản số',
      'tourism technology',
      'cultural preservation',
      'digital heritage',
      'vietnamese culture',
      'k2aihub',
    ],
    openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

      title: 'Văn Hóa Việt Nam & Di Sản Số | K2AiHub',
      description:
        'Khóa học toàn diện về digital heritage preservation và tourism technology cho thị trường Việt Nam',
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

export default function VietnameseCulturePage() {
  const moduleData = {
    id: 'vietnamese-culture',
    title: 'Văn Hóa Việt Nam & Di Sản Số',
    subtitle: 'Digital Heritage Preservation & Tourism Technology',
    description:
      'Học cách số hóa và bảo tồn di sản văn hóa Việt Nam bằng công nghệ hiện đại. Phát triển tourism technology platforms và cultural experience solutions cho thị trường 95 triệu người Việt Nam và 18 triệu du khách quốc tế hàng năm.',
    level: 'Trung bình',
    duration: '8-12 giờ',
    category: 'Vietnamese-Specific Technology',
    heroImageUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
    features: [
      'Digital heritage preservation với 3D scanning và VR technology',
      'Tourism platform development cho Vietnamese destinations',
      'Cultural knowledge management systems',
      'Community-based tourism technology solutions',
    ],
    icon: '🏛️',
    color: 'from-yellow-600 to-orange-600',
    objectives: [
      'Master digital preservation techniques cho Vietnamese cultural artifacts',
      'Develop comprehensive tourism technology platforms',
      'Create sustainable cultural technology solutions',
      'Build community engagement systems cho cultural education',
    ],
    prerequisites: [
      'Basic understanding of Vietnamese culture và history',
      'Familiarity với web development hoặc mobile development',
      'Interest trong cultural preservation và tourism',
    ],
    careerOutcomes: [
      'Cultural Technology Specialist tại museums và heritage sites',
      'Tourism Platform Developer cho travel companies',
      'Digital Heritage Consultant cho government projects',
      'Cultural Content Creator cho educational platforms',
    ],
    industryApplications: [
      'Museum digital transformation initiatives',
      'Tourism và hospitality technology',
      'Educational content development',
      'Government cultural preservation projects',
    ],
    marketDemand: {
      averageSalary: '20-40 triệu VNĐ',
      jobGrowth: '+35%',
      hireDemand: 'Cao',
    },
    relatedModules: [
      K2Module.AI,
      K2Module.VietnameseBusiness,
      K2Module.DigitalGovernment,
    ],
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={vietnameseCultureLessons}
    />
  );
}
