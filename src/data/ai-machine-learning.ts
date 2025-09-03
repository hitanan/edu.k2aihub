import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

interface VietnamContext {
  title: string;
  content: string[];
}

interface CareerConnect {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  quote: string;
}

interface Quiz {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}
export interface AIMachineLearningLessonType extends BaseLessonData {
  algorithmTypes?: string[];
  mlFrameworks?: string[];
  applications?: string[];
  programmingSkills?: string[];
  mathConcepts?: string[];
  vietnamContext: VietnamContext;
  careerConnect: CareerConnect;
  quizzes: Quiz[];
}

export const aiMachineLearningLessons: AIMachineLearningLessonType[] = [
  {
    id: 'ai-ml-fundamentals',
    title: 'Nền Tảng AI Và Machine Learning',
    description:
      'Hiểu các khái niệm cơ bản của Trí tuệ nhân tạo và Học máy, từ các thuật toán cơ bản đến các ứng dụng thực tế trong thế giới thực.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=avgc1rigwec', // AI and ML basics
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu các khái niệm cơ bản về AI và ML',
      'Phân biệt học có giám sát, không giám sát và học tăng cường',
      'Nắm vững các kỹ thuật tiền xử lý dữ liệu',
      'Hiểu các chỉ số đánh giá mô hình',
      'Áp dụng các thuật toán ML cơ bản cho các vấn đề thực tế',
      'Xây dựng mô hình ML đầu tiên từ đầu',
    ],
    prerequisites: [
      'Kiến thức lập trình cơ bản (ưu tiên Python)',
      'Toán học phổ thông',
      'Hiểu biết về các khái niệm thống kê cơ bản',
    ],
    algorithmTypes: [
      'Hồi quy tuyến tính',
      'Cây quyết định',
      'Phân cụm K-Means',
      'Mạng nơ-ron',
      'Máy vector hỗ trợ (SVM)',
    ],
    mlFrameworks: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy'],
    applications: [
      'Phân tích dự đoán',
      'Nhận dạng hình ảnh',
      'Xử lý ngôn ngữ tự nhiên',
      'Hệ thống gợi ý',
      'Phát hiện gian lận',
    ],
    programmingSkills: [
      'Lập trình Python',
      'Thao tác dữ liệu',
      'Trực quan hóa',
      'Phân tích thống kê',
      'Phát triển mô hình',
    ],
    mathConcepts: ['Đại số tuyến tính', 'Thống kê', 'Xác suất', 'Giải tích', 'Tối ưu hóa'],
    exercises: [
      {
        title: 'Mô hình Machine Learning đầu tiên',
        description: 'Xây dựng một quy trình ML hoàn chỉnh từ thu thập dữ liệu đến triển khai mô hình',
        difficulty: 'Trung bình',
        materials: ['Môi trường Python', 'Jupyter Notebook', 'Bộ dữ liệu mẫu', 'Thư viện ML'],
        procedure: [
          'Thiết lập môi trường Python với các thư viện ML',
          'Tải và khám phá bộ dữ liệu mẫu (giá nhà)',
          'Làm sạch dữ liệu và xử lý các giá trị bị thiếu',
          'Thực hiện kỹ thuật đặc trưng và lựa chọn đặc trưng',
          'Chia dữ liệu thành tập huấn luyện và tập kiểm tra',
          'Huấn luyện mô hình hồi quy tuyến tính',
          'Đánh giá hiệu suất mô hình bằng các chỉ số',
          'Đưa ra dự đoán trên dữ liệu mới',
          'Trực quan hóa kết quả và diễn giải các phát hiện',
        ],
        expectedResults: 'Mô hình ML hoạt động với độ chính xác hơn 80% và hiểu rõ về quy trình',
        solution: 'Notebook Python hoàn chỉnh minh họa quy trình ML từ đầu đến cuối',
      },
    ],
    realWorldApplications: [
      'Hệ thống gợi ý sản phẩm cho các cửa hàng trực tuyến Việt Nam',
      'Chẩn đoán y tế sử dụng hình ảnh y khoa',
      'Phát hiện gian lận tài chính cho các ngân hàng Việt Nam',
      'Dự báo giao thông cho các sáng kiến thành phố thông minh',
      'Tối ưu hóa năng suất nông nghiệp bằng dữ liệu IoT',
    ],
    caseStudies: [
      {
        title: 'Tiki - Hệ thống Gợi ý Sản phẩm được hỗ trợ bởi AI',
        organization: 'Tập đoàn Tiki',
        problem: 'Cải thiện khả năng khám phá sản phẩm và tăng tỷ lệ chuyển đổi bán hàng',
        solution: 'Triển khai hệ thống gợi ý dựa trên lọc cộng tác và nội dung',
        impact: 'Tăng 35% tỷ lệ chuyển đổi, tăng 25% giá trị đơn hàng trung bình',
        innovations: ['Cá nhân hóa thời gian thực', 'Gợi ý đa phương thức', 'Khung thử nghiệm A/B'],
      },
    ],
    resources: [
      {
        title: 'Khóa học Machine Learning của Andrew Ng',
        url: 'https://www.coursera.org/learn/machine-learning',
        type: 'Course',
      },
      {
        title: 'Hands-On Machine Learning with Python',
        url: 'https://github.com/ageron/handson-ml2',
        type: 'Book',
      },
    ],
    vietnamContext: {
      title: 'Machine Learning tại Việt Nam: Cơ hội và Thách thức',
      content: [
        'Nhu cầu nhân lực Machine Learning tại Việt Nam đang tăng vọt trong các lĩnh vực như FinTech, E-commerce, và Y tế.',
        'Các công ty công nghệ lớn của Việt Nam như Vingroup (VinAI), FPT, Viettel đều có các viện nghiên cứu và phát triển mạnh về AI/ML.',
        'Thách thức lớn nhất là nguồn dữ liệu chất lượng cao và đặc thù cho thị trường Việt Nam để huấn luyện các mô hình hiệu quả.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Viết Quốc',
      title: 'Nhà khoa học AI hàng đầu',
      company: 'Google DeepMind',
      imageUrl: 'https://i.pravatar.cc/150?u=le-viet-quoc',
      quote:
        'Machine Learning là một cuộc cách mạng. Hãy bắt đầu từ những điều cơ bản, xây dựng nền tảng vững chắc, và đừng ngại thử nghiệm những ý tưởng táo bạo. Tương lai nằm trong tay các bạn.',
    },
    quizzes: [
      {
        question: 'Loại học máy nào yêu cầu dữ liệu được gán nhãn để huấn luyện?',
        options: [
          'Học có giám sát (Supervised Learning)',
          'Học không giám sát (Unsupervised Learning)',
          'Học tăng cường (Reinforcement Learning)',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Học có giám sát sử dụng một bộ dữ liệu đã được gán nhãn (ví dụ: ảnh mèo được gán nhãn "mèo") để huấn luyện mô hình nhận dạng các mẫu.',
      },
      {
        question: 'Thư viện Python nào phổ biến nhất cho các tác vụ Machine Learning chung?',
        options: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'],
        correctAnswerIndex: 2,
        explanation:
          'Scikit-learn là thư viện cực kỳ phổ biến, cung cấp các công cụ đơn giản và hiệu quả cho phân tích dữ liệu và các thuật toán Machine Learning cổ điển.',
      },
    ],
  },

  {
    id: 'deep-learning-neural-networks',
    title: 'Deep Learning Và Mạng Nơ-ron',
    description:
      'Đi sâu vào kiến trúc mạng nơ-ron, thuật toán lan truyền ngược và các kỹ thuật học sâu tiên tiến để giải quyết các vấn đề phức tạp.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=7wvyLk_Xa9c', // NLP tutorial
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu kiến trúc và các thành phần của mạng nơ-ron',
      'Làm chủ thuật toán lan truyền ngược (backpropagation)',
      'Triển khai mạng nơ-ron tích chập (CNNs)',
      'Xây dựng mạng nơ-ron hồi quy (RNNs)',
      'Áp dụng các kỹ thuật học chuyển giao (transfer learning)',
      'Tối ưu hóa các mô hình học sâu để đạt hiệu suất cao',
    ],
    prerequisites: [
      'Kiến thức cơ bản về ML',
      'Thành thạo lập trình Python',
      'Hiểu biết về đại số tuyến tính và giải tích',
    ],
    algorithmTypes: [
      'Mạng truyền thẳng (Feedforward Networks)',
      'Mạng tích chập (Convolutional Networks)',
      'Mạng hồi quy (Recurrent Networks)',
      'Mạng đối nghịch tạo sinh (GANs)',
      'Mô hình Transformer',
    ],
    mlFrameworks: ['TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'Hugging Face'],
    applications: [
      'Thị giác máy tính',
      'Xử lý ngôn ngữ tự nhiên',
      'Nhận dạng giọng nói',
      'Hệ thống tự hành',
      'AI tạo sinh',
    ],
    programmingSkills: ['Python nâng cao', 'Lập trình GPU', 'Tối ưu hóa mô hình', 'Huấn luyện phân tán', 'MLOps'],
    mathConcepts: ['Phép toán ma trận', 'Gradient Descent', 'Lan truyền ngược', 'Hàm kích hoạt', 'Hàm mất mát'],
    exercises: [
      {
        title: 'Phân loại Ảnh Món ăn Việt Nam bằng CNN',
        description: 'Xây dựng mô hình CNN để phân loại các hình ảnh món ăn đường phố của Việt Nam.',
        difficulty: 'Nâng cao',
        materials: ['Bộ dữ liệu Món ăn Việt Nam', 'Môi trường GPU', 'TensorFlow/Keras', 'Công cụ tăng cường dữ liệu'],
        procedure: [
          'Thu thập và tiền xử lý bộ dữ liệu hình ảnh món ăn Việt Nam',
          'Thiết kế kiến trúc CNN với các lớp tích chập',
          'Triển khai các kỹ thuật tăng cường dữ liệu (data augmentation)',
          'Huấn luyện mô hình với tập xác thực phù hợp',
          'Áp dụng học chuyển giao sử dụng các mô hình đã được huấn luyện trước',
          'Tinh chỉnh các siêu tham số để đạt hiệu suất tối ưu',
          'Đánh giá hiệu suất mô hình và phân tích lỗi',
          'Triển khai mô hình để dự đoán thời gian thực',
        ],
        expectedResults: 'Mô hình CNN đạt độ chính xác hơn 90% trong việc phân loại món ăn Việt Nam',
        solution: 'Hệ thống phân loại hình ảnh sẵn sàng sản xuất với giao diện web',
      },
    ],
    realWorldApplications: [
      'Phân tích hình ảnh y tế cho hệ thống y tế Việt Nam',
      'Xử lý ngôn ngữ và chatbot tiếng Việt',
      'Giám sát giao thông và các ứng dụng thành phố thông minh',
      'Giám sát nông nghiệp bằng hình ảnh vệ tinh',
      'Xử lý tài liệu tài chính và phát hiện gian lận',
    ],
    caseStudies: [
      {
        title: 'VinAI - Xử lý ngôn ngữ tiếng Việt',
        organization: 'Viện nghiên cứu VinAI',
        problem: 'Phát triển các khả năng NLP tiên tiến cho ngôn ngữ tiếng Việt',
        solution: 'Tạo ra PhoBERT và các mô hình ngôn ngữ dành riêng cho tiếng Việt khác',
        impact: 'Đạt hiệu suất hàng đầu trong các tác vụ NLP tiếng Việt',
        innovations: ['Mô hình BERT tiếng Việt', 'Bộ dữ liệu tiếng Việt quy mô lớn', 'Công cụ NLP mã nguồn mở'],
      },
    ],
    resources: [
      {
        title: 'Chuyên ngành Deep Learning',
        url: 'https://www.coursera.org/specializations/deep-learning',
        type: 'Specialization',
      },
      {
        title: 'Chứng chỉ Lập trình viên TensorFlow',
        url: 'https://www.tensorflow.org/certificate',
        type: 'Certification',
      },
    ],
    vietnamContext: {
      title: 'Deep Learning và Cuộc cách mạng Công nghiệp 4.0 tại Việt Nam',
      content: [
        'Deep Learning là công nghệ lõi đằng sau nhiều sản phẩm "Make in Vietnam" thành công, từ xe tự hành VinFast đến trợ lý ảo Zalo.',
        'Cộng đồng nghiên cứu Deep Learning ở Việt Nam rất năng động, với nhiều bài báo được công bố tại các hội nghị hàng đầu thế giới như NeurIPS, ICML.',
        'Các cuộc thi như Zalo AI Challenge, VietAI Hackathon thúc đẩy sự phát triển và ứng dụng Deep Learning trong giới trẻ.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Xuân Phong',
      title: 'Giám đốc Trí tuệ Nhân tạo',
      company: 'FPT Software',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-xuan-phong',
      quote:
        'Deep Learning không còn là khoa học viễn tưởng, nó là công cụ mạnh mẽ để giải quyết các bài toán thực tế. Hãy nắm vững nền tảng và tìm ra một vấn đề bạn đam mê để giải quyết, thành công sẽ đến.',
    },
    quizzes: [
      {
        question: 'Mạng nơ-ron tích chập (CNN) đặc biệt hiệu quả cho loại tác vụ nào?',
        options: ['Xử lý chuỗi thời gian', 'Phân loại hình ảnh', 'Tối ưu hóa quyết định', 'Phân cụm dữ liệu'],
        correctAnswerIndex: 1,
        explanation:
          'CNN được thiết kế đặc biệt để nhận dạng các mẫu không gian trong dữ liệu, làm cho chúng trở nên cực kỳ mạnh mẽ cho các tác vụ liên quan đến hình ảnh như phân loại, phát hiện đối tượng.',
      },
      {
        question: 'Học chuyển giao (Transfer Learning) là gì?',
        options: [
          'Huấn luyện một mô hình từ đầu',
          'Sử dụng một mô hình đã được huấn luyện trước trên một bộ dữ liệu lớn và tinh chỉnh nó cho một tác vụ cụ thể',
          'Chuyển đổi mô hình từ TensorFlow sang PyTorch',
          'Dạy cho mô hình học một ngôn ngữ mới',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Học chuyển giao là một kỹ thuật mạnh mẽ giúp tiết kiệm thời gian và tài nguyên tính toán bằng cách tận dụng kiến thức đã học của một mô hình lớn để giải quyết một vấn đề mới nhưng có liên quan.',
      },
    ],
  },

  {
    id: 'computer-vision-applications',
    title: 'Thị Giác Máy Tính Và Xử Lý Ảnh',
    description:
      'Làm chủ các kỹ thuật thị giác máy tính để phân tích, xử lý và hiểu nội dung hình ảnh, từ các thao tác ảnh cơ bản đến phát hiện đối tượng nâng cao.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=pcxhj5KFI6M', // Computer vision tutorial
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    objectives: [
      'Làm chủ các kỹ thuật tiền xử lý và nâng cao chất lượng ảnh',
      'Triển khai hệ thống phát hiện và nhận dạng đối tượng',
      'Áp dụng hệ thống nhận dạng khuôn mặt và sinh trắc học',
      'Xây dựng ứng dụng phân tích video thời gian thực',
      'Hiểu các ứng dụng trong hình ảnh y tế',
      'Triển khai các mô hình thị giác máy tính trong môi trường sản xuất',
    ],
    prerequisites: [
      'Kiến thức cơ bản về học sâu',
      'Lập trình Python với OpenCV',
      'Hiểu biết về các khái niệm xử lý ảnh',
    ],
    algorithmTypes: ['YOLO', 'R-CNN', 'SSD', 'Nhận dạng khuôn mặt', 'Luồng quang học (Optical Flow)'],
    mlFrameworks: ['OpenCV', 'TensorFlow Object Detection', 'PyTorch Vision', 'Detectron2', 'MediaPipe'],
    applications: ['Xe tự hành', 'Hình ảnh y tế', 'Hệ thống an ninh', 'Phân tích bán lẻ', 'Kiểm soát chất lượng'],
    programmingSkills: [
      'Xử lý ảnh',
      'Hệ thống thời gian thực',
      'Triển khai mô hình',
      'Điện toán biên (Edge Computing)',
      'Phát triển di động',
    ],
    mathConcepts: ['Biến đổi hình ảnh', 'Tích chập', 'Trích xuất đặc trưng', 'Nhận dạng mẫu', 'Xử lý tín hiệu'],
    exercises: [
      {
        title: 'Hệ thống Nhận dạng Biển số xe Việt Nam',
        description: 'Xây dựng hệ thống từ đầu đến cuối để phát hiện và nhận dạng biển số xe của Việt Nam.',
        difficulty: 'Nâng cao',
        materials: ['Bộ dữ liệu Biển số xe Việt Nam', 'OpenCV', 'Mô hình YOLO', 'Thư viện OCR'],
        procedure: [
          'Thu thập bộ dữ liệu hình ảnh biển số xe Việt Nam',
          'Huấn luyện mô hình YOLO để phát hiện biển số xe',
          'Triển khai tiền xử lý ảnh để tăng cường khả năng hiển thị của biển số',
          'Áp dụng các kỹ thuật OCR để nhận dạng ký tự',
          'Xử lý các định dạng và kiểu biển số khác nhau',
          'Tối ưu hóa mô hình để xử lý thời gian thực',
          'Xây dựng giao diện web để kiểm tra và demo',
          'Triển khai hệ thống để sử dụng trong sản xuất',
        ],
        expectedResults: 'Hệ thống nhận dạng biển số xe với độ chính xác hơn 95% cho biển số Việt Nam',
        solution: 'Hệ thống ALPR hoàn chỉnh được điều chỉnh cho các tiêu chuẩn biển số xe của Việt Nam',
      },
    ],
    realWorldApplications: [
      'Hệ thống giám sát giao thông cho các thành phố Việt Nam',
      'Phân tích bán lẻ và hành vi khách hàng',
      'Chẩn đoán hình ảnh y tế cho các bệnh viện Việt Nam',
      'Giám sát nông nghiệp bằng hình ảnh từ máy bay không người lái',
      'Hệ thống kiểm soát chất lượng sản xuất',
    ],
    caseStudies: [
      {
        title: 'FPT - Hệ thống An ninh được hỗ trợ bởi AI',
        organization: 'Tập đoàn FPT',
        problem: 'Phát triển các giải pháp an ninh thông minh cho thị trường Việt Nam',
        solution: 'Tích hợp hệ thống nhận dạng khuôn mặt và phân tích hành vi',
        impact: 'Được triển khai tại hơn 500 địa điểm trên khắp Việt Nam',
        innovations: ['Nhận dạng khuôn mặt Việt Nam', 'AI phân tích hành vi', 'Tích hợp Điện toán biên'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Thị giác Máy tính với OpenCV',
        url: 'https://opencv-python-tutroals.readthedocs.io/',
        type: 'Tutorial',
      },
      {
        title: 'Computer Vision: Algorithms and Applications',
        url: 'http://szeliski.org/Book/',
        type: 'Book',
      },
    ],
    vietnamContext: {
      title: 'Thị giác Máy tính và Tầm nhìn "Make in Vietnam"',
      content: [
        'Camera AI "Made in Vietnam" của Bkav, VinAI đang được triển khai rộng rãi, tích hợp các công nghệ nhận dạng khuôn mặt, phát hiện hành vi.',
        'Trong nông nghiệp thông minh, thị giác máy tính giúp phân tích sức khỏe cây trồng qua hình ảnh từ drone, tối ưu hóa việc tưới tiêu và bón phân.',
        'Các hệ thống giao thông thông minh tại các thành phố lớn như Hà Nội, TP.HCM sử dụng camera AI để phân tích lưu lượng, phát hiện vi phạm và điều khiển đèn tín hiệu.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Tuấn Anh',
      title: 'Giám đốc sản phẩm Camera AI',
      company: 'Bkav',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-tuan-anh-bkav',
      quote:
        'Thị giác máy tính cho phép máy móc "nhìn" và "hiểu" thế giới như con người. Tại Việt Nam, chúng tôi đang ứng dụng nó để giải quyết các bài toán rất thực tế, từ an ninh, giao thông đến sản xuất thông minh.',
    },
    quizzes: [
      {
        question: 'YOLO là viết tắt của gì và nó được dùng để làm gì?',
        options: [
          'You Only Live Once, một triết lý sống',
          'You Only Look Once, một thuật toán phát hiện đối tượng thời gian thực',
          'Your Own Learning Object, một nền tảng giáo dục',
          'You Ought to Learn OpenCV, một lời khuyên',
        ],
        correctAnswerIndex: 1,
        explanation:
          'YOLO (You Only Look Once) là một thuật toán phát hiện đối tượng rất nhanh và hiệu quả, cho phép xử lý video thời gian thực.',
      },
      {
        question: 'OCR là công nghệ dùng để làm gì?',
        options: [
          'Nén hình ảnh',
          'Nhận dạng ký tự quang học (Optical Character Recognition)',
          'Tạo hiệu ứng cho ảnh',
          'Phân loại màu sắc',
        ],
        correctAnswerIndex: 1,
        explanation:
          'OCR là công nghệ cho phép máy tính "đọc" văn bản từ hình ảnh, ví dụ như đọc chữ trên biển số xe, scan tài liệu giấy thành văn bản điện tử.',
      },
    ],
  },

  {
    id: 'natural-language-processing',
    title: 'Xử Lý Ngôn Ngữ Tự Nhiên Cho Tiếng Việt',
    description:
      'Làm chủ các kỹ thuật NLP được thiết kế đặc biệt cho ngôn ngữ tiếng Việt, từ tiền xử lý văn bản đến các mô hình ngôn ngữ tiên tiến.',
    duration: '190 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=Y-I4pf6Bhas', // NLP fundamentals
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
    objectives: [
      'Làm chủ các kỹ thuật tiền xử lý văn bản tiếng Việt',
      'Triển khai phân tích tình cảm cho nội dung tiếng Việt',
      'Xây dựng chatbot và AI đàm thoại',
      'Áp dụng nhận dạng thực thể có tên cho tiếng Việt',
      'Tạo hệ thống tóm tắt văn bản',
      'Triển khai các mô hình ngôn ngữ tiếng Việt',
    ],
    prerequisites: [
      'Kiến thức cơ bản về ML',
      'Hiểu biết về các khái niệm ngôn ngữ học',
      'Lập trình Python với các thư viện NLP',
    ],
    algorithmTypes: ['BERT', 'GPT', 'Word2Vec', 'LSTM', 'Transformer'],
    mlFrameworks: ['Transformers', 'spaCy', 'NLTK', 'PhoBERT', 'VnCoreNLP'],
    applications: ['Chatbot', 'Phân tích tình cảm', 'Dịch máy', 'Tóm tắt văn bản', 'Trích xuất thông tin'],
    programmingSkills: [
      'Xử lý văn bản',
      'Mô hình hóa ngôn ngữ',
      'Phát triển API',
      'Triển khai trên đám mây',
      'Tinh chỉnh mô hình',
    ],
    mathConcepts: [
      'Không gian vector',
      'Cơ chế chú ý (Attention Mechanisms)',
      'Mô hình hóa chuỗi',
      'Phân phối xác suất',
      'Lý thuyết thông tin',
    ],
    exercises: [
      {
        title: 'Hệ thống Phân tích Tình cảm Tiếng Việt',
        description: 'Xây dựng hệ thống phân tích tình cảm để phân tích các bài đăng trên mạng xã hội bằng tiếng Việt.',
        difficulty: 'Nâng cao',
        materials: [
          'Bộ dữ liệu Mạng xã hội Việt Nam',
          'Mô hình PhoBERT',
          'Thư viện Transformers',
          'Bộ tách từ tiếng Việt',
        ],
        procedure: [
          'Thu thập dữ liệu mạng xã hội tiếng Việt để phân tích tình cảm',
          'Tiền xử lý văn bản tiếng Việt, xử lý dấu và tiếng lóng',
          'Tinh chỉnh mô hình PhoBERT để phân loại tình cảm',
          'Xử lý sự mất cân bằng lớp trong dữ liệu tình cảm tiếng Việt',
          'Đánh giá hiệu suất mô hình trên văn bản tiếng Việt',
          'Xây dựng điểm cuối API để phân tích tình cảm thời gian thực',
          'Tạo giao diện web để kiểm tra dự đoán tình cảm',
          'Triển khai mô hình để sử dụng trong sản xuất',
        ],
        expectedResults: 'Hệ thống phân tích tình cảm tiếng Việt với độ chính xác hơn 88%',
        solution: 'API phân tích tình cảm sẵn sàng sản xuất được điều chỉnh đặc biệt cho tiếng Việt',
      },
    ],
    realWorldApplications: [
      'Giám sát mạng xã hội cho các thương hiệu Việt Nam',
      'Chatbot dịch vụ khách hàng bằng tiếng Việt',
      'Hệ thống phân tích và tóm tắt tin tức',
      'Ứng dụng học tiếng Việt',
      'Xử lý và phân tích tài liệu pháp lý',
    ],
    caseStudies: [
      {
        title: 'Zalo - AI Đàm thoại Tiếng Việt',
        organization: 'Zalo (Tập đoàn VNG)',
        problem: 'Xây dựng các tính năng trò chuyện thông minh cho người dùng Việt Nam',
        solution: 'Phát triển các mô hình ngôn ngữ và AI đàm thoại dành riêng cho tiếng Việt',
        impact: 'Cải thiện 40% sự tương tác của người dùng thông qua các tính năng thông minh',
        innovations: ['Mô hình ngôn ngữ tiếng Việt', 'Chatbot nhận biết ngữ cảnh', 'Đàm thoại đa phương thức'],
      },
    ],
    resources: [
      {
        title: 'Bộ công cụ NLP tiếng Việt',
        url: 'https://github.com/vncorenlp/VnCoreNLP',
        type: 'Tool',
      },
      {
        title: 'Mô hình ngôn ngữ tiếng Việt PhoBERT',
        url: 'https://github.com/VinAIResearch/PhoBERT',
        type: 'Model',
      },
    ],
    vietnamContext: {
      title: 'Xử lý Ngôn ngữ Tự nhiên và Bản sắc Văn hóa số của Việt Nam',
      content: [
        'Các mô hình như PhoBERT (của VinAI) đã giúp cải thiện đáng kể hiệu suất của các tác vụ NLP cho tiếng Việt, một ngôn ngữ có nhiều đặc thù (dấu, thanh điệu).',
        'Trợ lý ảo "Kiki" của Zalo là một ví dụ điển hình về ứng dụng NLP để tạo ra sản phẩm gần gũi với người dùng Việt.',
        'NLP đang được sử dụng để số hóa và phân tích các di sản văn hóa phi vật thể của Việt Nam, như ca dao, tục ngữ, truyện cổ tích.',
      ],
    },
    careerConnect: {
      name: 'TS. Vũ Duy Thức',
      title: 'Đồng sáng lập, Chuyên gia AI',
      company: 'OhmniLabs, Kambria',
      imageUrl: 'https://i.pravatar.cc/150?u=vu-duy-thuc',
      quote:
        'Ngôn ngữ là hồn của dân tộc. Việc xây dựng các mô hình AI hiểu sâu sắc tiếng Việt không chỉ là bài toán công nghệ mà còn là sứ mệnh giữ gìn và phát huy bản sắc văn hóa Việt trong kỷ nguyên số.',
    },
    quizzes: [
      {
        question: 'PhoBERT là gì?',
        options: [
          'Một món phở đặc biệt',
          'Một mô hình Transformer được huấn luyện trước dành riêng cho tiếng Việt',
          'Một thư viện xử lý ảnh',
          'Tên một công ty AI',
        ],
        correctAnswerIndex: 1,
        explanation:
          'PhoBERT là một mô hình ngôn ngữ dựa trên kiến trúc BERT, được phát triển bởi VinAI Research, và nó đã đạt được hiệu suất rất cao trên nhiều tác vụ NLP tiếng Việt.',
      },
      {
        question: 'Tách từ (Tokenization) trong NLP tiếng Việt khó hơn tiếng Anh vì sao?',
        options: [
          'Tiếng Việt có nhiều từ hơn',
          'Tiếng Việt không dùng khoảng trắng để phân tách các từ một cách rõ ràng như tiếng Anh (ví dụ: "học sinh" là một từ nhưng có khoảng trắng)',
          'Tiếng Việt không có bảng chữ cái',
          'Tiếng Việt có quá nhiều dấu câu',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong tiếng Anh, từ thường được ngăn cách bởi khoảng trắng. Nhưng trong tiếng Việt, một từ có thể bao gồm nhiều "tiếng" ngăn cách bởi khoảng trắng (ví dụ: "máy học", "trí tuệ nhân tạo"), điều này làm cho việc tách từ trở nên phức tạp hơn.',
      },
    ],
  },

  {
    id: 'reinforcement-learning',
    title: 'Học Tăng Cường Và Ứng Dụng',
    description:
      'Khám phá Học tăng cường, một lĩnh vực của Học máy, nơi các tác nhân học cách đưa ra quyết định thông qua thử và sai để tối đa hóa phần thưởng. Tìm hiểu về các thuật toán cốt lõi và ứng dụng trong game, robot và tự động hóa.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=tFSvLbJCrq8', // Reinforcement learning tutorial
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu các khái niệm cơ bản của RL: tác nhân, môi trường, phần thưởng',
      'Triển khai các thuật toán Q-learning và policy gradient',
      'Xây dựng các tác nhân AI chơi game',
      'Áp dụng RL cho các bài toán tối ưu hóa',
      'Hiểu về học tăng cường sâu',
      'Triển khai các tác nhân RL trong các kịch bản thế giới thực',
    ],
    prerequisites: [
      'Kiến thức về ML và học sâu',
      'Thành thạo lập trình Python',
      'Hiểu biết về các khái niệm tối ưu hóa',
    ],
    algorithmTypes: ['Q-Learning', 'Deep Q-Networks', 'Policy Gradients', 'Actor-Critic', 'Multi-Agent RL'],
    mlFrameworks: ['OpenAI Gym', 'Stable Baselines3', 'Ray RLLib', 'TensorFlow Agents', 'Unity ML-Agents'],
    applications: ['Game AI', 'Robot học', 'Hệ thống giao dịch', 'Tối ưu hóa tài nguyên', 'Hệ thống tự hành'],
    programmingSkills: [
      'Thiết kế môi trường',
      'Phát triển tác nhân',
      'Mô phỏng',
      'Tối ưu hóa hiệu suất',
      'Điện toán phân tán',
    ],
    mathConcepts: [
      'Quy trình quyết định Markov (MDPs)',
      'Phương trình Bellman',
      'Tối ưu hóa chính sách',
      'Hàm giá trị',
      'Thăm dò và khai thác (Exploration vs Exploitation)',
    ],
    exercises: [
      {
        title: 'Tác nhân AI chơi Cờ Tướng',
        description: 'Xây dựng một tác nhân RL để chơi Cờ Tướng một cách cạnh tranh.',
        difficulty: 'Nâng cao',
        materials: ['Môi trường Cờ Tướng', 'Khung RL sâu', 'Luật Cờ Tướng', 'Cơ sở hạ tầng huấn luyện'],
        procedure: [
          'Triển khai môi trường game Cờ Tướng',
          'Thiết kế biểu diễn trạng thái cho các thế cờ',
          'Triển khai thuật toán Deep Q-Network (DQN)',
          'Huấn luyện tác nhân bằng kỹ thuật tự chơi (self-play)',
          'Áp dụng các kỹ thuật RL nâng cao (Double DQN, Dueling Networks)',
          'Đánh giá hiệu suất của tác nhân so với các cấp độ kỹ năng khác nhau',
          'Tối ưu hóa việc huấn luyện bằng điện toán phân tán',
          'Triển khai tác nhân với giao diện thân thiện với người dùng',
        ],
        expectedResults: 'AI chơi Cờ Tướng đạt trình độ từ trung cấp đến cao cấp',
        solution: 'Hệ thống AI chơi cờ hoàn chỉnh với giao diện web cho các trận đấu giữa người và AI',
      },
    ],
    realWorldApplications: [
      'Thuật toán giao dịch chứng khoán cho thị trường Việt Nam',
      'Phân bổ tài nguyên trong các hệ thống thành phố thông minh',
      'Điều hướng xe tự hành',
      'Phát triển game và giải trí',
      'Tối ưu hóa quy trình công nghiệp',
    ],
    caseStudies: [
      {
        title: 'VietStock - Trợ lý Giao dịch AI',
        organization: 'VietStock',
        problem: 'Phát triển các khuyến nghị giao dịch thông minh cho thị trường chứng khoán Việt Nam',
        solution: 'Áp dụng học tăng cường để tối ưu hóa danh mục đầu tư',
        impact: 'Cải thiện 15% lợi nhuận đầu tư so với các phương pháp truyền thống',
        innovations: [
          'Mô hình RL dành riêng cho thị trường',
          'Chiến lược giao dịch nhận biết rủi ro',
          'Thích ứng thời gian thực',
        ],
      },
    ],
    resources: [
      {
        title: 'Khóa học Deep Reinforcement Learning',
        url: 'https://www.deepmind.com/learning-resources',
        type: 'Course',
      },
      {
        title: 'Reinforcement Learning: An Introduction',
        url: 'http://incompleteideas.net/book/the-book.html',
        type: 'Book',
      },
    ],
    vietnamContext: {
      title: 'Học Tăng Cường và Tương lai Tự động hóa tại Việt Nam',
      content: [
        'Trong lĩnh vực sản xuất, các nhà máy thông minh ở Việt Nam đang thử nghiệm robot tự học (sử dụng RL) để tối ưu hóa dây chuyền lắp ráp.',
        'Các công ty game Việt Nam như VNG, Amanotes đang nghiên cứu ứng dụng RL để tạo ra các nhân vật NPC thông minh hơn và tự động cân bằng độ khó của game.',
        'RL cũng có tiềm năng lớn trong việc tối ưu hóa mạng lưới logistics và chuỗi cung ứng, một bài toán quan trọng đối với nền kinh tế Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Anh Đỗ Mạnh Cường',
      title: 'Kỹ sư Robot học',
      company: 'OhmniLabs',
      imageUrl: 'https://i.pravatar.cc/150?u=do-manh-cuong',
      quote:
        'Học tăng cường cho phép robot học hỏi từ kinh nghiệm của chính nó, giống như một đứa trẻ. Đây là chìa khóa để tạo ra những cỗ máy thực sự thông minh và linh hoạt, có thể thích ứng với môi trường phức tạp của thế giới thực.',
    },
    quizzes: [
      {
        question: 'Trong Học tăng cường, "phần thưởng" (reward) là gì?',
        options: [
          'Lương của kỹ sư AI',
          'Một tín hiệu số mà tác nhân (agent) nhận được từ môi trường, cho biết hành động vừa rồi tốt hay xấu',
          'Điểm số cuối cùng của game',
          'Số lượng dữ liệu huấn luyện',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Phần thưởng là một tín hiệu phản hồi từ môi trường. Mục tiêu của tác nhân RL là học một chiến lược (policy) để tối đa hóa tổng phần thưởng nhận được theo thời gian.',
      },
      {
        question: 'Vấn đề "thăm dò và khai thác" (exploration vs. exploitation) nghĩa là gì?',
        options: [
          'Lựa chọn giữa việc khám phá môi trường và việc khai thác tài nguyên',
          'Sự đánh đổi giữa việc thử các hành động mới để khám phá phần thưởng tiềm năng (thăm dò) và việc chọn hành động tốt nhất đã biết để tối đa hóa phần thưởng hiện tại (khai thác)',
          'Sự khác biệt giữa việc chơi game và việc làm việc',
          'Một kỹ thuật để hack vào hệ thống RL',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đây là một sự đánh đổi kinh điển trong RL. Nếu chỉ khai thác, tác nhân có thể bỏ lỡ các hành động tốt hơn. Nếu chỉ thăm dò, tác nhân sẽ không tận dụng được những gì nó đã học.',
      },
    ],
  },

  {
    id: 'mlops-production-deployment',
    title: 'MLOps Và Triển Khai Mô Hình Sản Xuất',
    description:
      'Làm chủ các thực hành MLOps để triển khai, giám sát và duy trì các mô hình ML trong môi trường sản xuất một cách hiệu quả và đáng tin cậy.',
    duration: '175 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=t3KRhBANPbI', // MLOps introduction
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu vòng đời và các thực hành tốt nhất của MLOps',
      'Triển khai tích hợp liên tục cho các mô hình ML',
      'Thiết lập hệ thống giám sát và cảnh báo mô hình',
      'Triển khai mô hình bằng cách sử dụng containerization',
      'Quản lý phiên bản và khôi phục mô hình',
      'Mở rộng quy mô hệ thống ML cho lưu lượng truy cập cao',
    ],
    prerequisites: [
      'Kinh nghiệm phát triển mô hình ML',
      'Kiến thức cơ bản về DevOps và điện toán đám mây',
      'Hiểu biết về các thực hành kỹ thuật phần mềm',
    ],
    algorithmTypes: [
      'Phục vụ mô hình',
      'Thử nghiệm A/B',
      'Giám sát mô hình',
      'Huấn luyện liên tục',
      'Tối ưu hóa mô hình',
    ],
    mlFrameworks: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'TensorFlow Serving'],
    applications: ['Web APIs', 'Triển khai di động', 'Điện toán biên', 'Xử lý hàng loạt', 'Suy luận thời gian thực'],
    programmingSkills: ['DevOps', 'Nền tảng đám mây', 'Containerization', 'Phát triển API', 'Giám sát'],
    mathConcepts: [
      'Chỉ số hiệu suất',
      'Kiểm định thống kê',
      'Tối ưu hóa tài nguyên',
      'Cân bằng tải',
      'Khả năng mở rộng',
    ],
    exercises: [
      {
        title: 'Triển khai Quy trình ML từ đầu đến cuối',
        description: 'Xây dựng một quy trình MLOps hoàn chỉnh từ phát triển đến giám sát sản xuất.',
        difficulty: 'Nâng cao',
        materials: ['Truy cập nền tảng đám mây', 'Docker', 'Kubernetes', 'MLflow', 'Công cụ giám sát'],
        procedure: [
          'Thiết lập theo dõi thử nghiệm ML với MLflow',
          'Đóng gói mô hình ML bằng Docker',
          'Tạo API phục vụ mô hình với FastAPI',
          'Triển khai mô hình lên cụm Kubernetes',
          'Triển khai giám sát và ghi log mô hình',
          'Thiết lập quy trình huấn luyện lại mô hình tự động',
          'Cấu hình khung thử nghiệm A/B',
          'Giám sát hiệu suất mô hình và các chỉ số kinh doanh',
        ],
        expectedResults: 'Hệ thống ML sẵn sàng sản xuất với triển khai và giám sát tự động',
        solution: 'Cơ sở hạ tầng MLOps hoàn chỉnh hỗ trợ cải tiến mô hình liên tục',
      },
    ],
    realWorldApplications: [
      'Hệ thống gợi ý thương mại điện tử quy mô lớn',
      'Hệ thống phát hiện gian lận ngân hàng',
      'Công cụ chẩn đoán y tế',
      'Hệ thống tối ưu hóa giao thông',
      'Kiểm soát chất lượng sản xuất',
    ],
    caseStudies: [
      {
        title: 'Shopee - Hệ thống Gợi ý Quy mô lớn',
        organization: 'Shopee Việt Nam',
        problem: 'Triển khai các đề xuất được cá nhân hóa cho hàng triệu người dùng',
        solution: 'Xây dựng cơ sở hạ tầng MLOps mạnh mẽ với khả năng phục vụ mô hình thời gian thực',
        impact: 'Phục vụ hơn 100 triệu dự đoán hàng ngày với độ trễ dưới 100ms',
        innovations: [
          'Kỹ thuật đặc trưng thời gian thực',
          'Thử nghiệm A/B Multi-armed Bandit',
          'Huấn luyện lại mô hình tự động',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Thực hành Tốt nhất MLOps',
        url: 'https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning',
        type: 'Guide',
      },
      {
        title: 'Building Machine Learning Pipelines',
        url: 'https://www.oreilly.com/library/view/building-machine-learning/9781492053187/',
        type: 'Book',
      },
    ],
    vietnamContext: {
      title: 'MLOps: "Xương sống" cho các Sản phẩm AI tại Việt Nam',
      content: [
        'Khi các sản phẩm AI của Việt Nam vươn ra thị trường toàn cầu, MLOps trở thành yếu tố sống còn để đảm bảo sự ổn định, khả năng mở rộng và độ tin cậy.',
        'Các công ty FinTech và E-commerce tại Việt Nam là những đơn vị tiên phong trong việc áp dụng MLOps để quản lý các hệ thống phát hiện gian lận và gợi ý sản phẩm phức tạp.',
        'Nhu cầu về Kỹ sư MLOps (MLOps Engineer) đang tăng rất nhanh, mở ra một hướng đi sự nghiệp mới và hấp dẫn cho các kỹ sư phần mềm và khoa học dữ liệu.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Nguyễn',
      title: 'Kỹ sư MLOps',
      company: 'Grab',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-nguyen-mlops',
      quote:
        'Xây dựng một mô hình ML tốt đã khó, nhưng đưa nó vào hoạt động ổn định và phục vụ hàng triệu người dùng còn khó hơn. Đó là nghệ thuật của MLOps - kết nối thế giới nghiên cứu và thế giới vận hành.',
    },
    quizzes: [
      {
        question: 'MLOps là sự kết hợp của những lĩnh vực nào?',
        options: [
          'Marketing và Sales',
          'Machine Learning, DevOps và Data Engineering',
          'Toán học và Vật lý',
          'Thiết kế và Lập trình',
        ],
        correctAnswerIndex: 1,
        explanation:
          'MLOps áp dụng các nguyên tắc của DevOps (phát triển và vận hành) vào quy trình làm việc của Machine Learning để tự động hóa và tối ưu hóa việc xây dựng, triển khai và quản lý mô hình.',
      },
      {
        question: 'Containerization (ví dụ: Docker) giúp gì trong MLOps?',
        options: [
          'Làm cho mô hình chạy nhanh hơn',
          'Đóng gói mô hình và các phụ thuộc của nó vào một môi trường nhất quán, dễ dàng di chuyển và triển khai ở bất cứ đâu',
          'Tự động huấn luyện lại mô hình',
          'Viết mã Python tốt hơn',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Containerization giải quyết vấn đề "nó chạy trên máy của tôi!". Bằng cách đóng gói mọi thứ, nó đảm bảo rằng mô hình sẽ hoạt động nhất quán trên máy của lập trình viên, trên máy chủ thử nghiệm và trong môi trường sản xuất.',
      },
    ],
  },

  {
    id: 'ai-ethics-bias-fairness',
    title: 'Đạo Đức AI, Phát Hiện Thiên Vị Và Công Bằng',
    description:
      'Hiểu các cân nhắc về đạo đức trong phát triển AI, phát hiện và giảm thiểu thiên vị, và xây dựng các hệ thống AI công bằng và có trách nhiệm.',
    duration: '165 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=1RptHwfkx_k', // AI ethics and fairness
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu các nguyên tắc và khuôn khổ đạo đức AI',
      'Xác định và đo lường thiên vị trong các mô hình ML',
      'Triển khai học máy nhận biết sự công bằng',
      'Thiết kế các hệ thống AI minh bạch và có thể giải thích được',
      'Xử lý các mối quan tâm về quyền riêng tư và bảo vệ dữ liệu',
      'Tạo ra các khuôn khổ quản trị AI có đạo đức',
    ],
    prerequisites: [
      'Kiến thức cơ bản về ML',
      'Hiểu biết về bối cảnh xã hội và văn hóa',
      'Phân tích dữ liệu và thống kê cơ bản',
    ],
    algorithmTypes: [
      'Chỉ số công bằng',
      'Phát hiện thiên vị',
      'AI có thể giải thích (XAI)',
      'ML bảo vệ quyền riêng tư',
      'Chống thiên vị đối nghịch',
    ],
    mlFrameworks: ['Fairlearn', 'AI Fairness 360', 'LIME', 'SHAP', 'TensorFlow Privacy'],
    applications: [
      'Hệ thống tuyển dụng',
      'Chấm điểm tín dụng',
      'AI trong y tế',
      'Tư pháp hình sự',
      'Công nghệ giáo dục',
    ],
    programmingSkills: [
      'Phân tích thiên vị',
      'Kiểm tra công bằng',
      'Khả năng diễn giải mô hình',
      'Kỹ thuật quyền riêng tư',
      'Khung quản trị',
    ],
    mathConcepts: [
      'Ngang bằng thống kê (Statistical Parity)',
      'Tỷ lệ cược cân bằng (Equalized Odds)',
      'Lý thuyết thông tin',
      'Quyền riêng tư vi phân (Differential Privacy)',
      'Suy luận nhân quả',
    ],
    exercises: [
      {
        title: 'Kiểm toán Thiên vị Hệ thống Tuyển dụng Việt Nam',
        description: 'Kiểm toán một hệ thống AI tuyển dụng về thiên vị đối với các nhóm nhân khẩu học Việt Nam.',
        difficulty: 'Trung bình',
        materials: [
          'Bộ dữ liệu tuyển dụng',
          'Thư viện công bằng',
          'Công cụ phát hiện thiên vị',
          'Dữ liệu nhân khẩu học Việt Nam',
        ],
        procedure: [
          'Phân tích bộ dữ liệu tuyển dụng Việt Nam về sự đại diện nhân khẩu học',
          'Xác định các nguồn thiên vị tiềm ẩn trong quy trình tuyển dụng',
          'Triển khai nhiều chỉ số công bằng để đánh giá',
          'Phát hiện thiên vị đối với các nhóm dân tộc khác nhau của Việt Nam',
          'Áp dụng các kỹ thuật giảm thiểu thiên vị',
          'Đánh giá sự đánh đổi giữa độ chính xác và sự công bằng',
          'Tạo bảng điều khiển báo cáo minh bạch',
          'Phát triển các khuyến nghị cho các thực hành tuyển dụng công bằng',
        ],
        expectedResults: 'Báo cáo kiểm toán thiên vị toàn diện với các cải tiến công bằng có thể hành động',
        solution:
          'Hệ thống tuyển dụng công bằng và minh bạch được điều chỉnh cho sự đa dạng tại nơi làm việc ở Việt Nam',
      },
    ],
    realWorldApplications: [
      'Hệ thống cho vay công bằng cho các tổ chức tài chính Việt Nam',
      'AI y tế không thiên vị trong các quần thể đa dạng của Việt Nam',
      'Hệ thống công nghệ giáo dục công bằng',
      'Công cụ đánh giá rủi ro tư pháp hình sự công bằng',
      'Hệ thống gợi ý toàn diện',
    ],
    caseStudies: [
      {
        title: 'VPBank - Hệ thống Chấm điểm Tín dụng Công bằng',
        organization: 'Ngân hàng VPBank Việt Nam',
        problem: 'Đảm bảo quyền truy cập tín dụng công bằng trên cơ sở khách hàng đa dạng của Việt Nam',
        solution: 'Triển khai phát hiện thiên vị và chấm điểm tín dụng nhận biết sự công bằng',
        impact: 'Tăng 20% tỷ lệ phê duyệt khoản vay cho các cộng đồng ít được phục vụ',
        innovations: ['Tối ưu hóa Công bằng Đa mục tiêu', 'Tích hợp Bối cảnh Văn hóa', 'Ra quyết định Minh bạch'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Đạo đức của Partnership on AI',
        url: 'https://www.partnershiponai.org/about/',
        type: 'Guidelines',
      },
      {
        title: 'Sách Fairness and Machine Learning',
        url: 'https://fairmlbook.org/',
        type: 'Book',
      },
    ],
    vietnamContext: {
      title: 'Đạo đức AI: Xây dựng Niềm tin trong Kỷ nguyên số tại Việt Nam',
      content: [
        'Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân là một bước tiến quan trọng, tạo hành lang pháp lý cho việc phát triển AI có trách nhiệm tại Việt Nam.',
        'Vấn đề "thiên vị" trong AI có thể biểu hiện rõ ở Việt Nam, ví dụ mô hình được huấn luyện chủ yếu bằng giọng nói miền Bắc có thể hoạt động kém với giọng miền Nam.',
        'Xây dựng AI có đạo đức là yếu tố then chốt để người dân Việt Nam tin tưởng và chấp nhận các ứng dụng AI trong các lĩnh vực nhạy cảm như y tế, tài chính.',
      ],
    },
    careerConnect: {
      name: 'Chuyên gia Nguyễn Thị Minh Giang',
      title: 'Chuyên gia Tư vấn Quản trị Rủi ro',
      company: 'Deloitte Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=minh-giang',
      quote:
        'Một hệ thống AI mạnh mẽ về mặt kỹ thuật nhưng không công bằng có thể gây ra những tác hại to lớn. Trách nhiệm của chúng ta là đảm bảo công nghệ phục vụ con người một cách công bằng và minh bạch. Đây không chỉ là vấn đề kỹ thuật, mà là vấn đề đạo đức.',
    },
    quizzes: [
      {
        question: 'AI có thể giải thích (Explainable AI - XAI) nhằm mục đích gì?',
        options: [
          'Làm cho mô hình AI trở nên bí ẩn hơn',
          'Tạo ra các phương pháp và kỹ thuật giúp con người hiểu được cách mô hình AI đưa ra quyết định',
          'Giải thích AI cho các máy tính khác',
          'Tăng tốc độ của mô hình',
        ],
        correctAnswerIndex: 1,
        explanation:
          'XAI rất quan trọng trong các lĩnh vực như y tế và tài chính, nơi các quyết định của AI cần phải được minh bạch và có thể giải thích được để con người tin tưởng và kiểm chứng.',
      },
      {
        question: 'Tại sao việc sử dụng dữ liệu đa dạng lại quan trọng để giảm thiên vị trong AI?',
        options: [
          'Vì nó làm cho mô hình lớn hơn',
          'Vì nó không quan trọng',
          'Vì nếu dữ liệu huấn luyện chỉ đại diện cho một nhóm người, mô hình sẽ học và khuếch đại các thiên vị đó, dẫn đến hoạt động kém hoặc không công bằng với các nhóm khác',
          'Vì nó giúp tiết kiệm chi phí',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Nguyên tắc "rác vào, rác ra" (garbage in, garbage out) rất đúng với AI. Một bộ dữ liệu huấn luyện đa dạng và đại diện cho toàn bộ dân số là bước đầu tiên và quan trọng nhất để xây dựng một hệ thống AI công bằng.',
      },
    ],
  },
];
