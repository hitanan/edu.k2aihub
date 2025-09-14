import { ModuleData } from '@/types';

export const smartManufacturingModule: ModuleData = {
  id: 'smart-manufacturing',
  title: 'Sản xuất thông minh',
  description:
    'Tìm hiểu về cuộc cách mạng công nghiệp 4.0 và cách các nhà máy thông minh đang thay đổi ngành sản xuất.',
  category: 'Công nghệ',
  lessons: [
    {
      id: 'intro-to-industry-4-0',
      title: 'Giới thiệu về Công nghiệp 4.0',
      description: 'Khám phá các công nghệ cốt lõi của Công nghiệp 4.0 như IoT, AI và Dữ liệu lớn.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'smart-factory',
      title: 'Nhà máy thông minh',
      description: 'Tìm hiểu cách các nhà máy thông minh hoạt động và lợi ích của chúng.',
      duration: '90 phút',
      difficulty: 'Trung bình',
      objectives: [],
      realWorldApplications: [],
    },
  ],
};
