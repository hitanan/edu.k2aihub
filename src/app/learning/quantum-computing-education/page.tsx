import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { quantumComputingLessons } from '@/data/quantum-computing-education';
import { createModuleMetadata } from '@/utils/seo';
import type { Metadata } from 'next';
import { quantumComputingEducationModuleData } from '@/data/quantum-computing-education-module';

export const metadata: Metadata = createModuleMetadata(
  quantumComputingEducationModuleData.title,
  quantumComputingEducationModuleData.description,
  [
    'quantum computing',
    'điện toán lượng tử',
    'quantum algorithms',
    'IBM Qiskit',
    'quantum programming',
    'K2AI',
    'học tập thông minh',
  ],
  quantumComputingEducationModuleData.id,
);

export default function QuantumComputingMainPage() {
  return <ModulePageTemplate moduleData={quantumComputingEducationModuleData} lessons={quantumComputingLessons} />;
}
