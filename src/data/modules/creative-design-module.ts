import { ModuleData } from '@/types';
import { creativeDesignLessons } from './creative-design';

export const creativeDesignModule: ModuleData = {
  id: 'creative-design',
  title: 'Thiết kế Sáng tạo với AI',
  description:
    'Học cách sử dụng các công cụ AI hàng đầu như Midjourney và Canva Magic Studio để tạo ra hình ảnh, thiết kế và nội dung ấn tượng.',
  category: 'Sáng tạo',
  image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=1200&h=600&fit=crop',
  tags: ['midjourney', 'canva', 'ai design', 'prompt engineering', 'sáng tạo'],
  level: 'Cơ bản đến Trung bình',
  duration: '3 giờ',
  lessons: creativeDesignLessons,
  features: [
    'Làm chủ Midjourney từ cơ bản đến nâng cao.',
    'Thành thạo bộ công cụ Canva AI Magic Studio.',
    'Kỹ thuật "prompt engineering" chuyên sâu.',
    'Ứng dụng AI vào quy trình sáng tạo nội dung thực tế.',
  ],
  prerequisites: ['Tài khoản Discord và Canva.'],
  objectives: [
    'Sử dụng thành thạo Midjourney để tạo hình ảnh từ văn bản.',
    'Tận dụng các công cụ AI của Canva để thiết kế nhanh và hiệu quả.',
    'Phát triển kỹ năng viết prompt để kiểm soát đầu ra của AI.',
    'Tích hợp các công cụ AI vào quy trình làm việc sáng tạo hàng ngày.',
  ],
  careerOutcomes: [
    'Trở thành nhà thiết kế có khả năng tận dụng AI.',
    'Nâng cao hiệu suất trong các công việc liên quan đến marketing và nội dung.',
    'Có khả năng tạo ra các sản phẩm hình ảnh và thiết kế độc đáo.',
  ],
  color: 'from-purple-500 to-pink-500',
};
