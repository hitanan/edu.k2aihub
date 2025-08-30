import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { professionalSoftSkillsLessons } from '@/data/professional-soft-skills';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

export const metadata: Metadata = createModuleMetadata(
  'Kỹ Năng Mềm & Giao Tiếp Chuyên Nghiệp',
  'Phát triển kỹ năng mềm cần thiết cho thành công nghề nghiệp: thuyết trình, lãnh đạo, đàm phán, và quản lý thời gian hiệu quả trong môi trường doanh nghiệp Việt Nam.',
  ['kỹ năng mềm', 'giao tiếp chuyên nghiệp', 'lãnh đạo', 'thuyết trình', 'đàm phán', 'quản lý thời gian', 'soft skills'],
  'professional-soft-skills'
);

export default function ProfessionalSoftSkillsMainPage() {
  const moduleData = {
    id: 'professional-soft-skills',
    title: 'Kỹ Năng Mềm & Giao Tiếp Chuyên Nghiệp',
    subtitle: 'Essential Skills for Professional Success',
    description: 'Phát triển bộ kỹ năng mềm toàn diện để thành công trong môi trường doanh nghiệp hiện đại. Từ thuyết trình tự tin, lãnh đạo hiệu quả, đến đàm phán thành công và quản lý thời gian tối ưu.',
    level: 'Cơ bản đến Nâng cao',
    duration: '12-15 giờ',
    category: 'Professional Skills',
    features: [
      'Thuyết trình chuyên nghiệp với confidence và impact',
      'Lãnh đạo đội nhóm đa thế hệ hiệu quả',
      'Đàm phán win-win và influence without authority',
      'Quản lý thời gian và productivity optimization',
      'Communication skills cho môi trường đa văn hóa'
    ],
    icon: '💼',
    color: 'from-blue-600 to-indigo-600',
    objectives: [
      'Thành thạo kỹ năng thuyết trình và public speaking',
      'Phát triển emotional intelligence và leadership capability',
      'Nắm vững nghệ thuật đàm phán và persuasion',
      'Tối ưu hóa productivity với time management hiệu quả',
      'Xây dựng professional brand và network'
    ],
    prerequisites: [
      'Kinh nghiệm làm việc cơ bản',
      'Mong muốn phát triển career và leadership',
      'Sẵn sàng thực hành và nhận feedback'
    ],
    careerOutcomes: [
      'Team Leader / Project Manager',
      'Business Development Manager',
      'Training & Development Specialist',
      'Executive Assistant / Chief of Staff',
      'Consultant / Account Manager'
    ],
    industryApplications: [
      'Corporate training và development',
      'Sales và business development',
      'Project management và operations',
      'HR và people management',
      'Consulting và advisory services'
    ],
    marketDemand: {
      averageSalary: '20-45 triệu VNĐ',
      jobGrowth: '+30%',
      hireDemand: 'Rất Cao'
    },
    heroImageUrl: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&h=600&fit=crop',
    relatedModules: [
      K2Module.DigitalMarketing,
      K2Module.YoungEntrepreneur,
      K2Module.CommunicationSkills
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={professionalSoftSkillsLessons}
    />
  );
}