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
    faqs: [
      {
        question: 'Bệnh án điện tử (EHR) là gì và lợi ích của nó là gì?',
        answer:
          'Bệnh án điện tử (Electronic Health Record) là phiên bản số của bệnh án giấy. Nó chứa toàn bộ lịch sử khám chữa bệnh của một bệnh nhân. Lợi ích chính là giúp các bác sĩ ở các bệnh viện khác nhau có thể truy cập thông tin sức khỏe của bệnh nhân một cách nhanh chóng và đầy đủ, tránh các xét nghiệm trùng lặp, giảm sai sót y khoa và cải thiện chất lượng điều trị.',
      },
      {
        question: 'Telemedicine (Khám chữa bệnh từ xa) có thể thay thế hoàn toàn việc đến bệnh viện không?',
        answer:
          'Không. Telemedicine rất hiệu quả cho việc tư vấn, theo dõi các bệnh mãn tính, chăm sóc sức khỏe tâm thần và các vấn đề không khẩn cấp. Tuy nhiên, nó không thể thay thế việc khám trực tiếp trong các trường hợp cấp cứu, cần làm các thủ tục, hoặc các chẩn đoán đòi hỏi sự thăm khám vật lý.',
      },
      {
        question: 'AI được ứng dụng trong chẩn đoán hình ảnh y tế như thế nào?',
        answer:
          'AI, đặc biệt là các mô hình học sâu (deep learning), được "huấn luyện" trên hàng triệu hình ảnh y tế (như X-quang, CT scan, MRI) đã được chẩn đoán bởi các chuyên gia. Sau đó, AI có thể tự động phát hiện các dấu hiệu bất thường trong các hình ảnh mới, ví dụ như khoanh vùng các khối u tiềm năng hoặc phát hiện sớm các dấu hiệu của bệnh lao phổi. Nó hoạt động như một "trợ lý" giúp bác sĩ chẩn đoán nhanh và chính xác hơn.',
      },
      {
        question: 'Healthtech là gì?',
        answer:
          'Healthtech (Healthcare Technology) là một thuật ngữ rộng, chỉ việc sử dụng công nghệ để cải thiện việc cung cấp, thanh toán và/hoặc tiêu thụ các dịch vụ chăm sóc sức khỏe. Nó bao gồm y tế số (digital health), công nghệ sinh học (biotech), thiết bị y tế (medical devices), và nhiều hơn nữa.',
      },
      {
        question: 'Làm thế nào để đảm bảo an toàn và bảo mật cho dữ liệu y tế?',
        answer:
          'Đây là một ưu tiên hàng đầu. Các giải pháp bao gồm: mã hóa dữ liệu cả khi lưu trữ và khi truyền đi, sử dụng hệ thống xác thực đa yếu tố để kiểm soát truy cập, tuân thủ các tiêu chuẩn quốc tế như HIPAA (của Mỹ), và xây dựng các quy định pháp lý rõ ràng (như Luật An ninh mạng và Luật Khám chữa bệnh của Việt Nam) về việc xử lý dữ liệu y tế.',
      },
      {
        question: 'Thiết bị đeo thông minh (wearables) có vai trò gì trong y tế số?',
        answer:
          'Các thiết bị như đồng hồ thông minh hay vòng đeo tay sức khỏe có thể liên tục theo dõi các chỉ số quan trọng như nhịp tim, nồng độ oxy trong máu (SpO2), chất lượng giấc ngủ, và mức độ hoạt động. Dữ liệu này giúp người dùng theo dõi sức khỏe chủ động và cung cấp cho bác sĩ thông tin hữu ích để theo dõi các bệnh mãn tính từ xa.',
      },
      {
        question: 'Thách thức lớn nhất khi triển khai y tế số ở vùng nông thôn Việt Nam là gì?',
        answer:
          'Các thách thức chính bao gồm: hạ tầng internet chưa ổn định, người dân (đặc biệt là người lớn tuổi) chưa quen thuộc với công nghệ số, và thiếu hụt các cơ sở y tế địa phương có đủ trang thiết bị và nhân lực để kết nối với hệ thống y tế từ xa.',
      },
      {
        question: 'Genomics (Hệ gen học) và y học cá thể hóa là gì?',
        answer:
          'Genomics là việc nghiên cứu toàn bộ bộ gen của một người. Dựa trên thông tin di truyền này, y học cá thể hóa (personalized medicine) hướng tới việc "may đo" các phương pháp điều trị và phòng ngừa bệnh tật cho từng cá nhân cụ thể, thay vì áp dụng một phác đồ chung cho tất cả mọi người. Ví dụ, lựa chọn loại thuốc ung thư hiệu quả nhất dựa trên đột biến gen của khối u.',
      },
      {
        question: 'Blockchain có thể được ứng dụng trong y tế như thế nào?',
        answer:
          'Blockchain có thể tạo ra một hệ thống an toàn và minh bạch để quản lý bệnh án điện tử, cho phép bệnh nhân kiểm soát hoàn toàn việc ai có thể truy cập dữ liệu sức khỏe của mình. Nó cũng có thể được dùng để truy xuất nguồn gốc thuốc, chống lại nạn thuốc giả.',
      },
      {
        question: 'Sự khác biệt giữa EMR và EHR là gì?',
        answer:
          'EMR (Electronic Medical Record) là bệnh án y tế điện tử, là phiên bản số của bệnh án giấy tại một cơ sở y tế duy nhất. EHR (Electronic Health Record) là hồ sơ sức khỏe điện tử, có phạm vi rộng hơn, được thiết kế để chia sẻ thông tin của bệnh nhân giữa nhiều nhà cung cấp dịch vụ y tế khác nhau. Về cơ bản, EHR là một tập hợp các EMR.',
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

import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';

export const vietnameseHealthcareModuleData: ModuleData = {
  id: 'vietnamese-healthcare',
  title: 'Công Nghệ Y Tế Việt Nam',
  subtitle: 'Digital Health & Medical Technology Solutions',
  description:
    'Phát triển giải pháp công nghệ y tế tiên tiến cho thị trường Việt Nam. Học digital health infrastructure, AI medical imaging và telemedicine platforms phù hợp với healthcare system của Việt Nam phục vụ 97 triệu dân.',
  level: 'Nâng cao',
  duration: '12-16 giờ',
  category: 'Vietnamese-Specific Technology',
  heroImageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
  features: [
    'Digital health infrastructure development cho Vietnamese hospitals',
    'AI medical imaging solutions với Vietnamese dataset',
    'Telemedicine platforms cho rural healthcare',
    'Health data analytics và management systems',
  ],
  icon: '🏥',
  color: 'from-emerald-600 to-teal-600',
  objectives: [
    'Master digital health system development cho Vietnamese healthcare',
    'Build AI medical imaging tools với Vietnamese medical practices',
    'Create telemedicine solutions cho remote areas',
    'Develop health data management platforms',
  ],
  prerequisites: [
    'Understanding of Vietnamese healthcare system',
    'Web hoặc mobile development experience',
    'Basic knowledge of medical terminology',
  ],
  careerOutcomes: [
    'Healthcare Technology Developer tại hospitals và health tech companies',
    'Medical AI Engineer cho diagnostic imaging companies',
    'Digital Health Consultant cho government healthcare projects',
    'Telemedicine Platform Developer cho rural healthcare initiatives',
  ],
  industryApplications: [
    'Hospital digital transformation projects',
    'Medical imaging và diagnostic technology',
    'Rural healthcare telemedicine solutions',
    'Health insurance technology platforms',
  ],
  marketDemand: {
    averageSalary: '25-50 triệu VNĐ',
    jobGrowth: '+45%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.AI, K2Module.Biotechnology, K2Module.DigitalGovernment],
  lessons: vietnameseHealthcareLessons,
};
