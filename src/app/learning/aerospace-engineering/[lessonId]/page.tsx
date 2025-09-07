import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { aerospaceEngineeringLessons, type AerospaceEngineeringLesson } from '@/data/aerospace-engineering';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';
import { Plane, Satellite, Rocket, Cog, Navigation, Radar } from 'lucide-react';

// Convert AerospaceEngineeringLesson to BaseLessonData
function convertToBaseLessonData(lesson: AerospaceEngineeringLesson): BaseLessonData {
  return {
    id: lesson.id,
    title: lesson.title,
    description: lesson.description,
    duration: lesson.duration,
    difficulty: lesson.difficulty,
    videoUrl: lesson.videoUrl,
    imageUrl: lesson.imageUrl,
    objectives: lesson.objectives,
    prerequisites: lesson.prerequisites,
    exercises: lesson.exercises,
    realWorldApplications: lesson.realWorldApplications,
    caseStudies: lesson.caseStudies?.map((study) => ({
      title: study.title,
      organization: study.organization,
      problem: study.problem,
      solution: study.solution,
      impact: study.impact,
      innovations: study.innovations || [],
    })),
    resources: lesson.resources,
  };
}

// Convert lessons to BaseLessonData format
const convertedLessons = aerospaceEngineeringLessons.map(convertToBaseLessonData);

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, convertedLessons, 'aerospace-engineering');
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
export default async function AerospaceEngineeringLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'aerospace-engineering',
    moduleTitle: 'Aerospace Engineering',
    modulePath: '/learning/aerospace-engineering',
    lessons: convertedLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    getFieldIcon: (field: string) => getAerospaceIcon(field),
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
