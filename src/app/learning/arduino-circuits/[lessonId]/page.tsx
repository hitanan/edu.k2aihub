import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
  BaseLessonData,
} from '@/components/learning/LessonPageTemplate';
import { arduinoCircuitsLessons } from '@/data/arduino-circuits';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(arduinoCircuitsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, arduinoCircuitsLessons, 'arduino-circuits');
}

// Page component with standardized config
export default async function ArduinoLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'arduino-circuits',
    moduleTitle: 'Xây dựng Mạch điện tử với Arduino',
    modulePath: '/learning/arduino-circuits',
    lessons: arduinoCircuitsLessons,
    primaryColor: 'green',
    secondaryColor: 'teal',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
