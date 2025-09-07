import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
  BaseLessonData,
} from '@/components/learning/LessonPageTemplate';
import { electricVehicleLessons } from '@/data/electric-vehicle-tech';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return generateLessonStaticParams(electricVehicleLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) return {};
  return generateLessonMetadata(lessonId, electricVehicleLessons, 'electric-vehicle-tech');
}

export default async function ElectricVehicleLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'electric-vehicle-tech',
    moduleTitle: 'Công Nghệ Xe Điện và Tự Hành',
    modulePath: '/learning/electric-vehicle-tech',
    lessons: electricVehicleLessons,
    primaryColor: 'blue',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
