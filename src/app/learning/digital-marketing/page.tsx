import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { digitalMarketingLessons } from '@/data/digital-marketing';
import { digitalMarketingModuleData } from '@/data/digital-marketing-module';
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
