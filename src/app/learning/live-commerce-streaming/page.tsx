import type { Metadata } from 'next';
import ModulePageTemplate, { type ModuleData } from '@/components/learning/ModulePageTemplate';
import { liveCommerceStreamingLessons } from '@/data/live-commerce-streaming';
import { K2Module } from '@/data/moduleNavigation';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Live Commerce & Streaming - Bán Hàng Livestream'),
  description: createDescription(
    'Master live commerce & streaming strategies. Build successful livestream business trên TikTok, Facebook và các platforms khác.',
  ),
  keywords: [
    'live commerce',
    'livestream selling',
    'social commerce',
    'tiktok shop',
    'facebook live',
    'streaming business',
    'vietnamese livestream',
    'online selling',
    'k2aihub',
  ],
  authors: [{ name: 'K2AiHub Team' }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: 'Live Commerce & Streaming Mastery',
    description: 'Complete guide to successful livestream selling business',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function LiveCommerceStreamingPage() {
  const moduleData: ModuleData = {
    id: 'live-commerce-streaming',
    title: 'Live Commerce & Streaming',
    subtitle: 'Bán hàng livestream & xây dựng empire thương mại điện tử',
    description:
      'Master art of live selling trên social platforms. Build engaging streaming business với advanced sales techniques và audience engagement strategies.',
    level: 'Trung bình',
    duration: '18-25 giờ',
    category: 'E-commerce & Social Selling',
    primaryColor: 'orange',
    gradientColors: 'from-slate-900 via-orange-900 to-red-900',
    basePath: '/learning/live-commerce-streaming',
    heroImageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1200&h=600&fit=crop',
    features: [
      'Live Streaming Setup & Equipment',
      'Sales Funnel & Conversion Tactics',
      'Audience Engagement & Community Building',
      'Multi-Platform Streaming Strategies',
      'Product Presentation & Demos',
      'Vietnamese Market Live Commerce Trends',
      'Analytics & Performance Optimization',
      'Brand Partnerships & Collaborations',
    ],
    icon: '🎥',
    color: 'from-orange-600 to-red-600',
    statsConfig: {
      lessons: `${liveCommerceStreamingLessons.length}+ bài`,
      duration: '18-25 giờ',
      level: 'Trung bình',
      projects: '10+ livestream campaigns',
    },
    marketData: {
      marketSize: '$60 Billion',
      marketNote: 'Global live commerce market by 2027',
      jobGrowth: '156% Growth',
      jobNote: 'Live commerce adoption in Southeast Asia',
      reduction: '30% Higher',
      reductionNote: 'Conversion rates vs traditional e-commerce',
      startups: '67% Consumers',
      startupsNote: 'Made purchases via live streaming',
    },
    objectives: [
      'Setup professional livestream selling environment',
      'Master sales techniques cho live audience engagement',
      'Build loyal community của repeat customers',
      'Optimize conversion rates across multiple platforms',
      'Understand Vietnamese live commerce trends',
      'Scale livestream business sustainably',
    ],
    prerequisites: [
      'Basic e-commerce knowledge',
      'Comfort với public speaking',
      'Social media familiarity',
      'Interest trong sales và marketing',
    ],
    careerPaths: [
      'Live Commerce Host (20-80 triệu VNĐ/năm)',
      'Social Commerce Manager (30-65 triệu VNĐ)',
      'Livestream Producer (25-55 triệu VNĐ)',
      'E-commerce Growth Specialist (35-70 triệu VNĐ)',
      'Social Selling Consultant (40-85 triệu VNĐ)',
      'Live Shopping Platform Manager (45-90 triệu VNĐ)',
      'Digital Commerce Strategist (40-75 triệu VNĐ)',
      'Social Media Sales Trainer (35-70 triệu VNĐ)',
    ],
    industryApplications: [
      'Fashion và beauty livestream selling',
      'Electronics và gadget demonstrations',
      'Food và beverage tastings',
      'Home goods và lifestyle products',
      'Health supplements và wellness',
      'Automotive product showcases',
      'Educational course selling',
      'Handicrafts và artisan products',
      'Technology product launches',
      'Seasonal và event-based selling',
    ],
    technicalHighlights: [
      {
        title: 'Streaming Setup',
        icon: '🎬',
        items: ['Camera & Lighting', 'Audio Equipment', 'Streaming Software', 'Set Design'],
      },
      {
        title: 'Sales Techniques',
        icon: '💼',
        items: ['Persuasive Presentation', 'Urgency Creation', 'Objection Handling', 'Closing Strategies'],
      },
      {
        title: 'Platform Mastery',
        icon: '📱',
        items: ['TikTok Shop', 'Facebook Live', 'Instagram Shopping', 'YouTube Live'],
      },
      {
        title: 'Engagement Tactics',
        icon: '🎯',
        items: ['Interactive Features', 'Gamification', 'Community Building', 'Loyalty Programs'],
      },
      {
        title: 'Analytics & Growth',
        icon: '📈',
        items: ['Performance Metrics', 'Conversion Tracking', 'Audience Insights', 'Growth Hacking'],
      },
      {
        title: 'Vietnamese Market',
        icon: '🇻🇳',
        items: ['Local Trends', 'Cultural Preferences', 'Peak Hours', 'Popular Products'],
      },
    ],
    relatedModules: [K2Module.ContentCreator, K2Module.DigitalMarketing, K2Module.MicroInfluencerEconomy],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={liveCommerceStreamingLessons} />;
}
