import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface FutureThinkingLessonType extends BaseLessonData {
  scenarioMethods: string[];
  futuringTechniques: Array<{
    name: string;
    description: string;
    timeHorizon: string;
    bestUseCases: string[];
    steps: string[];
  }>;
  trendAnalysisFrameworks: string[];
  uncertaintyFactors: string[];
}

export const futureThinkingLessons: FutureThinkingLessonType[] = [
  {
    id: 'futures-thinking-fundamentals',
    title: 'Cơ Bản Tư Duy Tương Lai',
    description: 'Học cách tư duy về tương lai một cách có hệ thống, từ trend analysis đến scenario planning cho quyết định tốt hơn.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=sNNJKaWkA5M', // Futures Thinking and Strategic Planning
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu về futures thinking và strategic foresight',
      'Nắm vững các phương pháp phân tích trend',
      'Phát triển kỹ năng thinking về multiple futures',
      'Áp dụng foresight vào planning cá nhân và professional'
    ],
    prerequisites: [
      'Có khả năng critical thinking cơ bản',
      'Quan tâm đến trends và changes trong xã hội'
    ],
    scenarioMethods: [
      'Cross-Impact Analysis',
      'Morphological Analysis', 
      'Trend Impact Analysis',
      'Wild Cards và Weak Signals'
    ],
    trendAnalysisFrameworks: [
      'STEEP Analysis (Social, Technological, Economic, Environmental, Political)',
      'Three Horizons Framework',
      'Hype Cycle Analysis',
      'S-Curve Technology Adoption'
    ],
    uncertaintyFactors: [
      'Technological disruption',
      'Social và cultural shifts',
      'Economic cycles và crises',
      'Environmental changes',
      'Political instability',
      'Demographic transitions'
    ],
    futuringTechniques: [
      {
        name: 'Scenario Planning',
        description: 'Tạo ra multiple plausible futures để test strategies',
        timeHorizon: '5-20 năm',
        bestUseCases: ['Strategic planning', 'Risk assessment', 'Innovation planning'],
        steps: [
          'Xác định focal question',
          'Identify key driving forces',
          'Develop scenario frameworks',
          'Build detailed scenarios',
          'Test implications',
          'Monitor indicators'
        ]
      },
      {
        name: 'Backcasting',
        description: 'Bắt đầu từ desired future và work backwards',
        timeHorizon: '10-50 năm',
        bestUseCases: ['Sustainability planning', 'Vision achievement', 'System transformation'],
        steps: [
          'Define desired future state',
          'Identify major milestones',
          'Map required changes',
          'Analyze barriers',
          'Develop action pathways',
          'Create implementation timeline'
        ]
      },
      {
        name: 'Trend Extrapolation',
        description: 'Project current trends into future với modifications',
        timeHorizon: '1-10 năm',
        bestUseCases: ['Market forecasting', 'Technology roadmapping', 'Demographic planning'],
        steps: [
          'Collect historical data',
          'Identify trend patterns',
          'Analyze driving factors',
          'Project trajectories',
          'Account for inflection points',
          'Validate assumptions'
        ]
      }
    ],
    exercises: [
      {
        title: 'Personal Future Scenario Planning',
        description: 'Tạo scenarios cho career path trong 5-10 năm tới',
        difficulty: 'Trung bình',
        materials: ['Trend research tools', 'Scenario template', 'Career assessment'],
        procedure: [
          'Analyze current trends affecting your industry',
          'Identify 2 key uncertainties (e.g., AI impact, remote work)',
          'Create 4 scenarios using 2x2 matrix',
          'Develop detailed narratives cho mỗi scenario',
          'Identify skills needed trong mỗi scenario',
          'Create adaptive strategy across scenarios'
        ],
        expectedResults: 'Robust career strategy prepared cho multiple futures',
        solution: 'Focus on transferable skills và adaptability, maintain portfolio approach to career development.'
      },
      {
        title: 'Vietnam 2040 Scenario Workshop',
        description: 'Collaborative scenario building cho Vietnam\'s future',
        difficulty: 'Nâng cao',
        materials: ['Research về Vietnam trends', 'Group collaboration tools'],
        procedure: [
          'Research Vietnam\'s current major trends (economics, demographics, technology)',
          'Identify top 3 uncertainties facing Vietnam',
          'Form teams to develop different scenarios',
          'Build detailed 2040 scenarios',
          'Present scenarios với implications',
          'Identify early warning indicators'
        ],
        expectedResults: 'Comprehensive understanding của Vietnam\'s possible futures',
        solution: 'Consider interactions between trends, account for global influences, focus on actionable insights.'
      },
      {
        title: 'Technology Impact Assessment',
        description: 'Assess potential impact của emerging technology',
        difficulty: 'Nâng cao',
        materials: ['Technology research', 'Impact assessment framework'],
        procedure: [
          'Choose một emerging technology (quantum computing, synthetic biology, etc.)',
          'Map current state và development trajectory',
          'Identify potential applications và use cases',
          'Analyze societal impacts (positive và negative)',
          'Develop adoption scenarios',
          'Recommend preparation strategies'
        ],
        expectedResults: 'Comprehensive technology foresight analysis',
        solution: 'Consider non-linear adoption patterns, second-order effects, và ethical implications.'
      }
    ],
    realWorldApplications: [
      'Strategic planning trong business',
      'Career development và skill planning',
      'Investment decisions với long-term perspective',
      'Policy making và governance',
      'Innovation management và R&D prioritization'
    ],
    caseStudies: [
      {
        title: 'Shell\'s Energy Scenarios',
        organization: 'Royal Dutch Shell',
        problem: 'Cần strategic direction trong volatile energy market',
        solution: '50+ years của scenario planning for energy futures',
        impact: 'Better preparedness cho oil crises, renewable transition',
        innovations: ['Multi-decade scenario planning', 'Global energy modeling', 'Stakeholder engagement', 'Adaptive strategy development']
      },
      {
        title: 'Singapore\'s Smart Nation Vision',
        organization: 'Singapore Government',
        problem: 'Planning for future challenges trong small island state',
        solution: 'Comprehensive foresight program và scenario planning',
        impact: 'Successful digital transformation và future preparedness',
        innovations: ['Whole-of-government foresight', 'Citizen engagement', 'Technology integration', 'Adaptive governance']
      }
    ],
    resources: [
      {
        title: 'World Future Society',
        url: 'https://www.worldfuture.org',
        type: 'Community'
      },
      {
        title: 'Institute for the Future',
        url: 'https://www.iftf.org',
        type: 'Research'
      },
      {
        title: 'Global Business Network',
        url: 'https://www.gbn.com',
        type: 'Consulting'
      }
    ]
  },
  {
    id: 'weak-signals-trend-spotting',
    title: 'Phát Hiện Tín Hiệu Yếu và Xu Hướng',
    description: 'Học cách nhận diện early signals của change và emerging trends trước khi chúng trở nên mainstream.',
    duration: '90 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=wJgla4vPVvs', // Trend Spotting and Weak Signals
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu về weak signals và early indicators',
      'Phát triển skills để spot emerging trends',
      'Tạo personal trend monitoring system',
      'Convert insights thành actionable intelligence'
    ],
    prerequisites: [
      'Đã hoàn thành Cơ Bản Tư Duy Tương Lai',
      'Có habit đọc news và follow trends'
    ],
    scenarioMethods: [
      'Environmental Scanning',
      'Signal Detection Algorithms',
      'Pattern Recognition',
      'Network Analysis'
    ],
    trendAnalysisFrameworks: [
      'VERGE Framework (Values, Energy, Resources, Governance, Education)',
      'Emerging Issues Analysis',
      'Technology Readiness Assessment',
      'Social Network Trend Analysis'
    ],
    uncertaintyFactors: [
      'Information noise và misinformation',
      'Confirmation bias trong trend interpretation',
      'Linear thinking về non-linear changes',
      'Cultural blind spots'
    ],
    futuringTechniques: [
      {
        name: 'Environmental Scanning',
        description: 'Systematic monitoring của external environment for changes',
        timeHorizon: 'Continuous',
        bestUseCases: ['Strategic intelligence', 'Innovation opportunities', 'Risk early warning'],
        steps: [
          'Define scanning domains',
          'Identify information sources',
          'Create monitoring systems',
          'Filter và categorize signals',
          'Analyze patterns',
          'Report insights'
        ]
      },
      {
        name: 'Delphi Method',
        description: 'Expert consensus building về future developments',
        timeHorizon: '6 months - 5 years',
        bestUseCases: ['Expert forecasting', 'Uncertainty reduction', 'Priority setting'],
        steps: [
          'Select expert panel',
          'Design questionnaire rounds',
          'Collect initial responses',
          'Provide feedback',
          'Iterate until consensus',
          'Synthesize findings'
        ]
      }
    ],
    exercises: [
      {
        title: 'Personal Trend Radar',
        description: 'Build personal system để monitor trends relevant to your goals',
        difficulty: 'Trung bình',
        materials: ['RSS feeds', 'Social media monitoring', 'News aggregators'],
        procedure: [
          'Define your interests và focus areas',
          'Identify diverse information sources',
          'Set up automated monitoring systems',
          'Create filtering và categorization system',
          'Weekly trend review routine',
          'Monthly pattern analysis'
        ],
        expectedResults: 'Personalized early warning system for relevant trends',
        solution: 'Balance automation with human insight, diversify sources, focus on quality over quantity.'
      },
      {
        title: 'Weak Signal Investigation',
        description: 'Deep dive into một weak signal to assess potential impact',
        difficulty: 'Nâng cao',
        materials: ['Research tools', 'Analysis framework'],
        procedure: [
          'Identify một interesting weak signal',
          'Research historical context',
          'Map stakeholders và interests',
          'Analyze driving forces',
          'Assess potential trajectories',
          'Estimate timeline và impact'
        ],
        expectedResults: 'Comprehensive assessment của weak signal potential',
        solution: 'Look for convergence with other signals, consider network effects, validate với multiple sources.'
      }
    ],
    realWorldApplications: [
      'Innovation opportunity identification',
      'Investment timing và market entry',
      'Risk management và contingency planning',
      'Product development roadmapping',
      'Competitive intelligence'
    ],
    caseStudies: [
      {
        title: 'Netflix và Streaming Trend',
        organization: 'Netflix',
        problem: 'Transition từ DVD rental sang digital future',
        solution: 'Early recognition của streaming potential',
        impact: 'Market leadership trong streaming industry',
        innovations: ['Data-driven trend analysis', 'Scenario-based planning', 'Bold strategic pivots', 'Technology adoption foresight']
      }
    ],
    resources: [
      {
        title: 'Trend Hunter',
        url: 'https://www.trendhunter.com',
        type: 'Platform'
      },
      {
        title: 'Futures Platform',
        url: 'https://www.futuresplatform.com',
        type: 'Tools'
      }
    ]
  },
  {
    id: 'personal-strategic-planning',
    title: 'Kế Hoạch Chiến Lược Cá Nhân',
    description: 'Áp dụng strategic foresight vào personal development, career planning và life design với perspective dài hạn.',
    duration: '110 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=LO1mTELoj6o', // Personal Strategic Planning
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop',
    objectives: [
      'Apply futures thinking vào personal planning',
      'Tạo adaptive life strategy',
      'Develop antifragile personal systems',
      'Build capability for continuous reinvention'
    ],
    prerequisites: [
      'Đã hoàn thành các lessons trước',
      'Có motivation for long-term personal development'
    ],
    scenarioMethods: [
      'Personal SWOT Future Analysis',
      'Life Path Scenario Building',
      'Skills Portfolio Planning',
      'Network Effect Analysis'
    ],
    trendAnalysisFrameworks: [
      'Personal Future Wheel',
      'Life Domain Analysis',
      'Capability Building Roadmap',
      'Opportunity Cost Assessment'
    ],
    uncertaintyFactors: [
      'Career disruption risk',
      'Technology replacement threats',
      'Economic volatility',
      'Health và life changes',
      'Family obligations',
      'Geographic mobility needs'
    ],
    futuringTechniques: [
      {
        name: 'Life Design Thinking',
        description: 'Apply design thinking principles to life planning',
        timeHorizon: '1-10 years',
        bestUseCases: ['Career transitions', 'Life purpose discovery', 'Major decisions'],
        steps: [
          'Empathize với future self',
          'Define desired outcomes',
          'Ideate possible paths',
          'Prototype experiences',
          'Test assumptions',
          'Iterate strategy'
        ]
      },
      {
        name: 'Optionality Strategy',
        description: 'Build multiple options to benefit từ uncertainty',
        timeHorizon: '2-20 years',
        bestUseCases: ['Risk management', 'Opportunity maximization', 'Flexibility preservation'],
        steps: [
          'Identify key uncertainties',
          'Map potential opportunities',
          'Build enabling capabilities',
          'Maintain multiple options',
          'Monitor triggering events',
          'Exercise options optimally'
        ]
      }
    ],
    exercises: [
      {
        title: 'Future Self Visioning',
        description: 'Create detailed vision của desired future self trong multiple scenarios',
        difficulty: 'Cơ bản',
        materials: ['Vision board tools', 'Reflection questions'],
        procedure: [
          'Imagine yourself 10 years từ now',
          'Describe ideal day trong detail',
          'Identify required capabilities',
          'Map current gaps',
          'Design development pathway',
          'Create accountability system'
        ],
        expectedResults: 'Clear vision và actionable development plan',
        solution: 'Be specific và vivid, focus on intrinsic values, plan for multiple scenarios.'
      },
      {
        title: 'Antifragile Career Design',
        description: 'Design career strategy that benefits từ volatility',
        difficulty: 'Nâng cao',
        materials: ['Industry analysis', 'Skills assessment'],
        procedure: [
          'Analyze career disruption risks',
          'Identify antifragile career elements',
          'Build diverse skill portfolio',
          'Create multiple income streams',
          'Develop adaptive capacity',
          'Test resilience regularly'
        ],
        expectedResults: 'Robust career strategy for uncertain future',
        solution: 'Focus on transferable skills, build strong network, maintain learning mindset.'
      }
    ],
    realWorldApplications: [
      'Career transition planning',
      'Skill development prioritization',
      'Financial planning với uncertainty',
      'Relationship và family planning',
      'Health và wellness long-term strategy'
    ],
    caseStudies: [
      {
        title: 'Reid Hoffman\'s Career Strategy',
        organization: 'Reid Hoffman (LinkedIn founder)',
        problem: 'Navigate uncertain tech industry career',
        solution: 'Portfolio approach with multiple bets và optionality',
        impact: 'Successful entrepreneur và investor',
        innovations: ['Network-based strategy', 'Platform thinking', 'Optionality preservation', 'Learning orientation']
      }
    ],
    resources: [
      {
        title: 'Designing Your Life',
        url: 'https://designingyour.life',
        type: 'Book/Website'
      },
      {
        title: 'Antifragile by Nassim Taleb',
        url: 'https://www.penguinrandomhouse.com/books/176227/antifragile-by-nassim-nicholas-taleb',
        type: 'Book'
      }
    ]
  }
];

export default futureThinkingLessons;