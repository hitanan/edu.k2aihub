import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { electricVehicleTechModuleData, electricVehicleLessons } from '@/data/modules/electric-vehicle-tech';
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
