import { K2Module } from '@/data/k2-modules';
import { ModuleNavigation } from '@/types';

export const advancedCreativeSkillsModuleData: ModuleNavigation = {
  id: K2Module.AdvancedCreativeSkills,
  title: 'Advanced Creative Skills',
  subtitle: 'Kỹ năng sáng tạo nâng cao',
  description: 'Nâng cao kỹ năng sáng tạo từ graphic design đến video production và content creation',
  category: 'creative',
  icon: '🎨',
  color: 'from-pink-600 to-rose-600',
  totalDuration: '25-30 giờ',
  difficulty: 'Nâng cao',
  level: 'Nâng cao',
  duration: '25-30 giờ',
  href: '/learning/advanced-creative-skills',
  features: ['Professional Design', 'Video Production', 'Audio Creation', 'Content Writing'],
  tags: ['graphic design', 'video production', 'creative skills', 'content creation'],
  prerequisites: ['Basic creative software knowledge', 'Artistic interest'],
  lessons: [
    {
      id: 'professional-graphic-design',
      title: 'Professional Graphic Design & Brand Identity',
      duration: '300 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'video-production-editing',
      title: 'Video Production & Post-Production',
      duration: '280 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'audio-production-podcasting',
      title: 'Audio Production & Podcasting',
      duration: '240 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'content-writing-copywriting',
      title: 'Content Writing & Copywriting',
      duration: '220 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'photography-visual-storytelling',
      title: 'Photography & Visual Storytelling',
      duration: '260 phút',
      difficulty: 'Trung bình',
    },
  ],
};
