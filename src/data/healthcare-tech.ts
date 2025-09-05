import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface HealthcareTechLesson extends BaseLessonData {
  healthcareCategory: string;
  regulatoryCompliance: string[];
  techProficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  targetAudience: string[];
  vietnamContext?: {
    title: string;
    content: string[];
  };
}

const healthcareTechLessons: HealthcareTechLesson[] = [
  {
    id: 'telemedicine-virtual-care-platforms',
    title: 'Y tế từ xa & Nền tảng Chăm sóc ảo',
    description:
      'Khám phá sự phát triển của y tế từ xa và các nền tảng chăm sóc ảo, cách chúng thay đổi việc cung cấp dịch vụ y tế tại Việt Nam và trên toàn thế giới.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=T-21bu-x_bI', // Telemedicine Explained
    imageUrl: 'https://images.unsplash.com/photo-1584820927498-f32e4642f1a2?w=1200&h=600&fit=crop',
    healthcareCategory: 'Telehealth',
    regulatoryCompliance: ['HIPAA', 'GDPR', 'Thông tư 24/2020/TT-BYT'],
    techProficiencyLevel: 'Beginner',
    targetAudience: ['Bác sĩ', 'Quản lý bệnh viện', 'Bệnh nhân'],
    objectives: [
      'Hiểu các khái niệm cốt lõi của y tế từ xa và chăm sóc ảo.',
      'Phân tích các mô hình cung cấp dịch vụ y tế từ xa khác nhau.',
      'Đánh giá các công nghệ hỗ trợ y tế từ xa.',
      'Nhận biết các thách thức về quy định và đạo đức.',
      'Khám phá các trường hợp sử dụng trong thực tế tại Việt Nam.',
    ],
    prerequisites: ['Kiến thức cơ bản về hệ thống y tế.', 'Kỹ năng sử dụng máy tính cơ bản.'],
    exercises: [
      {
        title: 'Thiết kế một buổi tư vấn y tế từ xa',
        description: 'Lập kế hoạch và mô phỏng một kịch bản tư vấn y tế từ xa cho một bệnh thông thường.',
        difficulty: 'Cơ bản',
        materials: ['Biểu mẫu kịch bản', 'Checklist công nghệ'],
        procedure: [
          'Chọn một tình trạng bệnh phổ biến (ví dụ: cảm cúm, đau đầu).',
          'Xác định các bước cần thiết cho một buổi tư vấn từ xa hiệu quả.',
          'Liệt kê các công nghệ cần thiết (ví dụ: video call, thiết bị đo tại nhà).',
          'Soạn thảo kịch bản trao đổi giữa bác sĩ và bệnh nhân.',
          'Xác định các rủi ro tiềm ẩn và cách xử lý.',
        ],
        expectedResults: 'Một kịch bản chi tiết cho buổi tư vấn y tế từ xa, sẵn sàng để diễn tập.',
      },
    ],
    realWorldApplications: [
      'Tư vấn sức khỏe ban đầu từ xa.',
      'Theo dõi bệnh nhân mắc bệnh mãn tính.',
      'Chăm sóc sức khỏe tâm thần trực tuyến.',
      'Hội chẩn từ xa giữa các chuyên gia y tế.',
      'Cung cấp dịch vụ y tế cho các vùng sâu, vùng xa.',
    ],
    vietnamContext: {
      title: 'Bối cảnh Y tế từ xa tại Việt Nam',
      content: [
        'Y tế từ xa (Telemedicine) đã được triển khai ở Việt Nam, đặc biệt tăng tốc sau đại dịch COVID-19.',
        'Bộ Y tế đã ban hành các quy định ban đầu cho việc khám chữa bệnh từ xa, tạo hành lang pháp lý cho các hoạt động này.',
        'Các bệnh viện lớn như Bệnh viện Đại học Y Hà Nội, Bệnh viện Chợ Rẫy đã triển khai các nền tảng tư vấn, khám bệnh từ xa.',
        'Thách thức bao gồm hạ tầng công nghệ không đồng đều, vấn đề bảo mật thông tin và thói quen của người dân.',
        'Các startup HealthTech Việt Nam như eDoctor, Jio Health đang tiên phong trong việc cung cấp các giải pháp sáng tạo, giúp người dân tiếp cận dịch vụ y tế thuận tiện hơn.',
      ],
    },
    caseStudies: [
      {
        title: 'Vinmec - Triển khai Nền tảng Y tế từ xa',
        organization: 'Bệnh viện Đa khoa Quốc tế Vinmec',
        problem:
          'Cần cung cấp khả năng tiếp cận y tế liên tục cho bệnh nhân, đặc biệt trong các bối cảnh hạn chế di chuyển như đại dịch COVID-19, đồng thời tối ưu hóa quy trình khám chữa bệnh.',
        solution:
          'Vinmec đã phát triển ứng dụng MyVinmec, cho phép bệnh nhân đặt lịch khám, tư vấn từ xa với bác sĩ, xem kết quả xét nghiệm và quản lý hồ sơ sức khỏe cá nhân. Hệ thống này được tích hợp sâu với bệnh án điện tử của bệnh viện.',
        impact:
          'Giảm đáng kể thời gian chờ đợi, tăng sự hài lòng của bệnh nhân và cho phép chăm sóc sức khỏe liên tục. Vinmec đã thực hiện hàng chục nghìn lượt khám từ xa, khẳng định vị thế tiên phong trong y tế số.',
        innovations: ['Ứng dụng di động cho bệnh nhân', 'Tích hợp bệnh án điện tử', 'Tư vấn video call'],
      },
      {
        title: 'eDoctor: Mang Bác sĩ đến mọi nhà',
        organization: 'eDoctor',
        problem:
          'Người dân ở các thành phố lớn thường mất nhiều thời gian và công sức để đến bệnh viện cho các vấn đề sức khỏe không quá nghiêm trọng. Người dân ở vùng sâu vùng xa lại khó tiếp cận bác sĩ chuyên khoa.',
        solution:
          'eDoctor xây dựng một nền tảng kết nối người dùng với các bác sĩ qua ứng dụng di động. Người dùng có thể nhận tư vấn sức khỏe, đặt lịch xét nghiệm tại nhà và mua thuốc trực tuyến.',
        impact:
          'eDoctor đã phục vụ hàng triệu người dùng, giúp giảm tải cho hệ thống y tế công và nâng cao ý thức chăm sóc sức khỏe chủ động. Mô hình này đặc biệt hữu ích cho việc theo dõi sức khỏe người cao tuổi và trẻ em.',
        innovations: ['Mô hình marketplace cho dịch vụ y tế', 'Dịch vụ y tế tại nhà', 'Tư vấn sức khỏe theo yêu cầu'],
      },
    ],
    careerConnect: {
      name: 'Bác sĩ Alireza Parandian',
      title: 'Giám đốc Y khoa, Jio Health Việt Nam',
      company: 'Jio Health',
      imageUrl: 'https://i.pravatar.cc/150?u=alireza-parandian',
      quote:
        'Công nghệ y tế không chỉ là về các tiện ích. Nó là về việc xây dựng một mối quan hệ tin cậy và liên tục giữa bác sĩ và bệnh nhân, vượt qua mọi rào cản về không gian và thời gian. Việt Nam là một thị trường lý tưởng để các mô hình chăm sóc sức khỏe sáng tạo phát triển.',
    },
    quizzes: [
      {
        question: 'Giải pháp chính mà ứng dụng MyVinmec cung cấp là gì?',
        options: [
          'Cung cấp thuốc miễn phí',
          'Cho phép bệnh nhân tự chẩn đoán bệnh',
          'Đặt lịch, tư vấn từ xa và quản lý hồ sơ sức khỏe',
          'Thay thế hoàn toàn việc khám trực tiếp',
        ],
        correctAnswerIndex: 2,
        explanation:
          'MyVinmec tập trung vào việc cung cấp các tiện ích số để bệnh nhân có thể chủ động quản lý sức khỏe của mình và tương tác với bệnh viện một cách thuận tiện, bao gồm đặt lịch, tư vấn từ xa và xem hồ sơ.',
      },
      {
        question: 'Đâu là một trong những thách thức lớn nhất của chuyển đổi số y tế tại Việt Nam?',
        options: [
          'Bác sĩ không muốn sử dụng công nghệ',
          'Người dân không có nhu cầu',
          'Hạ tầng công nghệ không đồng đều và vấn đề bảo mật',
          'Không có startup nào trong lĩnh vực này',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Sự chênh lệch về hạ tầng CNTT giữa các vùng miền và việc đảm bảo an toàn, bảo mật cho dữ liệu sức khỏe nhạy cảm là những rào cản lớn cần được giải quyết để chuyển đổi số y tế thành công trên diện rộng.',
      },
    ],
  },
  {
    id: 'health-data-analytics-management',
    title: 'Phân Tích & Quản Lý Dữ Liệu Y Tế',
    description:
      'Làm chủ việc thu thập, xử lý và phân tích dữ liệu lớn trong y tế để cải thiện kết quả của bệnh nhân và hiệu quả hoạt động.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    healthcareCategory: 'Health Data Analytics',
    regulatoryCompliance: ['HIPAA', 'GDPR', 'Luật An ninh mạng'],
    techProficiencyLevel: 'Advanced',
    targetAudience: ['Data Analysts', 'Hospital Management', 'Public Health Officials'],
    videoUrl: 'https://www.youtube.com/watch?v=7rqfXuUoJB0', // AI in Healthcare: Revolutionary Applications
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
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
    vietnamContext: {
      title: 'Phân tích Dữ liệu Y tế tại Việt Nam',
      content: [
        'Việt Nam đang xây dựng cơ sở dữ liệu sức khỏe quốc gia, tích hợp dữ liệu từ các bệnh viện, trung tâm y tế trên cả nước. Đây là nền tảng cho việc phân tích dữ liệu lớn.',
        'Các bệnh viện lớn như Bệnh viện Bạch Mai, Chợ Rẫy đã bắt đầu ứng dụng phân tích dữ liệu để tối ưu hóa quy trình khám chữa bệnh và quản lý nguồn lực.',
        'Thách thức là tính phân mảnh của dữ liệu, các tiêu chuẩn dữ liệu chưa đồng nhất và thiếu hụt nhân lực có kỹ năng phân tích dữ liệu y tế chuyên sâu.',
      ],
    },
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
    careerConnect: {
      name: 'Anh Trần Quốc Dũng',
      title: 'Data Scientist, FPT Software',
      company: 'FPT Software',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-quoc-dung',
      quote:
        'Dữ liệu y tế là một "mỏ vàng". Bằng cách phân tích nó, chúng tôi có thể tìm ra các mẫu hình ẩn, giúp bác sĩ chẩn đoán bệnh sớm hơn và chính xác hơn. Công việc của tôi là biến những con số khô khan thành những thông tin có thể cứu sống con người.',
    },
    quizzes: [
      {
        question: 'Một trong những lợi ích chính của phân tích dữ liệu y tế là gì?',
        options: [
          'Giảm chi phí bảo hiểm y tế',
          'Cải thiện độ chính xác của chẩn đoán và cá nhân hóa điều trị',
          'Tăng số lượng bệnh nhân đến khám',
          'Giảm thiểu vai trò của bác sĩ trong điều trị',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Phân tích dữ liệu y tế giúp nhận diện các mẫu và xu hướng trong dữ liệu sức khỏe, từ đó cải thiện độ chính xác của chẩn đoán và cho phép cá nhân hóa điều trị dựa trên đặc điểm riêng của từng bệnh nhân.',
      },
      {
        question: 'HIPAA là gì và tại sao nó quan trọng trong phân tích dữ liệu y tế?',
        options: [
          'Một loại thuốc điều trị bệnh lý tâm thần',
          'Một tiêu chuẩn bảo mật thông tin y tế của Mỹ, thường được tham chiếu quốc tế',
          'Một phần mềm phân tích dữ liệu y tế',
          'Một tổ chức phi lợi nhuận về y tế',
        ],
        correctAnswerIndex: 1,
        explanation:
          'HIPAA (Health Insurance Portability and Accountability Act) là một bộ luật của Mỹ quy định về bảo mật và quyền riêng tư của thông tin y tế. Nó quan trọng trong phân tích dữ liệu y tế vì đảm bảo rằng các thông tin nhạy cảm của bệnh nhân được bảo vệ và chỉ được sử dụng cho các mục đích hợp pháp và có đạo đức.',
      },
    ],
  },
  {
    id: 'medical-devices-iot-applications',
    title: 'Thiết Bị Y Tế & Ứng Dụng IoT',
    description:
      'Khám phá các thiết bị y tế tiên tiến và ứng dụng IoT trong y tế, từ thiết bị đeo được đến cơ sở hạ tầng bệnh viện thông minh.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    healthcareCategory: 'Medical IoT',
    regulatoryCompliance: ['FDA', 'CE Mark', 'ISO 13485'],
    techProficiencyLevel: 'Intermediate',
    targetAudience: ['Biomedical Engineers', 'Clinicians', 'Patients'],
    videoUrl: null, // IoT in Healthcare: Smart Medical Devices
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
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
    vietnamContext: {
      title: 'IoT trong Y tế tại Việt Nam',
      content: [
        'Các thiết bị đeo theo dõi sức khỏe (wearables) như đồng hồ thông minh ngày càng phổ biến tại Việt Nam, giúp người dân chủ động theo dõi các chỉ số cơ bản.',
        'Nhiều bệnh viện đang thí điểm ứng dụng IoT để quản lý giường bệnh thông minh, theo dõi vị trí thiết bị y tế và giám sát bệnh nhân từ xa trong khuôn viên bệnh viện.',
        'Vinmec và một số bệnh viện tư nhân khác đã triển khai các vòng đeo tay thông minh cho bệnh nhân để theo dõi chỉ số sinh tồn và gửi cảnh báo tự động đến y tá.',
      ],
    },
    caseStudies: [
      {
        title: 'Smart Health - Giải pháp IoT cho Bệnh viện',
        organization: 'Bệnh viện Đa khoa Quốc tế',
        problem: 'Cần nâng cao chất lượng dịch vụ và tối ưu hóa quy trình quản lý bệnh viện',
        solution:
          'Triển khai hệ thống IoT cho phép giám sát và quản lý bệnh nhân, thiết bị y tế và môi trường bệnh viện theo thời gian thực.',
        impact:
          'Cải thiện đáng kể chất lượng dịch vụ chăm sóc bệnh nhân, giảm thiểu sai sót và tối ưu hóa việc sử dụng tài nguyên của bệnh viện.',
        innovations: [
          'Giám sát bệnh nhân liên tục',
          'Cảnh báo sớm tình trạng khẩn cấp',
          'Quản lý thiết bị y tế thông minh',
        ],
      },
    ],
    careerConnect: {
      name: 'Anh Phạm Anh Tuấn',
      title: 'Kỹ sư R&D, Rạng Đông',
      company: 'Rạng Đông',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-anh-tuan',
      quote:
        'Chúng tôi đang phát triển các giải pháp chiếu sáng thông minh cho bệnh viện, không chỉ để tiết kiệm năng lượng mà còn để điều chỉnh ánh sáng phù hợp với nhịp sinh học của bệnh nhân, hỗ trợ quá trình hồi phục. Đó là sự kết hợp giữa IoT và khoa học sức khỏe.',
    },
    quizzes: [
      {
        question: 'Thiết bị IoT nào sau đây không phải là thiết bị y tế?',
        options: [
          'Máy đo huyết áp kết nối Bluetooth',
          'Đồng hồ thông minh theo dõi nhịp tim',
          'Cảm biến chuyển động trong nhà',
          'Máy trợ thính thông minh',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Cảm biến chuyển động trong nhà thường được sử dụng cho mục đích an ninh hoặc tự động hóa nhà thông minh, không phải là thiết bị y tế. Trong khi đó, máy đo huyết áp, đồng hồ thông minh theo dõi nhịp tim và máy trợ thính thông minh đều là những thiết bị y tế hoặc có liên quan đến y tế.',
      },
      {
        question: 'Một trong những thách thức lớn nhất khi triển khai thiết bị y tế IoT là gì?',
        options: [
          'Thiết bị quá rẻ và dễ tiếp cận',
          'Khó khăn trong việc tích hợp với hệ thống hiện có',
          'Không có đủ dữ liệu để phân tích',
          'Người dùng không quan tâm đến sức khỏe của họ',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Nhiều cơ sở y tế gặp khó khăn trong việc tích hợp các thiết bị IoT mới vào hệ thống quản lý và hồ sơ bệnh án hiện có của họ. Điều này đòi hỏi phải có các giải pháp công nghệ phù hợp và sự đào tạo cần thiết cho nhân viên y tế.',
      },
    ],
  },
  {
    id: 'healthtech-entrepreneurship',
    title: 'Khởi Nghiệp Công Nghệ Y Tế',
    description:
      'Vượt qua những thách thức độc đáo của khởi nghiệp trong lĩnh vực y tế, từ tuân thủ quy định đến huy động vốn và mở rộng quy mô tại thị trường Việt Nam.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    healthcareCategory: 'HealthTech Business',
    regulatoryCompliance: ['Corporate Law', 'Investment Law', 'Medical Device Regulations'],
    techProficiencyLevel: 'Expert',
    targetAudience: ['Entrepreneurs', 'Investors', 'Healthcare Leaders'],
    videoUrl: 'https://www.youtube.com/watch?v=vMKNUylmanQ', // Starting a HealthTech Company
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop',
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
    vietnamContext: {
      title: 'Hệ sinh thái Khởi nghiệp Y tế (HealthTech) tại Việt Nam',
      content: [
        'Hệ sinh thái HealthTech tại Việt Nam đang phát triển nhanh chóng, thu hút sự quan tâm của nhiều nhà đầu tư trong và ngoài nước.',
        'Các lĩnh vực nổi bật bao gồm y tế từ xa (telemedicine), nền tảng đặt lịch khám (booking platforms), và thiết bị theo dõi sức khỏe cá nhân.',
        'Thách thức cho các startup HealthTech là hành lang pháp lý chưa hoàn thiện, sự cạnh tranh từ các bệnh viện lớn và việc thay đổi thói quen của người dùng.',
        'Chính phủ đang có những chính sách hỗ trợ, và các vườn ươm khởi nghiệp cũng đang tích cực tìm kiếm và đầu tư vào các startup y tế tiềm năng.',
      ],
    },
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
    careerConnect: {
      name: 'Bà Beth Ann Lopez',
      title: 'Co-founder & CEO, Docosan',
      company: 'Docosan',
      imageUrl: 'https://i.pravatar.cc/150?u=beth-ann-lopez',
      quote:
        'Khởi nghiệp trong ngành y tế tại một thị trường năng động như Việt Nam là một hành trình đầy cảm hứng. Thách thức lớn nhất là xây dựng được lòng tin - lòng tin từ bệnh nhân, từ bác sĩ và từ các đối tác. Công nghệ chỉ là công cụ, mục tiêu cuối cùng là cải thiện cuộc sống.',
    },
    quizzes: [
      {
        question: 'Yếu tố nào sau đây không phải là lợi ích của việc khởi nghiệp trong lĩnh vực công nghệ y tế?',
        options: [
          'Đáp ứng nhu cầu ngày càng tăng về dịch vụ y tế chất lượng',
          'Có thể làm giàu nhanh chóng mà không cần đầu tư',
          'Cơ hội hợp tác với các tổ chức y tế và công nghệ hàng đầu',
          'Góp phần cải thiện sức khỏe cộng đồng và nâng cao chất lượng cuộc sống',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Mặc dù khởi nghiệp trong lĩnh vực công nghệ y tế có thể mang lại lợi nhuận cao, nhưng không có nghĩa là sẽ làm giàu nhanh chóng mà không cần đầu tư. Ngành này đòi hỏi sự đầu tư đáng kể về thời gian, tiền bạc và công sức để phát triển sản phẩm và thâm nhập thị trường.',
      },
      {
        question: 'Đâu là một trong những thách thức lớn nhất mà các startup công nghệ y tế phải đối mặt?',
        options: [
          'Thị trường không có nhu cầu về sản phẩm y tế',
          'Cạnh tranh từ các công ty công nghệ lớn và có nguồn lực mạnh',
          'Thiếu nhân lực có kỹ năng trong lĩnh vực công nghệ và y tế',
          'Tất cả các đáp án trên đều đúng',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Các startup công nghệ y tế thường phải đối mặt với nhiều thách thức, bao gồm cạnh tranh từ các công ty lớn, thiếu hụt nhân lực có kỹ năng và cần phải thuyết phục thị trường về giá trị của sản phẩm hoặc dịch vụ của họ.',
      },
    ],
  },
  {
    id: 'mental-health-technology',
    title: 'Công Nghệ Sức Khỏe Tâm Thần',
    description:
      'Khám phá các giải pháp sức khỏe tâm thần kỹ thuật số, từ ứng dụng trị liệu đến đánh giá sức khỏe tâm thần bằng AI, với sự nhạy cảm văn hóa cho bối cảnh Việt Nam.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    healthcareCategory: 'Mental Health Tech',
    regulatoryCompliance: ['HIPAA', 'Data Privacy Laws', 'Ethical Guidelines'],
    techProficiencyLevel: 'Intermediate',
    targetAudience: ['Therapists', 'Patients', 'HR Professionals'],
    videoUrl: 'https://www.youtube.com/watch?v=IlU-zDU6aQ0', // Digital Mental Health Solutions
    imageUrl: 'https://images.unsplash.com/photo-1607619662634-3ac55ec2d0a9?w=1200&h=600&fit=crop',
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
    vietnamContext: {
      title: 'Sức khỏe Tâm thần trong Kỷ nguyên số tại Việt Nam',
      content: [
        'Nhận thức về sức khỏe tâm thần tại Việt Nam đang dần được cải thiện, đặc biệt trong giới trẻ, nhưng sự kỳ thị vẫn còn tồn tại.',
        'Các ứng dụng thiền định và chăm sóc sức khỏe tinh thần như Calm, Headspace bắt đầu có người dùng tại Việt Nam, nhưng các giải pháp được địa phương hóa còn hạn chế.',
        'Các trang cộng đồng, diễn đàn online đang là nơi nhiều người trẻ tìm đến để chia sẻ các vấn đề tâm lý, cho thấy nhu cầu lớn về một không gian an toàn để thảo luận.',
        'Thách thức là làm sao để xây dựng các ứng dụng vừa hiệu quả về mặt lâm sàng, vừa phù hợp với văn hóa và giảm bớt rào cản kỳ thị.',
      ],
    },
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
    careerConnect: {
      name: 'Chuyên gia Tâm lý Đặng Khánh An',
      title: 'Co-founder, Mindful Vietnam',
      company: 'Mindful Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=dang-khanh-an',
      quote:
        'Công nghệ giúp chúng tôi phá vỡ rào cản địa lý và sự e ngại để mang dịch vụ chăm sóc sức khỏe tâm thần đến gần hơn với mọi người. Một ứng dụng không thể thay thế một nhà trị liệu, nhưng nó có thể là một người bạn đồng hành, một công cụ hỗ trợ đắc lực trên hành trình chữa lành.',
    },
    quizzes: [
      {
        question: 'Một trong những lợi ích của công nghệ sức khỏe tâm thần kỹ thuật số là gì?',
        options: [
          'Giảm chi phí điều trị sức khỏe tâm thần',
          'Tăng cường quyền tự chủ và tiếp cận dịch vụ cho bệnh nhân',
          'Thay thế hoàn toàn bác sĩ trong việc điều trị',
          'Cung cấp chẩn đoán bệnh tâm thần chính xác 100%',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Công nghệ sức khỏe tâm thần kỹ thuật số giúp bệnh nhân dễ dàng tiếp cận dịch vụ chăm sóc sức khỏe tâm thần từ xa, tăng cường quyền tự chủ trong việc quản lý sức khỏe của bản thân. Tuy nhiên, nó không thể thay thế hoàn toàn bác sĩ và không đảm bảo chẩn đoán chính xác 100%.',
      },
      {
        question:
          'Đâu là một trong những thách thức lớn nhất khi triển khai các ứng dụng sức khỏe tâm thần kỹ thuật số tại Việt Nam?',
        options: [
          'Tất cả người dân đều có điện thoại thông minh',
          'Không có sự kỳ thị nào đối với sức khỏe tâm thần',
          'Vấn đề bảo mật, quyền riêng tư và sự kỳ thị văn hóa',
          'Các ứng dụng này hoàn toàn miễn phí cho người dùng',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Vấn đề bảo mật và quyền riêng tư là rất quan trọng trong lĩnh vực sức khỏe tâm thần. Bên cạnh đó, sự kỳ thị (stigma) vẫn còn tồn tại trong văn hóa, khiến nhiều người e ngại tìm kiếm sự giúp đỡ, ngay cả qua các ứng dụng kỹ thuật số.',
      },
    ],
  },
];

export { healthcareTechLessons };
