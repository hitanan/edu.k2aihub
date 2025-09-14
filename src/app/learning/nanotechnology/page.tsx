import type { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { nanotechnologyModule, nanotechnologyLessons } from '@/data/modules/nanotechnology';

export const metadata: Metadata = createModuleMetadata(
  nanotechnologyModule.title,
  nanotechnologyModule.description,
  nanotechnologyModule.tags,
  nanotechnologyModule.id,
);

export default function NanotechnologyPage() {
  return <ModulePageTemplate moduleData={nanotechnologyModule} lessons={nanotechnologyLessons} />;
}
