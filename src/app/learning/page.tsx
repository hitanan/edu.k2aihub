import { Metadata } from 'next';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import AllLearningPageClient from './AllLearningPageClient';
import { moduleNavigation } from '@/data/moduleNavigation';

export const metadata: Metadata = {
  title: createTitle(`Tất Cả Khóa Học - ${moduleNavigation.length} Modules Chuyên Sâu`),
  description: createDescription(
    `Khám phá ${moduleNavigation.length} khóa học chuyên sâu từ Vietnamese business, AI technology, Electric Vehicle Tech, Blockchain & DeFi, Biomedical Engineering, Environmental Data Science, Food Technology, Aerospace Engineering, Nanotechnology đến programming và science. Tất cả miễn phí và được thiết kế cho thị trường Việt Nam.`,
  ),
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
    'electric vehicle tech',
    'blockchain defi',
    'biomedical engineering',
    'environmental data science',
    'food technology',
    'aerospace engineering',
    'nanotechnology',
    'K2AI',
  ]),
  openGraph: {
    title: 'Tất Cả Khóa Học - K2AI Learning Platform',
    description: `Khám phá ${moduleNavigation.length} khóa học chuyên sâu từ Vietnamese business đến AI technology, Electric Vehicle Tech, Blockchain & DeFi, Biomedical Engineering và các công nghệ tiên tiến. Miễn phí cho thị trường Việt Nam.`,
    type: 'website',
    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tất Cả Khóa Học - K2AI Learning Platform',
    description: `Khám phá ${moduleNavigation.length} khóa học chuyên sâu từ Vietnamese business đến AI technology và các công nghệ tiên tiến.`,
  },
  alternates: {
    canonical: '/learning',
  },
};

export default function LearningPage() {
  return <AllLearningPageClient />;
}
