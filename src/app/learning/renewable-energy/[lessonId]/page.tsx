import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { renewableEnergyLessons, type RenewableEnergyLesson } from '@/data/renewable-energy'
import { PageProps } from '@/types';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { Battery, Zap, Sun, Wind } from 'lucide-react';

// Convert RenewableEnergyLesson to BaseLessonData
function convertToLesson(lesson: RenewableEnergyLesson): BaseLessonData {
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
      organization: study.location || 'Organization',
      problem: study.challenge || 'Problem',
      solution: study.solution,
      impact: study.impact,
      innovations: study.insights || []
    })),
    resources: lesson.resources
  };
}

// Convert all lessons to BaseLessonData format
const convertedLessons = renewableEnergyLessons.map(convertToLesson);

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, convertedLessons);
}

// Get icon for energy type field
function getEnergyTypeIcon(energyType: string) {
  switch (energyType) {
    case 'Solar Power':
      return <Sun className="w-5 h-5 text-yellow-500" />;
    case 'Wind Power':
      return <Wind className="w-5 h-5 text-blue-500" />;
    case 'Energy Storage':
      return <Battery className="w-5 h-5 text-green-500" />;
    case 'Hydropower':
      return <Zap className="w-5 h-5 text-cyan-500" />;
    default:
      return <Zap className="w-5 h-5 text-emerald-500" />;
  }
}

// Page component with standardized config
export default async function RenewableEnergyLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'renewable-energy',
    moduleTitle: 'Năng Lượng Tái Tạo',
    modulePath: '/learning/renewable-energy',
    lessons: convertedLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
    getFieldIcon: (field: string) => {
      if (field === 'energyType') return getEnergyTypeIcon('default');
      return <Zap className="w-5 h-5" />;
    },
    getFieldValue: (lesson) => {
      // Find original lesson to get energyType
      const originalLesson = renewableEnergyLessons.find(l => l.id === lesson.id);
      return originalLesson?.energyType || 'Green Technology';
    }
  }
  
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
