import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface MicroInfluencerLessonType extends BaseLessonData {
  influencerTiers: string[];
  collaborationTypes: string[];
  platformStrategies: string[];
  monetizationMethods: string[];
  growthTactics: string[];
}

export const microInfluencerLessons: MicroInfluencerLessonType[] = [
  {
    id: 'micro-influencer-partnership-strategies',
    title: 'Micro-Influencer Partnership & Collaboration Strategies',
    description: 'Master micro-influencer partnerships với authentic collaborations, fair compensation và long-term relationship building.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://youtube.com/watch?v=MICRO_INFLUENCER_PARTNERSHIPS',
    imageUrl: '/images/lessons/micro-influencer-partnerships.jpg',
    objectives: [
      'Understand micro-influencer landscape và value',
      'Develop authentic partnership strategies',
      'Create win-win collaboration frameworks',
      'Build long-term influencer relationships',
      'Measure partnership ROI effectively'
    ],
    prerequisites: [
      'Understanding of influencer marketing basics',
      'Brand partnership experience',
      'Budget for influencer collaborations'
    ],
    influencerTiers: [
      'Nano-influencers (1K-10K followers)',
      'Micro-influencers (10K-100K followers)',
      'Mid-tier influencers (100K-1M followers)'
    ],
    collaborationTypes: [
      'Product seeding và reviews',
      'Sponsored content posts',
      'Brand ambassador programs',
      'Event collaborations',
      'Co-created content series'
    ],
    platformStrategies: [
      'Instagram focused campaigns',
      'TikTok viral partnerships',
      'YouTube long-form collaborations',
      'Multi-platform integrated approaches'
    ],
    monetizationMethods: [
      'Performance-based compensation',
      'Flat fee arrangements',
      'Product exchange partnerships',
      'Commission-based structures',
      'Long-term retainer agreements'
    ],
    growthTactics: [
      'Authentic audience building',
      'Niche expertise development',
      'Consistent content creation',
      'Community engagement focus',
      'Brand alignment strategies'
    ],
    exercises: [
      {
        title: 'Micro-Influencer Campaign Development',
        description: 'Create comprehensive micro-influencer campaign với multiple partnerships',
        difficulty: 'Trung bình',
        materials: [
          'Influencer research tools',
          'Campaign brief templates',
          'Contract templates',
          'Performance tracking systems'
        ],
        procedure: [
          'Define campaign objectives và target audience',
          'Research và identify relevant micro-influencers',
          'Develop authentic collaboration proposals',
          'Negotiate fair compensation structures',
          'Create clear campaign guidelines',
          'Execute collaborative content creation',
          'Monitor campaign performance metrics',
          'Nurture relationships for future partnerships'
        ],
        expectedResults: '80%+ positive campaign sentiment, 5x higher engagement than macro-influencers',
        solution: 'Authentic partnerships with engaged micro-audiences'
      }
    ],
    realWorldApplications: [
      'Local businesses building community presence',
      'Startups establishing brand credibility',
      'Niche brands reaching specific audiences',
      'Service providers building local awareness'
    ],
    caseStudies: [
      {
        title: 'Vietnamese Skincare Brand Success',
        organization: 'Local Natural Skincare Brand',
        problem: 'Limited budget competing với big beauty brands',
        solution: 'Network of 50 micro-influencers với authentic skin journeys',
        impact: 'Brand awareness tăng 400%, sales conversion 25% higher than paid ads',
        innovations: [
          'Long-term skin transformation documentation',
          'Micro-influencer community building',
          'User-generated content amplification'
        ]
      }
    ],
    resources: [
      {
        title: 'Micro-Influencer Marketing Guide',
        url: 'https://influencermarketinghub.com/micro-influencer-marketing',
        type: 'Strategy Guide'
      }
    ]
  },
  {
    id: 'authentic-influence-community-building',
    title: 'Authentic Influence & Community Building',
    description: 'Build genuine influence through authentic content, community engagement và value-driven approach to social media presence.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://youtube.com/watch?v=AUTHENTIC_INFLUENCE',
    imageUrl: '/images/lessons/authentic-influence.jpg',
    objectives: [
      'Develop authentic personal brand',
      'Build engaged community around shared values',
      'Create valuable content consistently',
      'Foster genuine relationships với audience',
      'Monetize influence ethically'
    ],
    prerequisites: [
      'Clear personal values và mission',
      'Commitment to consistent content creation',
      'Willingness to be vulnerable và authentic'
    ],
    influencerTiers: [
      'Emerging influencers building foundations',
      'Established micro-influencers scaling',
      'Thought leaders trong specific niches'
    ],
    collaborationTypes: [
      'Value-aligned brand partnerships',
      'Community-driven initiatives',
      'Educational content collaborations',
      'Cause-based campaigns'
    ],
    platformStrategies: [
      'Platform-specific authenticity approaches',
      'Cross-platform consistency maintenance',
      'Community migration strategies',
      'Platform algorithm optimization'
    ],
    monetizationMethods: [
      'Educational product sales',
      'Consultation service offerings',
      'Community membership programs',
      'Sponsored content alignment',
      'Affiliate marketing authenticity'
    ],
    growthTactics: [
      'Value-first content creation',
      'Community engagement prioritization',
      'Authentic storytelling techniques',
      'Consistent brand message delivery',
      'Long-term relationship building'
    ],
    exercises: [
      {
        title: 'Authentic Personal Brand Development',
        description: 'Develop comprehensive authentic personal brand strategy',
        difficulty: 'Trung bình',
        materials: [
          'Brand values assessment tools',
          'Content planning frameworks',
          'Community engagement strategies',
          'Authenticity measurement metrics'
        ],
        procedure: [
          'Define core values và mission clearly',
          'Identify unique perspective và expertise',
          'Develop authentic brand voice',
          'Create content strategy aligned với values',
          'Build community around shared interests',
          'Engage authentically với followers',
          'Share vulnerable stories appropriately',
          'Maintain consistency across platforms'
        ],
        expectedResults: 'Authentic brand với highly engaged community, trust-based relationships',
        solution: 'Values-driven approach to influence building'
      }
    ],
    realWorldApplications: [
      'Professionals building thought leadership',
      'Entrepreneurs establishing credibility',
      'Educators sharing knowledge authentically',
      'Activists driving social change'
    ],
    caseStudies: [
      {
        title: 'Mental Health Advocate Growth',
        organization: 'Vietnamese Mental Health Advocate',
        problem: 'Stigma around mental health topics',
        solution: 'Authentic vulnerability sharing với educational content',
        impact: 'Community của 100K+ people seeking mental health support',
        innovations: [
          'Cultural sensitivity trong mental health discussions',
          'Professional therapy integration',
          'Community support systems'
        ]
      }
    ],
    resources: [
      {
        title: 'Authentic Personal Branding',
        url: 'https://hbr.org/2019/02/the-authenticity-paradox',
        type: 'Research Article'
      }
    ]
  }
];
