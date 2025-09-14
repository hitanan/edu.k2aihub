import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { futureCareersModuleData } from '@/data/modules/future-careers-ai';
import { Metadata } from 'next';

export const metadata: Metadata = createModuleMetadata(
  futureCareersModuleData.title,
  futureCareersModuleData.description,
  ['nghề nghiệp AI', 'tương lai công việc', 'kỹ năng AI', 'chuyển đổi số', 'thị trường lao động', 'K2AI'],
  futureCareersModuleData.id,
);

export default function FutureCareersPage() {
  return <ModulePageTemplate moduleData={futureCareersModuleData} lessons={futureCareersModuleData.lessons || []} />;
}
