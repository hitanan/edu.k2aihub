import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { aiSeoOptimizationLessons } from '@/data/ai-seo-optimization';
import { BaseLessonData } from '@/types/lesson-base';
import { Zap } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(aiSeoOptimizationLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;

  return generateLessonMetadata(lessonId, aiSeoOptimizationLessons, 'ai-seo-optimization');
}

// Page component with standardized config
export default async function AiSeoOptimizationLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'ai-seo-optimization',
    moduleTitle: 'AI SEO Optimization',
    modulePath: '/learning/ai-seo-optimization',
    lessons: aiSeoOptimizationLessons,
    primaryColor: 'blue',
    secondaryColor: 'teal',
    gradientColors: 'from-blue-900 via-teal-900 to-slate-900',
    getFieldIcon: (field: string) => {
      if (field === 'difficulty') return <Zap className="w-5 h-5" />;
      return undefined;
    },
  };

  const { lessonId } = await params;

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
