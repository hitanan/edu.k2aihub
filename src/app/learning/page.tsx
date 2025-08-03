import { Metadata } from 'next';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import AllLearningPageClient from './AllLearningPageClient';

export const metadata: Metadata = {
  title: createTitle('Tất Cả Khóa Học - 16 Modules Chuyên Sâu'),
  description: createDescription('Khám phá 16 khóa học chuyên sâu từ Vietnamese business, AI technology đến programming và science. Tất cả miễn phí và được thiết kế cho thị trường Việt Nam.'),
  keywords: createKeywords([
    'khóa học',
    'học online',
    'vietnamese business',
    'ai technology',
    'programming',
    'digital marketing',
    'financial literacy',
    'cybersecurity',
    'biotechnology',
    'game development',
    'python',
    'arduino',
    'robotics',
    'stem education',
    'green technology',
    'ai art',
    'vietnamese culture',
    'healthcare technology',
    'K2AI'
  ]),
  openGraph: {
    title: 'Tất Cả Khóa Học - K2AI Learning Platform',
    description: 'Khám phá 16 khóa học chuyên sâu từ Vietnamese business đến AI technology. Miễn phí cho thị trường Việt Nam.',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tất Cả Khóa Học - K2AI Learning Platform',
    description: 'Khám phá 16 khóa học chuyên sâu từ Vietnamese business đến AI technology.',
  },
  alternates: {
    canonical: '/learning',
  },
};

export default function LearningPage() {
  return <AllLearningPageClient />;
}
