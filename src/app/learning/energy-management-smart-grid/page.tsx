import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { energyManagementLessons } from '@/data/energy-management-smart-grid';
import { energyManagementSmartGridModuleData } from '@/data/energy-management-smart-grid-module';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  energyManagementSmartGridModuleData.title,
  energyManagementSmartGridModuleData.description,
  ['energy management', 'smart grid', 'renewable energy', 'grid optimization', 'energy efficiency', 'sustainability', 'vietnam energy', 'k2aihub'],
  energyManagementSmartGridModuleData.id
);

export default function EnergyManagementSmartGridPage() {
  return (
    <ModulePageTemplate moduleData={energyManagementSmartGridModuleData} lessons={energyManagementLessons} />
  );
}