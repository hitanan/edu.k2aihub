import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { biologyHealthModuleData } from '@/data/modules/biology-health';
import { createModuleMetadata } from '@/utils/seo';

const MODULE_ID = 'biology-health';

export const metadata: Metadata = createModuleMetadata(
  biologyHealthModuleData.title,
  biologyHealthModuleData.description,
  biologyHealthModuleData.tags,
  MODULE_ID,
);

export default function BiologyHealthPage() {
  return <ModulePageTemplate moduleData={biologyHealthModuleData} lessons={biologyHealthModuleData.lessons || []} />;
}
