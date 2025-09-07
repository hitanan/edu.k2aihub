import { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { greenTechnologyModuleData } from '@/data/green-technology-module';
import { greenTechLessons } from '@/data/green-technology';

export const metadata: Metadata = createModuleMetadata(
  greenTechnologyModuleData.title,
  greenTechnologyModuleData.description,
  ['green technology', 'sustainability', 'renewable energy', 'smart cities', 'K2AI'],
  greenTechnologyModuleData.id,
);

export default function GreenTechnologyPage() {
  return <ModulePageTemplate moduleData={greenTechnologyModuleData} lessons={greenTechLessons} />;
}
