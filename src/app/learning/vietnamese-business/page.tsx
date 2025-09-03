import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { vietnameseBusinessLessons } from '@/data/vietnamese-business';
import { K2Module } from '@/data/moduleNavigation';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Vietnamese Business & Entrepreneurship - K2AiHub',
  'Khóa học kinh doanh và khởi nghiệp tại Việt Nam: startup ecosystem, quy định pháp lý, FinTech và e-commerce strategies. Thành công trong thị trường Việt Nam.',
  [
    'kinh doanh việt nam',
    'startup vietnam',
    'fintech vietnam',
    'e-commerce vietnam',
    'doanh nghiệp việt nam',
    'đầu tư việt nam',
    'K2AiHub',
  ],
  'vietnamese-business',
);

export default function VietnameseBusinessPage() {
  const moduleData = {
    id: 'vietnamese-business',
    title: 'Vietnamese Business & Entrepreneurship',
    subtitle: 'Kinh doanh và Khởi nghiệp Việt Nam',
    description:
      'Khóa học toàn diện về kinh doanh và khởi nghiệp trong thị trường Việt Nam. Học navigation quy định pháp lý, startup ecosystem, FinTech development và e-commerce strategies được tối ưu cho văn hóa và consumer behavior Việt Nam.',
    level: 'Trung bình',
    duration: '16-20 giờ',
    category: 'Professional Skills',
    features: [
      'Vietnam Startup Ecosystem navigation và legal compliance',
      'FinTech Business Development với Vietnamese regulations',
      'E-commerce Strategy cho Vietnamese consumers',
      'Government Relations và partnership building',
    ],
    icon: '🏪',
    color: 'from-green-600 to-blue-600',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
    heroImageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    objectives: [
      'Navigate Vietnamese startup ecosystem và regulatory environment',
      'Develop FinTech solutions compliant với Vietnamese banking laws',
      'Build successful e-commerce business cho Vietnamese market',
      'Create sustainable business models với local partnerships',
    ],
    prerequisites: [
      'Basic business knowledge và entrepreneurial mindset',
      'Understanding of Vietnamese market dynamics',
      'Familiarity với digital business models',
    ],
    careerOutcomes: [
      'Vietnamese Market Business Development Manager',
      'FinTech Product Manager và Compliance Specialist',
      'E-commerce Strategy Director cho Vietnamese brands',
      'Startup Founder và Investment Relations Manager',
    ],
    industryApplications: [
      'Technology Startup Creation và Scaling',
      'FinTech Services Development cho Vietnamese banks',
      'E-commerce Platform Optimization',
      'Foreign Investment Advisory và Market Entry',
    ],
    marketDemand: {
      averageSalary: '30-60 triệu VNĐ',
      jobGrowth: '+38%',
      hireDemand: 'Rất cao',
    },
    marketData: {
      marketSize: '$8.2B',
      marketNote: 'Vietnamese Digital Economy 2024',
      jobGrowth: '+38%',
      jobNote: 'Business Development Jobs Growth',
      reduction: '35M+',
      reductionNote: 'Working Age Population',
      startups: '3.2K+',
      startupsNote: 'Active Vietnamese Startups',
    },
    relatedModules: [K2Module.FinancialLiteracy, K2Module.DigitalMarketing, K2Module.VietnameseLanguageTech],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={vietnameseBusinessLessons} />;
}
