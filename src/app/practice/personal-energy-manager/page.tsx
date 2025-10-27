import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import PersonalEnergyManager from '@/components/practice/PersonalEnergyManager';

export const metadata: Metadata = createGameMetadata('personal-energy-manager');

export default function PersonalEnergyManagerPage() {
  return <PersonalEnergyManager />;
}
