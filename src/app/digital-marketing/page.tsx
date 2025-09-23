import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { lessons, digitalMarketingModuleData } from '@/data/modules/digital-marketing';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  digitalMarketingModuleData.title,
  digitalMarketingModuleData.description,
  ['digital marketing', 'tiếp thị số', 'marketing online', 'SEO', 'K2AI'],
  digitalMarketingModuleData.id,
);

export default function DigitalMarketingModulePage() {
  return <ModulePageTemplate moduleData={digitalMarketingModuleData} lessons={lessons} />;
}