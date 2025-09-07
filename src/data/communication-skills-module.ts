import { K2Module } from '@/data/k2-modules';
import { ModuleNavigation } from '@/types';

export const communicationSkillsModuleData: ModuleNavigation = {
  id: K2Module.CommunicationSkills,
  title: 'Kỹ Năng Giao Tiếp và Thuyết Trình',
  subtitle: 'Phát triển kỹ năng giao tiếp hiệu quả trong thời đại số',
  description:
    'Khóa học comprehensive về kỹ năng giao tiếp và thuyết trình, từ active listening đến digital presentation mastery và cross-cultural communication.',
  category: 'essential',
  icon: '🗣️',
  color: 'from-blue-600 to-cyan-600',
  totalDuration: '9-11 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '9-11 giờ',
  href: '/learning/communication-skills',
  features: [
    'Effective communication fundamentals',
    'Digital presentation tools mastery',
    'Cross-cultural communication skills',
    'Public speaking confidence building',
  ],
  tags: ['communication', 'presentation', 'public speaking', 'digital'],
  prerequisites: ['Không có yêu cầu tiên quyết cụ thể', 'Sẵn sàng practice speaking và receive feedback'],
  lessons: [
    {
      id: 'effective-communication-fundamentals',
      title: 'Cơ Bản Giao Tiếp Hiệu Quả',
      duration: '90 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'digital-presentation-mastery',
      title: 'Thành Thạo Thuyết Trình Số',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'cross-cultural-communication',
      title: 'Giao Tiếp Đa Văn Hóa',
      duration: '100 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
