import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface SocialListeningLessonType extends BaseLessonData {
  monitoringTools: string[];
  crisisTypes: string[];
  responseStrategies: string[];
  preventionTactics: string[];
  reputationMetrics: string[];
}

export const socialListeningLessons: SocialListeningLessonType[] = [
  {
    id: 'advanced-social-listening-monitoring',
    title: 'Advanced Social Listening & Brand Monitoring',
    description: 'Master social listening tools và techniques để monitor brand reputation, track sentiment và identify opportunities proactively.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=SOCIAL_LISTENING_MASTERY',
    imageUrl: '/images/lessons/social-listening.jpg',
    objectives: [
      'Setup comprehensive social listening systems',
      'Monitor brand mentions across platforms',
      'Analyze sentiment và identify trends',
      'Track competitor activities và strategies',
      'Turn insights into actionable strategies'
    ],
    prerequisites: [
      'Understanding of social media platforms',
      'Basic analytics experience',
      'Access to social listening tools',
      'Strategic thinking capabilities'
    ],
    monitoringTools: [
      'Hootsuite Insights',
      'Brandwatch Consumer Intelligence',
      'Sprout Social Listening',
      'Mention Brand Monitoring',
      'Google Alerts setup'
    ],
    crisisTypes: [
      'Product quality complaints',
      'Customer service failures',
      'Controversial content backlash',
      'Competitor negative campaigns',
      'Viral negative content'
    ],
    responseStrategies: [
      'Immediate acknowledgment protocols',
      'Escalation decision frameworks',
      'Public response guidelines',
      'Private resolution approaches',
      'Follow-up and prevention measures'
    ],
    preventionTactics: [
      'Proactive community management',
      'Regular sentiment monitoring',
      'Early warning system setup',
      'Stakeholder communication plans',
      'Content approval processes'
    ],
    reputationMetrics: [
      'Brand sentiment scores',
      'Share of voice measurements',
      'Engagement quality analysis',
      'Crisis response time tracking',
      'Resolution satisfaction rates'
    ],
    exercises: [
      {
        title: 'Complete Social Listening Setup',
        description: 'Setup comprehensive social listening system cho brand monitoring',
        difficulty: 'Nâng cao',
        materials: [
          'Social listening tool subscriptions',
          'Brand keyword lists',
          'Competitor analysis framework',
          'Alert notification systems'
        ],
        procedure: [
          'Define comprehensive keyword tracking lists',
          'Setup monitoring across major platforms',
          'Configure sentiment analysis parameters',
          'Create competitor benchmarking dashboards',
          'Establish alert thresholds và notifications',
          'Design reporting templates',
          'Train team on response protocols',
          'Test system với historical data'
        ],
        expectedResults: 'Comprehensive monitoring system catching 95%+ brand mentions',
        solution: 'Proactive reputation management system'
      },
      {
        title: 'Crisis Simulation & Response Training',
        description: 'Conduct crisis simulation exercises để test response capabilities',
        difficulty: 'Nâng cao',
        materials: [
          'Crisis scenario templates',
          'Response team roles definition',
          'Communication tools setup',
          'Performance measurement frameworks'
        ],
        procedure: [
          'Develop realistic crisis scenarios',
          'Assign team roles và responsibilities',
          'Execute timed crisis response simulations',
          'Test communication protocols',
          'Evaluate response effectiveness',
          'Document lessons learned',
          'Refine response procedures',
          'Create crisis playbook'
        ],
        expectedResults: 'Crisis response capability với <2 hour response time',
        solution: 'Prepared crisis management preventing reputation damage'
      }
    ],
    realWorldApplications: [
      'Enterprise brands managing global reputation',
      'Startups building brand awareness',
      'Public figures monitoring personal brands',
      'Government agencies tracking public sentiment'
    ],
    caseStudies: [
      {
        title: 'Food Brand Crisis Management',
        organization: 'Vietnamese Food & Beverage Company',
        problem: 'Viral negative review about product quality',
        solution: 'Immediate social listening detection và transparent response',
        impact: 'Crisis contained within 6 hours, brand trust actually increased',
        innovations: [
          'Real-time quality control adjustments',
          'Transparent manufacturing process sharing',
          'Customer involvement trong improvement process'
        ]
      }
    ],
    resources: [
      {
        title: 'Social Listening Best Practices',
        url: 'https://blog.hootsuite.com/social-listening-business',
        type: 'Strategy Guide'
      }
    ]
  },
  {
    id: 'crisis-management-reputation-recovery',
    title: 'Crisis Management & Reputation Recovery Strategies',
    description: 'Master crisis management techniques để handle reputation threats và recover từ negative situations effectively.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=CRISIS_MANAGEMENT',
    imageUrl: '/images/lessons/crisis-management.jpg',
    objectives: [
      'Develop comprehensive crisis management plans',
      'Execute effective crisis communication',
      'Implement reputation recovery strategies',
      'Learn từ crisis để prevent future issues',
      'Build stronger brand trust post-crisis'
    ],
    prerequisites: [
      'Understanding of brand reputation dynamics',
      'Crisis communication experience',
      'Leadership decision-making authority',
      'Stakeholder relationship knowledge'
    ],
    monitoringTools: [
      'Crisis detection dashboards',
      'Real-time sentiment tracking',
      'Media monitoring systems',
      'Stakeholder communication platforms'
    ],
    crisisTypes: [
      'Product safety issues',
      'Data privacy breaches',
      'Employee misconduct',
      'Marketing campaign backlash',
      'Third-party association problems'
    ],
    responseStrategies: [
      'Immediate response protocols',
      'Transparent communication approaches',
      'Stakeholder-specific messaging',
      'Remediation action plans',
      'Long-term recovery strategies'
    ],
    preventionTactics: [
      'Risk assessment frameworks',
      'Early warning systems',
      'Stakeholder engagement programs',
      'Content review processes',
      'Crisis preparedness training'
    ],
    reputationMetrics: [
      'Crisis impact assessment',
      'Recovery timeline tracking',
      'Stakeholder sentiment monitoring',
      'Brand trust rebuilding metrics',
      'Long-term reputation health'
    ],
    exercises: [
      {
        title: 'Crisis Response Plan Development',
        description: 'Develop comprehensive crisis response plan cho organization',
        difficulty: 'Nâng cao',
        materials: [
          'Risk assessment frameworks',
          'Stakeholder mapping tools',
          'Communication templates',
          'Legal consultation access'
        ],
        procedure: [
          'Conduct comprehensive risk assessment',
          'Identify potential crisis scenarios',
          'Map stakeholder impact analysis',
          'Develop response protocols cho each scenario',
          'Create communication templates',
          'Establish decision-making hierarchies',
          'Train crisis response teams',
          'Test plans với simulation exercises'
        ],
        expectedResults: 'Comprehensive crisis plan reducing response time và impact',
        solution: 'Proactive crisis preparedness minimizing damage'
      }
    ],
    realWorldApplications: [
      'Corporate reputation management',
      'Personal brand protection',
      'Government crisis communication',
      'Non-profit organization crisis handling'
    ],
    caseStudies: [
      {
        title: 'Tech Company Data Breach Response',
        organization: 'Vietnamese FinTech Startup',
        problem: 'Minor data security incident detection',
        solution: 'Immediate transparent disclosure và customer protection measures',
        impact: 'Customer trust increased due to transparent handling',
        innovations: [
          'Proactive customer notification systems',
          'Real-time security improvement communication',
          'Customer involvement trong security enhancement'
        ]
      }
    ],
    resources: [
      {
        title: 'Crisis Communication Handbook',
        url: 'https://www.prsa.org/about/leadership/board-of-directors/crisis-communications',
        type: 'Professional Guide'
      }
    ]
  }
];
