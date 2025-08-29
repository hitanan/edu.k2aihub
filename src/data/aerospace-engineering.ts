import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface AerospaceEngineeringLesson extends BaseLessonData {
  aerospaceApplications?: string[];
  flightPrinciples?: string[];
  spaceTechnology?: string[];
  vietnamAerospaceContext?: string[];
  safetyStandards?: string[];
}

export const aerospaceEngineeringLessons: AerospaceEngineeringLesson[] = [
  {
    id: 'aircraft-design-aerodynamics',
    title: 'Aircraft Design & Aerodynamics Fundamentals',
    description:
      'Comprehensive aircraft design principles, aerodynamic theory, và flight mechanics. Focus trên Vietnamese aviation industry development và opportunities với Vietnam Airlines, Vietjet, và emerging aerospace sector.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
videoUrl: 'https://www.youtube.com/watch?v=edLnZgF9mUg',
    imageUrl: 'https://i.ytimg.com/vi/AkC5xAy3WAY/hqdefault.jpg',
    objectives: [
      'Master fundamental aerodynamic principles và airflow analysis',
      'Understand aircraft design process từ conceptual design đến detailed engineering',
      'Apply flight mechanics để analyze aircraft performance và stability',
      'Design aircraft components: wings, fuselage, control surfaces',
      'Navigate Vietnamese aviation regulations và certification processes',
    ],
    prerequisites: [
      'Strong foundation trong physics, mathematics, và engineering mechanics',
      'Understanding của fluid dynamics và thermodynamics principles',
      'Knowledge của materials science và structural engineering',
      'Familiarity với CAD software và engineering design tools',
    ],
    exercises: [
      {
        title: 'Regional Aircraft Design for Vietnamese Routes',
        description:
          'Design efficient regional aircraft optimized cho Vietnamese domestic routes considering tropical climate và airport limitations',
        difficulty: 'Nâng cao',
        materials: [
          'Aircraft design software (CATIA, SolidWorks)',
          'Aerodynamic analysis tools (ANSYS Fluent)',
          'Vietnamese aviation route data',
          'Airport specifications và runway limitations',
          'Tropical climate performance requirements',
        ],
        procedure: [
          'Analyze Vietnamese domestic route requirements: distance, passenger capacity, airport constraints',
          'Design preliminary aircraft configuration optimized cho tropical performance',
          'Conduct aerodynamic analysis: lift, drag, stability characteristics',
          'Optimize wing design cho short runway performance và fuel efficiency',
          'Evaluate aircraft performance trong Vietnamese operating conditions',
          'Validate design against Vietnamese aviation safety standards',
        ],
        expectedResults:
          'Complete aircraft design meeting Vietnamese aviation requirements với performance optimization',
        solution:
          'Integrated design approach balances efficiency, safety, và operational requirements cho Vietnamese aviation market',
      },
      {
        title: 'UAV System Development for Vietnamese Applications',
        description: 'Design unmanned aerial vehicle system cho Vietnamese agriculture monitoring và disaster response',
        difficulty: 'Nâng cao',
        materials: [
          'UAV design platforms và simulation software',
          'Sensor integration systems: cameras, LIDAR, GPS',
          'Vietnamese agriculture monitoring requirements',
          'Disaster response operational scenarios',
          'Flight control system programming tools',
        ],
        procedure: [
          'Define mission requirements cho agriculture monitoring trong Mekong Delta',
          'Design UAV configuration: fixed-wing vs. multirotor analysis',
          'Integrate sensor payloads cho crop monitoring và disaster assessment',
          'Develop autonomous flight control systems với obstacle avoidance',
          'Test flight operations trong simulated Vietnamese environments',
          'Validate system performance cho operational deployment',
        ],
        expectedResults: 'Functional UAV system ready cho Vietnamese agriculture và emergency response applications',
        solution:
          'Comprehensive UAV development addresses specific Vietnamese operational needs với reliable autonomous capabilities',
      },
    ],
    realWorldApplications: [
      'Vietnam Airlines: Aircraft maintenance engineering và fleet optimization',
      'Vietjet Air: Operations engineering và route planning optimization',
      'Vietnamese Defense: Military aircraft maintenance và UAV development',
      'Airport authorities: Infrastructure development và safety systems',
      'Aerospace manufacturing: Component production cho international suppliers',
    ],
    aerospaceApplications: [
      'Commercial aviation: Passenger aircraft design và operations',
      'Cargo aviation: Freight aircraft optimization và logistics',
      'Military aerospace: Defense aircraft systems và UAV technology',
      'General aviation: Small aircraft design và private aviation',
      'Space applications: Launch vehicle design và satellite systems',
    ],
    flightPrinciples: [
      "Bernoulli's principle và airflow around wings",
      "Newton's laws of motion trong flight dynamics",
      'Four forces of flight: lift, weight, thrust, drag',
      'Aircraft stability và control system design',
      'Performance analysis: takeoff, cruise, landing phases',
    ],
    vietnamAerospaceContext: [
      'Vietnam Airlines technical engineering capabilities',
      'Vietjet Air maintenance và operations optimization',
      'Tan Son Nhat Airport expansion projects',
      'Vietnam aerospace component manufacturing',
      'Defense industry UAV development programs',
    ],
    caseStudies: [
      {
        title: 'Vietnam Airlines Fleet Optimization Project',
        organization: 'Vietnam Airlines Corporation',
        problem:
          'Optimizing aircraft fleet composition và maintenance schedules để improve operational efficiency trong competitive market',
        solution:
          'Implemented advanced aircraft performance analysis và predictive maintenance systems với data-driven decision making',
        impact:
          'Reduced maintenance costs by 20%, improved on-time performance by 15%, optimized fuel efficiency across fleet operations',
        innovations: [
          'Predictive maintenance algorithms',
          'Flight route optimization systems',
          'Fuel efficiency monitoring platforms',
          'Aircraft utilization analytics',
        ],
      },
      {
        title: 'Vietnamese UAV Agriculture Monitoring System',
        organization: 'Vietnam National University - Aerospace Engineering',
        problem:
          'Developing cost-effective UAV systems cho Vietnamese farmers để monitor crop health và optimize agricultural practices',
        solution:
          'Created locally-designed UAV với integrated sensors cho precision agriculture applications trong Vietnamese conditions',
        impact:
          'Improved crop yields by 25%, reduced pesticide usage by 30%, provided real-time monitoring cho 10,000+ hectares',
        innovations: [
          'Tropical climate-optimized UAV design',
          'Multi-spectral imaging systems',
          'Automated flight planning software',
          'Local manufacturing capabilities',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam Aviation Regulations Database',
        url: 'https://caav.gov.vn/',
        type: 'Government Regulation',
      },
      {
        title: 'Aircraft Design: A Conceptual Approach',
        url: 'https://arc.aiaa.org/',
        type: 'Technical Reference',
      },
      {
        title: 'International Civil Aviation Organization Standards',
        url: 'https://www.icao.int/',
        type: 'International Standard',
      },
    ],
  },
  {
    id: 'satellite-communication-systems',
    title: 'Satellite Technology & Communication Systems',
    description:
      'Advanced satellite systems design, orbital mechanics, và space communication technology. Explore Vietnamese space program development và satellite applications cho telecommunications và Earth observation.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
videoUrl: 'https://www.youtube.com/watch?v=a-1lZvvTNOs',
    imageUrl: 'https://i.ytimg.com/vi/_VJZQMGEG1k/hqdefault.jpg',
    objectives: [
      'Master satellite orbital mechanics và space mission design principles',
      'Understand satellite communication systems và signal processing',
      'Design satellite payloads cho Earth observation và telecommunications',
      'Apply space systems engineering cho Vietnamese space applications',
      'Navigate international space law và Vietnamese space policy development',
    ],
    prerequisites: [
      'Advanced physics: celestial mechanics, electromagnetic theory',
      'Mathematics: differential equations, linear algebra, signal processing',
      'Electronics engineering: RF systems, antenna design',
      'Understanding của space environment và radiation effects',
    ],
    exercises: [
      {
        title: 'Vietnamese Earth Observation Satellite Design',
        description:
          'Design Earth observation satellite optimized cho Vietnamese environmental monitoring và disaster management',
        difficulty: 'Nâng cao',
        materials: [
          'Satellite design software (STK, GMAT)',
          'Orbital mechanics simulation tools',
          'Earth observation payload specifications',
          'Vietnamese environmental monitoring requirements',
          'International space regulations database',
        ],
        procedure: [
          'Define mission requirements cho Vietnamese environmental monitoring',
          'Calculate optimal orbital parameters cho coverage của Vietnamese territory',
          'Design satellite payload: imaging sensors, communication systems',
          'Analyze link budget cho ground station communications',
          'Evaluate satellite lifetime và end-of-life disposal plans',
          'Validate design against international space debris mitigation guidelines',
        ],
        expectedResults:
          'Complete satellite design meeting Vietnamese space program objectives với international compliance',
        solution:
          'Comprehensive satellite system enables Vietnamese environmental monitoring capabilities với sustainable space operations',
      },
      {
        title: 'Communication Satellite Network for Rural Vietnam',
        description:
          'Design communication satellite constellation providing internet access cho remote areas trong Vietnamese mountains và islands',
        difficulty: 'Nâng cao',
        materials: [
          'Satellite constellation design tools',
          'Communication link analysis software',
          'Vietnamese geography và population data',
          'Rural internet access requirements',
          'Frequency allocation regulations',
        ],
        procedure: [
          'Analyze Vietnamese rural connectivity gaps và service requirements',
          'Design satellite constellation coverage patterns',
          'Calculate communication link budgets và ground terminal specifications',
          'Optimize satellite orbital configuration cho continuous coverage',
          'Design ground infrastructure: gateways, user terminals',
          'Evaluate economic viability và service deployment strategy',
        ],
        expectedResults:
          'Satellite communication system providing reliable internet access cho underserved Vietnamese regions',
        solution:
          'Strategic satellite network design bridges digital divide enabling economic development trong remote Vietnamese areas',
      },
    ],
    realWorldApplications: [
      'Vietnam National Satellite Center: Space technology development',
      'Vietnam Posts và Telecommunications: Satellite communication services',
      'Ministry of Natural Resources: Earth observation data applications',
      'Disaster management agencies: Real-time monitoring systems',
      'Maritime authorities: Vessel tracking và communication',
    ],
    spaceTechnology: [
      'Satellite bus design: power, propulsion, attitude control',
      'Payload systems: imaging, communication, scientific instruments',
      'Ground segment: tracking stations, data processing centers',
      'Launch vehicle integration và mission operations',
      'Space debris mitigation và end-of-life disposal',
    ],
    caseStudies: [
      {
        title: 'VNREDSat-1 Earth Observation Mission',
        organization: 'Vietnam National Satellite Center',
        problem:
          'Developing Vietnamese Earth observation capabilities cho environmental monitoring và natural resource management',
        solution:
          'Successfully deployed VNREDSat-1 satellite với high-resolution imaging capabilities supporting national development planning',
        impact:
          'Provided crucial Earth observation data supporting agriculture, forestry, disaster management, và urban planning across Vietnam',
        innovations: [
          'Indigenous satellite operations capabilities',
          'Multi-spectral imaging data processing',
          'Real-time disaster monitoring systems',
          'Agricultural monitoring applications',
        ],
      },
      {
        title: 'Vietnamese Maritime Communication Enhancement',
        organization: 'Vietnam Maritime Administration',
        problem:
          'Improving communication coverage cho Vietnamese fishing fleet và maritime safety trong South China Sea',
        solution: 'Implemented satellite communication systems providing reliable connectivity cho maritime operations',
        impact:
          'Enhanced maritime safety, improved fisheries management, strengthened sovereignty monitoring capabilities',
        innovations: [
          'Mobile satellite communication terminals',
          'Emergency beacon systems',
          'Vessel tracking và monitoring',
          'Weather data distribution networks',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam National Satellite Center',
        url: 'https://vnsc.org.vn/',
        type: 'Government Agency',
      },
      {
        title: 'International Telecommunication Union Satellite Regulations',
        url: 'https://www.itu.int/',
        type: 'International Standard',
      },
      {
        title: 'Satellite Communications Systems Engineering',
        url: 'https://www.aiaa.org/',
        type: 'Technical Reference',
      },
    ],
  },
  {
    id: 'space-mission-planning',
    title: 'Space Mission Planning & Systems Engineering',
    description:
      'Comprehensive space mission design, systems engineering approach, và project management cho space programs. Focus trên Vietnamese space industry development và international collaboration opportunities.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
videoUrl: 'https://www.youtube.com/watch?v=a-1lZvvTNOs',
    imageUrl: 'https://i.ytimg.com/vi/jxT7_NPFjkA/hqdefault.jpg',
    objectives: [
      'Master space mission design methodology và systems engineering principles',
      'Understand space project management và risk assessment techniques',
      'Apply mission analysis tools cho spacecraft trajectory design',
      'Design space missions supporting Vietnamese national objectives',
      'Navigate international space collaboration và technology transfer',
    ],
    prerequisites: [
      'Aerospace engineering fundamentals: orbital mechanics, spacecraft design',
      'Project management experience: planning, scheduling, risk management',
      'Systems engineering knowledge: requirements, verification, validation',
      'Understanding của space environment và mission constraints',
    ],
    exercises: [
      {
        title: 'Vietnamese Lunar Mission Feasibility Study',
        description:
          'Conduct comprehensive feasibility study cho Vietnamese lunar exploration mission including technical, economic, và strategic analysis',
        difficulty: 'Nâng cao',
        materials: [
          'Mission analysis software (GMAT, STK)',
          'Cost estimation models',
          'International space collaboration frameworks',
          'Lunar mission case studies',
          'Vietnamese space policy documents',
        ],
        procedure: [
          'Define Vietnamese lunar mission objectives: scientific, technological, strategic',
          'Conduct mission architecture trade studies: direct vs. staged approach',
          'Analyze trajectory options: launch windows, delta-V requirements',
          'Estimate mission costs và development timeline',
          'Evaluate international partnership opportunities',
          'Assess technical readiness và required capability development',
        ],
        expectedResults: 'Comprehensive feasibility analysis supporting Vietnamese space program strategic planning',
        solution:
          'Systematic mission analysis provides roadmap cho Vietnamese lunar exploration capabilities development',
      },
      {
        title: 'Microsatellite Constellation Mission Design',
        description:
          'Design microsatellite constellation mission cho Vietnamese IoT connectivity và environmental monitoring',
        difficulty: 'Nâng cao',
        materials: [
          'Constellation design optimization tools',
          'Microsatellite technology databases',
          'IoT connectivity requirements analysis',
          'Launch service provider information',
          'Regulatory approval processes',
        ],
        procedure: [
          'Define constellation mission requirements: coverage, capacity, latency',
          'Optimize satellite constellation architecture và orbital parameters',
          'Design microsatellite platform: payload, bus systems',
          'Plan constellation deployment strategy và phasing',
          'Develop ground segment infrastructure requirements',
          'Create mission operations concept và lifecycle management',
        ],
        expectedResults: 'Complete microsatellite constellation mission design ready cho implementation',
        solution:
          'Innovative constellation approach enables Vietnamese IoT connectivity với cost-effective space infrastructure',
      },
    ],
    realWorldApplications: [
      'Vietnamese space agency: Mission planning và program management',
      'International space organizations: Collaborative mission development',
      'Aerospace contractors: Mission engineering và systems integration',
      'Research institutions: Space science mission development',
      'Technology companies: Space-based service development',
    ],
    vietnamAerospaceContext: [
      'Vietnam National Space Program development roadmap',
      'Regional space cooperation trong ASEAN framework',
      'Vietnamese university space research programs',
      'International technology transfer opportunities',
      'Commercial space industry development potential',
    ],
    caseStudies: [
      {
        title: 'Vietnam National Space Strategy Development',
        organization: 'Vietnam Academy of Science và Technology',
        problem:
          'Developing comprehensive national space strategy supporting Vietnamese economic development và national security',
        solution:
          'Created 20-year space development roadmap với phased capability building và international cooperation',
        impact:
          'Established framework cho Vietnamese space industry development, attracted international partnerships, guided policy development',
        innovations: [
          'Integrated civil-military space approach',
          'Public-private partnership models',
          'Regional cooperation initiatives',
          'Technology development priorities',
        ],
      },
      {
        title: 'ASEAN Space Technology Collaboration',
        organization: 'ASEAN Committee on Science và Technology',
        problem:
          'Establishing regional space cooperation framework enabling shared space capabilities among ASEAN nations',
        solution:
          'Developed collaborative space programs including shared Earth observation systems và disaster monitoring',
        impact:
          'Created regional space capabilities, reduced individual country costs, enhanced disaster response coordination',
        innovations: [
          'Multi-national satellite programs',
          'Shared ground infrastructure',
          'Technology sharing agreements',
          'Joint mission operations',
        ],
      },
    ],
    safetyStandards: [
      'International space debris mitigation guidelines',
      'Launch safety requirements và range operations',
      'Spacecraft safety standards: pressure vessels, pyrotechnics',
      'Human spaceflight safety protocols',
      'End-of-life disposal requirements',
    ],
    resources: [
      {
        title: 'Vietnam Academy of Science and Technology',
        url: 'https://vast.gov.vn/',
        type: 'Research Institution',
      },
      {
        title: 'International Astronautical Federation',
        url: 'https://www.iafastro.org/',
        type: 'Professional Organization',
      },
      {
        title: 'Space Mission Analysis and Design Handbook',
        url: 'https://www.smad.com/',
        type: 'Technical Reference',
      },
    ],
  },
  {
    id: 'avionics-flight-systems',
    title: 'Avionics & Flight Control Systems',
    description:
      'Advanced avionics systems design, flight control algorithms, và navigation technology. Cover modern aircraft systems integration, autonomous flight capabilities, và Vietnamese aviation technology development.',
    duration: '165 phút',
    difficulty: 'Nâng cao',
videoUrl: 'https://www.youtube.com/watch?v=95uylXeWgng',
    imageUrl: 'https://i.ytimg.com/vi/d5sXmNplQHw/hqdefault.jpg',
    objectives: [
      'Master avionics systems architecture và integration principles',
      'Understand flight control system design và stability analysis',
      'Apply navigation và guidance algorithms cho autonomous flight',
      'Design fault-tolerant avionic systems với safety-critical requirements',
      'Implement modern avionics technologies trong Vietnamese aviation context',
    ],
    prerequisites: [
      'Electronics engineering: digital systems, signal processing',
      'Control systems theory: feedback control, stability analysis',
      'Programming skills: embedded systems, real-time software',
      'Understanding của aircraft systems và flight dynamics',
    ],
    exercises: [
      {
        title: 'Flight Management System Development',
        description: 'Design advanced flight management system optimized cho Vietnamese regional aircraft operations',
        difficulty: 'Nâng cao',
        materials: [
          'Flight simulation software',
          'Avionics development platforms',
          'Vietnamese airspace navigation data',
          'Flight control algorithm libraries',
          'Safety analysis tools',
        ],
        procedure: [
          'Define flight management system requirements cho Vietnamese operations',
          'Design system architecture: sensors, processors, displays',
          'Implement navigation algorithms: GPS, ILS, VOR integration',
          'Develop flight planning và route optimization functions',
          'Integrate autopilot và autothrottle control systems',
          'Validate system performance trong realistic flight scenarios',
        ],
        expectedResults: 'Functional flight management system meeting Vietnamese aviation operational requirements',
        solution: 'Integrated avionics approach enhances flight safety và efficiency cho Vietnamese regional aviation',
      },
      {
        title: 'UAV Autonomous Flight Control System',
        description: 'Develop autonomous flight control system cho Vietnamese agriculture monitoring UAV',
        difficulty: 'Nâng cao',
        materials: [
          'UAV flight control hardware',
          'Computer vision processing units',
          'Autonomous navigation algorithms',
          'Agricultural monitoring sensors',
          'Flight test facilities',
        ],
        procedure: [
          'Design autonomous flight control architecture',
          'Implement GPS waypoint navigation với obstacle avoidance',
          'Develop computer vision systems cho terrain following',
          'Create autonomous mission planning capabilities',
          'Integrate fail-safe systems và emergency procedures',
          'Test autonomous operations trong agricultural environments',
        ],
        expectedResults: 'Reliable autonomous UAV system capable của independent agricultural monitoring missions',
        solution:
          'Advanced autonomous capabilities enable efficient agricultural monitoring với minimal human intervention',
      },
    ],
    realWorldApplications: [
      'Vietnamese airlines: Avionics modernization và upgrade programs',
      'Military aviation: Flight control system development',
      'UAV manufacturers: Autonomous flight capability development',
      'Airport systems: Navigation aids và approach systems',
      'Avionics suppliers: Component design và integration',
    ],
    flightPrinciples: [
      'Digital flight control: fly-by-wire systems, control laws',
      'Navigation systems: GPS, INS, radio navigation integration',
      'Display systems: glass cockpit, heads-up displays',
      'Communication systems: VHF radio, data link, satellite communication',
      'Surveillance systems: transponders, ADS-B, weather radar',
    ],
    caseStudies: [
      {
        title: 'Vietnam Airlines Avionics Modernization',
        organization: 'Vietnam Airlines Technical Company',
        problem: 'Upgrading aging aircraft avionics systems để meet modern performance và safety requirements',
        solution:
          'Implemented comprehensive avionics modernization program với glass cockpit upgrades và enhanced navigation systems',
        impact:
          'Improved flight safety, reduced pilot workload, enhanced operational efficiency, achieved regulatory compliance',
        innovations: [
          'Retrofit glass cockpit systems',
          'Enhanced flight management computers',
          'Integrated navigation displays',
          'Digital communication systems',
        ],
      },
      {
        title: 'Vietnamese Defense UAV Development',
        organization: 'Vietnam Ministry of Defense - Aerospace Division',
        problem:
          'Developing indigenous UAV capabilities với advanced avionics cho surveillance và reconnaissance missions',
        solution:
          'Created modular avionics platform supporting multiple UAV configurations với autonomous flight capabilities',
        impact:
          'Established domestic UAV production capability, reduced foreign dependency, enhanced national security capabilities',
        innovations: [
          'Modular avionics architecture',
          'Autonomous flight algorithms',
          'Secure communication systems',
          'Multi-sensor integration platforms',
        ],
      },
    ],
    resources: [
      {
        title: 'DO-178C Software Considerations in Airborne Systems',
        url: 'https://www.rtca.org/',
        type: 'Safety Standard',
      },
      {
        title: 'IEEE Aerospace and Electronic Systems Society',
        url: 'https://aess.ieee.org/',
        type: 'Professional Organization',
      },
      {
        title: 'Avionics Systems Integration Technology',
        url: 'https://www.sae.org/',
        type: 'Technical Reference',
      },
    ],
  },
];
