import { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { sustainableEnergyModuleData } from '@/data/modules/sustainable-energy-green-tech';
import { sustainableEnergyGreenTechLessons } from '@/data/modules/sustainable-energy-green-tech';

export const metadata: Metadata = createModuleMetadata(
  sustainableEnergyModuleData.title,
  sustainableEnergyModuleData.description,
  [], // No keywords property in ModuleData
  sustainableEnergyModuleData.id,
);

export default function SustainableEnergyGreenTechModulePage() {
  return <ModulePageTemplate moduleData={sustainableEnergyModuleData} lessons={sustainableEnergyGreenTechLessons} />;
}
