import { K2Module } from './moduleNavigation';
import { ModuleNavigation } from '@/types';

export const roboticsModuleData: ModuleNavigation = {
  id: K2Module.Robotics,
  title: 'Robotics & Autonomous Systems',
  subtitle: 'Robot tự động',
  description: 'Thiết kế và lập trình robot từ cơ bản đến AI robotics',
  category: 'stem',
  icon: '🤖',
  color: 'from-purple-600 to-pink-600',
  totalDuration: '10-12 giờ',
  difficulty: 'Nâng cao',
  level: 'Nâng cao',
  duration: '10-12 giờ',
  href: '/learning/robotics',
  features: ['Robot Design', 'Motion Control', 'AI Integration', 'Autonomous Navigation'],
  tags: ['robotics', 'ai', 'automation', 'control'],
  prerequisites: ['Programming fundamentals', 'Basic electronics', 'Mathematical thinking', 'Problem-solving skills'],
  lessons: [
    {
      id: 'robotics-fundamentals',
      title: 'Robotics Fundamentals & Components',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'robot-programming-control',
      title: 'Robot Programming & Motion Control',
      duration: '150 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'sensors-computer-vision',
      title: 'Sensors & Computer Vision in Robotics',
      duration: '150 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'autonomous-navigation-ai',
      title: 'Autonomous Navigation & AI Integration',
      duration: '120 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
