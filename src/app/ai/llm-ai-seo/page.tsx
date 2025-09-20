import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { llmAiSeoModuleData } from '@/data/modules/llm-ai-seo';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('LLM AI SEO - Tối Ưu cho AI Search'),
  description: createDescription('Học cách tối ưu nội dung và website cho Large Language Models và AI-powered search engines như ChatGPT, Google AI Overviews, và Perplexity.'),
  keywords: createKeywords([
    'LLM SEO',
    'AI search optimization',
    'ChatGPT SEO',
    'AI-powered search',
    'semantic SEO',
    'LLM content optimization',
    'AI search visibility',
    'Google AI Overviews',
    'Perplexity optimization',
    'embedding-based SEO',
    'concept ownership SEO',
    'RAG system optimization',
    'AI crawler optimization',
    'semantic content strategy',
    'K2AI',
    'học tập thông minh'
  ]),
  openGraph: {
    title: createTitle('LLM AI SEO - Tối Ưu cho AI Search'),
    description: createDescription('Học cách tối ưu nội dung và website cho Large Language Models và AI-powered search engines như ChatGPT, Google AI Overviews, và Perplexity.'),
    type: 'article',
    url: 'https://k2aihub.com/ai/llm-ai-seo',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('LLM AI SEO - Tối Ưu cho AI Search'),
    description: createDescription('Học cách tối ưu nội dung và website cho Large Language Models và AI-powered search engines như ChatGPT, Google AI Overviews, và Perplexity.'),
  },
  alternates: {
    canonical: 'https://k2aihub.com/ai/llm-ai-seo',
  },
};

export default function LlmAiSeoModulePage() {
  return <ModulePageTemplate moduleData={llmAiSeoModuleData} lessons={llmAiSeoModuleData.lessons || []} />;
}