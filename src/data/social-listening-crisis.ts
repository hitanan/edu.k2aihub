import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface SocialListeningLessonType extends BaseLessonData {
  crisisStages?: string[];
  monitoringTools?: string[];
  responseStrategies?: string[];
  communicationChannels?: string[];
  stakeholderGroups?: string[];
}

export const socialListeningLessons: SocialListeningLessonType[] = [
  {
    id: 'social-listening-fundamentals',
    title: 'Nền Tảng Social Listening Và Brand Monitoring',
    description: 'Master social listening fundamentals để monitor brand mentions, track sentiment và proactively identify opportunities và threats online.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=PjOW1trH7yg', // Social Listening Strategy for Crisis Management
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu social listening concepts và importance',
      'Setup comprehensive brand monitoring systems',
      'Analyze sentiment trends và brand perception',
      'Identify key influencers và brand advocates',
      'Track competitor activities và industry trends',
      'Create actionable insights from social data',
    ],
    prerequisites: [
      'Social media marketing basics',
      'Analytics và data interpretation',
      'Brand management understanding',
    ],
    crisisStages: ['Pre-Crisis Prevention', 'Crisis Detection', 'Response Planning', 'Active Management', 'Recovery'],
    monitoringTools: ['Hootsuite Insights', 'Brandwatch', 'Mention', 'Google Alerts', 'Social Mention'],
    responseStrategies: ['Proactive Engagement', 'Real-time Response', 'Escalation Protocols', 'Community Management', 'Influencer Outreach'],
    communicationChannels: ['Social Media', 'Press Releases', 'Email', 'Website', 'Customer Service'],
    stakeholderGroups: ['Customers', 'Employees', 'Media', 'Investors', 'Partners'],
    exercises: [
      {
        title: 'Brand Listening Setup Workshop',
        description: 'Implement comprehensive social listening system cho Vietnamese brand',
        difficulty: 'Trung bình',
        materials: ['Social Listening Tools', 'Monitoring Dashboard Templates', 'Keyword Research Tools'],
        procedure: [
          'Define brand keywords và monitoring terms',
          'Setup monitoring across multiple platforms',
          'Configure sentiment analysis parameters',
          'Create custom dashboards cho different stakeholders',
          'Establish baseline metrics và benchmarks',
          'Test alert systems và response protocols',
        ],
        expectedResults: 'Functional social listening system với real-time monitoring',
        solution: 'Comprehensive brand monitoring framework tailored for Vietnamese market',
      },
    ],
    realWorldApplications: [
      'E-commerce brands tracking customer satisfaction',
      'Financial services monitoring regulatory discussions',
      'Tourism companies managing destination reputation',
      'Technology brands tracking product feedback',
      'Healthcare organizations monitoring health discussions',
    ],
    caseStudies: [
      {
        title: 'Tiki - Vietnamese E-commerce Social Listening Success',
        organization: 'Tiki Corporation',
        problem: 'Managing customer complaints và feedback across multiple channels',
        solution: 'Comprehensive social listening system với rapid response protocols',
        impact: 'Customer satisfaction scores improved 45% within 6 months',
        innovations: ['AI-powered Sentiment Analysis', 'Multi-channel Integration', 'Proactive Customer Service'],
      },
    ],
    resources: [
      {
        title: 'Social Listening Best Practices Guide',
        url: 'https://blog.hootsuite.com/social-listening-business/',
        type: 'Guide',
      },
      {
        title: 'Brandwatch Social Listening Tools',
        url: 'https://www.brandwatch.com/products/consumer-research/',
        type: 'Tool',
      },
    ],
  },

  {
    id: 'crisis-detection-early-warning',
    title: 'Crisis Detection Và Early Warning Systems',
    description: 'Develop advanced crisis detection capabilities để identify potential issues before they escalate và implement effective early warning systems.',
    duration: '165 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=pYnEgD1r4EM', // Crisis management
    imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop',
    objectives: [
      'Identify early warning signals của potential crises',
      'Setup automated alert systems',
      'Analyze conversation patterns và anomalies',
      'Implement escalation protocols',
      'Create crisis severity assessment frameworks',
      'Build rapid response capabilities',
    ],
    prerequisites: [
      'Social listening fundamentals',
      'Data analysis skills',
      'Crisis management basics',
    ],
    crisisStages: ['Signal Detection', 'Threat Assessment', 'Alert Triggering', 'Team Activation', 'Initial Response'],
    monitoringTools: ['Advanced Analytics', 'AI Detection Systems', 'Sentiment Monitoring', 'Volume Tracking', 'Influencer Analysis'],
    responseStrategies: ['Early Intervention', 'Stakeholder Notification', 'Content Strategy Pivot', 'Resource Mobilization', 'Timeline Planning'],
    communicationChannels: ['Internal Alerts', 'Management Reports', 'Team Communication', 'Stakeholder Updates', 'Media Monitoring'],
    stakeholderGroups: ['Crisis Team', 'Management', 'PR Department', 'Customer Service', 'Legal Team'],
    exercises: [
      {
        title: 'Crisis Early Warning System Development',
        description: 'Build comprehensive early warning system cho crisis detection và response',
        difficulty: 'Nâng cao',
        materials: ['Monitoring Tools Suite', 'Alert Configuration Templates', 'Crisis Assessment Frameworks'],
        procedure: [
          'Analyze historical crisis patterns và warning signs',
          'Configure multi-level alert systems',
          'Set up automated threat assessment tools',
          'Create escalation decision trees',
          'Design rapid response activation protocols',
          'Test system effectiveness với simulated scenarios',
        ],
        expectedResults: 'Functional early warning system với proven detection accuracy',
        solution: 'AI-powered crisis detection system adapted for Vietnamese digital landscape',
      },
    ],
    realWorldApplications: [
      'Airlines monitoring safety concerns',
      'Food brands tracking contamination discussions',
      'Government agencies monitoring public sentiment',
      'Tech companies identifying security breach discussions',
      'Pharmaceutical companies tracking adverse effects reports',
    ],
    caseStudies: [
      {
        title: 'VinFast - Proactive Crisis Management',
        organization: 'VinFast Auto',
        problem: 'Managing international expansion reputation challenges',
        solution: 'Advanced social listening system với proactive response capabilities',
        impact: 'Reduced negative sentiment spread by 60% through early intervention',
        innovations: ['Multi-language Monitoring', 'Cultural Context Analysis', 'Rapid Response Teams'],
      },
    ],
    resources: [
      {
        title: 'Crisis Detection Methodologies',
        url: 'https://www.instituteforpr.org/crisis-management-planning/',
        type: 'Research',
      },
      {
        title: 'AI-Powered Crisis Detection Tools',
        url: 'https://www.talkwalker.com/blog/crisis-management',
        type: 'Technology',
      },
    ],
  },

  {
    id: 'rapid-response-communication',
    title: 'Rapid Response Communication Strategies',
    description: 'Master rapid response communication techniques để effectively manage crises trong digital age với speed, accuracy và authenticity.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=GwEjuhpo26o', // Crisis communication
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
    objectives: [
      'Develop rapid response communication protocols',
      'Create authentic crisis messaging',
      'Manage multi-channel crisis communications',
      'Balance speed với accuracy trong responses',
      'Coordinate cross-functional crisis teams',
      'Maintain brand voice during crisis situations',
    ],
    prerequisites: [
      'Crisis detection fundamentals',
      'Corporate communications experience',
      'Team coordination skills',
    ],
    crisisStages: ['Immediate Response', 'Message Crafting', 'Multi-channel Deployment', 'Monitoring Feedback', 'Iterative Adjustment'],
    monitoringTools: ['Real-time Dashboards', 'Response Tracking', 'Engagement Metrics', 'Sentiment Analysis', 'Media Monitoring'],
    responseStrategies: ['Acknowledge & Apologize', 'Take Responsibility', 'Provide Solutions', 'Show Empathy', 'Demonstrate Action'],
    communicationChannels: ['Social Media', 'Press Releases', 'Company Website', 'Email Communications', 'Direct Outreach'],
    stakeholderGroups: ['Affected Customers', 'General Public', 'Media', 'Employees', 'Investors'],
    exercises: [
      {
        title: 'Crisis Communication Simulation',
        description: 'Complete crisis communication simulation với real-time decision making',
        difficulty: 'Nâng cao',
        materials: ['Crisis Scenario Scripts', 'Communication Templates', 'Response Time Trackers'],
        procedure: [
          'Receive crisis alert notification',
          'Assemble crisis communication team',
          'Assess situation severity và impact',
          'Draft initial response messages',
          'Deploy communications across channels',
          'Monitor response effectiveness và feedback',
          'Adjust messaging based on real-time data',
          'Coordinate follow-up communications',
        ],
        expectedResults: 'Rapid, authentic crisis response delivered within critical timeframes',
        solution: 'Comprehensive crisis communication protocol với proven effectiveness metrics',
      },
    ],
    realWorldApplications: [
      'Restaurant chains managing food safety issues',
      'Technology companies addressing data breaches',
      'Transportation services handling service disruptions',
      'Retail brands managing product recalls',
      'Healthcare organizations addressing medical concerns',
    ],
    caseStudies: [
      {
        title: 'Grab - Service Disruption Response',
        organization: 'Grab Southeast Asia',
        problem: 'Major service outage during peak hours',
        solution: 'Rapid multi-channel communication với transparent updates',
        impact: 'Maintained customer trust despite service disruption',
        innovations: ['Real-time Status Updates', 'Proactive Customer Compensation', 'Transparent Problem Resolution'],
      },
    ],
    resources: [
      {
        title: 'Crisis Communication Playbook',
        url: 'https://www.prsa.org/learning/resources/crisis-communications',
        type: 'Playbook',
      },
      {
        title: 'Rapid Response Best Practices',
        url: 'https://www.edelman.com/insights/crisis-communications-best-practices',
        type: 'Best Practices',
      },
    ],
  },

  {
    id: 'reputation-recovery-management',
    title: 'Reputation Recovery Và Long-term Brand Rebuilding',
    description: 'Learn systematic approaches to recover từ reputation damage và rebuild trust through consistent, authentic long-term efforts.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=rJ4Hx0_cBLo', // Reputation management
    imageUrl: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop',
    objectives: [
      'Develop comprehensive reputation recovery plans',
      'Implement long-term trust rebuilding strategies',
      'Monitor recovery progress và public sentiment',
      'Create authentic reputation improvement campaigns',
      'Rebuild stakeholder relationships systematically',
      'Establish sustainable reputation management practices',
    ],
    prerequisites: [
      'Crisis communication experience',
      'Long-term strategic planning skills',
      'Stakeholder relationship management',
    ],
    crisisStages: ['Assessment & Planning', 'Initial Recovery Actions', 'Trust Rebuilding', 'Reputation Monitoring', 'Long-term Maintenance'],
    monitoringTools: ['Reputation Tracking', 'Sentiment Trends', 'Trust Metrics', 'Brand Health Monitors', 'Stakeholder Feedback'],
    responseStrategies: ['Consistent Messaging', 'Authentic Actions', 'Stakeholder Engagement', 'Community Investment', 'Transparency Commitment'],
    communicationChannels: ['Owned Media', 'Earned Media', 'Social Platforms', 'Community Outreach', 'Direct Stakeholder Communication'],
    stakeholderGroups: ['Customers', 'Employees', 'Community', 'Media', 'Industry Partners'],
    exercises: [
      {
        title: 'Reputation Recovery Campaign Design',
        description: 'Create comprehensive reputation recovery campaign với measurable outcomes',
        difficulty: 'Nâng cao',
        materials: ['Recovery Planning Templates', 'Trust Measurement Tools', 'Campaign Development Resources'],
        procedure: [
          'Conduct comprehensive reputation audit',
          'Identify key stakeholder concerns và priorities',
          'Develop authentic recovery messaging strategy',
          'Create consistent action-oriented initiatives',
          'Launch multi-channel recovery campaign',
          'Implement continuous monitoring systems',
          'Adjust strategies based on feedback',
          'Measure long-term recovery progress',
        ],
        expectedResults: 'Systematic reputation recovery với measurable trust improvement',
        solution: 'Integrated reputation rebuilding framework với sustained positive outcomes',
      },
    ],
    realWorldApplications: [
      'Financial institutions rebuilding trust after scandals',
      'Technology companies recovering from data breaches',
      'Food brands recovering from contamination issues',
      'Healthcare organizations addressing malpractice concerns',
      'Government agencies rebuilding public confidence',
    ],
    caseStudies: [
      {
        title: 'Samsung - Galaxy Note 7 Recovery',
        organization: 'Samsung Electronics',
        problem: 'Global reputation damage from Note 7 battery explosions',
        solution: 'Comprehensive quality improvement và transparent communication strategy',
        impact: 'Successfully recovered market position và customer trust',
        innovations: ['Enhanced Quality Assurance', 'Transparent Safety Communication', 'Customer-Centric Recovery Programs'],
      },
    ],
    resources: [
      {
        title: 'Reputation Recovery Strategies',
        url: 'https://www.weber-shandwick.com/what-we-do/reputation-management/',
        type: 'Strategy Guide',
      },
      {
        title: 'Trust Rebuilding Methodologies',
        url: 'https://www.edelman.com/trust/2023-trust-barometer',
        type: 'Research',
      },
    ],
  },

  {
    id: 'proactive-community-engagement',
    title: 'Proactive Community Engagement Và Relationship Building',
    description: 'Build strong community relationships để prevent crises và create network của advocates supporting brand during challenging times.',
    duration: '170 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=rgQvqi6aYD8', // Community engagement
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    objectives: [
      'Build proactive community engagement strategies',
      'Create authentic brand advocate networks',
      'Develop crisis prevention through relationships',
      'Foster positive brand sentiment continuously',
      'Implement community feedback loops',
      'Maintain consistent community presence',
    ],
    prerequisites: [
      'Community management basics',
      'Social media engagement skills',
      'Relationship building experience',
    ],
    crisisStages: ['Relationship Building', 'Trust Development', 'Advocacy Creation', 'Network Maintenance', 'Crisis Prevention'],
    monitoringTools: ['Community Engagement Metrics', 'Advocate Tracking', 'Relationship CRM', 'Sentiment Monitoring', 'Influence Mapping'],
    responseStrategies: ['Consistent Engagement', 'Value Creation', 'Authentic Communication', 'Community Investment', 'Advocate Empowerment'],
    communicationChannels: ['Social Communities', 'Forums', 'Events', 'Direct Outreach', 'Content Platforms'],
    stakeholderGroups: ['Community Members', 'Brand Advocates', 'Local Leaders', 'Industry Influencers', 'Customer Groups'],
    exercises: [
      {
        title: 'Community Advocacy Program Development',
        description: 'Create comprehensive program để build và maintain brand advocacy network',
        difficulty: 'Trung bình',
        materials: ['Community Mapping Tools', 'Engagement Planning Templates', 'Advocacy Program Frameworks'],
        procedure: [
          'Map existing community landscape và key players',
          'Identify potential brand advocates và influencers',
          'Develop community engagement strategy',
          'Create value-driven content và interaction plans',
          'Launch community building initiatives',
          'Nurture relationships through consistent engagement',
          'Measure community sentiment và advocacy levels',
          'Expand network through referrals và partnerships',
        ],
        expectedResults: 'Active community advocacy network supporting brand proactively',
        solution: 'Sustainable community engagement ecosystem với crisis prevention capabilities',
      },
    ],
    realWorldApplications: [
      'Local businesses building neighborhood support',
      'Tech companies engaging developer communities',
      'Consumer brands creating customer communities',
      'B2B companies building industry relationships',
      'Non-profits mobilizing supporter networks',
    ],
    caseStudies: [
      {
        title: 'Shopee - Vietnamese Community Building',
        organization: 'Shopee Vietnam',
        problem: 'Building trust trong competitive e-commerce market',
        solution: 'Comprehensive community engagement program với local influencers',
        impact: 'Achieved market leadership through strong community advocacy',
        innovations: ['Local Influencer Networks', 'Community Events', 'User-Generated Content Campaigns'],
      },
    ],
    resources: [
      {
        title: 'Community Building Best Practices',
        url: 'https://www.communityroundtable.com/research/',
        type: 'Best Practices',
      },
      {
        title: 'Social Media Community Management',
        url: 'https://blog.hootsuite.com/social-media-community-management/',
        type: 'Guide',
      },
    ],
  },

  {
    id: 'crisis-prevention-planning',
    title: 'Crisis Prevention Planning Và Risk Assessment',
    description: 'Develop comprehensive crisis prevention strategies through risk assessment, scenario planning và proactive mitigation measures.',
    duration: '160 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=y-n1RUbYq6Q', // Risk management
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    objectives: [
      'Conduct comprehensive brand risk assessments',
      'Develop crisis prevention strategies',
      'Create scenario planning frameworks',
      'Implement proactive risk mitigation measures',
      'Build crisis response preparedness',
      'Establish monitoring systems cho risk indicators',
    ],
    prerequisites: [
      'Risk management fundamentals',
      'Strategic planning experience',
      'Crisis management understanding',
    ],
    crisisStages: ['Risk Identification', 'Assessment & Prioritization', 'Prevention Planning', 'Mitigation Implementation', 'Monitoring & Review'],
    monitoringTools: ['Risk Assessment Matrices', 'Scenario Planning Tools', 'Monitoring Dashboards', 'Early Warning Systems', 'Stakeholder Feedback'],
    responseStrategies: ['Proactive Communication', 'Risk Mitigation', 'Stakeholder Engagement', 'Process Improvement', 'Continuous Monitoring'],
    communicationChannels: ['Internal Communications', 'Stakeholder Updates', 'Industry Networks', 'Regulatory Communications', 'Public Relations'],
    stakeholderGroups: ['Management Team', 'Employees', 'Customers', 'Regulators', 'Industry Partners'],
    exercises: [
      {
        title: 'Comprehensive Risk Assessment Workshop',
        description: 'Conduct thorough risk assessment và develop prevention strategies',
        difficulty: 'Nâng cao',
        materials: ['Risk Assessment Templates', 'Scenario Planning Tools', 'Prevention Strategy Frameworks'],
        procedure: [
          'Identify potential crisis scenarios specific to business',
          'Assess likelihood và impact của each risk',
          'Prioritize risks based on severity và probability',
          'Develop prevention strategies cho high-priority risks',
          'Create monitoring systems cho early risk detection',
          'Design response protocols cho each scenario',
          'Train team on prevention và response procedures',
          'Regularly update risk assessments',
        ],
        expectedResults: 'Comprehensive crisis prevention framework với proactive risk management',
        solution: 'Integrated risk assessment system với proven prevention effectiveness',
      },
    ],
    realWorldApplications: [
      'Manufacturing companies preventing safety incidents',
      'Financial institutions managing regulatory risks',
      'Healthcare organizations preventing medical errors',
      'Technology companies addressing security vulnerabilities',
      'Retail brands preventing supply chain disruptions',
    ],
    caseStudies: [
      {
        title: 'Vietjet - Safety-First Risk Management',
        organization: 'Vietjet Aviation',
        problem: 'Managing aviation safety risks trong rapidly growing market',
        solution: 'Comprehensive safety management system với proactive risk assessment',
        impact: 'Maintained excellent safety record while achieving rapid growth',
        innovations: ['Predictive Safety Analytics', 'Comprehensive Training Programs', 'Continuous Risk Monitoring'],
      },
    ],
    resources: [
      {
        title: 'Enterprise Risk Management Framework',
        url: 'https://www.coso.org/Pages/erm.aspx',
        type: 'Framework',
      },
      {
        title: 'Crisis Prevention Best Practices',
        url: 'https://www.instituteforpr.org/crisis-management-and-communications/',
        type: 'Best Practices',
      },
    ],
  },

  {
    id: 'social-media-crisis-management',
    title: 'Social Media Crisis Management Trong Digital Age',
    description: 'Master specialized techniques for managing crises trong social media environment với focus on speed, authenticity và multi-platform coordination.',
    duration: '175 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=x47EcD3d0pA', // Social media crisis
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    objectives: [
      'Navigate social media crisis dynamics',
      'Manage viral negative content effectively',
      'Coordinate responses across multiple platforms',
      'Engage với critics constructively',
      'Leverage positive voices during crises',
      'Monitor real-time sentiment changes',
    ],
    prerequisites: [
      'Social media marketing proficiency',
      'Crisis communication experience',
      'Multi-platform management skills',
    ],
    crisisStages: ['Viral Detection', 'Platform Assessment', 'Multi-channel Response', 'Engagement Management', 'Recovery Coordination'],
    monitoringTools: ['Social Media Dashboards', 'Viral Content Tracking', 'Influencer Monitoring', 'Hashtag Analysis', 'Platform-Specific Analytics'],
    responseStrategies: ['Platform-Specific Messaging', 'Influencer Engagement', 'Community Mobilization', 'Content Strategy Pivot', 'Authentic Storytelling'],
    communicationChannels: ['Facebook', 'Instagram', 'YouTube', 'TikTok', 'LinkedIn'],
    stakeholderGroups: ['Social Media Users', 'Influencers', 'Brand Community', 'Media', 'Platform Moderators'],
    exercises: [
      {
        title: 'Multi-Platform Crisis Response Simulation',
        description: 'Handle complex social media crisis across multiple platforms simultaneously',
        difficulty: 'Nâng cao',
        materials: ['Platform-Specific Response Templates', 'Crisis Scenario Scripts', 'Real-time Monitoring Tools'],
        procedure: [
          'Detect crisis emergence on primary platform',
          'Assess spread potential across other platforms',
          'Develop platform-specific response strategies',
          'Coordinate simultaneous responses',
          'Engage với key influencers và advocates',
          'Monitor sentiment changes across platforms',
          'Adjust messaging based on real-time feedback',
          'Coordinate recovery phase across all channels',
        ],
        expectedResults: 'Effective multi-platform crisis management với controlled narrative',
        solution: 'Integrated social media crisis response framework với platform optimization',
      },
    ],
    realWorldApplications: [
      'Brands managing viral negative content',
      'Celebrities addressing public relations crises',
      'Companies responding to social media boycotts',
      'Organizations managing misinformation spread',
      'Politicians addressing controversy trong digital space',
    ],
    caseStudies: [
      {
        title: 'Momo - Digital Wallet Security Crisis Response',
        organization: 'M_Service (Momo)',
        problem: 'Security concerns spreading rapidly on social media',
        solution: 'Immediate transparency, security demonstration, và user education',
        impact: 'Maintained user trust và continued growth despite initial concerns',
        innovations: ['Real-time Security Updates', 'User Education Campaigns', 'Transparent Communication Strategy'],
      },
    ],
    resources: [
      {
        title: 'Social Media Crisis Management Guide',
        url: 'https://sproutsocial.com/insights/social-media-crisis-management/',
        type: 'Guide',
      },
      {
        title: 'Platform-Specific Crisis Response Strategies',
        url: 'https://blog.hootsuite.com/social-media-crisis-management/',
        type: 'Strategy Guide',
      },
    ],
  },
];
