import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

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
    faqs: [
      {
        question: 'Loại hình doanh nghiệp nào phổ biến nhất cho các startup ở Việt Nam?',
        answer:
          'Công ty TNHH (Trách nhiệm hữu hạn) và Công ty Cổ phần là hai loại hình phổ biến nhất. Công ty TNHH thường đơn giản hơn để thành lập và quản lý, phù hợp cho giai đoạn đầu. Công ty Cổ phần linh hoạt hơn trong việc huy động vốn (phát hành cổ phiếu), phù hợp khi startup cần mở rộng và kêu gọi đầu tư từ nhiều nguồn.',
      },
      {
        question: 'Chuyển đổi số (Digital Transformation) có nghĩa là gì?',
        answer:
          'Chuyển đổi số không chỉ là việc "online hóa" hay số hóa tài liệu. Đó là sự thay đổi toàn diện về cách một doanh nghiệp hoạt động và cung cấp giá trị cho khách hàng bằng cách ứng dụng công nghệ số. Nó bao gồm cả việc thay đổi văn hóa công ty, quy trình làm việc và mô hình kinh doanh.',
      },
      {
        question:
          'Nhà đầu tư thiên thần (Angel Investor) và Quỹ đầu tư mạo hiểm (Venture Capital - VC) khác nhau như thế nào?',
        answer:
          'Nhà đầu tư thiên thần thường là các cá nhân giàu có, đầu tư tiền của chính họ vào các startup giai đoạn rất sớm (seed stage). Họ thường linh hoạt hơn và có thể đưa ra quyết định nhanh chóng. Quỹ VC là các tổ chức chuyên nghiệp, quản lý tiền của người khác (Limited Partners) và đầu tư vào các startup ở nhiều giai đoạn khác nhau, thường với số tiền lớn hơn. Họ có quy trình thẩm định chặt chẽ hơn.',
      },
      {
        question: 'Một "kỳ lân" (unicorn) công nghệ là gì?',
        answer:
          'Là một công ty khởi nghiệp tư nhân (chưa niêm yết trên sàn chứng khoán) được định giá từ 1 tỷ USD trở lên. VNG là kỳ lân đầu tiên của Việt Nam, và sau đó có thêm các tên tuổi như VNLife (công ty mẹ của VNPAY).',
      },
      {
        question: 'Fintech là gì và tại sao nó lại phát triển mạnh ở Việt Nam?',
        answer:
          'Fintech (Financial Technology) là việc ứng dụng công nghệ vào các dịch vụ tài chính. Nó phát triển mạnh ở Việt Nam do tỷ lệ dân số trẻ, mức độ sử dụng smartphone cao, và một bộ phận lớn người dân chưa được tiếp cận đầy đủ các dịch vụ ngân hàng truyền thống. Các ví điện tử như MoMo, ZaloPay, và các nền tảng cho vay ngang hàng (P2P lending) là những ví dụ điển hình.',
      },
      {
        question: 'Luật An ninh mạng ảnh hưởng đến các doanh nghiệp như thế nào?',
        answer:
          'Luật An ninh mạng yêu cầu các doanh nghiệp trong và ngoài nước cung cấp một số dịch vụ trên mạng tại Việt Nam phải lưu trữ dữ liệu của người dùng Việt Nam tại Việt Nam và đặt văn phòng đại diện. Điều này ảnh hưởng đến chi phí và cấu trúc hoạt động của nhiều công ty công nghệ, đặc biệt là các công ty nước ngoài.',
      },
      {
        question: 'Thương mại điện tử xuyên biên giới (Cross-border e-commerce) có tiềm năng gì ở Việt Nam?',
        answer:
          'Rất lớn. Người tiêu dùng Việt Nam ngày càng có xu hướng mua sắm các sản phẩm từ nước ngoài qua các nền tảng như Amazon, Shopee Global. Ngược lại, các doanh nghiệp Việt Nam cũng có cơ hội lớn để xuất khẩu hàng hóa (đặc biệt là hàng thủ công mỹ nghệ, nông sản, may mặc) ra thị trường thế giới thông qua các sàn thương mại điện tử.',
      },
      {
        question: 'Mô hình D2C (Direct-to-Consumer) là gì?',
        answer:
          'Là mô hình kinh doanh trong đó thương hiệu bán sản phẩm trực tiếp cho người tiêu dùng cuối cùng mà không qua các kênh trung gian như nhà bán buôn hay bán lẻ. Các thương hiệu D2C thường xây dựng website riêng và sử dụng mạng xã hội để marketing. Mô hình này giúp họ kiểm soát trải nghiệm khách hàng và thu thập dữ liệu trực tiếp.',
      },
      {
        question: 'Tại sao việc xây dựng mối quan hệ với chính phủ (Government Relations) lại quan trọng ở Việt Nam?',
        answer:
          'Ở Việt Nam, chính phủ có vai trò quan trọng trong việc định hướng và điều tiết nền kinh tế. Việc xây dựng mối quan hệ tốt, hiểu rõ các chính sách và tham gia đóng góp ý kiến giúp doanh nghiệp hoạt động thuận lợi hơn, nắm bắt các cơ hội từ các chương trình của chính phủ và tránh được các rủi ro pháp lý.',
      },
      {
        question: 'EdTech (Công nghệ giáo dục) có phải là một lĩnh vực tiềm năng ở Việt Nam không?',
        answer:
          'Cực kỳ tiềm năng. Với truyền thống hiếu học, sự đầu tư lớn của các gia đình cho giáo dục, và nhu cầu học tập kỹ năng mới trong thời đại số, thị trường EdTech Việt Nam đang bùng nổ. Các nền tảng học trực tuyến, ứng dụng học ngoại ngữ, và các công cụ quản lý trường học đều có cơ hội phát triển lớn.',
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

export const vietnameseBusinessModuleData: ModuleData = {
  id: 'vietnamese-business',
  title: 'Vietnamese Business & Entrepreneurship',
  subtitle: 'Kinh doanh và Khởi nghiệp Việt Nam',
  description:
    'Khóa học toàn diện về kinh doanh và khởi nghiệp trong thị trường Việt Nam. Học navigation quy định pháp lý, startup ecosystem, FinTech development và e-commerce strategies được tối ưu cho văn hóa và consumer behavior Việt Nam.',
  level: 'Trung bình',
  duration: '16-20 giờ',
  category: 'Professional Skills',
  features: [
    'Vietnam Startup Ecosystem navigation và legal compliance',
    'FinTech Business Development với Vietnamese regulations',
    'E-commerce Strategy cho Vietnamese consumers',
    'Government Relations và partnership building',
  ],
  icon: '🏪',
  color: 'from-green-600 to-blue-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
  objectives: [
    'Navigate Vietnamese startup ecosystem và regulatory environment',
    'Develop FinTech solutions compliant với Vietnamese banking laws',
    'Build successful e-commerce business cho Vietnamese market',
    'Create sustainable business models với local partnerships',
  ],
  prerequisites: [
    'Basic business knowledge và entrepreneurial mindset',
    'Understanding of Vietnamese market dynamics',
    'Familiarity với digital business models',
  ],
  careerOutcomes: [
    'Vietnamese Market Business Development Manager',
    'FinTech Product Manager và Compliance Specialist',
    'E-commerce Strategy Director cho Vietnamese brands',
    'Startup Founder và Investment Relations Manager',
  ],
  industryApplications: [
    'Technology Startup Creation và Scaling',
    'FinTech Services Development cho Vietnamese banks',
    'E-commerce Platform Optimization',
    'Foreign Investment Advisory và Market Entry',
  ],
  marketDemand: {
    averageSalary: '30-60 triệu VNĐ',
    jobGrowth: '+38%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.FinancialLiteracy, K2Module.DigitalMarketing, K2Module.VietnameseLanguageTech],
};
