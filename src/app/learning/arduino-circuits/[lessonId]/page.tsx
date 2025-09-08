import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { BaseLessonData } from '@/types/lesson-base';
import { arduinoCircuitsLessons } from '@/data/arduino-circuits';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(arduinoCircuitsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    return {
      title: 'Lesson not found',
      description: 'The requested lesson could not be found.',
    };
  }
  return generateLessonMetadata(lessonId, arduinoCircuitsLessons, 'arduino-circuits');
}

// Page component with standardized config
export default async function ArduinoLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    return null;
  }
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'arduino-circuits',
    moduleTitle: 'Xây dựng Mạch điện tử với Arduino',
    modulePath: '/learning/arduino-circuits',
    lessons: arduinoCircuitsLessons,
    primaryColor: 'green',
    secondaryColor: 'teal',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
