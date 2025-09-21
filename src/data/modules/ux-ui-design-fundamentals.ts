import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';

export interface UXUILessonType extends BaseLessonData {
  // Adding a dummy property to satisfy the linter
  module: 'UX/UI';
}

export const uxuiDesignLessons: UXUILessonType[] = [
  {
    id: 'ux-fundamentals',
    title: 'Cơ Bản UX Design',
    description: 'Tìm hiểu nguyên lý cốt lõi của User Experience Design, từ user research đến interaction design.',
    duration: '150 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=BoE9r31oGak', // What is UX Design
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
    module: 'UX/UI',
    objectives: [
      'Hiểu về UX Design là gì và tại sao quan trọng',
      'Nắm vững user-centered design process',
      'Học các phương pháp user research cơ bản',
      'Áp dụng UX principles vào design decisions',
    ],
    prerequisites: ['Không có yêu cầu kỹ thuật đặc biệt', 'Có sự quan tâm đến user experience'],
    realWorldApplications: [
      'Thiết kế quy trình thanh toán trên các trang thương mại điện tử.',
      'Cải thiện trải nghiệm người dùng cho ứng dụng ngân hàng số.',
      'Xây dựng luồng đăng ký tài khoản đơn giản và nhanh chóng.',
      'Tối ưu hóa giao diện của một trang web tin tức để dễ đọc hơn.',
    ],
    exercises: [
      {
        title: 'User Persona Development',
        description: 'Tạo detailed user persona cho một app/website',
        difficulty: 'Cơ bản',
        materials: ['Template persona', 'User research data', 'Stock photos'],
        procedure: [
          'Chọn một app/website để analyze',
          'Conduct 3-5 user interviews hoặc research existing data',
          'Identify patterns trong user behavior',
          'Create detailed persona với demographics, goals, pain points',
          'Add personality traits và preferences',
          'Validate persona với additional research',
        ],
        expectedResults: 'Comprehensive user persona document',
        solution: 'Base on real research data, avoid assumptions, make persona specific và actionable.',
      },
    ],
    vietnamContext: {
      title: 'UX/UI Design và Bối cảnh Thị trường Việt Nam',
      content: [
        'Thị trường Việt Nam có những đặc thù riêng ảnh hưởng đến thiết kế UX/UI, ví dụ như sự phổ biến của thiết bị di động, thói quen sử dụng mạng xã hội và các ứng dụng nhắn tin.',
        'Người dùng Việt thường ưa thích các giao diện có màu sắc sống động, nhiều thông tin và có các yếu tố tương tác xã hội (như bình luận, chia sẻ).',
        'Thách thức lớn là thiết kế cho đa dạng đối tượng người dùng, từ thành thị đến nông thôn, với các mức độ tiếp cận công nghệ khác nhau.',
      ],
    },
    caseStudies: [
      {
        title: 'MoMo: Ví Điện Tử Quốc Dân',
        organization: 'MoMo',
        problem:
          'Cần xây dựng một ứng dụng ví điện tử dễ sử dụng, an toàn và tích hợp nhiều dịch vụ để thu hút hàng triệu người dùng Việt Nam, nhiều người trong số đó chưa quen với thanh toán không tiền mặt.',
        solution:
          'MoMo đã thiết kế một giao diện thân thiện, sử dụng icon và ngôn ngữ gần gũi. Họ liên tục bổ sung các tính năng "super-app" như thanh toán hóa đơn, mua vé xem phim, đầu tư, và các mini-game để tăng sự gắn kết. Quy trình chuyển tiền và thanh toán được đơn giản hóa tối đa.',
        impact:
          'MoMo đã trở thành ví điện tử phổ biến nhất Việt Nam với hàng chục triệu người dùng, góp phần thúc đẩy mạnh mẽ xu hướng thanh toán không tiền mặt. Giao diện của MoMo được coi là một chuẩn mực về UX cho các ứng dụng tài chính tại Việt Nam.',
        innovations: ['Mô hình Super-app', 'Gamification trong tài chính', 'Giao diện trực quan, dễ tiếp cận'],
      },
      {
        title: 'Tiki: Tối ưu hóa Trải nghiệm Mua sắm',
        organization: 'Tiki.vn',
        problem:
          'Cạnh tranh khốc liệt trong ngành thương mại điện tử đòi hỏi Tiki phải tạo ra một trải nghiệm mua sắm vượt trội, từ tìm kiếm sản phẩm đến thanh toán và nhận hàng.',
        solution:
          'Tiki tập trung vào việc cải thiện tốc độ tải trang, tối ưu hóa công cụ tìm kiếm và bộ lọc sản phẩm. Họ giới thiệu dịch vụ "TikiNOW" giao hàng nhanh trong 2 giờ, một yếu tố UX quan trọng. Quy trình thanh toán được thiết kế lại để giảm số bước và tăng sự tin tưởng.',
        impact:
          'Tiki xây dựng được hình ảnh một sàn thương mại điện tử uy tín, đáng tin cậy với trải nghiệm khách hàng tốt. Dịch vụ giao hàng nhanh đã trở thành một lợi thế cạnh tranh lớn và là một điểm nhấn quan trọng trong hành trình người dùng.',
        innovations: [
          'Dịch vụ giao hàng siêu tốc',
          'Công cụ tìm kiếm thông minh',
          'Quy trình thanh toán một trang (one-page checkout)',
        ],
      },
    ],
    careerConnect: {
      name: 'Nguyễn Thành Long',
      title: 'Head of Design, VNG',
      company: 'VNG Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thanh-long',
      quote:
        'UX/UI không chỉ là vẽ ra những màn hình đẹp. Đó là quá trình thấu hiểu sâu sắc người dùng và giải quyết vấn đề của họ một cách tinh tế. Tại Việt Nam, một designer giỏi là người có thể cân bằng giữa xu hướng toàn cầu và sự am hiểu văn hóa địa phương.',
    },
    quizzes: [
      {
        question: 'Đâu là một đặc điểm của người dùng Việt Nam cần lưu ý khi thiết kế UX/UI?',
        options: [
          'Chỉ thích giao diện tối giản',
          'Ưa thích giao diện sống động và có tính tương tác xã hội',
          'Không sử dụng thiết bị di động',
          'Chỉ mua sắm trên máy tính',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Người dùng Việt thường bị thu hút bởi các giao diện có màu sắc, nhiều thông tin hữu ích và các yếu tố cho phép họ tương tác với cộng đồng, phản ánh thói quen sử dụng mạng xã hội.',
      },
      {
        question: 'Giải pháp UX nào đã giúp MoMo trở nên phổ biến tại Việt Nam?',
        options: [
          'Chỉ tập trung vào một tính năng duy nhất là chuyển tiền',
          'Thiết kế giao diện phức tạp chỉ dành cho chuyên gia tài chính',
          'Xây dựng mô hình "super-app" với giao diện thân thiện và nhiều tính năng',
          'Yêu cầu người dùng phải có thẻ tín dụng quốc tế',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Thành công của MoMo đến từ việc tích hợp nhiều dịch vụ vào một ứng dụng duy nhất (super-app) và thiết kế một trải nghiệm người dùng đơn giản, dễ hiểu cho mọi đối tượng.',
      },
    ],
    faqs: [
      {
        question: 'UX và UI khác nhau như thế nào?',
        answer:
          'UX (User Experience) là trải nghiệm tổng thể của người dùng với sản phẩm, bao gồm cảm xúc, sự dễ dàng khi sử dụng. Nó tập trung vào "cảm nhận". UI (User Interface) là giao diện người dùng, bao gồm các yếu tố trực quan như nút bấm, màu sắc, bố cục. Nó tập trung vào "cái nhìn". UI là một phần của UX.',
      },
      {
        question: 'Tại sao User Research lại quan trọng?',
        answer:
          'User Research giúp chúng ta hiểu được nhu cầu, hành vi, và vấn đề của người dùng. Nếu không có nghiên cứu, chúng ta chỉ đang "đoán" và có thể tạo ra một sản phẩm không ai muốn hoặc không thể sử dụng. Nghiên cứu cung cấp dữ liệu thực tế để đưa ra quyết định thiết kế đúng đắn.',
      },
      {
        question: 'Wireframe, Mockup, và Prototype khác nhau ra sao?',
        answer:
          'Wireframe là bản phác thảo cấu trúc cơ bản, chỉ có màu đen trắng, tập trung vào bố cục. Mockup là phiên bản có màu sắc, hình ảnh, và kiểu chữ, cho thấy giao diện sẽ trông như thế nào. Prototype là một phiên bản có thể tương tác được, cho phép người dùng nhấp và trải nghiệm luồng hoạt động của sản phẩm.',
      },
      {
        question: 'Heuristic Evaluation là gì?',
        answer:
          'Là một phương pháp kiểm tra khả năng sử dụng của giao diện bằng cách đối chiếu nó với một bộ các nguyên tắc thiết kế đã được công nhận (thường là 10 nguyên tắc của Jakob Nielsen). Các chuyên gia sẽ đánh giá giao diện và chỉ ra các vấn đề tiềm ẩn mà không cần có người dùng thật.',
      },
      {
        question: 'A/B testing trong UX/UI là gì?',
        answer:
          'Là một phương pháp thử nghiệm bằng cách tạo ra hai phiên bản khác nhau của một thiết kế (Phiên bản A và Phiên bản B) và cho hai nhóm người dùng khác nhau sử dụng. Bằng cách đo lường chỉ số thành công (ví dụ: tỷ lệ nhấp chuột), chúng ta có thể xác định phiên bản nào hiệu quả hơn.',
      },
      {
        question: 'Design System là gì?',
        answer:
          'Là một bộ sưu tập các thành phần giao diện có thể tái sử dụng (như nút, form, màu sắc, font chữ), được quản lý bằng các tiêu chuẩn rõ ràng. Nó giúp đảm bảo tính nhất quán trong thiết kế trên toàn bộ sản phẩm và giúp các nhóm làm việc hiệu quả hơn.',
      },
      {
        question: 'Mobile-First Design là gì?',
        answer:
          'Là một chiến lược thiết kế bắt đầu bằng việc thiết kế cho màn hình nhỏ nhất (điện thoại di động) trước, sau đó mới mở rộng lên các màn hình lớn hơn (máy tính bảng, máy tính để bàn). Cách tiếp cận này buộc các nhà thiết kế phải tập trung vào những nội dung và chức năng quan trọng nhất.',
      },
      {
        question: 'Accessibility (Khả năng tiếp cận) trong thiết kế có nghĩa là gì?',
        answer:
          'Là việc thiết kế sản phẩm để tất cả mọi người, bao gồm cả những người khuyết tật (về thị giác, thính giác, vận động, nhận thức), đều có thể sử dụng được. Ví dụ: đảm bảo độ tương phản màu sắc đủ cao, cung cấp văn bản thay thế cho hình ảnh, và cho phép điều hướng bằng bàn phím.',
      },
      {
        question: 'Làm thế nào để bắt đầu sự nghiệp trong ngành UX/UI?',
        answer:
          'Bắt đầu bằng việc học các kiến thức cơ bản qua các khóa học online hoặc bootcamp. Thực hành liên tục bằng cách làm các dự án cá nhân hoặc thiết kế lại các ứng dụng hiện có. Xây dựng một portfolio (hồ sơ năng lực) chất lượng để giới thiệu các dự án của bạn. Cuối cùng, kết nối với cộng đồng và tìm kiếm cơ hội thực tập hoặc làm việc cấp độ junior.',
      },
      {
        question: 'Sự khác biệt giữa "Design Thinking" và "User-Centered Design" là gì?',
        answer:
          '"User-Centered Design" (UCD) là một triết lý thiết kế đặt người dùng vào trung tâm của mọi quyết định. "Design Thinking" là một quy trình, một phương pháp luận cụ thể để thực hành UCD. Nó bao gồm các bước như Thấu cảm, Định nghĩa, Lên ý tưởng, Tạo mẫu và Thử nghiệm để giải quyết vấn đề một cách sáng tạo.',
      },
    ],
  },
  // ... (các bài học khác)
];

export const uxUiDesignFundamentalsModuleData: ModuleData = {
  id: 'ux-ui-design-fundamentals',
  title: 'Cơ Bản Thiết Kế UX/UI',
  subtitle: 'Thiết kế trải nghiệm người dùng',
  description:
    'Học các nguyên tắc thiết kế UX/UI, user research, visual design và design thinking để tạo ra sản phẩm số thân thiện người dùng.',
  level: 'Trung cấp',
  duration: '35 giờ',
  category: 'Thiết kế',
  heroImageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=600&fit=crop',
  icon: '🎨',
  color: 'from-green-600 to-emerald-600',
  features: [
    'Quy trình thiết kế lấy người dùng làm trung tâm',
    'Nguyên tắc thiết kế trực quan',
    'Tạo mẫu và kiểm thử người dùng',
    'Tư duy thiết kế để đổi mới',
  ],
  prerequisites: ['Không có yêu cầu kỹ thuật đặc biệt', 'Quan tâm đến trải nghiệm người dùng'],
  objectives: [
    'Hiểu và áp dụng quy trình thiết kế UX/UI từ nghiên cứu đến triển khai.',
    'Thành thạo các công cụ thiết kế và tạo mẫu phổ biến như Figma.',
    'Phát triển kỹ năng nghiên cứu người dùng và phân tích insight.',
    'Xây dựng portfolio thiết kế UX/UI chuyên nghiệp.',
  ],
  careerOutcomes: ['UX/UI Designer', 'Product Designer', 'User Researcher', 'Interaction Designer'],
  industryApplications: [
    'Phát triển ứng dụng di động và web',
    'Thiết kế sản phẩm SaaS',
    'Tối ưu hóa website thương mại điện tử',
    'Cải thiện trải nghiệm người dùng cho các hệ thống phức tạp',
  ],
  marketDemand: {
    averageSalary: '25.000.000 VNĐ/tháng',
    jobGrowth: '15%',
    hireDemand: 'Cao',
  },
  relatedModules: ['web-development-fundamentals', 'mobile-app-development', 'digital-marketing'],
  lessons: uxuiDesignLessons,
};
