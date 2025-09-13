import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { quantumComputingModule } from '@/data/modules/quantum-computing';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  quantumComputingModule.title,
  quantumComputingModule.description,
  quantumComputingModule.tags,
  quantumComputingModule.id,
);

export default function QuantumComputingPage() {
  return <ModulePageTemplate moduleData={quantumComputingModule} lessons={quantumComputingModule.lessons || []} />;
}
