import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { communicationSkillsLessons } from '@/data/modules/communication-skills';
import { createModuleMetadata } from '@/utils/seo';
import { ModuleData } from '@/types';

export const metadata: Metadata = createModuleMetadata(
  'Kỹ Năng Giao Tiếp và Thuyết Trình',
  'Phát triển kỹ năng giao tiếp hiệu quả và thuyết trình chuyên nghiệp trong thời đại số - từ giao tiếp cơ bản đến thuyết trình đa văn hóa.',
  ['kỹ năng giao tiếp', 'thuyết trình', 'presentation skills', 'communication', 'digital presentation', 'K2AI'],
  'communication-skills',
);

export default function CommunicationSkillsMainPage() {
  const moduleData: ModuleData = {
    id: 'communication-skills',
    title: 'Kỹ Năng Giao Tiếp và Thuyết Trình',
    subtitle: 'Phát triển kỹ năng giao tiếp hiệu quả trong thời đại số',
    description:
      'Khóa học comprehensive về kỹ năng giao tiếp và thuyết trình, từ những nguyên tắc cơ bản của active listening đến digital presentation mastery và cross-cultural communication. Được thiết kế đặc biệt cho học sinh Việt Nam với context và case studies phù hợp.',
    level: 'Trung bình',
    duration: '9-11 giờ',
    category: 'Essential Skills',
    features: [
      'Phát triển kỹ năng giao tiếp verbal và nonverbal hiệu quả',
      'Master các digital presentation tools và techniques hiện đại',
      'Học cách communicate trong môi trường đa văn hóa',
      'Thực hành với real-world scenarios và practical exercises',
    ],
    icon: '🗣️',
    color: 'from-blue-600 to-cyan-600',
    heroImageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop',
    objectives: [
      'Nắm vững các fundamentals của effective communication',
      'Phát triển confident presentation skills và public speaking ability',
      'Học cách adapt communication style cho different audiences',
      'Build strong interpersonal relationships và professional networks',
    ],
    prerequisites: [
      'Không có yêu cầu tiên quyết cụ thể',
      'Sẵn sàng practice speaking và receive constructive feedback',
      'Có access đến computer và internet cho digital exercises',
    ],
    careerOutcomes: [
      'Public Relations Specialist và Communications Manager',
      'Training and Development Professional',
      'International Business Developer',
      'Content Creator và Influencer Marketing Specialist',
    ],
    industryApplications: [
      'Corporate communications và internal training programs',
      'Education sector với teaching và academic presentations',
      'International business với cross-cultural negotiations',
      'Media và entertainment industry communications',
      'Non-profit sector với advocacy và community engagement',
    ],
    marketDemand: {
      averageSalary: '12-35 triệu VNĐ',
      jobGrowth: '+28%',
      hireDemand: 'Cao',
    },
    relatedModules: [],
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={communicationSkillsLessons}
      additionalStats={[
        {
          label: 'Presentation Tools',
          value: '8+',
          icon: <span className="text-2xl">📊</span>,
        },
        {
          label: 'Cultural Contexts',
          value: 'Global',
          icon: <span className="text-2xl">🌍</span>,
        },
        {
          label: 'Practice Sessions',
          value: '20+',
          icon: <span className="text-2xl">🎯</span>,
        },
      ]}
    />
  );
}
