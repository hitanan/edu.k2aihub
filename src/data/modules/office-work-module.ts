import { ModuleData } from '@/types';
import { OfficeWorkLesson, officeWorkLessons } from './office-work';

export const officeWorkModuleData: ModuleData<OfficeWorkLesson> = {
  id: 'office-work',
  title: 'AI cho Văn Phòng & Công Việc',
  description:
    'Học cách sử dụng các công cụ AI để tự động hóa công việc văn phòng, viết email chuyên nghiệp, phân tích dữ liệu Excel và tạo bài thuyết trình ấn tượng, giúp tăng hiệu suất làm việc hàng ngày.',
  category: 'Kỹ năng chuyên nghiệp',
  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
  color: 'from-blue-600 to-indigo-600',
  level: 'Cơ bản',
  duration: '4 giờ',
  lessons: officeWorkLessons,
  features: [
    'Prompt Tinh gọn cho ChatGPT',
    'Tự động hóa tác vụ Excel với VBA',
    'Thiết kế slide chuyên nghiệp trong vài phút',
    'Ứng dụng thực tế trong môi trường công sở Việt Nam',
  ],
  prerequisites: [
    'Kỹ năng sử dụng máy tính cơ bản',
    'Có tài khoản email và biết sử dụng các ứng dụng văn phòng là một lợi thế',
  ],
  objectives: [
    'Tăng tốc độ xử lý công việc văn phòng ít nhất 50%.',
    'Soạn thảo email và tài liệu chuyên nghiệp, thuyết phục.',
    'Tự động hóa các báo cáo và phân tích dữ liệu đơn giản trên Excel.',
    'Tạo ra các bài thuyết trình ấn tượng và thu hút một cách nhanh chóng.',
  ],
  careerOutcomes: [
    'Trợ lý ảo cho mọi nhân viên văn phòng',
    'Chuyên viên phân tích dữ liệu sơ cấp',
    'Người quản lý dự án hiệu quả hơn',
  ],
  tags: ['năng suất', 'tự động hóa', 'excel', 'chatgpt', 'công sở'],
};
