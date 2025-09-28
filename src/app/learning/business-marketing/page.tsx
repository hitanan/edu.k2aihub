import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { businessMarketingLessons } from '@/data/modules/business-marketing';
import { businessMarketingModule } from '@/data/modules/business-marketing-module';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  businessMarketingModule.title,
  businessMarketingModule.description,
  ['kinh doanh', 'tiếp thị số', 'marketing online', 'seo', 'content marketing', 'K2AI'],
  businessMarketingModule.id,
);

export default function BusinessMarketingPage() {
  return <ModulePageTemplate moduleData={businessMarketingModule} lessons={businessMarketingLessons} />;
}
