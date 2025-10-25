import { Metadata } from 'next';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import AllLearningPageClient from './AllLearningPageClient';
import { moduleNavigation } from '@/data/moduleNavigation';
import StructuredData from '@/components/StructuredData';
import { ModuleData } from '@/types';

export async function generateMetadata(): Promise<Metadata> {
  const learningModules = moduleNavigation.filter((m) => !('coreModule' in m && m.coreModule));
  const moduleCount = learningModules.length;

  return {
    title: createTitle(`Tất Cả Khóa Học - ${moduleCount} Modules Chuyên Sâu`),
    description: createDescription(
      `Khám phá ${moduleCount} khóa học chuyên sâu từ Vietnamese business, AI technology, Electric Vehicle Tech, Blockchain & DeFi, Biomedical Engineering, Environmental Data Science, Food Technology, Aerospace Engineering, Nanotechnology đến programming và science. Tất cả miễn phí và được thiết kế cho thị trường Việt Nam.`,
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
      description: `Khám phá ${moduleCount} khóa học chuyên sâu từ Vietnamese business đến AI technology, Electric Vehicle Tech, Blockchain & DeFi, Biomedical Engineering và các công nghệ tiên tiến. Miễn phí cho thị trường Việt Nam.`,
      type: 'website',
      locale: 'vi_VN',
      siteName: 'K2AiHub - Nền tảng học tập thông minh',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tất Cả Khóa Học - K2AI Learning Platform',
      description: `Khám phá ${moduleCount} khóa học chuyên sâu từ Vietnamese business đến AI technology và các công nghệ tiên tiến.`,
    },
    alternates: {
      canonical: '/learning',
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  };
}

export default function LearningPage() {
  const learningModules = moduleNavigation.filter((m) => !('coreModule' in m && m.coreModule)) as ModuleData[];
  const moduleCount = learningModules.length;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Tất Cả Khóa Học - ${moduleCount} Modules Chuyên Sâu`,
    description: `Khám phá ${moduleCount} khóa học chuyên sâu từ Vietnamese business, AI technology, đến programming và science. Tất cả miễn phí và được thiết kế cho thị trường Việt Nam.`,
    url: 'https://edu.k2aihub.com/learning',
    inLanguage: 'vi-VN',
    publisher: {
      '@type': 'Organization',
      name: 'K2AiHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://edu.k2aihub.com/logo.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: learningModules.map((module, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Course',
          name: module.title,
          description: module.description,
          url: `https://edu.k2aihub.com/learning/${module.id}`,
          provider: {
            '@type': 'Organization',
            name: 'K2AiHub',
          },
        },
      })),
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <AllLearningPageClient />
    </>
  );
}
