import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { ethicalMarketingLessons } from '@/data/ethical-marketing-purpose';
import { ethicalMarketingPurposeModuleData } from '@/data/ethical-marketing-purpose-module';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  ethicalMarketingPurposeModuleData.title,
  ethicalMarketingPurposeModuleData.description,
  ['ethical marketing', 'purpose-driven brands', 'sustainable marketing', 'social impact', 'conscious branding', 'vietnam marketing ethics', 'responsible advertising', 'k2aihub'],
  ethicalMarketingPurposeModuleData.id
);

export default function EthicalMarketingPurposePage() {
  return <ModulePageTemplate moduleData={ethicalMarketingPurposeModuleData} lessons={ethicalMarketingLessons} />;
}
