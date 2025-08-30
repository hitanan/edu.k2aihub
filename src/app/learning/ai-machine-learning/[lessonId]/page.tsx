import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { aiMachineLearningLessons, AIMachineLearningLessonType } from '@/data/ai-machine-learning'
import { PageProps } from '@/types';
import { Brain } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(aiMachineLearningLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  return generateLessonMetadata(resolvedParams.lessonId, aiMachineLearningLessons, 'ai-machine-learning');
}

// Page component with standardized config
export default async function AIMachineLearningLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<AIMachineLearningLessonType> = {
    moduleName: 'ai-machine-learning',
    moduleTitle: 'AI & Machine Learning',
    modulePath: '/learning/ai-machine-learning',
    lessons: aiMachineLearningLessons,
    primaryColor: 'purple', // Primary theme color
    secondaryColor: 'indigo', // Secondary theme color
    gradientColors: 'from-slate-900 via-purple-900 to-indigo-900', // Background gradient
    getFieldIcon: () => <Brain className="w-5 h-5" />, // Optional
    getFieldValue: (lesson) => lesson.algorithmTypes?.join(', ') || '', // Optional
  }
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
