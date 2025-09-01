import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface SupplyChainLogisticsLesson extends BaseLessonData {
  logisticsCategory: 'supply-chain' | 'warehousing' | 'transportation' | 'analytics' | 'trade';
  industryFocus: string[];
  vietnameseManufacturingContext: string[];
  technologyLevel: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  targetAudience: string[];
}

export const supplyChainLogisticsLessons: SupplyChainLogisticsLesson[] = [
  {
    id: 'global-supply-chain-management',
    title: 'Quản Lý Chuỗi Cung Ứng Toàn Cầu',
    description:
      'Khám phá hệ thống quản lý chuỗi cung ứng toàn cầu với trọng tâm là vai trò của Việt Nam như một trung tâm sản xuất và xuất khẩu.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=fJjSYbquvtg', // Supply Chain Management Explained
    imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&h=600&fit=crop',
    logisticsCategory: 'supply-chain',
    technologyLevel: 'Trung bình',
    objectives: [
      'Hiểu kiến trúc và dynamics của global supply chains',
      'Phân tích vai trò của Việt Nam trong chuỗi cung ứng toàn cầu',
      'Sử dụng technology để optimize supply chain operations',
      'Manage risks và disruptions trong supply chain',
      'Implement sustainable và ethical supply chain practices',
    ],
    prerequisites: ['Hiểu biết cơ bản về business operations', 'Familiarity với Excel và data analysis tools'],
    industryFocus: [
      'Manufacturing và assembly',
      'Retail và e-commerce',
      'Automotive và electronics',
      'Textiles và apparel',
    ],
    vietnameseManufacturingContext: [
      'Việt Nam như manufacturing hub của thế giới',
      'Integration với ASEAN supply chains',
      'Role trong US-China trade tensions',
      'Opportunities trong reshoring trends',
    ],
    targetAudience: [
      'Manufacturing managers',
      'Logistics professionals',
      'Business operations staff',
      'Import/export specialists',
    ],
    exercises: [
      {
        title: 'Phân Tích Supply Chain Risk Assessment',
        description: 'Evaluate risks và vulnerabilities trong một supply chain thực tế của công ty Việt Nam',
        difficulty: 'Trung bình',
        materials: ['Risk assessment template', 'Case study data', 'Analysis tools'],
        procedure: [
          'Identify key suppliers và distribution channels',
          'Map supply chain dependencies và bottlenecks',
          'Assess geopolitical và economic risks',
          'Develop risk mitigation strategies',
          'Present findings và recommendations',
        ],
        expectedResults: 'Complete risk assessment report với actionable mitigation strategies',
        solution:
          'Comprehensive analysis including supplier diversification, geographic risk distribution, và contingency planning',
      },
    ],
    realWorldApplications: [
      'Managing COVID-19 supply chain disruptions',
      'Optimizing inventory levels để reduce costs',
      'Negotiating với international suppliers',
      'Implementing just-in-time manufacturing',
    ],
    caseStudies: [
      {
        title: 'Vinfast Global Supply Chain Strategy',
        organization: 'VinFast Auto',
        problem: 'Building global supply chain cho electric vehicle manufacturing',
        solution: 'Partnership với international suppliers, technology transfer, local sourcing development',
        impact: 'Successfully launched EV production với competitive cost structure',
        innovations: ['Vertical integration strategy', 'Battery supply partnerships', 'Smart manufacturing'],
      },
    ],
    resources: [
      {
        title: 'Supply Chain Management Best Practices',
        url: 'https://www.apics.org/careers-education-professional-development/publications/apics-magazine',
        type: 'Documentation',
      },
    ],
  },
  {
    id: 'warehouse-inventory-technology',
    title: 'Công Nghệ Kho Bãi & Quản Lý Tồn Kho',
    description:
      'Ứng dụng technology tiên tiến trong warehouse management và inventory optimization, từ WMS đến automated systems.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=924DW-pqjwA', // Modern Warehouse Technology
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=600&fit=crop',
    logisticsCategory: 'warehousing',
    technologyLevel: 'Trung bình',
    objectives: [
      'Deploy warehouse management systems (WMS) effectively',
      'Implement inventory tracking và optimization systems',
      'Use automated storage và retrieval systems (ASRS)',
      'Apply data analytics cho inventory forecasting',
      'Design efficient warehouse layouts và workflows',
    ],
    prerequisites: ['Basic knowledge of logistics operations', 'Understanding của inventory management principles'],
    industryFocus: [
      'E-commerce fulfillment',
      'Manufacturing warehousing',
      '3PL service providers',
      'Retail distribution centers',
    ],
    vietnameseManufacturingContext: [
      'Vietnamese warehouse automation trends',
      'Labor cost considerations trong automation',
      'Government incentives cho logistics investment',
      'Integration với seaport và airport facilities',
    ],
    targetAudience: [
      'Warehouse managers',
      'Inventory control specialists',
      'Logistics coordinators',
      'Operations analysts',
    ],
    exercises: [
      {
        title: 'WMS Implementation Planning',
        description: 'Design và plan implementation của warehouse management system cho một distribution center',
        difficulty: 'Nâng cao',
        materials: ['WMS software demo', 'Warehouse layout tools', 'ROI calculator'],
        procedure: [
          'Analyze current warehouse operations và pain points',
          'Define WMS requirements và specifications',
          'Design system architecture và integration plan',
          'Calculate ROI và implementation timeline',
          'Create change management strategy',
        ],
        expectedResults: 'Complete WMS implementation plan với business case',
        solution: 'Detailed project plan covering technology, process, training, và change management aspects',
      },
    ],
    realWorldApplications: [
      'E-commerce order fulfillment optimization',
      'Multi-channel inventory management',
      'Cross-docking operations',
      'Returns processing automation',
    ],
    caseStudies: [
      {
        title: 'Shopee Logistics Automation',
        organization: 'Shopee Vietnam',
        problem: 'Scaling fulfillment operations cho rapid e-commerce growth',
        solution: 'Investment trong automated sorting systems, AI-powered inventory management, robotic picking',
        impact: 'Reduced order processing time by 60%, increased accuracy to 99.5%',
        innovations: ['AI demand forecasting', 'Robotic fulfillment centers', 'Real-time inventory tracking'],
      },
    ],
    resources: [
      {
        title: 'Warehouse Management Systems Guide',
        url: 'https://www.mhi.org/fundamentals/warehouse-management-systems',
        type: 'Documentation',
      },
    ],
  },
  {
    id: 'transportation-distribution-optimization',
    title: 'Tối Ưu Hóa Vận Tải & Phân Phối',
    description:
      'Optimize transportation networks và distribution strategies sử dụng advanced analytics, route optimization, và modern logistics technology.',
    duration: '190 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=L0mI8UV3tko', // Transportation Optimization
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&h=600&fit=crop',
    logisticsCategory: 'transportation',
    technologyLevel: 'Nâng cao',
    objectives: [
      'Apply route optimization algorithms và software',
      'Design efficient distribution network strategies',
      'Use GPS tracking và fleet management systems',
      'Implement last-mile delivery optimization',
      'Analyze transportation costs và performance metrics',
    ],
    prerequisites: [
      'Understanding của logistics fundamentals',
      'Basic knowledge of data analysis',
      'Familiarity với mapping và GPS systems',
    ],
    industryFocus: [
      'Delivery và courier services',
      'Freight transportation',
      'Food delivery platforms',
      'Retail distribution',
    ],
    vietnameseManufacturingContext: [
      "Vietnam's strategic location trong Southeast Asia",
      'Infrastructure development và logistics corridors',
      'Cross-border transportation challenges',
      'Urban congestion và last-mile delivery issues',
    ],
    targetAudience: ['Transportation managers', 'Fleet operators', 'Distribution planners', 'Logistics analysts'],
    exercises: [
      {
        title: 'Route Optimization Challenge',
        description:
          'Solve complex routing problem cho delivery fleet ở Ho Chi Minh City sử dụng optimization software',
        difficulty: 'Nâng cao',
        materials: ['Route optimization software', 'HCMC traffic data', 'Delivery requirements'],
        procedure: [
          'Import delivery addresses và time constraints',
          'Configure vehicle capacities và driver schedules',
          'Run optimization algorithm với traffic considerations',
          'Analyze results và adjust parameters',
          'Calculate cost savings và efficiency improvements',
        ],
        expectedResults: 'Optimized delivery routes với measurable efficiency gains',
        solution: 'Routes optimized cho minimum travel time và fuel consumption while meeting delivery windows',
      },
    ],
    realWorldApplications: [
      'E-commerce last-mile delivery optimization',
      'Cross-docking operations planning',
      'Intermodal transportation coordination',
      'Emergency logistics response',
    ],
    caseStudies: [
      {
        title: 'Grab Logistics Network Optimization',
        organization: 'Grab Vietnam',
        problem: 'Optimizing food delivery routes trong dense urban areas',
        solution: 'AI-powered route optimization, real-time traffic integration, predictive demand modeling',
        impact: 'Reduced delivery times by 25%, improved driver earnings by 15%',
        innovations: ['Dynamic routing algorithms', 'Predictive analytics', 'Real-time optimization'],
      },
    ],
    resources: [
      {
        title: 'Transportation Optimization Methods',
        url: 'https://www.informs.org/Explore/OR-MS-Today/Public-Articles',
        type: 'Reference',
      },
    ],
  },
  {
    id: 'supply-chain-analytics-forecasting',
    title: 'Phân Tích Chuỗi Cung Ứng & Dự Báo',
    description:
      'Sử dụng advanced analytics, AI và machine learning để optimize supply chain performance, demand forecasting, và strategic decision making.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=VlEYg0j9e9U', // Supply Chain Analytics
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    logisticsCategory: 'analytics',
    technologyLevel: 'Nâng cao',
    objectives: [
      'Apply statistical methods cho demand forecasting',
      'Use machine learning trong supply chain optimization',
      'Implement predictive analytics cho risk management',
      'Build supply chain dashboards và KPI tracking',
      'Conduct scenario analysis và what-if modeling',
    ],
    prerequisites: [
      'Strong analytical skills',
      'Familiarity với Excel và data analysis',
      'Basic understanding của statistics',
    ],
    industryFocus: ['FMCG và retail', 'Manufacturing planning', 'E-commerce operations', 'Pharmaceutical supply chain'],
    vietnameseManufacturingContext: [
      'Seasonality trong Vietnamese consumer behavior',
      'Impact of weather patterns on supply/demand',
      'Festival và holiday demand spikes',
      'Economic indicators affecting purchasing power',
    ],
    targetAudience: [
      'Supply chain analysts',
      'Demand planners',
      'Operations researchers',
      'Business intelligence professionals',
    ],
    exercises: [
      {
        title: 'Demand Forecasting Model Development',
        description: 'Build predictive model cho demand forecasting sử dụng historical sales data và external factors',
        difficulty: 'Nâng cao',
        materials: ['Historical sales data', 'Python/R environment', 'Forecasting libraries'],
        procedure: [
          'Clean và prepare historical demand data',
          'Identify seasonal patterns và trends',
          'Incorporate external factors (weather, holidays, economic indicators)',
          'Build và validate forecasting models',
          'Compare accuracy của different approaches',
        ],
        expectedResults: 'Accurate demand forecasting model với measurable error reduction',
        solution: 'Multiple models compared (ARIMA, exponential smoothing, machine learning) với ensemble approach',
      },
    ],
    realWorldApplications: [
      'Inventory planning và stock level optimization',
      'Production scheduling và capacity planning',
      'Supplier performance monitoring',
      'Cost optimization và budget planning',
    ],
    caseStudies: [
      {
        title: 'Unilever Vietnam Demand Planning',
        organization: 'Unilever Vietnam',
        problem: 'Improving demand forecast accuracy cho FMCG products trong volatile market',
        solution:
          'Advanced analytics platform với AI-powered forecasting, real-time data integration, collaborative planning',
        impact: 'Forecast accuracy improved from 65% to 85%, inventory reduction of 20%',
        innovations: ['Machine learning algorithms', 'Real-time market sensing', 'Collaborative forecasting'],
      },
    ],
    resources: [
      {
        title: 'Supply Chain Analytics Best Practices',
        url: 'https://www.gartner.com/en/supply-chain/insights/supply-chain-analytics',
        type: 'Research',
      },
    ],
  },
  {
    id: 'international-trade-customs',
    title: 'Thương Mại Quốc Tế & Hải Quan',
    description:
      'Navigate complex world của international trade, customs regulations, trade compliance, và cross-border logistics với focus trên Vietnamese trade relationships.',
    duration: '170 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=yn08pSZwnuI', // International Trade Explained
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    logisticsCategory: 'trade',
    technologyLevel: 'Trung bình',
    objectives: [
      'Understand international trade regulations và compliance requirements',
      'Navigate customs procedures và documentation',
      'Use trade management software và systems',
      'Calculate duties, taxes, và trade costs',
      'Implement trade risk management strategies',
    ],
    prerequisites: ['Basic business knowledge', 'Understanding of import/export basics'],
    industryFocus: [
      'Import/export businesses',
      'Manufacturing exporters',
      'Trading companies',
      'Logistics service providers',
    ],
    vietnameseManufacturingContext: [
      'EVFTA và other free trade agreements',
      "Vietnam's WTO commitments và obligations",
      'ASEAN trade facilitation initiatives',
      'US-Vietnam trade relationship',
    ],
    targetAudience: [
      'Import/export managers',
      'Customs brokers',
      'Trade compliance officers',
      'International business developers',
    ],
    exercises: [
      {
        title: 'Trade Compliance Audit',
        description: 'Conduct comprehensive trade compliance audit cho Vietnamese exporting company',
        difficulty: 'Trung bình',
        materials: ['Trade compliance checklist', 'Sample documentation', 'Regulatory database'],
        procedure: [
          'Review current trade processes và documentation',
          'Identify compliance gaps và risks',
          'Research applicable regulations và requirements',
          'Develop compliance improvement plan',
          'Create standard operating procedures',
        ],
        expectedResults: 'Complete compliance audit report với actionable recommendations',
        solution: 'Structured audit covering documentation, licensing, origin determination, và record-keeping',
      },
    ],
    realWorldApplications: [
      'Setting up import/export operations',
      'Navigating trade disputes và investigations',
      'Optimizing duty và tax structures',
      'Managing supply chain compliance',
    ],
    caseStudies: [
      {
        title: 'Textile Exporter EVFTA Optimization',
        organization: 'Vietnamese Textile Company',
        problem: 'Maximizing benefits từ EU-Vietnam Free Trade Agreement',
        solution:
          'Supply chain restructuring để meet origin requirements, documentation automation, tariff optimization',
        impact: 'Achieved preferential tariff rates, reduced export costs by 12%',
        innovations: ['Origin management system', 'Automated documentation', 'Supply chain transparency'],
      },
    ],
    resources: [
      {
        title: 'Vietnam International Trade Guide',
        url: 'https://www.trade.gov/country-commercial-guides/vietnam-trade-agreements',
        type: 'Reference',
      },
    ],
  },
];
