import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface EthicalMarketingLessonType extends BaseLessonData {
  ethicalPrinciples: string[];
  brandPurposeAreas: string[];
  transparencyMethods: string[];
  socialImpactMetrics: string[];
  stakeholderGroups: string[];
}

export const ethicalMarketingLessons: EthicalMarketingLessonType[] = [
  {
    id: 'ethical-marketing-principles-transparency',
    title: 'Ethical Marketing Principles & Brand Transparency',
    description: 'Master ethical marketing principles, build transparent brand communication và create trustworthy marketing practices.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://youtube.com/watch?v=ETHICAL_MARKETING',
    imageUrl: '/images/lessons/ethical-marketing.jpg',
    objectives: [
      'Understand ethical marketing fundamentals',
      'Implement transparent communication strategies',
      'Build trustworthy brand relationships',
      'Avoid deceptive marketing practices',
      'Create ethical decision-making frameworks'
    ],
    prerequisites: [
      'Basic marketing knowledge',
      'Understanding of consumer rights',
      'Commitment to ethical business practices'
    ],
    ethicalPrinciples: [
      'Truthfulness trong advertising claims',
      'Respect cho consumer privacy',
      'Fair pricing và value delivery',
      'Transparent terms và conditions',
      'Responsible targeting practices'
    ],
    brandPurposeAreas: [
      'Environmental sustainability',
      'Social justice advocacy',
      'Community development',
      'Education accessibility',
      'Health và wellness promotion'
    ],
    transparencyMethods: [
      'Open book pricing strategies',
      'Supply chain transparency reports',
      'Behind-the-scenes content sharing',
      'Honest mistake acknowledgment',
      'Clear communication policies'
    ],
    socialImpactMetrics: [
      'Community benefit measurements',
      'Environmental impact tracking',
      'Social justice progress indicators',
      'Educational outcome assessments',
      'Long-term societal value creation'
    ],
    stakeholderGroups: [
      'Customers và end users',
      'Employees và contractors',
      'Local communities',
      'Environmental ecosystems',
      'Future generations'
    ],
    exercises: [
      {
        title: 'Ethical Marketing Audit & Framework',
        description: 'Conduct comprehensive ethical marketing audit và develop framework',
        difficulty: 'Trung bình',
        materials: [
          'Current marketing materials review',
          'Ethical guidelines references',
          'Stakeholder feedback collection',
          'Industry best practices research'
        ],
        procedure: [
          'Audit current marketing practices cho ethical compliance',
          'Identify potential ethical concerns or gray areas',
          'Research industry ethical standards',
          'Develop comprehensive ethical guidelines',
          'Create decision-making framework cho future campaigns',
          'Train marketing team on ethical principles',
          'Implement approval processes',
          'Monitor và enforce ethical standards'
        ],
        expectedResults: 'Ethical marketing framework với 100% compliant campaigns',
        solution: 'Proactive ethical approach building long-term trust'
      }
    ],
    realWorldApplications: [
      'Consumer brands building trust',
      'Healthcare companies ensuring accuracy',
      'Financial services maintaining transparency',
      'Tech companies respecting privacy'
    ],
    caseStudies: [
      {
        title: 'Sustainable Fashion Transparency',
        organization: 'Vietnamese Eco-Fashion Brand',
        problem: 'Consumer skepticism about sustainability claims',
        solution: 'Complete supply chain transparency với verifiable data',
        impact: 'Customer trust increased 300%, premium pricing accepted',
        innovations: [
          'Blockchain supply chain tracking',
          'Real-time environmental impact reporting',
          'Worker welfare documentation'
        ]
      }
    ],
    resources: [
      {
        title: 'Ethical Marketing Guidelines',
        url: 'https://www.ama.org/the-definition-of-marketing-what-is-marketing',
        type: 'Industry Standards'
      }
    ]
  },
  {
    id: 'purpose-driven-marketing-social-impact',
    title: 'Purpose-Driven Marketing & Social Impact Campaigns',
    description: 'Create purpose-driven marketing campaigns tạo meaningful social impact và build emotional connections với audiences.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=PURPOSE_MARKETING',
    imageUrl: '/images/lessons/purpose-marketing.jpg',
    objectives: [
      'Develop authentic brand purpose',
      'Create social impact marketing campaigns',
      'Measure social và business impact',
      'Build emotional brand connections',
      'Avoid purpose-washing pitfalls'
    ],
    prerequisites: [
      'Clear brand values foundation',
      'Understanding of social issues',
      'Long-term commitment capability',
      'Stakeholder engagement experience'
    ],
    ethicalPrinciples: [
      'Authentic purpose alignment',
      'Long-term commitment demonstration',
      'Measurable impact creation',
      'Stakeholder involvement inclusion',
      'Transparent progress reporting'
    ],
    brandPurposeAreas: [
      'Education equality advancement',
      'Environmental protection initiatives',
      'Community economic development',
      'Health accessibility improvement',
      'Cultural preservation efforts'
    ],
    transparencyMethods: [
      'Impact reporting dashboards',
      'Stakeholder progress updates',
      'Challenge acknowledgment sharing',
      'Resource allocation transparency',
      'Long-term commitment documentation'
    ],
    socialImpactMetrics: [
      'Lives impacted positively',
      'Environmental improvements achieved',
      'Educational opportunities created',
      'Community development progress',
      'Systemic change contributions'
    ],
    stakeholderGroups: [
      'Beneficiary communities',
      'Partner organizations',
      'Employee volunteers',
      'Customer advocates',
      'Regulatory bodies'
    ],
    exercises: [
      {
        title: 'Purpose-Driven Campaign Development',
        description: 'Create comprehensive purpose-driven marketing campaign với measurable impact',
        difficulty: 'Nâng cao',
        materials: [
          'Purpose definition frameworks',
          'Social impact measurement tools',
          'Stakeholder engagement plans',
          'Campaign development resources'
        ],
        procedure: [
          'Define authentic brand purpose clearly',
          'Identify specific social issue to address',
          'Research stakeholder needs và preferences',
          'Develop campaign strategy với clear impact goals',
          'Create compelling storytelling approach',
          'Partner với relevant organizations',
          'Launch campaign với community involvement',
          'Monitor impact và business results',
          'Share progress transparently',
          'Scale successful elements'
        ],
        expectedResults: 'Campaign creating measurable social impact và strong brand connection',
        solution: 'Authentic purpose-driven approach resonating deeply với audiences'
      }
    ],
    realWorldApplications: [
      'Brands addressing climate change',
      'Companies promoting education access',
      'Organizations fighting inequality',
      'Businesses supporting community development'
    ],
    caseStudies: [
      {
        title: 'Education Access Initiative',
        organization: 'Vietnamese EdTech Company',
        problem: 'Digital divide limiting rural education access',
        solution: 'Free technology và internet access program for rural schools',
        impact: '50,000 students gained technology access, brand loyalty increased significantly',
        innovations: [
          'Mobile technology distribution',
          'Teacher training programs',
          'Community digital literacy initiatives'
        ]
      }
    ],
    resources: [
      {
        title: 'Purpose-Driven Marketing Guide',
        url: 'https://www.bcg.com/publications/2018/purpose-shift-from-why-to-how',
        type: 'Strategy Guide'
      }
    ]
  }
];
