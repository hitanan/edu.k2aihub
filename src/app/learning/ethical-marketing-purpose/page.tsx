import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { ethicalMarketingPurposeModule } from '@/data/modules/ethical-marketing-purpose';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  ethicalMarketingPurposeModule.title,
  ethicalMarketingPurposeModule.description,
  [
    'ethical marketing',
    'purpose-driven brands',
    'sustainable marketing',
    'social impact',
    'conscious branding',
    'vietnam marketing ethics',
    'responsible advertising',
    'k2aihub',
  ],
  ethicalMarketingPurposeModule.id,
);

export default function EthicalMarketingPurposePage() {
  return (
    <ModulePageTemplate
      moduleData={ethicalMarketingPurposeModule}
      lessons={ethicalMarketingPurposeModule.lessons || []}
    />
  );
}
