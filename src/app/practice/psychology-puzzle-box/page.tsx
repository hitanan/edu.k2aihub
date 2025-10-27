import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import PsychologyPuzzleBox from '@/components/practice/PsychologyPuzzleBox';

export const metadata: Metadata = createGameMetadata('psychology-puzzle-box');

export default function PsychologyPuzzleBoxPage() {
  return <PsychologyPuzzleBox />;
}
