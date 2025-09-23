import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { programmingDevModule } from '@/data/modules/programming-dev';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  programmingDevModule.title,
  programmingDevModule.description,
  ['programming', 'lập trình', 'phát triển phần mềm', 'development', 'K2AI'],
  programmingDevModule.id,
);

export default function ProgrammingDevModulePage() {
  return <ModulePageTemplate moduleData={programmingDevModule} lessons={programmingDevModule.lessons || []} />;
}