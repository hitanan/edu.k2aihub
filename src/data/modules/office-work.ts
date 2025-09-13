import { ModuleData } from '@/types';

export const officeWorkModule: ModuleData = {
  id: 'office-work',
  title: 'Công việc văn phòng',
  description: 'Cải thiện kỹ năng làm việc văn phòng của bạn với các công cụ và kỹ thuật hiện đại.',
  category: 'Kỹ năng chuyên nghiệp',
  lessons: [
    {
      id: 'effective-communication',
      title: 'Giao tiếp hiệu quả',
      description: 'Học cách giao tiếp hiệu quả trong môi trường công sở.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'time-management',
      title: 'Quản lý thời gian',
      description: 'Các kỹ thuật quản lý thời gian để tăng năng suất.',
      duration: '90 phút',
      difficulty: 'Trung bình',
      objectives: [],
      realWorldApplications: [],
    },
  ],
};
