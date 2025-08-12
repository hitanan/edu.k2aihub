import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface AIApplicationLessonData extends BaseLessonData {
  aiTools?: string[];
  practicalUses?: string[];
  industries?: string[];
  skillLevel?: string;
  outcomes?: string[];
}

export const AIApplicationLessons: AIApplicationLessonData[] = [
  {
    id: 'ai-for-study-abroad',
    title: 'AI cho Du học - Chuẩn bị hồ sơ và IELTS',
    description:
      'Sử dụng AI để tối ưu hóa quá trình chuẩn bị du học: viết essay, luyện IELTS, research trường học và scholarships.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=lVmu-byFqtI',
    imageUrl: '/images/ai-study-abroad.jpg',
    objectives: [
      'Master AI tools cho essay writing và SOP preparation',
      'Optimize IELTS preparation với AI tutoring systems',
      'Automate university research và scholarship discovery',
      'Create compelling application materials với AI assistance',
    ],
    prerequisites: [
      'Basic English proficiency',
      'Understanding of study abroad process',
      'Familiarity với AI tools như ChatGPT',
      'Access to internet và AI platforms',
    ],
    exercises: [
      {
        title: 'AI-Powered Personal Statement Writing',
        description: 'Viết personal statement compelling với AI guidance và feedback',
        difficulty: 'Trung bình',
        materials: [
          'ChatGPT hoặc Claude access',
          'Personal background information',
          'Target university requirements',
          'Career goals outline',
        ],
        procedure: [
          'Brainstorm personal stories và achievements với AI prompts',
          'Structure personal statement với AI framework templates',
          'Draft content với AI writing assistance và suggestions',
          'Refine language và tone với AI editing tools',
          'Get feedback từ AI on clarity và impact',
          'Finalize với human review và AI grammar check',
        ],
        expectedResults: 'Professional personal statement tailored to target universities với strong narrative flow',
        solution: 'Comprehensive guide với AI prompts và examples sẽ được provided',
      },
      {
        title: 'IELTS Speaking Practice với AI',
        description: 'Improve IELTS speaking skills sử dụng AI conversation partners',
        difficulty: 'Cơ bản',
        materials: [
          'AI conversation tools (ChatGPT Voice, Claude)',
          'IELTS speaking topics và questions',
          'Recording device hoặc app',
          'IELTS band descriptors',
        ],
        procedure: [
          'Setup AI conversation với IELTS examiner persona',
          'Practice Part 1 questions với AI feedback on fluency',
          'Simulate Part 2 presentations với AI timing và evaluation',
          'Engage in Part 3 discussions với AI challenging questions',
          'Record sessions để analyze pronunciation và coherence',
          'Get detailed feedback từ AI on improvement areas',
        ],
        expectedResults: 'Improved fluency, coherence và confidence in IELTS speaking tasks',
      },
    ],
    realWorldApplications: [
      'University application optimization cho top global universities',
      'Scholarship hunting và application automation',
      'IELTS/TOEFL preparation với personalized AI tutoring',
      'Visa interview preparation với AI simulation',
      'Cross-cultural communication skills development',
    ],
    caseStudies: [
      {
        title: 'Vietnam Student Success Story',
        organization: 'Top UK University Admission',
        problem: 'Student cần cải thiện IELTS score từ 6.0 lên 7.5 trong 3 tháng',
        solution:
          'Implemented AI tutoring với daily practice sessions, AI feedback system, và targeted weak area improvement',
        impact: 'Achieved IELTS 7.5 trong 10 weeks, secured scholarship worth £15,000',
        innovations: [
          'Personalized AI study plans',
          'Real-time pronunciation feedback',
          'Adaptive question difficulty',
        ],
      },
    ],
    aiTools: [
      'ChatGPT cho essay writing và brainstorming',
      'Claude cho detailed feedback và editing',
      'Grammarly AI cho grammar và style improvement',
      'ELSA Speak cho pronunciation practice',
      'Speechify cho reading comprehension',
    ],
    practicalUses: [
      'Personal statement và SOP drafting',
      'IELTS/TOEFL speaking practice',
      'University research automation',
      'Scholarship matching systems',
      'Interview preparation simulations',
    ],
    industries: [
      'Education Consulting',
      'Language Learning',
      'Study Abroad Services',
      'University Admissions',
      'International Education',
    ],
    skillLevel: 'Beginner to Intermediate',
    outcomes: [
      'Compelling application materials',
      'Improved English proficiency scores',
      'Increased scholarship opportunities',
      'Confident interview performance',
      'Successful university admissions',
    ],
  },
  {
    id: 'ai-business-automation',
    title: 'AI Business Automation - Tự động hóa quy trình kinh doanh',
    description:
      'Implement AI automation cho business processes: customer service, sales, marketing campaigns, và operational efficiency.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=dCw4339xeQI',
    objectives: [
      'Design automated customer service systems với AI chatbots',
      'Implement sales automation với AI lead qualification',
      'Create marketing campaigns với AI content generation',
      'Optimize operations với AI analytics và insights',
    ],
    prerequisites: [
      'Basic business process understanding',
      'Familiarity với CRM systems',
      'Understanding of marketing funnels',
      'Basic data analysis skills',
    ],
    exercises: [
      {
        title: 'AI Chatbot Implementation cho Customer Service',
        description: 'Build và deploy AI chatbot để handle common customer inquiries',
        difficulty: 'Trung bình',
        procedure: [
          'Analyze customer inquiry patterns và common questions',
          'Design conversation flows với decision trees',
          'Setup chatbot platform (ChatGPT API, Dialogflow, etc.)',
          'Train chatbot với company-specific information',
          'Implement escalation rules for complex queries',
          'Test và optimize based on user feedback',
        ],
      },
    ],
    realWorldApplications: [
      'Small business automation để reduce operational costs',
      'E-commerce customer service enhancement',
      'Lead generation và qualification automation',
      'Content marketing at scale với AI tools',
      'Data-driven decision making với AI insights',
    ],
    aiTools: [
      'Zapier cho workflow automation',
      'HubSpot AI cho sales automation',
      'Intercom chatbots cho customer service',
      'Copy.ai cho content generation',
      'Google Analytics Intelligence cho insights',
    ],
  },
  {
    id: 'ai-content-creation-monetization',
    title: 'AI Content Creation & Monetization',
    description:
      'Leverage AI để create và monetize content across platforms: YouTube, TikTok, Instagram, blogs, và online courses.',
    duration: '220 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Master AI content generation cho multiple platforms',
      'Implement monetization strategies với AI-assisted content',
      'Scale content production với automation workflows',
      'Optimize audience engagement với AI analytics',
    ],
    prerequisites: [
      'Content creation experience',
      'Understanding of social media platforms',
      'Basic video/audio editing skills',
      'Monetization platform knowledge',
    ],
    exercises: [
      {
        title: 'AI-Powered YouTube Channel Automation',
        description: 'Create automated content pipeline cho YouTube channel growth',
        difficulty: 'Nâng cao',
        procedure: [
          'Research trending topics với AI trend analysis tools',
          'Generate video scripts với AI writing assistants',
          'Create thumbnails và titles với AI design tools',
          'Automate video editing với AI video platforms',
          'Optimize SEO với AI keyword research',
          'Schedule và analyze performance với AI analytics',
        ],
      },
    ],
    realWorldApplications: [
      'Full-time content creator businesses',
      'Online course creation và sales',
      'Affiliate marketing với AI content',
      'Personal branding và influence building',
      'Digital product sales optimization',
    ],
    aiTools: [
      'RunwayML cho video generation',
      'Copy.ai cho script writing',
      'Canva AI cho thumbnail design',
      'VidIQ cho YouTube optimization',
      'Hootsuite AI cho social media management',
    ],
  },
  {
    id: 'ai-healthcare-wellness',
    title: 'AI for Healthcare & Personal Wellness',
    description:
      'Apply AI trong healthcare và wellness: health monitoring, fitness planning, mental health support, và medical research.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Implement AI-powered health monitoring systems',
      'Create personalized fitness plans với AI coaching',
      'Utilize AI cho mental health support và therapy',
      'Understand AI applications in medical diagnosis',
    ],
    prerequisites: [
      'Basic health và wellness knowledge',
      'Understanding of wearable technology',
      'Interest in personal health optimization',
      'Access to health tracking devices',
    ],
    exercises: [
      {
        title: 'AI Personal Health Dashboard',
        description: 'Build comprehensive health tracking system với AI insights',
        difficulty: 'Trung bình',
        procedure: [
          'Connect wearable devices và health apps',
          'Setup AI analysis cho health data patterns',
          'Create personalized recommendations system',
          'Implement early warning alerts',
          'Generate weekly health reports với AI insights',
          'Integrate với healthcare provider systems',
        ],
      },
    ],
    realWorldApplications: [
      'Personal health optimization và longevity',
      'Chronic disease management với AI monitoring',
      'Mental health support và intervention systems',
      'Fitness coaching và nutrition planning',
      'Healthcare professional assistance tools',
    ],
    aiTools: [
      'Apple Health AI insights',
      'Fitbit Premium AI coaching',
      'MyFitnessPal AI nutrition tracking',
      'Headspace AI meditation guidance',
      'Ada Health AI symptom checker',
    ],
  },
  {
    id: 'ai-financial-planning-investment',
    title: 'AI Financial Planning & Investment',
    description:
      'Sử dụng AI cho financial planning, investment strategies, risk assessment, và wealth building optimization.',
    duration: '190 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Implement AI-driven investment portfolio management',
      'Create automated budgeting với AI expense categorization',
      'Use AI cho risk assessment và insurance optimization',
      'Develop wealth building strategies với AI insights',
    ],
    prerequisites: [
      'Basic financial literacy',
      'Understanding of investment principles',
      'Access to financial accounts và data',
      'Interest in personal finance optimization',
    ],
    exercises: [
      {
        title: 'AI Investment Portfolio Optimizer',
        description: 'Build AI system để optimize investment portfolio based on goals và risk tolerance',
        difficulty: 'Nâng cao',
        procedure: [
          'Connect investment accounts với AI analytics platforms',
          'Define investment goals và risk tolerance parameters',
          'Setup AI-powered portfolio rebalancing alerts',
          'Implement automated dollar-cost averaging strategies',
          'Create AI-driven market sentiment analysis',
          'Generate monthly performance reports với AI insights',
        ],
      },
    ],
    realWorldApplications: [
      'Personal wealth building và retirement planning',
      'Small business financial management',
      'Real estate investment optimization',
      'Cryptocurrency portfolio management',
      'Tax optimization strategies với AI',
    ],
    aiTools: [
      'Betterment AI robo-advisor',
      'Personal Capital AI financial tracking',
      'YNAB AI budgeting insights',
      'TaxAct AI tax optimization',
      'Robinhood AI investment research',
    ],
  },
];
