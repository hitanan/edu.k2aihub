import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { spaceLessons, type SpaceExplorationLesson } from '@/data/space-exploration';
import { BaseLessonData } from '@/types/lesson-base';
import { Rocket, Satellite, Globe, Star } from 'lucide-react';
import { notFound } from 'next/navigation';

// Convert SpaceExplorationLesson to BaseLessonData
function convertToBaseLessonData(lesson: SpaceExplorationLesson): BaseLessonData {
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
const convertedLessons = spaceLessons.map(convertToBaseLessonData);

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, convertedLessons, 'space-exploration');
}

// Icon mapping function for space exploration fields
function getSpaceIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    rocket: <Rocket className="w-5 h-5" />,
    satellite: <Satellite className="w-5 h-5" />,
    planetary: <Globe className="w-5 h-5" />,
    astronomy: <Star className="w-5 h-5" />,
  };
  return iconMap[field] || <Rocket className="w-5 h-5" />;
}

// Page component with standardized config
export default async function SpaceExplorationLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'space-exploration',
    moduleTitle: 'Space Exploration',
    modulePath: '/learning/space-exploration',
    lessons: convertedLessons,
    primaryColor: 'violet',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-violet-900 to-slate-900',
    getFieldIcon: (field: string) => getSpaceIcon(field),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
