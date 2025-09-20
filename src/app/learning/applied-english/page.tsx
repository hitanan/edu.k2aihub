import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { appliedEnglishModuleData } from '@/data/modules/applied-english';
import { createModuleMetadata } from '@/utils/seo';

const MODULE_ID = 'applied-english';

export const metadata: Metadata = createModuleMetadata(
  appliedEnglishModuleData.title,
  appliedEnglishModuleData.description,
  appliedEnglishModuleData.tags,
  MODULE_ID,
);

export default function AppliedEnglishPage() {
  return <ModulePageTemplate moduleData={appliedEnglishModuleData} lessons={appliedEnglishModuleData.lessons || []} />;
}
