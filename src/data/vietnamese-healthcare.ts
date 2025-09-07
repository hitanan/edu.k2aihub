import { BaseLessonData } from '@/types/lesson-base';
export interface VietnameseHealthcareLesson extends BaseLessonData {
  medicalField: string;
  technologies: string[];
}

export const vietnameseHealthcareLessons: VietnameseHealthcareLesson[] = [
  {
    id: 'digital-health-vietnam',
    title: 'Bài 1: Digital Health Infrastructure cho Việt Nam',
    description:
      'Phát triển hệ thống y tế số phù hợp với infrastructure và regulations của Việt Nam. Học Electronic Health Records, telemedicine platforms và health data management.',
    videoUrl: 'https://www.youtube.com/watch?v=FscwOyubmmc',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '160 phút',
    medicalField: 'Y tế số (Digital Health)',
    technologies: ['Electronic Health Records (EHR)', 'Telemedicine', 'Health Data Management', 'AI in Diagnostics'],
    objectives: [
      'Design comprehensive digital health systems cho Vietnamese healthcare',
      'Implement secure Electronic Health Record platforms',
      'Create telemedicine solutions cho rural areas',
      'Build health data analytics dashboards cho hospitals',
    ],
    prerequisites: [
      'Understanding of Vietnamese healthcare system',
      'Basic knowledge of medical terminology',
      'Web development hoặc mobile development experience',
    ],
    exercises: [
      {
        title: 'Hospital Management System',
        description: 'Build comprehensive hospital management platform cho Vietnamese private hospital',
        difficulty: 'Trung bình',
        materials: ['Database system', 'Web framework', 'Security protocols'],
        procedure: [
          'Design patient registration system với Vietnamese ID integration',
          'Create appointment scheduling với doctor availability',
          'Implement medical record management với privacy controls',
          'Build billing system với Vietnamese insurance integration',
        ],
        expectedResults: 'Complete hospital management system với all essential features',
        solution: 'Full-stack web application với React frontend và Node.js backend',
      },
    ],
    realWorldApplications: [
      'Chuyển đổi số tại các bệnh viện tư nhân.',
      'Giải pháp y tế từ xa (telemedicine) cho các vùng nông thôn.',
      'Nền tảng công nghệ cho bảo hiểm y tế.',
      'Quản lý dữ liệu cho các nghiên cứu y học.',
    ],
    vietnamContext: {
      title: 'Y tế số: Tương lai của ngành Chăm sóc sức khỏe Việt Nam',
      content: [
        'Hệ thống y tế Việt Nam đang đối mặt với nhiều thách thức như quá tải ở các bệnh viện tuyến trên và khó khăn trong việc tiếp cận dịch vụ y tế ở vùng sâu vùng xa. Y tế số (Digital Health) được xem là chìa khóa để giải quyết các vấn đề này.',
        'Chính phủ đang triển khai mạnh mẽ các chính sách về bệnh án điện tử (EHR), khám chữa bệnh từ xa (telemedicine) và quản lý y tế dựa trên dữ liệu.',
        'Các startup healthtech Việt Nam đang phát triển nhanh chóng, cung cấp các giải pháp từ đặt lịch khám, tư vấn trực tuyến đến các thiết bị theo dõi sức khỏe cá nhân.',
      ],
    },
    caseStudies: [
      {
        title: 'Vinmec: Chuyển đổi số toàn diện bệnh viện',
        organization: 'Hệ thống Y tế Vinmec',
        problem:
          'Cần một hệ thống đồng bộ để tối ưu hóa quy trình chăm sóc bệnh nhân, nâng cao hiệu quả hoạt động và quản lý dữ liệu trên toàn chuỗi bệnh viện.',
        solution:
          'Vinmec đã triển khai một nền tảng y tế số toàn diện, tích hợp bệnh án điện tử (EHR), ứng dụng di động cho bệnh nhân, và hệ thống quản lý bệnh viện thông minh. Họ cũng ứng dụng AI trong chẩn đoán hình ảnh.',
        impact:
          'Giảm 40% thời gian chờ đợi của bệnh nhân, cải thiện 60% độ chính xác của dữ liệu. Vinmec trở thành hình mẫu về chuyển đổi số trong lĩnh vực y tế tại Việt Nam.',
        innovations: ['AI hỗ trợ chẩn đoán hình ảnh', 'Ứng dụng di động cho bệnh nhân', 'Bệnh án điện tử tích hợp'],
      },
      {
        title: 'eDoctor: Bác sĩ trong túi bạn',
        organization: 'eDoctor',
        problem:
          'Người dân, đặc biệt ở các thành phố lớn, gặp khó khăn trong việc tiếp cận tư vấn y tế nhanh chóng cho các vấn đề sức khỏe không khẩn cấp, dẫn đến tình trạng tự ý mua thuốc hoặc quá tải bệnh viện.',
        solution:
          'eDoctor phát triển một ứng dụng di động cho phép người dùng kết nối và nhận tư vấn từ các bác sĩ qua video call hoặc chat. Ứng dụng cũng cung cấp dịch vụ đặt lịch xét nghiệm tại nhà và giao thuốc.',
        impact:
          'Cung cấp hàng triệu lượt tư vấn trực tuyến, giúp giảm tải cho các cơ sở y tế và nâng cao nhận thức về chăm sóc sức khỏe chủ động cho người dân. Mô hình này đặc biệt phát huy hiệu quả trong các đợt dịch bệnh.',
        innovations: [
          'Tư vấn y tế từ xa (Tele-consultation)',
          'Dịch vụ y tế tại nhà',
          'Hệ sinh thái chăm sóc sức khỏe di động',
        ],
      },
    ],
    careerConnect: {
      name: 'Bác sĩ Nguyễn Hữu Tùng',
      title: 'Nhà sáng lập & Chủ tịch, Hệ thống Y khoa Hoàn Mỹ',
      company: 'Hoan My Medical Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-huu-tung',
      quote:
        'Công nghệ không thể thay thế bác sĩ, nhưng nó là công cụ đắc lực giúp bác sĩ phục vụ bệnh nhân tốt hơn. Tương lai của y tế nằm ở sự kết hợp hài hòa giữa chuyên môn y khoa và sức mạnh của dữ liệu và kết nối.',
    },
    quizzes: [
      {
        question: 'Đâu là một trong những lợi ích chính của việc Vinmec triển khai y tế số?',
        options: [
          'Tăng giá viện phí',
          'Giảm thời gian chờ đợi của bệnh nhân và tăng độ chính xác dữ liệu',
          'Yêu cầu tất cả bệnh nhân phải có smartphone',
          'Loại bỏ hoàn toàn vai trò của y tá',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Việc áp dụng nền tảng số toàn diện đã giúp Vinmec tối ưu hóa quy trình, từ đó mang lại lợi ích trực tiếp cho bệnh nhân là giảm thời gian chờ và đảm bảo dữ liệu y tế chính xác hơn.',
      },
      {
        question: 'Mô hình của eDoctor giải quyết vấn đề gì trong hệ thống y tế Việt Nam?',
        options: [
          'Phẫu thuật phức tạp',
          'Cung cấp tư vấn y tế nhanh chóng cho các vấn đề không khẩn cấp',
          'Nghiên cứu và phát triển vaccine',
          'Xây dựng bệnh viện mới',
        ],
        correctAnswerIndex: 1,
        explanation:
          'eDoctor tập trung vào việc cung cấp dịch vụ tư vấn từ xa (telemedicine), giúp người dùng tiếp cận bác sĩ một cách thuận tiện cho các nhu cầu chăm sóc sức khỏe ban đầu, giảm tải cho bệnh viện.',
      },
    ],
    resources: [
      {
        title: 'Bộ Y tế Việt Nam',
        url: 'https://moh.gov.vn/',
        type: 'health-ministry',
      },
      {
        title: 'Vinmec International Hospital',
        url: 'https://www.vinmec.com/',
        type: 'hospital',
      },
      {
        title: 'eDoctor',
        url: 'https://edoctor.io/',
        type: 'telemedicine',
      },
    ],
  },
];
