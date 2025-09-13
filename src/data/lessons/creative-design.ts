import { BaseLessonData } from '@/types/lesson-base';

export const creativeDesignLessons: BaseLessonData[] = [
  {
    id: 'midjourney-basics',
    title: 'Midjourney cơ bản',
    description: 'Học những điều cơ bản về Midjourney.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    objectives: ['Hiểu cách hoạt động của Midjourney', 'Tạo hình ảnh đầu tiên'],
    realWorldApplications: ['Tạo ảnh minh họa cho bài viết'],
  },
  {
    id: 'advanced-prompting',
    title: 'Prompt engineering nâng cao',
    description: 'Học cách viết prompt nâng cao cho Midjourney.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    objectives: ['Viết prompt phức tạp', 'Kiểm soát hình ảnh tốt hơn'],
    realWorldApplications: ['Tạo concept art cho game'],
  },
  {
    id: 'canva-ai',
    title: 'Canva AI Magic Studio',
    description: 'Khám phá sức mạnh của Canva AI Magic Studio.',
    duration: '50 phút',
    difficulty: 'Trung bình',
    objectives: ['Sử dụng các công cụ AI của Canva', 'Thiết kế nhanh hơn'],
    realWorldApplications: ['Tạo bài đăng mạng xã hội'],
  },
  {
    id: 'content-creation',
    title: 'Tạo nội dung với AI',
    description: 'Học cách tạo nội dung hấp dẫn bằng các công cụ AI.',
    duration: '45 phút',
    difficulty: 'Trung bình',
    objectives: ['Tạo ý tưởng nội dung', 'Viết nội dung tự động'],
    realWorldApplications: ['Viết blog, email marketing'],
  },
];
