import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

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
    faqs: [
      {
        question: 'Tại sao Nghệ thuật (Arts) lại được thêm vào STEM?',
        answer:
          'Việc thêm "A" (Arts) vào tạo thành STEAM công nhận rằng sự sáng tạo, thiết kế, và tư duy lấy con người làm trung tâm là yếu tố cốt lõi để đổi mới. Nghệ thuật giúp các nhà khoa học và kỹ sư suy nghĩ vượt ra ngoài các con số và công thức, tạo ra các giải pháp không chỉ hiệu quả về mặt kỹ thuật mà còn đẹp, thân thiện và có ý nghĩa với người dùng.',
      },
      {
        question: 'Học STEM có khô khan và khó không?',
        answer:
          'Hoàn toàn không! Giáo dục STEM hiện đại tập trung vào việc học qua dự án và giải quyết vấn đề thực tế. Bạn sẽ được làm những thí nghiệm vui, chế tạo robot, thiết kế game, hoặc xây dựng các mô hình. Quá trình này rất thú vị và đầy tính tương tác, giúp bạn học một cách tự nhiên và hiệu quả.',
      },
      {
        question: 'Sự khác biệt chính giữa STEM và giáo dục truyền thống là gì?',
        answer:
          'Giáo dục truyền thống thường dạy các môn học một cách riêng rẽ. STEM tập trung vào sự tích hợp liên môn, áp dụng kiến thức từ nhiều lĩnh vực để giải quyết một vấn đề duy nhất, mô phỏng cách các vấn đề được giải quyết trong thế giới thực.',
      },
      {
        question: 'Học sinh bắt đầu học STEM từ độ tuổi nào là tốt nhất?',
        answer:
          'STEM có thể được giới thiệu từ rất sớm, ngay từ lứa tuổi mầm non, thông qua các hoạt động vui chơi, khám phá đơn giản. Việc tiếp xúc sớm giúp hình thành tư duy tò mò và kỹ năng giải quyết vấn đề một cách tự nhiên.',
      },
      {
        question: 'Lợi ích của việc học STEM đối với học sinh là gì?',
        answer:
          'Học STEM giúp học sinh phát triển các kỹ năng quan trọng của thế kỷ 21 như tư duy phản biện, sáng tạo, hợp tác, và giao tiếp. Nó cũng chuẩn bị cho các em nền tảng vững chắc để theo đuổi các ngành nghề có nhu cầu cao trong tương lai.',
      },
      {
        question: 'Làm thế nào để phụ huynh có thể khuyến khích con học STEM tại nhà?',
        answer:
          'Phụ huynh có thể khuyến khích sự tò mò của trẻ, cùng trẻ thực hiện các thí nghiệm khoa học đơn giản, chơi các Interactive Practice xây dựng (LEGO), hoặc tham gia các câu lạc bộ, trại hè STEM. Quan trọng là tạo ra một môi trường khuyến khích đặt câu hỏi và không sợ sai.',
      },
      {
        question: 'Tư duy tính toán (Computational Thinking) là gì?',
        answer:
          'Là một kỹ năng cốt lõi trong STEM, bao gồm việc chia một vấn đề phức tạp thành các phần nhỏ hơn (phân rã), nhận dạng các mẫu, loại bỏ các chi tiết không cần thiết (trừu tượng hóa), và thiết kế các bước giải quyết (thuật toán). Đây là nền tảng của lập trình máy tính.',
      },
      {
        question: 'Robocon là gì?',
        answer:
          'Robocon (Robotics Contest) là cuộc thi chế tạo robot dành cho sinh viên các trường đại học và cao đẳng kỹ thuật, đặc biệt phổ biến ở khu vực Châu Á - Thái Bình Dương. Đây là một sân chơi đỉnh cao, thể hiện khả năng ứng dụng kiến thức STEM vào thực tế.',
      },
      {
        question: 'VISEF là viết tắt của cuộc thi gì?',
        answer:
          'VISEF là viết tắt của "Vietnam Science and Engineering Fair" - Cuộc thi Khoa học Kỹ thuật cấp Quốc gia dành cho học sinh trung học. Đây là nơi các em trình bày các dự án nghiên cứu khoa học của mình, và những dự án xuất sắc nhất sẽ được chọn đi thi quốc tế (ISEF).',
      },
      {
        question: 'Học STEM có nhất thiết phải trở thành kỹ sư hay nhà khoa học không?',
        answer:
          'Không hề. Các kỹ năng được rèn luyện qua giáo dục STEM như tư duy logic, giải quyết vấn đề, và khả năng phân tích dữ liệu đều rất có giá trị trong bất kỳ ngành nghề nào, từ kinh doanh, marketing, y tế cho đến nghệ thuật.',
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
    videoUrl: 'https://www.youtube.com/watch?v=0gyz5IswV3s',
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
    faqs: [
      {
        question: 'Quy trình Thiết kế Kỹ thuật có bắt buộc phải theo đúng thứ tự các bước không?',
        answer:
          'Không hẳn. Quy trình này mang tính lặp lại (iterative). Bạn có thể quay lại các bước trước đó bất cứ lúc nào. Ví dụ, sau khi thử nghiệm mẫu thử (Test), bạn có thể phát hiện ra một vấn đề mới và phải quay lại bước "Xác định vấn-đề" (Ask) hoặc "Lên ý tưởng" (Imagine) để tìm giải pháp tốt hơn.',
      },
      {
        question: 'Tại sao việc "thất bại" trong thử nghiệm lại được coi là hữu ích?',
        answer:
          'Trong kỹ thuật, mỗi thất bại là một bài học quý giá. Nó cung cấp dữ liệu về những gì không hoạt động và tại sao. Việc "thất bại sớm, thất bại rẻ" (fail fast, fail cheap) với các mẫu thử đơn giản giúp các kỹ sư tránh được những sai lầm tốn kém hơn nhiều ở giai đoạn sản xuất hàng loạt. Thất bại chính là một phần không thể thiếu của quá trình đổi mới và sáng tạo.',
      },
      {
        question: 'Prototype (mẫu thử) là gì?',
        answer:
          'Prototype là một phiên bản đầu tiên, đơn giản của một sản phẩm hoặc giải pháp. Mục đích của nó không phải là để hoàn hảo, mà là để kiểm tra một ý tưởng hoặc một chức năng cụ thể một cách nhanh chóng và ít tốn kém.',
      },
      {
        question: 'Brainstorming (động não) hiệu quả cần những yếu tố nào?',
        answer:
          'Một buổi brainstorming hiệu quả cần khuyến khích mọi ý tưởng, dù là điên rồ nhất (không phán xét), tập trung vào số lượng hơn chất lượng ban đầu, và xây dựng dựa trên ý tưởng của người khác. Việc có một người điều phối và ghi lại tất cả các ý tưởng cũng rất quan trọng.',
      },
      {
        question: 'MVP (Minimum Viable Product) là gì và nó liên quan gì đến quy trình thiết kế?',
        answer:
          'MVP - Sản phẩm Khả dụng Tối thiểu - là một khái niệm trong khởi nghiệp Lean Startup, rất gần với prototyping. Đó là phiên bản sản phẩm có số lượng tính năng tối thiểu nhưng đủ để thu hút những người dùng đầu tiên và thu thập phản hồi để phát triển tiếp. Nó là một ứng dụng thực tế của chu trình "Xây dựng - Đo lường - Học hỏi".',
      },
      {
        question: 'Tại sao việc xác định rõ ràng vấn đề ở bước đầu tiên lại quan trọng đến vậy?',
        answer:
          'Nếu không xác định đúng vấn đề, bạn có thể tốn rất nhiều thời gian và công sức để tạo ra một giải pháp hoàn hảo cho một vấn đề không tồn tại hoặc không quan trọng. "Một vấn đề được phát biểu rõ ràng là một nửa vấn đề đã được giải quyết."',
      },
      {
        question: 'Trong thử thách "Tòa tháp Marshmallow", tại sao nhiều đội thất bại?',
        answer:
          'Nhiều đội dành quá nhiều thời gian để lên kế hoạch và chỉ bắt đầu xây dựng vào phút cuối. Họ cũng thường đánh giá thấp trọng lượng của viên kẹo marshmallow, khiến tòa tháp sụp đổ khi đặt nó lên đỉnh. Các đội thành công thường xây dựng một mẫu thử nhỏ trước, thử nghiệm và cải tiến liên tục.',
      },
      {
        question: 'Làm thế nào để lựa chọn ý tưởng tốt nhất sau khi brainstorming?',
        answer:
          'Có thể sử dụng một ma trận quyết định. Liệt kê các tiêu chí quan trọng (ví dụ: chi phí, tính khả thi, hiệu quả) và cho điểm từng ý tưởng dựa trên các tiêu chí đó. Việc này giúp quá trình lựa chọn trở nên khách quan hơn.',
      },
      {
        question: 'Bước "Chia sẻ giải pháp" có tầm quan trọng như thế nào?',
        answer:
          'Rất quan trọng. Một giải pháp kỹ thuật, dù tốt đến đâu, cũng cần được truyền đạt một cách hiệu quả đến người dùng, khách hàng, hoặc các bên liên quan. Kỹ năng thuyết trình, viết tài liệu, và tạo bản demo là một phần không thể thiếu của công việc kỹ sư.',
      },
      {
        question: 'Quy trình này có thể áp dụng cho các vấn đề phi kỹ thuật không?',
        answer:
          'Chắc chắn có. Quy trình tư duy này có thể được áp dụng để giải quyết nhiều vấn đề trong cuộc sống, từ việc lập kế hoạch cho một chuyến đi, tổ chức một sự kiện, cho đến việc cải thiện một quy trình làm việc trong văn phòng.',
      },
    ],
  },
];

