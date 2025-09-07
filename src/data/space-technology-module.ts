import { ModuleNavigation } from '@/types';

export const spaceTechnologyModuleData: ModuleNavigation = {
  id: 'space-technology',
  title: 'Space Technology & Exploration',
  subtitle: 'Công nghệ vũ trụ',
  description: 'Khám phá công nghệ vũ trụ, từ thiết kế tên lửa đến khám phá hành tinh và du hành vũ trụ.',
  category: 'technology',
  icon: '🚀',
  color: 'from-gray-700 to-blue-900',
  totalDuration: '15-20 giờ',
  difficulty: 'Nâng cao',
  level: 'Nâng cao',
  duration: '15-20 giờ',
  href: '/learning/space-technology',
  features: ['Rocket Science', 'Satellite Technology', 'Planetary Exploration', 'Space Colonization'],
  tags: ['space', 'rocket', 'exploration', 'astronomy'],
  prerequisites: [
    'Vật lý và toán học nâng cao',
    'Kỹ thuật cơ khí hoặc hàng không vũ trụ',
    'Lập trình cho hệ thống nhúng',
    'Đam mê khám phá vũ trụ',
  ],
  lessons: [
    {
      id: 'rocket-propulsion-systems',
      title: 'Hệ thống Đẩy Tên lửa',
      duration: '180 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'satellite-design-communication',
      title: 'Thiết kế và Truyền thông Vệ tinh',
      duration: '200 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'interplanetary-missions',
      title: 'Nhiệm vụ Liên hành tinh',
      duration: '180 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'future-space-exploration',
      title: 'Tương lai của Khám phá Vũ trụ',
      duration: '150 phút',
      difficulty: 'Trung bình',
    },
  ],
};
