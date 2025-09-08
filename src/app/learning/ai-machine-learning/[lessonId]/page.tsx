import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { aiMachineLearningLessons } from '@/data/ai-machine-learning';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';
import { Brain } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(aiMachineLearningLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    return {
      title: 'Lesson not found',
      description: 'The requested lesson could not be found.',
    };
  }
  return generateLessonMetadata(lessonId, aiMachineLearningLessons, 'ai-machine-learning');
}

// Page component with standardized config
export default async function AIMachineLearningLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    return null;
  }

  const config: LessonPageConfig<BaseLessonData & { algorithmTypes?: string[] }> = {
    moduleName: 'ai-machine-learning',
    moduleTitle: 'AI & Machine Learning',
    modulePath: '/learning/ai-machine-learning',
    lessons: aiMachineLearningLessons,
    primaryColor: 'purple', // Primary theme color
    secondaryColor: 'indigo', // Secondary theme color
    gradientColors: 'from-slate-900 via-purple-900 to-indigo-900', // Background gradient
    getFieldIcon: () => <Brain className="w-5 h-5" />, // Optional
    getFieldValue: (lesson) => lesson.algorithmTypes?.join(', ') || '', // Optional
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
