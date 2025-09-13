import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { scratchLessons, scratchModuleData } from '@/data/modules/scratch';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  scratchModuleData.title,
  scratchModuleData.description,
  ['Scratch', 'lập trình cho trẻ em', 'lập trình trực quan', 'K2AI'],
  scratchModuleData.id,
);

export default function ScratchModulePage() {
  return <ModulePageTemplate moduleData={scratchModuleData} lessons={scratchLessons} />;
}
