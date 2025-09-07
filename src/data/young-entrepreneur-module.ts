import { ModuleNavigation } from '@/types';

export const youngEntrepreneurModuleData: ModuleNavigation = {
  id: 'young-entrepreneur',
  title: 'Young Entrepreneur & Startup Culture',
  subtitle: 'Khởi nghiệp cho người trẻ',
  description:
    'Học cách xây dựng startup từ ý tưởng đến MVP, gọi vốn và scale. Chương trình được thiết kế cho các bạn trẻ Việt Nam đam mê khởi nghiệp.',
  category: 'trending',
  icon: '🚀',
  color: 'from-amber-600 to-yellow-600',
  totalDuration: '25-30 giờ',
  difficulty: 'Trung bình đến Nâng cao',
  level: 'Trung bình',
  duration: '25-30 giờ',
  href: '/learning/young-entrepreneur',
  features: [
    'Idea Validation & MVP Development',
    'Business Model Canvas',
    'Pitching & Fundraising',
    'Growth Hacking',
    'Legal for Startups',
  ],
  tags: ['entrepreneurship', 'startup', 'business', 'innovation', 'fundraising'],
  prerequisites: [
    'Tư duy kinh doanh',
    'Kỹ năng giải quyết vấn đề',
    'Sự kiên trì và khả năng thích ứng',
    'Kỹ năng giao tiếp tốt',
  ],
  lessons: [
    {
      id: 'idea-validation-mvp',
      title: 'Idea Validation & Minimum Viable Product (MVP)',
      duration: '240 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'business-model-vietnam',
      title: 'Business Models for the Vietnamese Market',
      duration: '220 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'pitching-fundraising-basics',
      title: 'Pitching & Fundraising Basics',
      duration: '260 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'growth-hacking-digital-marketing',
      title: 'Growth Hacking & Digital Marketing for Startups',
      duration: '280 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'legal-finance-for-startups',
      title: 'Legal & Finance for Vietnamese Startups',
      duration: '200 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'building-startup-team',
      title: 'Building & Managing a Startup Team',
      duration: '180 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'scaling-international-expansion',
      title: 'Scaling Strategies & International Expansion',
      duration: '220 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
