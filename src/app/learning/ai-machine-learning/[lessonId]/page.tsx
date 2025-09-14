import { LessonPageTemplate, generateLessonMetadata, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { aiMachineLearningModuleData, aiMachineLearningLessons } from '@/data/modules/ai-machine-learning';
import { PageProps } from '@/types';
import { Metadata } from 'next';
import { Brain } from 'lucide-react';
import { BaseLessonData } from '@/types/lesson-base';

// Generate static params for all lessons
export function generateStaticParams() {
  return (aiMachineLearningLessons || []).map((lesson) => ({
    lessonId: lesson.id,
  }));
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, aiMachineLearningLessons, 'ai-machine-learning');
}

// Page component with standardized config
export default async function AIMachineLearningLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  if (!lessonId) {
    return null;
  }

  const config: LessonPageConfig<BaseLessonData & { algorithmTypes?: string[] }> = {
    moduleName: aiMachineLearningModuleData.id,
    moduleTitle: aiMachineLearningModuleData.title,
    modulePath: aiMachineLearningModuleData.href || '',
    lessons: aiMachineLearningLessons,
    primaryColor: 'purple', // Primary theme color
    secondaryColor: 'indigo', // Secondary theme color
    gradientColors: 'from-slate-900 via-purple-900 to-indigo-900', // Background gradient
    getFieldIcon: () => <Brain className="w-5 h-5" />, // Optional
    getFieldValue: (lesson) => lesson.algorithmTypes?.join(', ') || '', // Optional
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
