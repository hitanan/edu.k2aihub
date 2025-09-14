import type { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { sustainableAgricultureLessons } from '@/data/modules/sustainable-agriculture';
import { sustainableAgricultureModuleData } from '@/data/modules/sustainable-agriculture';

export const metadata: Metadata = createModuleMetadata(
  sustainableAgricultureModuleData.title,
  sustainableAgricultureModuleData.description,
  ['nông nghiệp bền vững', 'agritech', 'nông nghiệp công nghệ cao', 'iot', 'kinh tế tuần hoàn', 'K2AI'],
  sustainableAgricultureModuleData.id,
);

export default function SustainableAgriculturePage() {
  return <ModulePageTemplate moduleData={sustainableAgricultureModuleData} lessons={sustainableAgricultureLessons} />;
}
