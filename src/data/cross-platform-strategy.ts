import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface VietnamContext {
  title: string;
  content: string[];
}

export interface CareerConnect {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  quote: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface CrossPlatformStrategyLessonType extends BaseLessonData {
  platformFeatures: string[];
  contentAdaptation: string[];
  audienceSegmentation: string[];
  analyticsIntegration: string[];
  automationTools: string[];
  vietnamContext?: VietnamContext;
  careerConnect?: CareerConnect;
  quizzes?: Quiz[];
}

export const crossPlatformStrategyLessons: CrossPlatformStrategyLessonType[] = [
  {
    id: 'unified-brand-messaging-strategy',
    title: 'Unified Brand Messaging Across Platforms',
    description:
      "Develop cohesive brand messaging strategy maintains consistency while optimizing cho each platform's unique characteristics.",
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=RziXIvXpvr0',
    imageUrl: '/images/lessons/unified-messaging.jpg',
    objectives: [
      'Develop consistent brand voice across platforms',
      'Adapt messaging cho platform-specific audiences',
      'Create content templates cho efficiency',
      'Maintain brand identity while optimizing engagement',
      'Implement cross-platform measurement systems',
    ],
    prerequisites: [
      'Established brand identity',
      'Multi-platform presence',
      'Understanding of platform differences',
      'Content creation capabilities',
    ],
    platformFeatures: [
      'Instagram visual storytelling',
      'TikTok short-form entertainment',
      'LinkedIn professional networking',
      'YouTube long-form education',
      'Twitter real-time conversations',
    ],
    contentAdaptation: [
      'Platform-native content formats',
      'Audience behavior optimization',
      'Algorithm-friendly structures',
      'Cultural context considerations',
      'Engagement pattern matching',
    ],
    audienceSegmentation: [
      'Platform demographic differences',
      'Behavioral pattern variations',
      'Content consumption preferences',
      'Engagement time optimization',
      'Cross-platform journey mapping',
    ],
    analyticsIntegration: [
      'Unified tracking systems',
      'Cross-platform attribution',
      'ROI measurement frameworks',
      'Performance benchmarking',
      'Audience overlap analysis',
    ],
    automationTools: [
      'Content scheduling platforms',
      'Cross-posting automation',
      'Response management systems',
      'Analytics aggregation tools',
      'Workflow optimization software',
    ],
    exercises: [
      {
        title: 'Cross-Platform Brand Strategy Development',
        description: 'Create comprehensive strategy maintaining brand consistency across 5+ platforms',
        difficulty: 'Nâng cao',
        materials: [
          'Brand guidelines documentation',
          'Platform analysis tools',
          'Content planning templates',
          'Analytics integration setup',
        ],
        procedure: [
          'Audit current brand presence across platforms',
          'Analyze audience differences và overlaps',
          'Develop platform-specific adaptation guidelines',
          'Create unified content calendar system',
          'Implement cross-platform tracking',
          'Test messaging consistency',
          'Monitor engagement patterns',
          'Optimize based on performance data',
        ],
        expectedResults: 'Cohesive brand experience với platform-optimized performance',
        solution: 'Strategic adaptation maintaining core brand identity',
      },
    ],
    realWorldApplications: [
      'Global brands managing multiple markets',
      'Agencies serving diverse clients',
      'Personal brands building thought leadership',
      'E-commerce businesses maximizing reach',
    ],
    caseStudies: [
      {
        title: 'Tech Startup Multi-Platform Success',
        organization: 'Vietnamese SaaS Company',
        problem: 'Inconsistent brand messaging across platforms hurting recognition',
        solution: 'Unified brand strategy với platform-specific optimizations',
        impact: 'Brand recognition increased 250%, cross-platform conversion improved 180%',
        innovations: [
          'AI-powered content adaptation system',
          'Cross-platform customer journey optimization',
          'Unified brand experience measurement',
        ],
      },
    ],
    resources: [
      {
        title: 'Cross-Platform Strategy Guide',
        url: 'https://sproutsocial.com/insights/cross-platform-marketing',
        type: 'Strategy Resource',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam: "Nhất quán trong đa dạng"',
      content: [
        'Các thương hiệu lớn tại Việt Nam như Vinamilk, Viettel, FPT phải duy trì một thông điệp cốt lõi nhất quán trên nhiều nền tảng từ Zalo, Facebook, YouTube đến TikTok.',
        'Ví dụ: Vinamilk có thể đăng một video chuyên nghiệp về quy trình sản xuất trên YouTube, nhưng trên TikTok sẽ là một clip vui nhộn về một chú bò nhảy múa. Cả hai đều truyền tải thông điệp "chất lượng" và "tươi vui" nhưng bằng ngôn ngữ của từng nền tảng.',
        'Tết Nguyên Đán là "trận chiến" lớn nhất của các thương hiệu, đòi hỏi các chiến dịch đa kênh phải được dàn dựng công phu, nhất quán từ TVC, OOH (quảng cáo ngoài trời) đến các hoạt động trên mạng xã hội.',
        'Sự trỗi dậy của Zalo như một "siêu ứng dụng" buộc các thương hiệu phải có chiến lược riêng cho nền tảng này, từ Zalo Official Account đến Zalo Ads, để tiếp cận người dùng trong hệ sinh thái của VNG.',
      ],
    },
    careerConnect: {
      name: 'Bà Nguyễn Thị Bích Vân',
      title: 'Giám đốc Marketing',
      company: 'Unilever Việt Nam (hư cấu)',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thi-bich-van',
      quote:
        'Thách thức của chúng tôi là làm sao để một thương hiệu như OMO vừa có thể nói chuyện một cách nghiêm túc về phát triển bền vững trên LinkedIn với các đối tác, vừa có thể tạo ra một trào lưu "lấm bẩn" vui nhộn trên TikTok cho các bà mẹ trẻ. Giọng nói thương hiệu phải nhất quán, nhưng cách thể hiện phải linh hoạt như một diễn viên tài ba.',
    },
    quizzes: [
      {
        question: 'Tại sao một thương hiệu cần phải điều chỉnh thông điệp cho từng nền tảng mạng xã hội?',
        options: [
          'Để làm cho thông điệp trở nên mâu thuẫn.',
          'Vì mỗi nền tảng có đặc điểm đối tượng, định dạng nội dung và "luật chơi" riêng.',
          'Vì đăng cùng một nội dung ở mọi nơi là hiệu quả nhất.',
          'Để tiết kiệm thời gian.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Việc điều chỉnh thông điệp giúp thương hiệu giao tiếp hiệu quả hơn với người dùng theo cách họ mong muốn trên từng nền tảng, từ đó tăng tương tác và sự kết nối.',
      },
      {
        question:
          'Trong bối cảnh Việt Nam, nền tảng nào thường được sử dụng cho các thông báo chính thức và chăm sóc khách hàng?',
        options: ['TikTok', 'Instagram', 'Zalo (qua Official Account)', 'YouTube'],
        correctAnswerIndex: 2,
        explanation:
          'Zalo Official Account đã trở thành một kênh quan trọng cho các doanh nghiệp tại Việt Nam để gửi thông báo, cập nhật và tương tác trực tiếp với khách hàng một cách chính thức.',
      },
    ],
  },
  {
    id: 'advanced-content-repurposing-distribution',
    title: 'Advanced Content Repurposing & Distribution',
    description:
      'Master efficient content repurposing techniques để maximize content ROI across multiple platforms và formats.',
    duration: '120 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=yye7rSsiV6k',
    imageUrl: '/images/lessons/content-repurposing.jpg',
    objectives: [
      'Develop efficient content repurposing workflows',
      'Maximize content ROI through strategic distribution',
      'Create platform-optimized content variations',
      'Implement automated repurposing systems',
      'Track performance across content formats',
    ],
    prerequisites: [
      'Content creation experience',
      'Understanding of content formats',
      'Platform best practices knowledge',
      'Analytics interpretation skills',
    ],
    platformFeatures: [
      'Format optimization requirements',
      'Engagement pattern differences',
      'Algorithm preference variations',
      'Audience consumption behaviors',
      'Distribution timing optimization',
    ],
    contentAdaptation: [
      'Long-form to short-form conversion',
      'Visual content optimization',
      'Audio content repurposing',
      'Interactive format creation',
      'Cross-format storytelling',
    ],
    audienceSegmentation: [
      'Platform-specific preferences',
      'Content format engagement patterns',
      'Timing optimization strategies',
      'Demographic content preferences',
      'Cross-platform audience migration',
    ],
    analyticsIntegration: [
      'Content performance tracking',
      'ROI measurement systems',
      'Format effectiveness analysis',
      'Audience engagement comparison',
      'Optimization recommendation engines',
    ],
    automationTools: [
      'Content transformation tools',
      'Automated distribution systems',
      'Performance monitoring platforms',
      'Workflow management software',
      'Quality control automation',
    ],
    exercises: [
      {
        title: 'Content Repurposing System Implementation',
        description: 'Build automated system repurposing content across 10+ formats và platforms',
        difficulty: 'Nâng cao',
        materials: [
          'Content management systems',
          'Automation tool subscriptions',
          'Quality control frameworks',
          'Performance tracking setup',
        ],
        procedure: [
          'Identify high-performing content for repurposing',
          'Map content transformation opportunities',
          'Setup automated repurposing workflows',
          'Create quality control checkpoints',
          'Implement distribution scheduling',
          'Monitor performance across formats',
          'Optimize transformation processes',
          'Scale successful repurposing patterns',
        ],
        expectedResults: '500% increase in content output với maintained quality',
        solution: 'Systematic repurposing maximizing content investment',
      },
    ],
    realWorldApplications: [
      'Content agencies scaling production',
      'Solo creators maximizing reach',
      'Brands optimizing content budgets',
      'Educational organizations spreading knowledge',
    ],
    caseStudies: [
      {
        title: 'Educational Creator Scaling Success',
        organization: 'Vietnamese Online Educator',
        problem: 'Limited time creating platform-specific content',
        solution: 'Automated repurposing system creating 20+ content pieces từ single source',
        impact: 'Content output increased 10x, audience growth 400% across platforms',
        innovations: [
          'AI-powered content transformation',
          'Multi-format quality optimization',
          'Cross-platform performance tracking',
        ],
      },
    ],
    resources: [
      {
        title: 'Content Repurposing Strategies',
        url: 'https://blog.hubspot.com/marketing/content-repurposing',
        type: 'Strategy Guide',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam: "Một miếng đánh, nhiều đích trúng"',
      content: [
        'Các nhà sáng tạo nội dung Việt Nam là bậc thầy về tái sử dụng nội dung. Một buổi livestream bán hàng có thể được cắt thành hàng chục video ngắn trên TikTok, các clip highlight trên Facebook, và một bài viết tổng hợp kinh nghiệm trên blog.',
        'Ví dụ: Một kênh YouTube về ẩm thực như "Ngon" có thể quay một video dài về cách làm phở. Sau đó, họ sẽ tạo ra: 10 video TikTok ngắn cho mỗi công đoạn, một album ảnh "hậu trường" trên Facebook, một bài viết blog chi tiết công thức, và một infographic về các loại gia vị phở trên Instagram.',
        'Sự bùng nổ của KOC (Key Opinion Consumer) - người tiêu dùng có ảnh hưởng - tại Việt Nam cũng dựa trên việc tái sử dụng nội dung. Một bài review sản phẩm có thể xuất hiện dưới dạng video trên TikTok, bài viết trên các hội nhóm Facebook, và bình luận trên các sàn thương mại điện tử.',
        'Các công cụ AI đang được các agency Việt Nam thử nghiệm để tự động hóa quá trình này, từ việc tạo phụ đề, cắt ghép video đến việc viết các bài đăng mạng xã hội từ một nội dung gốc.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Anh Dũng (Dũng Lại Lập Trình)',
      title: 'Nhà sáng tạo nội dung & Lập trình viên',
      company: '9CV9 & Dũng Lại Lập Trình YouTube Channel',
      imageUrl: 'https://i.pravatar.cc/150?u=dung-lai-lap-trinh',
      quote:
        'Là một người sáng tạo nội dung, thời gian của tôi là hữu hạn. Tôi không thể tạo nội dung riêng cho từng nền tảng. Thay vào đó, tôi tập trung tạo một "content pillar" (nội dung trụ cột) thật chất lượng, thường là một video YouTube dài. Sau đó, tôi "phân rã" nó thành nhiều mảnh nhỏ: clip ngắn, bài viết, hình ảnh... để phủ sóng khắp nơi. Đó là cách duy nhất để vừa duy trì chất lượng, vừa có độ phủ.',
    },
    quizzes: [
      {
        question: '"Content Pillar" (Nội dung trụ cột) là gì?',
        options: [
          'Một bài đăng ngắn trên Twitter.',
          'Một mảnh nội dung lớn, sâu sắc (như một video dài, một bài nghiên cứu) làm nền tảng để tạo ra nhiều nội dung nhỏ hơn.',
          'Một bình luận trên Facebook.',
          'Một video quảng cáo 15 giây.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Content Pillar là chiến lược tạo ra một nội dung gốc chất lượng cao, sau đó tái sử dụng và phân phối nó dưới nhiều hình thức khác nhau trên các kênh khác nhau, giúp tiết kiệm thời gian và tăng ROI.',
      },
      {
        question: 'Lợi ích chính của việc tái sử dụng nội dung (content repurposing) là gì?',
        options: [
          'Tốn nhiều thời gian hơn.',
          'Chỉ tiếp cận được một nhóm nhỏ khán giả.',
          'Tăng sản lượng nội dung, tiết kiệm thời gian, tiếp cận khán giả mới trên các nền tảng khác nhau và củng cố thông điệp thương hiệu.',
          'Làm giảm chất lượng nội dung.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Tái sử dụng nội dung là một chiến lược thông minh giúp tối đa hóa giá trị từ mỗi mảnh nội dung bạn tạo ra, giúp bạn làm được nhiều hơn với ít công sức hơn.',
      },
    ],
  },
];
