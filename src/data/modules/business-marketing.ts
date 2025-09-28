import { BaseLessonData } from '@/types/lesson-base';

export interface BusinessMarketingLesson extends BaseLessonData {
  keyConcept?: string;
  seoFocus?: string;
  contentStrategy?: string;
  targetAudienceProfile?: string;
  campaignExample?: string;
  metrics?: string;
  strategies: string[];
  platforms: string[];
}

export const businessMarketingLessons: BusinessMarketingLesson[] = [
  {
    id: 'marketing-automation',
    title: 'Tự động hóa Marketing',
    description:
      'Học cách sử dụng các công cụ tự động hóa để nuôi dưỡng khách hàng tiềm năng, cá nhân hóa trải nghiệm và tiết kiệm thời gian.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=n-4-1s_1-2M',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=400&fit=crop',
    objectives: [
      'Thiết lập các chuỗi email tự động (email sequences).',
      'Phân loại và chấm điểm khách hàng tiềm năng (lead scoring).',
      'Cá nhân hóa nội dung marketing dựa trên hành vi người dùng.',
      'Tích hợp các công cụ marketing khác nhau thành một hệ thống.',
    ],
    prerequisites: ['Kiến thức cơ bản về digital marketing.', 'Có website hoặc sản phẩm để thực hành.'],
    keyConcept: 'Tự động hóa các tác vụ marketing lặp đi lặp lại để nuôi dưỡng khách hàng và tăng hiệu quả.',
    strategies: ['Email Marketing', 'Lead Nurturing', 'Personalization'],
    platforms: ['HubSpot', 'Mailchimp', 'ActiveCampaign'],
    exercises: [
      {
        title: 'Tạo một chuỗi email chào mừng',
        description: 'Thiết kế và thiết lập một chuỗi 3 email tự động gửi cho người dùng mới đăng ký.',
        difficulty: 'Cơ bản',
        procedure: [
          'Trong Mailchimp hoặc HubSpot, tạo một automation mới.',
          'Thiết lập trigger là "khi có người dùng mới đăng ký vào danh sách".',
          'Soạn thảo email 1: Chào mừng và giới thiệu giá trị cốt lõi.',
          'Thiết lập chờ 2 ngày, soạn thảo email 2: Chia sẻ một case study hoặc mẹo hữu ích.',
          'Thiết lập chờ 3 ngày, soạn thảo email 3: Giới thiệu sản phẩm/dịch vụ và kêu gọi hành động.',
        ],
        expectedResults: 'Một chuỗi email tự động có khả năng nuôi dưỡng khách hàng tiềm năng mới một cách hiệu quả.',
      },
    ],
    realWorldApplications: [
      'Một công ty SaaS tự động gửi email hướng dẫn cho người dùng mới, giảm tỷ lệ rời bỏ.',
      'Một trang thương mại điện tử gửi email nhắc nhở về giỏ hàng bị bỏ quên, tăng doanh thu.',
      'Một blogger tự động gửi các bài viết mới nhất cho những người đăng ký theo dõi.',
    ],
    faqs: [
      {
        question: 'Marketing Automation là gì?',
        answer:
          'Marketing Automation là việc sử dụng phần mềm để tự động hóa các hoạt động marketing. Nhiều bộ phận marketing phải tự động hóa các nhiệm vụ lặp đi lặp lại như email marketing, đăng bài trên mạng xã hội và thậm chí cả các chiến dịch quảng cáo.',
      },
      {
        question: 'Tại sao Marketing Automation lại quan trọng?',
        answer:
          'Nó giúp tiết kiệm thời gian, tăng hiệu quả và cho phép bạn cung cấp trải nghiệm cá nhân hóa hơn cho khách hàng. Bằng cách tự động hóa các nhiệm vụ lặp đi lặp lại, đội ngũ của bạn có thể tập trung vào chiến lược và sáng tạo.',
      },
      {
        question: 'Lead scoring (chấm điểm khách hàng tiềm năng) là gì?',
        answer:
          'Lead scoring là một phương pháp được sử dụng để xếp hạng các khách hàng tiềm năng dựa trên một thang điểm đại diện cho giá trị cảm nhận của mỗi khách hàng đối với tổ chức. Điểm số này được sử dụng để xác định khách hàng nào cần được đội ngũ bán hàng theo dõi ngay lập tức.',
      },
      {
        question: 'Một ví dụ về chuỗi email nuôi dưỡng (nurturing sequence) là gì?',
        answer:
          'Một chuỗi email nuôi dưỡng phổ biến là chuỗi chào mừng. Khi một người dùng mới đăng ký, họ sẽ nhận được một loạt email được thiết kế để giới thiệu họ với thương hiệu, cung cấp giá trị và cuối cùng là hướng họ đến việc mua hàng.',
      },
      {
        question: 'Các công cụ Marketing Automation phổ biến nhất là gì?',
        answer:
          'Một số công cụ hàng đầu bao gồm HubSpot, Marketo, Pardot (của Salesforce), và ActiveCampaign. Đối với các doanh nghiệp nhỏ hơn, các công cụ như Mailchimp và ConvertKit cũng cung cấp các tính năng tự động hóa mạnh mẽ.',
      },
      {
        question: 'Chi phí cho Marketing Automation là bao nhiêu?',
        answer:
          'Chi phí có thể dao động rất lớn, từ khoảng 20 USD/tháng cho các gói cơ bản của Mailchimp đến hàng nghìn USD/tháng cho các nền tảng doanh nghiệp như HubSpot hoặc Marketo. Chi phí thường phụ thuộc vào số lượng liên hệ và các tính năng bạn cần.',
      },
      {
        question: 'Làm thế nào để bắt đầu với Marketing Automation?',
        answer:
          'Hãy bắt đầu nhỏ. Xác định một nhiệm vụ lặp đi lặp lại đang tốn nhiều thời gian nhất, ví dụ như gửi email chào mừng. Chọn một công cụ phù hợp với ngân sách của bạn và tự động hóa quy trình đó trước. Sau đó, dần dần mở rộng sang các lĩnh vực khác.',
      },
      {
        question: 'Marketing Automation có thể được sử dụng cho B2B và B2C không?',
        answer:
          'Chắc chắn. Mặc dù chiến thuật có thể khác nhau, nhưng các nguyên tắc cốt lõi là như nhau. Cả hai đều nhằm mục đích cung cấp đúng thông điệp cho đúng người vào đúng thời điểm, một cách tự động.',
      },
      {
        question: 'Làm thế nào để đo lường ROI của Marketing Automation?',
        answer:
          'Theo dõi các chỉ số như tỷ lệ chuyển đổi từ khách hàng tiềm năng sang khách hàng, giá trị vòng đời của khách hàng (Customer Lifetime Value), và chi phí thu hút khách hàng (Customer Acquisition Cost). So sánh các chỉ số này trước và sau khi triển khai tự động hóa.',
      },
      {
        question: 'Sai lầm phổ biến nhất khi triển khai Marketing Automation là gì?',
        answer:
          'Sai lầm lớn nhất là "set it and forget it" (thiết lập và quên đi). Tự động hóa cần được theo dõi, phân tích và tối ưu hóa liên tục. Một sai lầm khác là gửi quá nhiều email, gây phiền nhiễu cho khách hàng. Chất lượng và sự liên quan luôn quan trọng hơn số lượng.',
      },
    ],
  },
  {
    id: 'ai-data-analysis',
    title: 'Phân tích dữ liệu với AI',
    description:
      'Học cách sử dụng các công cụ AI để phân tích dữ liệu marketing, khám phá các insight ẩn và đưa ra quyết định dựa trên dữ liệu.',
    duration: '90 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Sử dụng AI để làm sạch và chuẩn bị dữ liệu.',
      'Thực hiện phân tích hồi quy và phân cụm để hiểu hành vi khách hàng.',
      'Dự báo doanh thu và các chỉ số marketing quan trọng.',
      'Trực quan hóa dữ liệu một cách hiệu quả để trình bày kết quả.',
    ],
    prerequisites: ['Kiến thức cơ bản về marketing và Excel.'],
    keyConcept: 'Khai thác sức mạnh của AI để biến dữ liệu thô thành những hiểu biết sâu sắc có thể hành động.',
    strategies: ['Phân tích dự báo', 'Phân khúc khách hàng', 'Trực quan hóa dữ liệu'],
    platforms: ['ChatGPT (Code Interpreter)', 'Microsoft Excel (với AI features)', 'Tableau'],
    exercises: [
      {
        title: 'Phân tích dữ liệu bán hàng với ChatGPT',
        description:
          'Tải lên một tệp CSV chứa dữ liệu bán hàng và yêu cầu ChatGPT phân tích và trực quan hóa các xu hướng chính.',
        difficulty: 'Trung bình',
        procedure: [
          'Chuẩn bị một tệp CSV với các cột như "Ngày", "Sản phẩm", "Số lượng", "Doanh thu".',
          'Trong ChatGPT (phiên bản Plus), chọn biểu tượng kẹp giấy và tải tệp lên.',
          'Yêu cầu: "Phân tích tệp dữ liệu này. Cho tôi biết sản phẩm nào bán chạy nhất, xu hướng doanh thu theo tháng và vẽ biểu đồ tương ứng."',
        ],
        expectedResults:
          'Một bản phân tích chi tiết cùng với các biểu đồ trực quan, giúp bạn nhanh chóng nắm bắt được tình hình kinh doanh.',
      },
    ],
    realWorldApplications: [
      'Một giám đốc marketing dự báo doanh thu quý tới với độ chính xác 90%.',
      'Một nhà phân tích khám phá ra một phân khúc khách hàng mới có lợi nhuận cao.',
      'Một nhóm sản phẩm xác định các tính năng được yêu thích nhất dựa trên phân tích dữ liệu sử dụng.',
    ],
    faqs: [
      {
        question: 'Tôi không phải là nhà khoa học dữ liệu, tôi có thể sử dụng các công cụ này không?',
        answer:
          'Chắc chắn. Các công cụ AI hiện đại như ChatGPT với Code Interpreter được thiết kế để cho phép người dùng không chuyên về kỹ thuật có thể phân tích dữ liệu bằng ngôn ngữ tự nhiên. Bạn chỉ cần hỏi, và AI sẽ viết code và thực hiện phân tích cho bạn.',
      },
      {
        question: 'Code Interpreter trong ChatGPT là gì?',
        answer:
          'Code Interpreter (nay được gọi là Advanced Data Analysis) là một tính năng của ChatGPT Plus cho phép AI viết và thực thi code Python trong một môi trường an toàn. Điều này cho phép nó thực hiện các tác vụ phức tạp như phân tích dữ liệu, tạo biểu đồ, chỉnh sửa tệp, và thực hiện các phép toán.',
      },
      {
        question: 'Dữ liệu của tôi có an toàn khi tôi tải nó lên ChatGPT không?',
        answer:
          'Theo chính sách của OpenAI, họ không sử dụng dữ liệu được gửi qua API hoặc trong ChatGPT Team/Enterprise để huấn luyện mô hình của họ. Đối với người dùng ChatGPT miễn phí hoặc Plus, bạn có thể tắt lịch sử trò chuyện để ngăn dữ liệu của bạn được sử dụng. Tuy nhiên, hãy luôn cẩn trọng và tránh tải lên các thông tin cá nhân hoặc tài chính cực kỳ nhạy cảm.',
      },
      {
        question: 'Phân tích dự báo (predictive analysis) là gì?',
        answer:
          'Phân tích dự báo là việc sử dụng dữ liệu lịch sử, các thuật toán thống kê và kỹ thuật máy học để xác định khả năng xảy ra các kết quả trong tương lai. Trong marketing, nó có thể được sử dụng để dự báo doanh số, tỷ lệ khách hàng rời bỏ (churn rate), hoặc hiệu quả của một chiến dịch.',
      },
      {
        question: 'Phân khúc khách hàng (customer segmentation) là gì?',
        answer:
          'Đây là quá trình chia một cơ sở khách hàng thành các nhóm nhỏ hơn (phân khúc) dựa trên các đặc điểm chung, chẳng hạn như nhân khẩu học, hành vi mua sắm, hoặc nhu cầu. AI có thể giúp xác định các phân khúc này một cách tự động, ngay cả những phân khúc mà con người khó nhận ra.',
      },
      {
        question: 'Làm thế nào để AI giúp trực quan hóa dữ liệu?',
        answer:
          'Bạn có thể yêu cầu AI tạo ra nhiều loại biểu đồ khác nhau (biểu đồ cột, đường, tròn, bản đồ nhiệt...) từ dữ liệu của bạn. Bạn thậm chí có thể yêu cầu nó thử các cách trực quan hóa khác nhau để tìm ra cách kể câu chuyện dữ liệu của bạn một cách hiệu quả nhất.',
      },
      {
        question: 'Tôi cần chuẩn bị dữ liệu như thế nào trước khi đưa cho AI?',
        answer:
          'Dữ liệu càng "sạch" thì kết quả càng tốt. Điều này có nghĩa là dữ liệu nên được định dạng nhất quán (ví dụ: ngày tháng cùng một định dạng), không có các giá trị bị thiếu (hoặc được xử lý một cách có chủ ý), và các cột được đặt tên rõ ràng. Tuy nhiên, bạn cũng có thể yêu cầu AI giúp bạn làm sạch dữ liệu.',
      },
      {
        question: 'AI có thể giúp tôi tìm ra "tại sao" đằng sau các con số không?',
        answer:
          'AI có thể tìm ra các mối tương quan (correlation), ví dụ: "Khi chúng ta giảm giá, doanh số tăng". Tuy nhiên, nó không thể tự mình xác định mối quan hệ nhân quả (causation). Việc giải thích "tại sao" vẫn cần đến sự phân tích và kiến thức chuyên môn của con người.',
      },
      {
        question: 'Tableau là gì và nó liên quan gì đến AI?',
        answer:
          'Tableau là một nền tảng trực quan hóa dữ liệu hàng đầu. Các phiên bản mới của Tableau tích hợp các tính năng AI (như Tableau Pulse và Einstein Copilot) cho phép người dùng đặt câu hỏi bằng ngôn ngữ tự nhiên, tự động phát hiện các insight, và tạo ra các phân tích dự báo.',
      },
      {
        question: 'Tôi nên bắt đầu từ đâu nếu muốn học phân tích dữ liệu với AI?',
        answer:
          'Hãy bắt đầu với một bộ dữ liệu bạn quen thuộc, có thể là dữ liệu bán hàng của công ty bạn hoặc thậm chí là chi tiêu cá nhân của bạn được xuất ra từ ứng dụng ngân hàng. Tải nó lên ChatGPT Plus và bắt đầu đặt câu hỏi. Ví dụ: "Hãy cho tôi biết tôi chi tiêu nhiều nhất vào việc gì trong tháng qua?".',
      },
    ],
  },
];
