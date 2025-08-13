// Smart Manufacturing & Industry 4.0 Module
export interface SmartManufacturingLessonType {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  videoUrl?: string;
  imageUrl?: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Array<{
    title: string;
    description: string;
    difficulty: string;
    materials?: string[];
    procedure?: string[];
    expectedResults?: string;
    solution?: string;
  }>;
  realWorldApplications: string[];
  caseStudies?: Array<{
    title: string;
    organization: string;
    problem: string;
    solution: string;
    impact: string;
    innovations: string[];
  }>;
}

export const smartManufacturingLessons: SmartManufacturingLessonType[] = [
  {
    id: 'industry-4-fundamentals',
    title: 'Nền Tảng Công Nghiệp 4.0',
    description: 'Hiểu về cuộc cách mạng công nghiệp thứ 4 và cơ hội cho Việt Nam',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Nắm vững khái niệm và đặc điểm Công nghiệp 4.0',
      'Phân tích cơ hội chuyển dịch sản xuất từ Trung Quốc sang Việt Nam',
      'Hiểu về các công nghệ cốt lõi: IoT, AI, Robotics, Big Data'
    ],
    prerequisites: [
      'Kiến thức cơ bản về sản xuất',
      'Hiểu biết về công nghệ thông tin'
    ],
    exercises: [
      {
        title: 'Đánh Giá Mức Độ Sẵn Sàng Công nghiệp 4.0',
        description: 'Phân tích một nhà máy hiện tại và đề xuất roadmap chuyển đổi',
        difficulty: 'Cơ bản',
        procedure: [
          'Khảo sát quy trình sản xuất hiện tại',
          'Xác định các điểm có thể tự động hóa',
          'Lập kế hoạch chuyển đổi từng giai đoạn',
          'Tính toán ROI cho từng giai đoạn'
        ]
      }
    ],
    realWorldApplications: [
      'Chuyển đổi số nhà máy',
      'Tối ưu hóa quy trình sản xuất',
      'Nâng cao chất lượng sản phẩm'
    ],
    caseStudies: [
      {
        title: 'Chuyển Đổi Số Nhà Máy Dệt May',
        organization: 'Tập đoàn Dệt May Việt Nam',
        problem: 'Cạnh tranh gay gắt từ các nước có chi phí lao động thấp hơn',
        solution: 'Tự động hóa dây chuyền, AI quality control, IoT monitoring',
        impact: 'Tăng 40% năng suất, giảm 25% lỗi sản phẩm, tiết kiệm 30% chi phí',
        innovations: ['Automated cutting', 'AI defect detection', 'Predictive maintenance']
      }
    ]
  },
  {
    id: 'factory-automation-systems',
    title: 'Hệ Thống Tự Động Hóa Nhà Máy',
    description: 'Thiết kế và triển khai hệ thống tự động hóa cho sản xuất',
    duration: '120 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Thiết kế hệ thống PLC và SCADA',
      'Lập trình robot công nghiệp',
      'Tích hợp các hệ thống tự động hóa'
    ],
    prerequisites: [
      'Kiến thức điện tử cơ bản',
      'Lập trình cơ bản',
      'Hiểu biết về cơ khí'
    ],
    exercises: [
      {
        title: 'Thiết Kế Dây Chuyền Tự Động',
        description: 'Lập trình và mô phỏng dây chuyền sản xuất tự động',
        difficulty: 'Trung bình',
        materials: ['PLC Simulator', 'Robot simulation software', 'SCADA platform'],
        procedure: [
          'Phân tích quy trình sản xuất',
          'Thiết kế sơ đồ điều khiển',
          'Lập trình PLC và HMI',
          'Mô phỏng và test hệ thống'
        ],
        expectedResults: 'Dây chuyền tự động hoạt động ổn định với hiệu suất cao'
      }
    ],
    realWorldApplications: [
      'Tự động hóa lắp ráp',
      'Kiểm tra chất lượng tự động',
      'Quản lý kho thông minh'
    ]
  },
  {
    id: 'predictive-maintenance',
    title: 'Bảo Trì Dự Đoán Thông Minh',
    description: 'Ứng dụng AI và IoT trong bảo trì thiết bị sản xuất',
    duration: '110 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Phát triển hệ thống giám sát thiết bị real-time',
      'Áp dụng machine learning để dự đoán hỏng hóc',
      'Tối ưu hóa lịch bảo trì và chi phí'
    ],
    prerequisites: [
      'Machine Learning cơ bản',
      'IoT và sensor technology',
      'Kiến thức về thiết bị công nghiệp'
    ],
    exercises: [
      {
        title: 'Hệ Thống Dự Đoán Hỏng Hóc Máy',
        description: 'Xây dựng AI model để dự đoán khi nào máy cần bảo trì',
        difficulty: 'Nâng cao',
        procedure: [
          'Thu thập dữ liệu từ sensors (vibration, temperature, pressure)',
          'Tiền xử lý và feature engineering',
          'Training model ML để detect anomalies',
          'Deploy model và tạo alert system'
        ]
      }
    ],
    realWorldApplications: [
      'Giảm downtime không kế hoạch',
      'Tối ưu chi phí bảo trì',
      'Nâng cao tuổi thọ thiết bị'
    ]
  },
  {
    id: 'supply-chain-optimization',
    title: 'Tối Ưu Chuỗi Cung Ứng',
    description: 'Ứng dụng AI và blockchain trong quản lý chuỗi cung ứng',
    duration: '100 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Thiết kế chuỗi cung ứng thông minh',
      'Áp dụng blockchain cho truy xuất nguồn gốc',
      'Tối ưu hóa inventory và logistics'
    ],
    prerequisites: [
      'Hiểu biết về supply chain',
      'Blockchain cơ bản',
      'Data analytics'
    ],
    exercises: [
      {
        title: 'Hệ Thống Truy Xuất Blockchain',
        description: 'Xây dựng hệ thống truy xuất sản phẩm từ nguyên liệu đến người tiêu dùng',
        difficulty: 'Trung bình',
        procedure: [
          'Thiết kế smart contract cho supply chain',
          'Tạo QR code cho mỗi sản phẩm',
          'Develop mobile app cho scan và verify',
          'Tích hợp với hệ thống ERP'
        ]
      }
    ],
    realWorldApplications: [
      'Truy xuất nguồn gốc sản phẩm',
      'Chống hàng giả',
      'Tối ưu hóa kho bãi'
    ]
  },
  {
    id: 'quality-control-ai',
    title: 'Kiểm Soát Chất Lượng Bằng AI',
    description: 'Computer Vision và AI trong kiểm tra chất lượng sản phẩm',
    duration: '115 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Phát triển hệ thống vision inspection',
      'Training AI model để detect defects',
      'Tích hợp AI vào dây chuyền sản xuất'
    ],
    prerequisites: [
      'Computer Vision cơ bản',
      'Deep Learning',
      'Xử lý ảnh'
    ],
    exercises: [
      {
        title: 'AI Defect Detection System',
        description: 'Xây dựng hệ thống AI để tự động phát hiện lỗi sản phẩm',
        difficulty: 'Nâng cao',
        procedure: [
          'Thu thập và label dataset ảnh sản phẩm',
          'Training CNN model cho classification',
          'Optimize model để chạy real-time',
          'Deploy trên edge device và test'
        ]
      }
    ],
    realWorldApplications: [
      'Kiểm tra chất lượng tự động',
      'Giảm lỗi sản phẩm',
      'Tăng tốc độ kiểm tra'
    ]
  }
];

export default smartManufacturingLessons;
