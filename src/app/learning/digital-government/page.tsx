import { digitalGovernmentModuleData, lessons as digitalGovLessons } from '@/data/modules/digital-government';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { createModuleMetadata } from '@/utils/seo';
import { Metadata } from 'next';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  digitalGovernmentModuleData.title,
  digitalGovernmentModuleData.description,
  [
    'chính phủ điện tử',
    'smart city vietnam',
    'e governance',
    'civic technology',
    'dịch vụ công trực tuyến',
    'công nghệ công dân',
    'K2AiHub',
  ],
  digitalGovernmentModuleData.id,
);

export default function DigitalGovernmentPage() {
  return <ModulePageTemplate moduleData={digitalGovernmentModuleData} lessons={digitalGovLessons} />;
}
