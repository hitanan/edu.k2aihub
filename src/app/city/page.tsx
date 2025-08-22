import type { Metadata } from 'next';
import { createTitle, createDescription, createOpenGraphTitle } from '@/utils/seo';
import CityPageClient from './CityPageClient';

export const metadata: Metadata = {
  title: createTitle('34 Tỉnh Thành Việt Nam - Khám phá Địa lý với Bản đồ Tương tác'),
  description: createDescription(
    'Khám phá 34 tỉnh thành Việt Nam qua bản đồ tương tác thông minh. Tìm hiểu địa lý, văn hóa, lịch sử các vùng miền với công nghệ AI.',
  ),
  keywords: [
    '34 tỉnh thành Việt Nam',
    'bản đồ việt nam',
    'địa lý việt nam',
    'tỉnh thành việt nam',
    'bản đồ tương tác',
    'địa lý tương tác',
    'học địa lý',
    'K2AI',
    'giáo dục địa lý',
  ],
  openGraph: {
    title: createOpenGraphTitle('34 Tỉnh Thành Việt Nam - Khám phá Địa lý với Bản đồ Tương tác'),
    description:
      'Khám phá 34 tỉnh thành Việt Nam qua bản đồ tương tác thông minh. Tìm hiểu địa lý, văn hóa, lịch sử các vùng miền với công nghệ AI.',
    type: 'website',
  },
};

export default function CityPage() {
  return <CityPageClient />;
}
