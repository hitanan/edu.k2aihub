import {
  digitalArtsCreativeTechModuleData,
  lessons as DigitalArtsLessons,
} from '@/data/modules/digital-arts-creative-tech';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { createModuleMetadata } from '@/utils/seo';
import { Metadata } from 'next';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  digitalArtsCreativeTechModuleData.title,
  digitalArtsCreativeTechModuleData.description,
  ['digital art', 'motion graphics', 'ai art', 'creative technology', 'vr content', 'nghệ thuật số', 'K2AI'],
  digitalArtsCreativeTechModuleData.id,
);

export default function DigitalArtsCreativeTechMainPage() {
  return <ModulePageTemplate moduleData={digitalArtsCreativeTechModuleData} lessons={DigitalArtsLessons} />;
}
