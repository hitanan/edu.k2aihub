import { BaseLessonData } from '@/types/lesson-base';

export const AIApplicationLessons: BaseLessonData[] = [
  {
    id: 'ai-for-study-abroad',
    title: 'AI cho Du học - Chuẩn bị hồ sơ và IELTS',
    description:
      'Sử dụng AI để tối ưu hóa quá trình chuẩn bị du học: viết essay, luyện IELTS, research trường học và scholarships.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=HfG0_yYTcGI',
    imageUrl: '/images/ai-study-abroad.jpg',
    objectives: [
      'Làm chủ các công cụ AI để viết luận và chuẩn bị SOP',
      'Tối ưu hóa việc luyện thi IELTS với hệ thống gia sư AI',
      'Tự động hóa việc nghiên cứu trường và tìm kiếm học bổng',
      'Tạo ra các tài liệu ứng tuyển hấp dẫn với sự hỗ trợ của AI',
    ],
    mainContent: [
      {
        heading: 'Giới thiệu: Cách Mạng Hóa Con Đường Du Học với AI',
        details:
          'Hành trình du học đầy thử thách, từ việc chuẩn bị hồ sơ, luyện thi IELTS, đến việc tìm kiếm trường và học bổng phù hợp. AI (Trí tuệ nhân tạo) không còn là công cụ của tương lai mà đã trở thành người bạn đồng hành đắc lực, giúp bạn tự động hóa các tác vụ lặp đi lặp lại, cá nhân hóa lộ trình học tập và tạo ra những bộ hồ sơ nổi bật. Bài học này sẽ hướng dẫn bạn cách biến AI thành lợi thế cạnh tranh của riêng mình.',
      },
      {
        heading: 'Phần 1: Xây Dựng Hồ Sơ "Triệu Đô" với AI',
        details:
          'Bài luận cá nhân (Personal Statement) và SOP là linh hồn của bộ hồ sơ. AI giúp bạn vượt qua "hội chứng trang giấy trắng" bằng cách gợi ý ý tưởng, xây dựng cấu trúc bài viết logic và tinh chỉnh ngôn từ. Sử dụng các công cụ như ChatGPT hoặc Claude, bạn có thể brainstorm những câu chuyện cá nhân độc đáo, điều chỉnh văn phong cho phù hợp với từng trường đại học, và nhận được phản hồi tức thì để bài viết trở nên sắc bén và thuyết phục hơn. Đây là cách để bạn kể câu chuyện của mình một cách ấn tượng nhất.',
      },
      {
        heading: 'Phần 2: Chinh Phục IELTS/TOEFL bằng Lộ Trình Cá Nhân Hóa',
        details:
          'Thay vì học theo một lộ trình chung, AI tạo ra kế hoạch học tập dành riêng cho bạn. Các ứng dụng như ELSA Speak hay tính năng hội thoại của ChatGPT cho phép bạn luyện nói với "giáo viên bản xứ" 24/7, nhận phản hồi tức thì về phát âm và ngữ pháp. AI cũng có thể tạo ra các bài thi thử mô phỏng chính xác, phân tích điểm yếu của bạn trong kỹ năng Đọc, Viết, Nghe và đề xuất các bài tập phù hợp để cải thiện, giúp bạn tối ưu hóa thời gian và công sức ôn luyện.',
      },
      {
        heading: 'Phần 3: Săn Trường và Học Bổng Thông Minh',
        details:
          'Quá trình tìm kiếm thủ công hàng trăm trường và quỹ học bổng đã trở nên lỗi thời. Bằng cách sử dụng các công cụ tìm kiếm AI như Perplexity hoặc tạo các GPTs tùy chỉnh, bạn có thể nhập vào hồ sơ của mình (GPA, điểm IELTS, ngân sách, ngành học) và nhận về danh sách các trường và học bổng phù hợp nhất chỉ trong vài phút. AI giúp bạn khám phá những cơ hội "ngách" mà có thể bạn đã bỏ lỡ, tăng tối đa khả năng thành công.',
      },
      {
        heading: 'Lưu Ý Quan Trọng về Đạo Đức và Nguyên Bản',
        details:
          'AI là một công cụ hỗ trợ mạnh mẽ, không phải là một cỗ máy gian lận. Việc sao chép hoàn toàn nội dung do AI tạo ra không chỉ vi phạm quy tắc học thuật mà còn làm mất đi tính độc đáo và câu chuyện cá nhân của bạn. Hãy sử dụng AI để lấy cảm hứng, cấu trúc ý, kiểm tra ngữ pháp và làm phong phú thêm bài viết của mình. Sản phẩm cuối cùng phải là của bạn, phản ánh đúng con người và năng lực của bạn. Đó mới là cách sử dụng AI thông minh và có trách nhiệm.',
      },
    ],
    prerequisites: [
      'Tiếng Anh cơ bản',
      'Hiểu biết về quy trình du học',
      'Quen thuộc với các công cụ AI như ChatGPT',
      'Có kết nối internet và truy cập các nền tảng AI',
    ],
    exercises: [
      {
        title: 'Viết Bài Luận Cá Nhân với sự hỗ trợ của AI',
        description: 'Viết bài luận cá nhân thuyết phục với sự hướng dẫn và phản hồi từ AI',
        difficulty: 'Trung bình',
        materials: [
          'Tài khoản ChatGPT hoặc Claude',
          'Thông tin lý lịch cá nhân',
          'Yêu cầu của trường đại học mục tiêu',
          'Đề cương mục tiêu nghề nghiệp',
        ],
        procedure: [
          'Brainstorm các câu chuyện và thành tích cá nhân với gợi ý từ AI',
          'Xây dựng cấu trúc bài luận với các mẫu khung từ AI',
          'Soạn thảo nội dung với sự trợ giúp và đề xuất của AI',
          'Tinh chỉnh ngôn ngữ và văn phong với các công cụ chỉnh sửa của AI',
          'Nhận phản hồi từ AI về sự rõ ràng và tác động',
          'Hoàn thiện với sự rà soát của con người và kiểm tra ngữ pháp bằng AI',
        ],
        expectedResults:
          'Bài luận cá nhân chuyên nghiệp phù hợp với các trường đại học mục tiêu với dòng chảy tường thuật mạnh mẽ',
        solution: 'Hướng dẫn toàn diện với các gợi ý và ví dụ từ AI sẽ được cung cấp',
      },
      {
        title: 'Luyện Nói IELTS với AI',
        description: 'Cải thiện kỹ năng nói IELTS bằng cách sử dụng các đối tác trò chuyện AI',
        difficulty: 'Cơ bản',
        materials: [
          'Công cụ trò chuyện AI (ChatGPT Voice, Claude)',
          'Chủ đề và câu hỏi nói IELTS',
          'Thiết bị hoặc ứng dụng ghi âm',
          'Bảng mô tả các band điểm IELTS',
        ],
        procedure: [
          'Thiết lập cuộc trò chuyện AI với vai trò giám khảo IELTS',
          'Luyện tập các câu hỏi Phần 1 với phản hồi của AI về sự trôi chảy',
          'Mô phỏng các bài thuyết trình Phần 2 với thời gian và đánh giá của AI',
          'Tham gia các cuộc thảo luận Phần 3 với các câu hỏi thử thách từ AI',
          'Ghi lại các phiên để phân tích phát âm và sự mạch lạc',
          'Nhận phản hồi chi tiết từ AI về các lĩnh vực cần cải thiện',
        ],
        expectedResults: 'Cải thiện sự trôi chảy, mạch lạc và tự tin trong các bài thi nói IELTS',
      },
    ],
    realWorldApplications: [
      'Tối ưu hóa hồ sơ ứng tuyển vào các trường đại học hàng đầu thế giới',
      'Săn học bổng và tự động hóa quy trình ứng tuyển',
      'Luyện thi IELTS/TOEFL với gia sư AI cá nhân hóa',
      'Chuẩn bị phỏng vấn visa với mô phỏng AI',
      'Phát triển kỹ năng giao tiếp đa văn hóa',
    ],
    relatedGames: [
      {
        id: 'cultural-intelligence-navigator-3d',
        name: 'Cultural Intelligence Navigator 3D',
        description:
          'Rèn luyện kỹ năng giao tiếp và ứng xử đa văn hóa, một kỹ năng mềm cực kỳ quan trọng khi đi du học.',
      },
    ],
    caseStudies: [
      {
        title: 'Câu chuyện thành công của sinh viên Việt Nam',
        organization: 'Trúng tuyển Đại học hàng đầu Vương quốc Anh',
        problem: 'Sinh viên cần cải thiện điểm IELTS từ 6.0 lên 7.5 trong 3 tháng',
        solution:
          'Triển khai gia sư AI với các buổi luyện tập hàng ngày, hệ thống phản hồi AI và cải thiện các điểm yếu được nhắm mục tiêu',
        impact: 'Đạt IELTS 7.5 trong 10 tuần, nhận được học bổng trị giá £15,000',
        innovations: ['Kế hoạch học tập AI cá nhân hóa', 'Phản hồi phát âm thời gian thực', 'Độ khó câu hỏi thích ứng'],
      },
    ],
    aiTools: [
      'ChatGPT để viết luận và brainstorm',
      'Claude để nhận phản hồi chi tiết và chỉnh sửa',
      'Grammarly AI để cải thiện ngữ pháp và văn phong',
      'ELSA Speak để luyện phát âm',
      'Speechify để cải thiện kỹ năng đọc hiểu',
    ],
    practicalUses: [
      'Soạn thảo bài luận cá nhân và SOP',
      'Luyện nói IELTS/TOEFL',
      'Tự động hóa nghiên cứu trường đại học',
      'Hệ thống tìm kiếm học bổng phù hợp',
      'Mô phỏng chuẩn bị phỏng vấn',
    ],
    industries: ['Tư vấn giáo dục', 'Học ngôn ngữ', 'Dịch vụ du học', 'Tuyển sinh đại học', 'Giáo dục quốc tế'],
    skillLevel: 'Sơ cấp đến Trung cấp',
    outcomes: [
      'Tài liệu ứng tuyển hấp dẫn',
      'Cải thiện điểm số thông thạo tiếng Anh',
      'Tăng cơ hội nhận học bổng',
      'Tự tin thể hiện trong phỏng vấn',
      'Trúng tuyển đại học thành công',
    ],
    vietnamContext: {
      title: 'Bí quyết du học cho Gen Z Việt',
      content: [
        'Thị trường du học tại Việt Nam cực kỳ cạnh tranh. Việc sử dụng AI để tạo ra một bộ hồ sơ độc đáo và nổi bật là một lợi thế lớn.',
        'Nhiều trung tâm tư vấn du học lớn tại TP.HCM và Hà Nội đã bắt đầu tích hợp các công cụ AI vào quy trình tư vấn của họ để tăng hiệu quả.',
        'Hiểu và sử dụng thành thạo AI không chỉ giúp bạn trong quá trình ứng tuyển mà còn là một kỹ năng quan trọng khi bạn đã đi du học và cho sự nghiệp tương lai.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần Mai Anh',
      title: 'Giám đốc Tư vấn Du học',
      company: 'IDP Education Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=tranmaianh',
      quote:
        'AI không thay thế được vai trò của một nhà tư vấn có tâm, nhưng nó là công cụ giúp chúng tôi và các em học sinh đạt được kết quả tốt nhất một cách hiệu quả nhất.',
    },
    quizzes: [
      {
        question: 'Công cụ AI nào phù hợp nhất để luyện phát âm tiếng Anh?',
        options: ['ChatGPT', 'Grammarly', 'ELSA Speak', 'Perplexity'],
        correctAnswerIndex: 2,
        explanation:
          'ELSA Speak được thiết kế chuyên biệt để phân tích và đưa ra phản hồi về phát âm của người học, giúp cải thiện ngữ điệu và sự rõ ràng khi nói.',
      },
      {
        question: 'Tại sao việc chỉ sao chép nội dung từ AI cho bài luận là một ý tưởng tồi?',
        options: [
          'Vì nó quá dễ dàng',
          'Vì AI có thể viết sai ngữ pháp',
          'Vì nó vi phạm quy tắc học thuật và làm mất đi tính độc đáo của bạn',
          'Vì các trường đại học không thích công nghệ',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Các trường đại học có công cụ để phát hiện đạo văn. Quan trọng hơn, bài luận là cơ hội để bạn thể hiện con người và câu chuyện của mình, điều mà AI không thể thay thế.',
      },
    ],
  },
  {
    id: 'ai-business-automation',
    title: 'AI Business Automation - Tự động hóa quy trình kinh doanh',
    description:
      'Triển khai tự động hóa AI cho các quy trình kinh doanh: dịch vụ khách hàng, bán hàng, chiến dịch marketing và hiệu quả hoạt động.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=ngB8tFxVPe8',
    mainContent: [
      {
        heading: 'Tại sao Tự động hóa Kinh doanh bằng AI là Tương lai?',
        details:
          'Trong môi trường kinh doanh cạnh tranh, hiệu suất là chìa khóa. Tự động hóa bằng AI (AI Automation) không chỉ là việc thay thế các tác vụ thủ công, mà là việc tái cấu trúc cách doanh nghiệp vận hành. Nó giúp giải phóng nhân viên khỏi các công việc lặp đi lặp lại, nhàm chán để họ tập trung vào chiến lược, sáng tạo và tương tác khách hàng ở cấp độ cao hơn. Từ chatbot trả lời khách hàng 24/7 đến hệ thống tự động phân tích dữ liệu bán hàng, AI đang tạo ra một cuộc cách mạng về hiệu quả hoạt động.',
      },
      {
        heading: 'Tự động hóa Dịch vụ Khách hàng: Từ Phản hồi đến Thấu hiểu',
        details:
          'Chatbot AI không còn chỉ trả lời các câu hỏi theo kịch bản. Các hệ thống hiện đại có thể hiểu ngữ cảnh, phân tích cảm xúc của khách hàng và xử lý các yêu cầu phức tạp. Quan trọng hơn, chúng có thể tự động chuyển các vấn đề khó cho nhân viên hỗ trợ phù hợp, đồng thời cung cấp đầy đủ lịch sử trò chuyện. Điều này không chỉ giảm thời gian chờ đợi của khách hàng mà còn tăng mức độ hài lòng và xây dựng lòng trung thành.',
      },
      {
        heading: 'Tự động hóa Marketing và Bán hàng: Tiếp cận Đúng Người, Đúng Lúc',
        details:
          'AI có thể phân tích hành vi của hàng ngàn khách hàng tiềm năng để xác định ai là người có khả năng mua hàng cao nhất (lead qualification). Nó có thể tự động gửi email marketing được cá nhân hóa dựa trên sở thích của từng người, tạo ra các bài viết quảng cáo hấp dẫn trên mạng xã hội, và tối ưu hóa chiến dịch quảng cáo theo thời gian thực để đạt được ROI cao nhất. Đây là cách marketing dựa trên dữ liệu (data-driven) được thực thi ở quy mô lớn.',
      },
      {
        heading: 'Tối ưu hóa Vận hành: Ra Quyết định Thông minh hơn',
        details:
          'Ngoài các quy trình đối mặt với khách hàng, AI còn có thể tự động hóa các tác vụ nội bộ. Ví dụ, nó có thể phân tích dữ liệu tồn kho để dự báo nhu cầu và tự động đặt hàng, theo dõi chi phí hoạt động để tìm ra các điểm bất thường, hoặc phân tích hiệu suất làm việc của nhân viên để đề xuất các chương trình đào tạo phù hợp. Bằng cách biến dữ liệu thô thành thông tin chi tiết có thể hành động, AI giúp các nhà quản lý ra quyết định nhanh chóng và chính xác hơn.',
      },
    ],
    objectives: [
      'Thiết kế hệ thống dịch vụ khách hàng tự động với chatbot AI',
      'Triển khai tự động hóa bán hàng với việc đánh giá khách hàng tiềm năng bằng AI',
      'Tạo các chiến dịch marketing với nội dung do AI tạo ra',
      'Tối ưu hóa hoạt động với phân tích và thông tin chi tiết từ AI',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về quy trình kinh doanh',
      'Quen thuộc với các hệ thống CRM',
      'Hiểu biết về phễu marketing',
      'Kỹ năng phân tích dữ liệu cơ bản',
    ],
    exercises: [
      {
        title: 'Triển khai Chatbot AI cho Dịch vụ Khách hàng',
        description: 'Xây dựng và triển khai chatbot AI để xử lý các yêu cầu phổ biến của khách hàng',
        difficulty: 'Trung bình',
        procedure: [
          'Phân tích các mẫu yêu cầu của khách hàng và các câu hỏi thường gặp',
          'Thiết kế các luồng hội thoại với cây quyết định',
          'Thiết lập nền tảng chatbot (API ChatGPT, Dialogflow, v.v.)',
          'Huấn luyện chatbot với thông tin cụ thể của công ty',
          'Triển khai các quy tắc chuyển tiếp cho các truy vấn phức tạp',
          'Kiểm tra và tối ưu hóa dựa trên phản hồi của người dùng',
        ],
      },
    ],
    realWorldApplications: [
      'Tự động hóa doanh nghiệp nhỏ để giảm chi phí hoạt động',
      'Nâng cao dịch vụ khách hàng thương mại điện tử',
      'Tạo và đánh giá khách hàng tiềm năng tự động',
      'Tiếp thị nội dung quy mô lớn với các công cụ AI',
      'Ra quyết định dựa trên dữ liệu với thông tin chi tiết từ AI',
    ],
    relatedGames: [
      {
        id: 'supply-chain-management-3d',
        name: 'Supply Chain Management 3D',
        description:
          'Trải nghiệm việc quản lý và tối ưu hóa chuỗi cung ứng, một lĩnh vực có tiềm năng tự động hóa rất lớn.',
      },
    ],
    aiTools: [
      'Zapier để tự động hóa quy trình làm việc',
      'HubSpot AI để tự động hóa bán hàng',
      'Chatbot Intercom cho dịch vụ khách hàng',
      'Copy.ai để tạo nội dung',
      'Google Analytics Intelligence để có thông tin chi tiết',
    ],
    vietnamContext: {
      title: 'Doanh nghiệp Việt và làn sóng tự động hóa',
      content: [
        'Các doanh nghiệp vừa và nhỏ (SMEs) tại Việt Nam đang nhanh chóng áp dụng AI để tự động hóa, đặc biệt trong lĩnh vực thương mại điện tử và dịch vụ.',
        'Các nền tảng như Haravan, Sapo đã tích hợp chatbot và các công cụ marketing tự động để giúp các chủ shop online cạnh tranh hiệu quả hơn.',
        'Thách thức lớn nhất là việc đào tạo nhân sự để có thể làm việc cùng với AI và quản lý các quy trình tự động hóa một cách hiệu quả.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Anh Tuấn',
      title: 'Giám đốc Sản phẩm',
      company: 'FPT.AI',
      imageUrl: 'https://i.pravatar.cc/150?u=leanhtuan',
      quote:
        'Tự động hóa không phải là để thay thế con người, mà là để nâng cao năng lực của con người. Chúng tôi tạo ra các công cụ AI để người Việt có thể làm kinh doanh ở tầm thế giới.',
    },
    quizzes: [
      {
        question: 'Lợi ích chính của việc sử dụng chatbot AI trong dịch vụ khách hàng là gì?',
        options: [
          'Nó có thể trò chuyện về thời tiết',
          'Nó có thể trả lời các câu hỏi phổ biến 24/7 và giảm thời gian chờ đợi',
          'Nó có thể thay thế hoàn toàn nhân viên con người',
          'Nó chỉ hoạt động trong giờ hành chính',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Chatbot AI cung cấp hỗ trợ tức thì và liên tục, giải phóng nhân viên con người để xử lý các vấn đề phức tạp hơn, từ đó nâng cao trải nghiệm của khách hàng.',
      },
    ],
  },
  {
    id: 'ai-content-creation-monetization',
    title: 'Sáng tạo và Kiếm tiền từ Nội dung với AI',
    description:
      'Tận dụng AI để tạo và kiếm tiền từ nội dung trên các nền tảng: YouTube, TikTok, Instagram, blog và các khóa học trực tuyến.',
    duration: '220 phút',
    videoUrl: 'https://www.youtube.com/watch?v=duGOA6ZiGtE',
    difficulty: 'Trung bình',
    mainContent: [
      {
        heading: 'Kỷ nguyên Sáng tạo Nội dung của AI',
        details:
          'Sáng tạo nội dung không còn là cuộc chơi của riêng con người. AI đã trở thành một đối tác sáng tạo, giúp các nhà sáng tạo (content creators) tăng tốc độ sản xuất, đa dạng hóa nội dung và tiếp cận khán giả hiệu quả hơn. Từ việc viết kịch bản video, tạo hình ảnh minh họa, đến việc chỉnh sửa video tự động, AI đang phá vỡ các rào cản kỹ thuật và cho phép bất kỳ ai có ý tưởng đều có thể trở thành nhà sáng tạo.',
      },
      {
        heading: 'Quy trình Sáng tạo Nội dung Tự động',
        details:
          'Hãy tưởng tượng một quy trình hoàn toàn tự động: AI phân tích các chủ đề đang thịnh hành trên mạng xã hội. Dựa trên đó, nó viết ra một kịch bản video hấp dẫn. Một AI khác tạo ra giọng nói và hình ảnh/video minh họa phù hợp. Cuối cùng, một công cụ AI chỉnh sửa tất cả lại thành một video hoàn chỉnh, tạo phụ đề và thậm chí viết mô tả và tiêu đề tối ưu SEO cho YouTube. Đây không còn là viễn tưởng mà là một quy trình có thể thực hiện được ngay hôm nay, giúp bạn sản xuất nội dung ở quy mô chưa từng có.',
      },
      {
        heading: 'Kiếm tiền từ Nội dung do AI hỗ trợ',
        details:
          'Nội dung chất lượng là nền tảng của mọi chiến lược kiếm tiền. AI giúp bạn tạo ra các khóa học online, sách điện tử, bài viết blog chuyên sâu một cách nhanh chóng, từ đó tạo ra các sản phẩm số để bán. Nó cũng có thể tạo ra nội dung cho các chiến dịch affiliate marketing, viết bài đánh giá sản phẩm, hoặc tạo các video ngắn hấp dẫn trên TikTok/Instagram Reels để thu hút lưu lượng truy cập và tăng doanh thu quảng cáo. Chìa khóa là kết hợp sức mạnh của AI với sự độc đáo và góc nhìn cá nhân của bạn.',
      },
      {
        heading: 'Tối ưu hóa và Tương tác với Khán giả',
        details:
          'AI không chỉ giúp tạo nội dung mà còn giúp bạn hiểu rõ hơn về khán giả của mình. Các công cụ phân tích AI có thể cho bạn biết loại nội dung nào được yêu thích nhất, thời điểm đăng bài tốt nhất, và cảm xúc của khán giả về thương hiệu của bạn. Dựa trên đó, bạn có thể điều chỉnh chiến lược nội dung và tạo ra các cuộc thảo luận, câu đố hoặc cuộc thăm dò ý kiến do AI tạo ra để tăng cường sự tương tác và xây dựng một cộng đồng trung thành.',
      },
    ],
    objectives: [
      'Làm chủ việc tạo nội dung bằng AI cho nhiều nền tảng',
      'Triển khai các chiến lược kiếm tiền với nội dung được hỗ trợ bởi AI',
      'Mở rộng quy mô sản xuất nội dung với các quy trình tự động hóa',
      'Tối ưu hóa sự tương tác của khán giả với phân tích AI',
    ],
    prerequisites: [
      'Kinh nghiệm sáng tạo nội dung',
      'Hiểu biết về các nền tảng mạng xã hội',
      'Kỹ năng chỉnh sửa video/âm thanh cơ bản',
      'Kiến thức về các nền tảng kiếm tiền',
    ],
    exercises: [
      {
        title: 'Tự động hóa Kênh YouTube với sự hỗ trợ của AI',
        description: 'Tạo quy trình sản xuất nội dung tự động để phát triển kênh YouTube',
        difficulty: 'Nâng cao',
        procedure: [
          'Nghiên cứu các chủ đề thịnh hành với các công cụ phân tích xu hướng AI',
          'Tạo kịch bản video với các trợ lý viết AI',
          'Tạo thumbnail và tiêu đề với các công cụ thiết kế AI',
          'Tự động hóa việc chỉnh sửa video với các nền tảng video AI',
          'Tối ưu hóa SEO với nghiên cứu từ khóa AI',
          'Lên lịch và phân tích hiệu suất với phân tích AI',
        ],
      },
    ],
    realWorldApplications: [
      'Kinh doanh toàn thời gian với tư cách là nhà sáng tạo nội dung',
      'Tạo và bán các khóa học trực tuyến',
      'Tiếp thị liên kết với nội dung AI',
      'Xây dựng thương hiệu cá nhân và tầm ảnh hưởng',
      'Tối ưu hóa việc bán sản phẩm kỹ thuật số',
    ],
    relatedGames: [
      {
        id: 'game-design-studio-3d',
        name: 'Game Design Studio 3D',
        description:
          'Học cách tạo ra các sản phẩm sáng tạo và quản lý dự án, tương tự như việc xây dựng một kênh nội dung.',
      },
    ],
    aiTools: [
      'RunwayML để tạo video',
      'Copy.ai để viết kịch bản',
      'Canva AI để thiết kế thumbnail',
      'VidIQ để tối ưu hóa YouTube',
      'Hootsuite AI để quản lý mạng xã hội',
    ],
    vietnamContext: {
      title: 'Nền kinh tế sáng tạo (Creator Economy) tại Việt Nam',
      content: [
        'Việt Nam là một trong những thị trường có tốc độ phát triển nhà sáng tạo nội dung nhanh nhất Đông Nam Á, đặc biệt trên các nền tảng TikTok và YouTube.',
        'Các công cụ AI giúp các nhà sáng tạo Việt Nam vượt qua rào cản ngôn ngữ, tạo ra nội dung có thể tiếp cận khán giả toàn cầu.',
        'Thị trường kiếm tiền từ nội dung đang ngày càng đa dạng, từ quảng cáo, affiliate, đến bán sản phẩm số (khóa học, ebook) và merchandise.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Thành Nam (Châu Muối)',
      title: 'Nhà sáng tạo nội dung',
      company: 'Schannel',
      imageUrl: 'https://i.pravatar.cc/150?u=chaumuoi',
      quote:
        'Công nghệ thay đổi mỗi ngày, và AI là làn sóng lớn nhất. Người làm sáng tạo phải liên tục học hỏi, thử nghiệm để không bị tụt hậu. AI giúp mình làm được nhiều việc hơn, nhanh hơn, nhưng chất riêng và sự kết nối với khán giả vẫn là quan trọng nhất.',
    },
    quizzes: [
      {
        question: 'Công cụ AI nào có thể giúp bạn tạo video từ văn bản?',
        options: ['Canva', 'RunwayML', 'VidIQ', 'Hootsuite'],
        correctAnswerIndex: 1,
        explanation:
          'RunwayML là một nền tảng chỉnh sửa video và tạo nội dung bằng AI mạnh mẽ, bao gồm cả tính năng Gen-2 cho phép tạo video từ các câu lệnh văn bản (text-to-video).',
      },
    ],
  },
  {
    id: 'ai-healthcare-wellness',
    title: 'AI cho Sức khỏe & Chăm sóc Cá nhân',
    description:
      'Áp dụng AI trong chăm sóc sức khỏe và ευεξία: theo dõi sức khỏe, lập kế hoạch thể dục, hỗ trợ sức khỏe tâm thần và nghiên cứu y học.',
    duration: '160 phút',
    videoUrl: 'https://www.youtube.com/watch?v=7ZsyYCZB3Nw',
    difficulty: 'Trung bình',
    mainContent: [
      {
        heading: 'AI: Bác sĩ Cá nhân trong Túi của bạn',
        details:
          'AI đang thay đổi cách chúng ta chăm sóc sức khỏe, biến nó từ bị động (chữa bệnh) sang chủ động (phòng bệnh). Các thiết bị đeo tay kết hợp với AI có thể theo dõi các dấu hiệu sinh tồn 24/7, phát hiện những thay đổi bất thường và cảnh báo sớm về các nguy cơ sức khỏe tiềm ẩn. AI không thay thế bác sĩ, nhưng nó cung cấp cho bạn và bác sĩ của bạn dữ liệu quý giá để đưa ra các quyết định chăm sóc sức khỏe tốt hơn.',
      },
      {
        heading: 'Lập kế hoạch Tập luyện và Dinh dưỡng Siêu Cá nhân hóa',
        details:
          'Các kế hoạch tập luyện và dinh dưỡng chung chung thường không hiệu quả. AI có thể phân tích dữ liệu về cơ thể, lối sống, mục tiêu và thậm chí cả dữ liệu di truyền của bạn để tạo ra một lộ trình tối ưu. Nó có thể điều chỉnh cường độ tập luyện dựa trên chất lượng giấc ngủ của bạn đêm qua, hoặc đề xuất một bữa ăn nhẹ dựa trên mức năng lượng bạn đã tiêu thụ. Đây là cấp độ cá nhân hóa mà một huấn luyện viên con người khó có thể đạt được.',
      },
      {
        heading: 'Hỗ trợ Sức khỏe Tinh thần Kín đáo và Dễ tiếp cận',
        details:
          'Sức khỏe tinh thần là một lĩnh vực mà AI đang tạo ra tác động lớn. Các chatbot trị liệu cung cấp một không gian an toàn, không phán xét để người dùng có thể chia sẻ cảm xúc của mình bất cứ lúc nào. Các ứng dụng thiền định sử dụng AI để cá nhân hóa các bài tập dựa trên mức độ căng thẳng của bạn. Mặc dù không thể thay thế các chuyên gia, AI đang làm cho việc chăm sóc sức khỏe tinh thần trở nên dễ tiếp cận hơn bao giờ hết.',
      },
      {
        heading: 'AI trong Chẩn đoán Y khoa: Nhìn thấy những gì Mắt thường Bỏ lỡ',
        details:
          'Trong lĩnh vực chuyên nghiệp, AI đang được huấn luyện để phân tích hình ảnh y tế (như X-quang, MRI) và phát hiện các dấu hiệu bệnh tật, chẳng hạn như khối u ung thư, ở giai đoạn rất sớm với độ chính xác cao. Nó có thể phân tích hàng triệu hồ sơ bệnh án để tìm ra các mẫu hình và yếu tố nguy cơ, giúp các nhà nghiên cứu phát triển các phương pháp điều trị mới. Hiểu về các ứng dụng này giúp chúng ta thấy được tiềm năng to lớn của AI trong việc cứu sống con người.',
      },
    ],
    objectives: [
      'Triển khai hệ thống theo dõi sức khỏe được hỗ trợ bởi AI',
      'Tạo kế hoạch thể dục cá nhân hóa với huấn luyện viên AI',
      'Sử dụng AI để hỗ trợ sức khỏe tâm thần và trị liệu',
      'Hiểu các ứng dụng của AI trong chẩn đoán y khoa',
    ],
    prerequisites: [
      'Kiến thức cơ bản về sức khỏe và ευεξία',
      'Hiểu biết về công nghệ đeo được',
      'Quan tâm đến việc tối ưu hóa sức khỏe cá nhân',
      'Truy cập vào các thiết bị theo dõi sức khỏe',
    ],
    exercises: [
      {
        title: 'Bảng điều khiển Sức khỏe Cá nhân AI',
        description: 'Xây dựng hệ thống theo dõi sức khỏe toàn diện với thông tin chi tiết từ AI',
        difficulty: 'Trung bình',
        procedure: [
          'Kết nối các thiết bị đeo và ứng dụng sức khỏe',
          'Thiết lập phân tích AI cho các mẫu dữ liệu sức khỏe',
          'Tạo hệ thống đề xuất cá nhân hóa',
          'Triển khai cảnh báo sớm',
          'Tạo báo cáo sức khỏe hàng tuần với thông tin chi tiết từ AI',
          'Tích hợp với hệ thống của nhà cung cấp dịch vụ chăm sóc sức khỏe',
        ],
      },
    ],
    realWorldApplications: [
      'Tối ưu hóa sức khỏe cá nhân và tuổi thọ',
      'Quản lý bệnh mãn tính với theo dõi AI',
      'Hệ thống hỗ trợ và can thiệp sức khỏe tâm thần',
      'Huấn luyện thể dục và lập kế hoạch dinh dưỡng',
      'Công cụ hỗ trợ chuyên gia chăm sóc sức khỏe',
    ],
    relatedGames: [
      {
        id: 'gene-editing-lab-3d',
        name: 'Gene Editing Lab 3D',
        description: 'Khám phá một lĩnh vực công nghệ sinh học tiên tiến khác có tác động lớn đến y học và sức khỏe.',
      },
    ],
    aiTools: [
      'Thông tin chi tiết từ Apple Health AI',
      'Huấn luyện viên AI của Fitbit Premium',
      'Theo dõi dinh dưỡng AI của MyFitnessPal',
      'Hướng dẫn thiền định AI của Headspace',
      'Trình kiểm tra triệu chứng Ada Health AI',
    ],
    vietnamContext: {
      title: 'Y tế thông minh (Smart Healthcare) tại Việt Nam',
      content: [
        'Nhiều bệnh viện lớn tại Việt Nam như Vinmec, Bệnh viện Đại học Y Dược TP.HCM đang ứng dụng AI trong chẩn đoán hình ảnh và quản lý bệnh án điện tử.',
        'Các startup Health-tech Việt Nam đang phát triển mạnh mẽ, cung cấp các giải pháp từ đặt lịch khám online, tư vấn từ xa, đến các thiết bị theo dõi sức khỏe cá nhân.',
        'Chính phủ đang thúc đẩy chương trình chuyển đổi số y tế quốc gia, hướng tới việc mỗi người dân có một hồ sơ sức khỏe điện tử được quản lý và phân tích bằng AI.',
      ],
    },
    careerConnect: {
      name: 'Bác sĩ Bùi Quang Trung',
      title: 'Trưởng khoa Chẩn đoán Hình ảnh',
      company: 'Bệnh viện Vinmec',
      imageUrl: 'https://i.pravatar.cc/150?u=buiquangtrung',
      quote:
        'AI là "con mắt thứ hai" của người bác sĩ, giúp chúng tôi phát hiện những tổn thương nhỏ nhất mà mắt thường có thể bỏ sót. Nó không thay thế chúng tôi, mà giúp chúng tôi làm việc tốt hơn.',
    },
    quizzes: [
      {
        question: 'Ứng dụng nào của AI trong y tế giúp phát hiện bệnh sớm từ hình ảnh X-quang, MRI?',
        options: [
          'Chatbot trị liệu',
          'Phân tích hình ảnh y tế (Medical Image Analysis)',
          'Lập kế hoạch dinh dưỡng',
          'Theo dõi giấc ngủ',
        ],
        correctAnswerIndex: 1,
        explanation:
          'AI, đặc biệt là các mô hình học sâu (deep learning), được huấn luyện trên hàng triệu hình ảnh y tế để nhận diện các mẫu hình bất thường, giúp chẩn đoán bệnh như ung thư ở giai đoạn sớm với độ chính xác cao.',
      },
    ],
  },
  {
    id: 'ai-financial-planning-investment',
    title: 'Lập kế hoạch Tài chính & Đầu tư với AI',
    description:
      'Sử dụng AI để lập kế hoạch tài chính, chiến lược đầu tư, đánh giá rủi ro và tối ưu hóa việc xây dựng tài sản.',
    duration: '190 phút',
    videoUrl: 'https://www.youtube.com/watch?v=i98JHmss-AQ',
    difficulty: 'Nâng cao',
    mainContent: [
      {
        heading: 'AI: Cố vấn Tài chính Cá nhân 4.0',
        details:
          'Quản lý tài chính cá nhân và đầu tư là một mê cung phức tạp. AI đang dân chủ hóa lĩnh vực này, mang đến những công cụ phân tích và lập kế hoạch mạnh mẽ mà trước đây chỉ dành cho các chuyên gia. Từ việc tự động phân loại chi tiêu, dự báo dòng tiền, đến việc đề xuất các chiến lược đầu tư dựa trên mức độ chấp nhận rủi ro của bạn, AI giúp bạn có một cái nhìn toàn cảnh và đưa ra các quyết định tài chính thông minh hơn.',
      },
      {
        heading: 'Robo-Advisor: Tự động hóa Danh mục Đầu tư',
        details:
          'Robo-advisor là các nền tảng đầu tư tự động sử dụng thuật toán AI. Bạn chỉ cần xác định mục tiêu tài chính (ví dụ: tiết kiệm để nghỉ hưu, mua nhà) và mức độ rủi ro, AI sẽ tự động xây dựng và quản lý một danh mục đầu tư đa dạng cho bạn. Nó tự động tái cân bằng danh mục khi thị trường biến động và tối ưu hóa thuế, những công việc phức tạp mà hầu hết các nhà đầu tư cá nhân không có thời gian hoặc kiến thức để thực hiện.',
      },
      {
        heading: 'Phân tích Rủi ro và Đánh giá Thị trường',
        details:
          'Thị trường tài chính biến động không ngừng. AI có thể xử lý một lượng lớn dữ liệu trong thời gian thực - từ tin tức kinh tế, báo cáo tài chính của công ty, đến các cuộc thảo luận trên mạng xã hội - để đánh giá tâm lý thị trường (market sentiment). Nó giúp các nhà đầu tư nhận diện sớm các cơ hội và rủi ro tiềm ẩn, vượt qua các thành kiến cảm tính và đưa ra quyết định dựa trên dữ liệu.',
      },
      {
        heading: 'Xây dựng Kế hoạch Tài chính Toàn diện',
        details:
          'Một kế hoạch tài chính tốt không chỉ là về đầu tư. AI có thể giúp bạn tối ưu hóa mọi khía cạnh: tự động tạo ngân sách dựa trên thói quen chi tiêu, đề xuất các gói bảo hiểm phù hợp với nhu_cầu của bạn, lập kế hoạch trả nợ một cách hiệu quả nhất, và mô phỏng các kịch bản tài chính khác nhau để bạn chuẩn bị cho tương lai. AI đóng vai trò như một người giám sát tài chính khách quan, giúp bạn luôn đi đúng hướng tới các mục tiêu của mình.',
      },
    ],
    objectives: [
      'Triển khai quản lý danh mục đầu tư dựa trên AI',
      'Tạo ngân sách tự động với phân loại chi tiêu bằng AI',
      'Sử dụng AI để đánh giá rủi ro và tối ưu hóa bảo hiểm',
      'Phát triển các chiến lược xây dựng tài sản với thông tin chi tiết từ AI',
    ],
    prerequisites: [
      'Kiến thức tài chính cơ bản',
      'Hiểu biết về các nguyên tắc đầu tư',
      'Truy cập vào các tài khoản và dữ liệu tài chính',
      'Quan tâm đến việc tối ưu hóa tài chính cá nhân',
    ],
    exercises: [
      {
        title: 'Trình tối ưu hóa Danh mục Đầu tư AI',
        description: 'Xây dựng hệ thống AI để tối ưu hóa danh mục đầu tư dựa trên mục tiêu và mức độ chấp nhận rủi ro',
        difficulty: 'Nâng cao',
        procedure: [
          'Kết nối các tài khoản đầu tư với các nền tảng phân tích AI',
          'Xác định các mục tiêu đầu tư và các thông số chấp nhận rủi ro',
          'Thiết lập cảnh báo tái cân bằng danh mục được hỗ trợ bởi AI',
          'Triển khai các chiến lược trung bình giá tự động',
          'Tạo phân tích tâm lý thị trường dựa trên AI',
          'Tạo báo cáo hiệu suất hàng tháng với thông tin chi tiết từ AI',
        ],
      },
    ],
    realWorldApplications: [
      'Xây dựng tài sản cá nhân và lập kế hoạch nghỉ hưu',
      'Quản lý tài chính doanh nghiệp nhỏ',
      'Tối ưu hóa đầu tư bất động sản',
      'Quản lý danh mục tiền điện tử',
      'Chiến lược tối ưu hóa thuế với AI',
    ],
    relatedGames: [
      {
        id: 'economic-simulation-3d',
        name: 'Economic Simulation 3D',
        description:
          'Học về các nguyên tắc kinh tế vĩ mô và vi mô, nền tảng để hiểu về thị trường tài chính và đầu tư.',
      },
    ],
    aiTools: [
      'Robo-advisor AI của Betterment',
      'Theo dõi tài chính AI của Personal Capital',
      'Thông tin chi tiết về ngân sách AI của YNAB',
      'Tối ưu hóa thuế AI của TaxAct',
      'Nghiên cứu đầu tư AI của Robinhood',
    ],
    vietnamContext: {
      title: 'Fintech và Đầu tư 4.0 tại Việt Nam',
      content: [
        'Sự bùng nổ của các ứng dụng Fintech tại Việt Nam như Finhay, Tikop, Infina đang giúp giới trẻ tiếp cận đầu tư một cách dễ dàng hơn.',
        'Các ứng dụng này sử dụng robo-advisor để tự động phân bổ vốn vào các quỹ đầu tư, phù hợp với những người mới bắt đầu không có nhiều kiến thức chuyên sâu.',
        'Ngân hàng nhà nước và các cơ quan chính phủ đang xây dựng hành lang pháp lý cho Fintech, tạo điều kiện cho thị trường phát triển minh bạch và an toàn hơn.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Hoàng Giang',
      title: 'Chủ tịch',
      company: 'Công ty Chứng khoán DNSE',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyenhoanggiang',
      quote:
        'Công nghệ đang phá vỡ ngành tài chính truyền thống. Sứ mệnh của chúng tôi là dùng AI để mọi người dân Việt Nam, dù có bao nhiêu tiền, cũng có thể trở thành một nhà đầu tư thông thái.',
    },
    quizzes: [
      {
        question: 'Robo-advisor là gì?',
        options: [
          'Một con robot vật lý giao dịch tại sàn chứng khoán',
          'Một chuyên gia tài chính trả lời qua điện thoại',
          'Một nền tảng kỹ thuật số cung cấp dịch vụ quản lý tài chính tự động, dựa trên thuật toán',
          'Một ứng dụng dự báo thời tiết',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Robo-advisors sử dụng các thuật toán để xây dựng và quản lý danh mục đầu tư của khách hàng, thường có chi phí thấp hơn so với các cố vấn tài chính con người.',
      },
    ],
  },
];
