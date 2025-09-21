import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export const aiMachineLearningModuleData: ModuleData = {
  id: 'ai-machine-learning',
  title: 'AI & Machine Learning',
  subtitle: 'Trí tuệ nhân tạo và học máy',
  description: 'Tìm hiểu AI/ML từ cơ bản đến nâng cao với TensorFlow, PyTorch và neural networks',
  category: 'programming',
  icon: '🧠',
  color: 'from-purple-600 to-indigo-600',
  totalDuration: '16-20 giờ',
  difficulty: 'Trung bình đến Nâng cao',
  level: 'Trung bình',
  duration: '16-20 giờ',
  href: '/learning/ai-machine-learning',
  features: ['Machine Learning Algorithms', 'Neural Networks', 'Computer Vision', 'AI Ethics'],
  tags: ['ai', 'machine learning', 'tensorflow', 'neural networks'],
  prerequisites: [
    'Python programming basics',
    'Statistics fundamentals',
    'Linear algebra knowledge',
    'Mathematical thinking',
  ],
  objectives: [
    'Hiểu các khái niệm cơ bản về AI và ML',
    'Phân biệt học có giám sát, không giám sát và học tăng cường',
    'Nắm vững các kỹ thuật tiền xử lý dữ liệu',
    'Hiểu các chỉ số đánh giá mô hình',
    'Áp dụng các thuật toán ML cơ bản cho các vấn đề thực tế',
    'Xây dựng mô hình ML đầu tiên từ đầu',
  ],
  careerOutcomes: [
    'Kỹ sư học máy (Machine Learning Engineer)',
    'Nhà khoa học dữ liệu (Data Scientist)',
    'Kỹ sư AI (AI Engineer)',
    'Nhà nghiên cứu AI (AI Researcher)',
  ],
  industryApplications: [
    {
      name: 'Thương mại điện tử',
      description: 'Hệ thống gợi ý sản phẩm, phân tích hành vi khách hàng.',
    },
    {
      name: 'Tài chính',
      description: 'Phát hiện gian lận, chấm điểm tín dụng, giao dịch thuật toán.',
    },
    {
      name: 'Y tế',
      description: 'Chẩn đoán hình ảnh y tế, dự đoán bệnh, phát triển thuốc.',
    },
    {
      name: 'Sản xuất',
      description: 'Kiểm soát chất lượng, bảo trì dự đoán, tối ưu hóa chuỗi cung ứng.',
    },
  ],
  marketDemand: {
    averageSalary: '1500-3000 USD/tháng',
    jobGrowth: '30%/năm',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.Python, K2Module.DataScience, K2Module.Robotics],
  lessons: [
    {
      id: 'ai-ml-fundamentals',
      title: 'Nền Tảng AI Và Machine Learning',
      description:
        'Hiểu các khái niệm cơ bản của Trí tuệ nhân tạo và Học máy, từ các thuật toán cơ bản đến các ứng dụng thực tế trong thế giới thực.',
      duration: '180 phút',
      difficulty: 'Trung bình',
      objectives: [
        'Hiểu các khái niệm cơ bản về AI và ML',
        'Phân biệt học có giám sát, không giám sát và học tăng cường',
        'Nắm vững các kỹ thuật tiền xử lý dữ liệu',
        'Hiểu các chỉ số đánh giá mô hình',
        'Áp dụng các thuật toán ML cơ bản cho các vấn đề thực tế',
        'Xây dựng mô hình ML đầu tiên từ đầu',
      ],
      realWorldApplications: [
        'Hệ thống gợi ý sản phẩm cho các cửa hàng trực tuyến Việt Nam',
        'Chẩn đoán y tế sử dụng hình ảnh y khoa',
        'Phát hiện gian lận tài chính cho các ngân hàng Việt Nam',
        'Dự báo giao thông cho các sáng kiến thành phố thông minh',
        'Tối ưu hóa năng suất nông nghiệp bằng dữ liệu IoT',
      ],
    },
    {
      id: 'deep-learning-neural-networks',
      title: 'Deep Learning Và Mạng Nơ-ron',
      description:
        'Đi sâu vào kiến trúc mạng nơ-ron, thuật toán lan truyền ngược và các kỹ thuật học sâu tiên tiến để giải quyết các vấn đề phức tạp.',
      duration: '220 phút',
      difficulty: 'Nâng cao',
      objectives: [
        'Hiểu kiến trúc và các thành phần của mạng nơ-ron',
        'Làm chủ thuật toán lan truyền ngược (backpropagation)',
        'Triển khai mạng nơ-ron tích chập (CNNs)',
        'Xây dựng mạng nơ-ron hồi quy (RNNs)',
        'Áp dụng các kỹ thuật học chuyển giao (transfer learning)',
        'Tối ưu hóa các mô hình học sâu để đạt hiệu suất cao',
      ],
      realWorldApplications: [
        'Phân tích hình ảnh y tế cho hệ thống y tế Việt Nam',
        'Xử lý ngôn ngữ và chatbot tiếng Việt',
        'Giám sát giao thông và các ứng dụng thành phố thông minh',
        'Giám sát nông nghiệp bằng hình ảnh vệ tinh',
        'Xử lý tài liệu tài chính và phát hiện gian lận',
      ],
    },
    {
      id: 'computer-vision-applications',
      title: 'Thị Giác Máy Tính Và Xử Lý Ảnh',
      description:
        'Làm chủ các kỹ thuật thị giác máy tính để phân tích, xử lý và hiểu nội dung hình ảnh, từ các thao tác ảnh cơ bản đến phát hiện đối tượng nâng cao.',
      duration: '200 phút',
      difficulty: 'Nâng cao',
      objectives: [
        'Làm chủ các kỹ thuật tiền xử lý và nâng cao chất lượng ảnh',
        'Triển khai hệ thống phát hiện và nhận dạng đối tượng',
        'Áp dụng hệ thống nhận dạng khuôn mặt và sinh trắc học',
        'Xây dựng ứng dụng phân tích video thời gian thực',
        'Hiểu các ứng dụng trong hình ảnh y tế',
        'Triển khai các mô hình thị giác máy tính trong môi trường sản xuất',
      ],
      realWorldApplications: [
        'Hệ thống giám sát giao thông cho các thành phố Việt Nam',
        'Phân tích bán lẻ và hành vi khách hàng',
        'Chẩn đoán hình ảnh y tế cho các bệnh viện Việt Nam',
        'Giám sát nông nghiệp bằng hình ảnh từ máy bay không người lái',
        'Hệ thống kiểm soát chất lượng sản xuất',
      ],
    },
    {
      id: 'natural-language-processing',
      title: 'Xử Lý Ngôn Ngữ Tự Nhiên Cho Tiếng Việt',
      description:
        'Làm chủ các kỹ thuật NLP được thiết kế đặc biệt cho ngôn ngữ tiếng Việt, từ tiền xử lý văn bản đến các mô hình ngôn ngữ tiên tiến.',
      duration: '190 phút',
      difficulty: 'Nâng cao',
      objectives: [
        'Làm chủ các kỹ thuật tiền xử lý văn bản tiếng Việt',
        'Triển khai phân tích tình cảm cho nội dung tiếng Việt',
        'Xây dựng chatbot và AI đàm thoại',
        'Áp dụng nhận dạng thực thể có tên cho tiếng Việt',
        'Tạo hệ thống tóm tắt văn bản',
        'Triển khai các mô hình ngôn ngữ tiếng Việt',
      ],
      realWorldApplications: [
        'Giám sát mạng xã hội cho các thương hiệu Việt Nam',
        'Chatbot dịch vụ khách hàng bằng tiếng Việt',
        'Hệ thống phân tích và tóm tắt tin tức',
        'Ứng dụng học tiếng Việt',
        'Xử lý và phân tích tài liệu pháp lý',
      ],
    },
    {
      id: 'reinforcement-learning',
      title: 'Học Tăng Cường Và Ứng Dụng',
      description:
        'Khám phá Học tăng cường, một lĩnh vực của Học máy, nơi các tác nhân học cách đưa ra quyết định thông qua thử và sai để tối đa hóa phần thưởng.',
      duration: '180 phút',
      difficulty: 'Nâng cao',
      objectives: [
        'Hiểu các khái niệm cơ bản của RL: tác nhân, môi trường, phần thưởng',
        'Triển khai các thuật toán Q-learning và policy gradient',
        'Xây dựng các tác nhân AI chơi game',
        'Áp dụng RL cho các bài toán tối ưu hóa',
        'Hiểu về học tăng cường sâu',
        'Triển khai các tác nhân RL trong các kịch bản thế giới thực',
      ],
      realWorldApplications: [
        'Thuật toán giao dịch chứng khoán cho thị trường Việt Nam',
        'Phân bổ tài nguyên trong các hệ thống thành phố thông minh',
        'Điều hướng xe tự hành',
        'Phát triển game và giải trí',
        'Tối ưu hóa quy trình công nghiệp',
      ],
    },
    {
      id: 'mlops-production-deployment',
      title: 'MLOps Và Triển Khai Mô Hình Sản Xuất',
      description:
        'Làm chủ các thực hành MLOps để triển khai, giám sát và duy trì các mô hình ML trong môi trường sản xuất một cách hiệu quả và đáng tin cậy.',
      duration: '175 phút',
      difficulty: 'Nâng cao',
      objectives: [
        'Hiểu vòng đời và các thực hành tốt nhất của MLOps',
        'Triển khai tích hợp liên tục cho các mô hình ML',
        'Thiết lập hệ thống giám sát và cảnh báo mô hình',
        'Triển khai mô hình bằng cách sử dụng containerization',
        'Quản lý phiên bản và khôi phục mô hình',
        'Mở rộng quy mô hệ thống ML cho lưu lượng truy cập cao',
      ],
      realWorldApplications: [
        'Hệ thống gợi ý thương mại điện tử quy mô lớn',
        'Hệ thống phát hiện gian lận ngân hàng',
        'Công cụ chẩn đoán y tế',
        'Hệ thống tối ưu hóa giao thông',
        'Kiểm soát chất lượng sản xuất',
      ],
    },
    {
      id: 'ai-ethics-bias-fairness',
      title: 'Đạo Đức AI, Phát Hiện Thiên Vị Và Công Bằng',
      description:
        'Hiểu các cân nhắc về đạo đức trong phát triển AI, phát hiện và giảm thiểu thiên vị, và xây dựng các hệ thống AI công bằng và có trách nhiệm.',
      duration: '165 phút',
      difficulty: 'Trung bình',
      objectives: [
        'Hiểu các nguyên tắc và khuôn khổ đạo đức AI',
        'Xác định và đo lường thiên vị trong các mô hình ML',
        'Triển khai học máy nhận biết sự công bằng',
        'Thiết kế các hệ thống AI minh bạch và có thể giải thích được',
        'Xử lý các mối quan tâm về quyền riêng tư và bảo vệ dữ liệu',
        'Tạo ra các khuôn khổ quản trị AI có đạo đức',
      ],
      realWorldApplications: [
        'Hệ thống cho vay công bằng cho các tổ chức tài chính Việt Nam',
        'AI y tế không thiên vị trong các quần thể đa dạng của Việt Nam',
        'Hệ thống công nghệ giáo dục công bằng',
        'Công cụ đánh giá rủi ro tư pháp hình sự công bằng',
        'Hệ thống gợi ý toàn diện',
      ],
    },
  ],
};

