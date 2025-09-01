import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { EDUCATIONAL_GAMES_DATA, EducationalGame } from '@/data/educationalGames';

export interface InternationalBusinessLesson extends BaseLessonData {
  businessDomain:
    | 'cross-cultural-management'
    | 'global-strategy'
    | 'international-trade'
    | 'cultural-intelligence'
    | 'global-leadership';
  culturalRegions: string[];
  businessApplications: string[];
  vietnameseBusinessContext: string[];
  globalCompetencies: string[];
}

export const internationalBusinessLessons: InternationalBusinessLesson[] = [
  {
    id: 'cross-cultural-management-leadership',
    title: 'Quản Lý & Lãnh Đạo Đa Văn Hóa',
    description:
      'Nắm vững các kỹ thuật quản lý đa văn hóa, lãnh đạo trong các nhóm đa dạng, phát triển trí tuệ văn hóa và giao tiếp hiệu quả giữa các nền văn hóa.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=YMyofREc5Jk', // Cross Cultural Management
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
    businessDomain: 'cross-cultural-management',
    culturalRegions: [
      'Văn hóa kinh doanh Đông Á (Trung Quốc, Nhật Bản, Hàn Quốc)',
      'Thị trường Đông Nam Á (các nước ASEAN)',
      'Văn hóa kinh doanh phương Tây (Mỹ, Châu Âu)',
      'Thị trường Mỹ Latinh và Trung Đông',
    ],
    objectives: [
      'Phát triển năng lực trí tuệ văn hóa (CQ)',
      'Thực hiện các chiến lược giao tiếp đa văn hóa hiệu quả',
      'Quản lý thành công các nhóm đa văn hóa',
      'Vượt qua sự khác biệt văn hóa trong đàm phán kinh doanh',
      'Tạo môi trường làm việc toàn cầu hòa nhập',
    ],
    prerequisites: [
      'Kinh nghiệm quản lý cơ bản',
      'Quan tâm đến kinh doanh quốc tế',
      'Tư duy cởi mở về sự khác biệt văn hóa',
    ],
    vietnameseBusinessContext: [
      'Việt Nam là cầu nối giữa văn hóa kinh doanh Đông Á và phương Tây',
      'Quản lý quan hệ đối tác quốc tế với các công ty nước ngoài',
      'Chiến lược thích ứng văn hóa cho các công ty Việt Nam vươn ra toàn cầu',
      'Tiếp nhận và hội nhập lao động nước ngoài tại các công ty Việt Nam',
    ],
    businessApplications: [
      'Quản lý liên doanh quốc tế',
      'Chiến lược lãnh đạo nhóm toàn cầu',
      'Hội nhập sáp nhập và mua lại xuyên biên giới',
      'Quản lý dự án quốc tế',
    ],
    globalCompetencies: [
      'Kỹ năng đánh giá và thích ứng văn hóa',
      'Năng lực giao tiếp đa ngôn ngữ',
      'Giải quyết xung đột giữa các nền văn hóa',
      'Sự hiện diện của lãnh đạo toàn cầu',
    ],
    exercises: [
      {
        title: 'Đánh giá Trí tuệ Văn hóa & Kế hoạch Phát triển',
        description:
          'Đánh giá trí tuệ văn hóa cá nhân và tạo kế hoạch phát triển để quản lý các mối quan hệ kinh doanh quốc tế',
        difficulty: 'Trung bình',
        materials: [
          'Thang đo Trí tuệ Văn hóa (CQS)',
          'Công cụ lập bản đồ văn hóa',
          'Khung đánh giá giao tiếp',
          'Mẫu lập kế hoạch phát triển',
        ],
        procedure: [
          'Hoàn thành đánh giá trí tuệ văn hóa toàn diện',
          'Xác định điểm mạnh và lĩnh vực cần phát triển về văn hóa',
          'Nghiên cứu bối cảnh văn hóa mục tiêu cho hoạt động kinh doanh',
          'Thiết kế kế hoạch phát triển kỹ năng với các bài tập thực tế',
          'Tạo khung đo lường để theo dõi sự cải thiện',
        ],
        expectedResults:
          'Kế hoạch phát triển trí tuệ văn hóa được cá nhân hóa với các năng lực cụ thể và mục tiêu có thể đo lường',
        solution:
          'Phương pháp tiếp cận có hệ thống để phát triển nhận thức văn hóa, sự đồng cảm, kỹ năng giao tiếp và hành vi thích ứng',
      },
    ],
    realWorldApplications: [
      'Quản lý các liên doanh Việt-Nhật',
      'Lãnh đạo các nhóm bán hàng quốc tế',
      'Tạo điều kiện cho các cuộc đàm phán kinh doanh đa văn hóa',
      'Xây dựng mối quan hệ với nhà cung cấp toàn cầu',
    ],
    caseStudies: [
      {
        title: 'Chiến lược Mở rộng Quốc tế của Vingroup',
        organization: 'Tập đoàn Vingroup',
        problem: 'Mở rộng hoạt động bán lẻ và bất động sản sang các thị trường Đông Nam Á đa dạng về văn hóa',
        solution:
          'Các chương trình đào tạo trí tuệ văn hóa, chiến lược hợp tác địa phương, mô hình kinh doanh thích ứng, phát triển lãnh đạo đa văn hóa',
        impact:
          'Thâm nhập thành công 3 thị trường mới, giảm 70% sự cố xung đột văn hóa, cải thiện 45% hiệu suất nhóm quốc tế',
        innovations: [
          'Khung thích ứng văn hóa',
          'Mô hình kết hợp địa phương-toàn cầu',
          'Lộ trình phát triển lãnh đạo đa văn hóa',
        ],
      },
    ],
    resources: [
      {
        title: 'Nghiên cứu Trí tuệ Văn hóa',
        url: 'https://culturalq.com/',
        type: 'Research',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'cultural-localization-challenge')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'global-supply-chain-trade',
    title: 'Chuỗi Cung Ứng Toàn Cầu & Thương Mại Quốc Tế',
    description:
      'Hiểu cơ chế thương mại quốc tế, quản lý chuỗi cung ứng toàn cầu, tài chính thương mại, quy định xuất nhập khẩu và logistics quốc tế.',
    duration: '235 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=OT3H6U2h0y8', // International Trade and Supply Chain
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop',
    businessDomain: 'international-trade',
    culturalRegions: [
      'Hoạt động Khu vực Mậu dịch Tự do ASEAN',
      'Hành lang thương mại Trung Quốc-Việt Nam',
      'Quan hệ thương mại Liên minh Châu Âu',
      'Đối tác thương mại xuyên Thái Bình Dương',
    ],
    objectives: [
      'Nắm vững chứng từ và thủ tục thương mại quốc tế',
      'Thiết kế mạng lưới chuỗi cung ứng toàn cầu hiệu quả',
      'Hiểu các công cụ tài chính thương mại và quản lý rủi ro',
      'Vượt qua các thách thức về vận chuyển và logistics quốc tế',
      'Thực hiện các thông lệ chuỗi cung ứng bền vững',
    ],
    prerequisites: [
      'Kiến thức kinh doanh cơ bản',
      'Hiểu biết về các nguyên tắc logistics',
      'Quen thuộc với thị trường quốc tế',
    ],
    vietnameseBusinessContext: [
      'Việt Nam là trung tâm sản xuất trong chuỗi cung ứng toàn cầu',
      'Cơ hội từ EVFTA (Hiệp định Thương mại Tự do EU-Việt Nam)',
      'Lợi ích từ RCEP (Hiệp định Đối tác Kinh tế Toàn diện Khu vực)',
      'Quản lý quan hệ thương mại Việt Nam-Hoa Kỳ',
    ],
    businessApplications: [
      'Chiến lược phát triển thị trường xuất khẩu',
      'Tìm nguồn cung ứng nhập khẩu và quản lý nhà cung cấp',
      'Thiết kế mạng lưới phân phối quốc tế',
      'Hoạt động thương mại điện tử xuyên biên giới',
    ],
    globalCompetencies: [
      'Chuyên môn tuân thủ quy định thương mại',
      'Kiến thức về hệ thống thanh toán quốc tế',
      'Khả năng đánh giá rủi ro chuỗi cung ứng',
      'Kỹ năng tối ưu hóa logistics toàn cầu',
    ],
    exercises: [
      {
        title: 'Chiến lược Thâm nhập Thị trường Quốc tế',
        description:
          'Phát triển chiến lược thâm nhập thị trường toàn diện cho một công ty Việt Nam mở rộng sang thị trường quốc tế mới',
        difficulty: 'Nâng cao',
        materials: [
          'Công cụ nghiên cứu thị trường',
          'Phần mềm phân tích thương mại',
          'Nền tảng mô hình hóa chuỗi cung ứng',
          'Mẫu lập kế hoạch tài chính',
        ],
        procedure: [
          'Tiến hành phân tích thị trường mục tiêu bao gồm các yếu tố văn hóa, kinh tế, pháp lý',
          'Thiết kế chiến lược chuỗi cung ứng và phân phối',
          'Xây dựng chiến lược giá cả tính đến tất cả các chi phí quốc tế',
          'Tạo kế hoạch quản lý rủi ro cho tài chính thương mại và hoạt động',
          'Lập kế hoạch thời gian thực hiện với các mốc quan trọng',
        ],
        expectedResults:
          'Kế hoạch thâm nhập thị trường quốc tế hoàn chỉnh với các dự báo tài chính, đánh giá rủi ro và lộ trình thực hiện',
        solution:
          'Phương pháp tiếp cận thâm nhập thị trường có hệ thống kết hợp nghiên cứu thị trường, lập kế hoạch hoạt động, phân tích tài chính và giảm thiểu rủi ro',
      },
    ],
    realWorldApplications: [
      'Thiết lập hoạt động sản xuất quốc tế',
      'Phát triển thị trường xuất khẩu cho sản phẩm Việt Nam',
      'Quản lý mạng lưới nhà cung cấp toàn cầu',
      'Tối ưu hóa chi phí logistics xuyên biên giới',
    ],
    caseStudies: [
      {
        title: 'VinFast Mở rộng Toàn cầu',
        organization: 'VinFast Auto',
        problem: 'Thiết lập chuỗi cung ứng xe điện quốc tế và sự hiện diện trên thị trường',
        solution:
          'Chiến lược sản xuất toàn cầu, quan hệ đối tác với nhà cung cấp quốc tế, mạng lưới logistics phức tạp, thích ứng theo từng thị trường cụ thể',
        impact:
          'Thành lập hoạt động tại 3 châu lục, xây dựng mạng lưới nhà cung cấp quốc tế hơn 200 công ty, tối ưu hóa chi phí 45%',
        innovations: [
          'Sản xuất toàn cầu linh hoạt',
          'Thực hành chuỗi cung ứng bền vững',
          'Chiến lược sản phẩm thích ứng với thị trường',
        ],
      },
    ],
    resources: [
      {
        title: 'Tài nguyên của Trung tâm Thương mại Quốc tế',
        url: 'https://www.intracen.org/',
        type: 'Resource',
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'global-marketplace-simulator'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'currency-exchange-puzzle'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'global-business-strategy-planning',
    title: 'Chiến Lược Kinh Doanh Toàn Cầu & Hoạch Định',
    description:
      'Phát triển chiến lược kinh doanh toàn cầu, phân tích thị trường quốc tế, tình báo cạnh tranh và hoạch định chiến lược để mở rộng quốc tế.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=YiZn5fpPHgY', // Global Business Strategy
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
    businessDomain: 'global-strategy',
    culturalRegions: [
      'Chiến lược thị trường mới nổi châu Á',
      'Cách tiếp cận thị trường phát triển phương Tây',
      'Cơ hội mở rộng ở Mỹ Latinh',
      'Phát triển kinh doanh ở Trung Đông',
    ],
    objectives: [
      'Phát triển chiến lược kinh doanh toàn cầu toàn diện',
      'Tiến hành phân tích cạnh tranh quốc tế',
      'Tạo kế hoạch thâm nhập và mở rộng thị trường',
      'Thực hiện đổi mới mô hình kinh doanh toàn cầu',
      'Thiết kế chiến lược hợp tác quốc tế',
    ],
    prerequisites: [
      'Nguyên tắc cơ bản về quản trị chiến lược',
      'Nhận thức về kinh doanh quốc tế',
      'Kinh nghiệm phân tích cạnh tranh',
    ],
    vietnameseBusinessContext: [
      'Chiến lược mở rộng toàn cầu của các công ty Việt Nam',
      'Đầu tư trực tiếp nước ngoài vào Việt Nam',
      'Chiến lược đặt trụ sở khu vực tại Đông Nam Á',
      'Các chương trình hỗ trợ của chính phủ để mở rộng quốc tế',
    ],
    businessApplications: [
      'Lập kế hoạch liên doanh quốc tế',
      'Chiến lược địa phương hóa sản phẩm toàn cầu',
      'Sáp nhập và mua lại xuyên biên giới',
      'Phát triển nhượng quyền thương mại quốc tế',
    ],
    globalCompetencies: [
      'Năng lực phân tích thị trường toàn cầu',
      'Kỹ năng hoạch định kịch bản chiến lược',
      'Tình báo cạnh tranh quốc tế',
      'Thiết kế mô hình kinh doanh toàn cầu',
    ],
    exercises: [
      {
        title: 'Phát triển Chiến lược Mở rộng Toàn cầu',
        description:
          'Tạo chiến lược mở rộng toàn cầu toàn diện cho một công ty công nghệ Việt Nam nhắm đến 3 thị trường quốc tế',
        difficulty: 'Nâng cao',
        materials: [
          'Khung hoạch định chiến lược',
          'Công cụ phân tích thị trường',
          'Nền tảng tình báo cạnh tranh',
          'Phần mềm lập mô hình tài chính',
        ],
        procedure: [
          'Tiến hành phân tích cơ hội thị trường toàn cầu toàn diện',
          'Thực hiện lập bản đồ bối cảnh cạnh tranh tại các thị trường mục tiêu',
          'Thiết kế chiến lược thâm nhập thị trường với thời gian và phân bổ nguồn lực',
          'Phát triển các mô hình kinh doanh thích ứng cho từng thị trường',
          'Tạo lộ trình thực hiện với các chỉ số hiệu suất chính',
        ],
        expectedResults:
          'Chiến lược mở rộng toàn cầu chi tiết với ưu tiên thị trường, chiến lược thâm nhập và kế hoạch thực hiện',
        solution:
          'Phương pháp tiếp cận mở rộng đa thị trường với việc thực hiện theo giai đoạn, phân bổ nguồn lực được điều chỉnh theo rủi ro và các chỉ số thành công có thể đo lường',
      },
    ],
    realWorldApplications: [
      'Mở rộng quy mô quốc tế của công ty công nghệ',
      'Mở rộng sản xuất sang các khu vực mới',
      'Toàn cầu hóa ngành dịch vụ',
      'Phát triển thị trường quốc tế cho thương mại điện tử',
    ],
    caseStudies: [
      {
        title: 'Chiến lược Tăng trưởng Quốc tế của FPT',
        organization: 'Tập đoàn FPT',
        problem: 'Mở rộng quy mô dịch vụ công nghệ trên toàn cầu trong khi vẫn duy trì lợi thế cạnh tranh của Việt Nam',
        solution:
          'Cung cấp dịch vụ theo từng thị trường cụ thể, quan hệ đối tác chiến lược, chương trình thích ứng văn hóa, phát triển tài năng toàn cầu',
        impact:
          'Mở rộng đến 26 quốc gia, đạt doanh thu 2,1 tỷ USD với 40% từ thị trường quốc tế, thành lập 2 trung tâm R&D toàn cầu',
        innovations: [
          'Cung cấp dịch vụ thích ứng văn hóa',
          'Lộ trình phát triển tài năng toàn cầu',
          'Trung tâm đổi mới theo từng thị trường',
        ],
      },
    ],
    resources: [
      {
        title: 'Nghiên cứu Chiến lược Toàn cầu',
        url: 'https://hbr.org/topic/global-strategy',
        type: 'Research',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'global-marketplace-simulator')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'international-negotiation-communication',
    title: 'Đàm Phán & Giao Tiếp Quốc Tế',
    description:
      'Nắm vững các chiến thuật đàm phán kinh doanh quốc tế, kỹ năng giao tiếp đa văn hóa, tương tác kinh doanh ngoại giao và xây dựng mối quan hệ.',
    duration: '190 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=iuYlGRnC7J8', // International Business Negotiation
    imageUrl: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=1200&h=600&fit=crop',
    businessDomain: 'cultural-intelligence',
    culturalRegions: [
      'Phong cách giao tiếp ngữ cảnh cao của châu Á',
      'Cách tiếp cận giao tiếp trực tiếp của phương Tây',
      'Đàm phán tập trung vào mối quan hệ của Trung Đông',
      'Tầm quan trọng của kết nối cá nhân ở Mỹ Latinh',
    ],
    objectives: [
      'Phát triển kỹ năng đàm phán quốc tế nâng cao',
      'Nắm vững các kỹ thuật giao tiếp đa văn hóa',
      'Xây dựng mối quan hệ kinh doanh quốc tế lâu dài',
      'Vượt qua các tình huống kinh doanh đa văn hóa phức tạp',
      'Tạo ra các quan hệ đối tác quốc tế cùng có lợi',
    ],
    prerequisites: [
      'Kỹ năng đàm phán cơ bản',
      'Nguyên tắc cơ bản về giao tiếp',
      'Kiến thức cơ bản về nhận thức văn hóa',
    ],
    vietnameseBusinessContext: [
      'Truyền thống xây dựng mối quan hệ kinh doanh của Việt Nam',
      'Khái niệm giữ thể diện trong đàm phán quốc tế',
      'Ra quyết định theo cấp bậc trong bối cảnh đa văn hóa',
      'Xây dựng lòng tin với các đối tác kinh doanh nước ngoài',
    ],
    businessApplications: [
      'Đàm phán hợp đồng quốc tế',
      'Phát triển thỏa thuận hợp tác',
      'Thảo luận đầu tư xuyên biên giới',
      'Quản lý quan hệ nhà cung cấp toàn cầu',
    ],
    globalCompetencies: [
      'Kỹ năng lắng nghe và đồng cảm nâng cao',
      'Kỹ thuật thích ứng văn hóa',
      'Khả năng giao tiếp ngoại giao',
      'Chiến lược duy trì mối quan hệ',
    ],
    exercises: [
      {
        title: 'Mô phỏng Đàm phán Kinh doanh Quốc tế',
        description:
          'Thực hiện một mô phỏng đàm phán kinh doanh quốc tế đa bên phức tạp liên quan đến các yếu tố văn hóa, pháp lý và kinh tế',
        difficulty: 'Nâng cao',
        materials: [
          'Kịch bản mô phỏng đàm phán',
          'Tài liệu tóm tắt về văn hóa',
          'Công cụ đánh giá giao tiếp',
          'Khung theo dõi mối quan hệ',
        ],
        procedure: [
          'Nghiên cứu nền tảng văn hóa của tất cả các bên đàm phán',
          'Chuẩn bị chiến lược đàm phán có tính đến các yếu tố văn hóa',
          'Tiến hành đàm phán nhiều phiên với vai trò văn hóa',
          'Vượt qua những hiểu lầm văn hóa và thách thức giao tiếp',
          'Đánh giá kết quả và việc duy trì mối quan hệ',
        ],
        expectedResults:
          'Kết quả đàm phán thành công với các mối quan hệ được duy trì và thể hiện sự nhạy bén về văn hóa',
        solution:
          'Phương pháp đàm phán dựa trên thông tin văn hóa ưu tiên xây dựng mối quan hệ, hiểu biết lẫn nhau và các thỏa thuận bền vững',
      },
    ],
    realWorldApplications: [
      'Đàm phán hợp tác liên doanh',
      'Thảo luận hợp đồng bán hàng quốc tế',
      'Giải quyết xung đột nhóm đa văn hóa',
      'Phát triển liên minh chiến lược toàn cầu',
    ],
    caseStudies: [
      {
        title: 'Quan hệ Đối tác Quốc tế của Tập đoàn Masan',
        organization: 'Tập đoàn Masan',
        problem:
          'Đàm phán các quan hệ đối tác quốc tế phức tạp với các công ty từ các nền văn hóa khác nhau để mở rộng thị trường',
        solution:
          'Đào tạo trí tuệ văn hóa, cố vấn địa phương, cách tiếp cận ưu tiên mối quan hệ, chiến lược đàm phán linh hoạt',
        impact:
          'Đảm bảo hơn 2 tỷ đô la trong các quan hệ đối tác quốc tế, duy trì tỷ lệ hài lòng của đối tác 95%, mở rộng đến 15 quốc gia',
        innovations: ['Khung đối tác văn hóa', 'Hệ thống quản lý mối quan hệ', 'Giao thức đàm phán thích ứng'],
      },
    ],
    resources: [
      {
        title: 'Viện Đàm phán Quốc tế',
        url: 'https://www.negotiations.com/international/',
        type: 'Training',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'cultural-localization-challenge')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'global-leadership-development',
    title: 'Phát Triển Lãnh Đạo Toàn Cầu',
    description:
      'Phát triển năng lực lãnh đạo toàn cầu, quản lý nhóm quốc tế, phong cách lãnh đạo đa văn hóa và xây dựng văn hóa tổ chức toàn cầu.',
    duration: '205 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=yENCsFO-1HQ', // Global Leadership Development
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    businessDomain: 'global-leadership',
    culturalRegions: [
      'Phong cách lãnh đạo tập thể châu Á',
      'Lãnh đạo tập trung vào cá nhân của phương Tây',
      'Nguyên tắc lãnh đạo ubuntu của châu Phi',
      'Mô hình lãnh đạo hợp tác của Bắc Âu',
    ],
    objectives: [
      'Phát triển tư duy và năng lực lãnh đạo toàn cầu',
      'Nắm vững kỹ năng lãnh đạo nhóm ảo qua các múi giờ',
      'Tạo ra văn hóa tổ chức toàn cầu hòa nhập',
      'Thực hiện các chương trình phát triển tài năng đa văn hóa',
      'Xây dựng lộ trình phát triển lãnh đạo toàn cầu bền vững',
    ],
    prerequisites: ['Kinh nghiệm lãnh đạo', 'Tiếp xúc với kinh doanh quốc tế', 'Nhận thức về sự nhạy cảm văn hóa'],
    vietnameseBusinessContext: [
      'Phát triển các nhà lãnh đạo Việt Nam cho các vai trò toàn cầu',
      'Quản lý các nhóm quốc tế từ trụ sở chính tại Việt Nam',
      'Xây dựng cầu nối giữa phong cách quản lý của Việt Nam và quốc tế',
      'Hoạch định kế nhiệm cho các công ty toàn cầu của Việt Nam',
    ],
    businessApplications: [
      'Chương trình phát triển giám đốc điều hành toàn cầu',
      'Chuẩn bị cho các nhiệm vụ quốc tế',
      'Hệ thống cố vấn đa văn hóa',
      'Hoạch định kế nhiệm lãnh đạo toàn cầu',
    ],
    globalCompetencies: [
      'Phong cách lãnh đạo thích ứng',
      'Giao tiếp toàn cầu xuất sắc',
      'Quản lý thay đổi văn hóa',
      'Phát triển tài năng quốc tế',
    ],
    exercises: [
      {
        title: 'Thiết kế Chương trình Phát triển Lãnh đạo Toàn cầu',
        description:
          'Thiết kế một chương trình phát triển lãnh đạo toàn cầu toàn diện cho một công ty đa quốc gia của Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Công cụ đánh giá lãnh đạo',
          'Khung năng lực toàn cầu',
          'Mẫu chương trình phát triển',
          'Hệ thống đo lường',
        ],
        procedure: [
          'Đánh giá năng lực và khoảng cách lãnh đạo toàn cầu hiện tại',
          'Nghiên cứu các thông lệ tốt nhất từ các công ty toàn cầu thành công',
          'Thiết kế chương trình phát triển đa giai đoạn với các thành phần văn hóa',
          'Tạo hệ thống hỗ trợ cố vấn và huấn luyện',
          'Phát triển khung đo lường hiệu quả lãnh đạo',
        ],
        expectedResults:
          'Chương trình phát triển lãnh đạo toàn cầu toàn diện với các năng lực rõ ràng, lộ trình phát triển và chỉ số thành công',
        solution:
          'Chương trình đa diện kết hợp trí tuệ văn hóa, kỹ năng lãnh đạo, phát triển tư duy toàn cầu và kinh nghiệm quốc tế thực tế',
      },
    ],
    realWorldApplications: [
      'Chuẩn bị cho các giám đốc điều hành cho các nhiệm vụ quốc tế',
      'Xây dựng năng lực quản lý toàn cầu',
      'Phát triển các nhà lãnh đạo thay đổi đa văn hóa',
      'Tạo mạng lưới lãnh đạo quốc tế',
    ],
    caseStudies: [
      {
        title: 'Sáng kiến Lãnh đạo Toàn cầu của Techcombank',
        organization: 'Ngân hàng TMCP Kỹ thương Việt Nam',
        problem:
          'Phát triển các nhà lãnh đạo ngân hàng Việt Nam có khả năng cạnh tranh trên thị trường tài chính quốc tế',
        solution:
          'Học viện lãnh đạo toàn cầu, chương trình trao đổi quốc tế, huấn luyện đa văn hóa, mạng lưới cố vấn toàn cầu',
        impact:
          'Phát triển hơn 150 nhà lãnh đạo sẵn sàng toàn cầu, mở rộng hoạt động quốc tế đến 5 quốc gia, cải thiện 60% điểm cạnh tranh toàn cầu',
        innovations: [
          'Mô hình kết hợp lãnh đạo Việt Nam-toàn cầu',
          'Chương trình xây dựng cầu nối văn hóa',
          'Mạng lưới lãnh đạo toàn cầu',
        ],
      },
    ],
    resources: [
      {
        title: 'Trung tâm Lãnh đạo Sáng tạo',
        url: 'https://www.ccl.org/articles/leading-effectively-articles/what-is-global-leadership/',
        type: 'Research',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'cultural-localization-challenge')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
];
