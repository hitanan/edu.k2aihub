import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { createModuleMetadata } from '@/utils/seo';
import { futureThinkingScenarioPlanningModule } from '@/data/modules/future-thinking-scenario-planning';

export const metadata: Metadata = createModuleMetadata(
  futureThinkingScenarioPlanningModule.title,
  futureThinkingScenarioPlanningModule.description,
  ['futures thinking', 'scenario planning', 'strategic foresight', 'trend analysis', 'K2AiHub'],
  futureThinkingScenarioPlanningModule.id,
);

export default function FutureThinkingMainPage() {
  return (
    <ModulePageTemplate
      moduleData={futureThinkingScenarioPlanningModule}
      lessons={futureThinkingScenarioPlanningModule.lessons || []}
    />
  );
}
