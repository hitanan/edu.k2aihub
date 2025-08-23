import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { genZMarketingLessons } from '@/data/genz-marketing';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('Gen Z Marketing & Authentic Branding'),
    description: createDescription('Hiểu sâu về tâm lý Gen Z và develop authentic marketing strategies resonate với thế hệ digital natives.'),
    keywords: ['gen z marketing', 'authentic branding', 'inclusive marketing', 'brand activism', 'K2AI', 'học tập thông minh'],
    openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

      title: 'Gen Z Marketing & Authentic Branding | K2AiHub',
      description: 'Marketing cho thế hệ Gen Z với authentic branding strategies',
      type: 'website',
    },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
  };
}

export default function GenZMarketingPage() {
  const moduleData = {
    id: 'genz-marketing',
    title: 'Gen Z Marketing & Authentic Branding',
    subtitle: 'Marketing cho thế hệ Gen Z',
    description: 'Hiểu sâu về tâm lý Gen Z và develop authentic marketing strategies resonate với thế hệ digital natives. Course này sẽ teach psychology-driven approaches, inclusive messaging và purpose-driven brand activism.',
    level: 'Trung bình',
    duration: '8-9 giờ',
    category: 'Marketing Psychology & Brand Strategy',
    features: [
      'Gen Z Psychology & Behavior Analysis từ research data',
      'Inclusive & Diverse Messaging cho authentic connection',
      'Purpose-Driven Brand Activism với social impact',
      'Authenticity Framework Development cho long-term trust'
    ],
    icon: '🎯',
    color: 'from-cyan-600 to-blue-600',
    objectives: [
      'Understand Gen Z psychology và decision-making patterns',
      'Develop inclusive marketing messages với diverse representation',
      'Create purpose-driven campaigns với authentic social impact',
      'Build authenticity framework cho sustainable brand relationships'
    ],
    prerequisites: [
      'Basic marketing knowledge và digital platforms familiarity',
      'Understanding of social media platforms used by Gen Z',
      'Cultural sensitivity awareness và open mindset',
      'Commitment to ethical marketing practices'
    ],
    careerOutcomes: [
      'Gen Z Marketing Specialist với authentic brand expertise',
      'Inclusive Marketing Manager focused trên diversity',
      'Brand Purpose Strategist với social impact focus',
      'Digital Marketing Consultant cho Gen Z engagement'
    ],
    industryApplications: [
      'Fashion và beauty brands targeting young consumers',
      'Tech companies developing products for Gen Z',
      'Social impact organizations và NGOs',
      'Entertainment industry và media companies'
    ],
    marketDemand: {
      averageSalary: '22-48 triệu VNĐ',
      jobGrowth: '+32%',
      hireDemand: 'Cao'
    },
    heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    relatedModules: [
      K2Module.EthicalMarketingPurpose,
      K2Module.MicroInfluencerEconomy,
      K2Module.DigitalMarketing,
      K2Module.ContentCreator
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={genZMarketingLessons}
    />
  );
}
