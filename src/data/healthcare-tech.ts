import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { EDUCATIONAL_GAMES_DATA, EducationalGame } from '@/data/educationalGames';

export interface HealthcareTechLesson extends BaseLessonData {
  healthcareCategory: 'telemedicine' | 'data-analytics' | 'medical-devices' | 'entrepreneurship' | 'mental-health';
  regulatoryCompliance: string[];
  vietnameseHealthcareContext: string[];
  techProficiencyLevel: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  targetAudience: string[];
}

export const healthcareTechLessons: HealthcareTechLesson[] = [
  {
    id: 'telemedicine-digital-health',
    title: 'Y tế từ xa & Sức khỏe số',
    description:
      'Khám phá công nghệ y tế từ xa và hệ thống sức khỏe số, từ việc thiết lập nền tảng đến cung cấp dịch vụ chăm sóc bệnh nhân trong bối cảnh Việt Nam.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=eORalU89N4Y', // The Future of Telemedicine
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop',
    healthcareCategory: 'telemedicine',
    techProficiencyLevel: 'Cơ bản',
    objectives: [
      'Hiểu hệ sinh thái của y tế từ xa trong hệ thống y tế Việt Nam',
      'Thiết lập và sử dụng các nền tảng y tế từ xa phổ biến',
      'Đảm bảo quyền riêng tư của bệnh nhân và bảo mật dữ liệu',
      'Tích hợp y tế từ xa vào quy trình lâm sàng',
      'Đo lường kết quả và ROI của các chương trình y tế từ xa',
    ],
    prerequisites: ['Kiến thức y tế cơ bản hoặc kinh nghiệm trong ngành y tế', 'Kỹ năng sử dụng máy tính và internet'],
    regulatoryCompliance: [
      'Thông tư 54/2017/TT-BYT về y tế từ xa',
      'Luật An ninh mạng 2018 về dữ liệu bệnh nhân',
      'ISO 27001 về bảo mật thông tin y tế',
      'Tuân thủ GDPR cho bệnh nhân quốc tế',
    ],
    vietnameseHealthcareContext: [
      'Thách thức trong việc tiếp cận y tế ở nông thôn',
      'Tích hợp hệ thống y tế công và tư',
      'Phạm vi bảo hiểm cho các dịch vụ y tế từ xa',
      'Thái độ văn hóa đối với chăm sóc sức khỏe từ xa',
      'Rào cản ngôn ngữ và hỗ trợ đa ngôn ngữ',
    ],
    targetAudience: [
      'Chuyên gia y tế chuyển đổi sang kỹ thuật số',
      'Quản trị viên và quản lý y tế',
      'Chuyên gia CNTT trong các tổ chức y tế',
      'Doanh nhân xây dựng giải pháp công nghệ y tế',
    ],
    exercises: [
      {
        title: 'Đánh giá & Thiết lập Nền tảng Y tế từ xa',
        description: 'So sánh và thiết lập một nền tảng y tế từ xa cho một phòng khám nhỏ',
        difficulty: 'Trung bình',
        materials: [
          'Truy cập vào các nền tảng y tế từ xa',
          'Danh sách kiểm tra tuân thủ HIPAA',
          'Mẫu phân tích chi phí-lợi ích',
        ],
        procedure: [
          'Nghiên cứu 5 nền tảng y tế từ xa phổ biến tại Việt Nam',
          'So sánh các tính năng, giá cả và tiêu chuẩn tuân thủ',
          'Thiết lập tài khoản demo và kiểm tra trải nghiệm người dùng',
          'Tạo quy trình tiếp nhận bệnh nhân',
          'Xây dựng dự báo ROI cho giai đoạn 12 tháng',
          'Trình bày các đề xuất kèm theo đánh giá bảo mật',
        ],
        expectedResults: 'Hoàn thành đề xuất nền tảng với lộ trình triển khai và danh sách kiểm tra tuân thủ',
        solution:
          'Lựa chọn nền tảng dựa trên tính dễ sử dụng, hỗ trợ tiếng Việt, hiệu quả chi phí và tuân thủ quy định',
      },
      {
        title: 'Thiết kế Hệ thống Theo dõi Bệnh nhân từ xa',
        description: 'Thiết kế hệ thống theo dõi để quản lý các bệnh mãn tính',
        difficulty: 'Nâng cao',
        materials: ['Thiết bị y tế IoT', 'Công cụ bảng điều khiển dữ liệu', 'Khung hệ thống cảnh báo'],
        procedure: [
          'Xác định các bệnh mãn tính mục tiêu (tiểu đường, tăng huyết áp)',
          'Chọn các thiết bị và cảm biến theo dõi phù hợp',
          'Thiết kế quy trình thu thập và phân tích dữ liệu',
          'Tạo ngưỡng cảnh báo và quy trình leo thang',
          'Xây dựng chiến lược tương tác và tuân thủ của bệnh nhân',
          'Kiểm tra hệ thống với dữ liệu bệnh nhân mô phỏng',
        ],
        expectedResults: 'Nguyên mẫu hệ thống RPM hoạt động với tỷ lệ tương tác của bệnh nhân >70%',
      },
    ],
    realWorldApplications: [
      'Cung cấp dịch vụ y tế ở vùng sâu vùng xa',
      'Chương trình quản lý bệnh mãn tính',
      'Tư vấn chuyên khoa giữa các tỉnh thành',
      'Hệ thống ứng phó khẩn cấp và phân loại bệnh nhân',
      'Dịch vụ hỗ trợ sức khỏe tâm thần',
    ],
    caseStudies: [
      {
        title: 'Vinmec - Triển khai Nền tảng Y tế từ xa',
        organization: 'Bệnh viện Đa khoa Quốc tế Vinmec',
        problem: 'Cần cung cấp khả năng tiếp cận y tế trong thời gian phong tỏa do COVID-19',
        solution: 'Triển khai nền tảng y tế từ xa toàn diện với hỗ trợ đa ngôn ngữ',
        impact: 'Hơn 50.000 lượt tư vấn từ xa, 95% bệnh nhân hài lòng, giảm 30% chi phí',
        innovations: ['Trình kiểm tra triệu chứng bằng AI', 'Giao đơn thuốc tích hợp', 'Tự động hóa yêu cầu bảo hiểm'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Quy định Y tế từ xa Việt Nam',
        url: 'https://moh.gov.vn/web/guest/tin-tong-hop',
        type: 'Documentation',
      },
      {
        title: 'Bộ công cụ Triển khai Y tế từ xa',
        url: 'https://www.hrsa.gov/rural-health/telehealth/toolkit',
        type: 'Toolkit',
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'e-government-portal')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'health-data-analytics-management',
    title: 'Phân Tích & Quản Lý Dữ Liệu Y Tế',
    description:
      'Làm chủ việc thu thập, xử lý và phân tích dữ liệu lớn trong y tế để cải thiện kết quả của bệnh nhân và hiệu quả hoạt động.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=7rqfXuUoJB0', // AI in Healthcare: Revolutionary Applications
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    healthcareCategory: 'data-analytics',
    techProficiencyLevel: 'Trung bình',
    objectives: [
      'Hiểu bối cảnh dữ liệu y tế và các loại dữ liệu y tế',
      'Triển khai quản trị dữ liệu và quản lý chất lượng',
      'Sử dụng các công cụ phân tích để rút ra thông tin chi tiết hữu ích',
      'Tạo các mô hình dự đoán cho sức khỏe dân số',
      'Đảm bảo tuân thủ HIPAA/GDPR trong việc xử lý dữ liệu',
    ],
    prerequisites: [
      'Kỹ năng thống kê và phân tích dữ liệu cơ bản',
      'Quen thuộc với Excel và các khái niệm cơ sở dữ liệu',
      'Hiểu biết về các quy trình y tế',
    ],
    regulatoryCompliance: [
      'Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân',
      'Quy định về bảo mật dữ liệu y tế',
      'Tiêu chuẩn quốc tế về tin học y tế',
      'Yêu cầu về dấu vết kiểm toán cho dữ liệu bệnh nhân',
    ],
    vietnameseHealthcareContext: [
      'Thách thức trong việc áp dụng hồ sơ sức khỏe điện tử',
      'Vấn đề tương tác giữa các hệ thống bệnh viện',
      'Chia sẻ dữ liệu giữa khu vực công và tư',
      'Phân tích sức khỏe dân số cho nhân khẩu học Việt Nam',
    ],
    targetAudience: [
      'Nhà phân tích dữ liệu và nhà nghiên cứu y tế',
      'Quản trị viên CNTT bệnh viện',
      'Cán bộ y tế công cộng',
      'Nhà nghiên cứu công nghệ sinh học và dược phẩm',
    ],
    exercises: [
      {
        title: 'Phát triển Bảng điều khiển Hiệu suất Bệnh viện',
        description: 'Xây dựng bảng điều khiển thời gian thực để theo dõi các chỉ số chính của bệnh viện',
        difficulty: 'Nâng cao',
        materials: ['Power BI/Tableau', 'Dữ liệu bệnh viện mẫu', 'Khung KPI'],
        procedure: [
          'Xác định các KPI y tế quan trọng (tỷ lệ tái nhập viện, thời gian nằm viện, v.v.)',
          'Kết nối với nhiều nguồn dữ liệu (EMR, thanh toán, lịch hẹn)',
          'Tạo các trực quan hóa tương tác với khả năng xem chi tiết',
          'Triển khai cảnh báo tự động cho các mẫu bất thường',
          'Thiết kế các chế độ xem tóm tắt điều hành cho ban lãnh đạo',
          'Kiểm tra bảng điều khiển với các kịch bản bệnh viện thực tế',
        ],
        expectedResults: 'Bảng điều khiển trực tiếp cho phép ra quyết định dựa trên dữ liệu với độ trễ dữ liệu <1 giờ',
      },
    ],
    realWorldApplications: [
      'Chương trình quản lý sức khỏe dân số',
      'Hệ thống hỗ trợ quyết định lâm sàng',
      'Sáng kiến cải thiện chất lượng y tế',
      'Nghiên cứu dịch tễ học và giám sát bệnh tật',
      'Nghiên cứu dược phẩm và khám phá thuốc',
    ],
    caseStudies: [
      {
        title: 'Bệnh viện FV - Phân tích Lâm sàng bằng AI',
        organization: 'Bệnh viện Franco-Vietnamese',
        problem: 'Cần giảm tỷ lệ tái nhập viện và cải thiện kết quả của bệnh nhân',
        solution: 'Triển khai các mô hình ML để dự đoán bệnh nhân có nguy cơ cao',
        impact: 'Giảm 25% tỷ lệ tái nhập viện, tiết kiệm 2 triệu đô la hàng năm',
        innovations: ['Chấm điểm rủi ro thời gian thực', 'Điều phối chăm sóc tự động', 'Mô hình nhân sự dự đoán'],
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'data-visualization')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'medical-devices-iot-applications',
    title: 'Thiết Bị Y Tế & Ứng Dụng IoT',
    description:
      'Khám phá các thiết bị y tế tiên tiến và ứng dụng IoT trong y tế, từ thiết bị đeo được đến cơ sở hạ tầng bệnh viện thông minh.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw', // IoT in Healthcare: Smart Medical Devices
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    healthcareCategory: 'medical-devices',
    techProficiencyLevel: 'Trung bình',
    objectives: [
      'Hiểu hệ sinh thái IoT trong môi trường y tế',
      'Đánh giá và lựa chọn các thiết bị IoT y tế phù hợp',
      'Thiết kế kiến trúc IoT an toàn và có khả năng mở rộng',
      'Triển khai tích hợp dữ liệu từ nhiều nguồn thiết bị',
      'Đảm bảo tuân thủ quy định cho các thiết bị y tế',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về các khái niệm IoT',
      'Kiến thức về quy trình làm việc trong y tế',
      'Năng khiếu kỹ thuật với tích hợp phần cứng/phần mềm',
    ],
    regulatoryCompliance: [
      'Yêu cầu đăng ký thiết bị y tế tại Việt Nam',
      'ISO 13485 về chất lượng thiết bị y tế',
      'IEC 62304 về phần mềm thiết bị y tế',
      'Yêu cầu an ninh mạng cho các thiết bị được kết nối',
    ],
    vietnameseHealthcareContext: [
      'Quy định nhập khẩu thiết bị y tế',
      'Năng lực sản xuất trong nước',
      'Sự sẵn sàng của cơ sở hạ tầng y tế',
      'Yêu cầu đào tạo cho nhân viên y tế',
    ],
    targetAudience: [
      'Kỹ sư y sinh',
      'Chuyên gia CNTT y tế',
      'Doanh nhân thiết bị y tế',
      'Chuyên gia kỹ thuật lâm sàng',
    ],
    exercises: [
      {
        title: 'Tích hợp IoT cho Phòng bệnh viện Thông minh',
        description: 'Thiết kế giải pháp IoT toàn diện cho một phòng bệnh viện hiện đại',
        difficulty: 'Nâng cao',
        materials: ['Danh mục cảm biến IoT', 'Công cụ kiến trúc mạng', 'Khung đánh giá bảo mật'],
        procedure: [
          'Sơ đồ hóa tất cả các yêu cầu giám sát (chỉ số sinh tồn của bệnh nhân, môi trường, thiết bị)',
          'Chọn các cảm biến và giao thức truyền thông phù hợp',
          'Thiết kế cấu trúc liên kết mạng có dự phòng',
          'Triển khai các biện pháp kiểm soát bảo mật và quyền riêng tư dữ liệu',
          'Tạo kế hoạch tích hợp với các hệ thống bệnh viện hiện có',
          'Xây dựng quy trình bảo trì và hỗ trợ',
        ],
        expectedResults: 'Kiến trúc IoT hoàn chỉnh với mục tiêu thời gian hoạt động 99,9% và tuân thủ đầy đủ HIPAA',
      },
    ],
    realWorldApplications: [
      'Hệ thống theo dõi bệnh nhân từ xa',
      'Quản lý cơ sở hạ tầng bệnh viện thông minh',
      'Ứng dụng theo dõi sức khỏe đeo được',
      'Bảo trì dự đoán thiết bị y tế',
      'Tự động hóa ứng phó khẩn cấp',
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'medical-device-designer'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'smart-home-iot-simulator-3d'),
    ]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'healthtech-entrepreneurship',
    title: 'Khởi Nghiệp Công Nghệ Y Tế',
    description:
      'Vượt qua những thách thức độc đáo của khởi nghiệp trong lĩnh vực y tế, từ tuân thủ quy định đến huy động vốn và mở rộng quy mô tại thị trường Việt Nam.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vMKNUylmanQ', // Starting a HealthTech Company
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop',
    healthcareCategory: 'entrepreneurship',
    techProficiencyLevel: 'Nâng cao',
    objectives: [
      'Hiểu hệ sinh thái khởi nghiệp y tế tại Việt Nam',
      'Vượt qua các rào cản pháp lý cho các sản phẩm công nghệ y tế',
      'Phát triển các mô hình kinh doanh bền vững trong y tế',
      'Huy động vốn từ các nhà đầu tư tập trung vào y tế',
      'Mở rộng hoạt động trong khi vẫn duy trì tuân thủ',
    ],
    prerequisites: [
      'Kinh nghiệm trong ngành y tế',
      'Kiến thức cơ bản về kinh doanh và khởi nghiệp',
      'Hiểu biết về môi trường pháp lý',
    ],
    regulatoryCompliance: [
      'Yêu cầu giấy phép kinh doanh cho các dịch vụ y tế',
      'Quy định đầu tư cho các dự án y tế nước ngoài',
      'Yêu cầu thử nghiệm lâm sàng cho các sản phẩm y tế',
      'Yêu cầu về địa phương hóa dữ liệu',
    ],
    vietnameseHealthcareContext: [
      'Cơ hội hợp tác công-tư',
      'Bối cảnh đầu tư y tế',
      'Các kênh phân phối và tiếp cận thị trường',
      'Ưu đãi sản xuất trong nước',
    ],
    targetAudience: [
      'Doanh nhân công nghệ y tế',
      'Chuyên gia y tế có hứng thú kinh doanh',
      'Nhà đầu tư trong lĩnh vực y tế',
      'Các nhóm đổi mới của doanh nghiệp',
    ],
    exercises: [
      {
        title: 'Phát triển Kế hoạch Kinh doanh Khởi nghiệp Công nghệ Y tế',
        description: 'Tạo kế hoạch kinh doanh toàn diện cho một giải pháp y tế sáng tạo',
        difficulty: 'Nâng cao',
        materials: ['Mẫu kế hoạch kinh doanh', 'Công cụ nghiên cứu thị trường', 'Phần mềm lập mô hình tài chính'],
        procedure: [
          'Xác định vấn đề y tế cụ thể và thị trường mục tiêu',
          'Tiến hành phân tích đối thủ cạnh tranh và quy mô thị trường',
          'Phát triển kiến trúc giải pháp và thông số kỹ thuật',
          'Tạo lộ trình tuân thủ quy định',
          'Xây dựng các dự báo tài chính với yêu cầu huy động vốn',
          'Chuẩn bị bài thuyết trình cho nhà đầu tư',
        ],
        expectedResults: 'Kế hoạch kinh doanh sẵn sàng để đầu tư với con đường rõ ràng đến lợi nhuận',
      },
    ],
    realWorldApplications: [
      'Phát triển liệu pháp kỹ thuật số',
      'Nền tảng thị trường y tế',
      'Công cụ chẩn đoán bằng AI',
      'Tối ưu hóa chuỗi cung ứng y tế',
      'Công nghệ tương tác với bệnh nhân',
    ],
    caseStudies: [
      {
        title: 'Docosan - Thành công của Thị trường Y tế',
        organization: 'Docosan Việt Nam',
        problem: 'Kết nối bệnh nhân với các nhà cung cấp dịch vụ y tế chất lượng',
        solution: 'Xây dựng thị trường y tế toàn diện với y tế từ xa',
        impact: 'Hơn 1 triệu người dùng, hợp tác với hơn 500 phòng khám trên toàn quốc',
        innovations: ['Trình kiểm tra triệu chứng AI', 'Tích hợp yêu cầu bảo hiểm', 'Hỗ trợ đa ngôn ngữ'],
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'investment-simulator')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
  {
    id: 'mental-health-technology',
    title: 'Công Nghệ Sức Khỏe Tâm Thần',
    description:
      'Khám phá các giải pháp sức khỏe tâm thần kỹ thuật số, từ ứng dụng trị liệu đến đánh giá sức khỏe tâm thần bằng AI, với sự nhạy cảm văn hóa cho bối cảnh Việt Nam.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=IlU-zDU6aQ0', // Digital Mental Health Solutions
    imageUrl: 'https://images.unsplash.com/photo-1607619662634-3ac55ec2d0a9?w=1200&h=600&fit=crop',
    healthcareCategory: 'mental-health',
    techProficiencyLevel: 'Trung bình',
    objectives: [
      'Hiểu bối cảnh sức khỏe tâm thần kỹ thuật số',
      'Thiết kế các can thiệp sức khỏe tâm thần nhạy cảm về văn hóa',
      'Triển khai các phương pháp trị liệu kỹ thuật số dựa trên bằng chứng',
      'Đảm bảo quyền riêng tư và an toàn trong các ứng dụng sức khỏe tâm thần',
      'Đo lường hiệu quả của các can thiệp sức khỏe tâm thần kỹ thuật số',
    ],
    prerequisites: [
      'Kiến thức cơ bản về tâm lý học hoặc sức khỏe tâm thần',
      'Hiểu biết về các nguyên tắc sức khỏe kỹ thuật số',
      'Nhận thức văn hóa về sự kỳ thị sức khỏe tâm thần ở Việt Nam',
    ],
    regulatoryCompliance: [
      'Yêu cầu cấp phép dịch vụ sức khỏe tâm thần',
      'Trách nhiệm nghề nghiệp đối với sức khỏe tâm thần kỹ thuật số',
      'Giao thức an toàn bệnh nhân cho can thiệp khủng hoảng',
      'Bảo vệ dữ liệu cho dữ liệu sức khỏe tâm thần nhạy cảm',
    ],
    vietnameseHealthcareContext: [
      'Sự kỳ thị sức khỏe tâm thần và rào cản văn hóa',
      'Sự sẵn có hạn chế của các chuyên gia sức khỏe tâm thần',
      'Cách tiếp cận chăm sóc sức khỏe tâm thần lấy gia đình làm trung tâm',
      'Tích hợp với các phương pháp chữa bệnh truyền thống',
    ],
    targetAudience: [
      'Chuyên gia sức khỏe tâm thần',
      'Nhà phát triển sản phẩm sức khỏe kỹ thuật số',
      'Quản trị viên y tế',
      'Điều phối viên chương trình chăm sóc sức khỏe',
    ],
    exercises: [
      {
        title: 'Thiết kế UX cho Ứng dụng Sức khỏe Tâm thần',
        description:
          'Thiết kế trải nghiệm người dùng cho một ứng dụng chăm sóc sức khỏe tâm thần nhắm đến người dùng Việt Nam',
        difficulty: 'Trung bình',
        materials: ['Công cụ thiết kế UX', 'Dữ liệu nghiên cứu văn hóa', 'Khung đánh giá sức khỏe tâm thần'],
        procedure: [
          'Nghiên cứu thái độ của người Việt Nam đối với công nghệ sức khỏe tâm thần',
          'Thiết kế giao diện người dùng phù hợp với văn hóa',
          'Tích hợp các kỹ thuật trị liệu dựa trên bằng chứng',
          'Triển khai các giao thức can thiệp khủng hoảng',
          'Kiểm tra với các nhóm tập trung từ các nhóm nhân khẩu học mục tiêu',
          'Lặp lại thiết kế dựa trên phản hồi của người dùng',
        ],
        expectedResults:
          'Nguyên mẫu ứng dụng sức khỏe tâm thần với tỷ lệ tương tác người dùng cao và sự chấp nhận về văn hóa',
      },
    ],
    realWorldApplications: [
      'Chương trình chăm sóc sức khỏe nhân viên',
      'Sàng lọc sức khỏe tâm thần tại trường học',
      'Hỗ trợ đường dây nóng can thiệp khủng hoảng',
      'Công cụ tăng cường trị liệu',
      'Tiếp cận sức khỏe tâm thần cộng đồng',
    ],
    caseStudies: [
      {
        title: 'Mindful - Nền tảng Sức khỏe Tâm thần Việt Nam',
        organization: 'Mindful Vietnam',
        problem: 'Hạn chế tiếp cận các dịch vụ sức khỏe tâm thần ở các khu vực thành thị',
        solution: 'Nền tảng kỹ thuật số kết nối người dùng với các nhà trị liệu được cấp phép',
        impact: 'Hơn 10.000 người dùng được phục vụ, 85% báo cáo cải thiện triệu chứng',
        innovations: ['Các mô-đun CBT bằng tiếng Việt', 'Tích hợp trị liệu gia đình', 'Đào tạo năng lực văn hóa'],
      },
    ],
    relatedGames: [EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'mental-health-app')]
      .filter((game): game is EducationalGame => !!game)
      .map((game) => ({ id: game.id, name: game.title, description: game.description })),
  },
];

export default healthcareTechLessons;
