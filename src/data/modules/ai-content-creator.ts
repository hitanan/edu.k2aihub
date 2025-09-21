import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export const aiContentCreatorLessons: BaseLessonData[] = [
  {
    id: 'ai-video-content-creation',
    title: 'Làm chủ Sáng tạo Nội dung Video với AI',
    description:
      'Học cách sử dụng AI để tạo nội dung video chất lượng cao cho TikTok, YouTube và Instagram. Từ viết kịch bản đến chỉnh sửa video bằng các công cụ AI.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=dj-miOAo3LM',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    objectives: [
      'Sử dụng AI để viết kịch bản video hấp dẫn',
      'Làm chủ các công cụ chỉnh sửa video AI như RunwayML, Synthesia',
      'Tạo ảnh thumbnail và đồ họa với Midjourney và Canva AI',
      'Tối ưu hóa nội dung cho từng nền tảng riêng biệt',
      'Phân tích hiệu suất và cải thiện nội dung',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về các nền tảng mạng xã hội',
      'Kỹ năng sử dụng máy tính và điện thoại thông minh',
      'Tư duy sáng tạo và kể chuyện',
    ],
    aiTools: [
      'ChatGPT để viết kịch bản',
      'RunwayML để tạo video',
      'Synthesia cho người thuyết trình AI',
      'Midjourney cho ảnh thumbnail',
      'Canva AI Magic Studio',
      'Descript để chỉnh sửa giọng nói',
    ],
    platforms: ['TikTok', 'YouTube', 'Instagram Reels', 'Facebook'],
    techniques: [
      'Tạo kịch bản được hỗ trợ bởi AI',
      'Chỉnh sửa video tự động',
      'Nhân bản và tổng hợp giọng nói',
      'Tối ưu hóa thumbnail bằng AI',
      'Cá nhân hóa nội dung',
    ],
    costRange: '0-50 USD/tháng',
    estimatedEarnings: '500-5000 USD/tháng',
    exercises: [
      {
        title: 'Tạo Video TikTok với AI trong 10 phút',
        description: 'Sử dụng các công cụ AI để tạo một video TikTok hoàn chỉnh từ ý tưởng đến xuất bản',
        difficulty: 'Trung bình',
        materials: [
          'Tài khoản ChatGPT',
          'Bản dùng thử RunwayML',
          'Tài khoản Canva Pro',
          'Điện thoại thông minh có camera tốt',
        ],
        procedure: [
          'Lên ý tưởng video với kỹ thuật prompt engineering của ChatGPT',
          'Tạo kịch bản chi tiết và storyboard với sự hỗ trợ của AI',
          'Tạo cảnh quay video bằng cách sử dụng text-to-video của RunwayML',
          'Tạo thumbnail hấp dẫn với các prompt của Midjourney',
          'Chỉnh sửa và hoàn thiện video với các công cụ chỉnh sửa AI',
          'Viết chú thích và hashtag với tối ưu hóa AI',
          'Lên lịch và xuất bản video trên TikTok',
          'Theo dõi hiệu suất và thu thập thông tin chi tiết',
        ],
        expectedResults: 'Video TikTok chất lượng cao với tỷ lệ tương tác 3-5%',
        solution: 'Kết hợp hiệu quả các công cụ AI tạo ra nội dung có tiềm năng lan truyền cao',
      },
      {
        title: 'Chiến lược Kênh YouTube với Nội dung AI',
        description: 'Xây dựng kênh YouTube chuyên nghiệp với chiến lược nội dung do AI tạo ra',
        difficulty: 'Nâng cao',
        materials: [
          'YouTube Creator Studio',
          'VidIQ hoặc TubeBuddy',
          'Công cụ tạo video AI',
          'Công cụ theo dõi phân tích',
        ],
        procedure: [
          'Nghiên cứu thị trường ngách và đối tượng mục tiêu với thông tin chi tiết từ AI',
          'Tạo lịch nội dung 30 ngày với sự hỗ trợ của AI',
          'Phát triển thương hiệu kênh với các công cụ thiết kế AI',
          'Tạo loạt video đầu tiên với quy trình làm việc AI nhất quán',
          'Tối ưu hóa SEO và thumbnail với các đề xuất của AI',
          'Tương tác với khán giả thông qua các phản hồi được hỗ trợ bởi AI',
          'Mở rộng quy mô sản xuất nội dung với tự động hóa',
        ],
        expectedResults: 'Kênh YouTube với hơn 1000 người đăng ký trong 3 tháng',
        solution: 'Cách tiếp cận có hệ thống sử dụng AI ở mọi giai đoạn của việc tạo nội dung',
      },
    ],
    realWorldApplications: [
      'Các agency sáng tạo nội dung sử dụng AI để mở rộng quy mô sản xuất',
      'Các doanh nghiệp nhỏ tạo nội dung marketing với ngân sách thấp',
      'Những người có ảnh hưởng duy trì sự nhất quán khi đi du lịch hoặc bận rộn',
      'Các nhà sáng tạo giáo dục giải thích các chủ đề phức tạp bằng hình ảnh AI',
      'Các kênh giải trí tạo nội dung lan truyền với sự hỗ trợ của AI',
    ],
    caseStudies: [
      {
        title: 'Agency Sáng tạo Mở rộng quy mô với Công cụ AI',
        organization: 'Digital Marketing Agency Việt Nam',
        problem: 'Agency cần tạo hơn 100 video/tháng cho khách hàng nhưng thiếu nhân lực',
        solution:
          'Triển khai quy trình làm việc AI: ChatGPT cho kịch bản, RunwayML cho video, quy trình chỉnh sửa tự động',
        impact: 'Tăng 300% sản lượng nội dung, giảm 60% chi phí sản xuất, sự hài lòng của khách hàng 95%',
        innovations: [
          'Mẫu nội dung được hỗ trợ bởi AI cho các ngành khác nhau',
          'Kiểm soát chất lượng tự động với phân tích AI',
          'Tạo nội dung được cá nhân hóa cho từng khách hàng',
        ],
      },
      {
        title: 'Nhà sáng tạo Solo đạt Thu nhập 6 con số',
        organization: 'Nhà sáng tạo Nội dung Độc lập',
        problem: 'Nhà sáng tạo muốn mở rộng thu nhập nhưng không thể làm việc 24/7',
        solution: 'Xây dựng hệ thống nội dung AI: nhân bản giọng nói, chỉnh sửa tự động, thumbnail do AI tạo ra',
        impact: 'Từ 1000 USD/tháng lên 15000 USD/tháng trong 6 tháng',
        innovations: [
          'Nhân bản giọng nói AI cho nhiều ngôn ngữ',
          'Thử nghiệm A/B thumbnail tự động',
          'Phân tích khán giả bằng AI để tối ưu hóa nội dung',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Toàn diện về RunwayML',
        url: 'https://runwayml.com/tutorials',
        type: 'Tutorial',
      },
      {
        title: 'Quy trình Sáng tạo Nội dung AI',
        url: 'https://creator.ai/workflow',
        type: 'Documentation',
      },
      {
        title: 'Hướng dẫn Quỹ Nhà sáng tạo TikTok',
        url: 'https://www.tiktok.com/creators/creator-fund',
        type: 'Official Guide',
      },
    ],
    vietnamContext: {
      title: 'Bùng nổ Sáng tạo Nội dung AI tại Việt Nam',
      content: [
        'Thị trường sáng tạo nội dung Việt Nam đang chứng kiến sự tăng trưởng bùng nổ, đặc biệt trên các nền tảng video ngắn như TikTok và YouTube Shorts.',
        'Các nhà sáng tạo Việt Nam đang nhanh chóng áp dụng các công cụ AI để tăng tốc độ sản xuất, cải thiện chất lượng và thử nghiệm các định dạng nội dung mới.',
        'Các thương hiệu và agency tại Việt Nam sử dụng AI để tạo ra các chiến dịch marketing linh hoạt, cá nhân hóa và hiệu quả hơn về chi phí.',
      ],
    },
    careerConnect: {
      name: 'Chị Helly Tống',
      title: 'Nhà sáng tạo nội dung, Doanh nhân',
      company: 'The Yên Concept, Lại Đây Refill Station',
      imageUrl: 'https://i.pravatar.cc/150?u=helly-tong',
      quote:
        'AI giúp mình hệ thống hóa ý tưởng và tự động hóa những công việc lặp đi lặp lại, để mình có nhiều thời gian hơn cho việc sáng tạo cốt lõi và kết nối với cộng đồng. Nó là một người trợ lý đắc lực cho bất kỳ nhà sáng tạo nào.',
    },
    quizzes: [
      {
        question: 'Công cụ AI nào sau đây phù hợp nhất để viết kịch bản video?',
        options: ['Midjourney', 'Synthesia', 'ChatGPT', 'Descript'],
        correctAnswerIndex: 2,
        explanation:
          'ChatGPT là một mô hình ngôn ngữ lớn, rất mạnh mẽ trong việc tạo ra các ý tưởng, viết và tinh chỉnh kịch bản cho video.',
      },
      {
        question: 'RunwayML chủ yếu được sử dụng để làm gì trong quy trình sáng tạo nội dung?',
        options: ['Chỉnh sửa giọng nói', 'Tạo video từ văn bản hoặc hình ảnh', 'Thiết kế đồ họa', 'Viết kịch bản'],
        correctAnswerIndex: 1,
        explanation:
          'RunwayML là một trong những công cụ AI hàng đầu cho phép tạo ra các cảnh quay video từ mô tả văn bản (text-to-video) hoặc từ một hình ảnh tĩnh (image-to-video).',
      },
    ],
    faqs: [
      {
        question: 'Tôi có cần phải xuất hiện trên camera để tạo video không?',
        answer:
          'Không cần thiết. Với các công cụ như Synthesia, bạn có thể tạo ra các video với người thuyết trình AI (avatar) chuyên nghiệp. Bạn cũng có thể tạo video hoàn toàn bằng cảnh quay do AI tạo ra (với RunwayML) hoặc video hoạt hình, chỉ cần giọng nói của bạn hoặc giọng nói do AI tạo ra.',
      },
      {
        question: 'Làm thế nào để nội dung do AI tạo ra không bị nhàm chán và giống nhau?',
        answer:
          'Chìa khóa nằm ở "prompt engineering" và sự sáng tạo của bạn. Hãy kết hợp các phong cách khác nhau, thêm vào góc nhìn và câu chuyện cá nhân của bạn. Sử dụng AI như một công cụ để thực thi ý tưởng, không phải để thay thế ý tưởng. Hậu kỳ cũng rất quan trọng để tạo ra dấu ấn riêng.',
      },
      {
        question: 'Sử dụng giọng nói do AI tạo ra có ảnh hưởng đến việc kiếm tiền trên YouTube không?',
        answer:
          'Chính sách của YouTube cho phép sử dụng giọng nói tổng hợp, miễn là nội dung của bạn mang lại giá trị, có tính bình luận, giáo dục và không phải là nội dung lặp lại, spam. Chất lượng và sự độc đáo của nội dung vẫn là yếu tố quan trọng nhất.',
      },
      {
        question: 'Prompt Engineering cho video khác gì so với cho hình ảnh?',
        answer:
          'Prompt cho video phức tạp hơn vì bạn cần mô tả cả chuyển động, diễn biến của cảnh quay và phong cách điện ảnh. Ví dụ, bạn cần thêm các thuật ngữ như "dolly shot", "crane shot", "slow motion" để kiểm soát chuyển động của camera ảo.',
      },
      {
        question: 'Chất lượng video do AI tạo ra đã đủ tốt để sử dụng chuyên nghiệp chưa?',
        answer:
          'Chất lượng đang cải thiện rất nhanh. Hiện tại, video AI phù hợp nhất cho các video ngắn trên mạng xã hội, video giải thích hoặc các cảnh quay bổ trợ (B-roll). Đối với các sản phẩm điện ảnh cao cấp, nó vẫn thường được dùng ở khâu lên ý tưởng hoặc tạo hiệu ứng đặc biệt hơn là tạo toàn bộ phim.',
      },
      {
        question: 'Làm thế nào để đảm bảo tính nhất quán về nhân vật hoặc phong cách qua nhiều cảnh quay AI?',
        answer:
          'Đây là một trong những thách thức lớn nhất. Các công cụ như RunwayML đang giới thiệu các tính năng "character consistency" để giữ một nhân vật không đổi. Một mẹo khác là mô tả nhân vật hoặc phong cách thật chi tiết và sử dụng cùng một "seed" (nếu nền tảng hỗ trợ) cho các lần tạo khác nhau.',
      },
      {
        question: 'Chi phí để sử dụng các công cụ video AI này là bao nhiêu?',
        answer:
          'Hầu hết các nền tảng hoạt động theo mô hình đăng ký (subscription), với chi phí từ 20-100 USD mỗi tháng tùy thuộc vào số lượng video bạn muốn tạo và các tính năng nâng cao. Nhiều công cụ cũng có bản dùng thử miễn phí để bạn trải nghiệm.',
      },
      {
        question: 'AI có thể tự động thêm nhạc nền và hiệu ứng âm thanh không?',
        answer:
          'Một số công cụ chỉnh sửa video AI có khả năng đề xuất và tự động thêm nhạc nền phù hợp với tâm trạng của video. Tuy nhiên, việc thiết kế âm thanh chi tiết (sound design) vẫn thường đòi hỏi sự can thiệp của con người để đạt hiệu quả tốt nhất.',
      },
      {
        question: 'Tôi có thể sử dụng cảnh quay có sẵn và dùng AI để chỉnh sửa nó không?',
        answer:
          'Chắc chắn. Các công cụ như Descript cho phép bạn chỉnh sửa video bằng cách chỉnh sửa văn bản phiên âm. Các công cụ khác có thể tự động cắt bỏ những khoảng lặng, thêm phụ đề, hoặc thậm chí thay đổi nền của video (roto-scoping) một cách nhanh chóng.',
      },
      {
        question: 'Tương lai của việc tạo video với AI sẽ như thế nào?',
        answer:
          'Trong tương lai gần, chúng ta có thể sẽ thấy các mô hình AI có khả năng tạo ra các video dài hơn, phức tạp hơn với cốt truyện mạch lạc chỉ từ một vài câu lệnh. Việc tích hợp AI vào các phần mềm chỉnh sửa chuyên nghiệp như Adobe Premiere Pro hay DaVinci Resolve cũng sẽ ngày càng sâu sắc hơn, trở thành một phần không thể thiếu của quy trình sản xuất.',
      },
    ],
  },
  {
    id: 'ai-powered-social-media-automation',
    title: 'Tự động hóa Mạng xã hội với Sức mạnh AI',
    description:
      'Tự động hóa toàn bộ quy trình mạng xã hội từ tạo nội dung đến tương tác với các công cụ AI tiên tiến.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=C75y3n2Ra-w',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    objectives: [
      'Thiết lập quy trình tự động hóa cho nhiều nền tảng',
      'Sử dụng AI để lên lịch nội dung thông minh',
      'Tự động hóa tương tác và quản lý cộng đồng',
      'Triển khai chatbot AI cho dịch vụ khách hàng',
      'Theo dõi và tối ưu hóa hiệu suất tự động',
    ],
    prerequisites: [
      'Kinh nghiệm quản lý mạng xã hội',
      'Hiểu biết cơ bản về tự động hóa marketing',
      'Kỹ năng sử dụng API và các công cụ tích hợp',
    ],
    aiTools: [
      'Hootsuite với các tính năng AI',
      'Buffer AI Assistant',
      'Zapier để tự động hóa',
      'ManyChat cho chatbot',
      'Brandwatch để lắng nghe xã hội',
    ],
    platforms: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'TikTok'],
    techniques: [
      'Lên lịch nội dung thông minh',
      'Hệ thống phản hồi tự động',
      'Tối ưu hóa hashtag được hỗ trợ bởi AI',
      'Phân tích dự đoán',
      'Cá nhân hóa nội dung động',
    ],
    costRange: '50-200 USD/tháng',
    estimatedEarnings: '2000-10000 USD/tháng',
    exercises: [
      {
        title: 'Thiết lập Quy trình Tự động hóa Hoàn chỉnh',
        description: 'Tạo một hệ thống tự động hóa quản lý 5 nền tảng xã hội cùng một lúc',
        difficulty: 'Nâng cao',
        materials: [
          'Nhiều tài khoản mạng xã hội',
          'Đăng ký các công cụ tự động hóa',
          'Công cụ tạo nội dung AI',
          'Thiết lập theo dõi phân tích',
        ],
        procedure: [
          'Sơ đồ hóa quy trình làm việc mạng xã hội hiện tại',
          'Xác định các cơ hội tự động hóa',
          'Thiết lập đăng bài đa nền tảng với lịch trình thông minh',
          'Triển khai chatbot AI cho các truy vấn phổ biến',
          'Tạo các quy tắc tương tác tự động',
          'Thiết lập bảng điều khiển theo dõi hiệu suất',
          'Kiểm tra và tối ưu hóa các quy tắc tự động hóa',
        ],
        expectedResults: 'Tiết kiệm 80% thời gian với sự tương tác được duy trì hoặc cải thiện',
        solution: 'Tự động hóa thông minh giữ được nét con người trong hiệu quả do AI mang lại',
      },
    ],
    realWorldApplications: [
      'Tự động đăng bài và lên lịch cho các chiến dịch marketing.',
      'Phân tích cảm xúc của khách hàng và phản hồi tự động.',
      'Tạo báo cáo phân tích hiệu suất mạng xã hội tự động.',
      'Chatbot trả lời các câu hỏi thường gặp trên Fanpage.',
      'Gợi ý nội dung và thời điểm đăng bài tối ưu.',
    ],
    faqs: [
      {
        question: 'Liệu tự động hóa có làm mất đi tính "con người" của thương hiệu không?',
        answer:
          'Đây là một lo ngại chính đáng. Chìa khóa là sử dụng tự động hóa cho các tác vụ lặp đi lặp lại (như lên lịch đăng bài, báo cáo) và dành thời gian con người cho các tương tác sâu hơn (như trả lời các bình luận phức tạp, tạo chiến lược sáng tạo). Tự động hóa nên là công cụ giải phóng bạn, không phải thay thế bạn.',
      },
      {
        question: 'Các công cụ AI có thể tự tạo ra nội dung hoàn toàn mới cho mạng xã hội không?',
        answer:
          'Có, các công cụ như Jasper hay Copy.ai có thể viết các bài đăng, tweet, hoặc mô tả sản phẩm từ một vài gợi ý. Tuy nhiên, kết quả tốt nhất thường đến từ việc con người chỉnh sửa, thêm thắt góc nhìn và cá tính riêng vào nội dung do AI tạo ra.',
      },
      {
        question: 'Làm thế nào AI xác định được "thời điểm tốt nhất" để đăng bài?',
        answer:
          'Các công cụ như Buffer hoặc Hootsuite phân tích dữ liệu lịch sử tương tác của đối tượng mục tiêu của bạn. Chúng xác định các khung giờ mà người theo dõi của bạn hoạt động tích cực nhất và đề xuất lịch đăng bài dựa trên dữ liệu đó để tối đa hóa phạm vi tiếp cận và tương tác.',
      },
      {
        question: 'Sử dụng chatbot trên Fanpage có hiệu quả không?',
        answer:
          'Rất hiệu quả nếu được thiết lập đúng cách. Chatbot có thể xử lý ngay lập tức 80% các câu hỏi phổ biến (giá cả, địa chỉ, giờ làm việc), giúp giảm thời gian chờ đợi của khách hàng và giải phóng nhân viên hỗ trợ. Đối với các câu hỏi phức tạp, chatbot nên có khả năng chuyển cuộc trò chuyện cho người thật.',
      },
      {
        question: 'AI có thể giúp tôi theo dõi đối thủ cạnh tranh trên mạng xã hội không?',
        answer:
          'Chắc chắn. Các nền tảng như Brand24 hoặc Sprout Social sử dụng AI để theo dõi các lượt đề cập (mentions) về đối thủ, phân tích chiến lược nội dung của họ, và xác định các xu hướng trong ngành. Điều này giúp bạn có cái nhìn toàn cảnh về thị trường và đưa ra quyết định tốt hơn.',
      },
      {
        question: 'Chi phí cho các công cụ tự động hóa mạng xã hội bằng AI là bao nhiêu?',
        answer:
          'Chi phí rất đa dạng. Có những công cụ miễn phí với tính năng hạn chế. Các gói trả phí thường bắt đầu từ khoảng 50-150 USD/tháng cho các doanh nghiệp nhỏ và có thể lên đến hàng nghìn USD cho các doanh nghiệp lớn với nhu cầu phân tích sâu và quản lý nhiều tài khoản.',
      },
      {
        question: 'Làm thế nào để bắt đầu với tự động hóa mạng xã hội?',
        answer:
          'Hãy bắt đầu nhỏ. Chọn một tác vụ lặp đi lặp lại và tốn nhiều thời gian nhất, ví dụ như lên lịch đăng bài. Sử dụng một công cụ như Buffer hoặc Later để tự động hóa việc đó. Khi đã quen, bạn có thể khám phá các tính năng nâng cao hơn như phân tích hoặc chatbot.',
      },
      {
        question: 'AI có thể phân tích hình ảnh và video trên mạng xã hội không?',
        answer:
          'Có. AI có thể nhận dạng logo, sản phẩm, hoặc thậm chí cả cảm xúc trên khuôn mặt trong hình ảnh và video. Điều này rất hữu ích để theo dõi cách thương hiệu của bạn xuất hiện trong nội dung do người dùng tạo (UGC) hoặc để phân tích chiến lược hình ảnh của đối thủ.',
      },
      {
        question: 'Rủi ro lớn nhất khi sử dụng tự động hóa AI trên mạng xã hội là gì?',
        answer:
          'Rủi ro lớn nhất là thiết lập và quên đi. Thị trường và các cuộc trò chuyện trên mạng xã hội thay đổi liên tục. Nếu bạn tự động hóa hoàn toàn mà không có sự giám sát, thương hiệu của bạn có thể trở nên lạc lõng, không phù hợp, hoặc bỏ lỡ các cơ hội tương tác quan trọng. Luôn cần có sự kết hợp giữa tự động hóa và giám sát của con người.',
      },
      {
        question: 'Liệu AI có thể giúp tạo ra các chiến dịch quảng cáo trả phí (paid ads) hiệu quả hơn không?',
        answer:
          'Có. Các nền tảng quảng cáo như Facebook Ads và Google Ads sử dụng AI rất nhiều để tối ưu hóa việc nhắm mục tiêu (targeting), đề xuất các nhóm đối tượng mới, và tự động phân bổ ngân sách vào các quảng cáo hoạt động hiệu quả nhất. Các công cụ của bên thứ ba còn có thể giúp tạo ra các biến thể quảng cáo để thử nghiệm A/B một cách nhanh chóng.',
      },
    ],
  },
  {
    id: 'ai-personal-branding-strategy',
    title: 'Xây dựng Thương hiệu Cá nhân và Tầm ảnh hưởng với AI',
    description: 'Xây dựng thương hiệu cá nhân mạnh mẽ và thiết lập vị thế chuyên gia với sức mạnh của các công cụ AI.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=KfoenLbhOTI',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    objectives: [
      'Phát triển nhận diện thương hiệu cá nhân độc đáo với thông tin chi tiết từ AI',
      'Tạo ra tiếng nói thương hiệu nhất quán trên các nền tảng',
      'Xây dựng chiến lược nội dung chuyên gia',
      'Thiết lập tầm ảnh hưởng trong lĩnh vực đã chọn',
      'Mở rộng sự hiện diện của thương hiệu cá nhân trên toàn cầu',
    ],
    prerequisites: [
      'Tầm nhìn rõ ràng về định hướng thương hiệu cá nhân',
      'Chuyên môn hoặc đam mê trong một lĩnh vực cụ thể',
      'Cam kết tạo nội dung nhất quán',
    ],
    aiTools: [
      'Brand24 để theo dõi thương hiệu',
      'Jasper AI cho tiếng nói thương hiệu nhất quán',
      'Lately AI để tái sử dụng nội dung',
      'Crystal để hiểu sâu về tính cách',
      'Mention để theo dõi danh tiếng',
    ],
    platforms: ['LinkedIn', 'Twitter', 'Medium', 'YouTube', 'Website cá nhân'],
    techniques: [
      'Nghiên cứu khán giả được hỗ trợ bởi AI',
      'Phát triển tiếng nói thương hiệu',
      'Tạo nội dung chuyên gia',
      'Kết nối chiến lược',
      'Quản lý danh tiếng',
    ],
    costRange: '30-150 USD/tháng',
    estimatedEarnings: '1000-20000 USD/tháng',
    exercises: [
      {
        title: 'Phát triển Kế hoạch chi tiết Thương hiệu Cá nhân',
        description: 'Tạo một chiến lược thương hiệu cá nhân toàn diện với sự hỗ trợ của AI',
        difficulty: 'Trung bình',
        materials: [
          'Công cụ nghiên cứu thương hiệu',
          'Nền tảng tạo nội dung',
          'Trợ lý viết AI',
          'Công cụ thiết kế cho thương hiệu hình ảnh',
        ],
        procedure: [
          'Thực hiện nghiên cứu khán giả được hỗ trợ bởi AI',
          'Xác định đề xuất giá trị độc đáo',
          'Phát triển tiếng nói và thông điệp thương hiệu',
          'Tạo nhận diện thương hiệu hình ảnh',
          'Lên kế hoạch cho các trụ cột và chủ đề nội dung',
          'Thiết lập chiến lược phân phối nội dung',
          'Thiết lập các chỉ số đo lường',
        ],
        expectedResults: 'Thương hiệu cá nhân gắn kết với định vị rõ ràng và tiếng nói nhất quán',
        solution: 'Cách tiếp cận dựa trên dữ liệu để xây dựng thương hiệu cá nhân với tối ưu hóa AI',
      },
    ],
    realWorldApplications: [
      'Các doanh nhân xây dựng uy tín cho startup',
      'Các chuyên gia chuyển đổi nghề nghiệp',
      'Các nhà tư vấn thiết lập vị thế chuyên gia',
      'Các diễn giả xây dựng cơ hội phát biểu',
    ],
    caseStudies: [
      {
        title: 'Thương hiệu Cá nhân của CEO Công nghệ',
        organization: 'CEO Startup FinTech',
        problem: 'Không được biết đến trong thị trường fintech Việt Nam cạnh tranh',
        solution: 'Chiến lược xây dựng thương hiệu cá nhân được hỗ trợ bởi AI tập trung vào vị thế chuyên gia',
        impact: 'Từ 500 người theo dõi trên LinkedIn lên 50K trong 12 tháng, cơ hội phát biểu tăng 10 lần',
        innovations: [
          'Tối ưu hóa lịch nội dung bằng AI',
          'Phân tích xu hướng dự đoán cho các chủ đề nội dung',
          'Theo dõi thương hiệu cá nhân tự động',
        ],
      },
    ],
    resources: [
      {
        title: 'Xây dựng Thương hiệu Cá nhân cho Lãnh đạo',
        url: 'https://www.linkedin.com/learning/personal-branding',
        type: 'Course',
      },
      {
        title: 'Phát triển Tiếng nói Thương hiệu với AI',
        url: 'https://jasper.ai/brand-voice',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Xây dựng Thương hiệu Cá nhân trong Kỷ nguyên số tại Việt Nam',
      content: [
        'Tại Việt Nam, thương hiệu cá nhân ngày càng trở nên quan trọng, không chỉ cho người nổi tiếng mà còn cho các chuyên gia, lãnh đạo doanh nghiệp và doanh nhân.',
        'LinkedIn và Facebook là hai nền tảng chính để các chuyên gia Việt Nam xây dựng thương hiệu cá nhân và mạng lưới quan hệ.',
        'AI giúp các cá nhân phân tích xu hướng thảo luận tại thị trường Việt Nam, từ đó tạo ra những nội dung phù hợp, đúng thời điểm và tạo được tiếng vang lớn trong cộng đồng.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Phi Vân',
      title: 'Chuyên gia Nhượng quyền, Tác giả',
      company: 'Retail & Franchise Asia',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-phi-van',
      quote:
        'Thương hiệu cá nhân của bạn là tài sản lớn nhất trong thế kỷ 21. AI là công cụ để bạn khuếch đại giá trị của tài sản đó ra toàn cầu. Hãy dùng nó một cách thông minh để kể câu chuyện của riêng bạn.',
    },
    quizzes: [
      {
        question: 'Tại sao việc xây dựng "tiếng nói thương hiệu" (brand voice) nhất quán lại quan trọng?',
        options: [
          'Để tiết kiệm chi phí marketing',
          'Để tạo sự nhận biết, tin tưởng và kết nối cảm xúc với khán giả',
          'Để dễ dàng tự động hóa',
          'Để tuân thủ quy định của mạng xã hội',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Một tiếng nói thương hiệu nhất quán giúp khán giả dễ dàng nhận ra bạn, tạo cảm giác quen thuộc, xây dựng lòng tin và hình thành một mối liên kết cảm xúc mạnh mẽ hơn.',
      },
    ],
    faqs: [
      {
        question: 'Làm thế nào để AI giúp tôi tìm ra "tiếng nói thương hiệu" (brand voice) của mình?',
        answer:
          'Bạn có thể cung cấp cho AI (như ChatGPT) các bài viết, email, hoặc các nội dung bạn đã viết và yêu cầu nó phân tích các đặc điểm chung về văn phong, từ ngữ, và giọng điệu. Dựa trên đó, AI có thể giúp bạn định hình và mô tả tiếng nói thương hiệu của mình một cách rõ ràng.',
      },
      {
        question: 'AI có thể giúp tôi kết nối với những người có ảnh hưởng trong ngành không?',
        answer:
          'Có. Các công cụ lắng nghe xã hội (social listening) như Brandwatch hay Mention có thể giúp bạn xác định ai là những người có tiếng nói quan trọng trong lĩnh vực của bạn. AI cũng có thể gợi ý các nội dung hoặc cuộc thảo luận mà bạn có thể tham gia để thu hút sự chú ý của họ một cách tự nhiên.',
      },
      {
        question: 'Làm thế nào để tái sử dụng nội dung hiệu quả bằng AI?',
        answer:
          'Các công cụ như Lately AI rất mạnh mẽ trong việc này. Bạn có thể cung cấp cho nó một bài viết blog dài hoặc một video, và nó sẽ tự động phân tích và cắt ra hàng chục bài đăng nhỏ cho mạng xã hội (tweet, post LinkedIn, v.v.), mỗi bài đều được tối ưu hóa cho nền tảng tương ứng, giúp bạn tiết kiệm hàng giờ làm việc.',
      },
      {
        question: 'Tôi có cần phải là một chuyên gia để xây dựng thương hiệu cá nhân không?',
        answer:
          'Không cần. Bất kỳ ai có đam mê, kiến thức và sự kiên trì đều có thể xây dựng thương hiệu cá nhân. AI là công cụ giúp bạn thực hiện điều đó một cách chuyên nghiệp và hiệu quả hơn, ngay cả khi bạn không có đội ngũ hỗ trợ lớn.',
      },
      {
        question: 'Làm thế nào để đo lường hiệu quả của việc xây dựng thương hiệu cá nhân?',
        answer:
          'Bạn có thể đo lường qua các chỉ số như số lượng người theo dõi, tỷ lệ tương tác trên các bài đăng, số lượt đề cập đến tên bạn, lưu lượng truy cập vào website cá nhân, và quan trọng nhất là số lượng cơ hội (công việc, dự án, lời mời phát biểu) mà bạn nhận được.',
      },
      {
        question: 'AI có thể giúp tôi thiết kế logo và bộ nhận diện thương hiệu cá nhân không?',
        answer:
          'Chắc chắn. Các công cụ như Midjourney hay Looka.com có thể tạo ra hàng trăm mẫu logo và gợi ý về màu sắc, font chữ dựa trên mô tả của bạn về phong cách và lĩnh vực bạn theo đuổi, giúp bạn có một bộ nhận diện chuyên nghiệp mà không cần tốn nhiều chi phí.',
      },
      {
        question: 'Mất bao lâu để xây dựng một thương hiệu cá nhân thành công?',
        answer:
          'Xây dựng thương hiệu cá nhân là một quá trình dài hạn, không phải là một chiến dịch ngắn hạn. Nó đòi hỏi sự nhất quán và kiên nhẫn. Thông thường, bạn có thể bắt đầu thấy kết quả rõ rệt sau 6 tháng đến 1 năm nỗ lực liên tục.',
      },
      {
        question: 'Làm thế nào để xử lý các bình luận tiêu cực hoặc khủng hoảng truyền thông nhỏ?',
        answer:
          'AI có thể giúp bạn theo dõi các cuộc thảo luận về mình và cảnh báo sớm khi có dấu hiệu tiêu cực. Hãy luôn giữ một thái độ chuyên nghiệp, lắng nghe và phản hồi một cách xây dựng. Đừng xóa các bình luận tiêu cực trừ khi chúng có nội dung xúc phạm. Sự minh bạch và chân thành thường là cách xử lý tốt nhất.',
      },
      {
        question: 'AI có thể giúp tôi viết một cuốn sách để khẳng định vị thế chuyên gia không?',
        answer:
          'Có, AI là một trợ thủ đắc lực trong việc viết sách. Nó có thể giúp bạn nghiên cứu, xây dựng dàn ý chi tiết cho từng chương, viết bản nháp đầu tiên, và sau đó giúp bạn biên tập, chỉnh sửa. Quá trình viết một cuốn sách trở nên nhanh chóng và ít áp lực hơn rất nhiều.',
      },
      {
        question: 'Thương hiệu cá nhân có giúp tôi tăng thu nhập không?',
        answer:
          'Chắc chắn. Một thương hiệu cá nhân mạnh mẽ giúp bạn trở thành một chuyên gia được công nhận trong lĩnh vực của mình. Điều này dẫn đến nhiều cơ hội hơn như được mời làm diễn giả, tư vấn, nhận các dự án với mức phí cao hơn, và dễ dàng hơn trong việc đàm phán lương hoặc thu hút nhà đầu tư.',
      },
    ],
  },
];

export const aiContentCreatorModuleData: ModuleData = {
  id: K2Module.AIContentCreator,
  title: 'AI Content Creator',
  subtitle: 'Sáng tạo nội dung với AI',
  description:
    'Khám phá cách sử dụng AI để tạo ra nội dung hấp dẫn, từ video, bài viết đến hình ảnh và âm thanh. Khóa học này cung cấp kiến thức và kỹ năng cần thiết để tận dụng sức mạnh của AI trong việc sáng tạo nội dung.',
  category: 'creative',
  icon: '✍️',
  color: 'from-cyan-500 to-blue-500',
  duration: '6-8 giờ',
  level: 'Trung bình',
  features: ['Viết kịch bản video', 'Chỉnh sửa video bằng AI', 'Tạo ảnh thumbnail', 'Tối ưu hóa nội dung'],
  prerequisites: ['Hiểu biết cơ bản về mạng xã hội', 'Tư duy sáng tạo', 'Kỹ năng máy tính cơ bản'],
  objectives: [
    'Sử dụng AI để viết kịch bản video hấp dẫn.',
    'Làm chủ các công cụ chỉnh sửa video AI như RunwayML.',
    'Tạo ảnh thumbnail và đồ họa với Midjourney và Canva AI.',
    'Tối ưu hóa nội dung cho từng nền tảng.',
  ],
  careerOutcomes: [
    'Chuyên gia sáng tạo nội dung số',
    'Quản lý mạng xã hội',
    'Digital Marketer',
    'YouTuber / TikToker chuyên nghiệp',
  ],
  industryApplications: [
    { name: 'Marketing & Quảng cáo', description: 'Tạo nội dung quảng cáo sáng tạo và hiệu quả.' },
    { name: 'Truyền thông & Báo chí', description: 'Sản xuất tin tức và bài viết nhanh chóng.' },
    { name: 'Giáo dục', description: 'Tạo tài liệu học tập và video giảng dạy sinh động.' },
    { name: 'Giải trí', description: 'Sản xuất video, kịch bản phim và nội dung giải trí khác.' },
  ],
  marketDemand: {
    averageSalary: '60-110 triệu VND/năm',
    jobGrowth: '40%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.AIArtCreativeTech, K2Module.DigitalMarketing],
  lessons: aiContentCreatorLessons,
};
