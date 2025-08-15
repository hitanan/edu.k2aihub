import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

// Cross-border E-commerce Lesson Interface
export interface CrossBorderEcommerceLessonData extends BaseLessonData {
  marketSize?: string;
  growthRate?: string;
  platforms?: string[];
  regulations?: string[];
  tools?: string[];
}

export const crossBorderEcommerceLessons: CrossBorderEcommerceLessonData[] = [
  {
    id: 'ecommerce-fundamentals',
    title: 'Cơ bản Thương mại Điện tử Xuyên biên giới',
    description: 'Hiểu về thương mại điện tử quốc tế và cơ hội cho doanh nghiệp Việt Nam',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Hiểu khái niệm và mô hình kinh doanh cross-border e-commerce',
      'Nắm được xu hướng thị trường và cơ hội cho Việt Nam',
      'Phân tích case studies thành công từ các doanh nghiệp Việt',
      'Xây dựng chiến lược gia nhập thị trường quốc tế'
    ],
    prerequisites: [
      'Kiến thức cơ bản về thương mại điện tử',
      'Hiểu biết về marketing online',
      'Kỹ năng sử dụng máy tính và internet'
    ],
    exercises: [
      {
        title: 'Phân tích Thị trường Mục tiêu',
        description: 'Nghiên cứu và phân tích một thị trường quốc tế cụ thể',
        difficulty: 'Cơ bản',
        procedure: [
          'Chọn một quốc gia/thị trường mục tiêu',
          'Thu thập dữ liệu về quy mô thị trường, đối thủ cạnh tranh',
          'Phân tích hành vi tiêu dùng và preferences',
          'Đánh giá rào cản gia nhập và cơ hội',
          'Lập kế hoạch chiến lược gia nhập'
        ],
        expectedResults: 'Báo cáo phân tích thị trường chi tiết với khuyến nghị cụ thể'
      }
    ],
    realWorldApplications: [
      'Mở rộng kinh doanh ra thị trường quốc tế',
      'Tăng doanh thu từ khách hàng nước ngoài',
      'Đa dạng hóa nguồn thu nhập',
      'Xây dựng thương hiệu toàn cầu'
    ],
    marketSize: '$5-12 billion by 2028',
    growthRate: '+42% annually',
    platforms: ['Shopee', 'Lazada', 'Amazon', 'eBay', 'AliExpress'],
    regulations: ['EVFTA', 'CPTPP', 'ASEAN Trade Agreement']
  },
  {
    id: 'international-platforms',
    title: 'Nền tảng Thương mại Quốc tế',
    description: 'Làm chủ các platform lớn để bán hàng ra thị trường toàn cầu',
    duration: '120 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Nắm vững cách hoạt động của các platform quốc tế',
      'Thiết lập và tối ưu hóa store trên nhiều nền tảng',
      'Hiểu về fee structure và chính sách của từng platform',
      'Xây dựng chiến lược multi-platform'
    ],
    prerequisites: [
      'Hoàn thành bài học Cơ bản Thương mại Xuyên biên giới',
      'Có kinh nghiệm bán hàng online cơ bản'
    ],
    exercises: [
      {
        title: 'Thiết lập Store Đa nền tảng',
        description: 'Tạo và tối ưu hóa store trên 3 platform khác nhau',
        difficulty: 'Trung bình',
        procedure: [
          'Đăng ký seller account trên Amazon, eBay, Etsy',
          'Thiết lập profile và store information',
          'Upload sản phẩm với mô tả và hình ảnh tối ưu',
          'Cấu hình shipping và payment methods',
          'Thiết lập customer service và return policy'
        ],
        expectedResults: 'Store hoạt động trên 3 platform với sản phẩm ready-to-sell'
      }
    ],
    realWorldApplications: [
      'Bán hàng đa kênh quốc tế',
      'Tối ưu hóa revenue từ nhiều nguồn',
      'Giảm thiểu rủi ro phụ thuộc một platform',
      'Tiếp cận đa dạng customer segments'
    ]
  },
  {
    id: 'cross-border-logistics',
    title: 'Logistics và Vận chuyển Quốc tế',
    description: 'Quản lý hiệu quả chuỗi cung ứng và vận chuyển xuyên biên giới',
    duration: '100 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu về các phương thức vận chuyển quốc tế',
      'Tối ưu hóa chi phí và thời gian shipping',
      'Quản lý inventory cho multi-market',
      'Xử lý vấn đề customs và tax'
    ],
    prerequisites: [
      'Kiến thức về logistics cơ bản',
      'Hiểu về các platform thương mại quốc tế'
    ],
    exercises: [
      {
        title: 'Xây dựng Hệ thống Logistics',
        description: 'Thiết kế chuỗi cung ứng tối ưu cho cross-border business',
        difficulty: 'Trung bình',
        procedure: [
          'Phân tích các shipping carriers và so sánh cost',
          'Thiết lập warehouse/fulfillment strategy',
          'Cấu hình inventory management system',
          'Lập kế hoạch customs clearance procedure',
          'Thiết lập tracking và customer notification system'
        ],
        expectedResults: 'Blueprint hoàn chỉnh cho logistics operation'
      }
    ],
    realWorldApplications: [
      'Giảm chi phí vận chuyển 20-30%',
      'Cải thiện customer satisfaction',
      'Tăng tốc độ delivery',
      'Mở rộng thị trường địa lý'
    ],
    tools: ['ShipStation', 'Easyship', 'Flexport', 'DHL Express', 'FedEx']
  },
  {
    id: 'payment-solutions',
    title: 'Giải pháp Thanh toán Xuyên biên giới',
    description: 'Thiết lập hệ thống thanh toán an toàn và hiệu quả cho thị trường quốc tế',
    duration: '110 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu về các phương thức thanh toán quốc tế',
      'Thiết lập payment gateway đa tiền tệ',
      'Quản lý currency exchange và fees',
      'Đảm bảo security và compliance'
    ],
    prerequisites: [
      'Kiến thức về payment processing',
      'Hiểu biết về banking và finance cơ bản'
    ],
    exercises: [
      {
        title: 'Thiết lập Payment System',
        description: 'Cấu hình hệ thống thanh toán đa tiền tệ và đa phương thức',
        difficulty: 'Trung bình',
        procedure: [
          'So sánh và chọn payment service providers',
          'Thiết lập multi-currency checkout',
          'Cấu hình fraud detection và security measures',
          'Tích hợp với accounting và tax systems',
          'Test payment flows cho different markets'
        ],
        expectedResults: 'Hệ thống thanh toán hoạt động với 5+ currencies'
      }
    ],
    realWorldApplications: [
      'Tăng conversion rate 15-25%',
      'Giảm cart abandonment',
      'Cải thiện customer trust',
      'Mở rộng customer base quốc tế'
    ],
    tools: ['PayPal', 'Stripe', 'Wise', 'Payoneer', 'Alipay Global']
  },
  {
    id: 'cultural-localization',
    title: 'Localization và Marketing Văn hóa',
    description: 'Thích ứng sản phẩm và marketing với văn hóa địa phương các thị trường mục tiêu',
    duration: '95 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu tầm quan trọng của cultural adaptation',
      'Phát triển chiến lược localization hiệu quả',
      'Tạo content marketing phù hợp văn hóa',
      'Xây dựng brand positioning cho từng market'
    ],
    prerequisites: [
      'Kinh nghiệm marketing online',
      'Hiểu biết về cultural differences',
      'Kỹ năng content creation'
    ],
    exercises: [
      {
        title: 'Campaign Localization Project',
        description: 'Tạo campaign marketing được localized cho 2 thị trường khác nhau',
        difficulty: 'Nâng cao',
        procedure: [
          'Nghiên cứu cultural insights của target markets',
          'Adapt product messaging và value proposition',
          'Tạo visual assets phù hợp với cultural preferences',
          'Phát triển content calendar và social media strategy',
          'A/B test messaging effectiveness'
        ],
        expectedResults: 'Hai campaign hoàn chỉnh với measurable KPIs'
      }
    ],
    realWorldApplications: [
      'Tăng brand acceptance trong thị trường mới',
      'Cải thiện engagement rates',
      'Giảm cultural misunderstandings',
      'Xây dựng long-term customer relationships'
    ]
  },
  {
    id: 'legal-compliance',
    title: 'Pháp lý và Tuân thủ Quốc tế',
    description: 'Nắm vững các quy định pháp lý và compliance requirements cho cross-border business',
    duration: '85 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu về trade regulations và tax implications',
      'Tuân thủ data protection laws',
      'Quản lý intellectual property rights',
      'Xử lý legal disputes và customer protection'
    ],
    prerequisites: [
      'Kiến thức cơ bản về business law',
      'Hiểu về international trade'
    ],
    exercises: [
      {
        title: 'Compliance Audit',
        description: 'Thực hiện đánh giá compliance cho cross-border operation',
        difficulty: 'Nâng cao',
        procedure: [
          'Review current business practices vs regulations',
          'Identify compliance gaps và risks',
          'Develop compliance checklist và procedures',
          'Create documentation và record-keeping system',
          'Establish monitoring và review process'
        ],
        expectedResults: 'Complete compliance framework và action plan'
      }
    ],
    realWorldApplications: [
      'Tránh được penalties và legal issues',
      'Xây dựng trust với customers và partners',
      'Mở rộng business một cách bền vững',
      'Bảo vệ company reputation'
    ],
    regulations: ['GDPR', 'CCPA', 'VAT regulations', 'Consumer protection laws']
  },
  {
    id: 'analytics-optimization',
    title: 'Phân tích Dữ liệu và Tối ưu hóa',
    description: 'Sử dụng data analytics để tối ưu hóa performance và ROI của cross-border business',
    duration: '105 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Thiết lập comprehensive analytics framework',
      'Track và analyze key performance metrics',
      'Optimize marketing spend và ROI',
      'Predict trends và forecast demand'
    ],
    prerequisites: [
      'Kiến thức về digital marketing analytics',
      'Kỹ năng sử dụng Excel/Google Sheets',
      'Hiểu biết về statistical analysis cơ bản'
    ],
    exercises: [
      {
        title: 'Analytics Dashboard Creation',
        description: 'Xây dựng dashboard theo dõi performance đa thị trường',
        difficulty: 'Nâng cao',
        procedure: [
          'Định nghĩa KPIs và success metrics',
          'Thiết lập tracking cho multiple channels',
          'Tạo automated reports và alerts',
          'Phân tích customer journey across markets',
          'Develop optimization recommendations'
        ],
        expectedResults: 'Real-time dashboard với actionable insights'
      }
    ],
    realWorldApplications: [
      'Tăng ROI 25-40% thông qua data-driven decisions',
      'Optimize marketing budget allocation',
      'Identify high-potential markets',
      'Improve customer lifetime value'
    ],
    tools: ['Google Analytics', 'Facebook Analytics', 'Klaviyo', 'Hotjar', 'Tableau']
  }
];

export default crossBorderEcommerceLessons;
