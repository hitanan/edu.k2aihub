import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { quantumComputingLessons } from '@/data/quantum-computing';
import { quantumComputingModuleData } from '@/data/quantum-computing-module';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  quantumComputingModuleData.title,
  quantumComputingModuleData.description,
  ['điện toán lượng tử', 'quantum computing', 'qubit', 'qiskit', 'thuật toán lượng tử', 'K2AI'],
  quantumComputingModuleData.id,
);

export default function QuantumComputingMainPage() {
  return <ModulePageTemplate moduleData={quantumComputingModuleData} lessons={quantumComputingLessons} />;
}
