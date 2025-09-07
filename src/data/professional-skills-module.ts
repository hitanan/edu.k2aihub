import { K2Module } from './moduleNavigation';
import { ModuleNavigation } from '@/types';

export const professionalSkillsModuleData: ModuleNavigation = {
  id: K2Module.ProfessionalSkills,
  title: 'Professional Soft Skills & Communication',
  subtitle: 'Kỹ năng mềm chuyên nghiệp',
  description: 'Phát triển kỹ năng giao tiếp, thuyết trình và lãnh đạo cho môi trường làm việc hiện đại',
  category: 'professional',
  icon: '🎯',
  color: 'from-blue-600 to-indigo-600',
  totalDuration: '15-18 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '15-18 giờ',
  href: '/learning/professional-soft-skills',
  features: ['Presentation Skills', 'Professional Communication', 'Leadership Development', 'Time Management'],
  tags: ['soft skills', 'communication', 'leadership', 'professional'],
  prerequisites: ['Basic work experience', 'Vietnamese và English communication'],
  lessons: [
    {
      id: 'presentation-skills',
      title: 'Presentation Skills & Public Speaking',
      duration: '180 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'professional-email-writing',
      title: 'Professional Email & Business Writing',
      duration: '160 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'leadership-team-management',
      title: 'Leadership & Team Management',
      duration: '200 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'negotiation-conflict-resolution',
      title: 'Negotiation & Conflict Resolution',
      duration: '180 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'time-productivity-management',
      title: 'Time & Productivity Management',
      duration: '140 phút',
      difficulty: 'Trung bình',
    },
  ],
};
