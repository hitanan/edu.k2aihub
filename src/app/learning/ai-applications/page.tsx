import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { AIApplicationLessons } from '@/data/ai-applications';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

export const metadata: Metadata = createModuleMetadata(
  'AI Applications - Ứng Dụng AI',
  'Ứng dụng AI trong thực tế. Machine learning, computer vision và natural language processing',
  ["ai applications","machine learning","computer vision","natural language processing","ai development"],
  'ai-applications'
);

export default function AIApplicationsMainPage() {
  const moduleData = {
    id: 'ai-applications',
    title: 'AI Applications',
    subtitle: 'Ứng dụng AI thực tế cho cuộc sống',
    description:
      'Khám phá cách áp dụng AI vào các tình huống thực tế: chuẩn bị du học với AI tutoring, tự động hóa business processes, content creation monetization, healthcare optimization, và financial planning thông minh.',
    level: 'Trung bình',
    duration: '15-18 giờ',
    category: 'Professional Skills',
    features: [
      'Study abroad preparation với AI essay writing và IELTS coaching',
      'Business automation workflows để reduce operational costs',
      'Content creation và monetization strategies across platforms',
      'Healthcare & wellness optimization với AI monitoring systems',
      'Financial planning và investment automation với AI insights'
    ],
    icon: '🤖',
    color: 'from-purple-600 to-blue-600',
    objectives: [
      'Apply AI tools để solve real-world challenges effectively',
      'Automate repetitive tasks và improve productivity',
      'Create sustainable income streams với AI-assisted content',
      'Optimize personal health và wellness với AI monitoring',
      'Build wealth và manage finances với AI-driven strategies'
    ],
    prerequisites: [
      'Basic familiarity với AI tools như ChatGPT, Claude',
      'Understanding of personal goals và challenges',
      'Access to internet và relevant AI platforms',
      'Willingness để experiment và iterate solutions'
    ],
    careerOutcomes: [
      'AI Solutions Consultant',
      'Digital Transformation Specialist',
      'AI-Enhanced Content Creator',
      'Personal AI Assistant Developer',
      'AI Product Manager'
    ],
    industryApplications: [
      'Education consulting với AI-powered student guidance',
      'Small business automation để improve efficiency',
      'Content creator economy với AI production workflows',
      'Healthcare technology focusing on personal wellness',
      'Fintech applications cho individual financial management'
    ],
    marketDemand: {
      averageSalary: '20-40 triệu VNĐ',
      jobGrowth: '+50%',
      hireDemand: 'Rất cao'
    },
    relatedModules: [
      K2Module.DigitalMarketing,
      K2Module.FinancialLiteracy,
      K2Module.MentalHealthTech,
      K2Module.AI
    ],
    heroImageUrl: '/images/ai-applications-hero.jpg'
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={AIApplicationLessons}
    />
  );
}
