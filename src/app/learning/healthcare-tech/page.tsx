import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { healthcareTechModuleData, healthcareTechLessons } from '@/data/modules/healthcare-tech';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  healthcareTechModuleData.title,
  healthcareTechModuleData.description,
  [
    'công nghệ y tế',
    'sức khỏe số',
    'telemedicine',
    'health data analytics',
    'IoT y tế',
    'khởi nghiệp healthtech',
    'sức khỏe tâm thần số',
    'thiết bị y tế thông minh',
    'chăm sóc từ xa',
    'K2AI',
  ],
  healthcareTechModuleData.id,
);

export default function HealthcareTechMainPage() {
  return <ModulePageTemplate moduleData={healthcareTechModuleData} lessons={healthcareTechLessons} />;
}
