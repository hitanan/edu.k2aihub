import type { Metadata } from 'next';
import ModulePageTemplate, {
  type ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { type BaseLessonData } from '@/components/learning/LessonPageTemplate';
import {
  digitalMarketingLessons,
  type DigitalMarketingLesson,
} from '@/data/digital-marketing';
import { K2Module } from '@/data/moduleNavigation';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Digital Marketing & Creator Economy - Học Marketing Số'),
  description: createDescription(
    'Khóa học Digital Marketing toàn diện từ cơ bản đến nâng cao, bao gồm Creator Economy, Social Media Marketing, Content Marketing và Analytics',
  ),
  keywords: [
    'digital marketing',
    'creator economy',
    'social media marketing',
    'content marketing',
    'seo',
    'google ads',
    'k2aihub',
  ],
  authors: [{ name: 'K2AiHub Team' }],
  openGraph: {
    title: 'Digital Marketing & Creator Economy',
    description:
      'Trở thành chuyên gia Digital Marketing và Creator với khóa học thực tế từ K2AiHub',
    type: 'website',
  },
};

// Convert DigitalMarketingLesson to BaseLessonData interface
function convertToLesson(
  digitalMarketingLesson: DigitalMarketingLesson,
): BaseLessonData {
  return {
    id: digitalMarketingLesson.id,
    title: digitalMarketingLesson.title,
    description: digitalMarketingLesson.description,
    duration: digitalMarketingLesson.duration,
    difficulty: digitalMarketingLesson.difficulty,
    category: 'Digital Marketing',
    imageUrl: digitalMarketingLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: digitalMarketingLesson.videoUrl,
    objectives: digitalMarketingLesson.objectives,
    prerequisites: digitalMarketingLesson.prerequisites || [
      'Basic internet knowledge',
      'Social media familiarity',
    ],
    exercises:
      digitalMarketingLesson.exercises?.map((ex) => ({
        title: ex.title,
        description: ex.description,
        difficulty: ex.difficulty,
        materials: ex.materials || [],
        procedure: ex.hints || [ex.description],
        expectedResults: ex.expectedResults || 'Campaign setup successfully',
        solution: ex.solution || 'Follow the marketing best practices',
      })) || [],
    resources: digitalMarketingLesson.resources || [],
    tools: digitalMarketingLesson.tools || [
      'Facebook Ads',
      'Google Analytics',
      'Canva',
      'Hootsuite',
    ],
    realWorldApplications: digitalMarketingLesson.realWorldApplications || [],
    caseStudies:
      digitalMarketingLesson.caseStudies?.map((cs) => ({
        title: cs.title,
        organization: cs.organization,
        problem: cs.problem,
        solution: cs.solution,
        impact: cs.impact,
        innovations: cs.innovations || [],
      })) || [],
  };
}

