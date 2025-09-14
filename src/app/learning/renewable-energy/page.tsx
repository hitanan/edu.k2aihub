import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { renewableEnergyLessons } from '@/data/modules/renewable-energy';
import { createModuleMetadata } from '@/utils/seo';
import { renewableEnergyModuleData } from '@/data/modules/renewable-energy';

export const metadata: Metadata = createModuleMetadata(
  renewableEnergyModuleData.title,
  renewableEnergyModuleData.description,
  [
    'năng lượng tái tạo',
    'solar energy',
    'wind power',
    'energy storage',
    'smart grid',
    'vietnam renewable',
    'net zero 2050',
    'green technology',
    'sustainable energy',
    'K2AI',
  ],
  renewableEnergyModuleData.id,
);

export default function RenewableEnergyPage() {
  return <ModulePageTemplate moduleData={renewableEnergyModuleData} lessons={renewableEnergyLessons} />;
}
