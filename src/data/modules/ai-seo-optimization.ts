import { createModuleMetadata } from '@/utils/seo';
import { ModuleData } from '@/types';

export const metadata = createModuleMetadata(
  'AI SEO Optimization',
  'Sử dụng AI để tối ưu hóa SEO, từ nghiên cứu từ khóa, tạo nội dung đến phân tích kỹ thuật và theo dõi hiệu suất.',
  ['AI SEO', 'tối ưu hóa công cụ tìm kiếm', 'nghiên cứu từ khóa AI', 'content AI', 'technical SEO', 'K2AI'],
  'ai-seo-optimization',
);

export const aiSeoOptimizationModuleData: ModuleData = {
  id: 'ai-seo-optimization',
  title: 'AI SEO Optimization',
  subtitle: 'Tối ưu hóa thứ hạng website của bạn với sức mạnh của Trí tuệ Nhân tạo',
  description:
    'Học cách sử dụng các công cụ AI tiên tiến để tự động hóa và nâng cao mọi khía cạnh của chiến lược SEO, từ việc tìm kiếm từ khóa vàng, sản xuất nội dung chất lượng cao, đến phân tích kỹ thuật sâu và theo dõi hiệu suất chính xác.',
  level: 'Trung cấp',
  duration: '4 giờ',
  category: 'Digital Marketing',
  primaryColor: 'blue',
  features: [
    'Nghiên cứu từ khóa bằng AI',
    'Sáng tạo nội dung chuẩn SEO',
    'Phân tích đối thủ cạnh tranh',
    'Tối ưu hóa kỹ thuật tự động',
    'Báo cáo hiệu suất thông minh',
    'Xây dựng liên kết với AI',
  ],
  icon: '🌏',
  color: 'blue',
  heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
  objectives: [
    'Nắm vững cách dùng AI để tìm kiếm từ khóa có tỷ lệ chuyển đổi cao.',
    'Sử dụng AI để tạo ra các bài viết, mô tả sản phẩm chuẩn SEO một cách nhanh chóng.',
    'Tự động hóa việc phân tích các yếu tố SEO on-page và kỹ thuật.',
    'Xây dựng chiến lược backlink thông minh hơn với sự hỗ trợ của AI.',
    'Theo dõi và phân tích hiệu suất SEO bằng các công cụ báo cáo AI.',
  ],
  prerequisites: [
    'Kiến thức cơ bản về SEO',
    'Hiểu biết về marketing online',
    'Tài khoản các công cụ AI (một số là miễn phí)',
  ],
  careerOutcomes: [
    'Chuyên viên SEO AI',
    'Digital Marketing Specialist',
    'Content Strategist',
    'Trưởng phòng Marketing',
  ],
  industryApplications: [
    {
      name: 'E-commerce',
      description: 'Tự động tạo mô tả sản phẩm và tối ưu hóa trang danh mục để thu hút khách hàng.',
    },
    {
      name: 'Bất động sản',
      description: 'Nghiên cứu từ khóa địa phương và tạo nội dung blog về thị trường để dẫn đầu khu vực.',
    },
    {
      name: 'Công nghệ (SaaS)',
      description: 'Phân tích đối thủ và xây dựng chiến lược nội dung chuyên sâu để thu hút người dùng chuyên nghiệp.',
    },
    {
      name: 'Du lịch',
      description: 'Tạo các bài viết blog hấp dẫn về điểm đến và tối ưu hóa cho các truy vấn tìm kiếm theo mùa.',
    },
  ],
  marketDemand: {
    averageSalary: '20-35 triệu VNĐ/tháng',
    jobGrowth: '25%',
    hireDemand: 'Cao',
  },
  relatedModules: ['digital-marketing', 'ai-content-creation'],
  gradientColors: 'from-blue-500 to-teal-400',
  basePath: '/learning/ai-seo-optimization',
  statsConfig: {
    lessons: '4',
    duration: '4 giờ',
    level: 'Trung cấp',
    projects: '2',
  },
  technicalHighlights: [
    {
      title: 'Nghiên cứu từ khóa AI',
      icon: 'search',
      items: [
        'Phân tích cụm từ khóa (Keyword Clustering)',
        'Dự báo xu hướng từ khóa',
        'Phân tích ý định tìm kiếm (Search Intent)',
      ],
    },
    {
      title: 'Tạo nội dung AI',
      icon: 'file-text',
      items: [
        'Tạo dàn ý chi tiết (Outline Generation)',
        'Viết bài chuẩn SEO (SEO-friendly Articles)',
        'Tối ưu hóa NLP (Natural Language Processing)',
      ],
    },
    {
      title: 'Phân tích Kỹ thuật AI',
      icon: 'aperture',
      items: ['Phân tích log file tự động', 'Giám sát Core Web Vitals', 'Tối ưu hóa liên kết nội bộ'],
    },
    {
      title: 'Báo cáo & Phân tích',
      icon: 'bar-chart',
      items: [
        'Theo dõi thứ hạng tự động',
        'Phân tích nguyên nhân & kết quả (Causality Analysis)',
        'Dự báo hiệu suất SEO',
      ],
    },
  ],
};

