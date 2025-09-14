import {
  LessonPageTemplate,
  generateLessonMetadata,
  LessonPageConfig,
  generateLessonStaticParams,
} from '@/components/learning/LessonPageTemplate';
import { aiForStudentsModuleData, AIForStudentsLessons } from '@/data/modules/ai-for-students';
import { PageProps } from '@/types';
import { Metadata } from 'next';
import { BaseLessonData } from '@/types/lesson-base';

export function generateStaticParams() {
  return generateLessonStaticParams(AIForStudentsLessons);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, AIForStudentsLessons, 'ai-for-students');
}

export default async function AIForStudentsLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  if (!lessonId) {
    return null;
  }
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: aiForStudentsModuleData.id,
    moduleTitle: aiForStudentsModuleData.title,
    modulePath: aiForStudentsModuleData.href || '',
    lessons: AIForStudentsLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
