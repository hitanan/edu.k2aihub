import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface LiveCommerceLessonType extends BaseLessonData {
  streamingPlatforms?: string[];
  mainContent?: {
    platformSpecifics: Array<{
      platform: string;
      features: string[];
      bestPractices: string[];
    }>;
    kpis: Array<{
      metric: string;
      description: string;
      benchmark: string;
    }>;
  };
  vietnamContext?: {
    title: string;
    content: string[];
    stats?: Array<{
      stat: string;
      source: string;
    }>;
  };
  careerConnect?: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
  quizzes?: Array<{
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }>;
}

export const liveCommerceLessons: LiveCommerceLessonType[] = [
  {
    id: 'live-commerce-fundamentals',
    title: 'Nền tảng Live Commerce và Thị trường Việt Nam',
    description:
      'Nắm vững kiến thức cơ bản về live commerce, hệ sinh thái nền tảng và cơ hội thị trường trong thương mại điện tử Việt Nam.',
    duration: '170 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=IXSQPJAg8ps',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu hệ sinh thái live commerce và các cơ hội phát triển',
      'Phân tích xu hướng thị trường live streaming tại Việt Nam',
      'Tìm hiểu các tính năng đặc thù của từng nền tảng',
      'Thành thạo kỹ thuật thu hút và chuyển đổi người xem',
      'Hiểu các mô hình kinh doanh live commerce',
      'Nắm vững yêu cầu công nghệ cơ bản cho live streaming',
    ],
    prerequisites: [
      'Kiến thức cơ bản về thương mại điện tử',
      'Quen thuộc với marketing trên mạng xã hội',
      'Nhận thức về hành vi tiêu dùng Việt Nam',
    ],
    exercises: [
      {
        title: 'Phân tích thị trường Live Commerce Việt Nam',
        description: 'Nghiên cứu và phân tích cơ hội live commerce trong thị trường Việt Nam',
        difficulty: 'Cơ bản',
        materials: ['Công cụ nghiên cứu thị trường', 'Phân tích nền tảng', 'Mẫu phân tích đối thủ'],
        procedure: [
          'Nghiên cứu các nền tảng live commerce lớn tại Việt Nam',
          'Phân tích các kênh live commerce thành công',
          'Nghiên cứu hành vi tiêu dùng trong mua sắm trực tiếp',
          'Xác định các danh mục sản phẩm đang thịnh hành',
          'Phân tích khung giờ vàng và nhân khẩu học người xem',
          'Phân tích chiến lược giá và khuyến mãi',
          'Nghiên cứu yêu cầu hạ tầng kỹ thuật',
          'Lập báo cáo đánh giá cơ hội live commerce',
        ],
        expectedResults: 'Báo cáo phân tích thị trường toàn diện với chiến lược live commerce khả thi',
        solution: 'Khung chiến lược cho việc tham gia thị trường live commerce Việt Nam',
      },
    ],
    realWorldApplications: [
      'Thương hiệu thời trang tổ chức show trực tiếp',
      'Doanh nghiệp thực phẩm trình diễn nấu ăn',
      'Thương hiệu mỹ phẩm tư vấn trực tuyến',
      'Nhà bán lẻ điện tử giới thiệu sản phẩm',
      'Nghệ nhân thủ công trình diễn kỹ thuật',
    ],
    caseStudies: [
      {
        title: 'Thành công Live Commerce của Tiki',
        organization: 'Tiki Việt Nam',
        problem: 'Cạnh tranh tăng cao trong thương mại điện tử, cần phương thức thu hút mới',
        solution: 'Tích hợp live streaming với trình diễn sản phẩm và mua hàng thời gian thực',
        impact: 'Tỷ lệ chuyển đổi tăng gấp 4 lần trong các phiên live',
        innovations: ['Tích hợp sản phẩm thời gian thực', 'Trải nghiệm mua sắm tương tác', 'Hợp tác với influencer'],
      },
    ],
    resources: [
      {
        title: 'Báo cáo xu hướng Live Commerce toàn cầu',
        url: 'https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/its-showtime-how-live-commerce-is-transforming-the-shopping-experience',
        type: 'Báo cáo nghiên cứu',
      },
      {
        title: 'Thống kê thương mại điện tử Việt Nam',
        url: 'https://e-conomy.sea.org/',
        type: 'Dữ liệu thị trường',
      },
    ],
    vietnamContext: {
      title: 'Sự bùng nổ của Live Commerce tại Việt Nam',
      content: [
        'Việt Nam là một trong những thị trường tăng trưởng live commerce nhanh nhất Đông Nam Á, với các nền tảng như TikTok Shop, Shopee Live và Facebook Live chiếm ưu thế.',
        'Các "chiến thần livestream" như Võ Hà Linh, Phạm Thoại có thể tạo ra doanh thu hàng tỷ đồng chỉ trong vài giờ, cho thấy sức ảnh hưởng khổng lồ của hình thức này.',
        'Các ngành hàng phổ biến nhất trên live commerce Việt Nam bao gồm thời trang, mỹ phẩm, đồ gia dụng và thực phẩm.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Ngọc Huyền',
      title: 'Trưởng nhóm Vận hành Live Commerce',
      company: 'Một sàn TMĐT lớn tại Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-ngoc-huyen',
      quote:
        'Công việc của tôi là biến mỗi phiên live thành một show giải trí có thể chốt đơn. Chúng tôi phân tích dữ liệu từng giây để biết khán giả thích gì, và điều chỉnh kịch bản ngay lập tức. Đây là một lĩnh vực cực kỳ năng động và đầy thách thức.',
    },
    quizzes: [
      {
        question: 'Nền tảng nào hiện đang dẫn đầu xu hướng live commerce tại Việt Nam?',
        options: ['YouTube Live', 'TikTok Shop', 'Zalo Live', 'Instagram Live'],
        correctAnswerIndex: 1,
        explanation:
          'TikTok Shop đã nhanh chóng trở thành nền tảng live commerce thống trị tại Việt Nam nhờ sự kết hợp giữa giải trí và mua sắm.',
      },
      {
        question: 'Yếu tố nào KHÔNG phải là lợi thế chính của live commerce so với TMĐT truyền thống?',
        options: [
          'Tương tác trực tiếp với người bán',
          'Xem sản phẩm được trình diễn thực tế',
          'Giá sản phẩm luôn rẻ hơn',
          'Tạo cảm giác cấp bách và ưu đãi độc quyền',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Mặc dù live commerce thường có khuyến mãi, nhưng không phải lúc nào giá cũng rẻ hơn. Sức hấp dẫn chính đến từ sự tương tác, tin cậy và trải nghiệm mua sắm giải trí.',
      },
    ],
  },

  {
    id: 'streaming-technology-setup',
    title: 'Thiết lập Công nghệ Streaming & Chất lượng Sản xuất',
    description:
      'Nắm vững các khía cạnh kỹ thuật của live streaming, lựa chọn thiết bị, quy trình sản xuất và tối ưu hóa chất lượng cho live commerce chuyên nghiệp.',
    duration: '195 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=rGqScj5IqwU',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
    objectives: [
      'Thành thạo thiết lập kỹ thuật live streaming',
      'Lựa chọn thiết bị tối ưu cho các mức ngân sách',
      'Triển khai hệ thống chiếu sáng và âm thanh chuyên nghiệp',
      'Cấu hình phần mềm streaming và nền tảng',
      'Tối ưu hóa chất lượng và độ ổn định của luồng',
      'Xây dựng quy trình sản xuất hiệu quả',
    ],
    prerequisites: ['Năng lực kỹ thuật cơ bản', 'Hiểu các khái niệm video/audio', 'Khả năng lập kế hoạch ngân sách'],
    exercises: [
      {
        title: 'Thiết lập Studio Live Commerce chuyên nghiệp',
        description: 'Thiết kế và triển khai studio live streaming hoàn chỉnh',
        difficulty: 'Trung bình',
        materials: ['Lập kế hoạch ngân sách thiết bị', 'Hướng dẫn thông số kỹ thuật', 'Hướng dẫn thiết lập'],
        procedure: [
          'Đánh giá không gian và giới hạn ngân sách',
          'Nghiên cứu các lựa chọn thiết bị theo mức giá',
          'Thiết kế hệ thống chiếu sáng tối ưu cho trình diễn sản phẩm',
          'Chọn camera với tính năng phù hợp',
          'Cấu hình ghi âm chuyên nghiệp',
          'Thiết lập phần mềm streaming với cấu hình tối ưu',
          'Kiểm tra chất lượng luồng trên nhiều nền tảng',
          'Lập kế hoạch bảo trì và nâng cấp thiết bị',
        ],
        expectedResults: 'Thiết lập streaming chuyên nghiệp với chất lượng ổn định cao',
        solution: 'Hạ tầng kỹ thuật hoàn chỉnh cho live commerce chuyên nghiệp',
      },
    ],
    realWorldApplications: [
      'Studio live commerce chuyên nghiệp',
      'Thiết lập streaming di động',
      'Hệ thống phát sóng đa nền tảng',
      'Trình diễn sản phẩm cao cấp',
      'Giải pháp streaming tiết kiệm chi phí cho startup',
    ],
    caseStudies: [
      {
        title: 'Tối ưu hóa Studio Shopee Live',
        organization: 'Nhà bán lẻ thời trang Việt Nam',
        problem: 'Chất lượng luồng kém ảnh hưởng đến tương tác và doanh số',
        solution: 'Nâng cấp kỹ thuật toàn diện với thiết bị chuyên nghiệp',
        impact: 'Tăng giữ chân người xem 60% và tỷ lệ chuyển đổi 45%',
        innovations: ['Thiết lập đa camera', 'Thiết kế chiếu sáng chuyên nghiệp', 'Hệ thống âm thanh chất lượng cao'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn thiết bị Live Streaming',
        url: 'https://restream.io/blog/live-streaming-equipment/',
        type: 'Hướng dẫn kỹ thuật',
      },
      {
        title: 'Hướng dẫn thiết lập OBS Studio',
        url: 'https://obsproject.com/help',
        type: 'Hướng dẫn phần mềm',
      },
    ],
    vietnamContext: {
      title: 'Đầu tư vào chất lượng sản xuất tại Việt Nam',
      content: [
        'Nhiều nhà bán hàng tại Việt Nam ban đầu sử dụng điện thoại di động để livestream, nhưng đang có xu hướng chuyên nghiệp hóa với studio và thiết bị tốt hơn.',
        'Các dịch vụ cho thuê studio livestream mini với đầy đủ ánh sáng, máy quay, phông nền đang phát triển mạnh ở các thành phố lớn như TP.HCM và Hà Nội.',
        'Phần mềm OBS Studio được cộng đồng streamer Việt Nam sử dụng rộng rãi vì tính linh hoạt và miễn phí, cho phép tạo ra các buổi live chuyên nghiệp với chi phí thấp.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Văn Hùng',
      title: 'Kỹ thuật viên Livestream tự do',
      company: 'Freelancer',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-van-hung',
      quote:
        'Mình chuyên set up hệ thống live cho các shop online. Nhiều người nghĩ chỉ cần điện thoại là đủ, nhưng khi họ thấy chất lượng hình ảnh và âm thanh chuyên nghiệp có thể tăng doanh thu đến mức nào, họ sẵn sàng đầu tư ngay. Công việc của mình là đảm bảo kỹ thuật không bao giờ là rào cản cho việc bán hàng.',
    },
    quizzes: [
      {
        question: 'Phần mềm nào sau đây là phổ biến nhất để streaming chuyên nghiệp trên máy tính?',
        options: ['Facebook App', 'TikTok App', 'OBS Studio', 'Zalo'],
        correctAnswerIndex: 2,
        explanation:
          'OBS (Open Broadcaster Software) Studio là một phần mềm mã nguồn mở, miễn phí và rất mạnh mẽ để tạo ra các luồng phát sóng trực tiếp chuyên nghiệp trên máy tính.',
      },
      {
        question: 'Yếu tố kỹ thuật nào thường bị bỏ qua nhưng lại ảnh hưởng lớn đến sự chuyên nghiệp của livestream?',
        options: ['Chất lượng camera', 'Ánh sáng', 'Âm thanh', 'Tốc độ internet'],
        correctAnswerIndex: 2,
        explanation:
          'Khán giả có thể tha thứ cho hình ảnh không quá sắc nét, nhưng âm thanh rè, khó nghe sẽ khiến họ rời đi ngay lập tức. Đầu tư vào một micro tốt là cực kỳ quan trọng.',
      },
    ],
  },

  {
    id: 'audience-engagement-community',
    title: 'Tương tác Khán giả và Xây dựng Cộng đồng',
    description:
      'Học các chiến lược tương tác khán giả nâng cao, kỹ thuật xây dựng cộng đồng và phương pháp giữ chân để phát triển lượng người theo dõi trung thành cho live commerce.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=LL7_m_5VETs',
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
    objectives: [
      'Thành thạo kỹ thuật tương tác khán giả thời gian thực',
      'Xây dựng cộng đồng trung thành xoay quanh thương hiệu live commerce',
      'Tạo ra các trải nghiệm tương tác giúp giữ chân khách hàng',
      'Thực hiện hiệu quả các chiến lược gamification',
      'Phát triển mối quan hệ cá nhân hóa với khán giả',
      'Quản lý các tương tác trực tiếp quy mô lớn',
    ],
    prerequisites: [
      'Kiến thức cơ bản về quản lý cộng đồng',
      'Kinh nghiệm tương tác trên mạng xã hội',
      'Kỹ năng dịch vụ khách hàng',
    ],
    exercises: [
      {
        title: 'Chiến lược Cộng đồng Live Commerce',
        description: 'Phát triển chiến lược xây dựng cộng đồng toàn diện cho khán giả live commerce',
        difficulty: 'Trung bình',
        materials: ['Mẫu lập kế hoạch cộng đồng', 'Công cụ theo dõi tương tác', 'Khung sườn Gamification'],
        procedure: [
          'Xác định nhân khẩu học và sở thích của cộng đồng mục tiêu',
          'Phát triển các giá trị và quy tắc tương tác của cộng đồng',
          'Tạo ra các hoạt động tương tác hấp dẫn',
          'Thiết kế chương trình khách hàng thân thiết với các quyền lợi theo cấp độ',
          'Thực hiện các yếu tố gamification',
          'Lên kế hoạch các sự kiện và thử thách cộng đồng thường xuyên',
          'Thiết lập hệ thống kiểm duyệt và quản lý cộng đồng',
          'Theo dõi các chỉ số tương tác và tối ưu hóa chiến lược',
        ],
        expectedResults: 'Một cộng đồng gắn kết với tỷ lệ giữ chân và lòng trung thành mua sắm cao',
        solution: 'Hệ sinh thái cộng đồng toàn diện thúc đẩy giá trị kinh doanh lâu dài',
      },
    ],
    realWorldApplications: [
      'Cộng đồng thương hiệu thời trang với các thử thách phối đồ',
      'Cộng đồng sản phẩm công nghệ với các vòng lặp phản hồi từ người dùng',
      'Cộng đồng làm đẹp với việc chia sẻ các hướng dẫn',
      'Cộng đồng ẩm thực với việc trao đổi công thức',
      'Cộng đồng thể hình với việc theo dõi thử thách',
    ],
    caseStudies: [
      {
        title: 'Thành công Cộng đồng Sendo Live',
        organization: 'Sàn TMĐT Sendo',
        problem: 'Tỷ lệ người xem rời đi cao và tỷ lệ mua lại thấp',
        solution: 'Xây dựng cộng đồng gắn kết với các quyền lợi độc quyền và trải nghiệm tương tác',
        impact: 'Tăng tỷ lệ mua lại 150% và tỷ lệ giữ chân cộng đồng 80%',
        innovations: [
          'Phiên live chỉ dành cho thành viên',
          'Đánh giá sản phẩm từ cộng đồng',
          'Chương trình giới thiệu bạn bè',
        ],
      },
    ],
    resources: [
      {
        title: 'Chiến lược Xây dựng Cộng đồng',
        url: 'https://blog.hootsuite.com/how-to-build-a-community/',
        type: 'Hướng dẫn chiến lược',
      },
      {
        title: 'Thực hành tốt nhất về Phân tích Tương tác',
        url: 'https://sproutsocial.com/insights/social-media-engagement/',
        type: 'Hướng dẫn phân tích',
      },
    ],
    vietnamContext: {
      title: 'Xây dựng "Fan cứng" trong văn hóa Live Commerce Việt',
      content: [
        'Khái niệm "fan cứng" (hard fan) rất quan trọng trong văn hóa mạng xã hội Việt Nam. Các streamer thành công luôn có một nhóm "fan cứng" trung thành, sẵn sàng bảo vệ và quảng bá cho họ.',
        'Việc tạo group Zalo hoặc Facebook riêng cho những người mua hàng thường xuyên là một chiến thuật phổ biến để xây dựng cộng đồng và thông báo các deal độc quyền.',
        'Tặng quà, đặc biệt là các sản phẩm "cây nhà lá vườn" hoặc quà lưu niệm độc quyền, là một cách hiệu quả để tạo thiện cảm và sự gắn kết với khán giả Việt.',
      ],
    },
    careerConnect: {
      name: 'Bạn Lê Minh Anh',
      title: 'Quản lý Cộng đồng',
      company: 'Một thương hiệu mỹ phẩm nội địa',
      imageUrl: 'https://i.pravatar.cc/150?u=le-minh-anh',
      quote:
        'Công việc của mình không chỉ là trả lời bình luận. Mình tạo ra các mini-game, các cuộc thi, và lắng nghe tâm tư của khách hàng. Khi khách hàng cảm thấy họ là một phần của thương hiệu, họ không chỉ mua hàng mà còn trở thành những người quảng bá nhiệt tình nhất.',
    },
    quizzes: [
      {
        question: 'Đâu là một chiến thuật xây dựng cộng đồng hiệu quả và phổ biến tại Việt Nam?',
        options: [
          'Gửi email hàng tuần',
          'Tạo group Zalo/Facebook cho khách hàng thân thiết',
          'Chạy quảng cáo trên TV',
          'Tổ chức sự kiện offline đắt tiền',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tạo các nhóm chat riêng tư trên Zalo hoặc Facebook là một cách rất hiệu quả để tạo cảm giác độc quyền, dễ dàng thông báo khuyến mãi và xây dựng mối quan hệ gần gũi với khách hàng tại Việt Nam.',
      },
      {
        question: 'Gamification trong live commerce có nghĩa là gì?',
        options: [
          'Chỉ chơi game trong lúc livestream',
          'Biến việc mua sắm thành một trò chơi có thưởng',
          'Bán các sản phẩm game',
          'Tất cả các đáp án trên',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Gamification là việc áp dụng các yếu tố của trò chơi (như điểm thưởng, thử thách, bảng xếp hạng) vào hoạt động mua sắm để tăng sự tương tác và hứng thú của khách hàng.',
      },
    ],
  },
  {
    id: 'multi-platform-strategy',
    title: 'Chiến lược Live Commerce Đa nền tảng',
    description:
      'Làm chủ chiến lược live commerce đa nền tảng, tối ưu hóa nền tảng, điều chỉnh nội dung và quản lý khán giả trên nhiều nền tảng streaming.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=HjUJf5bKCpU',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    objectives: [
      'Phát triển chiến lược đa nền tảng tích hợp',
      'Tối ưu hóa nội dung cho các thuật toán nền tảng khác nhau',
      'Quản lý streaming đồng thời trên nhiều nền tảng',
      'Hiểu hành vi khán giả đặc thù của từng nền tảng',
      'Điều phối các chiến dịch marketing đa nền tảng',
      'Tối đa hóa phạm vi tiếp cận mà vẫn duy trì chất lượng',
    ],
    prerequisites: [
      'Kinh nghiệm live commerce trên một nền tảng',
      'Hiểu biết về các hệ sinh thái nền tảng khác nhau',
      'Kỹ năng tạo nội dung và marketing',
    ],
    exercises: [
      {
        title: 'Chiến dịch Đa nền tảng Tích hợp',
        description: 'Thiết kế và thực hiện chiến dịch live commerce phối hợp trên nhiều nền tảng',
        difficulty: 'Nâng cao',
        materials: ['Công cụ phân tích nền tảng', 'Phần mềm multi-stream', 'Mẫu lập kế hoạch chiến dịch'],
        procedure: [
          'Phân tích nhân khẩu học khán giả trên các nền tảng khác nhau',
          'Phát triển chiến lược điều chỉnh nội dung cho từng nền tảng',
          'Thiết lập hạ tầng kỹ thuật streaming đa nền tảng',
          'Tạo lịch trình và thông điệp chiến dịch phối hợp',
          'Thực hiện các chiến thuật di chuyển khán giả giữa các nền tảng',
          'Theo dõi các chỉ số hiệu suất trên tất cả các nền tảng',
          'Tối ưu hóa chiến dịch dựa trên dữ liệu đặc thù của từng nền tảng',
          'Phát triển bản đồ hành trình khách hàng tích hợp',
        ],
        expectedResults: 'Sự hiện diện đa nền tảng phối hợp với phạm vi tiếp cận và chuyển đổi được tối đa hóa',
        solution: 'Chiến lược đa nền tảng toàn diện tối đa hóa cơ hội live commerce',
      },
    ],
    realWorldApplications: [
      'Các thương hiệu toàn cầu tiếp cận các đối tượng khán giả đa dạng',
      'Các doanh nghiệp địa phương mở rộng phạm vi tiếp cận',
      'Các influencer tối đa hóa việc kiếm tiền từ nền tảng',
      'Các thương hiệu TMĐT đa dạng hóa kênh bán hàng',
      'Các nhà sáng tạo nội dung xây dựng sự bền vững trên các nền tảng',
    ],
    caseStudies: [
      {
        title: 'Thành công Đa nền tảng của Thương hiệu Thời trang Việt Nam',
        organization: 'Nhà bán lẻ thời trang tại TP.HCM',
        problem: 'Bị giới hạn bởi phạm vi tiếp cận khán giả trên một nền tảng',
        solution: 'Thực hiện chiến lược live commerce đa nền tảng phối hợp',
        impact: 'Tăng tổng lượng khán giả 400% và doanh thu 250%',
        innovations: [
          'Điều chỉnh nội dung đặc thù cho từng nền tảng',
          'Hành trình khách hàng đa nền tảng',
          'Hệ thống phân tích tích hợp',
        ],
      },
    ],
    resources: [
      {
        title: 'Chiến lược Nội dung Đa nền tảng',
        url: 'https://blog.hootsuite.com/multi-platform-social-media-strategy/',
        type: 'Hướng dẫn chiến lược',
      },
      {
        title: 'So sánh các Nền tảng Live Streaming',
        url: 'https://restream.io/blog/live-streaming-platforms/',
        type: 'Hướng dẫn nền tảng',
      },
    ],
    vietnamContext: {
      title: 'Tư duy "Đa kênh" của người bán hàng Việt',
      content: [
        'Người bán hàng online ở Việt Nam rất nhanh nhạy trong việc có mặt trên nhiều nền tảng. Họ có thể livestream trên TikTok, đồng thời đăng bài trên Facebook và cập nhật story trên Instagram để kéo traffic.',
        'Việc sử dụng các công cụ restream (phát lại luồng) để phát đồng thời trên Facebook và YouTube là một kỹ thuật phổ biến để tối đa hóa lượt tiếp cận.',
        'Mỗi nền tảng phục vụ một mục đích khác nhau: TikTok để tạo trend và tiếp cận giới trẻ, Facebook để xây dựng cộng đồng và bán hàng cho tệp khách hàng lớn tuổi hơn, Shopee/Lazada để chốt đơn với các voucher hấp dẫn.',
      ],
    },
    careerConnect: {
      name: 'Chị Phạm Thị Thảo',
      title: 'Chủ shop thời trang online',
      company: 'Thảo-Boutique',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-thi-thao',
      quote:
        'Mình không thể bỏ trứng vào một giỏ. Hôm nay TikTok hot, ngày mai có thể là một nền tảng khác. Mình phải có mặt ở khắp nơi khách hàng của mình có mặt. Việc này rất vất vả, nhưng nó đảm bảo mình không bao giờ bị phụ thuộc vào một kênh duy nhất.',
    },
    quizzes: [
      {
        question: 'Tại sao người bán hàng Việt Nam thường sử dụng chiến lược đa nền tảng?',
        options: [
          'Để làm cho công việc phức tạp hơn',
          'Để tối đa hóa lượt tiếp cận và giảm sự phụ thuộc vào một kênh',
          'Vì mỗi nền tảng yêu cầu một tài khoản riêng',
          'Để thử nghiệm xem nền tảng nào tốt nhất rồi bỏ các nền tảng khác',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Chiến lược đa nền tảng giúp người bán tiếp cận được nhiều nhóm khách hàng khác nhau và giảm rủi ro khi một nền tảng thay đổi thuật toán hoặc chính sách.',
      },
      {
        question: 'Restreaming là gì?',
        options: [
          'Xem lại một livestream cũ',
          'Phát một luồng video trực tiếp lên nhiều nền tảng cùng một lúc',
          'Bình luận trên một livestream',
          'Tải một video livestream về máy',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Restreaming là kỹ thuật cho phép phát một tín hiệu video trực tiếp đến nhiều đích khác nhau (ví dụ: Facebook, YouTube, Twitch) một cách đồng thời.',
      },
    ],
  },
  {
    id: 'analytics-performance-optimization',
    title: 'Phân tích và Tối ưu hóa Hiệu suất',
    description:
      'Làm chủ phân tích live commerce, theo dõi hiệu suất, tối ưu hóa dựa trên dữ liệu và đo lường ROI để liên tục cải thiện hiệu quả live streaming.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=3SuNx0UrnEo',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    objectives: [
      'Thành thạo việc diễn giải các phân tích live commerce',
      'Thực hiện các chiến lược tối ưu hóa dựa trên dữ liệu',
      'Theo dõi ROI và các chỉ số hiệu suất kinh doanh',
      'Sử dụng A/B testing để tối ưu hóa nội dung',
      'Hiểu các ứng dụng của phân tích dự báo',
      'Tạo báo cáo hiệu suất toàn diện',
    ],
    prerequisites: ['Hiểu biết cơ bản về phân tích', 'Kinh nghiệm vận hành live commerce', 'Kỹ năng diễn giải dữ liệu'],
    exercises: [
      {
        title: 'Hệ thống Phân tích Live Commerce Toàn diện',
        description: 'Xây dựng hệ thống phân tích và tối ưu hóa hoàn chỉnh cho các hoạt động live commerce',
        difficulty: 'Nâng cao',
        materials: ['Nền tảng phân tích', 'Công cụ theo dõi', 'Mẫu báo cáo'],
        procedure: [
          'Thiết lập theo dõi phân tích toàn diện trên các nền tảng',
          'Xác định các chỉ số hiệu suất chính (KPIs)',
          'Thực hiện theo dõi phễu chuyển đổi',
          'Tạo các bảng điều khiển báo cáo tự động',
          'Thiết kế khung A/B testing',
          'Phân tích các mẫu hành vi của khán giả',
          'Phát triển hệ thống đề xuất tối ưu hóa',
          'Tạo các mô hình dự báo hiệu suất',
        ],
        expectedResults: 'Hệ thống tối ưu hóa dựa trên dữ liệu với các cải tiến hiệu suất có thể đo lường được',
        solution: 'Hạ tầng phân tích toàn diện cho phép cải tiến liên tục',
      },
    ],
    realWorldApplications: [
      'Tối ưu hóa live commerce cho doanh nghiệp lớn',
      'Theo dõi hiệu suất cho doanh nghiệp nhỏ',
      'Đo lường chiến dịch cho influencer',
      'Tối ưu hóa chuyển đổi cho TMĐT',
      'Đánh giá ROI marketing',
    ],
    caseStudies: [
      {
        title: 'Triển khai Phân tích Lazada Live',
        organization: 'Nhà bán lẻ điện tử Việt Nam',
        problem: 'Tầm nhìn hạn chế về hiệu suất live streaming và cơ hội tối ưu hóa',
        solution: 'Thực hiện hệ thống phân tích toàn diện với tối ưu hóa tự động',
        impact: 'Cải thiện tỷ lệ chuyển đổi 85% và giảm chi phí thu hút khách hàng 40%',
        innovations: ['Tích hợp Phân tích Dự báo', 'Tối ưu hóa Thời gian thực', 'Hệ thống Báo cáo Tự động'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Phân tích TMĐT',
        url: 'https://www.google.com/analytics/insights/',
        type: 'Hướng dẫn phân tích',
      },
      {
        title: 'Các chỉ số Hiệu suất Live Streaming',
        url: 'https://blog.streamlabs.com/live-streaming-analytics/',
        type: 'Hướng dẫn chỉ số',
      },
    ],
    vietnamContext: {
      title: 'Đo lường hiệu quả "chốt đơn" thực tế',
      content: [
        'Các nhà bán hàng Việt Nam rất thực tế, họ quan tâm đến các chỉ số cuối cùng: "mắt xem" (lượt xem đồng thời), số lượng bình luận hỏi giá, và quan trọng nhất là số "đơn" chốt được sau mỗi phiên live.',
        'Nhiều công cụ và dịch vụ "quét bình luận" tự động đã ra đời để giúp các shop tổng hợp đơn hàng từ hàng nghìn bình luận một cách nhanh chóng.',
        'Việc phân tích "khung giờ vàng" - thời điểm có nhiều người xem nhất - là một yếu tố quan trọng để quyết định lịch livestream, thường là buổi trưa hoặc buổi tối.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Hoàng Long',
      title: 'Chuyên gia Phân tích Dữ liệu TMĐT',
      company: 'Một công ty phân tích dữ liệu',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoang-long',
      quote:
        'Dữ liệu từ các phiên live là một mỏ vàng. Tôi giúp các thương hiệu hiểu được sản phẩm nào thu hút nhất, câu nói nào của streamer tạo ra nhiều tương tác nhất, và thời điểm nào khách hàng sẵn sàng "chốt đơn" nhất. Từ đó, họ có thể tối ưu hóa để mỗi phút livestream đều mang lại giá trị cao nhất.',
    },
    quizzes: [
      {
        question: 'Chỉ số "mắt xem" trong livestream thể hiện điều gì?',
        options: [
          'Tổng số người đã xem livestream',
          'Số người đang xem tại một thời điểm cụ thể',
          'Số người đã bình luận',
          'Số người đã mua hàng',
        ],
        correctAnswerIndex: 1,
        explanation:
          '"Mắt xem" là thuật ngữ phổ biến chỉ số lượng người xem đồng thời (concurrent viewers), một chỉ số quan trọng thể hiện sức hút của livestream tại một thời điểm.',
      },
      {
        question: 'Tại sao các công cụ "quét bình luận" lại quan trọng với các shop livestream tại Việt Nam?',
        options: [
          'Để xóa các bình luận tiêu cực',
          'Để tự động trả lời tất cả bình luận',
          'Để tổng hợp thông tin đặt hàng (tên, SĐT, sản phẩm) từ hàng nghìn bình luận một cách nhanh chóng',
          'Để đếm số lượng bình luận',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Do hành vi mua hàng qua bình luận ("chốt đơn" bằng cách để lại thông tin), các công cụ quét và tổng hợp bình luận giúp các shop xử lý đơn hàng một cách hiệu quả khi có lượng tương tác lớn.',
      },
    ],
  },
];

// Export for use in other modules
export const liveCommerceStreamingLessons = liveCommerceLessons;
