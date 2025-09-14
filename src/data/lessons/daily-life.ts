import { BaseLessonData } from '@/types/lesson-base';

export const dailyLifeLessons: BaseLessonData[] = [
  {
    id: 'personal-assistant',
    title: 'Trợ lý AI cá nhân',
    description: 'Sử dụng trợ lý AI để quản lý lịch trình và công việc.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    objectives: ['Cài đặt và sử dụng trợ lý ảo', 'Tự động hóa công việc hàng ngày'],
    realWorldApplications: ['Quản lý lịch họp', 'Đặt báo thức và nhắc nhở'],
    faqs: [
      {
        question: 'Trợ lý AI cá nhân có thực sự hiểu những gì tôi nói không?',
        answer:
          'Có, các trợ lý AI hiện đại như Google Assistant, Siri, hoặc Alexa sử dụng công nghệ xử lý ngôn ngữ tự nhiên (NLP) rất tiên tiến để hiểu ý định và ngữ cảnh trong lời nói của bạn. Chúng ngày càng trở nên thông minh hơn qua mỗi lần tương tác.',
      },
      {
        question: 'Sử dụng trợ lý AI có an toàn về mặt bảo mật thông tin cá nhân không?',
        answer:
          'Các công ty lớn như Google, Apple, Amazon đều có các chính sách bảo mật nghiêm ngặt. Dữ liệu của bạn thường được mã hóa. Tuy nhiên, bạn nên xem lại cài đặt bảo mật của mình và chỉ chia sẻ những thông tin cần thiết để đảm bảo an toàn.',
      },
      {
        question: 'Làm thế nào để trợ lý AI có thể giúp tôi làm việc hiệu quả hơn?',
        answer:
          'Trợ lý AI có thể giúp bạn bằng cách tự động hóa các tác vụ lặp đi lặp lại như đặt lịch hẹn, gửi email ngắn, tạo danh sách công việc, và nhắc nhở bạn về các deadline quan trọng. Điều này giúp bạn giải phóng thời gian để tập trung vào những công việc đòi hỏi sự sáng tạo và tư duy sâu hơn.',
      },
      {
        question: 'Tôi có thể sử dụng trợ lý AI để điều khiển các thiết bị trong nhà không?',
        answer:
          'Chắc chắn rồi. Đây là một trong những ứng dụng phổ biến nhất của trợ lý AI. Bằng cách kết nối với các thiết bị nhà thông minh (smart home), bạn có thể dùng giọng nói để điều khiển đèn, quạt, TV, máy lạnh và nhiều thiết bị khác.',
      },
    ],
  },
  {
    id: 'financial-ai',
    title: 'Quản lý tài chính với AI',
    description: 'Dùng AI để theo dõi chi tiêu và lập kế hoạch tài chính.',
    duration: '50 phút',
    difficulty: 'Cơ bản',
    objectives: ['Sử dụng ứng dụng quản lý tài chính AI', 'Phân tích thói quen chi tiêu'],
    realWorldApplications: ['Lập ngân sách cá nhân', 'Theo dõi hóa đơn'],
    faqs: [
      {
        question: 'Các ứng dụng tài chính AI hoạt động như thế nào?',
        answer:
          'Các ứng dụng này thường kết nối an toàn với tài khoản ngân hàng của bạn. Sau đó, AI sẽ tự động phân loại các giao dịch (ví dụ: ăn uống, đi lại, mua sắm), giúp bạn có một cái nhìn tổng quan về thói quen chi tiêu mà không cần nhập liệu thủ công.',
      },
      {
        question: 'AI có thể giúp tôi tiết kiệm tiền bằng cách nào?',
        answer:
          'AI có thể phân tích các khoản chi tiêu của bạn và chỉ ra những lĩnh vực bạn đang chi tiêu quá nhiều. Một số ứng dụng còn có thể tìm và đề xuất hủy các gói đăng ký mà bạn không còn sử dụng, hoặc gợi ý các cách để tối ưu hóa hóa đơn hàng tháng.',
      },
      {
        question: 'Liệu AI có thể đưa ra lời khuyên đầu tư không?',
        answer:
          'Có, các "robo-advisor" là những nền tảng đầu tư sử dụng AI để xây dựng và quản lý danh mục đầu tư cho bạn dựa trên mức độ chấp nhận rủi ro và mục tiêu tài chính của bạn. Chúng là một cách tiếp cận đầu tư chi phí thấp và dễ dàng cho người mới bắt đầu.',
      },
      {
        question: 'Sử dụng các ứng dụng này có an toàn không?',
        answer:
          'Các ứng dụng tài chính uy tín sử dụng mã hóa cấp ngân hàng và các biện pháp bảo mật mạnh mẽ để bảo vệ dữ liệu của bạn. Tuy nhiên, hãy luôn chọn các ứng dụng có tên tuổi, đọc kỹ các bài đánh giá và sử dụng mật khẩu mạnh.',
      },
    ],
  },
  {
    id: 'health-fitness',
    title: 'Sức khỏe & Fitness AI',
    description: 'Theo dõi sức khỏe và tập luyện với sự hỗ trợ của AI.',
    duration: '40 phút',
    difficulty: 'Cơ bản',
    objectives: ['Sử dụng ứng dụng theo dõi sức khỏe', 'Nhận gợi ý bài tập từ AI'],
    realWorldApplications: ['Theo dõi giấc ngủ', 'Lên kế hoạch tập luyện'],
    faqs: [
      {
        question: 'AI theo dõi giấc ngủ của tôi như thế nào?',
        answer:
          'Các thiết bị đeo như đồng hồ thông minh hoặc nhẫn thông minh sử dụng các cảm biến để theo dõi nhịp tim, chuyển động và nhịp thở của bạn trong khi ngủ. AI sẽ phân tích dữ liệu này để xác định các giai đoạn giấc ngủ (ngủ nông, ngủ sâu, REM) và đưa ra điểm số chất lượng giấc ngủ cùng các khuyến nghị cải thiện.',
      },
      {
        question: 'AI có thể tạo ra một kế hoạch tập luyện cá nhân hóa cho tôi không?',
        answer:
          'Có. Nhiều ứng dụng fitness hiện nay sử dụng AI để tạo ra các kế hoạch tập luyện dựa trên mục tiêu, trình độ thể chất, thời gian bạn có và thậm chí cả các thiết bị bạn có sẵn. AI sẽ điều chỉnh độ khó của bài tập dựa trên phản hồi và tiến trình của bạn.',
      },
      {
        question: 'Làm thế nào AI có thể giúp tôi ăn uống lành mạnh hơn?',
        answer:
          'Các ứng dụng như MyFitnessPal cho phép bạn chụp ảnh bữa ăn và AI sẽ nhận diện các loại thực phẩm để ước tính lượng calo và chất dinh dưỡng. Một số ứng dụng còn có thể đưa ra gợi ý công thức nấu ăn lành mạnh dựa trên sở thích và mục tiêu sức khỏe của bạn.',
      },
      {
        question: 'Các thiết bị theo dõi sức khỏe có chính xác không?',
        answer:
          'Mặc dù không thể chính xác 100% như các thiết bị y tế chuyên dụng, các thiết bị đeo hiện đại ngày càng trở nên chính xác hơn trong việc theo dõi các chỉ số như nhịp tim, số bước chân và lượng calo tiêu thụ. Chúng là công cụ tuyệt vời để theo dõi xu hướng và tạo động lực.',
      },
    ],
  },
  {
    id: 'travel-ai',
    title: 'Du lịch thông minh với AI',
    description: 'Lên kế hoạch chuyến đi và khám phá địa điểm mới với AI.',
    duration: '35 phút',
    difficulty: 'Cơ bản',
    objectives: ['Sử dụng AI để tìm vé máy bay và khách sạn', 'Khám phá địa điểm du lịch'],
    realWorldApplications: ['Lên kế hoạch du lịch', 'Dịch thuật khi đi du lịch'],
    faqs: [
      {
        question: 'AI giúp tôi tìm vé máy bay giá rẻ như thế nào?',
        answer:
          'Các công cụ như Google Flights hoặc Skyscanner sử dụng AI để phân tích hàng triệu chuyến bay và dự đoán xu hướng giá. Chúng có thể cho bạn biết khi nào là thời điểm tốt nhất để mua vé, hoặc gợi ý các sân bay/ngày bay thay thế để có giá tốt hơn.',
      },
      {
        question: 'Làm thế nào để AI giúp tôi lên kế hoạch cho một chuyến đi?',
        answer:
          'Bạn có thể sử dụng các công cụ như ChatGPT và yêu cầu nó tạo một lịch trình du lịch chi tiết. Ví dụ: "Tạo cho tôi lịch trình 5 ngày ở Đà Lạt, tập trung vào thiên nhiên và cà phê". AI sẽ gợi ý các địa điểm, nhà hàng và thậm chí cả thứ tự di chuyển hợp lý.',
      },
      {
        question: 'Google Maps sử dụng AI như thế nào?',
        answer:
          'Google Maps sử dụng AI để phân tích dữ liệu giao thông thời gian thực từ hàng triệu người dùng để dự đoán thời gian di chuyển và gợi ý tuyến đường nhanh nhất. Tính năng Live View còn sử dụng AI và thực tế tăng cường (AR) để chỉ đường cho bạn trong thế giới thực.',
      },
      {
        question: 'AI có thể giúp gì khi tôi đang ở một quốc gia không nói tiếng Anh?',
        answer:
          'Ứng dụng Google Translate là một cứu cánh. Nó sử dụng AI để dịch văn bản qua camera (ví dụ: dịch thực đơn), dịch giọng nói trong thời gian thực để bạn có thể trò chuyện với người bản xứ, và dịch các đoạn văn bản bạn nhập vào.',
      },
    ],
  },
];
