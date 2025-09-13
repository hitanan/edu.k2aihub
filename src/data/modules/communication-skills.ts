import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export const communicationSkillsLessons: BaseLessonData[] = [
  {
    id: 'effective-communication-fundamentals',
    title: 'Cơ Bản Giao Tiếp Hiệu Quả',
    description:
      'Nắm vững các nguyên tắc cơ bản của giao tiếp hiệu quả, từ ngôn ngữ cơ thể đến kỹ năng lắng nghe tích cực.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=kEf9qPmGvxw', // The Power of Effective Communication - TED
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu được các thành phần của quá trình giao tiếp',
      'Phát triển kỹ năng lắng nghe tích cực và đồng cảm',
      'Nắm vững giao tiếp phi ngôn ngữ và ngôn ngữ cơ thể',
      'Học cách điều chỉnh phong cách giao tiếp theo đối tượng',
    ],
    prerequisites: ['Không có yêu cầu tiên quyết', 'Sẵn sàng thực hành và nhận phản hồi'],
    exercises: [
      {
        title: 'Active Listening Practice',
        description: 'Thực hành kỹ năng lắng nghe tích cực qua role-playing exercises',
        difficulty: 'Cơ bản',
        materials: ['Scenario cards', 'Feedback forms', 'Recording equipment (optional)'],
        procedure: [
          'Chia thành cặp với một người nói và một người nghe',
          'Người nói chia sẻ một trải nghiệm cá nhân trong 3 phút',
          'Người nghe thực hành các kỹ thuật lắng nghe tích cực',
          'Người nghe tóm tắt lại những gì họ đã nghe',
          'Đổi vai và lặp lại quy trình',
          'Thảo luận nhóm về những thách thức và hiểu biết sâu sắc',
        ],
        expectedResults: 'Cải thiện đáng kể khả năng lắng nghe với sự đồng cảm và thấu hiểu',
        solution:
          'Tập trung vào việc diễn giải, đặt câu hỏi làm rõ và thể hiện sự quan tâm thực sự qua ngôn ngữ cơ thể',
      },
      {
        title: 'Elevator Pitch Challenge',
        description: 'Tạo và trình bày một bài giới thiệu thang máy hấp dẫn về bản thân hoặc một ý tưởng',
        difficulty: 'Trung bình',
        materials: ['Timer', 'Evaluation rubric', 'Video recording setup'],
        procedure: [
          'Brainstorm các điểm chính về điểm mạnh cá nhân hoặc ý tưởng',
          'Cấu trúc bài giới thiệu bằng phương pháp STAR (Tình huống, Nhiệm vụ, Hành động, Kết quả)',
          'Thực hành trình bày, chú ý đến giọng điệu và nhịp độ',
          'Trình bày trước nhóm trong đúng 60 giây',
          'Nhận phản hồi mang tính xây dựng',
          'Tinh chỉnh và trình bày lại',
        ],
        expectedResults: 'Một bài giới thiệu thang máy ngắn gọn, hấp dẫn có thể thích ứng với các bối cảnh khác nhau',
        solution: 'Sự cân bằng giữa câu chuyện cá nhân, đề xuất giá trị và lời kêu gọi hành động rõ ràng',
      },
    ],
    realWorldApplications: [
      'Phỏng vấn xin việc và các sự kiện kết nối nghề nghiệp',
      'Thuyết trình học thuật và các dự án nhóm',
      'Tương tác xã hội và xây dựng mối quan hệ',
      'Giao tiếp trực tuyến và quản lý sự hiện diện kỹ thuật số',
      'Dịch vụ khách hàng và giải quyết xung đột',
    ],
    caseStudies: [
      {
        title: 'Shark Tank Vietnam - Câu chuyện thành công khi thuyết trình',
        organization: 'Shark Tank Vietnam - Chương trình gọi vốn khởi nghiệp',
        problem:
          'Làm thế nào các nhà sáng lập khởi nghiệp có thể thuyết phục các nhà đầu tư dày dạn kinh nghiệm chỉ trong vài phút?',
        solution: 'Sự kết hợp của kể chuyện hấp dẫn, đề xuất giá trị rõ ràng, tài chính vững chắc và trình bày tự tin',
        impact: 'Nhiều công ty khởi nghiệp đã nhận được vốn và trở thành những cái tên quen thuộc sau khi xuất hiện',
        innovations: [
          'Cấu trúc bài thuyết trình dựa trên câu chuyện',
          'Kỹ thuật trình diễn trực quan',
          'Trình bày dữ liệu tài chính',
          'Hiểu biết tâm lý nhà đầu tư',
        ],
      },
    ],
    vietnamContext: {
      title: 'Nghệ thuật giao tiếp trong văn hóa Việt Nam',
      content: [
        'Văn hóa Việt Nam coi trọng sự khiêm tốn và giao tiếp gián tiếp. "Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau" là một phương châm quan trọng.',
        'Trong kinh doanh, việc xây dựng mối quan hệ cá nhân (quan hệ) trước khi bàn bạc công việc là rất phổ biến và cần thiết.',
        'Giao tiếp phi ngôn ngữ, như cách chào hỏi (cúi đầu nhẹ với người lớn tuổi) và duy trì khoảng cách phù hợp, đóng vai trò quan trọng trong việc thể hiện sự tôn trọng.',
        'Thế hệ trẻ Việt Nam (Gen Z) đang dần áp dụng phong cách giao tiếp trực diện và cởi mở hơn, đặc biệt trong môi trường làm việc quốc tế và trên mạng xã hội.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Lan Anh',
      title: 'Trưởng phòng Nhân sự',
      company: 'Tiki Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-lan-anh',
      quote:
        'Trong tuyển dụng, chúng tôi không chỉ tìm kiếm ứng viên có chuyên môn giỏi, mà còn tìm những người có khả năng giao tiếp và hòa nhập văn hóa tốt. Một ứng viên biết lắng nghe, trình bày ý tưởng rõ ràng và thể hiện sự tôn trọng luôn được đánh giá cao. Kỹ năng mềm chính là chìa khóa để đi đường dài.',
    },
    quizzes: [
      {
        question:
          'Trong văn hóa Việt Nam, yếu tố nào thường được coi trọng nhất khi bắt đầu một mối quan hệ kinh doanh?',
        options: [
          'Đi thẳng vào vấn đề chính',
          'Ký hợp đồng ngay lập tức',
          'Xây dựng mối quan hệ cá nhân và lòng tin',
          'Thảo luận về giá cả đầu tiên',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Văn hóa kinh doanh Việt Nam rất coi trọng việc xây dựng mối quan hệ (quan hệ) và lòng tin cậy lẫn nhau trước khi tiến tới các thỏa thuận chính thức. Các buổi gặp gỡ, ăn uống không chính thức thường là bước đệm quan trọng.',
      },
      {
        question: 'Lắng nghe chủ động (Active Listening) bao gồm những hành động nào sau đây?',
        options: [
          'Chỉ im lặng và nghe',
          'Ngắt lời để đưa ra ý kiến của mình',
          'Tập trung, diễn giải lại và đặt câu hỏi làm rõ',
          'Nhìn đi chỗ khác để thể hiện sự suy ngẫm',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Lắng nghe chủ động là một quá trình đòi hỏi sự tham gia tích cực, bao gồm việc tập trung hoàn toàn vào người nói, diễn giải lại những gì bạn hiểu để xác nhận, và đặt câu hỏi để làm rõ thông tin, thể hiện sự đồng cảm.',
      },
    ],
  },
  {
    id: 'digital-presentation-mastery',
    title: 'Thành Thạo Thuyết Trình Số',
    description:
      'Học cách tạo và trình bày các bài thuyết trình mạnh mẽ bằng công nghệ hiện đại và các công cụ kỹ thuật số.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=21LuaAjz9r0', // How to Give a Great Presentation - TED
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    objectives: [
      'Làm chủ các công cụ thuyết trình số (PowerPoint, Canva, Prezi)',
      'Áp dụng các nguyên tắc thiết kế trực quan cho các slide hiệu quả',
      'Học cách thu hút khán giả trong các bài thuyết trình ảo',
      'Phát triển phong cách và thương hiệu thuyết trình cá nhân',
    ],
    prerequisites: ['Hoàn thành "Cơ Bản Giao Tiếp Hiệu Quả"', 'Có kỹ năng máy tính cơ bản và truy cập internet'],
    exercises: [
      {
        title: 'Interactive Presentation Design',
        description:
          'Tạo một bài thuyết trình tương tác về một chủ đề liên quan đến Việt Nam bằng các công cụ kỹ thuật số tiên tiến',
        difficulty: 'Nâng cao',
        materials: ['Design software licenses', 'Topic research materials', 'Feedback collection tools'],
        procedure: [
          'Chọn một chủ đề phù hợp với sinh viên Việt Nam',
          'Nghiên cứu và thu thập dữ liệu và hình ảnh hấp dẫn',
          'Thiết kế slide bằng các tính năng nâng cao (hoạt ảnh, tương tác)',
          'Tích hợp các yếu tố đa phương tiện (video, âm thanh, cuộc thăm dò tương tác)',
          'Thực hành trình bày với tích hợp công nghệ',
          'Trình bày trước khán giả và thu thập phản hồi theo thời gian thực',
        ],
        expectedResults:
          'Một bài thuyết trình tương tác chất lượng chuyên nghiệp có thể gây ấn tượng với bất kỳ khán giả nào',
        solution:
          'Sự cân bằng giữa sự hấp dẫn về mặt hình ảnh, chiều sâu nội dung, sự tinh vi về kỹ thuật và sự tham gia của khán giả',
      },
    ],
    realWorldApplications: [
      'Thuyết trình nghiên cứu học thuật tại các hội nghị',
      'Thuyết trình kinh doanh và thuyết trình với khách hàng',
      'Tạo nội dung giáo dục cho các nền tảng trực tuyến',
      'Thuyết trình marketing và kể chuyện thương hiệu',
      'Vận động xã hội và các chiến dịch nâng cao nhận thức cộng đồng',
    ],
    caseStudies: [
      {
        title: 'VinUniversity - Chuyển đổi Giáo dục Số',
        organization: 'VinUniversity - Trường Đại học Tư thục Tiên phong tại Việt Nam',
        problem: 'Làm thế nào để triển khai hiệu quả các nền tảng học tập kỹ thuật số và phương pháp thuyết trình?',
        solution:
          'Các chương trình đào tạo toàn diện cho giảng viên, đầu tư vào cơ sở hạ tầng công nghệ và phương pháp thiết kế lấy sinh viên làm trung tâm',
        impact: 'Trở thành tổ chức hàng đầu trong đổi mới giáo dục kỹ thuật số với sự hài lòng cao của sinh viên',
        innovations: [
          'Hệ thống cung cấp bài giảng tương tác',
          'Môi trường học tập thực tế ảo',
          'Công cụ phản hồi bài thuyết trình do AI cung cấp',
          'Phương pháp thích ứng bài thuyết trình đa văn hóa',
        ],
      },
    ],
    vietnamContext: {
      title: 'Xu hướng thuyết trình số tại Việt Nam',
      content: [
        'Các startup công nghệ Việt Nam thường sử dụng các bài thuyết trình (pitch deck) sáng tạo, theo phong cách Silicon Valley để gọi vốn.',
        'Trong giáo dục, các trường đại học đang tích cực áp dụng các công cụ như MS Teams, Google Classroom kết hợp với các slide tương tác để tăng hiệu quả giảng dạy từ xa.',
        'Livestream bán hàng trên các nền tảng như Facebook, TikTok đã trở thành một hình thức thuyết trình sản phẩm cực kỳ phổ biến và hiệu quả, đòi hỏi kỹ năng trình bày lôi cuốn và tương tác tức thì.',
        'Các nhà thiết kế và marketer Việt Nam rất ưa chuộng Canva nhờ giao diện thân thiện, kho tài nguyên phong phú và khả năng cộng tác dễ dàng để tạo ra các ấn phẩm thuyết trình chuyên nghiệp.',
      ],
    },
    careerConnect: {
      name: 'Anh Phan Thanh Bình',
      title: 'Creative Director',
      company: 'Dentsu Creative Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=phan-thanh-binh',
      quote:
        'Trong ngành quảng cáo, một ý tưởng tuyệt vời sẽ trở nên vô nghĩa nếu bạn không thể "bán" nó cho khách hàng. Kỹ năng thuyết trình, đặc biệt là kể chuyện bằng hình ảnh, là vũ khí tối thượng. Chúng tôi dùng mọi công cụ, từ PowerPoint, Keynote đến các video motion graphic để biến ý tưởng thành những trải nghiệm không thể quên.',
    },
    quizzes: [
      {
        question: 'Kể chuyện bằng dữ liệu (Data Storytelling) hiệu quả nhất khi nào?',
        options: [
          'Hiển thị tất cả dữ liệu thô trên một slide',
          'Sử dụng biểu đồ phức tạp nhất có thể',
          'Biến dữ liệu thành một câu chuyện có ngữ cảnh, nhân vật và insight rõ ràng',
          'Chỉ trình bày các con số mà không có diễn giải',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Data Storytelling không chỉ là trình bày dữ liệu, mà là dệt nên một câu chuyện xung quanh nó. Một câu chuyện hay cần có ngữ cảnh (bối cảnh), nhân vật (dữ liệu), xung đột (vấn đề) và giải pháp (insight), giúp khán giả dễ dàng thấu hiểu và ghi nhớ.',
      },
      {
        question: 'Công cụ nào sau đây thường được dùng để tăng tương tác trong các buổi thuyết trình ảo?',
        options: ['Microsoft Word', 'Adobe Photoshop', 'Mentimeter hoặc Slido', 'Excel'],
        correctAnswerIndex: 2,
        explanation:
          'Mentimeter và Slido là các nền tảng phổ biến cho phép người thuyết trình tạo các cuộc thăm dò ý kiến (polls), hỏi đáp (Q&A), và các đám mây từ (word clouds) để thu hút sự tham gia và nhận phản hồi trực tiếp từ khán giả trong thời gian thực.',
      },
    ],
  },
  {
    id: 'cross-cultural-communication',
    title: 'Giao Tiếp Đa Văn Hóa',
    description: 'Phát triển kỹ năng giao tiếp hiệu quả trong môi trường đa văn hóa và quốc tế.',
    duration: '100 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=7JUsG-sc1xE', // Cross-Cultural Communication - Harvard Business Review
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu được các chiều văn hóa và tác động của chúng lên giao tiếp',
      'Phát triển trí tuệ văn hóa (CQ) và khả năng thích ứng',
      'Học cách vượt qua rào cản ngôn ngữ và những hiểu lầm',
      'Xây dựng mạng lưới và mối quan hệ quốc tế hiệu quả',
    ],
    prerequisites: ['Hoàn thành "Thành Thạo Thuyết Trình Số"', 'Có kinh nghiệm tương tác quốc tế (ưu tiên)'],
    exercises: [
      {
        title: 'International Business Simulation',
        description:
          'Mô phỏng một cuộc đàm phán kinh doanh quốc tế với những người tham gia từ các nền văn hóa khác nhau',
        difficulty: 'Nâng cao',
        materials: ['Cultural profile cards', 'Business scenario documents', 'Communication style guides'],
        procedure: [
          'Phân công vai trò văn hóa cho mỗi người tham gia',
          'Nghiên cứu các mẫu giao tiếp văn hóa được giao',
          'Chuẩn bị chiến lược đàm phán phù hợp với bối cảnh văn hóa',
          'Tiến hành mô phỏng cuộc họp kinh doanh đa ngôn ngữ',
          'Thảo luận về những thách thức văn hóa và những thích ứng thành công',
          'Phát triển kế hoạch hành động giao tiếp đa văn hóa cá nhân',
        ],
        expectedResults:
          'Hiểu biết sâu sắc về cách văn hóa tác động đến giao tiếp kinh doanh và các chiến lược thực tế để thành công',
        solution: 'Sự kết hợp của nghiên cứu văn hóa, sự đồng cảm, tính linh hoạt và sự thích ứng giao tiếp chiến lược',
      },
    ],
    realWorldApplications: [
      'Quan hệ đối tác và đàm phán kinh doanh quốc tế',
      'Các chương trình du học và giáo dục quốc tế',
      'Hợp tác làm việc từ xa toàn cầu',
      'Các chương trình trao đổi văn hóa và quan hệ ngoại giao',
      'Công việc của các tổ chức phi chính phủ quốc tế và các dự án nhân đạo',
    ],
    caseStudies: [
      {
        title: 'Samsung Vietnam - Thành công tại Nơi làm việc Đa văn hóa',
        organization: 'Samsung Vietnam - Trung tâm Sản xuất Công nghệ Lớn',
        problem:
          'Làm thế nào để quản lý giao tiếp hiệu quả giữa ban lãnh đạo Hàn Quốc, lực lượng lao động Việt Nam và các đối tác quốc tế?',
        solution:
          'Các chương trình đào tạo văn hóa toàn diện, hệ thống quản lý song ngữ và các giao thức giao tiếp hòa nhập',
        impact:
          'Trở thành một trong những khoản đầu tư nước ngoài thành công nhất tại Việt Nam với sự hài lòng và năng suất cao của nhân viên',
        innovations: [
          'Vị trí nhân viên liên lạc văn hóa',
          'Hệ thống giao tiếp đa ngôn ngữ',
          'Chương trình tích hợp lễ kỷ niệm văn hóa',
          'Mạng lưới cố vấn đa văn hóa',
        ],
      },
    ],
    vietnamContext: {
      title: 'Việt Nam trong Giao tiếp Toàn cầu',
      content: [
        'Với việc hội nhập kinh tế sâu rộng, các công ty Việt Nam ngày càng có nhiều nhân sự làm việc trong các đội nhóm đa quốc gia, đòi hỏi kỹ năng giao tiếp đa văn hóa cao.',
        'Nhiều bạn trẻ Việt Nam có cơ hội du học và làm việc tại nước ngoài, việc trang bị kiến thức về sốc văn hóa và các chiến lược thích ứng là cực kỳ quan trọng.',
        'Ngành du lịch là một điểm sáng, nơi giao tiếp đa văn hóa diễn ra hàng ngày. Hướng dẫn viên du lịch, nhân viên khách sạn cần thấu hiểu kỳ vọng của du khách từ nhiều nền văn hóa khác nhau.',
        'Các công ty FDI (đầu tư trực tiếp nước ngoài) tại Việt Nam như Samsung, Intel, LG tạo ra môi trường làm việc đa văn hóa, nơi nhân viên Việt Nam có cơ hội cọ xát và học hỏi phong cách làm việc quốc tế.',
      ],
    },
    careerConnect: {
      name: 'Ông Trần Quốc Khánh',
      title: 'Phó Chủ nhiệm Văn phòng Chính phủ, Trưởng đoàn đàm phán TPP/CPTPP',
      company: 'Chính phủ Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-quoc-khanh',
      quote:
        'Đàm phán các hiệp định thương mại tự do là một quá trình giao tiếp đa văn hóa phức tạp. Chúng tôi phải hiểu sâu sắc không chỉ lợi ích kinh tế mà cả văn hóa, lịch sử, và cách tư duy của từng đối tác. Sự kiên nhẫn, linh hoạt và tôn trọng sự khác biệt là chìa khóa để đi đến một thỏa thuận mà tất cả các bên cùng có lợi.',
    },
    quizzes: [
      {
        question:
          'Theo mô hình của Hofstede, một nền văn hóa có "Khoảng cách quyền lực" (Power Distance) cao có đặc điểm gì?',
        options: [
          'Mọi người đều bình đẳng',
          'Cấp dưới dễ dàng tranh luận với cấp trên',
          'Mọi người chấp nhận sự phân chia quyền lực không đồng đều và tôn trọng hệ thống cấp bậc',
          'Các quyết định được đưa ra dựa trên sự đồng thuận của tập thể',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Văn hóa có khoảng cách quyền lực cao (như nhiều nước châu Á) chấp nhận và kỳ vọng rằng quyền lực được phân bổ không đồng đều. Cấp dưới thường thể hiện sự tôn trọng và ít khi thách thức cấp trên một cách công khai.',
      },
      {
        question: 'Giao tiếp "high-context" (ngữ cảnh cao) là gì?',
        options: [
          'Thông điệp được truyền tải một cách trực tiếp và rõ ràng bằng lời nói',
          'Phần lớn thông điệp nằm trong ngữ cảnh, mối quan hệ và các yếu tố phi ngôn ngữ',
          'Chỉ sử dụng trong môi trường công nghệ cao',
          'Luôn luôn sử dụng ngôn ngữ trang trọng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong các nền văn hóa high-context (ví dụ: Nhật Bản, Việt Nam), thông điệp thường không được nói ra một cách trực tiếp. Người nghe cần phải dựa vào ngữ cảnh, mối quan hệ, và các tín hiệu phi ngôn ngữ để hiểu đầy đủ ý nghĩa. Ngược lại, văn hóa low-context (ví dụ: Mỹ, Đức) ưa chuộng giao tiếp trực tiếp và rõ ràng.',
      },
    ],
  },
];

export const communicationSkillsModuleData: ModuleData = {
  id: K2Module.CommunicationSkills,
  title: 'Kỹ Năng Giao Tiếp và Thuyết Trình',
  subtitle: 'Phát triển kỹ năng giao tiếp hiệu quả trong thời đại số',
  description:
    'Khóa học comprehensive về kỹ năng giao tiếp và thuyết trình, từ active listening đến digital presentation mastery và cross-cultural communication.',
  category: 'Kỹ năng thiết yếu',
  icon: '🗣️',
  color: 'from-blue-600 to-cyan-600',
  level: 'Trung bình',
  duration: '9-11 giờ',
  features: [
    'Effective communication fundamentals',
    'Digital presentation tools mastery',
    'Cross-cultural communication skills',
    'Public speaking confidence building',
  ],
  prerequisites: ['Không có yêu cầu tiên quyết cụ thể', 'Sẵn sàng practice speaking và receive feedback'],
  objectives: [
    'Nắm vững các nguyên tắc giao tiếp hiệu quả trong môi trường cá nhân và công việc.',
    'Thành thạo các công cụ thuyết trình số để tạo ra các bài trình bày ấn tượng.',
    'Phát triển trí tuệ văn hóa để giao tiếp thành công trong môi trường quốc tế.',
    'Xây dựng sự tự tin khi nói trước công chúng và trình bày ý tưởng.',
  ],
  careerOutcomes: ['Chuyên gia truyền thông', 'Quản lý dự án', 'Nhà lãnh đạo nhóm', 'Chuyên viên quan hệ công chúng'],
  industryApplications: [
    'Tất cả các ngành nghề',
    'Kinh doanh và Quản lý',
    'Giáo dục và Đào tạo',
    'Marketing và Bán hàng',
  ],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'Cao',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.ProfessionalSkills, K2Module.Leadership],
  lessons: communicationSkillsLessons,
};
