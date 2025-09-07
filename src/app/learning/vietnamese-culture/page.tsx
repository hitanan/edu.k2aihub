import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { vietnameseCultureLessons } from '@/data/vietnamese-culture';
import { createModuleMetadata } from '@/utils/seo';
import { vietnameseCultureModuleData } from '@/data/vietnamese-culture-module';

export const metadata: Metadata = createModuleMetadata(
  vietnameseCultureModuleData.title,
  vietnameseCultureModuleData.description,
  ['văn hóa việt nam', 'di sản số', 'tourism technology', 'cultural preservation', 'digital heritage'],
  vietnameseCultureModuleData.id
);

export default function VietnameseCulturePage() {
  return (
    <ModulePageTemplate
      moduleData={vietnameseCultureModuleData}
      lessons={vietnameseCultureLessons}
    />
  );
}
