import { ModuleData } from '@/types';
import { LeadershipLesson, leadershipManagementLessons } from './leadership-management';

export const leadershipManagementModuleData: ModuleData<LeadershipLesson> = {
  id: 'leadership-management',
  title: 'Lãnh đạo và Quản lý',
  description:
    'Phát triển kỹ năng lãnh đạo và quản lý hiệu quả để dẫn dắt đội nhóm và tổ chức thành công trong môi trường kinh doanh hiện đại.',
  category: 'Kỹ năng chuyên nghiệp',
  imageUrl: 'https://images.unsplash.com/photo-1573496130407-57329f01f769?w=800&h=400&fit=crop',
  lessons: leadershipManagementLessons,
};
