import { BaseLessonData } from '@/types/lesson-base';
export interface MinecraftLessonType extends BaseLessonData {
  skills: string[];
  gameVersion: string;
}

export const minecraftLessons: MinecraftLessonType[] = [
  {
    id: 'intro-to-minecraft-edu',
    title: 'Khám phá Minecraft Education',
    description:
      'Làm quen với phiên bản Minecraft Education, khám phá các tính năng độc đáo dành cho giáo dục và học cách điều khiển nhân vật, chế tạo và xây dựng trong thế giới khối vuông.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=JqZfTqJ4OsI',
    imageUrl: '/images/modules/minecraft/minecraft-edu-intro.jpg',
    skills: ['Problem Solving', 'Creativity', 'Resource Management'],
    gameVersion: '1.18.30',
    objectives: [
      'Phân biệt giữa Minecraft phiên bản thường và Minecraft Education.',
      'Nắm vững các kỹ năng di chuyển, phá block, và đặt block.',
      'Sử dụng bàn chế tạo (Crafting Table) để tạo ra các công cụ cơ bản.',
      'Hiểu về các vật phẩm và tính năng chỉ có trong bản Education như Camera, Portfolio, và NPC.',
    ],
    prerequisites: [
      'Tài khoản Microsoft 365 Education.',
      'Minecraft Education đã được cài đặt.',
      'Sự tò mò và yêu thích khám phá.',
    ],
    exercises: [
      {
        title: 'Xây dựng Căn cứ đầu tiên',
        description: 'Thực hành xây một nơi trú ẩn an toàn để bảo vệ bạn khỏi các sinh vật vào ban đêm.',
        difficulty: 'Cơ bản',
        procedure: [
          'Thu thập tài nguyên gỗ từ cây.',
          'Chế tạo bàn chế tạo và các công cụ gỗ.',
          'Tìm một vị trí thích hợp và xây dựng các bức tường.',
          'Tạo cửa và mái che để hoàn thành nơi trú ẩn.',
        ],
        expectedResults: 'Một công trình trú ẩn đơn giản nhưng hiệu quả.',
      },
    ],
    realWorldApplications: [
      'Phát triển kỹ năng giải quyết vấn đề và tư duy không gian.',
      'Học cách quản lý tài nguyên và lập kế hoạch.',
      'Nền tảng cho các dự án sáng tạo và kỹ thuật phức tạp hơn.',
    ],
    vietnamContext: {
      title: 'Minecraft và Giáo dục Sáng tạo tại Việt Nam',
      content: [
        'Nhiều trường học và trung tâm giáo dục STEM tại Việt Nam đã đưa Minecraft Education vào chương trình giảng dạy để dạy lập trình, lịch sử và toán học.',
        'Các cuộc thi xây dựng trong Minecraft với chủ đề về di tích lịch sử Việt Nam như Hoàng thành Thăng Long, Cố đô Huế đã được tổ chức, thu hút sự tham gia của hàng ngàn học sinh.',
        'Cộng đồng Minecraft Việt Nam rất lớn mạnh, là nơi để các bạn trẻ giao lưu, học hỏi và thể hiện sự sáng tạo không giới hạn.',
      ],
    },
    careerConnect: {
      name: 'Thầy giáo Nguyễn Văn An',
      title: 'Giáo viên Tin học & Trưởng CLB Minecraft',
      company: 'Trường THCS Archimedes, Hà Nội',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-an',
      quote:
        'Khi tôi cho học sinh xây dựng mô hình Văn Miếu - Quốc Tử Giám trong Minecraft, các em không chỉ học về kiến trúc, lịch sử mà còn học về làm việc nhóm, lên kế hoạch và giải quyết vấn đề. Minecraft biến những bài học khô khan thành một cuộc phiêu lưu.',
    },
    quizzes: [
      {
        question: 'Tính năng nào sau đây chỉ có trong Minecraft Education?',
        options: ['Bàn chế tạo (Crafting Table)', 'Kiếm kim cương', 'Code Builder', 'Lò nung (Furnace)'],
        correctAnswerIndex: 2,
        explanation:
          'Code Builder là một tính năng độc quyền của Minecraft Education, cho phép người chơi viết mã lệnh để tự động hóa các hành động trong game.',
      },
      {
        question: 'Mục đích chính của việc xây nơi trú ẩn đầu tiên trong Minecraft là gì?',
        options: [
          'Để trang trí',
          'Để bảo vệ khỏi các sinh vật vào ban đêm',
          'Để lưu trữ vật phẩm',
          'Để khoe với bạn bè',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Vào ban đêm, các sinh vật thù địch sẽ xuất hiện. Một nơi trú ẩn an toàn với đủ ánh sáng là cần thiết để bảo vệ người chơi.',
      },
    ],
  },
  {
    id: 'code-builder-basics',
    title: 'Lập trình với Code Builder',
    description:
      'Học cách tự động hóa các tác vụ trong Minecraft bằng cách sử dụng Code Builder. Bắt đầu với lập trình khối (Block-based) để ra lệnh cho Agent của bạn xây dựng và thu thập tài nguyên.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=KsVqBIWtRec',
    imageUrl: '/images/modules/minecraft/code-builder.jpg',
    skills: ['Computational Thinking', 'Automation', 'Logic'],
    gameVersion: '1.18.30',
    objectives: [
      'Mở và sử dụng giao diện Code Builder.',
      'Hiểu khái niệm về Agent và cách ra lệnh cho nó.',
      'Sử dụng các khối lệnh để điều khiển Agent di chuyển, đặt và phá block.',
      'Viết một chương trình đơn giản để Agent xây một bức tường hoặc một hình khối.',
    ],
    prerequisites: [
      'Hoàn thành bài học "Khám phá Minecraft Education".',
      'Tư duy logic và khả năng phân tích các bước công việc.',
    ],
    exercises: [
      {
        title: 'Tự động xây một Kim tự tháp',
        description: 'Viết mã lệnh để Agent tự động xây dựng một kim tự tháp nhỏ.',
        difficulty: 'Trung bình',
        procedure: [
          'Mở Code Builder và tạo một dự án mới.',
          'Sử dụng vòng lặp để xây dựng từng tầng của kim tự tháp.',
          'Trong mỗi vòng lặp, ra lệnh cho Agent đặt các block theo hình vuông với kích thước giảm dần.',
          'Di chuyển Agent lên cao sau mỗi tầng.',
        ],
        expectedResults: 'Agent tự động xây dựng một kim tự tháp hoàn chỉnh theo lệnh.',
        solution: 'Cung cấp hình ảnh hoặc video về các khối lệnh được sắp xếp.',
      },
    ],
    realWorldApplications: [
      'Giới thiệu về các khái niệm lập trình cơ bản như vòng lặp, điều kiện và sự kiện.',
      'Phát triển kỹ năng tự động hóa và tư duy thuật toán.',
      'Nền tảng để chuyển sang lập trình bằng văn bản (text-based) như JavaScript hoặc Python.',
    ],
    vietnamContext: {
      title: 'Dạy và học lập trình qua Minecraft tại Việt Nam',
      content: [
        'Code.org, một tổ chức phi lợi nhuận về giáo dục khoa học máy tính, đã hợp tác với Microsoft để tạo ra các bài học lập trình Hour of Code dựa trên Minecraft, được triển khai rộng rãi tại Việt Nam.',
        'Nhiều trung tâm lập trình cho trẻ em như Teky, MindX... sử dụng Minecraft và Code Builder làm công cụ giảng dạy chính để giúp trẻ em tiếp cận lập trình một cách sinh động và dễ hiểu.',
        'Các cuộc thi lập trình Minecraft (Minecraft Hackathon) được tổ chức để khuyến khích học sinh áp dụng kiến thức lập trình vào việc giải quyết các vấn đề thực tế.',
      ],
    },
    careerConnect: {
      name: 'Chị Đỗ Quỳnh Anh',
      title: 'Nhà phát triển chương trình giáo dục STEM',
      company: 'Học viện Sáng tạo Teky',
      imageUrl: 'https://i.pravatar.cc/150?u=do-quynh-anh',
      quote:
        'Thay vì dạy những dòng lệnh khô khan, chúng tôi để các em ra lệnh cho Agent xây một ngôi nhà. Các em học về vòng lặp, biến số một cách tự nhiên. Minecraft là một sân chơi tuyệt vời để biến lập trình thành một trò chơi sáng tạo.',
    },
    quizzes: [
      {
        question: 'Agent trong Minecraft Education là gì?',
        options: [
          'Một loại kẻ thù',
          'Một con vật nuôi',
          'Một robot trợ giúp mà người chơi có thể lập trình',
          'Tên của nhân vật chính',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Agent là một robot trợ giúp đặc biệt trong Minecraft Education. Người chơi không điều khiển Agent trực tiếp mà thông qua việc viết các dòng lệnh trong Code Builder.',
      },
      {
        question: 'Lập trình khối (Block-based programming) là gì?',
        options: [
          'Lập trình bằng cách xây các khối trong Minecraft',
          'Một phương pháp lập trình trực quan bằng cách kéo thả các khối lệnh',
          'Một ngôn ngữ lập trình tên là "Block"',
          'Lập trình để phá các khối',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Lập trình khối là một phương pháp lập trình trực quan, nơi người dùng lắp ghép các khối lệnh có sẵn thay vì viết từng dòng mã. Đây là cách tiếp cận thân thiện cho người mới bắt đầu.',
      },
    ],
  },
  {
    id: 'chemistry-in-minecraft',
    title: 'Thí nghiệm Hóa học Vui nhộn',
    description:
      'Khám phá các nguyên tố, hợp chất và các phản ứng hóa học thú vị bằng cách sử dụng các tính năng Hóa học độc quyền trong Minecraft Education.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=EFRbwG3x75g',
    imageUrl: '/images/modules/minecraft/chemistry-update.jpg',
    skills: ['Scientific Method', 'Chemistry Basics', 'Experimentation'],
    gameVersion: '1.18.30',
    objectives: [
      'Sử dụng Element Constructor để tạo ra các nguyên tố.',
      'Kết hợp các nguyên tố trong Compound Creator để tạo hợp chất.',
      'Thực hiện các thí nghiệm trên Lab Table.',
      'Tạo ra các vật phẩm độc đáo như bóng bay, que phát sáng (glow sticks) và bom băng.',
    ],
    prerequisites: [
      'Kiến thức cơ bản về Minecraft.',
      'Bật tùy chọn "Chemistry" trong cài đặt thế giới (World Settings).',
    ],
    exercises: [
      {
        title: 'Chế tạo Bong bóng He-li',
        description: 'Sử dụng các công cụ hóa học để tạo ra bong bóng và gắn chúng vào các loài vật.',
        difficulty: 'Cơ bản',
        procedure: [
          'Tạo nguyên tố Hydrogen (H) và Carbon (C) trong Element Constructor.',
          'Tạo hợp chất Latex (C5H8) trong Compound Creator.',
          'Sử dụng Helium (He) và Latex cùng với dây buộc (Lead) trên bàn chế tạo để tạo ra bong bóng.',
          'Gắn bong bóng vào một con vật (ví dụ: heo) và xem nó bay lên.',
        ],
        expectedResults: 'Tạo thành công bong bóng và làm một con vật bay lên.',
      },
    ],
    realWorldApplications: [
      'Học về bảng tuần hoàn và các nguyên tố hóa học một cách trực quan.',
      'Hiểu về cấu tạo phân tử của các hợp chất quen thuộc.',
      'Khơi dậy niềm đam mê với môn Hóa học thông qua các thí nghiệm an toàn và vui nhộn.',
    ],
    vietnamContext: {
      title: 'Học Hóa không còn "khó nhằn" với Minecraft',
      content: [
        'Gói tài nguyên Hóa học trong Minecraft giúp trực quan hóa các khái niệm trừu tượng, khiến môn Hóa trở nên hấp dẫn hơn với học sinh Việt Nam, vốn thường coi đây là một môn học khó.',
        'Giáo viên có thể tạo ra các thế giới (worlds) tùy chỉnh để học sinh thực hiện các thí nghiệm ảo mà không lo về an toàn hay chi phí hóa chất.',
        'Việc học tên nguyên tố bằng tiếng Anh trong game cũng giúp học sinh làm quen với các thuật ngữ khoa học quốc tế.',
      ],
    },
    careerConnect: {
      name: 'Cô Trần Thị Minh',
      title: 'Giáo viên Hóa học',
      company: 'Trường Quốc tế Wellspring',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-minh',
      quote:
        'Thay vì chỉ nhìn vào công thức C5H8, học sinh của tôi có thể tự tay tạo ra hợp chất Latex trong game. Các em hiểu bài sâu hơn và nhớ lâu hơn. Minecraft đã mang phòng thí nghiệm đến từng chiếc máy tính.',
    },
    quizzes: [
      {
        question: 'Công cụ nào trong Minecraft Education dùng để tạo ra các nguyên tố từ proton, neutron và electron?',
        options: ['Crafting Table', 'Compound Creator', 'Lab Table', 'Element Constructor'],
        correctAnswerIndex: 3,
        explanation:
          'Element Constructor là công cụ cho phép người chơi tạo ra 118 nguyên tố trong bảng tuần hoàn bằng cách điều chỉnh số lượng hạt hạ nguyên tử.',
      },
      {
        question: 'Hợp chất nào được dùng để tạo ra que phát sáng (glow stick) trong Minecraft?',
        options: ['Latex', 'Luminol', 'Nước', 'Muối'],
        correctAnswerIndex: 1,
        explanation:
          'Luminol (C8H7N3O2) là hợp chất hóa học chính, khi kết hợp với các chất khác trên Lab Table, sẽ tạo ra phản ứng phát quang, tương tự như que phát sáng ngoài đời thực.',
      },
    ],
  },
];
