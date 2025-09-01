export interface VietnameseBusinessLesson {
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
  businessTopics: string[];
  regulations: string[];
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
  type: 'government' | 'platform' | 'guide' | 'template' | 'tool';
  description: string;
}

interface CaseStudy {
  title: string;
  company: string;
  challenge: string;
  solution: string;
  results: string;
  insights: string[];
}

export const vietnameseBusinessLessons: VietnameseBusinessLesson[] = [
  {
    id: 'vietnam-startup-ecosystem',
    title: 'Bài 1: Hệ sinh thái Startup Việt Nam và Digital Transformation',
    description:
      'Khám phá startup ecosystem Việt Nam, các quy định pháp lý, funding sources và success strategies. Học cách navigate trong môi trường kinh doanh Việt Nam.',
    videoUrl: 'https://www.youtube.com/watch?v=W_ca-jrf7ek',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '150 phút',
    businessTopics: ['Startup ecosystem', 'Legal compliance', 'Funding landscape', 'Digital transformation'],
    regulations: ['Law on Enterprises 2020', 'Investment Law 2020', 'Cybersecurity Law', 'Data Protection'],
    objectives: [
      'Hiểu startup ecosystem và investment landscape ở Việt Nam',
      'Nắm vững legal requirements cho business registration',
      'Identify funding opportunities và investor network',
      'Plan digital transformation strategy cho Vietnamese market',
    ],
    prerequisites: ['Kiến thức kinh doanh cơ bản', 'Hiểu biết về thị trường Việt Nam', 'English communication skills'],
    exercises: [
      {
        title: 'Business Registration Simulation',
        description: 'Complete online business registration process theo quy định Việt Nam',
        difficulty: 'Cơ bản',
        requirements: ['Internet access', 'Basic Vietnamese reading', 'Government portal access'],
        hints: [
          'Use https://dangkykinhdoanh.gov.vn portal',
          'Prepare required documents in advance',
          'Understand different business entity types',
        ],
        expectedOutput: 'Completed business registration form với proper documentation',
        solution: 'Step-by-step guide với screenshots và common pitfalls',
      },
    ],
    realWorldApplications: [
      'Tech startup creation và scaling in Vietnam',
      'Foreign investment compliance và setup',
      'E-commerce business development',
      'Digital service provider establishment',
    ],
    caseStudies: [
      {
        title: 'VNG - From Gaming to Super App',
        company: 'VNG Corporation',
        challenge: 'Transform từ game company thành multi-service platform',
        solution: 'Strategic diversification với focus trên Vietnamese user needs',
        results: '$1.4B valuation, 100M+ users across Zalo ecosystem',
        insights: [
          'Local market understanding is crucial',
          'Government relationship building takes time',
          'Vietnamese users prefer integrated platforms',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam Business Registration Portal',
        url: 'https://dangkykinhdoanh.gov.vn',
        type: 'government',
        description: 'Official portal for business registration in Vietnam',
      },
      {
        title: 'VIISA - Vietnam IT & Software Association',
        url: 'https://viisa.org.vn',
        type: 'platform',
        description: 'IT industry association supporting startups',
      },
    ],
  },
  {
    id: 'vietnamese-fintech-business',
    title: 'Bài 2: FinTech Business Development trong thị trường Việt Nam',
    description:
      'Phát triển FinTech solutions cho Vietnamese market. Học regulatory compliance, payment integration, và financial inclusion strategies.',
    videoUrl: 'https://www.youtube.com/watch?v=fxih1RLxp4o',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '180 phút',
    businessTopics: ['FinTech regulations', 'Payment systems', 'Banking partnerships', 'Financial inclusion'],
    regulations: ['SBV Circular 23/2019', 'Payment Service Law', 'E-money regulations', 'KYC/AML requirements'],
    objectives: [
      'Understand Vietnamese FinTech regulatory landscape',
      'Build payment integration với local providers',
      'Develop financial products cho underbanked population',
      'Create compliance framework cho FinTech operations',
    ],
    prerequisites: [
      'Hoàn thành Vietnam Startup Ecosystem lesson',
      'Basic understanding of financial services',
      'Knowledge of API integration',
    ],
    exercises: [
      {
        title: 'Vietnamese Payment Gateway Integration',
        description: 'Integrate multiple Vietnamese payment methods trong e-commerce platform',
        difficulty: 'Trung bình',
        requirements: ['VNPay/ZaloPay API', 'E-commerce platform', 'Testing environment'],
        hints: [
          'Support VNPay, ZaloPay, và MoMo integration',
          'Handle Vietnamese currency formatting',
          'Implement proper error handling cho payment failures',
        ],
        expectedOutput: 'Working payment system với 95%+ success rate',
        solution: 'Multi-provider payment orchestration với fallback mechanisms',
      },
    ],
    realWorldApplications: [
      'Digital wallet development cho Vietnamese users',
      'Micro-lending platforms cho SMEs',
      'Cryptocurrency exchange compliance',
      'Insurance tech solutions',
    ],
    caseStudies: [
      {
        title: 'MoMo Super App Strategy',
        company: 'M_Service (MoMo)',
        challenge: 'Scale từ payment app thành financial ecosystem',
        solution: 'Partner với merchants và financial institutions',
        results: '20M+ users, $2B+ transaction volume annually',
        insights: [
          'Vietnamese users adopt mobile payments quickly',
          'Super app model works well in Vietnam',
          'Offline-to-online integration is critical',
        ],
      },
    ],
    resources: [
      {
        title: 'State Bank of Vietnam FinTech Guidelines',
        url: 'https://sbv.gov.vn',
        type: 'government',
        description: 'Official regulatory guidance for FinTech companies',
      },
    ],
  },
  {
    id: 'vietnam-ecommerce-strategy',
    title: 'Bài 3: E-commerce Strategy và Digital Marketing cho thị trường Việt Nam',
    description:
      'Xây dựng e-commerce business strategy cho Vietnamese consumers. Học local marketplace dynamics, logistics, và customer behavior.',
    videoUrl: 'https://www.youtube.com/watch?v=9cxus93Zh6k',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '160 phút',
    businessTopics: ['E-commerce platforms', 'Logistics networks', 'Customer acquisition', 'Mobile commerce'],
    regulations: ['E-commerce Law 2021', 'Consumer Protection Law', 'Tax obligations', 'Import/export rules'],
    objectives: [
      'Develop comprehensive e-commerce strategy cho Vietnamese market',
      'Setup efficient logistics và fulfillment networks',
      'Implement effective digital marketing campaigns',
      'Optimize cho mobile-first Vietnamese consumers',
    ],
    prerequisites: [
      'Business strategy fundamentals',
      'Digital marketing basics',
      'Understanding of Vietnamese consumer behavior',
    ],
    exercises: [
      {
        title: 'Vietnamese Marketplace Strategy',
        description: 'Create go-to-market plan cho Shopee, Lazada, và Tiki',
        difficulty: 'Trung bình',
        requirements: ['Market research data', 'Competitive analysis', 'Budget planning'],
        hints: [
          'Each platform has different customer demographics',
          'Shopee dominates mobile commerce',
          'Tiki focuses on premium products',
        ],
        expectedOutput: 'Multi-platform strategy với ROI projections',
        solution: 'Platform-specific optimization với unified brand strategy',
      },
    ],
    realWorldApplications: [
      'Local brand expansion to e-commerce',
      'International brand localization',
      'D2C brand development',
      'Social commerce strategies',
    ],
    caseStudies: [
      {
        title: 'Fahasa Digital Transformation',
        company: 'Fahasa',
        challenge: 'Transform từ traditional bookstore chain sang omnichannel',
        solution: 'Integrate online/offline với same-day delivery',
        results: '300% online revenue growth, expanded to lifestyle products',
        insights: [
          'Vietnamese customers value convenience',
          'Same-day delivery is competitive advantage',
          'Book industry gateway to lifestyle products',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam E-commerce Report',
        url: 'https://vpbank.com.vn/bao-cao-thuong-mai-dien-tu',
        type: 'guide',
        description: 'Annual e-commerce market analysis',
      },
    ],
  },
];
