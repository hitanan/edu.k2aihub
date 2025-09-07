import { BaseLessonData } from '@/types/lesson-base';
export interface YoungEntrepreneurLessonData extends BaseLessonData {
  ageGroup: string;
  businessTools: string[];
  vietnameseMarketFocus: string[];
  successMetrics: string[];
}

export const youngEntrepreneurLessons: YoungEntrepreneurLessonData[] = [
  {
    id: 'startup-mindset-fundamentals',
    title: 'Tư Duy Khởi Nghiệp & Cơ Hội Thị Trường',
    description:
      'Xây dựng tư duy khởi nghiệp, nhận diện cơ hội kinh doanh và hiểu rõ thị trường Việt Nam cho thế hệ GenZ',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    ageGroup: '16-22',
    businessTools: ['Canvas Business Model', 'Design Thinking', 'SWOT Analysis'],
    vietnameseMarketFocus: ['GenZ Consumers', 'Social Commerce', 'EdTech'],
    successMetrics: ['Validated Business Idea', 'User Growth', 'Initial Revenue'],
    videoUrl: 'https://www.youtube.com/watch?v=0pgIeCsgqRY',
    imageUrl: 'https://i.ytimg.com/vi/x2JRtPxGF7Y/hqdefault.jpg',
    objectives: [
      'Phát triển tư duy khởi nghiệp và nhận diện cơ hội',
      'Hiểu rõ đặc điểm thị trường Việt Nam cho startup',
      'Xây dựng vision và mission cho dự án kinh doanh',
      'Áp dụng Design Thinking vào giải quyết vấn đề',
    ],
    prerequisites: [
      'Sự tò mò và đam mê tìm hiểu',
      'Khả năng quan sát và tư duy logic',
      'Hiểu biết cơ bản về xã hội và công nghệ',
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
          'Canvas Business Model',
        ],
        procedure: [
          'Khảo sát nhu cầu và pain point của GenZ (16-25 tuổi)',
          'Phân tích xu hướng tiêu dùng và công nghệ',
          'Nhận diện 5 cơ hội kinh doanh tiềm năng',
          'Đánh giá tính khả thi và quy mô thị trường',
          'Tạo Business Model Canvas cho 1 ý tưởng',
        ],
        expectedResults: 'Bản đồ cơ hội với 5 ý tưởng kinh doanh cụ thể và 1 Business Model Canvas hoàn chỉnh',
        solution:
          'Tập trung vào các lĩnh vực: EdTech, Social Commerce, Sustainable Lifestyle, Digital Services, Content Creation',
      },
      {
        title: 'Workshop Design Thinking cho Startup',
        description: 'Áp dụng phương pháp Design Thinking để giải quyết một vấn đề thực tế',
        difficulty: 'Trung bình',
        materials: [
          'Design Thinking Toolkit',
          'Post-it notes và marker',
          'Template Empathy Map',
          'Prototype materials',
        ],
        procedure: [
          'Empathize: Phỏng vấn và quan sát người dùng',
          'Define: Xác định problem statement cụ thể',
          'Ideate: Brainstorm 50+ ý tưởng giải pháp',
          'Prototype: Tạo MVP đơn giản',
          'Test: Thu thập feedback và cải thiện',
        ],
        expectedResults: 'Một prototype giải pháp và plan cải thiện dựa trên user feedback',
        solution: 'Tập trung vào việc thấu hiểu sâu sắc người dùng và lặp lại nhanh chóng dựa trên dữ liệu thực tế.',
      },
    ],
    realWorldApplications: [
      'Khởi nghiệp công nghệ với vốn tự có dưới 50 triệu',
      'Tìm kiếm cơ hội kinh doanh trong các ngành trending',
      'Phát triển sản phẩm/dịch vụ phù hợp với GenZ Vietnam',
      'Ứng dụng Design Thinking trong giải quyết vấn đề xã hội',
    ],
    vietnamContext: {
      title: 'Hệ sinh thái Khởi nghiệp cho Người trẻ tại Việt Nam',
      content: [
        'Việt Nam đang chứng kiến một làn sóng khởi nghiệp mạnh mẽ từ thế hệ trẻ, đặc biệt là Gen Z. Với dân số trẻ, năng động và khả năng tiếp cận công nghệ cao, Việt Nam là một thị trường đầy tiềm năng cho các ý tưởng kinh doanh mới.',
        'Các lĩnh vực như thương mại xã hội (social commerce), công nghệ giáo dục (edtech), và các sản phẩm/dịch vụ bền vững đang thu hút sự quan tâm lớn.',
        'Nhiều quỹ đầu tư và vườn ươm khởi nghiệp đã xuất hiện để hỗ trợ các nhà sáng lập trẻ, tạo ra một hệ sinh thái ngày càng hoàn thiện.',
      ],
    },
    caseStudies: [
      {
        title: 'Tiki: Từ nhà sách online đến "kỳ lân" thương mại điện tử',
        organization: 'Tiki.vn (Sáng lập bởi Trần Ngọc Thái Sơn)',
        problem:
          'Thị trường thương mại điện tử Việt Nam giai đoạn đầu còn non trẻ, người tiêu dùng thiếu tin tưởng và lo ngại về chất lượng dịch vụ, đặc biệt là thời gian giao hàng.',
        solution:
          'Tiki đã xây dựng lòng tin bằng cách tập trung vào trải nghiệm khách hàng, cam kết bán sách thật và đầu tư mạnh vào hệ thống kho vận (logistics) để có thể giao hàng nhanh (TikiNOW).',
        impact:
          'Trở thành một trong những sàn thương mại điện tử hàng đầu Việt Nam, định giá gần 1 tỷ USD. Thành công của Tiki đã chứng minh tầm quan trọng của việc giải quyết đúng "nỗi đau" của khách hàng.',
        innovations: ['Dịch vụ giao hàng trong 2 giờ', 'Hệ thống logistics tự chủ', 'AI gợi ý sản phẩm'],
      },
      {
        title: 'Base.vn: Giải pháp Quản trị Doanh nghiệp Toàn diện',
        organization: 'Base.vn (Sáng lập bởi Phạm Kim Hùng)',
        problem:
          'Các doanh nghiệp vừa và nhỏ (SMEs) tại Việt Nam gặp khó khăn trong việc quản lý công việc, nhân sự và quy trình một cách hiệu quả do thiếu các công cụ phù hợp.',
        solution:
          'Base.vn đã phát triển một nền tảng SaaS (Software-as-a-Service) với hơn 50 ứng dụng chuyên biệt, giúp các doanh nghiệp giải quyết các bài toán quản trị từ nhân sự, công việc đến tài chính.',
        impact:
          'Được hơn 5,000 doanh nghiệp tin dùng và được tập đoàn FPT mua lại. Base.vn đã trở thành một trong những câu chuyện thành công tiêu biểu nhất của startup B2B tại Việt Nam.',
        innovations: ['Nền tảng SaaS toàn diện', 'Mô hình ứng dụng chuyên biệt', 'Tập trung vào thị trường SME'],
      },
    ],
    careerConnect: {
      name: 'Shark Nguyễn Hòa Bình',
      title: 'Nhà sáng lập & Chủ tịch, NextTech Group',
      company: 'NextTech Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Khởi nghiệp không cần những ý tưởng "đao to búa lớn". Hãy bắt đầu từ những vấn đề nhỏ nhất xung quanh bạn mà chưa ai giải quyết tốt. Công nghệ chỉ là công cụ, sự thấu hiểu thị trường và khả năng thực thi mới là quyết định.',
    },
    quizzes: [
      {
        question: 'Yếu tố cốt lõi nào đã giúp Tiki xây dựng được lòng tin của khách hàng trong giai đoạn đầu?',
        options: [
          'Bán sản phẩm giá rẻ nhất thị trường',
          'Tập trung vào trải nghiệm khách hàng và giao hàng nhanh',
          'Chỉ bán hàng nhập khẩu',
          'Quảng cáo rầm rộ trên truyền hình',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tiki đã giải quyết thành công "nỗi đau" lớn nhất của người mua hàng online thời kỳ đầu là sự thiếu tin tưởng và thời gian chờ đợi lâu, bằng cách cam kết chất lượng và đầu tư vào logistics.',
      },
      {
        question: 'Base.vn là một ví dụ thành công của mô hình kinh doanh nào?',
        options: [
          'B2C (Business-to-Consumer)',
          'C2C (Consumer-to-Consumer)',
          'SaaS B2B (Software-as-a-Service for Business-to-Business)',
          'Kinh doanh truyền thống',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Base.vn cung cấp phần mềm như một dịch vụ (SaaS) cho các khách hàng doanh nghiệp (B2B), giúp họ giải quyết các bài toán quản trị nội bộ.',
      },
    ],
  },
  {
    id: 'business-model-validation',
    title: 'Xây Dựng & Kiểm Chứng Business Model',
    description:
      'Học cách xây dựng business model bền vững, tạo MVP và validate ý tưởng kinh doanh với thị trường thực tế',
    duration: '210 phút',
    difficulty: 'Trung bình',
    ageGroup: '16-22',
    businessTools: ['Business Model Canvas', 'MVP', 'A/B Testing'],
    vietnameseMarketFocus: ['SaaS', 'E-commerce', 'Fintech'],
    successMetrics: ['Product-Market Fit', 'CAC', 'LTV'],
    videoUrl: 'https://www.youtube.com/watch?v=Glj7_9IxEqs',
    imageUrl: 'https://i.ytimg.com/vi/nkrJgHptrY8/hqdefault.jpg',
    objectives: [
      'Thiết kế Business Model Canvas chi tiết',
      'Xây dựng MVP (Minimum Viable Product)',
      'Kiểm chứng ý tưởng với khách hàng thực tế',
      'Phân tích competitive landscape Vietnam',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về tư duy khởi nghiệp',
      'Có ý tưởng kinh doanh cụ thể',
      'Kỹ năng nghiên cứu và phân tích',
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
          'Financial modeling tools',
        ],
        procedure: [
          'Xác định Value Proposition cốt lõi',
          'Mapping Customer Segments chi tiết',
          'Thiết kế Customer Journey và Channels',
          'Xây dựng Revenue Streams và Cost Structure',
          'Validate từng component với data thực tế',
        ],
        expectedResults: 'Business Model Canvas hoàn chỉnh với data validation',
        solution: 'Focus vào differentiation rõ ràng và sustainable competitive advantage',
      },
      {
        title: 'MVP Development & Testing',
        description: 'Xây dựng MVP và test với 50+ potential customers',
        difficulty: 'Nâng cao',
        materials: [
          'No-code tools (Figma, Webflow)',
          'Survey tools (Google Forms)',
          'Analytics (Google Analytics)',
          'A/B testing platform',
        ],
        procedure: [
          'Xác định core features cho MVP',
          'Tạo prototype với no-code tools',
          'Setup tracking và analytics',
          'Recruit 50+ beta users',
          'Phân tích usage data và feedback',
        ],
        expectedResults: 'MVP với validated features và clear product-market fit signals',
      },
    ],
    realWorldApplications: [
      'Validate ý tưởng startup trước khi đầu tư lớn',
      'Xây dựng sản phẩm đáp ứng nhu cầu thực tế',
      'Tối ưu hóa business model cho thị trường Việt Nam',
      'Chuẩn bị pitch deck cho nhà đầu tư',
    ],
    caseStudies: [
      {
        title: 'Sendo.vn - From Idea to IPO',
        organization: 'Sendo.vn - Trần Ngọc Thái Sơn',
        problem: 'C2C marketplace chưa phát triển tại Việt Nam',
        solution: 'MVP tập trung vào mobile-first và sellers nhỏ lẻ',
        impact: 'IPO thành công, hơn 1M sellers active',
        innovations: ['Mobile-first approach', 'Seller support program', 'Logistics integration'],
      },
    ],
    careerConnect: {
      name: 'Shark Nguyễn Hòa Bình',
      title: 'Nhà sáng lập & Chủ tịch, NextTech Group',
      company: 'NextTech Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Khởi nghiệp không cần những ý tưởng "đao to búa lớn". Hãy bắt đầu từ những vấn đề nhỏ nhất xung quanh bạn mà chưa ai giải quyết tốt. Công nghệ chỉ là công cụ, sự thấu hiểu thị trường và khả năng thực thi mới là quyết định.',
    },
    quizzes: [
      {
        question: 'Yếu tố nào sau đây không phải là một phần của Business Model Canvas?',
        options: ['Customer Segments', 'Value Propositions', 'Marketing Channels', 'Production Techniques'],
        correctAnswerIndex: 3,
        explanation:
          'Business Model Canvas không bao gồm phần "Production Techniques". Nó tập trung vào cách doanh nghiệp tạo ra giá trị và tiếp cận khách hàng.',
      },
      {
        question: 'MVP là viết tắt của thuật ngữ nào trong khởi nghiệp?',
        options: [
          'Most Valuable Player',
          'Minimum Viable Product',
          'Maximum Income Potential',
          'Minimum Investment Plan',
        ],
        correctAnswerIndex: 1,
        explanation:
          'MVP (Minimum Viable Product) là phiên bản đơn giản nhất của sản phẩm, được phát triển để kiểm chứng ý tưởng kinh doanh với chi phí thấp nhất.',
      },
    ],
  },
  {
    id: 'digital-marketing-growth',
    title: 'Digital Marketing & Growth Hacking cho Startup',
    description: 'Chiến lược marketing cost-effective, growth hacking và xây dựng brand awareness với budget hạn chế',
    duration: '195 phút',
    difficulty: 'Trung bình',
    ageGroup: '16-22',
    businessTools: ['Google Analytics', 'Facebook Ads', 'TikTok Creator Studio'],
    vietnameseMarketFocus: ['Social Commerce', 'KOL/KOC Marketing', 'Viral Content'],
    successMetrics: ['CAC', 'LTV', 'Viral Coefficient'],
    videoUrl: 'https://www.youtube.com/watch?v=D5ZYCjl6glY',
    imageUrl: 'https://i.ytimg.com/vi/2DQ5bq7if-Y/hqdefault.jpg',
    objectives: [
      'Thiết kế growth marketing strategy',
      'Thực hiện growth hacking campaigns',
      'Xây dựng organic social media presence',
      'Tối ưu hóa conversion funnel',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về digital marketing',
      'Có MVP hoặc sản phẩm để marketing',
      'Kỹ năng sử dụng social media',
    ],
    exercises: [
      {
        title: 'Growth Hacking Campaign cho Startup Vietnam',
        description: 'Thiết kế và thực hiện campaign growth hacking với budget dưới 5 triệu VNĐ',
        difficulty: 'Nâng cao',
        materials: ['Facebook Ads Manager', 'Google Analytics', 'Content creation tools', 'Referral tracking system'],
        procedure: [
          'Phân tích customer acquisition cost (CAC)',
          'Thiết kế viral mechanics và referral program',
          'Tạo content viral trên TikTok/YouTube Shorts',
          'Setup tracking cho mọi touchpoint',
          'Optimize campaigns dựa trên data',
        ],
        expectedResults: 'Campaign với CAC < 50,000 VNĐ và viral coefficient > 1.2',
        solution: 'Focus vào user-generated content và community building',
      },
    ],
    realWorldApplications: [
      'Tăng user acquisition với budget hạn chế',
      'Xây dựng brand awareness cho startup mới',
      'Tối ưu hóa funnel conversion cho e-commerce',
      'Viral marketing campaigns trên social media',
    ],
    caseStudies: [
      {
        title: 'Grab - Growth từ 0 đến Unicorn',
        organization: 'Grab - Anthony Tan',
        problem: 'Thị trường ride-hailing chưa phát triển ở SEA',
        solution: 'Growth hacking với referral program và localization',
        impact: 'Dominant market share trong 8 countries SEA',
        innovations: ['MyTeksi rebrand thành Grab', 'Driver incentive programs', 'Super app strategy'],
      },
    ],
    careerConnect: {
      name: 'Shark Nguyễn Hòa Bình',
      title: 'Nhà sáng lập & Chủ tịch, NextTech Group',
      company: 'NextTech Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Khởi nghiệp không cần những ý tưởng "đao to búa lớn". Hãy bắt đầu từ những vấn đề nhỏ nhất xung quanh bạn mà chưa ai giải quyết tốt. Công nghệ chỉ là công cụ, sự thấu hiểu thị trường và khả năng thực thi mới là quyết định.',
    },
    quizzes: [
      {
        question: 'Growth hacking khác gì so với marketing truyền thống?',
        options: [
          'Chỉ tập trung vào quảng cáo trả tiền',
          'Tìm kiếm các kênh marketing mới mẻ và sáng tạo với chi phí thấp',
          'Không bao giờ sử dụng email marketing',
          'Chỉ phù hợp với các công ty lớn',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Growth hacking là tìm kiếm các kênh marketing mới mẻ và sáng tạo với chi phí thấp, thường là ưu tiên số 1 cho các startup với ngân sách hạn chế.',
      },
      {
        question: 'Yếu tố nào sau đây không phải là một phần của chiến lược growth marketing?',
        options: [
          'Xác định đối tượng khách hàng mục tiêu',
          'Tạo nội dung viral',
          'Tối ưu hóa tỷ lệ chuyển đổi',
          'Chỉ chạy quảng cáo trên Facebook',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Chiến lược growth marketing bao gồm nhiều kênh và phương pháp khác nhau, không chỉ giới hạn ở quảng cáo trên Facebook.',
      },
    ],
  },
  {
    id: 'funding-investment-preparation',
    title: 'Gọi Vốn & Chuẩn Bị Đầu Tư',
    description: 'Chuẩn bị pitch deck, tìm kiếm nhà đầu tư và negotiate terms để gọi vốn thành công cho startup',
    duration: '240 phút',
    difficulty: 'Nâng cao',
    ageGroup: '18-25',
    businessTools: ['Pitch Deck', 'Financial Model', 'Term Sheet'],
    vietnameseMarketFocus: ['Angel Investors', 'VC Funds', 'Corporate Ventures'],
    successMetrics: ['Successful Funding Round', 'Valuation', 'Investor Relations'],
    videoUrl: 'https://www.youtube.com/watch?v=FwQTVN5fODw',
    imageUrl: 'https://i.ytimg.com/vi/x2JRtPxGF7Y/hqdefault.jpg',
    objectives: [
      'Tạo pitch deck chuyên nghiệp',
      'Hiểu rõ ecosystem đầu tư Việt Nam',
      'Valuation và negotiate investment terms',
      'Chuẩn bị due diligence process',
    ],
    prerequisites: [
      'Có business model validated',
      'Traction metrics và growth potential',
      'Hiểu biết về tài chính cơ bản',
      'Business plan chi tiết',
    ],
    exercises: [
      {
        title: 'Pitch Deck & Investor Presentation',
        description: 'Tạo pitch deck chuẩn Silicon Valley cho startup Việt Nam',
        difficulty: 'Nâng cao',
        materials: ['Pitch deck templates', 'Financial modeling tools', 'Market research data', 'Traction metrics'],
        procedure: [
          'Craft compelling problem-solution narrative',
          'Prepare market size và TAM analysis',
          'Develop financial projections 3-5 năm',
          'Create demo và product showcase',
          'Practice pitch delivery và Q&A',
        ],
        expectedResults: 'Pitch deck 10-12 slides với clear ask và compelling story',
        solution: 'Focus vào traction, team expertise, và scalable business model',
      },
      {
        title: 'Mock Investor Meeting',
        description: 'Simulation meeting với investor và negotiate investment terms',
        difficulty: 'Nâng cao',
        materials: ['Term sheet templates', 'Due diligence checklist', 'Legal documents', 'Valuation models'],
        procedure: [
          'Research target investors và portfolio',
          'Prepare Q&A cho common investor questions',
          'Practice term sheet negotiation',
          'Role-play investment meeting',
          'Follow-up strategy và next steps',
        ],
        expectedResults: 'Successful mock pitch với positive investor feedback',
      },
    ],
    realWorldApplications: [
      'Gọi vốn seed funding từ 2-20 tỷ VNĐ',
      'Negotiate với VC funds và angel investors',
      'Chuẩn bị cho Series A funding round',
      'Strategic partnership với corporate ventures',
    ],
    caseStudies: [
      {
        title: 'VNG - From Startup to Tech Giant',
        organization: 'VNG Corporation - Lê Hồng Minh',
        problem: 'Gaming và internet services market chưa mature tại VN',
        solution: 'Multiple funding rounds với focus vào mobile gaming',
        impact: 'Trở thành tech unicorn đầu tiên của VN',
        innovations: ['Zalo super app', 'VNG Cloud services', 'International expansion'],
      },
      {
        title: 'Momo - Fintech Unicorn Journey',
        organization: 'Momo - Nguyễn Bá Diệp',
        problem: 'Digital payment adoption thấp tại Việt Nam',
        solution: 'Series funding để scale mobile wallet',
        impact: 'Unicorn valuation $2B, hàng triệu users',
        innovations: ['QR payment ecosystem', 'Super app model', 'Financial inclusion'],
      },
    ],
    careerConnect: {
      name: 'Shark Nguyễn Hòa Bình',
      title: 'Nhà sáng lập & Chủ tịch, NextTech Group',
      company: 'NextTech Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Khởi nghiệp không cần những ý tưởng "đao to búa lớn". Hãy bắt đầu từ những vấn đề nhỏ nhất xung quanh bạn mà chưa ai giải quyết tốt. Công nghệ chỉ là công cụ, sự thấu hiểu thị trường và khả năng thực thi mới là quyết định.',
    },
    quizzes: [
      {
        question: 'Yếu tố nào sau đây không phải là một phần của quy trình gọi vốn?',
        options: [
          'Chuẩn bị pitch deck',
          'Tìm kiếm nhà đầu tư tiềm năng',
          'Phân tích đối thủ cạnh tranh',
          'Thương thảo điều khoản đầu tư',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Quy trình gọi vốn thường không bao gồm phân tích đối thủ cạnh tranh như một bước chính thức. Tuy nhiên, việc hiểu rõ đối thủ cạnh tranh vẫn rất quan trọng trong kinh doanh.',
      },
      {
        question: 'Term sheet là gì trong quá trình gọi vốn?',
        options: [
          'Một loại thuế phải nộp khi gọi vốn',
          'Tài liệu phác thảo các điều khoản chính của thỏa thuận đầu tư',
          'Bảng tính toán lợi nhuận dự kiến cho nhà đầu tư',
          'Hợp đồng chính thức giữa startup và nhà đầu tư',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Term sheet là tài liệu phác thảo các điều khoản chính của thỏa thuận đầu tư giữa startup và nhà đầu tư. Nó không phải là hợp đồng chính thức nhưng là cơ sở để soạn thảo hợp đồng sau này.',
      },
    ],
  },
  {
    id: 'team-building-leadership',
    title: 'Xây Dựng Đội Ngũ & Leadership Skills',
    description: 'Phát triển kỹ năng lãnh đạo, recruiting talent, xây dựng culture và quản lý team hiệu quả',
    duration: '180 phút',
    difficulty: 'Trung bình',
    ageGroup: '18-25',
    businessTools: ['Recruitment Platforms', 'Performance Management Systems', 'Team Collaboration Tools'],
    vietnameseMarketFocus: ['Startup Culture', 'Talent Retention', 'Remote Work Management'],
    successMetrics: ['Employee Satisfaction', 'Team Performance', 'Low Turnover Rate'],
    videoUrl: null,
    imageUrl: 'https://i.ytimg.com/vi/anClAIcriq8/hqdefault.jpg',
    objectives: [
      'Phát triển leadership skills cho founders trẻ',
      'Recruit và retain top talent',
      'Xây dựng company culture mạnh mẽ',
      'Quản lý team performance hiệu quả',
    ],
    prerequisites: ['Có team hoặc chuẩn bị build team', 'Kỹ năng giao tiếp cơ bản', 'Hiểu biết về psychology'],
    exercises: [
      {
        title: 'Startup Culture Design Workshop',
        description: 'Thiết kế company culture và values cho startup',
        difficulty: 'Trung bình',
        materials: [
          'Culture assessment tools',
          'Values definition workshop',
          'Employee handbook template',
          'Feedback systems',
        ],
        procedure: [
          'Define core values và mission alignment',
          'Design onboarding experience',
          'Create feedback và recognition systems',
          'Establish communication protocols',
          'Plan culture reinforcement activities',
        ],
        expectedResults: 'Complete culture playbook với clear values và practices',
        solution: 'Focus vào psychological safety và growth mindset',
      },
    ],
    realWorldApplications: [
      'Build high-performing startup teams',
      'Attract top talent với limited budget',
      'Scale company culture trong growth phase',
      'Manage remote/hybrid team effectively',
    ],
    caseStudies: [
      {
        title: 'Shopee - Building Winning Culture',
        organization: 'Shopee - Chris Feng',
        problem: 'Cạnh tranh khốc liệt trong e-commerce SEA',
        solution: 'Strong culture focus với "Serve Buyers, Empower Sellers"',
        impact: 'Dominant market share trong 7 countries',
        innovations: ['Culture-driven hiring', 'Cross-country collaboration', 'Innovation mindset'],
      },
    ],
    careerConnect: {
      name: 'Shark Nguyễn Hòa Bình',
      title: 'Nhà sáng lập & Chủ tịch, NextTech Group',
      company: 'NextTech Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Khởi nghiệp không cần những ý tưởng "đao to búa lớn". Hãy bắt đầu từ những vấn đề nhỏ nhất xung quanh bạn mà chưa ai giải quyết tốt. Công nghệ chỉ là công cụ, sự thấu hiểu thị trường và khả năng thực thi mới là quyết định.',
    },
    quizzes: [
      {
        question: 'Yếu tố nào sau đây không phải là một phần của văn hóa doanh nghiệp?',
        options: ['Giá trị cốt lõi', 'Chính sách lương thưởng', 'Quy trình tuyển dụng', 'Chiến lược marketing'],
        correctAnswerIndex: 3,
        explanation:
          'Chiến lược marketing thường không được xem là một phần của văn hóa doanh nghiệp, mặc dù nó có thể bị ảnh hưởng bởi văn hóa doanh nghiệp.',
      },
      {
        question: 'Kỹ năng lãnh đạo nào sau đây là quan trọng nhất trong giai đoạn đầu của một startup?',
        options: [
          'Kỹ năng tài chính',
          'Kỹ năng giao tiếp và truyền cảm hứng',
          'Kỹ năng lập trình',
          'Kỹ năng phân tích dữ liệu',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong giai đoạn đầu của một startup, kỹ năng giao tiếp và truyền cảm hứng là rất quan trọng để xây dựng đội ngũ và thuyết phục nhà đầu tư.',
      },
    ],
  },
  {
    id: 'scaling-operations',
    title: 'Scale Operations & Business Growth',
    description:
      'Học cách scale business operations, optimize processes và maintain quality trong quá trình tăng trưởng nhanh',
    duration: '225 phút',
    difficulty: 'Nâng cao',
    ageGroup: '18-25',
    businessTools: ['Automation Tools (Zapier)', 'CRM (Salesforce)', 'ERP Systems'],
    vietnameseMarketFocus: ['Logistics', 'Supply Chain', 'Customer Support'],
    successMetrics: ['Operational Efficiency', 'Profitability', 'Customer Satisfaction'],
    videoUrl: 'https://www.youtube.com/watch?v=cIYmQeN62SA',
    imageUrl: 'https://i.ytimg.com/vi/cIYmQeN62SA/hqdefault.jpg',
    objectives: [
      'Thiết kế scalable business processes',
      'Implement automation và efficiency tools',
      'Manage rapid growth challenges',
      'Build sustainable competitive advantages',
    ],
    prerequisites: [
      'Có business với initial traction',
      'Hiểu biết về operations management',
      'Experience với tools và technology',
    ],
    exercises: [
      {
        title: 'Operations Automation Project',
        description: 'Automate 70% manual processes để scale efficiency',
        difficulty: 'Nâng cao',
        materials: ['Process mapping tools', 'Automation platforms (Zapier)', 'CRM systems', 'Analytics dashboards'],
        procedure: [
          'Map toàn bộ business processes',
          'Identify automation opportunities',
          'Implement workflow automation',
          'Setup monitoring và optimization',
          'Train team trên new processes',
        ],
        expectedResults: 'Automated workflows với 70% reduction trong manual work',
        solution: 'Focus vào repetitive tasks và customer-facing processes',
      },
    ],
    realWorldApplications: [
      'Scale startup từ 10 đến 100+ employees',
      'Maintain quality trong rapid growth',
      'Optimize unit economics và profitability',
      'Expand sang new markets efficiently',
    ],
    caseStudies: [
      {
        title: 'Lazada - Regional Scaling Success',
        organization: 'Lazada Group - Pierre Poignant',
        problem: 'Scale e-commerce platform across diverse SEA markets',
        solution: 'Standardized operations với local customization',
        impact: 'Leading e-commerce platform trong 6 countries',
        innovations: ['Unified logistics network', 'Local payment integration', 'Cross-border commerce'],
      },
    ],
    careerConnect: {
      name: 'Shark Nguyễn Hòa Bình',
      title: 'Nhà sáng lập & Chủ tịch, NextTech Group',
      company: 'NextTech Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Khởi nghiệp không cần những ý tưởng "đao to búa lớn". Hãy bắt đầu từ những vấn đề nhỏ nhất xung quanh bạn mà chưa ai giải quyết tốt. Công nghệ chỉ là công cụ, sự thấu hiểu thị trường và khả năng thực thi mới là quyết định.',
    },
    quizzes: [
      {
        question: 'Yếu tố nào sau đây không phải là một thách thức khi mở rộng quy mô doanh nghiệp?',
        options: [
          'Duy trì chất lượng sản phẩm/dịch vụ',
          'Tìm kiếm khách hàng mới',
          'Quản lý dòng tiền',
          'Tăng trưởng doanh thu',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Tăng trưởng doanh thu thường được xem là một mục tiêu tích cực, không phải là một thách thức. Tuy nhiên, việc duy trì lợi nhuận trong khi tăng trưởng có thể là một thách thức.',
      },
      {
        question: 'Công cụ nào sau đây thường không được sử dụng để tự động hóa quy trình kinh doanh?',
        options: ['Zapier', 'Google Analytics', 'Salesforce', 'Mailchimp'],
        correctAnswerIndex: 2,
        explanation:
          'Salesforce là một CRM và không phải là công cụ tự động hóa quy trình kinh doanh như Zapier. Tuy nhiên, nó có thể được tích hợp với các công cụ tự động hóa khác.',
      },
    ],
  },
  {
    id: 'startup-legal-compliance',
    title: 'Pháp Lý & Compliance cho Startup',
    description:
      'Hiểu rõ khung pháp lý, intellectual property, contracts và compliance requirements cho startup tại Việt Nam',
    duration: '165 phút',
    difficulty: 'Trung bình',
    ageGroup: '18-25',
    businessTools: ['Contract Templates', 'IP Registration Portals', 'Compliance Checklists'],
    vietnameseMarketFocus: ['Business Registration', 'Foreign Investment Law', 'Data Privacy (Decree 13)'],
    successMetrics: ['Legal Compliance', 'IP Protection', 'Risk Mitigation'],
    videoUrl: 'https://www.youtube.com/watch?v=n7O6IpKS7Ww',
    imageUrl: 'https://i.ytimg.com/vi/n7O6IpKS7Ww/hqdefault.jpg',
    objectives: [
      'Hiểu framework pháp lý cho startup VN',
      'Protect intellectual property',
      'Draft contracts và legal documents',
      'Ensure compliance với regulations',
    ],
    prerequisites: [
      'Có startup hoặc business idea',
      'Hiểu biết cơ bản về business law',
      'Access đến legal consultation',
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
          'Government resources',
        ],
        procedure: [
          'Review current legal structure',
          'Audit IP và trademark protection',
          'Review contracts và agreements',
          'Check regulatory compliance',
          'Create legal roadmap',
        ],
        expectedResults: 'Complete legal compliance report với action plan',
        solution: 'Partner với legal experts và use standard templates',
      },
    ],
    realWorldApplications: [
      'Setup legal structure cho startup',
      'Protect IP và trade secrets',
      'Draft employment và vendor contracts',
      'Ensure data privacy compliance',
    ],
    caseStudies: [
      {
        title: 'VinFast - IP Strategy cho Global Expansion',
        organization: 'VinFast - Lê Thị Thu Thủy',
        problem: 'Protect automotive IP trong competitive market',
        solution: 'Comprehensive IP strategy với international protection',
        impact: 'Successful global expansion với protected technology',
        innovations: ['Patent portfolio development', 'Trade secret management', 'International compliance'],
      },
    ],
    careerConnect: {
      name: 'Shark Nguyễn Hòa Bình',
      title: 'Nhà sáng lập & Chủ tịch, NextTech Group',
      company: 'NextTech Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Khởi nghiệp không cần những ý tưởng "đao to búa lớn". Hãy bắt đầu từ những vấn đề nhỏ nhất xung quanh bạn mà chưa ai giải quyết tốt. Công nghệ chỉ là công cụ, sự thấu hiểu thị trường và khả năng thực thi mới là quyết định.',
    },
    quizzes: [
      {
        question: 'Yếu tố nào sau đây không phải là một phần của quy trình bảo vệ sở hữu trí tuệ?',
        options: ['Đăng ký nhãn hiệu', 'Nộp thuế doanh nghiệp', 'Đăng ký bản quyền tác giả', 'Xin cấp bằng sáng chế'],
        correctAnswerIndex: 1,
        explanation:
          'Nộp thuế doanh nghiệp không liên quan trực tiếp đến quy trình bảo vệ sở hữu trí tuệ. Tuy nhiên, việc tuân thủ nghĩa vụ thuế là cần thiết để duy trì hoạt động hợp pháp của doanh nghiệp.',
      },
      {
        question: 'Hợp đồng nào sau đây thường không cần thiết phải có trong một startup?',
        options: [
          'Hợp đồng lao động',
          'Hợp đồng thuê văn phòng',
          'Hợp đồng bảo mật thông tin (NDA)',
          'Hợp đồng mua bán hàng hóa',
        ],
        correctAnswerIndex: 4,
        explanation:
          'Hợp đồng mua bán hàng hóa không phải lúc nào cũng cần thiết trong giai đoạn đầu của một startup, trừ khi startup đó hoạt động trong lĩnh vực thương mại hoặc sản xuất.',
      },
    ],
  },
];

export default youngEntrepreneurLessons;
