import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { energyManagementModule } from '@/data/modules/energy-management';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  energyManagementModule.title,
  energyManagementModule.description,
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
  energyManagementModule.id,
);

export default function EnergyManagementSmartGridPage() {
  return <ModulePageTemplate moduleData={energyManagementModule} lessons={energyManagementModule.lessons || []} />;
}
