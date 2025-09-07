import { ModuleNavigation } from '@/types';

export const dataScienceModuleData: ModuleNavigation = {
  id: 'data-science',
  title: 'Data Science & Analytics',
  subtitle: 'Khoa học dữ liệu',
  description: 'Master data science pipeline từ data collection đến machine learning và visualization',
  category: ['professional', 'programming'],
  icon: '📊',
  color: 'from-blue-600 to-purple-600',
  totalDuration: '18-22 giờ',
  difficulty: 'Trung bình đến Nâng cao',
  level: 'Trung bình',
  duration: '18-22 giờ',
  href: '/learning/data-science',
  features: ['Data Analysis', 'Machine Learning', 'Big Data', 'Data Visualization'],
  tags: ['data science', 'analytics', 'python', 'machine learning'],
  prerequisites: [
    'Python programming',
    'Statistics và probability',
    'SQL database knowledge',
    'Mathematical foundations',
  ],
  lessons: [
    {
      id: 'data-science-fundamentals',
      title: 'Data Science Fundamentals & Python Stack',
      duration: '200 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'machine-learning-algorithms',
      title: 'Machine Learning Algorithms & Implementation',
      duration: '220 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'big-data-technologies',
      title: 'Big Data Technologies & Distributed Computing',
      duration: '200 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'data-visualization-storytelling',
      title: 'Data Visualization & Storytelling',
      duration: '180 phút',
      difficulty: 'Trung bình',
    },
  ],
};
