import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { metaverseVREducationModule } from '@/data/modules/metaverse-vr-education';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  metaverseVREducationModule.title,
  metaverseVREducationModule.description,
  ['metaverse', 'vr', 'ar', 'giáo dục', 'thực tế ảo', 'công nghệ', 'tương lai', 'K2AI'],
  metaverseVREducationModule.id,
);

export default function MetaverseVREducationMainPage() {
  return <ModulePageTemplate moduleData={metaverseVREducationModule} lessons={metaverseVREducationModule.lessons || []} />;
}
