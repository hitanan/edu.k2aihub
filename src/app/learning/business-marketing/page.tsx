import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { businessMarketingLessons } from '@/data/modules/business-marketing';
import { businessMarketingModuleData } from '@/data/modules/business-marketing';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  businessMarketingModuleData.title,
  businessMarketingModuleData.description,
  ['ai marketing', 'business automation', 'seo ai', 'chatbot', 'K2AI'],
  businessMarketingModuleData.id,
);

export default function BusinessMarketingPage() {
  return <ModulePageTemplate moduleData={businessMarketingModuleData} lessons={businessMarketingLessons} />;
}
