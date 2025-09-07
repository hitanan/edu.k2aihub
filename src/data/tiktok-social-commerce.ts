import { BaseLessonData } from '@/types/lesson-base';
export interface TikTokSocialCommerceLessonType extends BaseLessonData {
  // This can be expanded with specific properties for this module
  // Adding a dummy property to satisfy the linter
  module: 'TikTok';
}

export const tiktokSocialCommerceLessons: TikTokSocialCommerceLessonType[] = [
  {
    id: 'tiktok-shop-setup-mastery',
    title: 'TikTok Shop Setup & Optimization Mastery',
    description:
      'Học cách setup và optimize TikTok Shop để tối đa hóa doanh số. Từ product listing đến livestream selling strategies.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    module: 'TikTok',
    videoUrl: 'https://www.youtube.com/watch?v=lXCXujEs_is',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    objectives: [
      'Setup TikTok Shop account và verify business',
      'Optimize product listings cho maximum visibility',
      'Master TikTok Shop algorithm và ranking factors',
      'Develop effective livestream selling strategies',
      'Implement customer service best practices',
    ],
    prerequisites: [
      'Business license và tax registration',
      'Products ready for online selling',
      'Basic understanding của e-commerce',
      'TikTok Creator Fund eligibility',
    ],
    realWorldApplications: [
      'Các thương hiệu thời trang địa phương ra mắt bộ sưu tập mới qua TikTok.',
      'Doanh nghiệp F&B sử dụng video ngắn để quảng bá món ăn và thu hút khách hàng.',
      'Các nghệ nhân bán sản phẩm thủ công mỹ nghệ trực tiếp cho người tiêu dùng.',
      'Chuyên gia trong các lĩnh vực (tài chính, giáo dục) xây dựng thương hiệu cá nhân và bán các khóa học.',
    ],
    exercises: [
      {
        title: 'Complete TikTok Shop Launch',
        description: 'Setup và launch hoàn chỉnh TikTok Shop với 10+ products',
        difficulty: 'Trung bình',
        materials: [
          'Business registration documents',
          'Product inventory và images',
          'TikTok Business account',
          'Payment processing setup',
        ],
        procedure: [
          'Apply và setup TikTok Shop merchant account',
          'Upload product catalog với SEO-optimized listings',
          'Create compelling product videos cho showcase',
          'Setup shipping và return policies',
          'Configure payment methods và tax settings',
          'Launch first livestream shopping session',
          'Monitor performance và gather customer feedback',
          'Optimize listings based on data insights',
        ],
        expectedResults: 'TikTok Shop live với 100+ views/product và first sales trong week 1',
        solution: 'Strategic product positioning với engaging content strategy',
      },
      {
        title: 'Viral Product Campaign Strategy',
        description: 'Tạo viral marketing campaign cho một product specific',
        difficulty: 'Nâng cao',
        materials: [
          'Hero product cho campaign',
          'Content creation tools',
          'Influencer network connections',
          'Paid advertising budget',
        ],
        procedure: [
          'Identify viral potential product characteristics',
          'Develop unique selling proposition và hooks',
          'Create content series với consistent messaging',
          'Partner với micro-influencers cho authentic reviews',
          'Execute coordinated launch với multiple touchpoints',
          'Leverage user-generated content và social proof',
          'Scale successful content formats',
          'Analyze campaign performance và ROI',
        ],
        expectedResults: '1M+ views và 10x sales increase trong 1 tháng',
        solution: 'Multi-layered content strategy với strong call-to-action',
      },
    ],
    vietnamContext: {
      title: 'Bùng nổ Thương mại Xã hội trên TikTok tại Việt Nam',
      content: [
        "TikTok Shop đã nhanh chóng trở thành một kênh bán hàng chủ lực tại Việt Nam, thu hút hàng triệu người dùng và doanh nghiệp nhờ vào mô hình 'shoppertainment' độc đáo.",
        'Người tiêu dùng Việt Nam ưa chuộng các phiên livestream bán hàng có tính tương tác cao, kết hợp với các mini-game, voucher giảm giá và sự tham gia của các KOC (Key Opinion Consumer).',
        'Xây dựng lòng tin qua các video review chân thực và nội dung sáng tạo là chìa khóa thành công trên nền tảng này.',
      ],
    },
    caseStudies: [
      {
        title: 'Gốm Sứ Minh Long: Hiện Đại Hóa Thương Hiệu Truyền Thống',
        organization: 'Gốm Sứ Minh Long',
        problem:
          'Thương hiệu gốm sứ truyền thống gặp khó khăn trong việc tiếp cận khách hàng trẻ và hiện đại hóa hình ảnh.',
        solution:
          'Minh Long triển khai các chiến dịch trên TikTok, kết hợp với các KOC để tạo ra các video ngắn giới thiệu sản phẩm trong bối cảnh đời thường, tổ chức các buổi livestream hướng dẫn cắm hoa, trang trí nhà cửa.',
        impact:
          'Tăng trưởng 200% đơn hàng từ kênh TikTok Shop trong 6 tháng, thành công xây dựng hình ảnh thương hiệu gần gũi và sáng tạo hơn trong mắt người dùng trẻ.',
        innovations: ['Livestream workshop', 'KOC collaboration', 'Content marketing đời thường'],
      },
      {
        title: 'YODY: Dẫn Đầu Doanh Thu Thời Trang Nhanh',
        organization: 'Thời trang YODY',
        problem:
          'Cạnh tranh khốc liệt trong thị trường thời trang nhanh, cần một kênh bán hàng đột phá để tăng doanh số và nhận diện thương hiệu.',
        solution:
          "YODY tập trung vào việc xây dựng kênh TikTok với nội dung 'try-on haul', phối đồ theo xu hướng và các thử thách sáng tạo. Họ tận dụng tối đa tính năng livestream để ra mắt bộ sưu tập mới và tung ra các deal độc quyền.",
        impact:
          'Trở thành một trong những thương hiệu thời trang có doanh thu cao nhất trên TikTok Shop Việt Nam, xây dựng được một cộng đồng khách hàng trung thành.',
        innovations: ['Try-on haul videos', 'Exclusive livestream deals', 'Community building challenges'],
      },
    ],
    careerConnect: {
      name: "Nguyễn Ngọc 'Tun' Phạm",
      title: 'Nhà sáng tạo nội dung & Doanh nhân',
      company: 'Tun Phạm Official',
      imageUrl: 'https://i.pravatar.cc/150?u=tun-pham',
      quote:
        "TikTok không chỉ là nơi giải trí, đó là một mảnh đất màu mỡ để kinh doanh nếu bạn đủ sáng tạo và thấu hiểu khán giả của mình. Sự chân thành chính là 'content' tốt nhất.",
    },
    quizzes: [
      {
        question: "Yếu tố nào được coi là 'chìa khóa' để thành công trên TikTok Shop tại Việt Nam?",
        options: [
          'Giá sản phẩm cực rẻ',
          'Xây dựng lòng tin qua review chân thực và nội dung sáng tạo',
          'Chỉ chạy quảng cáo trả phí',
          'Sao chép nội dung từ các kênh khác',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hành vi mua sắm của người dùng Việt trên TikTok bị ảnh hưởng mạnh mẽ bởi tính giải trí, sự chân thực và sáng tạo của nội dung, giúp xây dựng lòng tin và thúc đẩy quyết định mua hàng.',
      },
      {
        question: "Thuật ngữ 'Shoppertainment' mô tả hành vi nào của người tiêu dùng?",
        options: [
          'Mua sắm dựa trên nhu cầu thiết yếu',
          'Mua sắm dựa trên so sánh giá',
          'Mua sắm kết hợp giải trí',
          'Mua sắm chỉ vào các dịp lễ',
        ],
        correctAnswerIndex: 2,
        explanation:
          "'Shoppertainment' là sự kết hợp giữa 'shopping' và 'entertainment', mô tả xu hướng người dùng mua sắm trong khi đang tìm kiếm nội dung giải trí, một đặc điểm nổi bật của TikTok.",
      },
    ],
  },
  {
    id: 'advanced-livestream-selling',
    title: 'Advanced Livestream Selling Techniques',
    description:
      'Nâng cao kỹ năng livestream với các kịch bản bán hàng phức tạp, kỹ thuật tương tác và chốt đơn hiệu quả.',
    duration: '240 phút',
    difficulty: 'Nâng cao',
    module: 'TikTok',
    videoUrl: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    objectives: [
      'Xây dựng kịch bản livestream đa tầng',
      'Sử dụng hiệu ứng và mini-game để tăng tương tác',
      'Kỹ thuật chốt đơn và xử lý từ chối chuyên nghiệp',
      'Phân tích dữ liệu livestream để tối ưu',
      'Xây dựng cộng đồng fan trung thành qua livestream',
    ],
    prerequisites: [
      'Kinh nghiệm livestream bán hàng cơ bản',
      'Đã có TikTok Shop và ít nhất 10 phiên live',
      'Hiểu biết về đối tượng khách hàng mục tiêu',
    ],
    realWorldApplications: [
      'Các phiên livestream đấu giá sản phẩm phiên bản giới hạn.',
      'Talkshow trực tuyến với chuyên gia ngành hàng để tăng uy tín.',
      'Tổ chức các sự kiện ra mắt sản phẩm độc quyền trên livestream.',
      'Kết hợp livestream trên nhiều nền tảng cùng lúc (multistream) để tối đa hóa Reichweite.',
    ],
    exercises: [
      {
        title: 'Tổ chức phiên livestream theo chủ đề',
        description:
          'Lên kế hoạch và thực hiện một phiên livestream theo một chủ đề cụ thể (ví dụ: "Back to School", "Year-End Party") với kịch bản chi tiết và mục tiêu doanh số rõ ràng.',
        difficulty: 'Nâng cao',
        materials: [
          'Bộ sản phẩm theo chủ đề',
          'Kịch bản livestream chi tiết',
          'Công cụ hỗ trợ livestream (đèn, mic, green screen)',
        ],
        procedure: [
          'Nghiên cứu và chọn chủ đề phù hợp với tệp khách hàng.',
          'Xây dựng kịch bản gồm các phần: warm-up, giới thiệu sản phẩm, mini-game, chốt đơn, Q&A.',
          'Thiết lập không gian livestream chuyên nghiệp.',
          'Thực hiện livestream và bám sát kịch bản, linh hoạt tương tác với người xem.',
          'Phân tích các chỉ số sau buổi live để rút kinh nghiệm.',
        ],
        expectedResults: 'Tăng 50% tỷ lệ chuyển đổi so với các phiên livestream thông thường.',
        solution: 'Kịch bản chặt chẽ kết hợp với khả năng tương tác tự nhiên và các ưu đãi hấp dẫn theo chủ đề.',
      },
    ],
  },
  {
    id: 'tiktok-viral-marketing',
    title: 'TikTok Viral Marketing & Content Strategy',
    description:
      'Học cách tạo ra các video có khả năng viral cao, nắm bắt xu hướng và xây dựng một chiến lược nội dung bền vững trên TikTok.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    module: 'TikTok',
    videoUrl: 'https://www.youtube.com/watch?v=Z3p1_X_24a4',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    objectives: [
      'Phân tích các yếu tố tạo nên một video viral',
      'Kỹ thuật quay dựng và chỉnh sửa video chuyên nghiệp trên điện thoại',
      'Sử dụng âm thanh và hiệu ứng trending hiệu quả',
      'Xây dựng lịch đăng bài và chuỗi nội dung (content series)',
      'Đo lường hiệu quả và tối ưu chiến lược nội dung',
    ],
    prerequisites: [
      'Tài khoản TikTok cá nhân hoặc doanh nghiệp',
      'Smartphone có camera tốt',
      'Kỹ năng sử dụng các ứng dụng chỉnh sửa video cơ bản (CapCut, InShot)',
    ],
    realWorldApplications: [
      'Chiến dịch marketing sử dụng các thử thách (challenge) có hashtag thương hiệu.',
      'Tạo các video "behind-the-scenes" để tăng tính minh bạch và kết nối với khách hàng.',
      'Sản xuất các series video giáo dục ngắn liên quan đến sản phẩm.',
      'Hợp tác với các nhà sáng tạo nội dung để tạo ra các video review chân thực.',
    ],
    exercises: [
      {
        title: 'Sản xuất một video theo trend',
        description:
          'Chọn một xu hướng (trend) đang thịnh hành trên TikTok và sản xuất một video của riêng bạn để quảng bá một sản phẩm.',
        difficulty: 'Trung bình',
        materials: ['Sản phẩm cần quảng bá', 'Smartphone', 'Ứng dụng CapCut'],
        procedure: [
          'Lướt TikTok và xác định một trend phù hợp với sản phẩm và thương hiệu.',
          'Lên ý tưởng kịch bản để lồng ghép sản phẩm một cách tự nhiên.',
          'Quay và dựng video theo đúng format và âm thanh của trend.',
          'Viết caption hấp dẫn và sử dụng hashtag liên quan.',
          'Đăng video và theo dõi các chỉ số tương tác.',
        ],
        expectedResults: 'Video đạt được lượng view cao hơn ít nhất 2 lần so với các video thông thường của kênh.',
        solution:
          'Sự sáng tạo trong việc biến tấu trend để phù hợp với sản phẩm, đồng thời giữ được tính giải trí và bất ngờ.',
      },
    ],
  },
];
