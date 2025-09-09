import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { digitalMarketingLessons } from '@/data/digital-marketing';
import { digitalMarketingModuleData } from '@/data/digital-marketing-module';

import { BaseLessonData } from '@/types/lesson-base';

export async function generateStaticParams() {
  return generateLessonStaticParams(digitalMarketingLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, digitalMarketingLessons, digitalMarketingModuleData.id);
}

export default async function DigitalMarketingLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'digital-marketing',
    moduleTitle: 'Digital Marketing & Creator Economy',
    modulePath: '/learning/digital-marketing',
    lessons: digitalMarketingLessons,
    primaryColor: 'blue',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
