import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { careerGuidanceDevelopmentModuleData } from '@/data/modules/career-guidance-development';
import { BaseLessonData } from '@/types/lesson-base';

export async function generateStaticParams() {
  return generateLessonStaticParams(careerGuidanceDevelopmentModuleData.lessons || []);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(
    lessonId,
    careerGuidanceDevelopmentModuleData.lessons || [],
    careerGuidanceDevelopmentModuleData.id,
  );
}

export default async function CareerGuidanceDevelopmentLessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'career-guidance-development',
    moduleTitle: 'Hướng Nghiệp và Phát Triển Sự Nghiệp',
    modulePath: '/learning/career-guidance-development',
    lessons: careerGuidanceDevelopmentModuleData.lessons || [],
    primaryColor: 'sky',
    secondaryColor: 'indigo',
    gradientColors: 'from-sky-900 via-indigo-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
