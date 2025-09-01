export interface VietnameseCultureLesson {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  videoUrl: string;
  imageUrl?: string;
  culturalAspects: string[];
  technologies: string[];
  resources: Resource[];
  caseStudies: CaseStudy[];
}

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  requirements: string[];
  hints: string[];
  expectedOutput: string;
}

interface Resource {
  title: string;
  url: string;
  type: 'platform' | 'museum' | 'archive' | 'tool' | 'dataset';
  description: string;
}

interface CaseStudy {
  title: string;
  organization: string;
  problem: string;
  solution: string;
  impact: string;
  innovations: string[];
}

export const vietnameseCultureLessons: VietnameseCultureLesson[] = [
  {
    id: 'digital-heritage-preservation',
    title: 'Bài 1: Digital Heritage Preservation và Cultural Documentation',
    description:
      'Học cách số hóa và bảo tồn di sản văn hóa Việt Nam bằng công nghệ hiện đại. Phát triển solutions cho museums, historical sites và cultural institutions.',
    videoUrl: 'https://www.youtube.com/watch?v=ZuJNBWKczBQ',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '150 phút',
    culturalAspects: ['Tangible heritage', 'Intangible heritage', 'Traditional crafts', 'Folk stories'],
    technologies: ['3D scanning', 'VR/AR', 'Digital archives', 'Blockchain authentication'],
    objectives: [
      'Implement digital preservation workflows cho Vietnamese cultural artifacts',
      'Create virtual museum experiences with immersive technology',
      'Develop cultural knowledge management systems',
      'Build community engagement platforms cho cultural education',
    ],
    prerequisites: [
      'Basic understanding of Vietnamese culture và history',
      'Familiarity với digital media tools',
      'Knowledge of database management',
    ],
    exercises: [
      {
        title: 'Virtual Museum Creation',
        description: 'Build virtual museum experience cho Vietnamese traditional crafts',
        difficulty: 'Trung bình',
        requirements: ['3D modeling software', 'Web development tools', 'Cultural content'],
        hints: [
          'Partner với local craftspeople for authentic content',
          'Use 360-degree photography for immersive experiences',
          'Implement multi-language support (Vietnamese, English, Chinese)',
        ],
        expectedOutput: 'Interactive virtual museum với educational content',
        solution: 'Three.js-based virtual environment với integrated storytelling',
      },
    ],
    realWorldApplications: [
      'Museum digital transformation projects',
      'Cultural tourism technology platforms',
      'Educational content cho Vietnamese heritage',
      'Documentary và archival systems',
    ],
    caseStudies: [
      {
        title: 'Vietnam Museum of Ethnology Digital Project',
        organization: 'Vietnam Museum of Ethnology',
        problem: 'Digitize và preserve ethnic minority cultural artifacts',
        solution: 'Comprehensive digital archive với VR experiences',
        impact: '500% increase in virtual visitors, preserved 10,000+ artifacts',
        innovations: [
          'Community involvement is crucial for authentic representation',
          'Multi-language support increases accessibility',
          'VR experiences engage younger audiences effectively',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam Digital Heritage Initiative',
        url: 'https://digitalheritage.gov.vn',
        type: 'platform',
        description: 'Government initiative for cultural digitization',
      },
    ],
  },
  {
    id: 'tourism-technology',
    title: 'Bài 2: Tourism Technology và Cultural Experience Platforms',
    description:
      'Phát triển tourism technology solutions cho Vietnamese destinations. Học smart tourism, mobile apps và cultural experience platforms.',
    videoUrl: 'https://www.youtube.com/shorts/CXbZ7P1ZG-s',
    imageUrl: 'https://images.unsplash.com/photo-1578498185814-83c5e5e1e0d6?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '180 phút',
    culturalAspects: ['Tourism experiences', 'Local communities', 'Cultural authenticity', 'Sustainable tourism'],
    technologies: ['Mobile apps', 'GPS/mapping', 'AI recommendations', 'Payment integration'],
    objectives: [
      'Design comprehensive tourism platforms cho Vietnamese destinations',
      'Implement AI-powered recommendation systems',
      'Create sustainable tourism technology solutions',
      'Build community-based tourism platforms',
    ],
    prerequisites: [
      'Mobile app development experience',
      'Understanding of tourism industry',
      'Knowledge of Vietnamese tourist destinations',
    ],
    exercises: [
      {
        title: 'Smart Tourism Mobile App',
        description: 'Build comprehensive tourism app cho Ha Long Bay experience',
        difficulty: 'Nâng cao',
        requirements: ['Mobile development platform', 'Maps API', 'Payment integration'],
        hints: [
          'Include offline maps cho remote areas',
          'Integrate với local tour operators',
          'Add cultural context và historical information',
        ],
        expectedOutput: 'Complete tourism app với booking và guidance features',
        solution: 'React Native app với backend integration và local partnerships',
      },
    ],
    realWorldApplications: [
      'Destination marketing platforms',
      'Cultural tour guide applications',
      'Local business discovery systems',
      'Sustainable tourism tracking tools',
    ],
    caseStudies: [
      {
        title: 'Hoi An Smart Tourism Initiative',
        organization: 'Hoi An City Tourism Department',
        problem: 'Manage overtourism while preserving cultural authenticity',
        solution: 'Smart tourism platform với crowd management và cultural education',
        impact: '30% better visitor distribution, increased local business revenue',
        innovations: [
          'Technology can help preserve culture through education',
          'Local community involvement is essential',
          'Data-driven tourism management benefits everyone',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam National Tourism Portal',
        url: 'https://vietnam.travel',
        type: 'platform',
        description: 'Official tourism information và resources',
      },
    ],
  },
];
