import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { dailyLifeLessons } from '@/data/modules/daily-life';
import { BaseLessonData } from '@/types/lesson-base';

type Props = {
  params: Promise<{ lessonId: string }>;
};

export async function generateStaticParams() {
  return generateLessonStaticParams(dailyLifeLessons);
}

export async function generateMetadata({ params }: Props) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, dailyLifeLessons, 'daily-life');
}

export default async function DailyLifeLessonPage({ params }: Props) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'daily-life',
    moduleTitle: 'AI trong Đời sống Hàng ngày',
    modulePath: '/learning/daily-life',
    lessons: dailyLifeLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
