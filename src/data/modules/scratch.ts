import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export const scratchLessons: BaseLessonData[] = [
  {
    id: 'introduction-to-scratch',
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
    faqs: [
      {
        question: 'Scratch là gì và tại sao nó lại miễn phí?',
        answer:
          'Scratch là một ngôn ngữ lập trình trực quan và cộng đồng trực tuyến được phát triển bởi nhóm Lifelong Kindergarten tại MIT Media Lab. Nó miễn phí vì mục tiêu của những người tạo ra nó là giúp tất cả mọi người, đặc biệt là trẻ em, có thể học cách tư duy sáng tạo, suy luận có hệ thống và làm việc hợp tác.',
      },
      {
        question: 'Sprite (nhân vật) trong Scratch là gì?',
        answer:
          'Sprite là một đối tượng hoặc nhân vật mà bạn có thể lập trình trong dự án Scratch. Mỗi sprite có các kịch bản lệnh (scripts), trang phục (costumes) và âm thanh (sounds) riêng. Chú mèo mặc định khi bạn mở Scratch là một ví dụ về sprite.',
      },
      {
        question: 'Sân khấu (Stage) là gì?',
        answer:
          'Sân khấu là nơi các nhân vật của bạn biểu diễn. Nó là phông nền cho dự án của bạn và cũng có thể có các kịch bản lệnh, phông nền (backdrops) và âm thanh riêng.',
      },
      {
        question: 'Làm thế nào để thay đổi hình dạng của nhân vật?',
        answer:
          'Bạn có thể thay đổi hình dạng của nhân vật bằng cách chuyển đổi giữa các "trang phục" (costumes) của nó. Mỗi nhân vật có thể có nhiều trang phục, và bạn có thể dùng khối lệnh "chuyển trang phục" trong nhóm "Hiển thị" để tạo hiệu ứng hoạt hình.',
      },
      {
        question: 'Sự khác biệt giữa "di chuyển 10 bước" và "đi tới x: y:" là gì?',
        answer:
          'Khối "di chuyển 10 bước" làm cho nhân vật tiến về phía trước theo hướng hiện tại của nó. Khối "đi tới x: y:" ngay lập tức di chuyển nhân vật đến một tọa độ (x, y) cụ thể trên sân khấu, bất kể hướng của nó là gì.',
      },
      {
        question: 'Tọa độ trong Scratch hoạt động như thế nào?',
        answer:
          'Sân khấu Scratch là một lưới tọa độ. Vị trí trung tâm là (x:0, y:0). Trục x đi từ -240 (bên trái) đến 240 (bên phải). Trục y đi từ -180 (phía dưới) đến 180 (phía trên).',
      },
      {
        question: 'Em có thể chia sẻ dự án Scratch của mình cho bạn bè xem không?',
        answer:
          'Chắc chắn rồi! Nếu bạn đang sử dụng phiên bản Scratch trực tuyến, bạn chỉ cần nhấn nút "Chia sẻ" (Share) màu cam. Sau đó, bạn có thể gửi liên kết dự án cho bất kỳ ai để họ xem và chơi thử.',
      },
      {
        question: 'Có cần phải cài đặt phần mềm gì để dùng Scratch không?',
        answer:
          'Không cần! Bạn có thể sử dụng phiên bản Scratch đầy đủ chức năng ngay trên trình duyệt web tại địa chỉ scratch.mit.edu. Tuy nhiên, cũng có phiên bản Scratch Desktop để bạn có thể tải về và sử dụng ngoại tuyến (offline).',
      },
      {
        question: 'Các khối lệnh được phân loại theo màu sắc để làm gì?',
        answer:
          'Các khối lệnh được nhóm theo chức năng và gán màu sắc riêng biệt để giúp người dùng dễ dàng tìm kiếm và nhận biết. Ví dụ, các khối màu xanh dương liên quan đến "Chuyển động", màu tím liên quan đến "Hiển thị", màu vàng liên quan đến "Sự kiện".',
      },
      {
        question: 'Em có thể tự vẽ nhân vật và phông nền của riêng mình không?',
        answer:
          'Hoàn toàn có thể! Scratch cung cấp một công cụ vẽ tích hợp cho phép bạn tự do sáng tạo nhân vật và phông nền của riêng mình, hoặc chỉnh sửa những cái có sẵn. Bạn cũng có thể tải lên hình ảnh từ máy tính của mình.',
      },
    ],
  },
  {
    id: 'animation-and-storytelling',
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
    faqs: [
      {
        question: 'Làm thế nào để tạo hiệu ứng nhân vật đang đi bộ?',
        answer:
          'Bạn cần tạo ít nhất hai trang phục cho nhân vật, mỗi trang phục là một dáng chân khác nhau. Sau đó, trong một vòng lặp, bạn sử dụng khối "trang phục kế tiếp" và khối "đợi" một khoảng thời gian rất ngắn (ví dụ: 0.1 giây) để liên tục chuyển đổi giữa các trang phục, tạo ra ảo ảnh chuyển động.',
      },
      {
        question: 'Sự khác biệt giữa khối "nói" và "nghĩ" là gì?',
        answer:
          'Cả hai đều hiển thị một bong bóng văn bản bên cạnh nhân vật. Sự khác biệt chính là về mặt hình thức: khối "nói" hiển thị bong bóng thoại hình oval, trong khi khối "nghĩ" hiển thị bong bóng hình đám mây, ngụ ý đó là suy nghĩ của nhân vật.',
      },
      {
        question: 'Làm thế nào để hai nhân vật đối thoại mà không nói chồng lên nhau?',
        answer:
          'Cách đơn giản nhất là sử dụng khối "nói...trong...giây". Cách thứ hai, linh hoạt hơn, là sử dụng tin nhắn (broadcast). Nhân vật 1 nói, sau đó "phát tin" (ví dụ: "A_noi_xong"). Nhân vật 2 sẽ có một kịch bản bắt đầu bằng "Khi nhận tin A_noi_xong" và sau đó mới bắt đầu nói.',
      },
      {
        question: 'Em có thể ghi âm giọng nói của mình cho nhân vật không?',
        answer:
          'Có. Trong tab "Âm thanh", bạn có thể chọn tùy chọn "Ghi âm" để thu âm thanh trực tiếp từ microphone của máy tính và sử dụng nó trong dự án của mình.',
      },
      {
        question: 'Làm thế nào để làm một nhân vật từ từ xuất hiện hoặc biến mất?',
        answer:
          'Bạn có thể sử dụng khối "thay đổi hiệu ứng" trong nhóm "Hiển thị". Chọn hiệu ứng "bóng ma" (ghost) và thay đổi giá trị của nó trong một vòng lặp. Giá trị 0 là hoàn toàn rõ nét, và 100 là hoàn toàn trong suốt (biến mất).',
      },
      {
        question: 'Khối "đợi...giây" và "đợi đến khi" khác nhau như thế nào?',
        answer:
          'Khối "đợi...giây" sẽ tạm dừng kịch bản trong một khoảng thời gian cố định. Khối "đợi đến khi" sẽ tạm dừng kịch bản cho đến khi một điều kiện nào đó trở thành đúng (ví dụ: đợi đến khi nhân vật chạm vào cạnh).',
      },
      {
        question: 'Làm sao để tạo một câu chuyện có nhiều cảnh khác nhau?',
        answer:
          'Bạn có thể sử dụng nhiều phông nền (backdrops) khác nhau. Khi muốn chuyển cảnh, chỉ cần dùng khối "chuyển phông nền thành...". Bạn cũng có thể dùng tin nhắn để báo cho các nhân vật biết khi nào cảnh đã thay đổi để chúng có hành động phù hợp.',
      },
      {
        question: 'Em muốn tạo một đoạn phim hoạt hình, làm sao để ẩn các khối lệnh khi chạy?',
        answer:
          'Khi bạn chia sẻ dự án hoặc xem ở chế độ toàn màn hình (full-screen mode), các khối lệnh sẽ tự động được ẩn đi, chỉ còn lại sân khấu để người xem thưởng thức câu chuyện của bạn.',
      },
      {
        question: 'Làm thế nào để một nhân vật di chuyển mượt mà thay vì "nhảy" từng bước?',
        answer:
          'Thay vì dùng khối "đi tới x: y:", bạn có thể sử dụng khối "lướt trong...giây tới vị trí...". Khối này sẽ tạo ra một chuyển động mượt mà từ vị trí hiện tại đến vị trí đích trong một khoảng thời gian bạn chỉ định.',
      },
      {
        question: 'Có thể tạo một câu chuyện có nhiều kết thúc khác nhau không?',
        answer:
          'Hoàn toàn có thể! Đây là một ứng dụng tuyệt vời của khối "nếu...thì...nếu không". Bạn có thể đặt câu hỏi cho người xem (sử dụng khối "hỏi...và đợi") và dựa vào câu trả lời của họ để dẫn câu chuyện theo những hướng khác nhau.',
      },
    ],
  },
  {
    id: 'game-development-basics',
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
    faqs: [
      {
        question: 'Làm thế nào để điều khiển nhân vật bằng các phím mũi tên?',
        answer:
          'Bạn sử dụng khối sự kiện "Khi bấm phím...". Tạo bốn kịch bản riêng biệt cho mỗi phím (mũi tên lên, xuống, trái, phải). Trong mỗi kịch bản, bạn thay đổi tọa độ y (cho phím lên/xuống) hoặc tọa độ x (cho phím trái/phải) của nhân vật.',
      },
      {
        question: 'Khối "nếu...thì" hoạt động như thế nào?',
        answer:
          'Khối này kiểm tra một điều kiện (ví dụ: "đang chạm vào nhân vật Táo?"). Nếu điều kiện đó là đúng, các khối lệnh bên trong nó sẽ được thực thi. Đây là khối lệnh cốt lõi để tạo ra logic và quy tắc trong game.',
      },
      {
        question: 'Sự khác biệt giữa "vòng lặp mãi mãi" và "lặp lại...lần" là gì?',
        answer:
          'Vòng lặp "mãi mãi" sẽ thực thi các khối lệnh bên trong nó không ngừng, cho đến khi bạn nhấn nút dừng. Vòng lặp "lặp lại...lần" chỉ thực thi các khối lệnh bên trong nó một số lần nhất định mà bạn chỉ định.',
      },
      {
        question: 'Làm thế nào để game kết thúc khi mạng sống về 0?',
        answer:
          'Bạn tạo một biến "mạng sống". Mỗi khi người chơi mắc lỗi, bạn "thay đổi mạng sống một lượng -1". Trong một vòng lặp "mãi mãi", bạn dùng khối "nếu...thì" để liên tục kiểm tra xem "mạng sống < 1". Nếu đúng, bạn sử dụng khối "dừng lại tất cả" để kết thúc game.',
      },
      {
        question: 'Nhân bản (cloning) dùng để làm gì?',
        answer:
          'Nhân bản cho phép bạn tạo ra các bản sao của một nhân vật một cách linh hoạt trong khi game đang chạy. Điều này rất hữu ích để tạo ra nhiều kẻ thù, đạn bay, hoặc các vật phẩm xuất hiện ngẫu nhiên mà không cần phải tạo thủ công hàng chục nhân vật giống hệt nhau.',
      },
      {
        question: 'Làm thế nào để tạo ra trọng lực cho nhân vật, làm cho nó rơi xuống?',
        answer:
          'Bạn có thể mô phỏng trọng lực bằng cách tạo một biến, ví dụ tên là "tốc độ rơi". Trong một vòng lặp "mãi mãi", bạn liên tục "thay đổi tọa độ y một lượng (tốc độ rơi)" và đồng thời "thay đổi tốc độ rơi một lượng -1". Khi nhân vật chạm đất, bạn đặt lại "tốc độ rơi" về 0.',
      },
      {
        question: 'Làm sao để phát hiện khi chuột được nhấn?',
        answer:
          'Scratch có một khối điều kiện hình lục giác là "chuột được nhấn?". Bạn có thể đặt khối này vào trong một khối "nếu...thì" để thực hiện một hành động nào đó (ví dụ: bắn đạn) khi người chơi nhấn chuột.',
      },
      {
        question: 'Biến "cho riêng nhân vật này" và "cho mọi nhân vật" khác nhau ở điểm nào?',
        answer:
          'Biến "cho mọi nhân vật" (global variable) có thể được truy cập và thay đổi bởi tất cả các nhân vật trong dự án (ví dụ: Điểm số). Biến "cho riêng nhân vật này" (local variable) chỉ thuộc về nhân vật tạo ra nó và các bản sao của nó, các nhân vật khác không thể thấy hoặc thay đổi nó (ví dụ: Máu của từng kẻ thù).',
      },
      {
        question: 'Làm thế nào để tạo một màn hình "Game Over"?',
        answer:
          'Bạn có thể tạo một phông nền mới có chữ "Game Over". Khi điều kiện thua xảy ra (ví dụ: mạng sống = 0), bạn "chuyển phông nền thành Game Over" và dùng khối "dừng lại tất cả" để kết thúc trò chơi.',
      },
      {
        question: 'Khối tùy chỉnh (My Blocks) có tác dụng gì?',
        answer:
          'Khối tùy chỉnh cho phép bạn nhóm một chuỗi các khối lệnh lại với nhau và đặt cho nó một cái tên. Điều này giúp mã của bạn gọn gàng, dễ đọc hơn và có thể tái sử dụng. Ví dụ, bạn có thể tạo một khối "Nhảy" chứa tất cả các lệnh phức tạp để nhân vật thực hiện hành động nhảy.',
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
