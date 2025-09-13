import { ModuleData } from '@/types';

export const robosimModule: ModuleData = {
  id: 'robosim',
  title: 'Mô phỏng Robot',
  description: 'Học cách mô phỏng và lập trình robot trong môi trường ảo.',
  category: 'Robotics',
  lessons: [
    {
      id: 'intro-to-robosim',
      title: 'Giới thiệu về Mô phỏng Robot',
      description: 'Làm quen với các công cụ và khái niệm cơ bản trong mô phỏng robot.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'advanced-simulation',
      title: 'Mô phỏng nâng cao',
      description: 'Thực hành các kịch bản mô phỏng phức tạp và tương tác với môi trường ảo.',
      duration: '120 phút',
      difficulty: 'Trung bình',
      objectives: [],
      realWorldApplications: [],
    },
  ],
};
