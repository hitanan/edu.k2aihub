import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { pythonLessons, pythonModuleData } from '@/data/modules/python';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  pythonModuleData.title,
  pythonModuleData.description,
  ['Python', 'lập trình Python', 'programming', 'K2AI'],
  pythonModuleData.id,
);

export default function PythonModulePage() {
  return <ModulePageTemplate moduleData={pythonModuleData} lessons={pythonLessons} />;
}