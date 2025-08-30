import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { shortVideoMasteryLessons } from '@/data/short-video-mastery';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Short-form Video Mastery',
  'Master psychological triggers, advanced editing techniques và platform optimization cho viral short-form videos.',
  ['short form video', 'viral content', 'video editing', 'algorithm optimization', 'K2AI', 'học tập thông minh'],
  'short-video-mastery'
);

export default function ShortVideoMasteryPage() {
  const moduleData = {
    id: 'short-video-mastery',
    title: 'Short-form Video Mastery',
    subtitle: 'Viral video creation techniques',
    description: 'Master psychological triggers, advanced editing techniques và platform optimization cho viral short-form videos. Course này sẽ teach science-based approach to viral content creation từ psychology đến technical execution.',
    level: 'Trung bình',
    duration: '8-9 giờ',
    category: 'Video Production & Viral Marketing',
    features: [
      'Viral Psychology & Hook Creation để capture attention ngay lập tức',
      'Advanced Editing Techniques với professional tools và workflows',
      'Platform Algorithm Optimization cho maximum reach và engagement',
      'Trend Analysis & Adaptation để stay ahead of viral trends'
    ],
    icon: '📱',
    color: 'from-orange-600 to-yellow-600',
    objectives: [
      'Understand viral psychology và create compelling hooks trong first 3 seconds',
      'Master advanced editing techniques cho professional video production',
      'Optimize content cho each platform algorithm (TikTok, YouTube, Instagram)',
      'Develop trend analysis skills để predict và leverage viral opportunities'
    ],
    prerequisites: [
      'Basic video editing skills với smartphone hoặc editing software',
      'Understanding of social media platforms và their content formats',
      'Creative mindset và storytelling interest',
      'Willingness to experiment và iterate content strategies'
    ],
    careerOutcomes: [
      'Viral Video Specialist với proven engagement rates',
      'Social Media Video Editor với platform expertise',
      'Content Creator Coach focused trên video optimization',
      'Video Marketing Strategist cho brands và businesses'
    ],
    industryApplications: [
      'Social media marketing agencies specializing in video content',
      'Entertainment companies creating viral marketing campaigns',
      'E-learning platforms developing engaging educational content',
      'Personal branding consultants teaching video creation skills'
    ],
    marketDemand: {
      averageSalary: '18-42 triệu VNĐ',
      jobGrowth: '+40%',
      hireDemand: 'Rất Cao'
    },
    heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    relatedModules: [
      K2Module.AIContentCreator,
      K2Module.ContentCreator,
      K2Module.TikTokSocialCommerce,
      K2Module.LiveCommerceStreaming
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={shortVideoMasteryLessons}
    />
  );
}
