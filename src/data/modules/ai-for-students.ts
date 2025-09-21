import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';
import { createModuleMetadata } from '@/utils/seo';

export const metadata = createModuleMetadata(
  'AI cho Học sinh',
  'Khóa học trang bị cho học sinh những kiến thức và kỹ năng cơ bản về Trí tuệ nhân tạo, giúp các em hiểu rõ công nghệ và ứng dụng AI một cách có trách nhiệm.',
  ['AI cho học sinh', 'trí tuệ nhân tạo', 'giáo dục STEM', 'công nghệ giáo dục', 'AI đạo đức', 'K2AI'],
  'ai-for-students',
);

export const aiForStudentsModuleData: ModuleData = {
  id: K2Module.AIForStudents,
  title: 'AI cho Học sinh',
  subtitle: 'Trí tuệ nhân tạo trong học tập và sáng tạo',
  description:
    'Khóa học này trang bị cho học sinh những kiến thức và kỹ năng cơ bản về Trí tuệ nhân tạo (AI), giúp các em hiểu rõ công nghệ và ứng dụng AI một cách có trách nhiệm để hỗ trợ học tập, thúc đẩy sáng tạo và chuẩn bị cho tương lai số.',
  category: 'stem',
  icon: '🎓',
  color: 'from-purple-500 to-indigo-600',
  totalDuration: '6-8 giờ',
  difficulty: 'Cơ bản',
  level: 'Cơ bản',
  duration: '6-8 giờ',
  href: '/learning/ai-for-students',
  features: [
    'Hiểu các khái niệm cốt lõi của AI.',
    'Sử dụng các công cụ AI phổ biến để học tập.',
    'Tạo ra sản phẩm sáng tạo với AI.',
    'Nhận thức về đạo đức và an toàn khi dùng AI.',
  ],
  tags: ['ai', 'học sinh', 'sáng tạo', 'tương lai', 'stem'],
  prerequisites: [
    'Kỹ năng sử dụng máy tính và Internet cơ bản.',
    'Tò mò và ham muốn khám phá công nghệ mới.',
    'Không yêu cầu kiến thức lập trình.',
  ],
  objectives: [
    'Hiểu các khái niệm cốt lõi của AI.',
    'Sử dụng các công cụ AI phổ biến để học tập.',
    'Tạo ra sản phẩm sáng tạo với AI.',
    'Nhận thức về đạo đức và an toàn khi dùng AI.',
  ],
  careerOutcomes: [
    'Học sinh được trang bị tư duy phản biện về công nghệ.',
    'Nền tảng vững chắc để theo đuổi các ngành học STEM.',
    'Kỹ năng tự học và nghiên cứu được nâng cao.',
  ],
  industryApplications: [
    {
      name: 'Giáo dục Cá nhân hóa',
      description: 'AI giúp tạo ra lộ trình học tập phù hợp với năng lực và sở thích của từng học sinh.',
    },
    {
      name: 'Sáng tạo Nội dung',
      description: 'Học sinh có thể dùng AI để tạo hình ảnh, viết văn bản, làm nhạc, video cho các dự án học tập.',
    },
    {
      name: 'Nghiên cứu và Phân tích',
      description: 'AI là công cụ mạnh mẽ để tìm kiếm, tổng hợp và phân tích thông tin từ nhiều nguồn khác nhau.',
    },
  ],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'Cao',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.Python, K2Module.Robotics, K2Module.DataScience],
};

