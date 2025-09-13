import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { aiForStudentsModuleData } from '@/data/modules/ai-for-students';

import { BaseLessonData } from '@/types/lesson-base';

const AIForStudentsLessons = aiForStudentsModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(AIForStudentsLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {
      title: 'Lesson not found',
      description: 'The requested lesson could not be found.',
    };
  }
  return generateLessonMetadata(lessonId, AIForStudentsLessons, 'ai-for-students');
}

export default async function AIForStudentsLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return null;
  }
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
