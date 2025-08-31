import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface EnergyManagementLesson extends BaseLessonData {
  energyCategory: 'renewable' | 'smart-grid' | 'efficiency' | 'policy' | 'storage';
  techComplexity: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  vietnameseEnergyContext: string[];
  industryApplications: string[];
  sustainabilityFocus: string[];
}

export const energyManagementLessons: EnergyManagementLesson[] = [
  {
    id: 'renewable-energy-systems-design',
    title: 'Thiết Kế Hệ Thống Năng Lượng Tái Tạo',
    description: 'Học cách thiết kế, phân tích và implement các hệ thống năng lượng tái tạo với focus trên solar, wind, và hybrid systems phù hợp với điều kiện Việt Nam.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU', // Renewable Energy Systems Design
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=600&fit=crop',
    energyCategory: 'renewable',
    techComplexity: 'Nâng cao',
    objectives: [
      'Design solar photovoltaic systems cho residential và commercial applications',
      'Calculate wind energy potential và turbine sizing',
      'Optimize hybrid renewable energy systems',
      'Perform economic analysis và feasibility studies',
      'Navigate Vietnamese renewable energy regulations'
    ],
    prerequisites: [
      'Basic electrical engineering knowledge',
      'Understanding của energy fundamentals',
      'Familiarity với calculation tools'
    ],
    vietnameseEnergyContext: [
      'Vietnam\'s renewable energy targets (20% by 2030)',
      'Feed-in tariff policies và net metering',
      'Regional solar irradiation và wind patterns',
      'Grid connection requirements và standards'
    ],
    industryApplications: [
      'Rooftop solar installations',
      'Industrial energy self-sufficiency',
      'Rural electrification projects',
      'Floating solar farm development'
    ],
    sustainabilityFocus: [
      'Carbon footprint reduction strategies',
      'Life cycle assessment của renewable systems',
      'Environmental impact minimization',
      'Circular economy principles trong energy sector'
    ],
    exercises: [
      {
        title: 'Solar System Design Project',
        description: 'Design complete rooftop solar system cho Vietnamese manufacturing facility',
        difficulty: 'Nâng cao',
        materials: ['PVsyst software', 'Weather data', 'Electrical load profiles', 'Economic models'],
        procedure: [
          'Analyze facility energy consumption patterns',
          'Assess rooftop area và shading constraints',
          'Size PV array và inverter configuration',
          'Calculate energy yield và financial returns',
          'Prepare technical proposal và business case'
        ],
        expectedResults: 'Complete solar system design với technical specifications và ROI analysis',
        solution: 'Optimized system design balancing energy output, cost effectiveness, và grid integration requirements'
      }
    ],
    realWorldApplications: [
      'Commercial solar installations',
      'Microgrid development cho industrial parks',
      'Renewable energy trading strategies',
      'Energy storage integration planning'
    ],
    caseStudies: [
      {
        title: 'Dau Tieng Solar Farm',
        organization: 'Vietnam National Oil and Gas Group (PetroVietnam)',
        problem: 'Developing largest floating solar farm trong Southeast Asia',
        solution: '47.5 MW floating solar installation với advanced monitoring, grid integration, environmental protection',
        impact: 'Annual generation of 63.3 GWh, CO2 reduction of 30,000 tons/year',
        innovations: ['Floating PV technology', 'Environmental monitoring', 'Grid stabilization systems']
      }
    ],
    resources: [
      {
        title: 'Vietnam Renewable Energy Development Strategy',
        url: 'https://policy.asiapacificenergy.org/node/4340',
        type: 'Documentation'
      }
    ]
  },
  {
    id: 'smart-grid-technology-integration',
    title: 'Công Nghệ Smart Grid & Tích Hợp Hệ Thống',
    description: 'Explore advanced smart grid technologies, demand response systems, và grid modernization strategies để optimize energy distribution và consumption.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU', // Smart Grid Technology Explained
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
    energyCategory: 'smart-grid',
    techComplexity: 'Nâng cao',
    objectives: [
      'Understand smart grid architecture và communication protocols',
      'Implement demand response programs và load management',
      'Deploy smart metering infrastructure và data analytics',
      'Integrate distributed energy resources (DER)',
      'Design grid resilience và cybersecurity measures'
    ],
    prerequisites: [
      'Electrical power systems knowledge',
      'Basic understanding của communication networks',
      'Familiarity với data analysis'
    ],
    vietnameseEnergyContext: [
      'Vietnam Electricity (EVN) grid modernization plans',
      'Smart city initiatives trong major urban areas',
      'Challenges của aging grid infrastructure',
      'Integration với renewable energy sources'
    ],
    industryApplications: [
      'Utility grid modernization projects',
      'Industrial demand response programs',
      'Smart city energy management',
      'Microgrid control systems'
    ],
    sustainabilityFocus: [
      'Grid efficiency optimization',
      'Peak demand reduction strategies',
      'Renewable energy integration facilitation',
      'Energy waste minimization'
    ],
    exercises: [
      {
        title: 'Smart Grid Communication Design',
        description: 'Design communication architecture cho smart grid pilot project ở Ho Chi Minh City',
        difficulty: 'Nâng cao',
        materials: ['Grid simulation software', 'Communication protocols reference', 'Cybersecurity frameworks'],
        procedure: [
          'Map existing grid infrastructure và communication needs',
          'Select appropriate communication technologies (fiber, wireless, PLC)',
          'Design data collection và management systems',
          'Implement cybersecurity measures và protocols',
          'Develop testing và validation procedures'
        ],
        expectedResults: 'Complete communication architecture plan với security và reliability considerations',
        solution: 'Hybrid communication system balancing performance, cost, và security requirements'
      }
    ],
    realWorldApplications: [
      'AMI (Advanced Metering Infrastructure) deployment',
      'Distribution automation systems',
      'Voltage regulation và power quality management',
      'Outage management system optimization'
    ],
    caseStudies: [
      {
        title: 'Ho Chi Minh City Smart Grid Pilot',
        organization: 'EVN HCMC Power Corporation',
        problem: 'Modernizing urban electrical distribution để improve reliability và efficiency',
        solution: 'Advanced metering infrastructure, distribution automation, demand response programs, renewable integration',
        impact: 'Reduced outages by 30%, improved voltage quality, enabled 15% peak demand reduction',
        innovations: ['Advanced distribution management', 'Real-time grid monitoring', 'Consumer engagement platforms']
      }
    ],
    resources: [
      {
        title: 'Smart Grid Standards and Protocols',
        url: 'https://www.nist.gov/programs-projects/smart-grid',
        type: 'Reference'
      }
    ]
  },
  {
    id: 'energy-efficiency-management',
    title: 'Quản Lý Hiệu Quả Năng Lượng',
    description: 'Implement comprehensive energy management systems, conduct energy audits, và develop efficiency improvement strategies cho industrial và commercial facilities.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=JbuwkbIW9P8', // Energy Efficiency Management
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop',
    energyCategory: 'efficiency',
    techComplexity: 'Trung bình',
    objectives: [
      'Conduct comprehensive energy audits và assessments',
      'Implement ISO 50001 energy management systems',
      'Use energy monitoring và analysis tools',
      'Calculate ROI của energy efficiency investments',
      'Develop employee engagement programs cho energy conservation'
    ],
    prerequisites: [
      'Basic understanding của industrial processes',
      'Familiarity với data analysis tools',
      'Knowledge của cost-benefit analysis'
    ],
    vietnameseEnergyContext: [
      'Vietnam Energy Efficiency Program (VNEEP) initiatives',
      'Industrial energy consumption patterns',
      'Government incentives cho energy efficiency',
      'ASEAN energy efficiency standards'
    ],
    industryApplications: [
      'Manufacturing process optimization',
      'Building energy management systems',
      'HVAC system efficiency improvements',
      'Lighting system retrofits'
    ],
    sustainabilityFocus: [
      'Energy consumption reduction strategies',
      'Carbon emission minimization',
      'Resource optimization techniques',
      'Sustainable operations practices'
    ],
    exercises: [
      {
        title: 'Industrial Energy Audit Project',
        description: 'Conduct complete energy audit cho Vietnamese textile manufacturing facility',
        difficulty: 'Trung bình',
        materials: ['Energy audit tools', 'Power meters', 'Data loggers', 'Analysis software'],
        procedure: [
          'Collect baseline energy consumption data',
          'Identify major energy-consuming equipment và processes',
          'Measure actual energy usage patterns',
          'Analyze efficiency improvement opportunities',
          'Develop implementation plan với cost-benefit analysis'
        ],
        expectedResults: 'Comprehensive energy audit report với prioritized efficiency recommendations',
        solution: 'Detailed analysis covering lighting, motors, HVAC, process heat, và compressed air systems'
      }
    ],
    realWorldApplications: [
      'Corporate energy management programs',
      'Green building certification projects',
      'Industrial waste heat recovery',
      'Energy service company (ESCO) projects'
    ],
    caseStudies: [
      {
        title: 'Hoa Phat Steel Energy Optimization',
        organization: 'Hoa Phat Group',
        problem: 'Reducing energy costs trong steel manufacturing operations',
        solution: 'Comprehensive energy management system, waste heat recovery, process optimization, employee training',
        impact: 'Achieved 25% energy cost reduction, improved competitiveness, reduced CO2 emissions by 40,000 tons/year',
        innovations: ['Waste heat recovery systems', 'Process automation', 'Energy monitoring dashboards']
      }
    ],
    resources: [
      {
        title: 'ISO 50001 Energy Management Standard',
        url: 'https://www.iso.org/iso-50001-energy-management.html',
        type: 'Documentation'
      }
    ]
  },
  {
    id: 'energy-policy-regulations',
    title: 'Chính Sách & Quy Định Năng Lượng',
    description: 'Navigate complex landscape của energy policy, regulations, và market mechanisms trong Vietnamese energy sector và international context.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=G_q0m1bUwiI', // Energy Policy and Markets
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
    energyCategory: 'policy',
    techComplexity: 'Trung bình',
    objectives: [
      'Understand Vietnamese energy policy framework và development strategy',
      'Navigate regulatory requirements cho energy projects',
      'Analyze energy market mechanisms và pricing structures',
      'Evaluate impact của international agreements on domestic policy',
      'Develop compliance strategies cho energy businesses'
    ],
    prerequisites: [
      'Basic understanding of energy sector',
      'Familiarity với policy analysis methods'
    ],
    vietnameseEnergyContext: [
      'National Energy Development Strategy to 2030',
      'Power Development Plan VIII (PDP 8)',
      'Carbon neutrality commitments by 2050',
      'ASEAN Power Grid interconnection initiatives'
    ],
    industryApplications: [
      'Energy project development và permitting',
      'Regulatory compliance trong utility sector',
      'Energy trading và market participation',
      'Corporate renewable energy procurement'
    ],
    sustainabilityFocus: [
      'Climate change mitigation policies',
      'Just transition strategies',
      'Environmental impact assessment requirements',
      'Sustainable development goal alignment'
    ],
    exercises: [
      {
        title: 'Energy Policy Impact Analysis',
        description: 'Analyze impact của proposed renewable energy policy changes trên Vietnamese solar industry',
        difficulty: 'Trung bình',
        materials: ['Policy documents', 'Industry data', 'Economic models', 'Stakeholder analysis framework'],
        procedure: [
          'Review current policy framework và proposed changes',
          'Identify affected stakeholders và their interests',
          'Model economic impacts on different market segments',
          'Assess environmental và social implications',
          'Develop policy recommendations'
        ],
        expectedResults: 'Comprehensive policy impact assessment với stakeholder recommendations',
        solution: 'Multi-stakeholder analysis covering developers, utilities, consumers, và government perspectives'
      }
    ],
    realWorldApplications: [
      'Energy project feasibility assessment',
      'Regulatory strategy development',
      'Government relations và advocacy',
      'Investment risk assessment'
    ],
    caseStudies: [
      {
        title: 'Vietnam Solar FiT Policy Evolution',
        organization: 'Ministry of Industry and Trade (MOIT)',
        problem: 'Designing effective feed-in tariff policy để promote solar development while managing grid stability',
        solution: 'Phased FiT approach với decreasing rates, capacity caps, grid code requirements, competitive bidding transition',
        impact: 'Achieved 16.5 GW solar capacity by 2020, exceeded renewable targets, drove technology cost reductions',
        innovations: ['Adaptive policy design', 'Grid integration planning', 'Market-based transition']
      }
    ],
    resources: [
      {
        title: 'Vietnam Energy Regulatory Framework',
        url: 'https://www.iea.org/countries/vietnam',
        type: 'Reference'
      }
    ]
  },
  {
    id: 'energy-storage-battery-technology',
    title: 'Công Nghệ Lưu Trữ Năng Lượng & Pin',
    description: 'Explore cutting-edge energy storage technologies, battery systems, và grid-scale storage applications để support renewable energy integration.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=qBgnzjfmhF0', // Energy Storage Technology
    imageUrl: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=1200&h=600&fit=crop',
    energyCategory: 'storage',
    techComplexity: 'Nâng cao',
    objectives: [
      'Compare different energy storage technologies và applications',
      'Design battery energy storage systems (BESS)',
      'Analyze storage economics và value stacking opportunities',
      'Implement battery management systems và safety protocols',
      'Evaluate emerging storage technologies và market trends'
    ],
    prerequisites: [
      'Electrical engineering fundamentals',
      'Understanding của battery chemistry basics',
      'Familiarity với power system operations'
    ],
    vietnameseEnergyContext: [
      'Grid stability challenges với high renewable penetration',
      'Industrial backup power requirements',
      'EV charging infrastructure development',
      'Island grid applications trong remote areas'
    ],
    industryApplications: [
      'Grid-scale energy storage projects',
      'Commercial và industrial backup power',
      'Electric vehicle charging stations',
      'Renewable energy smoothing applications'
    ],
    sustainabilityFocus: [
      'Battery recycling và second-life applications',
      'Sustainable material sourcing',
      'Grid decarbonization support',
      'Circular economy principles'
    ],
    exercises: [
      {
        title: 'BESS Design và Economic Analysis',
        description: 'Design battery energy storage system cho Vietnamese industrial facility với solar PV integration',
        difficulty: 'Nâng cao',
        materials: ['Battery sizing tools', 'Economic modeling software', 'Grid analysis tools', 'Safety standards'],
        procedure: [
          'Analyze facility load profile và solar generation patterns',
          'Size battery system cho peak shaving và backup power',
          'Select appropriate battery technology và BMS',
          'Calculate project economics với multiple value streams',
          'Develop installation và maintenance plan'
        ],
        expectedResults: 'Complete BESS design proposal với technical specifications và business case',
        solution: 'Optimized system balancing multiple applications including peak shaving, demand charge reduction, và grid services'
      }
    ],
    realWorldApplications: [
      'Frequency regulation services cho grid operators',
      'Solar-plus-storage installations',
      'Microgrids cho critical facilities',
      'Electric bus depot charging optimization'
    ],
    caseStudies: [
      {
        title: 'Hanoi Battery Storage Pilot',
        organization: 'Vietnam National University',
        problem: 'Demonstrating grid-scale battery storage benefits trong urban distribution network',
        solution: '5 MWh lithium-ion BESS với advanced controls, grid services capabilities, research instrumentation',
        impact: 'Demonstrated peak shaving, voltage support, renewables integration, 15% grid efficiency improvement',
        innovations: ['Advanced grid integration', 'Multi-service optimization', 'Real-time control systems']
      }
    ],
    resources: [
      {
        title: 'Energy Storage Technologies Roadmap',
        url: 'https://www.irena.org/publications/2017/Oct/Electricity-storage-and-renewables-costs-and-markets',
        type: 'Research'
      }
    ]
  }
];