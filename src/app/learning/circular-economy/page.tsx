import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { circularEconomyLessons } from '@/data/modules/circular-economy';
import { circularEconomyModuleData } from '@/data/modules/circular-economy';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  circularEconomyModuleData.title,
  circularEconomyModuleData.description,
  ['kinh tế tuần hoàn', 'bền vững', 'thiết kế tuần hoàn', 'không rác thải', 'K2AI'],
  circularEconomyModuleData.id,
);

export default function CircularEconomyPage() {
  return <ModulePageTemplate moduleData={circularEconomyModuleData} lessons={circularEconomyLessons} />;
}
