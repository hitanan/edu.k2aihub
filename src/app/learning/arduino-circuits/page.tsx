import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { arduinoCircuitsLessons, arduinoCircuitsModuleData } from '@/data/modules/arduino-circuits';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  arduinoCircuitsModuleData.title,
  arduinoCircuitsModuleData.description,
  ['arduino', 'mạch điện tử', 'stem', 'robotics', 'K2AI'],
  arduinoCircuitsModuleData.id,
);

export default function ArduinoCircuitsPage() {
  return <ModulePageTemplate moduleData={arduinoCircuitsModuleData} lessons={arduinoCircuitsLessons} />;
}