export const AIForStudentsLessons: BaseLessonData[] = [
  {
    id: 'introduction-to-ai',
    title: 'Chào mừng đến với thế giới AI',
    description: 'Bài học đầu tiên giới thiệu về Trí tuệ nhân tạo, lịch sử phát triển và những khái niệm cơ bản nhất.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=ttIOdAdQaUE',
    imageUrl: 'https://i.ytimg.com/vi/ttIOdAdQaUE/hqdefault.jpg',
    objectives: [
      'Hiểu được AI là gì và không phải là gì.',
      'Nắm được các mốc quan trọng trong lịch sử AI.',
      'Phân biệt được các loại AI khác nhau (AI hẹp, AI tổng quát, Siêu AI).',
    ],
    prerequisites: ['Không có yêu cầu tiên quyết.'],
    exercises: [
      {
        title: 'Thảo luận nhóm: AI trong đời sống',
        description: 'Cùng nhau liệt kê những ứng dụng AI bạn gặp hàng ngày và thảo luận về cách chúng hoạt động.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chia lớp thành các nhóm nhỏ.',
          'Mỗi nhóm có 5 phút để liệt kê càng nhiều ứng dụng AI trong cuộc sống hàng ngày càng tốt (ví dụ: trợ lý ảo, gợi ý sản phẩm, bộ lọc email...).',
          'Các nhóm chia sẻ danh sách của mình và cả lớp cùng thảo luận.',
        ],
        expectedResults: 'Học sinh nhận biết được sự phổ biến của AI và có cái nhìn ban đầu về các ứng dụng của nó.',
      },
    ],
    realWorldApplications: [
      'Trợ lý ảo trên điện thoại (Siri, Google Assistant)',
      'Hệ thống gợi ý phim trên Netflix và nhạc trên Spotify',
      'Xe tự lái và các hệ thống hỗ trợ lái xe',
      'Nhận dạng khuôn mặt để mở khóa điện thoại',
    ],
    vietnamContext: {
      title: 'AI đang thay đổi Việt Nam như thế nào?',
      content: [
        'Các ứng dụng AI như Zalo AI, Viettel AI đang được phát triển mạnh mẽ để phục vụ người dùng Việt.',
        'Chính phủ Việt Nam đã ban hành "Chiến lược quốc gia về nghiên cứu, phát triển và ứng dụng Trí tuệ nhân tạo đến năm 2030".',
        'Nhiều trường đại học tại Việt Nam đã mở ngành đào tạo về AI và Khoa học dữ liệu, cho thấy nhu cầu nhân lực lớn trong lĩnh vực này.',
      ],
    },
    careerConnect: {
      name: 'TS. Bùi Hải Hưng',
      title: 'Viện trưởng Viện nghiên cứu VinAI',
      company: 'VinAI (Tập đoàn Vingroup)',
      imageUrl: 'https://i.pravatar.cc/150?u=bui-hai-hung',
      quote:
        'Việt Nam có tiềm năng rất lớn để trở thành một trung tâm AI của khu vực. Các bạn trẻ chính là tương lai, là những người sẽ biến tiềm năng đó thành hiện thực.',
    },
    quizzes: [
      {
        question: 'AI là viết tắt của cụm từ nào?',
        options: ['Artificial Intelligence', 'Automated Information', 'Advanced Internet', 'Analytical Interface'],
        correctAnswerIndex: 0,
        explanation: 'AI là viết tắt của "Artificial Intelligence", trong tiếng Việt có nghĩa là "Trí tuệ nhân tạo".',
      },
      {
        question: 'Ví dụ nào sau đây KHÔNG phải là ứng dụng của AI hẹp (Narrow AI)?',
        options: [
          'Phần mềm nhận dạng giọng nói',
          'Xe tự lái',
          'Một robot có ý thức và khả năng tư duy như con người',
          'Hệ thống gợi ý sản phẩm trên Amazon',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Một robot có ý thức và khả năng tư duy như con người là ví dụ của AI tổng quát (AGI), một cấp độ AI mà chúng ta chưa đạt tới. Các ví dụ còn lại đều là AI hẹp, được thiết kế để thực hiện một nhiệm vụ cụ thể.',
      },
    ],
    faqs: [
      {
        question: 'AI có thể suy nghĩ và có cảm xúc như con người không?',
        answer:
          'Hiện tại thì chưa. AI mà chúng ta sử dụng hàng ngày là "AI hẹp", chúng rất giỏi trong một nhiệm vụ cụ thể (như chơi cờ, nhận dạng khuôn mặt) nhưng không có ý thức, cảm xúc hay sự hiểu biết toàn diện như con người. AI có khả năng tư duy như người (gọi là "AI tổng quát") vẫn còn là một mục tiêu xa trong tương lai.',
      },
      {
        question: 'Học về AI có cần phải giỏi toán và lập trình không?',
        answer:
          'Để trở thành một nhà nghiên cứu hay kỹ sư AI chuyên sâu thì cần. Nhưng để hiểu và sử dụng AI, bạn không nhất thiết phải là chuyên gia. Giống như bạn không cần biết cách chế tạo động cơ để lái xe hơi, bạn có thể học cách sử dụng các công cụ AI một cách hiệu quả mà không cần biết code.',
      },
      {
        question: 'AI có nguy hiểm không? Nó có "cướp" hết việc làm của con người không?',
        answer:
          'AI là một công cụ mạnh mẽ, và như mọi công cụ, nó có thể được sử dụng cho mục đích tốt hoặc xấu. AI sẽ thay đổi thị trường lao động, một số công việc sẽ biến mất nhưng nhiều công việc mới sẽ ra đời, đòi hỏi kỹ năng làm việc cùng AI. Việc học về AI chính là cách tốt nhất để chuẩn bị cho sự thay đổi này.',
      },
      {
        question: 'Sự khác biệt giữa AI, Machine Learning và Deep Learning là gì?',
        answer: 'Hãy tưởng tượng chúng như những con búp bê Nga. AI (Trí tuệ nhân tạo) là con búp bê lớn nhất, là khái niệm bao trùm về việc máy móc bắt chước trí thông minh của con người. Machine Learning (Học máy) là một tập hợp con của AI, là phương pháp để AI học hỏi từ dữ liệu mà không cần lập trình tường minh. Deep Learning (Học sâu) là một tập hợp con của Machine Learning, sử dụng các mạng nơ-ron phức tạp để giải quyết các vấn đề khó hơn nữa.'
      },
      {
        question: 'Ai là "cha đẻ" của Trí tuệ nhân tạo?',
        answer: 'Thuật ngữ "Artificial Intelligence" được John McCarthy đặt ra lần đầu tiên tại Hội thảo Dartmouth năm 1956. Tuy nhiên, nhiều người coi Alan Turing là một trong những người đặt nền móng lý thuyết quan trọng nhất cho AI với "Phép thử Turing" của ông.'
      },
      {
        question: 'Tại sao bây giờ chúng ta lại nghe nói nhiều về AI đến vậy?',
        answer: 'Sự bùng nổ của AI gần đây là nhờ vào ba yếu tố chính: (1) Dữ liệu lớn (Big Data) - chúng ta có một lượng dữ liệu khổng lồ để huấn luyện AI; (2) Sức mạnh tính toán - các bộ xử lý máy tính (như GPU) đã trở nên cực kỳ mạnh mẽ; và (3) Các thuật toán tiên tiến - các nhà nghiên cứu đã phát triển các mô hình Deep Learning hiệu quả hơn.'
      },
      {
        question: 'Một chiếc máy tính có được coi là AI không?',
        answer: 'Không hẳn. Một chiếc máy tính thông thường chỉ thực hiện các lệnh mà con người lập trình sẵn. Một hệ thống AI có khả năng "học" từ dữ liệu và đưa ra quyết định hoặc dự đoán mà không cần được lập trình một cách tường minh cho mọi trường hợp.'
      },
      {
        question: 'Trợ lý ảo như Siri hay Google Assistant có phải là AI không?',
        answer: 'Chắc chắn rồi. Chúng là những ví dụ điển hình của AI hẹp. Chúng sử dụng công nghệ xử lý ngôn ngữ tự nhiên (một nhánh của AI) để hiểu câu hỏi của bạn và thực hiện các yêu cầu.'
      },
      {
        question: 'Làm thế nào để một chiếc xe tự lái "nhìn" thấy đường?',
        answer: 'Xe tự lái sử dụng một lĩnh vực của AI gọi là "Thị giác máy tính" (Computer Vision). Nó kết hợp dữ liệu từ nhiều cảm biến như camera, radar, và LiDAR để "nhìn" và hiểu môi trường xung quanh, nhận dạng người đi bộ, các phương tiện khác và biển báo giao thông.'
      },
      {
        question: 'AI có sáng tạo được không?',
        answer: 'Có, AI ngày nay có thể sáng tạo nghệ thuật, viết nhạc, làm thơ. Các mô hình AI tạo sinh (Generative AI) như DALL-E hay Midjourney có thể tạo ra những hình ảnh độc đáo từ mô tả văn bản. Tuy nhiên, sự sáng tạo của AI vẫn dựa trên các mẫu mà nó đã học được từ dữ liệu do con người tạo ra.'
      }
    ],
  },
  {
    id: 'ai-in-learning',
    title: 'AI - Người bạn đồng hành trong học tập',
    description:
      'Khám phá cách sử dụng các công cụ AI để tìm kiếm thông tin, tóm tắt tài liệu, giải quyết bài tập và cá nhân hóa lộ trình học tập.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=Srhm9d3CV_s',
    imageUrl: 'https://i.ytimg.com/vi/Srhm9d3CV_s/hqdefault.jpg',
    objectives: [
      'Sử dụng thành thạo các công cụ tìm kiếm thông minh và chatbot AI để nghiên cứu.',
      'Biết cách dùng AI để tóm tắt văn bản dài và trích xuất ý chính.',
      'Ứng dụng AI để kiểm tra ngữ pháp, giải các bài toán và học ngôn ngữ mới.',
      'Hiểu về khái niệm học tập thích ứng (adaptive learning) được hỗ trợ bởi AI.',
    ],
    prerequisites: ['Hoàn thành bài "Chào mừng đến với thế giới AI"'],
    exercises: [
      {
        title: 'Thực hành tóm tắt bài báo với AI',
        description:
          'Sử dụng một công cụ AI (như ChatGPT, Gemini, hoặc các công cụ tóm tắt chuyên dụng) để tóm tắt một bài báo khoa học và trình bày lại các ý chính.',
        difficulty: 'Trung bình',
        procedure: [
          'Tìm một bài báo hoặc một bài viết dài về một chủ đề bạn quan tâm.',
          'Sao chép và dán văn bản vào một công cụ AI có chức năng tóm tắt.',
          'Yêu cầu AI tóm tắt bài viết thành 3 gạch đầu dòng chính.',
          'Đọc bản tóm tắt và so sánh với bài viết gốc để đánh giá độ chính xác.',
        ],
        expectedResults:
          'Học sinh có thể tạo ra một bản tóm tắt ngắn gọn, chính xác và hiểu được cách AI xử lý thông tin.',
      },
      {
        title: 'Lên kế hoạch học tập với AI',
        description: 'Sử dụng chatbot AI để tạo một kế hoạch học tập cho một môn học trong một tuần.',
        difficulty: 'Trung bình',
        procedure: [
          'Chọn một môn học bạn muốn cải thiện.',
          'Mở một chatbot AI và đưa ra yêu cầu, ví dụ: "Hãy giúp tôi tạo một kế hoạch học môn Toán lớp 10 trong tuần tới, mỗi ngày 1 tiếng, tập trung vào chủ đề hình học không gian."',
          'Tinh chỉnh kế hoạch bằng cách đặt thêm câu hỏi cho AI.',
        ],
        expectedResults:
          'Học sinh có một bản kế hoạch học tập chi tiết và học được cách tương tác với AI để cá nhân hóa kết quả.',
      },
    ],
    realWorldApplications: [
      'Grammarly kiểm tra và đề xuất cải thiện ngữ pháp tiếng Anh.',
      'Photomath và Symbolab giải và hướng dẫn các bài toán từng bước.',
      'Duolingo sử dụng AI để cá nhân hóa các bài học ngôn ngữ.',
      'Khan Academy cung cấp các lộ trình học tập thích ứng cho học sinh.',
    ],
    vietnamContext: {
      title: 'Công cụ AI hỗ trợ học sinh Việt Nam',
      content: [
        'Nhiều nền tảng học tập trực tuyến tại Việt Nam như VioEdu, OLM.vn đang tích hợp AI để cá nhân hóa trải nghiệm học tập và đưa ra các bài tập phù hợp với năng lực của từng học sinh.',
        'Các cuộc thi về AI và Robotics cho học sinh, sinh viên được tổ chức thường xuyên, khuyến khích thế hệ trẻ tìm hiểu và ứng dụng AI.',
        'Các chatbot hỗ trợ tuyển sinh đại học sử dụng AI để trả lời câu hỏi của học sinh 24/7, giúp các em dễ dàng tiếp cận thông tin.',
      ],
    },
    careerConnect: {
      name: 'Cô Nguyễn Thúy Uyên Phương',
      title: 'Nhà sáng lập, Chuyên gia giáo dục',
      company: 'Trường Ngoại khóa TOMATO',
      imageUrl: 'https://i.pravatar.cc/150?u=uyen-phuong',
      quote:
        'AI không thay thế giáo viên, mà sẽ là trợ thủ đắc lực giúp giáo viên và học sinh cá nhân hóa việc dạy và học. Hãy xem AI như một người bạn đồng hành thông thái trên con đường khám phá tri thức.',
    },
    quizzes: [
      {
        question: 'Công cụ nào sau đây sử dụng AI để giúp bạn học ngoại ngữ?',
        options: ['Photomath', 'Grammarly', 'Duolingo', 'Netflix'],
        correctAnswerIndex: 2,
        explanation:
          'Duolingo sử dụng AI để tạo ra các bài học được cá nhân hóa, thích ứng với tốc độ và trình độ của người học để giúp họ học ngoại ngữ hiệu quả hơn.',
      },
      {
        question: 'Học tập thích ứng (Adaptive Learning) là gì?',
        options: [
          'Học theo một giáo trình cố định',
          'Hệ thống học tập điều chỉnh nội dung và độ khó dựa trên表现 của học sinh',
          'Học nhóm với bạn bè',
          'Chỉ học những môn mình thích',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Học tập thích ứng là một phương pháp giáo dục sử dụng AI để điều chỉnh lộ trình học tập, nội dung và độ khó của bài tập cho phù hợp với năng lực và tiến độ của từng cá nhân.',
      },
    ],
    faqs: [
      {
        question: 'Dùng AI để làm bài tập có phải là gian lận không?',
        answer:
          'Điều này phụ thuộc vào CÁCH bạn sử dụng. Nếu bạn sao chép nguyên văn câu trả lời của AI và nộp bài, đó là gian lận. Nhưng nếu bạn dùng AI để giải thích một khái niệm khó, tìm kiếm thông tin, kiểm tra lại bài làm của mình, hoặc tạo một kế hoạch học tập, thì đó là cách học tập thông minh và hiệu quả.',
      },
      {
        question: 'ChatGPT, Gemini (trước đây là Bard), và Microsoft Copilot khác nhau như thế nào?',
        answer: 'Về cơ bản, chúng đều là các chatbot AI mạnh mẽ. ChatGPT (của OpenAI) rất phổ biến và mạnh về sáng tạo văn bản. Gemini (của Google) có lợi thế là được cập nhật thông tin từ Internet theo thời gian thực. Copilot (của Microsoft) được tích hợp sâu vào hệ điều hành Windows và các ứng dụng Office, rất tiện lợi cho công việc.'
      },
      {
        question: 'Công cụ AI nào tốt nhất để kiểm tra ngữ pháp tiếng Anh?',
        answer: 'Grammarly là công cụ phổ biến và mạnh mẽ nhất. Nó không chỉ sửa lỗi chính tả, ngữ pháp mà còn đề xuất cách diễn đạt tự nhiên và chuyên nghiệp hơn. Nhiều trình duyệt và ứng dụng soạn thảo văn bản cũng đã tích hợp các tính năng tương tự.'
      },
      {
        question: 'Làm thế nào để dùng AI tóm tắt một video YouTube dài?',
        answer: 'Có nhiều tiện ích mở rộng (extensions) cho trình duyệt Chrome như "YouTube Summary with ChatGPT & Claude" có thể làm điều này. Chúng sẽ lấy phụ đề của video và yêu cầu một chatbot AI tóm tắt lại nội dung chính cho bạn, giúp tiết kiệm rất nhiều thời gian.'
      },
      {
        question: 'AI có thể giúp tôi học toán không?',
        answer: 'Chắc chắn. Các ứng dụng như Photomath cho phép bạn chụp ảnh một bài toán và nó sẽ hiển thị các bước giải chi tiết. Các công cụ như WolframAlpha có thể giải các phương trình phức tạp và vẽ đồ thị hàm số. Đây là những trợ thủ đắc lực cho môn Toán.'
      },
      {
        question: 'Có công cụ AI nào giúp tôi tạo bài thuyết trình (slide) không?',
        answer: 'Có, các công cụ như Gamma.app hoặc Tome.app có thể tạo ra một bộ slide hoàn chỉnh chỉ từ một vài câu lệnh của bạn. Chúng sẽ tự động tạo cấu trúc, viết nội dung và tìm hình ảnh minh họa. Bạn chỉ cần chỉnh sửa lại cho phù hợp với ý mình.'
      },
      {
        question: 'Làm sao để chắc chắn rằng AI không "bịa" ra thông tin?',
        answer: 'Đây là một vấn đề lớn của AI, gọi là "hallucination". Để giảm thiểu rủi ro, hãy sử dụng các chatbot có khả năng trích dẫn nguồn, ví dụ như Perplexity AI hoặc Copilot. Sau khi chúng trả lời, hãy kiểm tra các nguồn tin mà chúng đã sử dụng để đảm bảo tính chính xác.'
      },
      {
        question: 'Tôi có thể dùng AI để học một loại nhạc cụ không?',
        answer: 'Có. AI có thể giúp bạn theo nhiều cách: các ứng dụng như Yousician sử dụng AI để "nghe" bạn chơi và đưa ra phản hồi tức thì. Bạn cũng có thể hỏi AI về lý thuyết âm nhạc, hợp âm, hoặc thậm chí yêu cầu nó sáng tác một đoạn nhạc ngắn để bạn tập theo.'
      },
      {
        question: 'AI có thể dịch thuật tốt đến mức nào?',
        answer: 'Các công cụ như Google Translate hay DeepL đã trở nên cực kỳ tốt cho việc dịch các văn bản thông thường. Tuy nhiên, đối với các văn bản quan trọng, văn học, hoặc có nhiều sắc thái, chúng vẫn có thể mắc lỗi. Luôn cần có sự kiểm tra của người hiểu ngôn ngữ đó.'
      },
      {
        question: 'Các công cụ AI này có miễn phí không?',
        answer: 'Nhiều công cụ AI phổ biến có phiên bản miễn phí rất mạnh mẽ (như ChatGPT, Gemini, Copilot). Các phiên bản trả phí thường cung cấp các mô hình AI mạnh hơn, tốc độ nhanh hơn và các tính năng nâng cao. Đối với việc học tập thông thường, phiên bản miễn phí thường là đủ.'
      }
    ],
  },
  {
    id: 'creative-ai-projects',
    title: 'Sáng tạo với AI - Dự án nghệ thuật và nội dung',
    description: 'Học cách sử dụng AI để tạo ra các tác phẩm nghệ thuật, âm nhạc, và nội dung sáng tạo.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=SVcsDDABEkM',
    imageUrl: 'https://i.ytimg.com/vi/SVcsDDABEkM/hqdefault.jpg',
    objectives: [
      'Sử dụng AI để tạo hình ảnh và artwork.',
      'Tạo ra âm nhạc và âm thanh với AI.',
      'Viết truyện và thơ với sự hỗ trợ của AI.',
      'Hiểu về bản quyền và đạo đức trong sáng tạo AI.',
    ],
    prerequisites: ['Đã hoàn thành bài "Công cụ AI hỗ trợ học tập".', 'Có sự sáng tạo và tò mò khám phá.'],
    exercises: [
      {
        title: 'Tạo poster tuyên truyền với AI',
        description: 'Sử dụng AI để tạo poster tuyên truyền về một chủ đề xã hội mà bạn quan tâm.',
        difficulty: 'Trung bình',
        procedure: [
          'Chọn chủ đề xã hội (môi trường, giáo dục, sức khỏe...).',
          'Sử dụng DALL-E hoặc Midjourney để tạo hình ảnh.',
          'Dùng ChatGPT để viết slogan hấp dẫn.',
          'Kết hợp hình ảnh và text để hoàn thiện poster.',
        ],
        expectedResults: 'Poster hoàn chỉnh với thông điệp rõ ràng và hình ảnh bắt mắt.',
      },
    ],
    realWorldApplications: [
      'Tạo content cho social media cá nhân.',
      'Thiết kế poster cho hoạt động trường học.',
      'Sáng tác truyện ngắn hoặc thơ.',
      'Tạo nhạc nền cho video presentation.',
    ],
    vietnamContext: {
      title: 'Cộng đồng sáng tạo AI tại Việt Nam',
      content: [
        'Nhiều nghệ sĩ trẻ Việt Nam đang thử nghiệm với AI art để tạo ra những tác phẩm độc đáo.',
        'Các cuộc thi sáng tạo với AI đang được tổ chức tại nhiều trường đại học.',
        'Vietnamese AI Art Group trên Facebook là nơi chia sẻ tác phẩm và kinh nghiệm.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Minh Đức',
      title: 'AI Artist & Creative Director',
      company: 'Freelancer',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-minh-duc',
      quote:
        'AI không thay thế sự sáng tạo của con người mà giúp chúng ta biểu đạt ý tưởng nhanh hơn. Điều quan trọng vẫn là ý tưởng và cảm xúc mà bạn muốn truyền tải.',
    },
    quizzes: [
      {
        question: 'Khi sử dụng AI để tạo nội dung sáng tạo, điều nào cần lưu ý?',
        options: [
          'Có thể sử dụng bất kỳ hình ảnh nào AI tạo ra',
          'Cần tôn trọng bản quyền và credit nguồn gốc',
          'AI tạo ra luôn là độc nhất',
          'Không cần kiểm tra nội dung trước khi public',
        ],
        correctAnswerIndex: 1,
        explanation: 'Cần tôn trọng bản quyền, kiểm tra nội dung và credit nguồn gốc khi sử dụng AI tạo nội dung.'
      }
    ],
    faqs: [
      {
        question: 'Tác phẩm do AI tạo ra có thuộc về tác giả không?',
        answer:
          'Hiện tại luật bản quyền chưa rõ ràng về vấn đề này. Tốt nhất là luôn ghi rõ đã sử dụng AI và không claim là 100% sáng tạo cá nhân.',
      },
      {
        question: 'Sự khác biệt giữa DALL-E, Midjourney và Stable Diffusion là gì?',
        answer: 'DALL-E (của OpenAI) rất giỏi trong việc hiểu các câu lệnh phức tạp và tạo ra hình ảnh đúng theo yêu cầu. Midjourney nổi tiếng với việc tạo ra những hình ảnh có tính nghệ thuật cao, đẹp mắt. Stable Diffusion là mã nguồn mở, cho phép tùy chỉnh sâu nhất nhưng cũng đòi hỏi kỹ thuật cao hơn để sử dụng hiệu quả.'
      },
      {
        question: 'Làm thế nào để viết một "prompt" (câu lệnh) tốt để tạo hình ảnh?',
        answer: 'Một prompt tốt thường bao gồm 4 phần: (1) Chủ thể (ví dụ: "một phi hành gia"), (2) Mô tả chi tiết (ví dụ: "đang cưỡi ngựa"), (3) Phong cách (ví dụ: "theo phong cách tranh sơn dầu"), và (4) Các yếu tố kỹ thuật (ví dụ: "ánh sáng điện ảnh, độ phân giải cao"). Càng chi tiết, kết quả càng gần với ý bạn.'
      },
      {
        question: 'AI có thể sáng tác nhạc theo yêu cầu của tôi không?',
        answer: 'Có. Các công cụ như Suno AI hoặc Udio có thể tạo ra một bài hát hoàn chỉnh (bao gồm cả nhạc và lời) chỉ từ một vài mô tả của bạn về thể loại và chủ đề. Bạn có thể yêu cầu nó tạo một "bài hát pop vui tươi về mùa hè" và nó sẽ làm điều đó trong vài phút.'
      },
      {
        question: 'Tôi có thể sử dụng hình ảnh do AI tạo ra cho các dự án ở trường không?',
        answer: 'Thường là có, nhưng bạn nên hỏi lại giáo viên của mình. Khi sử dụng, một thói quen tốt là ghi chú rằng hình ảnh được tạo bởi AI (ví dụ: "Hình ảnh được tạo bởi Midjourney"). Điều này thể hiện sự minh bạch và trung thực.'
      },
      {
        question: 'Làm thế nào để AI có thể viết một câu chuyện hay một bài thơ?',
        answer: 'Các mô hình ngôn ngữ lớn như ChatGPT được huấn luyện trên một kho dữ liệu văn học khổng lồ. Chúng học được các cấu trúc câu chuyện, nhịp điệu của thơ và các phong cách viết khác nhau. Bạn có thể yêu cầu nó "viết một câu chuyện ngắn kinh dị với kết thúc bất ngờ" và nó sẽ áp dụng các mẫu đã học để tạo ra một câu chuyện mới.'
      },
      {
        question: 'Chất lượng của các tác phẩm do AI tạo ra có đủ tốt không?',
        answer: 'Chất lượng đang ngày càng tốt hơn một cách đáng kinh ngạc. Hình ảnh AI có thể đạt đến độ chân thực như ảnh chụp. Âm nhạc AI có thể rất bắt tai. Tuy nhiên, các tác phẩm này đôi khi có thể thiếu đi "linh hồn" hoặc sự sâu sắc mà chỉ con người mới có thể mang lại.'
      },
      {
        question: 'Tôi có cần trả tiền để sử dụng các công cụ sáng tạo AI này không?',
        answer: 'Nhiều công cụ cho phép bạn sử dụng miễn phí với một số giới hạn (ví dụ: số lượng hình ảnh có thể tạo mỗi ngày). Các gói trả phí sẽ cho bạn nhiều lượt sử dụng hơn, tốc độ nhanh hơn và các tính năng cao cấp.'
      },
      {
        question: 'AI có thể giúp tôi thiết kế một trò chơi đơn giản không?',
        answer: 'Có. Bạn có thể sử dụng AI để lên ý tưởng cho nhân vật, cốt truyện, và các cấp độ chơi. Các công cụ như ChatGPT có thể giúp bạn viết mã cho các cơ chế đơn giản trong các nền tảng như Scratch hoặc Roblox, ngay cả khi bạn không phải là một lập trình viên chuyên nghiệp.'
      },
      {
        question: 'Liệu AI có làm cho sự sáng tạo của con người trở nên vô giá trị không?',
        answer: 'Không. Ngược lại, AI đang trở thành một công cụ mạnh mẽ để khuếch đại sự sáng tạo của con người. Nó giúp hiện thực hóa ý tưởng nhanh hơn và cho phép những người không có kỹ năng kỹ thuật (vẽ, sáng tác nhạc) có thể thể hiện bản thân. Người chiến thắng sẽ là người biết cách kết hợp tốt nhất sự sáng tạo của mình với sức mạnh của AI.'
      }
    ],
  },
  {
    id: 'ai-ethics-safety',
    title: 'Đạo đức AI và An toàn Số',
    description: 'Tìm hiểu về những vấn đề đạo đức, an toàn và trách nhiệm khi sử dụng công nghệ AI.',
    duration: '75 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=WXuK6gekU1Y',
    imageUrl: 'https://i.ytimg.com/vi/WXuK6gekU1Y/hqdefault.jpg',
    objectives: [
      'Nhận biết được những rủi ro và thách thức của AI.',
      'Hiểu các nguyên tắc sử dụng AI một cách có trách nhiệm.',
      'Phát triển tư duy phản biện về thông tin được tạo bởi AI.',
      'Bảo vệ quyền riêng tư và dữ liệu cá nhân.',
    ],
    prerequisites: ['Đã có kinh nghiệm sử dụng một số công cụ AI.'],
    exercises: [
      {
        title: 'Phân tích case study về AI bias',
        description: 'Nghiên cứu và thảo luận về một trường hợp thực tế AI có thiên kiến.',
        difficulty: 'Trung bình',
        procedure: [
          'Nghiên cứu case study về AI bias (ví dụ: thuật toán tuyển dụng thiên vị).',
          'Xác định nguyên nhân gây ra thiên kiến.',
          'Thảo luận về tác động đến xã hội.',
          'Đề xuất giải pháp để giảm thiểu thiên kiến.',
        ],
        expectedResults: 'Hiểu rõ về AI bias và có khả năng đánh giá phỏng đoán việc sử dụng AI.',
      },
    ],
    realWorldApplications: [
      'Đánh giá độ tin cậy của thông tin AI tạo ra.',
      'Bảo vệ thông tin cá nhân khi sử dụng dịch vụ AI.',
      'Sử dụng AI một cách có trách nhiệm trong học tập.',
      'Nhận biết và phản đối AI bias trong cuộc sống.',
    ],
    vietnamContext: {
      title: 'Quy định về AI tại Việt Nam',
      content: [
        'Việt Nam đang xây dựng khung pháp lý cho việc phát triển và sử dụng AI.',
        'Bộ TT&TT đã ban hành các hướng dẫn về an toàn thông tin cho ứng dụng AI.',
        'Nhiều tổ chức giáo dục đang phát triển quy tắc ứng xử với AI cho học sinh.',
      ],
    },
    careerConnect: {
      name: 'TS. Đặng Thành Nam',
      title: 'Chuyên gia AI Ethics',
      company: 'Đại học Bách Khoa Hà Nội',
      imageUrl: 'https://i.pravatar.cc/150?u=dang-thanh-nam',
      quote:
        'AI chỉ tốt khi được sử dụng đúng cách. Học sinh cần có tư duy phản biện để đánh giá và sử dụng AI một cách có trách nhiệm.',
    },
    quizzes: [
      {
        question: 'AI bias là gì?',
        options: [
          'AI luôn luôn đúng',
          'AI có thể có những thiên kiến không công bằng',
          'AI không thể mắc lỗi',
          'AI chỉ thiên vị các kỹ sư',
        ],
        correctAnswerIndex: 1,
        explanation:
          'AI bias là khi hệ thống AI có những thiên kiến không công bằng, thường xuất phát từ dữ liệu huấn luyện.',
      },
    ],
    faqs: [
      {
        question: '"Deepfake" là gì và tại sao nó lại nguy hiểm?',
        answer:
          'Deepfake là công nghệ sử dụng AI để tạo ra các video hoặc hình ảnh giả mạo rất chân thực, ví dụ như ghép mặt một người vào video của người khác. Nó nguy hiểm vì có thể được sử dụng để tạo tin giả, lừa đảo, bôi nhọ danh dự người khác, hoặc tạo ra các nội dung không phù hợp.',
      },
      {
        question: 'Làm thế nào để nhận biết một hình ảnh do AI tạo ra?',
        answer:
          'Ngày càng khó để nhận biết, nhưng có một vài dấu hiệu cần chú ý: các chi tiết vô lý (ví dụ: người có 6 ngón tay), nền ảnh bị biến dạng, chữ viết không rõ ràng, hoặc các chi tiết quá hoàn hảo một cách phi tự nhiên. Tuy nhiên, cách tốt nhất vẫn là xem xét nguồn gốc của hình ảnh.',
      },
      {
        question: 'Tại sao dữ liệu lại quan trọng đối với đạo đức AI?',
        answer:
          'Bởi vì AI học hỏi từ dữ liệu mà con người cung cấp cho nó. Nếu dữ liệu đầu vào có chứa sự thiên vị (ví dụ: dữ liệu lịch sử cho thấy một nhóm người nào đó ít được tuyển dụng hơn), AI sẽ học theo sự thiên vị đó và khuếch đại nó, dẫn đến các quyết định không công bằng trong tương lai.',
      },
      {
        question: 'Quyền riêng tư của tôi có bị ảnh hưởng khi sử dụng các công cụ AI không?',
        answer: 'Có, đây là một vấn đề rất quan trọng. Khi bạn sử dụng các công cụ AI, đặc biệt là các dịch vụ trực tuyến, dữ liệu bạn nhập vào (câu hỏi, văn bản, hình ảnh) có thể được sử dụng để huấn luyện các mô hình AI trong tương lai. Luôn đọc kỹ chính sách bảo mật và tránh nhập các thông tin cá nhân nhạy cảm.'
      },
      {
        question: '"Bong bóng bộ lọc" (Filter Bubble) là gì?',
        answer: 'Đây là hiện tượng khi các thuật toán AI (ví dụ trên YouTube, TikTok, Facebook) chỉ hiển thị cho bạn những nội dung mà chúng nghĩ bạn sẽ thích, dựa trên lịch sử xem của bạn. Điều này có thể khiến bạn bị cô lập trong một "bong bóng" quan điểm, khó tiếp cận với những ý kiến và thông tin trái chiều.'
      },
      {
        question: 'Ai chịu trách nhiệm khi một hệ thống AI gây ra lỗi?',
        answer: 'Đây là một câu hỏi pháp lý và đạo đức phức tạp. Trách nhiệm có thể thuộc về người lập trình, công ty phát triển AI, người sử dụng AI, hoặc thậm chí là chính hệ thống AI (trong tương lai). Đây là lý do tại sao việc xây dựng các quy tắc và luật lệ cho AI lại cấp thiết đến vậy.'
      },
      {
        question: 'Làm thế nào để tôi có thể sử dụng AI một cách có đạo đức?',
        answer: 'Hãy luôn tự hỏi: "Việc này có công bằng không? Có làm hại ai không? Tôi có đang trung thực không?". Hãy minh bạch về việc sử dụng AI, tôn trọng quyền riêng tư của người khác, và luôn sử dụng tư duy phản biện để đánh giá kết quả mà AI đưa ra.'
      },
      {
        question: 'Tại sao một số hệ thống AI lại có những hành vi phân biệt chủng tộc hoặc giới tính?',
        answer: 'Điều này thường xuất phát từ "thiên vị trong dữ liệu" (data bias). Nếu một hệ thống AI được huấn luyện chủ yếu bằng hình ảnh của người da trắng, nó có thể nhận dạng khuôn mặt người da màu kém chính xác hơn. AI không tự nó "phân biệt chủng tộc", nó chỉ phản ánh những thiên vị đã có sẵn trong dữ liệu mà con người cung cấp.'
      },
      {
        question: 'Tôi có nên tin tưởng các lời khuyên y tế hoặc tài chính từ AI không?',
        answer: 'Tuyệt đối không nên tin tưởng hoàn toàn. Mặc dù AI có thể cung cấp thông tin hữu ích, nhưng nó không thể thay thế lời khuyên từ một chuyên gia thực thụ (bác sĩ, luật sư, nhà tư vấn tài chính). Luôn tham khảo ý kiến của chuyên gia có trình độ cho các quyết định quan trọng.'
      },
      {
        question: 'Là một học sinh, tôi có thể làm gì để thúc đẩy việc sử dụng AI có đạo đức?',
        answer: 'Bạn có thể bắt đầu bằng việc tự giáo dục bản thân và bạn bè về những vấn đề này. Tham gia các cuộc thảo luận, đặt câu hỏi về cách các công cụ bạn dùng hoạt động, và học cách nhận biết tin giả hoặc nội dung do AI tạo ra. Chính nhận thức của bạn là bước đầu tiên quan trọng nhất.'
      }
    ],
  },
  {
    id: 'ai-future-careers',
    title: 'AI và Tương lai Nghề nghiệp',
    description: 'Khám phá những nghề nghiệp mới xuất hiện nhờ AI và cách chuẩn bị cho tương lai việc làm.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=gWmRkYsLzB4',
    imageUrl: 'https://i.ytimg.com/vi/gWmRkYsLzB4/hqdefault.jpg',
    objectives: [
      'Tìm hiểu các nghề nghiệp mới trong thời đại AI.',
      'Hiểu những kỹ năng cần thiết cho tương lai.',
      'Lập kế hoạch học tập để chuẩn bị cho nghề nghiệp AI.',
      'Nhận biết những ngành nghề có thể bị ảnh hưởng bởi AI.',
    ],
    prerequisites: ['Hoàn thành tất cả các bài học trước.'],
    exercises: [
      {
        title: 'Lập kế hoạch nghề nghiệp AI',
        description: 'Tạo lộ trình học tập và phát triển để theo đuổi một nghề nghiệp liên quan đến AI.',
        difficulty: 'Trung bình',
        procedure: [
          'Chọn một nghề nghiệp AI mà bạn quan tâm (Data Scientist, AI Engineer, UX Designer for AI...).',
          'Nghiên cứu yêu cầu kỹ năng và kiến thức.',
          'Lập lộ trình học tập từ bậc THCS/THPT đến đại học.',
          'Xác định các hoạt động thực hành và dự án cần làm.',
        ],
        expectedResults: 'Kế hoạch nghề nghiệp rõ ràng với các mục tiêu ngắn hạn và dài hạn.',
      },
    ],
    realWorldApplications: [
      'Chọn chuyên ngành đại học phù hợp với AI.',
      'Tham gia các khóa học và workshop về AI.',
      'Xây dựng portfolio dự án AI cá nhân.',
      'Networking với cộng đồng AI Việt Nam.',
    ],
    vietnamContext: {
      title: 'Thị trường việc làm AI tại Việt Nam',
      content: [
        'Nhu cầu nhân lực AI tại Việt Nam đang tăng mạnh với mức lương hấp dẫn.',
        'Các tập đoàn như FPT, Viettel, Vingroup đang đầu tư mạnh vào AI.',
        'Nhiều startup AI Việt Nam đang nhận được đầu tư từ quốc tế.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Hoàng Nam',
      title: 'Machine Learning Engineer',
      company: 'Grab Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=le-hoang-nam',
      quote:
        'Ngành AI không chỉ cần kỹ năng kỹ thuật mà còn cần khả năng tư duy logic và giải quyết vấn đề. Hãy bắt đầu từ những dự án nhỏ và không ngừng học hỏi.',
    },
    quizzes: [
      {
        question: 'Kỹ năng nào quan trọng nhất cho nghề nghiệp AI?',
        options: [
          'Chỉ cần biết lập trình',
          'Tư duy logic và khả năng giải quyết vấn đề',
          'Chỉ cần học thuộc lòng thuật toán',
          'Không cần kỹ năng giao tiếp',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tư duy logic và khả năng giải quyết vấn đề là kỹ năng quan trọng nhất, bên cạnh kiến thức kỹ thuật.',
      },
    ],
    faqs: [
      {
        question: 'Cần học đại học gì để làm việc trong lĩnh vực AI?',
        answer:
          'Có nhiều ngành phù hợp như Khoa học máy tính, Kỹ thuật phần mềm, Toán ứng dụng, Khoa học dữ liệu. Quan trọng là có nền tảng toán học và lập trình tốt.',
      },
      {
        question: 'AI có thể thay thế hoàn toàn con người trong công việc không?',
        answer:
          'AI sẽ tự động hóa nhiều công việc nhưng cũng tạo ra những việc làm mới. Những công việc cần sáng tạo, đồng cảm và tương tác xã hội sẽ vẫn cần con người.',
      },
      {
        question: '"Prompt Engineer" là nghề gì?',
        answer: 'Đây là một nghề mới và rất "hot". Một Prompt Engineer là người chuyên thiết kế, viết và tối ưu hóa các câu lệnh (prompt) để giao tiếp với các mô hình AI, nhằm tạo ra kết quả mong muốn một cách chính xác và hiệu quả nhất. Đây là một nghề đòi hỏi cả kỹ năng kỹ thuật và sáng tạo.'
      },
      {
        question: 'Ngoài các nghề kỹ thuật, AI tạo ra những cơ hội việc làm nào khác?',
        answer: 'Rất nhiều. Ví dụ: Chuyên gia đạo đức AI (AI Ethicist), Luật sư chuyên về AI, Nhà thiết kế trải nghiệm người dùng cho các sản phẩm AI (AI UX Designer), Chuyên gia tư vấn triển khai AI cho doanh nghiệp, hoặc các nhà sáng tạo nội dung sử dụng AI làm công cụ chính.'
      },
      {
        question: 'Là một học sinh, tôi nên học những kỹ năng gì ngay từ bây giờ để chuẩn bị cho tương lai AI?',
        answer: 'Bên cạnh các môn STEM (Khoa học, Công nghệ, Kỹ thuật, Toán), hãy tập trung vào 4 kỹ năng "vàng": (1) Tư duy phản biện, (2) Sáng tạo, (3) Giao tiếp, và (4) Hợp tác. Đây là những kỹ năng mà AI khó có thể thay thế được con người.'
      },
      {
        question: 'Học lập trình có còn quan trọng không khi AI có thể tự viết code?',
        answer: 'Vẫn rất quan trọng. AI có thể viết các đoạn code nhỏ, nhưng nó vẫn cần con người để thiết kế kiến trúc hệ thống, kiểm tra lỗi, và hiểu được yêu cầu của người dùng. Biết lập trình giúp bạn hiểu cách AI hoạt động và làm việc với nó hiệu quả hơn.'
      },
      {
        question: 'Những ngành nghề nào sẽ bị ảnh hưởng nhiều nhất bởi AI?',
        answer: 'Các công việc có tính chất lặp đi lặp lại và dựa trên dữ liệu sẽ bị ảnh hưởng nhiều, ví dụ như nhập liệu, một số công việc trong dịch vụ khách hàng, hoặc phân tích dữ liệu cơ bản. Tuy nhiên, trong chính những ngành này, các vai trò mới đòi hỏi kỹ năng giám sát và làm việc cùng AI sẽ xuất hiện.'
      },
      {
        question: 'Làm thế nào để tôi có thể xây dựng một "portfolio" về AI khi còn là học sinh?',
        answer: 'Hãy bắt đầu từ những dự án nhỏ! Bạn có thể tạo một blog nơi bạn thử nghiệm và đánh giá các công cụ AI mới. Tạo một bộ sưu tập các tác phẩm nghệ thuật do bạn chỉ đạo AI tạo ra. Hoặc tham gia các cuộc thi về AI và robotics dành cho học sinh. Ghi lại quá trình và kết quả của bạn.'
      },
      {
        question: 'AI có thể giúp tôi chọn nghề nghiệp không?',
        answer: 'Có. Bạn có thể hỏi một chatbot AI: "Tôi thích môn toán và vẽ, có những nghề nghiệp nào trong tương lai kết hợp cả hai sở thích này và liên quan đến AI không?". AI có thể phân tích và gợi ý cho bạn những con đường sự nghiệp mà bạn có thể chưa từng nghĩ tới.'
      },
      {
        question: 'Tương lai của công việc sẽ là con người "đấu" với AI hay con người "làm việc cùng" AI?',
        answer: 'Chắc chắn là "làm việc cùng" AI. Tương lai thuộc về những người biết cách tận dụng sức mạnh của AI như một công cụ để nâng cao năng suất, giải quyết các vấn đề phức tạp hơn và giải phóng thời gian cho các công việc đòi hỏi sự sáng tạo và kết nối con người.'
      }
    ],
  },
];
