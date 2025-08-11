import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { tiktokSocialCommerceLessons } from '@/data/tiktok-social-commerce';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('TikTok Shop & Social Commerce'),
    description: createDescription('Học cách setup và optimize TikTok Shop, livestream selling strategies và social commerce cho maximized revenue.'),
    keywords: ['tiktok shop', 'social commerce', 'livestream selling', 'e-commerce optimization', 'K2AI', 'học tập thông minh'],
    openGraph: {
      title: 'TikTok Shop & Social Commerce | K2AiHub',
      description: 'Master live selling và e-commerce optimization trên TikTok platform',
      type: 'website',
    },
  };
}

export default function TikTokSocialCommercePage() {
  const moduleData = {
    id: 'tiktok-social-commerce',
    title: 'TikTok Shop & Social Commerce',
    subtitle: 'Master live selling và e-commerce',
    description: 'Học cách setup và optimize TikTok Shop, livestream selling strategies và social commerce cho maximized revenue. Course này sẽ hướng dẫn complete setup process, advanced selling techniques và cross-platform commerce strategies.',
    level: 'Trung bình',
    duration: '8-9 giờ',
    category: 'E-commerce & Social Selling',
    features: [
      'TikTok Shop Setup từ A-Z với optimization techniques',
      'Livestream Selling mastery với interactive technology',
      'Cross-Platform Commerce strategy cho maximum reach',
      'Social Commerce Analytics để track performance và ROI'
    ],
    icon: '🛒',
    color: 'from-pink-600 to-red-600',
    objectives: [
      'Setup và optimize TikTok Shop cho maximum visibility và sales',
      'Master livestream selling techniques với audience engagement',
      'Develop cross-platform commerce strategy cho scalable growth',
      'Implement analytics systems để track performance và optimize revenue'
    ],
    prerequisites: [
      'Business license và tax registration (required for TikTok Shop)',
      'Products ready for online selling với quality images',
      'Basic understanding của e-commerce principles',
      'TikTok Creator Fund eligibility và platform familiarity'
    ],
    careerOutcomes: [
      'TikTok Shop Expert với proven selling strategies',
      'Live Commerce Specialist với audience building skills',
      'Social Commerce Manager cho brands và businesses',
      'E-commerce Consultant focused trên social platforms'
    ],
    industryApplications: [
      'Fashion và beauty brands với visual appeal',
      'Food và beverage businesses với lifestyle content',
      'Tech gadgets và consumer electronics',
      'Home decor và lifestyle products'
    ],
    marketDemand: {
      averageSalary: '25-55 triệu VNĐ',
      jobGrowth: '+45%',
      hireDemand: 'Rất Cao'
    },
    relatedModules: [
      K2Module.LiveCommerceStreaming,
      K2Module.ContentCreator,
      K2Module.DigitalMarketing,
      K2Module.ShortVideoMastery
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={tiktokSocialCommerceLessons}
    />
  );
}
