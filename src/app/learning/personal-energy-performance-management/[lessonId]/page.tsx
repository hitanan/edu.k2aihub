import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { personalEnergyPerformanceManagementModule } from '@/data/modules/personal-energy-performance-management';
import { EnergyManagementLesson } from '@/types/lesson-base';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface LessonPageProps {
  params: {
    lessonId: string;
  };
}

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(personalEnergyPerformanceManagementModule.lessons || []);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  return generateLessonMetadata(params.lessonId, personalEnergyPerformanceManagementModule.lessons || [], personalEnergyPerformanceManagementModule.id);
}

// Page component with standardized config
const config: LessonPageConfig<EnergyManagementLesson> = {
  moduleName: 'personal-energy-performance-management',
  moduleTitle: 'Quản Lý Năng Lượng và Hiệu Suất Cá Nhân',
  modulePath: '/learning/personal-energy-performance-management',
  lessons: personalEnergyPerformanceManagementModule.lessons || [],
  primaryColor: 'orange',
  secondaryColor: 'red',
  gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
};

export default async function EnergyManagementLessonPage({ params }: LessonPageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    notFound();
  }

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
