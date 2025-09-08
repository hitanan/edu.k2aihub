import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { PageProps } from '@/types';
import { createLessonMetadata } from '@/utils/seo';
import { DigitalCitizenshipLessons, DigitalCitizenshipLesson } from '@/data/digital-citizenship-online-safety';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lesson = DigitalCitizenshipLessons.find((l) => l.id === params.lessonId);
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

export default function DigitalCitizenshipLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId;

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
