import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { llmAiSeoModuleData } from '@/data/modules/llm-ai-seo';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { BaseLessonData } from '@/types/lesson-base';

type Props = {
  params: Promise<{
    lessonId: string;
  }>;
};

export async function generateStaticParams() {
  if (!llmAiSeoModuleData.lessons) return [];
  return llmAiSeoModuleData.lessons.map((lesson: BaseLessonData) => ({
    lessonId: lesson.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lessonId } = await params;
  if (!llmAiSeoModuleData.lessons) return { title: 'Lesson Not Found - K2AiHub' };
  const lesson = llmAiSeoModuleData.lessons.find((l: BaseLessonData) => l.id === lessonId);

  if (!lesson) {
    return {
      title: 'Lesson Not Found - K2AiHub',
      description: 'The requested lesson could not be found.',
    };
  }

  return {
    title: createTitle(lesson.title),
    description: createDescription(lesson.description),
    keywords: createKeywords([
      'LLM SEO',
      'AI search optimization',
      lesson.title.toLowerCase(),
      'ChatGPT SEO',
      'AI-powered search',
      'semantic SEO',
      'K2AI',
      'học tập thông minh'
    ]),
    openGraph: {
      title: createTitle(lesson.title),
      description: createDescription(lesson.description),
      type: 'article',
      url: `https://k2aihub.com/ai/llm-ai-seo/${lessonId}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: createTitle(lesson.title),
      description: createDescription(lesson.description),
    },
    alternates: {
      canonical: `https://k2aihub.com/ai/llm-ai-seo/${lessonId}`,
    },
  };
}

export default async function LessonPage({ params }: Props) {
  const { lessonId } = await params;
  if (!llmAiSeoModuleData.lessons) notFound();
  
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'llm-ai-seo',
    moduleTitle: 'LLM AI SEO - Tối Ưu cho AI Search',
    modulePath: '/ai/llm-ai-seo',
    lessons: llmAiSeoModuleData.lessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-purple-900 via-pink-900 to-purple-900',
  };

  return (
    <LessonPageTemplate lessonId={lessonId} config={config} />
  );
}