import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { pythonLessons, PythonLesson } from '@/data/modules/python';

export async function generateStaticParams() {
  return generateLessonStaticParams(pythonLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, pythonLessons, 'python');
}

export default async function PythonLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<PythonLesson> = {
    moduleName: 'python',
    moduleTitle: 'Python Programming',
    modulePath: '/python',
    lessons: pythonLessons,
    primaryColor: 'blue',
    secondaryColor: 'yellow',
    gradientColors: 'from-blue-500 to-yellow-400',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}