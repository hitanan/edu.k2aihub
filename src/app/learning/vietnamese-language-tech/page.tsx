import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { vietnameseLangTechLessons } from '@/data/modules/vietnamese-language-tech';
import { createModuleMetadata } from '@/utils/seo';
import { vietnameseLanguageTechModuleData } from '@/data/modules/vietnamese-language-tech';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  vietnameseLanguageTechModuleData.title,
  vietnameseLanguageTechModuleData.description,
  [
    'vietnamese nlp',
    'tiếng việt ai',
    'chatbot tiếng việt',
    'voice ai vietnam',
    'vietnamese speech recognition',
    'phobert',
    'K2AiHub',
  ],
  vietnameseLanguageTechModuleData.id,
);

export default function VietnameseLanguageTechPage() {
  return <ModulePageTemplate moduleData={vietnameseLanguageTechModuleData} lessons={vietnameseLangTechLessons} />;
}
