import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { personalEnergyPerformanceManagementModule } from '@/data/modules/personal-energy-performance-management';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  personalEnergyPerformanceManagementModule.title,
  personalEnergyPerformanceManagementModule.description,
  ['energy management', 'performance optimization', 'stress resilience', 'wellness', 'K2AiHub'],
  personalEnergyPerformanceManagementModule.id,
);

export default function EnergyManagementMainPage() {
  return (
    <ModulePageTemplate moduleData={personalEnergyPerformanceManagementModule} lessons={personalEnergyPerformanceManagementModule.lessons || []} />
  );
}
