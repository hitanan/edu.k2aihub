import Redirect from '@/components/Redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting to edu.k2aihub.com/practice',
  description: 'This page has moved to https://edu.k2aihub.com/practice',
  robots: {
    index: false,
    follow: false,
  },
};

export default function GameRedirect() {
  // Client-side redirect will handle /games/[anything] → /practice/[anything]
  return <Redirect to="https://edu.k2aihub.com/practice" statusCode={301} />;
}
