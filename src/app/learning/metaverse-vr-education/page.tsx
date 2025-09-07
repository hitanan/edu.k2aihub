import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { MetaverseVREducationLessons } from '@/data/metaverse-vr-education';
import { createModuleMetadata } from '@/utils/seo';
import { metaverseVREducationModuleData } from '@/data/metaverse-vr-education-module';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  metaverseVREducationModuleData.title,
  metaverseVREducationModuleData.description,
  ['metaverse', 'vr', 'ar', 'giáo dục', 'thực tế ảo', 'công nghệ', 'tương lai', 'K2AI'],
  metaverseVREducationModuleData.id,
);

export default function MetaverseVREducationMainPage() {
  return <ModulePageTemplate moduleData={metaverseVREducationModuleData} lessons={MetaverseVREducationLessons} />;
}
