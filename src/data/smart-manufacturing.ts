import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface SmartManufacturingLessonType extends BaseLessonData {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  objectives: Array<string>;
  prerequisites: Array<string>;
  exercises: Array<{
    title: string;
    description: string;
    difficulty: string;
    procedure: Array<string>;
    expectedResults: string;
  }>;
  realWorldApplications: Array<string>;
}

export const smartManufacturingLessons: SmartManufacturingLessonType[] = [
  {
    id: 'industry-4-fundamentals',
    title: 'Cơ bản về Công nghiệp 4.0',
    description: 'Giới thiệu về cách mạng công nghiệp 4.0 và những công nghệ nền tảng',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=EPm9xqhpqSc', // What is Industry 4.0? - By Design
    objectives: [
      'Hiểu khái niệm Công nghiệp 4.0',
      'Nắm được các công nghệ cốt lõi',
      'Ứng dụng trong sản xuất thông minh',
    ],
    prerequisites: ['Kiến thức cơ bản về sản xuất', 'Hiểu biết về công nghệ thông tin'],
    exercises: [
      {
        title: 'Nghiên cứu case study',
        description: 'Phân tích ví dụ thực tế về chuyển đổi số',
        difficulty: 'Cơ bản',
        procedure: [
          'Chọn một công ty đã triển khai Industry 4.0',
          'Phân tích các công nghệ được sử dụng',
          'Đánh giá hiệu quả và thách thức',
        ],
        expectedResults: 'Hiểu được cách thức triển khai thực tế của Công nghiệp 4.0',
      },
    ],
    realWorldApplications: [
      'Nhà máy thông minh với IoT sensors',
      'Hệ thống sản xuất tự động hóa',
      'Predictive maintenance cho máy móc',
    ],
  },
  {
    id: 'iot-sensors-manufacturing',
    title: 'IoT Sensors trong Sản xuất Thông minh',
    description: 'Tìm hiểu về hệ thống cảm biến IoT và ứng dụng trong giám sát sản xuất',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=6-vhJqF6MDU', // IoT in Manufacturing - Explained
    objectives: [
      'Hiểu các loại sensor trong nhà máy',
      'Thiết kế hệ thống giám sát IoT',
      'Xử lý và phân tích dữ liệu cảm biến',
    ],
    prerequisites: ['Kiến thức cơ bản về IoT', 'Lập trình cơ bản', 'Hiểu biết về mạng'],
    exercises: [
      {
        title: 'Thiết kế hệ thống giám sát nhiệt độ',
        description: 'Xây dựng mô hình giám sát nhiệt độ cho dây chuyền sản xuất',
        difficulty: 'Trung bình',
        procedure: [
          'Chọn sensor nhiệt độ phù hợp',
          'Thiết kế mạch kết nối với microcontroller',
          'Lập trình thu thập và truyền dữ liệu',
          'Tạo dashboard hiển thị thời gian thực',
          'Thiết lập hệ thống cảnh báo',
        ],
        expectedResults: 'Hệ thống giám sát nhiệt độ hoạt động và hiển thị dữ liệu trên dashboard',
      },
      {
        title: 'Phân tích dữ liệu từ cảm biến rung',
        description: 'Sử dụng dữ liệu rung để dự đoán lỗi máy móc',
        difficulty: 'Khó',
        procedure: [
          'Thu thập dữ liệu rung từ máy móc',
          'Tiền xử lý và làm sạch dữ liệu',
          'Áp dụng thuật toán machine learning',
          'Xây dựng mô hình dự báo lỗi',
        ],
        expectedResults: 'Mô hình có thể dự báo lỗi máy móc với độ chính xác > 85%',
      },
    ],
    realWorldApplications: [
      'Giám sát nhiệt độ trong lò nung',
      'Theo dõi rung động của máy CNC',
      'Đo áp suất trong hệ thống thủy lực',
      'Giám sát chất lượng không khí nhà máy',
    ],
  },
  {
    id: 'industrial-automation-plc',
    title: 'Tự động hóa Công nghiệp với PLC',
    description: 'Lập trình PLC và thiết kế hệ thống tự động hóa cho dây chuyền sản xuất',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=RrqJKVdDXUA', // PLC Programming Tutorial - RealPars
    objectives: [
      'Hiểu nguyên lý hoạt động của PLC',
      'Lập trình PLC với Ladder Logic',
      'Thiết kế hệ thống tự động hóa',
      'Tích hợp PLC với HMI',
    ],
    prerequisites: ['Điện tử cơ bản', 'Logic số', 'Kiến thức về relay và motor'],
    exercises: [
      {
        title: 'Lập trình điều khiển băng tải',
        description: 'Thiết kế chương trình PLC điều khiển băng tải tự động',
        difficulty: 'Trung bình',
        procedure: [
          'Phân tích yêu cầu hệ thống băng tải',
          'Vẽ sơ đồ ladder logic',
          'Lập trình PLC với timer và counter',
          'Test và debug chương trình',
          'Tạo giao diện HMI đơn giản',
        ],
        expectedResults: 'Băng tải hoạt động theo chu kỳ tự động với điều khiển start/stop',
      },
      {
        title: 'Hệ thống phân loại sản phẩm',
        description: 'Xây dựng hệ thống phân loại tự động dựa trên sensor',
        difficulty: 'Khó',
        procedure: [
          'Thiết kế mạch sensor màu sắc',
          'Lập trình logic phân loại',
          'Điều khiển actuator để phân loại',
          'Tích hợp với database để lưu số liệu',
        ],
        expectedResults: 'Hệ thống phân loại sản phẩm với độ chính xác > 95%',
      },
    ],
    realWorldApplications: [
      'Điều khiển robot trong dây chuyền lắp ráp',
      'Hệ thống phân loại và đóng gói tự động',
      'Điều khiển nhiệt độ lò nung',
      'Quản lý kho hàng tự động với AGV',
    ],
  },
  {
    id: 'predictive-maintenance-ai',
    title: 'Bảo trì Dự báo với AI/ML',
    description: 'Ứng dụng trí tuệ nhân tạo trong bảo trì dự báo máy móc công nghiệp',
    duration: '180 phút',
    difficulty: 'Khó',
    videoUrl: 'https://www.youtube.com/watch?v=Q7Q3sZSeVXU', // Predictive Maintenance with AI - IBM
    objectives: [
      'Hiểu nguyên lý bảo trì dự báo',
      'Áp dụng machine learning cho dự báo lỗi',
      'Xây dựng mô hình RUL (Remaining Useful Life)',
      'Tích hợp AI vào hệ thống quản lý bảo trì',
    ],
    prerequisites: ['Machine Learning cơ bản', 'Python programming', 'Thống kê và xác suất'],
    exercises: [
      {
        title: 'Xây dựng mô hình dự báo lỗi bearing',
        description: 'Sử dụng dữ liệu rung và nhiệt độ để dự báo lỗi vòng bi',
        difficulty: 'Khó',
        procedure: [
          'Tiền xử lý dữ liệu từ sensors',
          'Feature engineering từ tín hiệu rung',
          'Huấn luyện mô hình Random Forest',
          'Đánh giá và tối ưu mô hình',
          'Deploy mô hình vào production',
        ],
        expectedResults: 'Mô hình dự báo lỗi bearing với F1-score > 0.9',
      },
      {
        title: 'Hệ thống cảnh báo thông minh',
        description: 'Phát triển hệ thống cảnh báo dựa trên AI cho nhiều loại máy',
        difficulty: 'Khó',
        procedure: [
          'Tích hợp dữ liệu từ nhiều nguồn sensor',
          'Xây dựng ensemble model',
          'Thiết kế hệ thống alert tự động',
          'Tạo dashboard theo dõi thời gian thực',
        ],
        expectedResults: 'Hệ thống cảnh báo proactive giảm downtime > 30%',
      },
    ],
    realWorldApplications: [
      'Dự báo lỗi motor trong nhà máy thép',
      'Bảo trì dự báo turbine gió',
      'Giám sát sức khỏe máy CNC',
      'Quản lý bảo trì tàu và máy bay',
    ],
  },
  {
    id: 'digital-twin-technology',
    title: 'Công nghệ Digital Twin',
    description: 'Xây dựng và ứng dụng Digital Twin trong sản xuất thông minh',
    duration: '135 phút',
    difficulty: 'Khó',
    videoUrl: 'https://www.youtube.com/watch?v=yQOEWEqGSzM', // Digital Twin Technology Explained - Siemens
    objectives: [
      'Hiểu khái niệm Digital Twin',
      'Xây dựng mô hình Digital Twin',
      'Tích hợp dữ liệu thời gian thực',
      'Ứng dụng trong tối ưu hóa sản xuất',
    ],
    prerequisites: ['Modeling và simulation', 'IoT data integration', '3D modeling cơ bản'],
    exercises: [
      {
        title: 'Xây dựng Digital Twin cho máy CNC',
        description: 'Tạo mô hình Digital Twin của máy CNC với dữ liệu thời gian thực',
        difficulty: 'Khó',
        procedure: [
          'Tạo mô hình 3D máy CNC',
          'Kết nối với dữ liệu sensor thực tế',
          'Lập trình simulation engine',
          'Tích hợp predictive analytics',
          'Tạo giao diện visualization',
        ],
        expectedResults: 'Digital Twin hiển thị trạng thái máy thời gian thực và dự báo bảo trì',
      },
      {
        title: 'Tối ưu hóa dây chuyền với Digital Twin',
        description: 'Sử dụng Digital Twin để tối ưu hóa throughput dây chuyền',
        difficulty: 'Khó',
        procedure: [
          'Mô hình hóa toàn bộ dây chuyền sản xuất',
          'Chạy simulation với các scenario khác nhau',
          'Áp dụng optimization algorithms',
          'Validate kết quả với dữ liệu thực tế',
        ],
        expectedResults: 'Tăng hiệu suất dây chuyền 15-20% thông qua tối ưu hóa',
      },
    ],
    realWorldApplications: [
      'Digital Twin nhà máy ô tô',
      'Mô phỏng dây chuyền sản xuất chip',
      'Tối ưu hóa logistics warehouse',
      'Thiết kế và test sản phẩm mới',
    ],
  },
  {
    id: 'quality-control-computer-vision',
    title: 'Kiểm soát Chất lượng với Computer Vision',
    description: 'Ứng dụng computer vision và AI trong kiểm tra chất lượng sản phẩm',
    duration: '160 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=lhbJYC90lxw', // Computer Vision in Manufacturing - Cognex
    objectives: [
      'Hiểu nguyên lý computer vision trong QC',
      'Xây dựng hệ thống phát hiện lỗi tự động',
      'Áp dụng deep learning cho image classification',
      'Tích hợp với hệ thống sản xuất',
    ],
    prerequisites: ['Computer vision cơ bản', 'Python và OpenCV', 'Deep learning fundamentals'],
    exercises: [
      {
        title: 'Hệ thống phát hiện lỗi bề mặt',
        description: 'Xây dựng AI system phát hiện scratches và dents trên sản phẩm kim loại',
        difficulty: 'Trung bình',
        procedure: [
          'Thu thập và label dataset ảnh lỗi',
          'Tiền xử lý ảnh và augmentation',
          'Huấn luyện CNN model cho classification',
          'Optimize model cho real-time inference',
          'Tích hợp với camera và conveyor belt',
        ],
        expectedResults: 'Hệ thống phát hiện lỗi với accuracy > 96% và tốc độ > 30 FPS',
      },
      {
        title: 'Đo kích thước sản phẩm tự động',
        description: 'Phát triển hệ thống đo kích thước chính xác bằng computer vision',
        difficulty: 'Trung bình',
        procedure: [
          'Thiết lập hệ thống camera và lighting',
          'Calibration camera và xác định tỷ lệ',
          'Áp dụng edge detection và contour analysis',
          'Tính toán kích thước và so sánh với spec',
        ],
        expectedResults: 'Đo kích thước với độ chính xác ±0.1mm cho sản phẩm <100mm',
      },
    ],
    realWorldApplications: [
      'Kiểm tra chất lượng linh kiện điện tử',
      'Phân loại sản phẩm nông nghiệp',
      'Inspection welding seams trong ô tô',
      'Kiểm tra in ấn và packaging',
    ],
  },
  {
    id: 'smart-supply-chain-management',
    title: 'Quản lý Chuỗi Cung ứng Thông minh',
    description: 'Tối ưu hóa chuỗi cung ứng với AI, IoT và blockchain technology',
    duration: '140 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=0z_jOKr-rqk', // Smart Supply Chain Management - SAP
    objectives: [
      'Hiểu supply chain 4.0 concepts',
      'Áp dụng AI trong demand forecasting',
      'Sử dụng blockchain cho traceability',
      'Tối ưu hóa inventory và logistics',
    ],
    prerequisites: ['Supply chain cơ bản', 'Data analytics', 'Blockchain fundamentals'],
    exercises: [
      {
        title: 'Hệ thống dự báo nhu cầu với AI',
        description: 'Xây dựng model dự báo nhu cầu sử dụng historical data và external factors',
        difficulty: 'Trung bình',
        procedure: [
          'Thu thập dữ liệu bán hàng và external factors',
          'Feature engineering và data cleaning',
          'Thử nghiệm nhiều algorithms (ARIMA, LSTM, etc.)',
          'Validate model và measure accuracy',
          'Deploy model cho production use',
        ],
        expectedResults: 'Model dự báo nhu cầu với MAPE < 15% cho 3 tháng tới',
      },
      {
        title: 'Blockchain traceability system',
        description: 'Phát triển hệ thống truy xuất nguồn gốc sản phẩm với blockchain',
        difficulty: 'Khó',
        procedure: [
          'Thiết kế smart contract cho product tracking',
          'Tích hợp với IoT sensors cho data collection',
          'Xây dựng web interface cho traceability',
          'Test với supply chain scenario thực tế',
        ],
        expectedResults: 'Hệ thống truy xuất nguồn gốc end-to-end với blockchain',
      },
    ],
    realWorldApplications: [
      'Quản lý chuỗi cung ứng thực phẩm',
      'Traceability trong dược phẩm',
      'Inventory optimization cho retail',
      'Logistics optimization cho e-commerce',
    ],
  },
  {
    id: 'cybersecurity-smart-factory',
    title: 'An ninh Mạng cho Nhà máy Thông minh',
    description: 'Bảo mật hệ thống IIoT và infrastructure trong smart manufacturing',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=sMnz1dDeIGQ', // Industrial Cybersecurity Basics - Rockwell Automation
    objectives: [
      'Hiểu threat landscape trong IIoT',
      'Thiết kế security architecture',
      'Implement network segmentation',
      'Monitoring và incident response',
    ],
    prerequisites: ['Network security cơ bản', 'IIoT protocols', 'Risk assessment'],
    exercises: [
      {
        title: 'Security assessment cho IIoT network',
        description: 'Thực hiện đánh giá bảo mật cho mạng IIoT nhà máy',
        difficulty: 'Trung bình',
        procedure: [
          'Inventory tất cả IoT devices và protocols',
          'Vulnerability scanning và penetration testing',
          'Risk assessment và threat modeling',
          'Đề xuất security controls và mitigation',
        ],
        expectedResults: 'Báo cáo đánh giá bảo mật toàn diện với action plan',
      },
      {
        title: 'Triển khai network segmentation',
        description: 'Thiết kế và cấu hình network segmentation cho OT/IT networks',
        difficulty: 'Trung bình',
        procedure: [
          'Thiết kế network topology với security zones',
          'Cấu hình firewall rules và access controls',
          'Implement monitoring và logging',
          'Test security controls effectiveness',
        ],
        expectedResults: 'Network segmentation giảm attack surface > 80%',
      },
    ],
    realWorldApplications: [
      'Bảo mật SCADA systems',
      'ICS security monitoring',
      'Secure remote access cho maintenance',
      'Incident response cho cyber attacks',
    ],
  },
];
