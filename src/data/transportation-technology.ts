import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface TransportationTechnologyLesson extends BaseLessonData {
  transportationDomain: 'smart-mobility' | 'autonomous-vehicles' | 'logistics-optimization' | 'urban-planning' | 'sustainable-transport';
  technologyCategory: string[];
  vietnameseTransportContext: string[];
  sustainabilityFocus: string[];
  urbanApplications: string[];
}

export const transportationTechnologyLessons: TransportationTechnologyLesson[] = [
  {
    id: 'smart-mobility-urban-transportation',
    title: 'Smart Mobility & Vận Tải Đô Thị Thông Minh',
    description: 'Comprehensive smart mobility solutions including intelligent transportation systems, traffic optimization, shared mobility platforms, và urban transportation innovation.',
    duration: '220 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=gmLb9SJHlgU', // Smart Mobility and Urban Transportation
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=600&fit=crop',
    transportationDomain: 'smart-mobility',
    technologyCategory: [
      'Intelligent Transportation Systems (ITS)',
      'Mobile app development for transportation',
      'IoT sensors for traffic monitoring',
      'Data analytics for mobility optimization'
    ],
    objectives: [
      'Design intelligent transportation systems cho urban environments',
      'Develop smart traffic management và optimization solutions',
      'Create shared mobility platforms và ride-sharing applications',
      'Implement IoT-based transportation monitoring systems',
      'Build data-driven mobility analytics và prediction models'
    ],
    prerequisites: [
      'Basic transportation engineering knowledge',
      'IoT systems understanding',
      'Data analytics fundamentals'
    ],
    vietnameseTransportContext: [
      'Ho Chi Minh City traffic congestion challenges',
      'Hanoi public transportation system modernization',
      'Motorbike-dominated transportation culture',
      'Mekong Delta rural transportation needs'
    ],
    sustainabilityFocus: [
      'Electric vehicle infrastructure development',
      'Public transportation electrification',
      'Carbon footprint reduction strategies',
      'Sustainable urban mobility planning'
    ],
    urbanApplications: [
      'Smart traffic light coordination systems',
      'Real-time public transportation information',
      'Parking management và optimization',
      'Multi-modal transportation integration'
    ],
    exercises: [
      {
        title: 'Smart Traffic Management System Design',
        description: 'Design comprehensive smart traffic management system cho major Vietnamese city intersection với adaptive signal control',
        difficulty: 'Nâng cao',
        materials: ['Traffic simulation software', 'IoT sensor specifications', 'Data analytics platforms', 'Urban planning tools'],
        procedure: [
          'Analyze current traffic patterns và bottlenecks trong target intersection',
          'Design IoT sensor network cho real-time traffic monitoring',
          'Develop adaptive traffic signal control algorithms',
          'Create mobile app cho citizen traffic information',
          'Implement performance measurement system cho traffic flow optimization'
        ],
        expectedResults: 'Complete smart traffic system design với measurable improvements trong traffic flow và reduced congestion',
        solution: 'Integrated smart traffic solution combining IoT sensors, machine learning optimization, và citizen engagement platforms'
      }
    ],
    realWorldApplications: [
      'Grab traffic optimization algorithms',
      'Ho Chi Minh City smart traffic pilot projects',
      'Bus rapid transit (BRT) system optimization',
      'Motorcycle taxi app development'
    ],
    caseStudies: [
      {
        title: 'Ho Chi Minh City Smart Traffic Initiative',
        organization: 'HCMC Department of Transportation',
        problem: 'Reducing traffic congestion trong world\'s most motorcycle-dense city',
        solution: 'AI-powered traffic signal optimization, real-time traffic monitoring, citizen mobile apps, integrated public transport',
        impact: 'Reduced average commute time by 25%, improved air quality index by 15%, increased public transport usage by 40%',
        innovations: ['Motorcycle-adapted traffic algorithms', 'Vietnamese traffic pattern recognition', 'Multi-modal integration platform']
      }
    ],
    resources: [
      {
        title: 'Intelligent Transportation Systems Guide',
        url: 'https://www.its.dot.gov/',
        type: 'Resource'
      }
    ]
  },
  {
    id: 'autonomous-vehicles-ai-systems',
    title: 'Xe Tự Lái & Hệ Thống AI Giao Thông',
    description: 'Advanced autonomous vehicle technology including computer vision, machine learning, sensor fusion, và AI decision-making systems.',
    duration: '245 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=yjztvddhZmI', // Autonomous Vehicles and AI Systems
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=600&fit=crop',
    transportationDomain: 'autonomous-vehicles',
    technologyCategory: [
      'Computer vision for autonomous driving',
      'Machine learning for vehicle decision-making',
      'Sensor fusion (LiDAR, cameras, radar)',
      'Real-time processing systems'
    ],
    objectives: [
      'Understand autonomous vehicle perception systems',
      'Implement machine learning algorithms cho vehicle navigation',
      'Design sensor fusion systems cho environmental awareness',
      'Develop real-time decision-making algorithms',
      'Create safety systems cho autonomous vehicle operation'
    ],
    prerequisites: [
      'Computer vision knowledge',
      'Machine learning experience',
      'Real-time systems understanding'
    ],
    vietnameseTransportContext: [
      'Vietnamese traffic conditions adaptation challenges',
      'Mixed traffic with motorcycles và bicycles',
      'Monsoon season driving conditions',
      'Urban vs rural road infrastructure differences'
    ],
    sustainabilityFocus: [
      'Electric autonomous vehicle development',
      'Efficient route planning algorithms',
      'Reduced traffic accidents và fatalities',
      'Optimized energy consumption systems'
    ],
    urbanApplications: [
      'Autonomous taxi services development',
      'Self-driving delivery systems',
      'Smart parking automated systems',
      'Highway autonomous driving corridors'
    ],
    exercises: [
      {
        title: 'Vietnamese Traffic Autonomous Navigation System',
        description: 'Develop autonomous vehicle navigation system optimized cho Vietnamese traffic conditions including motorcycles và mixed traffic',
        difficulty: 'Nâng cao',
        materials: ['Computer vision frameworks', 'Machine learning platforms', 'Sensor simulation tools', 'Real-time processing hardware'],
        procedure: [
          'Collect và annotate Vietnamese traffic scenario datasets',
          'Train computer vision models cho detecting motorcycles, bicycles, pedestrians',
          'Develop sensor fusion algorithms combining camera, LiDAR, radar data',
          'Create decision-making system handling Vietnamese traffic behaviors',
          'Test và validate system performance trong simulated Vietnamese traffic scenarios'
        ],
        expectedResults: 'Autonomous vehicle system capable of navigating Vietnamese traffic conditions với high safety margins',
        solution: 'Advanced AI system specifically trained on Vietnamese traffic patterns với cultural behavior adaptation'
      }
    ],
    realWorldApplications: [
      'VinFast autonomous vehicle development',
      'Thaco self-driving truck projects',
      'Autonomous delivery systems cho e-commerce',
      'Smart city autonomous shuttle services'
    ],
    caseStudies: [
      {
        title: 'VinAI Autonomous Vehicle Research',
        organization: 'VinAI Research',
        problem: 'Developing autonomous vehicle technology adapted cho Vietnamese traffic conditions',
        solution: 'AI models trained on Vietnamese traffic data, motorcycle-aware perception systems, cultural behavior modeling',
        impact: 'Achieved Level 3 autonomy in controlled environments, developed Vietnamese traffic datasets, advanced safety systems',
        innovations: ['Motorcycle-aware AI systems', 'Vietnamese traffic behavior modeling', 'Tropical weather adaptation']
      }
    ],
    resources: [
      {
        title: 'Autonomous Vehicle Technology Guide',
        url: 'https://www.sae.org/standards/content/j3016_202104/',
        type: 'Standards'
      }
    ]
  },
  {
    id: 'logistics-supply-chain-optimization',
    title: 'Tối Ưu Hóa Logistics & Chuỗi Cung Ứng',
    description: 'Advanced logistics optimization including route planning, warehouse automation, drone delivery systems, và supply chain visibility.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=3n_dGeLJMXU', // Logistics and Supply Chain Optimization
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop',
    transportationDomain: 'logistics-optimization',
    technologyCategory: [
      'Route optimization algorithms',
      'Warehouse automation systems',
      'Drone delivery technology',
      'Supply chain visibility platforms'
    ],
    objectives: [
      'Master advanced route optimization algorithms',
      'Design automated warehouse systems với robotics',
      'Implement drone delivery systems cho last-mile logistics',
      'Create end-to-end supply chain visibility solutions',
      'Develop predictive analytics cho demand forecasting'
    ],
    prerequisites: [
      'Operations research basics',
      'Algorithm design knowledge',
      'Supply chain fundamentals'
    ],
    vietnameseTransportContext: [
      'Mekong Delta agricultural logistics challenges',
      'Cross-border trade với Cambodia, Laos, China',
      'Monsoon season transportation adaptations',
      'Island logistics cho tourism industry'
    ],
    sustainabilityFocus: [
      'Carbon-optimized delivery routes',
      'Electric vehicle logistics fleets',
      'Packaging waste reduction systems',
      'Sustainable last-mile delivery solutions'
    ],
    urbanApplications: [
      'Urban consolidation center design',
      'Smart delivery locker networks',
      'Crowdsourced delivery platforms',
      'Real-time logistics tracking systems'
    ],
    exercises: [
      {
        title: 'Vietnam E-commerce Logistics Optimization',
        description: 'Design comprehensive logistics optimization system cho Vietnamese e-commerce company handling 1M+ orders monthly',
        difficulty: 'Nâng cao',
        materials: ['Optimization software tools', 'Logistics simulation platforms', 'Data analytics frameworks', 'Cost modeling templates'],
        procedure: [
          'Analyze current Vietnamese e-commerce logistics challenges và costs',
          'Design multi-modal transportation optimization system',
          'Implement predictive demand forecasting cho inventory placement',
          'Create last-mile delivery optimization including motorcycle deliveries',
          'Develop sustainability metrics và carbon footprint tracking'
        ],
        expectedResults: 'Complete logistics optimization system với measurable cost reductions và delivery time improvements',
        solution: 'Integrated optimization platform combining predictive analytics, route optimization, và Vietnamese market adaptations'
      }
    ],
    realWorldApplications: [
      'Shopee logistics network optimization',
      'Vietnam Post digital transformation',
      'Ninjavan delivery route planning',
      'Agricultural product transportation systems'
    ],
    caseStudies: [
      {
        title: 'Giao Hang Nhanh Logistics Innovation',
        organization: 'Giao Hang Nhanh (GHN)',
        problem: 'Scaling logistics operations to handle explosive e-commerce growth across Vietnam',
        solution: 'AI-powered route optimization, automated sorting systems, drone delivery pilots, real-time tracking platform',
        impact: 'Reduced delivery costs by 30%, improved delivery speed by 40%, expanded coverage to 100% of Vietnamese provinces',
        innovations: ['Vietnamese address recognition AI', 'Motorcycle-optimized routing', 'Rural area delivery solutions']
      }
    ],
    resources: [
      {
        title: 'Supply Chain Optimization Handbook',
        url: 'https://www.informs.org/Publications/OR-MS-Today',
        type: 'Resource'
      }
    ]
  },
  {
    id: 'sustainable-transport-green-mobility',
    title: 'Vận Tải Bền Vững & Green Mobility',
    description: 'Sustainable transportation solutions including electric vehicles, renewable energy integration, carbon reduction strategies, và green infrastructure.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=1f-x7aJLJ20', // Sustainable Transportation and Green Mobility
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1200&h=600&fit=crop',
    transportationDomain: 'sustainable-transport',
    technologyCategory: [
      'Electric vehicle charging infrastructure',
      'Renewable energy integration',
      'Carbon footprint measurement systems',
      'Green transportation planning tools'
    ],
    objectives: [
      'Design electric vehicle charging networks',
      'Implement renewable energy integration trong transportation systems',
      'Develop carbon footprint measurement và reduction strategies',
      'Create sustainable urban transportation plans',
      'Build green logistics và delivery systems'
    ],
    prerequisites: [
      'Environmental sustainability basics',
      'Transportation planning knowledge',
      'Renewable energy understanding'
    ],
    vietnameseTransportContext: [
      'Vietnam\'s commitment to net-zero emissions by 2050',
      'Government electric vehicle incentive programs',
      'Solar energy potential cho transportation infrastructure',
      'Air pollution challenges trong major cities'
    ],
    sustainabilityFocus: [
      'CO2 emission reduction targets',
      'Electric vehicle adoption strategies',
      'Renewable energy powered transportation',
      'Circular economy transportation models'
    ],
    urbanApplications: [
      'Electric bus fleet management systems',
      'Solar-powered charging stations',
      'Green building transportation integration',
      'Sustainable shared mobility platforms'
    ],
    exercises: [
      {
        title: 'Electric Vehicle Charging Network Design',
        description: 'Design comprehensive EV charging network for Vietnamese city with integration to renewable energy sources',
        difficulty: 'Trung bình',
        materials: ['GIS mapping software', 'Electrical load analysis tools', 'Renewable energy calculators', 'Traffic flow data'],
        procedure: [
          'Analyze current traffic patterns và EV adoption forecasts',
          'Design optimal charging station placement using GIS analysis',
          'Plan renewable energy integration (solar panels, wind power)',
          'Calculate grid impact và load management requirements',
          'Develop business model cho sustainable charging network operation'
        ],
        expectedResults: 'Complete EV charging network plan với renewable energy integration và financial sustainability',
        solution: 'Sustainable charging infrastructure powered by renewable energy với smart grid integration và user-friendly access'
      }
    ],
    realWorldApplications: [
      'VinFast electric vehicle ecosystem',
      'Electric bus systems trong major Vietnamese cities',
      'Green logistics cho international shipping',
      'Sustainable tourism transportation systems'
    ],
    caseStudies: [
      {
        title: 'VinBus Electric Bus Fleet Implementation',
        organization: 'VinBus (VinGroup)',
        problem: 'Launching Vietnam\'s first large-scale electric bus system trong Ho Chi Minh City',
        solution: 'Electric bus fleet với smart charging infrastructure, route optimization software, passenger mobile apps',
        impact: 'Reduced public transport emissions by 60%, improved air quality on bus routes, increased ridership by 25%',
        innovations: ['Vietnamese-climate-adapted electric buses', 'Solar-powered charging stations', 'Smart route optimization']
      }
    ],
    resources: [
      {
        title: 'Sustainable Transportation Guide',
        url: 'https://www.itdp.org/',
        type: 'Resource'
      }
    ]
  },
  {
    id: 'urban-planning-mobility-integration',
    title: 'Quy Hoạch Đô Thị & Tích Hợp Mobility',
    description: 'Integrated urban planning approach combining transportation, land use, technology, và sustainable development principles.',
    duration: '215 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=44PfhYie52g', // Urban Planning and Mobility Integration
    imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=1200&h=600&fit=crop',
    transportationDomain: 'urban-planning',
    technologyCategory: [
      'GIS and spatial analysis tools',
      'Transportation modeling software',
      'Smart city integration platforms',
      'Public participation technology'
    ],
    objectives: [
      'Design integrated urban mobility plans',
      'Implement transit-oriented development strategies',
      'Create multimodal transportation networks',
      'Develop smart city mobility integration',
      'Build community engagement platforms cho urban planning'
    ],
    prerequisites: [
      'Urban planning fundamentals',
      'GIS software proficiency',
      'Transportation systems knowledge'
    ],
    vietnameseTransportContext: [
      'Rapid urbanization challenges trong Vietnamese cities',
      'Traditional neighborhood preservation needs',
      'Flooding và climate adaptation requirements',
      'Mixed-use development opportunities'
    ],
    sustainabilityFocus: [
      'Compact city development principles',
      'Green corridor và park integration',
      'Climate-resilient transportation infrastructure',
      'Community-centered development approaches'
    ],
    urbanApplications: [
      'Transit-oriented development projects',
      'Complete streets design implementation',
      'Smart growth strategy development',
      'Public space và mobility integration'
    ],
    exercises: [
      {
        title: 'Integrated Urban Mobility Master Plan',
        description: 'Develop comprehensive 20-year urban mobility master plan for Vietnamese city của 2 million people',
        difficulty: 'Nâng cao',
        materials: ['Urban planning software', 'GIS analysis tools', 'Transportation modeling platforms', 'Community engagement tools'],
        procedure: [
          'Conduct comprehensive mobility needs assessment including current patterns',
          'Design multimodal transportation network với BRT, cycling, walking integration',
          'Plan transit-oriented development zones với mixed-use principles',
          'Create climate adaptation strategies cho transportation infrastructure',
          'Develop phased implementation plan với community engagement strategy'
        ],
        expectedResults: 'Complete urban mobility master plan với detailed implementation phases, cost estimates, và sustainability metrics',
        solution: 'Integrated mobility plan balancing economic development, environmental sustainability, và community needs'
      }
    ],
    realWorldApplications: [
      'Thu Duc City master planning project',
      'Can Tho urban development integration',
      'Da Nang smart city mobility planning',
      'Hanoi Old Quarter preservation và mobility'
    ],
    caseStudies: [
      {
        title: 'Thu Duc Smart City Mobility Integration',
        organization: 'Thu Duc City (Ho Chi Minh City)',
        problem: 'Planning comprehensive mobility system for Vietnam\'s newest smart city',
        solution: 'Integrated planning approach, smart transportation systems, sustainable development principles, community engagement',
        impact: 'Created model for Vietnamese smart city development, planned for 1.3M residents, integrated 5 transportation modes',
        innovations: ['Vietnamese smart city model', 'Climate-adaptive infrastructure', 'Community-centered planning approach']
      }
    ],
    resources: [
      {
        title: 'Urban Mobility Planning Guide',
        url: 'https://www.itdp.org/publication/guide-to-bus-rapid-transit/',
        type: 'Guide'
      }
    ]
  }
];