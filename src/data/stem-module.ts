import { K2Module } from './moduleNavigation';
import { ModuleNavigation } from '@/types';

export const stemModuleData: ModuleNavigation = {
  id: K2Module.Stem,
  title: 'STEM Education',
  subtitle: 'Khoa học ứng dụng',
  description: 'Thí nghiệm vật lý, toán học thực tế và engineering',
  category: 'stem',
  icon: '🔬',
  color: 'from-teal-600 to-green-600',
  totalDuration: '8-10 giờ',
  difficulty: 'Cơ bản đến Trung bình',
  level: 'Cơ bản',
  duration: '8-10 giờ',
  href: '/learning/stem',
  features: ['Physics Experiments', 'Math Applications', 'Engineering Design', 'Science Projects'],
  tags: ['stem', 'science', 'math', 'engineering'],
  prerequisites: ['Curiosity and interest in science', 'Basic math skills', 'Safety awareness'],
  lessons: [
    {
      id: 'stem-introduction',
      title: 'STEM Introduction & Scientific Method',
      duration: '60 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'fun-physics-experiments',
      title: 'Fun Physics Experiments & Principles',
      duration: '120 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'coding-for-kids',
      title: 'Coding for Kids & Computational Thinking',
      duration: '90 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'engineering-challenges',
      title: 'Engineering Challenges & Design Thinking',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'math-in-real-life',
      title: 'Math in Real Life Applications',
      duration: '60 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'art-meets-science',
      title: 'Art Meets Science Creative Projects',
      duration: '60 phút',
      difficulty: 'Cơ bản',
    },
  ],
};
