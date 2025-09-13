import { ModuleData } from '@/types';

export const semiconductorTechnologyModule: ModuleData = {
  id: 'semiconductor-technology',
  title: 'Công nghệ bán dẫn',
  description: 'Khám phá thế giới của công nghệ bán dẫn, nền tảng của mọi thiết bị điện tử hiện đại.',
  category: 'Công nghệ',
  lessons: [
    {
      id: 'intro-to-semiconductors',
      title: 'Giới thiệu về Bán dẫn',
      description: 'Tìm hiểu về vật liệu bán dẫn và tại sao chúng lại quan trọng.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'chip-manufacturing',
      title: 'Sản xuất Chip',
      description: 'Khám phá quy trình phức tạp để sản xuất chip máy tính.',
      duration: '90 phút',
      difficulty: 'Trung bình',
      objectives: [],
      realWorldApplications: [],
    },
  ],
};
