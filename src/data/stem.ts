// STEM Education Module Data
// Comprehensive STEM and STEAM learning content for K2AiHub education platform

export interface STEMLesson {
  id: string;
  title: string;
  description: string;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  duration: string;
  category: 'science' | 'technology' | 'engineering' | 'mathematics' | 'arts';
  objectives: string[];
  materials: string[];
  codeExample?: string;
  videoUrl?: string;
  imageUrl: string;
  exercises: STEMExercise[];
  realWorldApplications: string[];
  competitions: string[];
  icon?: string;
  topics?: string[];
}

export interface STEMExercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Khó';
  steps: string[];
  expectedResult: string;
  hints: string[];
  materials?: string[];
}

export const stemLessons: STEMLesson[] = [
  {
    id: 'stem-introduction',
    title: 'Giới Thiệu STEM & STEAM',
    description:
      'Khám phá thế giới STEM/STEAM đầy màu sắc! Bạn sẽ hiểu tại sao khoa học, công nghệ, kỹ thuật, toán học và nghệ thuật kết hợp tạo nên sức mạnh sáng tạo vô hạn. Bài học mở ra cánh cửa khám phá và thực hành thú vị.',
    difficulty: 'Cơ bản',
    duration: '45 phút',
    category: 'science',
    icon: '🔬',
    topics: ['STEM cơ bản', 'Tư duy khoa học', 'Sáng tạo', 'Khám phá'],
    objectives: [
      'Hiểu khái niệm STEM và STEAM',
      'Nhận biết các lĩnh vực trong STEM',
      'Phát triển tư duy khoa học và sáng tạo',
      'Thấy được ứng dụng STEM trong đời sống'
    ],
    materials: [
      'Giấy và bút màu',
      'Vật liệu tái chế',
      'Kính lúp',
      'Máy tính hoặc tablet'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=yOMbTJdbxA4',
    exercises: [
      {
        id: 'ex1-stem-around-us',
        title: 'STEM Xung Quanh Ta',
        description:
          'Tìm và phân loại các ví dụ STEM trong cuộc sống hàng ngày',
        difficulty: 'Dễ',
        steps: [
          'Quan sát xung quanh nhà/lớp học trong 10 phút',
          'Ghi chép ít nhất 10 vật dụng/hiện tượng',
          'Phân loại theo S-T-E-M',
          'Thảo luận với bạn bè về các phát hiện'
        ],
        expectedResult:
          'Danh sách phân loại 10+ ví dụ STEM với giải thích ngắn',
        hints: [
          'Science: các hiện tượng tự nhiên (ánh sáng, âm thanh)',
          'Technology: điện thoại, máy tính, tivi',
          'Engineering: cầu, toà nhà, máy móc',
          'Math: đồng hồ, hình học trong kiến trúc'
        ]
      },
      {
        id: 'ex2-mini-inventor',
        title: 'Phát Minh Nhỏ',
        description: 'Thiết kế giải pháp cho một vấn đề đơn giản',
        difficulty: 'Trung bình',
        steps: [
          'Xác định một vấn đề nhỏ trong cuộc sống (VD: bút chì thường rơi)',
          'Động não 5 giải pháp khác nhau',
          'Chọn giải pháp tốt nhất và vẽ thiết kế',
          'Làm mô hình đơn giản bằng vật liệu sẵn có',
          'Thử nghiệm và cải tiến'
        ],
        expectedResult:
          'Một mô hình/nguyên mẫu đơn giản giải quyết vấn đề đã chọn',
        hints: [
          'Bắt đầu với vấn đề rất nhỏ và cụ thể',
          'Sử dụng vật liệu tái chế như hộp giấy, dây thun',
          'Không cần hoàn hảo, chỉ cần hoạt động',
          'Hỏi ý kiến bạn bè để cải tiến'
        ]
      }
    ],
    realWorldApplications: [
      'Thiết kế ứng dụng mobile giải quyết vấn đề xã hội',
      'Phát triển robot hỗ trợ người khuyết tật',
      'Tạo ra vật liệu mới từ rác thải nhựa',
      'Thiết kế trò chơi giáo dục cho trẻ em',
      'Xây dựng hệ thống nông nghiệp thông minh'
    ],
    competitions: [
      'Cuộc thi Khoa học Kỹ thuật Quốc gia',
      'STEAM for Vietnam Challenge',
      'Young Inventors Competition',
      'Science Fair Vietnam',
      'Techfest Vietnam'
    ]
  },
  {
    id: 'fun-physics-experiments',
    title: 'Thí Nghiệm Vật Lý Thú Vị',
    description:
      'Biến nhà bếp thành phòng thí nghiệm! Khám phá các hiện tượng vật lý qua những thí nghiệm đơn giản nhưng kỳ diệu. Từ lực hút trái đất đến điện từ, mọi thứ đều trở nên thú vị và dễ hiểu.',
    difficulty: 'Cơ bản',
    duration: '60 phút',
    category: 'science',
    icon: '⚡',
    topics: [
      'Vật lý',
      'Thí nghiệm',
      'Khoa học thực hành',
      'Hiện tượng tự nhiên'
    ],
    objectives: [
      'Hiểu các khái niệm vật lý cơ bản qua thực hành',
      'Phát triển kỹ năng quan sát và ghi chép khoa học',
      'Học cách đặt giả thuyết và kiểm chứng',
      'Tạo hứng thú với khoa học tự nhiên'
    ],
    materials: [
      'Nước, dầu ăn, mật ong',
      'Bóng bay, khăn giấy',
      'Nam châm, vít sắt nhỏ',
      'Đèn pin, gương nhỏ',
      'Muối, đường, bột màu thực phẩm'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=y8E61LsJOrI',
    exercises: [
      {
        id: 'ex1-density-tower',
        title: 'Tháp Mật Độ Cầu Vồng',
        description: 'Tạo tháp chất lỏng nhiều tầng với các mật độ khác nhau',
        difficulty: 'Dễ',
        steps: [
          'Chuẩn bị cốc thủy tinh cao và 4 chất lỏng: mật ong, nước có màu, dầu ăn, xà phòng rửa chén',
          'Đổ từ từ mật ong vào đáy cốc',
          'Dùng thìa đổ nhẹ nhàng nước có màu lên trên',
          'Tiếp tục với dầu ăn và xà phòng',
          'Quan sát và ghi chép hiện tượng'
        ],
        expectedResult: 'Tháp chất lỏng 4 tầng rõ ràng, không trộn lẫn',
        hints: [
          'Đổ chậm và nhẹ nhàng để tránh trộn lẫn',
          'Mật độ cao hơn sẽ chìm xuống dưới',
          'Có thể thêm màu thực phẩm để dễ quan sát',
          'Thử thả các vật nhỏ xem chúng dừng ở tầng nào'
        ]
      },
      {
        id: 'ex2-static-electricity',
        title: 'Điện Tĩnh Kỳ Diệu',
        description:
          'Khám phá hiện tượng điện tĩnh qua các thí nghiệm vui nhộn',
        difficulty: 'Trung bình',
        steps: [
          'Thí nghiệm 1: Cọ bóng bay vào tóc, sau đó đưa gần giấy vụn',
          'Thí nghiệm 2: Cọ lược nhựa vào vải, đưa gần tia nước nhỏ',
          'Thí nghiệm 3: Làm "tóc dựng đứng" bằng máy tạo điện tĩnh',
          'Ghi chép quan sát cho mỗi thí nghiệm',
          'Giải thích hiện tượng bằng lời của mình'
        ],
        expectedResult:
          'Quan sát thấy các hiện tượng hút, đẩy và chuyển động do điện tĩnh',
        hints: [
          'Thời tiết khô hanh sẽ cho kết quả tốt hơn',
          'Thử với nhiều vật liệu khác nhau: nhựa, thủy tinh, vải',
          'Chú ý an toàn, không làm gần thiết bị điện',
          'Giải thích bằng khái niệm electron di chuyển'
        ]
      }
    ],
    realWorldApplications: [
      'Máy photocopy sử dụng điện tĩnh',
      'Màn hình cảm ứng hoạt động nhờ điện tích',
      'Tàu ngầm sử dụng nguyên lý mật độ',
      'Máy bay bay được nhờ hiểu về áp suất',
      'GPS định vị dựa trên sóng điện từ'
    ],
    competitions: [
      'Hội thi Khoa học Kỹ thuật Thanh thiếu niên',
      'Physics Olympiad Vietnam',
      'Young Scientist Competition',
      'International Science Fair',
      'Vietnam National Science Fair'
    ]
  },
  {
    id: 'coding-for-kids',
    title: 'Lập Trình Cho Trẻ Em',
    description:
      'Học lập trình như chơi game! Sử dụng Scratch và các công cụ thân thiện để tạo ra những trò chơi, hoạt cảnh thú vị. Phát triển tư duy logic và sáng tạo qua việc "dạy máy tính nghe lời".',
    difficulty: 'Cơ bản',
    duration: '75 phút',
    category: 'technology',
    icon: '💻',
    topics: ['Lập trình', 'Scratch', 'Game', 'Tư duy logic'],
    objectives: [
      'Hiểu khái niệm lập trình cơ bản',
      'Sử dụng thành thạo Scratch để tạo project',
      'Phát triển tư duy logic và giải quyết vấn đề',
      'Tạo ra sản phẩm sáng tạo đầu tiên'
    ],
    materials: [
      'Máy tính/tablet có kết nối internet',
      'Tài khoản Scratch (miễn phí)',
      'Giấy và bút để vẽ ý tưởng',
      'Microphone (tùy chọn)'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=jXUZaf5D12A',
    exercises: [
      {
        id: 'ex1-animated-story',
        title: 'Câu Chuyện Hoạt Hình',
        description: 'Tạo một câu chuyện hoạt hình ngắn với nhiều nhân vật',
        difficulty: 'Dễ',
        steps: [
          'Mở Scratch và tạo project mới',
          'Chọn 2-3 nhân vật (sprites) yêu thích',
          'Thiết kế background phù hợp với câu chuyện',
          'Lập trình cho nhân vật di chuyển và nói chuyện',
          'Thêm âm thanh và hiệu ứng',
          'Chia sẻ project với bạn bè'
        ],
        expectedResult:
          'Câu chuyện hoạt hình 30-60 giây với thoại và chuyển động',
        hints: [
          'Bắt đầu với câu chuyện đơn giản: gặp gỡ, chào hỏi',
          'Sử dụng khối "say" để nhân vật nói',
          'Dùng khối "move" để di chuyển',
          'Thêm khối "wait" để tạo nhịp điệu'
        ]
      },
      {
        id: 'ex2-simple-game',
        title: 'Game Đơn Giản',
        description: 'Tạo game bắt vật phẩm hoặc tránh chướng ngại vật',
        difficulty: 'Trung bình',
        steps: [
          'Thiết kế nhân vật chính điều khiển bằng phím mũi tên',
          'Tạo vật phẩm di chuyển ngẫu nhiên',
          'Lập trình hệ thống điểm số',
          'Thêm âm thanh khi ăn được vật phẩm',
          'Tạo màn hình "Game Over"',
          'Test và cải tiến game'
        ],
        expectedResult:
          'Game hoàn chỉnh có thể chơi được với hệ thống tính điểm',
        hints: [
          'Dùng khối "if touching" để kiểm tra va chạm',
          'Biến "score" để lưu điểm số',
          'Khối "random" để tạo chuyển động ngẫu nhiên',
          'Khối "broadcast" để thông báo sự kiện'
        ]
      }
    ],
    realWorldApplications: [
      'Phát triển ứng dụng mobile và web',
      'Tạo game giáo dục cho trẻ em',
      'Lập trình robot và IoT',
      'Phân tích dữ liệu và AI',
      'Thiết kế website và ứng dụng'
    ],
    competitions: [
      'Scratch Programming Contest Vietnam',
      'Code.org Hour of Code',
      'Vietnam ICT Olympiad',
      'Asian Programming Contest',
      'Global Game Jam'
    ]
  },
  {
    id: 'engineering-challenges',
    title: 'Thử Thách Kỹ Thuật',
    description:
      'Trở thành kỹ sư nhí với những thử thách xây dựng thú vị! Thiết kế cầu từ giấy, tạo tháp chịu động đất, xây dựng máy bay giấy bay xa nhất. Học cách suy nghĩ như một kỹ sư thực thụ.',
    difficulty: 'Trung bình',
    duration: '90 phút',
    category: 'engineering',
    icon: '🏗️',
    topics: ['Kỹ thuật', 'Thiết kế', 'Xây dựng', 'Cơ học'],
    objectives: [
      'Hiểu quy trình thiết kế kỹ thuật',
      'Phát triển kỹ năng giải quyết vấn đề sáng tạo',
      'Học cách làm việc với ràng buộc và giới hạn',
      'Trải nghiệm chu trình thiết kế-test-cải tiến'
    ],
    materials: [
      'Giấy A4, giấy carton',
      'Keo dán, băng keo',
      'Ống hút nhựa, que tre',
      'Sợi dây, dây thun',
      'Cân nhỏ, thước kẻ'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=TbF3vwuSDW8',
    exercises: [
      {
        id: 'ex1-paper-bridge',
        title: 'Cầu Giấy Siêu Mạnh',
        description:
          'Thiết kế cầu từ giấy có thể chịu được trọng lượng lớn nhất',
        difficulty: 'Trung bình',
        steps: [
          'Nghiên cứu các loại cầu trong thực tế (treo, dầm, vòm)',
          'Vẽ thiết kế cầu trên giấy với kích thước cụ thể',
          'Xây dựng cầu bằng giấy A4 (tối đa 5 tờ)',
          'Test khả năng chịu tải bằng cách đặt sách/vật nặng',
          'Ghi chép kết quả và cải tiến thiết kế',
          'So sánh với các bạn xem ai làm được cầu mạnh nhất'
        ],
        expectedResult:
          'Cầu giấy có thể chịu được ít nhất 500g mà không bị gãy',
        hints: [
          'Hình tam giác là hình mạnh nhất trong kỹ thuật',
          'Cuộn giấy thành ống sẽ chịu lực tốt hơn',
          'Phân bổ trọng lượng đều trên nhiều điểm',
          'Test từ từ, từng chút một để quan sát'
        ]
      },
      {
        id: 'ex2-earthquake-tower',
        title: 'Tháp Chống Động Đất',
        description: 'Xây tháp cao có thể sống sót qua "động đất" mô phỏng',
        difficulty: 'Khó',
        steps: [
          'Nghiên cứu về các kỹ thuật chống động đất',
          'Thiết kế tháp cao từ 50cm bằng ống hút và kẹo dẻo',
          'Xây dựng theo thiết kế đã vẽ',
          'Test độ ổn định bằng cách rung bàn nhẹ',
          'Cải tiến để tháp vừa cao vừa ổn định',
          'Thi thố với bạn bè xem ai xây tháp cao và ổn định nhất'
        ],
        expectedResult:
          'Tháp cao ít nhất 50cm và không đổ khi rung bàn 10 giây',
        hints: [
          'Nền móng rộng sẽ giúp tháp ổn định hơn',
          'Cấu trúc hình kim tự tháp chống lật tốt',
          'Liên kết chéo tăng độ cứng của cấu trúc',
          'Test thường xuyên trong quá trình xây'
        ]
      }
    ],
    realWorldApplications: [
      'Thiết kế cầu và đường cao tốc',
      'Xây dựng nhà chống động đất',
      'Thiết kế máy bay và ô tô',
      'Kỹ thuật xây dựng không gian',
      'Robot và máy móc tự động'
    ],
    competitions: [
      'Cuộc thi Kỹ thuật Trẻ Vietnam',
      'Engineering Olympics',
      'Bridge Building Challenge',
      'Seismic Design Competition',
      'Future Engineers Competition'
    ]
  },
  {
    id: 'math-in-real-life',
    title: 'Toán Học Trong Đời Sống',
    description:
      'Toán học không chỉ là con số khô khan! Khám phá toán học qua nấu ăn, shopping, thiết kế và nghệ thuật. Tìm hiểu tỷ lệ vàng, đối xứng, xác suất qua những hoạt động thú vị và thực tế.',
    difficulty: 'Cơ bản',
    duration: '60 phút',
    category: 'mathematics',
    icon: '🔢',
    topics: ['Toán thực tế', 'Tỷ lệ', 'Xác suất', 'Hình học'],
    objectives: [
      'Nhận ra toán học trong các hoạt động hàng ngày',
      'Áp dụng toán học để giải quyết vấn đề thực tế',
      'Phát triển tư duy logic và phân tích',
      'Tạo hứng thú với toán học qua ứng dụng'
    ],
    materials: [
      'Nguyên liệu nấu ăn (bột, đường, sữa)',
      'Cân nhà bếp, cốc đo lường',
      'Giấy graph, thước kẻ, compa',
      'Đồng xu, xúc xắc',
      'Kẹo hoặc đồ vật nhỏ để đếm'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=X_xR5Kes4Rs',
    exercises: [
      {
        id: 'ex1-cooking-ratios',
        title: 'Toán Học Trong Nấu Ăn',
        description: 'Học tỷ lệ và phân số qua việc làm bánh pancake',
        difficulty: 'Dễ',
        steps: [
          'Chuẩn bị công thức pancake cho 4 người (1 cốc bột, 1 quả trứng, 1 cốc sữa)',
          'Tính toán nguyên liệu cần thiết cho 6 người',
          'Tính toán cho 2 người',
          'Thực hành làm bánh với tỷ lệ đã tính',
          'Ghi chép kết quả và rút kinh nghiệm'
        ],
        expectedResult: 'Bánh pancake ngon với đúng tỷ lệ nguyên liệu',
        hints: [
          '6 người = 4 người × 1.5, nên nhân tất cả nguyên liệu với 1.5',
          '2 người = 4 người ÷ 2, nên chia tất cả nguyên liệu cho 2',
          'Viết dưới dạng phân số để dễ tính',
          'Nếm thử và điều chỉnh theo khẩu vị'
        ]
      },
      {
        id: 'ex2-probability-games',
        title: 'Xác Suất Qua Trò Chơi',
        description: 'Khám phá xác suất qua tung đồng xu và tung xúc xắc',
        difficulty: 'Trung bình',
        steps: [
          'Dự đoán kết quả khi tung đồng xu 20 lần',
          'Thực hiện tung và ghi chép kết quả',
          'So sánh kết quả thực tế với dự đoán',
          'Lặp lại với xúc xắc (dự đoán số lần ra mỗi mặt)',
          'Phân tích tại sao có sự khác biệt'
        ],
        expectedResult: 'Hiểu được khái niệm xác suất và sự ngẫu nhiên',
        hints: [
          'Về lý thuyết, xác suất ngửa/sấp của đồng xu là 50%',
          'Với ít lần tung, kết quả có thể khác xa lý thuyết',
          'Càng tung nhiều lần, càng gần với xác suất lý thuyết',
          'Ghi chép chính xác để phân tích'
        ]
      }
    ],
    realWorldApplications: [
      'Quản lý tài chính cá nhân và đầu tư',
      'Phân tích dữ liệu và thống kê',
      'Thiết kế kiến trúc và nghệ thuật',
      'Dự báo thời tiết và khí hậu',
      'Phát triển thuật toán máy tính'
    ],
    competitions: [
      'Olympic Toán học Quốc tế',
      'Cuộc thi Toán học Kangaroo',
      'Vietnam Mathematical Olympiad',
      'IMAS (International Mathematics Assessments)',
      'Math League Competitions'
    ]
  },
  {
    id: 'art-meets-science',
    title: 'Nghệ Thuật Gặp Khoa Học',
    description:
      'STEAM = STEM + Arts! Tạo ra những tác phẩm nghệ thuật tuyệt đẹp bằng khoa học: vẽ với robot, tạo màu từ hóa học, thiết kế hình học fractals. Khám phá vẻ đẹp của khoa học qua nghệ thuật.',
    difficulty: 'Trung bình',
    duration: '75 phút',
    category: 'arts',
    icon: '🎨',
    topics: ['STEAM', 'Nghệ thuật khoa học', 'Thiết kế', 'Sáng tạo'],
    objectives: [
      'Kết hợp nghệ thuật với khoa học một cách sáng tạo',
      'Hiểu về màu sắc, ánh sáng và hình học trong nghệ thuật',
      'Phát triển kỹ năng thiết kế và thẩm mỹ',
      'Tạo ra sản phẩm nghệ thuật có cơ sở khoa học'
    ],
    materials: [
      'Màu nước, cọ vẽ, giấy vẽ',
      'Baking soda, giấm, màu thực phẩm',
      'Dây, compa, thước kẻ',
      'Đèn LED nhiều màu',
      'Giấy trong suốt, kính lúp'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=fOJ8WNXIBYg',
    exercises: [
      {
        id: 'ex1-color-chemistry',
        title: 'Hóa Học Tạo Màu',
        description: 'Tạo ra màu sắc tự nhiên từ các phản ứng hóa học',
        difficulty: 'Trung bình',
        steps: [
          'Pha dung dịch baking soda với nước',
          'Thêm màu thực phẩm để tạo màu cơ bản',
          'Nhỏ giấm vào để tạo phản ứng sủi bọt',
          'Quan sát sự thay đổi màu sắc',
          'Thử nghiệm với tỷ lệ khác nhau để tạo hiệu ứng đẹp',
          'Vẽ tranh bằng những màu đã tạo'
        ],
        expectedResult: 'Bức tranh đầy màu sắc được tạo từ phản ứng hóa học',
        hints: [
          'Phản ứng acid-base tạo CO2 và hiệu ứng sủi bọt',
          'Thử các tỷ lệ khác nhau để có màu sắc đa dạng',
          'Có thể thêm chút muối để tạo hiệu ứng lấp lánh',
          'Vẽ nhanh khi còn phản ứng để có hiệu ứng động'
        ]
      },
      {
        id: 'ex2-geometric-art',
        title: 'Nghệ Thuật Hình Học',
        description:
          'Tạo ra pattern nghệ thuật dựa trên các nguyên tắc toán học',
        difficulty: 'Trung bình',
        steps: [
          'Học về tỷ lệ vàng và cách vẽ hình xoắn ốc',
          'Vẽ hình xoắn ốc Fibonacci trên giấy graph',
          'Tạo pattern mandala dựa trên đối xứng',
          'Sử dụng compa để vẽ các hình tròn đồng tâm',
          'Tô màu theo pattern toán học',
          'Kết hợp nhiều pattern để tạo tác phẩm hoàn chỉnh'
        ],
        expectedResult:
          'Tác phẩm nghệ thuật kết hợp hình học và màu sắc hài hòa',
        hints: [
          'Tỷ lệ vàng ≈ 1.618 tạo ra vẻ đẹp tự nhiên',
          'Đối xứng quay tạo pattern mandala đẹp',
          'Dùng nhiều màu tương phản để làm nổi bật pattern',
          'Kiên nhẫn và tỉ mỉ để có kết quả đẹp'
        ]
      }
    ],
    realWorldApplications: [
      'Thiết kế đồ họa và giao diện người dùng',
      'Kiến trúc và thiết kế nội thất',
      'Phim hoạt hình và hiệu ứng đặc biệt',
      'Thiết kế thời trang và trang sức',
      'Nghệ thuật số và media tương tác'
    ],
    competitions: [
      'STEAM Art Competition Vietnam',
      'International Science Art Contest',
      'Digital Art Challenge',
      'Creative Technology Awards',
      'Young Artists Meet Science'
    ]
  },
  {
    id: 'environmental-solutions',
    title: 'Giải Pháp Môi Trường',
    description:
      'Trở thành chiến binh môi trường! Sử dụng STEM để tìm giải pháp cho các vấn đề môi trường: tạo bộ lọc nước từ vật liệu tự nhiên, thiết kế nhà tiết kiệm năng lượng, chế tạo túi phân hủy sinh học.',
    difficulty: 'Nâng cao',
    duration: '90 phút',
    category: 'science',
    icon: '🌱',
    topics: ['Môi trường', 'Bền vững', 'Năng lượng sạch', 'Tái chế'],
    objectives: [
      'Hiểu các vấn đề môi trường hiện tại',
      'Áp dụng STEM để tìm giải pháp môi trường',
      'Phát triển ý thức bảo vệ môi trường',
      'Tạo ra nguyên mẫu giải pháp thực tế'
    ],
    materials: [
      'Chai nhựa, cát, sỏi, vải',
      'Bông, than hoạt tính',
      'Pin mặt trời mini, LED',
      'Hộp carton, giấy bạc',
      'Bột nong, tinh bột'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=RSQd4xNzU3k',
    exercises: [
      {
        id: 'ex1-water-filter',
        title: 'Bộ Lọc Nước Tự Làm',
        description:
          'Thiết kế và chế tạo bộ lọc nước hiệu quả từ vật liệu tự nhiên',
        difficulty: 'Trung bình',
        steps: [
          'Nghiên cứu về ô nhiễm nước và phương pháp lọc',
          'Thiết kế bộ lọc nhiều tầng bằng chai nhựa',
          'Xếp các lớp: vải, cát mịn, cát thô, sỏi từ trên xuống',
          'Thêm tầng than hoạt tính để hấp thụ tạp chất',
          'Test bằng nước bẩn (đất + nước) và quan sát kết quả',
          'Cải tiến thiết kế để tăng hiệu quả lọc'
        ],
        expectedResult: 'Nước đầu ra trong hơn đáng kể so với nước đầu vào',
        hints: [
          'Các lớp lọc hoạt động từ thô đến mịn',
          'Than hoạt tính hấp thụ mùi và hóa chất',
          'Lưu lượng chậm sẽ lọc sạch hơn',
          'Test nhiều lần với nước bẩn khác nhau'
        ]
      },
      {
        id: 'ex2-solar-oven',
        title: 'Lò Nướng Năng Lượng Mặt Trời',
        description:
          'Xây dựng lò nướng sử dụng năng lượng mặt trời để nấu chín thức ăn',
        difficulty: 'Khó',
        steps: [
          'Nghiên cứu nguyên lý hoạt động của năng lượng mặt trời',
          'Thiết kế hộp cách nhiệt bằng carton và giấy bạc',
          'Tạo góc phản xạ tối ưu để tập trung ánh sáng',
          'Đặt nồi nhỏ màu đen bên trong để hấp thụ nhiệt',
          'Test bằng cách làm nóng nước hoặc nướng marshmallow',
          'Đo nhiệt độ và ghi chép hiệu suất'
        ],
        expectedResult: 'Đạt nhiệt độ 60-80°C và có thể làm nóng thức ăn',
        hints: [
          'Màu đen hấp thụ nhiệt tốt nhất',
          'Kính hoặc plastic trong tạo hiệu ứng nhà kính',
          'Cách nhiệt giúp giữ nhiệt lâu hơn',
          'Hướng lò về phía mặt trời để tối ưu'
        ]
      }
    ],
    realWorldApplications: [
      'Hệ thống lọc nước cho vùng nông thôn',
      'Nhà thông minh tiết kiệm năng lượng',
      'Túi sinh học thay thế túi nhựa',
      'Trang trại năng lượng mặt trời',
      'Hệ thống tái chế rác thải tự động'
    ],
    competitions: [
      'Green Tech Challenge Vietnam',
      'Environmental Innovation Contest',
      'Clean Energy Competition',
      'Sustainable Design Awards',
      'Eco-Friendly Solutions Challenge'
    ]
  }
];

// STEM quiz questions
export const stemQuizzes = [
  {
    id: 'quiz-stem-1',
    lessonId: 'stem-introduction',
    question: 'STEM bao gồm những lĩnh vực nào?',
    options: [
      'Science, Technology, Engineering, Mathematics',
      'Study, Technology, Engineering, Mathematics',
      'Science, Teaching, Engineering, Music',
      'Science, Technology, English, Mathematics'
    ],
    correctAnswer: 0,
    explanation:
      'STEM là viết tắt của Science (Khoa học), Technology (Công nghệ), Engineering (Kỹ thuật), Mathematics (Toán học).'
  },
  {
    id: 'quiz-physics-1',
    lessonId: 'fun-physics-experiments',
    question: 'Trong thí nghiệm tháp mật độ, chất nào sẽ ở dưới cùng?',
    options: ['Dầu ăn', 'Nước', 'Mật ong', 'Xà phòng'],
    correctAnswer: 2,
    explanation:
      'Mật ong có mật độ cao nhất nên sẽ chìm xuống dưới cùng trong thí nghiệm tháp mật độ.'
  },
  {
    id: 'quiz-coding-1',
    lessonId: 'coding-for-kids',
    question: 'Scratch là gì?',
    options: [
      'Một trò chơi điện tử',
      'Ngôn ngữ lập trình trực quan cho trẻ em',
      'Phần mềm vẽ tranh',
      'Ứng dụng học toán'
    ],
    correctAnswer: 1,
    explanation:
      'Scratch là ngôn ngữ lập trình trực quan được thiết kế đặc biệt cho trẻ em học lập trình.'
  }
];

const stemData = {
  stemLessons,
  stemQuizzes
};

export default stemData;
