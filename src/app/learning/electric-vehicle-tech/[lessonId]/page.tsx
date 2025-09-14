import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { electricVehicleLessons, electricVehicleTechModuleData } from '@/data/modules/electric-vehicle-tech';
import { notFound } from 'next/navigation';
import { createTitle } from '@/utils/seo';
import { BaseLessonData } from '@/types';

export function generateStaticParams() {
  return generateLessonStaticParams(electricVehicleLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {
      title: createTitle('Bài học không tồn tại'),
      description: 'Bài học này không tồn tại hoặc đã bị di chuyển.',
    };
  }
  return generateLessonMetadata(lessonId, electricVehicleLessons, 'electric-vehicle-tech');
}

export default async function ElectricVehicleLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'electric-vehicle-tech',
    moduleTitle: electricVehicleTechModuleData.title,
    modulePath: '/learning/electric-vehicle-tech',
    lessons: electricVehicleLessons,
    primaryColor: 'blue',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
