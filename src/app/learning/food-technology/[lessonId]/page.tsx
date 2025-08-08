import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import {
  foodTechnologyLessons,
  type FoodTechnologyLesson,
} from '@/data/food-technology';
import { PageProps } from '@/types';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import {
  Shield,
  FlaskConical,
  ChefHat,
  Leaf,
  Utensils,
  Beaker,
} from 'lucide-react';

// Convert FoodTechnologyLesson to BaseLessonData
function convertToBaseLessonData(lesson: FoodTechnologyLesson): BaseLessonData {
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
const convertedLessons = foodTechnologyLessons.map(convertToBaseLessonData);

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, convertedLessons);
}

// Icon mapping function for food technology fields
function getFoodTechIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    safety: <Shield className="w-5 h-5" />,
    fermentation: <FlaskConical className="w-5 h-5" />,
    molecular: <ChefHat className="w-5 h-5" />,
    sustainable: <Leaf className="w-5 h-5" />,
    processing: <Utensils className="w-5 h-5" />,
    biotechnology: <Beaker className="w-5 h-5" />,
  };

  return iconMap[field] || <Utensils className="w-5 h-5" />;
}

// Page component with standardized config
export default async function FoodTechnologyLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'food-technology',
    moduleTitle: 'Food Technology',
    modulePath: '/learning/food-technology',
    lessons: convertedLessons,
    primaryColor: 'amber',
    secondaryColor: 'orange',
    gradientColors: 'from-slate-900 via-amber-900 to-slate-900',
    getFieldIcon: (field: string) => getFoodTechIcon(field),
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
