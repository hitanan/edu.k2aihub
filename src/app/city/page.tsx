import Redirect from '@/components/Redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting to K2AI City',
  description: 'This page has moved to https://k2aihub.com/city',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CityRedirect() {
  return <Redirect to="https://k2aihub.com/city" statusCode={301} />;
}
