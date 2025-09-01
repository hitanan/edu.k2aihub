import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface CommunicationSkillsLessonType extends BaseLessonData {
  communicationMethods: string[];
  presentationTechniques: string[];
  culturalContext: string[];
  digitalPlatforms: string[];
  assessmentCriteria: string[];
  mainContent: {
    introduction: string;
    keyConcepts: Array<{
      title: string;
      description: string;
      examples: string[];
    }>;
    practicalApplications: Array<{
      area: string;
      description: string;
    }>;
    conclusion: string;
  };
  relatedGames: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

export const communicationSkillsLessons: CommunicationSkillsLessonType[] = [
  {
    id: 'effective-communication-fundamentals',
    title: 'Cơ Bản Giao Tiếp Hiệu Quả',
    description:
      'Nắm vững các nguyên tắc cơ bản của giao tiếp hiệu quả, từ ngôn ngữ cơ thể đến kỹ năng lắng nghe tích cực.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=kEf9qPmGvxw', // The Power of Effective Communication - TED
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop',
    mainContent: {
      introduction:
        'Giao tiếp là nền tảng của mọi mối quan hệ thành công, từ cá nhân đến chuyên nghiệp. Bài học này sẽ trang bị cho bạn những công cụ cần thiết để giao tiếp một cách rõ ràng, tự tin và đầy sự đồng cảm, mở ra cánh cửa đến những cơ hội mới và giúp bạn xây dựng các mối quan hệ bền chặt.',
      keyConcepts: [
        {
          title: 'Mô hình giao tiếp (Communication Model)',
          description:
            'Hiểu rõ các yếu tố trong một cuộc hội thoại: người gửi, người nhận, thông điệp, kênh truyền, nhiễu và phản hồi. Việc phân tích mô hình này giúp xác định và khắc phục các rào cản giao tiếp.',
          examples: [
            'Phân tích một cuộc phỏng vấn xin việc thất bại để tìm ra "nhiễu".',
            'Sử dụng mô hình để lên kế hoạch cho một bài thuyết trình quan trọng.',
          ],
        },
        {
          title: 'Lắng nghe chủ động (Active Listening)',
          description:
            'Không chỉ là nghe, mà là thấu hiểu. Kỹ năng này bao gồm việc tập trung hoàn toàn, diễn giải lại, đặt câu hỏi làm rõ và thể hiện sự đồng cảm. Đây là chìa khóa để xây dựng lòng tin.',
          examples: [
            'Trong một cuộc họp nhóm, diễn giải lại ý kiến của đồng nghiệp trước khi đưa ra quan điểm của mình.',
            'Khi giải quyết mâu thuẫn, lắng nghe để hiểu quan điểm của đối phương thay vì chỉ chờ đến lượt nói.',
          ],
        },
        {
          title: 'Giao tiếp phi ngôn ngữ (Non-verbal Communication)',
          description:
            'Ngôn ngữ cơ thể, ánh mắt, và giọng điệu thường nói lên nhiều điều hơn lời nói. Nắm vững kỹ năng này giúp bạn đọc vị người khác và thể hiện bản thân một cách nhất quán, mạnh mẽ.',
          examples: [
            'Duy trì giao tiếp bằng mắt để thể hiện sự tự tin.',
            'Sử dụng cử chỉ tay cởi mở để tạo không khí thân thiện.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Phỏng vấn xin việc',
          description:
            'Sử dụng kỹ năng giao tiếp để trình bày năng lực một cách thuyết phục, trả lời câu hỏi thông minh và tạo ấn tượng tốt với nhà tuyển dụng.',
        },
        {
          area: 'Làm việc nhóm',
          description:
            'Giao tiếp hiệu quả giúp phối hợp công việc trôi chảy, giải quyết xung đột và đưa ra quyết định chung một cách nhanh chóng.',
        },
        {
          area: 'Xây dựng mối quan hệ',
          description:
            'Áp dụng lắng nghe chủ động và thấu cảm để xây dựng các mối quan hệ cá nhân và công việc sâu sắc, bền vững.',
        },
      ],
      conclusion:
        'Giao tiếp hiệu quả là một kỹ năng có thể học hỏi và rèn luyện. Bằng cách áp dụng các nguyên tắc trong bài học này, bạn không chỉ cải thiện được cách tương tác với mọi người mà còn nâng cao giá trị bản thân trong mọi lĩnh vực của cuộc sống.',
    },
    relatedGames: [
      {
        id: 'public-speaking-simulator-3d',
        name: 'Public Speaking Simulator 3D',
        description:
          'Practice public speaking in realistic 3D environments, get AI feedback on performance, and build confidence',
      },
      {
        id: 'debate-master-3d',
        name: 'Debate Master 3D',
        description:
          'Engage in AI-driven debates, develop critical thinking, and master persuasive arguments in 3D courtroom',
      },
    ],
    objectives: [
      'Hiểu được các thành phần của quá trình giao tiếp',
      'Phát triển kỹ năng lắng nghe tích cực và đồng cảm',
      'Nắm vững giao tiếp phi ngôn ngữ và ngôn ngữ cơ thể',
      'Học cách điều chỉnh phong cách giao tiếp theo đối tượng',
    ],
    prerequisites: ['Không có yêu cầu tiên quyết', 'Sẵn sàng thực hành và nhận phản hồi'],
    communicationMethods: [
      'Verbal Communication',
      'Nonverbal Communication',
      'Written Communication',
      'Digital Communication',
    ],
    presentationTechniques: [
      'Storytelling Framework',
      'Visual Design Principles',
      'Audience Engagement Methods',
      'Q&A Handling Strategies',
    ],
    culturalContext: [
      'Vietnamese Business Culture',
      'International Communication Norms',
      'Cross-generational Communication',
      'Social Media Etiquette',
    ],
    digitalPlatforms: [
      'Video Conferencing (Zoom, Teams)',
      'Social Media Platforms',
      'Email Communication',
      'Presentation Tools (PowerPoint, Canva)',
    ],
    assessmentCriteria: [
      'Clarity and coherence',
      'Audience engagement',
      'Nonverbal effectiveness',
      'Message delivery impact',
    ],
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
    resources: [
      {
        title: 'TED Talks on Communication',
        url: 'https://www.ted.com/topics/communication',
        type: 'Tutorial',
      },
      {
        title: 'Toastmasters International',
        url: 'https://www.toastmasters.org/',
        type: 'Tool',
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
    mainContent: {
      introduction:
        'Trong thế giới số, khả năng thuyết trình không chỉ giới hạn ở sân khấu. Bài học này sẽ hướng dẫn bạn cách làm chủ các công cụ kỹ thuật số để tạo ra những bài thuyết trình ấn tượng, thu hút và có sức ảnh hưởng, dù bạn đang ở bất cứ đâu.',
      keyConcepts: [
        {
          title: 'Nguyên tắc thiết kế thị giác (Visual Design Principles)',
          description:
            'Học cách áp dụng các nguyên tắc như hệ thống lưới, phân cấp thông tin, độ tương phản và lý thuyết màu sắc để tạo ra các slide chuyên nghiệp, dễ đọc và có tính thẩm mỹ cao.',
          examples: [
            'Sử dụng quy tắc 1/3 để sắp xếp bố cục slide.',
            'Chọn một bảng màu nhất quán với thương hiệu hoặc chủ đề bài nói.',
          ],
        },
        {
          title: 'Kể chuyện bằng dữ liệu (Data Storytelling)',
          description:
            'Biến những con số khô khan thành những câu chuyện hấp dẫn. Học cách chọn đúng loại biểu đồ, làm nổi bật thông tin quan trọng và dẫn dắt người xem qua các insight từ dữ liệu.',
          examples: [
            'Sử dụng biểu đồ đường để thể hiện xu hướng tăng trưởng theo thời gian.',
            'Dùng biểu đồ cột để so sánh hiệu suất giữa các phòng ban.',
          ],
        },
        {
          title: 'Tương tác trong môi trường ảo (Virtual Engagement)',
          description:
            'Khám phá các kỹ thuật và công cụ để giữ cho khán giả trực tuyến luôn tập trung và tham gia, từ các cuộc thăm dò ý kiến (polls), Q&A, đến các hoạt động tương tác nhóm nhỏ (breakout rooms).',
          examples: [
            'Bắt đầu buổi thuyết trình bằng một câu hỏi thăm dò để thu hút sự chú ý.',
            'Sử dụng các công cụ như Mentimeter hoặc Slido để nhận phản hồi trực tiếp.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Hội thảo trực tuyến (Webinars)',
          description:
            'Tổ chức các buổi webinar chuyên nghiệp để chia sẻ kiến thức, quảng bá sản phẩm hoặc đào tạo nhân viên từ xa.',
        },
        {
          area: 'Chào hàng (Sales Pitch)',
          description:
            'Tạo ra các bài thuyết trình bán hàng ấn tượng, có khả năng tùy chỉnh theo từng khách hàng và trình bày hiệu quả qua các cuộc gọi video.',
        },
        {
          area: 'Báo cáo dự án',
          description:
            'Trình bày tiến độ và kết quả dự án một cách rõ ràng, trực quan cho các bên liên quan, dù họ ở bất kỳ đâu.',
        },
      ],
      conclusion:
        'Thành thạo thuyết trình số không chỉ là một kỹ năng kỹ thuật mà còn là một nghệ thuật. Việc kết hợp tư duy thiết kế, khả năng kể chuyện và sự am hiểu công nghệ sẽ giúp bạn trở thành một người giao tiếp có sức ảnh hưởng trong kỷ nguyên số.',
    },
    relatedGames: [
      {
        id: 'public-speaking-simulator-3d',
        name: 'Public Speaking Simulator 3D',
        description:
          'Practice public speaking in realistic 3D environments, get AI feedback on performance, and build confidence',
      },
      {
        id: 'presentation-pro-3d',
        name: 'Presentation Pro 3D',
        description:
          'Design and deliver impactful presentations in virtual 3D stages with interactive elements and AI coaching',
      },
    ],
    objectives: [
      'Làm chủ các công cụ thuyết trình số (PowerPoint, Canva, Prezi)',
      'Áp dụng các nguyên tắc thiết kế trực quan cho các slide hiệu quả',
      'Học cách thu hút khán giả trong các bài thuyết trình ảo',
      'Phát triển phong cách và thương hiệu thuyết trình cá nhân',
    ],
    prerequisites: ['Hoàn thành "Cơ Bản Giao Tiếp Hiệu Quả"', 'Có kỹ năng máy tính cơ bản và truy cập internet'],
    communicationMethods: [
      'Visual Storytelling',
      'Interactive Presentations',
      'Multimedia Integration',
      'Real-time Audience Feedback',
    ],
    presentationTechniques: [
      'Slide Design Best Practices',
      'Animation và Transition Effects',
      'Data Visualization Methods',
      'Interactive Elements Integration',
    ],
    culturalContext: [
      'Vietnamese Educational Presentation Norms',
      'International Business Presentation Standards',
      'Academic Conference Presentation Styles',
      'Social Media Content Presentation',
    ],
    digitalPlatforms: [
      'Microsoft PowerPoint Advanced Features',
      'Canva Design Platform',
      'Prezi Presentation Software',
      'Google Slides Collaboration Tools',
    ],
    assessmentCriteria: [
      'Visual design quality',
      'Content organization',
      'Technical execution',
      'Audience interaction',
    ],
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
    resources: [
      {
        title: 'Canva Design School',
        url: 'https://www.canva.com/designschool/',
        type: 'Tutorial',
      },
      {
        title: 'Presentation Zen Blog',
        url: 'https://www.presentationzen.com/',
        type: 'Reference',
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
    mainContent: {
      introduction:
        'Thế giới ngày càng phẳng hơn, và khả năng làm việc hiệu quả với những người từ các nền văn hóa khác nhau đã trở thành một yêu cầu tất yếu. Bài học này cung cấp cho bạn kiến thức và kỹ năng để vượt qua rào cản văn hóa, biến sự đa dạng thành lợi thế cạnh tranh.',
      keyConcepts: [
        {
          title: 'Các chiều văn hóa (Cultural Dimensions)',
          description:
            'Tìm hiểu các mô hình nổi tiếng như của Hofstede để phân tích sự khác biệt văn hóa, ví dụ như Chủ nghĩa cá nhân vs. Chủ nghĩa tập thể, Khoảng cách quyền lực, và Mức độ tránh sự không chắc chắn. Hiểu được những điều này giúp lý giải các hành vi và kỳ vọng khác nhau.',
          examples: [
            'So sánh phong cách làm việc trực tiếp của người Đức (low-context) và phong cách gián tiếp, ý tại ngôn ngoại của người Nhật (high-context).',
            'Phân tích cách đưa ra quyết định trong một công ty Mỹ (khoảng cách quyền lực thấp) và một công ty Hàn Quốc (khoảng cách quyền lực cao).',
          ],
        },
        {
          title: 'Trí tuệ văn hóa (Cultural Intelligence - CQ)',
          description:
            'CQ là khả năng một cá nhân hoạt động và quản lý hiệu quả trong các môi trường đa dạng về văn hóa. Nó bao gồm 4 yếu tố: Động lực (CQ Drive), Nhận thức (CQ Knowledge), Chiến lược (CQ Strategy), và Hành động (CQ Action).',
          examples: [
            'Trước khi đến một quốc gia mới, chủ động tìm hiểu về các phong tục kinh doanh của họ (CQ Knowledge).',
            'Khi gặp một tình huống giao tiếp khó hiểu, dừng lại để phân tích thay vì phản ứng ngay lập tức (CQ Strategy).',
          ],
        },
        {
          title: 'Chiến lược thích ứng giao tiếp',
          description:
            'Học cách điều chỉnh phong cách giao tiếp của bạn cho phù hợp với đối tác. Điều này có thể bao gồm việc thay đổi tốc độ nói, mức độ trang trọng, cách sử dụng ngôn ngữ cơ thể và cách tiếp cận vấn đề (trực tiếp hay gián tiếp).',
          examples: [
            'Khi làm việc với đối tác từ nền văn hóa coi trọng sự hài hòa, tránh đối đầu trực tiếp mà hãy sử dụng các cách diễn đạt mềm mỏng hơn.',
            'Trong một nhóm đa quốc gia, nói chậm và rõ ràng, tránh dùng tiếng lóng.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Đàm phán quốc tế',
          description:
            'Hiểu rõ văn hóa của đối tác để xây dựng lòng tin, lựa chọn chiến lược đàm phán phù hợp và tránh những hiểu lầm văn hóa có thể làm đổ vỡ thỏa thuận.',
        },
        {
          area: 'Quản lý đội nhóm toàn cầu',
          description:
            'Dẫn dắt một đội ngũ đa dạng về văn hóa, thúc đẩy sự hòa nhập, và tận dụng sức mạnh của các quan điểm khác nhau để đổi mới và sáng tạo.',
        },
        {
          area: 'Du học và làm việc ở nước ngoài',
          description:
            'Nhanh chóng hòa nhập với môi trường mới, xây dựng mạng lưới quan hệ hiệu quả và thành công trong học tập cũng như công việc.',
        },
      ],
      conclusion:
        'Giao tiếp đa văn hóa không chỉ là học về các quy tắc ứng xử, mà là phát triển một tư duy cởi mở, sự đồng cảm và khả năng thích ứng linh hoạt. Nắm vững kỹ năng này sẽ mở ra cho bạn một thế giới đầy cơ hội và giúp bạn trở thành một công dân toàn cầu thực thụ.',
    },
    relatedGames: [
      {
        id: 'global-ambassador-3d',
        name: 'Global Ambassador 3D',
        description:
          'Navigate cross-cultural communication scenarios, build diplomatic skills, and solve global challenges in 3D',
      },
      {
        id: 'vietnamese-heritage-explorer-3d',
        name: 'Khám Phá Di Sản Việt Nam 3D',
        description: 'Khám phá các di sản văn hóa Việt Nam trong không gian 3D, tìm hiểu lịch sử và giải đố tương tác',
      },
    ],
    objectives: [
      'Hiểu được các chiều văn hóa và tác động của chúng lên giao tiếp',
      'Phát triển trí tuệ văn hóa (CQ) và khả năng thích ứng',
      'Học cách vượt qua rào cản ngôn ngữ và những hiểu lầm',
      'Xây dựng mạng lưới và mối quan hệ quốc tế hiệu quả',
    ],
    prerequisites: ['Hoàn thành "Thành Thạo Thuyết Trình Số"', 'Có kinh nghiệm tương tác quốc tế (ưu tiên)'],
    communicationMethods: [
      'High-context vs Low-context Communication',
      'Direct vs Indirect Communication Styles',
      'Formal vs Informal Registers',
      'Silence và Nonverbal Cues Interpretation',
    ],
    presentationTechniques: [
      'Cultural Adaptation Strategies',
      'Universal Design Principles',
      'Inclusive Language Usage',
      'Global Audience Engagement',
    ],
    culturalContext: [
      'East Asian Communication Patterns',
      'Western Business Communication Norms',
      'ASEAN Cultural Diversity Understanding',
      'Digital Global Communication Etiquette',
    ],
    digitalPlatforms: [
      'International Video Conferencing',
      'Global Social Media Platforms',
      'Translation và Interpretation Tools',
      'Cross-cultural Collaboration Platforms',
    ],
    assessmentCriteria: [
      'Cultural sensitivity demonstration',
      'Adaptation flexibility',
      'Inclusive communication practice',
      'International networking effectiveness',
    ],
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
    resources: [
      {
        title: 'Hofstede Cultural Dimensions',
        url: 'https://www.hofstede-insights.com/',
        type: 'Reference',
      },
      {
        title: 'Cross-Cultural Communication Institute',
        url: 'https://www.intercultural.org/',
        type: 'Documentation',
      },
    ],
  },
];
