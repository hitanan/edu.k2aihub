import type { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { stemLessons, stemModuleData } from '@/data/modules/stem';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  stemModuleData.title,
  stemModuleData.description,
  ['stem education', 'science', 'technology', 'engineering', 'mathematics', 'kids coding', 'K2AI'],
  stemModuleData.id,
);

export default function STEMPage() {
  return <ModulePageTemplate moduleData={stemModuleData} lessons={stemLessons} />;
}
