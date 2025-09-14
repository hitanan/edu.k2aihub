import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { personalEnergyLessons, PersonalEnergyLesson } from '@/data/modules/personal-energy-performance-management';
import { PageProps } from '@/types';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return generateLessonStaticParams(personalEnergyLessons);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, personalEnergyLessons, 'personal-energy-performance-management');
}

export default async function PersonalEnergyLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<PersonalEnergyLesson> = {
    moduleName: 'personal-energy-performance-management',
    moduleTitle: 'Quản lý Năng lượng & Hiệu suất Cá nhân',
    modulePath: '/learning/personal-energy-performance-management',
    lessons: personalEnergyLessons,
    primaryColor: 'yellow',
    secondaryColor: 'amber',
    gradientColors: 'from-yellow-800 via-amber-800 to-yellow-800',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
