import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface EthicalMarketingLessonType extends BaseLessonData {
  ethicalPrinciples: string[];
  brandPurposeAreas: string[];
  transparencyMethods: string[];
  socialImpactMetrics: string[];
  stakeholderGroups: string[];
}

export const ethicalMarketingLessons: EthicalMarketingLessonType[] = [
  {
    id: 'purpose-driven-brand-foundation',
    title: 'Xây Dựng Nền Tảng Thương Hiệu Có Mục Đích',
    description: 'Hiểu cách định nghĩa và phát triển purpose authentic cho thương hiệu, kết nối với values của target audience và tạo meaningful connection.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU', // Purpose-driven brand building
    imageUrl: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&h=600&fit=crop',
    objectives: [
      'Định nghĩa brand purpose authentic và meaningful',
      'Phát triển mission và vision statements có tác động',
      'Xác định core values và principles của thương hiệu',
      'Tạo purpose-driven brand positioning strategy',
      'Hiểu mối liên hệ giữa purpose và profit',
      'Nghiên cứu successful purpose-driven brands globally',
    ],
    prerequisites: [
      'Kiến thức cơ bản về branding',
      'Hiểu biết về target audience research',
      'Awareness của social và environmental issues',
    ],
    ethicalPrinciples: ['Purpose-Profit Balance', 'Authentic Communication', 'Stakeholder Value', 'Long-term Thinking'],
    brandPurposeAreas: ['Social Impact', 'Environmental Sustainability', 'Community Development', 'Ethical Business Practices'],
    transparencyMethods: ['Purpose Documentation', 'Stakeholder Communication', 'Progress Reporting', 'Impact Measurement'],
    socialImpactMetrics: ['Brand Trust Score', 'Purpose Awareness', 'Social Engagement Rate', 'Community Impact Index'],
    stakeholderGroups: ['Customers', 'Employees', 'Communities', 'Partners', 'Society'],
    exercises: [
      {
        title: 'Purpose Discovery Workshop',
        description: 'Tạo comprehensive brand purpose statement cho Vietnamese market',
        difficulty: 'Trung bình',
        materials: ['Purpose Canvas Template', 'Values Assessment Tools', 'Stakeholder Mapping Guide'],
        procedure: [
          'Phân tích current brand positioning và market context',
          'Xác định social needs và opportunities trong Vietnamese market',
          'Develop purpose statement draft với input từ stakeholders',
          'Test purpose resonance với target audience',
          'Finalize purpose statement và implementation roadmap',
          'Create purpose activation plan across touchpoints',
        ],
        expectedResults: 'Clear, authentic brand purpose statement với actionable implementation plan',
        solution: 'Comprehensive purpose framework adapted for Vietnamese cultural values và market dynamics',
      },
    ],
    realWorldApplications: [
      'Vietnamese social enterprises building sustainable communities',
      'Fashion brands promoting ethical manufacturing practices',
      'Food companies supporting local farmers và organic farming',
      'Technology companies bridging digital divide trong rural areas',
      'Financial services promoting financial inclusion',
    ],
    caseStudies: [
      {
        title: 'Patagonia - Purpose-Driven Environmental Activism',
        organization: 'Patagonia Inc.',
        problem: 'Balancing business growth with environmental activism và authentic purpose',
        solution: 'Integrated environmental mission into core business strategy và operations',
        impact: '$1B+ revenue while maintaining strong environmental advocacy',
        innovations: ['1% for the Planet', 'Environmental Activism Campaigns', 'Sustainable Materials Innovation'],
      },
    ],
    resources: [
      {
        title: 'Purpose-Driven Brand Strategy Guide',
        url: 'https://www.bcg.com/publications/2015/marketing-sales-strategy-how-to-build-purpose-driven-brand',
        type: 'Guide',
      },
      {
        title: 'B-Corporation Assessment Tool',
        url: 'https://www.bcorporation.net/en-us/programs-and-tools/b-impact-assessment/',
        type: 'Tool',
      },
    ],
  },

  {
    id: 'ethical-marketing-frameworks',
    title: 'Frameworks Và Standards Cho Marketing Đạo Đức',
    description: 'Học các ethical frameworks và industry standards để ensure marketing campaigns honest, transparent và có tác động tích cực cho society.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=hVimVzgtD6w', // Ethical marketing principles
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu key ethical principles trong marketing practice',
      'Apply transparency standards trong advertising và communications',
      'Develop guidelines cho truthful và honest messaging',
      'Implement privacy protection và data ethics',
      'Create fair pricing strategies và value propositions',
      'Establish accountability measures cho marketing activities',
    ],
    prerequisites: [
      'Marketing fundamentals knowledge',
      'Understanding của consumer psychology',
      'Basic knowledge của legal regulations',
    ],
    ethicalPrinciples: ['Truth in Advertising', 'Consumer Protection', 'Data Privacy', 'Fair Competition'],
    brandPurposeAreas: ['Honest Communication', 'Consumer Rights', 'Data Protection', 'Fair Business Practices'],
    transparencyMethods: ['Clear Disclosure', 'Open Communication', 'Honest Advertising', 'Transparent Pricing'],
    socialImpactMetrics: ['Truth Score', 'Transparency Index', 'Consumer Trust Rating', 'Ethical Compliance Rate'],
    stakeholderGroups: ['Consumers', 'Regulatory Bodies', 'Industry Peers', 'Media', 'Society'],
    exercises: [
      {
        title: 'Ethical Marketing Audit',
        description: 'Comprehensive audit của existing marketing campaigns using ethical frameworks',
        difficulty: 'Nâng cao',
        materials: ['Ethics Assessment Checklist', 'Transparency Framework', 'Consumer Protection Guidelines'],
        procedure: [
          'Review current marketing materials cho ethical concerns',
          'Assess transparency levels trong brand communications',
          'Evaluate data collection và usage practices',
          'Check compliance với Vietnamese advertising regulations',
          'Identify areas for improvement và corrective actions',
          'Develop ethical marketing guidelines document',
        ],
        expectedResults: 'Detailed ethical assessment với recommendations for improvement',
        solution: 'Comprehensive ethics framework tailored to Vietnamese market context',
      },
    ],
    realWorldApplications: [
      'Pharmaceutical companies ensuring accurate health claims',
      'Financial institutions providing transparent pricing',
      'Food brands making truthful nutritional statements',
      'Beauty companies avoiding misleading before/after claims',
      'Technology companies protecting user privacy',
    ],
    caseStudies: [
      {
        title: 'Dove - Real Beauty Campaign Ethics',
        organization: 'Unilever/Dove',
        problem: 'Addressing unrealistic beauty standards trong advertising industry',
        solution: 'Developed authentic beauty campaigns featuring real women',
        impact: 'Increased brand trust và positive social impact on self-esteem',
        innovations: ['No Digital Distortion Policy', 'Real Beauty Pledge', 'Self-Esteem Education Programs'],
      },
    ],
    resources: [
      {
        title: 'AMA Code of Ethics for Marketing',
        url: 'https://www.ama.org/codes-of-conduct/',
        type: 'Reference',
      },
      {
        title: 'Vietnamese Advertising Law Guide',
        url: 'https://thuvienphapluat.vn/van-ban/Thuong-mai/Luat-Quang-cao-2012-16-2012-QH13-201624.aspx',
        type: 'Legal Reference',
      },
    ],
  },

  {
    id: 'social-impact-measurement',
    title: 'Đo Lường Và Báo Cáo Tác Động Xã Hội',
    description: 'Master các methods và tools để measure, track và communicate social impact của marketing activities và brand initiatives effectively.',
    duration: '165 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU', // Social impact measurement
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    objectives: [
      'Develop comprehensive social impact measurement framework',
      'Setup key performance indicators cho social initiatives',
      'Implement tracking systems cho community engagement',
      'Create effective impact reporting và storytelling',
      'Understand ESG metrics và sustainability reporting',
      'Build stakeholder feedback loops và continuous improvement',
    ],
    prerequisites: [
      'Basic analytics và data analysis skills',
      'Understanding của social issues và community needs',
      'Knowledge của sustainability concepts',
    ],
    ethicalPrinciples: ['Measurable Impact', 'Transparent Reporting', 'Stakeholder Accountability', 'Continuous Improvement'],
    brandPurposeAreas: ['Social Return on Investment', 'Community Benefit', 'Environmental Impact', 'Stakeholder Value'],
    transparencyMethods: ['Impact Reports', 'Dashboard Visualization', 'Stakeholder Updates', 'Public Reporting'],
    socialImpactMetrics: ['Social ROI', 'Community Engagement Score', 'Environmental Impact Reduction', 'Stakeholder Satisfaction'],
    stakeholderGroups: ['Beneficiaries', 'Investors', 'Communities', 'Partners', 'Regulators'],
    exercises: [
      {
        title: 'Social Impact Dashboard Development',
        description: 'Create comprehensive dashboard to track và visualize social impact metrics',
        difficulty: 'Nâng cao',
        materials: ['Impact Measurement Toolkit', 'KPI Templates', 'Reporting Framework'],
        procedure: [
          'Define social impact goals và target outcomes',
          'Identify relevant metrics và data collection methods',
          'Setup tracking systems và measurement tools',
          'Develop dashboard visualizations cho stakeholders',
          'Create regular reporting schedule và formats',
          'Establish feedback loops cho continuous improvement',
        ],
        expectedResults: 'Functional social impact measurement system với regular reporting',
        solution: 'Integrated impact measurement platform adapted for Vietnamese social context',
      },
    ],
    realWorldApplications: [
      'Non-profits tracking program effectiveness',
      'B-Corps measuring certified impact standards',
      'Social enterprises demonstrating community value',
      'Corporate CSR programs showing ROI',
      'Government initiatives measuring public benefit',
    ],
    caseStudies: [
      {
        title: 'Ben & Jerry\'s - Values-Based Impact Reporting',
        organization: 'Ben & Jerry\'s',
        problem: 'Demonstrating authentic commitment to social values beyond marketing',
        solution: 'Comprehensive impact reporting covering social justice initiatives',
        impact: 'Strong brand loyalty và credibility trong values-driven marketing',
        innovations: ['ActivistIceCream Platform', 'Social Mission Reporting', 'Values-Based Supplier Program'],
      },
    ],
    resources: [
      {
        title: 'Global Impact Investing Network Standards',
        url: 'https://thegiin.org/impact-measurement-management/',
        type: 'Standards',
      },
      {
        title: 'UN SDGs Impact Measurement Guide',
        url: 'https://sdgimpact.undp.org/practice-standards.html',
        type: 'Guide',
      },
    ],
  },

  {
    id: 'sustainable-business-models',
    title: 'Mô Hình Kinh Doanh Bền Vững Và Circular Economy',
    description: 'Explore innovative sustainable business models integrating circular economy principles với purpose-driven marketing strategies cho long-term success.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=zCRKvDyyHmI', // Circular economy business models
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
    objectives: [
      'Understand circular economy principles và applications',
      'Design sustainable business models cho different industries',
      'Integrate regenerative practices into operations',
      'Develop shared value creation strategies',
      'Implement long-term thinking trong business planning',
      'Create partnerships cho sustainable ecosystem development',
    ],
    prerequisites: [
      'Business model design experience',
      'Understanding của sustainability concepts',
      'Knowledge của value chain analysis',
    ],
    ethicalPrinciples: ['Environmental Sustainability', 'Social Equity', 'Economic Viability', 'Future Generations'],
    brandPurposeAreas: ['Circular Design', 'Regenerative Business', 'Shared Value', 'Long-term Impact'],
    transparencyMethods: ['Sustainability Reports', 'Circular Metrics', 'Impact Documentation', 'Stakeholder Engagement'],
    socialImpactMetrics: ['Carbon Footprint Reduction', 'Waste Elimination', 'Community Employment', 'Regenerative Impact'],
    stakeholderGroups: ['Environment', 'Communities', 'Supply Chain', 'Investors', 'Future Generations'],
    exercises: [
      {
        title: 'Circular Business Model Canvas',
        description: 'Design comprehensive circular economy business model cho Vietnamese market',
        difficulty: 'Nâng cao',
        materials: ['Circular Business Model Canvas', 'Sustainability Assessment Tools', 'Value Network Maps'],
        procedure: [
          'Analyze current linear business model limitations',
          'Identify circular economy opportunities trong value chain',
          'Design new business model với regenerative elements',
          'Calculate environmental và social benefits',
          'Develop implementation roadmap với partnerships',
          'Create marketing strategy highlighting circular benefits',
        ],
        expectedResults: 'Comprehensive circular business model với clear implementation plan',
        solution: 'Integrated circular economy framework adapted for Vietnamese business context',
      },
    ],
    realWorldApplications: [
      'Fashion brands implementing clothing rental models',
      'Electronics companies designing for repairability',
      'Food companies reducing packaging waste',
      'Construction materials from recycled sources',
      'Agricultural businesses using regenerative farming',
    ],
    caseStudies: [
      {
        title: 'Interface Inc. - Mission Zero Carbon Negative',
        organization: 'Interface Inc.',
        problem: 'Carpet manufacturing industry\'s environmental impact',
        solution: 'Complete business transformation toward carbon negative operations',
        impact: '96% reduction in carbon intensity since 1996',
        innovations: ['Carbon Negative Products', 'Regenerative Agriculture Program', 'Circular Materials Innovation'],
      },
    ],
    resources: [
      {
        title: 'Ellen MacArthur Foundation Circular Design Guide',
        url: 'https://ellenmacarthurfoundation.org/circular-design',
        type: 'Guide',
      },
      {
        title: 'B-Corp Business Model Assessment',
        url: 'https://www.bcorporation.net/en-us/movement/about-b-corps',
        type: 'Assessment',
      },
    ],
  },

  {
    id: 'conscious-consumer-engagement',
    title: 'Kết Nối Với Conscious Consumers Và Community Building',
    description: 'Master strategies to engage với conscious consumers, build authentic communities và foster long-term relationships based on shared values.',
    duration: '170 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=8LwveoDO_M8', // Conscious consumer engagement
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    objectives: [
      'Understand conscious consumer behavior và motivations',
      'Develop authentic engagement strategies',
      'Build communities around shared values và purpose',
      'Create meaningful content resonating với conscious audiences',
      'Foster long-term relationships beyond transactions',
      'Leverage user-generated content for authentic storytelling',
    ],
    prerequisites: [
      'Social media marketing experience',
      'Community management skills',
      'Understanding của consumer psychology',
    ],
    ethicalPrinciples: ['Authentic Communication', 'Community Empowerment', 'Shared Values', 'Long-term Relationships'],
    brandPurposeAreas: ['Community Building', 'Shared Values', 'Authentic Engagement', 'Long-term Relationships'],
    transparencyMethods: ['Open Dialogue', 'Community Feedback', 'Transparent Communication', 'Authentic Storytelling'],
    socialImpactMetrics: ['Community Engagement Rate', 'Values Alignment Score', 'Advocacy Rate', 'Long-term Retention'],
    stakeholderGroups: ['Conscious Consumers', 'Brand Advocates', 'Community Members', 'Influencers', 'Partners'],
    exercises: [
      {
        title: 'Conscious Community Platform Design',
        description: 'Create comprehensive strategy for building và managing conscious consumer community',
        difficulty: 'Trung bình',
        materials: ['Community Strategy Template', 'Engagement Planning Tools', 'Content Calendar Framework'],
        procedure: [
          'Research target conscious consumer segments',
          'Define community values và engagement principles',
          'Design community platform và interaction formats',
          'Create content strategy aligned với values',
          'Develop member onboarding và retention programs',
          'Establish community guidelines và moderation policies',
        ],
        expectedResults: 'Complete conscious community engagement strategy với implementation plan',
        solution: 'Integrated community platform designed for authentic value-based engagement',
      },
    ],
    realWorldApplications: [
      'Sustainable fashion brands building eco-conscious communities',
      'Organic food companies engaging health-conscious consumers',
      'Ethical finance platforms educating responsible investors',
      'Clean beauty brands connecting với conscious consumers',
      'Social impact organizations mobilizing supporters',
    ],
    caseStudies: [
      {
        title: 'Patagonia - Environmental Community Building',
        organization: 'Patagonia',
        problem: 'Engaging consumers beyond product purchases',
        solution: 'Built community around environmental activism và outdoor values',
        impact: 'High customer loyalty và brand advocacy',
        innovations: ['Worn Wear Program', 'Action Works Platform', 'Environmental Grants Program'],
      },
    ],
    resources: [
      {
        title: 'Conscious Consumer Behavior Research',
        url: 'https://www.nielsen.com/insights/2018/was-2018-the-year-of-the-influential-sustainable-consumer/',
        type: 'Research',
      },
      {
        title: 'Community Building Best Practices',
        url: 'https://www.communityroundtable.com/research/community-management-best-practices/',
        type: 'Best Practices',
      },
    ],
  },

  {
    id: 'vietnamese-cultural-values-integration',
    title: 'Tích Hợp Giá Trị Văn Hóa Việt Nam Vào Purpose Marketing',
    description: 'Deep dive vào Vietnamese cultural values và cách integrate authentically into purpose-driven marketing strategies cho local relevance.',
    duration: '155 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zqIAtnOLFPU', // Vietnamese culture and business
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    objectives: [
      'Understand core Vietnamese cultural values và traditions',
      'Integrate cultural sensitivity into marketing strategies',
      'Develop locally relevant purpose statements',
      'Create culturally appropriate messaging và visuals',
      'Build trust through cultural authenticity',
      'Navigate cultural nuances trong different regions',
    ],
    prerequisites: [
      'Basic understanding của Vietnamese culture',
      'Marketing localization experience',
      'Cultural sensitivity awareness',
    ],
    ethicalPrinciples: ['Cultural Respect', 'Local Relevance', 'Community Harmony', 'Traditional Values'],
    brandPurposeAreas: ['Cultural Heritage', 'Community Values', 'Family Focus', 'Social Harmony'],
    transparencyMethods: ['Cultural Consultation', 'Community Feedback', 'Local Partnership', 'Authentic Representation'],
    socialImpactMetrics: ['Cultural Authenticity Score', 'Local Community Acceptance', 'Cultural Sensitivity Index', 'Regional Relevance'],
    stakeholderGroups: ['Local Communities', 'Cultural Leaders', 'Regional Audiences', 'Traditional Groups', 'Modern Consumers'],
    exercises: [
      {
        title: 'Vietnamese Cultural Values Mapping',
        description: 'Create comprehensive mapping của Vietnamese cultural values và their application trong purpose marketing',
        difficulty: 'Trung bình',
        materials: ['Cultural Values Framework', 'Regional Differences Guide', 'Cultural Sensitivity Checklist'],
        procedure: [
          'Research traditional Vietnamese values và their modern interpretations',
          'Map cultural values to brand purpose opportunities',
          'Develop culturally appropriate messaging strategies',
          'Test cultural resonance với Vietnamese audiences',
          'Create guidelines for cultural authenticity',
          'Design region-specific adaptations for North/Central/South Vietnam',
        ],
        expectedResults: 'Comprehensive cultural integration strategy với regional adaptations',
        solution: 'Cultural authenticity framework specifically designed for Vietnamese market context',
      },
    ],
    realWorldApplications: [
      'Vietnamese traditional medicine brands promoting wellness',
      'Local food companies celebrating culinary heritage',
      'Education platforms supporting family values',
      'Technology companies bridging generational gaps',
      'Tourism brands highlighting cultural preservation',
    ],
    caseStudies: [
      {
        title: 'Vinamilk - Family Values Integration',
        organization: 'Vinamilk',
        problem: 'Connecting with Vietnamese families across generations',
        solution: 'Integrated traditional family values into brand purpose và messaging',
        impact: 'Market leadership trong dairy industry với strong family association',
        innovations: ['Family Nutrition Programs', 'Multi-generational Campaigns', 'Cultural Festival Sponsorships'],
      },
    ],
    resources: [
      {
        title: 'Vietnamese Cultural Values Research',
        url: 'https://www.hofstede-insights.com/country/vietnam/',
        type: 'Research',
      },
      {
        title: 'Vietnam Consumer Behavior Study',
        url: 'https://www.nielsen.com/vn/vi/insights/',
        type: 'Market Research',
      },
    ],
  },

  {
    id: 'csr-authentic-storytelling',
    title: 'Corporate Social Responsibility Và Authentic Storytelling',
    description: 'Learn to develop comprehensive CSR strategies và communicate them through authentic storytelling that builds trust và engagement.',
    duration: '185 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=jpt1TvdBmok', // CSR and storytelling
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
    objectives: [
      'Develop comprehensive CSR strategy aligned với business goals',
      'Create authentic storytelling around social initiatives',
      'Build stakeholder engagement through meaningful narratives',
      'Implement transparent reporting và communication',
      'Measure và communicate CSR impact effectively',
      'Avoid greenwashing và maintain authenticity',
    ],
    prerequisites: [
      'Corporate communications experience',
      'Storytelling và content creation skills',
      'Understanding của social issues',
    ],
    ethicalPrinciples: ['Genuine Impact', 'Transparent Communication', 'Stakeholder Value', 'Long-term Commitment'],
    brandPurposeAreas: ['Social Responsibility', 'Community Impact', 'Environmental Stewardship', 'Ethical Leadership'],
    transparencyMethods: ['Impact Stories', 'Progress Reports', 'Stakeholder Updates', 'Behind-the-Scenes Content'],
    socialImpactMetrics: ['CSR Impact Score', 'Authenticity Rating', 'Stakeholder Trust Index', 'Story Engagement Rate'],
    stakeholderGroups: ['Communities', 'Employees', 'Investors', 'Media', 'Regulators'],
    exercises: [
      {
        title: 'CSR Storytelling Campaign',
        description: 'Develop comprehensive CSR storytelling campaign showcasing authentic social impact',
        difficulty: 'Nâng cao',
        materials: ['CSR Strategy Template', 'Storytelling Framework', 'Impact Measurement Tools'],
        procedure: [
          'Audit current CSR activities và identify story opportunities',
          'Develop narrative strategy highlighting authentic impact',
          'Create multi-channel storytelling content',
          'Implement stakeholder feedback mechanisms',
          'Measure story engagement và impact',
          'Refine storytelling approach based on performance',
        ],
        expectedResults: 'Comprehensive CSR storytelling campaign với measurable engagement',
        solution: 'Integrated CSR communication strategy với authentic storytelling framework',
      },
    ],
    realWorldApplications: [
      'Multinational companies supporting education initiatives',
      'Technology companies bridging digital divide',
      'Manufacturing companies promoting environmental protection',
      'Financial institutions supporting financial literacy',
      'Healthcare companies improving rural healthcare access',
    ],
    caseStudies: [
      {
        title: 'Unilever - Sustainable Living Brands',
        organization: 'Unilever',
        problem: 'Communicating genuine sustainability commitment across global brands',
        solution: 'Integrated sustainable living into brand purposes với authentic storytelling',
        impact: 'Sustainable brands growing 69% faster than other brands',
        innovations: ['Sustainable Living Plan', 'Brand Purpose Integration', 'Impact Storytelling Platform'],
      },
    ],
    resources: [
      {
        title: 'CSR Communication Best Practices',
        url: 'https://www.csrhub.com/content/csrhub-insight/how-to-communicate-csr-effectively',
        type: 'Best Practices',
      },
      {
        title: 'Global Reporting Initiative Standards',
        url: 'https://www.globalreporting.org/standards/',
        type: 'Standards',
      },
    ],
  },
];
