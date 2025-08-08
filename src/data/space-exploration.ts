import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface SpaceLessonData extends BaseLessonData {
  spaceConcepts?: string[];
  missions?: string[];
  technologies?: Array<{
    name: string;
    description: string;
    applications: string[];
    currentStatus: string;
  }>;
}

export const SpaceLessons: SpaceLessonData[] = [
  {
    id: 'space-exploration-fundamentals',
    title: 'Cơ bản về Khám phá Vũ trụ',
    description:
      'Tìm hiểu lịch sử và nguyên lý cơ bản của khám phá vũ trụ, từ rocket science đến space missions.',
    duration: '160 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://youtube.com/watch?v=dqwpQarrDwk',
    imageUrl: '/images/space-fundamentals.jpg',
    objectives: [
      'Hiểu lịch sử khám phá vũ trụ từ Sputnik đến hiện tại',
      'Nắm vững nguyên lý rocket propulsion và orbital mechanics',
      'Tìm hiểu cấu trúc Hệ Mặt trời và các thiên thể',
      'Khám phá các space agencies và missions nổi tiếng',
    ],
    prerequisites: [
      'Vật lý đại cương',
      'Toán học cấp 3',
      'Hiểu biết về khoa học cơ bản',
      'Đam mê khám phá và công nghệ',
    ],
    exercises: [
      {
        title: 'Mission Planning Simulation',
        description: 'Thiết kế và mô phỏng một mission khám phá sao Hỏa',
        difficulty: 'Trung bình',
        materials: [
          'KSP (Kerbal Space Program)',
          'Mission planning software',
          'Orbital mechanics calculator',
        ],
        procedure: [
          'Phân tích launch window để đến sao Hỏa',
          'Thiết kế spacecraft architecture và payload',
          'Tính toán delta-v requirements cho mission',
          'Plan trajectory với gravity assists',
          'Design landing sequence và surface operations',
          'Calculate mission duration và resource requirements',
          'Simulate mission trong KSP hoặc software khác',
          'Create mission timeline và risk assessment',
        ],
        expectedResults:
          'Complete mission plan với detailed timeline và resource calculations',
        solution:
          'Comprehensive Mars mission plan bao gồm: spacecraft design với mass budget 15,000kg, launch vehicle selection (Falcon Heavy), orbital mechanics calculations sử dụng Hohmann transfer, detailed mission timeline từ pre-launch đến surface operations, risk assessment với mitigation strategies, budget breakdown $2.5B, international collaboration framework, và technology demonstrations. Mission sẽ sử dụng robotic probe để explore Mars surface trong 26 months với scientific instruments bao gồm cameras, spectrometers, drill system, weather station, ground-penetrating radar và sample analysis laboratory.',
      },
    ],
    realWorldApplications: [
      'Satellite technology cho telecommunications',
      'GPS và navigation systems',
      'Earth observation cho climate monitoring',
      'Space-based scientific research',
      'Commercial space transportation',
    ],
    caseStudies: [
      {
        title: 'NASA Perseverance Mars Mission',
        organization: 'NASA / JPL',
        problem: 'Search for signs of ancient life on Mars và collect samples',
        solution:
          'Advanced rover với sophisticated scientific instruments và sample caching',
        impact:
          'Groundbreaking discoveries about Mars geology và potential for past life',
        innovations: [
          'Autonomous helicopter flight',
          'Advanced sample caching',
          'AI-powered navigation',
        ],
      },
    ],
    spaceConcepts: [
      'Rocket Propulsion',
      'Orbital Mechanics',
      'Space Environment',
      'Mission Design',
      'Planetary Science',
    ],
    missions: [
      'Apollo Moon Landings',
      'Voyager Interstellar Mission',
      'Hubble Space Telescope',
      'International Space Station',
      'Mars Rover Missions',
    ],
  },
  {
    id: 'rocket-science-propulsion',
    title: 'Rocket Science và Propulsion Systems',
    description:
      'Tìm hiểu nguyên lý hoạt động của rockets và các hệ thống propulsion trong space exploration.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=4jEz03Z8azc',
    objectives: [
      'Nắm vững Tsiolkovsky rocket equation',
      'Hiểu các loại rocket propulsion: chemical, electric, nuclear',
      'Thiết kế và phân tích rocket performance',
      'Tìm hiểu future propulsion technologies',
    ],
    prerequisites: [
      'Space exploration fundamentals',
      'Physics: mechanics, thermodynamics',
      'Calculus và differential equations',
      'Engineering principles',
    ],
    exercises: [
      {
        title: 'Rocket Design Challenge',
        description: 'Thiết kế rocket system cho specific mission requirements',
        difficulty: 'Nâng cao',
        materials: [
          'RocketLab simulation software',
          'Propulsion calculations',
          'CAD tools',
        ],
        procedure: [
          'Define mission requirements (payload, orbit, constraints)',
          'Select appropriate propulsion system',
          'Calculate mass ratios using rocket equation',
          'Design multi-stage rocket configuration',
          'Analyze performance với different propellants',
          'Optimize thrust-to-weight ratios',
          'Simulate launch trajectory',
          'Cost analysis và comparison với existing rockets',
        ],
      },
    ],
    realWorldApplications: [
      'Commercial launch services (SpaceX, Blue Origin)',
      'Military missile systems',
      'Satellite deployment',
      'Interplanetary missions',
      'Space tourism vehicles',
    ],
    technologies: [
      {
        name: 'Chemical Propulsion',
        description: 'Traditional rocket engines burning fuel với oxidizer',
        applications: [
          'Launch vehicles',
          'Spacecraft maneuvering',
          'Landing systems',
        ],
        currentStatus: 'Mature technology, continuously improving efficiency',
      },
      {
        name: 'Ion Propulsion',
        description: 'Electric propulsion using ionized gas',
        applications: [
          'Deep space missions',
          'Satellite station-keeping',
          'Interplanetary travel',
        ],
        currentStatus: 'Operational on many spacecraft, advancing in power',
      },
    ],
  },
  {
    id: 'satellite-technology',
    title: 'Satellite Technology và Applications',
    description:
      'Khám phá công nghệ vệ tinh và ứng dụng trong đời sống hàng ngày.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu các loại satellites và orbits',
      'Nắm vững satellite communication systems',
      'Tìm hiểu Earth observation satellites',
      'Thực hành satellite data analysis',
    ],
    prerequisites: [
      'Basic physics và telecommunications',
      'Understanding của radio waves',
      'Computer science fundamentals',
    ],
    exercises: [
      {
        title: 'CubeSat Mission Design',
        description: 'Thiết kế CubeSat mission cho Earth observation',
        difficulty: 'Trung bình',
        procedure: [
          'Define scientific objectives',
          'Select appropriate sensors và instruments',
          'Design satellite bus và power systems',
          'Plan orbital parameters',
          'Calculate communication requirements',
          'Design ground segment',
          'Create mission timeline',
          'Budget analysis và funding strategy',
        ],
      },
    ],
    realWorldApplications: [
      'Weather forecasting',
      'GPS navigation',
      'Internet connectivity',
      'Environmental monitoring',
      'Disaster response',
    ],
  },
  {
    id: 'space-colonization',
    title: 'Space Colonization và Future Missions',
    description:
      'Tìm hiểu về tương lai của human space exploration và colonization plans.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu challenges của long-duration spaceflight',
      'Tìm hiểu life support systems',
      'Khám phá Mars colonization plans',
      'Đánh giá feasibility của interstellar travel',
    ],
    prerequisites: [
      'Space science background',
      'Biology và life sciences',
      'Engineering systems thinking',
    ],
    exercises: [
      {
        title: 'Mars Colony Planning',
        description: 'Thiết kế sustainable Mars colony cho 1000 residents',
        difficulty: 'Nâng cao',
        procedure: [
          'Site selection on Mars surface',
          'Habitat design cho radiation protection',
          'Life support systems planning',
          'Food production systems',
          'Transportation infrastructure',
          'Resource utilization (ISRU)',
          'Social và governance structures',
          'Emergency protocols và backup systems',
        ],
      },
    ],
    realWorldApplications: [
      'International Space Station operations',
      'Lunar base development',
      'Mars exploration preparation',
      'Deep space mission planning',
      'Space tourism industry',
    ],
  },
];
