import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { entrepreneurshipAndInnovationModuleData } from '@/data/modules/entrepreneurship-and-innovation';
import { BaseLessonData, PageProps } from '@/types';

const lessons = entrepreneurshipAndInnovationModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, 'entrepreneurship-and-innovation');
}

export default async function ModuleLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'entrepreneurship-and-innovation',
    moduleTitle: 'Khởi Nghiệp và Đổi Mới Sáng Tạo',
    modulePath: '/learning/entrepreneurship-and-innovation',
    lessons: lessons,
    primaryColor: 'orange',
    secondaryColor: 'amber',
    gradientColors: 'from-orange-500 to-amber-500',
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
