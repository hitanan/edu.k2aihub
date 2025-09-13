import { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { greenTechnologyModuleData, greenTechLessons } from '@/data/modules/green-technology';

export const metadata: Metadata = createModuleMetadata(
  greenTechnologyModuleData.title,
  greenTechnologyModuleData.description,
  ['green technology', 'sustainability', 'renewable energy', 'smart cities', 'K2AI'],
  greenTechnologyModuleData.id,
);

export default function GreenTechnologyPage() {
  return <ModulePageTemplate moduleData={greenTechnologyModuleData} lessons={greenTechLessons} />;
}
