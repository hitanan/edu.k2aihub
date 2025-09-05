import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { physicsOfSportsLessons, PhysicsLessonType } from '@/data/physics-of-sports'
import { PageProps } from '@/types';
import { FaFlask } from 'react-icons/fa';

export async function generateStaticParams() {
  return generateLessonStaticParams(physicsOfSportsLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, physicsOfSportsLessons, 'physics-of-sports');
}

export default async function PhysicsLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<PhysicsLessonType> = {
    moduleName: 'physics-of-sports',
    moduleTitle: 'Vật lý trong Thể thao',
    modulePath: '/learning/physics-of-sports',
    lessons: physicsOfSportsLessons,
    primaryColor: 'teal',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-teal-900 to-slate-900',
    getFieldIcon: (field) => field === 'keyConcept' ? <FaFlask className="w-5 h-5" /> : null,
    getFieldValue: (lesson) => lesson.keyConcept,
  }
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
