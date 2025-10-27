import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import SoftSkillsScenario from '@/components/practice/SoftSkillsScenario';

export const metadata: Metadata = createGameMetadata('soft-skills-scenario');

export default function SoftSkillsScenarioPage() {
  return <SoftSkillsScenario />;
}
