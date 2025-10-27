import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import EventPlannerPro from '@/components/practice/EventPlannerPro';

export const metadata: Metadata = createGameMetadata('event-planner-pro');

export default function EventPlannerProPage() {
  return <EventPlannerPro />;
}
