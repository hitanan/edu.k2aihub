import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface SmartManufacturingLessonType extends BaseLessonData {
  technologyFocus: string;
}

export const smartManufacturingLessons: SmartManufacturingLessonType[] = [
  {
    id: 'industry-4-fundamentals',
    title: 'Nền tảng về Công nghiệp 4.0 và Sản xuất Thông minh',
    description:
      'Giới thiệu về cuộc cách mạng công nghiệp 4.0, các công nghệ nền tảng và cách chúng định hình lại ngành sản xuất hiện đại.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    technologyFocus: 'Tổng quan',
    videoUrl: 'https://www.youtube.com/watch?v=V8atyl7iu0k',
    imageUrl: 'https://i.ytimg.com/vi/V8atyl7iu0k/hqdefault.jpg',
    objectives: [
      'Hiểu rõ khái niệm Công nghiệp 4.0 và nhà máy thông minh.',
      'Nắm được các công nghệ cốt lõi: IoT, AI, Big Data, Cloud Computing.',
      'Nhận biết các ứng dụng của Công nghiệp 4.0 trong sản xuất.',
    ],
    prerequisites: ['Kiến thức cơ bản về quy trình sản xuất.', 'Hiểu biết chung về công nghệ thông tin.'],
    exercises: [
      {
        title: 'Phân tích Case Study Chuyển đổi số',
        description:
          'Nghiên cứu và phân tích một ví dụ thực tế về một công ty đã áp dụng thành công các nguyên tắc của Công nghiệp 4.0.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chọn một công ty nổi tiếng về chuyển đổi số (ví dụ: Siemens, Bosch, VinFast).',
          'Xác định các công nghệ 4.0 mà họ đã triển khai.',
          'Phân tích những lợi ích và thách thức họ đã đối mặt.',
        ],
        expectedResults: 'Một bài trình bày ngắn gọn về cách một công ty thực tế đã triển khai Công nghiệp 4.0.',
      },
    ],
    realWorldApplications: [
      'Nhà máy thông minh tự động hóa cao.',
      'Hệ thống bảo trì dự đoán cho máy móc.',
      'Chuỗi cung ứng được tối ưu hóa bằng dữ liệu thời gian thực.',
    ],
    vietnamContext: {
      title: 'Làn sóng Công nghiệp 4.0 tại Việt Nam',
      content: [
        'Chính phủ Việt Nam đã xác định Công nghiệp 4.0 là một chiến lược trọng tâm để hiện đại hóa nền kinh tế.',
        'Các khu công nghiệp lớn tại Bắc Ninh, Bình Dương, và Đồng Nai đang tiên phong trong việc xây dựng các nhà máy thông minh.',
        'Các doanh nghiệp lớn như VinFast, TH True MILK, Viettel đang đầu tư mạnh mẽ vào tự động hóa và phân tích dữ liệu để nâng cao năng lực cạnh tranh.',
      ],
    },
    careerConnect: {
      name: 'Trần Quốc Dũng',
      title: 'Giám đốc Nhà máy Thông minh',
      company: 'Becamex IDC',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-quoc-dung',
      quote:
        'Công nghiệp 4.0 không chỉ là về công nghệ, mà là về việc thay đổi tư duy. Chúng tôi không chỉ sản xuất sản phẩm, chúng tôi tạo ra một hệ sinh thái sản xuất thông minh và bền vững.',
    },
    quizzes: [
      {
        question:
          'Công nghệ nào được coi là "hệ thần kinh" của nhà máy thông minh, kết nối máy móc và thu thập dữ liệu?',
        options: [
          'Trí tuệ nhân tạo (AI)',
          'Internet vạn vật (IoT)',
          'Điện toán đám mây (Cloud Computing)',
          'In 3D (3D Printing)',
        ],
        correctAnswerIndex: 1,
        explanation:
          'IoT (Internet of Things) bao gồm các cảm biến và thiết bị được kết nối mạng, cho phép thu thập và trao đổi dữ liệu từ mọi ngóc ngách của nhà máy, tương tự như một hệ thần kinh.',
      },
    ],
  },
  {
    id: 'iot-sensors-manufacturing',
    title: 'Cảm biến IoT trong Sản xuất Thông minh',
    description:
      'Tìm hiểu sâu về các loại cảm biến IoT, cách chúng hoạt động và vai trò của chúng trong việc giám sát, điều khiển và tối ưu hóa quy trình sản xuất.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    technologyFocus: 'IoT & Cảm biến',
    videoUrl: 'https://www.youtube.com/watch?v=gY0ikBI1J9c',
    imageUrl: 'https://i.ytimg.com/vi/gY0ikBI1J9c/hqdefault.jpg',
    objectives: [
      'Hiểu rõ các loại cảm biến phổ biến trong nhà máy (nhiệt độ, áp suất, độ rung, quang học).',
      'Học cách thiết kế một hệ thống giám sát dựa trên IoT.',
      'Làm quen với việc xử lý và phân tích dữ liệu từ cảm biến.',
    ],
    prerequisites: ['Kiến thức cơ bản về IoT.', 'Lập trình cơ bản (Python hoặc C++).'],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Giám sát Nhiệt độ cho Lò nung',
        description: 'Xây dựng một mô hình giả lập để giám sát nhiệt độ của một lò nung công nghiệp bằng cảm biến IoT.',
        difficulty: 'Trung bình',
        procedure: [
          'Chọn loại cảm biến nhiệt độ phù hợp (ví dụ: thermocouple).',
          'Thiết kế kiến trúc hệ thống: Cảm biến -> Gateway -> Cloud -> Dashboard.',
          'Viết mã giả (pseudocode) để thu thập, truyền dữ liệu và thiết lập cảnh báo khi nhiệt độ vượt ngưỡng.',
        ],
        expectedResults: 'Một sơ đồ kiến trúc hệ thống hoàn chỉnh và mã giả mô tả logic hoạt động.',
      },
    ],
    realWorldApplications: [
      'Giám sát nhiệt độ trong lò nung thép.',
      'Theo dõi độ rung của máy CNC để bảo trì dự đoán.',
      'Đo lường áp suất trong hệ thống thủy lực.',
      'Kiểm tra chất lượng sản phẩm bằng camera và cảm biến quang học.',
    ],
    vietnamContext: {
      title: 'Ứng dụng IoT trong Nông nghiệp và Thủy sản Việt Nam',
      content: [
        'Ngoài nhà máy, IoT đang được ứng dụng mạnh mẽ trong nông nghiệp công nghệ cao tại Việt Nam.',
        'Các trang trại ở Đà Lạt sử dụng cảm biến độ ẩm và nhiệt độ để tự động hóa hệ thống tưới tiêu.',
        'Các đầm nuôi tôm ở Đồng bằng sông Cửu Long dùng cảm biến để giám sát chất lượng nước (pH, oxy hòa tan), giảm thiểu rủi ro và tăng năng suất.',
      ],
    },
    careerConnect: {
      name: 'Võ Thanh Phong',
      title: 'Kỹ sư Tự động hóa',
      company: 'Schneider Electric Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=vo-thanh-phong',
      quote:
        'Dữ liệu từ cảm biến là "dầu mỏ" của thế kỷ 21. Công việc của chúng tôi là xây dựng những "giàn khoan" hiệu quả để khai thác và biến dữ liệu đó thành giá trị cho doanh nghiệp.',
    },
    quizzes: [
      {
        question:
          'Việc sử dụng cảm biến độ rung để phân tích và dự đoán khi nào một máy móc có khả năng hỏng được gọi là gì?',
        options: [
          'Bảo trì phản ứng (Reactive Maintenance)',
          'Bảo trì phòng ngừa (Preventive Maintenance)',
          'Bảo trì dự đoán (Predictive Maintenance)',
          'Bảo trì tự động (Automated Maintenance)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Bảo trì dự đoán (Predictive Maintenance) là phương pháp sử dụng dữ liệu thời gian thực từ các cảm biến để dự báo các sự cố trước khi chúng xảy ra, giúp tối ưu hóa lịch trình bảo trì và giảm thời gian chết của máy.',
      },
    ],
  },
  {
    id: 'industrial-automation-plc',
    title: 'Tự động hóa Công nghiệp với PLC',
    description: 'Lập trình PLC và thiết kế hệ thống tự động hóa cho dây chuyền sản xuất',
    duration: '150 phút',
    difficulty: 'Trung bình',
    technologyFocus: 'Tự động hóa & PLC',
    videoUrl: 'https://www.youtube.com/watch?v=NeDav6lRLCo', // PLC Programming Tutorial - RealPars
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
    vietnamContext: {
      title: 'Tự động hóa trong Ngành sản xuất Việt Nam',
      content: [
        'Nhiều nhà máy tại Việt Nam đang áp dụng tự động hóa để nâng cao năng suất và chất lượng sản phẩm.',
        'Các hệ thống PLC được sử dụng rộng rãi trong ngành chế biến thực phẩm, đồ uống, và sản xuất linh kiện điện tử.',
        'Việt Nam đang trở thành trung tâm sản xuất của nhiều tập đoàn đa quốc gia nhờ vào lực lượng lao động dồi dào và chi phí cạnh tranh.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Văn A',
      title: 'Kỹ sư Tự động hóa',
      company: 'Siemens Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-a',
      quote:
        'Tự động hóa không chỉ là xu hướng, mà là điều kiện tiên quyết để tồn tại và phát triển trong ngành sản xuất hiện đại.',
    },
    quizzes: [
      {
        question: 'PLC trong tự động hóa công nghiệp thường được lập trình bằng ngôn ngữ nào?',
        options: ['Ladder Logic', 'C++', 'Python', 'Java'],
        correctAnswerIndex: 0,
        explanation:
          'Ladder Logic là ngôn ngữ lập trình phổ biến nhất được sử dụng để lập trình PLC trong tự động hóa công nghiệp.',
      },
    ],
  },
  {
    id: 'predictive-maintenance-ai',
    title: 'Bảo trì Dự báo với AI/ML',
    description: 'Ứng dụng trí tuệ nhân tạo trong bảo trì dự báo máy móc công nghiệp',
    duration: '180 phút',
    difficulty: 'Khó',
    technologyFocus: 'AI/ML & Bảo trì',
    videoUrl: 'https://www.youtube.com/watch?v=ULE78ME1ckQ', // Predictive Maintenance with AI - IBM
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
    vietnamContext: {
      title: 'Trí tuệ nhân tạo và Bảo trì dự báo tại Việt Nam',
      content: [
        'AI và machine learning đang được áp dụng trong nhiều lĩnh vực tại Việt Nam, từ sản xuất, giao thông vận tải đến y tế.',
        'Nhiều doanh nghiệp lớn đã bắt đầu triển khai các giải pháp bảo trì dự báo để giảm thiểu chi phí bảo trì và tăng độ tin cậy của thiết bị.',
        'Việt Nam có tiềm năng lớn để phát triển các ứng dụng AI trong công nghiệp nhờ vào nguồn dữ liệu phong phú và lực lượng lao động trẻ, năng động.',
      ],
    },
    careerConnect: {
      name: 'Lê Thị Hoa',
      title: 'Chuyên gia Dữ liệu',
      company: 'FPT Software',
      imageUrl: 'https://i.pravatar.cc/150?u=le-thi-hoa',
      quote:
        'Dữ liệu là tài sản quý giá nhất của doanh nghiệp trong kỷ nguyên số. Chúng tôi giúp doanh nghiệp khai thác giá trị từ dữ liệu để đưa ra những quyết định thông minh và kịp thời.',
    },
    quizzes: [
      {
        question:
          'Mô hình nào sau đây thường được sử dụng trong bảo trì dự báo để ước lượng thời gian còn lại trước khi một thiết bị hỏng hóc?',
        options: ['Classification model', 'Regression model', 'Clustering model', 'Anomaly detection model'],
        correctAnswerIndex: 1,
        explanation:
          'Mô hình hồi quy (Regression model) được sử dụng để ước lượng giá trị liên tục, trong trường hợp này là thời gian còn lại trước khi thiết bị hỏng hóc.',
      },
    ],
  },
  {
    id: 'digital-twin-technology',
    title: 'Công nghệ Digital Twin',
    description: 'Xây dựng và ứng dụng Digital Twin trong sản xuất thông minh',
    duration: '135 phút',
    difficulty: 'Khó',
    technologyFocus: 'Digital Twin & Mô phỏng',
    videoUrl: 'https://www.youtube.com/watch?v=RvvmJHyR1zg', // Digital Twin Technology Explained - Siemens
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
    vietnamContext: {
      title: 'Digital Twin và Cách mạng 4.0 tại Việt Nam',
      content: [
        'Digital Twin là một trong những công nghệ cốt lõi của Cách mạng công nghiệp 4.0, cho phép mô phỏng và tối ưu hóa quy trình sản xuất trong thời gian thực.',
        'Nhiều doanh nghiệp tại Việt Nam đã bắt đầu áp dụng Digital Twin để nâng cao hiệu quả sản xuất và giảm thiểu chi phí.',
        'Công nghệ này đặc biệt hữu ích trong các ngành công nghiệp yêu cầu độ chính xác cao và quy trình sản xuất phức tạp như ô tô, hàng không, và điện tử.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Văn B',
      title: 'Chuyên gia Digital Twin',
      company: 'Siemens Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-b',
      quote:
        'Digital Twin không chỉ là một công nghệ, mà là một cuộc cách mạng trong cách chúng ta nghĩ về thiết kế, sản xuất và bảo trì.',
    },
    quizzes: [
      {
        question:
          'Khái niệm Digital Twin đề cập đến việc tạo ra một bản sao ảo của một đối tượng vật lý trong môi trường số. Đúng hay Sai?',
        options: ['Đúng', 'Sai'],
        correctAnswerIndex: 0,
        explanation:
          'Đúng. Digital Twin là một bản sao ảo của một đối tượng vật lý, cho phép theo dõi, phân tích và tối ưu hóa đối tượng đó trong thời gian thực.',
      },
    ],
  },
  {
    id: 'quality-control-computer-vision',
    title: 'Kiểm soát Chất lượng với Computer Vision',
    description: 'Ứng dụng computer vision và AI trong kiểm tra chất lượng sản phẩm',
    duration: '160 phút',
    difficulty: 'Trung bình',
    technologyFocus: 'Computer Vision & QC',
    videoUrl: 'https://www.youtube.com/watch?v=hOXBtjcd-eY', // Computer Vision in Manufacturing - Cognex
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
    vietnamContext: {
      title: 'Computer Vision và Tự động hóa kiểm tra chất lượng tại Việt Nam',
      content: [
        'Computer Vision đang ngày càng được ưa chuộng trong ngành sản xuất Việt Nam nhờ vào khả năng tự động hóa và nâng cao độ chính xác trong kiểm tra chất lượng.',
        'Nhiều nhà máy đã đầu tư vào hệ thống camera và phần mềm phân tích hình ảnh để phát hiện lỗi sản phẩm trong quá trình sản xuất.',
        'Công nghệ này giúp giảm thiểu nhân công, tăng tốc độ sản xuất và đảm bảo chất lượng sản phẩm đồng nhất.',
      ],
    },
    careerConnect: {
      name: 'Trần Văn C',
      title: 'Kỹ sư Computer Vision',
      company: 'Cognex Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-van-c',
      quote:
        'Computer Vision là tương lai của sản xuất thông minh. Nó cho phép máy móc "nhìn thấy" và "hiểu" thế giới xung quanh, từ đó đưa ra những quyết định chính xác và nhanh chóng.',
    },
    quizzes: [
      {
        question:
          'Trong kiểm soát chất lượng, việc sử dụng camera và phần mềm phân tích hình ảnh để phát hiện lỗi sản phẩm được gọi là gì?',
        options: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Analytics'],
        correctAnswerIndex: 2,
        explanation:
          'Computer Vision là công nghệ cho phép máy tính và hệ thống tự động "nhìn thấy" và "hiểu" hình ảnh từ camera, từ đó phát hiện và phân loại lỗi sản phẩm.',
      },
    ],
  },
  {
    id: 'smart-supply-chain-management',
    title: 'Quản lý Chuỗi Cung ứng Thông minh',
    description: 'Tối ưu hóa chuỗi cung ứng với AI, IoT và blockchain technology',
    duration: '140 phút',
    difficulty: 'Trung bình',
    technologyFocus: 'Chuỗi cung ứng & AI',
    videoUrl: 'https://www.youtube.com/watch?v=oS8XJZ_oAQU', // Smart Supply Chain Management - SAP
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
    vietnamContext: {
      title: 'Cách mạng 4.0 và Tương lai của Chuỗi cung ứng tại Việt Nam',
      content: [
        'Việt Nam đang trong quá trình chuyển mình mạnh mẽ để trở thành trung tâm sản xuất và logistics của khu vực Đông Nam Á.',
        'Nhiều doanh nghiệp đã bắt đầu áp dụng AI và IoT để tối ưu hóa quy trình sản xuất và quản lý chuỗi cung ứng.',
        'Blockchain cũng đang được nghiên cứu và triển khai thử nghiệm trong việc truy xuất nguồn gốc sản phẩm và quản lý hợp đồng thông minh.',
      ],
    },
    careerConnect: {
      name: 'Phạm Minh Tuấn',
      title: 'Giám đốc Chuỗi cung ứng',
      company: 'Thế Giới Di Động',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-minh-tuan',
      quote:
        'Chuỗi cung ứng thông minh không chỉ giúp giảm chi phí, mà còn tăng cường khả năng phản ứng nhanh với thị trường và nâng cao trải nghiệm khách hàng.',
    },
    quizzes: [
      {
        question:
          'Trong quản lý chuỗi cung ứng, thuật ngữ nào được sử dụng để chỉ khả năng dự đoán chính xác nhu cầu của khách hàng trong tương lai?',
        options: ['Demand forecasting', 'Supply planning', 'Inventory management', 'Logistics optimization'],
        correctAnswerIndex: 0,
        explanation:
          'Demand forecasting là quá trình ước lượng nhu cầu của khách hàng trong tương lai dựa trên các dữ liệu lịch sử và các yếu tố tác động bên ngoài.',
      },
    ],
  },
  {
    id: 'cybersecurity-smart-factory',
    title: 'An ninh Mạng cho Nhà máy Thông minh',
    description: 'Bảo mật hệ thống IIoT và infrastructure trong smart manufacturing',
    duration: '120 phút',
    difficulty: 'Trung bình',
    technologyFocus: 'An ninh mạng & IIoT',
    videoUrl: 'https://www.youtube.com/watch?v=LqubiRdJRSQ', // Industrial Cybersecurity Basics - Rockwell Automation
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
    vietnamContext: {
      title: 'An ninh mạng trong kỷ nguyên số tại Việt Nam',
      content: [
        'Với sự phát triển nhanh chóng của công nghệ thông tin và truyền thông, an ninh mạng đang trở thành một trong những ưu tiên hàng đầu của các doanh nghiệp tại Việt Nam.',
        'Nhiều vụ tấn công mạng đã xảy ra, gây thiệt hại lớn về tài chính và uy tín cho các tổ chức.',
        'Chính phủ và các doanh nghiệp đang nỗ lực tăng cường bảo mật mạng lưới IIoT và hạ tầng công nghệ thông tin để bảo vệ dữ liệu và duy trì hoạt động sản xuất kinh doanh.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Hữu Lợi',
      title: 'Chuyên gia An ninh mạng',
      company: 'Bkav',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-huu-loi',
      quote:
        'An ninh mạng không chỉ là một bộ phận của công nghệ thông tin, mà là một phần thiết yếu trong chiến lược phát triển bền vững của doanh nghiệp.',
    },
    quizzes: [
      {
        question:
          'Trong bối cảnh IIoT, việc phân đoạn mạng (network segmentation) có tác dụng gì trong việc tăng cường an ninh mạng?',
        options: [
          'Giảm băng thông mạng',
          'Tăng cường khả năng giám sát',
          'Giảm thiểu diện tích tấn công',
          'Tất cả các đáp án trên',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Phân đoạn mạng giúp giới hạn phạm vi tấn công và giảm thiểu rủi ro bị xâm nhập, từ đó tăng cường an ninh mạng cho hệ thống IIoT.',
      },
    ],
  },
];
