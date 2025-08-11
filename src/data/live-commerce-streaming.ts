import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface LiveCommerceLessonType extends BaseLessonData {
  liveFeatures: string[];
  salesTechniques: string[];
  technicalSetup: string[];
  engagementStrategies: string[];
  monetizationMethods: string[];
}

export const liveCommerceLessons: LiveCommerceLessonType[] = [
  {
    id: 'live-streaming-sales-mastery',
    title: 'Live Streaming Sales Mastery',
    description: 'Master nghệ thuật live streaming sales với psychological triggers, real-time engagement và proven conversion techniques.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=LIVE_SALES_MASTERY',
    imageUrl: '/images/lessons/live-sales-mastery.jpg',
    objectives: [
      'Master live selling psychological techniques',
      'Create compelling live shopping experiences',
      'Handle real-time objections và questions',
      'Implement urgency và scarcity effectively',
      'Build loyal live shopping communities'
    ],
    prerequisites: [
      'Comfortable speaking on camera',
      'Basic sales skills',
      'Product knowledge',
      'Reliable internet connection'
    ],
    liveFeatures: [
      'Interactive product demonstrations',
      'Real-time Q&A sessions',
      'Flash sales và limited offers',
      'Viewer participation activities',
      'Behind-the-scenes access'
    ],
    salesTechniques: [
      'Scarcity principle application',
      'Social proof in real-time',
      'Objection handling live',
      'Impulse purchase triggers',
      'Community building during sales'
    ],
    technicalSetup: [
      'Professional lighting setup',
      'High-quality audio systems',
      'Stable internet connection',
      'Multiple camera angles',
      'Product display optimization'
    ],
    engagementStrategies: [
      'Interactive polls và questions',
      'Viewer shoutouts và recognition',
      'Limited-time viewer rewards',
      'Community challenges',
      'Real-time feedback incorporation'
    ],
    monetizationMethods: [
      'Direct product sales',
      'Exclusive live viewer discounts',
      'Membership/VIP tiers',
      'Super chat monetization',
      'Post-live follow-up sales'
    ],
    exercises: [
      {
        title: 'Complete Live Shopping Session',
        description: 'Conduct professional live shopping session với structured sales approach',
        difficulty: 'Nâng cao',
        materials: [
          'Streaming equipment setup',
          'Product inventory for demonstration',
          'Sales script và talking points',
          'Engagement tracking tools'
        ],
        procedure: [
          'Plan session structure với clear objectives',
          'Setup professional streaming environment',
          'Create compelling opening để capture attention',
          'Demonstrate products với emotional storytelling',
          'Engage với live audience authentically',
          'Implement time-sensitive offers strategically',
          'Handle questions và objections professionally',
          'Close sales với clear next steps'
        ],
        expectedResults: '100+ concurrent viewers, 20%+ conversion rate, repeat viewers',
        solution: 'Structured entertainment combined với strategic selling'
      },
      {
        title: 'Live Commerce Community Building',
        description: 'Build dedicated community around live shopping events',
        difficulty: 'Nâng cao',
        materials: [
          'Community platform setup',
          'Loyalty program framework',
          'Exclusive content strategy',
          'Member engagement tools'
        ],
        procedure: [
          'Define community value proposition',
          'Create exclusive member benefits',
          'Develop regular live streaming schedule',
          'Foster community interactions between sessions',
          'Provide exclusive access và previews',
          'Implement member feedback systems',
          'Create community-driven content',
          'Scale community engagement strategies'
        ],
        expectedResults: 'Dedicated community với 500+ active members, 60%+ retention rate',
        solution: 'Community-centric approach to live commerce'
      }
    ],
    realWorldApplications: [
      'Fashion brands showcasing seasonal collections',
      'Beauty brands demonstrating product usage',
      'Tech companies explaining product features',
      'Home goods brands showing lifestyle integration'
    ],
    caseStudies: [
      {
        title: 'Vietnamese Fashion Brand Live Success',
        organization: 'Local Fashion Retailer',
        problem: 'Traditional retail sales declining, need digital transformation',
        solution: 'Daily live fashion shows với interactive styling sessions',
        impact: 'Revenue increased 300%, customer engagement up 500%',
        innovations: [
          'Virtual try-on experiences',
          'Customer styling consultations live',
          'Cultural fashion storytelling'
        ]
      },
      {
        title: 'Artisan Craft Live Commerce',
        organization: 'Vietnamese Traditional Craft Maker',
        problem: 'Limited market reach for handmade products',
        solution: 'Live crafting sessions với product storytelling',
        impact: 'International customer base, 1000% revenue increase',
        innovations: [
          'Cultural heritage storytelling',
          'Live crafting process demonstrations',
          'Custom order consultations'
        ]
      }
    ],
    resources: [
      {
        title: 'Live Commerce Best Practices',
        url: 'https://business.instagram.com/blog/live-shopping-guide',
        type: 'Platform Guide'
      },
      {
        title: 'Psychology of Live Selling',
        url: 'https://www.salesforce.com/resources/articles/social-selling',
        type: 'Sales Psychology'
      }
    ]
  },
  {
    id: 'interactive-live-streaming-technology',
    title: 'Interactive Live Streaming Technology & Tools',
    description: 'Master technical aspects của live streaming với interactive features, multi-platform broadcasting và audience engagement tools.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=LIVE_TECH_MASTERY',
    imageUrl: '/images/lessons/live-tech-setup.jpg',
    objectives: [
      'Setup professional live streaming equipment',
      'Master multi-platform streaming strategies',
      'Implement interactive engagement features',
      'Optimize stream quality và reliability',
      'Leverage advanced streaming technologies'
    ],
    prerequisites: [
      'Technical aptitude với equipment',
      'Understanding of streaming platforms',
      'Investment budget for equipment',
      'Stable high-speed internet'
    ],
    liveFeatures: [
      'Multi-camera switching',
      'Real-time graphics overlays',
      'Interactive polls và quizzes',
      'Screen sharing capabilities',
      'Guest collaboration features'
    ],
    salesTechniques: [
      'Technical product demonstrations',
      'Interactive comparison presentations',
      'Real-time customization shows',
      'Technical Q&A sessions',
      'Product testing live'
    ],
    technicalSetup: [
      'DSLR camera integration',
      'Professional microphone systems',
      'Green screen và background setup',
      'Streaming software configuration',
      'Network optimization'
    ],
    engagementStrategies: [
      'Interactive feature utilization',
      'Multi-platform engagement',
      'Technical demonstration techniques',
      'Real-time problem solving',
      'Community technical discussions'
    ],
    monetizationMethods: [
      'Technical consultation services',
      'Equipment recommendation commissions',
      'Premium streaming experiences',
      'Technical course sales',
      'Sponsored technology reviews'
    ],
    exercises: [
      {
        title: 'Professional Streaming Setup Implementation',
        description: 'Build complete professional streaming setup với interactive capabilities',
        difficulty: 'Nâng cao',
        materials: [
          'DSLR camera hoặc mirrorless',
          'Audio interface và microphones',
          'Lighting equipment',
          'Streaming software license',
          'High-speed internet connection'
        ],
        procedure: [
          'Research equipment requirements cho goals',
          'Purchase và setup streaming hardware',
          'Configure streaming software với overlays',
          'Test audio quality và optimization',
          'Setup lighting cho professional appearance',
          'Configure multi-platform streaming',
          'Test interactive features thoroughly',
          'Conduct trial streams for optimization'
        ],
        expectedResults: 'Professional streaming setup với broadcast-quality output',
        solution: 'Investment trong quality equipment paying off long-term'
      }
    ],
    realWorldApplications: [
      'Tech reviewers showcasing products professionally',
      'Educational content creators teaching technical subjects',
      'Corporate training và webinar hosting',
      'Gaming streamers với professional presentation'
    ],
    caseStudies: [
      {
        title: 'Tech Education Channel Growth',
        organization: 'Vietnamese Tech Educator',
        problem: 'Competition với low-quality technical content',
        solution: 'Professional streaming setup với interactive demonstrations',
        impact: 'Channel growth 500%, course sales 300% increase',
        innovations: [
          'Multi-angle technical demonstrations',
          'Interactive coding sessions',
          'Real-time technical problem solving'
        ]
      }
    ],
    resources: [
      {
        title: 'Professional Streaming Guide',
        url: 'https://streamlabs.com/content-hub/post/professional-streaming-setup',
        type: 'Technical Guide'
      },
      {
        title: 'Live Streaming Equipment Reviews',
        url: 'https://www.techradar.com/best/live-streaming-equipment',
        type: 'Equipment Guide'
      }
    ]
  },
  {
    id: 'global-live-commerce-expansion',
    title: 'Global Live Commerce & Cross-Cultural Strategies',
    description: 'Expand live commerce operations globally với cultural adaptation, timezone optimization và international audience engagement.',
    duration: '120 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=GLOBAL_LIVE_COMMERCE',
    imageUrl: '/images/lessons/global-live-commerce.jpg',
    objectives: [
      'Understand global live commerce markets',
      'Adapt content cho different cultures',
      'Optimize scheduling cho multiple timezones',
      'Handle international payment và shipping',
      'Build global community engagement'
    ],
    prerequisites: [
      'Successful domestic live commerce experience',
      'Understanding of international business',
      'Language capabilities hoặc translation resources',
      'International shipping capabilities'
    ],
    liveFeatures: [
      'Multi-language streaming',
      'Cultural celebration events',
      'International collaboration streams',
      'Global product showcases',
      'Cross-cultural exchanges'
    ],
    salesTechniques: [
      'Cultural sensitivity trong selling',
      'International pricing strategies',
      'Cross-cultural trust building',
      'Global shipping explanations',
      'Currency conversion handling'
    ],
    technicalSetup: [
      'Multi-timezone scheduling tools',
      'Translation software integration',
      'International payment processing',
      'Global analytics tracking',
      'VPN considerations'
    ],
    engagementStrategies: [
      'Cultural celebration integration',
      'International guest collaborations',
      'Global community challenges',
      'Cross-cultural learning content',
      'International trend adaptation'
    ],
    monetizationMethods: [
      'International product sales',
      'Global affiliate partnerships',
      'Cross-border service offerings',
      'International consultation services',
      'Global brand partnerships'
    ],
    exercises: [
      {
        title: 'International Live Commerce Launch',
        description: 'Launch live commerce operations trong new international market',
        difficulty: 'Nâng cao',
        materials: [
          'Market research data',
          'Cultural consultation resources',
          'International logistics setup',
          'Multi-language content preparation'
        ],
        procedure: [
          'Research target international market deeply',
          'Identify cultural preferences và sensitivities',
          'Adapt product offerings cho local market',
          'Setup international shipping và payment',
          'Create culturally appropriate content strategy',
          'Partner với local influencers hoặc ambassadors',
          'Launch với soft opening approach',
          'Gather feedback và iterate approach'
        ],
        expectedResults: 'Successful international expansion với positive local reception',
        solution: 'Cultural adaptation combined với proven business model'
      }
    ],
    realWorldApplications: [
      'Vietnamese brands expanding to regional markets',
      'International brands entering Vietnamese market',
      'Cross-border e-commerce optimization',
      'Global community building strategies'
    ],
    caseStudies: [
      {
        title: 'Vietnamese Coffee Global Expansion',
        organization: 'Vietnamese Specialty Coffee Brand',
        problem: 'Limited to domestic market despite unique products',
        solution: 'Global live coffee tasting sessions với cultural storytelling',
        impact: 'International sales 400% of domestic, global brand recognition',
        innovations: [
          'Cultural coffee ceremony demonstrations',
          'International coffee education sessions',
          'Global coffee community building'
        ]
      }
    ],
    resources: [
      {
        title: 'Global E-commerce Strategies',
        url: 'https://www.shopify.com/blog/international-ecommerce',
        type: 'Business Strategy'
      },
      {
        title: 'Cross-Cultural Marketing Guide',
        url: 'https://blog.hubspot.com/marketing/cross-cultural-marketing',
        type: 'Marketing Guide'
      }
    ]
  }
];