export default function DigitalMarketingPage() {
  // Convert lessons to base interface
  const convertedLessons = digitalMarketingLessons.map(convertToLesson);

  const moduleData: ModuleData = {
    id: 'digital-marketing',
    title: 'Digital Marketing & Creator Economy',
    subtitle: 'Marketing số & kiếm tiền từ sáng tạo',
    description:
      'Khám phá thế giới Marketing số và Creator Economy. Từ Social Media Marketing đến Content Creation, học cách xây dựng thương hiệu cá nhân và kiếm tiền từ sáng tạo của bạn.',
    level: 'Cơ bản đến Nâng cao',
    duration: '12-15 giờ',
    category: 'Business & Marketing',
    primaryColor: 'blue',
    gradientColors: 'from-slate-900 via-blue-900 to-purple-900',
    basePath: '/learning/digital-marketing',
    heroImageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    features: [
      'Chiến lược Digital Marketing toàn diện',
      'Social Media Marketing chuyên nghiệp',
      'Content Creation & Personal Branding',
      'Analytics & ROI Optimization',
      'Creator Economy & Monetization',
      'Crisis Management & Reputation',
      'Influencer Partnership Strategies',
      'E-commerce Marketing Integration',
    ],
    icon: '📱',
    color: 'from-blue-600 to-purple-600',
    statsConfig: {
      lessons: `${digitalMarketingLessons.length}+ bài`,
      duration: '12-15 giờ',
      level: 'Cơ bản đến Nâng cao',
      projects: '10+ chiến dịch thực tế',
    },
    marketData: {
      marketSize: '$460 Billion',
      marketNote: 'Global digital marketing market by 2025',
      jobGrowth: '35% Growth',
      jobNote: 'Digital marketing jobs by 2030',
      reduction: '70% Cost',
      reductionNote: 'Reduction vs traditional marketing',
      startups: '8000+ Agencies',
      startupsNote: 'Digital marketing agencies worldwide',
    },
    objectives: [
      'Xây dựng và triển khai chiến lược Digital Marketing hiệu quả',
      'Tạo nội dung viral và engaging trên các Social Media platforms',
      'Phân tích dữ liệu để tối ưu hóa chiến dịch và tăng ROI',
      'Xây dựng thương hiệu cá nhân và kiếm tiền từ Creator Economy',
      'Quản lý khủng hoảng truyền thông và bảo vệ danh tiếng',
      'Phát triển kỹ năng influencer marketing và partnership',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về internet và social media',
      'Kỹ năng sử dụng máy tính và smartphone',
      'Tư duy sáng tạo và khả năng giao tiếp',
      'Quan tâm đến xu hướng và thị trường',
    ],
    careerPaths: [
      'Digital Marketing Manager (15-30 triệu VNĐ)',
      'Social Media Manager (10-25 triệu VNĐ)',
      'Content Creator/Influencer (5-50+ triệu VNĐ)',
      'E-commerce Marketing Specialist (12-28 triệu VNĐ)',
      'SEO/SEM Specialist (10-22 triệu VNĐ)',
      'Brand Manager (18-35 triệu VNĐ)',
      'Marketing Consultant (20-40+ triệu VNĐ)',
      'Digital Agency Owner (50-200+ triệu VNĐ)',
    ],
    industryApplications: [
      'E-commerce và bán lẻ trực tuyến',
      'Công ty công nghệ và startup',
      'Ngành giải trí và truyền thông',
      'Dịch vụ tài chính và fintech',
      'Du lịch và khách sạn',
      'Giáo dục trực tuyến',
      'Thương mại điện tử B2B',
      'Dịch vụ chăm sóc sức khỏe',
      'Bất động sản và xây dựng',
      'Thời trang và lifestyle',
    ],
    technicalHighlights: [
      {
        title: 'Social Media Marketing',
        icon: '📱',
        items: [
          'Facebook & Instagram Ads',
          'TikTok & YouTube Strategy',
          'LinkedIn B2B Marketing',
          'Twitter Engagement',
        ],
      },
      {
        title: 'Content Creation',
        icon: '🎨',
        items: [
          'Visual Design',
          'Video Production',
          'Copywriting',
          'Brand Storytelling',
        ],
      },
      {
        title: 'Analytics & Optimization',
        icon: '📊',
        items: [
          'Google Analytics',
          'A/B Testing',
          'ROI Measurement',
          'Performance Tracking',
        ],
      },
      {
        title: 'Creator Economy',
        icon: '💰',
        items: [
          'Monetization Strategies',
          'Brand Partnerships',
          'Affiliate Marketing',
          'Product Launches',
        ],
      },
      {
        title: 'E-commerce Integration',
        icon: '🛒',
        items: [
          'Online Store Setup',
          'Payment Processing',
          'Customer Journey',
          'Conversion Optimization',
        ],
      },
      {
        title: 'Automation Tools',
        icon: '🤖',
        items: [
          'Email Marketing',
          'CRM Systems',
          'Chatbots',
          'Marketing Funnels',
        ],
      },
    ],
    relatedModules: [
      K2Module.AIArtCreativeTech,
      K2Module.FinancialLiteracy,
      K2Module.GameDevelopment,
    ],
  };

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />
  );
}
