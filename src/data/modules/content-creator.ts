import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface ContentCreatorLessonData extends BaseLessonData {
  platforms?: string[];
  monetizationMethods?: string[];
  toolsRequired?: string[];
  averageIncome?: string;
  timeToMaster?: string;
  imageUrl?: string;
}

export const contentCreatorLessons: ContentCreatorLessonData[] = [
  {
    id: 'social-media-personal-branding',
    title: 'Social Media Strategy & Personal Branding',
    description:
      'Xây dựng thương hiệu cá nhân mạnh mẽ trên các nền tảng social media, phát triển voice và aesthetic riêng biệt để thu hút audience.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=Df11SkLnekM',
    imageUrl: 'https://i.ytimg.com/vi/mBy7PU1jTn4/hqdefault.jpg',
    objectives: [
      'Định hình brand identity và personal voice độc đáo',
      'Tạo content strategy hiệu quả cho từng platform',
      'Phát triển visual aesthetic nhất quán',
      'Xây dựng engagement strategy và community building',
      'Hiểu rõ algorithm của các platform chính',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về social media platforms',
      'Khả năng sử dụng smartphone để chụp ảnh/quay video',
      'Tư duy sáng tạo và khả năng storytelling',
      'Kiên nhẫn và consistency trong content creation',
    ],
    realWorldApplications: [
      'Freelance social media manager cho small businesses (15-25 triệu VNĐ/tháng)',
      'Personal brand development cho entrepreneurs và professionals',
      'Content creation cho e-commerce businesses và startups',
      'Digital marketing consultant với social media expertise',
      'Influencer marketing coordinator cho agencies',
    ],
  },
  {
    id: 'video-production-editing-mastery',
    title: 'Video Production & Editing Mastery',
    description:
      'Master video production từ concept đến final edit, sử dụng tools professional và techniques để tạo high-quality content.',
    duration: '240 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=y1KcHBZd3nw',
    imageUrl: 'https://i.ytimg.com/vi/apbZc_9XgNo/hqdefault.jpg',
    objectives: [
      'Nắm vững fundamentals của video production và cinematography',
      'Master editing techniques và storytelling qua video',
      'Tạo professional-quality videos với budget equipment',
      'Hiểu rõ platform-specific video requirements và optimization',
      'Develop efficient workflow từ concept đến publishing',
    ],
    prerequisites: [
      'Smartphone hoặc camera cơ bản',
      'Computer với software editing capabilities',
      'Hiểu biết cơ bản về storytelling',
      'Kiên nhẫn với quá trình learning curve của editing',
    ],
    realWorldApplications: [
      'Video production services cho businesses (20-100 triệu VNĐ/project)',
      'YouTube channel creation và monetization',
      'Social media content creation cho brands',
      'Wedding và event videography',
      'Online course creation với video content',
      'Corporate training video development',
    ],
  },
  {
    id: 'livestreaming-community-building',
    title: 'Livestreaming & Community Building',
    description:
      'Xây dựng loyal community qua livestreaming, master engagement techniques và monetize live content effectively.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=L0-Y67XN11Q',
    imageUrl: 'https://i.ytimg.com/vi/6ftDWN2DroQ/hqdefault.jpg',
    objectives: [
      'Set up professional livestreaming environment và equipment',
      'Master live engagement techniques và audience interaction',
      'Build loyal community qua consistent live content',
      'Monetize livestreams through various revenue streams',
      'Handle technical challenges và maintain stream quality',
    ],
    prerequisites: [
      'Comfortable speaking on camera',
      'Reliable internet connection (minimum 10 Mbps upload)',
      'Basic understanding của chosen streaming platform',
      'Consistent schedule availability cho regular streaming',
    ],
    realWorldApplications: [
      'Gaming streaming cho Vietnamese gaming community',
      'Educational livestreams cho skill sharing',
      'Cooking shows với real-time interaction',
      'Fitness classes và wellness coaching',
      'Business consulting và Q&A sessions',
      'Product demonstrations cho e-commerce',
    ],
  },
  {
    id: 'monetization-strategies',
    title: 'Monetization Strategies (YouTube, TikTok, Facebook)',
    description:
      'Deep dive vào monetization opportunities across platforms, optimize revenue streams và build sustainable income from content creation.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=fzbCmOLDoa8',
    imageUrl: 'https://i.ytimg.com/vi/plCRQbAmPuY/hqdefault.jpg',
    objectives: [
      'Understand platform-specific monetization requirements và opportunities',
      'Develop multiple income streams để reduce dependency on single source',
      'Optimize content strategy để maximize revenue potential',
      'Build long-term financial sustainability from content creation',
      'Navigate Vietnamese tax và business requirements cho content creators',
    ],
    prerequisites: [
      'Established audience on at least one platform',
      'Consistent content creation track record',
      'Basic understanding của business và finance',
      'Legal entity setup để receive payments properly',
    ],
    realWorldApplications: [
      'Full-time content creation career với sustainable income',
      'Supplementary income stream cho existing professionals',
      'Business development để transition into consulting',
      'Product-based business growth through content marketing',
      'Agency services offering based on content creation expertise',
    ],
  },
  {
    id: 'brand-partnerships-sponsorships',
    title: 'Brand Partnerships & Sponsorship Deals',
    description:
      'Negotiate win-win partnerships với brands, create authentic sponsored content, và build long-term relationships trong industry.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=iWHS05fpPwE',
    imageUrl: 'https://i.ytimg.com/vi/VzNi_LtjxsM/hqdefault.jpg',
    objectives: [
      'Identify suitable brand partnership opportunities',
      'Negotiate fair compensation và contract terms',
      'Create authentic sponsored content maintaining audience trust',
      'Build long-term relationships với brands và agencies',
      'Understand legal requirements và disclosure regulations',
    ],
    prerequisites: [
      'Established audience và engagement metrics',
      'Portfolio của high-quality content',
      'Professional communication skills',
      'Understanding của your audience demographics',
    ],
    realWorldApplications: [
      'Influencer marketing career với brand agencies',
      'Brand ambassador roles với long-term partnerships',
      'Product launch campaigns cho startups',
      'Tourism promotion cho destinations',
      'Technology product reviews và recommendations',
    ],
  },
  {
    id: 'content-calendar-consistency',
    title: 'Content Calendar & Consistency Systems',
    description:
      'Build sustainable content production systems, automate workflows, và maintain consistent posting schedule để grow audience effectively.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=bB5eKayGMvM',
    imageUrl: 'https://i.ytimg.com/vi/bB5eKayGMvM/hqdefault.jpg',
    objectives: [
      'Create systematic approach to content planning và production',
      'Develop efficient workflows để maintain consistency',
      'Balance quality với quantity trong content creation',
      'Build content systems that scale với growing audience',
      'Maintain creative inspiration while meeting production demands',
    ],
    prerequisites: [
      'Basic understanding của content creation process',
      'Familiarity với social media platforms',
      'Time management skills',
      'Access to content planning tools',
    ],
    realWorldApplications: [
      'Social media management cho businesses',
      'Content strategy consulting services',
      'Personal brand development cho professionals',
      'Scalable content production cho agencies',
      'Systematic approach cho growing audiences',
    ],
  },
  {
    id: 'analytics-growth-optimization',
    title: 'Analytics & Growth Optimization',
    description:
      'Master data-driven content strategy, analyze performance metrics, và optimize growth through systematic testing và iteration.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=RVFlSEJj3vA',
    imageUrl: 'https://i.ytimg.com/vi/RVFlSEJj3vA/hqdefault.jpg',
    objectives: [
      'Understand key performance indicators (KPIs) for content',
      'Use analytics tools to gather audience insights',
      'Implement A/B testing to optimize content elements',
      'Develop data-driven content strategy for sustainable growth',
      'Translate analytics into actionable content improvements',
    ],
    prerequisites: [
      'Consistent content production',
      'Access to platform analytics',
      'Basic understanding of data and charts',
      'Analytical mindset',
    ],
    realWorldApplications: [
      'Growth hacking consulting cho content creators',
      'Social media analytics services cho businesses',
      'Content strategy optimization roles',
      'Performance marketing với focus on content',
      'Data analyst roles trong creator economy companies',
    ],
  },
  {
    id: 'legal-business-content-creation',
    title: 'Legal & Business Aspects of Content Creation',
    description:
      'Navigate legal requirements, business registration, taxes, và intellectual property protection trong Vietnamese content creator landscape.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=20PaLUq0h-U',
    imageUrl: 'https://i.ytimg.com/vi/20PaLUq0h-U/hqdefault.jpg',
    objectives: [
      'Understand Vietnamese legal requirements cho content creators',
      'Set up proper business entity cho content creation income',
      'Navigate tax obligations và deductions',
      'Protect intellectual property và handle copyright issues',
      'Understand platform terms of service và compliance requirements',
    ],
    prerequisites: [
      'Generating income từ content creation',
      'Basic understanding của business concepts',
      'Willingness to invest trong legal và accounting setup',
      'Understanding của Vietnamese business landscape',
    ],
    realWorldApplications: [
      'Legal content creator business setup',
      'IP protection consulting cho creators',
      'Business advisory services cho digital entrepreneurs',
      'Compliance consulting cho growing creator businesses',
      'Legal education services cho creator community',
    ],
  },
];

