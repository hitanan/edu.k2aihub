import { BaseLessonData } from '@/types/lesson-base';

export interface OfficeWorkLesson extends BaseLessonData {
  tools: string[];
  realWorldApplications: string[];
}

export const officeWorkLessons: OfficeWorkLesson[] = [
  {
    id: 'chatgpt-for-email',
    title: 'Soạn Email Chuyên nghiệp với ChatGPT',
    description:
      'Học cách sử dụng ChatGPT để soạn thảo, tối ưu hóa và tự động hóa các công việc liên quan đến email hàng ngày.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=b-Z4-d_s-gU',
    imageUrl: 'https://images.unsplash.com/photo-1586766641985-6501a113c33a?w=400&h=400&fit=crop',
    objectives: [
      'Soạn thảo email mới dựa trên các yêu cầu ngắn gọn.',
      'Tối ưu hóa và làm chuyên nghiệp hơn các email đã viết.',
      'Tóm tắt các chuỗi email dài và phức tạp.',
      'Tạo các mẫu email có thể tái sử dụng cho các tình huống phổ biến.',
    ],
    prerequisites: ['Tài khoản ChatGPT (miễn phí hoặc trả phí).', 'Kiến thức cơ bản về cách sử dụng email.'],
    tools: ['ChatGPT', 'Gmail', 'Microsoft Outlook'],
    exercises: [
      {
        title: 'Thực hành Soạn thảo Email',
        description:
          'Sử dụng các prompt (câu lệnh) khác nhau để yêu cầu ChatGPT tạo ra các loại email công việc phổ biến.',
        difficulty: 'Cơ bản',
        procedure: [
          'Prompt 1: "Viết một email chuyên nghiệp cho khách hàng X thông báo về việc dự án sẽ bị trễ 2 ngày và đề xuất giải pháp."',
          'Prompt 2: "Tạo một email thân thiện để mời các thành viên trong nhóm tham gia một buổi họp brainstorming vào thứ Sáu tuần này."',
          'Prompt 3: "Tóm tắt chuỗi email sau đây thành 3 gạch đầu dòng chính và nêu ra các hành động cần thực hiện."',
        ],
        expectedResults:
          'Các email được tạo ra có văn phong phù hợp, đầy đủ thông tin và không có lỗi chính tả, ngữ pháp.',
      },
    ],
    realWorldApplications: [
      'Một nhân viên kinh doanh sử dụng ChatGPT để nhanh chóng trả lời các yêu cầu của khách hàng.',
      'Một trưởng nhóm dự án dùng ChatGPT để tóm tắt các cuộc thảo luận dài và gửi báo cáo cho cấp trên.',
      'Một nhân viên nhân sự tạo các mẫu email để gửi cho ứng viên ở các vòng phỏng vấn.',
    ],
    faqs: [
      {
        question: 'Làm thế nào để prompt ChatGPT viết email hiệu quả?',
        answer:
          "Hãy cung cấp ngữ cảnh rõ ràng. Bắt đầu bằng vai trò của bạn (ví dụ: 'Hãy đóng vai một trưởng phòng marketing'), sau đó nêu rõ mục tiêu của email, người nhận là ai, và văn phong mong muốn (trang trọng, thân thiện, thuyết phục...). Cung cấp các thông tin chính cần có trong email.",
      },
      {
        question: 'ChatGPT có thể giúp tôi trả lời email nhanh hơn không?',
        answer:
          "Chắc chắn. Bạn có thể dán nội dung email nhận được vào ChatGPT và yêu cầu nó 'soạn một email trả lời cho email này, đồng ý với đề xuất A và hỏi thêm về chi tiết B'. Điều này giúp bạn tiết kiệm rất nhiều thời gian soạn thảo.",
      },
      {
        question: 'Làm thế nào để ChatGPT học được phong cách viết của tôi?',
        answer:
          "Bạn có thể 'đào tạo' ChatGPT bằng cách cung cấp cho nó một vài ví dụ về các email bạn đã viết trước đây và yêu cầu: 'Đây là phong cách viết của tôi. Hãy viết một email mới về chủ đề X theo phong cách này'.",
      },
      {
        question: 'Sử dụng ChatGPT để viết email có an toàn về mặt bảo mật không?',
        answer:
          'Hãy cẩn thận. Không bao giờ dán các thông tin nhạy cảm, bí mật của công ty hoặc thông tin cá nhân của khách hàng vào ChatGPT phiên bản miễn phí. Các phiên bản trả phí dành cho doanh nghiệp thường có các chính sách bảo mật tốt hơn. Luôn kiểm tra quy định của công ty bạn.',
      },
      {
        question: 'ChatGPT có thể dịch email sang ngôn ngữ khác không?',
        answer:
          "Có, và nó làm rất tốt. Bạn có thể yêu cầu 'dịch email này sang tiếng Anh với văn phong kinh doanh trang trọng'. Đây là một công cụ cực kỳ hữu ích khi làm việc với các đối tác quốc tế.",
      },
      {
        question: 'Làm thế nào để tóm tắt một chuỗi email dài?',
        answer:
          "Sao chép và dán toàn bộ chuỗi email vào ChatGPT và sử dụng prompt như: 'Tóm tắt chuỗi email này thành các điểm chính' hoặc 'Ai chịu trách nhiệm cho việc gì sau cuộc thảo luận này?'. ",
      },
      {
        question: 'ChatGPT có thể giúp tôi kiểm tra lỗi ngữ pháp và chính tả không?',
        answer:
          "Có, đây là một trong những thế mạnh của nó. Chỉ cần dán nội dung email của bạn và yêu cầu 'kiểm tra và sửa các lỗi ngữ pháp, chính tả trong văn bản này'.",
      },
      {
        question: 'Tôi có thể tạo các mẫu email (template) với ChatGPT không?',
        answer:
          "Hoàn toàn có thể. Hãy yêu cầu 'tạo một mẫu email để từ chối một lời mời hợp tác một cách lịch sự' hoặc 'tạo một mẫu email để chào mừng một nhân viên mới'. Lưu các mẫu này lại để sử dụng trong tương lai.",
      },
      {
        question: 'Làm thế nào để email do ChatGPT viết nghe tự nhiên hơn?',
        answer:
          "Sau khi ChatGPT tạo ra email, hãy yêu cầu nó 'viết lại email này với giọng văn thân thiện và gần gũi hơn' hoặc 'thêm một chút hài hước vào email này'. Luôn đọc lại và chỉnh sửa một vài từ để thêm dấu ấn cá nhân của bạn.",
      },
      {
        question: 'ChatGPT có thể giúp tôi lên lịch cuộc họp qua email không?',
        answer:
          "Có. Bạn có thể yêu cầu: 'Viết một email để đề xuất một cuộc họp vào thứ Ba hoặc thứ Tư tuần tới. Đề nghị người nhận chọn thời gian phù hợp với họ và cung cấp một liên kết Calendly để đặt lịch'. ",
      },
    ],
  },
  {
    id: 'excel-automation-ai',
    title: 'Tự động hóa Excel với AI và VBA',
    description:
      'Học cách kết hợp sức mạnh của AI và VBA để tự động hóa các tác vụ lặp đi lặp lại trong Excel, từ việc làm sạch dữ liệu đến tạo báo cáo.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Sử dụng AI để tạo các công thức Excel phức tạp.',
      'Yêu cầu AI viết các đoạn mã VBA để tự động hóa các quy trình.',
      'Làm sạch và chuẩn hóa dữ liệu hàng loạt bằng công cụ AI.',
      'Tạo các biểu đồ và báo cáo tự động.',
    ],
    prerequisites: ['Kiến thức cơ bản về Microsoft Excel.', 'Hiểu biết sơ bộ về lập trình là một lợi thế.'],
    tools: ['Microsoft Excel', 'ChatGPT', 'Copilot for Microsoft 365'],
    exercises: [
      {
        title: 'Tạo mã VBA bằng AI',
        description:
          'Yêu cầu ChatGPT viết một đoạn mã VBA để tự động tô màu các ô trong một cột nếu giá trị của chúng lớn hơn một ngưỡng nhất định.',
        difficulty: 'Trung bình',
        procedure: [
          'Mở Excel và nhấn Alt + F11 để mở trình soạn thảo VBA.',
          'Prompt ChatGPT: "Viết một đoạn mã VBA để lặp qua tất cả các ô trong cột A, nếu giá trị của ô lớn hơn 100, hãy tô màu nền của ô đó thành màu vàng."',
          'Sao chép mã VBA được tạo ra và dán vào một module mới trong trình soạn thảo VBA.',
          'Chạy macro để xem kết quả.',
        ],
        expectedResults: 'Tất cả các ô trong cột A có giá trị lớn hơn 100 sẽ tự động được tô màu vàng.',
      },
    ],
    realWorldApplications: [
      'Một kế toán viên tự động hóa việc tạo báo cáo tài chính hàng tháng.',
      'Một nhà phân tích dữ liệu sử dụng AI để làm sạch một bộ dữ liệu lớn trước khi phân tích.',
      'Một nhân viên bán hàng tạo một macro để tự động gửi email báo cáo từ dữ liệu Excel.',
    ],
    faqs: [
      {
        question: 'Tôi không biết gì về VBA, AI có thể giúp tôi không?',
        answer:
          "Chắc chắn. Đây chính là thế mạnh của AI. Bạn chỉ cần mô tả yêu cầu của mình bằng ngôn ngữ tự nhiên, ví dụ: 'Viết cho tôi một macro Excel để sao chép dữ liệu từ sheet1 sang sheet2', và AI sẽ tạo ra mã VBA cho bạn.",
      },
      {
        question: 'Làm thế nào để yêu cầu AI viết một công thức Excel phức tạp?',
        answer:
          "Hãy mô tả rõ ràng cấu trúc bảng tính của bạn và kết quả bạn muốn. Ví dụ: 'Trong sheet của tôi, cột A là tên sản phẩm, cột B là số lượng, cột C là đơn giá. Hãy viết một công thức ở ô D2 để tính tổng thành tiền, nhưng chỉ tính cho các sản phẩm có tên là 'Sách' và số lượng lớn hơn 10'.",
      },
      {
        question: 'AI có thể giúp tôi làm sạch dữ liệu không?',
        answer:
          "Rất tốt. Bạn có thể yêu cầu AI viết công thức để chuẩn hóa dữ liệu, ví dụ: 'Viết công thức để xóa các khoảng trắng thừa và viết hoa chữ cái đầu của mỗi từ trong ô A1'. Đối với các tác vụ phức tạp hơn, bạn có thể yêu cầu nó viết mã VBA để xử lý hàng loạt.",
      },
      {
        question: 'Copilot for Microsoft 365 khác gì so với ChatGPT?',
        answer:
          'Copilot được tích hợp sâu vào các ứng dụng Microsoft 365 (như Excel, Word). Nó có thể truy cập và hành động trực tiếp trên dữ liệu của bạn trong các ứng dụng đó. ChatGPT là một công cụ độc lập, bạn phải sao chép và dán dữ liệu qua lại. Copilot mạnh hơn nhưng là một dịch vụ trả phí.',
      },
      {
        question: 'Làm thế nào để chạy một macro VBA trong Excel?',
        answer:
          "Sau khi dán mã vào trình soạn thảo VBA (Alt + F11), bạn có thể quay lại Excel, vào tab 'Developer', nhấn 'Macros', chọn macro bạn muốn chạy và nhấn 'Run'. Nếu không thấy tab 'Developer', bạn cần bật nó trong Excel Options.",
      },
      {
        question: 'AI có thể giúp tôi tạo biểu đồ không?',
        answer:
          "Có. Bạn có thể mô tả loại biểu đồ bạn muốn và dữ liệu bạn muốn sử dụng. Ví dụ: 'Dựa trên dữ liệu từ A1 đến B10, hãy viết mã VBA để tạo một biểu đồ cột so sánh doanh thu theo tháng'.",
      },
      {
        question: 'Sử dụng AI để tự động hóa Excel có rủi ro gì không?',
        answer:
          'Có. Mã do AI tạo ra có thể không phải lúc nào cũng hoàn hảo. Luôn thử nghiệm mã trên một bản sao của tệp dữ liệu của bạn trước khi chạy trên dữ liệu gốc. Hãy hiểu (hoặc nhờ AI giải thích) mã đó làm gì trước khi chạy nó.',
      },
      {
        question: 'Tôi có thể kết nối Excel với các API bên ngoài bằng AI không?',
        answer:
          'Có, đây là một ứng dụng nâng cao rất mạnh mẽ. Bạn có thể yêu cầu AI viết mã VBA để lấy dữ liệu từ một API web (ví dụ: tỷ giá hối đoái, giá cổ phiếu) và cập nhật tự động vào bảng tính Excel của bạn.',
      },
      {
        question: 'Làm thế nào để gỡ lỗi (debug) một đoạn mã VBA do AI tạo ra?',
        answer:
          "Nếu mã bị lỗi, bạn có thể dán lại toàn bộ mã và thông báo lỗi vào AI và yêu cầu nó 'tìm và sửa lỗi trong đoạn mã này'. AI thường có thể xác định vấn đề và đề xuất cách khắc phục.",
      },
      {
        question: 'AI có thể giúp tôi phân tích dữ liệu trong Excel không?',
        answer:
          "Có. Bạn có thể mô tả bộ dữ liệu của mình và hỏi các câu hỏi như 'Xu hướng chính trong dữ liệu này là gì?' hoặc 'Sản phẩm nào có doanh thu cao nhất trong quý 3?'. AI có thể đề xuất các công thức, PivotTable hoặc thậm chí là các phân tích thống kê để trả lời câu hỏi của bạn.",
      },
    ],
  },
  {
    id: 'ai-presentation-creation',
    title: 'Tạo Bài Thuyết trình Ấn tượng với AI',
    description:
      'Khám phá các công cụ AI giúp bạn nhanh chóng tạo ra các bài thuyết trình chuyên nghiệp, từ việc xây dựng dàn ý đến thiết kế slide.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Sử dụng AI để tạo dàn ý và nội dung cho bài thuyết trình từ một chủ đề.',
      'Khám phá các công cụ AI tự động thiết kế slide (như Gamma, Beautiful.ai).',
      'Tạo hình ảnh minh họa độc đáo cho slide bằng AI tạo ảnh.',
      'Sử dụng AI để tóm tắt văn bản dài thành các gạch đầu dòng cho slide.',
    ],
    prerequisites: ['Kiến thức cơ bản về cách tạo bài thuyết trình (PowerPoint, Google Slides).'],
    tools: ['Gamma.app', 'Beautiful.ai', 'ChatGPT', 'Midjourney'],
    exercises: [
      {
        title: 'Tạo bài thuyết trình trong 1 phút',
        description: 'Sử dụng Gamma.app để tạo một bài thuyết trình hoàn chỉnh từ một câu lệnh duy nhất.',
        difficulty: 'Cơ bản',
        procedure: [
          'Truy cập Gamma.app và đăng ký một tài khoản.',
          'Chọn "Tạo mới với AI" (Generate new with AI).',
          'Nhập một câu lệnh, ví dụ: "Một bài thuyết trình về tương lai của trí tuệ nhân tạo trong giáo dục".',
          'Xem AI tự động tạo ra dàn ý, nội dung và thiết kế cho toàn bộ bài thuyết trình.',
          'Chỉnh sửa và tùy biến lại các slide theo ý muốn.',
        ],
        expectedResults:
          'Một bài thuyết trình khoảng 8-10 slide, có cấu trúc logic, nội dung phù hợp và thiết kế đẹp mắt.',
      },
    ],
    realWorldApplications: [
      'Một sinh viên nhanh chóng tạo bài thuyết trình cho bài tập lớn.',
      'Một nhà quản lý tạo slide để báo cáo tiến độ dự án trong cuộc họp.',
      'Một người bán hàng tạo một bài thuyết trình sản phẩm ấn tượng để gửi cho khách hàng.',
    ],
    faqs: [
      {
        question: 'Các công cụ AI tạo bài thuyết trình hoạt động như thế nào?',
        answer:
          'Bạn chỉ cần cung cấp cho chúng một chủ đề hoặc một dàn ý. AI sẽ tự động nghiên cứu chủ đề đó, viết nội dung cho từng slide, tìm hoặc tạo hình ảnh minh họa, và sắp xếp tất cả vào một thiết kế chuyên nghiệp. Bạn có thể chỉnh sửa mọi thứ sau đó.',
      },
      {
        question: 'Công cụ AI nào là tốt nhất để tạo bài thuyết trình?',
        answer:
          'Có nhiều công cụ tốt, mỗi công cụ có một thế mạnh. Gamma.app rất mạnh về việc tạo nội dung và thiết kế linh hoạt. Beautiful.ai tập trung vào việc tạo ra các slide có thiết kế cực kỳ đẹp và nhất quán. Tome.app mạnh về kể chuyện và tích hợp nội dung đa phương tiện.',
      },
      {
        question: 'AI có thể giúp tôi thiết kế slide đẹp hơn không?',
        answer:
          'Chắc chắn. Đây là một trong những lợi ích lớn nhất. Các công cụ AI được lập trình với các nguyên tắc thiết kế tốt, giúp bạn tránh các lỗi phổ biến như quá nhiều chữ, màu sắc lộn xộn, hoặc bố cục không cân đối. Slide của bạn sẽ trông chuyên nghiệp hơn rất nhiều.',
      },
      {
        question: 'Làm thế nào để tạo hình ảnh minh họa độc đáo cho slide?',
        answer:
          "Bạn có thể sử dụng các công cụ tạo ảnh bằng AI như Midjourney hoặc DALL-E. Hãy đưa ra các câu lệnh mô tả hình ảnh bạn muốn, ví dụ: 'Một robot đang giảng bài cho các học sinh trong một lớp học tương lai, phong cách hoạt hình 3D'. Bạn sẽ có một hình ảnh độc đáo mà không ai khác có.",
      },
      {
        question: 'Tôi có một tài liệu Word dài, AI có thể biến nó thành bài thuyết trình không?',
        answer:
          "Có. Hầu hết các công cụ AI tạo bài thuyết trình đều cho phép bạn dán một đoạn văn bản dài vào và yêu cầu nó 'tạo một bài thuyết trình dựa trên văn bản này'. Nó sẽ tự động tóm tắt và chia nội dung vào các slide phù hợp.",
      },
      {
        question: 'Sử dụng AI có làm bài thuyết trình của tôi bị rập khuôn không?',
        answer:
          'Có thể nếu bạn không chỉnh sửa. Hãy coi AI là một người trợ lý giúp bạn làm 80% công việc. 20% còn lại là của bạn: hãy thêm vào các ví dụ cá nhân, câu chuyện của riêng bạn, và điều chỉnh thiết kế để phù hợp với thương hiệu hoặc phong cách của bạn. Đừng bao giờ trình bày một bài thuyết trình do AI tạo ra mà không xem lại và tùy chỉnh.',
      },
      {
        question: 'AI có thể giúp tôi luyện tập thuyết trình không?',
        answer:
          "Có. Một số công cụ như Copilot for Microsoft 365 trong PowerPoint có tính năng 'Rehearse with Coach'. Nó sẽ lắng nghe bạn thuyết trình và đưa ra phản hồi về tốc độ nói, từ đệm ('ừm', 'à'), và các khía cạnh khác.",
      },
      {
        question: 'Chi phí cho các công cụ AI tạo bài thuyết trình này là bao nhiêu?',
        answer:
          'Hầu hết các công cụ đều có gói miễn phí cho phép bạn tạo một số lượng bài thuyết trình nhất định. Để có các tính năng nâng cao và không giới hạn, bạn sẽ cần nâng cấp lên gói trả phí, thường có giá từ 8-20 USD mỗi tháng.',
      },
      {
        question: 'AI có thể giúp tôi tìm số liệu và trích dẫn cho bài thuyết trình không?',
        answer:
          "Có, nhưng hãy cẩn thận. Bạn có thể hỏi ChatGPT 'tìm cho tôi một vài số liệu thống kê về sự phát triển của thương mại điện tử ở Việt Nam'. Tuy nhiên, bạn PHẢI yêu cầu nó cung cấp nguồn (source) của các số liệu đó và tự mình kiểm tra lại tính chính xác trước khi đưa vào bài thuyết trình.",
      },
      {
        question: 'Làm thế nào để tích hợp video hoặc các nội dung tương tác khác vào bài thuyết trình do AI tạo ra?',
        answer:
          'Hầu hết các nền tảng AI hiện đại đều cho phép bạn dễ dàng nhúng các nội dung từ bên ngoài như video YouTube, mô hình 3D từ Sketchfab, hoặc các trang web tương tác khác trực tiếp vào slide của bạn, làm cho bài thuyết trình trở nên sinh động hơn nhiều.',
      },
    ],
  },
];
