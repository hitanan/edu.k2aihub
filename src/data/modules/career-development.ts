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
    videoUrl: null,
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
      {
        question: 'Tôi nên cập nhật kế hoạch nghề nghiệp của mình bao lâu một lần?',
        answer:
          'Bạn nên xem lại và cập nhật kế hoạch nghề nghiệp của mình ít nhất mỗi năm một lần, hoặc bất cứ khi nào có sự thay đổi lớn trong cuộc sống hoặc công việc của bạn, chẳng hạn như được thăng chức, thay đổi công ty, hoặc khi mục tiêu dài hạn của bạn thay đổi.',
      },
      {
        question: 'Phân tích SWOT cá nhân là gì và nó giúp ích gì?',
        answer:
          'Phân tích SWOT (Strengths, Weaknesses, Opportunities, Threats) cá nhân là một công cụ giúp bạn xác định Điểm mạnh, Điểm yếu, Cơ hội và Thách thức liên quan đến sự nghiệp của mình. Nó cung cấp một cái nhìn tổng quan để bạn có thể tận dụng điểm mạnh, khắc phục điểm yếu, nắm bắt cơ hội và đối phó với các mối đe dọa.',
      },
      {
        question: 'Làm thế nào để xây dựng một lộ trình phát triển kỹ năng hiệu quả?',
        answer:
          'Bắt đầu bằng việc xác định khoảng cách kỹ năng giữa vị trí hiện tại và mục tiêu nghề nghiệp của bạn. Sau đó, ưu tiên các kỹ năng quan trọng nhất và tìm kiếm các nguồn học tập phù hợp như các khóa học trực tuyến, chứng chỉ chuyên môn, hội thảo, hoặc tìm một người cố vấn.',
      },
      {
        question: 'Vai trò của người cố vấn (mentor) trong phát triển sự nghiệp là gì?',
        answer:
          'Một người cố vấn có thể cung cấp hướng dẫn, lời khuyên dựa trên kinh nghiệm của họ, giúp bạn mở rộng mạng lưới quan hệ và đưa ra những góc nhìn khách quan về con đường sự nghiệp của bạn. Tìm một người cố vấn là một trong những bước đi chiến lược nhất để thúc đẩy sự nghiệp.',
      },
      {
        question: 'Tôi nên làm gì nếu cảm thấy "mắc kẹt" trong sự nghiệp hiện tại?',
        answer:
          'Đây là một tín hiệu tốt để bạn xem xét lại kế hoạch nghề nghiệp của mình. Hãy thử đánh giá lại giá trị và sở thích của bạn, nói chuyện với các chuyên gia trong lĩnh vực bạn quan tâm, hoặc thử nghiệm các dự án phụ để khám phá những hướng đi mới. Đôi khi, một sự thay đổi nhỏ cũng có thể tạo ra động lực lớn.',
      },
      {
        question: 'Làm thế nào để cân bằng giữa công việc và cuộc sống khi lập kế hoạch nghề nghiệp?',
        answer:
          'Một kế hoạch nghề nghiệp tốt phải tích hợp cả mục tiêu cá nhân và mục tiêu công việc. Hãy đảm bảo rằng các mục tiêu nghề nghiệp của bạn phù hợp với lối sống mà bạn mong muốn. Đặt ra các ranh giới rõ ràng và đừng ngần ngại điều chỉnh lộ trình của mình để đảm bảo sự cân bằng bền vững.',
      },
    ],
  },
  {
    id: 'personal-branding-strategy',
    title: 'Chiến Lược Xây Dựng Thương Hiệu Cá Nhân',
    description: 'Phát triển thương hiệu cá nhân mạnh mẽ trên các nền tảng số và trong môi trường chuyên nghiệp.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    videoUrl: null,
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
      {
        question: 'Xây dựng thương hiệu cá nhân mất bao lâu?',
        answer:
          'Xây dựng thương hiệu cá nhân là một quá trình liên tục, không phải là một dự án có điểm kết thúc. Tuy nhiên, bạn có thể bắt đầu thấy những kết quả ban đầu sau khoảng 3-6 tháng nỗ lực nhất quán trong việc tạo nội dung và kết nối.',
      },
      {
        question: 'Content marketing cá nhân là gì?',
        answer:
          'Đó là việc bạn tạo và chia sẻ các nội dung (bài viết blog, video, bài đăng trên mạng xã hội) liên quan đến lĩnh vực chuyên môn của mình. Mục đích là để thể hiện kiến thức, xây dựng uy tín và thu hút một cộng đồng quan tâm đến những gì bạn làm.',
      },
      {
        question: 'Làm thế nào để đo lường hiệu quả của việc xây dựng thương hiệu cá nhân?',
        answer:
          'Bạn có thể đo lường qua các chỉ số như: số lượng người theo dõi/kết nối mới, mức độ tương tác trên các bài đăng, số lượng lời mời phỏng vấn hoặc hợp tác, và các cơ hội mới đến với bạn một cách tự nhiên mà không cần tìm kiếm.',
      },
      {
        question: 'Một "elevator pitch" tốt nên có những yếu tố nào?',
        answer:
          'Một elevator pitch hiệu quả nên ngắn gọn (khoảng 30-60 giây), rõ ràng và hấp dẫn. Nó nên trả lời các câu hỏi: Bạn là ai? Bạn làm gì? Bạn giúp được ai và giải quyết vấn đề gì? Và điều gì làm bạn khác biệt?',
      },
      {
        question: 'Tôi có nên có một trang web cá nhân không?',
        answer:
          'Rất nên có. Một trang web cá nhân (portfolio online) là "ngôi nhà" của thương hiệu cá nhân bạn. Không giống như mạng xã hội, bạn hoàn toàn kiểm soát nội dung và hình thức của nó. Đây là nơi tuyệt vời để trưng bày các dự án, bài viết và thông tin liên hệ.',
      },
      {
        question: 'Làm thế nào để câu chuyện nghề nghiệp của tôi trở nên hấp dẫn?',
        answer:
          'Một câu chuyện hấp dẫn không chỉ liệt kê các công việc bạn đã làm. Nó nên có một "nhân vật chính" (là bạn), một "thử thách" bạn đã đối mặt, "hành trình" bạn đã trải qua để vượt qua nó, và "kết quả" hoặc bài học bạn đã rút ra. Hãy thể hiện sự phát triển và đam mê của bạn.',
      },
    ],
  },
  {
    id: 'networking-relationship-building',
    title: 'Xây Dựng Mạng Lưới Quan Hệ Nghề Nghiệp',
    description: 'Master các kỹ thuật networking hiệu quả và xây dựng mối quan hệ nghề nghiệp bền vững.',
    duration: '50 phút',
    difficulty: 'Trung bình',
    videoUrl: null,
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
      {
        question: 'Làm thế nào để bắt đầu một cuộc trò chuyện tại một sự kiện networking?',
        answer:
          'Một cách đơn giản là hỏi những câu hỏi mở, ví dụ: "Điều gì đưa anh/chị đến sự kiện hôm nay?" hoặc "Anh/chị thấy phần trình bày vừa rồi thế nào?". Hãy thể hiện sự tò mò chân thành về người đối diện thay vì chỉ nói về bản thân.',
      },
      {
        question: 'Tôi nên chuẩn bị gì trước khi tham gia một sự kiện networking?',
        answer:
          'Hãy chuẩn bị "elevator pitch" của bạn, xác định mục tiêu (bạn muốn gặp ai, muốn học hỏi điều gì), và nghiên cứu trước về một vài diễn giả hoặc công ty tham gia. Mang theo danh thiếp hoặc chuẩn bị sẵn mã QR LinkedIn để dễ dàng kết nối.',
      },
      {
        question: 'Làm thế nào để kết thúc một cuộc trò chuyện một cách lịch sự?',
        answer:
          'Bạn có thể nói: "Rất vui được trò chuyện với anh/chị. Tôi xin phép đi gặp một người bạn/lấy chút nước. Hy vọng chúng ta sẽ giữ liên lạc." Sau đó, hãy chắc chắn rằng bạn đã trao đổi thông tin liên lạc.',
      },
      {
        question: 'Chất lượng và số lượng trong networking, điều gì quan trọng hơn?',
        answer:
          'Chất lượng luôn quan trọng hơn số lượng. Một vài mối quan hệ sâu sắc, tin cậy sẽ có giá trị hơn hàng trăm kết nối hời hợt. Hãy tập trung vào việc xây dựng những kết nối thực sự có ý nghĩa.',
      },
      {
        question: 'Làm thế nào để biến một kết nối thành một mối quan hệ bền vững?',
        answer:
          'Hãy luôn tìm cách "cho đi trước khi nhận lại". Chia sẻ thông tin hữu ích, giới thiệu họ với người khác trong mạng lưới của bạn, hoặc đơn giản là hỏi thăm công việc của họ. Sự quan tâm chân thành sẽ xây dựng lòng tin và củng cố mối quan hệ.',
      },
      {
        question: 'Tôi có nên kết nối với tất cả mọi người trên LinkedIn không?',
        answer:
          'Không nhất thiết. Hãy ưu tiên kết nối với những người trong ngành của bạn, những người bạn đã gặp trực tiếp, hoặc những người mà bạn thực sự muốn học hỏi. Khi gửi lời mời kết nối, hãy luôn kèm theo một tin nhắn cá nhân ngắn gọn để nhắc họ về bạn hoặc lý do bạn muốn kết nối.',
      },
    ],
  },
  {
    id: 'job-interview-mastery',
    title: 'Thành Thạo Kỹ Thuật Phỏng Vấn Việc Làm',
    description: 'Chuẩn bị và thực hiện phỏng vấn việc làm thành công với các kỹ thuật chuyên nghiệp.',
    duration: '55 phút',
    difficulty: 'Trung bình',
    videoUrl: null,
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
      {
        question: 'Trang phục phỏng vấn nên như thế nào?',
        answer:
          'Nguyên tắc chung là ăn mặc chuyên nghiệp và phù hợp với văn hóa công ty. Nếu không chắc chắn, hãy chọn trang phục lịch sự hơn một chút so với trang phục hàng ngày của công ty đó. Tốt hơn là ăn mặc quá trang trọng còn hơn là quá xuề xòa.',
      },
      {
        question: 'Tôi nên làm gì sau buổi phỏng vấn?',
        answer:
          'Hãy gửi một email cảm ơn đến nhà tuyển dụng trong vòng 24 giờ. Trong email, hãy bày tỏ lòng biết ơn về thời gian của họ, tái khẳng định sự quan tâm của bạn đối với vị trí này, và có thể nhắc lại một điểm nổi bật trong cuộc trò chuyện để tạo ấn tượng.',
      },
      {
        question: 'Làm thế nào để đàm phán lương một cách hiệu quả?',
        answer:
          'Hãy nghiên cứu trước về mức lương trung bình cho vị trí tương tự trong ngành và khu vực của bạn. Đừng là người đầu tiên đưa ra con số. Khi nhận được lời đề nghị, hãy thể hiện sự biết ơn và sau đó trình bày một cách lịch sự đề nghị của bạn dựa trên nghiên cứu và giá trị bạn mang lại.',
      },
      {
        question: 'Ngôn ngữ cơ thể quan trọng như thế nào trong một cuộc phỏng vấn?',
        answer:
          'Rất quan trọng. Hãy duy trì giao tiếp bằng mắt, ngồi thẳng, mỉm cười và sử dụng các cử chỉ tay tự nhiên. Một cái bắt tay chắc chắn (nếu có) cũng tạo ra ấn tượng ban đầu tốt. Ngôn ngữ cơ thể tự tin cho thấy bạn thoải mái và chuyên nghiệp.',
      },
      {
        question: 'Phải làm gì nếu tôi không biết câu trả lời cho một câu hỏi phỏng vấn?',
        answer:
          'Đừng hoảng sợ. Hãy thành thật. Bạn có thể nói: "Đó là một câu hỏi rất hay. Tôi chưa có kinh nghiệm trực tiếp về vấn đề này, nhưng dựa trên hiểu biết của tôi, tôi sẽ tiếp cận nó như sau...". Điều này cho thấy khả năng suy luận và giải quyết vấn đề của bạn.',
      },
      {
        question: 'Sự khác biệt giữa CV và cover letter là gì?',
        answer:
          'CV (Curriculum Vitae) là một bản tóm tắt về kinh nghiệm làm việc, học vấn và kỹ năng của bạn. Cover letter (Thư xin việc) là một tài liệu để bạn thể hiện cá tính, giải thích tại sao bạn quan tâm đến công ty và vị trí cụ thể này, và kết nối kinh nghiệm của bạn với các yêu cầu của công việc.',
      },
    ],
  },
  {
    id: 'leadership-management-skills',
    title: 'Kỹ Năng Lãnh Đạo và Quản Lý',
    description: 'Phát triển kỹ năng lãnh đạo, quản lý nhóm và thúc đẩy hiệu suất làm việc.',
    duration: '65 phút',
    difficulty: 'Nâng cao',
    videoUrl: null,
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
      {
        question: 'Có những phong cách lãnh đạo phổ biến nào?',
        answer:
          'Một số phong cách phổ biến bao gồm: lãnh đạo chuyển đổi (truyền cảm hứng và thúc đẩy thay đổi), lãnh đạo phục vụ (đặt nhu cầu của nhóm lên hàng đầu), lãnh đạo dân chủ (khuyến khích sự tham gia), và lãnh đạo chuyên quyền (ra quyết định một mình). Nhà lãnh đạo hiệu quả thường linh hoạt kết hợp các phong cách.',
      },
      {
        question: 'Làm thế nào để thúc đẩy động lực cho đội nhóm?',
        answer:
          'Động lực không chỉ đến từ tiền bạc. Hãy công nhận thành tích, trao quyền tự chủ, tạo cơ hội phát triển, và đảm bảo mọi người hiểu được ý nghĩa và tác động của công việc họ đang làm. Một môi trường làm việc tích cực và minh bạch cũng rất quan trọng.',
      },
      {
        question: 'Kỹ năng quan trọng nhất của một nhà lãnh đạo là gì?',
        answer:
          'Thật khó để chọn chỉ một, nhưng giao tiếp hiệu quả thường được coi là nền tảng. Khả năng lắng nghe, truyền đạt tầm nhìn một cách rõ ràng, và đưa ra phản hồi một cách xây dựng là cực kỳ quan trọng để dẫn dắt một đội nhóm thành công.',
      },
      {
        question: 'Làm thế nào để xây dựng một đội nhóm có hiệu suất cao (high-performance team)?',
        answer:
          'Một đội nhóm hiệu suất cao cần có: mục tiêu rõ ràng và chung, sự tin tưởng và an toàn tâm lý, vai trò và trách nhiệm được xác định rõ, giao tiếp cởi mở, và sự đa dạng về kỹ năng và quan điểm. Nhà lãnh đạo có vai trò vun đắp những yếu tố này.',
      },
      {
        question: 'Làm thế nào để giải quyết xung đột trong đội nhóm?',
        answer:
          'Đừng né tránh xung đột. Hãy tạo điều kiện cho một cuộc thảo luận cởi mở và tôn trọng, tập trung vào vấn đề chứ không phải cá nhân. Lắng nghe tất cả các bên và làm trung gian để tìm ra một giải pháp mà mọi người đều có thể đồng ý.',
      },
      {
        question: 'Làm thế nào để một người không có chức danh quản lý vẫn có thể thể hiện khả năng lãnh đạo?',
        answer:
          'Lãnh đạo là một hành động, không phải một chức danh. Bạn có thể thể hiện khả năng lãnh đạo bằng cách chủ động nhận trách nhiệm, giúp đỡ đồng nghiệp, đề xuất các ý tưởng cải tiến, và luôn duy trì thái độ tích cực. Đây được gọi là "lãnh đạo không chính thức".',
      },
    ],
  },
  {
    id: 'entrepreneurship-startup-basics',
    title: 'Cơ Bản Khởi Nghiệp và Tinh Thần Doanh Nhân',
    description: 'Học các nguyên tắc khởi nghiệp, validate ý tưởng kinh doanh và xây dựng startup từ zero.',
    duration: '70 phút',
    difficulty: 'Nâng cao',
    videoUrl: null,
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
      {
        question: '"Pivot" trong khởi nghiệp nghĩa là gì?',
        answer:
          'Pivot là một sự thay đổi chiến lược có định hướng trong mô hình kinh doanh của một startup. Đó không phải là từ bỏ ý tưởng ban đầu, mà là điều chỉnh một hoặc nhiều yếu tố cốt lõi (như phân khúc khách hàng, kênh phân phối, giải pháp) dựa trên những gì đã học được từ thị trường.',
      },
      {
        question: 'Làm thế nào để tìm được người đồng sáng lập (co-founder) phù hợp?',
        answer:
          'Hãy tìm một người có bộ kỹ năng bổ sung cho bạn (ví dụ: một người kỹ thuật và một người kinh doanh). Quan trọng hơn, hãy đảm bảo các bạn có chung tầm nhìn, giá trị cốt lõi và sự cam kết. Mối quan hệ với co-founder giống như một cuộc hôn nhân kinh doanh.',
      },
      {
        question: 'Các nguồn vốn phổ biến cho startup ở giai đoạn đầu là gì?',
        answer:
          'Các nguồn phổ biến bao gồm: tự bỏ vốn (bootstrapping), bạn bè và gia đình (friends and family), các nhà đầu tư thiên thần (angel investors), và các quỹ đầu tư mạo hiểm giai đoạn sớm (seed-stage venture capital). Mỗi loại có ưu và nhược điểm riêng.',
      },
      {
        question: 'Tinh thần doanh nhân (entrepreneurship) có thể học được không?',
        answer:
          'Chắc chắn rồi. Mặc dù một số người có tố chất bẩm sinh, nhưng tinh thần doanh nhân là một tập hợp các kỹ năng và tư duy có thể được học hỏi và rèn luyện, chẳng hạn như khả năng chấp nhận rủi ro có tính toán, sự kiên trì, và khả năng nhìn thấy cơ hội ở nơi người khác thấy vấn đề.',
      },
      {
        question: 'Một "pitch deck" tốt cần có những slide nào?',
        answer:
          'Một pitch deck tiêu chuẩn thường có 10-12 slide, bao gồm: Vấn đề, Giải pháp, Sản phẩm (MVP), Quy mô thị trường, Mô hình kinh doanh, Đội ngũ sáng lập, Lợi thế cạnh tranh, Kế hoạch tiếp cận thị trường, Các chỉ số đã đạt được (traction), và Lời kêu gọi (số tiền cần huy động).',
      },
      {
        question: 'Thất bại lớn nhất của các startup là gì?',
        answer:
          'Theo nhiều nghiên cứu, lý do hàng đầu khiến các startup thất bại là "không có nhu cầu thị trường". Họ tạo ra một sản phẩm mà không ai muốn hoặc cần. Đây là lý do tại sao việc xác thực ý tưởng và nói chuyện với khách hàng ngay từ đầu lại cực kỳ quan trọng.',
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
