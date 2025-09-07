import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { advancedAILessons, type AdvancedAILesson } from '@/data/advanced-ai';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/k2-modules';
import { BaseLessonData } from '@/types/lesson-base';

// Convert AdvancedAILesson to BaseLessonData
function convertToBaseLessonData(lesson: AdvancedAILesson): BaseLessonData {
  return {
    id: lesson.id,
    title: lesson.title,
    description: lesson.description,
    duration: lesson.duration,
    difficulty: lesson.difficulty,
    videoUrl: lesson.videoUrl,
    imageUrl: lesson.imageUrl,
    objectives: lesson.objectives,
    prerequisites: lesson.prerequisites,
    exercises: lesson.exercises.map((ex) => ({
      ...ex,
      materials: [...(ex.tools || []), ...(ex.datasets || [])],
    })),
    realWorldApplications: lesson.realWorldApplications,
    caseStudies: lesson.caseStudies,
    resources: lesson.resources,
    vietnamContext: lesson.vietnamContext,
    careerConnect: lesson.careerConnect,
    quizzes: lesson.quizzes,
  };
}

export const metadata: Metadata = createModuleMetadata(
  'Advanced AI & Machine Learning - AI Nâng Cao',
  'Khóa học AI và Machine Learning nâng cao. Deep Learning, Neural Networks và AI Applications',
  ['advanced ai', 'machine learning', 'deep learning', 'neural networks', 'ai applications'],
  'advanced-ai',
);

export default function AdvancedAIPage() {
  const moduleData = {
    id: 'advanced-ai',
    title: 'Advanced AI & Machine Learning',
    subtitle: 'Trí Tuệ Nhân Tạo Nâng Cao',
    description:
      'Master cutting-edge artificial intelligence technologies từ deep learning và computer vision đến natural language processing và reinforcement learning. Phát triển production-ready AI systems với focus đặc biệt trên Vietnamese market applications và ethical AI practices.',
    level: 'Nâng cao',
    duration: '18-22 giờ',
    category: 'Advanced Technology',
    features: [
      'Deep Learning với TensorFlow và PyTorch cho computer vision và NLP',
      'Advanced Computer Vision: object detection, segmentation, facial recognition',
      'Natural Language Processing cho Vietnamese language với PhoBERT và custom models',
      'Reinforcement Learning cho autonomous systems và optimization',
      'AI Ethics và bias mitigation với cultural sensitivity cho Vietnamese market',
    ],
    icon: '🧠',
    color: 'from-purple-600 to-indigo-600',
    heroImageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&auto=format',
    objectives: [
      'Master deep learning architectures: CNN, RNN, Transformers cho production applications',
      'Develop advanced computer vision systems cho real-world Vietnamese applications',
      'Implement sophisticated NLP solutions cho Vietnamese language processing',
      'Build reinforcement learning systems cho autonomous vehicles và smart cities',
      'Deploy ethical AI systems với bias detection và cultural sensitivity',
    ],
    prerequisites: [
      'Strong programming skills trong Python và machine learning libraries',
      'Solid understanding của linear algebra, calculus, statistics',
      'Experience với basic machine learning concepts và algorithms',
      'Familiarity với cloud platforms AWS/GCP cho model training',
      'Understanding của software engineering principles cho production deployment',
    ],
    careerOutcomes: [
      'AI Research Engineer (40-80 triệu VNĐ/tháng)',
      'Machine Learning Engineer (35-70 triệu VNĐ/tháng)',
      'Computer Vision Engineer (38-75 triệu VNĐ/tháng)',
      'NLP Engineer (36-72 triệu VNĐ/tháng)',
      'AI Product Manager (45-85 triệu VNĐ/tháng)',
      'AI Ethics Specialist (30-60 triệu VNĐ/tháng)',
      'Principal AI Architect (60-120 triệu VNĐ/tháng)',
    ],
    industryApplications: [
      'VinAI Research developing Vietnamese language models và computer vision',
      'FPT AI building smart city solutions cho traffic monitoring và urban planning',
      'DataHouse real-world client projects in domains such as ERP, healthcare, internal chatbot',
      'Banking sector using AI cho fraud detection và risk assessment',
      'Healthcare AI cho medical imaging và diagnosis assistance',
      'E-commerce platforms với recommendation systems và chatbots',
      'Autonomous vehicle development cho Vietnamese traffic conditions',
      'Agricultural AI cho crop monitoring và precision farming trong Mekong Delta',
    ],
    marketDemand: {
      averageSalary: '35-120 triệu VNĐ',
      jobGrowth: '+65%',
      hireDemand: 'Cực cao',
    },
    relatedModules: [
      K2Module.Python,
      K2Module.SemiconductorTechnology,
      K2Module.RenewableEnergy,
      K2Module.Cybersecurity,
    ],
  };

  // Convert lessons to BaseLessonData format
  const convertedLessons = advancedAILessons.map(convertToBaseLessonData);

  return <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />;
}
