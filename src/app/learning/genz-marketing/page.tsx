import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { genZMarketingModuleData, genZMarketingLessons } from '@/data/modules/genz-marketing';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Gen Z Marketing & Authentic Branding',
  'Hiểu sâu về tâm lý Gen Z và develop authentic marketing strategies resonate với thế hệ digital natives.',
  ['gen z marketing', 'authentic branding', 'inclusive marketing', 'brand activism', 'K2AI', 'học tập thông minh'],
  'genz-marketing',
);

export default function GenZMarketingPage() {
  return <ModulePageTemplate moduleData={genZMarketingModuleData} lessons={genZMarketingLessons} />;
}
