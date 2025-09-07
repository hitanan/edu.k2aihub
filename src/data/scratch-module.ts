import { K2Module } from './moduleNavigation';
import { ModuleNavigation } from '@/types';

export const scratchModuleData: ModuleNavigation = {
  id: K2Module.Scratch,
  title: 'Scratch Programming',
  subtitle: 'Lập trình trực quan',
  description: 'Sáng tạo game và hoạt hình với Scratch',
  category: 'stem',
  icon: '🐱',
  color: 'from-orange-500 to-yellow-500',
  totalDuration: '8-10 giờ',
  difficulty: 'Cơ bản',
  level: 'Cơ bản',
  duration: '8-10 giờ',
  href: '/learning/scratch',
  features: ['Visual Programming', 'Game Creation', 'Animation', 'Creative Coding'],
  tags: ['scratch', 'programming', 'kids', 'beginner'],
  prerequisites: ['Basic computer skills', 'Creativity', 'Logical thinking'],
  lessons: [
    {
      id: 'getting-started-scratch',
      title: 'Getting Started with Scratch',
      duration: '60 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'creating-animations',
      title: 'Creating Animations & Stories',
      duration: '90 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'building-games',
      title: 'Building Your First Game',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'advanced-scratch-techniques',
      title: 'Advanced Scratch Techniques',
      duration: '90 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'sharing-scratch-projects',
      title: 'Sharing Your Scratch Projects',
      duration: '60 phút',
      difficulty: 'Cơ bản',
    },
  ],
};
