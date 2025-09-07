import { ModuleNavigation } from '@/types';

export const careerDevelopmentModuleData: ModuleNavigation = {
  id: 'career-development',
  title: 'Phát Triển Sự Nghiệp',
  subtitle: 'Xây dựng lộ trình thành công',
  description:
    'Học cách xây dựng personal brand, kỹ năng phỏng vấn, networking và lập kế hoạch sự nghiệp để đạt được mục tiêu dài hạn.',
  category: ['Professional Skills', 'Career', 'Personal Development'],
  icon: '🚀',
  color: 'from-red-600 to-orange-600',
  totalDuration: '5-6 giờ',
  difficulty: 'Cơ bản',
  href: '/learning/career-development',
  features: [
    'Personal branding và storytelling',
    'Kỹ năng phỏng vấn và negotiation',
    'Networking và relationship building',
    'Lập kế hoạch sự nghiệp và goal setting',
  ],
  tags: ['career-planning', 'personal-branding', 'interview-skills', 'networking'],
  prerequisites: ['Không có'],
  lessons: [],
};
