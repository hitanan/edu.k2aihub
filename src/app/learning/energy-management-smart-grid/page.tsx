import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { energyManagementSmartGridModule } from '@/data/modules/energy-management-smart-grid';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  energyManagementSmartGridModule.title,
  energyManagementSmartGridModule.description,
  [
    'energy management',
    'smart grid',
    'renewable energy',
    'grid optimization',
    'energy efficiency',
    'sustainability',
    'vietnam energy',
    'k2aihub',
  ],
  energyManagementSmartGridModule.id,
);

export default function EnergyManagementSmartGridPage() {
  return (
    <ModulePageTemplate
      moduleData={energyManagementSmartGridModule}
      lessons={energyManagementSmartGridModule.lessons || []}
    />
  );
}
