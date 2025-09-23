import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { arduinoLessons, ArduinoLesson } from '@/data/modules/arduino';

export async function generateStaticParams() {
  return generateLessonStaticParams(arduinoLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, arduinoLessons, 'arduino');
}

export default async function ArduinoLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<ArduinoLesson> = {
    moduleName: 'arduino',
    moduleTitle: 'Arduino & IoT',
    modulePath: '/arduino',
    lessons: arduinoLessons,
    primaryColor: 'teal',
    secondaryColor: 'blue',
    gradientColors: 'from-teal-500 to-blue-500',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}