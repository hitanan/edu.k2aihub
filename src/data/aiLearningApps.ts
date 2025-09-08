import { BaseLessonData } from '@/types/lesson-base';

export const aiLearningApps: BaseLessonData[] = [
  {
    id: 'photomath',
    name: 'PhotoMath',
    description:
      'Ứng dụng AI giải toán bằng cách chụp ảnh, có thể giải từ số học cơ bản đến giải tích nâng cao với lời giải chi tiết từng bước.',
    category: 'math',
    platform: 'Both',
    pricing: 'Freemium',
    features: [
      'Giải toán bằng camera AI',
      'Lời giải từng bước chi tiết',
      'Đồ thị tương tác',
      'Lịch sử bài giải',
      'Máy tính khoa học',
      'Giải bài toán đố',
      'Giải hình học',
      'Thống kê và xác suất',
    ],
    bestFor: [
      'Học sinh THCS, THPT',
      'Sinh viên đại học',
      'Ôn tập kiểm tra',
      'Làm bài tập về nhà',
      'Hiểu phương pháp giải',
      'Kiểm tra đáp án',
    ],
    limitations: [
      'Phiên bản miễn phí giới hạn lời giải',
      'Không thay thế việc học hiểu bản chất',
      'Đôi khi nhận dạng chữ viết tay kém',
      'Cần kết nối internet cho tính năng cao cấp',
    ],
    howToUse: [
      {
        step: 1,
        title: 'Tải và Cài Đặt Ứng Dụng',
        description: 'Tải PhotoMath từ App Store hoặc Google Play Store, sau đó tạo tài khoản miễn phí.',
        tips: [
          'Cho phép ứng dụng quyền truy cập camera.',
          'Đăng ký tài khoản để đồng bộ hóa dữ liệu.',
          'Chọn ngôn ngữ tiếng Việt trong cài đặt nếu có.',
        ],
      },
      {
        step: 2,
        title: 'Chụp Ảnh Bài Toán',
        description: 'Đưa camera đến phương trình cần giải, đảm bảo ảnh rõ nét và nằm gọn trong khung hình.',
        tips: [
          'Giữ camera ổn định, tránh rung tay.',
          'Đảm bảo môi trường đủ ánh sáng.',
          'Chỉ chụp một phương trình mỗi lần.',
          'Viết số và ký hiệu rõ ràng, tránh nét mờ.',
        ],
      },
      {
        step: 3,
        title: 'Xem Kết Quả và Lời Giải',
        description: 'Ứng dụng sẽ hiển thị đáp án ngay lập tức. Nhấn vào "Các bước giải" để xem lời giải chi tiết.',
        tips: [
          'Đọc kỹ từng bước giải để hiểu logic.',
          'Cố gắng hiểu lý do đằng sau mỗi bước biến đổi.',
          'Ghi chép lại phương pháp giải các dạng bài mới.',
          'Thử tự làm lại một bài tương tự để kiểm tra kiến thức.',
        ],
      },
      {
        step: 4,
        title: 'Sử Dụng Tính Năng Nâng Cao',
        description: 'Khám phá các tính năng như đồ thị tương tác, máy tính khoa học và lịch sử các bài đã giải.',
        tips: [
          'Sử dụng đồ thị để trực quan hóa và hiểu rõ hơn về hàm số.',
          'Lưu lại các bài giải quan trọng để ôn tập sau.',
          'Xem lại lịch sử để theo dõi tiến trình học tập.',
          'Sử dụng máy tính cho các phép tính nhanh.',
        ],
      },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=pyjZ58tTWUI',
    websiteUrl: 'https://photomath.com/',
    imageUrl:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.8,
    downloads: '100M+',
    languages: ['Tiếng Việt', 'Tiếng Anh', 'hơn 60 ngôn ngữ khác'],
    ageGroup: '12-25 tuổi',
    subjects: ['Toán học', 'Đại số', 'Hình học', 'Giải tích', 'Thống kê'],
    vietnamContext: {
      title: 'PhotoMath và việc học Toán tại Việt Nam',
      content: [
        'PhotoMath rất phổ biến trong cộng đồng học sinh Việt Nam, đặc biệt trong các kỳ ôn thi chuyển cấp và thi tốt nghiệp THPT.',
        'Nhiều giáo viên tại Việt Nam khuyến khích học sinh sử dụng PhotoMath như một công cụ để kiểm tra đáp án và tham khảo thêm cách giải, thay vì lạm dụng để chép bài.',
        'Ứng dụng giúp giảm áp lực cho phụ huynh khi không thể giải đáp các bài toán phức tạp cho con cái.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Văn Minh',
      title: 'Gia sư Toán',
      company: 'Trung tâm Luyện thi ABC',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-van-minh',
      quote:
        'Công nghệ như PhotoMath là một con dao hai lưỡi. Nếu biết cách sử dụng thông minh, nó sẽ là người trợ giảng đắc lực giúp học sinh hiểu sâu vấn đề. Nhưng nếu lạm dụng, nó sẽ làm thui chột tư duy phản biện.',
    },
    quizzes: [
      {
        question: 'Tính năng chính của PhotoMath là gì?',
        options: ['Dạy ngoại ngữ', 'Giải toán bằng camera', 'Viết văn', 'Chơi game'],
        correctAnswerIndex: 1,
        explanation:
          'PhotoMath sử dụng công nghệ nhận dạng hình ảnh để "đọc" và giải các bài toán được chụp bằng camera điện thoại.',
      },
      {
        question: 'PhotoMath có thể giải được loại toán nào?',
        options: ['Chỉ toán cộng trừ', 'Chỉ toán cấp 1', 'Từ số học cơ bản đến giải tích nâng cao', 'Chỉ hình học'],
        correctAnswerIndex: 2,
        explanation:
          'PhotoMath có khả năng giải quyết một phổ rộng các bài toán, từ các phép tính đơn giản đến các chủ đề phức tạp như giải tích, đại số tuyến tính.',
      },
    ],
  },
  {
    id: 'gauth',
    name: 'Gauth (Gauthmath)',
    description:
      'Trợ lý học tập AI giải toán 24/7 bằng camera và có thể kết nối với gia sư thật. Hỗ trợ từ toán cơ bản đến toán đại học và các môn khoa học khác.',
    category: 'math',
    platform: 'Both',
    pricing: 'Freemium',
    features: [
      'Giải toán bằng AI qua camera',
      'Kết nối với gia sư thật',
      'Giải thích bằng video ngắn',
      'Cộng đồng hỏi đáp',
      'Phiên học gia sư trực tiếp',
      'Lời giải từng bước',
      'Máy tính vẽ đồ thị',
      'Hỗ trợ bài tập 24/7',
    ],
    bestFor: [
      'Học sinh cần trợ giúp tức thì',
      'Các bài toán phức tạp, đa bước',
      'Học 1 kèm 1 với gia sư',
      'Luyện thi đại học, các kỳ thi quốc tế',
      'Các chương trình AP và IB',
      'Các môn Khoa học Tự nhiên (Lý, Hóa)',
    ],
    limitations: [
      'Cần "credits" (tín dụng) cho các phiên học với gia sư',
      'Gia sư chủ yếu giao tiếp bằng tiếng Anh',
      'Một số tính năng nâng cao yêu cầu trả phí',
      'Chất lượng giải đáp phụ thuộc vào từng gia sư',
    ],
    howToUse: [
      {
        step: 1,
        title: 'Đăng Ký Tài Khoản',
        description: 'Tạo tài khoản Gauth và chọn cấp độ toán học phù hợp với bạn.',
        tips: [
          'Chọn đúng khối lớp của bạn để nhận được sự hỗ trợ phù hợp.',
          'Hoàn thành hồ sơ để có các gợi ý tốt hơn.',
          'Liên kết với tài khoản Google/Facebook để đăng nhập dễ dàng.',
          'Thiết lập tùy chọn thông báo.',
        ],
      },
      {
        step: 2,
        title: 'Chụp Ảnh Hoặc Nhập Câu Hỏi',
        description: 'Sử dụng camera để chụp bài toán hoặc gõ câu hỏi trực tiếp vào ứng dụng.',
        tips: [
          'Đảm bảo đủ ánh sáng khi chụp ảnh.',
          'Cắt ảnh chỉ chứa câu hỏi cần thiết.',
          'Gõ lại phương trình nếu chữ viết tay không rõ ràng.',
          'Thêm bối cảnh hoặc các dữ kiện liên quan nếu cần.',
        ],
      },
      {
        step: 3,
        title: 'Nhận Lời Giải từ AI',
        description: 'AI sẽ phân tích và cung cấp một lời giải chi tiết trong vài giây.',
        tips: [
          'Xem lại từng bước một cách cẩn thận.',
          'Hiểu rõ logic đằng sau mỗi bước giải.',
          'Thử làm các bài tập tương tự để luyện tập.',
          'Đánh giá chất lượng lời giải để giúp cải thiện AI.',
        ],
      },
      {
        step: 4,
        title: 'Kết Nối Với Gia Sư (Nếu Cần)',
        description:
          'Nếu lời giải của AI chưa đủ rõ ràng, bạn có thể kết nối với một gia sư trực tiếp để được giải thích chi tiết hơn.',
        tips: [
          'Chuẩn bị sẵn các câu hỏi cụ thể.',
          'Chuẩn bị giấy bút để ghi chép.',
          'Hỏi về các phương pháp giải khác (nếu có).',
          'Yêu cầu gia sư cho thêm bài tập thực hành.',
        ],
      },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Slqw4wC_ZN4',
    websiteUrl: 'https://www.gauthmath.com/',
    imageUrl:
      'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.6,
    downloads: '50M+',
    languages: ['Tiếng Anh', 'Tây Ban Nha', 'Bồ Đào Nha', 'Tiếng Hindi'],
    ageGroup: '13-22 tuổi',
    subjects: ['Toán học', 'Giải tích', 'Thống kê', 'Vật lý', 'Hóa học'],
    vietnamContext: {
      title: 'Gia sư AI và thị trường dạy thêm tại Việt Nam',
      content: [
        'Gauth cung cấp một giải pháp thay thế linh hoạt và chi phí thấp hơn so với các trung tâm gia sư truyền thống tại Việt Nam.',
        'Tính năng kết nối gia sư thật rất hữu ích cho học sinh Việt Nam muốn luyện tập tiếng Anh chuyên ngành khoa học.',
        'Đây là công cụ cạnh tranh trực tiếp với các nền tảng gia sư trực tuyến trong nước, nhưng có lợi thế về công nghệ AI.',
      ],
    },
    careerConnect: {
      name: 'Chị Lê Thu Trang',
      title: 'Sáng lập Nền tảng Gia sư Online',
      company: 'EduConnect Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=le-thu-trang',
      quote:
        'Các ứng dụng như Gauth đang định hình lại ngành giáo dục. Chúng tôi phải liên tục đổi mới, kết hợp công nghệ AI vào nền tảng của mình để mang lại trải nghiệm học tập tốt nhất, kết hợp giữa hiệu quả của máy và sự đồng cảm của con người.',
    },
    quizzes: [
      {
        question: 'Điểm khác biệt chính của Gauth so với PhotoMath là gì?',
        options: [
          'Chỉ giải được toán cấp 1',
          'Hoàn toàn miễn phí',
          'Có khả năng kết nối với gia sư thật',
          'Không có quảng cáo',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Ngoài việc giải toán bằng AI, Gauth còn có tính năng độc đáo là kết nối người dùng với các gia sư thực thụ để có được sự giải đáp sâu hơn.',
      },
      {
        question: 'Gauth hỗ trợ những môn học nào?',
        options: ['Chỉ Toán', 'Chỉ Văn', 'Toán, Lý, Hóa', 'Tất cả các môn'],
        correctAnswerIndex: 2,
        explanation: 'Gauth không chỉ mạnh về Toán mà còn hỗ trợ các môn khoa học tự nhiên khác như Vật lý và Hóa học.',
      },
    ],
  },
  {
    id: 'socratic',
    name: 'Socratic by Google',
    description:
      'Trợ lý bài tập về nhà được hỗ trợ bởi AI cho nhiều môn học. Sử dụng camera và giọng nói để giải thích các khái niệm một cách dễ hiểu.',
    category: 'general',
    platform: 'Mobile',
    pricing: 'Free',
    features: [
      'Hỗ trợ đa môn học',
      'Giải thích bằng hình ảnh trực quan',
      'Nhận dạng giọng nói',
      'Tổng hợp tài nguyên học tập chọn lọc',
      'Hướng dẫn từng bước',
      'Video hướng dẫn',
      'Giải thích từ các chuyên gia',
      'Gợi ý các chủ đề liên quan',
    ],
    bestFor: [
      'Học sinh THCS, THPT',
      'Học nhiều môn cùng lúc',
      'Người học qua hình ảnh (Visual learners)',
      'Hiểu các khái niệm phức tạp',
      'Trợ giúp bài tập về nhà nhanh chóng',
      'Học nhóm',
    ],
    limitations: [
      'Chỉ có trên thiết bị di động',
      'Khả năng giải toán nâng cao không bằng PhotoMath',
      'Hỗ trợ ngôn ngữ còn hạn chế',
      'Yêu cầu tài khoản Google',
    ],
    howToUse: [
      {
        step: 1,
        title: 'Cài đặt và Thiết lập',
        description: 'Tải Socratic từ App Store/Play Store và đăng nhập bằng tài khoản Google của bạn.',
        tips: [
          'Cho phép quyền truy cập camera và micro.',
          'Chọn các môn học bạn đang theo học.',
          'Thiết lập đúng khối lớp của bạn.',
          'Bật thông báo để nhận các mẹo học tập.',
        ],
      },
      {
        step: 2,
        title: 'Đặt Câu Hỏi Của Bạn',
        description: 'Chụp ảnh câu hỏi, đọc to câu hỏi, hoặc gõ trực tiếp vào ứng dụng.',
        tips: [
          'Đảm bảo văn bản trong ảnh rõ ràng và dễ đọc.',
          'Nói rõ ràng nếu sử dụng tính năng giọng nói.',
          'Bao gồm cả bối cảnh của câu hỏi nếu cần.',
          'Thử diễn đạt lại câu hỏi nếu không tìm thấy kết quả.',
        ],
      },
      {
        step: 3,
        title: 'Khám Phá Kết Quả',
        description: 'Duyệt qua các giải thích, video, và các tài nguyên liên quan mà Socratic cung cấp.',
        tips: [
          'Bắt đầu với phần giải thích tổng quan.',
          'Xem video cho các chủ đề phức tạp.',
          'Khám phá các khái niệm liên quan để mở rộng kiến thức.',
          'Đánh dấu lại các tài nguyên hữu ích.',
        ],
      },
      {
        step: 4,
        title: 'Đào Sâu Kiến Thức',
        description: 'Sử dụng các tài nguyên được gợi ý để học sâu hơn về chủ đề.',
        tips: [
          'Luyện tập với các bài toán tương tự.',
          'Đọc các bài hướng dẫn được viết bởi chuyên gia.',
          'Liên hệ các khái niệm đã học với thế giới thực.',
          'Chia sẻ những gì bạn học được với bạn bè.',
        ],
      },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=vZ1tQZ8glXg',
    websiteUrl: 'https://socratic.org/',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.5,
    downloads: '10M+',
    languages: ['Tiếng Anh'],
    ageGroup: '13-18 tuổi',
    subjects: ['Toán', 'Khoa học', 'Lịch sử', 'Tiếng Anh', 'Hóa học', 'Sinh học', 'Vật lý', 'Văn học'],
    vietnamContext: {
      title: 'Học tập đa môn với Socratic',
      content: [
        'Socratic là công cụ lý tưởng cho học sinh Việt Nam theo chương trình giáo dục phổ thông mới, vốn nhấn mạnh việc học liên môn và vận dụng kiến thức tổng hợp.',
        'Mặc dù giao diện chính là tiếng Anh, đây lại là cơ hội tốt để học sinh Việt Nam trau dồi từ vựng tiếng Anh chuyên ngành cho các môn khoa học, lịch sử.',
        'Tính năng tổng hợp tài nguyên từ nhiều nguồn uy tín giúp học sinh hình thành kỹ năng tự nghiên cứu và kiểm chứng thông tin.',
      ],
    },
    careerConnect: {
      name: 'Thầy Đặng Minh Tuấn',
      title: 'Chuyên viên Phát triển Chương trình Giáo dục',
      company: 'Viện Khoa học Giáo dục Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=dang-minh-tuan',
      quote:
        'Socratic thể hiện đúng tinh thần của giáo dục hiện đại: không chỉ cung cấp câu trả lời, mà còn dạy cách tư duy, cách tìm kiếm và liên kết thông tin. Đây là kỹ năng quan trọng nhất cho công dân thế kỷ 21.',
    },
    quizzes: [
      {
        question: 'Socratic là sản phẩm của công ty nào?',
        options: ['Facebook', 'Apple', 'Microsoft', 'Google'],
        correctAnswerIndex: 3,
        explanation:
          'Socratic được Google mua lại và phát triển, tích hợp sức mạnh của công cụ tìm kiếm Google để cung cấp các tài nguyên học tập chất lượng.',
      },
      {
        question: 'Điểm mạnh của Socratic là gì?',
        options: [
          'Chỉ giải toán',
          'Hỗ trợ nhiều môn học và cung cấp giải thích trực quan',
          'Chỉ dành cho sinh viên đại học',
          'Yêu cầu trả phí cao',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Socratic nổi bật với khả năng hỗ trợ nhiều môn học khác nhau, không chỉ là Toán, và cách giải thích vấn đề bằng nhiều định dạng (văn bản, hình ảnh, video).',
      },
    ],
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description:
      'Trợ lý viết lách AI giúp cải thiện ngữ pháp, chính tả, văn phong và giọng văn. Một công cụ thiết yếu cho việc viết luận học thuật và giao tiếp chuyên nghiệp.',
    category: 'writing',
    platform: 'Both',
    pricing: 'Freemium',
    features: [
      'Kiểm tra ngữ pháp thời gian thực',
      'Sửa lỗi chính tả và dấu câu',
      'Gợi ý về văn phong và giọng văn',
      'Phát hiện đạo văn (Bản Premium)',
      'Nâng cao vốn từ vựng',
      'Cải thiện sự rõ ràng, mạch lạc',
      'Thiết lập mục tiêu viết',
      'Thống kê hiệu suất',
    ],
    bestFor: [
      'Viết luận học thuật',
      'Soạn thảo email chuyên nghiệp',
      'Viết bài báo nghiên cứu',
      'Viết sáng tạo',
      'Người học tiếng Anh (ESL)',
      'Giao tiếp trong kinh doanh',
    ],
    limitations: [
      'Các tính năng cao cấp yêu cầu đăng ký trả phí',
      'Chủ yếu hỗ trợ tiếng Anh',
      'Đôi khi đưa ra các gợi ý không cần thiết hoặc sai',
      'Không thể thay thế hoàn toàn việc đọc và sửa lỗi của con người',
    ],
    howToUse: [
      {
        step: 1,
        title: 'Đăng Ký và Cài Đặt',
        description:
          'Tạo tài khoản Grammarly và cài đặt tiện ích mở rộng cho trình duyệt hoặc ứng dụng cho máy tính/di động.',
        tips: [
          'Cài đặt tiện ích mở rộng trình duyệt để tích hợp liền mạch.',
          'Tải ứng dụng cho máy tính để sử dụng ngoại tuyến.',
          'Thiết lập bàn phím trên di động.',
          'Kết nối với các nền tảng bạn sử dụng (Google Docs, Word, v.v.).',
        ],
      },
      {
        step: 2,
        title: 'Thiết Lập Mục Tiêu Viết',
        description: 'Cấu hình đối tượng độc giả, mức độ trang trọng, lĩnh vực và mục đích cho bài viết của bạn.',
        tips: [
          'Chọn đối tượng phù hợp (phổ thông, có kiến thức, chuyên gia).',
          'Đặt mức độ trang trọng (thân mật, trung tính, trang trọng).',
          'Chọn lĩnh vực (học thuật, kinh doanh, sáng tạo, v.v.).',
          'Xác định mục đích (thông báo, mô tả, thuyết phục, kể chuyện).',
        ],
      },
      {
        step: 3,
        title: 'Viết và Xem Lại Gợi Ý',
        description: 'Bắt đầu viết và xem lại các gợi ý theo thời gian thực từ AI của Grammarly.',
        tips: [
          'Đừng mù quáng chấp nhận tất cả các gợi ý.',
          'Hiểu TẠI SAO mỗi sửa lỗi được đề xuất.',
          'Học từ các giải thích để cải thiện kỹ năng.',
          'Giữ lại giọng văn và phong cách độc đáo của bạn.',
        ],
      },
      {
        step: 4,
        title: 'Phân Tích Hiệu Suất',
        description: 'Xem lại các thống kê về hiệu suất viết và theo dõi sự cải thiện của bạn theo thời gian.',
        tips: [
          'Kiểm tra báo cáo viết hàng tuần.',
          'Theo dõi xu hướng về độ chính xác.',
          'Xác định các mẫu lỗi thường gặp.',
          'Đặt mục tiêu để cải thiện.',
        ],
      },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=FJ_ZWAUO78s',
    websiteUrl: 'https://www.grammarly.com/',
    imageUrl:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.6,
    downloads: '50M+',
    languages: ['Tiếng Anh'],
    ageGroup: '16+ tuổi',
    subjects: ['Viết Tiếng Anh', 'Viết Học thuật', 'Giao tiếp Kinh doanh', 'Viết Sáng tạo'],
    vietnamContext: {
      title: 'Grammarly và hành trình chinh phục tiếng Anh của người Việt',
      content: [
        'Grammarly là công cụ không thể thiếu đối với sinh viên Việt Nam có ý định du học hoặc viết bài báo khoa học quốc tế.',
        'Người đi làm trong các công ty đa quốc gia tại Việt Nam sử dụng Grammarly hàng ngày để đảm bảo email và tài liệu chuyên nghiệp.',
        'Nó giúp người học tiếng Anh tại Việt Nam tự tin hơn khi viết, giảm bớt nỗi sợ mắc lỗi ngữ pháp và dùng từ.',
      ],
    },
    careerConnect: {
      name: 'Chị Đỗ Hoàng Anh',
      title: 'Chuyên viên Truyền thông Quốc tế',
      company: 'GlobalLink Corp',
      imageUrl: 'https://i.pravatar.cc/150?u=do-hoang-anh',
      quote:
        'Trong môi trường làm việc toàn cầu, một email viết sai ngữ pháp có thể làm giảm uy tín của bạn. Grammarly giống như một người biên tập viên cần mẫn, giúp tôi luôn tự tin rằng mọi thông điệp mình gửi đi đều chuyên nghiệp và chỉn chu.',
    },
    quizzes: [
      {
        question: 'Grammarly chủ yếu hỗ trợ ngôn ngữ nào?',
        options: ['Tiếng Việt', 'Tiếng Trung', 'Tiếng Anh', 'Tất cả các ngôn ngữ'],
        correctAnswerIndex: 2,
        explanation:
          'Grammarly được thiết kế chuyên sâu và mạnh mẽ nhất cho việc kiểm tra và cải thiện văn viết bằng tiếng Anh.',
      },
      {
        question: 'Tính năng "Plagiarism detection" của Grammarly dùng để làm gì?',
        options: ['Dịch văn bản', 'Kiểm tra lỗi chính tả', 'Phát hiện đạo văn', 'Tóm tắt văn bản'],
        correctAnswerIndex: 2,
        explanation:
          'Tính năng này so sánh văn bản của bạn với hàng tỷ trang web và tài liệu học thuật để đảm bảo tính nguyên gốc và tránh đạo văn.',
      },
    ],
  },
  {
    id: 'questionai',
    name: 'Question.AI',
    description:
      'Trợ lý giải bài tập và gia sư AI cho mọi môn học. Tải ảnh câu hỏi lên và nhận giải thích chi tiết với nhiều phương pháp giải khác nhau.',
    category: 'general',
    platform: 'Both',
    pricing: 'Freemium',
    features: [
      'Giải bài tập đa môn học bằng AI',
      'Công nghệ nhận dạng hình ảnh',
      'Giải thích từng bước',
      'Nhiều phương pháp giải',
      'Hoạt động 24/7',
      'Thời gian phản hồi nhanh',
      'Hỗ trợ viết luận',
      'Công cụ luyện thi',
    ],
    bestFor: [
      'Hỗ trợ bài tập về nhà nhiều môn',
      'Kiểm tra nhanh đáp án',
      'Học các cách tiếp cận khác nhau',
      'Các bài tập có thời hạn gấp',
      'Các buổi tự học',
      'Luyện thi',
    ],
    limitations: [
      'Chất lượng câu trả lời thay đổi tùy môn học',
      'Giới hạn số lượng câu hỏi miễn phí mỗi ngày',
      'Phần giải thích đôi khi hơi ngắn gọn',
      'Có thể không bao quát các chủ đề quá chuyên sâu',
    ],
    howToUse: [
      {
        step: 1,
        title: 'Tạo Tài Khoản',
        description: 'Đăng ký tài khoản Question.AI và xác thực địa chỉ email của bạn.',
        tips: [
          'Sử dụng email trường học nếu có giảm giá cho sinh viên.',
          'Hoàn thành hồ sơ để có gợi ý tốt hơn.',
          'Chọn các môn bạn đang học.',
          'Thiết lập tùy chọn thông báo.',
        ],
      },
      {
        step: 2,
        title: 'Tải Lên Câu Hỏi',
        description: 'Chụp ảnh hoặc gõ câu hỏi bạn cần giải đáp.',
        tips: [
          'Đảm bảo câu hỏi trong ảnh rõ ràng.',
          'Bao gồm tất cả bối cảnh liên quan.',
          'Chỉ định môn học nếu câu hỏi không rõ ràng.',
          'Thêm bất kỳ yêu cầu đặc biệt nào.',
        ],
      },
      {
        step: 3,
        title: 'Xem Lại Phản Hồi Của AI',
        description: 'Đọc kỹ phần giải thích và các phương pháp giải được AI cung cấp.',
        tips: [
          'So sánh các cách tiếp cận giải quyết khác nhau.',
          'Hiểu logic đằng sau mỗi bước.',
          'Ghi chú các khái niệm và công thức chính.',
          'Luyện tập với các bài toán tương tự.',
        ],
      },
      {
        step: 4,
        title: 'Học Tập Nối Tiếp',
        description: 'Sử dụng các tài nguyên được cung cấp để đào sâu hiểu biết về chủ đề.',
        tips: [
          'Khám phá các chủ đề liên quan.',
          'Luyện tập với các biến thể của bài toán.',
          'Tạo ghi chú học tập.',
          'Dạy lại khái niệm đó cho người khác.',
        ],
      },
    ],
    videoUrl: 'https://www.youtube.com/shorts/EJxCDJmuMYY',
    websiteUrl: 'https://www.question.ai/',
    imageUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.3,
    downloads: '5M+',
    languages: ['Tiếng Anh', 'Tây Ban Nha', 'Pháp'],
    ageGroup: '14-25 tuổi',
    subjects: ['Tất cả các môn học thuật', 'STEM', 'Nghệ thuật tự do', 'Luyện thi'],
    vietnamContext: {
      title: 'Gia sư bỏ túi cho học sinh Việt',
      content: [
        'Question.AI là một công cụ hữu ích cho học sinh Việt Nam, những người thường phải đối mặt với một lượng lớn bài tập về nhà ở nhiều môn học khác nhau.',
        'Tính năng cung cấp nhiều phương pháp giải giúp học sinh phát triển tư duy linh hoạt, một kỹ năng quan trọng trong các kỳ thi tại Việt Nam.',
        'Với chi phí thấp, đây là một giải pháp học thêm hiệu quả cho nhiều gia đình không có điều kiện thuê gia sư riêng cho từng môn.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Thành Nam',
      title: 'Thủ khoa đầu vào Đại học Bách Khoa',
      company: 'Cựu học sinh',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thanh-nam',
      quote:
        'Bí quyết của em không phải là học ngày đêm, mà là học thông minh. Em dùng các app AI như Question.AI để nhanh chóng lấp đầy lỗ hổng kiến thức, hiểu sâu một vấn đề từ nhiều góc nhìn, và dành thời gian còn lại để giải các bài toán nâng cao.',
    },
    quizzes: [
      {
        question: 'Question.AI có thể giúp bạn với những môn học nào?',
        options: ['Chỉ Toán và Lý', 'Chỉ các môn xã hội', 'Hầu hết các môn học thuật', 'Chỉ Tiếng Anh'],
        correctAnswerIndex: 2,
        explanation:
          'Question.AI được thiết kế như một công cụ học tập tổng quát, hỗ trợ một loạt các môn học từ STEM đến các môn nghệ thuật tự do.',
      },
      {
        question: 'Làm thế nào để đặt câu hỏi trên Question.AI?',
        options: [
          'Chỉ bằng cách gửi email',
          'Chỉ bằng cách gọi điện',
          'Bằng cách chụp ảnh hoặc gõ văn bản',
          'Chỉ qua mạng xã hội',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Ứng dụng cung cấp sự linh hoạt cho người dùng bằng cách cho phép họ nhập câu hỏi qua hình ảnh chụp hoặc gõ trực tiếp.',
      },
    ],
  },
  {
    id: 'duolingo',
    name: 'Duolingo',
    description:
      'Nền tảng học ngoại ngữ được hỗ trợ bởi AI với các bài học được cá nhân hóa, nhận dạng giọng nói và trò chơi hóa. Ứng dụng học ngôn ngữ phổ biến nhất thế giới.',
    category: 'language',
    platform: 'Both',
    pricing: 'Freemium',
    features: [
      'Cá nhân hóa bài học bằng AI',
      'Công nghệ nhận dạng giọng nói',
      'Trải nghiệm học tập được trò chơi hóa',
      'Các câu chuyện và podcast',
      'Chế độ học ngoại tuyến',
      'Theo dõi tiến độ',
      'Tính năng học tập xã hội',
      'Độ khó thích ứng',
    ],
    bestFor: [
      'Người mới bắt đầu học ngôn ngữ mới',
      'Duy trì kỹ năng ngôn ngữ',
      'Tạo thói quen luyện tập hàng ngày',
      'Người học qua hình ảnh và âm thanh',
      'Người có lịch trình bận rộn',
      'Người học có tính cạnh tranh',
    ],
    limitations: [
      'Thực hành hội thoại còn hạn chế',
      'Quảng cáo trong phiên bản miễn phí',
      'Phản hồi về phát âm có thể được cải thiện',
      'Không hoàn toàn phù hợp cho người học nâng cao',
    ],
    howToUse: [
      {
        step: 1,
        title: 'Chọn Ngôn Ngữ và Mục Tiêu',
        description: 'Chọn ngôn ngữ bạn muốn học và đặt mục tiêu thời gian học hàng ngày.',
        tips: [
          'Bắt đầu với mục tiêu thực tế (5-15 phút mỗi ngày).',
          'Làm bài kiểm tra xếp lớp nếu bạn đã có kiến thức trước đó.',
          'Chọn lộ trình học phù hợp với nhu cầu của bạn.',
          'Đặt thông báo nhắc nhở.',
        ],
      },
      {
        step: 2,
        title: 'Hoàn Thành Bài Học Hàng Ngày',
        description: 'Luyện tập với các loại bài tập đa dạng: nối từ, nói, nghe.',
        tips: [
          'Tập trung vào các bài tập phát âm.',
          'Hạn chế sử dụng gợi ý để thử thách bản thân.',
          'Xem lại các lỗi sai trong phần luyện tập.',
          'Duy trì chuỗi ngày học (streak) để xây dựng thói quen.',
        ],
      },
      {
        step: 3,
        title: 'Tương Tác Với Các Câu Chuyện',
        description: 'Đọc các câu chuyện tương tác để cải thiện khả năng đọc hiểu và từ vựng.',
        tips: [
          'Đọc to các câu chuyện để luyện phát âm.',
          'Tra cứu các từ không quen thuộc.',
          'Thảo luận về các câu chuyện với những người học khác.',
          'Áp dụng từ vựng mới vào các cuộc hội thoại.',
        ],
      },
      {
        step: 4,
        title: 'Luyện Nói',
        description: 'Sử dụng các bài tập nói và tính năng hội thoại để cải thiện sự lưu loát.',
        tips: [
          'Luyện tập trong một môi trường yên tĩnh.',
          'Lặp lại các câu nhiều lần.',
          'Ghi âm lại giọng nói của bạn để so sánh phát âm.',
          'Tham gia các sự kiện của Duolingo để trò chuyện thực tế.',
        ],
      },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=P3ZTxke4AOU',
    websiteUrl: 'https://www.duolingo.com/',
    imageUrl:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.7,
    downloads: '500M+',
    languages: ['Hơn 40 ngôn ngữ, bao gồm cả Tiếng Việt'],
    ageGroup: '8+ tuổi',
    subjects: [
      'Ngoại ngữ',
      'Tiếng Anh',
      'Tiếng Tây Ban Nha',
      'Tiếng Pháp',
      'Tiếng Đức',
      'Tiếng Nhật',
      'Tiếng Hàn',
      'Tiếng Trung',
    ],
    vietnamContext: {
      title: 'Duolingo và phong trào học ngoại ngữ tại Việt Nam',
      content: [
        'Duolingo là một trong những ứng dụng giáo dục được tải nhiều nhất tại Việt Nam, đặc biệt là khóa học Tiếng Anh.',
        'Phương pháp học "vui như chơi" của Duolingo rất phù hợp với giới trẻ Việt Nam, giúp việc học ngoại ngữ bớt căng thẳng.',
        'Nhiều trường học và trung tâm ngoại ngữ tại Việt Nam sử dụng Duolingo for Schools như một công cụ bổ trợ cho việc giảng dạy.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Mai Chi',
      title: 'Hướng dẫn viên Du lịch Quốc tế',
      company: 'Vietravel',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-mai-chi',
      quote:
        'Công việc của tôi đòi hỏi phải giao tiếp bằng nhiều ngôn ngữ. Duolingo giúp tôi duy trì và "làm nóng" các kỹ năng ngôn ngữ của mình mỗi ngày, đặc biệt là trước khi dẫn một tour khách nước ngoài. Nó giống như việc tập thể dục cho não bộ vậy.',
    },
    quizzes: [
      {
        question: 'Phương pháp học tập chính của Duolingo là gì?',
        options: [
          'Xem video bài giảng dài',
          'Học qua các trò chơi và bài tập ngắn',
          'Đọc sách giáo khoa',
          'Nói chuyện với người bản xứ',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Duolingo nổi tiếng với phương pháp "trò chơi hóa" (gamification), biến việc học thành các bài tập ngắn, vui nhộn và có tính gây nghiện để người dùng duy trì thói quen.',
      },
      {
        question: 'Duolingo có khóa học Tiếng Việt cho người nước ngoài không?',
        options: ['Không', 'Có', 'Chỉ có ở bản trả phí', 'Đang phát triển'],
        correctAnswerIndex: 1,
        explanation:
          'Có, Duolingo cung cấp một khóa học Tiếng Việt dành cho những người nói Tiếng Anh muốn học ngôn ngữ của chúng ta.',
      },
    ],
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description:
      'Lập trình viên cặp AI được cung cấp bởi OpenAI Codex. Cung cấp các gợi ý mã, hoàn thành các hàm và giải thích mã trong thời gian thực.',
    category: 'coding',
    platform: 'Web',
    pricing: 'Paid',
    features: [
      'Hoàn thành và gợi ý mã',
      'Hỗ trợ đa ngôn ngữ lập trình',
      'Gợi ý dựa trên ngữ cảnh',
      'Giải thích mã',
      'Tạo bài kiểm thử (test)',
      'Viết tài liệu (documentation)',
      'Hỗ trợ tái cấu trúc mã (refactoring)',
      'Tích hợp với IDE',
    ],
    bestFor: [
      'Sinh viên ngành lập trình',
      'Nhà phát triển phần mềm',
      'Học và hiểu mã nguồn',
      'Tạo mẫu nhanh (rapid prototyping)',
      'Học các framework mới',
      'Viết tài liệu cho mã nguồn',
    ],
    limitations: [
      'Yêu cầu đăng ký trả phí sau thời gian dùng thử',
      'Yêu cầu tài khoản GitHub',
      'Đôi khi gợi ý mã không hiệu quả',
      'Lo ngại về quyền riêng tư với mã nguồn độc quyền',
    ],
    howToUse: [
      {
        step: 1,
        title: 'Thiết lập GitHub Copilot',
        description: 'Cài đặt tiện ích mở rộng trong IDE ưa thích của bạn và xác thực bằng tài khoản GitHub.',
        tips: [
          'Có sẵn cho VS Code, Visual Studio, Neovim, JetBrains.',
          'Đăng ký gói sinh viên nếu đủ điều kiện để được giảm giá.',
          'Cấu hình các thiết lập gợi ý.',
          'Đọc chính sách bảo mật về việc sử dụng mã nguồn.',
        ],
      },
      {
        step: 2,
        title: 'Viết Bình Luận (Comments)',
        description: 'Mô tả những gì bạn muốn đạt được bằng ngôn ngữ tự nhiên trong phần bình luận của mã.',
        tips: [
          'Cụ thể về các yêu cầu của hàm.',
          'Bao gồm các ví dụ về đầu vào/đầu ra.',
          'Đề cập đến các trường hợp đặc biệt (edge cases).',
          'Sử dụng ngôn ngữ rõ ràng, mô tả.',
        ],
      },
      {
        step: 3,
        title: 'Xem Lại Các Gợi Ý',
        description: 'Kiểm tra các gợi ý mã của Copilot và chọn những gợi ý phù hợp.',
        tips: [
          'Đừng chấp nhận các gợi ý một cách mù quáng.',
          'Hiểu rõ mã đó làm gì.',
          'Kiểm thử kỹ lưỡng mã được gợi ý.',
          'Sửa đổi các gợi ý cho phù hợp với nhu cầu của bạn.',
        ],
      },
      {
        step: 4,
        title: 'Học Từ Mã Nguồn',
        description: 'Nghiên cứu mã được tạo ra để hiểu các mẫu thiết kế và cải thiện kỹ năng của bạn.',
        tips: [
          'Yêu cầu Copilot giải thích đoạn mã phức tạp.',
          'Học các tính năng ngôn ngữ mới.',
          'Hiểu các thông lệ tốt nhất (best practices).',
          'So sánh nhiều cách tiếp cận giải quyết khác nhau.',
        ],
      },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=EPyyyB23NUU',
    websiteUrl: 'https://github.com/features/copilot',
    imageUrl:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.5,
    downloads: 'N/A (Tiện ích mở rộng)',
    languages: ['Tất cả các ngôn ngữ lập trình'],
    ageGroup: '16+ tuổi',
    subjects: ['Khoa học Máy tính', 'Kỹ thuật Phần mềm', 'Phát triển Web', 'Khoa học Dữ liệu', 'Học Máy'],
    vietnamContext: {
      title: 'Copilot và tương lai ngành IT Việt Nam',
      content: [
        'GitHub Copilot đang trở thành một công cụ phổ biến trong cộng đồng lập trình viên Việt Nam, giúp tăng năng suất và giảm thời gian phát triển sản phẩm.',
        'Nhiều công ty công nghệ tại Việt Nam cung cấp tài khoản Copilot cho nhân viên như một phúc lợi và công cụ làm việc.',
        'Đối với sinh viên IT, Copilot là một người thầy ảo, giúp họ học các cú pháp và cấu trúc của ngôn ngữ lập trình mới nhanh hơn.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Quang Dũng',
      title: 'Trưởng nhóm Kỹ thuật (Tech Lead)',
      company: 'Tiki',
      imageUrl: 'https://i.pravatar.cc/150?u=le-quang-dung',
      quote:
        'Copilot không viết code thay bạn, nó là người cộng sự giúp bạn suy nghĩ ở một tầm cao hơn. Thay vì loay hoay với cú pháp, chúng tôi có thể tập trung vào kiến trúc hệ thống và giải quyết các bài toán kinh doanh phức tạp.',
    },
    quizzes: [
      {
        question: 'GitHub Copilot được cung cấp bởi công nghệ của công ty nào?',
        options: ['Google', 'Microsoft', 'OpenAI', 'Apple'],
        correctAnswerIndex: 2,
        explanation:
          'GitHub Copilot là sản phẩm của sự hợp tác giữa GitHub (thuộc sở hữu của Microsoft) và OpenAI, sử dụng mô hình ngôn ngữ lớn Codex của OpenAI.',
      },
      {
        question: 'IDE là viết tắt của từ gì?',
        options: [
          'International Development Environment',
          'Integrated Development Environment',
          'Internal Design aaaaa',
          'Internet Data Exchange',
        ],
        correctAnswerIndex: 1,
        explanation:
          'IDE (Integrated Development Environment) là Môi trường phát triển tích hợp, một phần mềm cung cấp các công cụ cần thiết cho lập trình viên, ví dụ như VS Code, IntelliJ.',
      },
    ],
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    description:
      'Công cụ diễn giải (paraphrasing) và trợ lý viết lách được hỗ trợ bởi AI. Giúp cải thiện sự rõ ràng, tránh đạo văn và nâng cao văn phong học thuật.',
    category: 'writing',
    platform: 'Both',
    pricing: 'Freemium',
    features: [
      'Các chế độ diễn giải nâng cao',
      'Kiểm tra ngữ pháp và chính tả',
      'Phát hiện đạo văn',
      'Tạo trích dẫn',
      'Công cụ tóm tắt',
      'Tính năng Co-Writer',
      'Dịch thuật (hơn 30 ngôn ngữ)',
      'Tiện ích mở rộng cho Chrome',
    ],
    bestFor: [
      'Viết bài báo học thuật',
      'Sáng tạo nội dung',
      'Sinh viên học tiếng Anh (ESL)',
      'Tóm tắt nghiên cứu',
      'Tránh đạo văn',
      'Cải thiện văn phong',
    ],
    limitations: [
      'Giới hạn số từ trong phiên bản miễn phí',
      'Một số câu diễn giải nghe không tự nhiên',
      'Có thể làm thay đổi ý nghĩa gốc',
      'Các tính năng cao cấp yêu cầu đăng ký trả phí',
    ],
    howToUse: [
      {
        step: 1,
        title: 'Chọn Chế Độ Diễn Giải',
        description: 'Chọn chế độ phù hợp: Tiêu chuẩn, Trôi chảy, Trang trọng, Đơn giản, Sáng tạo, Mở rộng, Rút gọn.',
        tips: [
          'Tiêu chuẩn: thay đổi cân bằng.',
          'Trang trọng: giọng văn học thuật.',
          'Sáng tạo: biến đổi tối đa.',
          'Đơn giản: từ vựng dễ hiểu hơn.',
          'Mở rộng: chi tiết hơn.',
          'Rút gọn: phiên bản súc tích.',
        ],
      },
      {
        step: 2,
        title: 'Nhập Văn Bản',
        description: 'Dán hoặc gõ văn bản bạn muốn diễn giải (trong giới hạn từ cho phép).',
        tips: [
          'Chia các văn bản dài thành các đoạn nhỏ hơn.',
          'Đảm bảo văn bản gốc đúng ngữ pháp.',
          'Bao gồm ngữ cảnh để có kết quả tốt hơn.',
          'Giữ "đóng băng" các từ khóa quan trọng.',
        ],
      },
      {
        step: 3,
        title: 'Xem Lại Kết Quả',
        description: 'Kiểm tra văn bản đã được diễn giải và thực hiện các điều chỉnh thủ công nếu cần.',
        tips: [
          'So sánh với ý nghĩa gốc.',
          'Kiểm tra tính chính xác của thông tin.',
          'Đảm bảo phong cách trích dẫn phù hợp.',
          'Xác minh sự nhất quán về giọng văn.',
        ],
      },
      {
        step: 4,
        title: 'Sử Dụng Các Công Cụ Bổ Sung',
        description: 'Tận dụng Trình kiểm tra ngữ pháp, Trình phát hiện đạo văn và Trình tạo trích dẫn.',
        tips: [
          'Chạy kiểm tra ngữ pháp sau khi diễn giải.',
          'Xác minh tính nguyên gốc bằng trình phát hiện đạo văn.',
          'Tạo các trích dẫn phù hợp.',
          'Sử dụng trình tóm tắt cho các tài liệu dài.',
        ],
      },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=jasrI4XUcNU',
    websiteUrl: 'https://quillbot.com/',
    imageUrl:
      'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.4,
    downloads: '10M+',
    languages: ['Tiếng Anh (chính)', 'hơn 30 ngôn ngữ cho dịch thuật'],
    ageGroup: '16+ tuổi',
    subjects: ['Viết Học thuật', 'Sáng tạo Nội dung', 'Nghiên cứu', 'Học Tiếng Anh'],
    vietnamContext: {
      title: 'QuillBot và kỹ năng viết học thuật của sinh viên Việt Nam',
      content: [
        'QuillBot giúp sinh viên Việt Nam diễn đạt lại các ý tưởng từ tài liệu tham khảo bằng ngôn ngữ của chính mình, một kỹ năng quan trọng để tránh đạo văn.',
        'Công cụ này đặc biệt hữu ích khi viết các bài luận, khóa luận tốt nghiệp bằng tiếng Anh, giúp câu văn trở nên tự nhiên và học thuật hơn.',
        'Tính năng tóm tắt giúp sinh viên nhanh chóng nắm bắt ý chính của các bài báo khoa học dài, tiết kiệm thời gian nghiên cứu.',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Bùi Thị Thu Hằng',
      title: 'Giảng viên, Nhà nghiên cứu',
      company: 'Đại học Khoa học Xã hội và Nhân văn',
      imageUrl: 'https://i.pravatar.cc/150?u=bui-thi-thu-hang',
      quote:
        'Chúng tôi khuyến khích sinh viên sử dụng các công cụ như QuillBot một cách có trách nhiệm. Mục tiêu không phải là để máy viết thay bạn, mà là để học cách diễn đạt ý tưởng một cách đa dạng và chính xác, đồng thời hiểu rõ ranh giới giữa diễn giải và đạo văn.',
    },
    quizzes: [
      {
        question: 'Paraphrasing (diễn giải) có nghĩa là gì?',
        options: [
          'Sao chép y nguyên',
          'Viết lại ý tưởng của người khác bằng từ ngữ của riêng bạn',
          'Dịch sang ngôn ngữ khác',
          'Xóa bỏ văn bản',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Diễn giải là một kỹ năng học thuật quan trọng, thể hiện rằng bạn hiểu một ý tưởng và có thể trình bày lại nó một cách khác biệt mà vẫn giữ nguyên ý nghĩa.',
      },
      {
        question: 'Tính năng nào của QuillBot giúp bạn tránh đạo văn?',
        options: ['Paraphraser và Plagiarism Checker', 'Translator', 'Grammar Checker', 'Summarizer'],
        correctAnswerIndex: 0,
        explanation:
          'Công cụ diễn giải (Paraphraser) giúp bạn viết lại câu chữ, trong khi Trình kiểm tra đạo văn (Plagiarism Checker) giúp bạn so sánh văn bản của mình với các nguồn khác để đảm bảo tính nguyên gốc.',
      },
    ],
  },
];

// Categories for easy filtering
export const aiAppCategories = [
  {
    id: 'math',
    name: 'Toán Học',
    description: 'Ứng dụng AI giải toán, từ cơ bản đến nâng cao',
    icon: '🔢',
    color: 'blue',
  },
  {
    id: 'language',
    name: 'Ngôn Ngữ',
    description: 'Học ngoại ngữ với gia sư AI và nhận dạng giọng nói',
    icon: '🗣️',
    color: 'green',
  },
  {
    id: 'writing',
    name: 'Viết & Biên Tập',
    description: 'Trợ lý AI cho việc viết, ngữ pháp và cải thiện văn phong',
    icon: '✍️',
    color: 'purple',
  },
  {
    id: 'coding',
    name: 'Lập Trình',
    description: 'Công cụ hỗ trợ lập trình và học code được hỗ trợ bởi AI',
    icon: '💻',
    color: 'orange',
  },
  {
    id: 'research',
    name: 'Nghiên Cứu',
    description: 'Công cụ để nghiên cứu, tóm tắt và phân tích thông tin',
    icon: '🔍',
    color: 'teal',
  },
  {
    id: 'general',
    name: 'Tổng Hợp',
    description: 'Trợ lý bài tập về nhà đa môn và gia sư AI tổng quát',
    icon: '🎓',
    color: 'indigo',
  },
];

// Popular app combinations for different learning goals
export const learningPathways = [
  {
    id: 'stem-pathway',
    title: 'Bộ Công Cụ Học STEM',
    description: 'Bộ công cụ hoàn chỉnh cho các môn học STEM',
    apps: ['photomath', 'gauth', 'socratic', 'github-copilot'],
    bestFor: 'Học sinh, sinh viên khối STEM và người học khoa học máy tính',
    estimatedTime: 'Sử dụng hàng ngày, kết hợp 30-60 phút',
  },
  {
    id: 'language-pathway',
    title: 'Combo Chinh Phục Ngôn Ngữ',
    description: 'Giải pháp học ngôn ngữ toàn diện',
    apps: ['duolingo', 'grammarly', 'quillbot'],
    bestFor: 'Người học ngoại ngữ và sinh viên quốc tế',
    estimatedTime: 'Sử dụng hàng ngày, kết hợp 45-90 phút',
  },
  {
    id: 'academic-writing-pathway',
    title: 'Bộ Kỹ Năng Viết Học Thuật',
    description: 'Các công cụ để viết học thuật chất lượng cao',
    apps: ['grammarly', 'quillbot', 'questionai'],
    bestFor: 'Sinh viên đại học và các nhà nghiên cứu',
    estimatedTime: 'Dựa trên dự án, 1-3 giờ cho mỗi bài tập',
  },
  {
    id: 'quick-homework-pathway',
    title: 'Trợ Lý Bài Tập Về Nhà',
    description: 'Giải pháp nhanh cho bài tập về nhà hàng ngày',
    apps: ['photomath', 'socratic', 'questionai'],
    bestFor: 'Học sinh cấp hai và cấp ba',
    estimatedTime: '15-30 phút cho mỗi môn học',
  },
];

const aiLearningData = {
  aiLearningApps,
  aiAppCategories,
  learningPathways,
};

export default aiLearningData;
