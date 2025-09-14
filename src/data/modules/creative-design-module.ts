import { ModuleNavigation } from '@/types';

export const creativeDesignModuleData: ModuleNavigation = {
  id: 'creative-design',
  title: 'AI cho Sáng Tạo & Thiết Kế',
  subtitle: 'Sáng tạo nội dung với AI',
  description:
    'Khám phá cách sử dụng Midjourney, DALL-E, Canva AI để tạo ra nội dung sáng tạo và thiết kế chuyên nghiệp',
  category: ['creative', 'trending'], // Multiple categories
  icon: '🎨',
  color: 'from-purple-600 to-pink-600',
  totalDuration: '5-7 giờ',
  difficulty: 'Cơ bản đến Nâng cao',
  href: '/learning/ai/creative-design',
  features: ['Midjourney mastery', 'Canva AI Studio', 'Content creation', 'Visual design'],
  tags: ['design', 'creativity', 'art', 'visual'],
  prerequisites: ['Hiểu biết cơ bản về design', 'Sử dụng máy tính thành thạo'],
  lessons: [
    {
      id: 'midjourney-basics',
      title: 'Midjourney cơ bản',
      duration: '60 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'advanced-prompting',
      title: 'Prompt engineering nâng cao',
      duration: '75 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'canva-ai',
      title: 'Canva AI Magic Studio',
      duration: '50 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'content-creation',
      title: 'Tạo nội dung với AI',
      duration: '45 phút',
      difficulty: 'Trung bình',
    },
  ],
};
