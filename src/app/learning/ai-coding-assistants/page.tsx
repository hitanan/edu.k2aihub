import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { aiCodingAssistantsLessons, aiCodingAssistantsModuleData } from '@/data/ai-coding-assistants';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  aiCodingAssistantsModuleData.title,
  aiCodingAssistantsModuleData.description,
  ['trợ lý AI', 'lập trình', 'github copilot', 'phát triển phần mềm', 'K2AI'],
  aiCodingAssistantsModuleData.id,
);

export default function AiCodingAssistantsPage() {
  return <ModulePageTemplate moduleData={aiCodingAssistantsModuleData} lessons={aiCodingAssistantsLessons} />;
}
