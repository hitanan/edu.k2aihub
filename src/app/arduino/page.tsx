import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { arduinoLessons, arduinoModuleData } from '@/data/modules/arduino';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  arduinoModuleData.title,
  arduinoModuleData.description,
  ['Arduino', 'vi điều khiển', 'IoT', 'electronics', 'K2AI'],
  arduinoModuleData.id,
);

export default function ArduinoModulePage() {
  return <ModulePageTemplate moduleData={arduinoModuleData} lessons={arduinoLessons} />;
}