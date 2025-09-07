import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
  BaseLessonData,
} from '@/components/learning/LessonPageTemplate';
import { DigitalCitizenshipLessons } from '@/data/digital-citizenship-online-safety';
import { PageProps } from '@/types';
import { K2Module } from '@/data/k2-modules';

export async function generateStaticParams() {
  return generateLessonStaticParams(DigitalCitizenshipLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, DigitalCitizenshipLessons, K2Module.DigitalCitizenshipOnlineSafety);
}

export default async function DigitalCitizenshipLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'digital-citizenship-online-safety',
    moduleTitle: 'Công dân số & An toàn trực tuyến',
    modulePath: '/learning/digital-citizenship-online-safety',
    lessons: DigitalCitizenshipLessons,
    primaryColor: 'teal',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-teal-900 to-slate-900',
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
