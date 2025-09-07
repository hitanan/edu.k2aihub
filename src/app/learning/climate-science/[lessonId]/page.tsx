import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { ClimateLessons, type ClimateLessonData } from '@/data/climate-science';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';
import { Thermometer, CloudRain, Wind, Trees } from 'lucide-react';

// Convert ClimateLessonData to BaseLessonData
function convertToBaseLessonData(lesson: ClimateLessonData): BaseLessonData {
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
const convertedLessons = ClimateLessons.map(convertToBaseLessonData);

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, convertedLessons, 'climate-science');
}

// Icon mapping function for climate science fields
function getClimateIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    temperature: <Thermometer className="w-5 h-5" />,
    precipitation: <CloudRain className="w-5 h-5" />,
    atmospheric: <Wind className="w-5 h-5" />,
    ecology: <Trees className="w-5 h-5" />,
  };
  return iconMap[field] || <Thermometer className="w-5 h-5" />;
}

// Page component with standardized config
export default async function ClimateScienceLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'climate-science',
    moduleTitle: 'Climate Science',
    modulePath: '/learning/climate-science',
    lessons: convertedLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
    getFieldIcon: (field: string) => getClimateIcon(field),
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
