import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams } from '@/components/learning/LessonPageTemplate'
import { AIForStudentsLessons } from '@/data/ai-for-students'
import { PageProps } from '@/types';
import { LessonPageConfig, BaseLessonData } from '@/components/learning/LessonPageTemplate';

export async function generateStaticParams() {
  return generateLessonStaticParams(AIForStudentsLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, AIForStudentsLessons, 'ai-for-students');
}

export default async function AIForStudentsLessonPage({ params }: PageProps) {
    const { lessonId } = await params;
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'ai-for-students',
    moduleTitle: 'AI cho Học sinh',
    modulePath: '/learning/ai-for-students',
    lessons: AIForStudentsLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
