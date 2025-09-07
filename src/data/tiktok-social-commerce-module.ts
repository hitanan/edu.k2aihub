import { K2Module } from '@/data/moduleNavigation';
import { ModuleData } from '@/types';

export const tiktokSocialCommerceModuleData: ModuleData = {
  id: 'tiktok-social-commerce',
  title: 'TikTok Shop & Social Commerce',
  subtitle: 'Master live selling và e-commerce',
  description:
    'Học cách setup và optimize TikTok Shop, livestream selling strategies và social commerce cho maximized revenue. Course này sẽ hướng dẫn complete setup process, advanced selling techniques và cross-platform commerce strategies.',
  level: 'Trung bình',
  duration: '8-9 giờ',
  category: 'E-commerce & Social Selling',
  features: [
    'TikTok Shop Setup từ A-Z với optimization techniques',
    'Livestream Selling mastery với interactive technology',
    'Cross-Platform Commerce strategy cho maximum reach',
    'Social Commerce Analytics để track performance và ROI',
  ],
  icon: '🛒',
  color: 'from-pink-600 to-red-600',
  objectives: [
    'Setup và optimize TikTok Shop cho maximum visibility và sales',
    'Master livestream selling techniques với audience engagement',
    'Develop cross-platform commerce strategy cho scalable growth',
    'Implement analytics systems để track performance và optimize revenue',
  ],
  prerequisites: [
    'Business license và tax registration (required for TikTok Shop)',
    'Products ready for online selling với quality images',
    'Basic understanding của e-commerce principles',
    'TikTok Creator Fund eligibility và platform familiarity',
  ],
  careerOutcomes: [
    'TikTok Shop Expert với proven selling strategies',
    'Live Commerce Specialist với audience building skills',
    'Social Commerce Manager cho brands và businesses',
    'E-commerce Consultant focused trên social platforms',
  ],
  industryApplications: [
    'Fashion và beauty brands với visual appeal',
    'Food và beverage businesses với lifestyle content',
    'Tech gadgets và consumer electronics',
    'Home decor và lifestyle products',
  ],
  marketDemand: {
    averageSalary: '25-55 triệu VNĐ',
    jobGrowth: '+45%',
    hireDemand: 'Rất Cao',
  },
  heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
  relatedModules: [
    K2Module.LiveCommerceStreaming,
    K2Module.ContentCreator,
    K2Module.DigitalMarketing,
    K2Module.ShortVideoMastery,
  ],
};
