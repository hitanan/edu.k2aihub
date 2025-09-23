import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { officeWorkModule } from '@/data/modules/office-work';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  officeWorkModule.title,
  officeWorkModule.description,
  ['office work', 'văn phòng', 'kỹ năng làm việc', 'Microsoft Office', 'K2AI'],
  officeWorkModule.id,
);

export default function OfficeWorkModulePage() {
  return <ModulePageTemplate moduleData={officeWorkModule} lessons={officeWorkModule.lessons || []} />;
}