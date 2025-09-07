import { ModuleNavigation } from '@/types';

export const climateScienceModuleData: ModuleNavigation = {
  id: 'climate-science',
  title: 'Climate Science & Environmental Solutions',
  subtitle: 'Khoa học khí hậu',
  description: 'Tìm hiểu climate change, environmental modeling và green technology solutions',
  category: ['professional', 'science'],
  icon: '🌍',
  color: 'from-green-600 to-emerald-600',
  totalDuration: '12-15 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '12-15 giờ',
  href: '/learning/climate-science',
  features: ['Climate Fundamentals', 'Data Analysis', 'Green Technology', 'Environmental Policy'],
  tags: ['climate', 'environment', 'sustainability', 'green tech'],
  prerequisites: [
    'Basic science knowledge',
    'Data analysis skills',
    'Environmental awareness',
    'Statistical understanding',
  ],
  lessons: [
    {
      id: 'climate-science-fundamentals',
      title: 'Climate Science Fundamentals',
      duration: '160 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'climate-data-analysis',
      title: 'Climate Data Analysis & Modeling',
      duration: '180 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'green-technology-solutions',
      title: 'Green Technology Solutions',
      duration: '160 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'environmental-policy',
      title: 'Environmental Policy & Action',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
  ],
};
