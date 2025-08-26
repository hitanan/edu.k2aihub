import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { crossCulturalLessons } from '@/data/cross-cultural-intelligence';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

export async function generateMetadata() {
  return {
    title: createTitle('Trí Tuệ Đa Văn Hóa'),
    description: createDescription(
      'Phát triển cultural intelligence để giao tiếp, hợp tác và lãnh đạo hiệu quả với người từ các nền văn hóa khác nhau trong thế giới toàn cầu.',
    ),
    keywords: ['cultural intelligence', 'cross-cultural communication', 'global leadership', 'diversity', 'K2AiHub'],
    openGraph: {
      title: 'Trí Tuệ Đa Văn Hóa | K2AiHub',
      description:
        'Phát triển cultural intelligence để giao tiếp, hợp tác và lãnh đạo hiệu quả với người từ các nền văn hóa khác nhau trong thế giới toàn cầu.',
      type: 'website',
    },
  };
}

export default function CrossCulturalMainPage() {
  const moduleData = {
    id: 'cross-cultural-intelligence',
    title: 'Trí Tuệ Đa Văn Hóa',
    subtitle: 'Thành công trong môi trường đa văn hóa',
    description:
      'Trong thời đại toàn cầu hóa, khả năng làm việc hiệu quả với người từ các nền văn hóa khác nhau là kỹ năng thiết yếu. Module này phát triển Cultural Intelligence (CQ) của bạn, từ hiểu biết văn hóa đến giao tiếp liên văn hóa và lãnh đạo global teams.',
    level: 'Nâng cao',
    duration: '7-8 giờ',
    category: 'Global Skills',
    features: [
      'Cultural Intelligence assessment và development',
      'Cross-cultural communication mastery',
      'Global team leadership skills',
      'International networking strategies',
    ],
    icon: '🌍',
    color: 'from-teal-600 to-cyan-600',
    objectives: [
      'Phát triển Cultural Intelligence (CQ) và cultural awareness',
      'Nắm vững cross-cultural communication techniques',
      'Học cách lead và collaborate trong global teams',
      'Xây dựng professional network quốc tế',
    ],
    prerequisites: ['Open mindset về cultural differences', 'Experience với multicultural environments (preferred)'],
    careerOutcomes: [
      'Global Team Leader',
      'International Business Developer',
      'Cross-Cultural Consultant',
      'Diversity & Inclusion Specialist',
      'International Relations Manager',
    ],
    industryApplications: [
      'Multinational corporations',
      'International business và trade',
      'NGOs và international organizations',
      'Tourism và hospitality',
    ],
    marketDemand: {
      averageSalary: '22-45 triệu VNĐ',
      jobGrowth: '+28%',
      hireDemand: 'Cao',
    },
    relatedModules: [K2Module.CommunicationSkills, K2Module.DigitalMarketing, K2Module.FutureThinking],
    heroImageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop',
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={crossCulturalLessons} />;
}
