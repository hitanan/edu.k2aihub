import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { creativeDesignLessons } from '@/data/lessons/creative-design';

export const creativeDesignModuleData: ModuleData = {
  id: K2Module.CreativeDesign,
  title: 'AI cho Sáng Tạo & Thiết Kế',
  subtitle: 'Sáng tạo nội dung với AI',
  description:
    'Khám phá cách sử dụng Midjourney, DALL-E, Canva AI để tạo ra nội dung sáng tạo và thiết kế chuyên nghiệp',
  category: 'Sáng tạo',
  icon: '🎨',
  color: 'from-purple-600 to-pink-600',
  level: 'Cơ bản đến Nâng cao',
  duration: '5-7 giờ',
  features: ['Midjourney mastery', 'Canva AI Studio', 'Content creation', 'Visual design'],
  prerequisites: ['Hiểu biết cơ bản về design', 'Sử dụng máy tính thành thạo'],
  objectives: [
    'Sử dụng thành thạo các công cụ AI tạo sinh hình ảnh như Midjourney, DALL-E.',
    'Nắm vững kỹ thuật viết prompt để tạo ra hình ảnh theo ý muốn.',
    'Tận dụng Canva AI Magic Studio để tăng tốc quá trình thiết kế.',
    'Ứng dụng AI để tạo ý tưởng và sản xuất nội dung sáng tạo.',
  ],
  careerOutcomes: ['Graphic Designer', 'Content Creator', 'Marketing Specialist', 'UI/UX Designer', 'Concept Artist'],
  industryApplications: [
    'Quảng cáo và Marketing',
    'Thiết kế sản phẩm',
    'Giải trí và Truyền thông',
    'Phát triển game',
    'Thời trang và Nghệ thuật',
  ],
  marketDemand: {
    averageSalary: '25.000.000 VNĐ/tháng',
    jobGrowth: '25%/năm',
    hireDemand: 'Cao',
  },
  relatedModules: ['ai-art-creative-tech', 'content-creator', 'digital-marketing'],
  lessons: creativeDesignLessons,
};
