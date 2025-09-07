import { ModuleNavigation } from '@/types';

export const uxUiDesignModuleData: ModuleNavigation = {
  id: 'ux-ui-design',
  title: 'UX/UI Design & Product Development',
  subtitle: 'Thiết kế trải nghiệm người dùng và phát triển sản phẩm',
  description:
    'Học cách thiết kế sản phẩm số mà người dùng yêu thích, từ nghiên cứu người dùng đến prototyping và product management.',
  category: 'creative',
  icon: '🎨',
  color: 'from-violet-500 to-fuchsia-500',
  totalDuration: '25-30 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '25-30 giờ',
  href: '/learning/ux-ui-design',
  features: [
    'User Research',
    'Wireframing & Prototyping',
    'Usability Testing',
    'Design Systems',
    'Agile Product Management',
  ],
  tags: ['ux design', 'ui design', 'product design', 'figma', 'agile'],
  prerequisites: [
    'Tư duy thẩm mỹ và sự đồng cảm',
    'Kỹ năng giải quyết vấn đề',
    'Làm quen với các công cụ thiết kế là một lợi thế',
  ],
  lessons: [
    {
      id: 'user-research-and-personas',
      title: 'Nghiên cứu Người dùng và Xây dựng Chân dung Khách hàng',
      duration: '280 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'wireframing-prototyping-with-figma',
      title: 'Wireframing và Prototyping với Figma',
      duration: '300 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'usability-testing-and-feedback-analysis',
      title: 'Kiểm thử Tính khả dụng và Phân tích Phản hồi',
      duration: '260 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'building-and-maintaining-design-systems',
      title: 'Xây dựng và Duy trì Hệ thống Thiết kế',
      duration: '240 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'agile-product-management-for-designers',
      title: 'Quản lý Sản phẩm Agile cho Nhà thiết kế',
      duration: '220 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
