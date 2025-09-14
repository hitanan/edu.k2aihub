import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { semiconductorLessons } from '@/data/modules/semiconductor-technology';
import { createModuleMetadata } from '@/utils/seo';
import { semiconductorTechnologyModuleData } from '@/data/modules/semiconductor-technology';

export const metadata: Metadata = createModuleMetadata(
  semiconductorTechnologyModuleData.title,
  semiconductorTechnologyModuleData.description,
  ['bán dẫn', 'thiết kế vi mạch', 'chip', 'semiconductor', 'VLSI', 'K2AI'],
  semiconductorTechnologyModuleData.id,
);

export default function SemiconductorTechnologyPage() {
  return <ModulePageTemplate moduleData={semiconductorTechnologyModuleData} lessons={semiconductorLessons} />;
}
