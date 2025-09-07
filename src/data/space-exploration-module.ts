import { ModuleNavigation } from '@/types';

export const spaceExplorationModuleData: ModuleNavigation = {
  id: 'space-exploration',
  title: 'Space Exploration & Technology',
  subtitle: 'Khám phá vũ trụ 3D',
  description: 'Tìm hiểu space science, rocket engineering và satellite technology',
  category: ['science', 'professional', '3D'],
  icon: '🚀',
  color: 'from-indigo-600 to-purple-600',
  totalDuration: '12-15 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '12-15 giờ',
  href: '/learning/space-exploration',
  features: ['Space Fundamentals', 'Rocket Science', 'Satellite Technology', 'Space Colonization'],
  tags: ['space', 'rockets', 'satellites', 'astronomy'],
  prerequisites: ['Physics fundamentals', 'Mathematics: calculus', 'Engineering principles', 'Scientific curiosity'],
  lessons: [
    {
      id: 'space-exploration-fundamentals',
      title: 'Cơ bản về Khám phá Vũ trụ',
      duration: '160 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'rocket-science-propulsion',
      title: 'Rocket Science và Propulsion Systems',
      duration: '180 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'satellite-technology',
      title: 'Satellite Technology và Applications',
      duration: '150 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'space-colonization',
      title: 'Space Colonization và Future Missions',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
  ],
};
