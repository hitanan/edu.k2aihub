import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface StemLesson extends BaseLessonData {
  category: string;
  materials?: string[];
  competitions?: string[];
  exercises: Array<{
    title: string;
    description: string;
    difficulty: string;
    materials?: string[];
    procedure?: string[];
    expectedResults?: string;
    solution?: string;
    hints?: string[];
  }>;
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

// STEM Education Module Data
// Comprehensive STEM and STEAM learning content for K2AiHub education platform

export const stemLessons: StemLesson[] = [
  {
    id: 'stem-introduction',
    title: 'Giới Thiệu về Giáo dục STEM & STEAM',
    description:
      'Khám phá thế giới STEM/STEAM đầy màu sắc! Bạn sẽ hiểu tại sao việc kết hợp Khoa học, Công nghệ, Kỹ thuật, Toán học và Nghệ thuật lại tạo nên sức mạnh sáng tạo vô hạn, mở ra cánh cửa cho những khám phá và thực hành thú vị.',
    difficulty: 'Cơ bản',
    duration: '45 phút',
    category: 'introduction',
    videoUrl: 'https://www.youtube.com/watch?v=mZWXh69TDz4',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    materials: ['Giấy', 'Bút', 'Kết nối internet'],
    competitions: ['VISEF', 'Robocon'],
    objectives: [
      'Hiểu rõ khái niệm STEM và STEAM.',
      'Nhận biết được các lĩnh vực chính trong giáo dục STEM.',
      'Phát triển tư duy khoa học, logic và sáng tạo.',
      'Thấy được các ứng dụng của STEM trong cuộc sống hàng ngày.',
    ],
    prerequisites: ['Sự tò mò và hứng thú học tập.'],
    exercises: [
      {
        title: 'STEM Xung Quanh Ta',
        description: 'Tìm kiếm và phân loại các ví dụ về STEM trong chính ngôi nhà hoặc lớp học của bạn.',
        difficulty: 'Cơ bản',
        procedure: [
          'Dành 10 phút để quan sát xung quanh.',
          'Liệt kê ít nhất 10 vật dụng hoặc hiện tượng bạn thấy.',
          'Phân loại chúng vào các nhóm: Khoa học (S), Công nghệ (T), Kỹ thuật (E), và Toán học (M).',
          'Thảo luận với bạn bè về những phát hiện của mình.',
        ],
        expectedResults: 'Một danh sách phân loại được ít nhất 10 ví dụ về STEM, kèm theo giải thích ngắn gọn.',
        hints: ['Hãy nghĩ về chiếc điện thoại, tủ lạnh, hoặc cả bóng đèn.'],
      },
    ],
    realWorldApplications: [
      'Thiết kế ứng dụng di động giải quyết một vấn đề xã hội.',
      'Phát triển robot hỗ trợ người khuyết tật.',
      'Tạo ra các vật liệu mới từ rác thải nhựa.',
      'Xây dựng các mô hình thành phố thông minh.',
    ],
    vietnamContext: {
      title: 'STEM trong Chương trình Giáo dục Phổ thông Mới tại Việt Nam',
      content: [
        'Chương trình Giáo dục Phổ thông 2018 của Việt Nam nhấn mạnh việc tích hợp giáo dục STEM để phát triển năng lực và phẩm chất cho học sinh.',
        'Nhiều trường học trên cả nước đã xây dựng các "Không gian sáng tạo STEM" để học sinh có môi trường thực hành và trải nghiệm.',
        'Các cuộc thi khoa học kỹ thuật (VISEF) và robotics (Robocon) cấp quốc gia là sân chơi lớn, khuyến khích hàng ngàn học sinh tham gia nghiên cứu và sáng tạo STEM.',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Nguyễn Chí Công',
      title: 'Giám đốc Trung tâm Nghiên cứu và Phát triển Giáo dục STEM',
      company: 'Đại học Quốc gia Hà Nội',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Giáo dục STEM không phải là dạy 4 môn học riêng lẻ, mà là dạy cách tư duy liên ngành để giải quyết các vấn đề của thế giới thực. Đó là kỹ năng sinh tồn trong thế kỷ 21.',
    },
    quizzes: [
      {
        question: 'Chữ "A" trong STEAM đại diện cho lĩnh vực nào?',
        options: [
          'Agriculture (Nông nghiệp)',
          'Arts (Nghệ thuật)',
          'Automation (Tự động hóa)',
          'Astronomy (Thiên văn học)',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Chữ "A" (Arts - Nghệ thuật) được thêm vào STEM để tạo thành STEAM, nhấn mạnh vai trò của sự sáng tạo, thiết kế và tư duy nhân văn trong việc giải quyết các vấn đề kỹ thuật.',
      },
    ],
  },
  {
    id: 'engineering-design-process',
    title: 'Quy trình Thiết kế Kỹ thuật',
    description:
      'Học cách suy nghĩ như một kỹ sư! Quy trình Thiết kế Kỹ thuật là một chuỗi các bước giúp bạn biến một ý tưởng thành một giải pháp thực tế, từ việc xác định vấn đề, lên ý tưởng, tạo mẫu đến thử nghiệm và cải tiến.',
    difficulty: 'Cơ bản',
    duration: '60 phút',
    category: 'engineering',
    videoUrl: 'https://www.youtube.com/watch?v=b7oI_i_4i5c',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    materials: ['20 que mỳ Ý', '1m băng dính', '1m dây', '1 viên kẹo marshmallow'],
    competitions: ['Maker Faire', 'First Lego League'],
    objectives: [
      'Hiểu và ghi nhớ các bước trong Quy trình Thiết kế Kỹ thuật.',
      'Áp dụng quy trình để giải quyết một thử thách nhỏ.',
      'Học cách động não (brainstorm) và đánh giá các ý tưởng.',
      'Hiểu tầm quan trọng của việc tạo mẫu (prototyping) và thử nghiệm.',
    ],
    prerequisites: ["Hoàn thành bài 'Giới thiệu STEM & STEAM'"],
    exercises: [
      {
        title: 'Thử thách "Tòa tháp Marshmallow"',
        description:
          'Làm việc nhóm để xây dựng tòa tháp cao nhất có thể bằng mỳ Ý, băng dính, dây và một viên kẹo marshmallow trên đỉnh.',
        difficulty: 'Trung bình',
        procedure: [
          'Nhận bộ vật liệu: 20 que mỳ Ý, 1m băng dính, 1m dây, 1 viên kẹo marshmallow.',
          'Áp dụng Quy trình Thiết kế Kỹ thuật: Lên kế hoạch, phác thảo ý tưởng.',
          'Xây dựng tòa tháp trong thời gian giới hạn (18 phút).',
          'Đo chiều cao của các tòa tháp để tìm ra nhóm chiến thắng.',
        ],
        expectedResults:
          'Một tòa tháp tự đứng được với viên kẹo marshmallow trên đỉnh. Bài học về làm việc nhóm, quản lý thời gian và tầm quan trọng của việc tạo một nền móng vững chắc.',
        hints: ['Nền móng rộng và vững chắc là chìa khóa.', 'Hãy thử các dạng hình tam giác.'],
      },
    ],
    realWorldApplications: [
      'Các kỹ sư của Apple sử dụng quy trình này để thiết kế iPhone.',
      'Các kiến trúc sư áp dụng để thiết kế các tòa nhà chọc trời.',
      'Các nhà phát triển phần mềm dùng để xây dựng các ứng dụng mới.',
    ],
    vietnamContext: {
      title: 'Tinh thần "Làm thật, ăn thật" trong các dự án Kỹ thuật Việt',
      content: [
        'Các dự án khởi nghiệp công nghệ tại Việt Nam thường áp dụng mô hình "Lean Startup", một biến thể của quy trình thiết kế, tập trung vào việc xây dựng Sản phẩm Khả dụng Tối thiểu (MVP) và nhanh chóng thử nghiệm với thị trường.',
        'Sinh viên các trường Bách Khoa, Sư phạm Kỹ thuật thường xuyên tham gia các dự án chế tạo robot, xe tiết kiệm năng lượng, áp dụng trực tiếp quy trình thiết kế kỹ thuật.',
        'Văn hóa "độ, chế" các vật dụng hàng ngày của người Việt Nam cũng là một hình thức tự nhiên của quy trình thiết kế: xác định vấn đề, tìm giải pháp và thử nghiệm.',
      ],
    },
    careerConnect: {
      name: 'Mai Thanh Thái',
      title: 'Đồng sáng lập & CEO',
      company: 'Air-SENSE Technology',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Trong kỹ thuật, thất bại không phải là kết thúc, đó là dữ liệu. Mỗi lần thử nghiệm thất bại cho chúng ta biết một cách làm không hiệu quả, và đưa chúng ta đến gần hơn với giải pháp tối ưu.',
    },
    quizzes: [
      {
        question:
          'Trong Quy trình Thiết kế Kỹ thuật, bước nào thường diễn ra ngay sau bước "Lên ý tưởng" (Brainstorm)?',
        options: ['Xác định vấn đề', 'Thử nghiệm', 'Xây dựng mẫu thử (Prototype)', 'Chia sẻ giải pháp'],
        correctAnswerIndex: 2,
        explanation:
          'Sau khi có nhiều ý tưởng, bước hợp lý tiếp theo là chọn ra ý tưởng tốt nhất và xây dựng một phiên bản mẫu đơn giản (prototype) để kiểm tra xem nó có hoạt động như mong đợi hay không.',
      },
    ],
  },
];
