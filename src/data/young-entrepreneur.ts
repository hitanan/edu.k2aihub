import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface YoungEntrepreneurLessonData extends BaseLessonData {
  businessTools: string[];
  vietnameseMarketFocus: string[];
  ageGroup: string;
  successMetrics: string[];
}

export const youngEntrepreneurLessons: YoungEntrepreneurLessonData[] = [
  {
    id: 'startup-mindset-fundamentals',
    title: 'Tư Duy Khởi Nghiệp & Cơ Hội Thị Trường',
    description: 'Xây dựng tư duy khởi nghiệp, nhận diện cơ hội kinh doanh và hiểu rõ thị trường Việt Nam cho thế hệ GenZ',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://youtube.com/watch?v=startup-mindset-vietnam',
    imageUrl: '/images/young-entrepreneur/startup-mindset.jpg',
    objectives: [
      'Phát triển tư duy khởi nghiệp và nhận diện cơ hội',
      'Hiểu rõ đặc điểm thị trường Việt Nam cho startup',
      'Xây dựng vision và mission cho dự án kinh doanh',
      'Áp dụng Design Thinking vào giải quyết vấn đề'
    ],
    prerequisites: [
      'Sự tò mò và đam mê tìm hiểu',
      'Khả năng quan sát và tư duy logic',
      'Hiểu biết cơ bản về xã hội và công nghệ'
    ],
    exercises: [
      {
        title: 'Bản đồ cơ hội kinh doanh GenZ Vietnam',
        description: 'Nghiên cứu và tạo bản đồ các cơ hội kinh doanh phù hợp với thế hệ GenZ Việt Nam',
        difficulty: 'Cơ bản',
        materials: [
          'Khảo sát thị trường online',
          'Phỏng vấn 10 bạn đồng trang lứa',
          'Nghiên cứu report về GenZ Vietnam',
          'Canvas Business Model'
        ],
        procedure: [
          'Khảo sát nhu cầu và pain point của GenZ (16-25 tuổi)',
          'Phân tích xu hướng tiêu dùng và công nghệ',
          'Nhận diện 5 cơ hội kinh doanh tiềm năng',
          'Đánh giá tính khả thi và quy mô thị trường',
          'Tạo Business Model Canvas cho 1 ý tưởng'
        ],
        expectedResults: 'Bản đồ cơ hội với 5 ý tưởng kinh doanh cụ thể và 1 Business Model Canvas hoàn chỉnh',
        solution: 'Tập trung vào các lĩnh vực: EdTech, Social Commerce, Sustainable Lifestyle, Digital Services, Content Creation'
      },
      {
        title: 'Workshop Design Thinking cho Startup',
        description: 'Áp dụng phương pháp Design Thinking để giải quyết một vấn đề thực tế',
        difficulty: 'Trung bình',
        materials: [
          'Design Thinking Toolkit',
          'Post-it notes và marker',
          'Template Empathy Map',
          'Prototype materials'
        ],
        procedure: [
          'Empathize: Phỏng vấn và quan sát người dùng',
          'Define: Xác định problem statement cụ thể',
          'Ideate: Brainstorm 50+ ý tưởng giải pháp',
          'Prototype: Tạo MVP đơn giản',
          'Test: Thu thập feedback và cải thiện'
        ],
        expectedResults: 'Một prototype giải pháp và plan cải thiện dựa trên user feedback'
      }
    ],
    realWorldApplications: [
      'Khởi nghiệp công nghệ với vốn tự có dưới 50 triệu',
      'Tìm kiếm cơ hội kinh doanh trong các ngành trending',
      'Phát triển sản phẩm/dịch vụ phù hợp với GenZ Vietnam',
      'Ứng dụng Design Thinking trong giải quyết vấn đề xã hội'
    ],
    caseStudies: [
      {
        title: 'Thành công của Startup Tiki',
        organization: 'Tiki.vn - Trần Ngọc Thái Sơn',
        problem: 'E-commerce Việt Nam chưa phát triển, người dùng ngại mua hàng online',
        solution: 'Xây dựng platform với focus vào trải nghiệm người dùng và giao hàng nhanh',
        impact: 'Trở thành Top 3 e-commerce Vietnam, định giá $800M năm 2021',
        innovations: ['2-hour delivery trong TP.HCM', 'TikiNow - logistics riêng', 'Tiki Smartbooks - AI recommendation']
      },
      {
        title: 'Base.vn - Startup EdTech từ sinh viên',
        organization: 'Base.vn - Nguyễn Hữu Tuấn',
        problem: 'Sinh viên khó tiếp cận kiến thức thực tế và skill nghề nghiệp',
        solution: 'Platform học online với focus vào practical skills và mentorship',
        impact: 'Hơn 100,000 học viên, huy động vốn Series A thành công',
        innovations: ['Learning path cá nhân hóa', '1-on-1 mentorship', 'Project-based learning']
      }
    ],
    resources: [
      {
        title: 'Vietnam Startup Ecosystem Report 2024',
        url: 'https://startup.gov.vn/ecosystem-report',
        type: 'Research'
      },
      {
        title: 'Design Thinking Toolkit - IDEO',
        url: 'https://designthinking.ideo.com',
        type: 'Tool'
      }
    ],
    businessTools: [
      'Business Model Canvas',
      'Design Thinking Framework',
      'Market Research Tools',
      'SWOT Analysis'
    ],
    vietnameseMarketFocus: [
      'Đặc điểm tiêu dùng GenZ Việt Nam',
      'Hệ sinh thái startup Việt Nam',
      'Chính sách hỗ trợ khởi nghiệp',
      'Xu hướng đầu tư venture capital'
    ],
    ageGroup: '16-25 tuổi',
    successMetrics: [
      'Tạo được Business Model Canvas hoàn chỉnh',
      'Nhận diện được 5+ cơ hội kinh doanh',
      'Áp dụng được Design Thinking',
      'Hiểu rõ thị trường startup Việt Nam'
    ]
  },
  {
    id: 'business-model-validation',
    title: 'Xây Dựng & Kiểm Chứng Business Model',
    description: 'Học cách xây dựng business model bền vững, tạo MVP và validate ý tưởng kinh doanh với thị trường thực tế',
    duration: '210 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://youtube.com/watch?v=business-model-mvp',
    imageUrl: '/images/young-entrepreneur/business-model.jpg',
    objectives: [
      'Thiết kế Business Model Canvas chi tiết',
      'Xây dựng MVP (Minimum Viable Product)',
      'Kiểm chứng ý tưởng với khách hàng thực tế',
      'Phân tích competitive landscape Vietnam'
    ],
    prerequisites: [
      'Hiểu biết cơ bản về tư duy khởi nghiệp',
      'Có ý tưởng kinh doanh cụ thể',
      'Kỹ năng nghiên cứu và phân tích'
    ],
    exercises: [
      {
        title: 'Business Model Canvas cho Startup Việt Nam',
        description: 'Thiết kế business model hoàn chỉnh cho ý tưởng startup của bạn',
        difficulty: 'Trung bình',
        materials: [
          'Business Model Canvas template',
          'Market research data',
          'Competitor analysis',
          'Financial modeling tools'
        ],
        procedure: [
          'Xác định Value Proposition cốt lõi',
          'Mapping Customer Segments chi tiết',
          'Thiết kế Customer Journey và Channels',
          'Xây dựng Revenue Streams và Cost Structure',
          'Validate từng component với data thực tế'
        ],
        expectedResults: 'Business Model Canvas hoàn chỉnh với data validation',
        solution: 'Focus vào differentiation rõ ràng và sustainable competitive advantage'
      },
      {
        title: 'MVP Development & Testing',
        description: 'Xây dựng MVP và test với 50+ potential customers',
        difficulty: 'Nâng cao',
        materials: [
          'No-code tools (Figma, Webflow)',
          'Survey tools (Google Forms)',
          'Analytics (Google Analytics)',
          'A/B testing platform'
        ],
        procedure: [
          'Xác định core features cho MVP',
          'Tạo prototype với no-code tools',
          'Setup tracking và analytics',
          'Recruit 50+ beta users',
          'Phân tích usage data và feedback'
        ],
        expectedResults: 'MVP với validated features và clear product-market fit signals'
      }
    ],
    realWorldApplications: [
      'Validate ý tưởng startup trước khi đầu tư lớn',
      'Xây dựng sản phẩm đáp ứng nhu cầu thực tế',
      'Tối ưu hóa business model cho thị trường Việt Nam',
      'Chuẩn bị pitch deck cho nhà đầu tư'
    ],
    caseStudies: [
      {
        title: 'Sendo.vn - From Idea to IPO',
        organization: 'Sendo.vn - Trần Ngọc Thái Sơn',
        problem: 'C2C marketplace chưa phát triển tại Việt Nam',
        solution: 'MVP tập trung vào mobile-first và sellers nhỏ lẻ',
        impact: 'IPO thành công, hơn 1M sellers active',
        innovations: ['Mobile-first approach', 'Seller support program', 'Logistics integration']
      }
    ],
    resources: [
      {
        title: 'Lean Startup Methodology',
        url: 'http://theleanstartup.com/principles',
        type: 'Methodology'
      },
      {
        title: 'Vietnam E-commerce Report 2024',
        url: 'https://e-commerce.gov.vn/report',
        type: 'Research'
      }
    ],
    businessTools: [
      'Lean Canvas',
      'MVP Development',
      'A/B Testing',
      'Customer Validation'
    ],
    vietnameseMarketFocus: [
      'Payment methods phổ biến tại VN',
      'Logistics và fulfillment challenges',
      'Consumer behavior trong online shopping',
      'Regulatory requirements cho startup'
    ],
    ageGroup: '18-25 tuổi',
    successMetrics: [
      'Business Model validated với 50+ customers',
      'MVP có traction metrics tích cực',
      'Clear competitive differentiation',
      'Roadmap phát triển 6-12 tháng'
    ]
  },
  {
    id: 'digital-marketing-growth',
    title: 'Digital Marketing & Growth Hacking cho Startup',
    description: 'Chiến lược marketing cost-effective, growth hacking và xây dựng brand awareness với budget hạn chế',
    duration: '195 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://youtube.com/watch?v=startup-growth-hacking',
    imageUrl: '/images/young-entrepreneur/growth-hacking.jpg',
    objectives: [
      'Thiết kế growth marketing strategy',
      'Thực hiện growth hacking campaigns',
      'Xây dựng organic social media presence',
      'Tối ưu hóa conversion funnel'
    ],
    prerequisites: [
      'Hiểu biết cơ bản về digital marketing',
      'Có MVP hoặc sản phẩm để marketing',
      'Kỹ năng sử dụng social media'
    ],
    exercises: [
      {
        title: 'Growth Hacking Campaign cho Startup Vietnam',
        description: 'Thiết kế và thực hiện campaign growth hacking với budget dưới 5 triệu VNĐ',
        difficulty: 'Nâng cao',
        materials: [
          'Facebook Ads Manager',
          'Google Analytics',
          'Content creation tools',
          'Referral tracking system'
        ],
        procedure: [
          'Phân tích customer acquisition cost (CAC)',
          'Thiết kế viral mechanics và referral program',
          'Tạo content viral trên TikTok/YouTube Shorts',
          'Setup tracking cho mọi touchpoint',
          'Optimize campaigns dựa trên data'
        ],
        expectedResults: 'Campaign với CAC < 50,000 VNĐ và viral coefficient > 1.2',
        solution: 'Focus vào user-generated content và community building'
      }
    ],
    realWorldApplications: [
      'Tăng user acquisition với budget hạn chế',
      'Xây dựng brand awareness cho startup mới',
      'Tối ưu hóa funnel conversion cho e-commerce',
      'Viral marketing campaigns trên social media'
    ],
    caseStudies: [
      {
        title: 'Grab - Growth từ 0 đến Unicorn',
        organization: 'Grab - Anthony Tan',
        problem: 'Thị trường ride-hailing chưa phát triển ở SEA',
        solution: 'Growth hacking với referral program và localization',
        impact: 'Dominant market share trong 8 countries SEA',
        innovations: ['MyTeksi rebrand thành Grab', 'Driver incentive programs', 'Super app strategy']
      }
    ],
    resources: [
      {
        title: 'Growth Hacking Handbook',
        url: 'https://growthhackers.com/handbook',
        type: 'Guide'
      }
    ],
    businessTools: [
      'Growth Analytics',
      'A/B Testing Platforms',
      'Social Media Management',
      'Email Marketing'
    ],
    vietnameseMarketFocus: [
      'Social media platforms phổ biến tại VN',
      'Influencer marketing ecosystem',
      'Mobile-first marketing approach',
      'Cross-platform attribution'
    ],
    ageGroup: '18-25 tuổi',
    successMetrics: [
      'CAC reduction 30%+',
      'Viral coefficient > 1.0',
      'Organic traffic tăng 200%+',
      'Social media engagement > 5%'
    ]
  },
  {
    id: 'funding-investment-preparation',
    title: 'Gọi Vốn & Chuẩn Bị Đầu Tư',
    description: 'Chuẩn bị pitch deck, tìm kiếm nhà đầu tư và negotiate terms để gọi vốn thành công cho startup',
    duration: '240 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=startup-funding-vietnam',
    imageUrl: '/images/young-entrepreneur/funding.jpg',
    objectives: [
      'Tạo pitch deck chuyên nghiệp',
      'Hiểu rõ ecosystem đầu tư Việt Nam',
      'Valuation và negotiate investment terms',
      'Chuẩn bị due diligence process'
    ],
    prerequisites: [
      'Có business model validated',
      'Traction metrics và growth potential',
      'Hiểu biết về tài chính cơ bản',
      'Business plan chi tiết'
    ],
    exercises: [
      {
        title: 'Pitch Deck & Investor Presentation',
        description: 'Tạo pitch deck chuẩn Silicon Valley cho startup Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Pitch deck templates',
          'Financial modeling tools',
          'Market research data',
          'Traction metrics'
        ],
        procedure: [
          'Craft compelling problem-solution narrative',
          'Prepare market size và TAM analysis',
          'Develop financial projections 3-5 năm',
          'Create demo và product showcase',
          'Practice pitch delivery và Q&A'
        ],
        expectedResults: 'Pitch deck 10-12 slides với clear ask và compelling story',
        solution: 'Focus vào traction, team expertise, và scalable business model'
      },
      {
        title: 'Mock Investor Meeting',
        description: 'Simulation meeting với investor và negotiate investment terms',
        difficulty: 'Nâng cao',
        materials: [
          'Term sheet templates',
          'Due diligence checklist',
          'Legal documents',
          'Valuation models'
        ],
        procedure: [
          'Research target investors và portfolio',
          'Prepare Q&A cho common investor questions',
          'Practice term sheet negotiation',
          'Role-play investment meeting',
          'Follow-up strategy và next steps'
        ],
        expectedResults: 'Successful mock pitch với positive investor feedback'
      }
    ],
    realWorldApplications: [
      'Gọi vốn seed funding từ 2-20 tỷ VNĐ',
      'Negotiate với VC funds và angel investors',
      'Chuẩn bị cho Series A funding round',
      'Strategic partnership với corporate ventures'
    ],
    caseStudies: [
      {
        title: 'VNG - From Startup to Tech Giant',
        organization: 'VNG Corporation - Lê Hồng Minh',
        problem: 'Gaming và internet services market chưa mature tại VN',
        solution: 'Multiple funding rounds với focus vào mobile gaming',
        impact: 'Trở thành tech unicorn đầu tiên của VN',
        innovations: ['Zalo super app', 'VNG Cloud services', 'International expansion']
      },
      {
        title: 'Momo - Fintech Unicorn Journey',
        organization: 'Momo - Nguyễn Bá Diệp',
        problem: 'Digital payment adoption thấp tại Việt Nam',
        solution: 'Series funding để scale mobile wallet',
        impact: 'Unicorn valuation $2B, hàng triệu users',
        innovations: ['QR payment ecosystem', 'Super app model', 'Financial inclusion']
      }
    ],
    resources: [
      {
        title: 'Vietnam Venture Capital Report 2024',
        url: 'https://vietnam-vc.com/report',
        type: 'Research'
      },
      {
        title: 'Pitch Deck Examples - Series A',
        url: 'https://piktochart.com/pitch-deck-examples',
        type: 'Template'
      }
    ],
    businessTools: [
      'Pitch Deck Creation',
      'Financial Modeling',
      'Due Diligence Management',
      'CRM for Investors'
    ],
    vietnameseMarketFocus: [
      'VC ecosystem và major funds tại VN',
      'Government support programs',
      'Angel investor networks',
      'Corporate venture arms'
    ],
    ageGroup: '20-25 tuổi',
    successMetrics: [
      'Pitch deck score > 8/10 từ mentors',
      'Secured meetings với 5+ investors',
      'Term sheet negotiations',
      'Due diligence completion'
    ]
  },
  {
    id: 'team-building-leadership',
    title: 'Xây Dựng Đội Ngũ & Leadership Skills',
    description: 'Phát triển kỹ năng lãnh đạo, recruiting talent, xây dựng culture và quản lý team hiệu quả',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://youtube.com/watch?v=startup-leadership',
    imageUrl: '/images/young-entrepreneur/leadership.jpg',
    objectives: [
      'Phát triển leadership skills cho founders trẻ',
      'Recruit và retain top talent',
      'Xây dựng company culture mạnh mẽ',
      'Quản lý team performance hiệu quả'
    ],
    prerequisites: [
      'Có team hoặc chuẩn bị build team',
      'Kỹ năng giao tiếp cơ bản',
      'Hiểu biết về psychology'
    ],
    exercises: [
      {
        title: 'Startup Culture Design Workshop',
        description: 'Thiết kế company culture và values cho startup',
        difficulty: 'Trung bình',
        materials: [
          'Culture assessment tools',
          'Values definition workshop',
          'Employee handbook template',
          'Feedback systems'
        ],
        procedure: [
          'Define core values và mission alignment',
          'Design onboarding experience',
          'Create feedback và recognition systems',
          'Establish communication protocols',
          'Plan culture reinforcement activities'
        ],
        expectedResults: 'Complete culture playbook với clear values và practices',
        solution: 'Focus vào psychological safety và growth mindset'
      }
    ],
    realWorldApplications: [
      'Build high-performing startup teams',
      'Attract top talent với limited budget',
      'Scale company culture trong growth phase',
      'Manage remote/hybrid team effectively'
    ],
    caseStudies: [
      {
        title: 'Shopee - Building Winning Culture',
        organization: 'Shopee - Chris Feng',
        problem: 'Cạnh tranh khốc liệt trong e-commerce SEA',
        solution: 'Strong culture focus với "Serve Buyers, Empower Sellers"',
        impact: 'Dominant market share trong 7 countries',
        innovations: ['Culture-driven hiring', 'Cross-country collaboration', 'Innovation mindset']
      }
    ],
    resources: [
      {
        title: 'First-Time Manager Guide',
        url: 'https://firsttimemanagers.com',
        type: 'Guide'
      }
    ],
    businessTools: [
      'Team Assessment',
      'Performance Management',
      'Culture Surveys',
      'Communication Tools'
    ],
    vietnameseMarketFocus: [
      'Hiring practices tại Vietnam',
      'Remote work culture',
      'Compensation benchmarks',
      'Employee retention strategies'
    ],
    ageGroup: '20-25 tuổi',
    successMetrics: [
      'Team engagement score > 8/10',
      'Employee retention > 90%',
      'Clear career progression paths',
      'Strong culture metrics'
    ]
  },
  {
    id: 'scaling-operations',
    title: 'Scale Operations & Business Growth',
    description: 'Học cách scale business operations, optimize processes và maintain quality trong quá trình tăng trưởng nhanh',
    duration: '225 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=scaling-startup-ops',
    imageUrl: '/images/young-entrepreneur/scaling.jpg',
    objectives: [
      'Thiết kế scalable business processes',
      'Implement automation và efficiency tools',
      'Manage rapid growth challenges',
      'Build sustainable competitive advantages'
    ],
    prerequisites: [
      'Có business với initial traction',
      'Hiểu biết về operations management',
      'Experience với tools và technology'
    ],
    exercises: [
      {
        title: 'Operations Automation Project',
        description: 'Automate 70% manual processes để scale efficiency',
        difficulty: 'Nâng cao',
        materials: [
          'Process mapping tools',
          'Automation platforms (Zapier)',
          'CRM systems',
          'Analytics dashboards'
        ],
        procedure: [
          'Map toàn bộ business processes',
          'Identify automation opportunities',
          'Implement workflow automation',
          'Setup monitoring và optimization',
          'Train team trên new processes'
        ],
        expectedResults: 'Automated workflows với 70% reduction trong manual work',
        solution: 'Focus vào repetitive tasks và customer-facing processes'
      }
    ],
    realWorldApplications: [
      'Scale startup từ 10 đến 100+ employees',
      'Maintain quality trong rapid growth',
      'Optimize unit economics và profitability',
      'Expand sang new markets efficiently'
    ],
    caseStudies: [
      {
        title: 'Lazada - Regional Scaling Success',
        organization: 'Lazada Group - Pierre Poignant',
        problem: 'Scale e-commerce platform across diverse SEA markets',
        solution: 'Standardized operations với local customization',
        impact: 'Leading e-commerce platform trong 6 countries',
        innovations: ['Unified logistics network', 'Local payment integration', 'Cross-border commerce']
      }
    ],
    resources: [
      {
        title: 'Scaling Up Business Guide',
        url: 'https://scalingup.com',
        type: 'Methodology'
      }
    ],
    businessTools: [
      'Process Automation',
      'Performance Dashboards',
      'Quality Management',
      'Scaling Frameworks'
    ],
    vietnameseMarketFocus: [
      'Multi-city expansion strategies',
      'Supply chain optimization',
      'Regulatory compliance scaling',
      'Local partnerships'
    ],
    ageGroup: '22-25 tuổi',
    successMetrics: [
      '3x revenue growth với same headcount',
      'Process automation > 70%',
      'Customer satisfaction maintained',
      'Profitable unit economics'
    ]
  },
  {
    id: 'startup-legal-compliance',
    title: 'Pháp Lý & Compliance cho Startup',
    description: 'Hiểu rõ khung pháp lý, intellectual property, contracts và compliance requirements cho startup tại Việt Nam',
    duration: '165 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://youtube.com/watch?v=startup-legal-vietnam',
    imageUrl: '/images/young-entrepreneur/legal.jpg',
    objectives: [
      'Hiểu framework pháp lý cho startup VN',
      'Protect intellectual property',
      'Draft contracts và legal documents',
      'Ensure compliance với regulations'
    ],
    prerequisites: [
      'Có startup hoặc business idea',
      'Hiểu biết cơ bản về business law',
      'Access đến legal consultation'
    ],
    exercises: [
      {
        title: 'Startup Legal Compliance Audit',
        description: 'Comprehensive audit legal requirements cho startup Việt Nam',
        difficulty: 'Trung bình',
        materials: [
          'Legal compliance checklist',
          'Template contracts',
          'IP registration guides',
          'Government resources'
        ],
        procedure: [
          'Review current legal structure',
          'Audit IP và trademark protection',
          'Review contracts và agreements',
          'Check regulatory compliance',
          'Create legal roadmap'
        ],
        expectedResults: 'Complete legal compliance report với action plan',
        solution: 'Partner với legal experts và use standard templates'
      }
    ],
    realWorldApplications: [
      'Setup legal structure cho startup',
      'Protect IP và trade secrets',
      'Draft employment và vendor contracts',
      'Ensure data privacy compliance'
    ],
    caseStudies: [
      {
        title: 'VinFast - IP Strategy cho Global Expansion',
        organization: 'VinFast - Lê Thị Thu Thủy',
        problem: 'Protect automotive IP trong competitive market',
        solution: 'Comprehensive IP strategy với international protection',
        impact: 'Successful global expansion với protected technology',
        innovations: ['Patent portfolio development', 'Trade secret management', 'International compliance']
      }
    ],
    resources: [
      {
        title: 'Vietnam Business Law Guide',
        url: 'https://business-law.vn',
        type: 'Legal'
      }
    ],
    businessTools: [
      'Legal Document Management',
      'IP Management Systems',
      'Compliance Tracking',
      'Contract Management'
    ],
    vietnameseMarketFocus: [
      'Vietnam business registration',
      'Tax obligations cho startup',
      'Labor law compliance',
      'Foreign investment regulations'
    ],
    ageGroup: '20-25 tuổi',
    successMetrics: [
      '100% legal compliance achieved',
      'IP protection strategy implemented',
      'Standard contracts established',
      'Legal risk mitigation'
    ]
  }
];

export default youngEntrepreneurLessons;
