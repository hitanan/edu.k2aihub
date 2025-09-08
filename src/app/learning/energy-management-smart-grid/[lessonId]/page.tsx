import { Metadata } from 'next';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { PageProps } from '@/types';
import { createLessonMetadata } from '@/utils/seo';
import { energyManagementLessons, EnergyManagementLesson } from '@/data/energy-management-smart-grid';

export async function generateStaticParams() {
  return energyManagementLessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lesson = energyManagementLessons.find((l) => l.id === params.lessonId);
  if (!lesson) {
    return {};
  }
  return createLessonMetadata(lesson.title, lesson.description, 'energy-management-smart-grid', lesson.id, []);
}

export default function EnergyManagementLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId;

  const config: LessonPageConfig<EnergyManagementLesson> = {
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
