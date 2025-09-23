import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { stemLessons, stemModuleData } from '@/data/modules/stem';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  stemModuleData.title,
  stemModuleData.description,
  ['STEM', 'khoa học', 'công nghệ', 'kỹ thuật', 'toán học', 'K2AI'],
  stemModuleData.id,
);

export default function StemModulePage() {
  return <ModulePageTemplate moduleData={stemModuleData} lessons={stemLessons} />;
}