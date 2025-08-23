import type { Metadata } from 'next';
import ModulePageTemplate, { type ModuleData } from '@/components/learning/ModulePageTemplate';
import { aiMachineLearningLessons } from '@/data/ai-machine-learning';
import { K2Module } from '@/data/moduleNavigation';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('AI & Machine Learning - Trí Tuệ Nhân Tạo & Học Máy'),
  description: createDescription(
    'Master AI and Machine Learning from fundamentals to advanced applications. Build intelligent systems với Python, TensorFlow và PyTorch.',
  ),
  keywords: [
    'artificial intelligence',
    'machine learning',
    'deep learning',
    'python ai',
    'tensorflow',
    'pytorch',
    'neural networks',
    'data science',
    'ai applications',
    'vietnam ai education',
    'k2aihub',
  ],
  authors: [{ name: 'K2AiHub Team' }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: 'AI & Machine Learning Master Course',
    description: 'Complete AI/ML education from basics to advanced applications',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function AIMachineLearningPage() {
  const moduleData: ModuleData = {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    subtitle: 'Trí tuệ nhân tạo & học máy từ cơ bản đến nâng cao',
    description:
      'Khám phá thế giới AI/ML với hands-on projects từ fundamental algorithms đến advanced deep learning. Build intelligent systems với Python, TensorFlow và các frameworks hiện đại nhất.',
    level: 'Trung bình đến Nâng cao',
    duration: '25-35 giờ',
    category: 'Artificial Intelligence & Technology',
    primaryColor: 'purple',
    gradientColors: 'from-slate-900 via-purple-900 to-indigo-900',
    basePath: '/learning/ai-machine-learning',
    heroImageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop',
    features: [
      'Machine Learning Algorithms & Implementation',
      'Deep Learning với Neural Networks',
      'Computer Vision & Image Processing',
      'Natural Language Processing (NLP)',
      'AI Model Development & Deployment',
      'TensorFlow, PyTorch & Scikit-learn',
      'Real-world AI Applications',
      'Vietnamese AI Industry Insights',
    ],
    icon: '🤖',
    color: 'from-purple-600 to-indigo-600',
    statsConfig: {
      lessons: `${aiMachineLearningLessons.length}+ bài`,
      duration: '25-35 giờ',
      level: 'Trung bình đến Nâng cao',
      projects: '15+ AI projects',
    },
    marketData: {
      marketSize: '$733.7 Billion',
      marketNote: 'Global AI market size by 2027',
      jobGrowth: '74% Growth',
      jobNote: 'AI/ML jobs by 2030 (fastest growing)',
      reduction: '$13 Trillion',
      reductionNote: 'Global economic impact by 2030',
      startups: '83% Enterprises',
      startupsNote: 'Plan to implement AI solutions',
    },
    objectives: [
      'Master fundamental machine learning algorithms và concepts',
      'Build và train neural networks cho different applications',
      'Implement computer vision solutions với CNNs',
      'Develop NLP applications để process Vietnamese text',
      'Deploy AI models to production environments',
      'Understand AI ethics và responsible development',
    ],
    prerequisites: [
      'Strong Python programming skills',
      'Linear algebra và statistics knowledge',
      'Experience với data manipulation (NumPy, Pandas)',
      'Basic understanding of calculus concepts',
    ],
    careerPaths: [
      'Machine Learning Engineer (60-120 triệu VNĐ)',
      'AI Research Scientist (70-150 triệu VNĐ)',
      'Data Scientist với AI Focus (55-100 triệu VNĐ)',
      'Computer Vision Engineer (65-130 triệu VNĐ)',
      'NLP Engineer (60-120 triệu VNĐ)',
      'AI Product Manager (70-140 triệu VNĐ)',
      'Robotics AI Developer (65-125 triệu VNĐ)',
      'AI Consultant (80-200 triệu VNĐ)',
    ],
    industryApplications: [
      'Healthcare AI diagnostics và treatment',
      'Finance algorithmic trading và risk assessment',
      'E-commerce recommendation systems',
      'Automotive autonomous driving systems',
      'Manufacturing predictive maintenance',
      'Agriculture precision farming',
      'Education personalized learning',
      'Entertainment content generation',
      'Cybersecurity threat detection',
      'Smart city infrastructure optimization',
    ],
    technicalHighlights: [
      {
        title: 'Core Algorithms',
        icon: '⚡',
        items: ['Linear Regression', 'Random Forest', 'SVM', 'K-Means Clustering'],
      },
      {
        title: 'Deep Learning',
        icon: '🧠',
        items: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers'],
      },
      {
        title: 'ML Frameworks',
        icon: '🔧',
        items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
      },
      {
        title: 'Computer Vision',
        icon: '👁️',
        items: ['Image Classification', 'Object Detection', 'Face Recognition', 'OCR'],
      },
      {
        title: 'NLP Applications',
        icon: '💬',
        items: ['Text Classification', 'Sentiment Analysis', 'Chatbots', 'Translation'],
      },
      {
        title: 'Vietnamese Focus',
        icon: '🇻🇳',
        items: ['Vietnamese NLP', 'Local Dataset', 'Cultural AI', 'Vietnam AI Startups'],
      },
    ],
    relatedModules: [K2Module.Python, K2Module.DataScienceAnalytics, K2Module.Robotics],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={aiMachineLearningLessons} />;
}
