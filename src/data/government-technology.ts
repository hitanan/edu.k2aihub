import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

interface MainContent {
  governmentDomain: 'digital-government' | 'public-service-tech' | 'civic-engagement' | 'smart-city' | 'policy-tech';
  technologyCategory: string[];
  vietnameseGovernmentContext: string[];
  publicServiceApplications: string[];
  digitalTransformationAspects: string[];
}

export interface GovernmentTechnologyLesson extends BaseLessonData {
  mainContent: MainContent;
}

export const governmentTechnologyLessons: GovernmentTechnologyLesson[] = [
  {
    id: 'digital-government-transformation',
    title: 'Chuyển Đổi Số Chính Phủ & Chính Phủ Điện Tử',
    description:
      'Hiểu biết toàn diện về chuyển đổi số chính phủ, triển khai dịch vụ chính phủ điện tử và số hóa khu vực công trong bối cảnh chính phủ Việt Nam.',
    duration: '210 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=0Bw4Tpy0JzE', // Digital Government Transformation
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    mainContent: {
      governmentDomain: 'digital-government',
      technologyCategory: [
        'Nền tảng chính phủ điện tử',
        'Hệ thống định danh số',
        'Cổng dịch vụ công',
        'Quản lý dữ liệu chính phủ',
      ],
      vietnameseGovernmentContext: [
        'Chương trình Chuyển đổi số Quốc gia Việt Nam',
        'Các sáng kiến chuyển đổi số cấp Bộ',
        'Số hóa chính quyền cấp tỉnh và địa phương',
        'Hợp tác chính phủ số ASEAN',
      ],
      publicServiceApplications: [
        'Hệ thống đăng ký kinh doanh trực tuyến',
        'Quản lý hồ sơ sức khỏe điện tử',
        'Hệ thống khai và nộp thuế điện tử',
        'Cổng dịch vụ công dân số',
      ],
      digitalTransformationAspects: [
        'Chiến lược hiện đại hóa hệ thống cũ',
        'Thiết kế dịch vụ lấy công dân làm trung tâm',
        'Yêu cầu về khả năng tương tác dữ liệu',
        'Bảo mật số và bảo vệ quyền riêng tư',
      ],
    },
    objectives: [
      'Hiểu các nguyên tắc chuyển đổi số chính phủ',
      'Thiết kế dịch vụ công số lấy người dùng làm trung tâm',
      'Triển khai các nền tảng chính phủ điện tử an toàn và dễ tiếp cận',
      'Phát triển hệ thống định danh và xác thực số',
      'Tạo ra các mô hình cung cấp dịch vụ chính phủ tích hợp',
    ],
    prerequisites: [
      'Kiến thức cơ bản về hành chính công',
      'Kiến thức cơ bản về phát triển web',
      'Hiểu biết về các quy trình của chính phủ',
    ],
    vietnamContext: {
      title: 'Chuyển đổi số quốc gia tại Việt Nam',
      content: [
        'Việt Nam đang triển khai mạnh mẽ "Chương trình Chuyển đổi số quốc gia đến năm 2025, định hướng đến năm 2030" với 3 trụ cột: Chính phủ số, Kinh tế số và Xã hội số.',
        'Cổng Dịch vụ công Quốc gia (dichvucong.gov.vn) đã tích hợp hàng ngàn dịch vụ công trực tuyến, giúp người dân và doanh nghiệp tiết kiệm thời gian và chi phí.',
        'Hệ thống định danh và xác thực điện tử VNeID đang được triển khai rộng rãi, tích hợp nhiều giấy tờ cá nhân như Căn cước công dân, giấy phép lái xe, bảo hiểm y tế.',
        'Nhiều địa phương như Đà Nẵng, Thừa Thiên Huế, Bình Dương đang đi đầu trong việc xây dựng các mô hình thành phố thông minh và chính quyền điện tử.',
      ],
    },
    careerConnect: {
      name: 'Anh Phạm Nhật Huy',
      title: 'Chuyên viên Cao cấp, Cục Tin học hóa, Bộ Thông tin và Truyền thông',
      company: 'Bộ Thông tin và Truyền thông',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-nhat-huy',
      quote:
        'Công việc của chúng tôi là kiến tạo một chính phủ "không giấy tờ", hoạt động hiệu quả và minh bạch hơn. Thách thức lớn nhất là thay đổi tư duy và quy trình làm việc truyền thống, nhưng khi thấy người dân có thể làm thủ tục hành chính ngay trên điện thoại, đó là động lực lớn nhất.',
    },
    quizzes: [
      {
        question: 'Đâu là 3 trụ cột chính của Chương trình Chuyển đổi số quốc gia Việt Nam?',
        options: [
          'Công nghiệp số, Nông nghiệp số, Du lịch số',
          'Chính phủ số, Kinh tế số, Xã hội số',
          'An ninh mạng, Thương mại điện tử, Giáo dục trực tuyến',
          'Hạ tầng số, Nhân lực số, Thể chế số',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Chương trình Chuyển đổi số quốc gia của Việt Nam tập trung vào ba trụ cột chính là Chính phủ số, Kinh tế số và Xã hội số để tạo ra sự thay đổi toàn diện.',
      },
      {
        question: 'Ứng dụng VNeID của Bộ Công an dùng để làm gì?',
        options: [
          'Chơi game',
          'Định danh và xác thực điện tử, tích hợp giấy tờ cá nhân',
          'Mua sắm trực tuyến',
          'Đặt lịch khám bệnh',
        ],
        correctAnswerIndex: 1,
        explanation:
          'VNeID là ứng dụng định danh điện tử cấp bởi Bộ Công an, giúp công dân thực hiện các giao dịch hành chính, chứng minh thông tin cá nhân một cách tiện lợi và an toàn.',
      },
    ],
    exercises: [
      {
        title: 'Dự án Thiết kế Dịch vụ Chính phủ Điện tử',
        description:
          'Thiết kế một dịch vụ chính phủ điện tử toàn diện cho công dân Việt Nam, giải quyết một nhu cầu công cộng cụ thể.',
        difficulty: 'Nâng cao',
        materials: [
          'Công cụ lập bản đồ dịch vụ chính phủ',
          'Nền tảng thiết kế UX',
          'Khung bảo mật',
          'Hướng dẫn về khả năng tiếp cận',
        ],
        procedure: [
          'Xác định dịch vụ công mục tiêu và phân tích nhu cầu người dùng',
          'Lập bản đồ quy trình cung cấp dịch vụ hiện tại và các điểm yếu',
          'Thiết kế giao diện dịch vụ số với các tiêu chuẩn về khả năng tiếp cận',
          'Phát triển các biện pháp bảo mật và bảo vệ quyền riêng tư',
          'Tạo kế hoạch triển khai với các bên liên quan của chính phủ',
        ],
        expectedResults:
          'Thiết kế dịch vụ chính phủ điện tử toàn diện với hành trình người dùng, kiến trúc bảo mật và lộ trình triển khai.',
        solution:
          'Thiết kế dịch vụ số lấy công dân làm trung tâm, kết hợp các tiêu chuẩn của chính phủ Việt Nam, yêu cầu về khả năng tiếp cận và cung cấp đa kênh.',
      },
    ],
    realWorldApplications: [
      'Các dự án số hóa Chứng minh nhân dân/Căn cước công dân',
      'Hệ thống cấp phép và giấy phép trực tuyến',
      'Hệ thống bỏ phiếu và bầu cử kỹ thuật số',
      'Nền tảng minh bạch thông tin công cộng',
    ],
    caseStudies: [
      {
        title: 'Hệ thống Một cửa Quốc gia Việt Nam',
        organization: 'Cơ chế Một cửa Quốc gia Việt Nam',
        problem: 'Đơn giản hóa thủ tục xuất nhập khẩu và giảm sự phức tạp của bộ máy hành chính.',
        solution: 'Nền tảng kỹ thuật số tích hợp kết nối nhiều cơ quan chính phủ, xử lý tài liệu tự động, chữ ký số.',
        impact: 'Giảm thời gian xử lý từ 21 ngày xuống còn 3 ngày, tiết kiệm 500 triệu USD chi phí tuân thủ hàng năm.',
        innovations: ['Nền tảng tích hợp đa cơ quan', 'Kiểm tra tuân thủ tự động', 'Xác thực tài liệu kỹ thuật số'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Phát triển Chính phủ Số',
        url: 'https://www.oecd.org/gov/digital-government/',
        type: 'Tài liệu',
      },
    ],
  },
  {
    id: 'smart-city-technology-systems',
    title: 'Công Nghệ Smart City & Hệ Thống Đô Thị Thông Minh',
    description:
      'Khám phá các công nghệ thành phố thông minh, hệ thống IoT đô thị, quản lý thành phố dựa trên dữ liệu và các giải pháp phát triển đô thị bền vững.',
    duration: '225 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=7BqYIi4__Ws', // Smart City Technologies
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=600&fit=crop',
    mainContent: {
      governmentDomain: 'smart-city',
      technologyCategory: [
        'Mạng lưới cảm biến IoT',
        'Quản lý giao thông thông minh',
        'Giám sát môi trường',
        'Nền tảng phân tích đô thị',
      ],
      vietnameseGovernmentContext: [
        'Đề án Thành phố Thông minh của Thành phố Hồ Chí Minh',
        'Các sáng kiến phát triển thành phố thông minh của Hà Nội',
        'Các dự án thí điểm thành phố thông minh của Đà Nẵng',
        'Chiến lược phát triển thành phố thông minh quốc gia',
      ],
      publicServiceApplications: [
        'Đỗ xe thông minh và tối ưu hóa luồng giao thông',
        'Hệ thống giám sát chất lượng không khí',
        'Tối ưu hóa lộ trình quản lý chất thải',
        'Hệ thống ứng phó sự cố an toàn công cộng',
      ],
      digitalTransformationAspects: [
        'Nền tảng dữ liệu thành phố tích hợp',
        'Hệ thống ra quyết định thời gian thực',
        'Hệ sinh thái ứng dụng di động cho công dân',
        'Mô hình đối tác công-tư',
      ],
    },
    objectives: [
      'Thiết kế cơ sở hạ tầng thành phố thông minh hỗ trợ IoT',
      'Triển khai hệ thống thu thập và phân tích dữ liệu đô thị',
      'Phát triển các giải pháp giao thông và vận tải thông minh',
      'Tạo ra các hệ thống giám sát môi trường và bền vững',
      'Xây dựng nền tảng tương tác công dân cho các thành phố thông minh',
    ],
    prerequisites: [
      'Hiểu biết về hệ thống IoT',
      'Kiến thức cơ bản về phân tích dữ liệu',
      'Kiến thức cơ bản về quy hoạch đô thị',
    ],
    vietnamContext: {
      title: 'Xây dựng Thành phố Thông minh tại Việt Nam',
      content: [
        'TP. Hồ Chí Minh, Hà Nội, Đà Nẵng và Bình Dương là những địa phương tiên phong trong việc triển khai các đề án thành phố thông minh.',
        'Trung tâm Giám sát, điều hành đô thị thông minh (IOC) đã được triển khai ở nhiều tỉnh thành, tích hợp dữ liệu từ camera an ninh, cảm biến môi trường, hệ thống giao thông.',
        'Các ứng dụng cho công dân như "Đà Nẵng Smart City" hay "Hue-S" cho phép người dân phản ánh hiện trường, tra cứu thông tin quy hoạch, thanh toán dịch vụ công.',
        'Thách thức lớn nhất hiện nay là vấn đề đồng bộ hóa dữ liệu giữa các ngành và đảm bảo an ninh, an toàn thông tin cho các hệ thống IoT.',
      ],
    },
    careerConnect: {
      name: 'Chị Hoàng An Nhiên',
      title: 'Kiến trúc sư Giải pháp IoT, FPT Smart Cloud',
      company: 'FPT Smart Cloud',
      imageUrl: 'https://i.pravatar.cc/150?u=hoang-an-nhien',
      quote:
        'Chúng tôi biến những ý tưởng về thành phố thông minh thành hiện thực. Từ việc lắp đặt cảm biến đo chất lượng không khí ở Hà Nội đến việc xây dựng hệ thống điều khiển đèn giao thông thông minh ở TP.HCM, công nghệ IoT đang giúp các đô thị của Việt Nam trở nên đáng sống và an toàn hơn.',
    },
    quizzes: [
      {
        question:
          'Trung tâm IOC (Intelligent Operations Center) trong một thành phố thông minh có chức năng chính là gì?',
        options: [
          'Tổ chức sự kiện văn hóa',
          'Giám sát, điều hành và tích hợp dữ liệu của đô thị',
          'Cấp giấy phép xây dựng',
          'Quản lý các trường học',
        ],
        correctAnswerIndex: 1,
        explanation:
          'IOC là "bộ não" của thành phố thông minh, nơi tập trung dữ liệu từ nhiều nguồn khác nhau để giúp lãnh đạo thành phố giám sát, phân tích và đưa ra quyết định điều hành hiệu quả.',
      },
      {
        question: 'Ứng dụng nào sau đây KHÔNG phải là một ví dụ điển hình của thành phố thông minh?',
        options: [
          'Hệ thống đỗ xe thông minh chỉ dẫn chỗ trống',
          'Ứng dụng đặt đồ ăn nhanh',
          'Hệ thống giám sát chất lượng nước sông theo thời gian thực',
          'Ứng dụng cho phép công dân báo cáo ổ gà trên đường',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Mặc dù ứng dụng đặt đồ ăn sử dụng công nghệ, nó chủ yếu phục vụ mục đích thương mại cá nhân thay vì quản lý và tối ưu hóa hạ tầng và dịch vụ công của đô thị.',
      },
    ],
    exercises: [
      {
        title: 'Thiết kế Kiến trúc Giải pháp Thành phố Thông minh',
        description:
          'Thiết kế một giải pháp thành phố thông minh toàn diện giải quyết một thách thức đô thị cụ thể tại một thành phố của Việt Nam.',
        difficulty: 'Nâng cao',
        materials: [
          'Khung thành phố thông minh',
          'Nền tảng phát triển IoT',
          'Công cụ phân tích dữ liệu',
          'Tài nguyên quy hoạch đô thị',
        ],
        procedure: [
          'Xác định thách thức đô thị cụ thể (giao thông, môi trường, an toàn, v.v.)',
          'Thiết kế kiến trúc mạng lưới cảm biến IoT',
          'Phát triển quy trình thu thập và xử lý dữ liệu',
          'Tạo giao diện công dân và nền tảng tương tác',
          'Lập kế hoạch triển khai với các đối tác chính quyền thành phố',
        ],
        expectedResults:
          'Kiến trúc giải pháp thành phố thông minh hoàn chỉnh với các thông số kỹ thuật và kế hoạch triển khai.',
        solution:
          'Giải pháp dựa trên IoT tích hợp với phân tích dữ liệu thời gian thực, tương tác công dân và kết quả cải thiện đô thị có thể đo lường được.',
      },
    ],
    realWorldApplications: [
      'Hệ thống giao thông thông minh',
      'Quản lý lưới điện thông minh',
      'Tích hợp dịch vụ công dân số',
      'Giám sát bền vững đô thị',
    ],
    caseStudies: [
      {
        title: 'Sáng kiến Thành phố Thông minh Đà Nẵng',
        organization: 'Chính quyền Thành phố Đà Nẵng',
        problem: 'Tích hợp các dịch vụ số và cải thiện chất lượng sống đô thị cho người dân và khách du lịch.',
        solution:
          'Nền tảng thành phố thông minh thống nhất, ứng dụng di động cho công dân, giám sát môi trường bằng IoT, dịch vụ du lịch số.',
        impact: 'Cải thiện sự hài lòng của công dân 35%, tăng hiệu quả du lịch, giảm chi phí quản lý đô thị 20%.',
        innovations: [
          'Nền tảng dịch vụ thành phố tích hợp',
          'Dịch vụ số thân thiện với khách du lịch',
          'Mạng lưới IoT môi trường',
        ],
      },
    ],
    resources: [
      {
        title: 'Khung Phát triển Thành phố Thông minh',
        url: 'https://www.iso.org/committee/656906.html',
        type: 'Tiêu chuẩn',
      },
    ],
  },
  {
    id: 'civic-technology-citizen-engagement',
    title: 'Công Nghệ Dân Sự & Sự Tham Gia Của Công Dân',
    description:
      'Phát triển các giải pháp công nghệ dân sự giúp tăng cường sự tham gia của công dân, tính minh bạch của chính phủ và sự tham gia dân chủ.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw', // Civic Technology and Democracy
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    mainContent: {
      governmentDomain: 'civic-engagement',
      technologyCategory: [
        'Nền tảng tương tác công dân',
        'Công cụ minh bạch chính phủ',
        'Hệ thống tham gia kỹ thuật số',
        'Cơ chế phản hồi cộng đồng',
      ],
      vietnameseGovernmentContext: [
        'Hệ thống chính trị và quyền công dân Việt Nam',
        'Phương pháp tương tác của Ủy ban Nhân dân địa phương',
        'Cơ chế phản hồi của công dân tại Quốc hội',
        'Mối quan hệ Đảng-nhà nước trong quản trị số',
      ],
      publicServiceApplications: [
        'Hệ thống khiếu nại và góp ý của công dân',
        'Nền tảng minh bạch ngân sách',
        'Công cụ kỹ thuật số tham vấn cộng đồng',
        'Ứng dụng báo cáo vấn đề cộng đồng',
      ],
      digitalTransformationAspects: [
        'Sáng kiến dữ liệu chính phủ mở',
        'Công cụ dân chủ kỹ thuật số',
        'Truyền thông chính phủ qua mạng xã hội',
        'Nền tảng tương tác giữa công dân và chính phủ',
      ],
    },
    objectives: [
      'Thiết kế nền tảng kỹ thuật số tương tác công dân',
      'Triển khai hệ thống minh bạch chính phủ',
      'Tạo cơ chế phản hồi và báo cáo cộng đồng',
      'Phát triển các công cụ kỹ thuật số cho sự tham gia dân chủ',
      'Xây dựng lòng tin thông qua tính minh bạch được hỗ trợ bởi công nghệ',
    ],
    prerequisites: [
      'Hiểu biết về các quy trình dân chủ',
      'Nguyên tắc tương tác cộng đồng',
      'Kiến thức cơ bản về khoa học chính trị',
    ],
    vietnamContext: {
      title: 'Tương tác Công dân trong Kỷ nguyên số tại Việt Nam',
      content: [
        'Nhiều cơ quan chính phủ Việt Nam sử dụng các nền tảng mạng xã hội như Zalo và Facebook để cung cấp thông tin và tiếp nhận phản hồi từ người dân.',
        'Các ứng dụng "Phản ánh hiện trường" cho phép người dân chụp ảnh, gửi các vấn đề về trật tự đô thị, vệ sinh môi trường... đến chính quyền xử lý.',
        'Các kỳ họp Quốc hội ngày càng cởi mở hơn trong việc tiếp thu ý kiến cử tri qua các kênh trực tuyến và báo chí.',
        'Thách thức là làm sao để đảm bảo các ý kiến đóng góp được xử lý một cách thực chất và có phản hồi minh bạch, tránh hình thức.',
      ],
    },
    careerConnect: {
      name: 'Bà Nguyễn Thị Lan',
      title: 'Trưởng phòng Dân nguyện, Văn phòng Quốc hội',
      company: 'Văn phòng Quốc hội',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thi-lan',
      quote:
        'Công nghệ đã thay đổi cách chúng tôi lắng nghe người dân. Thay vì chỉ qua các buổi tiếp xúc cử tri, giờ đây chúng tôi có thể nắm bắt tâm tư, nguyện vọng của người dân hàng ngày qua các kênh số. Việc phân tích dữ liệu lớn từ các nguồn này giúp chúng tôi xác định các vấn đề xã hội nổi cộm để đưa ra nghị trường.',
    },
    quizzes: [
      {
        question: '"Công nghệ dân sự" (Civic Tech) nhằm mục đích chính là gì?',
        options: [
          'Phát triển trò chơi điện tử về chính trị',
          'Sử dụng công nghệ để tăng cường mối quan hệ giữa người dân và chính phủ',
          'Bán các sản phẩm công nghệ cho chính phủ',
          'Tấn công vào các hệ thống của chính phủ',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Civic Tech tập trung vào việc tạo ra các công cụ và nền tảng công nghệ để cải thiện sự tham gia của công dân, tăng cường tính minh bạch và hiệu quả của chính phủ.',
      },
      {
        question:
          'Tại Việt Nam, nền tảng nào thường được chính quyền địa phương sử dụng để tạo các "Official Account" nhằm tương tác với người dân?',
        options: ['Telegram', 'WhatsApp', 'Zalo', 'Signal'],
        correctAnswerIndex: 2,
        explanation:
          'Zalo là một nền tảng rất phổ biến tại Việt Nam và được nhiều cơ quan nhà nước lựa chọn để tạo tài khoản chính thức (Official Account) nhằm gửi thông báo và tương tác với công dân.',
      },
    ],
    exercises: [
      {
        title: 'Phát triển Nền tảng Tương tác Công dân',
        description:
          'Tạo một nền tảng kỹ thuật số tăng cường sự tham gia của công dân vào việc ra quyết định của chính quyền địa phương.',
        difficulty: 'Trung bình',
        materials: [
          'Khung tương tác công dân',
          'Công cụ phát triển nền tảng',
          'Phương pháp nghiên cứu người dùng',
          'Hướng dẫn hợp tác với chính phủ',
        ],
        procedure: [
          'Nghiên cứu những thách thức trong việc tương tác công dân trong bối cảnh Việt Nam',
          'Thiết kế giao diện tham gia thân thiện với người dùng',
          'Phát triển hệ thống thu thập và phân tích phản hồi',
          'Tạo cơ chế theo dõi phản hồi của chính phủ',
          'Lập kế hoạch thử nghiệm thí điểm với các đối tác chính quyền địa phương',
        ],
        expectedResults: 'Nền tảng tương tác công dân hoạt động với đề xuất giá trị rõ ràng cho công dân và chính phủ.',
        solution:
          'Nền tảng cho phép giao tiếp hai chiều giữa công dân và chính phủ với việc theo dõi minh bạch các vấn đề và phản hồi.',
      },
    ],
    realWorldApplications: [
      'Lập kế hoạch ngân sách thành phố có sự tham gia của người dân',
      'Thiết lập ưu tiên cơ sở hạ tầng cộng đồng',
      'Hệ thống báo cáo vấn đề môi trường',
      'Giám sát trách nhiệm giải trình của chính quyền địa phương',
    ],
    caseStudies: [
      {
        title: 'Hệ thống Phản hồi Công dân Thành phố Hồ Chí Minh',
        organization: 'Ủy ban Nhân dân TP.HCM',
        problem:
          'Cải thiện giao tiếp giữa công dân và chính phủ và tăng cường tính minh bạch trong quản trị địa phương.',
        solution:
          'Nền tảng phản hồi công dân đa kênh, ứng dụng di động báo cáo sự cố, theo dõi phản hồi thời gian thực, bảng điều khiển công khai.',
        impact:
          'Tăng sự tham gia của công dân 250%, cải thiện thời gian phản hồi của chính phủ 60%, nâng cao sự hài lòng của công chúng.',
        innovations: ['Kênh phản hồi tích hợp', 'Theo dõi sự cố thời gian thực', 'Bảng điều khiển minh bạch công khai'],
      },
    ],
    resources: [
      {
        title: 'Sổ tay Công nghệ Dân sự',
        url: 'https://www.codeforamerica.org/resources',
        type: 'Tài nguyên',
      },
    ],
  },
  {
    id: 'public-service-delivery-optimization',
    title: 'Tối Ưu Hóa Cung Cấp Dịch Vụ Công',
    description:
      'Tối ưu hóa việc cung cấp dịch vụ công thông qua công nghệ, cải tiến quy trình, phân tích dữ liệu và nâng cao trải nghiệm của công dân.',
    duration: '195 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=fhn6ZFh2dp4', // Public Service Innovation
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop',
    mainContent: {
      governmentDomain: 'public-service-tech',
      technologyCategory: [
        'Nền tảng cung cấp dịch vụ',
        'Công cụ tự động hóa quy trình',
        'Hệ thống phân tích hiệu suất',
        'Tích hợp dịch vụ đa kênh',
      ],
      vietnameseGovernmentContext: [
        'Các sáng kiến cải cách thủ tục hành chính',
        'Phát triển trung tâm dịch vụ một cửa',
        'Yêu cầu hợp tác liên ngành',
        'Các nhiệm vụ cải thiện chất lượng dịch vụ',
      ],
      publicServiceApplications: [
        'Hệ thống cấp phép kinh doanh tích hợp',
        'Nền tảng điều phối dịch vụ chăm sóc sức khỏe',
        'Hệ thống hành chính giáo dục',
        'Cung cấp phúc lợi dịch vụ xã hội',
      ],
      digitalTransformationAspects: [
        'Chiến lược tích hợp hệ thống cũ',
        'Chia sẻ dữ liệu giữa các cơ quan',
        'Quản lý danh tính công dân',
        'Giám sát hiệu suất dịch vụ',
      ],
    },
    objectives: [
      'Phân tích và cải thiện quy trình cung cấp dịch vụ công',
      'Triển khai tự động hóa trong các dịch vụ chính phủ thông thường',
      'Thiết kế hệ thống cung cấp dịch vụ đa kênh',
      'Phát triển khả năng đo lường và phân tích hiệu suất',
      'Tạo ra trải nghiệm dịch vụ công dân liền mạch',
    ],
    prerequisites: [
      'Kiến thức về lập bản đồ quy trình',
      'Kiến thức cơ bản về thiết kế trải nghiệm khách hàng',
      'Hiểu biết về dịch vụ chính phủ',
    ],
    vietnamContext: {
      title: 'Cải cách Thủ tục hành chính ở Việt Nam',
      content: [
        'Mô hình "Một cửa", "Một cửa liên thông" được triển khai rộng rãi tại các Trung tâm Hành chính công cấp tỉnh/thành phố, giúp giảm bớt việc người dân phải đi lại nhiều nơi.',
        'Đề án 06 của Chính phủ về "Phát triển ứng dụng dữ liệu về dân cư, định danh và xác thực điện tử phục vụ chuyển đổi số quốc gia" là nòng cốt để đơn giản hóa nhiều thủ tục.',
        'Việc trả kết quả giải quyết thủ tục hành chính qua dịch vụ bưu chính công ích (VNPost) giúp người dân không cần phải quay lại cơ quan nhà nước.',
        'Mức độ hài lòng của người dân và doanh nghiệp là một trong những chỉ số quan trọng để đánh giá hiệu quả cải cách của các bộ, ngành, địa phương.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần Bích Ngọc',
      title: 'Chuyên viên, Tổ công tác Đề án 06, Văn phòng Chính phủ',
      company: 'Văn phòng Chính phủ',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-bich-ngoc',
      quote:
        'Mục tiêu của chúng tôi là cắt giảm tối đa các giấy tờ, thủ tục không cần thiết. Bằng cách kết nối các cơ sở dữ liệu quốc gia, chúng tôi hướng tới việc người dân chỉ cần cung cấp thông tin một lần cho nhà nước. Mỗi một thủ tục được đơn giản hóa là một niềm vui cho cả người dân và chính chúng tôi.',
    },
    quizzes: [
      {
        question: 'Mô hình "Một cửa liên thông" có nghĩa là gì?',
        options: [
          'Chỉ có một cơ quan nhà nước duy nhất',
          'Người dân chỉ cần đến một nơi để nộp hồ sơ và nhận kết quả cho một nhóm các thủ tục liên quan đến nhiều cơ quan',
          'Tất cả dịch vụ công đều có thể thực hiện qua một cửa sổ trên website',
          'Chỉ làm việc một ngày trong tuần',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Một cửa liên thông là cơ chế giải quyết công việc của cá nhân, tổ chức thuộc trách nhiệm, thẩm quyền của nhiều cơ quan hành chính nhà nước cùng cấp hoặc giữa các cơ quan hành chính nhà nước các cấp nhưng có liên quan với nhau, theo đó người dân, doanh nghiệp chỉ cần đến một đầu mối để nộp hồ sơ và nhận kết quả.',
      },
      {
        question: 'Đề án 06 của Chính phủ Việt Nam tập trung vào việc gì?',
        options: [
          'Xây dựng thêm đường cao tốc',
          'Phát triển du lịch',
          'Phát triển ứng dụng dữ liệu dân cư và định danh điện tử',
          'Cải cách giáo dục phổ thông',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đề án 06 là một chương trình lớn nhằm tận dụng Cơ sở dữ liệu quốc gia về dân cư để đơn giản hóa thủ tục hành chính, phát triển kinh tế - xã hội và phục vụ công dân số.',
      },
    ],
    exercises: [
      {
        title: 'Dự án Tái thiết kế Dịch vụ Công',
        description:
          'Tái thiết kế một dịch vụ công phức tạp nhiều bước để cải thiện hiệu quả và sự hài lòng của công dân.',
        difficulty: 'Nâng cao',
        materials: [
          'Công cụ thiết kế dịch vụ',
          'Phần mềm lập bản đồ quy trình',
          'Nền tảng phân tích',
          'Phương pháp kiểm thử người dùng',
        ],
        procedure: [
          'Lập bản đồ quy trình cung cấp dịch vụ hiện tại và xác định các điểm yếu',
          'Thực hiện phân tích hành trình của công dân và thu thập phản hồi',
          'Thiết kế mô hình cung cấp dịch vụ cải tiến với tích hợp công nghệ',
          'Phát triển kế hoạch triển khai với các chiến lược quản lý thay đổi',
          'Tạo khung đo lường để cải thiện dịch vụ',
        ],
        expectedResults:
          'Dịch vụ công được tái thiết kế với những cải tiến rõ rệt về hiệu quả, sự hài lòng của công dân và giảm chi phí.',
        solution:
          'Quy trình dịch vụ được sắp xếp hợp lý với tự động hóa kỹ thuật số, giảm số bước và tăng cường giao tiếp với công dân',
      },
    ],
    realWorldApplications: [
      'Xử lý đơn xin trợ cấp xã hội',
      'Cấp giấy chứng nhận quyền sử dụng đất',
      'Xử lý yêu cầu bảo hiểm y tế',
      'Hệ thống tuyển sinh giáo dục',
    ],
    caseStudies: [
      {
        title: 'Chuyển đổi số Bảo hiểm Xã hội Việt Nam',
        organization: 'Bảo hiểm Xã hội Việt Nam',
        problem: 'Hiện đại hóa các dịch vụ bảo hiểm xã hội và giảm thời gian xử lý cho hàng triệu người hưởng lợi.',
        solution:
          'Tích hợp nền tảng kỹ thuật số, tính toán phúc lợi tự động, truy cập dịch vụ di động, chia sẻ dữ liệu liên ngành',
        impact:
          'Giảm thời gian xử lý 70%, cải thiện sự hài lòng về dịch vụ lên 95%, loại bỏ việc nhập dữ liệu trùng lặp',
        innovations: ['Xử lý phúc lợi tự động', 'Thiết kế dịch vụ ưu tiên di động', 'Nền tảng tích hợp liên ngành'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Đổi mới Dịch vụ Công',
        url: 'https://www.oecd.org/gov/innovative-government/',
        type: 'Tài liệu',
      },
    ],
  },
  {
    id: 'government-data-analytics-policy',
    title: 'Phân Tích Dữ Liệu Chính Phủ & Chính Sách Dựa Trên Bằng Chứng',
    description:
      'Áp dụng phân tích dữ liệu, hoạch định chính sách dựa trên bằng chứng, mô hình hóa dự báo và quản trị dựa trên dữ liệu trong bối cảnh chính phủ Việt Nam.',
    duration: '205 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw', // Government Data Analytics
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
    mainContent: {
      governmentDomain: 'policy-tech',
      technologyCategory: [
        'Nền tảng dữ liệu chính phủ',
        'Công cụ phân tích chính sách',
        'Hệ thống mô hình hóa dự báo',
        'Nền tảng quản lý bằng chứng',
      ],
      vietnameseGovernmentContext: [
        'Hiện đại hóa hệ thống thống kê quốc gia',
        'Nhu cầu dữ liệu cho kế hoạch phát triển kinh tế',
        'Yêu cầu giám sát chính sách xã hội',
        'Ứng dụng phân tích phát triển vùng',
      ],
      publicServiceApplications: [
        'Hệ thống dự báo và kế hoạch kinh tế',
        'Giám sát hiệu quả chương trình xã hội',
        'Phân tích hiệu suất hệ thống chăm sóc sức khỏe',
        'Mô hình dự đoán kết quả giáo dục',
      ],
      digitalTransformationAspects: [
        'Triển khai sáng kiến dữ liệu mở',
        'Tích hợp dữ liệu liên ngành',
        'Bảng điều khiển giám sát chính sách thời gian thực',
        'Bảo vệ quyền riêng tư dữ liệu công dân',
      ],
    },
    objectives: [
      'Triển khai hệ thống thu thập và quản lý dữ liệu chính phủ',
      'Phát triển các mô hình dự báo cho hoạch định chính sách',
      'Tạo ra các quy trình phát triển chính sách dựa trên bằng chứng',
      'Thiết kế trực quan hóa dữ liệu cho các nhà ra quyết định của chính phủ',
      'Xây dựng các nền tảng phân tích tích hợp cho những hiểu biết sâu sắc đa ngành',
    ],
    prerequisites: [
      'Kiến thức cơ bản về phân tích dữ liệu',
      'Thống kê và phương pháp nghiên cứu',
      'Kiến thức cơ bản về phát triển chính sách',
    ],
    vietnamContext: {
      title: 'Ra quyết định dựa trên dữ liệu tại Việt Nam',
      content: [
        'Tổng cục Thống kê đang trong quá trình hiện đại hóa, chuyển từ khảo sát giấy sang thu thập dữ liệu điện tử (CAPI) và phân tích dữ liệu lớn.',
        'Dữ liệu từ các ngành như thuế, hải quan, bảo hiểm xã hội đang được tích hợp để cung cấp bức tranh toàn cảnh hơn về kinh tế - xã hội.',
        'Trong các đợt dịch COVID-19, việc phân tích dữ liệu di chuyển dân cư, ca nhiễm, tiêm chủng đã đóng vai trò quan trọng trong việc đưa ra các quyết định phòng chống dịch.',
        'Một thách thức lớn là chất lượng và tính nhất quán của dữ liệu từ các bộ ngành, địa phương khác nhau, cũng như năng lực phân tích dữ liệu của đội ngũ cán bộ.',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Vũ Thành Trung',
      title: 'Nhà nghiên cứu, Viện Chiến lược và Chính sách, Bộ Công Thương',
      company: 'Bộ Công Thương',
      imageUrl: 'https://i.pravatar.cc/150?u=vu-thanh-trung',
      quote:
        'Trước đây, chúng tôi làm chính sách dựa nhiều vào kinh nghiệm và các báo cáo định tính. Giờ đây, với dữ liệu, chúng tôi có thể xây dựng các mô hình dự báo tác động của một chính sách thương mại mới, hay phân tích xem ngành hàng nào có tiềm năng xuất khẩu lớn nhất. Dữ liệu là "ngọn hải đăng" giúp chúng tôi hoạch định chính sách một cách khách quan và hiệu quả hơn.',
    },
    quizzes: [
      {
        question: 'Hoạch định chính sách dựa trên bằng chứng (evidence-based policy) có nghĩa là gì?',
        options: [
          'Chỉ làm theo các chính sách đã có',
          'Ra quyết định chính sách dựa trên phân tích dữ liệu và thông tin khách quan',
          'Làm chính sách theo ý kiến của số đông trên mạng xã hội',
          'Sao chép chính sách của nước khác',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hoạch định chính sách dựa trên bằng chứng là một phương pháp tiếp cận nhấn mạnh việc sử dụng rigourous evidence (bằng chứng khắt khe) và phân tích dữ liệu để đưa ra các quyết định chính sách, thay vì chỉ dựa trên ý kiến chủ quan hoặc kinh nghiệm.',
      },
      {
        question:
          'Tại sao việc tích hợp dữ liệu từ nhiều ngành (thuế, hải quan, y tế...) lại quan trọng cho chính phủ?',
        options: [
          'Để tạo ra nhiều công việc hơn cho chuyên gia IT',
          'Để có một cái nhìn toàn diện, đa chiều về một vấn đề xã hội hoặc kinh tế',
          'Để làm cho hệ thống trở nên phức tạp hơn',
          'Để bán dữ liệu cho các công ty quảng cáo',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Dữ liệu từ một ngành riêng lẻ chỉ cung cấp một góc nhìn hạn hẹp. Bằng cách tích hợp dữ liệu từ nhiều nguồn, các nhà hoạch định chính sách có thể phát hiện ra các mối liên hệ, các xu hướng ẩn và hiểu rõ hơn về bức tranh toàn cảnh, từ đó đưa ra quyết định chính xác hơn.',
      },
    ],
    exercises: [
      {
        title: 'Hệ thống Phân tích Chính sách Dựa trên Bằng chứng',
        description:
          'Phát triển một hệ thống phân tích hỗ trợ việc hoạch định chính sách dựa trên bằng chứng cho một thách thức cụ thể của chính phủ Việt Nam.',
        difficulty: 'Nâng cao',
        materials: [
          'Nền tảng phân tích',
          'Phần mềm thống kê',
          'Công cụ trực quan hóa dữ liệu',
          'Cơ sở dữ liệu nghiên cứu chính sách',
        ],
        procedure: [
          'Xác định lĩnh vực chính sách cần cải thiện dựa trên bằng chứng',
          'Thiết kế chiến lược thu thập và tích hợp dữ liệu',
          'Phát triển các mô hình phân tích và khả năng dự báo',
          'Tạo bảng điều khiển cho nhà hoạch định chính sách với những hiểu biết có thể hành động',
          'Lập kế hoạch triển khai với các nhà ra quyết định của chính phủ',
        ],
        expectedResults:
          'Hệ thống phân tích chính sách toàn diện với khả năng dự báo và các công cụ hỗ trợ quyết định.',
        solution:
          'Nền tảng tích hợp kết hợp nhiều nguồn dữ liệu, phân tích nâng cao và giao diện thân thiện với người dùng cho các nhà hoạch định chính sách',
      },
    ],
    realWorldApplications: [
      'Mô hình tối ưu hóa phân bổ ngân sách',
      'Đánh giá tác động chương trình xã hội',
      'Dự báo phát triển kinh tế',
      'Phân tích xu hướng sức khỏe cộng đồng',
    ],
    caseStudies: [
      {
        title: 'Hiện đại hóa Dữ liệu của Tổng cục Thống kê Việt Nam',
        organization: 'Tổng cục Thống kê Việt Nam',
        problem:
          'Hiện đại hóa hệ thống thống kê quốc gia để cung cấp những hiểu biết thời gian thực cho kế hoạch của chính phủ.',
        solution:
          'Nền tảng dữ liệu tích hợp, hệ thống thu thập dữ liệu tự động, khả năng phân tích dự báo, bảng điều khiển cho nhà hoạch định chính sách.',
        impact:
          'Giảm thời gian xử lý dữ liệu 80%, cải thiện thời gian phản ứng chính sách, nâng cao độ chính xác dự báo kinh tế 40%.',
        innovations: [
          'Giám sát thống kê thời gian thực',
          'Mô hình hóa chính sách dự báo',
          'Hệ thống chất lượng dữ liệu tự động',
        ],
      },
    ],
    resources: [
      {
        title: 'Thực hành Tốt nhất về Phân tích Chính phủ',
        url: 'https://www.data.gov/resources/',
        type: 'Tài nguyên',
      },
    ],
  },
];
