import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export const scratchLessons: BaseLessonData[] = [
  {
    id: 'scratch-introduction',
    title: 'Giới Thiệu Scratch',
    description:
      'Khám phá thế giới sáng tạo với Scratch! Bạn sẽ làm quen giao diện trực quan, tự tay kéo thả các khối lệnh để tạo ra hoạt cảnh, game và câu chuyện tương tác. Bài học này giúp bạn khởi đầu hành trình lập trình đầy màu sắc và vui nhộn.',
    difficulty: 'Cơ bản',
    duration: '45 phút',
    videoUrl: 'https://www.youtube.com/watch?v=QuZA24FEiIs',
    imageUrl: 'https://i.ytimg.com/vi/QuZA24FEiIs/hqdefault.jpg',
    objectives: [
      'Hiểu giao diện Scratch và các thành phần chính.',
      'Tạo dự án Scratch đầu tiên.',
      'Sử dụng blocks cơ bản để điều khiển nhân vật (Sprite).',
      'Hiểu khái niệm sự kiện và kịch bản lệnh.',
    ],
    prerequisites: ['Máy tính có kết nối Internet và trình duyệt web.'],
    exercises: [
      {
        title: 'Hoạt Cảnh Đầu Tiên',
        description: 'Tạo hoạt cảnh đơn giản cho mèo Scratch di chuyển và nói "Xin chào!"',
        difficulty: 'Cơ bản',
        procedure: [
          'Bắt đầu với khối sự kiện "Khi bấm vào lá cờ xanh".',
          'Sử dụng khối "nói" trong nhóm "Hiển thị" để mèo nói chuyện.',
          'Sử dụng khối "di chuyển" trong nhóm "Chuyển động" để mèo đi tới.',
          'Dùng khối "đợi" trong nhóm "Điều khiển" để tạo khoảng dừng.',
        ],
        expectedResults:
          'Khi người dùng bấm vào lá cờ xanh, nhân vật mèo sẽ nói "Xin chào!" rồi di chuyển một đoạn ngắn.',
      },
    ],
    realWorldApplications: [
      'Tạo hoạt hình ngắn.',
      'Làm game giáo dục đơn giản.',
      'Thiết kế các câu chuyện tương tác.',
      'Tạo mô phỏng khoa học cơ bản.',
    ],
    vietnamContext: {
      title: 'Scratch và Phong trào "Tin học trẻ" tại Việt Nam',
      content: [
        'Scratch là một trong những nội dung thi đấu chính thức và phổ biến nhất trong hội thi "Tin học trẻ" cấp quốc gia và các cấp địa phương ở Việt Nam.',
        'Nhiều trung tâm giáo dục STEM tại Hà Nội, TP.HCM, và Đà Nẵng sử dụng Scratch làm công cụ nhập môn lập trình cho học sinh tiểu học.',
        'Cộng đồng giáo viên và phụ huynh Việt Nam tích cực chia sẻ tài nguyên và kinh nghiệm dạy Scratch qua các nhóm trên mạng xã hội.',
      ],
    },
    careerConnect: {
      name: 'Đặng Thị Thuý',
      title: 'Giáo viên Tin học & Huấn luyện viên đội tuyển Tin học trẻ',
      company: 'Trường Tiểu học Đoàn Thị Điểm',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Scratch không chỉ dạy lập trình, nó dạy trẻ em cách tư duy sáng tạo, giải quyết vấn đề và biến ý tưởng thành hiện thực. Đó là kỹ năng cho tương lai.',
    },
    quizzes: [
      {
        question: 'Khối lệnh nào trong Scratch dùng để bắt đầu một kịch bản khi người dùng nhấn vào lá cờ màu xanh?',
        options: ['Khi nhận tin nhắn', 'Khi bấm vào nhân vật này', 'Khi bấm vào lá cờ xanh', 'Khi phím cách được bấm'],
        correctAnswerIndex: 2,
        explanation:
          'Khối "Khi bấm vào lá cờ xanh" (when green flag clicked) là khối sự kiện phổ biến nhất, dùng để khởi chạy hầu hết các dự án trong Scratch.',
      },
    ],
  },
  {
    id: 'scratch-animation-storytelling',
    title: 'Hoạt Cảnh & Kể Chuyện với Scratch',
    description:
      'Học cách thổi hồn vào nhân vật, tạo ra các đoạn hội thoại, chuyển đổi phông nền và âm thanh để kể một câu chuyện hoàn chỉnh bằng Scratch. Giải phóng trí tưởng tượng của bạn và trở thành một đạo diễn phim hoạt hình kỹ thuật số!',
    difficulty: 'Cơ bản',
    duration: '60 phút',
    videoUrl: 'https://www.youtube.com/watch?v=rwY3aL3eW7k',
    imageUrl: 'https://i.ytimg.com/vi/rwY3aL3eW7k/hqdefault.jpg',
    objectives: [
      'Điều khiển chuyển động và thay đổi trang phục cho nhân vật.',
      'Tạo hội thoại giữa hai hoặc nhiều nhân vật.',
      'Sử dụng các khối lệnh để chuyển đổi phông nền (backdrop).',
      'Thêm và điều khiển âm thanh, nhạc nền.',
      'Sử dụng tin nhắn (broadcast) để phối hợp hành động giữa các nhân vật.',
    ],
    prerequisites: ["Hoàn thành bài 'Giới thiệu Scratch'"],
    exercises: [
      {
        title: 'Cuộc đối thoại ngắn',
        description: 'Tạo một câu chuyện ngắn giữa hai nhân vật. Nhân vật A hỏi một câu, và nhân vật B trả lời.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chọn 2 nhân vật và một phông nền phù hợp.',
          'Lập trình cho nhân vật A nói trước.',
          'Sử dụng khối "đợi" để nhân vật B chờ nhân vật A nói xong.',
          'Lập trình cho nhân vật B trả lời câu hỏi.',
        ],
        expectedResults: 'Hai nhân vật lần lượt đối thoại với nhau một cách hợp lý.',
      },
    ],
    realWorldApplications: [
      'Làm phim hoạt hình ngắn.',
      'Tạo thiệp chúc mừng sinh nhật điện tử.',
      'Minh họa các câu chuyện cổ tích hoặc bài học lịch sử.',
    ],
    vietnamContext: {
      title: 'Kể chuyện Lịch sử Việt Nam bằng Scratch',
      content: [
        'Học sinh Việt Nam có thể dùng Scratch để tái hiện các câu chuyện lịch sử như "Sự tích Hồ Gươm" hay "Trận chiến trên sông Bạch Đằng".',
        'Các dự án Scratch về văn hóa Việt Nam, giới thiệu về áo dài, nón lá, hay các món ăn truyền thống, thường đạt giải cao trong các cuộc thi.',
        'Việc lồng tiếng Việt cho các nhân vật trong dự án Scratch giúp học sinh rèn luyện kỹ năng ngôn ngữ và biểu cảm.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Hoài An',
      title: 'Nhà thiết kế đồ họa & Motion Graphic',
      company: 'Freelancer',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Nguyên tắc kể chuyện bằng hình ảnh trong Scratch cũng tương tự như trong ngành thiết kế chuyển động chuyên nghiệp. Bắt đầu sớm với Scratch là một lợi thế lớn.',
    },
    quizzes: [
      {
        question: 'Để một nhân vật gửi tín hiệu cho một nhân vật khác hành động, bạn nên dùng cặp khối lệnh nào?',
        options: ['nói và đợi', 'phát tin và khi nhận tin', 'đợi và lặp lại', 'chuyển trang phục và chuyển phông nền'],
        correctAnswerIndex: 1,
        explanation:
          'Cặp khối "phát tin" (broadcast) và "khi nhận tin" (when I receive) là cơ chế chính trong Scratch để các nhân vật và đối tượng khác nhau có thể giao tiếp và kích hoạt hành động của nhau.',
      },
    ],
  },
  {
    id: 'scratch-game-development',
    title: 'Xây Dựng Game Đầu Tiên',
    description:
      'Từ ý tưởng đến một trò chơi hoàn chỉnh! Học cách tạo ra các game kinh điển như Pong, Flappy Bird hay Maze. Bạn sẽ được học về điều khiển nhân vật, xử lý va chạm, tính điểm và tạo ra các cấp độ thử thách.',
    difficulty: 'Trung bình',
    duration: '90 phút',
    videoUrl: 'https://www.youtube.com/watch?v=DdgjVdF7p4I', // Hướng dẫn làm game Flappy Bird
    imageUrl: 'https://i.ytimg.com/vi/DdgjVdF7p4I/hqdefault.jpg',
    objectives: [
      'Điều khiển nhân vật bằng bàn phím hoặc chuột.',
      'Sử dụng biến số (variables) để lưu trữ điểm số hoặc mạng sống.',
      'Phát hiện va chạm giữa các nhân vật.',
      'Sử dụng khối "nếu...thì" (if...then) để tạo logic cho game.',
      'Tạo và nhân bản các đối tượng (cloning).',
    ],
    prerequisites: ["Hoàn thành bài 'Hoạt cảnh & Kể chuyện'"],
    exercises: [
      {
        title: 'Game "Hứng Táo"',
        description:
          'Tạo một game đơn giản trong đó người chơi di chuyển một cái bát để hứng những quả táo rơi từ trên xuống.',
        difficulty: 'Trung bình',
        procedure: [
          'Tạo nhân vật "Bát" có thể di chuyển sang trái/phải theo chuột.',
          'Tạo nhân vật "Táo" liên tục rơi từ vị trí ngẫu nhiên ở phía trên.',
          'Lập trình để khi "Táo" chạm vào "Bát", điểm số tăng lên và quả táo biến mất, sau đó xuất hiện lại từ đầu.',
          'Nếu "Táo" rơi xuống đất, trò chơi kết thúc.',
        ],
        expectedResults: 'Một trò chơi hoàn chỉnh với điều khiển, tính điểm và điều kiện thắng/thua.',
      },
    ],
    realWorldApplications: [
      'Phát triển game 2D đơn giản.',
      'Tạo các bài tập tương tác trong giáo dục.',
      'Thiết kế các thử thách logic và giải đố.',
    ],
    vietnamContext: {
      title: 'Từ game Scratch đến ngành Công nghiệp Game Việt Nam',
      content: [
        'Ngành công nghiệp game Việt Nam đang phát triển mạnh mẽ, và Scratch là bước khởi đầu cho nhiều nhà phát triển game tương lai.',
        'Các khái niệm trong game Scratch như biến số, vòng lặp, điều kiện là nền tảng cho việc học các ngôn ngữ lập trình game chuyên nghiệp như C# (với Unity) hay C++ (với Unreal Engine).',
        'Nhiều "game jam" (cuộc thi làm game trong thời gian ngắn) tại Việt Nam cũng chấp nhận các sản phẩm làm bằng Scratch, khuyến khích sự sáng tạo nhanh.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Hà Đông',
      title: 'Nhà phát triển game & Tác giả Flappy Bird',
      company: '.GEARS',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Một trò chơi không cần phức tạp để trở nên hấp dẫn. Sự đơn giản và một cơ chế chơi gây nghiện là chìa khóa. Scratch là nơi tuyệt vời để thử nghiệm những ý tưởng đó.',
    },
    quizzes: [
      {
        question: 'Để lưu trữ điểm số của người chơi trong game, bạn nên sử dụng công cụ nào trong Scratch?',
        options: ['Danh sách (List)', 'Biến số (Variable)', 'Khối tùy chỉnh (My Blocks)', 'Tin nhắn (Broadcast)'],
        correctAnswerIndex: 1,
        explanation:
          'Biến số (Variable) được dùng để lưu trữ các giá trị có thể thay đổi trong quá trình chạy chương trình, ví dụ như điểm số, mạng sống, hay thời gian.',
      },
    ],
  },
];

export const scratchModuleData: ModuleData = {
  id: K2Module.Scratch,
  title: 'Lập trình Scratch',
  subtitle: 'Tư duy lập trình cho trẻ em và người mới bắt đầu',
  description:
    'Khóa học này mở ra cánh cửa vào thế giới lập trình thông qua Scratch, một ngôn ngữ lập trình trực quan, sinh động. Học viên sẽ học cách tư duy logic, sáng tạo và giải quyết vấn đề bằng cách kéo thả các khối lệnh để xây dựng game, hoạt hình và các câu chuyện tương tác của riêng mình.',
  category: 'programming',
  icon: '🐱',
  color: 'from-orange-500 to-yellow-400',
  level: 'Cơ bản',
  duration: '10-15 giờ',
  features: [
    'Giao diện kéo-thả trực quan',
    'Không yêu cầu viết code',
    'Phát triển tư duy logic và sáng tạo',
    'Xây dựng game và hoạt hình',
    'Cộng đồng chia sẻ toàn cầu',
  ],
  prerequisites: ['Biết sử dụng máy tính cơ bản', 'Không yêu cầu kinh nghiệm lập trình'],
  objectives: [
    'Hiểu các khái niệm lập trình cơ bản: vòng lặp, điều kiện, biến số.',
    'Tự tin sử dụng môi trường lập trình Scratch.',
    'Sáng tạo các sản phẩm game, hoạt hình, câu chuyện của riêng mình.',
    'Phát triển kỹ năng giải quyết vấn đề một cách có hệ thống.',
    'Xây dựng nền tảng vững chắc để học các ngôn ngữ lập trình khác.',
  ],
  careerOutcomes: [
    'Học sinh có nền tảng tốt cho các môn STEM',
    'Phát triển kỹ năng tư duy máy tính',
    'Có khả năng tham gia các cuộc thi Tin học trẻ',
    'Nền tảng để trở thành nhà phát triển game, lập trình viên trong tương lai',
  ],
  industryApplications: [
    { name: 'Giáo dục', description: 'Công cụ dạy và học lập trình phổ biến nhất cho trẻ em trên toàn thế giới.' },
    {
      name: 'Giải trí',
      description: 'Tạo ra các trò chơi đơn giản, các bộ phim hoạt hình ngắn để giải trí và học tập.',
    },
    {
      name: 'Nghệ thuật tương tác',
      description: 'Thiết kế các tác phẩm nghệ thuật kỹ thuật số có khả năng tương tác với người xem.',
    },
  ],
  marketDemand: {
    averageSalary: 'N/A (Kỹ năng nền tảng)',
    jobGrowth: 'Rất cao (nhu cầu giáo dục STEM)',
    hireDemand: 'Cao (cho vị trí giáo viên/hướng dẫn viên STEM)',
  },
  relatedModules: [K2Module.Python, K2Module.GameDevelopment, K2Module.Stem],
  lessons: scratchLessons,
};
