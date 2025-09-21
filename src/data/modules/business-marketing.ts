import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export const businessMarketingLessons: BaseLessonData[] = [
  {
    id: 'ai-powered-seo-business',
    title: 'SEO được hỗ trợ bởi AI cho doanh nghiệp',
    description:
      'Khai thác sức mạnh của AI để cách mạng hóa chiến lược SEO của bạn, từ nghiên cứu từ khóa đến tạo nội dung và phân tích hiệu suất.',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    difficulty: 'Trung bình',
    duration: '60 phút',
    objectives: [
      'Hiểu cách AI đang thay đổi bối cảnh SEO.',
      'Sử dụng các công cụ AI để nghiên cứu và phân cụm từ khóa nâng cao.',
      'Tự động hóa việc tạo nội dung được tối ưu hóa cho SEO.',
      'Triển khai phân tích do AI điều khiển để theo dõi và cải thiện hiệu suất.',
      'Khám phá các chiến lược SEO dự đoán cho lợi thế cạnh tranh.',
    ],
    prerequisites: ['Kiến thức cơ bản về SEO', 'Hiểu biết về các khái niệm marketing'],
    realWorldApplications: [
      'Tối ưu hóa trang web của một công ty khởi nghiệp công nghệ để có khả năng hiển thị tối đa.',
      'Phát triển chiến lược nội dung dựa trên AI cho một blog thương mại điện tử.',
      'Tự động hóa việc theo dõi hiệu suất SEO cho một đại lý tiếp thị kỹ thuật số.',
      'Xác định các cơ hội từ khóa chưa được khai thác trong một thị trường cạnh tranh.',
      'Dự báo các xu hướng SEO để luôn đi trước đối thủ.',
    ],
    vietnamContext: {
      title: 'Bối cảnh SEO tại Việt Nam',
      content: [
        'Thị trường Việt Nam có tính cạnh tranh cao, đòi hỏi các chiến lược SEO tinh vi. AI có thể giúp các doanh nghiệp vượt qua đối thủ bằng cách xác định các thị trường ngách và tối ưu hóa cho các truy vấn tìm kiếm địa phương.',
        'Việc sử dụng AI trong SEO vẫn còn mới ở Việt Nam, mang lại cơ hội cho những người áp dụng sớm để có được lợi thế đáng kể. Các công cụ AI có thể giúp phân tích hành vi của người tiêu dùng Việt Nam và điều chỉnh nội dung cho phù hợp.',
      ],
    },
    careerConnect: {
      name: 'Phạm Nhật Vượng',
      title: 'Chuyên gia SEO tại Vingroup',
      company: 'Vingroup',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop',
      quote:
        'Là một chuyên gia SEO tại một trong những tập đoàn lớn nhất Việt Nam, tôi đã chứng kiến AI biến đổi cách chúng tôi tiếp cận tối ưu hóa công cụ tìm kiếm. Việc áp dụng các công cụ AI đã cho phép chúng tôi tự động hóa các tác vụ lặp đi lặp lại, thu được những hiểu biết sâu sắc hơn về đối thủ cạnh tranh và tạo ra các chiến lược nội dung hiệu quả hơn. Bài học này cung cấp một nền tảng vững chắc để tận dụng AI trong các nỗ lực SEO của bạn.',
    },
    faqs: [
      {
        question: 'AI có thể thay thế hoàn toàn các chuyên gia SEO không?',
        answer:
          'Không, AI là một công cụ mạnh mẽ giúp tăng cường khả năng của các chuyên gia SEO, không phải là sự thay thế. AI xuất sắc trong việc phân tích dữ liệu và tự động hóa, nhưng tư duy chiến lược, sự sáng tạo và sự hiểu biết của con người vẫn rất quan trọng để thành công trong SEO.',
      },
      {
        question: 'Các công cụ AI tốt nhất cho SEO là gì?',
        answer:
          'Một số công cụ AI hàng đầu cho SEO bao gồm SurferSEO để tối ưu hóa nội dung, MarketMuse để lập kế hoạch nội dung và Ahrefs hoặc SEMrush, những công cụ này đang ngày càng tích hợp nhiều tính năng AI hơn để phân tích đối thủ cạnh tranh và nghiên cứu từ khóa.',
      },
      {
        question: 'AI giúp nghiên cứu từ khóa như thế nào?',
        answer:
          'Các công cụ AI có thể phân tích lượng lớn dữ liệu để xác định các mẫu, ý định tìm kiếm và các từ khóa đuôi dài mà con người có thể bỏ lỡ. Chúng cũng có thể thực hiện "phân cụm từ khóa", nhóm các thuật ngữ liên quan lại với nhau để tạo ra các trụ cột nội dung toàn diện hơn.',
      },
      {
        question: 'Tạo nội dung do AI điều khiển là gì?',
        answer:
          'Điều này liên quan đến việc sử dụng các nền tảng AI như GPT-3 để tạo bài viết, bài đăng trên blog hoặc mô tả sản phẩm. Mặc dù nó có thể tăng tốc độ tạo nội dung, nhưng sản phẩm đầu ra luôn cần sự xem xét, chỉnh sửa và kiểm tra thực tế của con người để đảm bảo chất lượng, độ chính xác và giọng văn thương hiệu.',
      },
      {
        question: 'AI có thể dự đoán các xu hướng SEO không?',
        answer:
          'Có, một số công cụ AI tiên tiến phân tích dữ liệu thị trường, hành vi của đối thủ cạnh tranh và các bản cập nhật thuật toán của công cụ tìm kiếm để dự báo các xu hướng mới nổi. Điều này cho phép các doanh nghiệp chủ động điều chỉnh chiến lược SEO của mình thay vì phản ứng một cách bị động.',
      },
      {
        question: 'Vai trò của AI trong SEO kỹ thuật là gì?',
        answer:
          'AI có thể tự động hóa việc kiểm tra SEO kỹ thuật bằng cách thu thập dữ liệu trang web để tìm các vấn đề như liên kết hỏng, tốc độ trang chậm hoặc các vấn đề về tính thân thiện với thiết bị di động. Nó có thể nhanh chóng xác định và ưu tiên các bản sửa lỗi kỹ thuật có thể ảnh hưởng đáng kể đến thứ hạng.',
      },
      {
        question: 'AI cá nhân hóa trải nghiệm người dùng cho SEO như thế nào?',
        answer:
          'AI có thể phân tích hành vi của người dùng trên một trang web và tự động điều chỉnh nội dung hiển thị cho họ. Điều này làm tăng sự tương tác, thời gian phiên và tỷ lệ chuyển đổi—tất cả các tín hiệu mà các công cụ tìm kiếm như Google sử dụng để xếp hạng các trang.',
      },
      {
        question: 'Sử dụng AI cho SEO có được coi là "mũ đen" không?',
        answer:
          'Không nhất thiết. Sử dụng AI để phân tích dữ liệu, thu thập thông tin chi tiết và tự động hóa các tác vụ là "mũ trắng". Tuy nhiên, việc sử dụng AI để tạo ra một lượng lớn nội dung chất lượng thấp, spam để thao túng thứ hạng được coi là "mũ đen" và có thể dẫn đến các hình phạt từ các công cụ tìm kiếm.',
      },
      {
        question: 'Làm thế nào một doanh nghiệp nhỏ có thể bắt đầu sử dụng AI cho SEO?',
        answer:
          'Một doanh nghiệp nhỏ có thể bắt đầu bằng cách sử dụng các công cụ thân thiện với người dùng như SurferSEO để tối ưu hóa trên trang hoặc thử các tính năng AI trong các nền tảng như Wix hoặc Shopify. Ngay cả các công cụ miễn phí như phần "People Also Ask" của Google, vốn sử dụng AI, cũng có thể cung cấp các ý tưởng nội dung có giá trị.',
      },
      {
        question: 'Tương lai của AI trong SEO là gì?',
        answer:
          'Tương lai hướng tới sự cá nhân hóa và phân tích dự đoán lớn hơn nữa. AI sẽ ngày càng được tích hợp nhiều hơn vào chính các công cụ tìm kiếm (như RankBrain và BERT của Google), có nghĩa là việc tạo ra nội dung chất lượng cao, lấy người dùng làm trung tâm sẽ quan trọng hơn bao giờ hết. Tối ưu hóa tìm kiếm bằng giọng nói cũng sẽ là một lĩnh vực quan trọng do AI thúc đẩy.',
      },
    ],
  },
];

