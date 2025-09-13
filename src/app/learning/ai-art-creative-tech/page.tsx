import type { Metadata } from 'next';
import { aiArtCreativeTechLessons, aiArtCreativeTechModuleData } from '@/data/modules/ai-art-creative-tech';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';

export const metadata: Metadata = createModuleMetadata(
  'AI Art & Creative Technology - Nghệ Thuật AI',
  'Khóa học AI Art và Creative Technology. Từ Midjourney đến generative art',
  ['ai art', 'generative art', 'midjourney', 'dall-e', 'creative technology', 'digital art'],
  'ai-art-creative-tech',
);

export default function AiArtCreativeTechPage() {
  return <ModulePageTemplate moduleData={aiArtCreativeTechModuleData} lessons={aiArtCreativeTechLessons} />;
}
