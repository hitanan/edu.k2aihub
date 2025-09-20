import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { personalFinanceForBeginnersModuleData } from '@/data/modules/personal-finance-for-beginners';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

const lessons = personalFinanceForBeginnersModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, personalFinanceForBeginnersModuleData.id);
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'personal-finance-for-beginners',
    moduleTitle: 'Tài Chính Cá Nhân Cho Người Mới Bắt Đầu',
    modulePath: '/learning/personal-finance-for-beginners',
    lessons: lessons,
    primaryColor: 'emerald',
    secondaryColor: 'lime',
    gradientColors: 'from-emerald-900 via-lime-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
