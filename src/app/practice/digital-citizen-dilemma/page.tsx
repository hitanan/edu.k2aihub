import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import DigitalCitizenDilemma from '@/components/practice/DigitalCitizenDilemma';

export const metadata: Metadata = createGameMetadata('digital-citizen-dilemma');

export default function DigitalCitizenDilemmaPage() {
  return <DigitalCitizenDilemma />;
}
