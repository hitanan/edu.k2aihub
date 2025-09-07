import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { educationTechnologyLessons } from '@/data/education-technology';
import { createModuleMetadata } from '@/utils/seo';
import { educationTechnologyModuleData } from '@/data/education-technology-module';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Công Nghệ Giáo Dục - Education Technology',
  'Master công nghệ giáo dục hiện đại với LMS, AI, VR/AR, Learning Analytics và EdTech Entrepreneurship. Khóa học toàn diện về digital transformation trong giáo dục và đổi mới sáng tạo EdTech.',
  [
    'công nghệ giáo dục',
    'education technology',
    'edtech',
    'lms',
    'learning management system',
    'ai giáo dục',
    'vr ar giáo dục',
    'learning analytics',
    'edtech startup',
    'digital education',
    'K2AI',
  ],
  'education-technology',
);

export default function EducationTechnologyPage() {
  return <ModulePageTemplate moduleData={educationTechnologyModuleData} lessons={educationTechnologyLessons} />;
}
