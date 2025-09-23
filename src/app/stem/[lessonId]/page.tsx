import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { stemLessons, StemLesson } from '@/data/modules/stem';

export async function generateStaticParams() {
  return generateLessonStaticParams(stemLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, stemLessons, 'stem');
}

export default async function StemLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<StemLesson> = {
    moduleName: 'stem',
    moduleTitle: 'STEM Education',
    modulePath: '/stem',
    lessons: stemLessons,
    primaryColor: 'indigo',
    secondaryColor: 'purple',
    gradientColors: 'from-indigo-500 to-purple-500',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}