import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface GenZMarketingLessonType extends BaseLessonData {
  generationalInsights: string[];
  authenticityPrinciples: string[];
  platformPreferences: string[];
  valueAlignment: string[];
  engagementTactics: string[];
}

export const genZMarketingLessons: GenZMarketingLessonType[] = [
  {
    id: 'genz-psychology-authentic-marketing',
    title: 'Gen Z Psychology & Authentic Marketing Principles',
    description: 'Hiểu sâu về tâm lý Gen Z và áp dụng authentic marketing principles để build genuine connections với thế hệ này.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vrU6YJle6Q4',
    imageUrl: 'https://i.ytimg.com/vi/vrU6YJle6Q4/hqdefault.jpg',
    objectives: [
      'Hiểu generational characteristics và values của Gen Z',
      'Master authentic communication strategies',
      'Develop brand messaging resonates với Gen Z mindset',
      'Avoid common marketing mistakes alienate young audiences',
      'Build long-term relationships with purpose-driven consumers'
    ],
    prerequisites: [
      'Basic marketing knowledge',
      'Understanding of social media platforms',
      'Openness to challenge traditional marketing approaches'
    ],
    generationalInsights: [
      'Digital natives with 8-second attention spans',
      'Value authenticity over polished perfection',
      'Socially conscious và environmentally aware',
      'Prefer brands that align với personal values',
      'Skeptical of traditional advertising'
    ],
    authenticityPrinciples: [
      'Transparency trong business practices',
      'Admitting mistakes và showing vulnerability',
      'Supporting social causes genuinely',
      'User-generated content over brand content',
      'Behind-the-scenes storytelling'
    ],
    platformPreferences: ['TikTok', 'Instagram', 'YouTube', 'Discord', 'Twitch'],
    valueAlignment: [
      'Environmental sustainability',
      'Social justice và inclusivity',
      'Mental health awareness',
      'Economic accessibility',
      'Creative self-expression'
    ],
    engagementTactics: [
      'Meme culture integration',
      'Interactive content formats',
      'Real-time conversations',
      'Community building approaches',
      'Collaborative content creation'
    ],
    exercises: [
      {
        title: 'Gen Z Brand Audit & Strategy Development',
        description: 'Conduct comprehensive audit của current brand messaging và develop Gen Z-focused strategy',
        difficulty: 'Trung bình',
        materials: [
          'Current brand materials và messaging',
          'Gen Z research reports',
          'Social media analytics',
          'Competitor analysis tools'
        ],
        procedure: [
          'Analyze current brand perception among Gen Z audience',
          'Identify gaps between brand values và Gen Z priorities',
          'Research successful Gen Z marketing campaigns',
          'Develop authentic brand narrative aligned với values',
          'Create content guidelines cho authentic communication',
          'Test messaging với focus groups',
          'Implement feedback và iterate approach',
          'Measure engagement metrics và sentiment'
        ],
        expectedResults: 'Authentic brand strategy với 50%+ increase trong Gen Z engagement',
        solution: 'Value-based marketing approach focused on genuine connection'
      },
      {
        title: 'Authentic Crisis Response Framework',
        description: 'Develop framework cho handling mistakes và criticism authentically',
        difficulty: 'Nâng cao',
        materials: [
          'Crisis communication templates',
          'Social media monitoring tools',
          'Response time tracking systems',
          'Stakeholder communication plans'
        ],
        procedure: [
          'Identify potential crisis scenarios relevant to Gen Z',
          'Develop authentic response templates',
          'Create escalation procedures cho different severity levels',
          'Train team on authentic communication principles',
          'Establish monitoring systems cho early detection',
          'Practice response scenarios với mock crises',
          'Refine approach based on simulation feedback',
          'Document learnings for continuous improvement'
        ],
        expectedResults: 'Crisis response framework that builds trust instead of damage control',
        solution: 'Proactive authenticity preventing major reputation damage'
      }
    ],
    realWorldApplications: [
      'Fashion brands pivoting to sustainable practices',
      'Tech companies addressing privacy concerns',
      'Food brands highlighting health và environmental impact',
      'Financial services simplifying complex products'
    ],
    caseStudies: [
      {
        title: 'Sustainable Fashion Brand Success',
        organization: 'Vietnamese Sustainable Fashion Startup',
        problem: 'Struggling to differentiate from fast fashion competitors',
        solution: 'Authentic transparency về supply chain và environmental impact',
        impact: 'Brand recognition tăng 300%, customer loyalty 85% among Gen Z',
        innovations: [
          'Supply chain transparency videos',
          'Customer involvement trong product development',
          'Environmental impact tracking shared publicly'
        ]
      },
      {
        title: 'Tech Startup Mental Health Focus',
        organization: 'Vietnamese EdTech Company',
        problem: 'Low adoption among university students',
        solution: 'Pivot messaging to focus on mental health và work-life balance',
        impact: 'User adoption tăng 250% trong student demographic',
        innovations: [
          'Mental health resources integration',
          'Study-life balance content',
          'Peer support community features'
        ]
      }
    ],
    resources: [
      {
        title: 'Gen Z Consumer Behavior Research',
        url: 'https://www.mckinsey.com/industries/consumer-packaged-goods/our-insights/what-makes-gen-z-different',
        type: 'Research Report'
      },
      {
        title: 'Authentic Marketing Framework',
        url: 'https://hbr.org/2021/08/authentic-marketing-to-gen-z',
        type: 'Harvard Business Review'
      }
    ]
  },
  {
    id: 'inclusive-diverse-brand-messaging',
    title: 'Inclusive & Diverse Brand Messaging',
    description: 'Phát triển inclusive marketing strategy và diverse brand messaging resonates với Gen Z\'s values về equality và representation.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=oYxOl9mZOaE',
    imageUrl: 'https://i.ytimg.com/vi/oYxOl9mZOaE/hqdefault.jpg',
    objectives: [
      'Understand importance của representation trong marketing',
      'Develop inclusive content creation guidelines',
      'Avoid tokenism và embrace genuine diversity',
      'Create messaging appeals to diverse audiences',
      'Build inclusive brand culture internally'
    ],
    prerequisites: [
      'Cultural sensitivity awareness',
      'Commitment to learning về diversity issues',
      'Willingness to challenge existing practices'
    ],
    generationalInsights: [
      'Gen Z là most diverse generation in history',
      'Expect brands to represent diverse communities',
      'Quick to call out performative allyship',
      'Value authentic representation over surface diversity',
      'Support brands actively promoting inclusion'
    ],
    authenticityPrinciples: [
      'Representation in leadership positions',
      'Diverse perspectives trong decision making',
      'Authentic storytelling from diverse voices',
      'Consistent support beyond marketing campaigns',
      'Acknowledgment và learning từ mistakes'
    ],
    platformPreferences: ['Instagram Stories', 'TikTok', 'LinkedIn', 'Twitter', 'YouTube'],
    valueAlignment: [
      'Racial equality và justice',
      'LGBTQ+ rights và representation',
      'Gender equality và empowerment',
      'Disability inclusion và accessibility',
      'Cultural diversity celebration'
    ],
    engagementTactics: [
      'User-generated content celebrating diversity',
      'Partner với diverse creators và influencers',
      'Share employee stories và perspectives',
      'Support diverse community events',
      'Educational content about inclusion'
    ],
    exercises: [
      {
        title: 'Inclusive Marketing Campaign Development',
        description: 'Create comprehensive inclusive marketing campaign reflecting diverse perspectives',
        difficulty: 'Nâng cao',
        materials: [
          'Diversity audit của current content',
          'Community feedback collection tools',
          'Diverse creator network connections',
          'Inclusive design guidelines'
        ],
        procedure: [
          'Audit current marketing materials cho representation gaps',
          'Research target communities và their preferences',
          'Collaborate với diverse creators và community leaders',
          'Develop campaign messaging với inclusive language',
          'Create visual content featuring diverse representation',
          'Test campaign materials với focus groups',
          'Launch campaign với community engagement',
          'Monitor feedback và adjust approach accordingly'
        ],
        expectedResults: 'Inclusive campaign với 70%+ positive sentiment từ diverse communities',
        solution: 'Collaborative approach với authentic community involvement'
      }
    ],
    realWorldApplications: [
      'Global brands localizing for Vietnamese market',
      'Tech companies improving accessibility features',
      'Beauty brands expanding shade ranges',
      'Financial services serving underrepresented communities'
    ],
    caseStudies: [
      {
        title: 'Beauty Brand Inclusive Expansion',
        organization: 'International Beauty Brand Vietnam',
        problem: 'Low market penetration among diverse Vietnamese consumers',
        solution: 'Inclusive product range và diverse marketing representation',
        impact: 'Market share tăng 180% trong diverse consumer segments',
        innovations: [
          'Vietnamese skin tone research và product development',
          'Local influencer partnerships representing diverse backgrounds',
          'Cultural celebration campaigns throughout the year'
        ]
      }
    ],
    resources: [
      {
        title: 'Inclusive Marketing Guidelines',
        url: 'https://www.facebook.com/business/news/inclusive-marketing',
        type: 'Best Practices Guide'
      },
      {
        title: 'Diversity in Advertising Research',
        url: 'https://www.kantar.com/inspiration/advertising/the-business-case-for-diversity-in-advertising',
        type: 'Industry Research'
      }
    ]
  },
  {
    id: 'purpose-driven-brand-activism',
    title: 'Purpose-Driven Brand Activism & Social Impact',
    description: 'Học cách engage in meaningful brand activism và create social impact campaigns resonate với Gen Z\'s desire for change.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=4PRCDE4EWVY',
    imageUrl: 'https://i.ytimg.com/vi/4PRCDE4EWVY/hqdefault.jpg',
    objectives: [
      'Understand difference between activism và performative action',
      'Identify authentic causes aligned với brand values',
      'Develop long-term social impact strategies',
      'Create campaigns driving real change',
      'Measure social impact beyond marketing metrics'
    ],
    prerequisites: [
      'Strong brand values foundation',
      'Understanding of social issues',
      'Commitment to long-term change',
      'Resources for sustained activism'
    ],
    generationalInsights: [
      'Gen Z expects brands to take stands on issues',
      'Will boycott brands that conflict với values',
      'Value action over awareness campaigns',
      'Research brand practices beyond marketing',
      'Support brands creating measurable impact'
    ],
    authenticityPrinciples: [
      'Choose causes aligned với business model',
      'Invest resources beyond marketing budget',
      'Partner với established organizations',
      'Share progress và setbacks transparently',
      'Maintain consistency over time'
    ],
    platformPreferences: ['Instagram', 'TikTok', 'LinkedIn', 'Twitter', 'Company Blog'],
    valueAlignment: [
      'Climate action và environmental protection',
      'Social justice và human rights',
      'Education accessibility',
      'Mental health advocacy',
      'Economic equality'
    ],
    engagementTactics: [
      'Employee-led initiatives',
      'Customer participation trong causes',
      'Partnerships với NGOs và activists',
      'Educational content về issues',
      'Transparent impact reporting'
    ],
    exercises: [
      {
        title: 'Brand Activism Strategy Development',
        description: 'Develop comprehensive brand activism strategy với measurable social impact goals',
        difficulty: 'Nâng cao',
        materials: [
          'Brand values assessment',
          'Social impact research',
          'Stakeholder mapping tools',
          'Impact measurement frameworks'
        ],
        procedure: [
          'Assess brand values và authentic cause alignment',
          'Research social issues relevant to audience',
          'Identify opportunities for meaningful contribution',
          'Develop long-term commitment plan',
          'Create impact measurement framework',
          'Design campaign strategy với clear goals',
          'Partner với relevant organizations',
          'Launch initiative với transparency',
          'Monitor progress và share updates regularly'
        ],
        expectedResults: 'Brand activism strategy với measurable social impact và 90%+ audience approval',
        solution: 'Authentic long-term commitment to social change beyond marketing'
      }
    ],
    realWorldApplications: [
      'Fashion brands addressing labor practices',
      'Tech companies promoting digital literacy',
      'Food brands fighting hunger và malnutrition',
      'Financial services increasing access to banking'
    ],
    caseStudies: [
      {
        title: 'Environmental Tech Startup Impact',
        organization: 'Vietnamese Green Tech Company',
        problem: 'Need to establish credibility trong environmental space',
        solution: 'Comprehensive environmental activism including product development và community action',
        impact: 'Brand recognition as environmental leader, 500% revenue growth',
        innovations: [
          'Carbon-negative product development',
          'Community environmental education programs',
          'Partnership với environmental NGOs for tree planting'
        ]
      }
    ],
    resources: [
      {
        title: 'Brand Activism Framework',
        url: 'https://www.edelman.com/research/brand-activism',
        type: 'Research Report'
      },
      {
        title: 'Social Impact Measurement',
        url: 'https://www.bcorporation.net/en-us/certification',
        type: 'Certification Framework'
      }
    ]
  }
];
