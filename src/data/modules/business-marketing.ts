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
    imageUrl: '/images/modules/business-marketing/ai-powered-seo.jpg',
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
