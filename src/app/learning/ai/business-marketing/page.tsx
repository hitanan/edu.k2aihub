import type { Metadata } from 'next';
import BusinessMarketingClient from './BusinessMarketingClient';
import { createModuleMetadata } from '@/utils/seo';

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
  return <BusinessMarketingClient />;
}
