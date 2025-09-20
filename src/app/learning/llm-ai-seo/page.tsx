import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { llmAiSeoModuleData } from '@/data/modules/llm-ai-seo';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  llmAiSeoModuleData.title,
  llmAiSeoModuleData.description,
  ['llm', 'ai', 'seo', 'tối ưu hóa công cụ tìm kiếm', 'K2AI'],
  llmAiSeoModuleData.id,
);

export default function LlmAiSeoPage() {
  return <ModulePageTemplate moduleData={llmAiSeoModuleData} lessons={llmAiSeoModuleData.lessons || []} />;
}
