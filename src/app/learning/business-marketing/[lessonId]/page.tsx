import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { businessMarketingLessons } from '@/data/modules/business-marketing';
import { Trophy } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(businessMarketingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, businessMarketingLessons, 'business-marketing');
}

// Page component with standardized config
export default async function BusinessMarketingLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<(typeof businessMarketingLessons)[0]> = {
    moduleName: 'business-marketing',
    moduleTitle: 'AI cho Kinh Doanh & Marketing',
    modulePath: '/learning/business-marketing',
    lessons: businessMarketingLessons,
    primaryColor: 'orange',
    secondaryColor: 'red',
    gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
    getFieldIcon: () => <Trophy className="w-5 h-5" />,
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
