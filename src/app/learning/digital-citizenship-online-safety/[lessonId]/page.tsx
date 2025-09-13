// import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';

import { createLessonMetadata } from '@/utils/seo';
import {
  lessons as DigitalCitizenshipLessons,
  DigitalCitizenshipLesson,
} from '@/data/modules/digital-citizenship-online-safety';

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }): Promise<Metadata> {
  const { lessonId } = await params;
  const lesson = DigitalCitizenshipLessons.find((l) => l.id === lessonId);
  if (!lesson) {
    return {};
  }
  return createLessonMetadata(
    lesson.title,
    lesson.description,
    'digital-citizenship-online-safety',
    lesson.id,
    [], // Assuming no specific keywords for now
  );
}

export default async function DigitalCitizenshipLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;

  const config: LessonPageConfig<DigitalCitizenshipLesson> = {
    moduleName: 'digital-citizenship-online-safety',
    moduleTitle: 'Công Dân Số & An Toàn Trực Tuyến',
    modulePath: '/learning/digital-citizenship-online-safety',
    lessons: DigitalCitizenshipLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-blue-500 to-indigo-600',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}

export async function generateStaticParams() {
  return DigitalCitizenshipLessons.map((lesson: DigitalCitizenshipLesson) => ({
    lessonId: lesson.id,
  }));
}
