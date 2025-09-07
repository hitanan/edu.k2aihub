import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { scratchLessons } from '@/data/scratch';
import { createModuleMetadata } from '@/utils/seo';
import { scratchModuleData } from '@/data/scratch-module';

export const metadata: Metadata = createModuleMetadata(
  scratchModuleData.title,
  scratchModuleData.description,
  ['Scratch', 'lập trình cho trẻ em', 'lập trình trực quan', 'K2AI'],
  scratchModuleData.id,
);

export default function ScratchModulePage() {
  return <ModulePageTemplate moduleData={scratchModuleData} lessons={scratchLessons} />;
}
