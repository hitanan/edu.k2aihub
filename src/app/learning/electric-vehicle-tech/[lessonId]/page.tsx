import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import {
  electricVehicleLessons,
  type ElectricVehicleLesson,
} from '@/data/electric-vehicle-tech';
import { PageProps } from '@/types';
import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { Car, Battery, Zap, Settings } from 'lucide-react';

// Convert ElectricVehicleLesson to BaseLessonData
function convertToLesson(lesson: ElectricVehicleLesson): BaseLessonData {
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
      organization: study.company || 'Organization',
      problem: study.challenge,
      solution: study.solution,
      impact: study.impact,
      innovations: study.technologies || [],
    })),
    resources: lesson.resources,
  };
}

// Convert all lessons to BaseLessonData format
const convertedLessons = electricVehicleLessons.map(convertToLesson);

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, convertedLessons);
}

// Get icon for vehicle type field
function getVehicleTypeIcon(vehicleType: string) {
  switch (vehicleType) {
    case 'Electric Vehicle':
      return <Car className="w-5 h-5 text-blue-500" />;
    case 'Autonomous Vehicle':
      return <Car className="w-5 h-5 text-purple-500" />;
    case 'Infrastructure':
      return <Zap className="w-5 h-5 text-yellow-500" />;
    case 'Manufacturing':
      return <Settings className="w-5 h-5 text-gray-500" />;
    default:
      return <Battery className="w-5 h-5 text-green-500" />;
  }
}

// Page component with standardized config
export default async function ElectricVehicleLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'electric-vehicle-tech',
    moduleTitle: 'Electric Vehicle Technology',
    modulePath: '/learning/electric-vehicle-tech',
    lessons: convertedLessons,
    primaryColor: 'blue',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    getFieldIcon: (field: string) => {
      if (field === 'vehicleType') return getVehicleTypeIcon('default');
      return <Car className="w-5 h-5" />;
    },
    getFieldValue: (lesson) => {
      // Find original lesson to get vehicleType
      const originalLesson = electricVehicleLessons.find(
        (l) => l.id === lesson.id,
      );
      return originalLesson?.vehicleType || 'EV Technology';
    },
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
