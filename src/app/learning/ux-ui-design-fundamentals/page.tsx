import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { uxuiDesignLessons } from '@/data/ux-ui-design-fundamentals';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

export const metadata: Metadata = createModuleMetadata(
  'Cơ Bản Thiết Kế UX/UI',
  'Học các nguyên tắc thiết kế UX/UI, user research, visual design và design thinking để tạo ra sản phẩm số thân thiện người dùng.',
  ['ux design', 'ui design', 'user experience', 'design thinking', 'K2AiHub'],
  'ux-ui-design-fundamentals'
);

export default function UXUIDesignMainPage() {
  const moduleData = {
    id: 'ux-ui-design-fundamentals',
    title: 'Cơ Bản Thiết Kế UX/UI',
    subtitle: 'Thiết kế trải nghiệm người dùng',
    description: 'Trong thời đại số, khả năng thiết kế trải nghiệm người dùng tốt là kỹ năng có giá trị cao. Module này dạy bạn từ cơ bản về UX/UI design, user research, visual design principles đến design thinking để tạo ra những sản phẩm số thân thiện và hiệu quả.',
    level: 'Trung bình',
    duration: '7-8 giờ',
    category: 'Technical Skills',
    features: [
      'User-centered design process hoàn chỉnh',
      'Visual design principles và typography',
      'Prototyping và user testing thực tế',
      'Design thinking cho innovation'
    ],
    icon: '🎨',
    color: 'from-green-600 to-emerald-600',
    objectives: [
      'Hiểu về UX Design và user-centered design process',
      'Nắm vững visual design principles và tools',
      'Biết cách thực hiện user research và testing',
      'Áp dụng design thinking vào innovation projects'
    ],
    prerequisites: [
      'Không có yêu cầu kỹ thuật đặc biệt',
      'Quan tâm đến user experience và design'
    ],
    careerOutcomes: [
      'UX/UI Designer',
      'Product Designer',
      'User Researcher',
      'Design Thinking Facilitator',
      'Digital Product Manager'
    ],
    industryApplications: [
      'Công nghệ và phần mềm',
      'E-commerce và digital marketing',
      'Fintech và banking',
      'Healthcare và education technology'
    ],
    marketDemand: {
      averageSalary: '15-35 triệu VNĐ',
      jobGrowth: '+25%',
      hireDemand: 'Cao'
    },
    relatedModules: [
      K2Module.DigitalMarketing,
      K2Module.CriticalThinking,
      K2Module.CommunicationSkills
    ],
    heroImageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop'
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={uxuiDesignLessons}
    />
  );
}