export const contentCreatorModuleData: ModuleData = {
  id: K2Module.ContentCreator,
  title: 'Content Creator Academy',
  subtitle: 'Thành công với Social Media',
  description:
    'Học từ A-Z cách trở thành content creator thành công trên TikTok, YouTube, Instagram. Từ xây dựng personal brand đến monetization.',
  category: 'Kỹ năng thiết yếu',
  icon: '📱',
  color: 'from-pink-600 to-purple-600',
  level: 'Trung bình',
  duration: '18-22 giờ',
  features: ['Personal Branding', 'Video Production', 'Live Streaming', 'Monetization', 'Analytics'],
  prerequisites: ['Smartphone với camera tốt', 'Tư duy sáng tạo', 'Khả năng storytelling', 'Consistency mindset'],
  objectives: [
    'Trở thành một nhà sáng tạo nội dung chuyên nghiệp trên các nền tảng mạng xã hội.',
    'Xây dựng thương hiệu cá nhân vững chắc và một cộng đồng người hâm mộ trung thành.',
    'Nắm vững các kỹ năng sản xuất video, livestream và chiến lược nội dung.',
    'Tạo ra nguồn thu nhập bền vững từ việc sáng tạo nội dung.',
  ],
  careerOutcomes: [
    'Content Creator toàn thời gian',
    'Social Media Manager',
    'Influencer Marketing Specialist',
    'Digital Strategist',
  ],
  industryApplications: [
    'Truyền thông & Giải trí',
    'Marketing & Quảng cáo',
    'Thương mại điện tử',
    'Giáo dục & Đào tạo',
  ],
  marketDemand: {
    averageSalary: '20-80 triệu VNĐ/tháng',
    jobGrowth: 'Rất cao',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.DigitalMarketing, K2Module.AIContentCreator, K2Module.ShortVideoMastery],
  lessons: contentCreatorLessons,
};
