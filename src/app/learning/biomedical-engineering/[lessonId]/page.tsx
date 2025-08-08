import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import {
  biomedicalEngineeringLessons,
  type BiomedicalEngineeringLesson,
} from '@/data/biomedical-engineering';
import { PageProps } from '@/types';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { Heart, Brain, Dna, Bot, Shield, Activity } from 'lucide-react';

// Convert BiomedicalEngineeringLesson to BaseLessonData
function convertToBaseLessonData(
  lesson: BiomedicalEngineeringLesson,
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
const convertedLessons = biomedicalEngineeringLessons.map(
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

// Icon mapping function for biomedical engineering fields
function getBiomedicalIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    device: <Heart className="w-5 h-5" />,
    signal: <Activity className="w-5 h-5" />,
    imaging: <Brain className="w-5 h-5" />,
    regenerative: <Dna className="w-5 h-5" />,
    robotics: <Bot className="w-5 h-5" />,
    safety: <Shield className="w-5 h-5" />,
    regulatory: <Shield className="w-5 h-5" />,
    clinical: <Heart className="w-5 h-5" />,
  };

  return iconMap[field] || <Heart className="w-5 h-5" />;
}

// Page component with standardized config
export default async function BiomedicalEngineeringLessonPage({
  params,
}: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'biomedical-engineering',
    moduleTitle: 'Biomedical Engineering',
    modulePath: '/learning/biomedical-engineering',
    lessons: convertedLessons,
    primaryColor: 'teal',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-teal-900 to-slate-900',
    getFieldIcon: (field: string) => getBiomedicalIcon(field),
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
