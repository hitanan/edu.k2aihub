import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export const uxUiDesignLessons: BaseLessonData[] = [
  {
    id: 'user-research-and-personas',
    videoUrl: null,
    title: 'Nghiên cứu Người dùng và Xây dựng Chân dung Khách hàng',
    description: 'Học cách thực hiện nghiên cứu người dùng và tạo ra các persona chi tiết.',
    duration: '280 phút',
    difficulty: 'Trung bình',
    objectives: ['Nắm vững các phương pháp nghiên cứu người dùng.', 'Xây dựng được user persona hoàn chỉnh.'],
    realWorldApplications: ['Phát triển sản phẩm mới dựa trên insight khách hàng.'],
    faqs: [
      {
        question: 'User Persona là gì và tại sao nó quan trọng?',
        answer:
          'User Persona (Chân dung khách hàng) là một hồ sơ hư cấu đại diện cho một nhóm người dùng mục tiêu. Nó bao gồm thông tin về nhân khẩu học, mục tiêu, nhu cầu, và "nỗi đau" của họ. Persona giúp đội ngũ phát triển sản phẩm đồng cảm với người dùng và đưa ra các quyết định thiết kế lấy người dùng làm trung tâm.',
      },
      {
        question: 'Sự khác biệt giữa nghiên cứu định tính và định lượng là gì?',
        answer:
          'Nghiên cứu định lượng (quantitative) trả lời câu hỏi "Bao nhiêu?" bằng cách thu thập dữ liệu có thể đo lường được (ví dụ: khảo sát, phân tích web). Nghiên cứu định tính (qualitative) trả lời câu hỏi "Tại sao?" bằng cách tìm hiểu sâu về hành vi và động cơ của người dùng (ví dụ: phỏng vấn sâu, quan sát). Cả hai đều quan trọng để có một cái nhìn toàn diện.',
      },
    ],
  },
  {
    id: 'wireframing-prototyping-with-figma',
    videoUrl: null,
    title: 'Wireframing và Prototyping với Figma',
    description: 'Sử dụng Figma để tạo wireframe và prototype cho ứng dụng web/mobile.',
    duration: '300 phút',
    difficulty: 'Trung bình',
    objectives: ['Thành thạo các công cụ cơ bản của Figma.', 'Tạo ra các prototype tương tác được.'],
    realWorldApplications: ['Thiết kế giao diện cho một ứng dụng đặt đồ ăn.'],
    faqs: [
      {
        question: 'Wireframe, Mockup, và Prototype khác nhau như thế nào?',
        answer:
          'Wireframe là bản phác thảo cấu trúc cơ bản (bộ xương) của một trang, tập trung vào bố cục và chức năng, thường có độ trung thực thấp (low-fidelity). Mockup là bản thiết kế có độ trung thực cao (high-fidelity), thể hiện cả về mặt hình ảnh (màu sắc, font chữ). Prototype là một phiên bản tương tác được của sản phẩm, cho phép người dùng nhấp và trải nghiệm luồng hoạt động, giúp kiểm tra tính khả dụng trước khi lập trình.',
      },
      {
        question: 'Tại sao nên dùng Figma thay vì các công cụ khác như Sketch hay Adobe XD?',
        answer:
          'Figma có lợi thế lớn là hoạt động hoàn toàn trên nền tảng web, cho phép cộng tác theo thời gian thực một cách liền mạch. Nhiều người có thể cùng làm việc trên một file thiết kế, giống như Google Docs. Điều này giúp tăng tốc độ làm việc nhóm và dễ dàng chia sẻ, nhận phản hồi.',
      },
    ],
  },
  {
    id: 'usability-testing-and-feedback-analysis',
    videoUrl: null,
    title: 'Kiểm thử Tính khả dụng và Phân tích Phản hồi',
    description: 'Học cách tổ chức các buổi usability testing và phân tích feedback từ người dùng.',
    duration: '260 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Lên kế hoạch và thực hiện một buổi usability test.',
      'Phân tích và tổng hợp kết quả để cải thiện sản phẩm.',
    ],
    realWorldApplications: ['Cải thiện trải nghiệm người dùng của một trang web e-commerce.'],
    faqs: [
      {
        question: 'Cần bao nhiêu người dùng để thực hiện một buổi usability test hiệu quả?',
        answer:
          'Theo nghiên cứu của Nielsen Norman Group, chỉ cần 5 người dùng là bạn đã có thể phát hiện ra khoảng 85% các vấn đề về tính khả dụng. Việc kiểm thử với một nhóm nhỏ nhưng lặp lại nhiều lần trong suốt quá trình phát triển sẽ hiệu quả hơn là một bài kiểm tra lớn với hàng chục người chỉ ở cuối dự án.',
      },
      {
        question: 'Làm thế nào để người dùng không cảm thấy họ đang "bị kiểm tra"?',
        answer:
          'Hãy nhấn mạnh rằng bạn đang kiểm tra sản phẩm, chứ không phải kiểm tra họ. Sử dụng các câu nói như "Không có câu trả lời đúng hay sai" và "Hãy suy nghĩ thành tiếng". Tạo một không khí thoải mái, thân thiện và khuyến khích họ hành động một cách tự nhiên nhất có thể.',
      },
    ],
  },
  {
    id: 'building-and-maintaining-design-systems',
    videoUrl: null,
    title: 'Xây dựng và Duy trì Hệ thống Thiết kế',
    description: 'Tìm hiểu về tầm quan trọng của design system và cách xây dựng, duy trì nó.',
    duration: '240 phút',
    difficulty: 'Nâng cao',
    objectives: ['Hiểu cấu trúc của một design system.', 'Bắt đầu xây dựng một thư viện component cho dự án.'],
    realWorldApplications: ['Đảm bảo tính nhất quán cho bộ sản phẩm của một công ty lớn.'],
    faqs: [
      {
        question: 'Design System (Hệ thống Thiết kế) là gì?',
        answer:
          'Design System là một bộ sưu tập các component (thành phần) có thể tái sử dụng, được quản lý bằng các tiêu chuẩn rõ ràng, cho phép các nhóm thiết kế và phát triển sản phẩm một cách nhất quán và hiệu quả. Nó không chỉ là một thư viện UI, mà còn bao gồm cả quy tắc, nguyên tắc và tài liệu hướng dẫn.',
      },
      {
        question: 'Lợi ích của việc sử dụng Design System là gì?',
        answer:
          'Nó giúp tạo ra sự nhất quán trên tất cả các sản phẩm, tăng tốc độ thiết kế và phát triển (vì không phải tạo lại những thứ đã có), cải thiện sự hợp tác giữa designer và developer, và giúp việc giới thiệu thành viên mới vào team trở nên dễ dàng hơn.',
      },
    ],
  },
  {
    id: 'agile-product-management-for-designers',
    videoUrl: null,
    title: 'Quản lý Sản phẩm Agile cho Nhà thiết kế',
    description: 'Hiểu vai trò của designer trong quy trình phát triển sản phẩm Agile.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu các khái niệm cơ bản của Agile và Scrum.',
      'Biết cách phối hợp hiệu quả với Product Manager và Developers.',
    ],
    realWorldApplications: ['Làm việc trong một team startup công nghệ.'],
    faqs: [
      {
        question: 'Agile là gì và nó khác gì so với mô hình Thác nước (Waterfall)?',
        answer:
          'Mô hình Thác nước là một quy trình tuyến tính, tuần tự (làm xong bước này mới đến bước kia). Ngược lại, Agile là một phương pháp lặp lại và tăng trưởng, chia dự án lớn thành các phần nhỏ gọi là "sprint". Điều này cho phép team linh hoạt hơn, thích ứng với thay đổi và nhận phản hồi sớm từ người dùng.',
      },
      {
        question: 'Vai trò của UX Designer trong một sprint là gì?',
        answer:
          'Trong một sprint, UX Designer không chỉ thiết kế cho các tính năng của sprint hiện tại, mà còn thường xuyên "đi trước" một hoặc hai sprint để nghiên cứu và chuẩn bị cho các tính năng tiếp theo. Họ làm việc chặt chẽ với Product Manager để định hình yêu cầu và với Developer để đảm bảo thiết kế được triển khai đúng ý tưởng.',
      },
    ],
  },
];

