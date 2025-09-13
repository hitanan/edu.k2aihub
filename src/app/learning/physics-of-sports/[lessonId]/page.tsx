import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { physicsOfSportsModule } from '@/data/modules/physics-of-sports';
import { PhysicsOfSportsLesson } from '@/types/lesson-base';
import { FaFlask } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface LessonPageProps {
  params: {
    lessonId: string;
  };
}

export async function generateStaticParams() {
  return generateLessonStaticParams(physicsOfSportsModule.lessons || []);
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  return generateLessonMetadata(params.lessonId, physicsOfSportsModule.lessons || [], physicsOfSportsModule.id);
}

const config: LessonPageConfig<PhysicsOfSportsLesson> = {
  moduleName: 'physics-of-sports',
  moduleTitle: 'Vật lý trong Thể thao',
  modulePath: '/learning/physics-of-sports',
  lessons: physicsOfSportsModule.lessons || [],
  primaryColor: 'teal',
  secondaryColor: 'cyan',
  gradientColors: 'from-slate-900 via-teal-900 to-slate-900',
  getFieldIcon: (field) => (field === 'keyConcept' ? <FaFlask className="w-5 h-5" /> : null),
  getFieldValue: (lesson) => lesson.keyConcept,
};

export default async function PhysicsLessonPage({ params }: LessonPageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    notFound();
  }

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
