import { ModuleData } from '@/types';

export const aiLearningModule: ModuleData = {
  id: 'ai-learning',
  title: 'Học máy và AI',
  description:
    'Khám phá các khái niệm cơ bản về trí tuệ nhân tạo và học máy, và cách chúng được áp dụng trong thực tế.',
  category: 'Công nghệ',
  lessons: [
    {
      id: 'intro-to-ai',
      title: 'Giới thiệu về AI',
      description: 'Tìm hiểu về lịch sử và các loại trí tuệ nhân tạo.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'machine-learning-basics',
      title: 'Cơ bản về Học máy',
      description: 'Khám phá các thuật toán học máy phổ biến.',
      duration: '90 phút',
      difficulty: 'Trung bình',
      objectives: [],
      realWorldApplications: [],
    },
  ],
};
