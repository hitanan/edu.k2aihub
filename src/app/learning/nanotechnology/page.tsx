import type { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { nanotechnologyLessons } from '@/data/nanotechnology';
import { nanotechnologyModuleData } from '@/data/nanotechnology-module';

export const metadata: Metadata = createModuleMetadata(
  nanotechnologyModuleData.title,
  nanotechnologyModuleData.description,
  ['công nghệ nano', 'vật liệu tiên tiến', 'nanomedicine', 'quantum devices', 'nanotechnology vietnam', 'K2AI'],
  nanotechnologyModuleData.id,
);

export default function NanotechnologyPage() {
  return (
    <ModulePageTemplate
      moduleData={nanotechnologyModuleData}
      lessons={nanotechnologyLessons}
    />
  );
}
