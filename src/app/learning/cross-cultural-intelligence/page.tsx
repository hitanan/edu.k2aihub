import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import {
  crossCulturalIntelligenceModuleData,
  lessons as crossCulturalLessons,
} from '@/data/modules/cross-cultural-intelligence';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  crossCulturalIntelligenceModuleData.title,
  crossCulturalIntelligenceModuleData.description,
  ['cultural intelligence', 'cross-cultural communication', 'global leadership', 'diversity', 'K2AiHub'],
  crossCulturalIntelligenceModuleData.id,
);

export default function CrossCulturalMainPage() {
  return <ModulePageTemplate moduleData={crossCulturalIntelligenceModuleData} lessons={crossCulturalLessons} />;
}
