import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface MentalHealthLessonType extends BaseLessonData {
  technologies?: string[];
  wellnessImpact?: string;
}

export const mentalHealthLessons: MentalHealthLessonType[] = [
  {
    id: 'digital-wellness-fundamentals',
    title: 'Bài 1: Sức khỏe Kỹ thuật số & Công nghệ Sức khỏe Tâm thần',
    description:
      'Hiểu tác động của công nghệ lên sức khỏe tâm thần. Học cách sử dụng ứng dụng, thiết bị đeo và công cụ kỹ thuật số để cải thiện sức khỏe và quản lý căng thẳng.',
    videoUrl: 'https://www.youtube.com/watch?v=gmLb9SJHlgU',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '120 phút',
    wellnessImpact: 'High',
    technologies: ['Wearable Devices', 'Meditation Apps', 'Mood Trackers', 'Digital Detox Tools'],
    objectives: [
      'Hiểu mối quan hệ giữa việc sử dụng công nghệ và sức khỏe tâm thần',
      'Thực hiện các chiến lược cai nghiện kỹ thuật số và thói quen công nghệ lành mạnh',
      'Sử dụng hiệu quả các ứng dụng sức khỏe tâm thần để thiền và theo dõi tâm trạng',
      'Thiết lập hệ thống theo dõi sức khỏe với thiết bị đeo và điện thoại thông minh',
      'Tạo kế hoạch sức khỏe kỹ thuật số cá nhân hóa cho sức khỏe tâm thần lâu dài',
    ],
    prerequisites: [
      'Điện thoại thông minh hoặc máy tính bảng có khả năng cài đặt ứng dụng',
      'Hiểu biết cơ bản về các khái niệm sức khỏe tâm thần',
      'Sẵn sàng theo dõi dữ liệu và thói quen cá nhân',
      'Truy cập internet để tải ứng dụng và tài nguyên trực tuyến',
    ],
    exercises: [
      {
        title: 'Xây dựng Hệ thống Sức khỏe Kỹ thuật số Cá nhân',
        description:
          'Tạo một hệ thống can thiệp và theo dõi sức khỏe kỹ thuật số toàn diện bằng cách sử dụng ứng dụng, thiết bị đeo và theo dõi hành vi.',
        difficulty: 'Trung bình',
        procedure: [
          'Đánh giá thói quen kỹ thuật số hiện tại và xác định các vấn đề.',
          'Chọn và cài đặt các ứng dụng phù hợp (thiền, theo dõi tâm trạng).',
          'Kết nối thiết bị đeo (nếu có) để theo dõi giấc ngủ, nhịp tim.',
          'Thiết lập các giới hạn thời gian sử dụng mạng xã hội.',
          'Lên lịch cho các khoảng thời gian "cai nghiện kỹ thuật số" hàng tuần.',
          'Ghi lại và phân tích dữ liệu hàng tuần để xem xét tiến độ.',
        ],
        expectedResults:
          'Một hệ thống sức khỏe kỹ thuật số được cá nhân hóa giúp theo dõi, can thiệp và tối ưu hóa sức khỏe tâm thần một cách chủ động.',
        solution:
          'Giải pháp là một kế hoạch chi tiết kết hợp công nghệ (ứng dụng, thiết bị đeo) và thay đổi hành vi (giới hạn thời gian, cai nghiện kỹ thuật số) để tạo ra một lối sống kỹ thuật số cân bằng và lành mạnh.',
      },
    ],
    realWorldApplications: [
      'Quản lý và phòng ngừa sức khỏe tâm thần cá nhân',
      'Các chương trình chăm sóc sức khỏe cho nhân viên trong công ty',
      'Tích hợp theo dõi bệnh nhân trong lĩnh vực chăm sóc sức khỏe',
      'Hỗ trợ sức khỏe tâm thần tại các cơ sở giáo dục',
      'Phát triển chương trình sức khỏe tâm thần cộng đồng',
    ],
    resources: [
      {
        title: 'Headspace: Meditation & Sleep',
        url: 'https://www.headspace.com',
        type: 'Tool',
      },
      {
        title: 'BetterHelp: Online Therapy',
        url: 'https://www.betterhelp.com',
        type: 'Tool',
      },
    ],
    caseStudies: [
      {
        title: 'Phục hồi sau Burnout của một Nhân viên Công nghệ',
        organization: 'Một công ty công nghệ',
        problem:
          'Burnout nghiêm trọng do làm việc 70+ giờ/tuần, mất ngủ kinh niên, các cơn lo âu và mất kết nối xã hội.',
        solution:
          'Thực hiện một hệ thống sức khỏe kỹ thuật số toàn diện: theo dõi HRV để kiểm soát căng thẳng, thực hành thiền hàng ngày, đặt ra các ranh giới kỹ thuật số nghiêm ngặt sau 8 giờ tối và trị liệu hàng tuần qua nền tảng trực tuyến.',
        impact:
          'Giảm mức độ lo âu 60% trong 3 tháng, cải thiện chất lượng giấc ngủ, quay trở lại tuần làm việc 45 giờ bền vững và phát triển mối quan hệ lành mạnh với công nghệ.',
        innovations: [
          'Sử dụng công nghệ như một phần của giải pháp',
          'Các can thiệp nhỏ, nhất quán hiệu quả hơn các thay đổi đột ngột',
          'Dữ liệu sức khỏe kỹ thuật số hỗ trợ trị liệu chuyên nghiệp',
        ],
      },
    ],
    vietnamContext: {
      title: 'Sức khỏe tâm thần trong bối cảnh số hóa tại Việt Nam',
      content: [
        'Nhận thức về sức khỏe tâm thần ở Việt Nam đang tăng lên, đặc biệt trong giới trẻ, những người phải đối mặt với áp lực từ mạng xã hội và công việc.',
        'Các ứng dụng thiền định và chăm sóc sức khỏe tinh thần như Calm, Headspace, và các ứng dụng Việt Nam như Mindful.vn đang dần trở nên phổ biến.',
        'Tuy nhiên, vẫn còn nhiều rào cản về văn hóa và sự kỳ thị khi tìm kiếm sự giúp đỡ chuyên nghiệp cho các vấn đề sức khỏe tâm thần.',
      ],
    },
    careerConnect: {
      name: 'Chị Đặng Thu Trang',
      title: 'Nhà tâm lý học & Sáng lập ứng dụng Sức khỏe tinh thần',
      company: 'Mindful.vn',
      imageUrl: 'https://i.pravatar.cc/150?u=dang-thu-trang',
      quote:
        'Công nghệ không phải là kẻ thù của sức khỏe tâm thần nếu chúng ta biết cách sử dụng nó một cách khôn ngoan. Mục tiêu của chúng tôi là tạo ra các công cụ dễ tiếp cận, dựa trên bằng chứng khoa học để người Việt có thể chăm sóc cho tâm trí của mình mọi lúc, mọi nơi, phá vỡ rào cản về địa lý và sự e ngại.',
    },
    quizzes: [
      {
        question: 'Digital Detox (Cai nghiện kỹ thuật số) có nghĩa là gì?',
        options: [
          'Xóa tất cả các ứng dụng mạng xã hội',
          'Một khoảng thời gian chủ động không sử dụng các thiết bị điện tử',
          'Chỉ sử dụng điện thoại cho công việc',
          'Chuyển sang dùng điện thoại phổ thông',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Digital detox là một khoảng thời gian tự nguyện mà một người không sử dụng các thiết bị điện tử như điện thoại thông minh hoặc máy tính để giảm căng thẳng và tập trung vào tương tác xã hội trong thế giới thực.',
      },
      {
        question: 'Thiết bị đeo (wearables) có thể giúp theo dõi chỉ số nào quan trọng cho sức khỏe tâm thần?',
        options: ['Số bước chân', 'Chất lượng giấc ngủ', 'Nhịp tim biến thiên (HRV)', 'Tất cả các đáp án trên'],
        correctAnswerIndex: 3,
        explanation:
          'Tất cả các chỉ số trên đều cung cấp cái nhìn tổng quan về sức khỏe thể chất và tinh thần. Đặc biệt, chất lượng giấc ngủ và HRV là những chỉ số quan trọng phản ánh mức độ căng thẳng và khả năng phục hồi của cơ thể.',
      },
    ],
  },
  {
    id: 'ai-therapy-tools',
    title: 'Bài 2: Công cụ Sức khỏe Tâm thần dùng AI & Trị liệu bằng Chatbot',
    description:
      'Khám phá các ứng dụng của AI trong sức khỏe tâm thần: trị liệu bằng chatbot, can thiệp cá nhân hóa, phân tích dự báo. Xây dựng các công cụ AI để hỗ trợ sức khỏe tinh thần.',
    videoUrl: null,
    imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '180 phút',
    objectives: [
      'Hiểu các ứng dụng của AI trong chăm sóc sức khỏe tâm thần và trị liệu',
      'Đánh giá hiệu quả và hạn chế của các công cụ trị liệu AI',
      'Thiết kế hệ thống AI đàm thoại để hỗ trợ sức khỏe tâm thần',
      'Thực hiện học máy để dự đoán tâm trạng và can thiệp',
      'Giải quyết các cân nhắc về đạo đức trong sức khỏe tâm thần do AI cung cấp',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về AI và các khái niệm học máy',
      'Nhận thức về sức khỏe tâm thần và các nguyên tắc cơ bản về sức khỏe kỹ thuật số',
      'Kinh nghiệm lập trình (khuyến nghị Python)',
      'Truy cập vào các công cụ và nền tảng phát triển AI',
    ],
    exercises: [
      {
        title: 'Xây dựng Chatbot Sức khỏe Tâm thần AI',
        description:
          'Tạo một chatbot thông minh cung cấp hỗ trợ sức khỏe tâm thần, theo dõi tâm trạng và các can thiệp cá nhân hóa bằng cách sử dụng NLP và học máy.',
        difficulty: 'Nâng cao',
        procedure: [
          'Thiết kế kiến trúc hệ thống chatbot (NLU, quản lý hội thoại).',
          'Chọn và huấn luyện mô hình NLP để nhận dạng ý định và thực thể.',
          'Xây dựng luồng hội thoại cho các kịch bản phổ biến (kiểm tra tâm trạng, bài tập thư giãn).',
          'Tích hợp một mô hình học máy đơn giản để đề xuất can thiệp dựa trên đầu vào.',
          'Thiết lập các quy tắc an toàn để phát hiện và xử lý các tình huống khủng hoảng.',
          'Tạo giao diện người dùng đơn giản để tương tác với chatbot.',
        ],
        expectedResults:
          'Một chatbot AI sẵn sàng sản xuất với xác thực lâm sàng, các biện pháp bảo vệ đạo đức và khả năng tích hợp chuyên nghiệp.',
        solution:
          'Giải pháp là một chatbot có khả năng hiểu ngôn ngữ tự nhiên, duy trì ngữ cảnh hội thoại, cá nhân hóa phản hồi, đề xuất các bài tập phù hợp và quan trọng nhất là nhận biết tình huống khủng hoảng để chuyển đến chuyên gia con người.',
      },
    ],
    realWorldApplications: [
      'Hỗ trợ và tăng cường trị liệu lâm sàng',
      'Các chương trình sức khỏe tâm thần tại nơi làm việc',
      'Dịch vụ tư vấn tại các cơ sở giáo dục',
      'Tiếp cận sức khỏe tâm thần cộng đồng',
      'Can thiệp khủng hoảng và phòng chống tự tử',
    ],
    resources: [
      {
        title: 'Woebot - Your Mental Health Ally',
        url: 'https://woebot.io',
        type: 'Tool',
      },
      {
        title: 'Rasa: Open Source Conversational AI',
        url: 'https://rasa.com',
        type: 'Tool',
      },
    ],
    caseStudies: [
      {
        title: 'Triển khai AI Sức khỏe Tâm thần tại một trường Đại học',
        organization: 'Một trường Đại học lớn',
        problem:
          'Nhu cầu về dịch vụ tư vấn quá tải, thời gian chờ đợi 3 tuần, hỗ trợ 24/7 hạn chế, và sự kỳ thị ngăn cản việc tìm kiếm sự giúp đỡ.',
        solution:
          'Triển khai một chatbot AI tích hợp với các dịch vụ tư vấn hiện có. Cung cấp hỗ trợ ngay lập tức, phân loại các trường hợp khẩn cấp, đưa ra các chiến lược đối phó và kết nối sinh viên với các nhà tư vấn con người khi cần thiết.',
        impact:
          'Giảm thời gian chờ đợi tư vấn xuống còn 5 ngày, tăng 40% hành vi tìm kiếm sự giúp đỡ, có sẵn hỗ trợ khủng hoảng 24/7, tỷ lệ hài lòng của người dùng đạt 85%, và can thiệp sớm đã ngăn chặn hơn 60 trường hợp leo thang khủng hoảng.',
        innovations: [
          'Trị liệu AI làm giảm rào cản ban đầu trong việc tiếp cận sức khỏe tâm thần',
          'Tích hợp với dịch vụ con người là cần thiết cho việc chăm sóc toàn diện',
          'Truy cập ẩn danh làm giảm sự kỳ thị và tăng cường sử dụng',
        ],
      },
    ],
    vietnamContext: {
      title: 'Tiềm năng và Thách thức của Chatbot trị liệu tại Việt Nam',
      content: [
        'Với sự thiếu hụt chuyên gia tâm lý và chi phí trị liệu cao, chatbot AI có thể là một giải pháp đầy hứa hẹn để cung cấp hỗ trợ sức khỏe tâm thần cơ bản, dễ tiếp cận cho người Việt.',
        'Thách thức lớn nhất là về ngôn ngữ và văn hóa. Chatbot cần được huấn luyện trên dữ liệu tiếng Việt và hiểu các sắc thái văn hóa, các vấn đề tâm lý đặc thù của người Việt.',
        'Các công ty công nghệ Việt Nam như Zalo AI, FPT.AI đang phát triển các mô hình ngôn ngữ lớn, mở ra tiềm năng xây dựng các chatbot trị liệu "thuần Việt" trong tương lai.',
      ],
    },
    careerConnect: {
      name: 'Anh Phạm Tuấn Anh',
      title: 'Kỹ sư AI/ML chuyên về NLP',
      company: 'Một công ty khởi nghiệp về HealthTech',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-tuan-anh',
      quote:
        'Xây dựng một chatbot trị liệu không chỉ là về code. Đó là sự kết hợp giữa khoa học máy tính, ngôn ngữ học và tâm lý học. Thử thách lớn nhất của tôi là làm sao để AI không chỉ "hiểu" từ ngữ, mà còn "cảm nhận" được cảm xúc đằng sau đó và phản hồi một cách đồng cảm, phù hợp với văn hóa Việt Nam.',
    },
    quizzes: [
      {
        question: 'NLP (Natural Language Processing) là viết tắt của thuật ngữ gì?',
        options: [
          'Neuro-Linguistic Programming',
          'Natural Language Processing',
          'New Logic Programming',
          'Network Learning Protocol',
        ],
        correctAnswerIndex: 1,
        explanation:
          'NLP, hay Xử lý Ngôn ngữ Tự nhiên, là một lĩnh vực của trí tuệ nhân tạo giúp máy tính hiểu, diễn giải và tạo ra ngôn ngữ của con người.',
      },
      {
        question: 'Thách thức lớn nhất khi phát triển chatbot trị liệu cho thị trường Việt Nam là gì?',
        options: [
          'Thiếu hụt kỹ sư AI',
          'Tốc độ internet chậm',
          'Sự phức tạp của ngôn ngữ và các sắc thái văn hóa đặc thù',
          'Chi phí máy chủ cao',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Để một chatbot thực sự hữu ích, nó cần phải hiểu sâu sắc về cách người Việt diễn đạt cảm xúc, các vấn đề họ thường đối mặt và các cách tiếp cận phù hợp với văn hóa, đây là một thách thức lớn về dữ liệu và mô hình.',
      },
    ],
  },
];
