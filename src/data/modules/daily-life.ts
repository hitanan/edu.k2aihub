import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { dailyLifeLessons } from '@/data/lessons/daily-life';

export const dailyLifeModuleData: ModuleData = {
  id: K2Module.DailyLife,
  title: 'AI cho Đời Sống Hàng Ngày',
  subtitle: 'AI trong cuộc sống',
  description:
    'Khám phá cách AI có thể hỗ trợ cuộc sống hàng ngày từ quản lý tài chính, sức khỏe đến du lịch thông minh',
  category: 'Đời sống',
  icon: '🏠',
  color: 'from-emerald-600 to-cyan-600',
  level: 'Cơ bản',
  duration: '3-4 giờ',
  features: ['Personal AI assistant', 'Financial management', 'Health & fitness', 'Smart travel'],
  prerequisites: ['Sử dụng smartphone/máy tính'],
  objectives: [
    'Sử dụng trợ lý AI cá nhân để quản lý công việc và cuộc sống hiệu quả.',
    'Áp dụng các công cụ AI để quản lý tài chính cá nhân thông minh hơn.',
    'Tận dụng AI để theo dõi sức khỏe, thể chất và xây dựng lối sống lành mạnh.',
    'Lên kế hoạch và thực hiện các chuyến du lịch một cách thông minh và tiết kiệm với sự trợ giúp của AI.',
  ],
  careerOutcomes: ['Không áp dụng trực tiếp cho sự nghiệp, nhưng nâng cao hiệu suất cá nhân trong mọi lĩnh vực.'],
  industryApplications: ['Quản lý cá nhân', 'Sức khỏe và thể chất', 'Tài chính cá nhân', 'Du lịch và giải trí'],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'N/A',
    hireDemand: 'N/A',
  },
  relatedModules: ['financial-literacy', 'mental-health-tech', 'personal-energy-performance-management'],
  lessons: dailyLifeLessons,
};
