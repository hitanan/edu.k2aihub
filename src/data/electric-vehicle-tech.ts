export interface ElectricVehicleLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  vehicleType?: string;
  technology?: string;
  imageUrl?: string;
  videoUrl?: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Array<{
    title: string;
    description: string;
    difficulty: string;
    components?: string[];
    tools?: string[];
    procedure?: string[];
    expectedResults?: string;
    solution?: string;
  }>;
  realWorldApplications: string[];
  caseStudies?: Array<{
    title: string;
    company: string;
    challenge: string;
    solution: string;
    impact: string;
    technologies?: string[];
  }>;
  resources?: Array<{
    title: string;
    url: string;
    type: string;
  }>;
  technologies?: string[];
}

export const electricVehicleLessons: ElectricVehicleLesson[] = [
  {
    id: 'ev-powertrain-battery-fundamentals',
    title: 'EV Powertrain & Battery Technology Fundamentals',
    description: 'Comprehensive understanding về electric vehicle powertrain systems, battery technologies, và energy management. Focus trên lithium-ion batteries, charging systems và thermal management.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    vehicleType: 'Electric Vehicle',
    objectives: [
      'Understand EV powertrain architecture và components',
      'Master battery chemistry: lithium-ion, solid-state, future technologies',
      'Design battery management systems (BMS) cho safety và performance',
      'Analyze charging systems: AC/DC, fast charging, wireless charging'
    ],
    prerequisites: [
      'Basic electrical engineering knowledge',
      'Understanding của automotive systems',
      'Chemistry fundamentals',
      'Power electronics basics'
    ],
    exercises: [
      {
        title: 'VinFast VF8 Battery System Analysis',
        description: 'Analyze VinFast VF8 battery pack design và compare với Tesla Model Y battery technology.',
        difficulty: 'Trung bình',
        components: ['Battery cells', 'BMS modules', 'Cooling system', 'Safety systems'],
        tools: ['Battery simulation software', 'Thermal analysis tools', 'Electrical testing equipment'],
        procedure: [
          'Study VinFast VF8 technical specifications và battery architecture',
          'Compare lithium iron phosphate (LFP) vs nickel-based battery chemistry',
          'Analyze thermal management system design',
          'Calculate energy density, power density, và charging capabilities',
          'Evaluate safety features: thermal runaway protection, crash safety',
          'Compare với international competitors (Tesla, BYD, Hyundai)'
        ],
        expectedResults: 'Comprehensive battery system analysis với recommendations cho optimization',
        solution: 'VinFast uses LFP batteries cho safety và cost, trade-off energy density cho Vietnamese market needs'
      },
      {
        title: 'EV Charging Infrastructure Design cho Vietnam',
        description: 'Design comprehensive EV charging network cho Vietnamese cities considering grid constraints.',
        difficulty: 'Nâng cao',
        components: ['DC fast chargers', 'AC Level 2 chargers', 'Grid integration', 'Payment systems'],
        tools: ['Grid simulation software', 'GIS mapping', 'Load flow analysis'],
        procedure: [
          'Analyze Vietnamese electrical grid capacity và limitations',
          'Map optimal charging station locations trong major cities',
          'Design charging network architecture với different power levels',
          'Calculate grid impact và load management strategies',
          'Integrate renewable energy sources (solar canopies)',
          'Design user experience và payment integration systems'
        ],
        expectedResults: 'Scalable EV charging infrastructure plan cho Vietnamese market',
        solution: 'Hybrid AC/DC charging network với smart grid integration và renewable energy integration'
      }
    ],
    realWorldApplications: [
      'VinFast electric vehicle manufacturing và battery development',
      'EV charging infrastructure deployment trong Vietnamese cities',
      'Electric bus systems cho public transportation',
      'Electric motorbike development cho Vietnamese market',
      'Energy storage systems using EV batteries'
    ],
    caseStudies: [
      {
        title: 'VinFast Global EV Strategy',
        company: 'VinGroup',
        challenge: 'Develop competitive electric vehicles cho global market từ Vietnam base',
        solution: 'Vertical integration strategy: batteries, manufacturing, charging infrastructure',
        impact: 'First Vietnamese automotive brand to enter US market với EVs',
        technologies: ['LFP Batteries', 'Advanced Manufacturing', 'Charging Network', 'Software Integration']
      }
    ],
    resources: [
      {
        title: 'VinFast Technical Specifications',
        url: 'https://vinfastauto.com/',
        type: 'Industry Documentation'
      }
    ],
    technologies: ['Lithium-ion Batteries', 'Battery Management Systems', 'Power Electronics', 'Thermal Management']
  },
  {
    id: 'autonomous-driving-systems',
    title: 'Autonomous Driving & Advanced Driver Assistance Systems',
    description: 'Advanced autonomous vehicle technology từ ADAS đến full self-driving systems. Computer vision, sensor fusion, decision making cho Vietnamese traffic conditions.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    vehicleType: 'Autonomous Vehicle',
    objectives: [
      'Master ADAS technologies: adaptive cruise control, lane keeping, emergency braking',
      'Understand sensor technologies: cameras, LiDAR, radar, ultrasonic',
      'Implement computer vision algorithms cho object detection và tracking',
      'Design decision-making systems cho complex traffic scenarios'
    ],
    prerequisites: [
      'Computer vision và machine learning knowledge',
      'Programming skills Python/C++',
      'Understanding về automotive systems',
      'Signal processing fundamentals'
    ],
    exercises: [
      {
        title: 'Vietnamese Traffic Pattern Recognition System',
        description: 'Develop computer vision system để recognize và predict Vietnamese traffic patterns including motorbikes.',
        difficulty: 'Nâng cao',
        components: ['Computer vision models', 'Sensor fusion algorithms', 'Decision trees', 'Real-time processing'],
        tools: ['OpenCV', 'TensorFlow', 'ROS (Robot Operating System)', 'Simulation environments'],
        procedure: [
          'Collect và annotate Vietnamese traffic video data',
          'Train object detection models cho cars, motorbikes, pedestrians',
          'Implement multi-object tracking algorithms',
          'Develop prediction models cho vehicle behavior',
          'Create decision-making logic cho autonomous navigation',
          'Test trong simulated Vietnamese traffic environments'
        ],
        expectedResults: 'Autonomous driving system capable of navigating Vietnamese traffic conditions',
        solution: 'Use ensemble of vision models với rule-based systems tuned cho Vietnamese traffic chaos'
      },
      {
        title: 'Smart Traffic Management Integration',
        description: 'Design V2X (Vehicle-to-Everything) system cho smart traffic management trong Vietnamese cities.',
        difficulty: 'Nâng cao',
        components: ['V2V communication', 'V2I infrastructure', 'Traffic optimization', 'Emergency response'],
        tools: ['5G/LTE-V communication', 'Edge computing', 'Traffic simulation', 'IoT sensors'],
        procedure: [
          'Design V2X communication protocols cho Vietnamese infrastructure',
          'Implement traffic light optimization algorithms',
          'Create emergency vehicle priority systems',
          'Develop congestion prediction và routing optimization',
          'Integrate với existing traffic management systems',
          'Test scalability và real-world deployment scenarios'
        ],
        expectedResults: 'Integrated smart traffic system reducing congestion và improving safety',
        solution: 'Hierarchical V2X system với cloud-edge computing và AI-powered traffic optimization'
      }
    ],
    realWorldApplications: [
      'VinFast autonomous driving development cho Vietnamese roads',
      'Smart traffic management trong Ho Chi Minh City và Hanoi',
      'Autonomous delivery systems cho e-commerce',
      'Self-driving public transportation systems',
      'Emergency vehicle routing optimization'
    ],
    caseStudies: [
      {
        title: 'VinAI Autonomous Driving Research',
        company: 'VinGroup AI',
        challenge: 'Develop autonomous driving technology adapted cho chaotic Vietnamese traffic',
        solution: 'AI systems trained specifically on Vietnamese traffic data với cultural behavior modeling',
        impact: 'Advanced driver assistance features deployed in VinFast vehicles',
        technologies: ['Computer Vision', 'Deep Learning', 'Sensor Fusion', 'Edge AI']
      }
    ],
    resources: [
      {
        title: 'VinAI Research Publications',
        url: 'https://www.vinai.io/',
        type: 'Research Papers'
      }
    ],
    technologies: ['Computer Vision', 'LiDAR', 'Radar', 'Sensor Fusion', 'Machine Learning', 'V2X Communication']
  },
  {
    id: 'charging-infrastructure-grid-integration',
    title: 'Charging Infrastructure & Smart Grid Integration',
    description: 'Comprehensive EV charging infrastructure design, grid integration, smart charging, và Vehicle-to-Grid (V2G) technology cho sustainable energy ecosystem.',
    duration: '170 phút',
    difficulty: 'Nâng cao',
    vehicleType: 'Infrastructure',
    objectives: [
      'Design scalable EV charging infrastructure cho Vietnamese cities',
      'Implement smart charging algorithms cho grid load balancing',
      'Understand V2G technology và bidirectional energy flow',
      'Integrate renewable energy sources với charging networks'
    ],
    prerequisites: [
      'Electrical power systems knowledge',
      'Understanding của renewable energy systems',
      'Power electronics và grid fundamentals',
      'Energy management systems'
    ],
    exercises: [
      {
        title: 'Smart Charging Network cho Ho Chi Minh City',
        description: 'Design comprehensive smart charging network với load balancing và renewable integration.',
        difficulty: 'Nâng cao',
        components: ['Fast DC chargers', 'Smart controllers', 'Grid interface', 'Solar integration'],
        tools: ['Power system simulation', 'Load forecasting models', 'Optimization algorithms'],
        procedure: [
          'Analyze current electrical grid capacity trong HCMC',
          'Map optimal charging station locations based on traffic patterns',
          'Design load balancing algorithms cho peak demand management',
          'Integrate rooftop solar và battery storage systems',
          'Implement dynamic pricing strategies',
          'Create grid stability monitoring và emergency response protocols'
        ],
        expectedResults: 'Scalable smart charging network supporting 100,000+ EVs without grid overload',
        solution: 'Hierarchical smart charging với predictive load management và distributed renewable integration'
      },
      {
        title: 'Vehicle-to-Grid Implementation Study',
        description: 'Develop V2G system allowing EVs to provide grid services và energy storage.',
        difficulty: 'Nâng cao',
        components: ['Bidirectional chargers', 'Grid services', 'Energy trading', 'Fleet management'],
        tools: ['Grid simulation software', 'Energy market modeling', 'Fleet optimization'],
        procedure: [
          'Design bidirectional charging infrastructure',
          'Develop algorithms cho grid frequency regulation using EVs',
          'Create energy trading marketplace cho V2G services',
          'Implement fleet management systems cho commercial vehicles',
          'Analyze economic benefits cho EV owners và grid operators',
          'Test grid stability và emergency backup scenarios'
        ],
        expectedResults: 'V2G system providing grid services while optimizing EV owner benefits',
        solution: 'Multi-stakeholder V2G platform với AI-powered optimization và fair compensation mechanisms'
      }
    ],
    realWorldApplications: [
      'National EV charging infrastructure development',
      'Smart grid modernization programs',
      'Commercial fleet electrification',
      'Renewable energy integration projects',
      'Emergency power backup systems using EVs'
    ],
    caseStudies: [
      {
        title: 'Vietnam National EV Charging Network',
        company: 'EVN (Vietnam Electricity)',
        challenge: 'Build national EV charging infrastructure supporting government electrification goals',
        solution: 'Public-private partnership developing standardized charging network',
        impact: 'Foundation cho mass EV adoption trong Vietnam with grid stability',
        technologies: ['Smart Charging', 'Grid Integration', 'Renewable Energy', 'Load Management']
      }
    ],
    resources: [
      {
        title: 'Vietnam Electricity Group',
        url: 'https://www.evn.com.vn/',
        type: 'Utility Company'
      }
    ],
    technologies: ['Smart Charging', 'V2G Technology', 'Grid Integration', 'Energy Management', 'Power Electronics']
  },
  {
    id: 'ev-manufacturing-quality-control',
    title: 'EV Manufacturing & Quality Control Systems',
    description: 'Advanced manufacturing processes cho electric vehicles, quality control systems, supply chain management, và production optimization techniques.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    vehicleType: 'Manufacturing',
    objectives: [
      'Understand EV manufacturing processes và production lines',
      'Implement quality control systems cho battery và vehicle assembly',
      'Design supply chain management cho EV components',
      'Optimize production efficiency và cost management'
    ],
    prerequisites: [
      'Manufacturing engineering basics',
      'Quality management systems',
      'Supply chain fundamentals',
      'Lean manufacturing principles'
    ],
    exercises: [
      {
        title: 'VinFast Production Line Optimization',
        description: 'Analyze và optimize VinFast manufacturing processes cho increased efficiency và quality.',
        difficulty: 'Trung bình',
        components: ['Assembly line design', 'Quality checkpoints', 'Automation systems', 'Testing protocols'],
        tools: ['Manufacturing simulation', 'Quality control software', 'Lean tools', 'Statistical analysis'],
        procedure: [
          'Study VinFast current manufacturing processes',
          'Identify bottlenecks trong production line',
          'Design automated quality control checkpoints',
          'Implement statistical process control methods',
          'Optimize material flow và inventory management',
          'Create continuous improvement programs'
        ],
        expectedResults: '20% improvement trong production efficiency với maintained quality standards',
        solution: 'Lean manufacturing principles với Industry 4.0 automation và predictive quality control'
      },
      {
        title: 'EV Battery Production Quality System',
        description: 'Design comprehensive quality control system cho lithium-ion battery manufacturing.',
        difficulty: 'Nâng cao',
        components: ['Cell testing', 'Pack assembly', 'Safety validation', 'Lifecycle testing'],
        tools: ['Battery testing equipment', 'Data analytics', 'Failure analysis', 'Automated inspection'],
        procedure: [
          'Design incoming material inspection protocols',
          'Implement in-line testing during cell production',
          'Create battery pack assembly quality gates',
          'Develop accelerated aging test procedures',
          'Implement traceability systems cho quality tracking',
          'Design recall prevention và root cause analysis systems'
        ],
        expectedResults: '99.9% battery quality với zero safety incidents',
        solution: 'Multi-layer quality system với AI-powered defect detection và predictive analytics'
      }
    ],
    realWorldApplications: [
      'VinFast vehicle manufacturing optimization',
      'Battery production facilities setup',
      'Supplier quality management programs',
      'Production cost reduction initiatives',
      'Manufacturing workforce training programs'
    ],
    caseStudies: [
      {
        title: 'VinFast Smart Manufacturing Initiative',
        company: 'VinFast',
        challenge: 'Scale up production while maintaining international quality standards',
        solution: 'Implement Industry 4.0 technologies với Vietnamese workforce development',
        impact: 'World-class manufacturing facility competing globally',
        technologies: ['Smart Manufacturing', 'Quality Control', 'Automation', 'Data Analytics']
      }
    ],
    resources: [
      {
        title: 'VinFast Manufacturing Innovation',
        url: 'https://vinfastauto.com/',
        type: 'Industry Case Study'
      }
    ],
    technologies: ['Smart Manufacturing', 'Quality Control', 'Automation', 'Supply Chain Management', 'Industry 4.0']
  }
];
