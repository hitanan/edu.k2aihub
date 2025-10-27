import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import UXUIDesignChallenge from '@/components/practice/UXUIDesignChallenge';

export const metadata: Metadata = createGameMetadata('ux-ui-design-challenge');

export default function UXUIDesignChallengePage() {
  return <UXUIDesignChallenge />;
}
