import type { Metadata } from 'next';

import ModulePageTemplate, { type ModuleData } from '@/components/learning/ModulePageTemplate';
import { advancedDataScienceLessons } from '@/data/advanced-data-science';
import { K2Module } from '@/data/k2-modules';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'Advanced Data Science - Khoa Học Dữ Liệu Nâng Cao',
  'Master advanced data science techniques với machine learning, deep learning và big data analytics. Học cutting-edge AI applications.',
  [
    'advanced data science',
    'machine learning',
    'deep learning',
    'big data',
    'artificial intelligence',
    'data engineering',
    'vietnam data science',
    'k2aihub',
  ],
  'advanced-data-science',
);

export default function AdvancedDataSciencePage() {
  const moduleData: ModuleData = {
    id: 'advanced-data-science',
    title: 'Advanced Data Science',
    subtitle: 'Khoa học dữ liệu nâng cao',
    description:
      'Khám phá cutting-edge data science techniques, từ advanced machine learning đến deep learning applications trong AI-driven solutions.',
    level: 'Nâng cao',
    duration: '24-30 giờ',
    category: 'Data Science & AI',
    primaryColor: 'blue',
    gradientColors: 'from-slate-900 via-blue-900 to-cyan-900',
    basePath: '/learning/advanced-data-science',
    heroImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    features: [
      'Advanced Machine Learning Algorithms',
      'Deep Learning & Neural Networks',
      'Big Data Processing Platforms',
      'Natural Language Processing',
      'Computer Vision Applications',
      'Reinforcement Learning Systems',
      'MLOps & Model Deployment',
      'Ethical AI & Bias Detection',
    ],
    icon: '🤖',
    color: 'from-blue-600 to-cyan-600',
    statsConfig: {
      lessons: `${advancedDataScienceLessons.length}+ bài`,
      duration: '24-30 giờ',
      level: 'Nâng cao',
      projects: '18+ AI projects',
    },
    marketData: {
      marketSize: '$322.9 Billion',
      marketNote: 'Global data science platform market by 2026',
      jobGrowth: '84% Growth',
      jobNote: 'Data scientist roles by 2030',
      reduction: '60% Faster',
      reductionNote: 'Model development with advanced tools',
      startups: '96% Enterprises',
      startupsNote: 'Investing in advanced data science capabilities',
    },
    objectives: [
      'Master advanced machine learning algorithms và techniques',
      'Build deep learning models for complex problems',
      'Implement big data processing pipelines',
      'Develop natural language processing applications',
      'Create computer vision solutions',
      'Deploy scalable ML models trong production',
    ],
    prerequisites: [
      'Strong programming skills (Python/R)',
      'Statistics và mathematics background',
      'Basic machine learning experience',
      'Data manipulation proficiency',
    ],
    careerPaths: [
      'Senior Data Scientist (60-120 triệu VNĐ)',
      'Machine Learning Engineer (55-110 triệu VNĐ)',
      'AI Research Scientist (70-140 triệu VNĐ)',
      'Data Science Manager (80-150 triệu VNĐ)',
      'MLOps Engineer (50-100 triệu VNĐ)',
      'Computer Vision Engineer (55-115 triệu VNĐ)',
      'NLP Specialist (60-120 triệu VNĐ)',
      'AI Product Manager (70-130 triệu VNĐ)',
    ],
    industryApplications: [
      'Healthcare AI diagnostics',
      'Financial algorithmic trading',
      'E-commerce recommendation systems',
      'Autonomous vehicle technology',
      'Smart manufacturing optimization',
      'Natural language chatbots',
      'Computer vision quality control',
      'Predictive maintenance systems',
      'Fraud detection algorithms',
      'Personalized marketing platforms',
    ],
    technicalHighlights: [
      {
        title: 'ML Algorithms',
        icon: '⚙️',
        items: ['Ensemble Methods', 'Neural Networks', 'Clustering Algorithms', 'Dimensionality Reduction'],
      },
      {
        title: 'Deep Learning',
        icon: '🧠',
        items: ['CNNs', 'RNNs/LSTMs', 'Transformers', 'GANs'],
      },
      {
        title: 'Big Data Tools',
        icon: '💾',
        items: ['Apache Spark', 'Hadoop Ecosystem', 'Kafka Streaming', 'Cloud Platforms'],
      },
      {
        title: 'MLOps Stack',
        icon: '🔄',
        items: ['Model Versioning', 'CI/CD Pipelines', 'Container Orchestration', 'Monitoring Systems'],
      },
      {
        title: 'Vietnamese Context',
        icon: '🇻🇳',
        items: [
          'Local Data Compliance',
          'Vietnamese NLP',
          'Cultural AI Considerations',
          'Market-specific Applications',
        ],
      },
      {
        title: 'Emerging Tech',
        icon: '🚀',
        items: ['Quantum ML', 'Federated Learning', 'Edge AI', 'AutoML Systems'],
      },
    ],
    relatedModules: [K2Module.DataScienceAnalytics, K2Module.AIApplications, K2Module.DigitalCitizenship],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={advancedDataScienceLessons} />;
}