export const uxUiDesignModuleData: ModuleData = {
  id: 'ux-ui-design',
  title: 'UX/UI Design & Product Development',
  subtitle: 'Thiết kế trải nghiệm người dùng và phát triển sản phẩm',
  description:
    'Học cách thiết kế sản phẩm số mà người dùng yêu thích, từ nghiên cứu người dùng đến prototyping và product management.',
  category: 'creative',
  icon: '🎨',
  color: 'from-violet-500 to-fuchsia-500',
  level: 'Trung bình',
  duration: '25-30 giờ',
  features: [
    'User Research',
    'Wireframing & Prototyping',
    'Usability Testing',
    'Design Systems',
    'Agile Product Management',
  ],
  prerequisites: [
    'Tư duy thẩm mỹ và sự đồng cảm',
    'Kỹ năng giải quyết vấn đề',
    'Làm quen với các công cụ thiết kế là một lợi thế',
  ],
  objectives: [
    'Hiểu quy trình thiết kế UX/UI từ A-Z.',
    'Thành thạo Figma cho wireframing và prototyping.',
    'Biết cách thực hiện usability testing hiệu quả.',
    'Xây dựng và quản lý design systems.',
  ],
  careerOutcomes: ['UX/UI Designer', 'Product Designer', 'Interaction Designer'],
  industryApplications: ['Web/Mobile Apps', 'SaaS Products', 'E-commerce'],
  marketDemand: {
    averageSalary: '30.000.000 VNĐ/tháng',
    jobGrowth: '20%',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['creative-design', 'web-development-fundamentals'],
  lessons: uxUiDesignLessons,
};
