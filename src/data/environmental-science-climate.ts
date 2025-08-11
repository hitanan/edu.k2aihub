import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface EnvironmentalScienceLessonType extends BaseLessonData {
  researchMethods: string[];
  environmentalFactors: string[];
  monitoringTechnologies: string[];
  solutionApproaches: string[];
  policyFrameworks: string[];
}

export const environmentalScienceLessons: EnvironmentalScienceLessonType[] = [
  {
    id: 'climate-change-environmental-monitoring',
    title: 'Climate Change Science & Environmental Monitoring',
    description: 'Understand climate change science, environmental monitoring techniques và data analysis cho environmental research.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://youtube.com/watch?v=CLIMATE_MONITORING',
    imageUrl: '/images/lessons/climate-monitoring.jpg',
    objectives: [
      'Understand climate change mechanisms và impacts',
      'Master environmental monitoring techniques',
      'Analyze climate data effectively',
      'Implement environmental assessment protocols',
      'Develop climate adaptation strategies'
    ],
    prerequisites: [
      'Basic science knowledge (chemistry, physics)',
      'Understanding of data analysis',
      'Environmental awareness',
      'Research methodology knowledge'
    ],
    researchMethods: [
      'Field sampling techniques',
      'Remote sensing applications',
      'Laboratory analysis protocols',
      'Statistical data analysis',
      'GIS mapping và spatial analysis'
    ],
    environmentalFactors: [
      'Atmospheric greenhouse gas concentrations',
      'Temperature và precipitation patterns',
      'Sea level changes',
      'Biodiversity indicators',
      'Pollution levels (air, water, soil)'
    ],
    monitoringTechnologies: [
      'Satellite remote sensing systems',
      'Automatic weather stations',
      'Water quality sensors',
      'Air pollution monitors',
      'Biodiversity tracking devices'
    ],
    solutionApproaches: [
      'Renewable energy implementation',
      'Carbon capture technologies',
      'Ecosystem restoration methods',
      'Sustainable agriculture practices',
      'Circular economy principles'
    ],
    policyFrameworks: [
      'International climate agreements',
      'National environmental regulations',
      'Local sustainability policies',
      'Corporate environmental standards',
      'Community conservation programs'
    ],
    exercises: [
      {
        title: 'Vietnamese Climate Impact Assessment',
        description: 'Conduct comprehensive climate impact assessment cho Vietnamese coastal region',
        difficulty: 'Nâng cao',
        materials: [
          'Climate data from Vietnamese meteorological stations',
          'Satellite imagery analysis tools',
          'GIS software for mapping',
          'Statistical analysis packages'
        ],
        procedure: [
          'Collect long-term climate data for target region',
          'Analyze temperature và precipitation trends',
          'Assess sea level rise impacts on coastal areas',
          'Evaluate extreme weather event frequency',
          'Map vulnerable ecosystems và communities',
          'Model future climate scenarios',
          'Assess economic và social impacts',
          'Develop adaptation recommendations',
          'Present findings to stakeholders',
          'Create actionable implementation plan'
        ],
        expectedResults: 'Comprehensive climate assessment với actionable adaptation strategies',
        solution: 'Science-based approach to climate resilience planning'
      },
      {
        title: 'Mekong Delta Environmental Study',
        description: 'Study environmental changes trong Mekong Delta using multiple monitoring approaches',
        difficulty: 'Nâng cao',
        materials: [
          'Water quality testing equipment',
          'Soil sampling tools',
          'Biodiversity survey protocols',
          'Remote sensing data access'
        ],
        procedure: [
          'Design comprehensive monitoring protocol',
          'Conduct field sampling campaigns',
          'Analyze water quality parameters',
          'Assess soil health indicators',
          'Survey biodiversity changes',
          'Integrate satellite data analysis',
          'Identify environmental stressors',
          'Correlate human activities với environmental changes',
          'Develop conservation recommendations',
          'Engage local communities trong solutions'
        ],
        expectedResults: 'Environmental health assessment với conservation action plan',
        solution: 'Integrated monitoring approach for ecosystem management'
      }
    ],
    realWorldApplications: [
      'Government environmental policy development',
      'Corporate sustainability reporting',
      'NGO conservation project planning',
      'Agricultural adaptation strategies',
      'Urban climate resilience planning'
    ],
    caseStudies: [
      {
        title: 'Ho Chi Minh City Flood Management',
        organization: 'Ho Chi Minh City Department of Natural Resources',
        problem: 'Increasing flood frequency và severity due to climate change',
        solution: 'Integrated monitoring system với early warning capabilities',
        impact: 'Flood damage reduced 40%, evacuation efficiency improved 200%',
        innovations: [
          'Real-time water level monitoring network',
          'AI-powered flood prediction models',
          'Community-based early warning systems'
        ]
      },
      {
        title: 'Vietnamese Coastal Mangrove Restoration',
        organization: 'Vietnam National Forest Protection Department',
        problem: 'Mangrove forest loss threatening coastal communities',
        solution: 'Science-based restoration program với community participation',
        impact: '50,000 hectares restored, storm surge protection improved significantly',
        innovations: [
          'Genetic diversity preservation protocols',
          'Community-based forest management',
          'Ecosystem service valuation integration'
        ]
      }
    ],
    resources: [
      {
        title: 'IPCC Climate Change Reports',
        url: 'https://www.ipcc.ch/reports',
        type: 'Scientific Reports'
      },
      {
        title: 'NASA Climate Change Resources',
        url: 'https://climate.nasa.gov',
        type: 'Educational Resources'
      },
      {
        title: 'Vietnam Climate Data Portal',
        url: 'http://www.imh.ac.vn',
        type: 'Data Repository'
      }
    ]
  },
  {
    id: 'environmental-policy-sustainable-development',
    title: 'Environmental Policy & Sustainable Development',
    description: 'Understand environmental policy frameworks và sustainable development principles cho effective environmental governance.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=ENVIRONMENTAL_POLICY',
    imageUrl: '/images/lessons/environmental-policy.jpg',
    objectives: [
      'Understand environmental policy development processes',
      'Analyze sustainable development frameworks',
      'Evaluate policy effectiveness',
      'Develop stakeholder engagement strategies',
      'Implement environmental governance solutions'
    ],
    prerequisites: [
      'Understanding of governance systems',
      'Environmental science knowledge',
      'Policy analysis experience',
      'Stakeholder management skills'
    ],
    researchMethods: [
      'Policy impact assessment',
      'Stakeholder analysis techniques',
      'Cost-benefit analysis',
      'Environmental impact evaluation',
      'Participatory research methods'
    ],
    environmentalFactors: [
      'Regulatory compliance requirements',
      'Economic development pressures',
      'Social equity considerations',
      'Technological feasibility constraints',
      'International cooperation needs'
    ],
    monitoringTechnologies: [
      'Policy compliance tracking systems',
      'Environmental indicator databases',
      'Stakeholder feedback platforms',
      'Economic impact measurement tools',
      'Social progress monitoring systems'
    ],
    solutionApproaches: [
      'Integrated policy development',
      'Multi-stakeholder collaboration',
      'Adaptive management strategies',
      'Incentive-based mechanisms',
      'Technology transfer programs'
    ],
    policyFrameworks: [
      'UN Sustainable Development Goals',
      'Paris Climate Agreement implementation',
      'ASEAN environmental cooperation',
      'Vietnamese environmental law',
      'Local sustainability ordinances'
    ],
    exercises: [
      {
        title: 'Vietnamese Green Economy Policy Analysis',
        description: 'Analyze effectiveness của Vietnamese green economy policies',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese environmental policy documents',
          'Economic impact data',
          'Stakeholder interview protocols',
          'Policy analysis frameworks'
        ],
        procedure: [
          'Review existing green economy policies',
          'Analyze policy implementation challenges',
          'Assess economic và environmental outcomes',
          'Interview key stakeholders',
          'Identify policy gaps và opportunities',
          'Benchmark với international best practices',
          'Develop policy improvement recommendations',
          'Create stakeholder engagement strategy',
          'Design implementation roadmap',
          'Present findings to policymakers'
        ],
        expectedResults: 'Policy analysis report với actionable recommendations for improvement',
        solution: 'Evidence-based policy development approach'
      }
    ],
    realWorldApplications: [
      'Government environmental planning',
      'Corporate sustainability strategy',
      'NGO advocacy campaigns',
      'International development projects',
      'Community environmental initiatives'
    ],
    caseStudies: [
      {
        title: 'Vietnam Plastic Waste Reduction Policy',
        organization: 'Vietnam Ministry of Natural Resources',
        problem: 'Increasing plastic pollution threatening marine ecosystems',
        solution: 'Comprehensive plastic reduction policy với stakeholder engagement',
        impact: 'Plastic waste reduced 35%, recycling rates increased 150%',
        innovations: [
          'Producer responsibility extended schemes',
          'Consumer behavior change campaigns',
          'Alternative material development incentives'
        ]
      }
    ],
    resources: [
      {
        title: 'UN Environment Programme',
        url: 'https://www.unep.org',
        type: 'Policy Resources'
      },
      {
        title: 'Vietnam Environmental Protection Law',
        url: 'http://www.monre.gov.vn',
        type: 'Legal Framework'
      }
    ]
  },
  {
    id: 'ecosystem-restoration-biodiversity-conservation',
    title: 'Ecosystem Restoration & Biodiversity Conservation',
    description: 'Master ecosystem restoration techniques và biodiversity conservation strategies cho environmental rehabilitation.',
    duration: '160 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=ECOSYSTEM_RESTORATION',
    imageUrl: '/images/lessons/ecosystem-restoration.jpg',
    objectives: [
      'Understand ecosystem restoration principles',
      'Implement biodiversity conservation strategies',
      'Design habitat rehabilitation projects',
      'Monitor ecosystem health indicators',
      'Engage communities trong conservation efforts'
    ],
    prerequisites: [
      'Ecology và biology knowledge',
      'Environmental assessment skills',
      'Project management experience',
      'Community engagement capabilities'
    ],
    researchMethods: [
      'Ecological baseline assessments',
      'Biodiversity monitoring protocols',
      'Habitat quality evaluations',
      'Species population surveys',
      'Ecosystem service valuations'
    ],
    environmentalFactors: [
      'Habitat fragmentation impacts',
      'Species extinction threats',
      'Ecosystem service degradation',
      'Climate change adaptation needs',
      'Human-wildlife conflict issues'
    ],
    monitoringTechnologies: [
      'Camera trap systems',
      'Acoustic monitoring devices',
      'Drone survey technologies',
      'GPS tracking systems',
      'Environmental DNA sampling'
    ],
    solutionApproaches: [
      'Active ecosystem restoration',
      'Passive regeneration support',
      'Species reintroduction programs',
      'Habitat corridor creation',
      'Community-based conservation'
    ],
    policyFrameworks: [
      'Convention on Biological Diversity',
      'CITES wildlife trade regulations',
      'National biodiversity strategies',
      'Protected area management plans',
      'Community conservation agreements'
    ],
    exercises: [
      {
        title: 'Forest Restoration Project Design',
        description: 'Design comprehensive forest restoration project cho degraded Vietnamese landscape',
        difficulty: 'Nâng cao',
        materials: [
          'Degraded forest site assessment',
          'Native species databases',
          'Restoration planning tools',
          'Community engagement frameworks'
        ],
        procedure: [
          'Conduct ecological baseline assessment',
          'Identify restoration goals và objectives',
          'Select appropriate native species',
          'Design planting và management protocols',
          'Develop monitoring systems',
          'Engage local communities',
          'Create financing sustainability plan',
          'Implement restoration activities',
          'Monitor progress và adapt approach',
          'Share lessons learned'
        ],
        expectedResults: 'Restoration project plan với 80%+ survival rate targets',
        solution: 'Science-based restoration với community participation'
      }
    ],
    realWorldApplications: [
      'National park management',
      'Corporate environmental offset programs',
      'Community conservation initiatives',
      'International conservation projects',
      'Urban biodiversity enhancement'
    ],
    caseStudies: [
      {
        title: 'Cat Tien National Park Restoration',
        organization: 'Vietnam Forest Protection Department',
        problem: 'Degraded forest areas threatening endangered species',
        solution: 'Comprehensive restoration program với community involvement',
        impact: 'Forest cover increased 25%, endangered species populations stabilized',
        innovations: [
          'Traditional ecological knowledge integration',
          'Community-based forest monitoring',
          'Ecotourism revenue sharing programs'
        ]
      }
    ],
    resources: [
      {
        title: 'Society for Ecological Restoration',
        url: 'https://www.ser.org',
        type: 'Professional Organization'
      },
      {
        title: 'Vietnam National Biodiversity Strategy',
        url: 'http://www.biodiv.gov.vn',
        type: 'National Strategy'
      }
    ]
  }
];
