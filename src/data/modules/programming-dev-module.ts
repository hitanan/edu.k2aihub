import { ModuleData } from '@/types';
import { programmingDevLessons } from './programming-dev';

export const programmingDevModule: ModuleData = {
  id: 'programming-dev',
  title: 'Lập trình & Phát triển',
  description:
    'Học các công cụ, phương pháp và quy trình để phát triển phần mềm chuyên nghiệp và hiệu quả với sự trợ giúp của AI.',
  category: 'Lập trình',
  image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=600&fit=crop',
  tags: ['git', 'copilot', 'ai', 'devops', 'quy trình phát triển'],
  level: 'Cơ bản đến Trung bình',
  duration: '2 giờ',
  lessons: programmingDevLessons,
  features: [
    'Làm chủ GitHub Copilot để tăng tốc độ code.',
    'Sử dụng AI để review code và phát hiện lỗi sớm.',
    'Tự động hóa việc tạo tài liệu và comment.',
    'Khám phá các công cụ AI giúp debug và tối ưu hóa code.',
  ],
  prerequisites: ['Có kiến thức về ít nhất một ngôn ngữ lập trình.'],
  objectives: [
    'Sử dụng thành thạo các công cụ AI hỗ trợ lập trình.',
    'Hiểu và áp dụng AI vào quy trình phát triển phần mềm.',
    'Cải thiện chất lượng code và giảm thời gian phát triển.',
    'Nắm được các xu hướng mới nhất về AI trong ngành lập trình.',
  ],
  careerOutcomes: [
    'Trở thành lập trình viên có hiệu suất cao với sự hỗ trợ của AI.',
    'Cải thiện khả năng cạnh tranh trong thị trường việc làm công nghệ.',
    'Có khả năng áp dụng các công cụ AI vào bất kỳ dự án phần mềm nào.',
  ],
  color: 'from-gray-700 to-gray-900',
};
