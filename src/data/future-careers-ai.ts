import { BaseLessonData } from '@/types/lesson-base';

export const futureCareersLessons: BaseLessonData[] = [
  {
    id: 'ai-impact-on-jobs',
    title: 'Tác động của AI đến Thị trường Lao động',
    description:
      'Tìm hiểu cách AI và tự động hóa đang thay đổi cấu trúc công việc, những ngành nghề nào sẽ bị ảnh hưởng và những cơ hội nào sẽ mở ra.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=S_Ld_5i2T4o',
    imageUrl: 'https://i.ytimg.com/vi/S_Ld_5i2T4o/hqdefault.jpg',
    objectives: [
      'Phân biệt được 4 làn sóng tự động hóa.',
      'Hiểu các khái niệm: Reskilling (Tái đào tạo kỹ năng) và Upskilling (Nâng cao kỹ năng).',
      'Nhận diện các ngành nghề có nguy cơ cao bị thay thế.',
      'Khám phá các vai trò công việc mới do AI tạo ra.',
    ],
    prerequisites: ['Không có'],
    exercises: [
      {
        title: 'Phân tích Công việc của Chính bạn',
        description:
          'Phân tích các nhiệm vụ hàng ngày trong công việc (hoặc việc học) của bạn và đánh giá xem phần nào có thể được tự động hóa bởi AI.',
        difficulty: 'Cơ bản',
        procedure: [
          'Liệt kê 5-10 nhiệm vụ chính bạn thực hiện thường xuyên.',
          'Với mỗi nhiệm vụ, đánh giá mức độ lặp lại và dựa trên dữ liệu.',
          'Sử dụng ma trận Eisenhower-AI để phân loại các nhiệm vụ.',
          'Suy nghĩ về cách AI có thể hỗ trợ hoặc thay thế từng nhiệm vụ.',
        ],
        expectedResults: 'Một bản phân tích cá nhân về tác động của AI đến vai trò hiện tại hoặc tương lai của bạn.',
      },
    ],
    realWorldApplications: [
      'Các công ty đang tái cấu trúc đội ngũ nhân sự.',
      'Người lao động chủ động học các kỹ năng mới.',
      'Sự phát triển của các nền tảng giáo dục trực tuyến.',
    ],
    vietnamContext: {
      title: 'Thị trường lao động Việt Nam trước làn sóng AI',
      content: [
        'Nhiều ngành thâm dụng lao động như dệt may, da giày đang đối mặt với áp lực tự động hóa.',
        'Sự bùng nổ của các công ty công nghệ (tech companies) và startup tạo ra nhu cầu lớn về nhân lực ngành AI, dữ liệu.',
        'Chính phủ Việt Nam đã có "Chiến lược quốc gia về nghiên cứu, phát triển và ứng dụng Trí tuệ nhân tạo đến năm 2030".',
        'Các trường đại học lớn đang mở các ngành học mới liên quan đến AI và khoa học dữ liệu.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Mạnh Huy',
      title: 'AI Product Manager',
      company: 'FPT Software',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-manh-huy',
      quote:
        'Công việc của tôi là tìm hiểu các vấn đề kinh doanh và xem AI có thể giải quyết chúng như thế nào. Tôi không cần phải là người viết code giỏi nhất, nhưng phải hiểu cả công nghệ và nhu cầu của khách hàng. Kỹ năng giao tiếp và phân tích vấn đề là quan trọng nhất.',
    },
    quizzes: [
      {
        question: 'Khái niệm nào sau đây mô tả việc học một kỹ năng hoàn toàn mới để làm một công việc khác?',
        options: ['Upskilling', 'Reskilling', 'Downsizing', 'Outsourcing'],
        correctAnswerIndex: 1,
        explanation:
          'Reskilling (Tái đào tạo kỹ năng) là quá trình học các kỹ năng mới để đảm nhận một vai trò công việc khác, thường là trong cùng một công ty.',
      },
      {
        question: 'Ngành nào ở Việt Nam được dự báo sẽ chịu tác động mạnh mẽ nhất từ tự động hóa?',
        options: ['Giáo dục', 'Y tế', 'Dệt may và lắp ráp điện tử', 'Du lịch và khách sạn'],
        correctAnswerIndex: 2,
        explanation:
          'Các ngành thâm dụng lao động với các công việc có tính lặp lại cao như dệt may, lắp ráp điện tử có nguy cơ bị tự động hóa cao nhất.',
      },
    ],
  },
  {
    id: 'future-proof-skills',
    title: "Những Kỹ năng 'Vàng' trong Kỷ nguyên AI",
    description:
      'Không phải tất cả các kỹ năng đều có thể bị thay thế. Bài học này tập trung vào những năng lực cốt lõi của con người mà AI khó có thể sao chép.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zJ-A-J_go0c',
    imageUrl: 'https://i.ytimg.com/vi/zJ-A-J_go0c/hqdefault.jpg',
    objectives: [
      'Xác định 4 nhóm kỹ năng quan trọng: Tư duy phức tạp, Trí tuệ xã hội & cảm xúc, Năng lực thích ứng, và Năng lực số.',
      'Hiểu tại sao sự sáng tạo, tư duy phản biện và trí tuệ cảm xúc lại trở nên quan trọng hơn bao giờ hết.',
      'Học các phương pháp để rèn luyện và phát triển những kỹ năng này.',
      "Xây dựng một 'bộ kỹ năng' linh hoạt cho tương lai.",
    ],
    prerequisites: ["Hoàn thành bài 'Tác động của AI'"],
    exercises: [
      {
        title: 'Xây dựng Ma trận Kỹ năng Cá nhân',
        description:
          'Tự đánh giá mức độ thành thạo của bạn đối với các kỹ năng tương lai và lập kế hoạch để cải thiện chúng.',
        difficulty: 'Trung bình',
        procedure: [
          'Vẽ một ma trận với các kỹ năng tương lai trên các trục.',
          'Đánh giá bản thân trên thang điểm từ 1 đến 10 cho mỗi kỹ năng.',
          'Xác định 2-3 kỹ năng bạn muốn tập trung phát triển nhất.',
          'Lập kế hoạch hành động cụ thể: các khóa học, sách, dự án để rèn luyện.',
        ],
        expectedResults:
          'Một kế hoạch phát triển cá nhân (Personal Development Plan) tập trung vào các kỹ năng chống lại sự thay thế của AI.',
      },
    ],
    realWorldApplications: [
      'Chương trình đào tạo nội bộ của các tập đoàn lớn.',
      'Sự thay đổi trong chương trình giảng dạy của các trường đại học.',
      'Các chuyên gia tự do (freelancer) xây dựng lợi thế cạnh tranh.',
    ],
    vietnamContext: {
      title: 'Nhu cầu kỹ năng tại Việt Nam',
      content: [
        'Các báo cáo tuyển dụng gần đây cho thấy các nhà tuyển dụng Việt Nam đánh giá cao kỹ năng mềm như giải quyết vấn đề phức tạp, làm việc nhóm và giao tiếp.',
        'Năng lực ngoại ngữ (đặc biệt là tiếng Anh) kết hợp với kỹ năng số được xem là "chìa khóa vàng" cho các công việc lương cao.',
        'Thế hệ Gen Z Việt Nam được đánh giá là có khả năng thích ứng công nghệ nhanh, nhưng cần trau dồi thêm tư duy phản biện và sự bền bỉ (resilience).',
      ],
    },
    careerConnect: {
      name: 'Chị Phạm Thị Thảo',
      title: 'Head of People & Culture',
      company: 'Tiki',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-thi-thao',
      quote:
        'Khi tuyển dụng, chúng tôi không chỉ nhìn vào bằng cấp. Chúng tôi tìm kiếm những ứng viên có khả năng học hỏi nhanh, biết cách đặt câu hỏi và có thể làm việc tốt với người khác. Một thái độ tích cực và khả năng thích ứng với thay đổi còn quý hơn kinh nghiệm ở một lĩnh vực cụ thể.',
    },
    quizzes: [
      {
        question: 'Kỹ năng nào sau đây KHÔNG thuộc nhóm năng lực cốt lõi của con người mà AI khó thay thế?',
        options: ['Trí tuệ cảm xúc', 'Tư duy phản biện', 'Nhập liệu và xử lý dữ liệu cơ bản', 'Sự sáng tạo'],
        correctAnswerIndex: 2,
        explanation:
          'Nhập liệu và xử lý dữ liệu cơ bản là các tác vụ có cấu trúc, lặp lại mà AI và các công cụ tự động hóa có thể thực hiện rất hiệu quả, thậm chí tốt hơn con người.',
      },
      {
        question: 'Theo bối cảnh Việt Nam, sự kết hợp nào được xem là "chìa khóa vàng" cho công việc lương cao?',
        options: [
          'Bằng cấp tốt và kinh nghiệm lâu năm',
          'Ngoại ngữ và kỹ năng số',
          'Làm việc chăm chỉ và trung thành',
          'Sáng tạo và nghệ thuật',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong bối cảnh hội nhập và chuyển đổi số, khả năng sử dụng thành thạo ngoại ngữ (đặc biệt là tiếng Anh) và các công cụ kỹ thuật số là lợi thế cạnh tranh cực lớn trên thị trường lao động Việt Nam.',
      },
    ],
  },
  {
    id: 'human-ai-collaboration',
    title: 'Hợp tác Người-Máy: AI như một Đồng nghiệp',
    description:
      'Thay vì lo sợ AI, hãy học cách làm việc cùng nó. Bài học này khám phá các mô hình hợp tác hiệu quả giữa con người và trí tuệ nhân tạo.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=Yed_y_93-qA',
    imageUrl: 'https://i.ytimg.com/vi/Yed_y_93-qA/hqdefault.jpg',
    objectives: [
      'Hiểu các mô hình hợp tác Người-AI: AI hỗ trợ, AI khuếch đại, và AI là đối tác.',
      "Học cách 'giao tiếp' hiệu quả với AI thông qua Prompt Engineering.",
      'Sử dụng AI để tăng cường sự sáng tạo và hiệu suất.',
      'Nhận thức về các vấn đề đạo đức và thiên vị khi làm việc với AI.',
    ],
    prerequisites: ['Hoàn thành các bài học trước'],
    exercises: [
      {
        title: 'Giải quyết vấn đề cùng AI',
        description: 'Sử dụng một công cụ AI (như ChatGPT, Copilot) để cùng giải quyết một vấn đề thực tế.',
        difficulty: 'Trung bình',
        materials: ['Tài khoản ChatGPT hoặc công cụ tương tự'],
        procedure: [
          'Chọn một vấn đề (ví dụ: lập kế hoạch cho một sự kiện, viết một bài blog).',
          'Sử dụng kỹ thuật prompt để yêu cầu AI đưa ra các ý tưởng, cấu trúc, và nội dung chi tiết.',
          'Đóng vai trò là người biên tập: chỉnh sửa, bổ sung và hoàn thiện sản phẩm cuối cùng.',
          'Phản ánh về quá trình: AI đã giúp gì? Vai trò của bạn là gì?',
        ],
        expectedResults:
          'Một sản phẩm hoàn chỉnh được tạo ra từ sự hợp tác giữa bạn và AI, cùng với một bản ghi chép về quá trình làm việc.',
      },
    ],
    realWorldApplications: [
      'Lập trình viên sử dụng GitHub Copilot để viết code nhanh hơn.',
      "Nhà văn sử dụng AI để tìm ý tưởng và vượt qua 'writer's block'.",
      'Các nhà marketing sử dụng AI để phân tích dữ liệu và tạo chiến dịch.',
    ],
    vietnamContext: {
      title: 'Ứng dụng AI trong công việc tại Việt Nam',
      content: [
        'Các lập trình viên tại các công ty như VNG, Viettel, FPT đang sử dụng các công cụ AI trợ lý lập trình để tăng năng suất.',
        'Nhiều doanh nghiệp vừa và nhỏ sử dụng chatbot (như FPT.AI, Zalo AI) để tự động hóa việc chăm sóc khách hàng.',
        'Các nhà sáng tạo nội dung trên YouTube, TikTok sử dụng AI để phân tích xu hướng, đề xuất ý tưởng và thậm chí tạo phụ đề tự động.',
        'Prompt Engineering đang dần trở thành một kỹ năng được săn đón, đặc biệt trong các lĩnh vực marketing, nội dung và thiết kế.',
      ],
    },
    careerConnect: {
      name: 'Bạn Nguyễn Hoàng An',
      title: 'AI Artist / Prompt Engineer',
      company: 'Freelancer',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoang-an',
      quote:
        'Mình dùng Midjourney và Stable Diffusion để tạo ra các tác phẩm nghệ thuật số. Công việc của mình không phải là vẽ, mà là "ra lệnh" cho AI bằng ngôn ngữ. Để có một bức ảnh đẹp, mình phải thử hàng chục, thậm chí hàng trăm câu lệnh khác nhau. Đó là sự kết hợp giữa kỹ thuật và nghệ thuật.',
    },
    quizzes: [
      {
        question: '"Prompt Engineering" là kỹ năng gì?',
        options: [
          'Lập trình một mô hình AI từ đầu.',
          'Thiết kế giao diện cho các ứng dụng AI.',
          'Viết các câu lệnh (prompt) hiệu quả để giao tiếp và điều khiển AI.',
          'Kiểm thử và sửa lỗi cho các hệ thống AI.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Prompt Engineering là nghệ thuật và khoa học của việc thiết kế các đầu vào (câu lệnh, câu hỏi) để một mô hình AI tạo ra kết quả mong muốn.',
      },
      {
        question: 'Mô hình hợp tác nào mô tả việc AI đề xuất các lựa chọn và con người đưa ra quyết định cuối cùng?',
        options: ['AI là công cụ', 'AI là đối tác', 'AI hỗ trợ (AI assistant)', 'AI tự trị hoàn toàn'],
        correctAnswerIndex: 2,
        explanation:
          'Trong mô hình AI hỗ trợ, AI hoạt động như một trợ lý thông minh, cung cấp thông tin, phân tích và các phương án để con người xem xét và đưa ra quyết định cuối cùng.',
      },
    ],
  },
];
