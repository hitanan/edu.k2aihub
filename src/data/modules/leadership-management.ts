import { ModuleData } from '@/types';

export const leadershipManagementModule: ModuleData = {
  id: 'leadership-management',
  title: 'Lãnh đạo và Quản lý',
  description: 'Phát triển kỹ năng lãnh đạo và quản lý hiệu quả để dẫn dắt đội nhóm và tổ chức thành công.',
  category: 'Kỹ năng chuyên nghiệp',
  lessons: [
    {
      id: 'leadership-styles',
      title: 'Các phong cách lãnh đạo',
      description: 'Tìm hiểu về các phong cách lãnh đạo khác nhau và khi nào nên áp dụng chúng.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'team-management',
      title: 'Quản lý đội nhóm',
      description: 'Học cách xây dựng và quản lý một đội nhóm hiệu quả.',
      duration: '90 phút',
      difficulty: 'Trung bình',
      objectives: [],
      realWorldApplications: [],
    },
  ],
};
