import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

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
    faqs: [
      {
        question: 'Em có cần phải là một công ty lớn để bán hàng trên TikTok Shop không?',
        answer:
          'Không. TikTok Shop mở cửa cho cả các doanh nghiệp lớn, doanh nghiệp vừa và nhỏ, và cả các cá nhân kinh doanh (hộ kinh doanh). Miễn là bạn có giấy phép kinh doanh hợp lệ và sản phẩm phù hợp, bạn đều có thể đăng ký.',
      },
      {
        question: 'Làm thế nào để video của em có cơ hội được lên xu hướng (For You page)?',
        answer:
          'Thuật toán TikTok ưu tiên những video có tỷ lệ xem hết cao, nhiều lượt tương tác (thích, bình luận, chia sẻ) và được xem lại. Vì vậy, hãy tập trung tạo ra những video hấp dẫn ngay từ 3 giây đầu tiên, có nội dung giá trị hoặc giải trí, và kết thúc bằng một câu hỏi hoặc lời kêu gọi hành động để khuyến khích bình luận.',
      },
      {
        question: 'Em có nên xóa những video có lượt xem thấp không?',
        answer:
          'Không nên. Đôi khi một video có thể "nổ" view sau vài ngày hoặc vài tuần. Việc xóa video có thể ảnh hưởng không tốt đến thuật toán của kênh. Thay vào đó, hãy phân tích xem tại sao video đó không thành công và rút kinh nghiệm cho những lần sau.',
      },
      {
        question: 'Phí sàn trên TikTok Shop là bao nhiêu?',
        answer:
          'Mức phí sàn trên TikTok Shop có thể thay đổi theo chính sách của TikTok. Thông thường, sẽ có một khoản phí giao dịch (khoảng 2-3%) trên mỗi đơn hàng thành công. Bạn nên kiểm tra thông tin mới nhất trong trung tâm người bán (Seller Center) để có con số chính xác.',
      },
      {
        question: 'Làm sao để liên kết tài khoản ngân hàng và rút tiền từ TikTok Shop?',
        answer:
          'Trong Seller Center, bạn vào mục "Tài chính" -> "Tài khoản ngân hàng" để thêm thông tin tài khoản của mình. Sau khi đơn hàng được giao thành công và qua thời gian đối soát, số dư sẽ được ghi nhận vào ví của bạn và bạn có thể thực hiện lệnh rút tiền về tài khoản đã liên kết.',
      },
      {
        question: 'Sản phẩm của em có cần được TikTok duyệt trước khi bán không?',
        answer:
          'Có. Tất cả sản phẩm tải lên TikTok Shop đều phải qua một quy trình xét duyệt để đảm bảo chúng tuân thủ chính sách bán hàng của nền tảng, không phải là hàng giả, hàng cấm, hoặc vi phạm bản quyền.',
      },
      {
        question: 'KOC là gì và tại sao họ quan trọng trên TikTok?',
        answer:
          'KOC (Key Opinion Consumer) là những người tiêu dùng có sức ảnh hưởng. Khác với KOL (Key Opinion Leader) là người nổi tiếng, KOC xây dựng uy tín bằng những bài review chân thực, chi tiết. Trên TikTok, người dùng tin tưởng KOC vì họ giống như một người bạn đang chia sẻ trải nghiệm thật, giúp thúc đẩy quyết định mua hàng một cách tự nhiên.',
      },
      {
        question: 'Làm thế nào để tìm KOC phù hợp với sản phẩm của mình?',
        answer:
          'Bạn có thể tìm KOC thông qua Creator Marketplace của TikTok, tìm kiếm các hashtag liên quan đến ngành hàng của bạn, hoặc quan sát xem ai đang tạo ra những nội dung chất lượng về các sản phẩm tương tự. Hãy ưu tiên những KOC có tệp khán giả trùng với khách hàng mục tiêu của bạn.',
      },
      {
        question: 'Affiliate Marketing trên TikTok Shop hoạt động như thế nào?',
        answer:
          'Affiliate Marketing cho phép các nhà sáng tạo nội dung gắn link sản phẩm của bạn vào video hoặc livestream của họ. Khi có người mua hàng qua link đó, nhà sáng tạo sẽ nhận được một khoản hoa hồng. Đây là một cách hiệu quả để mở rộng phạm vi tiếp cận mà không cần trả trước chi phí quảng cáo.',
      },
      {
        question: 'Em nên chuẩn bị những gì trước khi bắt đầu bán hàng trên TikTok Shop?',
        answer:
          'Hãy chuẩn bị: 1. Giấy phép kinh doanh. 2. Nguồn hàng ổn định và chất lượng. 3. Hình ảnh, video sản phẩm hấp dẫn. 4. Kế hoạch nội dung ban đầu để xây dựng kênh. 5. Kiến thức cơ bản về các chính sách của TikTok Shop.',
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
    faqs: [
      {
        question: 'Làm thế nào để giữ chân người xem trong suốt buổi livestream dài?',
        answer:
          'Bí quyết là tạo ra sự thay đổi liên tục. Hãy xen kẽ giữa việc giới thiệu sản phẩm, các mini-game tương tác (ví dụ: đố vui có thưởng), các phiên Q&A, và tung ra các "deal chớp nhoáng" vào những thời điểm bất ngờ. Một kịch bản có cao trào và nhịp độ tốt sẽ giữ cho người xem luôn tò mò và ở lại.',
      },
      {
        question: 'Em nên làm gì nếu không có ai xem livestream của mình?',
        answer:
          'Đừng nản lòng! Hãy thông báo trước về buổi live trên các kênh mạng xã hội khác. Trong những phút đầu, ngay cả khi chỉ có vài người xem, hãy cứ năng lượng và tương tác nhiệt tình với họ. Bạn cũng có thể nhờ bạn bè, người thân vào xem và "mồi" các câu hỏi. Kiên trì là chìa khóa, dần dần bạn sẽ xây dựng được một lượng khán giả trung thành.',
      },
      {
        question: 'Làm thế nào để thiết lập kịch bản cho một buổi livestream hiệu quả?',
        answer:
          'Một kịch bản tốt nên có cấu trúc rõ ràng: Mở đầu (warm-up, giới thiệu), Thân bài (giới thiệu sản phẩm, mini-game, trả lời câu hỏi), và Kết thúc (tung deal chốt, thông báo lịch live tiếp theo). Hãy phân bổ thời gian hợp lý cho từng phần và chuẩn bị sẵn các phương án dự phòng nếu có sự cố.',
      },
      {
        question: 'Sự khác biệt giữa TikTok Shop và các sàn e-commerce khác (Shopee, Lazada) là gì?',
        answer:
          'Điểm khác biệt lớn nhất là TikTok Shop được tích hợp liền mạch vào nền tảng giải trí. Người dùng khám phá và mua sản phẩm trong khi đang lướt xem video hoặc xem livestream, tạo ra hành vi mua sắm bốc đồng và dựa trên cảm xúc nhiều hơn là tìm kiếm chủ động như trên các sàn khác.',
      },
      {
        question: 'Làm thế nào để tăng mắt xem (số người xem đồng thời) cho livestream?',
        answer:
          'Ngoài việc thông báo trước, bạn có thể chạy quảng cáo TikTok Live, hợp tác với các KOC/KOL khác để livestream chung, hoặc tạo ra các "deal hủy diệt" chỉ có trong phiên live để thu hút người xem. Nội dung "nhá hàng" trước buổi live cũng rất quan trọng.',
      },
      {
        question: 'Em có thể livestream bán hàng trên tài khoản TikTok cá nhân không?',
        answer:
          'Có, bạn có thể livestream trên tài khoản cá nhân đã được liên kết với TikTok Shop. Tuy nhiên, việc xây dựng một tài khoản doanh nghiệp chuyên nghiệp sẽ tạo dựng được nhiều lòng tin hơn từ khách hàng về lâu dài.',
      },
      {
        question: 'Làm sao để xử lý các bình luận tiêu cực hoặc spam trong lúc livestream?',
        answer:
          'Bạn có thể thiết lập bộ lọc từ khóa trong cài đặt livestream để tự động ẩn các bình luận chứa từ ngữ không mong muốn. Ngoài ra, bạn có thể chỉ định một người làm quản trị viên (moderator) để hỗ trợ bạn quản lý bình luận trong suốt phiên live.',
      },
      {
        question: 'Có nên lưu lại video livestream sau khi kết thúc không?',
        answer:
          'Có, bạn nên lưu lại. TikTok cho phép bạn ghim lại các sản phẩm nổi bật từ livestream đã kết thúc, giúp những người xem sau vẫn có thể mua hàng. Bạn cũng có thể cắt những khoảnh khắc hay nhất từ livestream để đăng lại dưới dạng video ngắn.',
      },
      {
        question: 'Làm thế nào để phân tích hiệu quả của một buổi livestream?',
        answer:
          'Sau mỗi buổi live, TikTok Shop cung cấp một bảng phân tích chi tiết về các chỉ số như: doanh thu, số lượng đơn hàng, số người xem cao nhất, thời gian xem trung bình, tỷ lệ chuyển đổi... Hãy phân tích các chỉ số này để hiểu rõ hơn về hành vi của khách hàng và tối ưu cho các phiên live sau.',
      },
      {
        question: 'Mini-game trong livestream có thực sự hiệu quả không?',
        answer:
          'Rất hiệu quả. Mini-game như "đoán giá sản phẩm", "bốc thăm may mắn", "trả lời câu hỏi nhận voucher" giúp tăng vọt lượng tương tác, giữ chân người xem lâu hơn và tạo không khí sôi động, từ đó kích thích nhu cầu mua sắm.',
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
    faqs: [
      {
        question: 'Làm thế nào để "bắt trend" trên TikTok một cách hiệu quả?',
        answer:
          'Hãy dành thời gian lướt tab "For You" mỗi ngày để xem những âm thanh, hiệu ứng, và format video nào đang được nhiều người sử dụng. Đừng chỉ sao chép, hãy suy nghĩ làm thế nào để biến tấu trend đó cho phù hợp với cá tính thương hiệu và sản phẩm của bạn. Hành động nhanh là rất quan trọng vì trend trên TikTok thay đổi rất nhanh.',
      },
      {
        question: 'Độ dài video bao nhiêu là lý tưởng trên TikTok?',
        answer:
          'Không có câu trả lời tuyệt đối, nhưng các video ngắn (7-15 giây) thường có khả năng được xem lại cao hơn, giúp tăng tỷ lệ xem hết (watch time) - một yếu tố quan trọng của thuật toán. Tuy nhiên, nếu nội dung của bạn thực sự hấp dẫn và có giá trị (ví dụ: kể một câu chuyện, hướng dẫn chi tiết), video dài hơn vẫn có thể thành công. Hãy thử nghiệm các độ dài khác nhau và xem khán giả của bạn phản ứng tốt nhất với loại nào.',
      },
      {
        question: 'Hashtag có thực sự quan trọng trên TikTok không?',
        answer:
          'Có, nhưng không phải theo cách bạn nghĩ. Hashtag giúp thuật toán của TikTok hiểu được nội dung video của bạn nói về chủ đề gì để phân phối đến đúng đối tượng. Hãy sử dụng một vài hashtag rộng và một vài hashtag rất cụ thể (niche) liên quan đến nội dung của bạn, thay vì lạm dụng quá nhiều hashtag không liên quan.',
      },
      {
        question: 'Làm thế nào để tạo ra một "móc câu" (hook) hấp dẫn trong 3 giây đầu tiên?',
        answer:
          'Hãy bắt đầu video bằng một câu hỏi gây tò mò, một tuyên bố gây sốc, một cảnh quay hành động bất ngờ, hoặc một vấn đề mà khán giả mục tiêu của bạn đang gặp phải. 3 giây đầu tiên quyết định liệu người xem có ở lại hay lướt đi, vì vậy nó phải thật mạnh mẽ.',
      },
      {
        question: 'Tỷ lệ đăng video bao nhiêu là hợp lý?',
        answer:
          'Sự nhất quán quan trọng hơn số lượng. Tốt nhất là đăng ít nhất 1 video mỗi ngày. Tuy nhiên, nếu bạn không thể duy trì chất lượng, hãy đặt một lịch đăng bài mà bạn có thể theo được, ví dụ 3-4 video mỗi tuần, và tuân thủ nó.',
      },
      {
        question: 'Làm thế nào để biết được thời điểm "vàng" để đăng video?',
        answer:
          'Hãy nâng cấp lên tài khoản TikTok Pro (miễn phí) để truy cập vào mục Phân tích (Analytics). Tại đây, bạn có thể xem được những ngày và giờ mà người theo dõi của bạn hoạt động tích cực nhất. Hãy đăng video trước thời điểm đó khoảng 1-2 tiếng.',
      },
      {
        question: 'Content Pillar (Trụ cột nội dung) là gì và tại sao nó quan trọng?',
        answer:
          'Content Pillar là 3-5 chủ đề chính mà kênh của bạn sẽ xoay quanh. Việc xác định các trụ cột này giúp bạn xây dựng một kênh có định hướng rõ ràng, thu hút đúng đối tượng khán giả và không bao giờ bị "bí" ý tưởng.',
      },
      {
        question: 'Làm thế nào để khuyến khích người xem tạo User-Generated Content (UGC)?',
        answer:
          'Hãy tạo ra các thử thách (challenge) với hashtag riêng của thương hiệu, tổ chức các cuộc thi, hoặc đơn giản là kêu gọi người dùng chia sẻ trải nghiệm của họ với sản phẩm. UGC là một hình thức marketing truyền miệng cực kỳ hiệu quả và đáng tin cậy.',
      },
      {
        question: 'Sử dụng CapCut có giúp video của tôi được ưu tiên hơn không?',
        answer:
          'CapCut là một ứng dụng chỉnh sửa video thuộc sở hữu của ByteDance (công ty mẹ của TikTok). Mặc dù không có thông báo chính thức, nhiều nhà sáng tạo tin rằng việc sử dụng các mẫu (template) và hiệu ứng từ CapCut có thể giúp video của bạn được thuật toán TikTok ưu ái hơn.',
      },
      {
        question: 'Sự khác biệt giữa video viral và chiến lược nội dung bền vững là gì?',
        answer:
          'Một video viral có thể mang lại cho bạn một lượng lớn người theo dõi trong thời gian ngắn, nhưng họ có thể không phải là đối tượng khách hàng mục tiêu. Một chiến lược nội dung bền vững tập trung vào việc tạo ra giá trị lâu dài cho một nhóm khán giả cụ thể, từ đó xây dựng một cộng đồng trung thành và chuyển đổi họ thành khách hàng.',
      },
    ],
  },
];

export const tiktokSocialCommerceModuleData: ModuleData = {
  id: 'tiktok-social-commerce',
  title: 'TikTok Shop & Social Commerce',
  subtitle: 'Master live selling và e-commerce',
  description:
    'Học cách setup và optimize TikTok Shop, livestream selling strategies và social commerce cho maximized revenue. Course này sẽ hướng dẫn complete setup process, advanced selling techniques và cross-platform commerce strategies.',
  level: 'Trung bình',
  duration: '8-9 giờ',
  category: 'E-commerce & Social Selling',
  features: [
    'TikTok Shop Setup từ A-Z với optimization techniques',
    'Livestream Selling mastery với interactive technology',
    'Cross-Platform Commerce strategy cho maximum reach',
    'Social Commerce Analytics để track performance và ROI',
  ],
  icon: '🛒',
  color: 'from-pink-600 to-red-600',
  objectives: [
    'Setup và optimize TikTok Shop cho maximum visibility và sales',
    'Master livestream selling techniques với audience engagement',
    'Develop cross-platform commerce strategy cho scalable growth',
    'Implement analytics systems để track performance và optimize revenue',
  ],
  prerequisites: [
    'Business license và tax registration (required for TikTok Shop)',
    'Products ready for online selling với quality images',
    'Basic understanding của e-commerce principles',
    'TikTok Creator Fund eligibility và platform familiarity',
  ],
  careerOutcomes: [
    'TikTok Shop Expert với proven selling strategies',
    'Live Commerce Specialist với audience building skills',
    'Social Commerce Manager cho brands và businesses',
    'E-commerce Consultant focused trên social platforms',
  ],
  industryApplications: [
    'Fashion và beauty brands với visual appeal',
    'Food và beverage businesses với lifestyle content',
    'Tech gadgets và consumer electronics',
    'Home decor và lifestyle products',
  ],
  marketDemand: {
    averageSalary: '25-55 triệu VNĐ',
    jobGrowth: '+45%',
    hireDemand: 'Rất Cao',
  },
  heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
  relatedModules: [
    K2Module.LiveCommerceStreaming,
    K2Module.ContentCreator,
    K2Module.DigitalMarketing,
    K2Module.ShortVideoMastery,
  ],
  lessons: tiktokSocialCommerceLessons,
};