export const aiSeoOptimizationLessons = [
  {
    id: 'keyword-research-ai',
    title: 'Nghiên cứu từ khóa bằng AI',
    description: 'Sử dụng AI để phân tích và tìm ra các từ khóa tiềm năng.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=EBMNZKUdV_Y',
    objectives: ['Hiểu cách AI hỗ trợ nghiên cứu từ khóa.'],
    realWorldApplications: ['Tối ưu hóa chiến dịch SEO cho website e-commerce.'],
    faqs: [
      {
        question: 'AI có thể thay thế hoàn toàn con người trong việc nghiên cứu từ khóa không?',
        answer:
          'Không hoàn toàn. AI là một công cụ hỗ trợ cực kỳ mạnh mẽ, giúp tự động hóa việc phân tích dữ liệu lớn và tìm ra các cụm từ khóa tiềm năng. Tuy nhiên, sự hiểu biết sâu sắc về ngành và khách hàng của con người vẫn là yếu tố quan trọng để lựa chọn từ khóa chiến lược và phù hợp nhất.',
      },
      {
        question: 'Công cụ AI nào tốt nhất cho việc nghiên cứu từ khóa?',
        answer:
          'Có nhiều công cụ tốt như Ahrefs, SEMrush, và các công cụ chuyên dụng như Keyword Insights. Việc lựa chọn phụ thuộc vào ngân sách và nhu cầu cụ thể. Một số công cụ mạnh về phân tích đối thủ, trong khi công cụ khác lại mạnh về việc nhóm các từ khóa theo chủ đề (keyword clustering).',
      },
    ],
  },
  {
    id: 'content-creation-ai',
    videoUrl: null,
    title: 'Sáng tạo nội dung chuẩn SEO với AI',
    description: 'Học cách dùng AI để tạo ra nội dung hấp dẫn, chuẩn SEO.',
    duration: '75 phút',
    difficulty: 'Trung cấp',
    objectives: ['Sử dụng AI để viết bài blog, mô tả sản phẩm.'],
    realWorldApplications: ['Tạo content cho trang blog công ty công nghệ.'],
    faqs: [
      {
        question: 'Nội dung do AI tạo ra có bị Google phạt không?',
        answer:
          'Google không phạt nội dung chỉ vì nó được tạo ra bởi AI. Google quan tâm đến chất lượng và sự hữu ích của nội dung, bất kể nó được tạo ra như thế nào. Miễn là nội dung của bạn nguyên gốc, chất lượng cao và đáp ứng nhu-cầu-tìm-kiếm của người dùng, nó vẫn có thể xếp hạng tốt.',
      },
      {
        question: 'Làm thế nào để đảm bảo nội dung AI tạo ra là độc nhất và chính xác?',
        answer:
          'Luôn sử dụng AI như một trợ lý viết bài, không phải là người viết thay thế. Bạn cần kiểm tra lại thông tin (fact-check), chỉnh sửa văn phong cho phù hợp với thương hiệu, và thêm vào những hiểu biết, kinh nghiệm độc đáo của riêng bạn để làm cho nội dung trở nên khác biệt và giá trị hơn.',
      },
    ],
  },
  {
    id: 'technical-seo-automation',
    title: 'Tối ưu hóa kỹ thuật tự động',
    description: 'Tự động hóa các tác vụ SEO kỹ thuật bằng công cụ AI.',
    duration: '60 phút',
    difficulty: 'Trung cấp',
    videoUrl: 'https://www.youtube.com/watch?v=EBMNZKUdV_Y',
    objectives: ['Tự động phát hiện và sửa lỗi 404.'],
    realWorldApplications: ['Bảo trì SEO cho một trang web lớn.'],
    faqs: [
      {
        question: 'AI có thể giúp gì trong SEO kỹ thuật?',
        answer:
          'AI có thể giúp tự động hóa các công việc tốn thời gian như phân tích log file để hiểu cách Googlebot thu thập dữ liệu trang web, giám sát hiệu suất Core Web Vitals, phát hiện các trang bị lỗi (404, 500), và gợi ý các cơ hội tối ưu hóa liên kết nội bộ.',
      },
      {
        question: 'Sử dụng AI để tự động sửa lỗi SEO kỹ thuật có rủi ro không?',
        answer:
          'Có. Việc tự động hóa hoàn toàn có thể dẫn đến những thay đổi không mong muốn. Cách tiếp cận tốt nhất là sử dụng các công cụ AI để phát hiện và chẩn đoán vấn đề, sau đó một chuyên gia SEO sẽ xem xét và phê duyệt các thay đổi trước khi thực hiện.',
      },
    ],
  },
  {
    id: 'performance-tracking-ai',
    title: 'Theo dõi và báo cáo hiệu suất bằng AI',
    description: 'Dùng AI để theo dõi và phân tích hiệu suất chiến dịch SEO.',
    duration: '45 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=ckzOfrctlbU',
    objectives: ['Xây dựng dashboard báo cáo SEO tự động.'],
    realWorldApplications: ['Báo cáo hiệu quả SEO cho khách hàng agency.'],
    faqs: [
      {
        question: 'AI giúp việc theo dõi hiệu suất SEO khác biệt như thế nào so với cách truyền thống?',
        answer:
          'AI không chỉ thu thập và hiển thị dữ liệu. Nó có thể phân tích các mối tương quan phức tạp, ví dụ như xác định một bản cập nhật thuật toán của Google đã ảnh hưởng đến thứ hạng của bạn như thế nào, hoặc dự báo lưu lượng truy cập trong tương lai dựa trên các xu hướng hiện tại. Nó chuyển từ việc "cái gì đã xảy ra" sang "tại sao nó xảy ra" và "điều gì sẽ xảy ra tiếp theo".',
      },
      {
        question: 'Tôi có thể tự xây dựng một hệ thống báo cáo SEO bằng AI không?',
        answer:
          'Hoàn toàn có thể. Bằng cách kết nối API từ Google Search Console, Google Analytics với các nền tảng như Google Looker Studio và sử dụng các mô hình AI, bạn có thể tạo ra các báo cáo tùy chỉnh. Tuy nhiên, việc này đòi hỏi kiến thức về API, xử lý dữ liệu và một chút về khoa học dữ liệu.',
      },
    ],
  },
];