export const businessMarketingModuleData: ModuleData = {
  id: K2Module.BusinessMarketing,
  title: 'AI cho Kinh Doanh & Marketing',
  subtitle: 'Marketing thông minh với AI',
  description: 'Ứng dụng AI trong marketing, phân tích khách hàng, tạo chatbot và tối ưu hóa SEO cho doanh nghiệp',
  category: 'Kinh doanh',
  icon: '📈',
  color: 'from-orange-600 to-red-600',
  level: 'Trung bình đến Nâng cao',
  duration: '6-8 giờ',
  features: ['Marketing automation', 'Customer analytics', 'Chatbot development', 'SEO optimization'],
  prerequisites: ['Hiểu biết cơ bản về marketing', 'Kinh nghiệm kinh doanh'],
  objectives: [
    'Tự động hóa các chiến dịch marketing để tăng hiệu quả.',
    'Phân tích dữ liệu khách hàng để cá nhân hóa trải nghiệm.',
    'Xây dựng chatbot thông minh để cải thiện dịch vụ khách hàng.',
    'Tối ưu hóa SEO bằng các công cụ AI để tăng lưu lượng truy cập không phải trả tiền.',
  ],
  careerOutcomes: [
    'Chuyên gia Marketing Automation',
    'Nhà phân tích dữ liệu Marketing',
    'Nhà phát triển Chatbot',
    'Chuyên gia SEO',
  ],
  industryApplications: ['Thương mại điện tử', 'Dịch vụ tài chính', 'Chăm sóc sức khỏe', 'Bán lẻ'],
  marketDemand: {
    averageSalary: '80.000 - 130.000 USD/năm',
    jobGrowth: '15%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.DataScienceAnalytics, K2Module.AISEOOptimization],
  lessons: businessMarketingLessons,
};
