import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { officeWorkLessons } from '@/data/modules/office-work';
import { officeWorkModuleData } from '@/data/modules/office-work-module';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  officeWorkModuleData.title,
  officeWorkModuleData.description,
  officeWorkModuleData.tags,
  officeWorkModuleData.id,
);

export default function OfficeWorkModulePage() {
  return <ModulePageTemplate moduleData={officeWorkModuleData} lessons={officeWorkLessons} />;
}
