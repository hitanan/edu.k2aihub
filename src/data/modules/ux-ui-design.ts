import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export const uxUiDesignLessons: BaseLessonData[] = [
  {
    id: 'user-research-and-personas',
    title: 'Nghiên cứu Người dùng và Xây dựng Chân dung Khách hàng',
    description: 'Học cách thực hiện nghiên cứu người dùng và tạo ra các persona chi tiết.',
    duration: '280 phút',
    difficulty: 'Trung bình',
    objectives: ['Nắm vững các phương pháp nghiên cứu người dùng.', 'Xây dựng được user persona hoàn chỉnh.'],
    realWorldApplications: ['Phát triển sản phẩm mới dựa trên insight khách hàng.'],
  },
  {
    id: 'wireframing-prototyping-with-figma',
    title: 'Wireframing và Prototyping với Figma',
    description: 'Sử dụng Figma để tạo wireframe và prototype cho ứng dụng web/mobile.',
    duration: '300 phút',
    difficulty: 'Trung bình',
    objectives: ['Thành thạo các công cụ cơ bản của Figma.', 'Tạo ra các prototype tương tác được.'],
    realWorldApplications: ['Thiết kế giao diện cho một ứng dụng đặt đồ ăn.'],
  },
  {
    id: 'usability-testing-and-feedback-analysis',
    title: 'Kiểm thử Tính khả dụng và Phân tích Phản hồi',
    description: 'Học cách tổ chức các buổi usability testing và phân tích feedback từ người dùng.',
    duration: '260 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Lên kế hoạch và thực hiện một buổi usability test.',
      'Phân tích và tổng hợp kết quả để cải thiện sản phẩm.',
    ],
    realWorldApplications: ['Cải thiện trải nghiệm người dùng của một trang web e-commerce.'],
  },
  {
    id: 'building-and-maintaining-design-systems',
    title: 'Xây dựng và Duy trì Hệ thống Thiết kế',
    description: 'Tìm hiểu về tầm quan trọng của design system và cách xây dựng, duy trì nó.',
    duration: '240 phút',
    difficulty: 'Nâng cao',
    objectives: ['Hiểu cấu trúc của một design system.', 'Bắt đầu xây dựng một thư viện component cho dự án.'],
    realWorldApplications: ['Đảm bảo tính nhất quán cho bộ sản phẩm của một công ty lớn.'],
  },
  {
    id: 'agile-product-management-for-designers',
    title: 'Quản lý Sản phẩm Agile cho Nhà thiết kế',
    description: 'Hiểu vai trò của designer trong quy trình phát triển sản phẩm Agile.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu các khái niệm cơ bản của Agile và Scrum.',
      'Biết cách phối hợp hiệu quả với Product Manager và Developers.',
    ],
    realWorldApplications: ['Làm việc trong một team startup công nghệ.'],
  },
];

export const uxUiDesignModuleData: ModuleData = {
  id: 'ux-ui-design',
  title: 'UX/UI Design & Product Development',
  subtitle: 'Thiết kế trải nghiệm người dùng và phát triển sản phẩm',
  description:
    'Học cách thiết kế sản phẩm số mà người dùng yêu thích, từ nghiên cứu người dùng đến prototyping và product management.',
  category: 'creative',
  icon: '🎨',
  color: 'from-violet-500 to-fuchsia-500',
  level: 'Trung bình',
  duration: '25-30 giờ',
  features: [
    'User Research',
    'Wireframing & Prototyping',
    'Usability Testing',
    'Design Systems',
    'Agile Product Management',
  ],
  prerequisites: [
    'Tư duy thẩm mỹ và sự đồng cảm',
    'Kỹ năng giải quyết vấn đề',
    'Làm quen với các công cụ thiết kế là một lợi thế',
  ],
  objectives: [
    'Hiểu quy trình thiết kế UX/UI từ A-Z.',
    'Thành thạo Figma cho wireframing và prototyping.',
    'Biết cách thực hiện usability testing hiệu quả.',
    'Xây dựng và quản lý design systems.',
  ],
  careerOutcomes: ['UX/UI Designer', 'Product Designer', 'Interaction Designer'],
  industryApplications: ['Web/Mobile Apps', 'SaaS Products', 'E-commerce'],
  marketDemand: {
    averageSalary: '30.000.000 VNĐ/tháng',
    jobGrowth: '20%',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['creative-design', 'web-development-fundamentals'],
  lessons: uxUiDesignLessons,
};
