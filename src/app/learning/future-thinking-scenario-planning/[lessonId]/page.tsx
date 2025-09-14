import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import {
  futureThinkingScenarioPlanningModule,
  FutureThinkingLessonType,
} from '@/data/modules/future-thinking-scenario-planning';
import { Metadata } from 'next';
import { createTitle } from '@/utils/seo';

// Generate static params for all lessons
export function generateStaticParams() {
  return generateLessonStaticParams(futureThinkingScenarioPlanningModule.lessons || []);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }): Promise<Metadata> {
  const { lessonId } = await params;
  if (!lessonId) {
    return {
      title: createTitle('Bài học không tồn tại'),
      description: 'Bài học này không tồn tại hoặc đã bị di chuyển.',
    };
  }
  return generateLessonMetadata(
    lessonId,
    futureThinkingScenarioPlanningModule.lessons || [],
    'future-thinking-scenario-planning',
  );
}

// Page component with standardized config
export default async function FutureThinkingLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const config: LessonPageConfig<FutureThinkingLessonType> = {
    moduleName: 'future-thinking-scenario-planning',
    moduleTitle: 'Tư Duy Tương Lai và Kế Hoạch Kịch Bản',
    modulePath: '/learning/future-thinking-scenario-planning',
    lessons: futureThinkingScenarioPlanningModule.lessons || [],
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
