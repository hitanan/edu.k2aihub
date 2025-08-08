import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import {
  environmentalDataScienceLessons,
  type EnvironmentalDataScienceLesson,
} from '@/data/environmental-data-science';
import { PageProps } from '@/types';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import {
  Cloud,
  Droplets,
  Satellite,
  Brain,
  TreePine,
  BarChart3,
} from 'lucide-react';

// Convert EnvironmentalDataScienceLesson to BaseLessonData
function convertToBaseLessonData(
  lesson: EnvironmentalDataScienceLesson,
): BaseLessonData {
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
const convertedLessons = environmentalDataScienceLessons.map(
  convertToBaseLessonData,
);

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, convertedLessons);
}

// Icon mapping function for environmental data science fields
function getEnvironmentalIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    climate: <Cloud className="w-5 h-5" />,
    water: <Droplets className="w-5 h-5" />,
    satellite: <Satellite className="w-5 h-5" />,
    'machine-learning': <Brain className="w-5 h-5" />,
    forest: <TreePine className="w-5 h-5" />,
    monitoring: <BarChart3 className="w-5 h-5" />,
    analysis: <BarChart3 className="w-5 h-5" />,
  };

  return iconMap[field] || <TreePine className="w-5 h-5" />;
}

// Page component with standardized config
export default async function EnvironmentalDataScienceLessonPage({
  params,
}: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'environmental-data-science',
    moduleTitle: 'Environmental Data Science',
    modulePath: '/learning/environmental-data-science',
    lessons: convertedLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
    getFieldIcon: (field: string) => getEnvironmentalIcon(field),
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
