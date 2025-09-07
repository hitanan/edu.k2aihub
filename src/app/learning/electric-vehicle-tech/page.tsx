import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { electricVehicleLessons } from '@/data/electric-vehicle-tech';
import { electricVehicleTechModuleData } from '@/data/electric-vehicle-tech-module';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  electricVehicleTechModuleData.title,
  electricVehicleTechModuleData.description,
  ['xe điện', 'xe tự hành', 'công nghệ pin', 'hạ tầng sạc', 'VinFast', 'K2AI'],
  electricVehicleTechModuleData.id,
);

export default function ElectricVehiclePage() {
  return <ModulePageTemplate moduleData={electricVehicleTechModuleData} lessons={electricVehicleLessons} />;
}
