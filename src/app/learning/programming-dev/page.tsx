import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { programmingDevLessons } from '@/data/modules/programming-dev';
import { programmingDevModule } from '@/data/modules/programming-dev-module';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  programmingDevModule.title,
  programmingDevModule.description,
  ['lập trình', 'phát triển', 'ai', 'copilot', 'K2AI'],
  programmingDevModule.id,
);

export default function ProgrammingDevPage() {
  return <ModulePageTemplate moduleData={programmingDevModule} lessons={programmingDevLessons} />;
}
