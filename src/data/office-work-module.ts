import { ModuleNavigation } from '@/types';

export const officeWorkModuleData: ModuleNavigation = {
  id: 'office-work',
  title: 'AI cho Văn Phòng & Công Việc',
  subtitle: 'Tăng hiệu suất với AI',
  description:
    'Học cách sử dụng AI để tự động hóa công việc văn phòng, viết email chuyên nghiệp và quản lý thời gian hiệu quả',
  category: ['professional', 'trending'], // Multiple categories
  icon: '💼',
  color: 'from-blue-600 to-indigo-600',
  totalDuration: '4-6 giờ',
  difficulty: 'Cơ bản đến Trung bình',
  href: '/learning/ai/office-work',
  features: ['ChatGPT cho Email', 'Excel thông minh', 'Thuyết trình AI', 'Quản lý thời gian'],
  tags: ['office', 'productivity', 'email', 'automation'],
  prerequisites: ['Kỹ năng máy tính cơ bản', 'Hiểu biết về Microsoft Office'],
  lessons: [
    {
      id: 'email-automation',
      title: 'Tự động hóa Email với AI',
      duration: '45 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'excel-ai',
      title: 'Excel thông minh với AI',
      duration: '60 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'presentation-ai',
      title: 'Tạo bài thuyết trình với AI',
      duration: '50 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'time-management',
      title: 'Quản lý thời gian với AI',
      duration: '40 phút',
      difficulty: 'Cơ bản',
    },
  ],
};
