import { BaseLessonData } from '../types/lesson-base';

export const professionalSoftSkillsLessons: BaseLessonData[] = [
  {
    id: 'presentation-skills',
    title: 'Kỹ năng Thuyết trình Đỉnh cao',
    description:
      'Từ việc chuẩn bị nội dung, thiết kế slide đến việc trình bày tự tin và xử lý câu hỏi, khóa học này sẽ biến bạn thành một người thuyết trình chuyên nghiệp.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=Iwpi1Lm6dFo',
    objectives: [
      'Xây dựng cấu trúc bài thuyết trình logic và hấp dẫn.',
      'Thiết kế slide chuyên nghiệp, trực quan.',
      'Trình bày tự tin, sử dụng ngôn ngữ cơ thể hiệu quả.',
      'Trả lời câu hỏi và xử lý các tình huống khó khăn một cách chuyên nghiệp.',
    ],
    prerequisites: ['Không có'],
    exercises: [
      {
        title: 'Thực hành cấu trúc 10-20-30 của Guy Kawasaki',
        description:
          'Áp dụng quy tắc 10 slide, 20 phút, font chữ 30 để tạo một bài thuyết trình ngắn gọn và mạnh mẽ.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chọn một chủ đề bạn am hiểu.',
          'Tạo 10 slide theo cấu trúc gợi ý (Vấn đề, Giải pháp, Mô hình kinh doanh,...).',
          'Luyện tập trình bày trong vòng 20 phút.',
          'Ghi âm lại và tự đánh giá.',
        ],
        expectedResults: 'Một bài thuyết trình ngắn gọn, súc tích và hiệu quả.',
      },
    ],
    realWorldApplications: [
      'Thuyết trình dự án trước ban lãnh đạo.',
      'Giới thiệu sản phẩm cho khách hàng.',
      'Chia sẻ kiến thức trong hội thảo.',
      'Bảo vệ luận án tốt nghiệp.',
    ],
    vietnamContext: {
      title: 'Văn hóa Thuyết trình tại Việt Nam',
      content: [
        'Người Việt thường coi trọng sự khiêm tốn, do đó, phong cách thuyết trình cần tự tin nhưng không quá khoa trương.',
        'Việc xây dựng mối quan hệ cá nhân trước buổi thuyết trình có thể giúp tăng tính thuyết phục.',
        'Khán giả Việt Nam có thể ít đặt câu hỏi công khai, người thuyết trình cần chủ động khuyến khích tương tác.',
      ],
    },
    careerConnect: {
      name: 'Chị Lê Quỳnh Thư',
      title: 'Giám đốc Marketing',
      company: 'VNG Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=le-quynh-thu',
      quote:
        'Kỹ năng thuyết trình không chỉ là nói hay, mà là khả năng kết nối và truyền cảm hứng. Tại VNG, chúng tôi đánh giá rất cao những ứng viên có thể trình bày ý tưởng của mình một cách rõ ràng và thuyết phục.',
    },
  },
  {
    id: 'professional-writing',
    title: 'Kỹ năng Viết Chuyên nghiệp',
    description:
      'Học cách viết email, báo cáo, và các tài liệu công việc một cách rõ ràng, súc tích và chuyên nghiệp, phù hợp với từng đối tượng và mục đích.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=q_bjaF1fS5A',
    objectives: [
      'Nắm vững cấu trúc và văn phong của email công việc.',
      'Viết báo cáo rõ ràng, logic và có tính thuyết phục.',
      'Sử dụng ngôn ngữ chuyên nghiệp, tránh các lỗi sai phổ biến.',
      'Điều chỉnh văn phong phù hợp với người nhận.',
    ],
    prerequisites: ['Kỹ năng sử dụng máy tính cơ bản.'],
    exercises: [
      {
        title: 'Viết email yêu cầu thông tin',
        description:
          'Thực hành viết một email chuyên nghiệp để yêu cầu thông tin từ một phòng ban khác.',
        difficulty: 'Cơ bản',
        procedure: [
          'Xác định rõ mục đích email.',
          'Viết tiêu đề email súc tích.',
          'Soạn nội dung theo cấu trúc: Chào hỏi, giới thiệu, nêu rõ yêu cầu, cảm ơn và ký tên.',
          'Kiểm tra lại lỗi chính tả, ngữ pháp trước khi gửi.',
        ],
        expectedResults:
          'Một email chuyên nghiệp, rõ ràng và dễ dàng nhận được phản hồi.',
      },
    ],
    realWorldApplications: [
      'Giao tiếp nội bộ và với đối tác qua email.',
      'Báo cáo tiến độ công việc cho cấp trên.',
      'Soạn thảo đề xuất dự án.',
      'Viết tài liệu hướng dẫn cho người dùng.',
    ],
  },
  {
    id: 'leadership-management',
    title: 'Lãnh đạo và Quản lý Đội nhóm',
    description:
      'Phát triển kỹ năng lãnh đạo, từ việc tạo động lực, giao việc hiệu quả đến việc giải quyết xung đột và xây dựng văn hóa đội nhóm tích cực.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=lmyZMtPVodo',
    objectives: [
      'Hiểu các phong cách lãnh đạo và cách áp dụng.',
      'Học cách giao việc và phản hồi hiệu quả.',
      'Nắm vững kỹ năng giải quyết xung đột trong nhóm.',
      'Xây dựng và duy trì một đội nhóm hiệu suất cao.',
    ],
    prerequisites: ['Có kinh nghiệm làm việc nhóm.'],
    exercises: [
      {
        title: 'Phân tích tình huống: Giải quyết xung đột',
        description:
          'Đọc một tình huống xung đột trong nhóm và đề xuất các bước giải quyết.',
        difficulty: 'Trung bình',
        procedure: [
          'Đọc kỹ tình huống được cung cấp.',
          'Xác định nguyên nhân gốc rễ của xung đột.',
          'Đề xuất các bước giải quyết theo mô hình đã học (ví dụ: Lắng nghe, Thừa nhận, Tìm giải pháp chung).',
          'Phân tích ưu và nhược điểm của giải pháp đề xuất.',
        ],
        expectedResults:
          'Một kế hoạch giải quyết xung đột hợp lý và hiệu quả.',
      },
    ],
    realWorldApplications: [
      'Quản lý một đội nhóm dự án.',
      'Dẫn dắt một phòng ban.',
      'Tổ chức và điều phối các hoạt động của câu lạc bộ, tổ chức.',
      'Làm việc hiệu quả trong vai trò trưởng nhóm.',
    ],
    vietnamContext: {
      title: 'Lãnh đạo trong môi trường Việt Nam',
      content: [
        'Văn hóa Việt Nam coi trọng "cái tình" bên cạnh "cái lý", người lãnh đạo cần cân bằng giữa việc duy trì mối quan hệ tốt và đảm bảo hiệu quả công việc.',
        'Sự tôn trọng cấp bậc vẫn còn phổ biến, nhưng thế hệ trẻ ngày càng cởi mở hơn với phong cách lãnh đạo phẳng và trao quyền.',
        'Xây dựng đội nhóm "như một gia đình" là một mô hình phổ biến nhưng cũng có những thách thức riêng.',
      ],
    },
  },
  {
    id: 'negotiation-persuasion',
    title: 'Đàm phán và Thuyết phục',
    description:
      'Trang bị những chiến lược và kỹ thuật đàm phán hiệu quả để đạt được kết quả mong muốn trong công việc và cuộc sống, từ đàm phán lương đến chốt hợp đồng.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=O_B5_3D2y-Y',
    objectives: [
      'Chuẩn bị cho một cuộc đàm phán thành công.',
      'Hiểu và áp dụng nguyên tắc "Win-Win".',
      'Sử dụng các kỹ thuật thuyết phục dựa trên tâm lý học.',
      'Xử lý các tình huống bế tắc và từ chối.',
    ],
    prerequisites: ['Kỹ năng giao tiếp cơ bản.'],
    exercises: [
      {
        title: 'Đóng vai: Đàm phán tăng lương',
        description:
          'Chuẩn bị và thực hành một cuộc đàm phán tăng lương với "quản lý".',
        difficulty: 'Trung bình',
        procedure: [
          'Nghiên cứu mức lương trung bình cho vị trí của bạn.',
          'Liệt kê các thành tích và đóng góp của bạn trong năm qua.',
          'Xác định mức lương mong muốn và mức tối thiểu có thể chấp nhận (BATNA).',
          'Thực hành cuộc đàm phán với một người bạn hoặc đồng nghiệp.',
        ],
        expectedResults:
          'Sự tự tin và một kịch bản vững chắc cho cuộc đàm phán thực tế.',
      },
    ],
    realWorldApplications: [
      'Đàm phán hợp đồng với khách hàng, đối tác.',
      'Thương lượng về lương và các điều kiện làm việc.',
      'Thuyết phục đồng nghiệp ủng hộ ý tưởng của bạn.',
      'Giải quyết các bất đồng trong gia đình và xã hội.',
    ],
  },
  {
    id: 'time-management',
    title: 'Quản lý Thời gian và Tăng Năng suất',
    description:
      'Học các phương pháp quản lý thời gian hiện đại như Ma trận Eisenhower, Pomodoro và GTD để sắp xếp công việc, chống trì hoãn và tối đa hóa hiệu suất.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=i_t6f1y2_gA',
    objectives: [
      'Xác định và ưu tiên công việc quan trọng.',
      'Lập kế hoạch ngày, tuần, tháng hiệu quả.',
      'Áp dụng các công cụ và ứng dụng quản lý thời gian.',
      'Xây dựng thói quen làm việc tập trung và chống trì hoãn.',
    ],
    prerequisites: ['Không có'],
    exercises: [
      {
        title: 'Áp dụng Ma trận Eisenhower',
        description:
          'Phân loại các công việc trong tuần của bạn vào 4 ô của Ma trận Eisenhower.',
        difficulty: 'Cơ bản',
        procedure: [
          'Liệt kê tất cả các công việc bạn cần làm trong tuần tới.',
          'Vẽ Ma trận Eisenhower với 2 trục: Quan trọng và Khẩn cấp.',
          'Đặt từng công việc vào ô phù hợp: (1) Quan trọng & Khẩn cấp, (2) Quan trọng & Không khẩn cấp, (3) Không quan trọng & Khẩn cấp, (4) Không quan trọng & Không khẩn cấp.',
          'Lên kế hoạch hành động dựa trên sự phân loại này.',
        ],
        expectedResults:
          'Một kế hoạch làm việc rõ ràng, tập trung vào những việc thực sự quan trọng.',
      },
    ],
    realWorldApplications: [
      'Quản lý công việc cá nhân và dự án.',
      'Cân bằng giữa công việc, học tập và cuộc sống.',
      'Chuẩn bị cho các kỳ thi hoặc deadline quan trọng.',
      'Giảm căng thẳng và cảm giác quá tải.',
    ],
    careerConnect: {
      name: 'Anh Trần Tuấn Anh',
      title: 'Nhà sáng lập & CEO',
      company: 'Ticketbox',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-tuan-anh',
      quote:
        'Là một nhà khởi nghiệp, thời gian là tài sản quý giá nhất. Nắm vững kỹ năng quản lý thời gian không chỉ giúp bạn hoàn thành công việc, mà còn cho bạn không gian để suy nghĩ chiến lược và sáng tạo.',
    },
  },
];
