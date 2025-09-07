import { BaseLessonData } from '@/types/lesson-base';
export interface MicroInfluencerLessonType extends BaseLessonData {
  vietnamContext: {
    title: string;
    content: string[];
  };
  careerConnect: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
  quizzes: Array<{
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }>;
}

export const microInfluencerEconomyLessons: MicroInfluencerLessonType[] = [
  {
    id: 'micro-influencer-fundamentals',
    title: 'Nền Tảng Micro-Influencer Economy',
    description:
      'Hiểu ecosystem của micro-influencer economy, từ defining micro-influencers đến understanding market opportunities trong Vietnamese context.',
    duration: '160 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=3DdJ1JynG8M',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    objectives: [
      'Understand micro-influencer definition và market position',
      'Analyze Vietnamese social media landscape cho influencers',
      'Identify niche opportunities trong micro-influencer space',
      'Learn fundamental monetization strategies',
      'Understand audience psychology và engagement',
      'Master basic content creation principles',
    ],
    prerequisites: [
      'Basic social media understanding',
      'Vietnamese market awareness',
      'Interest trong content creation',
    ],
    exercises: [
      {
        title: 'Vietnamese Micro-Influencer Market Analysis',
        description: 'Research và analyze Vietnamese micro-influencer market opportunities',
        difficulty: 'Cơ bản',
        materials: ['Market Research Tools', 'Social Media Analytics', 'Competitor Analysis Templates'],
        procedure: [
          'Define target micro-influencer niches trong Vietnamese market',
          'Analyze top micro-influencers trong chosen niches',
          'Study audience demographics và engagement patterns',
          'Identify content gaps và opportunities',
          'Research brand collaboration trends',
          'Analyze monetization methods currently used',
          'Create comprehensive market opportunity report',
          'Develop personal micro-influencer strategy',
        ],
        expectedResults: 'Comprehensive market analysis với actionable insights cho micro-influencer career',
        solution: 'Strategic framework cho entering micro-influencer economy trong Vietnamese market',
      },
    ],
    realWorldApplications: [
      'Beauty micro-influencers promoting Vietnamese skincare brands',
      'Food bloggers showcasing local Vietnamese cuisine',
      'Tech reviewers covering Vietnamese startup products',
      'Fashion influencers featuring Vietnamese designer brands',
      'Travel micro-influencers promoting Vietnamese destinations',
    ],
    caseStudies: [
      {
        title: 'Chloe Nguyen - Vietnamese Beauty Micro-Influencer Success',
        organization: 'Independent Creator',
        problem: 'Building authentic following trong competitive beauty space',
        solution: 'Focused on Vietnamese-specific beauty content và authentic reviews',
        impact: 'Grew from 0 to 50K followers trong 18 months với consistent brand partnerships',
        innovations: ['Vietnamese Beauty Focus', 'Authentic Product Reviews', 'Community Building'],
      },
    ],
    resources: [
      {
        title: 'Micro-Influencer Marketing Guide',
        url: 'https://blog.hootsuite.com/micro-influencers/',
        type: 'Guide',
      },
      {
        title: 'Vietnamese Social Media Statistics',
        url: 'https://datareportal.com/reports/digital-2023-vietnam',
        type: 'Research',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam: Sự bùng nổ của các "Micro-Influencer"',
      content: [
        'Thị trường Việt Nam với dân số trẻ và tỷ lệ sử dụng mạng xã hội cao là mảnh đất màu mỡ cho các micro-influencer. Người tiêu dùng có xu hướng tin tưởng các đánh giá chân thực từ những người có quy mô theo dõi nhỏ hơn.',
        'Các ngành hàng như mỹ phẩm, thời trang, ẩm thực và du lịch địa phương đặc biệt ưa chuộng hợp tác với micro-influencer để tiếp cận các thị trường ngách.',
        'Nhiều thương hiệu Việt Nam nhận ra rằng chiến dịch với hàng chục micro-influencer có thể hiệu quả hơn về chi phí và tạo ra độ phủ rộng hơn so với một mega-influencer duy nhất.',
      ],
    },
    careerConnect: {
      name: 'Chị Mai Vân',
      title: 'Food Blogger & Micro-Influencer',
      company: 'Ẩm Thực Đường Phố',
      imageUrl: 'https://i.pravatar.cc/150?u=mai-van',
      quote:
        'Tôi bắt đầu chỉ với một chiếc điện thoại và tình yêu với các món ăn vặt Sài Gòn. Sự chân thật là chìa khóa. Tôi không cố gắng trở thành một ai đó xa vời, tôi là một người bạn giới thiệu món ngon cho mọi người. Các thương hiệu tìm đến tôi vì điều đó.',
    },
    quizzes: [
      {
        question: 'Đâu là lợi thế lớn nhất của micro-influencer so với mega-influencer?',
        options: [
          'Lượng người theo dõi lớn hơn',
          'Tỷ lệ tương tác và sự tin tưởng cao hơn',
          'Chi phí sản xuất video cao hơn',
          'Luôn được các thương hiệu lớn nhất lựa chọn',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Micro-influencer thường có một cộng đồng nhỏ nhưng gắn kết, dẫn đến tỷ lệ tương tác (like, comment) và mức độ tin tưởng của người theo dõi cao hơn.',
      },
      {
        question:
          'Nền tảng nào đang là xu hướng cho các micro-influencer tại Việt Nam để xây dựng thương hiệu cá nhân nhanh chóng?',
        options: ['Facebook', 'TikTok', 'LinkedIn', 'Zalo'],
        correctAnswerIndex: 1,
        explanation:
          'TikTok với thuật toán ưu tiên nội dung và khả năng viral cao đang là nền tảng hiệu quả giúp các micro-influencer nhanh chóng xây dựng được lượng người theo dõi ban đầu.',
      },
    ],
  },

  {
    id: 'niche-selection-positioning',
    title: 'Niche Selection Và Personal Brand Positioning',
    description:
      'Master niche selection strategies để find profitable micro-influencer opportunities và build strong personal brand positioning trong competitive market.',
    duration: '175 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=sO4te2QNsHY',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    objectives: [
      'Identify profitable niches trong Vietnamese market',
      'Develop unique value propositions',
      'Create compelling personal brand stories',
      'Position against established competitors',
      'Build authentic brand personality',
      'Design consistent visual brand identity',
    ],
    prerequisites: ['Market research basics', 'Understanding của personal strengths', 'Basic design awareness'],
    exercises: [
      {
        title: 'Personal Brand Strategy Development',
        description: 'Create comprehensive personal brand strategy cho micro-influencer positioning',
        difficulty: 'Trung bình',
        materials: ['Brand Strategy Templates', 'Niche Research Tools', 'Visual Design Resources'],
        procedure: [
          'Conduct personal strengths và interests assessment',
          'Research profitable niches intersecting với personal expertise',
          'Analyze successful micro-influencers trong target niche',
          'Develop unique value proposition',
          'Create brand personality và voice guidelines',
          'Design visual identity (colors, fonts, imagery style)',
          'Develop content pillar strategy',
          'Create brand positioning statement',
        ],
        expectedResults: 'Complete personal brand strategy với clear positioning và differentiation',
        solution: 'Comprehensive brand framework enabling authentic và profitable micro-influencer career',
      },
    ],
    realWorldApplications: [
      'Vietnamese cooking specialists building culinary brands',
      'Fitness trainers positioning as Vietnamese health experts',
      'Sustainable living advocates trong Vietnamese context',
      'Tech enthusiasts focusing on Vietnamese startup ecosystem',
      'Traditional craft experts modernizing heritage skills',
    ],
    caseStudies: [
      {
        title: 'Minh Pham - Vietnamese Tech Micro-Influencer',
        organization: 'Independent Tech Creator',
        problem: 'Differentiating trong crowded tech influencer space',
        solution: 'Focused specifically on Vietnamese startup ecosystem và local tech culture',
        impact: 'Became go-to voice cho Vietnamese tech community với 75K engaged followers',
        innovations: ['Vietnamese Tech Focus', 'Startup Ecosystem Coverage', 'Local Tech Culture Content'],
      },
    ],
    resources: [
      {
        title: 'Personal Branding Guide for Creators',
        url: 'https://creatoreconomy.so/p/personal-branding-guide',
        type: 'Guide',
      },
      {
        title: 'Niche Research Tools for Influencers',
        url: 'https://blog.influencermarketinghub.com/niche-research/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam: Tìm "ngách" để nổi bật',
      content: [
        'Thị trường influencer Việt Nam ngày càng đông đúc, việc chọn một "ngách" cụ thể là yếu tố sống còn. Ví dụ, thay vì là một "food blogger" chung chung, bạn có thể là "chuyên gia review bún bò Huế" hoặc "người sành cà phê đặc sản Việt Nam".',
        'Các ngách tiềm năng tại Việt Nam bao gồm: sản phẩm OCOP (mỗi xã một sản phẩm), du lịch bền vững, tài chính cá nhân cho người trẻ, review ứng dụng "Made in Vietnam".',
        'Xây dựng thương hiệu cá nhân gắn liền với một giá trị cụ thể (ví dụ: sống tối giản, bảo vệ môi trường) cũng là một cách định vị hiệu quả và thu hút các thương hiệu có cùng giá trị.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Tuấn Anh',
      title: 'Micro-Influencer về Tài chính Cá nhân',
      company: 'Tự Do Tài Chính ở Tuổi 30',
      imageUrl: 'https://i.pravatar.cc/150?u=le-tuan-anh',
      quote:
        'Khi tôi bắt đầu, có rất nhiều chuyên gia tài chính lớn. Tôi chọn ngách hẹp hơn: "tài chính cá nhân cho người mới đi làm". Tôi không nói những điều vĩ mô, tôi chỉ cách các bạn trẻ tiết kiệm 50,000 VNĐ mỗi ngày. Sự gần gũi đó đã giúp tôi xây dựng được một cộng đồng tin tưởng.',
    },
    quizzes: [
      {
        question: 'Đâu là một ví dụ tốt về việc chọn "ngách" cho một micro-influencer?',
        options: [
          'Review tất cả các loại phim',
          'Chuyên review phim kinh dị Việt Nam',
          'Nói về mọi thứ trong cuộc sống',
          'Làm video về game',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Chuyên review phim kinh dị Việt Nam là một ngách cụ thể, nhắm đến một đối tượng khán giả rõ ràng và giúp influencer trở thành chuyên gia trong lĩnh vực đó.',
      },
      {
        question: 'Tại sao việc xây dựng thương hiệu cá nhân lại quan trọng với micro-influencer?',
        options: [
          'Để có nhiều người ghét hơn',
          'Để có thể bán được mọi thứ',
          'Để tạo sự khác biệt, thu hút đúng đối tượng và xây dựng lòng tin',
          'Để không cần tạo nội dung hay',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Thương hiệu cá nhân giúp influencer nổi bật giữa đám đông, thu hút những người thực sự quan tâm đến chủ đề của họ và tạo dựng được lòng tin, yếu tố quan trọng nhất để thành công.',
      },
    ],
  },

  {
    id: 'content-creation-strategies',
    title: 'Content Creation Strategies Cho Micro-Influencers',
    description:
      'Master content creation workflows, từ ideation đến production, để consistently create engaging content that drives audience growth và brand partnerships.',
    duration: '190 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=EvGP5mSrGHk',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    objectives: [
      'Develop efficient content creation workflows',
      'Master multi-platform content adaptation',
      'Create engaging storytelling frameworks',
      'Implement batch content creation processes',
      'Understand platform-specific optimization',
      'Build sustainable content calendars',
    ],
    prerequisites: [
      'Basic content creation skills',
      'Understanding của major social platforms',
      'Time management abilities',
    ],
    exercises: [
      {
        title: '30-Day Content Calendar Creation',
        description: 'Develop comprehensive content calendar với batch creation workflow',
        difficulty: 'Trung bình',
        materials: ['Content Calendar Templates', 'Planning Tools', 'Content Creation Apps'],
        procedure: [
          'Analyze audience engagement patterns để find optimal posting times',
          'Develop content pillar strategy based on niche',
          'Create 30-day content calendar với diverse content types',
          'Plan batch content creation sessions',
          'Design content templates cho efficiency',
          'Setup content approval và review processes',
          'Implement content performance tracking',
          'Create backup content cho emergency posting',
        ],
        expectedResults: '30-day content calendar với efficient batch creation workflow',
        solution: 'Sustainable content creation system enabling consistent posting và audience growth',
      },
    ],
    realWorldApplications: [
      'Fashion micro-influencers creating seasonal lookbooks',
      'Food creators developing recipe content series',
      'Travel influencers documenting Vietnamese destinations',
      'Fitness creators designing workout content programs',
      'Beauty influencers creating skincare routine content',
    ],
    caseStudies: [
      {
        title: 'Lan Anh - Vietnamese Fashion Micro-Influencer',
        organization: 'Independent Fashion Creator',
        problem: 'Creating consistent, high-quality fashion content on limited budget',
        solution: 'Developed efficient batch creation workflow với seasonal planning',
        impact: 'Increased content output by 300% while reducing creation time',
        innovations: ['Batch Creation Process', 'Seasonal Content Planning', 'Budget-Friendly Production'],
      },
    ],
    resources: [
      {
        title: 'Content Creation Workflow Guide',
        url: 'https://buffer.com/library/content-creation-workflow/',
        type: 'Guide',
      },
      {
        title: 'Social Media Content Calendar Template',
        url: 'https://blog.hootsuite.com/social-media-calendar/',
        type: 'Template',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam: Sáng tạo nội dung "chất" và "đều"',
      content: [
        'Khán giả Việt Nam đánh giá cao sự nhất quán. Việc có một lịch đăng bài đều đặn giúp xây dựng thói quen cho người xem và được thuật toán ưu ái.',
        'Sản xuất nội dung theo lô (batch production) là một chiến lược hiệu quả. Ví dụ, một food blogger có thể dành một ngày cuối tuần để đi quay ở 4-5 quán ăn, sau đó dành thời gian trong tuần để dựng và đăng dần.',
        'Tận dụng các xu hướng (trends) trên TikTok và Instagram Reels là cách nhanh nhất để tiếp cận khán giả mới, nhưng nội dung vẫn cần phải phù hợp với thương hiệu cá nhân.',
      ],
    },
    careerConnect: {
      name: 'Bạn Trần Gia Huy',
      title: 'TikTok Creator',
      company: 'Gia Huy Thích Đi Chơi',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-gia-huy',
      quote:
        'Mỗi tuần tôi dành một ngày chỉ để lên ý tưởng, một ngày để quay và một ngày để dựng. Nhờ vậy, tôi luôn có sẵn video để đăng mỗi ngày mà không bị "bí" ý tưởng. Kỷ luật và quy trình là bí quyết để một creator có thể đi đường dài.',
    },
    quizzes: [
      {
        question: 'Sản xuất nội dung theo lô (batch production) có lợi ích gì?',
        options: [
          'Tốn nhiều thời gian hơn',
          'Tiết kiệm thời gian, tăng hiệu quả và đảm bảo sự nhất quán',
          'Chất lượng nội dung luôn thấp hơn',
          'Chỉ áp dụng được cho video dài',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Sản xuất theo lô giúp tiết kiệm thời gian bằng cách gộp các công việc giống nhau lại, đảm bảo có nội dung đăng đều đặn và duy trì một phong cách nhất quán.',
      },
      {
        question: 'Content pillar (trụ cột nội dung) là gì?',
        options: [
          'Một loại tripod máy ảnh',
          'Những chủ đề chính, cốt lõi mà kênh của bạn sẽ xoay quanh',
          'Video dài nhất trên kênh',
          'Người theo dõi trung thành nhất',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Content pillars là 3-5 chủ đề cốt lõi mà bạn sẽ tập trung sản xuất nội dung. Điều này giúp kênh của bạn có định hướng rõ ràng và thu hút đúng đối tượng khán giả.',
      },
    ],
  },

  {
    id: 'audience-growth-engagement',
    title: 'Audience Growth Và Community Engagement Strategies',
    description:
      'Learn advanced strategies để grow authentic, engaged audiences và build loyal communities around your micro-influencer brand.',
    duration: '185 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=XSMNLuUdVQY',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    objectives: [
      'Master organic audience growth techniques',
      'Build authentic community engagement',
      'Implement follower retention strategies',
      'Create viral content opportunities',
      'Develop audience loyalty programs',
      'Use analytics để optimize growth',
    ],
    prerequisites: [
      'Content creation fundamentals',
      'Basic social media management',
      'Understanding của community dynamics',
    ],
    exercises: [
      {
        title: 'Community Growth Campaign',
        description: 'Design và execute 60-day community growth campaign',
        difficulty: 'Trung bình',
        materials: ['Growth Strategy Templates', 'Analytics Tools', 'Community Management Tools'],
        procedure: [
          'Analyze current audience demographics và engagement patterns',
          'Set specific, measurable growth targets',
          'Develop multi-platform growth strategy',
          'Create engagement-driven content series',
          'Implement community challenges và campaigns',
          'Setup audience interaction workflows',
          'Monitor growth metrics và adjust tactics',
          'Build long-term community retention plan',
        ],
        expectedResults: 'Measurable audience growth với improved engagement rates và community loyalty',
        solution: 'Comprehensive community growth system với sustainable engagement strategies',
      },
    ],
    realWorldApplications: [
      'Lifestyle influencers building dedicated fan communities',
      'Educational creators developing learning communities',
      'Business influencers creating professional networks',
      'Hobby influencers uniting enthusiast communities',
      'Local influencers building neighborhood connections',
    ],
    caseStudies: [
      {
        title: 'Duc Minh - Vietnamese Fitness Community Builder',
        organization: 'Independent Fitness Creator',
        problem: 'Building engaged fitness community trong competitive Vietnamese market',
        solution: 'Created interactive fitness challenges với community support system',
        impact: 'Grew from 5K to 100K followers trong 12 months với 8% engagement rate',
        innovations: ['Community Fitness Challenges', 'Peer Support System', 'Vietnamese Fitness Culture Focus'],
      },
    ],
    resources: [
      {
        title: 'Community Building Strategies for Creators',
        url: 'https://creatoreconomy.so/p/community-building-strategies',
        type: 'Strategy Guide',
      },
      {
        title: 'Social Media Analytics for Growth',
        url: 'https://blog.hootsuite.com/social-media-analytics/',
        type: 'Analytics Guide',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam: Xây dựng cộng đồng "chất"',
      content: [
        'Người Việt rất coi trọng tính cộng đồng. Việc xây dựng một group Facebook hoặc Zalo cho những người theo dõi trung thành là một chiến lược hiệu quả để tăng sự gắn kết.',
        'Tổ chức các buổi offline nhỏ (meetup) là cách tuyệt vời để biến cộng đồng ảo thành các mối quan hệ thật, điều này đặc biệt được đánh giá cao tại Việt Nam.',
        'Tương tác chân thành là chìa khóa. Trả lời bình luận, tin nhắn và ghi nhận những người theo dõi tích cực sẽ giúp xây dựng một cộng đồng bền vững.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Ngọc Diệp',
      title: 'Micro-Influencer về Lối sống bền vững',
      company: 'Nhà Có Con Mèo',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-ngoc-diep',
      quote:
        'Cộng đồng của tôi không chỉ là những người theo dõi, họ là những người bạn. Chúng tôi cùng nhau chia sẻ cách làm phân compost, cách tái chế đồ cũ. Khi tôi tổ chức một buổi dọn rác ở bờ biển, có hơn 50 bạn đã đến tham gia. Đó là sức mạnh của một cộng đồng được xây dựng từ sự chân thành.',
    },
    quizzes: [
      {
        question: 'Tại sao việc xây dựng cộng đồng lại quan trọng hơn là chỉ tăng lượng người theo dõi?',
        options: [
          'Vì các thương hiệu chỉ trả tiền cho cộng đồng',
          'Vì cộng đồng tạo ra sự gắn kết, lòng trung thành và giá trị lâu dài',
          'Vì tăng người theo dõi rất khó',
          'Vì không có lý do nào đặc biệt',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Một lượng lớn người theo dõi nhưng không tương tác sẽ không có giá trị. Một cộng đồng nhỏ nhưng gắn kết sẽ ủng hộ bạn, cung cấp phản hồi và có giá trị hơn trong mắt các thương hiệu.',
      },
      {
        question: 'Đâu là một hoạt động hiệu quả để tăng tương tác với cộng đồng tại Việt Nam?',
        options: [
          'Đăng bài và không trả lời bình luận',
          'Tổ chức các buổi gặp mặt offline nhỏ',
          'Chỉ đăng bài quảng cáo',
          'Mua người theo dõi ảo',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Các hoạt động offline giúp củng cố mối quan hệ trong cộng đồng, biến những tương tác ảo thành kết nối thật, điều này rất được coi trọng trong văn hóa Việt Nam.',
      },
    ],
  },

  {
    id: 'brand-partnership-monetization',
    title: 'Brand Partnership Và Advanced Monetization',
    description:
      'Master brand partnership negotiations, relationship management, và advanced monetization strategies để maximize micro-influencer income.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=NwZy0evRnZs',
    imageUrl: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&h=600&fit=crop',
    objectives: [
      'Master brand partnership negotiation tactics',
      'Develop pricing strategies cho different collaboration types',
      'Build long-term brand relationships',
      'Create compelling partnership proposals',
      'Understand legal aspects của influencer contracts',
      'Diversify income streams beyond brand deals',
    ],
    prerequisites: ['Established audience base', 'Content creation experience', 'Basic business understanding'],
    exercises: [
      {
        title: 'Brand Partnership Strategy Development',
        description: 'Create comprehensive strategy cho securing và managing brand partnerships',
        difficulty: 'Nâng cao',
        materials: ['Media Kit Templates', 'Contract Templates', 'Pricing Calculators'],
        procedure: [
          'Develop professional media kit với audience insights',
          'Research và identify ideal brand partners',
          'Create tiered pricing structure cho different services',
          'Draft partnership outreach templates',
          'Negotiate sample contract terms',
          'Plan partnership campaign execution',
          'Setup performance tracking systems',
          'Build long-term relationship management process',
        ],
        expectedResults: 'Professional partnership strategy với proven outreach và negotiation framework',
        solution: 'Complete brand partnership system enabling consistent, profitable collaborations',
      },
    ],
    realWorldApplications: [
      'Fashion micro-influencers partnering với Vietnamese clothing brands',
      'Food creators collaborating với restaurant chains',
      'Tech influencers reviewing Vietnamese startup products',
      'Travel influencers promoting Vietnamese tourism destinations',
      'Beauty creators featuring Vietnamese skincare brands',
    ],
    caseStudies: [
      {
        title: 'Thao Nguyen - Vietnamese Lifestyle Brand Partnerships',
        organization: 'Independent Lifestyle Creator',
        problem: 'Scaling brand partnerships để create sustainable full-time income',
        solution: 'Developed systematic approach để brand relationship management',
        impact: 'Achieved $50K annual income từ brand partnerships với 40% repeat clients',
        innovations: ['Partnership Tier System', 'Long-term Brand Relationships', 'Performance-based Pricing'],
      },
    ],
    resources: [
      {
        title: 'Influencer Contract Templates',
        url: 'https://www.lawdepot.com/contracts/influencer-agreement/',
        type: 'Legal Templates',
      },
      {
        title: 'Brand Partnership Pricing Guide',
        url: 'https://blog.influencermarketinghub.com/influencer-rates/',
        type: 'Pricing Guide',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam: Hợp tác thương hiệu và kiếm tiền',
      content: [
        'Affiliate marketing (tiếp thị liên kết) cho các sàn thương mại điện tử như Shopee, Lazada, Tiki là một nguồn thu nhập phổ biến cho các micro-influencer tại Việt Nam.',
        'Các thương hiệu Việt Nam thường đánh giá cao các mối quan hệ hợp tác lâu dài. Việc trở thành "gương mặt đại diện" không chính thức cho một nhãn hàng có thể mang lại nguồn thu nhập ổn định.',
        'Ngoài tiền mặt, các hình thức hợp tác khác như nhận sản phẩm miễn phí (barter), voucher, hoặc phần trăm hoa hồng cũng rất phổ biến, đặc biệt với các influencer mới.',
      ],
    },
    careerConnect: {
      name: 'Anh Bùi Công Sơn',
      title: 'Tech Reviewer & Affiliate Marketer',
      company: 'Sơn Sành Sỏi',
      imageUrl: 'https://i.pravatar.cc/150?u=bui-cong-son',
      quote:
        'Review sản phẩm chỉ là bước đầu. Nguồn thu nhập lớn nhất của tôi đến từ affiliate. Khi một người xem tin tưởng và mua hàng qua link của tôi, tôi nhận được hoa hồng. Điều quan trọng là phải chọn sản phẩm mình thực sự tin dùng, nếu không bạn sẽ mất lòng tin của khán giả.',
    },
    quizzes: [
      {
        question: 'Media Kit là gì?',
        options: [
          'Bộ dụng cụ sửa máy ảnh',
          'Một tài liệu giới thiệu về kênh của bạn, các chỉ số và báo giá cho các thương hiệu',
          'Hộp quà thương hiệu gửi tặng',
          'Tên một phần mềm chỉnh sửa video',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Media Kit (hay Influencer Kit) là một bản CV của influencer, dùng để gửi cho các thương hiệu tiềm năng, trong đó trình bày các thông tin về kênh, số liệu thống kê về khán giả và các gói hợp tác.',
      },
      {
        question: 'Hình thức kiếm tiền nào phổ biến với các micro-influencer trên các sàn thương mại điện tử Việt Nam?',
        options: ['Bán cổ phiếu', 'Tiếp thị liên kết (Affiliate Marketing)', 'Làm khảo sát', 'Xem quảng cáo'],
        correctAnswerIndex: 1,
        explanation:
          'Tiếp thị liên kết là mô hình mà influencer sẽ nhận được hoa hồng khi người dùng mua sản phẩm qua một đường link đặc biệt. Đây là hình thức rất phổ biến và hiệu quả.',
      },
    ],
  },

  {
    id: 'platform-optimization-algorithms',
    title: 'Platform Optimization Và Algorithm Mastery',
    description:
      'Master platform-specific algorithms và optimization techniques để maximize reach, engagement, và growth across major social media platforms.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=oqyRjXsazIA',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    objectives: [
      'Understand algorithms của major social platforms',
      'Optimize content cho maximum algorithmic reach',
      'Master platform-specific engagement tactics',
      'Implement cross-platform optimization strategies',
      'Use analytics để inform algorithmic strategies',
      'Stay current với algorithm changes',
    ],
    prerequisites: [
      'Social media marketing experience',
      'Content creation proficiency',
      'Analytics interpretation skills',
    ],
    exercises: [
      {
        title: 'Multi-Platform Algorithm Optimization',
        description: 'Develop optimization strategies cho 3 major platforms simultaneously',
        difficulty: 'Nâng cao',
        materials: ['Platform Analytics Tools', 'Algorithm Research', 'Optimization Templates'],
        procedure: [
          'Research current algorithm factors cho Instagram, TikTok, YouTube',
          'Analyze personal content performance across platforms',
          'Identify optimization opportunities cho each platform',
          'Develop platform-specific content strategies',
          'Create testing framework cho algorithm experiments',
          'Implement optimization tactics và track results',
          'Adjust strategies based on performance data',
          'Build sustainable optimization workflow',
        ],
        expectedResults: 'Optimized multi-platform strategy với measurable reach và engagement improvements',
        solution: 'Comprehensive algorithm optimization system adapted cho Vietnamese market context',
      },
    ],
    realWorldApplications: [
      'Multi-platform creators maximizing algorithmic reach',
      'Brand partnerships requiring platform-specific optimization',
      'Content creators scaling across different algorithms',
      'Influencers adapting to platform algorithm changes',
      'Cross-platform audience building strategies',
    ],
    caseStudies: [
      {
        title: 'Khanh Le - Multi-Platform Algorithm Master',
        organization: 'Independent Content Creator',
        problem: 'Maintaining growth across multiple platforms với different algorithms',
        solution: 'Developed systematic approach để platform-specific optimization',
        impact: 'Achieved top 1% reach rates across Instagram, TikTok, và YouTube',
        innovations: [
          'Multi-Platform Optimization System',
          'Algorithm Adaptation Framework',
          'Cross-Platform Content Strategy',
        ],
      },
    ],
    resources: [
      {
        title: 'Social Media Algorithm Guide 2024',
        url: 'https://blog.hootsuite.com/social-media-algorithms/',
        type: 'Algorithm Guide',
      },
      {
        title: 'Platform Optimization Best Practices',
        url: 'https://creatoreconomy.so/p/platform-optimization',
        type: 'Best Practices',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam: "Chơi" với thuật toán',
      content: [
        'Thuật toán của các nền tảng như TikTok và Facebook liên tục thay đổi. Việc cập nhật và thử nghiệm liên tục là bắt buộc để duy trì sự hiện diện.',
        'Các yếu tố quan trọng mà thuật toán Việt Nam thường ưu tiên là thời gian xem (watch time), tỷ lệ xem lại (rewatch rate), và các tương tác sớm (bình luận, chia sẻ trong giờ đầu tiên).',
        'Sử dụng âm nhạc đang thịnh hành (trending sounds) trên TikTok và Reels là một trong những cách hiệu quả nhất để được thuật toán "để mắt" tới.',
      ],
    },
    careerConnect: {
      name: 'Bạn Phạm Hoàng Long',
      title: 'Social Media Analyst',
      company: 'Một Agency về Marketing',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-hoang-long',
      quote:
        'Công việc của tôi là "đoán" ý của thuật toán. Tôi phân tích hàng trăm video mỗi ngày để tìm ra công thức chung: độ dài bao nhiêu, dùng nhạc gì, caption viết thế nào... Không có công thức nào là tuyệt đối, nhưng dữ liệu cho chúng ta biết cách để tăng cơ hội viral.',
    },
    quizzes: [
      {
        question: 'Yếu tố nào sau đây thường được các thuật toán mạng xã hội ưu tiên nhất?',
        options: [
          'Số lượng hashtag',
          'Thời gian người dùng ở lại xem nội dung của bạn',
          'Chất lượng camera xịn nhất',
          'Video có độ dài trên 10 phút',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thời gian xem (watch time) là một trong những tín hiệu quan trọng nhất cho thuật toán, vì nó cho thấy nội dung của bạn đủ hấp dẫn để giữ chân người dùng trên nền tảng.',
      },
      {
        question: 'Làm thế nào để một micro-influencer có thể cập nhật về sự thay đổi của thuật toán?',
        options: [
          'Không cần quan tâm',
          'Chỉ cần đoán',
          'Theo dõi các blog chính thức của nền tảng, các chuyên gia phân tích và thử nghiệm liên tục',
          'Hỏi bạn bè',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Việc cập nhật thông tin từ các nguồn uy tín và tự mình thử nghiệm các định dạng nội dung mới là cách tốt nhất để thích ứng với sự thay đổi liên tục của thuật toán.',
      },
    ],
  },

  {
    id: 'business-scaling-systematization',
    title: 'Business Scaling Và Micro-Influencer Systematization',
    description:
      'Transform micro-influencer activities into scalable business system với automation, team building, và revenue diversification strategies.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: null,
    imageUrl: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&h=600&fit=crop',
    objectives: [
      'Develop scalable micro-influencer business systems',
      'Build team và delegate content operations',
      'Create multiple revenue streams',
      'Implement business automation tools',
      'Establish professional business operations',
      'Plan long-term business growth strategies',
    ],
    prerequisites: [
      'Established micro-influencer presence',
      'Brand partnership experience',
      'Basic business management skills',
    ],
    exercises: [
      {
        title: 'Micro-Influencer Business Plan Development',
        description: 'Create comprehensive business plan để scale micro-influencer operations',
        difficulty: 'Nâng cao',
        materials: ['Business Plan Templates', 'Financial Projection Tools', 'Automation Software'],
        procedure: [
          'Define long-term business vision và mission',
          'Map out current content creation và monetization workflows',
          'Identify bottlenecks và areas for automation',
          'Develop plan cho revenue stream diversification',
          'Create hiring plan cho team members (e.g., editor, assistant)',
          'Establish standard operating procedures (SOPs)',
          'Develop 3-year financial projections',
          'Create risk management plan',
        ],
        expectedResults: 'Scalable business plan với clear growth roadmap và operational systems',
        solution: 'Comprehensive framework cho transforming micro-influencer passion into sustainable business',
      },
    ],
    realWorldApplications: [
      'Micro-influencers building media companies',
      'Creators launching product lines',
      'Influencers developing educational courses',
      'Creators building subscription-based communities',
      'Influencers scaling into agencies',
    ],
    caseStudies: [
      {
        title: 'Giang Oi - From Blogger to Media Entrepreneur',
        organization: 'Giang Oi',
        problem: 'Scaling personal brand beyond individual capacity',
        solution: 'Built team để manage content production, brand partnerships, và product lines',
        impact: 'Successfully launched multiple product lines và built sustainable media business',
        innovations: ['Team Building', 'Revenue Diversification', 'Brand Extension'],
      },
    ],
    resources: [
      {
        title: 'Creator Business Scaling Guide',
        url: 'https://creatoreconomy.so/p/scaling-creator-business',
        type: 'Business Guide',
      },
      {
        title: 'Standard Operating Procedure (SOP) Templates',
        url: 'https://www.process.st/sop-templates/',
        type: 'Templates',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam: Từ "người ảnh hưởng" đến "doanh nhân"',
      content: [
        'Nhiều micro-influencer thành công tại Việt Nam đang chuyển mình thành các doanh nhân, xây dựng thương hiệu riêng thay vì chỉ đi quảng cáo cho người khác.',
        'Các sản phẩm thường được phát triển bao gồm: thời trang, mỹ phẩm, đồ ăn vặt, các khóa học online hoặc sổ tay, vật phẩm trang trí mang dấu ấn cá nhân.',
        'Việc xây dựng một ê-kíp nhỏ (ví dụ: một người quay phim, một người dựng video) đang trở nên phổ biến để chuyên nghiệp hóa sản xuất và giải phóng thời gian cho influencer tập trung vào sáng tạo và chiến lược.',
      ],
    },
    careerConnect: {
      name: 'Chị Helly Tống',
      title: 'Founder & Entrepreneur',
      company: 'The Yên Concept & Lại Đây Refill Station',
      imageUrl: 'https://i.pravatar.cc/150?u=helly-tong',
      quote:
        'Bắt đầu là một người mẫu ảnh, một influencer, nhưng tôi nhận ra mình muốn tạo ra giá trị bền vững hơn. Tôi đã xây dựng các thương hiệu của riêng mình dựa trên những giá trị mà tôi theo đuổi. Việc trở thành influencer cho chính sản phẩm của mình là một lợi thế cực kỳ lớn.',
    },
    quizzes: [
      {
        question: 'Tại sao một micro-influencer nên đa dạng hóa nguồn thu nhập?',
        options: [
          'Để làm việc nhiều hơn',
          'Để không bị phụ thuộc vào một nguồn duy nhất (ví dụ: quảng cáo) và xây dựng một doanh nghiệp bền vững',
          'Vì các nền tảng yêu cầu vậy',
          'Để đóng nhiều thuế hơn',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đa dạng hóa nguồn thu nhập giúp giảm rủi ro khi một nguồn thu nhập bị ảnh hưởng (ví dụ: thuật toán thay đổi, thương hiệu cắt hợp đồng) và tạo ra một doanh nghiệp ổn định, bền vững hơn.',
      },
      {
        question:
          'Hình thức nào sau đây không phải là một lợi ích của việc xây dựng thương hiệu cá nhân với tư cách là một micro-influencer?',
        options: [
          'Tăng độ tin cậy và uy tín',
          'Mở rộng cơ hội hợp tác với thương hiệu',
          'Giảm bớt công việc sáng tạo nội dung',
          'Tạo ra nguồn thu nhập ổn định hơn',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Xây dựng thương hiệu cá nhân thường đi kèm với việc tăng cường hoạt động sáng tạo nội dung và tương tác với cộng đồng, điều này có thể làm tăng khối lượng công việc ban đầu.',
      },
    ],
  },
];
