import type { Metadata } from 'next';

import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { advancedCreativeLessons } from '@/data/advanced-creative-skills';
import { K2Module } from '@/data/moduleNavigation';
import { ModuleData } from '@/types';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Advanced Creative Skills - Kỹ Năng Sáng Tạo Nâng Cao',
  'Phát triển kỹ năng sáng tạo nâng cao với AI tools và creative technology. Graphic design, video editing và digital art',
  ['creative skills', 'graphic design', 'video editing', 'digital art', 'creative technology'],
  'advanced-creative-skills',
);

export default function AdvancedCreativeSkillsMainPage() {
  const moduleData: ModuleData = {
    id: 'advanced-creative-skills',
    title: 'Advanced Creative Skills',
    subtitle: 'Kỹ năng sáng tạo chuyên nghiệp cho thời đại số',
    description:
      'Nâng cao khả năng sáng tạo chuyên nghiệp trong các lĩnh vực then chốt: graphic design, video production, audio creation, content writing và photography. Học cách xây dựng portfolio mạnh mẽ, phát triển business model bền vững và thành công trong creative industry Việt Nam.',
    level: 'Nâng cao',
    duration: '25-30 giờ',
    category: 'Creative Technology',
    features: [
      'Professional graphic design và brand identity development',
      'Advanced video production với cinematic storytelling techniques',
      'Audio production và podcasting cho Vietnamese market',
      'Content writing và copywriting mastery',
      'Photography và visual storytelling excellence',
    ],
    icon: '🎨',
    color: 'from-pink-600 to-rose-600',
    heroImageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
    objectives: [
      'Master professional creative skills across multiple disciplines',
      'Build compelling creative portfolio cho Vietnamese market',
      'Develop sustainable freelancing business model',
      'Create content that resonates với Vietnamese audiences',
      'Navigate creative industry opportunities và challenges in Vietnam',
    ],
    prerequisites: [
      'Basic understanding của creative software',
      'Creative mindset và artistic interests',
      'Willingness to learn technical skills',
    ],
    careerOutcomes: [
      'Graphic Designer (15-35 triệu VNĐ)',
      'Video Producer (20-45 triệu VNĐ)',
      'Content Creator (18-40 triệu VNĐ)',
      'Creative Director (30-70 triệu VNĐ)',
      'Freelance Creative Professional (20-60 triệu VNĐ)',
      'Creative Agency Owner (Thu nhập không giới hạn)',
      'Brand Consultant (25-55 triệu VNĐ)',
    ],
    industryApplications: [
      'Digital marketing agencies và creative studios',
      'E-commerce platforms needing visual content',
      'Corporate branding và communication departments',
      'Entertainment và media production companies',
      'Wedding và event service industries',
      'Social media và influencer marketing sector',
    ],
    marketDemand: {
      averageSalary: '20-50 triệu VNĐ',
      jobGrowth: '+30%',
      hireDemand: 'Cao',
    },
    relatedModules: [
      K2Module.AIArtCreativeTech,
      K2Module.DigitalMarketing,
      K2Module.GameDevelopment,
      K2Module.ProfessionalSkills,
    ],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={advancedCreativeLessons} />;
}
