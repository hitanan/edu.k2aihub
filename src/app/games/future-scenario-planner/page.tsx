import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import FutureScenarioPlanner from '@/components/games/FutureScenarioPlanner';

export const metadata: Metadata = createGameMetadata('future-scenario-planner');

export default function FutureScenarioPlannerPage() {
  return <FutureScenarioPlanner />;
}
