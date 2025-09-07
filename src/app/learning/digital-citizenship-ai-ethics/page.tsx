import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { digitalCitizenshipLessons } from '@/data/digital-citizenship-ai-ethics';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/k2-modules';

export const metadata: Metadata = createModuleMetadata(
  'Công Dân Số và Đạo Đức AI',
  'Học cách trở thành công dân số có trách nhiệm, hiểu về đạo đức AI và bảo vệ quyền riêng tư trong thời đại kỹ thuật số.',
  ['công dân số', 'đạo đức AI', 'quyền riêng tư', 'digital wellness', 'AI ethics', 'K2AiHub'],
  'digital-citizenship-ai-ethics',
);

export default function DigitalCitizenshipMainPage() {
  const moduleData = {
    id: 'digital-citizenship-ai-ethics',
    title: 'Công Dân Số và Đạo Đức AI',
    subtitle: 'Trách nhiệm trong thế giới số',
    description:
      'Trong thời đại số hóa, việc trở thành công dân số có trách nhiệm là kỹ năng thiết yếu. Module này giúp bạn hiểu sâu về quyền và nghĩa vụ trong không gian số, đạo đức AI, bảo vệ quyền riêng tư và sử dụng công nghệ một cách có ý thức.',
    level: 'Trung bình',
    duration: '5-6 giờ',
    category: 'Essential Skills',
    features: [
      'Hiểu quyền và trách nhiệm trong không gian số',
      'Nhận diện và giảm thiểu bias trong AI',
      'Bảo vệ thông tin cá nhân và quyền riêng tư',
      'Phát triển thói quen sử dụng công nghệ lành mạnh',
    ],
    icon: '🛡️',
    color: 'from-blue-600 to-indigo-600',
    objectives: [
      'Hiểu được khái niệm công dân số và tầm quan trọng trong xã hội hiện đại',
      'Nắm vững các nguyên tắc đạo đức khi sử dụng AI và công nghệ',
      'Biết cách bảo vệ danh tính số và quyền riêng tư cá nhân',
      'Phát triển kỹ năng đánh giá và sử dụng công nghệ có trách nhiệm',
    ],
    prerequisites: ['Có sử dụng internet và mạng xã hội cơ bản', 'Quan tâm đến vấn đề đạo đức công nghệ'],
    careerOutcomes: [
      'Digital Ethics Specialist',
      'Privacy Officer',
      'AI Ethics Researcher',
      'Digital Rights Advocate',
      'Technology Policy Analyst',
    ],
    industryApplications: [
      'Công nghệ thông tin và dịch vụ số',
      'Chính phủ và cơ quan quản lý',
      'Tổ chức phi lợi nhuận và nhân quyền',
      'Giáo dục và truyền thông',
    ],
    marketDemand: {
      averageSalary: '20-40 triệu VNĐ',
      jobGrowth: '+35%',
      hireDemand: 'Cao',
    },
    relatedModules: [K2Module.AI, K2Module.CriticalThinking, K2Module.CommunicationSkills],
    heroImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={digitalCitizenshipLessons} />;
}
