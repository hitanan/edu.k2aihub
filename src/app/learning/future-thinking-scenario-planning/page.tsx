import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { futureThinkingLessons } from '@/data/lessons/future-thinking-scenario-planning';
import { createModuleMetadata } from '@/utils/seo';
import { futureThinkingScenarioPlanningModule } from '@/data/modules/future-thinking-scenario-planning';

export const metadata: Metadata = createModuleMetadata(
  'Tư Duy Tương Lai và Kế Hoạch Kịch Bản',
  'Phát triển khả năng tư duy về tương lai, scenario planning và strategic foresight để đưa ra quyết định tốt hơn trong môi trường không chắc chắn.',
  ['futures thinking', 'scenario planning', 'strategic foresight', 'trend analysis', 'K2AiHub'],
  'future-thinking-scenario-planning',
);

export default function FutureThinkingMainPage() {
  return <ModulePageTemplate moduleData={futureThinkingScenarioPlanningModule} lessons={futureThinkingLessons} />;
}
