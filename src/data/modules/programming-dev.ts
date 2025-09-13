import { ModuleData } from '@/types';

export const programmingDevModule: ModuleData = {
  id: 'programming-dev',
  title: 'Phát triển lập trình',
  description: 'Học các ngôn ngữ lập trình và công cụ phát triển phần mềm phổ biến.',
  category: 'Lập trình',
  lessons: [
    {
      id: 'git-version-control',
      title: 'Quản lý phiên bản với Git',
      description: 'Học cách sử dụng Git để quản lý mã nguồn và hợp tác trong các dự án phần mềm.',
      duration: '90 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'agile-development',
      title: 'Phát triển phần mềm Agile',
      description: 'Tìm hiểu về phương pháp phát triển phần mềm linh hoạt Agile và Scrum.',
      duration: '120 phút',
      difficulty: 'Trung bình',
      objectives: [],
      realWorldApplications: [],
    },
  ],
};
