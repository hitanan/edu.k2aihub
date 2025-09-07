import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { energyManagementLessons } from '@/data/personal-energy-performance-management';
import { createModuleMetadata } from '@/utils/seo';
import { personalEnergyPerformanceManagementModuleData } from '@/data/personal-energy-performance-management-module';

export const metadata: Metadata = createModuleMetadata(
  personalEnergyPerformanceManagementModuleData.title,
  personalEnergyPerformanceManagementModuleData.description,
  ['energy management', 'performance optimization', 'stress resilience', 'wellness', 'K2AiHub'],
  personalEnergyPerformanceManagementModuleData.id,
);

export default function EnergyManagementMainPage() {
  return (
    <ModulePageTemplate moduleData={personalEnergyPerformanceManagementModuleData} lessons={energyManagementLessons} />
  );
}
