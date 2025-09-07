import { K2Module } from '@/data/k2-modules';
import { ModuleNavigation } from '@/types';

export const contentCreatorModuleData: ModuleNavigation = {
  id: K2Module.ContentCreator,
  title: 'Content Creator Academy',
  subtitle: 'Thành công với Social Media',
  description:
    'Học từ A-Z cách trở thành content creator thành công trên TikTok, YouTube, Instagram. Từ xây dựng personal brand đến monetization.',
  category: 'trending',
  icon: '📱',
  color: 'from-pink-600 to-purple-600',
  totalDuration: '18-22 giờ',
  difficulty: 'Cơ bản đến Nâng cao',
  level: 'Trung bình',
  duration: '18-22 giờ',
  href: '/learning/content-creator',
  features: ['Personal Branding', 'Video Production', 'Live Streaming', 'Monetization', 'Analytics'],
  tags: ['content creator', 'social media', 'youtube', 'tiktok', 'monetization'],
  prerequisites: ['Smartphone với camera tốt', 'Tư duy sáng tạo', 'Khả năng storytelling', 'Consistency mindset'],
  lessons: [
    {
      id: 'social-media-personal-branding',
      title: 'Social Media Strategy & Personal Branding',
      duration: '180 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'video-production-editing-mastery',
      title: 'Video Production & Editing Mastery',
      duration: '240 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'livestreaming-community-building',
      title: 'Livestreaming & Community Building',
      duration: '200 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'monetization-strategies',
      title: 'Monetization Strategies (YouTube, TikTok, Facebook)',
      duration: '220 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'brand-partnerships-sponsorships',
      title: 'Brand Partnerships & Sponsorship Deals',
      duration: '180 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'content-calendar-consistency',
      title: 'Content Calendar & Consistency Systems',
      duration: '160 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'analytics-growth-optimization',
      title: 'Analytics & Growth Optimization',
      duration: '200 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'legal-business-content-creation',
      title: 'Legal & Business Aspects of Content Creation',
      duration: '150 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
