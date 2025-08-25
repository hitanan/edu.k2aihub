export interface RenewableEnergyLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  energyType?: string;
  category?: string;
  imageUrl?: string;
  videoUrl?: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Array<{
    title: string;
    description: string;
    difficulty: string;
    requirements?: string[];
    procedure?: string[];
    expectedResults?: string;
    solution?: string;
  }>;
  realWorldApplications: string[];
  caseStudies?: Array<{
    title: string;
    location: string;
    challenge: string;
    solution: string;
    impact: string;
    insights?: string[];
  }>;
  resources?: Array<{
    title: string;
    url: string;
    type: string;
  }>;
  technologies?: string[];
}

export const renewableEnergyLessons: RenewableEnergyLesson[] = [
  {
    id: 'solar-energy-fundamentals',
    title: 'Solar Energy Systems & Photovoltaic Technology',
    description:
      'Khám phá công nghệ năng lượng mặt trời từ photovoltaic cells đến complete solar farm systems. Học cách design và optimize solar installations cho climate Việt Nam.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    energyType: 'Solar Power',
    videoUrl: 'https://www.youtube.com/watch?v=xy9nj94xvKA', // How do wind turbines work? - TED-Ed
    objectives: [
      'Hiểu photovoltaic effect và cách solar cells convert sunlight thành electricity',
      'Learn về different types của solar panels: monocrystalline, polycrystalline, thin-film',
      'Master solar system design: sizing, inverters, battery storage',
      'Understand economics và ROI của solar installations trong Vietnam context',
    ],
    prerequisites: [
      'Basic understanding của electricity và electrical circuits',
      'Mathematics skills: algebra và basic calculus',
      'Interest trong environmental sustainability',
    ],
    exercises: [
      {
        title: 'Solar System Design Calculator',
        description:
          'Thiết kế complete solar system cho typical Vietnamese household, calculate energy needs và system specifications.',
        difficulty: 'Trung bình',
        requirements: ['Solar calculation software', 'Local weather data', 'Electricity bill analysis'],
        procedure: [
          'Analyze monthly electricity consumption từ electric bills',
          'Research local solar irradiance data cho Vietnam regions',
          'Calculate required panel capacity và battery storage',
          'Select appropriate inverter và safety equipment',
          'Estimate installation cost và payback period',
          'Create detailed system diagram và component list',
        ],
        expectedResults: 'Complete solar system design với cost analysis và ROI projection',
        solution: 'Typical 5kW system cho Vietnamese home: 20-25 panels, 5kW inverter, 10kWh battery storage',
      },
      {
        title: 'Solar Panel Efficiency Testing',
        description:
          'Test different solar panel types under various conditions để understand performance characteristics.',
        difficulty: 'Nâng cao',
        requirements: ['Solar panels', 'Multimeter', 'Light sources', 'Temperature sensors'],
        procedure: [
          'Set up testing apparatus với controlled lighting',
          'Measure voltage và current output under different light intensities',
          'Test temperature effects trên panel efficiency',
          'Compare performance của different panel technologies',
          'Record data và create performance curves',
          'Analyze results và recommend optimal panel type',
        ],
        expectedResults: 'Comprehensive performance analysis của different solar technologies',
        solution: 'Monocrystalline panels typically show highest efficiency but higher cost per watt',
      },
    ],
    realWorldApplications: [
      'Rooftop solar installations cho residential và commercial buildings',
      'Solar farms trong Mekong Delta và central Vietnam highlands',
      'Off-grid solar systems cho remote villages và islands',
      'Solar water heating systems cho hotels và hospitals',
      'Floating solar panels trên reservoirs và aquaculture ponds',
    ],
    caseStudies: [
      {
        title: 'Dak Lak Solar Farm Project',
        location: 'Dak Lak Province, Vietnam',
        challenge: 'Develop large-scale solar farm trong agricultural area với minimal environmental impact',
        solution: 'Implement agrovoltaics: solar panels elevated above crops, allowing continued farming underneath',
        impact: '450 MW solar capacity while maintaining 80% agricultural productivity, creating dual income streams',
        insights: [
          "Agrovoltaics suitable cho Vietnam's agricultural economy",
          'Proper panel height critical cho crop growth underneath',
          'Community engagement essential cho project success',
          'Grid integration challenges require careful planning',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam Solar Energy Association',
        url: 'https://vsea.org.vn/',
        type: 'Industry Association',
      },
    ],
    technologies: ['Photovoltaic Cells', 'Solar Inverters', 'Battery Storage', 'MPPT Controllers', 'Grid-tie Systems'],
  },
  {
    id: 'wind-power-technology',
    title: 'Wind Power Systems & Turbine Technology',
    description:
      'Explore wind energy technology từ aerodynamics đến complete wind farm development. Focus trên offshore wind potential của Vietnam coastline.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    energyType: 'Wind Power',
    videoUrl: 'https://www.youtube.com/watch?v=fsNzBfZoV04',
    objectives: [
      'Understand wind turbine aerodynamics và blade design principles',
      'Learn về wind resource assessment và site selection',
      'Master wind farm layout optimization và wake effects',
      'Explore offshore wind technology specific to Vietnam conditions',
    ],
    prerequisites: [
      'Basic physics: mechanics và fluid dynamics',
      'Understanding về electrical power generation',
      'Familiarity với meteorology concepts',
    ],
    exercises: [
      {
        title: 'Wind Resource Assessment Project',
        description:
          'Analyze wind data từ potential Vietnamese wind farm sites để determine viability và optimal turbine selection.',
        difficulty: 'Nâng cao',
        requirements: ['Wind measurement data', 'GIS software', 'Turbine specifications'],
        procedure: [
          'Collect historical wind data từ meteorological stations',
          'Analyze wind speed distribution và seasonal patterns',
          'Create wind rose diagrams cho different locations',
          'Calculate annual energy production estimates',
          'Assess turbulence và extreme weather conditions',
          'Recommend optimal turbine type và hub height',
        ],
        expectedResults: 'Comprehensive wind resource report với energy production forecasts',
        solution: 'Vietnam coastal areas show 7-9 m/s average wind speeds, suitable cho modern wind turbines',
      },
      {
        title: 'Offshore Wind Farm Design',
        description:
          'Design offshore wind farm layout cho Vietnam coastal waters, considering environmental và technical constraints.',
        difficulty: 'Nâng cao',
        requirements: ['Marine charts', 'Environmental impact data', 'Turbine wake models'],
        procedure: [
          'Analyze water depth và seabed conditions',
          'Study marine protected areas và shipping lanes',
          'Optimize turbine spacing để minimize wake losses',
          'Design electrical collection system',
          'Plan installation và maintenance logistics',
          'Estimate LCOE (Levelized Cost of Energy)',
        ],
        expectedResults: 'Complete offshore wind farm design với economic analysis',
        solution: 'Optimal spacing 7-10 rotor diameters apart, với underwater cables to shore',
      },
    ],
    realWorldApplications: [
      'Offshore wind farms trong South China Sea waters',
      'Onshore wind developments trong Ninh Thuan và Binh Thuan provinces',
      'Small-scale wind systems cho islands và remote communities',
      'Wind-solar hybrid systems cho grid stability',
      'Industrial wind power cho manufacturing facilities',
    ],
    caseStudies: [
      {
        title: 'Ke Ga Offshore Wind Project',
        location: 'Binh Thuan Province, Vietnam',
        challenge: 'Develop first commercial offshore wind farm trong Vietnam với challenging marine conditions',
        solution: 'Use advanced foundation technology và typhoon-resistant turbine design',
        impact: '3.5 GW potential capacity với estimated 13 billion kWh annual generation',
        insights: [
          'Typhoon-resistant design critical trong South China Sea',
          'Local supply chain development essential cho cost reduction',
          'Environmental impact assessment must consider marine ecosystems',
          'Grid infrastructure upgrades needed cho offshore wind integration',
        ],
      },
    ],
    resources: [
      {
        title: 'Global Wind Energy Council',
        url: 'https://gwec.net/',
        type: 'Research Organization',
      },
    ],
    technologies: [
      'Horizontal Axis Turbines',
      'Fixed Foundation',
      'Floating Platforms',
      'Power Electronics',
      'Grid Integration',
    ],
  },
  {
    id: 'energy-storage-systems',
    title: 'Energy Storage & Smart Grid Integration',
    description:
      'Master advanced energy storage technologies và grid integration strategies. Essential cho managing renewable energy variability trong modern power systems.',
    duration: '160 phút',
    difficulty: 'Nâng cao',
    energyType: 'Energy Storage',
    videoUrl: 'https://www.youtube.com/watch?v=1MpWH6-xQqs',
    objectives: [
      'Compare different energy storage technologies: batteries, pumped hydro, compressed air',
      'Understand grid stabilization role của energy storage systems',
      'Learn về smart grid technologies và demand response',
      'Design hybrid renewable systems với optimal storage sizing',
    ],
    prerequisites: [
      'Understanding về electrical power systems',
      'Knowledge của renewable energy characteristics',
      'Basic economics và financial analysis skills',
    ],
    exercises: [
      {
        title: 'Battery Storage System Design',
        description:
          'Design battery energy storage system cho grid-scale renewable integration trong Vietnam power network.',
        difficulty: 'Nâng cao',
        requirements: ['Battery specifications', 'Grid data', 'Economic models'],
        procedure: [
          'Analyze grid stability requirements và frequency regulation needs',
          'Study renewable energy output patterns và variability',
          'Calculate optimal battery capacity cho different applications',
          'Compare lithium-ion, flow batteries và other technologies',
          'Design power conversion systems và grid interface',
          'Perform economic analysis với different revenue streams',
        ],
        expectedResults: 'Complete battery storage system design với business case',
        solution: '100MW/400MWh system provides 4-hour duration cho peak shifting và frequency regulation',
      },
      {
        title: 'Pumped Hydro Storage Analysis',
        description: 'Evaluate potential pumped hydro storage sites trong Vietnam mountainous regions.',
        difficulty: 'Nâng cao',
        requirements: ['Topographic maps', 'Hydrological data', 'Environmental assessments'],
        procedure: [
          'Identify suitable sites với appropriate elevation difference',
          'Analyze water availability và environmental constraints',
          'Calculate storage capacity và round-trip efficiency',
          'Design pump-turbine systems và reservoir infrastructure',
          'Assess environmental impact và mitigation measures',
          'Compare economics với other storage options',
        ],
        expectedResults: 'Feasibility study cho pumped hydro development',
        solution: 'Northern Vietnam mountains offer excellent potential với 500m+ elevation differences',
      },
    ],
    realWorldApplications: [
      'Grid-scale battery storage cho renewable integration',
      'Pumped hydro storage trong mountainous regions',
      'Distributed energy storage trong urban areas',
      'Industrial energy storage cho demand management',
      'Electric vehicle charging infrastructure với storage',
    ],
    caseStudies: [
      {
        title: 'EVN Smart Grid Pilot Project',
        location: 'Ho Chi Minh City, Vietnam',
        challenge: 'Integrate high levels của rooftop solar với urban distribution grid',
        solution: 'Deploy distributed battery storage và advanced grid management systems',
        impact: '40% increase trong renewable penetration với improved grid stability',
        insights: [
          'Distributed storage more effective than centralized trong urban areas',
          'Smart inverters critical cho grid stability',
          'Customer engagement important cho demand response programs',
          'Regulatory framework needs updating cho new technologies',
        ],
      },
    ],
    resources: [
      {
        title: 'International Renewable Energy Agency (IRENA)',
        url: 'https://www.irena.org/',
        type: 'International Organization',
      },
    ],
    technologies: ['Lithium-ion Batteries', 'Flow Batteries', 'Pumped Hydro', 'Compressed Air', 'Smart Inverters'],
  },
  {
    id: 'hydroelectric-systems',
    title: 'Hydroelectric Power & Small-Scale Hydro',
    description:
      "Explore hydroelectric technology từ large dams đến micro-hydro systems. Focus trên Vietnam's abundant water resources và small-scale applications.",
    duration: '170 phút',
    difficulty: 'Trung bình',
    energyType: 'Hydropower',
    videoUrl: 'https://www.youtube.com/watch?v=wzc99DVGhcE',
    objectives: [
      'Understand hydro turbine types và selection criteria',
      'Learn về environmental impact assessment cho hydro projects',
      'Master small-scale hydro design cho rural electrification',
      'Explore pumped storage hydro cho grid balancing',
    ],
    prerequisites: [
      'Basic fluid mechanics và hydraulics',
      'Understanding về electrical generators',
      'Environmental science awareness',
    ],
    exercises: [
      {
        title: 'Micro-Hydro System Design',
        description:
          'Design micro-hydro system cho remote village trong Vietnam mountains using local water resources.',
        difficulty: 'Trung bình',
        requirements: ['Site survey data', 'Water flow measurements', 'Community energy needs'],
        procedure: [
          'Measure water flow rates và seasonal variations',
          'Calculate available head và gross power potential',
          'Select appropriate turbine type (Pelton, crossflow, Turgo)',
          'Design intake structure và penstock system',
          'Size electrical generator và control systems',
          'Plan installation và maintenance procedures',
        ],
        expectedResults: 'Complete micro-hydro system providing reliable village electricity',
        solution: '25kW crossflow turbine system serving 50 households với 6-hour daily operation',
      },
    ],
    realWorldApplications: [
      'Large-scale hydroelectric dams như Son La và Hoa Binh',
      'Small-scale hydro cho rural mountain communities',
      'Run-of-river systems với minimal environmental impact',
      'Pumped storage systems trong grid applications',
      'Irrigation-integrated hydro systems',
    ],
    caseStudies: [
      {
        title: 'Vietnam Small-Scale Hydro Program',
        location: 'Northern Vietnam Mountains',
        challenge: 'Provide electricity access to remote villages với minimal grid connection',
        solution: 'Develop standardized micro-hydro systems với community ownership models',
        impact: '1,000+ villages electrified với 95% system reliability',
        insights: [
          'Community training critical cho long-term success',
          'Standardized designs reduce costs và simplify maintenance',
          'Environmental monitoring ensures sustainable operation',
          'Revenue-sharing models provide maintenance funding',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam Small Hydropower Association',
        url: 'http://vsha.org.vn/',
        type: 'Industry Association',
      },
    ],
    technologies: [
      'Pelton Turbines',
      'Francis Turbines',
      'Crossflow Turbines',
      'Synchronous Generators',
      'Power Electronics',
    ],
  },
  {
    id: 'renewable-economics-policy',
    title: 'Renewable Energy Economics & Policy in Vietnam',
    description:
      'Understand economics, policy framework và business models cho renewable energy development trong Vietnam. Essential cho project development và investment decisions.',
    duration: '140 phút',
    difficulty: 'Trung bình',
    energyType: 'Economics & Policy',
    videoUrl: 'https://www.youtube.com/watch?v=eFf4CnMqs40',
    objectives: [
      'Understand Vietnam renewable energy policies và incentives',
      'Learn về project financing và investment structures',
      'Master LCOE calculations và economic analysis',
      'Explore business models và revenue streams',
    ],
    prerequisites: [
      'Basic economics và financial analysis',
      'Understanding về renewable energy technologies',
      'Familiarity với project management concepts',
    ],
    exercises: [
      {
        title: 'Renewable Energy Investment Analysis',
        description: 'Perform complete financial analysis cho renewable energy project trong Vietnam.',
        difficulty: 'Nâng cao',
        requirements: ['Financial modeling software', 'Market data', 'Policy information'],
        procedure: [
          'Research current FIT (Feed-in Tariff) rates và policy incentives',
          'Calculate capital costs và operating expenses',
          'Develop cash flow projections über project lifetime',
          'Perform sensitivity analysis on key variables',
          'Assess financing options và debt structures',
          'Calculate IRR, NPV và payback period',
        ],
        expectedResults: 'Complete investment proposal với risk assessment',
        solution: 'Solar projects show 12-15% IRR với current Vietnam FIT rates',
      },
    ],
    realWorldApplications: [
      'FIT policies driving solar và wind development',
      'Green bonds financing renewable projects',
      'Corporate PPAs (Power Purchase Agreements)',
      'Rural electrification programs',
      'Net metering cho distributed generation',
    ],
    caseStudies: [
      {
        title: 'Vietnam Renewable Energy Development Strategy',
        location: 'National Level, Vietnam',
        challenge: 'Transition từ coal-dependent power system to renewable-dominated grid by 2050',
        solution: 'Implement comprehensive policy framework với technology-specific incentives',
        impact: 'Renewable capacity increased từ 5% to 12% trong 5 years (2015-2020)',
        insights: [
          'Feed-in tariffs effective cho rapid market development',
          'Grid infrastructure upgrades essential cho renewable integration',
          'Local content requirements support domestic industry',
          'Competitive bidding replacing FIT cho cost reduction',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam Ministry of Industry and Trade',
        url: 'https://www.moit.gov.vn/',
        type: 'Government Agency',
      },
    ],
    technologies: [
      'Financial Modeling',
      'Policy Analysis',
      'Project Development',
      'Risk Assessment',
      'Market Analysis',
    ],
  },
];
