import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export const careerDevelopmentLessons: BaseLessonData[] = [
  {
    id: 'career-planning-fundamentals',
    title: 'Nền Tảng Lập Kế Hoạch Nghề Nghiệp',
    description: 'Học cách đặt mục tiêu nghề nghiệp, đánh giá kỹ năng và xây dựng lộ trình phát triển cá nhân.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
    objectives: [
      'Xác định giá trị và sở thích nghề nghiệp cá nhân.',
      'Đánh giá kỹ năng hiện tại và kỹ năng cần phát triển.',
      'Thiết lập mục tiêu nghề nghiệp SMART.',
      'Xây dựng lộ trình phát triển nghề nghiệp 5-10 năm.',
    ],
    prerequisites: ['Không có'],
    exercises: [
      {
        title: 'Bài tập đánh giá bản thân',
        description: 'Thực hiện đánh giá toàn diện về kỹ năng, sở thích và giá trị cá nhân.',
        difficulty: 'Cơ bản',
        procedure: [
          'Liệt kê 10 kỹ năng mạnh nhất của bạn.',
          'Xác định 3 lĩnh vực nghề nghiệp bạn quan tâm nhất.',
          'Viết ra 5 giá trị cốt lõi quan trọng nhất trong công việc.',
          'Thiết lập 3 mục tiêu nghề nghiệp cho 1, 3 và 5 năm tới.',
        ],
        expectedResults: 'Bản đánh giá cá nhân chi tiết và kế hoạch nghề nghiệp cụ thể.',
      },
      {
        title: 'Phân tích thị trường việc làm',
        description: 'Nghiên cứu xu hướng thị trường việc làm trong lĩnh vực quan tâm.',
        difficulty: 'Trung bình',
        procedure: [
          'Chọn 3 vị trí công việc mục tiêu.',
          'Nghiên cứu yêu cầu kỹ năng và kinh nghiệm.',
          'Phân tích mức lương và cơ hội phát triển.',
          'Xác định khoảng cách kỹ năng cần khắc phục.',
        ],
        expectedResults: 'Báo cáo phân tích thị trường và kế hoạch phát triển kỹ năng.',
      },
    ],
    realWorldApplications: [
      'Lập kế hoạch chuyển ngành nghề.',
      'Chuẩn bị cho cuộc phỏng vấn xin việc.',
      'Đàm phán tăng lương và thăng tiến.',
      'Xây dựng thương hiệu cá nhân.',
    ],
    vietnamContext: {
      title: 'Thị Trường Việc Làm Việt Nam',
      content: [
        'Thị trường việc làm Việt Nam đang chuyển mình mạnh mẽ với sự phát triển của công nghệ 4.0 và kinh tế số.',
        'Các ngành công nghệ thông tin, thương mại điện tử, và dịch vụ tài chính đang có nhu cầu nhân lực cao.',
        'Kỹ năng mềm như giao tiếp, làm việc nhóm và tư duy phản biện được đánh giá cao bởi nhà tuyển dụng Việt Nam.',
      ],
    },
    faqs: [
      {
        question: 'Tại sao việc lập kế hoạch nghề nghiệp lại quan trọng?',
        answer:
          'Lập kế hoạch nghề nghiệp giúp bạn xác định rõ mục tiêu, hiểu được điểm mạnh, điểm yếu của bản thân và vạch ra một lộ trình rõ ràng để đạt được những gì bạn mong muốn. Nó giúp bạn chủ động trong sự nghiệp thay vì chỉ phản ứng với các cơ hội đến một cách ngẫu nhiên.',
      },
      {
        question: 'Mục tiêu SMART trong lập kế hoạch nghề nghiệp là gì?',
        answer:
          'SMART là viết tắt của Specific (Cụ thể), Measurable (Đo lường được), Achievable (Khả thi), Relevant (Liên quan), và Time-bound (Có thời hạn). Đặt mục tiêu theo tiêu chí SMART giúp bạn tạo ra những mục tiêu rõ ràng, thực tế và có khả năng thành công cao hơn.',
      },
      {
        question: 'Làm thế nào để biết mình phù hợp với ngành nghề nào?',
        answer:
          'Bài học này hướng dẫn bạn thực hiện các bài tập tự đánh giá để khám phá sở thích, giá trị và kỹ năng của mình. Kết hợp kết quả này với việc nghiên cứu thị trường lao động sẽ giúp bạn xác định được những ngành nghề phù hợp nhất với bản thân.',
      },
      {
        question: 'Kỹ năng nào là quan trọng nhất trên thị trường lao động Việt Nam hiện nay?',
        answer:
          'Bên cạnh kỹ năng chuyên môn, các nhà tuyển dụng Việt Nam ngày càng đánh giá cao kỹ năng mềm. Theo bối cảnh được đề cập, các kỹ năng như giao tiếp, làm việc nhóm, và tư duy phản biện là cực kỳ quan trọng trong môi trường làm việc hiện đại.',
      },
    ],
  },
  {
    id: 'personal-branding-strategy',
    title: 'Chiến Lược Xây Dựng Thương Hiệu Cá Nhân',
    description: 'Phát triển thương hiệu cá nhân mạnh mẽ trên các nền tảng số và trong môi trường chuyên nghiệp.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=600&fit=crop',
    objectives: [
      'Xác định thông điệp thương hiệu cá nhân độc đáo.',
      'Xây dựng profile chuyên nghiệp trên LinkedIn và mạng xã hội.',
      'Phát triển portfolio và content marketing cá nhân.',
      'Tạo dựng mạng lưới quan hệ nghề nghiệp hiệu quả.',
    ],
    prerequisites: ['Hiểu biết cơ bản về mạng xã hội'],
    exercises: [
      {
        title: 'Tạo thông điệp thương hiệu cá nhân',
        description: 'Phát triển câu chuyện thương hiệu cá nhân và thông điệp định vị.',
        difficulty: 'Trung bình',
        procedure: [
          'Viết câu chuyện nghề nghiệp của bạn trong 100 từ.',
          'Tạo elevator pitch 30 giây.',
          'Xác định 3-5 từ khóa định danh thương hiệu.',
          'Thiết kế logo hoặc visual identity cá nhân.',
        ],
        expectedResults: 'Bộ tài liệu thương hiệu cá nhân hoàn chỉnh.',
      },
    ],
    realWorldApplications: [
      'Tăng cường visibility trong ngành.',
      'Thu hút cơ hội việc làm và hợp tác.',
      'Xây dựng uy tín chuyên môn.',
      'Mở rộng mạng lưới khách hàng.',
    ],
    faqs: [
      {
        question: 'Thương hiệu cá nhân có thực sự cần thiết cho tất cả mọi người không?',
        answer:
          'Có. Trong thế giới kết nối ngày nay, mọi người đều có một thương hiệu cá nhân, dù họ có chủ động xây dựng nó hay không. Việc chủ động xây dựng thương hiệu cá nhân giúp bạn kiểm soát câu chuyện về mình, tạo sự khác biệt và thu hút đúng cơ hội.',
      },
      {
        question: 'Làm thế nào để tìm ra "thông điệp thương hiệu" của riêng mình?',
        answer:
          'Thông điệp của bạn nằm ở giao điểm của ba yếu tố: (1) Bạn giỏi nhất ở lĩnh vực nào? (2) Bạn đam mê điều gì nhất? và (3) Điều gì thị trường đang cần mà bạn có thể cung cấp? Bài học này sẽ hướng dẫn bạn cách khám phá và kết hợp ba yếu tố này.',
      },
      {
        question: 'Tôi có cần phải có mặt trên tất cả các mạng xã hội không?',
        answer:
          'Không. Điều quan trọng là chất lượng hơn số lượng. Hãy chọn 1-2 nền tảng mà đối tượng mục tiêu của bạn hoạt động tích cực nhất và tập trung xây dựng sự hiện diện mạnh mẽ ở đó. Ví dụ, LinkedIn cho B2B, Instagram cho các ngành sáng tạo.',
      },
      {
        question: 'Làm thế nào để xây dựng thương hiệu cá nhân mà không bị coi là "khoe khoang"?',
        answer:
          'Chìa khóa là tập trung vào việc tạo ra giá trị cho người khác. Thay vì chỉ nói về thành tích của mình, hãy chia sẻ kiến thức, kinh nghiệm và những bài học bạn đã học được. Hãy thể hiện chuyên môn của bạn thông qua việc giúp đỡ và hướng dẫn cộng đồng.',
      },
    ],
  },
  {
    id: 'networking-relationship-building',
    title: 'Xây Dựng Mạng Lưới Quan Hệ Nghề Nghiệp',
    description: 'Master các kỹ thuật networking hiệu quả và xây dựng mối quan hệ nghề nghiệp bền vững.',
    duration: '50 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?w=1200&h=600&fit=crop',
    objectives: [
      'Phát triển kỹ năng giao tiếp và kết nối chuyên nghiệp.',
      'Học cách tận dụng sự kiện networking và hội thảo.',
      'Xây dựng và duy trì mối quan hệ dài hạn.',
      'Sử dụng công nghệ và mạng xã hội để mở rộng network.',
    ],
    prerequisites: ['Kỹ năng giao tiếp cơ bản'],
    exercises: [
      {
        title: 'Lập kế hoạch networking',
        description: 'Tạo chiến lược networking cá nhân và lịch tham gia sự kiện.',
        difficulty: 'Trung bình',
        procedure: [
          'Xác định 5 sự kiện networking sắp tới.',
          'Chuẩn bị câu hỏi và chủ đề trò chuyện.',
          'Thiết lập mục tiêu kết nối cho mỗi sự kiện.',
          'Lập kế hoạch follow-up sau sự kiện.',
        ],
        expectedResults: 'Kế hoạch networking chi tiết và checklist thực hiện.',
      },
    ],
    realWorldApplications: [
      'Tìm kiếm cơ hội việc làm thông qua giới thiệu.',
      'Xây dựng partnership kinh doanh.',
      'Học hỏi từ mentor và expert.',
      'Tăng cường credibility trong ngành.',
    ],
    faqs: [
      {
        question: 'Tôi là người hướng nội, làm thế nào để networking hiệu quả?',
        answer:
          'Networking không chỉ dành cho người hướng ngoại. Người hướng nội thường có thế mạnh trong việc xây dựng các mối quan hệ sâu sắc, 1-1. Hãy tập trung vào chất lượng thay vì số lượng, chuẩn bị trước các chủ đề trò chuyện, và tìm kiếm các sự kiện có quy mô nhỏ hơn hoặc networking online.',
      },
      {
        question: 'Sự khác biệt giữa networking và "sử dụng" người khác là gì?',
        answer:
          'Networking thực sự là việc xây dựng mối quan hệ hai chiều, dựa trên sự tin tưởng và cho-nhận. Mục tiêu là tạo ra một mạng lưới hỗ trợ lẫn nhau. "Sử dụng" người khác là một cách tiếp cận một chiều, chỉ tìm cách lấy đi giá trị mà không đóng góp lại. Một mạng lưới bền vững được xây dựng trên sự hào phóng.',
      },
      {
        question: 'Làm thế nào để duy trì mối quan hệ sau lần gặp đầu tiên?',
        answer:
          'Việc follow-up là rất quan trọng. Gửi một email hoặc tin nhắn LinkedIn ngắn gọn sau khi gặp, nhắc lại cuộc trò chuyện. Sau đó, hãy tìm cách để giữ liên lạc một cách tự nhiên, ví dụ như chia sẻ một bài viết hữu ích, chúc mừng thành tích của họ, hoặc mời họ một ly cà phê.',
      },
      {
        question: 'Networking online có hiệu quả như networking trực tiếp không?',
        answer:
          'Cả hai đều có giá trị riêng. Networking online (qua LinkedIn, Twitter) giúp bạn tiếp cận một mạng lưới rộng lớn hơn về mặt địa lý. Networking trực tiếp giúp xây dựng sự kết nối cá nhân và tin tưởng nhanh hơn. Chiến lược tốt nhất là kết hợp cả hai hình thức.',
      },
    ],
  },
  {
    id: 'job-interview-mastery',
    title: 'Thành Thạo Kỹ Thuật Phỏng Vấn Việc Làm',
    description: 'Chuẩn bị và thực hiện phỏng vấn việc làm thành công với các kỹ thuật chuyên nghiệp.',
    duration: '55 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    objectives: [
      'Chuẩn bị CV và cover letter ấn tượng.',
      'Master các kỹ thuật trả lời phỏng vấn.',
      'Học cách đặt câu hỏi thông minh cho nhà tuyển dụng.',
      'Phát triển kỹ năng presentation và body language.',
    ],
    prerequisites: ['CV cơ bản đã có'],
    exercises: [
      {
        title: 'Mock interview session',
        description: 'Thực hành phỏng vấn với các câu hỏi thường gặp.',
        difficulty: 'Nâng cao',
        procedure: [
          'Chuẩn bị câu trả lời cho 10 câu hỏi phổ biến.',
          'Luyện tập với bạn bè hoặc mentor.',
          'Ghi âm và đánh giá hiệu suất.',
          'Cải thiện dựa trên feedback.',
        ],
        expectedResults: 'Kỹ năng phỏng vấn tự tin và chuyên nghiệp.',
      },
    ],
    realWorldApplications: [
      'Tăng tỷ lệ thành công trong phỏng vấn.',
      'Đàm phán package lương tốt hơn.',
      'Tạo ấn tượng mạnh với nhà tuyển dụng.',
      'Giảm căng thẳng trong quá trình phỏng vấn.',
    ],
    faqs: [
      {
        question: 'Làm thế nào để trả lời câu hỏi "Hãy giới thiệu về bản thân bạn"?',
        answer:
          'Đây là cơ hội để bạn trình bày "elevator pitch" của mình. Hãy cấu trúc câu trả lời theo công thức "Hiện tại - Quá khứ - Tương lai". Nói về vai trò hiện tại của bạn, kinh nghiệm liên quan trong quá khứ đã dẫn bạn đến đây, và tại sao bạn hào hứng với cơ hội này trong tương lai.',
      },
      {
        question: 'Phương pháp STAR để trả lời câu hỏi phỏng vấn hành vi là gì?',
        answer:
          'STAR là viết tắt của Situation (Tình huống), Task (Nhiệm vụ), Action (Hành động), và Result (Kết quả). Đây là một kỹ thuật cấu trúc câu trả lời giúp bạn đưa ra những ví dụ cụ thể, thuyết phục về kinh nghiệm của mình, thay vì chỉ nói một cách chung chung.',
      },
      {
        question: 'Tôi nên đặt câu hỏi gì cho nhà tuyển dụng?',
        answer:
          'Việc đặt câu hỏi cho thấy sự quan tâm và tư duy của bạn. Hãy hỏi về văn hóa công ty, thách thức lớn nhất của vị trí này, định nghĩa về thành công trong vai trò này, hoặc các cơ hội phát triển. Tránh hỏi về lương hoặc phúc lợi ngay trong vòng phỏng vấn đầu tiên.',
      },
      {
        question: 'Làm thế nào để xử lý câu hỏi về điểm yếu lớn nhất của tôi?',
        answer:
          'Hãy chọn một điểm yếu thực sự nhưng không phải là yếu tố cốt lõi của công việc. Quan trọng hơn, hãy cho thấy bạn nhận thức được nó và đang chủ động làm gì để cải thiện. Ví dụ: "Đôi khi tôi quá tập trung vào chi tiết, nhưng tôi đang học cách cân bằng bằng cách sử dụng các công cụ quản lý dự án để tập trung vào các ưu tiên lớn hơn."',
      },
    ],
  },
  {
    id: 'leadership-management-skills',
    title: 'Kỹ Năng Lãnh Đạo và Quản Lý',
    description: 'Phát triển kỹ năng lãnh đạo, quản lý nhóm và thúc đẩy hiệu suất làm việc.',
    duration: '65 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu các style lãnh đạo khác nhau và ứng dụng.',
      'Phát triển kỹ năng delegation và empowerment.',
      'Học cách đưa ra quyết định hiệu quả.',
      'Xây dựng và dẫn dắt team high-performance.',
    ],
    prerequisites: ['Kinh nghiệm làm việc nhóm'],
    exercises: [
      {
        title: 'Phân tích style lãnh đạo',
        description: 'Đánh giá style lãnh đạo cá nhân và lập kế hoạch phát triển.',
        difficulty: 'Nâng cao',
        procedure: [
          'Thực hiện bài test đánh giá leadership style.',
          'Phân tích điểm mạnh và điểm yếu.',
          'Xác định 3 kỹ năng cần cải thiện.',
          'Tạo action plan 6 tháng.',
        ],
        expectedResults: 'Kế hoạch phát triển leadership cá nhân.',
      },
    ],
    realWorldApplications: [
      'Dẫn dắt team và projects thành công.',
      'Tăng engagement và productivity nhân viên.',
      'Giải quyết conflicts trong tổ chức.',
      'Thúc đẩy innovation và change management.',
    ],
    faqs: [
      {
        question: 'Sự khác biệt giữa lãnh đạo (leadership) và quản lý (management) là gì?',
        answer:
          'Quản lý là về việc xử lý sự phức tạp - lập kế hoạch, ngân sách, tổ chức, giải quyết vấn đề. Lãnh đạo là về việc đối phó với sự thay đổi - đặt ra tầm nhìn, truyền cảm hứng, và thúc đẩy mọi người hành động. Một người thành công cần cả hai kỹ năng.',
      },
      {
        question: 'Làm thế nào để giao việc (delegate) hiệu quả mà không bị coi là "đẩy việc"?',
        answer:
          'Giao việc hiệu quả là về việc trao quyền. Hãy giao cả trách nhiệm và quyền hạn. Cung cấp đầy đủ thông tin, nguồn lực, và nêu rõ kết quả mong muốn, nhưng cho phép nhân viên của bạn tự quyết định "cách" thực hiện. Hãy ở đó để hỗ trợ, không phải để quản lý vi mô.',
      },
      {
        question: 'Một nhà lãnh đạo mới nên làm gì trong 30 ngày đầu tiên?',
        answer:
          'Trong 30 ngày đầu, hãy tập trung vào việc lắng nghe và học hỏi. Gặp gỡ từng thành viên trong nhóm, hiểu rõ vai trò, thách thức và mục tiêu của họ. Tìm hiểu về văn hóa công ty và xác định những "chiến thắng nhanh" (quick wins) để xây dựng lòng tin và động lực.',
      },
      {
        question: 'Làm thế nào để đưa ra phản hồi tiêu cực một cách xây dựng?',
        answer:
          'Sử dụng mô hình "Sandwich": bắt đầu bằng một lời khen hoặc điểm tích cực, sau đó đưa ra phản hồi cần cải thiện một cách cụ thể và tập trung vào hành vi chứ không phải con người, và kết thúc bằng một lời động viên hoặc thảo luận về các bước tiếp theo. Luôn thực hiện cuộc trò chuyện này một cách riêng tư.',
      },
    ],
  },
  {
    id: 'entrepreneurship-startup-basics',
    title: 'Cơ Bản Khởi Nghiệp và Tinh Thần Doanh Nhân',
    description: 'Học các nguyên tắc khởi nghiệp, validate ý tưởng kinh doanh và xây dựng startup từ zero.',
    duration: '70 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu mindset và skills của entrepreneur thành công.',
      'Học cách validate và develop business ideas.',
      'Nắm vững lean startup methodology.',
      'Xây dựng business plan và pitch deck.',
    ],
    prerequisites: ['Tư duy sáng tạo và đam mê kinh doanh'],
    exercises: [
      {
        title: 'Phát triển business idea',
        description: 'Từ ý tưởng đến business model canvas hoàn chỉnh.',
        difficulty: 'Nâng cao',
        procedure: [
          'Brainstorm 10 ý tưởng kinh doanh.',
          'Chọn 1 ý tưởng để phát triển sâu.',
          'Tạo business model canvas.',
          'Conduct customer interviews.',
          'Refine và validate ý tưởng.',
        ],
        expectedResults: 'Business model canvas được validate và refined.',
      },
    ],
    realWorldApplications: [
      'Khởi nghiệp startup công nghệ.',
      'Phát triển sản phẩm/dịch vụ mới.',
      'Tạo ra passive income streams.',
      'Innovation trong doanh nghiệp hiện tại.',
    ],
    faqs: [
      {
        question: 'Lean Startup là gì?',
        answer:
          'Lean Startup là một phương pháp luận để phát triển doanh nghiệp và sản phẩm. Nó nhằm mục đích rút ngắn chu kỳ phát triển sản phẩm bằng cách áp dụng một chu trình "Xây dựng - Đo lường - Học hỏi" (Build-Measure-Learn) lặp đi lặp lại. Ý tưởng là nhanh chóng tung ra một Sản phẩm khả dụng tối thiểu (MVP) để thu thập phản hồi từ khách hàng và liên tục cải tiến.',
      },
      {
        question: 'MVP (Minimum Viable Product) là gì?',
        answer:
          'MVP là phiên bản của một sản phẩm mới cho phép một nhóm thu thập lượng thông tin đã được xác thực tối đa về khách hàng với nỗ lực tối thiểu. Đó không phải là sản phẩm có ít tính năng nhất, mà là sản phẩm cốt lõi nhất để kiểm tra giả định kinh doanh của bạn.',
      },
      {
        question: 'Làm thế nào để tôi biết ý tưởng kinh doanh của mình có tốt hay không?',
        answer:
          'Đừng chỉ dựa vào ý kiến của bạn bè và gia đình. Hãy ra ngoài và nói chuyện với các khách hàng tiềm năng thực sự (customer interviews). Thay vì hỏi "Bạn có mua sản phẩm này không?", hãy hỏi về các vấn đề và khó khăn hiện tại của họ để xem liệu ý tưởng của bạn có thực sự giải quyết một "nỗi đau" đáng kể hay không.',
      },
      {
        question: 'Sự khác biệt giữa Business Plan và Business Model Canvas là gì?',
        answer:
          'Business Plan là một tài liệu văn bản dài, chi tiết, thường dùng để kêu gọi vốn. Business Model Canvas là một công cụ trực quan trên một trang giấy, giúp bạn nhanh chóng phác thảo, phân tích và điều chỉnh các yếu-tố-cốt-lõi của mô hình kinh doanh. Canvas linh hoạt hơn và phù hợp cho giai đoạn đầu.',
      },
    ],
  },
];

