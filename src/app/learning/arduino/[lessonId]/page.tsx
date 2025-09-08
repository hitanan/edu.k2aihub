import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { arduinoLessons, ArduinoLesson } from '@/data/arduino';
import { PageProps } from '@/types';
import { Cpu, Rocket, Wifi, Wrench } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(arduinoLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    notFound();
  }
  return generateLessonMetadata(lessonId, arduinoLessons, 'arduino');
}

// Page component with standardized config
export default async function ArduinoLessonPage({ params }: PageProps) {
  const { lessonId } = params;
  const config: LessonPageConfig<ArduinoLesson> = {
    moduleName: 'arduino',
    moduleTitle: 'Lập trình Arduino & IoT',
    modulePath: '/learning/arduino',
    lessons: arduinoLessons,
    primaryColor: 'cyan',
    secondaryColor: 'sky',
    gradientColors: 'from-slate-900 via-cyan-900 to-slate-900',
    getFieldValue: (lesson: ArduinoLesson) => lesson.category,
    getFieldIcon: (category: string) => {
      switch (category) {
        case 'basics':
          return <Wrench className="w-5 h-5" />;
        case 'sensors':
          return <Cpu className="w-5 h-5" />;
        case 'communication':
          return <Wifi className="w-5 h-5" />;
        case 'projects':
          return <Rocket className="w-5 h-5" />;
        default:
          return <Wrench className="w-5 h-5" />;
      }
    },
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
