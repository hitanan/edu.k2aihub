import { ModuleNavigation } from '@/types';

export const dailyLifeModuleData: ModuleNavigation = {
  id: 'daily-life',
  title: 'AI cho Đời Sống Hàng Ngày',
  subtitle: 'AI trong cuộc sống',
  description:
    'Khám phá cách AI có thể hỗ trợ cuộc sống hàng ngày từ quản lý tài chính, sức khỏe đến du lịch thông minh',
  category: ['professional', 'trending'], // Multiple categories
  icon: '🏠',
  color: 'from-emerald-600 to-cyan-600',
  totalDuration: '3-4 giờ',
  difficulty: 'Cơ bản',
  href: '/learning/ai/daily-life',
  features: ['Personal AI assistant', 'Financial management', 'Health & fitness', 'Smart travel'],
  tags: ['lifestyle', 'personal', 'health', 'finance'],
  prerequisites: ['Sử dụng smartphone/máy tính'],
  lessons: [
    {
      id: 'personal-assistant',
      title: 'Trợ lý AI cá nhân',
      duration: '45 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'financial-ai',
      title: 'Quản lý tài chính với AI',
      duration: '50 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'health-fitness',
      title: 'Sức khỏe & Fitness AI',
      duration: '40 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'travel-ai',
      title: 'Du lịch thông minh với AI',
      duration: '35 phút',
      difficulty: 'Cơ bản',
    },
  ],
};
