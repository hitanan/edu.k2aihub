import type { Metadata } from 'next';
import BusinessMarketingClient from './BusinessMarketingClient';
import { createModuleMetadata } from '@/utils/seo';
import { businessMarketingLessons } from '@/data/business-marketing';
import { digitalMarketingLessons } from '@/data/digital-marketing';
import { BaseLessonData } from '@/types/lesson-base';

export const metadata: Metadata = createModuleMetadata(
  'AI cho Kinh Doanh & Marketing - Content Marketing, Customer Service',
  'Ứng dụng AI trong marketing và kinh doanh: tạo content marketing, AI customer service, market research và sales optimization với công cụ AI',
  [
    'AI marketing',
    'content marketing AI',
    'AI customer service',
    'market research AI',
    'sales optimization',
    'kinh doanh AI',
  ],
  'ai/business-marketing',
);

export default function BusinessMarketingAI() {
  const allLessons: BaseLessonData[] = [...businessMarketingLessons, ...digitalMarketingLessons];
  return <BusinessMarketingClient lessons={allLessons} />;
}
