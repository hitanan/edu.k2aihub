import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface InternationalBusinessLesson extends BaseLessonData {
  businessDomain: 'cross-cultural-management' | 'global-strategy' | 'international-trade' | 'cultural-intelligence' | 'global-leadership';
  culturalRegions: string[];
  businessApplications: string[];
  vietnameseBusinessContext: string[];
  globalCompetencies: string[];
}

export const internationalBusinessLessons: InternationalBusinessLesson[] = [
  {
    id: 'cross-cultural-management-leadership',
    title: 'Quản Lý & Lãnh Đạo Đa Văn Hóa',
    description: 'Master cross-cultural management techniques, leadership trong diverse teams, cultural intelligence development, và effective communication across cultures.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=YMyofREc5Jk', // Cross Cultural Management
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
    businessDomain: 'cross-cultural-management',
    culturalRegions: [
      'East Asian business cultures (China, Japan, Korea)',
      'Southeast Asian markets (ASEAN countries)',
      'Western business cultures (US, Europe)',
      'Latin American và Middle Eastern markets'
    ],
    objectives: [
      'Develop cultural intelligence (CQ) capabilities',
      'Implement effective cross-cultural communication strategies',
      'Manage diverse multicultural teams successfully',
      'Navigate cultural differences trong business negotiations',
      'Create inclusive global work environments'
    ],
    prerequisites: [
      'Basic management experience',
      'Interest in international business',
      'Open mindset về cultural differences'
    ],
    vietnameseBusinessContext: [
      'Vietnam as bridge between East Asian và Western business cultures',
      'Managing international partnerships với foreign companies',
      'Cultural adaptation strategies cho Vietnamese companies going global',
      'Hosting và integrating foreign workers trong Vietnamese companies'
    ],
    businessApplications: [
      'International joint venture management',
      'Global team leadership strategies',
      'Cross-border merger và acquisition integration',
      'International project management'
    ],
    globalCompetencies: [
      'Cultural assessment và adaptation skills',
      'Multilingual communication capabilities',
      'Conflict resolution across cultures',
      'Global leadership presence'
    ],
    exercises: [
      {
        title: 'Cultural Intelligence Assessment & Development Plan',
        description: 'Assess personal cultural intelligence và create development plan cho managing international business relationships',
        difficulty: 'Trung bình',
        materials: ['Cultural Intelligence Scale (CQS)', 'Culture mapping tools', 'Communication assessment frameworks', 'Development planning templates'],
        procedure: [
          'Complete comprehensive cultural intelligence assessment',
          'Identify cultural strengths và development areas',
          'Research target cultural contexts for business operations',
          'Design skill development plan với practical exercises',
          'Create measurement framework cho improvement tracking'
        ],
        expectedResults: 'Personalized cultural intelligence development plan với specific competencies và measurable goals',
        solution: 'Systematic approach to developing cultural awareness, empathy, communication skills, và adaptive behaviors'
      }
    ],
    realWorldApplications: [
      'Managing Vietnamese-Japanese joint ventures',
      'Leading international sales teams',
      'Facilitating cross-cultural business negotiations',
      'Building global supplier relationships'
    ],
    caseStudies: [
      {
        title: 'Vingroup International Expansion Strategy',
        organization: 'Vingroup Corporation',
        problem: 'Expanding retail và real estate operations into culturally diverse Southeast Asian markets',
        solution: 'Cultural intelligence training programs, local partnership strategies, adaptive business models, cross-cultural leadership development',
        impact: 'Successfully entered 3 new markets, reduced cultural conflict incidents by 70%, improved international team performance by 45%',
        innovations: ['Cultural adaptation framework', 'Local-global hybrid models', 'Cross-cultural leadership pipeline']
      }
    ],
    resources: [
      {
        title: 'Cultural Intelligence Research',
        url: 'https://culturalq.com/',
        type: 'Research'
      }
    ]
  },
  {
    id: 'global-supply-chain-trade',
    title: 'Chuỗi Cung Ứng Toàn Cầu & Thương Mại Quốc Tế',
    description: 'Understand international trade mechanics, global supply chain management, trade finance, import/export regulations, và international logistics.',
    duration: '235 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=A2Gn7Cd8kjQ', // International Trade and Supply Chain
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop',
    businessDomain: 'international-trade',
    culturalRegions: [
      'ASEAN Free Trade Area operations',
      'China-Vietnam trade corridor',
      'European Union trade relationships',
      'Trans-Pacific trading partnerships'
    ],
    objectives: [
      'Master international trade documentation và procedures',
      'Design efficient global supply chain networks',
      'Understand trade finance instruments và risk management',
      'Navigate international shipping và logistics',
      'Implement sustainable supply chain practices'
    ],
    prerequisites: [
      'Basic business knowledge',
      'Understanding of logistics principles',
      'Familiarity với international markets'
    ],
    vietnameseBusinessContext: [
      'Vietnam as manufacturing hub trong global supply chains',
      'EVFTA (EU-Vietnam Free Trade Agreement) opportunities',
      'RCEP (Regional Comprehensive Economic Partnership) benefits',
      'Vietnam-US trade relationship management'
    ],
    businessApplications: [
      'Export market development strategies',
      'Import sourcing và vendor management',
      'International distribution network design',
      'Cross-border e-commerce operations'
    ],
    globalCompetencies: [
      'Trade regulation compliance expertise',
      'International payment systems knowledge',
      'Supply chain risk assessment abilities',
      'Global logistics optimization skills'
    ],
    exercises: [
      {
        title: 'International Market Entry Strategy',
        description: 'Develop comprehensive market entry strategy cho Vietnamese company expanding into new international market',
        difficulty: 'Nâng cao',
        materials: ['Market research tools', 'Trade analysis software', 'Supply chain modeling platforms', 'Financial planning templates'],
        procedure: [
          'Conduct target market analysis including cultural, economic, regulatory factors',
          'Design supply chain và distribution strategy',
          'Develop pricing strategy accounting for all international costs',
          'Create risk management plan cho trade finance và operations',
          'Plan implementation timeline với key milestones'
        ],
        expectedResults: 'Complete international market entry plan với financial projections, risk assessment, và implementation roadmap',
        solution: 'Systematic market entry approach combining market research, operational planning, financial analysis, và risk mitigation'
      }
    ],
    realWorldApplications: [
      'Setting up international manufacturing operations',
      'Developing export markets cho Vietnamese products',
      'Managing global supplier networks',
      'Optimizing cross-border logistics costs'
    ],
    caseStudies: [
      {
        title: 'VinFast Global Expansion',
        organization: 'VinFast Auto',
        problem: 'Establishing international electric vehicle supply chain và market presence',
        solution: 'Global manufacturing strategy, international supplier partnerships, complex logistics networks, market-specific adaptation',
        impact: 'Established operations in 3 continents, built international supplier network of 200+ companies, achieved 45% cost optimization',
        innovations: ['Flexible global manufacturing', 'Sustainable supply chain practices', 'Market-adaptive product strategies']
      }
    ],
    resources: [
      {
        title: 'International Trade Centre Resources',
        url: 'https://www.intracen.org/',
        type: 'Resource'
      }
    ]
  },
  {
    id: 'global-business-strategy-planning',
    title: 'Chiến Lược Kinh Doanh Toàn Cầu & Quy Hoạch',
    description: 'Develop global business strategies, international market analysis, competitive intelligence, và strategic planning for international expansion.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=jQUf-hBjMPM', // Global Business Strategy
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
    businessDomain: 'global-strategy',
    culturalRegions: [
      'Emerging Asian markets strategy',
      'Developed Western markets approach',
      'Latin American expansion opportunities',
      'Middle Eastern business development'
    ],
    objectives: [
      'Develop comprehensive global business strategies',
      'Conduct international competitive analysis',
      'Create market entry và expansion plans',
      'Implement global business model innovation',
      'Design international partnership strategies'
    ],
    prerequisites: [
      'Strategic management fundamentals',
      'International business awareness',
      'Competitive analysis experience'
    ],
    vietnameseBusinessContext: [
      'Vietnamese companies\' global expansion strategies',
      'Foreign direct investment into Vietnam',
      'Regional headquarters strategy trong Southeast Asia',
      'Government support programs cho international expansion'
    ],
    businessApplications: [
      'International joint venture planning',
      'Global product localization strategies',
      'Cross-border mergers và acquisitions',
      'International franchise development'
    ],
    globalCompetencies: [
      'Global market analysis capabilities',
      'Strategic scenario planning skills',
      'International competitive intelligence',
      'Global business model design'
    ],
    exercises: [
      {
        title: 'Global Expansion Strategy Development',
        description: 'Create comprehensive global expansion strategy cho Vietnamese technology company targeting 3 international markets',
        difficulty: 'Nâng cao',
        materials: ['Strategic planning frameworks', 'Market analysis tools', 'Competitive intelligence platforms', 'Financial modeling software'],
        procedure: [
          'Conduct comprehensive global market opportunity analysis',
          'Perform competitive landscape mapping trong target markets',
          'Design market entry strategies với timing và resource allocation',
          'Develop business model adaptations cho each market',
          'Create implementation roadmap với key performance indicators'
        ],
        expectedResults: 'Detailed global expansion strategy với market prioritization, entry strategies, và implementation plan',
        solution: 'Multi-market expansion approach với phased implementation, risk-adjusted resource allocation, và measurable success metrics'
      }
    ],
    realWorldApplications: [
      'Technology company international scaling',
      'Manufacturing expansion into new regions',
      'Service industry globalization',
      'E-commerce international marketplace development'
    ],
    caseStudies: [
      {
        title: 'FPT International Growth Strategy',
        organization: 'FPT Corporation',
        problem: 'Scaling technology services globally while maintaining Vietnamese competitive advantages',
        solution: 'Market-specific service offerings, strategic partnerships, cultural adaptation programs, global talent development',
        impact: 'Expanded to 26 countries, achieved $2.1B revenue with 40% from international markets, established 2 global R&D centers',
        innovations: ['Culturally-adapted service delivery', 'Global talent pipeline', 'Market-specific innovation centers']
      }
    ],
    resources: [
      {
        title: 'Global Strategy Research',
        url: 'https://hbr.org/topic/global-strategy',
        type: 'Research'
      }
    ]
  },
  {
    id: 'international-negotiation-communication',
    title: 'Đàm Phán & Giao Tiếp Quốc Tế',
    description: 'Master international business negotiation tactics, cross-cultural communication skills, diplomatic business interactions, và relationship building.',
    duration: '190 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=guHkzHWxLwE', // International Business Negotiation
    imageUrl: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=1200&h=600&fit=crop',
    businessDomain: 'cultural-intelligence',
    culturalRegions: [
      'Asian high-context communication styles',
      'Western direct communication approaches',
      'Middle Eastern relationship-focused negotiations',
      'Latin American personal connection importance'
    ],
    objectives: [
      'Develop advanced international negotiation skills',
      'Master cross-cultural communication techniques',
      'Build long-term international business relationships',
      'Navigate complex multicultural business situations',
      'Create win-win international partnerships'
    ],
    prerequisites: [
      'Basic negotiation skills',
      'Communication fundamentals',
      'Cultural awareness basics'
    ],
    vietnameseBusinessContext: [
      'Vietnamese business relationship building traditions',
      'Face-saving concepts trong international negotiations',
      'Hierarchical decision making trong cross-cultural contexts',
      'Building trust với foreign business partners'
    ],
    businessApplications: [
      'International contract negotiations',
      'Partnership agreement development',
      'Cross-border investment discussions',
      'Global supplier relationship management'
    ],
    globalCompetencies: [
      'Advanced listening và empathy skills',
      'Cultural adaptation techniques',
      'Diplomatic communication abilities',
      'Relationship maintenance strategies'
    ],
    exercises: [
      {
        title: 'International Business Negotiation Simulation',
        description: 'Conduct complex multi-party international business negotiation simulation involving cultural, legal, và economic considerations',
        difficulty: 'Nâng cao',
        materials: ['Negotiation simulation scenarios', 'Cultural briefing materials', 'Communication assessment tools', 'Relationship tracking frameworks'],
        procedure: [
          'Study cultural backgrounds of all negotiating parties',
          'Prepare negotiation strategy accounting for cultural factors',
          'Conduct multi-session negotiation với cultural role-playing',
          'Navigate cultural misunderstandings và communication challenges',
          'Evaluate outcomes và relationship preservation'
        ],
        expectedResults: 'Successful negotiation outcome with preserved relationships và cultural sensitivity demonstration',
        solution: 'Culturally-informed negotiation approach prioritizing relationship building, mutual understanding, và sustainable agreements'
      }
    ],
    realWorldApplications: [
      'Joint venture partnership negotiations',
      'International sales contract discussions',
      'Cross-cultural team conflict resolution',
      'Global strategic alliance development'
    ],
    caseStudies: [
      {
        title: 'Masan Group International Partnerships',
        organization: 'Masan Group Corporation',
        problem: 'Negotiating complex international partnerships với companies from different cultural backgrounds for market expansion',
        solution: 'Cultural intelligence training, local advisors, relationship-first approach, flexible negotiation strategies',
        impact: 'Secured $2B+ in international partnerships, maintained 95% partner satisfaction rate, expanded to 15 countries',
        innovations: ['Cultural partnership frameworks', 'Relationship management systems', 'Adaptive negotiation protocols']
      }
    ],
    resources: [
      {
        title: 'International Negotiation Institute',
        url: 'https://www.negotiations.com/international/',
        type: 'Training'
      }
    ]
  },
  {
    id: 'global-leadership-development',
    title: 'Phát Triển Lãnh Đạo Toàn Cầu',
    description: 'Develop global leadership competencies, international team management, cross-cultural leadership styles, và building global organizational culture.',
    duration: '205 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=x7s-6kGOoqE', // Global Leadership Development
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    businessDomain: 'global-leadership',
    culturalRegions: [
      'Asian collective leadership styles',
      'Western individual-focused leadership',
      'African ubuntu leadership principles',
      'Nordic collaborative leadership models'
    ],
    objectives: [
      'Develop global leadership mindset và capabilities',
      'Master virtual team leadership across time zones',
      'Create inclusive global organizational cultures',
      'Implement cross-cultural talent development programs',
      'Build sustainable global leadership pipelines'
    ],
    prerequisites: [
      'Leadership experience',
      'International business exposure',
      'Cultural sensitivity awareness'
    ],
    vietnameseBusinessContext: [
      'Developing Vietnamese leaders for global roles',
      'Managing international teams từ Vietnam headquarters',
      'Building bridges between Vietnamese và international management styles',
      'Succession planning cho global Vietnamese companies'
    ],
    businessApplications: [
      'Global executive development programs',
      'International assignment preparation',
      'Cross-cultural mentoring systems',
      'Global leadership succession planning'
    ],
    globalCompetencies: [
      'Adaptive leadership styles',
      'Global communication excellence',
      'Cultural change management',
      'International talent development'
    ],
    exercises: [
      {
        title: 'Global Leadership Development Program Design',
        description: 'Design comprehensive global leadership development program cho Vietnamese multinational company',
        difficulty: 'Nâng cao',
        materials: ['Leadership assessment tools', 'Global competency frameworks', 'Development program templates', 'Measurement systems'],
        procedure: [
          'Assess current global leadership capabilities và gaps',
          'Research best practices từ successful global companies',
          'Design multi-phase development program với cultural components',
          'Create mentoring và coaching support systems',
          'Develop measurement framework cho leadership effectiveness'
        ],
        expectedResults: 'Comprehensive global leadership development program với clear competencies, development paths, và success metrics',
        solution: 'Multi-faceted program combining cultural intelligence, leadership skills, global mindset development, và practical international experience'
      }
    ],
    realWorldApplications: [
      'Preparing executives for international assignments',
      'Building global management competencies',
      'Developing cross-cultural change leaders',
      'Creating international leadership networks'
    ],
    caseStudies: [
      {
        title: 'Techcombank Global Leadership Initiative',
        organization: 'Vietnam Technological and Commercial Joint Stock Bank',
        problem: 'Developing Vietnamese banking leaders capable of competing trong international financial markets',
        solution: 'Global leadership academy, international exchange programs, cross-cultural coaching, global mentorship networks',
        impact: 'Developed 150+ global-ready leaders, expanded international operations to 5 countries, improved global competitiveness scores by 60%',
        innovations: ['Vietnamese-global leadership hybrid model', 'Cultural bridge-building programs', 'Global leadership networks']
      }
    ],
    resources: [
      {
        title: 'Center for Creative Leadership',
        url: 'https://www.ccl.org/articles/leading-effectively-articles/what-is-global-leadership/',
        type: 'Research'
      }
    ]
  }
];