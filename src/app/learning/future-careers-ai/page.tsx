import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { futureCareersLessons } from '@/data/future-careers-ai';
import { futureCareersModuleData } from '@/data/future-careers-ai-module';
import { Metadata } from 'next';

export const metadata: Metadata = createModuleMetadata(
  'Định hướng Nghề nghiệp trong Kỷ nguyên AI',
  'Khám phá các xu hướng nghề nghiệp mới, những kỹ năng cần thiết và cách AI đang định hình lại thị trường lao động. Chuẩn bị cho tương lai của bạn ngay hôm nay.',
  ['nghề nghiệp AI', 'tương lai công việc', 'kỹ năng AI', 'chuyển đổi số', 'thị trường lao động', 'K2AI'],
  'future-careers-ai',
);

export default function FutureCareersPage() {
  return <ModulePageTemplate moduleData={futureCareersModuleData} lessons={futureCareersLessons} />;
}
