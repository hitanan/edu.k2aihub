import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { greenTechLessons, GreenTechLesson } from '@/data/modules/green-technology';

export async function generateStaticParams() {
  return generateLessonStaticParams(greenTechLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, greenTechLessons, 'green-technology');
}

export default async function GreenTechnologyLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<GreenTechLesson> = {
    moduleName: 'green-technology',
    moduleTitle: 'Green Technology & Sustainability',
    modulePath: '/green-technology',
    lessons: greenTechLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    gradientColors: 'from-green-500 to-emerald-500',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}