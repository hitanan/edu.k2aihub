import { ModuleNavigation } from '@/types';

export const softSkillsModuleData: ModuleNavigation = {
  id: 'soft-skills',
  title: 'Kỹ Năng Mềm Thiết Yếu',
  subtitle: 'Chìa khóa thành công bền vững',
  description:
    'Trang bị bộ kỹ năng mềm toàn diện từ giao tiếp, tư duy phản biện, làm việc nhóm đến trí tuệ cảm xúc để thành công trong mọi lĩnh vực.',
  category: ['Essential Skills', 'Personal Development'],
  icon: '🤝',
  color: 'from-blue-500 to-sky-500',
  totalDuration: '10-12 giờ',
  difficulty: 'Cơ bản',
  href: '/learning/soft-skills',
  features: [
    'Giao tiếp hiệu quả và thuyết trình',
    'Tư duy phản biện và giải quyết vấn đề',
    'Làm việc nhóm và hợp tác',
    'Trí tuệ cảm xúc và quản lý bản thân',
  ],
  tags: ['soft-skills', 'communication', 'critical-thinking', 'emotional-intelligence'],
  prerequisites: ['Không có'],
  lessons: [],
};
