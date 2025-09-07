import { ModuleNavigation } from '@/types';

export const programmingRoboticsModuleData: ModuleNavigation = {
  id: 'programming-robotics',
  title: 'Programming & Robotics',
  subtitle: 'Lập trình và robot học',
  description: 'Kết hợp programming skills với robotics engineering để tạo autonomous systems',
  category: ['programming', 'stem'],
  icon: '🤖',
  color: 'from-gray-600 to-blue-600',
  totalDuration: '16-20 giờ',
  difficulty: 'Trung bình đến Nâng cao',
  level: 'Trung bình',
  duration: '16-20 giờ',
  href: '/learning/programming-robotics',
  features: ['Programming Fundamentals', 'Robotics Engineering', 'AI Integration', 'Advanced Applications'],
  tags: ['programming', 'robotics', 'ai', 'automation'],
  prerequisites: ['Programming fundamentals', 'Basic electronics', 'Mathematical thinking', 'Problem-solving skills'],
  lessons: [
    {
      id: 'programming-fundamentals',
      title: 'Programming Fundamentals cho Robotics',
      duration: '180 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'robotics-engineering',
      title: 'Robotics Engineering và Design',
      duration: '200 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'ai-robotics-integration',
      title: 'AI Integration trong Robotics',
      duration: '160 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'advanced-robotics-applications',
      title: 'Advanced Robotics Applications',
      duration: '140 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
