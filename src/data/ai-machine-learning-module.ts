import { ModuleNavigation } from '@/types';

export const aiMachineLearningModuleData: ModuleNavigation = {
  id: 'ai-machine-learning',
  title: 'AI & Machine Learning',
  subtitle: 'Trí tuệ nhân tạo và học máy',
  description: 'Tìm hiểu AI/ML từ cơ bản đến nâng cao với TensorFlow, PyTorch và neural networks',
  category: ['professional', 'programming'],
  icon: '🧠',
  color: 'from-purple-600 to-indigo-600',
  totalDuration: '16-20 giờ',
  difficulty: 'Trung bình đến Nâng cao',
  level: 'Trung bình',
  duration: '16-20 giờ',
  href: '/learning/ai-machine-learning',
  features: ['Machine Learning Algorithms', 'Neural Networks', 'Computer Vision', 'AI Ethics'],
  tags: ['ai', 'machine learning', 'tensorflow', 'neural networks'],
  prerequisites: [
    'Python programming basics',
    'Statistics fundamentals',
    'Linear algebra knowledge',
    'Mathematical thinking',
  ],
  lessons: [
    {
      id: 'ai-ml-fundamentals',
      title: 'AI & Machine Learning Fundamentals',
      duration: '180 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'neural-networks-deep-learning',
      title: 'Neural Networks & Deep Learning',
      duration: '200 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'computer-vision-nlp',
      title: 'Computer Vision & Natural Language Processing',
      duration: '200 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'ai-ethics-future-trends',
      title: 'AI Ethics & Future Trends',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
  ],
};
