import { BaseLessonData } from '@/types/lesson-base';

export const aiSeoOptimizationLessons: BaseLessonData[] = [
  {
    id: 'keyword-research-ai',
    title: 'Nghiên cứu từ khóa bằng AI',
    description:
      'Học cách sử dụng các công cụ AI để khám phá các cụm từ khóa tiềm năng, phân tích ý định tìm kiếm và dự báo xu hướng.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    objectives: [
      'Sử dụng ChatGPT và các công cụ tương tự để brainstorm ý tưởng từ khóa.',
      'Áp dụng kỹ thuật keyword clustering để nhóm các từ khóa liên quan.',
      'Phân tích SERP (Trang kết quả của Công cụ tìm kiếm) bằng AI để xác định ý định người dùng.',
      'Dự báo xu hướng từ khóa bằng các công cụ phân tích dữ liệu.',
    ],
    prerequisites: ['Kiến thức SEO cơ bản', 'Tài khoản ChatGPT (miễn phí)'],
    exercises: [
      {
        title: 'Tạo cụm từ khóa cho một chủ đề',
        description: 'Sử dụng ChatGPT để tạo một danh sách các cụm từ khóa (keyword clusters) cho một chủ đề bạn chọn.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chọn một chủ đề (ví dụ: "máy ảnh mirrorless").',
          'Yêu cầu ChatGPT: "Tạo các cụm từ khóa cho chủ đề [chủ đề của bạn]. Nhóm chúng theo ý định tìm kiếm: thông tin, so sánh, mua hàng, và điều hướng."',
          'Phân tích kết quả và chọn ra 5 cụm từ khóa tiềm năng nhất.',
        ],
        expectedResults: 'Một danh sách các cụm từ khóa được tổ chức tốt, sẵn sàng cho việc lập kế hoạch nội dung.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao phải dùng AI để nghiên cứu từ khóa?',
        answer:
          'AI giúp xử lý lượng dữ liệu lớn nhanh hơn, phát hiện các mẫu và cụm từ khóa mà con người có thể bỏ lỡ. Nó cũng giúp phân tích ý định tìm kiếm ở quy mô lớn, tiết kiệm hàng giờ làm việc thủ công.',
      },
      {
        question: 'Công cụ AI nào tốt nhất cho việc nghiên cứu từ khóa?',
        answer:
          'Không có công cụ "tốt nhất" duy nhất. Một sự kết hợp thường hiệu quả: ChatGPT cho brainstorming, các công cụ như Ahrefs hoặc SEMrush với tính năng AI để phân tích cạnh tranh, và các công cụ chuyên dụng như Keyword Insights để clustering.',
      },
      {
        question: 'Làm thế nào để đảm bảo từ khóa do AI tạo ra là phù hợp với đối tượng của tôi?',
        answer:
          'Luôn kết hợp kết quả của AI với sự hiểu biết của bạn về khách hàng. Sử dụng AI làm điểm khởi đầu, sau đó tinh chỉnh danh sách dựa trên kiến thức về ngành, sản phẩm và mục tiêu của bạn. Đừng bao giờ tin tưởng 100% vào AI mà không có sự kiểm duyệt của con người.',
      },
    ],
    realWorldApplications: [
      'Các agency SEO sử dụng AI để tăng tốc quá trình nghiên cứu từ khóa cho khách hàng.',
      'Các blogger và content creator dùng AI để tìm các ngách nội dung ít cạnh tranh.',
      'Các trang e-commerce phân tích từ khóa để tối ưu hóa trang sản phẩm và danh mục.',
    ],
  },
  {
    id: 'content-creation-ai',
    title: 'Sáng tạo và Tối ưu hóa Nội dung với AI',
    description:
      'Từ việc tạo dàn ý, viết bản nháp đến tối ưu hóa NLP, khám phá cách AI có thể giúp bạn sản xuất nội dung chất lượng cao và chuẩn SEO.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    objectives: [
      'Sử dụng AI để tạo dàn ý chi tiết cho bài viết blog.',
      'Viết bản nháp đầu tiên của một bài viết bằng các công cụ như Jasper hoặc Copy.ai.',
      'Tối ưu hóa nội dung hiện có bằng các công cụ phân tích NLP như SurferSEO hoặc Frase.',
      'Kiểm tra và chỉnh sửa nội dung do AI tạo ra để đảm bảo tính độc đáo và chính xác.',
    ],
    prerequisites: ['Hoàn thành bài "Nghiên cứu từ khóa bằng AI"'],
    exercises: [
      {
        title: 'Tạo một bài viết blog ngắn bằng AI',
        description:
          'Sử dụng một trong các từ khóa bạn đã tìm thấy ở bài trước để tạo một bài viết blog khoảng 500 từ.',
        difficulty: 'Trung bình',
        materials: ['Tài khoản một công cụ viết AI (ví dụ: Jasper, Copy.ai, hoặc ChatGPT)'],
        procedure: [
          'Cung cấp từ khóa chính và yêu cầu AI tạo dàn ý.',
          'Dựa trên dàn ý, yêu cầu AI viết từng phần của bài viết.',
          'Ghép các phần lại và đọc lại toàn bộ bài viết.',
          'Chỉnh sửa, thêm thắt thông tin và giọng văn của riêng bạn để bài viết trở nên độc đáo.',
        ],
        expectedResults: 'Một bài viết blog hoàn chỉnh, sẵn sàng để đăng, được tạo ra trong thời gian ngắn.',
      },
    ],
    realWorldApplications: [
      'Các tòa soạn báo điện tử dùng AI để tạo các bản tin nhanh.',
      'Các công ty marketing tạo hàng loạt các bài đăng mạng xã hội và email marketing.',
      'Các doanh nghiệp tự động tạo mô tả sản phẩm cho hàng nghìn mặt hàng.',
    ],
  },
  {
    id: 'technical-seo-ai',
    title: 'Phân tích và Tối ưu hóa SEO Kỹ thuật bằng AI',
    description:
      'Tìm hiểu cách các công cụ AI có thể tự động quét website của bạn, phát hiện các vấn đề kỹ thuật và đề xuất các giải pháp tối ưu.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    objectives: [
      'Sử dụng các công cụ như Screaming Frog hoặc Sitebulb để thu thập dữ liệu SEO kỹ thuật.',
      'Phân tích log file của máy chủ bằng AI để hiểu cách Googlebot thu thập dữ liệu trang web.',
      'Tự động hóa việc giám sát Core Web Vitals và các chỉ số hiệu suất khác.',
      'Sử dụng AI để xây dựng chiến lược liên kết nội bộ tối ưu.',
    ],
    prerequisites: ['Kiến thức về HTML/CSS', 'Hiểu biết về cấu trúc website'],
    exercises: [
      {
        title: 'Phân tích On-Page của một URL',
        description:
          'Sử dụng một công cụ AI SEO để phân tích một trang trên website của bạn và tìm các điểm cần cải thiện.',
        difficulty: 'Trung bình',
        materials: ['Tài khoản một công cụ SEO AI (nhiều công cụ có bản dùng thử)'],
        procedure: [
          'Nhập URL của trang bạn muốn phân tích vào công cụ.',
          'Chạy phân tích on-page.',
          'Xem lại các đề xuất về thẻ tiêu đề, mô tả meta, thẻ heading, và mật độ từ khóa.',
          'Thực hiện ít nhất 3 thay đổi được đề xuất trên trang của bạn.',
        ],
        expectedResults: 'Một trang được tối ưu hóa tốt hơn về mặt on-page, có khả năng xếp hạng cao hơn.',
      },
    ],
    realWorldApplications: [
      'Các chuyên gia SEO sử dụng AI để kiểm toán các trang web lớn với hàng triệu URL.',
      'Các nhà phát triển web tích hợp các đề xuất SEO từ AI vào quy trình làm việc của họ.',
      'Các quản trị viên web theo dõi sức khỏe kỹ thuật của trang web một cách liên tục.',
    ],
  },
  {
    id: 'reporting-strategy-ai',
    title: 'Báo cáo, Phân tích và Xây dựng Chiến lược với AI',
    description:
      'Học cách kết nối dữ liệu từ Google Analytics, Search Console và các công cụ khác để tạo ra các báo cáo thông minh và dự báo hiệu suất SEO.',
    duration: '60 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    objectives: [
      'Kết nối các nguồn dữ liệu SEO vào một nền tảng báo cáo AI.',
      'Tạo các dashboard tự động cập nhật để theo dõi các KPI quan trọng.',
      'Sử dụng AI để phân tích mối tương quan giữa các hoạt động SEO và kết quả kinh doanh.',
      'Dự báo lưu lượng truy cập và thứ hạng dựa trên dữ liệu lịch sử và các mô hình AI.',
    ],
    prerequisites: ['Tài khoản Google Analytics và Google Search Console', 'Kiến thức cơ bản về phân tích dữ liệu'],
    exercises: [
      {
        title: 'Tạo một báo cáo SEO tự động',
        description:
          'Sử dụng một công cụ như Looker Studio với các trình kết nối AI để tạo một báo cáo tổng quan về hiệu suất SEO.',
        difficulty: 'Nâng cao',
        materials: ['Tài khoản Looker Studio (miễn phí)', 'Dữ liệu từ GA4 và GSC'],
        procedure: [
          'Kết nối nguồn dữ liệu GA4 và GSC vào Looker Studio.',
          'Tạo các biểu đồ để hiển thị lưu lượng truy cập không phải trả tiền, số lần hiển thị, tỷ lệ nhấp và vị trí trung bình.',
          'Thêm bộ lọc theo ngày tháng và thiết bị.',
          'Sử dụng các tính năng "Ask a question" (hỏi đáp bằng ngôn ngữ tự nhiên) để khám phá dữ liệu.',
        ],
        expectedResults: 'Một dashboard tương tác cung cấp cái nhìn toàn diện về hiệu suất SEO của bạn.',
      },
    ],
    realWorldApplications: [
      'Các giám đốc marketing sử dụng báo cáo AI để trình bày kết quả SEO cho ban lãnh đạo.',
      'Các nhóm SEO sử dụng các dự báo để đặt mục tiêu và phân bổ nguồn lực.',
      'Các nhà phân tích dữ liệu khám phá các insight ẩn trong dữ liệu SEO.',
    ],
  },
];
