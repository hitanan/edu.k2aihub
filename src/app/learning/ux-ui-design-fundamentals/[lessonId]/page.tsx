import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { uxuiDesignLessons, UXUILessonType } from '@/data/modules/ux-ui-design-fundamentals';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(uxuiDesignLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return { title: 'Lesson not found' };
  }
  return generateLessonMetadata(lessonId, uxuiDesignLessons, 'ux-ui-design-fundamentals');
}

// Page component with standardized config
export default async function UXUIDesignLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<UXUILessonType> = {
    moduleName: 'ux-ui-design-fundamentals',
    moduleTitle: 'Cơ Bản Thiết Kế UX/UI',
    modulePath: '/learning/ux-ui-design-fundamentals',
    lessons: uxuiDesignLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
