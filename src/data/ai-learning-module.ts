import { ModuleNavigation } from '@/types';

export const aiLearningModuleData: ModuleNavigation = {
  id: 'ai',
  title: 'AI Của Tôi - Learning',
  subtitle: 'Khóa học AI thực tế',
  description: 'Khóa học AI thực tế với 6 chuyên đề: Văn phòng, Sáng tạo, Giáo dục, Kinh doanh, Cuộc sống và Lập trình',
  category: 'artificial-intelligence',
  icon: '🤖',
  color: 'from-purple-600 to-pink-600',
  totalDuration: '25-30 giờ',
  difficulty: 'Trung bình',
  href: '/learning/ai',
  features: [
    'Hướng dẫn 6 lĩnh vực AI ứng dụng',
    'Thực hành với các tool AI hàng đầu',
    'Prompt engineering chuyên sâu',
    'Ứng dụng thực tế trong công việc',
  ],
  tags: ['ai', 'chatgpt', 'midjourney', 'practical', 'productivity'],
  prerequisites: [
    'Sử dụng máy tính và internet cơ bản',
    'Tiếng Anh đọc hiểu (để sử dụng AI tools)',
    'Tư duy sáng tạo và ham học hỏi',
  ],
  lessons: [
    {
      id: 'office-work',
      title: 'AI cho Văn Phòng & Công Việc',
      duration: '4 giờ',
      difficulty: 'Cơ bản',
    },
    {
      id: 'creative-design',
      title: 'AI cho Sáng Tạo & Thiết Kế',
      duration: '5 giờ',
      difficulty: 'Trung bình',
    },
    {
      id: 'education-learning',
      title: 'AI cho Giáo Dục & Học Tập',
      duration: '3 giờ',
      difficulty: 'Cơ bản',
    },
    {
      id: 'business-marketing',
      title: 'AI cho Kinh Doanh & Marketing',
      duration: '6 giờ',
      difficulty: 'Nâng cao',
    },
    {
      id: 'daily-life',
      title: 'AI cho Cuộc Sống Hàng Ngày',
      duration: '2 giờ',
      difficulty: 'Cơ bản',
    },
    {
      id: 'programming-dev',
      title: 'AI cho Lập Trình & Phát Triển',
      duration: '5 giờ',
      difficulty: 'Nâng cao',
    },
  ],
};
