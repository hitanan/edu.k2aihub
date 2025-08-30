import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { energyManagementLessons, EnergyManagementLessonType } from '@/data/personal-energy-performance-management'
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(energyManagementLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, energyManagementLessons, 'personal-energy-performance-management');
}

// Page component with standardized config
export default async function EnergyManagementLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<EnergyManagementLessonType> = {
    moduleName: 'personal-energy-performance-management',
    moduleTitle: 'Quản Lý Năng Lượng và Hiệu Suất Cá Nhân',
    modulePath: '/learning/personal-energy-performance-management',
    lessons: energyManagementLessons,
    primaryColor: 'orange',
    secondaryColor: 'red', 
    gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
  }
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}