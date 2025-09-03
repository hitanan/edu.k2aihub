import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { EDUCATIONAL_GAMES_DATA, EducationalGame } from '@/data/educationalGames';

export interface EventManagementLesson extends BaseLessonData {
  eventCategory:
    | 'corporate-events'
    | 'entertainment-events'
    | 'virtual-events'
    | 'event-technology'
    | 'festival-management';
  technologyFocus: string[];
  vietnameseEventContext: string[];
  industryApplications: string[];
  eventScale: 'small' | 'medium' | 'large' | 'mega';
  relatedGames?: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

export const eventManagementLessons: EventManagementLesson[] = [
  {
    id: 'digital-event-production-management',
    title: 'Quản Lý và Sản Xuất Sự Kiện Số',
    description:
      'Quản lý sản xuất sự kiện toàn diện bao gồm các nền tảng sự kiện số, công nghệ live streaming, sự kiện kết hợp (hybrid), và trải nghiệm thực tế ảo.',
    duration: '215 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=yST4J4_K-ME',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
    eventCategory: 'virtual-events',
    eventScale: 'large',
    technologyFocus: [
      'Nền tảng và công nghệ live streaming',
      'Nền tảng sự kiện ảo (Zoom, Teams, giải pháp tùy chỉnh)',
      'Thiết bị sản xuất âm thanh/hình ảnh',
      'Hệ thống phần mềm quản lý sự kiện',
    ],
    objectives: [
      'Nắm vững quy trình sản xuất sự kiện số',
      'Thiết kế trải nghiệm sự kiện kết hợp (hybrid) giữa vật lý và ảo',
      'Triển khai giải pháp live streaming với chất lượng chuyên nghiệp',
      'Quản lý tương tác và sự tham gia của khán giả ảo',
      'Phát triển chiến lược tích hợp công nghệ sự kiện',
    ],
    prerequisites: [
      'Kiến thức cơ bản về lập kế hoạch sự kiện',
      'Hiểu biết về truyền thông số',
      'Kiến thức cơ bản về quản lý dự án',
    ],
    vietnameseEventContext: [
      'Số hóa hội nghị doanh nghiệp tại Việt Nam',
      'Chuyển đổi lễ hội truyền thống sang live streaming',
      'Tích hợp kỹ thuật số trong lễ cưới',
      'Nền tảng trực tuyến cho sự kiện kết nối kinh doanh',
    ],
    industryApplications: [
      'Quản lý đào tạo và webinar doanh nghiệp',
      'Live streaming chương trình giải trí',
      'Tổ chức hội nghị giáo dục trực tuyến',
      'Trải nghiệm ảo cho buổi ra mắt sản phẩm',
    ],
    exercises: [
      {
        title: 'Thiết Kế Hội Nghị Doanh Nghiệp Hybrid',
        description:
          'Lập kế hoạch và thực hiện hội nghị doanh nghiệp hybrid cho hơn 1000 người tham dự, kết hợp địa điểm vật lý tại Hà Nội với sự tham gia ảo toàn cầu.',
        difficulty: 'Nâng cao',
        materials: [
          'Phần mềm lập kế hoạch sự kiện',
          'Danh sách thiết bị live streaming',
          'So sánh nền tảng ảo',
          'Công cụ lập ngân sách',
        ],
        procedure: [
          'Thiết kế kiến trúc sự kiện hybrid với sự tích hợp liền mạch',
          'Lập kế hoạch quy trình sản xuất bao gồm thiết lập kỹ thuật và điều phối đội ngũ',
          'Phát triển chiến lược tương tác cho cả người tham dự vật lý và ảo',
          'Tạo kế hoạch phân phối nội dung tối ưu cho hai đối tượng khán giả',
          'Triển khai khung đo lường các chỉ số thành công của sự kiện',
        ],
        expectedResults:
          'Kế hoạch sự kiện hybrid toàn diện với timeline sản xuất chi tiết, thông số kỹ thuật, và chiến lược tương tác.',
        solution:
          'Thiết kế sự kiện hybrid chuyên nghiệp tích hợp văn hóa doanh nghiệp Việt Nam, phân phối đa nền tảng, và kết quả tương tác có thể đo lường.',
      },
    ],
    realWorldApplications: [
      'Đại hội cổ đông thường niên của VinGroup',
      'Hội nghị công nghệ của FPT',
      'Lễ tốt nghiệp đại học',
      'Sự kiện công bố chính sách của chính phủ',
    ],
    caseStudies: [
      {
        title: 'Chuyển Đổi Số của Vietnam Web Summit',
        organization: 'Vietnam Web Summit',
        problem:
          'Chuyển đổi hội nghị công nghệ lớn từ hình thức chỉ vật lý sang hybrid trong và sau đại dịch COVID-19.',
        solution:
          'Phát triển nền tảng hybrid tiên tiến, live streaming đa camera, giải pháp kết nối ảo, và các bài thuyết trình tương tác.',
        impact: 'Tăng số người tham dự từ 3.000 lên 15.000, giảm 40% chi phí, tăng 300% sự tham gia quốc tế.',
        innovations: [
          'Nền tảng ảo tùy chỉnh bằng tiếng Việt',
          'Kết nối mạng lưới được hỗ trợ bởi AI',
          'Phân phối nội dung đa múi giờ',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng Dẫn Sản Xuất Sự Kiện Số',
        url: 'https://www.eventmanagerblog.com/digital-event-production',
        type: 'Resource',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'digital-marketing-campaign')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'entertainment-technology-systems',
    title: 'Hệ Thống Công Nghệ Giải Trí',
    description:
      'Công nghệ giải trí tiên tiến bao gồm hệ thống âm thanh, thiết kế ánh sáng, tự động hóa sân khấu, và các công nghệ trải nghiệm nhập vai.',
    duration: '235 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=13CIZmc0-Lg',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=600&fit=crop',
    eventCategory: 'entertainment-events',
    eventScale: 'mega',
    technologyFocus: [
      'Hệ thống âm thanh chuyên nghiệp và mixing',
      'Thiết kế và lập trình ánh sáng LED',
      'Hệ thống tự động hóa và giàn giáo sân khấu',
      'Giải trí thực tế ảo và tăng cường',
    ],
    objectives: [
      'Thiết kế hệ thống âm thanh giải trí chuyên nghiệp',
      'Nắm vững lập trình và hệ thống điều khiển ánh sáng LED',
      'Triển khai tự động hóa sân khấu và hiệu ứng đặc biệt',
      'Tích hợp công nghệ VR/AR vào trải nghiệm giải trí',
      'Phát triển quy trình an toàn cho các hệ thống giải trí quy mô lớn',
    ],
    prerequisites: [
      'Kiến thức cơ bản về điện tử',
      'Hiểu biết về ngành công nghiệp giải trí',
      'Kỹ năng giải quyết vấn đề kỹ thuật',
    ],
    vietnameseEventContext: [
      'Thông số kỹ thuật cho các địa điểm hòa nhạc tại Việt Nam',
      'Tích hợp công nghệ vào lễ hội âm nhạc truyền thống',
      'Yêu cầu kỹ thuật cho tour diễn của nghệ sĩ quốc tế',
      'Thách thức về thời tiết và cơ sở hạ tầng cho festival ngoài trời',
    ],
    industryApplications: [
      'Thiết kế hệ thống cho địa điểm hòa nhạc',
      'Công nghệ sản xuất sân khấu kịch',
      'Hệ thống sân khấu chính của festival',
      'Trải nghiệm giải trí cho doanh nghiệp',
    ],
    exercises: [
      {
        title: 'Thiết Kế Kỹ Thuật Sân Khấu Chính Festival',
        description:
          'Thiết kế hệ thống kỹ thuật hoàn chỉnh cho sân khấu chính của một festival âm nhạc lớn tại Việt Nam (sức chứa hơn 50.000 người).',
        difficulty: 'Nâng cao',
        materials: [
          'Phần mềm thiết kế hệ thống âm thanh',
          'Nền tảng điều khiển ánh sáng',
          'Công cụ kỹ thuật kết cấu',
          'Tài liệu quy định an toàn',
        ],
        procedure: [
          'Phân tích âm học địa điểm và thiết kế bố cục hệ thống âm thanh',
          'Tạo thiết kế ánh sáng hỗ trợ nhiều loại hình biểu diễn',
          'Lập kế hoạch phân phối điện và cơ sở hạ tầng kỹ thuật',
          'Thiết kế hệ thống an toàn bao gồm công nghệ quản lý đám đông',
          'Phát triển mẫu yêu cầu kỹ thuật (technical rider) cho nghệ sĩ quốc tế',
        ],
        expectedResults:
          'Thiết kế sân khấu festival chuyên nghiệp với thông số kỹ thuật chi tiết, quy trình an toàn, và kế hoạch hỗ trợ nghệ sĩ.',
        solution:
          'Thiết kế hệ thống giải trí toàn diện được tối ưu hóa cho điều kiện ngoài trời của Việt Nam, tiêu chuẩn kỹ thuật quốc tế, và yêu cầu sự kiện văn hóa.',
      },
    ],
    realWorldApplications: [
      'Sản xuất hòa nhạc tại Sân vận động Mỹ Đình',
      'Nâng cấp kỹ thuật Nhà hát Lớn Sài Gòn',
      'Hệ thống cho festival âm nhạc Phú Quốc',
      'Thiết kế địa điểm giải trí trong nhà',
    ],
    caseStudies: [
      {
        title: 'Tích Hợp Công Nghệ tại Lễ Hội Âm Nhạc 7UP',
        organization: 'BEC Entertainment',
        problem:
          'Tạo ra hệ thống công nghệ giải trí đẳng cấp thế giới cho festival âm nhạc ngoài trời lớn nhất Việt Nam.',
        solution:
          'Hệ thống âm thanh hiện đại, màn hình video LED tiên tiến, hệ thống ánh sáng tự động, công nghệ quản lý đám đông.',
        impact:
          'Tổ chức thành công cho hơn 100.000 người tham dự, đạt tiêu chuẩn sản xuất quốc tế, thu hút các nghệ sĩ quốc tế lớn.',
        innovations: [
          'Hệ thống ngoài trời chống chịu thời tiết',
          'Công nghệ tối ưu hóa luồng di chuyển của đám đông',
          'Điều phối âm thanh đa sân khấu',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng Dẫn Hệ Thống Âm Thanh Chuyên Nghiệp',
        url: 'https://service.shure.com/s/article/live-sound-system-setup-guide',
        type: 'Technical',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'digital-marketing-campaign')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'event-marketing-digital-engagement',
    title: 'Marketing Sự Kiện và Tương Tác Số',
    description:
      'Các chiến lược marketing số cho sự kiện, tương tác trên mạng xã hội, hợp tác với người ảnh hưởng (influencer), và quảng bá sự kiện dựa trên dữ liệu.',
    duration: '190 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=juPUcJAxIMk',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop',
    eventCategory: 'corporate-events',
    eventScale: 'medium',
    technologyFocus: [
      'Nền tảng marketing mạng xã hội',
      'Phát triển ứng dụng di động cho sự kiện',
      'Hệ thống bán vé kỹ thuật số',
      'Công cụ phân tích và hiểu biết khán giả',
    ],
    objectives: [
      'Phát triển chiến lược marketing số toàn diện cho sự kiện',
      'Tạo các chiến dịch mạng xã hội hấp dẫn',
      'Xây dựng ứng dụng di động cho sự kiện với các tính năng kết nối',
      'Triển khai phân tích dữ liệu để hiểu hành vi khán giả',
      'Quản lý hợp tác với người ảnh hưởng và thương hiệu',
    ],
    prerequisites: [
      'Kiến thức cơ bản về marketing số',
      'Kinh nghiệm marketing trên mạng xã hội',
      'Kiến thức cơ bản về phân tích dữ liệu',
    ],
    vietnameseEventContext: [
      'Bối cảnh mạng xã hội Việt Nam (Facebook, Zalo, TikTok)',
      'Chiến lược hợp tác với người ảnh hưởng địa phương',
      'Sự nhạy cảm văn hóa trong marketing sự kiện',
      'Tuân thủ quy định của chính phủ đối với sự kiện',
    ],
    industryApplications: [
      'Chiến dịch quảng bá sự kiện doanh nghiệp',
      'Bán vé sự kiện giải trí',
      'Thu hút người tham dự hội nghị',
      'Quản lý hợp tác thương hiệu cho festival',
    ],
    exercises: [
      {
        title: 'Chiến Dịch Marketing Sự Kiện Tích Hợp',
        description:
          'Tạo chiến dịch marketing số toàn diện để ra mắt một hội nghị công nghệ mới tại thị trường Việt Nam.',
        difficulty: 'Trung bình',
        materials: [
          'Công cụ quản lý mạng xã hội',
          'Nền tảng phân tích',
          'Phần mềm email marketing',
          'Cơ sở dữ liệu người ảnh hưởng',
        ],
        procedure: [
          'Nghiên cứu đối tượng mục tiêu trong cộng đồng công nghệ Việt Nam',
          'Thiết kế chiến lược marketing đa kênh bao gồm mạng xã hội, email, người ảnh hưởng',
          'Tạo lịch nội dung với thông điệp phù hợp văn hóa',
          'Phát triển ứng dụng sự kiện với các tính năng kết nối và tương tác',
          'Triển khai hệ thống theo dõi và đo lường ROI của chiến dịch',
        ],
        expectedResults:
          'Chiến dịch marketing sự kiện hoàn chỉnh với các mục tiêu tương tác có thể đo lường, phân bổ ngân sách, và các chỉ số thành công.',
        solution:
          'Phương pháp marketing số tích hợp tận dụng sở thích mạng xã hội của người Việt, người ảnh hưởng địa phương, và hiểu biết văn hóa.',
      },
    ],
    realWorldApplications: [
      'Quảng bá sự kiện hệ sinh thái khởi nghiệp',
      'Thu hút người tham dự hội nghị quốc tế',
      'Marketing số cho festival văn hóa',
      'Quảng bá chương trình đào tạo doanh nghiệp',
    ],
    caseStudies: [
      {
        title: 'Thành Công Marketing Số của TEDxHoChiminhCity',
        organization: 'TEDx Ho Chi Minh City',
        problem:
          'Xây dựng khán giả cho sự kiện TEDx hàng năm trong thị trường sự kiện diễn thuyết cạnh tranh tại Việt Nam.',
        solution:
          'Chiến lược mạng xã hội đa nền tảng, hợp tác với người ảnh hưởng Việt Nam, phát triển ứng dụng di động, nhắm mục tiêu dựa trên dữ liệu.',
        impact: 'Tăng 200% doanh số bán vé, xây dựng cộng đồng hơn 50.000 người theo dõi, đạt 95% công suất địa điểm.',
        innovations: [
          'Thích ứng văn hóa Việt Nam',
          'Mạng lưới người ảnh hưởng địa phương',
          'Phương pháp xây dựng cộng đồng',
        ],
      },
    ],
    resources: [
      {
        title: 'Cẩm Nang Marketing Sự Kiện',
        url: 'https://blog.hootsuite.com/event-marketing/',
        type: 'Resource',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'digital-marketing-campaign')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'festival-operations-logistics',
    title: 'Vận Hành và Logistics Festival',
    description:
      'Quản lý festival quy mô lớn bao gồm điều phối logistics, quản lý nhà cung cấp, lập kế hoạch an toàn, và vận hành xuất sắc.',
    duration: '225 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=DRZymVT5i6w',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=600&fit=crop',
    eventCategory: 'festival-management',
    eventScale: 'mega',
    technologyFocus: [
      'Hệ thống phần mềm quản lý festival',
      'Hệ thống RFID và thanh toán không tiếp xúc',
      'Công nghệ giám sát đám đông và an toàn',
      'Nền tảng quản lý chuỗi cung ứng',
    ],
    objectives: [
      'Nắm vững lập kế hoạch logistics cho festival quy mô lớn',
      'Triển khai điều phối nhà cung cấp và quản lý chuỗi cung ứng',
      'Phát triển quy trình an toàn và an ninh toàn diện',
      'Thiết kế luồng di chuyển của đám đông và bố cục địa điểm hiệu quả',
      'Tạo trung tâm chỉ huy vận hành với giám sát thời gian thực',
    ],
    prerequisites: ['Kinh nghiệm quản lý sự kiện', 'Kỹ năng quản lý dự án', 'Hiểu biết về các quy định an toàn'],
    vietnameseEventContext: [
      'Giấy phép và tuân thủ quy định của chính phủ Việt Nam',
      'Thích ứng kế hoạch sự kiện với mùa mưa',
      'Tích hợp hệ sinh thái nhà cung cấp địa phương',
      'Kết hợp truyền thống lễ hội văn hóa',
    ],
    industryApplications: [
      'Quản lý vận hành festival âm nhạc',
      'Điều phối logistics festival ẩm thực',
      'Tổ chức lễ hội văn hóa',
      'Quản lý sự kiện ngoài trời của doanh nghiệp',
    ],
    exercises: [
      {
        title: 'Kế Hoạch Vận Hành Festival Nhiều Ngày',
        description:
          'Phát triển kế hoạch vận hành toàn diện cho một festival văn hóa Việt Nam kéo dài 3 ngày, dự kiến có hơn 200.000 người tham dự.',
        difficulty: 'Nâng cao',
        materials: [
          'Phần mềm lập kế hoạch festival',
          'Công cụ quản lý logistics',
          'Mẫu lập kế hoạch an toàn',
          'Hệ thống quản lý nhà cung cấp',
        ],
        procedure: [
          'Thiết kế bố cục địa điểm festival tối ưu hóa luồng di chuyển của đám đông và vị trí nhà cung cấp',
          'Tạo kế hoạch logistics chi tiết bao gồm vận chuyển, quản lý chất thải, tiện ích',
          'Phát triển quy trình an toàn bao gồm các thủ tục ứng phó khẩn cấp',
          'Lập kế hoạch hệ thống điều phối nhà cung cấp với giao tiếp thời gian thực',
          'Thiết kế bảng điều khiển vận hành để giám sát festival thời gian thực',
        ],
        expectedResults:
          'Sổ tay vận hành festival hoàn chỉnh với timeline chi tiết, ma trận trách nhiệm, và kế hoạch dự phòng.',
        solution:
          'Khung vận hành festival chuyên nghiệp tuân thủ quy định của Việt Nam, tích hợp văn hóa, và đạt hiệu quả vận hành xuất sắc.',
      },
    ],
    realWorldApplications: [
      'Vận hành Lễ hội Đèn lồng Hội An',
      'Điều phối Lễ hội Tết TP.HCM',
      'Quản lý festival ẩm thực quốc tế',
      'Lập kế hoạch sự kiện ngày hội gia đình của công ty',
    ],
    caseStudies: [
      {
        title: 'Vận Hành Xuất Sắc tại Quest Festival',
        organization: 'Quest Music Festival Vietnam',
        problem: 'Quản lý logistics phức tạp cho festival EDM quốc tế trong điều kiện nhiệt đới đầy thách thức.',
        solution:
          'Trung tâm vận hành tiên tiến, theo dõi người tham dự bằng RFID, hệ thống dự phòng thời tiết, điều phối nhà cung cấp quốc tế.',
        impact:
          'Quản lý thành công hơn 80.000 người tham dự trong 3 ngày, không có sự cố an toàn lớn, tỷ lệ hài lòng của người tham dự đạt 98%.',
        innovations: [
          'Vận hành thích ứng với thời tiết',
          'Phân tích đám đông thời gian thực',
          'Quy trình an toàn tiêu chuẩn quốc tế',
        ],
      },
    ],
    resources: [
      {
        title: 'Sổ Tay Vận Hành Festival',
        url: 'https://www.eventbrite.com/blog/festival-planning-guide/',
        type: 'Guide',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'treasure-hunt-adventure')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'event-analytics-performance-measurement',
    title: 'Phân Tích và Đo Lường Hiệu Quả Sự Kiện',
    description:
      'Phân tích sự kiện dựa trên dữ liệu, đo lường ROI, phân tích hành vi người tham dự, và các chiến lược tối ưu hóa hiệu suất.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=N8PKjyAnQ6U',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    eventCategory: 'corporate-events',
    eventScale: 'medium',
    technologyFocus: [
      'Nền tảng phân tích sự kiện',
      'Công cụ thu thập khảo sát và phản hồi',
      'Bản đồ nhiệt và theo dõi hành vi',
      'Hệ thống tính toán và báo cáo ROI',
    ],
    objectives: [
      'Triển khai khung đo lường sự kiện toàn diện',
      'Thiết kế chiến lược thu thập dữ liệu để phân tích hành vi người tham dự',
      'Tính toán ROI và các chỉ số giá trị của sự kiện',
      'Tạo ra những hiểu biết có thể hành động từ dữ liệu hiệu suất sự kiện',
      'Phát triển các mô hình dự đoán cho việc lập kế hoạch sự kiện trong tương lai',
    ],
    prerequisites: [
      'Kiến thức cơ bản về phân tích dữ liệu',
      'Kinh nghiệm lập kế hoạch sự kiện',
      'Hiểu biết về các chỉ số kinh doanh',
    ],
    vietnameseEventContext: [
      'Các chỉ số thành công của sự kiện doanh nghiệp Việt Nam',
      'Đo lường tác động của festival văn hóa',
      'Đánh giá hiệu quả sự kiện của chính phủ',
      'Phân tích tác động kinh tế của sự kiện du lịch',
    ],
    industryApplications: [
      'Phân tích ROI hội nghị doanh nghiệp',
      'Tối ưu hóa hiệu suất sự kiện giải trí',
      'Đo lường hiệu quả triển lãm thương mại',
      'Đánh giá tác động cộng đồng của sự kiện văn hóa',
    ],
    exercises: [
      {
        title: 'Phát Triển Bảng Điều Khiển Hiệu Suất Sự Kiện',
        description:
          'Tạo bảng điều khiển phân tích toàn diện để theo dõi và tối ưu hóa hiệu suất hội nghị doanh nghiệp.',
        difficulty: 'Trung bình',
        materials: [
          'Nền tảng phần mềm phân tích',
          'Công cụ thiết kế khảo sát',
          'Công cụ phát triển bảng điều khiển',
          'Phần mềm phân tích thống kê',
        ],
        procedure: [
          'Xác định các chỉ số hiệu suất chính (KPI) để đo lường thành công sự kiện',
          'Thiết kế chiến lược thu thập dữ liệu bao gồm khảo sát, theo dõi, phân tích',
          'Xây dựng bảng điều khiển thời gian thực với những hiểu biết có thể hành động',
          'Triển khai phân tích dự đoán để dự báo số người tham dự và tương tác',
          'Tạo hệ thống báo cáo tự động để giao tiếp với các bên liên quan',
        ],
        expectedResults:
          'Bảng điều khiển phân tích sự kiện chuyên nghiệp với hiểu biết thời gian thực, khả năng dự đoán, và các đề xuất có thể hành động.',
        solution:
          'Nền tảng phân tích toàn diện kết hợp các chỉ số định lượng, phản hồi định tính, và mô hình dự đoán để tối ưu hóa sự kiện.',
      },
    ],
    realWorldApplications: [
      'Hiệu quả chương trình đào tạo doanh nghiệp',
      'Đo lường tác động hội nghị quốc tế',
      'Phân tích tác động kinh tế của festival',
      'Theo dõi sự hài lòng của công dân đối với sự kiện của chính phủ',
    ],
    caseStudies: [
      {
        title: 'Phân Tích Hội Nghị Khách Hàng của VietinBank',
        organization: 'VietinBank',
        problem: 'Đo lường ROI và tối ưu hóa chiến lược hội nghị khách hàng hàng năm.',
        solution:
          'Nền tảng phân tích tiên tiến, thu thập dữ liệu đa điểm chạm, mô hình dự đoán số người tham dự, hệ thống theo dõi ROI.',
        impact:
          'Cải thiện ROI sự kiện 65%, tăng sự hài lòng của người tham dự lên 92%, tối ưu hóa kế hoạch sự kiện tương lai với hiểu biết dự đoán.',
        innovations: [
          'Hiểu biết về hành vi khách hàng Việt Nam',
          'Các chỉ số cụ thể cho ngành ngân hàng',
          'Tối ưu hóa sự kiện dự đoán',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng Dẫn Đo Lường ROI Sự Kiện',
        url: 'https://www.cvent.com/en/blog/events/event-roi-measurement',
        type: 'Resource',
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'investment-simulator'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'data-visualization'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
];
