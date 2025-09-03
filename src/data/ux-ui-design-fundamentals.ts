import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

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
  },
  // ... (các bài học khác)
];
