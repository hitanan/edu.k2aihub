import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface CrossCulturalLessonType extends BaseLessonData {
  culturalDimensions: string[];
  communicationPatterns: Array<{
    culture: string;
    directness: string;
    contextLevel: string;
    timeOrientation: string;
    hierarchyStyle: string;
    examples: string[];
  }>;
  adaptationStrategies: string[];
  globalCompetencies: string[];
}

export const crossCulturalLessons: CrossCulturalLessonType[] = [
  {
    id: 'cultural-intelligence-fundamentals',
    title: 'Cơ Bản Trí Tuệ Đa Văn Hóa',
    description:
      'Phát triển khả năng hiểu, giao tiếp và làm việc hiệu quả với người từ các nền văn hóa khác nhau trong thế giới toàn cầu.',
    duration: '140 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=q-1BEoIadCE', // Cultural Intelligence
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu về Cultural Intelligence (CQ) và 4 dimensions',
      'Nhận diện cultural biases và assumptions của bản thân',
      'Phát triển adaptive communication skills',
      'Build effective cross-cultural relationships',
    ],
    prerequisites: ['Open mindset về cultural differences', 'Experience với multicultural environments (preferred)'],
    culturalDimensions: [
      'Power Distance (Hierarchy vs Equality)',
      'Individualism vs Collectivism',
      'Uncertainty Avoidance (Risk Tolerance)',
      'Long-term vs Short-term Orientation',
      'Masculinity vs Femininity (Competition vs Cooperation)',
      'Indulgence vs Restraint (Gratification Control)',
    ],
    adaptationStrategies: [
      'Cultural Code-Switching',
      'Active Listening Across Cultures',
      'Non-verbal Communication Awareness',
      'Contextual Communication Adjustment',
      'Conflict Resolution Across Cultures',
      'Trust Building in Diverse Teams',
    ],
    globalCompetencies: [
      'Cultural Self-Awareness',
      'Empathy và Perspective-Taking',
      'Adaptive Communication',
      'Global Mindset Development',
      'Inclusive Leadership',
      'Cross-cultural Negotiation',
    ],
    communicationPatterns: [
      {
        culture: 'East Asian (China, Japan, Korea)',
        directness: 'Indirect',
        contextLevel: 'High Context',
        timeOrientation: 'Long-term',
        hierarchyStyle: 'High Power Distance',
        examples: [
          'Reading between the lines',
          'Saving face important',
          'Group harmony priority',
          'Respect for seniority',
        ],
      },
      {
        culture: 'Germanic (Germany, Netherlands)',
        directness: 'Very Direct',
        contextLevel: 'Low Context',
        timeOrientation: 'Long-term',
        hierarchyStyle: 'Low Power Distance',
        examples: ['Straightforward feedback', 'Punctuality critical', 'Task-focused', 'Egalitarian discussions'],
      },
      {
        culture: 'Latin American (Brazil, Mexico)',
        directness: 'Indirect',
        contextLevel: 'High Context',
        timeOrientation: 'Short-term',
        hierarchyStyle: 'High Power Distance',
        examples: [
          'Relationship-first approach',
          'Flexible time concepts',
          'Warm communication style',
          'Respect for authority',
        ],
      },
      {
        culture: 'Nordic (Sweden, Denmark)',
        directness: 'Balanced',
        contextLevel: 'Medium Context',
        timeOrientation: 'Long-term',
        hierarchyStyle: 'Very Low Power Distance',
        examples: ['Consensus-driven decisions', 'Work-life balance priority', 'Modesty valued', 'Flat organizations'],
      },
      {
        culture: 'Middle Eastern (UAE, Saudi)',
        directness: 'Indirect',
        contextLevel: 'High Context',
        timeOrientation: 'Short-term',
        hierarchyStyle: 'High Power Distance',
        examples: [
          'Hospitality emphasis',
          'Relationship building critical',
          'Honor và reputation important',
          'Religious considerations',
        ],
      },
    ],
    exercises: [
      {
        title: 'Cultural Self-Assessment',
        description: 'Map your cultural programming và biases',
        difficulty: 'Cơ bản',
        materials: ['Cultural values assessment', 'Reflection questions'],
        procedure: [
          'Complete Hofstede cultural dimensions assessment',
          'Identify your cultural "defaults" và assumptions',
          'Reflect on formative cultural experiences',
          'Map your communication style preferences',
          'Identify potential blind spots',
          'Create cultural adaptation plan',
        ],
        expectedResults: 'Clear understanding của personal cultural programming',
        solution: 'Everyone has cultural biases - awareness is key to adaptation.',
      },
      {
        title: 'Cross-Cultural Scenario Analysis',
        description: 'Practice navigating complex intercultural situations',
        difficulty: 'Nâng cao',
        materials: ['Cultural scenario cards', 'Analysis framework'],
        procedure: [
          'Choose challenging cross-cultural scenario',
          'Analyze từ multiple cultural perspectives',
          'Identify potential misunderstandings',
          'Develop culturally sensitive responses',
          'Role-play different cultural approaches',
          'Reflect on insights và learning',
        ],
        expectedResults: 'Improved cultural situation navigation skills',
        solution: 'Assume positive intent, ask clarifying questions, adapt your style to context.',
      },
      {
        title: 'Global Team Simulation',
        description: 'Lead virtual team với diverse cultural backgrounds',
        difficulty: 'Nâng cao',
        materials: ['Team profiles', 'Project scenario', 'Communication tools'],
        procedure: [
          'Form virtual team với diverse cultural profiles',
          'Navigate team formation và norming',
          'Manage cultural communication differences',
          'Resolve cross-cultural conflicts',
          'Deliver project results together',
          'Debrief cultural learnings',
        ],
        expectedResults: 'Practical global team leadership experience',
        solution: 'Establish clear cultural norms, overcommunicate, celebrate differences as strengths.',
      },
    ],
    realWorldApplications: [
      'Managing global remote teams',
      'International business negotiations',
      'Study abroad và cultural exchange',
      'Multicultural customer service',
      'Cross-cultural partnerships',
    ],
    caseStudies: [
      {
        title: 'Netflix Global Expansion',
        organization: 'Netflix',
        problem: 'Adapting content và platform for global audiences',
        solution: 'Cultural intelligence-driven localization strategy',
        impact: 'Successful expansion to 190+ countries',
        innovations: [
          'Local content creation',
          'Cultural adaptation algorithms',
          'Regional leadership teams',
          'Cultural sensitivity training',
        ],
      },
      {
        title: "Toyota's Cross-Cultural Manufacturing",
        organization: 'Toyota',
        problem: 'Implementing Japanese manufacturing principles globally',
        solution: 'Cultural adaptation của Toyota Production System',
        impact: 'Successful global manufacturing network',
        innovations: [
          'Cultural bridge positions',
          'Adapted training methods',
          'Local leadership development',
          'Respect for local customs',
        ],
      },
    ],
    resources: [
      {
        title: 'Cultural Intelligence Center',
        url: 'https://www.culturalq.com',
        type: 'Assessment',
      },
      {
        title: 'Hofstede Insights',
        url: 'https://www.hofstede-insights.com',
        type: 'Research',
      },
      {
        title: 'Country Navigator',
        url: 'https://www.countrynavigator.com',
        type: 'Tools',
      },
    ],
  },
  {
    id: 'global-communication-mastery',
    title: 'Thành Thạo Giao Tiếp Toàn Cầu',
    description:
      'Master advanced cross-cultural communication techniques để succeed trong international business và global collaboration.',
    duration: '160 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=PMcRhyn7Xn8', // Global Communication Skills
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop',
    objectives: [
      'Master high-context vs low-context communication',
      'Navigate cultural hierarchy và power dynamics',
      'Develop inclusive leadership across cultures',
      'Build trust rapidly trong multicultural environments',
    ],
    prerequisites: [
      'Đã hoàn thành Cultural Intelligence Fundamentals',
      'Experience working với international colleagues',
    ],
    culturalDimensions: [
      'Communication Context (Direct vs Indirect)',
      'Time Orientation (Monochronic vs Polychronic)',
      'Relationship Building (Task vs Relationship First)',
      'Feedback Styles (Public vs Private)',
      'Decision Making (Top-down vs Consensus)',
      'Conflict Resolution (Confrontational vs Harmonious)',
    ],
    adaptationStrategies: [
      'Cultural Communication Switching',
      'Inclusive Meeting Facilitation',
      'Cross-Cultural Feedback Delivery',
      'International Presentation Styles',
      'Virtual Team Culture Building',
      'Cultural Conflict Mediation',
    ],
    globalCompetencies: [
      'Intercultural Sensitivity',
      'Global Leadership Presence',
      'Cross-Cultural Negotiation',
      'Inclusive Decision Making',
      'Cultural Change Management',
      'Global Talent Development',
    ],
    communicationPatterns: [
      {
        culture: 'American Business',
        directness: 'Direct',
        contextLevel: 'Low Context',
        timeOrientation: 'Monochronic',
        hierarchyStyle: 'Medium Power Distance',
        examples: [
          'Quick introductions',
          'Results-focused discussions',
          'Individual accountability',
          'Time-boxed meetings',
        ],
      },
      {
        culture: 'Indian Business',
        directness: 'Indirect',
        contextLevel: 'High Context',
        timeOrientation: 'Polychronic',
        hierarchyStyle: 'High Power Distance',
        examples: [
          'Relationship building first',
          'Respectful disagreement',
          'Hierarchy acknowledgment',
          'Flexibility với time',
        ],
      },
    ],
    exercises: [
      {
        title: 'Inclusive Meeting Design',
        description: 'Design meetings that engage all cultural communication styles',
        difficulty: 'Nâng cao',
        materials: ['Meeting templates', 'Cultural participation guides'],
        procedure: [
          'Analyze team cultural composition',
          'Design agenda accommodating different styles',
          'Create safe spaces for all communication preferences',
          'Practice inclusive facilitation techniques',
          'Gather feedback từ diverse participants',
          'Iterate based on cultural input',
        ],
        expectedResults: 'Meetings where all cultures can contribute effectively',
        solution: 'Pre-meeting preparation, multiple input channels, balanced speaking time, follow-up discussions.',
      },
      {
        title: 'Cross-Cultural Negotiation Simulation',
        description: 'Practice high-stakes negotiation across cultures',
        difficulty: 'Nâng cao',
        materials: ['Negotiation scenarios', 'Cultural briefings', 'Outcome tracking'],
        procedure: [
          'Study negotiation styles of different cultures',
          'Prepare culturally-appropriate strategies',
          'Conduct multi-party negotiation simulation',
          'Navigate cultural differences in real-time',
          'Analyze outcomes và cultural factors',
          'Develop adaptive negotiation framework',
        ],
        expectedResults: 'Advanced cross-cultural negotiation skills',
        solution:
          'Understand cultural values behind positions, build relationships first, use cultural mediators when needed.',
      },
      {
        title: 'Global Leadership Challenge',
        description: 'Lead change initiative across multiple cultures',
        difficulty: 'Chuyên gia',
        materials: ['Change scenario', 'Cultural resistance patterns', 'Leadership tools'],
        procedure: [
          'Analyze change resistance patterns by culture',
          'Develop culturally-adapted change strategy',
          'Build coalition across cultural groups',
          'Communicate vision using cultural frames',
          'Navigate cultural resistance và adaptation',
          'Measure success across cultural dimensions',
        ],
        expectedResults: 'Proven ability to lead change globally',
        solution: 'Involve cultural champions, adapt messaging to values, respect local implementation variations.',
      },
    ],
    realWorldApplications: [
      'Leading global teams và initiatives',
      'International sales và business development',
      'Cross-cultural merger integration',
      'Global customer relationship management',
      'International partnership development',
    ],
    caseStudies: [
      {
        title: "Unilever's Cultural Integration",
        organization: 'Unilever',
        problem: 'Managing 400+ brands across 190 countries',
        solution: 'Cultural intelligence integrated into leadership development',
        impact: 'Successful global brand management với local relevance',
        innovations: [
          'Cultural mentoring programs',
          'Local insights integration',
          'Cross-cultural leadership paths',
          'Cultural celebration initiatives',
        ],
      },
      {
        title: "Zoom's Global Team Culture",
        organization: 'Zoom',
        problem: 'Building cohesive culture across global remote workforce',
        solution: 'Intentional cross-cultural team building và communication',
        impact: 'Strong global culture supporting rapid growth',
        innovations: [
          'Cultural sharing sessions',
          'Inclusive communication training',
          'Time zone equity policies',
          'Cultural celebration events',
        ],
      },
    ],
    resources: [
      {
        title: 'Getting to Yes Across Cultures',
        url: 'https://www.amazon.com/dp/0143118749',
        type: 'Book',
      },
      {
        title: 'INSEAD Global Executive MBA',
        url: 'https://www.insead.edu',
        type: 'Education',
      },
      {
        title: 'Meridian International Center',
        url: 'https://www.meridian.org',
        type: 'Training',
      },
    ],
  },
  {
    id: 'building-global-networks',
    title: 'Xây Dựng Mạng Lưới Toàn Cầu',
    description:
      'Strategies để build và maintain professional networks across cultures, leveraging diversity cho career và business success.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=GXy__kBVq1M', // Global Networking
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=600&fit=crop',
    objectives: [
      'Build authentic relationships across cultures',
      'Leverage cultural diversity trong networks',
      'Navigate different networking styles globally',
      'Maintain global relationships long-term',
    ],
    prerequisites: ['Đã hoàn thành lessons trước trong module', 'Active trong professional networking'],
    culturalDimensions: [
      'Relationship vs Task Orientation',
      'Trust Building Approaches',
      'Reciprocity Expectations',
      'Introduction Protocols',
      'Gift-Giving Customs',
      'Business Card Etiquette',
    ],
    adaptationStrategies: [
      'Cultural Networking Approaches',
      'Virtual Relationship Building',
      'Cross-Cultural Mentorship',
      'Global Community Participation',
      'Cultural Bridge Building',
      'International Alumni Networks',
    ],
    globalCompetencies: [
      'Cultural Relationship Intelligence',
      'Global Network Orchestration',
      'Cross-Cultural Value Creation',
      'International Collaboration',
      'Cultural Knowledge Sharing',
      'Global Opportunity Recognition',
    ],
    communicationPatterns: [
      {
        culture: 'Western Professional',
        directness: 'Direct',
        contextLevel: 'Low Context',
        timeOrientation: 'Task-First',
        hierarchyStyle: 'Egalitarian',
        examples: ['Quick value proposition', 'LinkedIn connections', 'Coffee meetings', 'Direct ask for help'],
      },
      {
        culture: 'East Asian Professional',
        directness: 'Indirect',
        contextLevel: 'High Context',
        timeOrientation: 'Relationship-First',
        hierarchyStyle: 'Hierarchical',
        examples: ['Proper introductions', 'Long relationship building', 'Group activities', 'Indirect reciprocity'],
      },
    ],
    exercises: [
      {
        title: 'Cultural Networking Map',
        description: 'Map và strategize your global professional network',
        difficulty: 'Trung bình',
        materials: ['Network mapping tool', 'Cultural analysis framework'],
        procedure: [
          'Audit current professional network by culture',
          'Identify cultural gaps và opportunities',
          'Research networking customs of target cultures',
          'Create culturally-appropriate outreach strategies',
          'Set relationship building goals by region',
          'Track progress và cultural learnings',
        ],
        expectedResults: 'Strategic global network development plan',
        solution: 'Quality over quantity, genuine interest trong other cultures, consistent follow-up.',
      },
      {
        title: 'Virtual Cross-Cultural Event',
        description: 'Organize online event connecting different cultures',
        difficulty: 'Nâng cao',
        materials: ['Event platform', 'Cultural programming guides', 'Networking tools'],
        procedure: [
          'Design event accommodating multiple time zones',
          'Create culturally inclusive programming',
          'Facilitate cross-cultural introductions',
          'Enable meaningful conversations across cultures',
          'Follow up to maintain connections',
          'Measure networking success across cultures',
        ],
        expectedResults: 'Successful cross-cultural networking event',
        solution: 'Cultural co-hosts, structured networking activities, cultural sharing moments, clear follow-up.',
      },
    ],
    realWorldApplications: [
      'International business development',
      'Global career advancement',
      'Cross-cultural partnerships',
      'International investment opportunities',
      'Global knowledge exchange',
    ],
    caseStudies: [
      {
        title: 'World Economic Forum Network',
        organization: 'World Economic Forum',
        problem: 'Creating meaningful connections across global leaders',
        solution: 'Structured cross-cultural networking approaches',
        impact: 'Influential global leadership network',
        innovations: [
          'Cultural pairing programs',
          'Regional integration',
          'Shared purpose initiatives',
          'Long-term relationship cultivation',
        ],
      },
    ],
    resources: [
      {
        title: 'Global Professional Networks',
        url: 'https://www.linkedin.com/company/world-economic-forum',
        type: 'Platform',
      },
      {
        title: 'Cultural Detective',
        url: 'https://www.culturaldetective.com',
        type: 'Tools',
      },
    ],
  },
];

export default crossCulturalLessons;
