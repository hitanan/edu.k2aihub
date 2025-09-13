import { Metadata } from 'next';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';

import { createLessonMetadata } from '@/utils/seo';
import {
  lessons as DataScienceLessons,
  type DataScienceAnalyticsLesson as DataScienceLesson,
} from '@/data/modules/data-science-analytics';

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }): Promise<Metadata> {
  const { lessonId } = await params;
  const lesson = DataScienceLessons.find((l) => l.id === lessonId);
  if (!lesson) {
    return {};
  }
  return createLessonMetadata(lesson.title, lesson.description, 'data-science', lesson.id, []);
}

export default async function DataScienceLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;

  const config: LessonPageConfig<DataScienceLesson> = {
    moduleName: 'data-science',
    moduleTitle: 'Data Science - Khoa học dữ liệu',
    modulePath: '/learning/data-science',
    lessons: DataScienceLessons,
    primaryColor: 'blue',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}

export async function generateStaticParams() {
  return DataScienceLessons.map((lesson: DataScienceLesson) => ({
    lessonId: lesson.id,
  }));
}
