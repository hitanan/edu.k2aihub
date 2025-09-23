import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { greenTechLessons, greenTechnologyModuleData } from '@/data/modules/green-technology';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  greenTechnologyModuleData.title,
  greenTechnologyModuleData.description,
  ['green technology', 'công nghệ xanh', 'năng lượng tái tạo', 'sustainability', 'K2AI'],
  greenTechnologyModuleData.id,
);

export default function GreenTechnologyModulePage() {
  return <ModulePageTemplate moduleData={greenTechnologyModuleData} lessons={greenTechLessons} />;
}