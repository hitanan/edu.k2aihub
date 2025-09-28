import { ModuleData } from '@/types';
import { businessMarketingLessons } from './business-marketing';

export const businessMarketingModule: ModuleData = {
  id: 'business-marketing',
  title: 'Kinh Doanh và Tiếp Thị Số',
  description:
    'Khám phá các chiến lược kinh doanh và tiếp thị số hiện đại, từ SEO, content marketing đến phân tích dữ liệu để tối ưu hóa hiệu quả kinh doanh.',
  link: '/learning/business-marketing',
  active: true,
  lessons: businessMarketingLessons,
  learningTime: '4 giờ',
  level: 'Cơ bản',
  author: 'K2AiHub',
  tags: ['Kinh doanh', 'Tiếp thị số', 'Marketing'],
  category: 'Kinh Doanh',
  resources: [
    {
      title: 'Google Digital Garage',
      url: 'https://learndigital.withgoogle.com/digitalgarage-vn/',
    },
    {
      title: 'HubSpot Academy',
      url: 'https://academy.hubspot.com/',
    },
  ],
  heroImageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=600&fit=crop',
};
