import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { pythonLessons, pythonModuleData } from '@/data/modules/python';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'Python Programming - Lập Trình Python',
  'Học Python từ cơ bản đến nâng cao. Khám phá Data Science, Web Development, AI và tự động hóa với ngôn ngữ lập trình phổ biến nhất thế giới.',
  [
    'python programming',
    'học python',
    'lập trình python',
    'data science',
    'web development',
    'machine learning',
    'pandas',
    'django',
    'K2AI',
  ],
  'python',
);

export default function PythonPage() {
  return <ModulePageTemplate moduleData={pythonModuleData} lessons={pythonLessons} />;
}