export const stemModuleData: ModuleData = {
  id: K2Module.Stem,
  title: 'Giáo dục STEM',
  subtitle: 'Khoa học, Công nghệ, Kỹ thuật và Toán học',
  description:
    'Chương trình học STEM toàn diện, kết hợp lý thuyết và thực hành để giải quyết các vấn đề thực tế. Học viên sẽ được tham gia vào các dự án sáng tạo, từ chế tạo robot, lập trình game đến các thí nghiệm khoa học vui, nhằm phát triển tư duy phản biện, kỹ năng giải quyết vấn đề và khả năng làm việc nhóm.',
  category: 'science',
  icon: '🔬',
  color: 'from-green-500 to-blue-500',
  level: 'Cơ bản - Trung bình',
  duration: '25-30 giờ',
  features: [
    'Học qua dự án (Project-based learning)',
    'Thí nghiệm thực hành',
    'Tư duy thiết kế kỹ thuật',
    'Lập trình và Robotics',
    'Giải quyết vấn đề thực tiễn',
  ],
  prerequisites: ['Tò mò, ham học hỏi', 'Không ngại thử và sai'],
  objectives: [
    'Áp dụng kiến thức khoa học, công nghệ, kỹ thuật, toán học vào giải quyết vấn đề.',
    'Phát triển kỹ năng tư duy phản biện và sáng tạo.',
    'Nâng cao khả năng làm việc nhóm và giao tiếp.',
    'Xây dựng các dự án STEM hoàn chỉnh.',
    'Định hướng nghề nghiệp trong các lĩnh vực STEM.',
  ],
  careerOutcomes: [
    'Nền tảng vững chắc cho các ngành kỹ thuật, công nghệ',
    'Kỹ năng giải quyết vấn đề phức tạp',
    'Tư duy sáng tạo và đổi mới',
    'Khả năng thích ứng với các công việc của tương lai',
  ],
  industryApplications: [
    { name: 'Y tế', description: 'Phát triển thiết bị y tế mới, nghiên cứu vắc-xin.' },
    { name: 'Năng lượng', description: 'Tìm kiếm và phát triển các nguồn năng lượng tái tạo.' },
    { name: 'Môi trường', description: 'Xây dựng các giải pháp xử lý ô nhiễm, giám sát biến đổi khí hậu.' },
    { name: 'Công nghệ thông tin', description: 'Phát triển phần mềm, trí tuệ nhân tạo, an ninh mạng.' },
  ],
  marketDemand: {
    averageSalary: 'N/A (Kỹ năng nền tảng)',
    jobGrowth: 'Rất cao (nhu cầu nhân lực cho CMCN 4.0)',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.Robotics, K2Module.Python, K2Module.Arduino, K2Module.DataScienceAnalytics],
  lessons: stemLessons,
};
