import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { quantumComputingEducationModule, quantumComputingLessons } from '@/data/modules/quantum-computing-education';
import { createModuleMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = createModuleMetadata(
  quantumComputingEducationModule.title,
  quantumComputingEducationModule.description,
  [
    'quantum computing',
    'điện toán lượng tử',
    'quantum algorithms',
    'IBM Qiskit',
    'quantum programming',
    'K2AI',
    'học tập thông minh',
  ],
  quantumComputingEducationModule.id,
);

export default function QuantumComputingMainPage() {
  return <ModulePageTemplate moduleData={quantumComputingEducationModule} lessons={quantumComputingLessons} />;
}
