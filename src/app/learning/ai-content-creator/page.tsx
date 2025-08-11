import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { aiContentCreatorLessons } from '@/data/ai-content-creator';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('AI Content Creator Academy'),
    description: createDescription('Học cách sử dụng AI để tạo content viral trên TikTok, YouTube, Instagram với tools như ChatGPT, RunwayML, Midjourney.'),
    keywords: ['ai content creation', 'social media automation', 'viral marketing', 'content strategy', 'K2AI', 'học tập thông minh'],
    openGraph: {
      title: 'AI Content Creator Academy | K2AiHub',
      description: 'Master AI tools cho content creation viral trên social media platforms',
      type: 'website',
    },
  };
}

export default function AIContentCreatorPage() {
  const moduleData = {
    id: 'ai-content-creator',
    title: 'AI Content Creator Academy',
    subtitle: 'Master AI tools cho content creation',
    description: 'Học cách sử dụng AI để tạo content viral trên TikTok, YouTube, Instagram với tools như ChatGPT, RunwayML, Midjourney. Course này sẽ giúp bạn master AI-powered content creation từ video generation, social media automation đến personal branding với AI tools.',
    level: 'Trung bình',
    duration: '8-10 giờ',
    category: 'Social Media & Creative Technology',
    features: [
      'AI Video Creation với RunwayML và Midjourney',
      'Automated Social Media scheduling và content distribution',
      'Personal Branding optimization với AI Tools',
      'Content Workflow tối ưu hóa cho productivity'
    ],
    icon: '🎬',
    color: 'from-purple-600 to-pink-600',
    objectives: [
      'Master AI video creation tools như RunwayML cho viral content',
      'Develop automated social media systems cho consistent posting',
      'Build personal brand authority với AI-powered content strategy',
      'Optimize content creation workflow cho maximum efficiency'
    ],
    prerequisites: [
      'Hiểu biết cơ bản về social media platforms (TikTok, YouTube, Instagram)',
      'Kỹ năng sử dụng máy tính và smartphone',
      'Tư duy sáng tạo và storytelling mindset',
      'Willingness to experiment với new AI tools'
    ],
    careerOutcomes: [
      'Content Creator chuyên nghiệp với AI expertise',
      'Social Media Manager với automation skills',
      'Digital Marketing Specialist focused trên AI tools',
      'Personal Brand Coach và Consultant'
    ],
    industryApplications: [
      'Entertainment industry và media production',
      'Digital marketing agencies và social media firms',
      'E-commerce brands và online businesses',
      'Educational content và online learning platforms'
    ],
    marketDemand: {
      averageSalary: '20-45 triệu VNĐ',
      jobGrowth: '+35%',
      hireDemand: 'Rất Cao'
    },
    relatedModules: [
      K2Module.DigitalMarketing,
      K2Module.TikTokSocialCommerce,
      K2Module.ShortVideoMastery,
      K2Module.ContentCreator
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={aiContentCreatorLessons}
    />
  );
}
