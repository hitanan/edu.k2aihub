import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { energyManagementLessons } from '@/data/personal-energy-performance-management';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

export const metadata: Metadata = createModuleMetadata(
  'Quản Lý Năng Lượng và Hiệu Suất Cá Nhân',
  'Học cách quản lý năng lượng cá nhân, optimize performance, xây dựng resilience và duy trì sức khỏe trong cuộc sống và công việc.',
  ['energy management', 'performance optimization', 'stress resilience', 'wellness', 'K2AiHub'],
  'personal-energy-performance-management'
);

export default function EnergyManagementMainPage() {
  const moduleData = {
    id: 'personal-energy-performance-management',
    title: 'Quản Lý Năng Lượng và Hiệu Suất Cá Nhân',
    subtitle: 'Tối ưu hóa hiệu suất bền vững',
    description: 'Trong thời đại làm việc cường độ cao, việc quản lý năng lượng cá nhân hiệu quả quan trọng hơn quản lý thời gian. Module này dạy bạn cách tối ưu hóa 4 loại năng lượng (vật lý, tinh thần, cảm xúc, tâm linh), xây dựng resilience và duy trì hiệu suất cao bền vững.',
    level: 'Trung bình',
    duration: '6-7 giờ',
    category: 'Personal Development',
    features: [
      'Quản lý 4 loại năng lượng cá nhân',
      'Tối ưu hóa hiệu suất nhận thức',
      'Xây dựng khả năng chống chịu stress',
      'Chiến lược performance bền vững'
    ],
    icon: '⚡',
    color: 'from-orange-600 to-red-600',
    objectives: [
      'Hiểu về 4 loại năng lượng và cách quản lý hiệu quả',
      'Phát triển chiến lược tối ưu hóa cognitive performance',
      'Xây dựng resilience và khả năng recovery nhanh chóng',
      'Tạo hệ thống personal performance bền vững'
    ],
    prerequisites: [
      'Động lực cải thiện hiệu suất cá nhân',
      'Sẵn sàng theo dõi và thay đổi thói quen'
    ],
    careerOutcomes: [
      'Performance Coach',
      'Wellness Consultant',
      'Executive Coach',
      'Human Performance Specialist',
      'Resilience Trainer'
    ],
    industryApplications: [
      'Corporate wellness programs',
      'Sports và athletic performance',
      'Healthcare và mental health',
      'Education và training'
    ],
    marketDemand: {
      averageSalary: '18-35 triệu VNĐ',
      jobGrowth: '+20%',
      hireDemand: 'Trung bình'
    },
    relatedModules: [
      K2Module.CriticalThinking,
      K2Module.CommunicationSkills,
      K2Module.CrossCultural
    ],
    heroImageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop'
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={energyManagementLessons}
    />
  );
}