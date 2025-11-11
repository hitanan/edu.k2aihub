import Redirect from '@/components/Redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting to K2AI Region',
  description: 'This page has moved to https://k2aihub.com/city/region',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RegionRedirect() {
  return <Redirect to="https://k2aihub.com/city/region" statusCode={301} />;
}