export const careerDevelopmentModuleData: ModuleData = {
  id: K2Module.CareerDevelopment,
  title: 'Phát Triển Sự Nghiệp',
  subtitle: 'Xây dựng lộ trình thành công',
  description:
    'Học cách xây dựng personal brand, kỹ năng phỏng vấn, networking và lập kế hoạch sự nghiệp để đạt được mục tiêu dài hạn.',
  category: 'Kỹ năng chuyên nghiệp',
  icon: '🚀',
  color: 'from-red-600 to-orange-600',
  level: 'Cơ bản',
  duration: '5-6 giờ',
  features: [
    'Personal branding và storytelling',
    'Kỹ năng phỏng vấn và negotiation',
    'Networking và relationship building',
    'Lập kế hoạch sự nghiệp và goal setting',
  ],
  prerequisites: ['Không có'],
  objectives: [
    'Xây dựng thương hiệu cá nhân mạnh mẽ và chuyên nghiệp.',
    'Thành thạo kỹ năng phỏng vấn và đàm phán lương.',
    'Mở rộng mạng lưới quan hệ nghề nghiệp chất lượng.',
    'Lập kế hoạch và thực hiện lộ trình sự nghiệp rõ ràng.',
  ],
  careerOutcomes: [
    'Vị trí công việc mong muốn',
    'Mức lương cao hơn',
    'Cơ hội thăng tiến nhanh hơn',
    'Mạng lưới quan hệ rộng và uy tín',
  ],
  industryApplications: ['Tất cả các ngành nghề'],
  marketDemand: {
    averageSalary: 'Thay đổi theo ngành',
    jobGrowth: 'Thay đổi theo ngành',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.ProfessionalSkills, K2Module.CommunicationSkills],
  lessons: careerDevelopmentLessons,
};
