import type { Metadata } from 'next';
import ModulePageTemplate, { type ModuleData } from '@/components/learning/ModulePageTemplate';
import { microInfluencerEconomyLessons } from '@/data/micro-influencer-economy';
import { K2Module } from '@/data/moduleNavigation';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Micro-Influencer Economy - Kinh Tế Micro-Influencer'),
  description: createDescription(
    'Master micro-influencer marketing strategies. Learn to build authentic partnerships và monetize personal brand effectively.',
  ),
  keywords: [
    'micro influencer',
    'influencer marketing',
    'personal branding',
    'social media monetization',
    'creator economy',
    'vietnamese influencers',
    'brand partnerships',
    'k2aihub',
  ],
  authors: [{ name: 'K2AiHub Team' }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: 'Micro-Influencer Economy Master Course',
    description: 'Build successful micro-influencer business và brand partnerships',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function MicroInfluencerEconomyPage() {
  const moduleData: ModuleData = {
    id: 'micro-influencer-economy',
    title: 'Micro-Influencer Economy',
    subtitle: 'Kinh tế micro-influencer & xây dựng thương hiệu cá nhân',
    description:
      'Khám phá strategies để build authentic personal brand, tạo meaningful connections với audience và monetize influence effectively trong Vietnamese market.',
    level: 'Trung bình',
    duration: '20-28 giờ',
    category: 'Creator Economy & Personal Branding',
    primaryColor: 'pink',
    gradientColors: 'from-slate-900 via-pink-900 to-rose-900',
    basePath: '/learning/micro-influencer-economy',
    heroImageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop',
    features: [
      'Personal Brand Strategy & Development',
      'Content Creation & Audience Building',
      'Brand Partnership Negotiation',
      'Revenue Diversification Strategies',
      'Vietnamese Market Micro-Influencer Trends',
      'Platform-Specific Growth Tactics',
      'Analytics & Performance Measurement',
      'Community Building & Engagement',
    ],
    icon: '💫',
    color: 'from-pink-600 to-rose-600',
    statsConfig: {
      lessons: `${microInfluencerEconomyLessons.length}+ bài`,
      duration: '20-28 giờ',
      level: 'Trung bình',
      projects: '12+ branding projects',
    },
    marketData: {
      marketSize: '$16.4 Billion',
      marketNote: 'Influencer marketing industry by 2025',
      jobGrowth: '92% Marketers',
      jobNote: 'Find influencer marketing effective',
      reduction: '11x Higher',
      reductionNote: 'ROI than traditional advertising',
      startups: '89% Trust',
      startupsNote: 'Consumer trust in influencer recommendations',
    },
    objectives: [
      'Build authentic personal brand với clear value proposition',
      'Create engaging content strategies cho different platforms',
      'Negotiate favorable brand partnership deals',
      'Diversify income streams as micro-influencer',
      'Understand Vietnamese creator economy landscape',
      'Measure và optimize influence performance',
    ],
    prerequisites: [
      'Active social media presence',
      'Basic content creation skills',
      'Understanding của target audience',
      'Interest trong personal branding',
    ],
    careerPaths: [
      'Micro-Influencer (10-50 triệu VNĐ/năm)',
      'Content Creator & Brand Partner (15-80 triệu VNĐ/năm)',
      'Social Media Strategist (25-55 triệu VNĐ)',
      'Influencer Marketing Manager (30-65 triệu VNĐ)',
      'Personal Brand Consultant (35-75 triệu VNĐ)',
      'Creator Economy Analyst (28-58 triệu VNĐ)',
      'Community Manager (22-45 triệu VNĐ)',
      'Digital Marketing Specialist (25-60 triệu VNĐ)',
    ],
    industryApplications: [
      'Fashion và beauty micro-influencing',
      'Food và lifestyle content creation',
      'Tech product reviews và tutorials',
      'Health và wellness advocacy',
      'Travel và tourism promotion',
      'Education và skill-sharing',
      'Parenting và family lifestyle',
      'Finance và investment education',
      'Gaming và entertainment',
      'Local business partnerships',
    ],
    technicalHighlights: [
      {
        title: 'Brand Building',
        icon: '🎭',
        items: ['Personal Brand Strategy', 'Visual Identity', 'Content Pillars', 'Voice & Tone'],
      },
      {
        title: 'Content Strategy',
        icon: '📱',
        items: ['Platform Optimization', 'Content Calendar', 'Trending Topics', 'User-Generated Content'],
      },
      {
        title: 'Partnership Skills',
        icon: '🤝',
        items: ['Negotiation Tactics', 'Contract Review', 'Performance Metrics', 'Relationship Management'],
      },
      {
        title: 'Monetization',
        icon: '💰',
        items: ['Sponsored Content', 'Affiliate Marketing', 'Product Sales', 'Course Creation'],
      },
      {
        title: 'Analytics & Growth',
        icon: '📊',
        items: ['Engagement Metrics', 'Audience Insights', 'Growth Tracking', 'ROI Measurement'],
      },
      {
        title: 'Vietnamese Market',
        icon: '🇻🇳',
        items: ['Local Platform Trends', 'Cultural Adaptation', 'Vietnamese Brands', 'Regional Preferences'],
      },
    ],
    relatedModules: [K2Module.ContentCreator, K2Module.DigitalMarketing, K2Module.EthicalMarketingPurpose],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={microInfluencerEconomyLessons} />;
}
