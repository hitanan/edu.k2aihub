import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { chemistryEnvironmentModuleData } from '@/data/modules/chemistry-environment';
import { createModuleMetadata } from '@/utils/seo';

const MODULE_ID = 'chemistry-environment';

export const metadata: Metadata = createModuleMetadata(
  chemistryEnvironmentModuleData.title,
  chemistryEnvironmentModuleData.description,
  chemistryEnvironmentModuleData.tags,
  MODULE_ID,
);

export default function ChemistryEnvironmentPage() {
  return (
    <ModulePageTemplate
      moduleData={chemistryEnvironmentModuleData}
      lessons={chemistryEnvironmentModuleData.lessons || []}
    />
  );
}
