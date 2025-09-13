import type { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { nanotechnologyModule } from '@/data/modules/nanotechnology';

export const metadata: Metadata = createModuleMetadata(
  nanotechnologyModule.title,
  nanotechnologyModule.description,
  ['công nghệ nano', 'vật liệu tiên tiến', 'nanomedicine', 'quantum devices', 'nanotechnology vietnam', 'K2AI'],
  nanotechnologyModule.id,
);

export default function NanotechnologyPage() {
  return <ModulePageTemplate moduleData={nanotechnologyModule} lessons={nanotechnologyModule.lessons || []} />;
}
