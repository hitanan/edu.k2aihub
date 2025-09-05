import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface PsychologyBehavioralScienceLesson extends BaseLessonData {
  category: 'Tâm lý học & Khoa học hành vi';
}

export const psychologyBehavioralScienceLessons: PsychologyBehavioralScienceLesson[] = [
  {
    id: 'applied-psychology-business',
    title: 'Tâm Lý Học Ứng Dụng trong Kinh Doanh',
    description:
      'Áp dụng các nguyên tắc của tâm lý học vào chiến lược kinh doanh, lãnh đạo, động lực nhóm và hành vi tổ chức trong văn hóa công sở Việt Nam.',
    duration: '185 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=NNhk3owF7RQ', // Psychology in Business
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop',
    category: 'Tâm lý học & Khoa học hành vi',
    objectives: [
      'Áp dụng các nguyên tắc tâm lý học trong việc ra quyết định kinh doanh',
      'Hiểu các lý thuyết về động lực và ứng dụng của chúng',
      'Phát triển trí tuệ cảm xúc và kỹ năng giao tiếp',
      'Thực hiện các chiến lược thay đổi hành vi trong tổ chức',
      'Thiết kế các phương pháp quản lý dựa trên tâm lý học',
    ],
    prerequisites: ['Kiến thức kinh doanh cơ bản', 'Quan tâm đến hành vi con người và tâm lý học'],
    vietnamContext: {
      title: 'Tâm Lý Học trong Doanh Nghiệp Việt',
      content: [
        'Cấu trúc phân cấp và sự tôn trọng quyền lực ảnh hưởng đến giao tiếp và phản hồi.',
        'Văn hóa tập thể (collectivism) tác động đến động lực làm việc nhóm và mục tiêu cá nhân.',
        "Hành vi 'giữ thể diện' (face-saving) là yếu tố quan trọng trong các cuộc đàm phán và giải quyết xung đột.",
        'Sự giao thoa giữa các giá trị truyền thống và thực tiễn kinh doanh hiện đại tạo ra những động lực tâm lý độc đáo.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Đức Tài',
      title: 'Chủ tịch HĐQT',
      company: 'Thế Giới Di Động (MWG)',
      imageUrl: '/images/career/nguyen-duc-tai.jpg',
      quote:
        'Hiểu tâm lý con người là gốc rễ của lãnh đạo. Tại MWG, chúng tôi không chỉ bán sản phẩm, chúng tôi xây dựng văn hóa dựa trên sự thấu hiểu và tôn trọng nhân viên cũng như khách hàng.',
    },
    exercises: [
      {
        title: 'Đánh giá Phong cách Lãnh đạo & Kế hoạch Phát triển',
        description:
          'Phân tích phong cách lãnh đạo cá nhân và xây dựng kế hoạch cải thiện dựa trên các nguyên tắc tâm lý học.',
        difficulty: 'Trung bình',
        materials: [
          'Công cụ đánh giá phong cách lãnh đạo',
          'Bài kiểm tra tính cách',
          'Biểu mẫu phản hồi 360 độ',
          'Mẫu kế hoạch phát triển',
        ],
        procedure: [
          'Hoàn thành các bài đánh giá toàn diện về phong cách lãnh đạo',
          'Thu thập phản hồi từ đồng nghiệp và cấp dưới',
          'Xác định điểm mạnh, điểm yếu và điểm mù',
          'Nghiên cứu các nguyên tắc tâm lý liên quan đến các lĩnh vực đã xác định',
          'Tạo kế hoạch phát triển cá nhân với các mục tiêu có thể đo lường được',
        ],
        expectedResults: 'Một kế hoạch phát triển lãnh đạo toàn diện dựa trên nghiên cứu tâm lý học.',
        solution:
          'Phương pháp tiếp cận dựa trên bằng chứng kết hợp tự nhận thức, tích hợp phản hồi và phát triển kỹ năng có mục tiêu.',
      },
    ],
    quizzes: [
      {
        question: "Trong môi trường làm việc ở Việt Nam, hành vi 'giữ thể diện' (face-saving) thường dẫn đến điều gì?",
        options: [
          'Mọi người luôn nói thẳng những gì họ nghĩ',
          'Khó khăn trong việc đưa ra và tiếp nhận phản hồi tiêu cực một cách trực tiếp',
          'Khuyến khích sự cạnh tranh công khai',
          'Không ảnh hưởng đến giao tiếp',
        ],
        correctAnswerIndex: 1,
        explanation:
          "Văn hóa 'giữ thể diện' làm cho việc góp ý thẳng thắn trở nên nhạy cảm. Mọi người thường chọn cách nói giảm nói tránh hoặc đưa ra phản hồi một cách gián tiếp để tránh làm mất lòng người khác.",
      },
    ],
    realWorldApplications: [
      'Xây dựng đội ngũ hiệu suất cao trong môi trường đa văn hóa',
      'Thực hiện các sáng kiến thay đổi tổ chức',
      'Cải thiện sự gắn kết và giữ chân nhân viên',
      'Phát triển năng lực quản lý đa văn hóa',
      'Phát triển năng lực lãnh đạo',
      'Xây dựng đội nhóm và hợp tác',
      'Quản lý sự thay đổi',
      'Giải quyết xung đột',
    ],
    caseStudies: [
      {
        title: 'Chuyển đổi Lãnh đạo tại Vingroup',
        organization: 'Tập đoàn Vingroup',
        problem: 'Phát triển năng lực lãnh đạo để mở rộng nhanh chóng trên nhiều lĩnh vực kinh doanh đa dạng.',
        solution:
          'Chương trình phát triển lãnh đạo dựa trên tâm lý học, đào tạo thích ứng văn hóa, mạng lưới huấn luyện đồng cấp',
        impact: 'Cải thiện 40% điểm hiệu quả lãnh đạo, giảm 25% tỷ lệ thay đổi quản lý',
        innovations: ['Tích hợp tâm lý học văn hóa', 'Phương pháp huấn luyện hành vi', 'Hệ thống học tập đồng cấp'],
      },
    ],
    resources: [
      {
        title: 'Nghiên cứu Tâm lý học Tổ chức',
        url: 'https://www.apa.org/science/about/psa/2017/06/organizational-psychology',
        type: 'Nghiên cứu',
      },
    ],
  },
  {
    id: 'consumer-behavior-marketing-psychology',
    title: 'Hành Vi Người Tiêu Dùng & Tâm Lý Marketing',
    description:
      'Hiểu tâm lý người tiêu dùng, quy trình ra quyết định và các yếu tố kích hoạt hành vi để tạo ra các chiến lược marketing hiệu quả hơn cho thị trường Việt Nam.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: null, // Consumer Psychology
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop',
    category: 'Tâm lý học & Khoa học hành vi',
    objectives: [
      'Phân tích quy trình ra quyết định của người tiêu dùng',
      'Áp dụng các nguyên tắc tâm lý học trong các chiến dịch marketing',
      'Thiết kế các chiến lược giao tiếp thuyết phục',
      'Hiểu ảnh hưởng của văn hóa đến hành vi người tiêu dùng',
      'Thực hiện các cú hích hành vi và kiến trúc lựa chọn',
    ],
    prerequisites: ['Kiến thức marketing cơ bản', 'Hiểu biết về văn hóa tiêu dùng Việt Nam'],
    vietnamContext: {
      title: 'Hành Vi Người Tiêu Dùng Việt Nam',
      content: [
        "Ảnh hưởng mạnh mẽ của 'bằng chứng xã hội' (social proof) - quyết định mua hàng thường dựa trên đánh giá từ bạn bè, người thân và KOLs.",
        'Quyết định mua sắm các mặt hàng giá trị lớn thường có sự tham gia của cả gia đình.',
        "Sự ưa chuộng các chương trình khuyến mãi, giảm giá và 'săn sale' trên các sàn thương mại điện tử.",
        'Sự khác biệt trong hành vi tiêu dùng giữa các vùng miền (Bắc, Trung, Nam) là rất rõ rệt.',
      ],
    },
    careerConnect: {
      name: 'Lê Thị Thu Thủy',
      title: 'Tổng Giám đốc Toàn cầu',
      company: 'VinFast',
      imageUrl: '/images/career/le-thi-thu-thuy.jpg',
      quote:
        'Để chinh phục thị trường, bạn phải hiểu sâu sắc trái tim và khối óc của người tiêu dùng. Tại VinFast, chúng tôi không chỉ tạo ra những chiếc xe, chúng tôi kiến tạo niềm tự hào và khát vọng của người Việt.',
    },
    exercises: [
      {
        title: 'Thiết kế Chiến dịch dựa trên Tâm lý Người tiêu dùng',
        description:
          'Phát triển một chiến dịch marketing cho sản phẩm Việt Nam sử dụng các nguyên tắc tâm lý người tiêu dùng.',
        difficulty: 'Nâng cao',
        materials: [
          'Dữ liệu nghiên cứu người tiêu dùng',
          'Các khung lý thuyết tâm lý học',
          'Công cụ phát triển sáng tạo',
          'Nền tảng thử nghiệm',
        ],
        procedure: [
          'Tiến hành nghiên cứu và thu thập thông tin chi tiết về tâm lý người tiêu dùng',
          'Xác định các yếu tố kích hoạt và động lực tâm lý chính',
          'Phát triển ý tưởng chiến dịch dựa trên các nguyên tắc hành vi',
          'Tạo khung thử nghiệm cho hiệu quả thông điệp',
          'Thiết kế kế hoạch đo lường cho các kết quả hành vi',
        ],
        expectedResults: 'Một chiến dịch marketing dựa trên tâm lý học với các kết quả hành vi được dự đoán.',
        solution:
          'Chiến dịch kết hợp bằng chứng xã hội, sự khan hiếm, uy quyền và sự phù hợp văn hóa để thúc đẩy hành vi tiêu dùng mong muốn.',
      },
    ],
    quizzes: [
      {
        question:
          'Yếu tố tâm lý nào có ảnh hưởng lớn nhất đến quyết định mua hàng của người tiêu dùng Việt Nam trên mạng xã hội?',
        options: [
          'Phân tích logic về tính năng sản phẩm',
          'Giá rẻ nhất thị trường',
          'Đánh giá và gợi ý từ bạn bè, KOLs (Social Proof)',
          'Thiết kế bao bì sản phẩm',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Người tiêu dùng Việt có xu hướng tin tưởng vào những gợi ý từ mạng lưới xã hội của họ. Một sản phẩm được nhiều người quen biết hoặc người có ảnh hưởng sử dụng và đánh giá tốt sẽ có khả năng được mua cao hơn.',
      },
    ],
    realWorldApplications: [
      'Tối ưu hóa chuyển đổi thương mại điện tử',
      'Chiến lược tương tác trên mạng xã hội',
      'Thiết kế chương trình khách hàng thân thiết',
      'Định vị sản phẩm khi ra mắt',
      'Tối ưu hóa marketing kỹ thuật số',
      'Chiến lược định vị sản phẩm',
      'Tâm lý học thương hiệu',
      'Thiết kế trải nghiệm khách hàng',
    ],
    caseStudies: [
      {
        title: 'Các Tính năng dựa trên Tâm lý học của Shopee',
        organization: 'Shopee Việt Nam',
        problem: 'Tăng cường sự tham gia của người dùng và tần suất mua hàng thông qua thiết kế tâm lý.',
        solution: 'Các yếu tố trò chơi hóa, tích hợp bằng chứng xã hội, marketing khan hiếm, đề xuất được cá nhân hóa.',
        impact: 'Tăng 35% người dùng hoạt động hàng ngày, cải thiện 28% tỷ lệ chuyển đổi.',
        innovations: ['Cơ chế trò chơi hành vi', 'Tính năng tâm lý xã hội', 'Cá nhân hóa do AI cung cấp'],
      },
    ],
    resources: [
      {
        title: 'Phương pháp Nghiên cứu Hành vi Người tiêu dùng',
        url: 'https://www.ama.org/marketing-news/behavioral-economics-and-consumer-psychology/',
        type: 'Nghiên cứu',
      },
    ],
  },
  {
    id: 'workplace-psychology-hr',
    title: 'Tâm Lý Công Sở & Quản Lý Nhân Sự',
    description:
      'Áp dụng các nguyên tắc tâm lý học công sở trong thực hành nhân sự, sức khỏe nhân viên, quản lý hiệu suất và tạo ra văn hóa tổ chức tích cực.',
    duration: '175 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=u6XAPnuFjJc', // Workplace Psychology
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop',
    category: 'Tâm lý học & Khoa học hành vi',
    objectives: [
      'Thực hiện các kỹ thuật đánh giá tâm lý trong tuyển dụng',
      'Thiết kế hệ thống động lực dựa trên khoa học hành vi',
      'Giải quyết các vấn đề căng thẳng và sức khỏe tâm thần tại nơi làm việc',
      'Tạo môi trường làm việc an toàn về mặt tâm lý',
      'Phát triển các chính sách nhân sự dựa trên bằng chứng',
    ],
    prerequisites: ['Kiến thức cơ bản về quản lý nhân sự', 'Hiểu biết cơ bản về các nguyên tắc tâm lý học'],
    vietnamContext: {
      title: 'Tâm Lý Học trong Môi Trường Công Sở Việt',
      content: [
        "Kỳ vọng về 'cân bằng công việc-cuộc sống' ngày càng tăng, đặc biệt ở thế hệ trẻ.",
        'Sự khác biệt lớn về kỳ vọng và phong cách làm việc giữa các thế hệ (Gen X, Y, Z) trong cùng một công ty.',
        'Vẫn còn tồn tại cấu trúc quyền lực truyền thống, nhưng đang dần chuyển sang mô hình quản lý hiện đại, linh hoạt hơn.',
        "Việc đưa ra phản hồi về hiệu suất cần khéo léo để không chạm vào lòng tự ái và 'thể diện' của nhân viên.",
      ],
    },
    careerConnect: {
      name: 'Hà Thu Thanh',
      title: 'Chủ tịch HĐTV',
      company: 'Deloitte Việt Nam',
      imageUrl: '/images/career/ha-thu-thanh.jpg',
      quote:
        'Tài sản lớn nhất của một công ty dịch vụ chuyên nghiệp là con người. Đầu tư vào việc thấu hiểu và phát triển tâm lý, sức khỏe tinh thần cho nhân viên chính là đầu tư vào sự phát triển bền vững của doanh nghiệp.',
    },
    exercises: [
      {
        title: 'Thiết kế Chương trình Sức khỏe Nơi làm việc',
        description: 'Thiết kế một chương trình sức khỏe toàn diện cho nhân viên dựa trên các nguyên tắc tâm lý học.',
        difficulty: 'Trung bình',
        materials: [
          'Dữ liệu khảo sát nhân viên',
          'Công cụ đánh giá sức khỏe',
          'Mẫu thiết kế chương trình',
          'Mô hình tính toán ROI',
        ],
        procedure: [
          'Tiến hành khảo sát đánh giá sức khỏe nhân viên',
          'Xác định các yếu tố gây căng thẳng và thách thức tâm lý chính',
          'Nghiên cứu các biện pháp can thiệp sức khỏe dựa trên bằng chứng',
          'Thiết kế các thành phần chương trình với lý do tâm lý',
          'Tạo kế hoạch thực hiện và đánh giá',
        ],
        expectedResults: 'Một chương trình sức khỏe toàn diện với nền tảng tâm lý và kết quả có thể đo lường được.',
        solution:
          'Chương trình đa diện giải quyết quản lý căng thẳng, cân bằng công việc-cuộc sống, kết nối xã hội và phát triển cá nhân.',
      },
    ],
    quizzes: [
      {
        question:
          'Khi thiết kế một chương trình phúc lợi cho nhân viên tại Việt Nam, yếu tố nào cần được đặc biệt quan tâm để thu hút và giữ chân nhân tài trẻ (Gen Z)?',
        options: [
          'Chỉ tập trung vào lương và thưởng',
          'Cơ hội phát triển cá nhân, môi trường làm việc linh hoạt và sức khỏe tinh thần',
          'Các hoạt động team-building truyền thống',
          'Một chức danh công việc thật kêu',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thế hệ Z tại Việt Nam đặc biệt coi trọng sự phát triển bản thân, sự linh hoạt trong công việc (hybrid/remote) và các chương trình hỗ trợ sức khỏe tinh thần, bên cạnh các yếu tố tài chính.',
      },
    ],
    realWorldApplications: [
      'Phát triển chính sách làm việc từ xa',
      'Thiết kế lại hệ thống đánh giá hiệu suất',
      'Giải quyết xung đột trong các nhóm đa dạng',
      'Truyền thông quản lý thay đổi',
      'Tuyển dụng và lựa chọn nhân viên',
      'Hệ thống quản lý hiệu suất',
      'Chương trình sức khỏe tại nơi làm việc',
      'Tối ưu hóa động lực nhóm',
    ],
    caseStudies: [
      {
        title: 'Chuyển đổi Sự gắn kết Nhân viên tại FPT',
        organization: 'Tập đoàn FPT',
        problem: 'Cải thiện sự hài lòng của nhân viên và giảm tỷ lệ nghỉ việc trong thị trường công nghệ cạnh tranh.',
        solution:
          'Khảo sát sự gắn kết dựa trên tâm lý học, phát triển sự nghiệp cá nhân hóa, sắp xếp công việc linh hoạt, hỗ trợ sức khỏe tâm thần.',
        impact: 'Sự hài lòng của nhân viên tăng từ 72% lên 89%, tỷ lệ nghỉ việc giảm 35%.',
        innovations: [
          'Phân tích dự đoán về sự gắn kết',
          'Lộ trình phát triển cá nhân hóa',
          'Mạng lưới hỗ trợ đồng cấp',
        ],
      },
    ],
    resources: [
      {
        title: 'Tâm lý học Công nghiệp và Tổ chức',
        url: 'https://www.siop.org/business-resources',
        type: 'Chuyên nghiệp',
      },
    ],
  },
  {
    id: 'mental-health-wellness-technology',
    title: 'Công Nghệ Sức Khỏe Tâm Thần & Wellness',
    description:
      'Khám phá các giải pháp sức khỏe tâm thần kỹ thuật số, ứng dụng chăm sóc sức khỏe và các biện pháp can thiệp trị liệu hỗ trợ công nghệ với trọng tâm vào bối cảnh văn hóa Việt Nam.',
    duration: '190 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=IlU-zDU6aQ0', // Digital Mental Health Solutions
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    category: 'Tâm lý học & Khoa học hành vi',
    objectives: [
      'Hiểu các nguyên tắc can thiệp sức khỏe tâm thần kỹ thuật số',
      'Thiết kế các công nghệ chăm sóc sức khỏe phù hợp với văn hóa',
      'Thực hiện các phương pháp trị liệu dựa trên bằng chứng ở định dạng kỹ thuật số',
      'Giải quyết các cân nhắc về quyền riêng tư và đạo đức',
      'Đánh giá hiệu quả của các công cụ sức khỏe tâm thần kỹ thuật số',
    ],
    prerequisites: [
      'Kiến thức tâm lý học cơ bản',
      'Hiểu biết về các khái niệm sức khỏe kỹ thuật số',
      'Nhận thức về các vấn đề kỳ thị sức khỏe tâm thần',
    ],
    vietnamContext: {
      title: 'Sức Khỏe Tinh Thần trong Bối Cảnh Văn Hóa Việt',
      content: [
        'Sự kỳ thị (stigma) về các vấn đề sức khỏe tâm thần vẫn còn phổ biến, khiến nhiều người ngại tìm kiếm sự giúp đỡ.',
        'Xu hướng tìm đến các phương pháp chữa lành truyền thống hoặc tâm linh song song với y học hiện đại.',
        'Gia đình có vai trò lớn trong việc hỗ-trợ-hoặc-cản-trở quá trình điều trị sức khỏe tâm thần.',
        'Rào cản về ngôn ngữ và văn hóa khi áp dụng các mô hình trị liệu từ phương Tây.',
      ],
    },
    careerConnect: {
      name: 'Đặng Hoàng Giang',
      title: 'Tác giả, Nhà hoạt động xã hội',
      company: '',
      imageUrl: '/images/career/dang-hoang-giang.jpg',
      quote:
        'Nói về sức khỏe tinh thần một cách cởi mở là bước đầu tiên để phá bỏ tảng băng kỳ thị. Công nghệ có thể là một cầu nối quan trọng, giúp đưa sự hỗ trợ đến với những người đang cần nó nhất, một cách kín đáo và dễ tiếp cận.',
    },
    exercises: [
      {
        title: 'Phát triển Nguyên mẫu Ứng dụng Sức khỏe Tâm thần',
        description: 'Thiết kế và tạo nguyên mẫu một ứng dụng sức khỏe tâm thần phù hợp với người dùng Việt Nam.',
        difficulty: 'Nâng cao',
        materials: [
          'Công cụ phát triển ứng dụng',
          'Phần mềm thiết kế UX/UI',
          'Tài nguyên tâm lý học lâm sàng',
          'Dữ liệu nghiên cứu văn hóa',
        ],
        procedure: [
          'Nghiên cứu nhu cầu người dùng mục tiêu và các cân nhắc văn hóa',
          'Xác định phương pháp trị liệu và cơ sở bằng chứng',
          'Thiết kế giao diện người dùng với sự nhạy cảm văn hóa',
          'Phát triển các tính năng cốt lõi và hành trình người dùng',
          'Tạo kế hoạch thử nghiệm với các chuyên gia sức khỏe tâm thần',
        ],
        expectedResults:
          'Một nguyên mẫu ứng dụng chức năng với các tính năng sức khỏe tâm thần được điều chỉnh phù hợp với văn hóa.',
        solution:
          'Ứng dụng kết hợp các biện pháp can thiệp dựa trên bằng chứng với các giá trị văn hóa, ngôn ngữ và mô hình tìm kiếm sự giúp đỡ của người Việt.',
      },
    ],
    quizzes: [
      {
        question:
          'Một ứng dụng sức khỏe tinh thần được thiết kế cho thị trường Việt Nam nên có tính năng đặc biệt nào để vượt qua rào cản văn hóa?',
        options: [
          'Chỉ cung cấp các bài kiểm tra tâm lý theo chuẩn Mỹ',
          'Giao diện hoàn toàn bằng tiếng Anh',
          'Tính năng ẩn danh và các bài viết giải thích về sức khỏe tinh thần để giảm stigma',
          'Yêu cầu người dùng chia sẻ vấn đề của họ lên mạng xã hội',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Do sự kỳ thị còn tồn tại, tính năng ẩn danh cho phép người dùng tìm kiếm sự giúp đỡ mà không sợ bị phán xét. Việc cung cấp kiến thức giúp bình thường hóa các vấn đề sức khỏe tinh thần, từ đó khuyến khích nhiều người sử dụng hơn.',
      },
    ],
    realWorldApplications: [
      'Chương trình hỗ trợ nhân viên của công ty',
      'Dịch vụ tư vấn sinh viên đại học',
      'Sàng lọc sức khỏe tâm thần trong hệ thống y tế',
      'Các sáng kiến chăm sóc sức khỏe dựa vào cộng đồng',
      'Phát triển trị liệu kỹ thuật số',
      'Thiết kế ứng dụng chăm sóc sức khỏe',
      'Nền tảng trị liệu từ xa',
      'Hệ thống theo dõi sức khỏe tâm thần',
    ],
    caseStudies: [
      {
        title: 'Nền tảng Sức khỏe Tâm thần Elefant',
        organization: 'Elefant Việt Nam',
        problem: 'Cung cấp hỗ trợ sức khỏe tâm thần dễ tiếp cận trong văn hóa Việt Nam còn e ngại về sự kỳ thị.',
        solution:
          'Nền tảng tư vấn ẩn danh, nội dung trị liệu phù hợp văn hóa, cộng đồng hỗ trợ đồng cấp, tài nguyên giáo dục gia đình.',
        impact: 'Phục vụ hơn 50.000 người dùng, giảm 60% rào cản tiếp cận sức khỏe tâm thần.',
        innovations: ['Khung thích ứng văn hóa', 'Hệ thống hỗ trợ ẩn danh', 'Phương pháp tiếp cận bao gồm gia đình'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Sức khỏe Tâm thần Kỹ thuật số',
        url: 'https://www.who.int/publications/i/item/9789240012455',
        type: 'Tài liệu',
      },
    ],
  },
  {
    id: 'behavioral-economics-decision-science',
    title: 'Kinh Tế Học Hành Vi & Khoa Học Quyết Định',
    description:
      'Hiểu các thiên kiến nhận thức, mô hình ra quyết định và các nguyên tắc kinh tế học hành vi để cải thiện chiến lược kinh doanh và thiết kế chính sách.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=9X68dm92HVI', // Behavioral Economics
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    category: 'Tâm lý học & Khoa học hành vi',
    objectives: [
      'Xác định và phân tích các thiên kiến nhận thức phổ biến',
      'Áp dụng lý thuyết cú hích trong thiết kế sản phẩm và dịch vụ',
      'Thiết kế kiến trúc lựa chọn để ảnh hưởng đến hành vi',
      'Hiểu các biến thể văn hóa trong việc ra quyết định',
      'Thực hiện các hiểu biết hành vi trong chiến lược kinh doanh',
    ],
    prerequisites: [
      'Hiểu biết kinh tế học cơ bản',
      'Kiến thức về thống kê và phương pháp nghiên cứu',
      'Kỹ năng tư duy phản biện',
    ],
    vietnamContext: {
      title: 'Kinh Tế Học Hành Vi và Người Việt',
      content: [
        "Thiên kiến 'lạc quan' thể hiện qua xu hướng khởi nghiệp và đầu tư đôi khi khá liều lĩnh.",
        "Hiệu ứng 'bầy đàn' (herding effect) rất mạnh mẽ trên thị trường chứng khoán và bất động sản.",
        "Sự ưa thích 'tiền mặt' và tâm lý ngại vay nợ tiêu dùng vẫn còn ảnh hưởng đến các quyết định tài chính.",
        "Các 'cú hích' (nudges) từ chính phủ và doanh nghiệp ngày càng được sử dụng nhiều hơn để định hướng hành vi (ví dụ: chiến dịch không dùng tiền mặt).",
      ],
    },
    careerConnect: {
      name: 'Nguyễn Phương Lam',
      title: 'Giám đốc Phân tích',
      company: 'Dragon Capital',
      imageUrl: '/images/career/nguyen-phuong-lam.jpg',
      quote:
        'Thị trường tài chính không chỉ vận hành bằng con số, mà còn bằng tâm lý đám đông. Hiểu được các thiên kiến hành vi của nhà đầu tư Việt Nam là chìa khóa để đưa ra những quyết định đầu tư sáng suốt và quản lý rủi ro hiệu quả.',
    },
    exercises: [
      {
        title: 'Dự án Thiết kế Can thiệp Hành vi',
        description:
          'Thiết kế một biện pháp can thiệp hành vi để cải thiện hành vi tiết kiệm của thế hệ millennials Việt Nam.',
        difficulty: 'Nâng cao',
        materials: [
          'Các khung kinh tế học hành vi',
          'Công cụ thiết kế khảo sát',
          'Phần mềm phân tích thống kê',
          'Mẫu thiết kế can thiệp',
        ],
        procedure: [
          'Nghiên cứu các mô hình hành vi của dân số mục tiêu',
          'Xác định các thiên kiến nhận thức và rào cản liên quan',
          'Thiết kế can thiệp hành vi dựa trên các kỹ thuật đã được chứng minh',
          'Phát triển phương pháp thử nghiệm với các nhóm đối chứng',
          'Tạo kế hoạch đo lường cho các kết quả hành vi',
        ],
        expectedResults: 'Một thiết kế can thiệp hành vi dựa trên bằng chứng với các giả thuyết có thể kiểm chứng.',
        solution:
          'Can thiệp đa thành phần sử dụng các thiết bị cam kết, bằng chứng xã hội, ác cảm mất mát và các lựa chọn mặc định.',
      },
    ],
    quizzes: [
      {
        question:
          "Một ngân hàng muốn khuyến khích khách hàng trẻ Việt Nam tiết kiệm nhiều hơn. Theo kinh tế học hành vi, 'cú hích' nào sau đây có khả năng hiệu quả nhất?",
        options: [
          'Gửi email hàng ngày nhắc nhở họ tiết kiệm',
          'Tự động trích một khoản tiền nhỏ từ tài khoản của họ vào tài khoản tiết kiệm mỗi khi họ nhận lương (default option), nhưng cho phép hủy bỏ',
          'Phạt tiền nếu họ không tiết kiệm đủ',
          'Chỉ cung cấp các bài giảng về lợi ích của tiết kiệm',
        ],
        correctAnswerIndex: 1,
        explanation:
          "Việc đặt một lựa chọn tốt làm mặc định (default option) và tận dụng 'thiên kiến hiện tại' (present bias) là một 'cú hích' rất mạnh. Mọi người có xu hướng gắn bó với lựa chọn mặc định vì nó đòi hỏi ít nỗ lực hơn là việc chủ động thay đổi.",
      },
    ],
    realWorldApplications: [
      'Thiết kế chương trình tiết kiệm hưu trí',
      'Cải thiện tuân thủ chăm sóc sức khỏe',
      'Các chiến dịch thay đổi hành vi môi trường',
      'Phát triển chương trình giáo dục tài chính',
      'Phát triển chiến lược kinh doanh',
      'Thiết kế chính sách công',
      'Phát triển sản phẩm',
      'Đổi mới dịch vụ tài chính',
    ],
    caseStudies: [
      {
        title: 'Các tính năng Tài chính Hành vi của Momo',
        organization: 'M_Service (MoMo)',
        problem: 'Khuyến khích thói quen tài chính tốt hơn cho người dùng thanh toán di động Việt Nam.',
        solution:
          'Các tính năng thiết kế hành vi bao gồm mục tiêu tiết kiệm, phân loại chi tiêu, so sánh xã hội, đầu tư vi mô.',
        impact: 'Tăng 45% tỷ lệ tiết kiệm, cải thiện 30% điểm hiểu biết tài chính.',
        innovations: [
          'Cơ chế tiết kiệm được trò chơi hóa',
          'Thách thức tài chính xã hội',
          'Các cú hích hành vi tự động',
        ],
      },
    ],
    resources: [
      {
        title: 'Trung tâm Nghiên cứu Kinh tế học Hành vi',
        url: 'https://www.chicagobooth.edu/research/center-for-decision-research',
        type: 'Nghiên cứu',
      },
    ],
  },
];
