import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface ProfessionalSoftSkillsLessonType extends BaseLessonData {
  category: string;
  practicalExercises: string[];
}

export const professionalSoftSkillsLessons: ProfessionalSoftSkillsLessonType[] = [
  {
    id: 'presentation-skills-mastery',
    title: 'Thành Thạo Kỹ Năng Thuyết Trình',
    description:
      'Học cách thuyết trình chuyên nghiệp và tự tin trong môi trường doanh nghiệp Việt Nam. Từ chuẩn bị nội dung đến xử lý tương tác với khán giả.',
    duration: '150 phút',
    difficulty: 'Cơ bản',
    category: 'Giao tiếp',
    practicalExercises: [
      'Thực hành thuyết trình 5 phút trước camera và tự đánh giá.',
      'Phân tích và đưa ra góp ý xây dựng cho bài thuyết trình của đồng nghiệp.',
      'Tham gia phiên xử lý tình huống khó trong phần Hỏi & Đáp (Q&A session).',
      'Thiết kế một bộ slide hoàn chỉnh cho một dự án thực tế bạn đang tham gia.',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Unzc731iCUY',
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=600&fit=crop',
    objectives: [
      'Xây dựng cấu trúc thuyết trình logic và thuyết phục',
      'Thiết kế slide hiệu quả và hấp dẫn',
      'Xử lý câu hỏi khó và tình huống bất ngờ',
      'Áp dụng kỹ thuật giao tiếp phi ngôn ngữ',
      'Thuyết trình tự tin trong bối cảnh văn hóa Việt Nam',
    ],
    prerequisites: ['Khả năng giao tiếp cơ bản bằng tiếng Việt', 'Hiểu biết về môi trường doanh nghiệp Việt Nam'],
    vietnamContext: {
      title: 'Bối Cảnh Thuyết Trình tại Việt Nam',
      content: [
        'Văn hóa tôn trọng cấp trên và người lớn tuổi, cần có cách xưng hô và thái độ phù hợp.',
        "Cách xử lý câu hỏi 'khó' một cách khéo léo để không làm mất lòng người hỏi.",
        'Sử dụng ngôn ngữ cơ thể tự tin nhưng không quá khoa trương, phù hợp với văn hóa Á Đông.',
        'Tầm quan trọng của việc xây dựng mối quan hệ (networking) trước và sau buổi thuyết trình.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Lan Hương',
      title: 'Giám đốc Truyền thông',
      company: 'VNG Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-lan-huong',
      quote:
        'Tại Việt Nam, một bài thuyết trình xuất sắc không chỉ truyền tải thông tin mà còn phải kết nối cảm xúc và thể hiện sự tôn trọng. Đó là chìa khóa để thuyết phục và tạo ảnh hưởng.',
    },
    exercises: [
      {
        title: 'Xây Dựng Cấu Trúc Thuyết Trình STAR',
        description: 'Sử dụng phương pháp STAR (Situation, Task, Action, Result) để tạo bài thuyết trình thuyết phục',
        difficulty: 'Cơ bản',
        materials: ['PowerPoint/Google Slides', 'Outline template', 'Timer'],
        procedure: [
          'Chọn chủ đề thuyết trình liên quan đến công việc',
          'Xác định Situation và Task rõ ràng',
          'Phát triển Action steps logic',
          'Chuẩn bị Result với metrics cụ thể',
          'Thực hành thuyết trình 10 phút',
          'Ghi lại và tự đánh giá',
        ],
        expectedResults: 'Bài thuyết trình có cấu trúc rõ ràng, thuyết phục với thời lượng 8-12 phút',
        solution: 'Framework STAR giúp tạo luồng logic tự nhiên, dễ theo dõi và ghi nhớ cho người nghe',
      },
      {
        title: 'Thiết Kế Slide Theo Nguyên Tắc 6x6',
        description: 'Áp dụng quy tắc 6x6 và visual storytelling để tạo slide hiệu quả',
        difficulty: 'Trung bình',
        materials: ['Canva/PowerPoint', 'Stock images', 'Font chữ chuyên nghiệp'],
        procedure: [
          'Chọn template phù hợp với chủ đề',
          'Áp dụng quy tắc 6 bullet points, mỗi point tối đa 6 từ',
          'Thêm visual elements hỗ trợ nội dung',
          'Đảm bảo contrast và readability',
          'Test trên nhiều kích thước màn hình khác nhau',
        ],
        expectedResults: 'Bộ slide chuyên nghiệp, dễ đọc và truyền tải thông tin hiệu quả',
      },
      {
        title: 'Thực hành thực tế',
        description: 'Áp dụng kiến thức đã học vào các bài tập thực tế để củng cố kỹ năng.',
        difficulty: 'Cơ bản',
        procedure: [
          'Thực hành thuyết trình 5 phút trước camera và tự đánh giá.',
          'Phân tích và đưa ra góp ý xây dựng cho bài thuyết trình của đồng nghiệp.',
          'Tham gia phiên xử lý tình huống khó trong phần Hỏi & Đáp (Q&A session).',
          'Thiết kế một bộ slide hoàn chỉnh cho một dự án thực tế bạn đang tham gia.',
        ],
      },
    ],
    quizzes: [
      {
        question: 'Khi thuyết trình trước ban lãnh đạo ở Việt Nam, yếu tố nào sau đây cần được ưu tiên?',
        options: [
          'Sử dụng nhiều thuật ngữ chuyên ngành phức tạp để thể hiện chuyên môn',
          'Thể hiện sự tôn trọng, trình bày logic, và tập trung vào kết quả',
          'Nói nhanh để tiết kiệm thời gian cho mọi người',
          'Chỉ tập trung vào dữ liệu, không cần kể chuyện',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong văn hóa Việt Nam, việc thể hiện sự tôn trọng, trình bày một cách logic, và tập trung vào kết quả (đặc biệt là lợi ích cho công ty) là những yếu tố quan trọng nhất để thuyết phục ban lãnh đạo.',
      },
    ],
    realWorldApplications: [
      'Thuyết trình dự án cho ban lãnh đạo',
      'Trình bày kết quả kinh doanh hàng quý',
      'Pitch ý tưởng cho khách hàng và đối tác',
      'Đào tạo và giới thiệu nhân viên mới',
      'Thuyết trình tại hội thảo và sự kiện ngành',
    ],
    caseStudies: [
      {
        title: 'VinGroup - Thuyết Trình Chiến Lược Chuyển Đổi Số',
        organization: 'VinGroup',
        problem: 'Cần thuyết trình về lộ trình chuyển đổi số cho hơn 100 giám đốc cấp cao',
        solution: 'Sử dụng kể chuyện kết hợp với trực quan hóa dữ liệu, tích hợp các case study của Việt Nam',
        impact: 'Phê duyệt 100% kế hoạch 5 năm, ngân sách 2 tỷ USD',
        innovations: ['Demo dashboard tương tác', 'Nền tảng Hỏi & Đáp thời gian thực', 'Hỗ trợ đa ngôn ngữ'],
      },
    ],
    resources: [
      {
        title: 'TED Talks - Cấu trúc bí mật của những bài nói chuyện tuyệt vời',
        url: 'https://www.ted.com/talks/nancy_duarte_the_secret_structure_of_great_talks',
        type: 'Video Tutorial',
      },
      {
        title: 'Hướng dẫn Thực hành Tốt nhất về Thiết kế Slide',
        url: 'https://blog.hubspot.com/marketing/easy-powerpoint-design-tricks-ht',
        type: 'Documentation',
      },
    ],
  },
  {
    id: 'professional-email-business-writing',
    title: 'Viết Email Chuyên Nghiệp & Văn Bản Kinh Doanh',
    description:
      'Thành thạo kỹ năng viết email và văn bản kinh doanh hiệu quả, phù hợp với chuẩn quốc tế và văn hóa Việt Nam.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    category: 'Giao tiếp',
    practicalExercises: [
      'Viết lại 10 email thực tế để cải thiện văn phong và cấu trúc.',
      'Tham gia các kịch bản nhập vai đàm phán qua email.',
      'Xây dựng thư viện mẫu cho các tình huống thường gặp (ví dụ: yêu cầu thông tin, cảm ơn, từ chối khéo).',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=JZxrxoL9hv8',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=600&fit=crop',
    objectives: [
      'Viết email chuyên nghiệp với cấu trúc rõ ràng',
      'Sử dụng giọng văn và ngôn ngữ phù hợp với từng đối tượng',
      'Tạo dòng tiêu đề hiệu quả và gây chú ý',
      'Xử lý email khó và tình huống phức tạp',
      'Áp dụng quy tắc ứng xử email trong môi trường đa văn hóa',
    ],
    prerequisites: ['Tiếng Anh cơ bản hoặc trung cấp', 'Hiểu biết về môi trường công sở'],
    vietnamContext: {
      title: 'Nghệ Thuật Viết Email ở Việt Nam',
      content: [
        'Cách xưng hô (Anh/Chị, Em) và sử dụng kính ngữ phù hợp với cấp bậc và mối quan hệ.',
        'Sự cân bằng giữa việc đi thẳng vào vấn đề và phần chào hỏi, thăm hỏi ban đầu để giữ quan hệ.',
        'Tầm quan trọng của việc xác nhận đã nhận được email, thể hiện sự chuyên nghiệp.',
        'Xử lý các yêu cầu nhạy cảm hoặc từ chối qua email một cách khéo léo để "giữ thể diện" cho các bên.',
      ],
    },
    careerConnect: {
      name: 'Phạm Nhật Vượng',
      title: 'Chủ tịch Tập đoàn Vingroup',
      company: 'Vingroup',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-nhat-vuong',
      quote:
        'Trong kinh doanh, mọi chi tiết đều quan trọng. Một email chuyên nghiệp thể hiện tư duy rõ ràng và sự tôn trọng đối tác, đó là nền tảng của mọi thương vụ lớn.',
    },
    exercises: [
      {
        title: 'Xây dựng Hệ thống Mẫu Email cho Kinh doanh & Tiếp thị',
        description: 'Xây dựng bộ mẫu email cho các tình huống kinh doanh thường gặp',
        difficulty: 'Trung bình',
        materials: ['Mẫu email', 'Hệ thống CRM', 'Công cụ A/B testing'],
        procedure: [
          'Phân loại các loại email theo mục đích (bán hàng, hỗ trợ, theo dõi)',
          'Tạo mẫu với các trường cá nhân hóa',
          'Kiểm tra các dòng tiêu đề và lời kêu gọi hành động',
          'Đo lường tỷ lệ mở và tỷ lệ phản hồi',
          'Tối ưu hóa dựa trên dữ liệu hiệu suất',
        ],
        expectedResults: 'Bộ mẫu email với tỷ lệ mở >25% và tỷ lệ phản hồi >5%',
      },
      {
        title: 'Bài tập thực hành viết email',
        description: 'Cải thiện kỹ năng viết email thông qua các bài tập thực tế.',
        difficulty: 'Cơ bản',
        procedure: [
          'Viết lại 10 email thực tế để cải thiện văn phong và cấu trúc.',
          'Tham gia các kịch bản nhập vai đàm phán qua email.',
          'Xây dựng thư viện mẫu cho các tình huống thường gặp (ví dụ: yêu cầu thông tin, cảm ơn, từ chối khéo).',
        ],
      },
    ],
    quizzes: [
      {
        question:
          'Khi viết email cho một đối tác lớn tuổi người Việt Nam mà bạn chưa gặp, cách xưng hô nào là phù hợp và an toàn nhất?',
        options: [
          'Dùng tên (Hi Nam,)',
          'Dùng chức danh (Dear Director,)',
          'Dùng "Anh/Chị" kèm theo tên (Kính gửi Anh Nam,)',
          'Không cần xưng hô, vào thẳng vấn đề',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Sử dụng "Kính gửi" cùng với "Anh/Chị" và tên thể hiện sự trang trọng, tôn trọng, và phù hợp với văn hóa giao tiếp kinh doanh tại Việt Nam, đặc biệt với người lớn tuổi hoặc có chức vụ.',
      },
    ],
    realWorldApplications: [
      'Giao tiếp và quản lý quan hệ khách hàng',
      'Hợp tác nội bộ và cập nhật dự án',
      'Đàm phán với nhà cung cấp và thảo luận hợp đồng',
      'Giao tiếp kinh doanh đa văn hóa',
      'Truyền thông khủng hoảng và kiểm soát thiệt hại',
    ],
  },
  {
    id: 'leadership-team-management',
    title: 'Lãnh Đạo & Quản Lý Đội Nhóm',
    description:
      'Phát triển kỹ năng lãnh đạo hiệu quả và quản lý đội nhóm đa thế hệ trong bối cảnh doanh nghiệp Việt Nam hiện đại.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    category: 'Lãnh đạo',
    practicalExercises: [
      'Thực hiện bài đánh giá lãnh đạo và tự phản ánh về điểm mạnh, điểm yếu của bản thân.',
      'Tham gia mô phỏng phản hồi 360 độ để hiểu cách người khác nhìn nhận phong cách lãnh đạo của bạn.',
      'Thực hành các cuộc trò chuyện khó (ví dụ: đưa ra phản hồi tiêu cực, giải quyết xung đột) trong một môi trường an toàn.',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=GbfrchiAmRE',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu các phong cách lãnh đạo và khi nào áp dụng',
      'Xây dựng và thúc đẩy đội ngũ hiệu suất cao',
      'Giải quyết xung đột và tạo điều kiện hợp tác',
      'Huấn luyện và phát triển nhân viên',
      'Thích ứng phong cách lãnh đạo cho lực lượng lao động Gen Z',
    ],
    prerequisites: ['Kinh nghiệm làm việc nhóm tối thiểu 2 năm', 'Hiểu biết về động lực của tổ chức'],
    vietnamContext: {
      title: 'Lãnh Đạo trong Doanh Nghiệp Việt',
      content: [
        'Sự chuyển dịch từ mô hình lãnh đạo gia trưởng, phân cấp sang mô hình trao quyền, linh hoạt hơn.',
        'Thách thức trong việc quản lý đội ngũ đa thế hệ (Gen X, Y, Z) với những kỳ vọng khác nhau.',
        'Ảnh hưởng của Nho giáo (đề cao sự tôn trọng, lòng trung thành) vẫn còn trong văn hóa lãnh đạo.',
        "Tầm quan trọng của việc xây dựng 'tình' bên cạnh 'lý' - lãnh đạo không chỉ bằng quy định mà còn bằng sự quan tâm, thấu hiểu.",
      ],
    },
    careerConnect: {
      name: 'Mai Kiều Liên',
      title: 'Tổng Giám đốc Vinamilk',
      company: 'Vinamilk',
      imageUrl: 'https://i.pravatar.cc/150?u=mai-kieu-lien',
      quote:
        'Lãnh đạo không phải là ra lệnh, mà là truyền cảm hứng và tạo điều kiện để mỗi cá nhân phát huy hết tiềm năng của mình. Ở Vinamilk, chúng tôi xây dựng một đội ngũ bằng sự tin tưởng và trao quyền.',
    },
    exercises: [
      {
        title: 'Đánh giá Lãnh đạo Tình huống',
        description: 'Phân tích và áp dụng phong cách lãnh đạo phù hợp cho từng tình huống cụ thể',
        difficulty: 'Nâng cao',
        materials: ['Công cụ đánh giá lãnh đạo', 'Các kịch bản case study', 'Mẫu phản hồi'],
        procedure: [
          'Hoàn thành bài đánh giá phong cách lãnh đạo',
          'Phân tích mức độ sẵn sàng của các thành viên trong nhóm',
          'Đối chiếu phương pháp lãnh đạo với mức độ phát triển',
          'Thực hành các kịch bản khác nhau qua nhập vai',
          'Thu thập phản hồi và điều chỉnh phương pháp',
        ],
        expectedResults: 'Cải thiện các chỉ số hiệu suất của nhóm và điểm hài lòng của nhân viên',
      },
      {
        title: 'Bài tập thực hành kỹ năng lãnh đạo',
        description: 'Củng cố kỹ năng lãnh đạo thông qua các bài tập thực hành.',
        difficulty: 'Trung bình',
        procedure: [
          'Thực hiện bài đánh giá lãnh đạo và tự phản ánh về điểm mạnh, điểm yếu của bản thân.',
          'Tham gia mô phỏng phản hồi 360 độ để hiểu cách người khác nhìn nhận phong cách lãnh đạo của bạn.',
          'Thực hành các cuộc trò chuyện khó (ví dụ: đưa ra phản hồi tiêu cực, giải quyết xung đột) trong một môi trường an toàn.',
        ],
      },
    ],
    quizzes: [
      {
        question: 'Phong cách lãnh đạo nào thường hiệu quả với nhân viên Gen Z tại Việt Nam?',
        options: [
          'Lãnh đạo chỉ đạo, ra lệnh (Autocratic)',
          'Lãnh đạo phục vụ, hỗ trợ và trao quyền (Servant Leadership)',
          'Lãnh đạo bỏ mặc, không can thiệp (Laissez-faire)',
          'Lãnh đạo theo giao dịch, thưởng phạt (Transactional)',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Gen Z đánh giá cao sự tự chủ, phát triển cá nhân và ý nghĩa công việc. Phong cách lãnh đạo phục vụ, tập trung vào việc hỗ trợ, coaching và tạo môi trường để họ phát triển thường mang lại hiệu quả cao nhất.',
      },
    ],
    realWorldApplications: [
      'Dẫn dắt các nhóm dự án đa chức năng',
      'Quản lý lực lượng lao động từ xa và kết hợp',
      'Các sáng kiến quản lý thay đổi',
      'Đánh giá hiệu suất và phát triển sự nghiệp',
      'Xây dựng văn hóa đội nhóm có độ tin cậy cao',
    ],
  },
  {
    id: 'negotiation-persuasion-mastery',
    title: 'Thành Thạo Đàm Phán & Thuyết Phục',
    description:
      'Nắm vững nghệ thuật đàm phán và kỹ thuật thuyết phục trong kinh doanh, từ tâm lý học cơ bản đến các chiến lược nâng cao.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    category: 'Đàm phán',
    practicalExercises: [
      'Tham gia các cuộc đàm phán giả lập với các kịch bản kinh doanh thực tế.',
      'Thực hiện bài đánh giá trí tuệ văn hóa để hiểu rõ hơn về các sắc thái trong đàm phán đa văn hóa.',
      'Thực hành các chiến thuật gây ảnh hưởng trong các buổi thực hành có hướng dẫn.',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=VdgBjYJ0sUo',
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu tâm lý đằng sau quá trình ra quyết định',
      'Áp dụng các kỹ thuật đàm phán có nguyên tắc',
      'Xây dựng các giải pháp cùng thắng trong xung đột',
      'Gây ảnh hưởng mà không cần quyền hạn',
      'Xử lý các cuộc đàm phán có tính chất quyết định cao với sự nhạy bén về văn hóa',
    ],
    prerequisites: [
      'Kinh nghiệm phát triển kinh doanh hoặc bán hàng',
      'Kỹ năng giao tiếp tốt',
      'Trí tuệ cảm xúc cơ bản',
    ],
    vietnamContext: {
      title: 'Đàm Phán trên Bàn Nhậu và Ngoài Phòng Họp',
      content: [
        'Tầm quan trọng của việc xây dựng mối quan hệ cá nhân (quan hệ) trước khi đi vào đàm phán chính thức.',
        "Văn hóa 'bàn nhậu' là một phần không thể thiếu trong nhiều cuộc đàm phán kinh doanh quan trọng.",
        "Nghệ thuật 'giữ thể diện' cho đối tác, tránh việc từ chối thẳng thừng hoặc dồn đối phương vào thế bí.",
        'Tư duy dài hạn: người Việt thường ưu tiên mối quan hệ bền vững hơn là một lợi ích ngắn hạn.',
      ],
    },
    careerConnect: {
      name: 'Trương Gia Bình',
      title: 'Chủ tịch HĐQT FPT',
      company: 'FPT Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=truong-gia-binh',
      quote:
        'Đàm phán không chỉ là một cuộc đấu trí, mà là một quá trình xây dựng lòng tin. Ở FPT, chúng tôi luôn tìm kiếm những giải pháp mà cả hai bên cùng thắng, vì đối tác hôm nay là bạn bè ngày mai.',
    },
    exercises: [
      {
        title: 'Đàm phán với nhiều bên liên quan',
        description: 'Mô phỏng một cuộc đàm phán phức tạp với nhiều bên liên quan có lợi ích khác nhau',
        difficulty: 'Nâng cao',
        materials: ['Bản tóm tắt đàm phán', 'Thẻ nhập vai', 'Bảng điểm'],
        procedure: [
          'Nghiên cứu vị trí và lợi ích cơ bản của tất cả các bên',
          'Phát triển BATNA (Giải pháp thay thế tốt nhất cho một thỏa thuận được đàm phán)',
          'Xác định các cơ hội tạo ra giá trị tiềm năng',
          'Thực hiện đàm phán với các ràng buộc về thời gian',
          'Phân tích kết quả và bài học kinh nghiệm',
        ],
        expectedResults: 'Thỏa thuận thành công nhiều bên cùng có lợi với điểm hài lòng >80% từ tất cả các bên',
      },
      {
        title: 'Bài tập thực hành đàm phán',
        description: 'Rèn luyện kỹ năng đàm phán và thuyết phục qua các bài tập thực tế.',
        difficulty: 'Nâng cao',
        procedure: [
          'Tham gia các cuộc đàm phán giả lập với các kịch bản kinh doanh thực tế.',
          'Thực hiện bài đánh giá trí tuệ văn hóa để hiểu rõ hơn về các sắc thái trong đàm phán đa văn hóa.',
          'Thực hành các chiến thuật gây ảnh hưởng trong các buổi thực hành có hướng dẫn.',
        ],
      },
    ],
    quizzes: [
      {
        question:
          'Trong đàm phán với đối tác Việt Nam, BATNA (Best Alternative to a Negotiated Agreement) của bạn nên được sử dụng như thế nào?',
        options: [
          'Công khai ngay từ đầu để thể hiện sức mạnh',
          'Giữ bí mật tuyệt đối và không bao giờ tiết lộ',
          'Sử dụng một cách khéo léo như một phương án dự phòng để tăng sự tự tin, và chỉ hé lộ khi cần thiết một cách tinh tế',
          'Không cần chuẩn bị BATNA vì mối quan hệ là quan trọng nhất',
        ],
        correctAnswerIndex: 2,
        explanation:
          'BATNA là nguồn sức mạnh của bạn, nhưng việc phô trương nó có thể bị coi là hung hăng và làm hỏng mối quan hệ. Hãy sử dụng nó một cách chiến lược để định hướng cuộc đàm phán mà không làm mất lòng đối tác.',
      },
    ],
    realWorldApplications: [
      'Đàm phán lương và thăng tiến sự nghiệp',
      'Thảo luận điều khoản hợp đồng và giá cả với khách hàng',
      'Quan hệ với nhà cung cấp và tối ưu hóa chi phí',
      'Xung đột phân bổ nguồn lực nội bộ',
      'Quan hệ đối tác kinh doanh quốc tế',
    ],
  },
  {
    id: 'time-management-productivity-optimization',
    title: 'Quản Lý Thời Gian & Tối Ưu Hóa Hiệu Suất',
    description:
      'Làm chủ thời gian và tối ưu hóa năng suất với các công cụ và kỹ thuật hiện đại, đặc biệt trong kỷ nguyên làm việc tại nhà.',
    duration: '140 phút',
    difficulty: 'Cơ bản',
    category: 'Năng suất',
    practicalExercises: [
      'Thực hiện kiểm toán thời gian cá nhân trong 1 tuần để xác định các hoạt động lãng phí thời gian.',
      'Tham gia thử thách cai nghiện kỹ thuật số (digital detox) trong một khoảng thời gian nhất định.',
      'Thiết lập và tùy chỉnh các công cụ năng suất (ví dụ: Trello, Asana, Notion) để phù hợp với quy trình làm việc của bạn.',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=oTugjssqOT0',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop',
    objectives: [
      'Thực hiện các khuôn khổ quản lý thời gian đã được chứng minh',
      'Loại bỏ các yếu tố gây xao lãng và lãng phí thời gian',
      'Tối ưu hóa quy trình làm việc với các công cụ kỹ thuật số',
      'Cân bằng giữa công việc và cuộc sống',
      'Xây dựng thói quen năng suất bền vững',
    ],
    prerequisites: ['Kỹ năng máy tính cơ bản', 'Sẵn sàng thay đổi thói quen hiện có'],
    vietnamContext: {
      title: 'Năng Suất Kiểu Việt: Đối Phó Giờ Cao Su và Văn Hóa Nể Nang',
      content: [
        "Hiện tượng 'giờ cao su' trong các cuộc hẹn và cách lên kế hoạch linh hoạt.",
        "Văn hóa 'cả nể' có thể khiến việc từ chối các yêu cầu đột xuất trở nên khó khăn, ảnh hưởng đến kế hoạch.",
        'Tối ưu hóa thời gian di chuyển bằng xe máy trong điều kiện giao thông phức tạp.',
        'Sự gián đoạn từ các ứng dụng chat (Zalo, Messenger) và áp lực phải trả lời ngay lập tức.',
      ],
    },
    careerConnect: {
      name: 'Thái Vân Linh',
      title: 'Nhà đầu tư, Cố vấn cấp cao',
      company: 'TVL Group',
      imageUrl: 'https://i.pravatar.cc/150?u=thai-van-linh',
      quote:
        'Thời gian là tài sản không thể tái tạo. Người thành công không có nhiều thời gian hơn người khác, họ chỉ quản lý nó một cách hiệu quả hơn. Hãy làm chủ thời gian của bạn, đừng để nó làm chủ bạn.',
    },
    exercises: [
      {
        title: 'Thiết lập Hệ thống Năng suất Cá nhân',
        description: 'Xây dựng hệ thống quản lý công việc cá nhân với phương pháp Getting Things Done (GTD)',
        difficulty: 'Trung bình',
        materials: ['Công cụ quản lý tác vụ kỹ thuật số', 'Ứng dụng lịch', 'Công cụ ghi chú'],
        procedure: [
          'Thu thập tất cả các nhiệm vụ và cam kết vào hộp thư đến',
          'Xử lý hộp thư đến theo quy trình GTD',
          'Sắp xếp theo ngữ cảnh và dự án',
          'Xem xét hàng tuần và điều chỉnh các ưu tiên',
          'Đo lường các chỉ số năng suất theo thời gian',
        ],
        expectedResults:
          'Giảm căng thẳng, tăng sự tập trung, hoàn thành hơn 80% các nhiệm vụ đã lên kế hoạch hàng tuần',
      },
      {
        title: 'Bài tập thực hành quản lý thời gian',
        description: 'Cải thiện kỹ năng quản lý thời gian và năng suất qua các bài tập thực tế.',
        difficulty: 'Cơ bản',
        procedure: [
          'Thực hiện kiểm toán thời gian cá nhân trong 1 tuần để xác định các hoạt động lãng phí thời gian.',
          'Tham gia thử thách cai nghiện kỹ thuật số (digital detox) trong một khoảng thời gian nhất định.',
          'Thiết lập và tùy chỉnh các công cụ năng suất (ví dụ: Trello, Asana, Notion) để phù hợp với quy trình làm việc của bạn.',
        ],
      },
    ],
    quizzes: [
      {
        question:
          'Phương pháp nào hiệu quả để đối phó với văn hóa "cả nể" khi bạn muốn từ chối một yêu cầu không hợp lý mà không làm mất lòng đồng nghiệp?',
        options: [
          'Từ chối thẳng thừng và giải thích rằng bạn không có thời gian',
          'Nhận lời nhưng sau đó không làm',
          'Giải thích về các ưu tiên hiện tại của bạn và đề xuất một giải pháp thay thế (ví dụ: hỗ trợ vào lúc khác, hoặc gợi ý một người khác phù hợp hơn)',
          'Lờ đi yêu cầu đó',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Cách tiếp cận này vừa giúp bạn bảo vệ được thời gian của mình, vừa thể hiện sự tôn trọng và tinh thần hợp tác với đồng nghiệp, phù hợp với văn hóa giao tiếp ở Việt Nam.',
      },
    ],
    realWorldApplications: [
      'Quản lý nhiều dự án cùng một lúc',
      'Chuẩn bị cho việc thăng chức và tăng trách nhiệm',
      'Quản lý công việc tự do và kinh doanh phụ',
      'Học tập trong khi làm việc toàn thời gian',
      'Làm gương về năng suất trong đội nhóm',
    ],
  },
];
