import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { economicGeographyVietnamModuleData } from '@/data/modules/economic-geography-vietnam';
import { createModuleMetadata } from '@/utils/seo';

const MODULE_ID = 'economic-geography-vietnam';

export const metadata: Metadata = createModuleMetadata(
  economicGeographyVietnamModuleData.title,
  economicGeographyVietnamModuleData.description,
  economicGeographyVietnamModuleData.tags,
  MODULE_ID,
);

export default function EconomicGeographyVietnamPage() {
  return (
    <ModulePageTemplate
      moduleData={economicGeographyVietnamModuleData}
      lessons={economicGeographyVietnamModuleData.lessons || []}
    />
  );
}
