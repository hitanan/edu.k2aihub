import { BaseLessonData } from '@/types/lesson-base';
export interface VietnameseBusinessLesson extends BaseLessonData {
  module: 'Vietnamese Business';
}

export const vietnameseBusinessLessons: VietnameseBusinessLesson[] = [
  {
    id: 'vietnam-startup-ecosystem',
    title: 'Bài 1: Hệ sinh thái Startup Việt Nam và Digital Transformation',
    description:
      'Khám phá startup ecosystem Việt Nam, các quy định pháp lý, funding sources và success strategies. Học cách navigate trong môi trường kinh doanh Việt Nam.',
    videoUrl: 'https://www.youtube.com/watch?v=W_ca-jrf7ek',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '150 phút',
    module: 'Vietnamese Business',
    objectives: [
      'Hiểu startup ecosystem và investment landscape ở Việt Nam',
      'Nắm vững legal requirements cho business registration',
      'Identify funding opportunities và investor network',
      'Plan digital transformation strategy cho Vietnamese market',
    ],
    prerequisites: ['Kiến thức kinh doanh cơ bản', 'Hiểu biết về thị trường Việt Nam', 'English communication skills'],
    exercises: [
      {
        title: 'Business Registration Simulation',
        description: 'Complete online business registration process theo quy định Việt Nam',
        difficulty: 'Cơ bản',
        materials: ['Internet access', 'Basic Vietnamese reading', 'Government portal access'],
        procedure: [
          'Truy cập Cổng thông tin quốc gia về đăng ký doanh nghiệp.',
          'Chọn loại hình doanh nghiệp phù hợp.',
          'Điền đầy đủ thông tin theo mẫu đơn trực tuyến.',
          'Tải lên các giấy tờ cần thiết (bản scan).',
          'Nộp hồ sơ và theo dõi tình trạng xử lý.',
        ],
        expectedResults: 'Hoàn thành bộ hồ sơ đăng ký kinh doanh hợp lệ.',
        solution:
          'Sử dụng trang https://dangkykinhdoanh.gov.vn, chuẩn bị trước các giấy tờ cần thiết và hiểu rõ về các loại hình doanh nghiệp.',
      },
    ],
    realWorldApplications: [
      'Thành lập và mở rộng một startup công nghệ tại Việt Nam.',
      'Tuân thủ các quy định khi nhận vốn đầu tư nước ngoài.',
      'Phát triển một doanh nghiệp thương mại điện tử.',
      'Thành lập một nhà cung cấp dịch vụ kỹ thuật số.',
    ],
    vietnamContext: {
      title: 'Môi trường Kinh doanh và Chuyển đổi số tại Việt Nam',
      content: [
        'Việt Nam là một trong những nền kinh tế phát triển nhanh nhất Đông Nam Á, với một hệ sinh thái khởi nghiệp sôi động và dân số trẻ, am hiểu công nghệ.',
        'Chính phủ Việt Nam đang tích cực thúc đẩy chuyển đổi số quốc gia, tạo ra nhiều cơ hội cho các doanh nghiệp công nghệ trong các lĩnh vực như fintech, edtech, và e-commerce.',
        'Tuy nhiên, các doanh nghiệp cũng cần nắm vững các quy định pháp lý, từ Luật Doanh nghiệp, Luật Đầu tư đến các quy định về an ninh mạng và bảo vệ dữ liệu cá nhân.',
      ],
    },
    caseStudies: [
      {
        title: 'VNG - Từ Gaming đến "Kỳ lân" Công nghệ',
        organization: 'VNG Corporation',
        problem:
          'Thách thức chuyển đổi từ một công ty game thành một tập đoàn công nghệ đa dịch vụ, phục vụ nhu cầu đa dạng của người dùng Việt.',
        solution:
          'VNG đã đa dạng hóa một cách chiến lược, tập trung vào việc xây dựng một hệ sinh thái sản phẩm xoay quanh người dùng Việt, với Zalo làm trung tâm.',
        impact:
          'VNG trở thành "kỳ lân" công nghệ đầu tiên của Việt Nam, với hệ sinh thái Zalo có hơn 100 triệu người dùng. Thành công này cho thấy tầm quan trọng của việc am hiểu thị trường địa phương.',
        innovations: ['Xây dựng hệ sinh thái (Super App)', 'Nội địa hóa sản phẩm', 'Phát triển ZaloPay'],
      },
      {
        title: 'Vinamilk: Chuyển đổi số trong ngành hàng tiêu dùng',
        organization: 'Vinamilk',
        problem:
          'Là một công ty sữa hàng đầu, Vinamilk cần hiện đại hóa hệ thống quản lý và phân phối để duy trì vị thế dẫn đầu và tiếp cận người tiêu dùng hiệu quả hơn.',
        solution:
          'Vinamilk đã đầu tư mạnh mẽ vào hệ thống ERP, tự động hóa nhà máy, và phát triển các kênh bán hàng trực tuyến. Họ sử dụng dữ liệu lớn để phân tích hành vi người tiêu dùng và tối ưu hóa chuỗi cung ứng.',
        impact:
          'Quá trình chuyển đổi số đã giúp Vinamilk tối ưu hóa chi phí vận hành, cải thiện hiệu quả quản lý và tăng cường khả năng cạnh tranh trên thị trường. Doanh thu từ các kênh online tăng trưởng mạnh mẽ.',
        innovations: ['Nhà máy thông minh', 'Hệ thống ERP', 'Phân tích dữ liệu lớn'],
      },
    ],
    careerConnect: {
      name: 'Lê Hồng Minh',
      title: 'Nhà sáng lập & CEO, VNG Corporation',
      company: 'VNG Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=le-hong-minh',
      quote:
        'Để thành công tại Việt Nam, bạn phải có một giấc mơ đủ lớn và sự kiên trì để theo đuổi nó. Công nghệ là công cụ, nhưng sự thấu hiểu con người và văn hóa Việt Nam mới là chìa khóa.',
    },
    quizzes: [
      {
        question: 'Đâu là yếu tố quan trọng nhất dẫn đến thành công của VNG tại Việt Nam?',
        options: [
          'Chỉ tập trung vào thị trường quốc tế',
          'Sao chép mô hình từ các công ty nước ngoài',
          'Sự am hiểu sâu sắc thị trường và người dùng địa phương',
          'Chỉ phát triển game',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Thành công của VNG đến từ việc họ xây dựng các sản phẩm "make in Vietnam" được thiết kế riêng để giải quyết các nhu cầu và phù hợp với thói quen của người dùng Việt Nam.',
      },
      {
        question: 'Chính phủ Việt Nam đang thúc đẩy xu hướng nào sau đây?',
        options: [
          'Hạn chế sử dụng internet',
          'Chuyển đổi số quốc gia',
          'Quay trở lại kinh tế nông nghiệp',
          'Cấm đầu tư nước ngoài',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Chuyển đổi số là một trong những ưu tiên hàng đầu của Chính phủ Việt Nam, nhằm hiện đại hóa nền kinh tế và nâng cao năng lực cạnh tranh quốc gia.',
      },
    ],
    resources: [
      {
        title: 'Cổng thông tin quốc gia về đăng ký doanh nghiệp',
        url: 'https://dangkykinhdoanh.gov.vn/',
        type: 'government',
      },
      {
        title: 'Luật Doanh nghiệp 2020',
        url: 'https://thuvienphapluat.vn/van-ban/Doanh-nghiep/Luat-Doanh-nghiep-2020-427433.aspx',
        type: 'government',
      },
    ],
  },
];
