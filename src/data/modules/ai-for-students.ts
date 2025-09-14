import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

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
        question: 'Thông tin từ AI có luôn luôn chính xác không?',
        answer:
          'Không. Các mô hình AI có thể "tự tin" đưa ra thông tin sai, hiện tượng này gọi là "ảo giác" (hallucination). Vì vậy, kỹ năng quan trọng nhất khi dùng AI là tư duy phản biện. Hãy luôn kiểm tra lại các thông tin quan trọng từ những nguồn đáng tin cậy khác.',
      },
      {
        question: 'Làm thế nào để đặt câu hỏi (prompt) cho AI để có câu trả lời tốt nhất?',
        answer:
          'Hãy cụ thể và cung cấp nhiều ngữ cảnh. Thay vì hỏi "Nước Pháp thế nào?", hãy hỏi "Hãy cho tôi biết 5 địa điểm du lịch nổi tiếng nhất ở Paris, Pháp dành cho một người yêu thích nghệ thuật và lịch sử". Cung cấp vai trò (ví dụ: "Hãy đóng vai một giáo viên lịch sử"), định dạng (ví dụ: "trình bày dưới dạng gạch đầu dòng"), và mục tiêu rõ ràng sẽ giúp AI cho ra kết quả tốt hơn nhiều.',
      },
    ],
  },
  {
    id: 'ethical-use-of-ai',
    title: 'Sử dụng AI có trách nhiệm và đạo đức',
    description:
      'Bài học quan trọng về những vấn đề đạo đức khi sử dụng AI, bao gồm thiên vị trong thuật toán, quyền riêng tư dữ liệu, và trách nhiệm của người dùng.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=yNbGY3s3xqU',
    imageUrl: 'https://i.ytimg.com/vi/yNbGY3s3xqU/hqdefault.jpg',
    objectives: [
      'Nhận biết được các vấn đề đạo đức tiềm ẩn trong các hệ thống AI.',
      'Hiểu về tầm quan trọng của dữ liệu, quyền riêng tư và sự thiên vị (bias) trong AI.',
      'Thảo luận về trách nhiệm của người dùng và người tạo ra AI trong việc đảm bảo sử dụng AI một cách công bằng và an toàn.',
      'Phân biệt giữa việc sử dụng AI để hỗ trợ và việc lạm dụng AI (ví dụ: đạo văn).',
    ],
    prerequisites: ['Hoàn thành các bài học trước'],
    relatedGames: [
      {
        id: 'ai-ethics-simulator',
        name: 'Ethical AI Simulator',
        description: 'Face complex ethical dilemmas and make decisions on how to develop and deploy AI responsibly.',
      },
    ],
    exercises: [
      {
        title: 'Phân tích tình huống: AI trong tuyển dụng',
        description:
          'Cho một tình huống giả định về một công ty sử dụng AI để lọc hồ sơ ứng viên, hãy phân tích các vấn đề đạo đức có thể phát sinh.',
        difficulty: 'Nâng cao',
        procedure: [
          'Đọc tình huống: "Một công ty công nghệ lớn sử dụng AI để quét hàng nghìn CV. AI được huấn luyện dựa trên dữ liệu các nhân viên thành công trước đây của công ty, phần lớn là nam giới tốt nghiệp từ các trường đại học hàng đầu."',
          'Thảo luận nhóm về các câu hỏi: AI này có thể có những thiên vị nào? Điều gì sẽ xảy ra với các ứng viên nữ hoặc ứng viên từ các trường ít danh tiếng hơn? Ai là người chịu trách nhiệm nếu AI đưa ra quyết định không công bằng?',
          'Đề xuất các giải pháp để giảm thiểu thiên bias trong hệ thống AI này.',
        ],
        expectedResults:
          'Học sinh hiểu được khái niệm "thiên vị thuật toán" (algorithmic bias) và nhận thức được tầm quan trọng của việc xây dựng và sử dụng AI một cách công bằng.',
      },
    ],
    realWorldApplications: [
      'Hệ thống nhận dạng khuôn mặt và các lo ngại về quyền riêng tư.',
      'AI trong tuyển dụng và nguy cơ phân biệt đối xử.',
      'Thuật toán gợi ý nội dung trên mạng xã hội và vấn đề "bong bóng bộ lọc".',
      'Deepfake và các vấn đề về thông tin sai lệch.',
    ],
    vietnamContext: {
      title: 'Luật pháp và Đạo đức AI tại Việt Nam',
      content: [
        'Việt Nam đang trong quá trình xây dựng hành lang pháp lý cho việc phát triển và ứng dụng AI, bao gồm các quy định về bảo vệ dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP.',
        'Các tổ chức và doanh nghiệp Việt Nam ngày càng quan tâm đến việc xây dựng các bộ quy tắc đạo đức cho AI để đảm bảo sự phát triển bền vững và có trách nhiệm.',
        'Vấn đề bản quyền và sở hữu trí tuệ đối với các sản phẩm do AI tạo ra là một chủ đề đang được thảo luận sôi nổi trong cộng đồng sáng tạo và pháp lý tại Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Luật sư Trương Anh Tú',
      title: 'Chuyên gia Luật Công nghệ',
      company: 'Đoàn Luật sư TP. Hà Nội',
      imageUrl: 'https://i.pravatar.cc/150?u=truong-anh-tu',
      quote:
        'Pháp luật luôn đi sau công nghệ. Vì vậy, ý thức và trách nhiệm đạo đức của mỗi người dùng và nhà phát triển AI chính là hàng rào bảo vệ quan trọng nhất để công nghệ phục vụ con người một cách tốt đẹp.',
    },
    quizzes: [
      {
        question: 'Thiên vị trong AI (AI Bias) có nghĩa là gì?',
        options: [
          'AI luôn đưa ra quyết định đúng đắn',
          'Hệ thống AI đưa ra các kết quả không công bằng một cách có hệ thống do dữ liệu huấn luyện hoặc thiết kế thuật toán có vấn đề',
          'AI có sở thích riêng',
          'AI hoạt động chậm hơn bình thường',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thiên vị trong AI xảy ra khi thuật toán tạo ra các kết quả bất lợi cho một nhóm người nhất định so với nhóm khác, thường là do dữ liệu dùng để huấn luyện nó đã có sẵn sự thiên vị.',
      },
      {
        question: 'Khi sử dụng AI để viết bài luận, hành động nào sau đây được coi là đạo văn?',
        options: [
          'Sử dụng AI để tìm ý tưởng và lập dàn ý',
          'Sử dụng AI để kiểm tra lỗi ngữ pháp và chính tả',
          'Sao chép nguyên văn một đoạn văn do AI tạo ra và nộp bài mà không ghi nguồn',
          'Sử dụng AI để dịch một câu sang ngôn ngữ khác',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Sử dụng AI để hỗ trợ học tập là rất tốt, nhưng việc sao chép nguyên văn sản phẩm của AI và nhận đó là của mình được coi là đạo văn, một hành vi không trung thực trong học thuật.',
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
    ],
  },
];
