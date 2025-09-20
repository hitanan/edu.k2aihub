import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { llmAiSeoModuleData } from '@/data/modules/llm-ai-seo';
import { BaseLessonData } from '@/types/lesson-base';

export async function generateStaticParams() {
  return generateLessonStaticParams(llmAiSeoModuleData.lessons || []);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, llmAiSeoModuleData.lessons || [], llmAiSeoModuleData.id);
}

export default async function LlmAiSeoLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'llm-ai-seo',
    moduleTitle: 'LLM AI SEO',
    modulePath: '/learning/llm-ai-seo',
    lessons: llmAiSeoModuleData.lessons || [],
    primaryColor: 'purple',
    secondaryColor: 'indigo',
    gradientColors: 'from-purple-900 via-indigo-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
