import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { crossPlatformStrategyLessons } from '@/data/cross-platform-strategy';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/k2-modules';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Chiến Lược Đa Nền Tảng - Marketing Thống Nhất',
  'Tối ưu hóa thương hiệu trên tất cả các nền tảng số. Học cách xây dựng chiến lược marketing đa nền tảng hiệu quả, tăng engagement và ROI.',
  [
    'cross-platform strategy',
    'multi-platform marketing',
    'brand consistency',
    'digital marketing',
    'social media strategy',
    'marketing tự động',
    'K2AI',
  ],
  'cross-platform-strategy',
);

export default function CrossPlatformStrategyPage() {
  const moduleData = {
    id: 'cross-platform-strategy',
    title: 'Chiến Lược Đa Nền Tảng',
    subtitle: 'Marketing Thống Nhất Trên Mọi Kênh',
    description:
      'Tối ưu hóa thương hiệu và marketing trên tất cả các nền tảng số. Học cách xây dựng chiến lược đa nền tảng hiệu quả, duy trì tính nhất quán thương hiệu và tối đa hóa ROI marketing.',
    level: 'Nâng cao',
    duration: '12-15 giờ',
    category: 'Digital Marketing',
    features: [
      'Chiến lược thương hiệu thống nhất',
      'Tối ưu hóa cho từng nền tảng',
      'Phân tích đa nền tảng',
      'Tự động hóa marketing',
    ],
    icon: '🌐',
    color: 'from-purple-600 to-pink-600',
    objectives: [
      'Xây dựng chiến lược marketing đa nền tảng',
      'Duy trì tính nhất quán thương hiệu',
      'Tối ưu hóa nội dung cho từng platform',
      'Phân tích hiệu quả cross-platform',
      'Tự động hóa quy trình marketing',
    ],
    prerequisites: [
      'Kiến thức cơ bản về digital marketing',
      'Hiểu biết về các nền tảng social media',
      'Kỹ năng phân tích dữ liệu cơ bản',
    ],
    careerOutcomes: [
      'Digital Marketing Manager',
      'Cross-Platform Strategy Specialist',
      'Brand Marketing Manager',
      'Marketing Automation Specialist',
      'Social Media Strategy Director',
    ],
    industryApplications: [
      'E-commerce & Retail',
      'Technology & Software',
      'Entertainment & Media',
      'Financial Services',
      'Healthcare & Wellness',
    ],
    marketDemand: {
      averageSalary: '25-45 triệu VNĐ',
      jobGrowth: '+35%',
      hireDemand: 'Rất cao',
    },
    heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    relatedModules: [
      K2Module.DigitalMarketing,
      K2Module.ContentCreator,
      K2Module.DataScienceAnalytics,
      K2Module.AIApplications,
    ],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={crossPlatformStrategyLessons} />;
}
