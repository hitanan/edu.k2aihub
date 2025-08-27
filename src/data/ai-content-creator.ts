import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface AIContentCreatorLessonType extends BaseLessonData {
  aiTools: string[];
  platforms: string[];
  techniques: string[];
  costRange: string;
  difficulty: string;
  estimatedEarnings: string;
}

export const aiContentCreatorLessons: AIContentCreatorLessonType[] = [
  {
    id: 'ai-video-content-creation',
    title: 'AI Video Content Creation Mastery',
    description:
      'Học cách sử dụng AI để tạo video content chất lượng cao cho TikTok, YouTube và Instagram. Từ script writing đến video editing với AI tools.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=JJG_X6DmhiI',
    imageUrl: '/images/lessons/ai-video-creation.jpg',
    objectives: [
      'Sử dụng AI để viết script video hấp dẫn',
      'Master các AI video editing tools như RunwayML, Synthesia',
      'Tạo thumbnails và graphics với Midjourney và Canva AI',
      'Optimize content cho từng platform riêng biệt',
      'Phân tích performance và cải thiện content',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về social media platforms',
      'Kỹ năng sử dụng máy tính và smartphone',
      'Tư duy sáng tạo và storytelling',
    ],
    aiTools: [
      'ChatGPT cho script writing',
      'RunwayML cho video generation',
      'Synthesia cho AI presenter',
      'Midjourney cho thumbnails',
      'Canva AI Magic Studio',
      'Descript cho voice editing',
    ],
    platforms: ['TikTok', 'YouTube', 'Instagram Reels', 'Facebook'],
    techniques: [
      'AI-powered script generation',
      'Automated video editing',
      'Voice cloning và synthesis',
      'AI thumbnail optimization',
      'Content personalization',
    ],
    costRange: '0-50 USD/tháng',
    estimatedEarnings: '500-5000 USD/tháng',
    exercises: [
      {
        title: 'Tạo Video TikTok với AI trong 10 phút',
        description: 'Sử dụng AI tools để tạo một video TikTok hoàn chỉnh từ ý tưởng đến publish',
        difficulty: 'Trung bình',
        materials: ['ChatGPT account', 'RunwayML free trial', 'Canva Pro account', 'Smartphone với camera tốt'],
        procedure: [
          'Brainstorm video idea với ChatGPT prompt engineering',
          'Tạo detailed script và storyboard với AI assistance',
          'Generate video footage sử dụng RunwayML text-to-video',
          'Tạo engaging thumbnail với Midjourney prompts',
          'Edit và polish video với AI editing tools',
          'Viết caption và hashtags với AI optimization',
          'Schedule và publish video trên TikTok',
          'Monitor performance và gather insights',
        ],
        expectedResults: 'Video TikTok chất lượng cao với engagement rate 3-5%',
        solution: 'Kết hợp AI tools hiệu quả tạo ra content viral potential cao',
      },
      {
        title: 'YouTube Channel Strategy với AI Content',
        description: 'Xây dựng YouTube channel chuyên nghiệp với AI-generated content strategy',
        difficulty: 'Nâng cao',
        materials: [
          'YouTube Creator Studio',
          'VidIQ hoặc TubeBuddy',
          'AI video generation tools',
          'Analytics tracking tools',
        ],
        procedure: [
          'Research niche và target audience với AI insights',
          'Tạo content calendar 30 ngày với AI assistance',
          'Develop channel branding với AI design tools',
          'Tạo series đầu tiên với consistent AI workflow',
          'Optimize SEO và thumbnails với AI recommendations',
          'Engage với audience through AI-powered responses',
          'Scale content production với automation',
        ],
        expectedResults: 'YouTube channel với 1000+ subscribers trong 3 tháng',
        solution: 'Systematic approach sử dụng AI tại mọi stage của content creation',
      },
    ],
    realWorldApplications: [
      'Content creator agencies sử dụng AI để scale production',
      'Small businesses tạo marketing content với budget thấp',
      'Influencers maintain consistency khi travel hoặc busy',
      'Educational creators explain complex topics với AI visuals',
      'Entertainment channels tạo viral content với AI assistance',
    ],
    caseStudies: [
      {
        title: 'Creator Agency Scale với AI Tools',
        organization: 'Digital Marketing Agency Vietnam',
        problem: 'Agency cần tạo 100+ videos/tháng cho clients nhưng thiếu nhân lực',
        solution: 'Implement AI workflow: ChatGPT cho scripts, RunwayML cho video, automated editing pipeline',
        impact: 'Tăng 300% content output, giảm 60% production cost, client satisfaction 95%',
        innovations: [
          'AI-powered content templates cho different industries',
          'Automated quality control với AI analysis',
          'Personalized content generation cho từng client',
        ],
      },
      {
        title: 'Solo Creator Thu Nhập 6-Figure',
        organization: 'Independent Content Creator',
        problem: 'Creator muốn scale income nhưng không thể work 24/7',
        solution: 'Build AI content system: voice cloning, automated editing, AI-generated thumbnails',
        impact: 'Từ 1000 USD/tháng lên 15000 USD/tháng trong 6 tháng',
        innovations: [
          'AI voice clone cho multiple languages',
          'Automated thumbnail A/B testing',
          'AI audience analysis cho content optimization',
        ],
      },
    ],
    resources: [
      {
        title: 'RunwayML Complete Guide',
        url: 'https://runwayml.com/tutorials',
        type: 'Tutorial',
      },
      {
        title: 'AI Content Creation Workflow',
        url: 'https://creator.ai/workflow',
        type: 'Documentation',
      },
      {
        title: 'TikTok Creator Fund Guidelines',
        url: 'https://www.tiktok.com/creators/creator-fund',
        type: 'Official Guide',
      },
    ],
  },
  {
    id: 'ai-powered-social-media-automation',
    title: 'AI-Powered Social Media Automation',
    description:
      'Tự động hóa toàn bộ quy trình social media từ content creation đến engagement với AI tools tiên tiến.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=G25jxmtRjas',
    imageUrl: '/images/lessons/social-automation.jpg',
    objectives: [
      'Setup automation workflow cho multiple platforms',
      'Sử dụng AI cho content scheduling thông minh',
      'Automate engagement và community management',
      'Implement AI chatbots cho customer service',
      'Monitor và optimize performance tự động',
    ],
    prerequisites: [
      'Kinh nghiệm với social media management',
      'Hiểu biết cơ bản về marketing automation',
      'Kỹ năng sử dụng APIs và integration tools',
    ],
    aiTools: [
      'Hootsuite với AI features',
      'Buffer AI Assistant',
      'Zapier cho automation',
      'ManyChat cho chatbots',
      'Brandwatch cho social listening',
    ],
    platforms: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'TikTok'],
    techniques: [
      'Smart content scheduling',
      'Automated response systems',
      'AI-powered hashtag optimization',
      'Predictive analytics',
      'Dynamic content personalization',
    ],
    costRange: '50-200 USD/tháng',
    estimatedEarnings: '2000-10000 USD/tháng',
    exercises: [
      {
        title: 'Setup Complete Automation Workflow',
        description: 'Tạo automation system quản lý 5 social platforms simultaneously',
        difficulty: 'Nâng cao',
        materials: [
          'Multiple social media accounts',
          'Automation tools subscriptions',
          'AI content generation tools',
          'Analytics tracking setup',
        ],
        procedure: [
          'Map out current social media workflow',
          'Identify automation opportunities',
          'Setup cross-platform posting với smart scheduling',
          'Implement AI chatbots cho common queries',
          'Create automated engagement rules',
          'Setup performance monitoring dashboard',
          'Test và optimize automation rules',
        ],
        expectedResults: '80% time saving với maintained hoặc improved engagement',
        solution: 'Intelligent automation giữ human touch trong AI-powered efficiency',
      },
    ],
    realWorldApplications: [
      'Agency quản lý 50+ client accounts simultaneously',
      'E-commerce brands maintain 24/7 customer service',
      'Personal brands scale influence without proportional time increase',
      'B2B companies nurture leads across multiple touchpoints',
    ],
    caseStudies: [
      {
        title: 'Agency Automation Success',
        organization: 'Social Media Management Agency',
        problem: 'Không thể scale operations để serve more clients',
        solution: 'AI automation workflow giảm manual work 90%',
        impact: 'Tăng từ 20 lên 100 clients với team size không đổi',
        innovations: [
          'AI content approval workflows',
          'Predictive engagement optimization',
          'Automated crisis management protocols',
        ],
      },
    ],
    resources: [
      {
        title: 'Social Media Automation Best Practices',
        url: 'https://hootsuite.com/automation',
        type: 'Guide',
      },
      {
        title: 'AI Chatbot Implementation',
        url: 'https://manychat.com/blog/ai-chatbots',
        type: 'Tutorial',
      },
    ],
  },
  {
    id: 'ai-personal-branding-strategy',
    title: 'AI Personal Branding & Authority Building',
    description: 'Xây dựng personal brand mạnh mẽ và establish thought leadership với sức mạnh của AI tools.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=YN5nH_FbnJc',
    imageUrl: '/images/lessons/ai-personal-branding.jpg',
    objectives: [
      'Develop unique personal brand identity với AI insights',
      'Create consistent brand voice across platforms',
      'Build thought leadership content strategy',
      'Establish authority trong chosen niche',
      'Scale personal brand presence globally',
    ],
    prerequisites: [
      'Clear vision cho personal brand direction',
      'Expertise hoặc passion trong specific area',
      'Commitment to consistent content creation',
    ],
    aiTools: [
      'Brand24 cho brand monitoring',
      'Jasper AI cho consistent brand voice',
      'Lately AI cho content repurposing',
      'Crystal cho personality insights',
      'Mention cho reputation tracking',
    ],
    platforms: ['LinkedIn', 'Twitter', 'Medium', 'YouTube', 'Personal Website'],
    techniques: [
      'AI-powered audience research',
      'Brand voice development',
      'Authority content creation',
      'Strategic networking',
      'Reputation management',
    ],
    costRange: '30-150 USD/tháng',
    estimatedEarnings: '1000-20000 USD/tháng',
    exercises: [
      {
        title: 'Develop Personal Brand Blueprint',
        description: 'Tạo comprehensive personal brand strategy với AI assistance',
        difficulty: 'Trung bình',
        materials: [
          'Brand research tools',
          'Content creation platforms',
          'AI writing assistants',
          'Design tools cho visual branding',
        ],
        procedure: [
          'Conduct AI-powered audience research',
          'Define unique value proposition',
          'Develop brand voice và messaging',
          'Create visual brand identity',
          'Plan content pillars và topics',
          'Setup content distribution strategy',
          'Establish measurement metrics',
        ],
        expectedResults: 'Cohesive personal brand với clear positioning và consistent voice',
        solution: 'Data-driven approach to personal branding với AI optimization',
      },
    ],
    realWorldApplications: [
      'Entrepreneurs building startup credibility',
      'Professionals transitioning careers',
      'Consultants establishing thought leadership',
      'Speakers building keynote opportunities',
    ],
    caseStudies: [
      {
        title: 'Tech CEO Personal Brand',
        organization: 'FinTech Startup CEO',
        problem: 'Unknown trong competitive Vietnamese fintech market',
        solution: 'AI-powered personal branding strategy focusing on thought leadership',
        impact: 'Từ 500 LinkedIn followers lên 50K trong 12 tháng, speaking opportunities tăng 10x',
        innovations: [
          'AI content calendar optimization',
          'Predictive trend analysis cho content topics',
          'Automated personal brand monitoring',
        ],
      },
    ],
    resources: [
      {
        title: 'Personal Branding for Leaders',
        url: 'https://www.linkedin.com/learning/personal-branding',
        type: 'Course',
      },
      {
        title: 'AI Brand Voice Development',
        url: 'https://jasper.ai/brand-voice',
        type: 'Tool',
      },
    ],
  },
];
