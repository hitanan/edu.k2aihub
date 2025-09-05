import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface EnergyManagementLessonType extends BaseLessonData {
  // No extra properties, but defining for consistency
}

export const energyManagementLessons: EnergyManagementLessonType[] = [
  {
    id: 'energy-fundamentals',
    title: 'Cơ Bản Quản Lý Năng Lượng',
    description:
      'Học cách quản lý năng lượng cá nhân để tối ưu hóa hiệu suất và duy trì sức khỏe bền vững trong cuộc sống và công việc.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: null,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu về 4 loại năng lượng: Thể chất, Cảm xúc, Tinh thần, và Tinh thần (Spiritual)',
      'Nhận diện các chu kỳ năng lượng và thời gian hiệu suất đỉnh cao',
      'Phát triển các chiến lược quản lý năng lượng bền vững',
      'Tạo kế hoạch tối ưu hóa năng lượng cá nhân hóa',
      'Học các nguyên tắc năng lượng chính (ví dụ: Năng lượng > Thời gian, Nhịp điệu Ultradian)',
      'Khám phá các phương pháp phục hồi đa dạng (chủ động, bị động, xã hội)',
      'Áp dụng các chiến lược tối ưu hóa như sắp xếp theo kiểu giờ sinh học và nghỉ ngơi chiến lược',
    ],
    prerequisites: ['Có động lực để cải thiện hiệu suất cá nhân', 'Sẵn sàng theo dõi và giám sát thói quen hàng ngày'],
    vietnamContext: {
      title: 'Bối Cảnh Năng Lượng tại Việt Nam',
      content: [
        "Văn hóa làm việc 'hết mình' và áp lực làm thêm giờ (OT) ảnh hưởng đến chu kỳ nghỉ ngơi.",
        'Khí hậu nhiệt đới đòi hỏi chiến lược quản lý năng lượng thể chất khác biệt, đặc biệt là vấn đề hydrat hóa.',
        "Tầm quan trọng của 'phục hồi xã hội' qua các bữa ăn trưa và cà phê với đồng nghiệp là một phần văn hóa công sở.",
        'Cân bằng giữa yêu cầu công việc và các nghĩa vụ gia đình truyền thống là một yếu tố lớn trong quản lý năng lượng tinh thần.',
      ],
    },
    careerConnect: {
      name: 'Lê Minh Ánh',
      title: 'Chuyên gia Tư vấn Hiệu suất (Performance Coach)',
      company: 'Mindful Performance Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=le-minh-anh',
      quote:
        'Hiểu và quản lý năng lượng cá nhân không chỉ giúp bạn thành công trong sự nghiệp mà còn xây dựng một cuộc sống trọn vẹn. Đây là kỹ năng cốt lõi cho các nhà lãnh đạo tương lai tại Việt Nam.',
    },
    exercises: [
      {
        title: 'Kiểm toán Năng lượng Cá nhân',
        description: 'Theo dõi mức năng lượng trong 1 tuần để xác định các quy luật.',
        difficulty: 'Cơ bản',
        materials: ['Ứng dụng/nhật ký theo dõi năng lượng', 'Hệ thống nhắc nhở hàng giờ'],
        procedure: [
          'Thiết lập kiểm tra mức năng lượng hàng giờ (thang điểm 1-10)',
          'Ghi lại các hoạt động trước mỗi lần đo',
          'Theo dõi giấc ngủ, thức ăn, tập thể dục, tương tác xã hội',
          'Ghi lại tâm trạng và chất lượng tập trung',
          'Xác định các đỉnh và đáy năng lượng',
          'Phân tích các quy luật và mối tương quan',
        ],
        expectedResults: 'Hiểu rõ về các quy luật năng lượng cá nhân',
        solution:
          'Hầu hết mọi người có 2-3 đỉnh năng lượng mỗi ngày, thường là 2-4 giờ sau khi thức dậy và giữa buổi chiều.',
      },
      {
        title: 'Thí nghiệm Nhịp điệu Ultradian',
        description: 'Tối ưu hóa các phiên làm việc dựa trên chu kỳ chú ý tự nhiên.',
        difficulty: 'Trung bình',
        materials: ['Đồng hồ bấm giờ', 'Danh sách công việc', 'Công cụ theo dõi hiệu suất'],
        procedure: [
          'Làm việc trong các khối tập trung 90 phút',
          'Nghỉ giải lao phục hồi 20 phút giữa các khối',
          'Theo dõi năng suất và năng lượng trong mỗi khối',
          'Thử nghiệm với các hoạt động nghỉ giải lao khác nhau',
          'Ghi lại thời gian tối ưu cho các loại công việc khác nhau',
          'Thiết kế lịch trình hàng ngày xung quanh nhịp điệu tự nhiên',
        ],
        expectedResults: 'Lịch làm việc được tối ưu hóa phù hợp với chu kỳ năng lượng tự nhiên',
        solution:
          'Làm việc sâu trong các đỉnh năng lượng, công việc hành chính trong các đáy năng lượng, nghỉ giải lao tích cực để duy trì năng lượng.',
      },
      {
        title: 'Theo dõi các chỉ số hiệu suất của bạn',
        description:
          'Tìm hiểu cách đo lường các khía cạnh khác nhau của năng lượng cá nhân để có cái nhìn sâu sắc hơn.',
        difficulty: 'Trung bình',
        procedure: [
          'Mức năng lượng buổi sáng: Đánh giá trên thang điểm 1-10 khi thức dậy để biết chất lượng giấc ngủ và sự phục hồi.',
          'Thời gian tập trung: Đo số phút tập trung không bị gián đoạn để đánh giá sự mệt mỏi về tinh thần.',
          'Đánh giá tâm trạng: Đánh giá trên thang điểm 1-10 ba lần mỗi ngày để theo dõi khả năng phục hồi cảm xúc.',
          'Mức độ động lực: Suy ngẫm hàng tuần về sự kết nối với mục đích để đánh giá sự phù hợp với các giá trị.',
        ],
        expectedResults: 'Một hệ thống để theo dõi và hiểu các chỉ số hiệu suất năng lượng của bạn.',
      },
    ],
    quizzes: [
      {
        question: 'Loại năng lượng nào được coi là nền tảng cho tất cả các loại năng lượng khác?',
        options: [
          'Năng lượng Tinh thần (Mental)',
          'Năng lượng Cảm xúc (Emotional)',
          'Năng lượng Thể chất (Physical)',
          'Năng lượng Tinh thần (Spiritual)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Năng lượng thể chất là nền tảng vì nó ảnh hưởng trực tiếp đến sức khỏe, sức bền và khả năng hoạt động của cơ thể, từ đó tác động đến tất cả các loại năng lượng khác.',
      },
      {
        question: 'Ultradian Rhythms là gì?',
        options: [
          'Chu kỳ ngủ hàng đêm',
          'Chu kỳ năng lượng tự nhiên kéo dài 90-120 phút của cơ thể',
          'Nhịp tim khi nghỉ ngơi',
          'Chu kỳ thay đổi tâm trạng trong ngày',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Ultradian Rhythms là các chu kỳ sinh học tự nhiên của cơ thể, lặp lại nhiều lần trong 24 giờ. Tối ưu hóa công việc theo các chu kỳ tập trung và nghỉ ngơi này có thể tăng hiệu suất đáng kể.',
      },
    ],
    realWorldApplications: [
      'Tối ưu hóa hiệu suất và năng suất làm việc',
      'Quản lý lịch học tập đòi hỏi cao',
      'Cân bằng nhiều trách nhiệm trong cuộc sống',
      'Ngăn ngừa kiệt sức trong các vai trò căng thẳng cao',
      'Nâng cao thành tích thể thao',
    ],
    caseStudies: [
      {
        title: 'Chương trình Quản lý Năng lượng Doanh nghiệp',
        organization: 'Johnson & Johnson',
        problem: 'Nhân viên kiệt sức và hiệu suất giảm sút',
        solution: 'Đào tạo quản lý năng lượng toàn công ty',
        impact: 'Tăng 20% năng suất, giảm số ngày nghỉ ốm',
        innovations: [
          'Phòng tái tạo năng lượng',
          'Lịch làm việc linh hoạt',
          'Chính sách thời gian phục hồi',
          'Huấn luyện sức khỏe',
        ],
      },
    ],
    resources: [
      {
        title: "The Way We're Working Isn't Working",
        url: 'https://www.tonyschwartzbook.com',
        type: 'Book',
      },
      {
        title: 'Sleep Foundation',
        url: 'https://www.sleepfoundation.org',
        type: 'Research',
      },
    ],
  },
  {
    id: 'cognitive-performance-optimization',
    title: 'Tối Ưu Hóa Hiệu Suất Nhận Thức',
    description:
      'Nâng cao khả năng tập trung, trí nhớ, và ra quyết định thông qua khoa học nhận thức và các kỹ thuật thực tế.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=LO1mTELoj6o',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu lý thuyết về tải nhận thức và băng thông tinh thần',
      'Tối ưu hóa sự hình thành và truy xuất trí nhớ',
      'Nâng cao khả năng ra quyết định dưới áp lực',
      'Xây dựng khả năng phục hồi và linh hoạt nhận thức',
      'Học các chiến lược tối ưu hóa như Hệ thống lặp lại ngắt quãng và Thực hành xen kẽ',
    ],
    prerequisites: ['Đã hoàn thành bài học "Cơ Bản Quản Lý Năng Lượng"', 'Hiểu biết cơ bản về chức năng của não bộ'],
    vietnamContext: {
      title: 'Tối Ưu Hóa Nhận Thức trong Môi Trường Số Việt Nam',
      content: [
        "Đối phó với tình trạng 'quá tải thông tin' từ các mạng xã hội phổ biến như Zalo, Facebook, TikTok.",
        'Áp dụng các kỹ thuật ghi nhớ để học ngoại ngữ (tiếng Anh, Hàn, Nhật) hiệu quả, đáp ứng nhu cầu thị trường lao động.',
        "Văn hóa 'vừa học vừa làm' đòi hỏi kỹ năng quản lý tải nhận thức và chuyển đổi ngữ cảnh linh hoạt.",
        'Ra quyết định nhanh và chính xác trong môi trường kinh doanh năng động và cạnh tranh cao.',
      ],
    },
    careerConnect: {
      name: 'Trần Quốc Kỳ',
      title: 'Nhà Khoa học Dữ liệu (Data Scientist)',
      company: 'Tiki',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-quoc-ky',
      quote:
        'Trong ngành dữ liệu, khả năng tập trung sâu và quản lý tải nhận thức là yếu tố quyết định sự khác biệt giữa một phân tích viên trung bình và một chuyên gia xuất sắc.',
    },
    exercises: [
      {
        title: 'Đánh giá Tải Nhận thức',
        description: 'Đo lường tải nhận thức trong các hoạt động khác nhau.',
        difficulty: 'Trung bình',
        materials: ['Nhiệm vụ phức tạp', 'Bảng câu hỏi về tải nhận thức', 'Các chỉ số hiệu suất'],
        procedure: [
          'Chọn nhiệm vụ nhận thức phức tạp (lập trình, viết, phân tích)',
          'Đo lường hiệu suất cơ bản',
          'Thêm tải nhận thức (tiếng ồn, gián đoạn, áp lực thời gian)',
          'Đo lường sự suy giảm hiệu suất',
          'Thử nghiệm các chiến lược giảm tải',
          'Tối ưu hóa môi trường để có hiệu suất nhận thức tốt nhất',
        ],
        expectedResults: 'Các chiến lược tối ưu hóa nhận thức được cá nhân hóa',
        solution:
          'Giảm tải nhận thức không cần thiết, chia nhỏ thông tin, sử dụng các công cụ hỗ trợ trí nhớ bên ngoài.',
      },
      {
        title: 'Xây dựng Hệ thống Trí nhớ',
        description: 'Tạo hệ thống trí nhớ cá nhân bằng các kỹ thuật đã được chứng minh.',
        difficulty: 'Nâng cao',
        materials: ['Mẫu cung điện trí nhớ', 'Ứng dụng lặp lại ngắt quãng', 'Nội dung học tập'],
        procedure: [
          'Chọn thông tin để ghi nhớ (ngôn ngữ, sự kiện, kỹ năng)',
          'Xây dựng cung điện trí nhớ để mã hóa không gian',
          'Tạo các thiết bị ghi nhớ và liên kết',
          'Thực hiện lịch trình lặp lại ngắt quãng',
          'Kiểm tra khả năng lưu giữ theo thời gian',
          'Tinh chỉnh các kỹ thuật dựa trên kết quả',
        ],
        expectedResults: 'Hệ thống trí nhớ dài hạn mạnh mẽ',
        solution: 'Kết hợp nhiều phương pháp mã hóa, sử dụng các liên kết cảm xúc, thực hành gợi nhớ tích cực.',
      },
    ],
    quizzes: [
      {
        question:
          'Khi bạn bị gián đoạn trong lúc làm việc sâu, hiện tượng nào xảy ra làm giảm hiệu suất của bạn ngay cả sau khi quay lại công việc?',
        options: ['Bất hòa nhận thức', 'Tàn dư chú ý', 'Mệt mỏi quyết định', 'Tê liệt phân tích'],
        correctAnswerIndex: 1,
        explanation:
          "'Attention Residue' (tàn dư chú ý) là hiện tượng khi một phần tâm trí của bạn vẫn còn vướng bận với công việc trước đó, làm giảm khả năng tập trung hoàn toàn vào nhiệm vụ hiện tại.",
      },
    ],
    realWorldApplications: [
      'Học thi và lấy chứng chỉ',
      'Giải quyết vấn đề phức tạp tại nơi làm việc',
      'Học kỹ năng mới nhanh chóng',
      'Quản lý quá tải thông tin',
      'Cải thiện chất lượng quyết định dưới áp lực',
    ],
    caseStudies: [
      {
        title: 'Huấn luyện Đại kiện tướng Cờ vua',
        organization: 'Đội huấn luyện của Magnus Carlsen',
        problem: 'Duy trì hiệu suất nhận thức đỉnh cao trong các giải đấu dài',
        solution: 'Huấn luyện nhận thức và quản lý năng lượng có hệ thống',
        impact: 'Thành công vô địch thế giới, duy trì sự xuất sắc bền vững',
        innovations: [
          'Huấn luyện nhận dạng mẫu',
          'Kỹ thuật hình dung',
          'Tiêm chủng căng thẳng',
          'Các giao thức phục hồi',
        ],
      },
    ],
    resources: [
      {
        title: 'Peak: Secrets from the New Science of Expertise',
        url: 'https://www.amazon.com/dp/0544456238',
        type: 'Book',
      },
      {
        title: 'Lumosity Brain Training',
        url: 'https://www.lumosity.com',
        type: 'App',
      },
    ],
  },
  {
    id: 'stress-resilience-building',
    title: 'Xây Dựng Khả Năng Chống Chịu Stress',
    description:
      'Phát triển khả năng phục hồi và tính kháng tổn thương (antifragility) để thành công trong môi trường áp lực cao và không chắc chắn.',
    duration: '135 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=GXy__kBVq1M',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu sinh lý học căng thẳng và các phản ứng thích nghi',
      'Xây dựng khả năng phục hồi tâm lý và điều hòa cảm xúc',
      'Phát triển tư duy kháng tổn thương',
      'Tạo các giao thức tiêm chủng căng thẳng',
      'Học các phương pháp phục hồi như Luyện thở và Tiếp xúc lạnh',
    ],
    prerequisites: ['Đã hoàn thành các bài học trước', 'Có kinh nghiệm với các tình huống căng thẳng'],
    vietnamContext: {
      title: 'Xây Dựng Sức Chịu Đựng trong Bối Cảnh Áp Lực Cao',
      content: [
        "Đối mặt với áp lực từ 'bệnh thành tích' trong giáo dục và 'văn hóa OT' trong công việc.",
        'Xây dựng khả năng phục hồi trước những biến động của thị trường lao động và kinh tế.',
        "Vượt qua áp lực từ 'giữ thể diện' và kỳ vọng của xã hội.",
        'Tìm kiếm sự cân bằng và ý nghĩa trong một xã hội đang phát triển nhanh chóng.',
      ],
    },
    careerConnect: {
      name: 'Phạm Thị Kim Dung',
      title: 'Giám đốc Điều hành (CEO)',
      company: 'Sen Vàng Entertainment',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-thi-kim-dung',
      quote:
        'Trong ngành giải trí đầy biến động, khả năng chống chịu và phục hồi sau thất bại không phải là một lựa chọn, mà là điều kiện tiên quyết để tồn tại và phát triển.',
    },
    exercises: [
      {
        title: 'Giao thức Tiêm chủng Căng thẳng',
        description: 'Tiếp xúc dần dần để xây dựng khả năng chịu đựng căng thẳng.',
        difficulty: 'Nâng cao',
        materials: ['Danh sách các tác nhân gây căng thẳng theo cấp độ', 'Các giao thức phục hồi', 'Theo dõi tiến độ'],
        procedure: [
          'Xác định các loại căng thẳng bạn muốn xây dựng khả năng phục hồi',
          'Tạo một thang tiếp xúc theo cấp độ',
          'Bắt đầu với các tác nhân gây căng thẳng ở mức độ thấp có thể kiểm soát được',
          'Thực hành các chiến lược đối phó trong quá trình tiếp xúc',
          'Tăng dần cường độ/độ phức tạp',
          'Theo dõi sự phục hồi và thích ứng',
        ],
        expectedResults: 'Tăng khả năng chịu đựng căng thẳng và phục hồi nhanh hơn',
        solution: 'Bắt đầu nhỏ, đảm bảo khả năng kiểm soát, thực hành kỹ năng đối phó, ăn mừng tiến trình thích ứng.',
      },
      {
        title: 'Hội thảo Tái cấu trúc Nhận thức',
        description: 'Biến những suy nghĩ gây căng thẳng thành cơ hội phát triển.',
        difficulty: 'Trung bình',
        materials: ['Mẫu ghi lại suy nghĩ', 'Hướng dẫn kỹ thuật tái cấu trúc'],
        procedure: [
          'Xác định các suy nghĩ gây căng thẳng lặp đi lặp lại',
          'Phân tích các mẫu suy nghĩ để tìm ra các bóp méo nhận thức',
          'Thực hành các cách diễn giải thay thế',
          'Sử dụng câu hỏi "Điều này sẽ trông như thế nào nếu nó dễ dàng?"',
          'Tìm cơ hội phát triển trong các thách thức',
          'Xây dựng việc tái cấu trúc thành thói quen hàng ngày',
        ],
        expectedResults: 'Cải thiện việc đánh giá căng thẳng và điều hòa cảm xúc',
        solution:
          'Thách thức suy nghĩ thảm họa, tìm kiếm bằng chứng, xem xét các quan điểm thay thế, tập trung vào những gì có thể kiểm soát.',
      },
    ],
    quizzes: [
      {
        question: 'Hormesis là nguyên tắc mô tả hiện tượng nào?',
        options: [
          'Stress luôn có hại cho cơ thể',
          'Một lượng stress nhỏ, có kiểm soát có thể mang lại lợi ích và giúp cơ thể mạnh mẽ hơn',
          'Tránh mọi loại stress là cách tốt nhất để khỏe mạnh',
          'Chỉ có stress tinh thần mới có hại',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hormesis là một nguyên tắc sinh học, trong đó việc tiếp xúc với một lượng nhỏ tác nhân gây stress (như tập thể dục, nhịn ăn gián đoạn) có thể kích thích phản ứng thích nghi, giúp cơ thể trở nên khỏe mạnh và chống chịu tốt hơn.',
      },
    ],
    realWorldApplications: [
      'Môi trường làm việc áp lực cao',
      'Khởi nghiệp và thách thức kinh doanh',
      'Thành tích thể thao dưới áp lực',
      'Các kỳ thi và bài thuyết trình học thuật',
      'Giải quyết xung đột trong mối quan hệ',
    ],
    caseStudies: [
      {
        title: 'Sự tiến hóa trong Huấn luyện Navy SEAL',
        organization: 'US Navy SEALs',
        problem: 'Tỷ lệ thành công trong tuyển chọn và hiệu suất dưới áp lực cực độ',
        solution: 'Huấn luyện tiêm chủng căng thẳng dựa trên khoa học',
        impact: 'Tỷ lệ tuyển chọn cao hơn, hiệu suất chiến trường tốt hơn',
        innovations: [
          'Tiếp xúc căng thẳng theo cấp độ',
          'Huấn luyện kỹ năng tinh thần',
          'Khả năng phục hồi của đội',
          'Các giao thức phục hồi',
        ],
      },
    ],
    resources: [
      {
        title: 'Antifragile by Nassim Taleb',
        url: 'https://www.amazon.com/dp/0812979680',
        type: 'Book',
      },
      {
        title: 'Wim Hof Method',
        url: 'https://www.wimhofmethod.com',
        type: 'Training',
      },
    ],
  },
];
