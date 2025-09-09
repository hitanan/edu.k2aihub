import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { aerospaceEngineeringLessons } from '@/data/aerospace-engineering';

import { BaseLessonData } from '@/types/lesson-base';
import { Plane, Satellite, Rocket, Cog, Navigation, Radar } from 'lucide-react';
import { notFound } from 'next/navigation';
import { AerospaceEngineeringLesson } from '@/data/aerospace-engineering';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(aerospaceEngineeringLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return { title: 'Lesson not found' };
  }
  return generateLessonMetadata(lessonId, aerospaceEngineeringLessons, 'aerospace-engineering');
}

// Icon mapping function for aerospace engineering fields
function getAerospaceIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    aircraft: <Plane className="w-5 h-5" />,
    satellite: <Satellite className="w-5 h-5" />,
    space: <Rocket className="w-5 h-5" />,
    avionics: <Cog className="w-5 h-5" />,
    navigation: <Navigation className="w-5 h-5" />,
    systems: <Radar className="w-5 h-5" />,
  };

  return iconMap[field] || <Plane className="w-5 h-5" />;
}

// Page component with standardized config
export default async function AerospaceEngineeringLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'aerospace-engineering',
    moduleTitle: 'Aerospace Engineering',
    modulePath: '/learning/aerospace-engineering',
    lessons: aerospaceEngineeringLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    getFieldIcon: (field: string) => getAerospaceIcon(field),
    getFieldValue: (lesson) => {
      const aeroLesson = lesson as AerospaceEngineeringLesson;
      if (aeroLesson.aerospaceApplications) return `${aeroLesson.aerospaceApplications.length} Applications`;
      if (aeroLesson.flightPrinciples) return `${aeroLesson.flightPrinciples.length} Principles`;
      return 'General';
    },
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
