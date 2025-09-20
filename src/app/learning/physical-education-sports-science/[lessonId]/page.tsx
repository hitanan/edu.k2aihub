import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { physicalEducationSportsScienceModuleData } from '@/data/modules/physical-education-sports-science';
import { BaseLessonData } from '@/types/lesson-base';

export async function generateStaticParams() {
  return generateLessonStaticParams(physicalEducationSportsScienceModuleData.lessons || []);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(
    lessonId,
    physicalEducationSportsScienceModuleData.lessons || [],
    physicalEducationSportsScienceModuleData.id,
  );
}

export default async function PhysicalEducationSportsScienceLessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'physical-education-sports-science',
    moduleTitle: 'Giáo Dục Thể Chất và Khoa Học Vận Động',
    modulePath: '/learning/physical-education-sports-science',
    lessons: physicalEducationSportsScienceModuleData.lessons || [],
    primaryColor: 'lime',
    secondaryColor: 'green',
    gradientColors: 'from-lime-900 via-green-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
