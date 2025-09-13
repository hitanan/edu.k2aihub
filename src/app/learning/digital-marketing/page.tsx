import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { digitalMarketingModuleData, lessons as digitalMarketingLessons } from '@/data/modules/digital-marketing';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  digitalMarketingModuleData.title,
  digitalMarketingModuleData.description,
  ['digital marketing', 'ecommerce', 'seo', 'social media', 'kinh doanh online', 'K2AI'],
  digitalMarketingModuleData.id,
);

export default function DigitalMarketingPage() {
  return <ModulePageTemplate moduleData={digitalMarketingModuleData} lessons={digitalMarketingLessons} />;
}
