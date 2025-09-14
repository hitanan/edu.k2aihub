import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { physicsOfSportsLessons, PhysicsOfSportsLesson } from '@/data/modules/physics-of-sports';
import { PageProps } from '@/types';
import { Metadata } from 'next';
import { FaFlask } from 'react-icons/fa';

// Generate static params for all lessons in the module
export async function generateStaticParams() {
  return generateLessonStaticParams(physicsOfSportsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, physicsOfSportsLessons, 'physics-of-sports');
}

export default async function PhysicsOfSportsLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<PhysicsOfSportsLesson> = {
    moduleName: 'physics-of-sports',
    moduleTitle: 'Vật lý trong Thể thao',
    modulePath: '/learning/physics-of-sports',
    lessons: physicsOfSportsLessons,
    primaryColor: 'teal',
    secondaryColor: 'red',
    gradientColors: 'from-orange-800 via-red-800 to-orange-800',
    getFieldIcon: (field) => (field === 'keyConcept' ? <FaFlask className="w-5 h-5" /> : null),
    getFieldValue: (lesson) => lesson.keyConcept,
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