export const aiMachineLearningLessons: BaseLessonData[] = [
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
    faqs: [
      {
        question: '"Machine Learning" có phải là "Trí tuệ nhân tạo" không?',
        answer:
          'Machine Learning (Học máy) là một tập hợp con của Trí tuệ nhân tạo (AI). AI là một lĩnh vực rộng lớn hơn, bao gồm nhiều phương pháp khác nhau để làm cho máy móc thông minh, và Machine Learning là một trong những phương pháp quan trọng và phổ biến nhất hiện nay, tập trung vào việc cho máy tính học từ dữ liệu.',
      },
      {
        question: 'Tôi cần biết lập trình để học Machine Learning không?',
        answer:
          'Có. Kiến thức lập trình, đặc biệt là Python, là rất cần thiết để triển khai và thử nghiệm các mô hình Machine Learning. Python có hệ sinh thái thư viện mạnh mẽ (như Scikit-learn, Pandas, NumPy) hỗ trợ rất tốt cho các tác vụ học máy.',
      },
      {
        question: 'Sự khác biệt giữa học có giám sát và không giám sát là gì?',
        answer:
          'Học có giám sát (supervised learning) học từ dữ liệu đã được gán nhãn (ví dụ: ảnh có nhãn "mèo", "chó"). Ngược lại, học không giám sát (unsupervised learning) làm việc với dữ liệu không có nhãn và cố gắng tự tìm ra cấu trúc hoặc các nhóm trong đó (ví dụ: phân nhóm khách hàng).',
      },
      {
        question: '"Hồi quy" và "phân loại" trong Machine Learning khác nhau như thế nào?',
        answer:
          'Phân loại (classification) là dự đoán một nhãn rời rạc (ví dụ: "email spam" hoặc "không phải spam"). Hồi quy (regression) là dự đoán một giá trị liên tục (ví dụ: dự đoán giá của một ngôi nhà).',
      },
      {
        question: 'Tại sao cần phải chia dữ liệu thành tập huấn luyện và tập kiểm tra?',
        answer:
          'Chúng ta chia dữ liệu để đánh giá hiệu suất của mô hình một cách khách quan. Mô hình học từ tập huấn luyện (training set) và sau đó hiệu suất của nó được kiểm tra trên tập kiểm tra (testing set) mà nó chưa từng thấy trước đây. Điều này giúp đảm bảo mô hình có khả năng tổng quát hóa tốt cho dữ liệu mới.',
      },
      {
        question: '"Overfitting" (quá khớp) là gì và làm thế nào để tránh nó?',
        answer:
          'Overfitting xảy ra khi một mô hình học quá tốt trên dữ liệu huấn luyện, bao gồm cả nhiễu, và do đó hoạt động kém trên dữ liệu mới. Các cách để tránh nó bao gồm sử dụng nhiều dữ liệu hơn, đơn giản hóa mô hình, hoặc sử dụng các kỹ thuật điều chuẩn (regularization).',
      },
      {
        question: 'Một vài ví dụ về ứng dụng Machine Learning trong đời sống hàng ngày ở Việt Nam?',
        answer:
          'Các ứng dụng rất phổ biến bao gồm: hệ thống gợi ý sản phẩm trên các trang thương mại điện tử như Tiki, Shopee; nhận dạng khuôn mặt để mở khóa điện thoại; trợ lý ảo trên Zalo; và các bộ lọc spam trong email.',
      },
      {
        question: 'Tôi có cần một máy tính rất mạnh để bắt đầu học Machine Learning không?',
        answer:
          'Không cần thiết. Để bắt đầu, một máy tính xách tay thông thường là đủ để chạy các ví dụ cơ bản. Khi bạn chuyển sang các mô hình phức tạp hơn, bạn có thể sử dụng các dịch vụ đám mây miễn phí như Google Colab cung cấp quyền truy cập vào GPU.',
      },
      {
        question: '"Kỹ thuật đặc trưng" (feature engineering) là gì và tại sao nó quan trọng?',
        answer:
          'Đây là quá trình sử dụng kiến thức chuyên môn để tạo ra các "đặc trưng" (features) hoặc tín hiệu đầu vào mới từ dữ liệu thô, giúp các thuật toán Machine Learning hoạt động tốt hơn. Đây thường là một trong những bước quan trọng nhất để xây dựng một mô hình hiệu quả.',
      },
      {
        question: 'Mất bao lâu để trở thành một Kỹ sư Machine Learning?',
        answer:
          'Thời gian phụ thuộc vào nền tảng và nỗ lực của bạn. Nếu bạn đã có kiến thức về lập trình và toán, bạn có thể học các kiến thức cơ bản trong vài tháng. Tuy nhiên, để trở thành một kỹ sư giỏi với kinh nghiệm thực tế, thường mất từ 1-2 năm học tập và thực hành liên tục.',
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
    faqs: [
      {
        question: 'Mạng nơ-ron (Neural Network) là gì và tại sao nó lại quan trọng?',
        answer:
          'Mạng nơ-ron là một mô hình tính toán lấy cảm hứng từ cấu trúc của bộ não sinh học. Nó bao gồm các "nơ-ron" nhân tạo được kết nối với nhau và có khả năng học hỏi các mẫu phức tạp từ dữ liệu. Deep Learning, một nhánh của Machine Learning, sử dụng các mạng nơ-ron có nhiều lớp (sâu) và đã tạo ra những đột phá trong các lĩnh vực như nhận dạng hình ảnh, giọng nói và ngôn ngữ tự nhiên.',
      },
      {
        question: 'Huấn luyện một mô hình Deep Learning có tốn kém không?',
        answer:
          'Có, việc huấn luyện các mô hình Deep Learning lớn có thể rất tốn kém về mặt tài nguyên tính toán (đặc biệt là GPU) và thời gian. Tuy nhiên, các kỹ thuật như học chuyển giao (transfer learning) và các nền tảng đám mây (Google Colab, Kaggle) cung cấp GPU miễn phí đã giúp cho việc học và thử nghiệm Deep Learning trở nên dễ tiếp cận hơn rất nhiều.',
      },
      {
        question: 'Deep Learning khác gì so với Machine Learning truyền thống?',
        answer:
          'Machine Learning truyền thống thường yêu cầu bước "kỹ thuật đặc trưng" (feature engineering) thủ công. Ngược lại, Deep Learning, với kiến trúc nhiều lớp, có khả năng tự động học các đặc trưng phức tạp trực tiếp từ dữ liệu thô (như pixel của ảnh), làm cho nó rất mạnh mẽ cho các bài toán phức tạp.',
      },
      {
        question: '"Hàm kích hoạt" (activation function) trong mạng nơ-ron có vai trò gì?',
        answer:
          'Hàm kích hoạt đưa tính phi tuyến vào mạng nơ-ron, cho phép nó học các mối quan hệ phức tạp và phi tuyến trong dữ liệu. Nếu không có hàm kích hoạt, một mạng nơ-ron dù có bao nhiêu lớp cũng chỉ tương đương với một mô hình tuyến tính đơn giản.',
      },
      {
        question: 'Tại sao GPU lại quan trọng cho việc huấn luyện mô hình Deep Learning?',
        answer:
          'GPU (Bộ xử lý đồ họa) có hàng ngàn lõi xử lý có thể thực hiện các phép toán song song, đặc biệt là các phép nhân ma trận, vốn là hoạt động cốt lõi trong việc huấn luyện mạng nơ-ron. Điều này làm cho việc huấn luyện trên GPU nhanh hơn rất nhiều so với trên CPU.',
      },
      {
        question: 'Mạng nơ-ron tích chập (CNN) và mạng nơ-ron hồi quy (RNN) khác nhau ở điểm nào?',
        answer:
          'CNN (Convolutional Neural Network) rất giỏi trong việc xử lý dữ liệu có cấu trúc lưới như hình ảnh. RNN (Recurrent Neural Network) được thiết kế để xử lý dữ liệu tuần tự như chuỗi văn bản hoặc chuỗi thời gian, vì nó có "bộ nhớ" về các thông tin trước đó.',
      },
      {
        question: 'Một vài framework Deep Learning phổ biến hiện nay là gì?',
        answer:
          'Các framework phổ biến và mạnh mẽ nhất hiện nay bao gồm TensorFlow (do Google phát triển) và PyTorch (do Facebook phát triển). Cả hai đều có hệ sinh thái lớn và được cộng đồng hỗ trợ rộng rãi.',
      },
      {
        question: 'Làm thế nào để chọn kiến trúc mạng nơ-ron phù hợp cho một bài toán?',
        answer:
          'Việc lựa chọn phụ thuộc vào loại dữ liệu và nhiệm vụ. Ví dụ, sử dụng CNN cho bài toán phân loại ảnh, sử dụng RNN hoặc Transformer cho dịch máy. Thường thì nên bắt đầu với một kiến trúc tiêu chuẩn đã được chứng minh là hiệu quả cho loại bài toán tương tự.',
      },
      {
        question: '"Vanishing gradient problem" (vấn đề gradien biến mất) là gì?',
        answer:
          'Đây là một vấn đề xảy ra trong các mạng nơ-ron rất sâu, nơi gradien (đạo hàm của hàm mất mát) trở nên rất nhỏ khi được lan truyền ngược về các lớp đầu tiên. Điều này làm cho các lớp đầu tiên học rất chậm hoặc không học được gì cả. Các kiến trúc như ResNet và việc sử dụng các hàm kích hoạt như ReLU đã giúp giải quyết vấn đề này.',
      },
      {
        question: 'Tôi có thể học Deep Learning mà không cần bằng cấp về khoa học máy tính không?',
        answer:
          'Chắc chắn có. Với sự phong phú của các khóa học trực tuyến, tài liệu mở và cộng đồng hỗ trợ, bất kỳ ai có đam mê và kiên trì đều có thể tự học Deep Learning. Điều quan trọng là có nền tảng tốt về lập trình Python và toán học.',
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
    faqs: [
      {
        question: 'Thị giác máy tính (Computer Vision) có thể làm được những gì?',
        answer:
          'Thị giác máy tính cho phép máy tính "nhìn" và "hiểu" thế giới thông qua hình ảnh và video. Các ứng dụng phổ biến bao gồm nhận dạng khuôn mặt, phát hiện đối tượng (ví dụ: xe cộ, người đi bộ), phân tích hình ảnh y tế để chẩn đoán bệnh, xe tự lái, và kiểm soát chất lượng sản phẩm trong nhà máy.',
      },
      {
        question: 'OpenCV là gì?',
        answer:
          'OpenCV (Open Source Computer Vision Library) là một thư viện mã nguồn mở hàng đầu dành cho các ứng dụng thị giác máy tính. Nó cung cấp hàng ngàn thuật toán được tối ưu hóa cho việc xử lý ảnh và video thời gian thực, giúp các nhà phát triển dễ dàng xây dựng các ứng dụng thị giác máy tính phức tạp.',
      },
      {
        question: 'Thị giác máy tính có thể được ứng dụng trong những lĩnh vực nào ở Việt Nam?',
        answer:
          'Tại Việt Nam, thị giác máy tính được ứng dụng rộng rãi trong giám sát giao thông thông minh, kiểm soát chất lượng tại các nhà máy sản xuất, nông nghiệp công nghệ cao (giám sát cây trồng qua drone), và hệ thống an ninh nhận dạng khuôn mặt.',
      },
      {
        question: '"Phân đoạn ảnh" (image segmentation) khác gì với "phát hiện đối tượng" (object detection)?',
        answer:
          'Phát hiện đối tượng vẽ một hộp bao quanh đối tượng (ví dụ: một hộp quanh con mèo). Phân đoạn ảnh đi xa hơn bằng cách phân loại từng pixel trong ảnh thuộc về đối tượng nào (ví dụ: tô màu tất cả các pixel thuộc về con mèo). Nó cung cấp một sự hiểu biết chi tiết hơn về hình dạng của đối tượng.',
      },
      {
        question: 'Công nghệ nhận dạng khuôn mặt hoạt động như thế nào?',
        answer:
          'Về cơ bản, hệ thống sẽ phát hiện một khuôn mặt trong ảnh, sau đó trích xuất các đặc trưng độc nhất của khuôn mặt đó (ví dụ: khoảng cách giữa hai mắt, hình dạng của mũi) thành một dạng vector số. Vector này sau đó được so sánh với các vector trong cơ sở dữ liệu để tìm ra người khớp nhất.',
      },
      {
        question: 'Liệu thị giác máy tính có thể hoạt động trong điều kiện ánh sáng yếu không?',
        answer:
          'Đây là một thách thức, nhưng có nhiều kỹ thuật để giải quyết. Các phương pháp bao gồm sử dụng camera hồng ngoại, hoặc các thuật toán xử lý ảnh đặc biệt để tăng cường độ sáng và giảm nhiễu trước khi đưa vào mô hình AI.',
      },
      {
        question: 'Những thách thức về đạo đức của công nghệ nhận dạng khuôn mặt là gì?',
        answer:
          'Các vấn đề đạo đức chính bao gồm quyền riêng tư (theo dõi mà không có sự đồng ý), khả năng sai sót và thiên vị (nhận dạng sai người hoặc hoạt động kém hiệu quả với các nhóm dân tộc thiểu số), và nguy cơ lạm dụng cho mục đích giám sát hàng loạt.',
      },
      {
        question: 'Làm thế nào để bắt đầu với một dự án thị giác máy tính cá nhân?',
        answer:
          'Một cách tuyệt vời để bắt đầu là thử một dự án đơn giản như xây dựng một bộ phân loại chó và mèo. Bạn có thể tìm các bộ dữ liệu công khai trên Kaggle, sử dụng thư viện OpenCV để xử lý ảnh và TensorFlow/PyTorch để xây dựng mô hình CNN.',
      },
      {
        question: 'OpenCV có phải là công cụ duy nhất cho thị giác máy tính không?',
        answer:
          'Không. Mặc dù OpenCV là công cụ rất phổ biến cho các tác vụ xử lý ảnh truyền thống, các thư viện học sâu như TensorFlow và PyTorch lại là công cụ chính để xây dựng các mô hình thị giác máy tính hiện đại dựa trên mạng nơ-ron.',
      },
      {
        question: '"Tăng cường dữ liệu" (data augmentation) trong thị giác máy tính là gì?',
        answer:
          'Đây là kỹ thuật tạo ra các phiên bản mới của hình ảnh huấn luyện bằng cách áp dụng các phép biến đổi ngẫu nhiên như xoay, lật, thay đổi độ sáng, hoặc phóng to. Nó giúp mô hình trở nên mạnh mẽ hơn và có khả năng tổng quát hóa tốt hơn với các hình ảnh trong thực tế.',
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
          'Một công cụ dịch thuật',
        ],
        correctAnswerIndex: 1,
        explanation:
          'PhoBERT là một mô hình ngôn ngữ dựa trên kiến trúc Transformer, được VinAI Research huấn luyện trước trên một tập dữ liệu tiếng Việt khổng lồ, giúp nó đạt hiệu suất cao trong các tác vụ NLP tiếng Việt.',
      },
      {
        question: '"Tokenization" trong NLP là gì?',
        options: [
          'Một loại tiền điện tử',
          'Quá trình mã hóa văn bản',
          'Quá trình tách một câu hoặc đoạn văn bản thành các đơn vị nhỏ hơn (tokens) như từ hoặc âm tiết',
          'Quá trình dịch văn bản',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Tokenization là bước tiền xử lý cơ bản và quan trọng trong hầu hết các tác vụ NLP, giúp máy tính có thể xử lý ngôn ngữ tự nhiên dưới dạng các đơn vị có thể quản lý được.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao xử lý ngôn ngữ tự nhiên (NLP) cho tiếng Việt lại khó hơn tiếng Anh?',
        answer:
          'Tiếng Việt có những đặc thù riêng như dấu thanh, sự đa dạng trong cách diễn đạt, từ đồng âm khác nghĩa, và sự thiếu hụt các bộ dữ liệu lớn, được gán nhãn chuẩn hóa so với tiếng Anh. Điều này đòi hỏi các mô hình NLP phải được thiết kế và huấn luyện đặc biệt để hiểu đúng ngữ cảnh và ý nghĩa.',
      },
      {
        question: '"Transformer" trong NLP là gì?',
        answer:
          'Transformer là một kiến trúc mô hình đột phá được giới thiệu vào năm 2017. Nó đã cách mạng hóa lĩnh vực NLP bằng cách sử dụng cơ chế "chú ý" (attention) để xử lý các mối quan hệ giữa các từ trong một câu, bất kể khoảng cách giữa chúng. Các mô hình nổi tiếng như BERT, GPT-3, và PhoBERT đều dựa trên kiến trúc Transformer.',
      },
      {
        question: 'NLP có thể giúp gì cho các doanh nghiệp Việt Nam?',
        answer:
          'NLP có thể giúp doanh nghiệp tự động hóa dịch vụ khách hàng qua chatbot, phân tích phản hồi của khách hàng trên mạng xã hội (social listening), tóm tắt các văn bản dài, và phân loại email hoặc tài liệu một cách thông minh.',
      },
      {
        question: '"Phân tích tình cảm" (sentiment analysis) là gì?',
        answer:
          'Đây là quá trình sử dụng NLP để xác định xem một đoạn văn bản thể hiện thái độ tích cực, tiêu cực hay trung lập. Nó rất hữu ích để theo dõi danh tiếng thương hiệu hoặc phân tích phản hồi về sản phẩm.',
      },
      {
        question: 'Chatbot và trợ lý ảo khác nhau như thế nào?',
        answer:
          'Một chatbot thường được thiết kế để thực hiện các tác vụ cụ thể trong một lĩnh vực hẹp (ví dụ: trả lời câu hỏi về sản phẩm). Một trợ lý ảo (như Siri, Google Assistant) có phạm vi rộng hơn, có thể thực hiện nhiều tác vụ khác nhau và duy trì cuộc trò chuyện tự nhiên hơn.',
      },
      {
        question: '"Word embedding" là gì?',
        answer:
          'Word embedding là một kỹ thuật biểu diễn các từ dưới dạng các vector số trong một không gian nhiều chiều. Các từ có nghĩa tương tự sẽ có các vector gần nhau trong không gian này. Điều này cho phép máy tính "hiểu" được mối quan hệ ngữ nghĩa giữa các từ.',
      },
      {
        question: 'Những thách thức lớn nhất khi xử lý tiếng Việt là gì?',
        answer:
          'Các thách thức chính bao gồm: tách từ (word segmentation) vì tiếng Việt không có ranh giới từ rõ ràng như tiếng Anh, xử lý dấu thanh và các biến thể vùng miền, cùng với sự thiếu hụt các bộ dữ liệu lớn và được gán nhãn tốt.',
      },
      {
        question: 'Tôi có thể tự xây dựng một chatbot đơn giản không?',
        answer:
          'Chắc chắn có. Các nền tảng như Dialogflow của Google, Rasa (mã nguồn mở) cung cấp các công cụ cho phép bạn xây dựng các chatbot dựa trên quy tắc hoặc thậm chí là AI mà không cần kiến thức quá sâu về NLP.',
      },
      {
        question: 'NLP có liên quan gì đến dịch máy (machine translation) không?',
        answer:
          'Có, dịch máy là một trong những ứng dụng quan trọng và lâu đời nhất của NLP. Các hệ thống dịch máy hiện đại như Google Translate sử dụng các mô hình NLP dựa trên Transformer để dịch văn bản giữa các ngôn ngữ một cách hiệu quả.',
      },
      {
        question: 'Làm thế nào để một mô hình NLP hiểu được tiếng lóng hoặc từ ngữ mới trên mạng xã hội?',
        answer:
          'Để hiểu được ngôn ngữ luôn thay đổi, các mô hình NLP cần được thường xuyên huấn luyện lại (retrain) trên các dữ liệu mới nhất từ mạng xã hội và các nguồn khác. Đây là một phần quan trọng của vòng đời MLOps cho các ứng dụng NLP.',
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
    faqs: [
      {
        question: 'Học tăng cường có cần dữ liệu được gán nhãn không?',
        answer:
          'Không. Khác với học có giám sát, học tăng cường không cần một bộ dữ liệu được gán nhãn trước. Tác nhân học trực tiếp thông qua tương tác với môi trường và nhận tín hiệu phần thưởng. Đây là một trong những điểm mạnh lớn nhất của RL.',
      },
      {
        question: 'AlphaGo là một ví dụ về loại học máy nào?',
        answer:
          'AlphaGo, chương trình chơi cờ vây nổi tiếng của DeepMind, là một ví dụ điển hình của Học tăng cường sâu (Deep Reinforcement Learning). Nó kết hợp mạng nơ-ron sâu để đánh giá thế cờ và học tăng cường để cải thiện chiến lược chơi của mình thông qua hàng triệu ván tự chơi.',
      },
      {
        question: 'Học tăng cường có thể được áp dụng ngoài lĩnh vực game không?',
        answer:
          'Chắc chắn có. RL có tiềm năng ứng dụng rất lớn trong nhiều lĩnh vực như tối ưu hóa chuỗi cung ứng, điều khiển robot, quản lý danh mục đầu tư tài chính, và cá nhân hóa các chiến dịch marketing.',
      },
      {
        question: 'Q-learning là gì?',
        answer:
          'Q-learning là một trong những thuật toán học tăng cường cơ bản và quan trọng nhất. Nó học một hàm "chất lượng" (Q-function) để ước tính phần thưởng kỳ vọng khi thực hiện một hành động cụ thể tại một trạng thái nhất định. Tác nhân sau đó có thể chọn hành động có giá trị Q cao nhất.',
      },
      {
        question: 'Sự khác biệt giữa "on-policy" và "off-policy" trong RL là gì?',
        answer:
          'Thuật toán "on-policy" (ví dụ: SARSA) cải thiện chính sách mà nó đang sử dụng để đưa ra quyết định. Thuật toán "off-policy" (ví dụ: Q-learning) cải thiện một chính sách khác với chính sách mà nó đang sử dụng để khám phá. Off-policy thường linh hoạt và hiệu quả hơn về mặt dữ liệu.',
      },
      {
        question: 'Mô phỏng (simulation) có vai trò gì trong học tăng cường?',
        answer:
          'Mô phỏng đóng một vai trò cực kỳ quan trọng. Nó cho phép tác nhân RL tương tác với một môi trường ảo hàng triệu hoặc hàng tỷ lần một cách an toàn và nhanh chóng, điều không thể thực hiện được trong thế giới thực. Hầu hết các thành công lớn của RL đều dựa vào môi trường mô phỏng.',
      },
      {
        question: 'Học tăng cường có khó học không?',
        answer:
          'RL được coi là một trong những nhánh khó hơn của Machine Learning vì nó liên quan đến nhiều khái niệm phức tạp (như quy hoạch động, phương sai cao). Tuy nhiên, với các thư viện hiện đại như Stable Baselines3 hoặc RLlib, việc bắt đầu và thử nghiệm với RL đã trở nên dễ dàng hơn nhiều.',
      },
      {
        question: 'Tương lai của Học tăng cường sẽ như thế nào?',
        answer:
          'Tương lai của RL rất hứa hẹn, đặc biệt là trong lĩnh vực robot học, nơi các robot có thể tự học các kỹ năng phức tạp. Ngoài ra, RL cũng được kỳ vọng sẽ tạo ra các hệ thống AI có khả năng ra quyết định và lập kế hoạch chiến lược tốt hơn trong các môi trường kinh doanh và khoa học.',
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
    objectives: [
      'Hiểu vòng đời và các thực hành tốt nhất của MLOps',
      'Triển khai tích hợp liên tục cho các mô hình ML',
      'Thiết lập hệ thống giám sát và cảnh báo mô hình',
      'Triển khai mô hình bằng cách sử dụng containerization',
      'Quản lý phiên bản và khôi phục mô hình',
      'Mở rộng quy mô hệ thống ML cho lưu lượng truy cập cao',
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
    faqs: [
      {
        question: 'Tại sao việc giám sát mô hình trong sản xuất lại quan trọng?',
        answer:
          'Việc giám sát là rất quan trọng để phát hiện "model drift" - hiện tượng hiệu suất của mô hình giảm dần theo thời gian do sự thay đổi trong dữ liệu thực tế. Giám sát giúp chúng ta biết khi nào cần huấn luyện lại hoặc cập nhật mô hình.',
      },
      {
        question: 'CI/CD trong MLOps là gì?',
        answer:
          'CI/CD là viết tắt của Tích hợp liên tục (Continuous Integration) và Triển khai liên tục (Continuous Deployment). Trong MLOps, nó không chỉ bao gồm việc kiểm thử và triển khai mã nguồn, mà còn cả việc kiểm thử, xác thực và triển khai các mô hình và đường ống dữ liệu một cách tự động.',
      },
      {
        question: 'Một "đường ống ML" (ML pipeline) là gì?',
        answer:
          'Một đường ống ML là một chuỗi các bước được tự động hóa để xây dựng và triển khai một mô hình ML. Nó thường bao gồm các bước như thu thập dữ liệu, tiền xử lý, huấn luyện mô hình, đánh giá, và triển khai. Tự động hóa đường ống này là một mục tiêu cốt lõi của MLOps.',
      },
      {
        question: 'MLflow là gì và nó được sử dụng để làm gì?',
        answer:
          'MLflow là một nền tảng mã nguồn mở để quản lý vòng đời của machine learning. Nó giúp theo dõi các thử nghiệm (experiment tracking), đóng gói mã (packaging code), và triển khai mô hình. Đây là một công cụ rất phổ biến trong MLOps.',
      },
      {
        question: 'Sự khác biệt giữa Data Scientist và MLOps Engineer là gì?',
        answer:
          'Data Scientist thường tập trung vào việc phân tích dữ liệu và xây dựng các mô hình thử nghiệm. MLOps Engineer tập trung vào việc lấy các mô hình đó và xây dựng các hệ thống mạnh mẽ, có thể mở rộng để chạy chúng trong môi trường sản xuất một cách đáng tin cậy.',
      },
      {
        question: 'Thử nghiệm A/B cho mô hình ML hoạt động như thế nào?',
        answer:
          'Trong thử nghiệm A/B, chúng ta triển khai đồng thời hai phiên bản của mô hình (ví dụ: mô hình cũ và mô hình mới) và phân chia lưu lượng người dùng cho cả hai. Sau đó, chúng ta so sánh các chỉ số kinh doanh (ví dụ: tỷ lệ nhấp chuột) để xác định xem mô hình nào hoạt động tốt hơn trong thực tế.',
      },
      {
        question: 'Tôi có cần biết về Kubernetes để làm MLOps không?',
        answer:
          'Kiến thức về Kubernetes (K8s) rất hữu ích vì nó là nền tảng tiêu chuẩn để triển khai các ứng dụng container hóa ở quy mô lớn. Nhiều công cụ MLOps được xây dựng để chạy trên K8s. Tuy nhiên, bạn có thể bắt đầu với các khái niệm đơn giản hơn như Docker và các dịch vụ đám mây được quản lý.',
      },
      {
        question: 'MLOps có phải chỉ dành cho các công ty lớn không?',
        answer:
          'Không hề. Ngay cả các dự án cá nhân hoặc các startup nhỏ cũng có thể hưởng lợi từ việc áp dụng các nguyên tắc MLOps cơ bản. Việc thiết lập một quy trình có tổ chức ngay từ đầu sẽ giúp tiết kiệm rất nhiều thời gian và công sức khi dự án phát triển.',
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
    objectives: [
      'Hiểu các nguyên tắc và khuôn khổ đạo đức AI',
      'Xác định và đo lường thiên vị trong các mô hình ML',
      'Triển khai học máy nhận biết sự công bằng',
      'Thiết kế các hệ thống AI minh bạch và có thể giải thích được',
      'Xử lý các mối quan tâm về quyền riêng tư và bảo vệ dữ liệu',
      'Tạo ra các khuôn khổ quản trị AI có đạo đức',
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
    faqs: [
      {
        question: 'Thiên vị trong AI đến từ đâu?',
        answer:
          'Thiên vị (bias) có thể đến từ nhiều nguồn. Phổ biến nhất là từ dữ liệu huấn luyện không đại diện hoặc phản ánh các định kiến xã hội sẵn có. Nó cũng có thể đến từ cách các đặc trưng được lựa chọn hoặc từ chính thuật toán.',
      },
      {
        question: 'Sự khác biệt giữa "công bằng" (fairness) và "chính xác" (accuracy) trong AI là gì?',
        answer:
          'Độ chính xác đo lường mức độ đúng đắn của các dự đoán của mô hình. Công bằng đo lường xem các sai sót của mô hình có được phân bổ một cách công bằng giữa các nhóm dân số khác nhau hay không. Đôi khi, việc tối ưu hóa độ chính xác có thể làm giảm tính công bằng và ngược lại.',
      },
      {
        question: 'Một ví dụ về tác hại của AI thiên vị là gì?',
        answer:
          'Một ví dụ nổi tiếng là hệ thống tuyển dụng bằng AI của Amazon đã bị phát hiện có xu hướng loại bỏ hồ sơ của các ứng viên nữ, vì nó được huấn luyện trên dữ liệu lịch sử mà trong đó nam giới chiếm đa số.',
      },
      {
        question: 'Làm thế nào chúng ta có thể đo lường sự công bằng của một mô hình AI?',
        answer:
          'Có nhiều chỉ số toán học để đo lường sự công bằng, ví dụ như "demographic parity" (đảm bảo tỷ lệ kết quả tích cực là như nhau giữa các nhóm) hoặc "equal opportunity" (đảm bảo tỷ lệ dương tính thật là như nhau giữa các nhóm). Việc chọn chỉ số nào phụ thuộc vào bối cảnh cụ thể.',
      },
      {
        question: 'Quyền riêng tư dữ liệu liên quan đến đạo đức AI như thế nào?',
        answer:
          'Các mô hình AI cần rất nhiều dữ liệu để huấn luyện, điều này làm dấy lên lo ngại về cách dữ liệu cá nhân được thu thập, sử dụng và bảo vệ. Các kỹ thuật như "học liên kết" (federated learning) hoặc "quyền riêng tư vi phân" (differential privacy) đang được phát triển để huấn luyện mô hình mà không cần truy cập trực tiếp vào dữ liệu nhạy cảm.',
      },
      {
        question: 'Ai là người chịu trách nhiệm khi một hệ thống AI mắc lỗi?',
        answer:
          'Đây là một câu hỏi pháp lý và đạo đức phức tạp chưa có câu trả lời rõ ràng. Trách nhiệm có thể thuộc về nhà phát triển, công ty triển khai hệ thống, hoặc thậm chí là người dùng. Việc thiết lập các quy định và luật lệ rõ ràng về trách nhiệm AI là một thách thức lớn hiện nay.',
      },
      {
        question: 'Liệu AI có thể thực sự "có đạo đức" không?',
        answer:
          'Bản thân AI không có đạo đức; chúng là công cụ. "Đạo đức AI" là việc con người thiết kế, xây dựng và triển khai các hệ thống AI theo cách phù hợp với các nguyên tắc và giá trị đạo đức của xã hội. Trách nhiệm nằm ở con người.',
      },
      {
        question: 'Tôi có thể làm gì để đóng góp vào việc phát triển AI có trách nhiệm?',
        answer:
          'Dù bạn là nhà phát triển, người dùng hay nhà hoạch định chính sách, bạn đều có thể đóng góp. Hãy luôn đặt câu hỏi về sự công bằng và tác động xã hội của các hệ thống AI, yêu cầu sự minh bạch, và tham gia vào các cuộc thảo luận công khai về tương lai của công nghệ này.',
      },
    ],
  },
];
