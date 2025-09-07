import { BaseLessonData } from '@/types/lesson-base';
export const sustainableAgricultureLessons: BaseLessonData[] = [
  {
    id: 'intro-sustainable-agritech',
    title: 'Giới thiệu Nông nghiệp Bền vững và AgriTech',
    description:
      'Khám phá các nguyên tắc cơ bản của nông nghiệp bền vững và vai trò của công nghệ trong việc tạo ra một hệ thống lương thực hiệu quả và thân thiện với môi trường.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=b_p2_3aaA_A',
    imageUrl: 'https://i.ytimg.com/vi/b_p2_3aaA_A/hqdefault.jpg',
    objectives: [
      'Định nghĩa được nông nghiệp bền vững và AgriTech.',
      'Hiểu được ba trụ cột của sự bền vững: Kinh tế, Xã hội và Môi trường.',
      'Nhận diện các thách thức chính mà ngành nông nghiệp toàn cầu đang đối mặt.',
      'Khám phá các ví dụ ban đầu về công nghệ trong nông nghiệp.',
    ],
    prerequisites: ['Không có'],
    exercises: [
      {
        title: 'Phân tích một Sản phẩm Nông nghiệp',
        description:
          'Truy xuất vòng đời của một sản phẩm nông nghiệp bạn tiêu thụ hàng ngày và xác định các điểm có thể cải thiện tính bền vững.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chọn một sản phẩm (ví dụ: một quả táo, một hộp sữa).',
          'Nghiên cứu các bước từ trang trại đến bàn ăn của sản phẩm đó.',
          'Xác định các yếu tố đầu vào (nước, phân bón, năng lượng).',
          'Suy nghĩ về các tác động môi trường và xã hội ở mỗi bước.',
          'Đề xuất ít nhất một giải pháp công nghệ có thể áp dụng.',
        ],
        expectedResults: 'Một sơ đồ vòng đời sản phẩm với các phân tích và đề xuất cải tiến.',
      },
    ],
    realWorldApplications: [
      'Các chính sách nông nghiệp của chính phủ.',
      'Nhãn chứng nhận sản phẩm hữu cơ (organic).',
      'Các phong trào tiêu dùng có ý thức.',
    ],
    vietnamContext: {
      title: 'Nông nghiệp Việt Nam trước Thách thức Bền vững',
      content: [
        'Việt Nam là một trong những quốc gia bị ảnh hưởng nặng nề nhất bởi biến đổi khí hậu, đặc biệt là vùng Đồng bằng sông Cửu Long, vựa lúa của cả nước.',
        'Thói quen lạm dụng phân bón hóa học và thuốc trừ sâu đang làm suy thoái đất đai và ô nhiễm nguồn nước.',
        'Chuyển đổi sang nông nghiệp bền vững không chỉ là xu hướng mà còn là yêu cầu cấp thiết để đảm bảo an ninh lương thực và bảo vệ môi trường.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Thị Minh Nguyệt',
      title: 'Nhà sáng lập & Giám đốc',
      company: 'Công ty TNHH Thực phẩm Hữu cơ Orfarm',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-minh-nguyet',
      quote:
        'Nông nghiệp bền vững bắt đầu từ việc tôn trọng đất mẹ. Khi chúng ta chăm sóc cho đất, đất sẽ trả lại cho chúng ta những sản phẩm an toàn và bổ dưỡng.',
    },
    quizzes: [
      {
        question: 'Đâu KHÔNG phải là một trong ba trụ cột chính của nông nghiệp bền vững?',
        options: ['Hiệu quả kinh tế', 'Công bằng xã hội', 'Bảo vệ môi trường', 'Năng suất tối đa bằng mọi giá'],
        correctAnswerIndex: 3,
        explanation:
          'Nông nghiệp bền vững tìm cách cân bằng giữa lợi ích kinh tế, trách nhiệm xã hội và bảo vệ môi trường, chứ không chỉ tập trung vào việc tối đa hóa năng suất mà bỏ qua các yếu tố khác.',
      },
    ],
  },
  {
    id: 'iot-sensors-in-farming',
    title: 'Ứng dụng IoT và Cảm biến trong Canh tác',
    description:
      'Tìm hiểu cách các cảm biến thông minh và mạng lưới vạn vật kết nối (IoT) giúp nông dân thu thập dữ liệu thời gian thực để đưa ra quyết định chính xác.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=bA4h_T-s6pU',
    imageUrl: 'https://i.ytimg.com/vi/bA4h_T-s6pU/hqdefault.jpg',
    objectives: [
      'Hiểu kiến trúc của một hệ thống IoT trong nông nghiệp.',
      'Phân biệt các loại cảm biến phổ biến (độ ẩm đất, pH, nhiệt độ, v.v.).',
      'Học cách dữ liệu từ cảm biến được truyền và phân tích.',
      'Khám phá các nền tảng quản lý trang trại thông minh.',
    ],
    prerequisites: ['Hoàn thành bài giới thiệu'],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Giám sát cho Vườn rau',
        description: 'Lên kế hoạch triển khai một hệ thống IoT giả định cho một khu vườn nhỏ.',
        difficulty: 'Trung bình',
        procedure: [
          'Xác định các thông số quan trọng cần giám sát (ví dụ: độ ẩm, ánh sáng).',
          'Chọn các loại cảm biến phù hợp.',
          'Vẽ sơ đồ kết nối các cảm biến với một bộ điều khiển trung tâm (ví dụ: Arduino, Raspberry Pi).',
          'Mô tả cách dữ liệu sẽ được hiển thị cho người dùng.',
        ],
        expectedResults: 'Một bản thiết kế chi tiết cho hệ thống giám sát IoT.',
      },
    ],
    realWorldApplications: [
      'Hệ thống tưới tiêu thông minh tự động bật/tắt dựa trên độ ẩm đất.',
      'Cảnh báo sớm sâu bệnh dựa trên dữ liệu vi khí hậu.',
      'Tối ưu hóa việc sử dụng phân bón.',
    ],
    vietnamContext: {
      title: 'IoT trong Canh tác Thanh long và Lúa gạo',
      content: [
        'Tại Bình Thuận, các trang trại thanh long đang áp dụng hệ thống đèn LED thông minh được điều khiển qua IoT để kích thích cây ra hoa trái vụ, tăng hiệu quả kinh tế.',
        'Ở Đồng bằng sông Cửu Long, các mô hình "ruộng lúa thông minh" sử dụng cảm biến để theo dõi độ mặn và mực nước, giúp nông dân ứng phó tốt hơn với tình trạng xâm nhập mặn.',
        'Các startup AgriTech Việt Nam như MimosaTEK đang cung cấp các giải pháp tưới tiêu chính xác dựa trên IoT cho hàng ngàn nông dân.',
      ],
    },
    careerConnect: {
      name: 'Phạm Anh Khoa',
      title: 'Kỹ sư hệ thống nhúng',
      company: 'Rynan Technologies Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-anh-khoa',
      quote:
        'IoT cho phép chúng ta "lắng nghe" cây trồng nói. Bằng cách cung cấp đúng thứ chúng cần, vào đúng thời điểm, chúng ta có thể canh tác hiệu quả hơn với ít tài nguyên hơn.',
    },
    quizzes: [
      {
        question: 'IoT là viết tắt của cụm từ nào?',
        options: [
          'Internal Online Tools',
          'Internet of Things',
          'Integrated Office Technology',
          'International Open Telecom',
        ],
        correctAnswerIndex: 1,
        explanation:
          'IoT (Internet of Things) hay "Mạng lưới vạn vật kết nối" là một mạng lưới các thiết bị vật lý được tích hợp cảm biến, phần mềm và các công nghệ khác để kết nối và trao đổi dữ liệu với nhau qua Internet.',
      },
    ],
  },
  {
    id: 'drones-and-precision-agriculture',
    title: 'Drone và Nông nghiệp Chính xác',
    description:
      'Bay vào tương lai của nông nghiệp với công nghệ drone. Học cách sử dụng máy bay không người lái để giám sát sức khỏe cây trồng, phun thuốc và lập bản đồ trang trại.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=u_wEa_3a-sE',
    imageUrl: 'https://i.ytimg.com/vi/u_wEa_3a-sE/hqdefault.jpg',
    objectives: [
      'Hiểu các loại drone và cảm biến được sử dụng trong nông nghiệp.',
      'Học về chỉ số sức khỏe thực vật (NDVI) và cách thu thập nó bằng drone.',
      'Khám phá ứng dụng của drone trong việc phun thuốc bảo vệ thực vật có chọn lọc.',
      'Phân tích dữ liệu từ drone để tạo bản đồ năng suất.',
    ],
    prerequisites: ['Hoàn thành các bài học trước'],
    exercises: [
      {
        title: 'Phân tích Hình ảnh NDVI',
        description:
          'Làm việc với một bộ dữ liệu hình ảnh NDVI mẫu để xác định các khu vực có vấn đề trong một cánh đồng.',
        difficulty: 'Trung bình',
        materials: ['Máy tính', 'Phần mềm GIS miễn phí (ví dụ: QGIS)'],
        procedure: [
          'Tải và mở bộ dữ liệu hình ảnh NDVI.',
          'Tìm hiểu cách đọc và diễn giải các giá trị màu sắc khác nhau.',
          'Khoanh vùng các khu vực có cây trồng phát triển kém.',
          'Đưa ra giả thuyết về nguyên nhân (ví dụ: thiếu nước, sâu bệnh).',
        ],
        expectedResults: 'Một bản báo cáo phân tích hình ảnh, xác định các khu vực cần chú ý và đề xuất hành động.',
      },
    ],
    realWorldApplications: [
      'Phun thuốc trừ sâu chính xác tại các khu vực bị nhiễm bệnh, giảm lượng thuốc sử dụng.',
      'Đánh giá sức khỏe cây trồng trên diện rộng một cách nhanh chóng.',
      'Tạo bản đồ năng suất để lập kế hoạch cho vụ mùa tiếp theo.',
    ],
    vietnamContext: {
      title: 'Drone phun thuốc và Gieo sạ Lúa tại Việt Nam',
      content: [
        'Dịch vụ phun thuốc bảo vệ thực vật bằng drone đang phát triển nhanh chóng tại các vùng trồng lúa lớn, giúp nông dân tiết kiệm thời gian, công sức và giảm tiếp xúc với hóa chất độc hại.',
        'Các drone nông nghiệp hiện đại còn có khả năng gieo sạ (gieo hạt) và bón phân, thực hiện nhiều công đoạn trong canh tác.',
        'Việc sử dụng drone đòi hỏi các quy định pháp lý rõ ràng về không phận và an toàn bay, đây là một lĩnh vực đang được nhà nước quan tâm hoàn thiện.',
      ],
    },
    careerConnect: {
      name: 'Trần Văn Mạnh',
      title: 'Phi công Drone & Nhà sáng lập',
      company: 'AgriFly Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-van-manh',
      quote:
        'Chiếc drone không chỉ là một công cụ, nó là con mắt của người nông dân trên không. Chúng tôi giúp họ nhìn thấy những gì mắt thường không thể, từ đó đưa ra những quyết định tốt hơn cho cánh đồng của mình.',
    },
    quizzes: [
      {
        question: 'Chỉ số NDVI (Normalized Difference Vegetation Index) thường được dùng để đo lường điều gì?',
        options: ['Độ ẩm của đất', 'Nhiệt độ của lá cây', 'Sức khỏe và mật độ của thảm thực vật', 'Tốc độ gió'],
        correctAnswerIndex: 2,
        explanation:
          'NDVI là một chỉ số quan trọng được tính toán từ hình ảnh vệ tinh hoặc drone, dựa trên cách thực vật phản xạ ánh sáng cận hồng ngoại và ánh sáng đỏ. Chỉ số NDVI cao thường cho thấy cây trồng khỏe mạnh và phát triển tốt.',
      },
    ],
  },
  {
    id: 'circular-economy-in-agriculture',
    title: 'Kinh tế Tuần hoàn trong Nông nghiệp',
    description:
      'Học cách thiết kế các hệ thống nông nghiệp không có chất thải, nơi phụ phẩm của quá trình này trở thành đầu vào cho quá trình khác.',
    duration: '90 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=j2c22n23r3M',
    imageUrl: 'https://i.ytimg.com/vi/j2c22n23r3M/hqdefault.jpg',
    objectives: [
      'Hiểu nguyên tắc của kinh tế tuần hoàn so với kinh tế tuyến tính.',
      'Khám phá các mô hình như VAC (Vườn - Ao - Chuồng).',
      'Học về compost, biogas và các kỹ thuật tái chế chất thải nông nghiệp.',
      'Thiết kế một chu trình khép kín cho một trang trại giả định.',
    ],
    prerequisites: ['Tư duy hệ thống'],
    exercises: [
      {
        title: 'Thiết kế Mô hình VAC Mini',
        description:
          'Vẽ sơ đồ và mô tả dòng chảy năng lượng và vật chất trong một hệ thống Vườn - Ao - Chuồng tích hợp.',
        difficulty: 'Nâng cao',
        procedure: [
          'Xác định các thành phần chính: cây trồng, vật nuôi, ao cá.',
          'Vẽ các mũi tên để chỉ ra dòng chảy: thức ăn, chất thải, nước, năng lượng.',
          'Mô tả cách chất thải từ thành phần này trở thành tài nguyên cho thành phần khác.',
          'Phân tích lợi ích kinh tế và môi trường của mô hình.',
        ],
        expectedResults: 'Một sơ đồ chi tiết và thuyết minh về một hệ thống nông nghiệp tuần hoàn.',
      },
    ],
    realWorldApplications: [
      'Các trang trại hữu cơ tích hợp.',
      'Sản xuất năng lượng tái tạo từ chất thải nông nghiệp.',
      'Giảm ô nhiễm môi trường và tăng lợi nhuận.',
    ],
    vietnamContext: {
      title: 'Kinh tế Tuần hoàn trong Nông nghiệp Việt Nam',
      content: [
        'Việt Nam đang đối mặt với thách thức lớn về quản lý chất thải nông nghiệp, với hàng triệu tấn phụ phẩm nông nghiệp bị lãng phí mỗi năm.',
        'Mô hình kinh tế tuần hoàn trong nông nghiệp không chỉ giúp giảm thiểu chất thải mà còn tạo ra giá trị gia tăng từ các sản phẩm phụ.',
        'Chính phủ và các tổ chức đang nỗ lực thúc đẩy các mô hình nông nghiệp tuần hoàn thông qua các chính sách và hỗ trợ kỹ thuật.',
      ],
    },
    careerConnect: {
      name: 'Lê Văn Bình',
      title: 'Chuyên gia Kinh tế Môi trường',
      company: 'Viện Nghiên cứu Phát triển Bền vững',
      imageUrl: 'https://i.pravatar.cc/150?u=le-van-binh',
      quote:
        'Kinh tế tuần hoàn trong nông nghiệp là chìa khóa để phát triển bền vững. Nó không chỉ bảo vệ môi trường mà còn mang lại lợi ích kinh tế lâu dài cho nông dân.',
    },
    quizzes: [
      {
        question: 'Mô hình VAC trong nông nghiệp bao gồm những thành phần nào?',
        options: ['Vườn, Ao, Chuồng', 'Vườn, Ruộng, Rừng', 'Ao, Hồ, Suối', 'Chuồng, Trại, Khu nuôi thủy sản'],
        correctAnswerIndex: 0,
        explanation:
          'Mô hình VAC là một hệ thống nông nghiệp bền vững truyền thống của Việt Nam, bao gồm Vườn (trồng cây), Ao (nuôi cá), và Chuồng (nuôi gia súc, gia cầm). Hệ thống này giúp tuần hoàn chất dinh dưỡng và năng lượng trong nông nghiệp.',
      },
    ],
  },
];
