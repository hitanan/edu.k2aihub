import { Metadata } from 'next';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';

import { createLessonMetadata } from '@/utils/seo';
import { environmentalDataScienceLessons, EnvironmentalDataScienceLesson } from '@/data/environmental-data-science';

export async function generateStaticParams() {
  return environmentalDataScienceLessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }): Promise<Metadata> {
  const { lessonId } = await params;
  const lesson = environmentalDataScienceLessons.find((l) => l.id === lessonId);
  if (!lesson) {
    return {};
  }
  return createLessonMetadata(lesson.title, lesson.description, 'environmental-data-science', lesson.id, []);
}

export default async function EnvironmentalDataScienceLessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;

  const config: LessonPageConfig<EnvironmentalDataScienceLesson> = {
    moduleName: 'environmental-data-science',
    moduleTitle: 'Khoa Học Dữ Liệu Môi Trường',
    modulePath: '/learning/environmental-data-science',
    lessons: environmentalDataScienceLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
