import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
  BaseLessonData,
} from '@/components/learning/LessonPageTemplate';
import { energyManagementLessons } from '@/data/energy-management-smart-grid';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return generateLessonStaticParams(energyManagementLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) return {};
  return generateLessonMetadata(lessonId, energyManagementLessons, 'energy-management-smart-grid');
}

export default async function EnergyManagementLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'energy-management-smart-grid',
    moduleTitle: 'Quản Lý Năng Lượng & Lưới Điện Thông Minh',
    modulePath: '/learning/energy-management-smart-grid',
    lessons: energyManagementLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
