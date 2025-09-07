import { BaseLessonData } from '@/types/lesson-base';
export interface SpaceExplorationLesson extends BaseLessonData {
  vietnamContext: {
    title: string;
    content: string[];
  };
  careerConnect: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
  quizzes: Array<{
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }>;
}

export const spaceLessons: SpaceExplorationLesson[] = [
  {
    id: 'space-exploration-fundamentals',
    title: 'Nền tảng về Khám phá Vũ trụ',
    description:
      'Tìm hiểu lịch sử và các nguyên lý cơ bản của việc khám phá không gian, từ khoa học tên lửa đến các sứ mệnh không gian.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=mEEJNG4uAPM',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu lịch sử khám phá vũ trụ từ vệ tinh Sputnik đến nay.',
      'Nắm vững nguyên lý đẩy của tên lửa và cơ học quỹ đạo.',
      'Tìm hiểu cấu trúc Hệ Mặt trời và các loại thiên thể.',
      'Khám phá các cơ quan không gian và các sứ mệnh nổi tiếng.',
    ],
    prerequisites: ['Kiến thức Vật lý và Toán học cấp 3.', 'Đam mê khám phá và công nghệ.'],
    exercises: [
      {
        title: 'Mô phỏng Lập kế hoạch Sứ mệnh',
        description: 'Sử dụng công cụ mô phỏng để thiết kế một sứ mệnh đơn giản khám phá Sao Hỏa.',
        difficulty: 'Trung bình',
        procedure: [
          'Xác định "cửa sổ phóng" (launch window) tối ưu để đến Sao Hỏa.',
          'Lựa chọn các thiết bị khoa học cần thiết cho tàu vũ trụ.',
          'Tính toán sơ bộ lượng nhiên liệu cần thiết.',
          'Vạch ra các giai đoạn chính của sứ mệnh: phóng, du hành, đi vào quỹ đạo, và hạ cánh.',
        ],
        expectedResults: 'Một bản kế hoạch sứ mệnh sơ bộ với các giai đoạn và mục tiêu rõ ràng.',
      },
    ],
    realWorldApplications: [
      'Công nghệ vệ tinh cho viễn thông và Internet.',
      'Hệ thống định vị toàn cầu (GPS).',
      'Quan sát Trái Đất để theo dõi biến đổi khí hậu.',
      'Nghiên cứu khoa học trong môi trường không trọng lực.',
    ],
    caseStudies: [
      {
        title: 'Sứ mệnh Sao Hỏa Perseverance của NASA',
        organization: 'NASA / JPL',
        problem:
          'Tìm kiếm dấu hiệu của sự sống cổ đại trên Sao Hỏa và thu thập các mẫu đất đá để mang về Trái Đất trong tương lai.',
        solution:
          'Triển khai một robot tự hành (rover) tiên tiến được trang bị các công cụ khoa học phức tạp và một hệ thống lưu trữ mẫu vật.',
        impact:
          'Mang lại những khám phá đột phá về địa chất Sao Hỏa, khả năng tồn tại của nước trong quá khứ và tiềm năng cho sự sống.',
        innovations: [
          'Trực thăng tự hành Ingenuity',
          'Hệ thống thu thập và lưu mẫu vật tiên tiến',
          'Công nghệ tự điều hướng bằng AI',
        ],
      },
    ],
    vietnamContext: {
      title: 'Dấu ấn Việt Nam trên bản đồ không gian',
      content: [
        'Việt Nam đã có vệ tinh riêng (VINASAT-1, VINASAT-2) để phục vụ viễn thông, khẳng định chủ quyền quốc gia trong không gian.',
        'Trung tâm Vũ trụ Việt Nam (VNSC) đang được xây dựng với mục tiêu làm chủ công nghệ vệ tinh nhỏ và ứng dụng công nghệ vũ trụ vào đời sống.',
        'Phạm Tuân là người Việt Nam và châu Á đầu tiên bay vào vũ trụ vào năm 1980 trong chương trình Interkosmos của Liên Xô.',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Lê Thị Ngọc Hân',
      title: 'Nhà nghiên cứu Khoa học Hành tinh',
      company: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=le-thi-ngoc-han',
      quote:
        'Vũ trụ là phòng thí nghiệm lớn nhất. Nghiên cứu các hành tinh khác giúp chúng ta hiểu rõ hơn về chính Trái Đất và vị trí của chúng ta trong vũ trụ.',
    },
    quizzes: [
      {
        question: 'Vệ tinh nhân tạo đầu tiên được con người phóng lên quỹ đạo Trái Đất có tên là gì?',
        options: ['Explorer 1', 'Sputnik 1', 'Vostok 1', 'Apollo 11'],
        correctAnswerIndex: 1,
        explanation:
          'Sputnik 1, được Liên Xô phóng vào ngày 4 tháng 10 năm 1957, đã mở ra kỷ nguyên chinh phục không gian của loài người.',
      },
    ],
  },
  {
    id: 'rocket-science-propulsion',
    title: 'Khoa học Tên lửa và Hệ thống Đẩy',
    description:
      'Đi sâu vào nguyên lý hoạt động của tên lửa và các loại hệ thống đẩy khác nhau được sử dụng trong khám phá không gian.',
    duration: '120 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=jI-HeXhsUIg',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    objectives: [
      'Nắm vững phương trình tên lửa Tsiolkovsky.',
      'Hiểu các loại động cơ đẩy chính: hóa học, điện, hạt nhân.',
      'Phân tích hiệu suất của tên lửa (lực đẩy, xung lực riêng).',
      'Tìm hiểu về các công nghệ đẩy trong tương lai.',
    ],
    prerequisites: ["Hoàn thành bài 'Nền tảng về Khám phá Vũ trụ'"],
    exercises: [
      {
        title: 'Tính toán Delta-v cho một Sứ mệnh',
        description:
          'Sử dụng phương trình tên lửa Tsiolkovsky để tính toán sự thay đổi vận tốc (delta-v) cần thiết cho một tên lửa.',
        difficulty: 'Nâng cao',
        procedure: [
          'Giả sử một tên lửa có khối lượng ban đầu (ướt) là 100,000 kg.',
          'Khối lượng sau khi đốt hết nhiên liệu (khô) là 10,000 kg.',
          'Vận tốc phụt khí của động cơ (Ve) là 4,500 m/s.',
          'Áp dụng công thức: Δv = Ve * ln(m0 / mf) để tính toán.',
        ],
        expectedResults: 'Tính toán ra được giá trị delta-v xấp xỉ 10,360 m/s.',
      },
    ],
    realWorldApplications: [
      'Động cơ Merlin của SpaceX sử dụng nhiên liệu lỏng (LOX/RP-1).',
      'Động cơ đẩy ion trên các tàu thăm dò không gian sâu.',
      'Tên lửa đẩy phụ nhiên liệu rắn (SRB) của Tàu con thoi.',
    ],
    caseStudies: [
      {
        title: 'SpaceX và Cuộc cách mạng Tên lửa Tái sử dụng',
        organization: 'SpaceX',
        problem: 'Chi phí phóng tên lửa cực kỳ đắt đỏ vì mỗi tên lửa chỉ sử dụng một lần rồi vứt bỏ.',
        solution:
          'Phát triển công nghệ để tầng đầu tiên của tên lửa có thể tự động quay trở lại và hạ cánh thẳng đứng, sẵn sàng cho lần phóng tiếp theo.',
        impact:
          'Giảm đáng kể chi phí phóng vệ tinh và đưa con người vào không gian, mở ra một kỷ nguyên mới cho ngành công nghiệp vũ trụ thương mại.',
        innovations: ['Hạ cánh thẳng đứng', 'Tái sử dụng tầng đẩy', 'Sản xuất hàng loạt'],
      },
    ],
    vietnamContext: {
      title: 'Tiềm năng Tên lửa "Made in Vietnam"',
      content: [
        'Các trường đại học kỹ thuật hàng đầu Việt Nam như Đại học Bách Khoa đã có các nhóm sinh viên nghiên cứu và chế tạo thành công các mẫu tên lửa thử nghiệm (sounding rocket) quy mô nhỏ.',
        'Các cuộc thi rocketry (tên lửa nước, tên lửa mô hình) đang ngày càng phổ biến, khơi dậy niềm đam mê khoa học không gian cho thế hệ trẻ.',
        'Việc phát triển tên lửa đẩy thương mại đòi hỏi một hệ sinh thái công nghiệp phụ trợ và đầu tư lớn, là một mục tiêu dài hạn cho Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Vũ Hồng Nhật',
      title: 'Kỹ sư trưởng, CLB Tên lửa Bách Khoa',
      company: 'HUST',
      imageUrl: 'https://i.pravatar.cc/150?u=vu-hong-nhat',
      quote:
        'Mỗi lần phóng tên lửa, dù là mô hình, đều là một bài học quý giá về kỹ thuật, làm việc nhóm và xử lý thất bại. Chúng tôi đang xây dựng những viên gạch đầu tiên cho ngành hàng không vũ trụ Việt Nam.',
    },
    quizzes: [
      {
        question:
          'Theo phương trình tên lửa Tsiolkovsky, yếu tố nào sau đây KHÔNG ảnh hưởng trực tiếp đến delta-v (khả năng thay đổi vận tốc) của tên lửa?',
        options: [
          'Tỷ lệ khối lượng (khối lượng ban đầu / khối lượng cuối)',
          'Vận tốc phụt khí của động cơ',
          'Thời gian đốt cháy nhiên liệu',
          'Tất cả đều ảnh hưởng',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Phương trình Tsiolkovsky (Δv = Ve * ln(m0 / mf)) chỉ phụ thuộc vào vận tốc phụt khí (Ve) và logarit tự nhiên của tỷ lệ khối lượng (m0/mf). Thời gian đốt cháy ảnh hưởng đến lực đẩy và gia tốc, nhưng không trực tiếp quyết định tổng delta-v.',
      },
    ],
  },
];
