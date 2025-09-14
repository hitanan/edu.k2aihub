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
  },
  {
    id: 'health-fitness',
    title: 'Sức khỏe & Fitness AI',
    description: 'Theo dõi sức khỏe và tập luyện với sự hỗ trợ của AI.',
    duration: '40 phút',
    difficulty: 'Cơ bản',
    objectives: ['Sử dụng ứng dụng theo dõi sức khỏe', 'Nhận gợi ý bài tập từ AI'],
    realWorldApplications: ['Theo dõi giấc ngủ', 'Lên kế hoạch tập luyện'],
  },
  {
    id: 'travel-ai',
    title: 'Du lịch thông minh với AI',
    description: 'Lên kế hoạch chuyến đi và khám phá địa điểm mới với AI.',
    duration: '35 phút',
    difficulty: 'Cơ bản',
    objectives: ['Sử dụng AI để tìm vé máy bay và khách sạn', 'Khám phá địa điểm du lịch'],
    realWorldApplications: ['Lên kế hoạch du lịch', 'Dịch thuật khi đi du lịch'],
  },
];
