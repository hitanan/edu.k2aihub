import { ModuleData } from '@/types';
import { educationLearningLessons } from './education-learning';

export const educationLearningModule: ModuleData = {
  id: 'education-learning',
  title: 'Học tập & Giáo dục với AI',
  description:
    'Khám phá cách AI đang cách mạng hóa giáo dục, từ việc trở thành gia sư cá nhân đến việc tăng tốc nghiên cứu và học ngôn ngữ.',
  category: 'Giáo dục',
  image: 'https://images.unsplash.com/photo-1503676260728-1c64c1a5341e?w=1200&h=600&fit=crop',
  tags: ['học tập', 'giáo dục', 'ai', 'gia sư', 'nghiên cứu'],
  level: 'Cơ bản',
  duration: '2 giờ',
  lessons: educationLearningLessons,
  features: [
    'Sử dụng AI như một gia sư cá nhân 24/7.',
    'Tăng tốc độ nghiên cứu và phân tích tài liệu.',
    'Phương pháp học ngôn ngữ mới với sự hỗ trợ của AI.',
    'Kỹ năng tóm tắt và nắm bắt thông tin hiệu quả.',
  ],
  prerequisites: ['Không yêu cầu kiến thức chuyên môn.'],
  objectives: [
    'Hiểu vai trò của AI trong giáo dục cá nhân hóa.',
    'Sử dụng các công cụ AI để hỗ trợ học tập và nghiên cứu.',
    'Phát triển kỹ năng học tập hiệu quả hơn với sự trợ giúp của AI.',
    'Nhận thức về các cơ hội và thách thức của AI trong giáo dục.',
  ],
  careerOutcomes: [
    'Trở thành người học tự chủ và hiệu quả hơn.',
    'Nâng cao khả năng nghiên cứu và phân tích thông tin.',
    'Sẵn sàng thích ứng với môi trường học tập và làm việc trong tương lai.',
  ],
  color: 'from-sky-500 to-blue-500',
};
