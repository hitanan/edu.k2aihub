import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { chemicalEngineeringLessons } from '@/data/modules/chemical-engineering';
import { chemicalEngineeringModuleData } from '@/data/modules/chemical-engineering';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  chemicalEngineeringModuleData.title,
  chemicalEngineeringModuleData.description,
  ['chemical-engineering', 'education', 'K2AI', 'học tập thông minh'],
  chemicalEngineeringModuleData.id,
);

export default function ChemicalEngineeringPage() {
  return <ModulePageTemplate moduleData={chemicalEngineeringModuleData} lessons={chemicalEngineeringLessons} />;
}
