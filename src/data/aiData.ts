import { BaseLessonData } from '@/types/lesson-base';

export const aiLessons: BaseLessonData[] = [
  {
    id: 'office-work',
    title: 'AI cho Công việc Văn phòng',
    description:
      'Sử dụng AI để tối ưu hóa công việc văn phòng, từ viết email, tạo báo cáo đến tự động hóa các tác vụ lặp đi lặp lại.',
    duration: '4 giờ',
    videoUrl: 'https://www.youtube.com/watch?v=TXxuccRXo-k',
    difficulty: 'Cơ bản',
    category: 'Năng suất',
    objectives: [
      'Sử dụng ChatGPT để soạn thảo email chuyên nghiệp và hiệu quả.',
      'Tự động hóa các tác vụ trong Excel bằng các công cụ AI.',
      'Tạo bài thuyết trình ấn tượng và nhanh chóng với AI.',
      'Quản lý thời gian và công việc một cách thông minh hơn.',
    ],
    prerequisites: ['Kỹ năng sử dụng máy tính cơ bản', 'Kiến thức về Microsoft Office hoặc Google Workspace'],
    tools: ['ChatGPT', 'Google Bard', 'Microsoft Copilot', 'Grammarly', 'Notion AI'],
    exercises: [
      {
        title: 'Soạn thảo email chuyên nghiệp với ChatGPT',
        description:
          'Học cách tạo ra các email hiệu quả cho nhiều tình huống công việc khác nhau, từ giao tiếp nội bộ đến gửi cho khách hàng.',
        difficulty: 'Cơ bản',
        steps: [
          'Truy cập ChatGPT và đăng nhập vào tài khoản của bạn.',
          'Sử dụng các mẫu prompt (câu lệnh) được thiết kế sẵn cho việc viết email.',
          'Tùy chỉnh văn phong và phong cách cho phù hợp với người nhận.',
          'Xem lại và chỉnh sửa nội dung do AI tạo ra để đảm bảo tính chính xác và cá nhân hóa.',
          'Áp dụng các kỹ năng đã học vào việc viết email thực tế hàng ngày.',
        ],
        expectedResults:
          'Các email được soạn thảo một cách chuyên nghiệp, rõ ràng, và phù hợp với từng đối tượng cụ thể.',
        tips: [
          'Luôn xem lại và cá nhân hóa nội dung do AI tạo ra.',
          'Cung cấp bối cảnh chi tiết trong prompt để có kết quả tốt nhất.',
          'Kiểm tra lại ngữ pháp và chính tả lần cuối trước khi gửi.',
        ],
      },
    ],
    realWorldApplications: [
      'Soạn thảo các chiến dịch email marketing.',
      'Tạo báo cáo và bài thuyết trình tự động.',
      'Phân tích dữ liệu trong bảng tính Excel.',
      'Lập kế hoạch và theo dõi tiến độ dự án.',
      'Quản lý và trả lời các yêu cầu hỗ trợ khách hàng.',
    ],
    resources: [
      {
        title: 'Hướng dẫn sử dụng ChatGPT chính thức',
        url: 'https://openai.com/chatgpt',
        type: 'Tài liệu',
      },
    ],
    vietnamContext: {
      title: 'Tự động hóa văn phòng tại Việt Nam',
      content: [
        'Nhiều doanh nghiệp Việt Nam đang tích cực ứng dụng AI để tăng năng suất và giảm tải công việc thủ công cho nhân viên.',
        'Các công cụ như Viettel CyberWork hay FPT.AI đang cung cấp các giải pháp tự động hóa quy trình kinh doanh (RPA) được tùy chỉnh cho thị trường trong nước.',
        'Kỹ năng sử dụng AI trong công việc văn phòng đang trở thành một lợi thế cạnh tranh lớn cho người lao động tại Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Lan Anh',
      title: 'Trưởng phòng Hành chính Nhân sự',
      company: 'Tập đoàn ABC',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-lan-anh',
      quote:
        'Việc ứng dụng AI giúp chúng tôi tiết kiệm hàng trăm giờ làm việc mỗi tháng, cho phép nhân viên tập trung vào các nhiệm vụ chiến lược hơn. Đây là xu hướng không thể đảo ngược.',
    },
    quizzes: [
      {
        question: 'Công cụ AI nào có thể giúp bạn viết email chuyên nghiệp?',
        options: ['Photoshop', 'ChatGPT', 'Excel', 'Spotify'],
        correctAnswerIndex: 1,
        explanation:
          'ChatGPT là một mô hình ngôn ngữ lớn có khả năng tạo ra văn bản mạch lạc và chuyên nghiệp, rất hữu ích cho việc soạn thảo email.',
      },
      {
        question: 'Prompt trong ngữ cảnh sử dụng AI có nghĩa là gì?',
        options: [
          'Một lỗi phần mềm',
          'Một loại virus',
          'Câu lệnh hoặc yêu cầu bạn nhập vào cho AI',
          'Tên một bản cập nhật',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Prompt là đầu vào (thường là văn bản) mà người dùng cung cấp để AI xử lý và tạo ra kết quả tương ứng.',
      },
    ],
  },
  {
    id: 'creative-design',
    title: 'AI cho Sáng tạo & Thiết kế',
    description:
      'Khám phá cách sử dụng các công cụ AI để tạo ra nội dung sáng tạo, từ hình ảnh, đồ họa đến các sản phẩm đa phương tiện.',
    duration: '5 giờ',
    videoUrl: 'https://www.youtube.com/watch?v=Lm7qG6pzvmA',
    difficulty: 'Trung bình',
    category: 'Sáng tạo',
    objectives: [
      'Tạo ra hình ảnh độc đáo từ văn bản bằng Midjourney và DALL-E.',
      'Viết nội dung sáng tạo cho blog, mạng xã hội một cách nhanh chóng.',
      'Sử dụng các tính năng AI của Canva để thiết kế chuyên nghiệp.',
      'Tự động hóa việc chỉnh sửa ảnh, như xóa nền, nâng cao chất lượng.',
    ],
    prerequisites: ['Hiểu biết cơ bản về các nguyên tắc thiết kế', 'Tài khoản Discord (bắt buộc cho Midjourney)'],
    tools: ['Midjourney', 'DALL-E 3', 'Canva AI Magic Studio', 'Remove.bg', 'Jasper AI'],
    exercises: [
      {
        title: 'Thiết kế logo cho thương hiệu với Midjourney',
        description:
          'Học cách viết prompt hiệu quả để thiết kế một logo chuyên nghiệp và độc đáo bằng công cụ AI tạo ảnh Midjourney.',
        difficulty: 'Trung bình',
        steps: [
          'Nghiên cứu và xác định bản sắc thương hiệu (brand identity).',
          'Viết prompt chi tiết mô tả phong cách, màu sắc, và biểu tượng cho logo.',
          'Tạo ra nhiều biến thể (variations) để có nhiều lựa chọn.',
          'Lựa chọn và tinh chỉnh (refine) kết quả tốt nhất.',
          'Xuất file và tối ưu hóa để sử dụng trên các nền tảng khác nhau.',
        ],
        expectedResults: 'Một logo chuyên nghiệp, phù hợp với bản sắc thương hiệu và có thể sử dụng ngay.',
      },
    ],
    realWorldApplications: [
      'Thiết kế các ấn phẩm marketing (poster, brochure).',
      'Sáng tạo nội dung cho các chiến dịch trên mạng xã hội.',
      'Phát triển bộ nhận diện thương hiệu cho doanh nghiệp.',
      'Nâng cao chất lượng hình ảnh sản phẩm cho thương mại điện tử.',
      'Tạo nội dung hình ảnh cho blog và website.',
    ],
    resources: [
      {
        title: 'Midjourney Official Documentation',
        url: 'https://docs.midjourney.com/',
        type: 'Tài liệu',
      },
    ],
    vietnamContext: {
      title: 'Làn sóng Sáng tạo AI tại Việt Nam',
      content: [
        'Cộng đồng designer và marketer Việt Nam đang nhanh chóng đón nhận các công cụ AI như Midjourney để đẩy nhanh quá trình lên ý tưởng và sản xuất.',
        'Nhiều agency quảng cáo tại Việt Nam đã tích hợp AI vào quy trình làm việc để tạo ra các chiến dịch sáng tạo và hiệu quả hơn.',
        'Các cuộc thi thiết kế và nghệ thuật ứng dụng AI đang dần xuất hiện, thúc đẩy sự sáng tạo và tìm kiếm tài năng mới.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Thanh Tùng',
      title: 'Giám đốc Sáng tạo',
      company: 'Creative Minds Agency',
      imageUrl: 'https://i.pravatar.cc/150?u=le-thanh-tung',
      quote:
        'AI không thay thế sự sáng tạo, mà nó là một đối tác mạnh mẽ. Nó giúp chúng tôi khám phá những ý tưởng mà trước đây không thể, và thực hiện chúng với tốc độ đáng kinh ngạc.',
    },
    quizzes: [
      {
        question: 'Midjourney là công cụ AI dùng để làm gì?',
        options: ['Viết code', 'Tạo nhạc', 'Tạo hình ảnh từ văn bản', 'Dịch thuật'],
        correctAnswerIndex: 2,
        explanation:
          'Midjourney là một trong những công cụ AI tạo ảnh từ mô tả văn bản (text-to-image) nổi tiếng và mạnh mẽ nhất hiện nay.',
      },
      {
        question: 'Công cụ nào giúp xóa nền ảnh một cách tự động?',
        options: ['Canva', 'Remove.bg', 'Midjourney', 'Jasper AI'],
        correctAnswerIndex: 1,
        explanation:
          'Remove.bg là một công cụ chuyên dụng sử dụng AI để tự động tách nền khỏi chủ thể trong ảnh một cách nhanh chóng và chính xác.',
      },
    ],
  },
  {
    id: 'education-learning',
    title: 'AI cho Giáo dục & Học tập',
    description:
      'Khám phá cách áp dụng các công cụ AI để nâng cao hiệu quả học tập, nghiên cứu và giảng dạy trong môi trường giáo dục hiện đại.',
    duration: '3 giờ',
    videoUrl: 'https://www.youtube.com/watch?v=TXxuccRXo-k',
    difficulty: 'Cơ bản',
    category: 'Giáo dục',
    objectives: [
      'Sử dụng các ứng dụng AI để học ngoại ngữ hiệu quả hơn.',
      'Tự động hóa việc nghiên cứu và tóm tắt tài liệu học thuật.',
      'Tạo các bài kiểm tra và câu đố tương tác bằng AI.',
      'Xây dựng lộ trình học tập cá nhân hóa cho từng học viên.',
    ],
    prerequisites: ['Kiến thức cơ bản về chủ đề bạn muốn nghiên cứu hoặc học tập.'],
    tools: ['ChatGPT', 'Claude', 'Perplexity AI', 'Quizlet AI', 'Speechify'],
    exercises: [
      {
        title: 'Tạo flashcards học từ vựng với AI',
        description:
          'Sử dụng AI để tự động tạo ra một bộ flashcards (thẻ ghi nhớ) hiệu quả cho việc học từ vựng ngoại ngữ hoặc thuật ngữ chuyên ngành.',
        difficulty: 'Cơ bản',
        steps: [
          'Chọn chủ đề và cấp độ kiến thức bạn muốn học.',
          'Yêu cầu AI tạo một danh sách các từ vựng hoặc thuật ngữ quan trọng.',
          'Yêu cầu AI cung cấp định nghĩa, câu ví dụ và ngữ cảnh sử dụng.',
          'Định dạng lại kết quả thành dạng flashcard (mặt trước là từ, mặt sau là nghĩa).',
          'Nhập bộ flashcards vào một ứng dụng học tập như Anki hoặc Quizlet.',
        ],
        expectedResults: 'Một bộ flashcards đầy đủ, có hệ thống và sẵn sàng để sử dụng cho việc học.',
      },
    ],
    realWorldApplications: [
      'Giáo viên chuẩn bị giáo án và tài liệu giảng dạy.',
      'Hệ thống hỗ trợ học tập cá nhân hóa cho học sinh.',
      'Sinh viên nghiên cứu và tóm tắt các bài báo khoa học.',
      'Tạo ra các bài kiểm tra và đánh giá năng lực tự động.',
      'Học và luyện tập ngoại ngữ với trợ lý ảo.',
    ],
    resources: [
      {
        title: 'Perplexity AI Official Website',
        url: 'https://www.perplexity.ai/',
        type: 'Công cụ',
      },
    ],
    vietnamContext: {
      title: 'Chuyển đổi số trong Giáo dục Việt Nam',
      content: [
        'Bộ Giáo dục và Đào tạo đang khuyến khích việc ứng dụng công nghệ và AI vào giảng dạy và học tập ở tất cả các cấp.',
        'Các nền tảng EdTech của Việt Nam như VioEdu, OLM.vn đang tích hợp AI để cung cấp lộ trình học tập thích ứng cho học sinh.',
        'Nhiều trường đại học đang đưa các môn học về AI và Khoa học dữ liệu vào chương trình giảng dạy chính thức.',
      ],
    },
    careerConnect: {
      name: 'Cô Trần Thị Thảo',
      title: 'Giáo viên Tiếng Anh, Trường THPT Chuyên XYZ',
      company: 'Bộ Giáo dục & Đào tạo',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-thao',
      quote:
        'AI là một trợ giảng tuyệt vời. Nó giúp tôi cá nhân hóa bài học cho từng em học sinh, tạo ra các hoạt động tương tác thú vị và tiết kiệm thời gian chấm bài, để tôi có thể tập trung hơn vào việc truyền cảm hứng.',
    },
    quizzes: [
      {
        question: 'Perplexity AI là công cụ mạnh về lĩnh vực nào?',
        options: [
          'Thiết kế đồ họa',
          'Tìm kiếm và trả lời câu hỏi dựa trên nguồn thông tin chính xác',
          'Chơi game',
          'Viết nhạc',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Perplexity AI hoạt động như một "công cụ trả lời" (answer engine), nó cung cấp các câu trả lời trực tiếp cho câu hỏi và trích dẫn nguồn thông tin, rất hữu ích cho việc nghiên cứu.',
      },
      {
        question: 'Lợi ích chính của việc học tập cá nhân hóa (personalized learning) là gì?',
        options: [
          'Tất cả học sinh học cùng một nội dung',
          'Học sinh có thể học theo tốc độ và phong cách riêng của mình',
          'Học sinh không cần làm bài tập về nhà',
          'Giáo viên không cần giảng bài',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Học tập cá nhân hóa giúp điều chỉnh nội dung và phương pháp học cho phù hợp với năng lực, sở thích và mục tiêu của từng cá nhân, từ đó nâng cao hiệu quả học tập.',
      },
    ],
  },
  {
    id: 'business-marketing',
    title: 'AI cho Kinh doanh & Marketing',
    description:
      'Tìm hiểu cách ứng dụng AI để đột phá trong các hoạt động marketing, bán hàng và phát triển chiến lược kinh doanh.',
    duration: '6 giờ',
    videoUrl: 'https://www.youtube.com/watch?v=Lm7qG6pzvmA',
    difficulty: 'Nâng cao',
    category: 'Kinh doanh',
    objectives: [
      'Sử dụng AI để phân tích thị trường và tìm kiếm insight khách hàng.',
      'Tự động hóa việc tạo và triển khai các chiến dịch marketing.',
      'Phân khúc khách hàng và nhắm mục tiêu quảng cáo chính xác hơn.',
      'Dự báo doanh số và tối ưu hóa chiến lược bán hàng.',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về các khái niệm marketing',
      'Có kinh nghiệm về vận hành kinh doanh là một lợi thế',
    ],
    tools: [
      'HubSpot AI',
      'Salesforce Einstein',
      'Google Analytics Intelligence',
      'Facebook Ads AI',
      'ChatGPT for Business',
    ],
    exercises: [
      {
        title: 'Xây dựng chân dung khách hàng với AI',
        description:
          'Sử dụng dữ liệu để phân tích và xây dựng các hồ sơ chân dung khách hàng (customer personas) chi tiết và chính xác.',
        difficulty: 'Nâng cao',
        steps: [
          'Thu thập dữ liệu về khách hàng hiện tại (nhân khẩu học, hành vi).',
          'Sử dụng công cụ AI để phân tích và tìm ra các mẫu (patterns) chung.',
          'Tạo ra các hồ sơ chân dung chi tiết, bao gồm mục tiêu, thách thức, và động lực.',
          'Đối chiếu và xác thực các chân dung này với dữ liệu thực tế.',
          'Áp dụng các chân dung khách hàng vào việc xây dựng chiến lược marketing.',
        ],
        expectedResults:
          'Các hồ sơ chân dung khách hàng chính xác, có thể hành động và giúp định hướng chiến lược kinh doanh.',
      },
    ],
    realWorldApplications: [
      'Tạo và sàng lọc khách hàng tiềm năng (lead generation).',
      'Tự động hóa việc sản xuất và phân phối nội dung marketing.',
      'Xây dựng chatbot để chăm sóc khách hàng 24/7.',
      'Tối ưu hóa giá bán sản phẩm theo thời gian thực.',
      'Phân tích đối thủ cạnh tranh và xu hướng thị trường.',
    ],
    resources: [
      {
        title: 'HubSpot AI Platform',
        url: 'https://www.hubspot.com/artificial-intelligence',
        type: 'Nền tảng',
      },
    ],
    vietnamContext: {
      title: 'Marketing thông minh trong bối cảnh Việt Nam',
      content: [
        'Các sàn thương mại điện tử lớn như Shopee, Tiki, Lazada đang sử dụng AI để cá nhân hóa trải nghiệm mua sắm và gợi ý sản phẩm cho hàng triệu người dùng Việt.',
        'Doanh nghiệp vừa và nhỏ tại Việt Nam có thể tận dụng các công cụ AI có sẵn để cạnh tranh hiệu quả hơn với chi phí marketing thấp hơn.',
        'Phân tích dữ liệu mạng xã hội bằng AI giúp các thương hiệu Việt nắm bắt nhanh chóng các xu hướng (trends) và phản ứng của người tiêu dùng.',
      ],
    },
    careerConnect: {
      name: 'Ông Hoàng Nam',
      title: 'Giám đốc Marketing',
      company: 'Công ty Cổ phần Hàng tiêu dùng XYZ',
      imageUrl: 'https://i.pravatar.cc/150?u=hoang-nam',
      quote:
        'Với AI, chúng tôi không còn phải "đoán" khách hàng muốn gì. Dữ liệu nói cho chúng tôi biết điều đó. Công việc của marketer giờ đây là đặt ra câu hỏi đúng và biến insight từ AI thành những chiến dịch sáng tạo.',
    },
    quizzes: [
      {
        question: 'Phân khúc khách hàng (Customer Segmentation) là gì?',
        options: [
          'Gộp tất cả khách hàng vào một nhóm',
          'Chia khách hàng thành các nhóm nhỏ có đặc điểm chung',
          'Xóa dữ liệu khách hàng',
          'Chỉ bán hàng cho một loại khách hàng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Phân khúc khách hàng giúp doanh nghiệp hiểu rõ hơn về từng nhóm đối tượng, từ đó có thể tạo ra các thông điệp và sản phẩm phù hợp hơn.',
      },
      {
        question: 'Salesforce Einstein là một ví dụ về nền tảng AI trong lĩnh vực nào?',
        options: ['Quản lý quan hệ khách hàng (CRM)', 'Thiết kế đồ họa', 'Chơi game', 'Học ngoại ngữ'],
        correctAnswerIndex: 0,
        explanation:
          'Salesforce Einstein là lớp trí tuệ nhân tạo được tích hợp vào nền tảng CRM của Salesforce, giúp tự động hóa bán hàng, marketing và dịch vụ khách hàng.',
      },
    ],
  },
  {
    id: 'daily-life',
    title: 'AI cho Cuộc sống Hàng ngày',
    description:
      'Khám phá những ứng dụng thực tế của AI giúp bạn quản lý cuộc sống cá nhân một cách hiệu quả, thông minh và thú vị hơn.',
    duration: '2 giờ',
    videoUrl: 'https://www.youtube.com/watch?v=M5xe04_4YrU',
    difficulty: 'Cơ bản',
    category: 'Phong cách sống',
    objectives: [
      'Sử dụng AI để quản lý tài chính cá nhân và theo dõi chi tiêu.',
      'Lập kế hoạch công việc, lịch trình và sắp xếp cuộc sống hiệu quả.',
      'Theo dõi sức khỏe và chế độ luyện tập với sự hỗ trợ của AI.',
      'Khám phá các ứng dụng giải trí và sở thích được cá nhân hóa bởi AI.',
    ],
    prerequisites: ['Kỹ năng sử dụng smartphone hoặc máy tính cơ bản.'],
    tools: ['Siri/Google Assistant', 'IFTTT', 'Mint AI', 'MyFitnessPal AI', 'Spotify AI DJ'],
    exercises: [
      {
        title: 'Thiết lập tự động hóa nhà thông minh',
        description:
          'Tạo ra một hệ thống nhà thông minh (smart home) đơn giản bằng cách kết nối các thiết bị và sử dụng trợ lý ảo AI.',
        difficulty: 'Cơ bản',
        steps: [
          'Kiểm kê các thiết bị thông minh bạn đang có và xác định nhu cầu.',
          'Lựa chọn một nền tảng trợ lý ảo (Google Assistant, Apple Siri, Amazon Alexa).',
          'Thiết lập các quy trình tự động hóa cơ bản (ví dụ: "Chào buổi sáng" sẽ bật đèn, đọc tin tức).',
          'Kiểm tra và tối ưu hóa các quy trình để hoạt động trơn tru.',
          'Mở rộng hệ thống với các tính năng nâng cao hơn (ví dụ: tự động tắt đèn khi ra khỏi nhà).',
        ],
        expectedResults: 'Một hệ thống nhà thông minh hoạt động mượt mà, giúp tiết kiệm thời gian và công sức.',
      },
    ],
    realWorldApplications: [
      'Quản lý ngân sách và kế hoạch tiết kiệm cá nhân.',
      'Lên kế hoạch và đặt vé cho các chuyến du lịch.',
      'Theo dõi sức khỏe, giấc ngủ và nhận lời khuyên dinh dưỡng.',
      'Nhận gợi ý mua sắm được cá nhân hóa.',
      'Quản lý và lên lịch đăng bài trên mạng xã hội.',
    ],
    resources: [
      {
        title: 'IFTTT (If This Then That)',
        url: 'https://ifttt.com/',
        type: 'Công cụ',
      },
    ],
    vietnamContext: {
      title: 'AI trong đời sống người Việt hiện đại',
      content: [
        'Trợ lý ảo tiếng Việt như OLLI, ViVi (trên xe VinFast) đang ngày càng trở nên phổ biến, giúp người dùng tương tác với công nghệ một cách tự nhiên hơn.',
        'Các ứng dụng giao đồ ăn và gọi xe tại Việt Nam sử dụng AI để tối ưu hóa lộ trình, dự đoán thời gian và gợi ý món ăn.',
        'Nhà thông minh (smarthome) đang là xu hướng được nhiều gia đình trẻ ở các đô thị lớn tại Việt Nam ưa chuộng.',
      ],
    },
    careerConnect: {
      name: 'Chị Phạm Thu Hà',
      title: 'Chuyên gia Trải nghiệm Người dùng (UX)',
      company: 'SmartLife Tech',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-thu-ha',
      quote:
        'Mục tiêu của chúng tôi là làm cho công nghệ trở nên "vô hình". AI tốt là khi nó giúp bạn giải quyết vấn đề một cách mượt mà đến mức bạn không nhận ra sự tồn tại của nó. Cuộc sống của bạn chỉ đơn giản là trở nên dễ dàng hơn.',
    },
    quizzes: [
      {
        question: 'IFTTT là viết tắt của cụm từ nào?',
        options: [
          'I Find Things To Think',
          'If This Then That',
          'International Federation of Table Tennis',
          'I Forgot The Thing',
        ],
        correctAnswerIndex: 1,
        explanation:
          'IFTTT (If This Then That) là một dịch vụ cho phép bạn tạo ra các chuỗi mệnh lệnh đơn giản, gọi là "applets", để kết nối và tự động hóa các ứng dụng và thiết bị thông minh khác nhau.',
      },
      {
        question: 'Trợ lý ảo (Virtual Assistant) như Siri hay Google Assistant sử dụng công nghệ AI nào là chủ yếu?',
        options: [
          'Thị giác máy tính (Computer Vision)',
          'Xử lý ngôn ngữ tự nhiên (Natural Language Processing)',
          'Học tăng cường (Reinforcement Learning)',
          'Tạo ảnh (Image Generation)',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Xử lý ngôn ngữ tự nhiên là công nghệ cốt lõi cho phép trợ lý ảo hiểu được giọng nói và văn bản của con người, sau đó thực hiện yêu cầu tương ứng.',
      },
    ],
  },
  {
    id: 'programming-dev',
    title: 'AI cho Lập trình & Phát triển Phần mềm',
    description:
      'Tận dụng sức mạnh của AI để tăng tốc độ viết code, gỡ lỗi và tối ưu hóa quy trình phát triển phần mềm.',
    duration: '5 giờ',
    videoUrl: 'https://www.youtube.com/watch?v=CQqBQVH5PcI',
    difficulty: 'Nâng cao',
    category: 'Phát triển',
    objectives: [
      'Sử dụng GitHub Copilot để tự động hoàn thành và gợi ý code.',
      'Tăng tốc quá trình gỡ lỗi (debugging) và đánh giá code (code review).',
      'Tự động tạo tài liệu (documentation) cho các hàm và API.',
      'Sử dụng AI để viết các bài kiểm thử (test cases) và tối ưu hóa hiệu năng.',
    ],
    prerequisites: ['Kiến thức lập trình cơ bản về ít nhất một ngôn ngữ', 'Hiểu biết về quy trình phát triển phần mềm'],
    tools: ['GitHub Copilot', 'ChatGPT Code Interpreter', 'Tabnine', 'DeepCode', 'Replit AI'],
    exercises: [
      {
        title: 'Xây dựng một ứng dụng web với sự trợ giúp của AI',
        description:
          'Trải nghiệm quy trình xây dựng một ứng dụng web hoàn chỉnh từ đầu đến cuối, với AI là một người trợ lý lập trình.',
        difficulty: 'Nâng cao',
        steps: [
          'Xác định các yêu cầu và tính năng của dự án.',
          'Sử dụng AI để tạo ra mã nguồn ban đầu (boilerplate code).',
          'Triển khai các tính năng cụ thể với sự hỗ trợ và gợi ý từ AI.',
          'Sử dụng AI để xác định lỗi và đề xuất các phương án sửa lỗi.',
          'Triển khai ứng dụng lên một nền tảng và theo dõi hoạt động.',
        ],
        expectedResults:
          'Một ứng dụng web hoạt động với đầy đủ các tính năng đã định, được xây dựng trong thời gian ngắn hơn đáng kể.',
      },
    ],
    realWorldApplications: [
      'Xây dựng sản phẩm mẫu (prototype) một cách nhanh chóng.',
      'Tự động hóa việc đánh giá và kiểm tra chất lượng code.',
      'Tạo tài liệu API một cách tự động và nhất quán.',
      'Tối ưu hóa hiệu năng của các thuật toán và ứng dụng.',
      'Phát hiện các lỗ hổng bảo mật tiềm ẩn trong code.',
    ],
    resources: [
      {
        title: 'GitHub Copilot Official Website',
        url: 'https://github.com/features/copilot',
        type: 'Công cụ',
      },
    ],
    vietnamContext: {
      title: 'Lập trình viên Việt Nam trong kỷ nguyên AI',
      content: [
        'Cộng đồng lập trình viên tại Việt Nam đang rất hào hứng với các công cụ AI code assistant, xem đây là cơ hội để nâng cao năng suất và học hỏi các công nghệ mới.',
        'Nhiều công ty công nghệ Việt Nam đang khuyến khích nhân viên sử dụng AI trong lập trình để đẩy nhanh tiến độ dự án và giảm thời gian ra mắt sản phẩm.',
        'Các cuộc thi lập trình (hackathon) tại Việt Nam đã bắt đầu cho phép và khuyến khích sử dụng các công cụ AI, tạo ra một sân chơi mới cho sự sáng tạo.',
      ],
    },
    careerConnect: {
      name: 'Anh An Nguyen',
      title: 'Lead Software Engineer',
      company: 'DataHouse Vietnam',
      imageUrl: 'https://avatars.githubusercontent.com/u/7702424?v=4&size=64',
      quote:
        'GitHub Copilot giống như một người đồng nghiệp lập trình cùng bạn, nhưng không bao giờ mệt mỏi. Nó không lấy đi công việc của lập trình viên, mà nó nâng cấp chúng ta thành những kiến trúc sư, những người giải quyết vấn đề ở tầm cao hơn.',
    },
    quizzes: [
      {
        question: 'GitHub Copilot được phát triển dựa trên công nghệ của công ty nào?',
        options: ['Google', 'Facebook', 'Apple', 'OpenAI'],
        correctAnswerIndex: 3,
        explanation:
          'GitHub Copilot được phát triển bởi GitHub và OpenAI. Nó sử dụng các mô hình ngôn ngữ lớn của OpenAI, được huấn luyện trên một kho mã nguồn khổng lồ.',
      },
      {
        question: '"Boilerplate code" là gì?',
        options: [
          'Mã nguồn bị lỗi',
          'Các đoạn mã được lặp đi lặp lại ở nhiều dự án với rất ít thay đổi',
          'Mã nguồn được viết bởi robot',
          'Mã nguồn rất khó đọc',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Boilerplate code là những đoạn mã cần thiết để một chương trình hoạt động nhưng không đóng góp vào logic chính. AI rất giỏi trong việc tự động tạo ra các đoạn mã này, giúp lập trình viên tiết kiệm thời gian.',
      },
    ],
  },
];
