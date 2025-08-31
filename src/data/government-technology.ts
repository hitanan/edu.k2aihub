import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface GovernmentTechnologyLesson extends BaseLessonData {
  governmentDomain: 'digital-government' | 'public-service-tech' | 'civic-engagement' | 'smart-city' | 'policy-tech';
  technologyCategory: string[];
  vietnameseGovernmentContext: string[];
  publicServiceApplications: string[];
  digitalTransformationAspects: string[];
}

export const governmentTechnologyLessons: GovernmentTechnologyLesson[] = [
  {
    id: 'digital-government-transformation',
    title: 'Chuyển Đổi Số Chính Phủ & E-Government',
    description: 'Comprehensive understanding của digital government transformation, e-government services implementation, và public sector digitalization trong Vietnamese government context.',
    duration: '210 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=0Bw4Tpy0JzE', // Digital Government Transformation
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    governmentDomain: 'digital-government',
    technologyCategory: [
      'E-government platforms',
      'Digital identity systems',
      'Public service portals',
      'Government data management'
    ],
    objectives: [
      'Understand digital government transformation principles',
      'Design user-centered public digital services',
      'Implement secure và accessible e-government platforms',
      'Develop digital identity và authentication systems',
      'Create integrated government service delivery models'
    ],
    prerequisites: [
      'Public administration fundamentals',
      'Basic web development knowledge',
      'Understanding of government processes'
    ],
    vietnameseGovernmentContext: [
      'Vietnam National Digital Transformation Program',
      'Ministry-level digital transformation initiatives',
      'Provincial và local government digitalization',
      'ASEAN digital government collaboration'
    ],
    publicServiceApplications: [
      'Online business registration systems',
      'Digital health record management',
      'E-tax filing và payment systems',
      'Digital citizen service portals'
    ],
    digitalTransformationAspects: [
      'Legacy system modernization strategies',
      'Citizen-centric service design',
      'Data interoperability requirements',
      'Digital security và privacy protection'
    ],
    exercises: [
      {
        title: 'E-Government Service Design Project',
        description: 'Design comprehensive e-government service for Vietnamese citizens addressing specific public need',
        difficulty: 'Nâng cao',
        materials: ['Government service mapping tools', 'UX design platforms', 'Security frameworks', 'Accessibility guidelines'],
        procedure: [
          'Identify target public service và user needs analysis',
          'Map current service delivery process và pain points',
          'Design digital service interface với accessibility standards',
          'Develop security và privacy protection measures',
          'Create implementation plan với government stakeholders'
        ],
        expectedResults: 'Comprehensive e-government service design với user journey, security architecture, và implementation roadmap',
        solution: 'Citizen-centered digital service design incorporating Vietnamese government standards, accessibility requirements, và multi-channel delivery'
      }
    ],
    realWorldApplications: [
      'National ID digitalization projects',
      'Online permit và licensing systems',
      'Digital voting và election systems',
      'Public information transparency platforms'
    ],
    caseStudies: [
      {
        title: 'Vietnam National Single Window System',
        organization: 'Vietnam National Single Window',
        problem: 'Streamlining import/export procedures và reducing bureaucratic complexity',
        solution: 'Integrated digital platform connecting multiple government agencies, automated document processing, digital signatures',
        impact: 'Reduced processing time from 21 days to 3 days, saved $500M annually in compliance costs',
        innovations: ['Multi-agency integration platform', 'Automated compliance checking', 'Digital document authentication']
      }
    ],
    resources: [
      {
        title: 'Digital Government Development Guidelines',
        url: 'https://www.oecd.org/gov/digital-government/',
        type: 'Documentation'
      }
    ]
  },
  {
    id: 'smart-city-technology-systems',
    title: 'Công Nghệ Smart City & Hệ Thống Đô Thị Thông Minh',
    description: 'Explore smart city technologies, urban IoT systems, data-driven city management, và sustainable urban development solutions.',
    duration: '225 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=7BqYIi4__Ws', // Smart City Technologies
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=600&fit=crop',
    governmentDomain: 'smart-city',
    technologyCategory: [
      'IoT sensor networks',
      'Smart traffic management',
      'Environmental monitoring',
      'Urban analytics platforms'
    ],
    objectives: [
      'Design IoT-enabled smart city infrastructure',
      'Implement urban data collection và analytics systems',
      'Develop smart traffic và transportation solutions',
      'Create environmental monitoring và sustainability systems',
      'Build citizen engagement platforms for smart cities'
    ],
    prerequisites: [
      'IoT systems understanding',
      'Data analytics fundamentals',
      'Urban planning basics'
    ],
    vietnameseGovernmentContext: [
      'Ho Chi Minh City Smart City Master Plan',
      'Hanoi smart city development initiatives',
      'Da Nang smart city pilot projects',
      'National smart city development strategy'
    ],
    publicServiceApplications: [
      'Smart parking và traffic flow optimization',
      'Air quality monitoring systems',
      'Waste management route optimization',
      'Public safety incident response systems'
    ],
    digitalTransformationAspects: [
      'Integrated city data platforms',
      'Real-time decision making systems',
      'Citizen mobile app ecosystems',
      'Public-private partnership models'
    ],
    exercises: [
      {
        title: 'Smart City Solution Architecture Design',
        description: 'Design comprehensive smart city solution addressing specific urban challenge trong Vietnamese city',
        difficulty: 'Nâng cao',
        materials: ['Smart city frameworks', 'IoT development platforms', 'Data analytics tools', 'Urban planning resources'],
        procedure: [
          'Identify specific urban challenge (traffic, environment, safety, etc.)',
          'Design IoT sensor network architecture',
          'Develop data collection và processing pipeline',
          'Create citizen interface và engagement platform',
          'Plan implementation với municipal government partners'
        ],
        expectedResults: 'Complete smart city solution architecture với technical specifications và implementation plan',
        solution: 'Integrated IoT-based solution với real-time data analytics, citizen engagement, và measurable urban improvement outcomes'
      }
    ],
    realWorldApplications: [
      'Intelligent transportation systems',
      'Smart energy grid management',
      'Digital citizen services integration',
      'Urban sustainability monitoring'
    ],
    caseStudies: [
      {
        title: 'Da Nang Smart City Initiative',
        organization: 'Da Nang City Government',
        problem: 'Integrating digital services và improving urban livability for residents và tourists',
        solution: 'Unified smart city platform, mobile citizen app, IoT environmental monitoring, digital tourism services',
        impact: 'Improved citizen satisfaction by 35%, increased tourism efficiency, reduced urban management costs by 20%',
        innovations: ['Integrated city services platform', 'Tourist-friendly digital services', 'Environmental IoT network']
      }
    ],
    resources: [
      {
        title: 'Smart City Development Framework',
        url: 'https://www.iso.org/committee/656906.html',
        type: 'Standards'
      }
    ]
  },
  {
    id: 'civic-technology-citizen-engagement',
    title: 'Công Nghệ Dân Sự & Sự Tham Gia Của Công Dân',
    description: 'Develop civic technology solutions that enhance citizen participation, government transparency, và democratic engagement trong Vietnamese political context.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU', // Civic Technology and Democracy
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    governmentDomain: 'civic-engagement',
    technologyCategory: [
      'Citizen engagement platforms',
      'Government transparency tools',
      'Digital participation systems',
      'Community feedback mechanisms'
    ],
    objectives: [
      'Design citizen engagement digital platforms',
      'Implement government transparency systems',
      'Create community feedback và reporting mechanisms',
      'Develop digital tools for democratic participation',
      'Build trust through technology-enabled transparency'
    ],
    prerequisites: [
      'Understanding of democratic processes',
      'Community engagement principles',
      'Basic political science knowledge'
    ],
    vietnameseGovernmentContext: [
      'Vietnamese political system và citizen rights',
      'Local People\'s Committees engagement methods',
      'National Assembly citizen feedback mechanisms',
      'Party-state relationship trong digital governance'
    ],
    publicServiceApplications: [
      'Citizen complaint và suggestion systems',
      'Budget transparency platforms',
      'Public consultation digital tools',
      'Community problem reporting apps'
    ],
    digitalTransformationAspects: [
      'Open government data initiatives',
      'Digital democracy tools',
      'Social media government communication',
      'Citizen-government interaction platforms'
    ],
    exercises: [
      {
        title: 'Citizen Engagement Platform Development',
        description: 'Create digital platform enhancing citizen participation trong local government decision-making',
        difficulty: 'Trung bình',
        materials: ['Civic engagement frameworks', 'Platform development tools', 'User research methodologies', 'Government collaboration guidelines'],
        procedure: [
          'Research citizen engagement challenges trong Vietnamese context',
          'Design user-friendly participation interface',
          'Develop feedback collection và analysis systems',
          'Create government response tracking mechanisms',
          'Plan pilot testing với local government partners'
        ],
        expectedResults: 'Functional civic engagement platform với clear value proposition cho citizens và government',
        solution: 'Platform enabling two-way communication between citizens và government với transparent tracking của issues và responses'
      }
    ],
    realWorldApplications: [
      'Municipal budget participatory planning',
      'Community infrastructure priority setting',
      'Environmental issue reporting systems',
      'Local government accountability monitoring'
    ],
    caseStudies: [
      {
        title: 'Ho Chi Minh City Citizen Feedback System',
        organization: 'HCMC People\'s Committee',
        problem: 'Improving citizen-government communication và increasing transparency trong local governance',
        solution: 'Multi-channel citizen feedback platform, mobile app for issue reporting, real-time response tracking, public dashboard',
        impact: 'Increased citizen engagement by 250%, improved government response time by 60%, enhanced public satisfaction',
        innovations: ['Integrated feedback channels', 'Real-time issue tracking', 'Public transparency dashboard']
      }
    ],
    resources: [
      {
        title: 'Civic Technology Handbook',
        url: 'https://www.codeforamerica.org/resources',
        type: 'Resource'
      }
    ]
  },
  {
    id: 'public-service-delivery-optimization',
    title: 'Tối Ưu Hóa Cung Cấp Dịch Vụ Công',
    description: 'Optimize public service delivery through technology, process improvement, data analytics, và citizen experience enhancement.',
    duration: '195 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=fhn6ZFh2dp4', // Public Service Innovation
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop',
    governmentDomain: 'public-service-tech',
    technologyCategory: [
      'Service delivery platforms',
      'Process automation tools',
      'Performance analytics systems',
      'Multi-channel service integration'
    ],
    objectives: [
      'Analyze và improve public service delivery processes',
      'Implement automation trong routine government services',
      'Design multi-channel service delivery systems',
      'Develop performance measurement và analytics capabilities',
      'Create seamless citizen service experiences'
    ],
    prerequisites: [
      'Process mapping knowledge',
      'Customer experience design basics',
      'Government service understanding'
    ],
    vietnameseGovernmentContext: [
      'Administrative procedure reform initiatives',
      'One-stop service center development',
      'Inter-agency collaboration requirements',
      'Service quality improvement mandates'
    ],
    publicServiceApplications: [
      'Integrated business licensing systems',
      'Healthcare service coordination platforms',
      'Education administrative systems',
      'Social service benefit delivery'
    ],
    digitalTransformationAspects: [
      'Legacy system integration strategies',
      'Data sharing between agencies',
      'Citizen identity management',
      'Service performance monitoring'
    ],
    exercises: [
      {
        title: 'Public Service Redesign Project',
        description: 'Redesign complex multi-step public service để improve efficiency và citizen satisfaction',
        difficulty: 'Nâng cao',
        materials: ['Service design tools', 'Process mapping software', 'Analytics platforms', 'User testing methodologies'],
        procedure: [
          'Map current service delivery process và identify pain points',
          'Conduct citizen journey analysis và feedback collection',
          'Design improved service delivery model với technology integration',
          'Develop implementation plan với change management strategies',
          'Create measurement framework cho service improvement'
        ],
        expectedResults: 'Redesigned public service với clear improvements trong efficiency, citizen satisfaction, và cost reduction',
        solution: 'Streamlined service process với digital automation, reduced steps, và enhanced citizen communication'
      }
    ],
    realWorldApplications: [
      'Social benefit application processing',
      'Land use certificate issuance',
      'Healthcare insurance claim processing',
      'Education enrollment systems'
    ],
    caseStudies: [
      {
        title: 'Vietnam Social Insurance Digital Transformation',
        organization: 'Vietnam Social Security',
        problem: 'Modernizing social insurance services và reducing processing time for millions of beneficiaries',
        solution: 'Digital platform integration, automated benefit calculations, mobile service access, inter-agency data sharing',
        impact: 'Reduced processing time by 70%, improved service satisfaction to 95%, eliminated duplicate data entry',
        innovations: ['Automated benefit processing', 'Mobile-first service design', 'Inter-agency integration platform']
      }
    ],
    resources: [
      {
        title: 'Public Service Innovation Guidelines',
        url: 'https://www.oecd.org/gov/innovative-government/',
        type: 'Documentation'
      }
    ]
  },
  {
    id: 'government-data-analytics-policy',
    title: 'Phân Tích Dữ Liệu Chính Phủ & Chính Sách Dựa Trên Evidence',
    description: 'Apply data analytics, evidence-based policy making, predictive modeling, và data-driven governance trong Vietnamese government context.',
    duration: '205 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU', // Government Data Analytics
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
    governmentDomain: 'policy-tech',
    technologyCategory: [
      'Government data platforms',
      'Policy analytics tools',
      'Predictive modeling systems',
      'Evidence management platforms'
    ],
    objectives: [
      'Implement government data collection và management systems',
      'Develop predictive models cho policy planning',
      'Create evidence-based policy development processes',
      'Design data visualization cho government decision makers',
      'Build integrated analytics platforms cho multi-agency insights'
    ],
    prerequisites: [
      'Data analytics fundamentals',
      'Statistics và research methods',
      'Policy development basics'
    ],
    vietnameseGovernmentContext: [
      'National statistical system modernization',
      'Economic development planning data needs',
      'Social policy monitoring requirements',
      'Regional development analytics applications'
    ],
    publicServiceApplications: [
      'Economic forecasting và planning systems',
      'Social program effectiveness monitoring',
      'Healthcare system performance analytics',
      'Education outcome prediction models'
    ],
    digitalTransformationAspects: [
      'Open data initiative implementation',
      'Cross-agency data integration',
      'Real-time policy monitoring dashboards',
      'Citizen data privacy protection'
    ],
    exercises: [
      {
        title: 'Evidence-Based Policy Analytics System',
        description: 'Develop analytics system supporting evidence-based policy making cho specific Vietnamese government challenge',
        difficulty: 'Nâng cao',
        materials: ['Analytics platforms', 'Statistical software', 'Data visualization tools', 'Policy research databases'],
        procedure: [
          'Identify policy area requiring evidence-based improvement',
          'Design data collection và integration strategy',
          'Develop analytical models và predictive capabilities',
          'Create policy maker dashboard với actionable insights',
          'Plan implementation với government decision makers'
        ],
        expectedResults: 'Comprehensive policy analytics system với predictive capabilities và decision support tools',
        solution: 'Integrated platform combining multiple data sources, advanced analytics, và user-friendly policy maker interfaces'
      }
    ],
    realWorldApplications: [
      'Budget allocation optimization models',
      'Social program impact assessment',
      'Economic development forecasting',
      'Public health trend analysis'
    ],
    caseStudies: [
      {
        title: 'Vietnam Statistics Office Data Modernization',
        organization: 'General Statistics Office of Vietnam',
        problem: 'Modernizing national statistical system để provide real-time insights cho government planning',
        solution: 'Integrated data platform, automated data collection systems, predictive analytics capabilities, policy maker dashboards',
        impact: 'Reduced data processing time by 80%, improved policy response time, enhanced economic forecasting accuracy by 40%',
        innovations: ['Real-time statistical monitoring', 'Predictive policy modeling', 'Automated data quality systems']
      }
    ],
    resources: [
      {
        title: 'Government Analytics Best Practices',
        url: 'https://www.data.gov/resources/',
        type: 'Resource'
      }
    ]
  }
];