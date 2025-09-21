import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface DataScienceAnalyticsLesson extends BaseLessonData {
  tools: string[];
  programmingLanguages: string[];
  analyticsTools: string[];
  dataTypes: string[];
  machineLearningMethods: string[];
  industryApplications: string[];
  vietnamContext: {
    title: string;
    content: string[];
  };
  careerConnect: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
}

export const lessons: DataScienceAnalyticsLesson[] = [
  {
    id: 'data-science-fundamentals-python',
    title: 'Data Science Fundamentals với Python',
    description:
      'Master data science fundamentals sử dụng Python, từ data manipulation đến statistical analysis và visualization.',
    duration: '240 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    objectives: [
      'Master Python cho data science workflows',
      'Understand statistical analysis fundamentals',
      'Create compelling data visualizations',
      'Perform exploratory data analysis effectively',
      'Implement basic machine learning models',
    ],
    prerequisites: [
      'Basic Python programming knowledge',
      'Understanding of mathematics and statistics',
      'Logical thinking và problem-solving skills',
      'Willingness to work với large datasets',
    ],
    programmingLanguages: [
      'Python (pandas, numpy, scipy)',
      'SQL cho database operations',
      'R for statistical computing',
      'Jupyter Notebooks for analysis',
      'Git for version control',
    ],
    analyticsTools: [
      'Pandas for data manipulation',
      'NumPy for numerical computing',
      'Matplotlib/Seaborn for visualization',
      'Scikit-learn for machine learning',
      'Jupyter Lab for development',
    ],
    dataTypes: [
      'Structured data (CSV, databases)',
      'Semi-structured data (JSON, XML)',
      'Unstructured data (text, images)',
      'Time series data',
      'Geospatial data',
    ],
    machineLearningMethods: [
      'Supervised learning algorithms',
      'Unsupervised learning techniques',
      'Feature engineering methods',
      'Model evaluation frameworks',
      'Cross-validation strategies',
    ],
    industryApplications: [
      'Business intelligence và analytics',
      'Customer behavior analysis',
      'Financial risk modeling',
      'Healthcare data analysis',
      'Marketing optimization',
    ],
    exercises: [
      {
        title: 'Complete Data Analysis Project',
        description: 'Execute end-to-end data science project từ raw data đến actionable insights',
        difficulty: 'Nâng cao',
        materials: [
          'Python development environment',
          'Jupyter Notebook setup',
          'Sample dataset (Vietnamese e-commerce)',
          'Statistical analysis libraries',
        ],
        procedure: [
          'Define business problem và research questions',
          'Collect và explore dataset comprehensively',
          'Clean và preprocess data for analysis',
          'Perform exploratory data analysis (EDA)',
          'Apply statistical tests và hypothesis testing',
          'Build predictive models using machine learning',
          'Validate model performance và accuracy',
          'Create compelling visualizations',
          'Present findings và recommendations',
          'Document methodology và code',
        ],
        expectedResults: 'Professional data science project demonstrating statistical insights',
        solution: 'Systematic approach to data-driven decision making',
      },
    ],
    realWorldApplications: [
      'E-commerce personalization systems',
      'Financial fraud detection models',
      'Healthcare outcome prediction',
      'Supply chain optimization',
      'Marketing campaign effectiveness analysis',
    ],
    caseStudies: [
      {
        title: 'Vietnamese Retail Chain Analytics',
        organization: 'Major Vietnamese Retail Company',
        problem: 'Inventory management inefficiencies causing stockouts và overstock',
        solution: 'Predictive analytics model for demand forecasting',
        impact: '30% reduction trong inventory costs, 95% stockout prevention',
        innovations: [
          'Seasonal demand pattern recognition',
          'Regional preference modeling',
          'Weather impact factor integration',
        ],
      },
    ],
    resources: [
      {
        title: 'Python for Data Science Handbook',
        url: 'https://jakevdp.github.io/PythonDataScienceHandbook',
        type: 'Educational Resource',
      },
    ],
    vietnamContext: {
      title: 'Khoa học Dữ liệu tại Việt Nam: Cơ hội và Thách thức',
      content: [
        'Nhu cầu nhân lực Khoa học Dữ liệu tại Việt Nam đang bùng nổ, đặc biệt trong các lĩnh vực như E-commerce (Tiki, Shopee), FinTech (MoMo, VNPay), và Viễn thông (Viettel, FPT).',
        'FPT Software và Viettel AI là hai trong số các đơn vị tiên phong tại Việt Nam trong việc nghiên cứu và ứng dụng AI và Khoa học Dữ liệu, đặc biệt là trong xử lý ngôn ngữ tự nhiên tiếng Việt và nhận dạng hình ảnh.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Mạnh Tường',
      title: 'Phó Tổng Giám đốc, Khối Zalo',
      company: 'VNG Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-manh-tuong',
      quote:
        'Dữ liệu giống như dầu mỏ của thế kỷ 21, và các nhà khoa học dữ liệu là những người kỹ sư lọc dầu. Tại Zalo, chúng tôi không chỉ ngồi trên một mỏ dữ liệu khổng lồ, mà còn phải biến nó thành những sản phẩm thông minh, hữu ích cho hàng chục triệu người dùng mỗi ngày.',
    },
    quizzes: [
      {
        question: 'Pandas trong Python thường được sử dụng để làm gì trong Khoa học Dữ liệu?',
        options: [
          'Vẽ biểu đồ 3D',
          'Thao tác và phân tích dữ liệu có cấu trúc (giống như bảng tính)',
          'Xây dựng giao diện người dùng',
          'Tấn công mạng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Pandas là thư viện nền tảng cho việc làm sạch, chuyển đổi, và phân tích dữ liệu ở dạng bảng (DataFrame) trong Python, là công cụ không thể thiếu của bất kỳ nhà khoa học dữ liệu nào.',
      },
    ],
    faqs: [
      {
        question: 'Khoa học dữ liệu, Kỹ thuật dữ liệu và Phân tích dữ liệu khác nhau như thế nào?',
        answer:
          'Một cách đơn giản: Kỹ sư dữ liệu xây dựng "đường ống" để thu thập và chuẩn bị dữ liệu. Nhà khoa học dữ liệu sử dụng dữ liệu đó để xây dựng các mô hình dự báo phức tạp. Chuyên viên phân tích dữ liệu phân tích dữ liệu lịch sử để tìm ra các insight và xu hướng, thường trình bày qua các báo cáo và dashboard.',
      },
      {
        question: 'Tôi có cần bằng Tiến sĩ để trở thành một nhà khoa học dữ liệu không?',
        answer:
          'Không cần thiết, đặc biệt là cho các vị trí trong ngành. Mặc dù nhiều nhà khoa học dữ liệu trong lĩnh vực nghiên cứu có bằng cấp cao, nhưng trong ngành công nghiệp, các kỹ năng thực tế, kinh nghiệm dự án và một portfolio tốt thường được đánh giá cao hơn bằng cấp học thuật.',
      },
      {
        question: 'Ngôn ngữ lập trình nào là tốt nhất cho Khoa học Dữ liệu?',
        answer:
          'Python hiện là ngôn ngữ phổ biến và được ưa chuộng nhất trong cộng đồng Khoa học Dữ liệu nhờ hệ sinh thái thư viện mạnh mẽ (Pandas, Scikit-learn, TensorFlow). R cũng là một lựa chọn tốt, đặc biệt trong môi trường học thuật và thống kê.',
      },
      {
        question: 'Làm thế nào để xây dựng một portfolio Khoa học Dữ liệu ấn tượng?',
        answer:
          'Hãy thực hiện các dự án cá nhân từ đầu đến cuối. Chọn một bộ dữ liệu công khai bạn quan tâm (ví dụ trên Kaggle), đặt ra một câu hỏi kinh doanh, và thực hiện toàn bộ quy trình: làm sạch dữ liệu, phân tích, xây dựng mô hình, và trình bày kết quả. Ghi lại quá trình này trên GitHub hoặc một bài blog.',
      },
      {
        question: 'Exploratory Data Analysis (EDA) là gì và tại sao nó quan trọng?',
        answer: 'EDA là quá trình khám phá ban đầu một bộ dữ liệu để tóm tắt các đặc điểm chính của nó, thường bằng các phương pháp trực quan. Nó giống như việc "làm quen" với dữ liệu trước khi đi sâu vào mô hình hóa, giúp phát hiện các điểm bất thường, các mẫu và các mối quan hệ tiềm ẩn.',
      },
      {
        question: 'Sự khác biệt giữa học có giám sát (supervised learning) và học không giám sát (unsupervised learning) là gì?',
        answer: 'Trong học có giám sát, bạn có dữ liệu đã được "gán nhãn" (ví dụ: email là spam hay không spam) và mục tiêu là dạy mô hình dự đoán nhãn cho dữ liệu mới. Trong học không giám sát, bạn không có nhãn và mục tiêu là để mô hình tự tìm ra cấu trúc hoặc các cụm (cluster) trong dữ liệu.',
      },
      {
        question: 'Feature Engineering là gì?',
        answer: 'Đây là quá trình sử dụng kiến thức chuyên môn về lĩnh vực để tạo ra các "tính năng" (features) mới từ dữ liệu thô, giúp các thuật toán học máy hoạt động hiệu quả hơn. Ví dụ, từ ngày sinh, bạn có thể tạo ra tính năng "tuổi". Đây thường là một trong những bước quan trọng nhất quyết định sự thành công của một dự án.',
      },
      {
        question: 'Làm thế nào để xử lý dữ liệu bị thiếu (missing data)?',
        answer: 'Có nhiều cách: bạn có thể xóa các hàng hoặc cột có dữ liệu bị thiếu (nếu số lượng ít), hoặc "điền vào" (impute) các giá trị bị thiếu bằng các giá trị thống kê như trung bình, trung vị, hoặc sử dụng các mô hình phức tạp hơn để dự đoán giá trị bị thiếu.',
      },
      {
        question: 'Overfitting (quá khớp) là gì?',
        answer: 'Overfitting xảy ra khi một mô hình học quá "thuộc lòng" dữ liệu huấn luyện, bao gồm cả nhiễu, đến mức nó hoạt động rất tốt trên dữ liệu đó nhưng lại hoạt động kém trên dữ liệu mới. Nó giống như một học sinh học vẹt, chỉ biết những gì trong sách mà không thể áp dụng vào thực tế.',
      },
      {
        question: 'Jupyter Notebook là gì?',
        answer: 'Đó là một môi trường làm việc tương tác dựa trên web cho phép bạn viết và thực thi code (thường là Python), xem kết quả, trực quan hóa dữ liệu và viết các ghi chú giải thích trong cùng một tài liệu. Nó rất phổ biến cho việc phân tích dữ liệu và thử nghiệm các mô hình.',
      },
    ],
  },
  {
    id: 'big-data-machine-learning-applications',
    title: 'Big Data Processing & Machine Learning Applications',
    description:
      'Master big data processing techniques và advanced machine learning applications cho enterprise-scale solutions.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
    tools: ['Apache Spark', 'Hadoop', 'TensorFlow', 'PyTorch', 'MLflow'],
    objectives: [
      'Understand big data processing architectures',
      'Implement distributed computing solutions',
      'Build scalable machine learning pipelines',
      'Deploy models to production environments',
      'Monitor và maintain ML systems',
    ],
    prerequisites: [
      'Intermediate programming skills',
      'Understanding of machine learning concepts',
      'Database và cloud computing knowledge',
      'Statistical modeling experience',
    ],
    programmingLanguages: [
      'Python (advanced libraries)',
      'Scala for Spark development',
      'SQL for data querying',
      'Docker for containerization',
      'Kubernetes for orchestration',
    ],
    analyticsTools: [
      'Apache Spark for distributed computing',
      'Hadoop ecosystem tools',
      'TensorFlow/PyTorch for deep learning',
      'MLflow for model management',
      'Apache Kafka for streaming',
    ],
    dataTypes: [
      'Streaming data (real-time)',
      'Distributed datasets (petabyte scale)',
      'Multi-modal data (text, image, audio)',
      'Graph data structures',
      'High-frequency time series',
    ],
    machineLearningMethods: [
      'Deep learning architectures',
      'Ensemble methods',
      'Reinforcement learning',
      'Transfer learning techniques',
      'Automated machine learning (AutoML)',
    ],
    industryApplications: [
      'Real-time recommendation systems',
      'Fraud detection at scale',
      'Computer vision applications',
      'Natural language processing',
      'IoT sensor data analysis',
    ],
    exercises: [
      {
        title: 'Scalable ML Pipeline Development',
        description: 'Build production-ready machine learning pipeline handling large-scale data',
        difficulty: 'Nâng cao',
        materials: [
          'Cloud computing platform access',
          'Big data processing frameworks',
          'Machine learning libraries',
          'Monitoring và logging tools',
        ],
        procedure: [
          'Design scalable data processing architecture',
          'Setup distributed computing environment',
          'Implement data ingestion pipelines',
          'Build feature engineering workflows',
          'Train models on distributed systems',
          'Setup model serving infrastructure',
          'Implement monitoring và alerting',
          'Test system performance và scalability',
          'Deploy to production environment',
          'Monitor và maintain system health',
        ],
        expectedResults: 'Production ML system processing 1M+ records daily với 99% uptime',
        solution: 'Enterprise-grade machine learning infrastructure',
      },
    ],
    realWorldApplications: [
      'Social media recommendation engines',
      'Autonomous vehicle systems',
      'Smart city infrastructure',
      'Financial trading algorithms',
      'Healthcare diagnostic systems',
    ],
    caseStudies: [
      {
        title: 'Vietnamese Social Media Platform ML',
        organization: 'Major Vietnamese Social Platform',
        problem: 'User engagement declining due to irrelevant content',
        solution: 'Real-time recommendation system using deep learning',
        impact: 'User engagement increased 60%, time spent increased 45%',
        innovations: [
          'Vietnamese language NLP optimization',
          'Cultural preference modeling',
          'Real-time personalization at scale',
        ],
      },
    ],
    resources: [
      {
        title: 'Spark: The Definitive Guide',
        url: 'https://spark.apache.org/docs/latest',
        type: 'Technical Documentation',
      },
    ],
    vietnamContext: {
      title: 'Dữ liệu lớn (Big Data) tại Việt Nam',
      content: [
        'Các công ty viễn thông như Viettel, Mobifone, Vinaphone đang quản lý những tập dữ liệu khổng lồ về thông tin thuê bao và lưu lượng mạng, là nguồn tài nguyên quý giá cho việc phân tích hành vi người dùng và quy hoạch hạ tầng.',
        'Thương mại điện tử và các siêu ứng dụng (super-apps) như Grab, Gojek tạo ra một lượng dữ liệu giao dịch và di chuyển khổng lồ mỗi ngày, được sử dụng để tối ưu hóa logistics, giá cả và gợi ý dịch vụ.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Hồng Việt',
      title: 'Tổng Giám đốc',
      company: 'FPT Smart Cloud',
      imageUrl: 'https://i.pravatar.cc/150?u=le-hong-viet',
      quote:
        'Big Data không chỉ là về kích thước, mà là về tốc độ và sự đa dạng. Thách thức lớn nhất không phải là lưu trữ dữ liệu, mà là xử lý nó đủ nhanh để đưa ra quyết định kinh doanh trong thời gian thực. Tại FPT, chúng tôi xây dựng những "nhà máy" xử lý dữ liệu để giúp các doanh nghiệp Việt Nam tăng tốc trong cuộc đua chuyển đổi số.',
    },
    quizzes: [
      {
        question: 'Apache Spark thường được sử dụng để giải quyết vấn đề gì trong lĩnh vực Big Data?',
        options: [
          'Lưu trữ file nhỏ',
          'Gửi email',
          'Xử lý và phân tích dữ liệu phân tán trên quy mô lớn một cách nhanh chóng',
          'Thiết kế website',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Spark là một framework tính toán phân tán mạnh mẽ, cho phép xử lý các tập dữ liệu khổng lồ (terabytes, petabytes) nhanh hơn nhiều so với các công nghệ truyền thống như Hadoop MapReduce.',
      },
    ],
    faqs: [
      {
        question: 'Big Data (Dữ liệu lớn) được định nghĩa bởi những đặc điểm nào?',
        answer: 'Big Data thường được định nghĩa bởi 3 chữ V (và sau này mở rộng thêm): Volume (Khối lượng lớn), Velocity (Tốc độ cao, dữ liệu được tạo ra liên tục), và Variety (Sự đa dạng, từ dữ liệu có cấu trúc đến phi cấu trúc như văn bản, hình ảnh).',
      },
      {
        question: 'Hadoop và Spark khác nhau như thế nào?',
        answer: 'Hadoop (cụ thể là MapReduce) xử lý dữ liệu trên đĩa, làm cho nó chậm hơn nhưng phù hợp cho các tác vụ xử lý hàng loạt (batch processing) rất lớn. Spark xử lý dữ liệu trong bộ nhớ (in-memory), giúp nó nhanh hơn đáng kể và linh hoạt hơn cho cả xử lý hàng loạt và phân tích tương tác.',
      },
      {
        question: 'Deep Learning (Học sâu) là gì và nó khác gì với Machine Learning truyền thống?',
        answer: 'Deep Learning là một nhánh của Machine Learning sử dụng các mạng nơ-ron nhân tạo có nhiều lớp (do đó có từ "sâu"). Nó đặc biệt mạnh trong việc tự động học các tính năng phức tạp từ dữ liệu phi cấu trúc như hình ảnh, âm thanh, văn bản, trong khi Machine Learning truyền thống thường cần bước "feature engineering" thủ công.',
      },
      {
        question: 'TensorFlow và PyTorch là gì?',
        answer: 'Đây là hai framework mã nguồn mở phổ biến nhất để xây dựng và huấn luyện các mô hình Deep Learning. TensorFlow (phát triển bởi Google) mạnh về khả năng triển khai sản phẩm và hệ sinh thái. PyTorch (phát triển bởi Facebook) được yêu thích trong cộng đồng nghiên cứu vì tính linh hoạt và dễ sử dụng.',
      },
      {
        question: 'MLOps (Machine Learning Operations) là gì?',
        answer: 'MLOps là tập hợp các thực hành nhằm mục đích triển khai và duy trì các mô hình học máy trong môi trường sản phẩm một cách đáng tin cậy và hiệu quả. Nó kết hợp Machine Learning, DevOps và Kỹ thuật dữ liệu, bao gồm các khía cạnh như tự động hóa, giám sát và quản lý vòng đời mô hình.',
      },
      {
        question: 'Một ví dụ về ứng dụng của Big Data và Machine Learning trong thực tế?',
        answer: 'Hệ thống gợi ý sản phẩm của Amazon là một ví dụ điển hình. Nó phân tích lịch sử mua sắm và hành vi duyệt web của hàng triệu người dùng (Big Data) để xây dựng các mô hình Machine Learning dự đoán những sản phẩm bạn có thể quan tâm và hiển thị chúng cho bạn trong thời gian thực.',
      },
      {
        question: 'Containerization (ví dụ: Docker) giúp gì trong việc triển khai mô hình ML?',
        answer: 'Docker cho phép bạn "đóng gói" mô hình của mình cùng với tất cả các thư viện và môi trường cần thiết vào một "container" duy nhất. Điều này đảm bảo rằng mô hình sẽ chạy nhất quán trên mọi môi trường, từ máy tính của nhà phát triển đến máy chủ sản phẩm, giải quyết vấn đề "nó chạy trên máy của tôi mà!".',
      },
      {
        question: 'Xử lý dữ liệu streaming (streaming data processing) là gì?',
        answer: 'Đây là việc xử lý dữ liệu ngay khi nó được tạo ra, trong thời gian thực, thay vì chờ đợi để xử lý theo lô. Nó rất quan trọng cho các ứng dụng cần phản ứng tức thì, chẳng hạn như phát hiện gian lận thẻ tín dụng hoặc phân tích dữ liệu từ cảm biến IoT.',
      },
      {
        question: 'Tại sao cần các hệ thống phân tán như Spark để xử lý Big Data?',
        answer: 'Khi một tập dữ liệu quá lớn để chứa hoặc xử lý trên một máy tính duy nhất, chúng ta cần phải chia nhỏ dữ liệu và công việc xử lý ra nhiều máy tính (một cụm - cluster). Các hệ thống như Spark cung cấp một framework để quản lý và điều phối công việc phức tạp này một cách tự động.',
      },
      {
        question: 'Reinforcement Learning (Học tăng cường) là gì?',
        answer: 'Đây là một loại hình học máy trong đó một "tác nhân" (agent) học cách hành động trong một môi trường để tối đa hóa phần thưởng. Nó không học từ dữ liệu được gán nhãn mà học thông qua thử và sai. Đây là công nghệ đằng sau các AI chơi game như AlphaGo hay xe tự lái.',
      },
    ],
  },
  {
    id: 'business-intelligence-data-storytelling',
    title: 'Business Intelligence & Data Storytelling',
    description:
      'Transform data insights thành compelling business stories và drive strategic decision-making trong organizations.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=8EMW7io4rSI',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tools: ['Power BI', 'Tableau', 'SQL', 'Python', 'Excel'],
    objectives: [
      'Master data storytelling techniques',
      'Create compelling business intelligence dashboards',
      'Communicate insights to stakeholders effectively',
      'Build data-driven organizational culture',
      'Implement self-service analytics solutions',
    ],
    prerequisites: [
      'Data analysis experience',
      'Understanding of business operations',
      'Presentation và communication skills',
      'Stakeholder management experience',
    ],
    programmingLanguages: [
      'SQL for data extraction',
      'Python for analysis automation',
      'DAX for Power BI calculations',
      'JavaScript for custom visualizations',
      'R for statistical reporting',
    ],
    analyticsTools: [
      'Power BI for business intelligence',
      'Tableau for advanced visualization',
      'Excel for rapid prototyping',
      'Google Data Studio for web analytics',
      'Looker for self-service BI',
    ],
    dataTypes: [
      'Business performance metrics',
      'Financial và operational data',
      'Customer journey analytics',
      'Market research insights',
      'Competitive intelligence data',
    ],
    machineLearningMethods: [
      'Predictive business modeling',
      'Customer segmentation analysis',
      'Forecast accuracy optimization',
      'Anomaly detection for business metrics',
      'A/B testing statistical analysis',
    ],
    industryApplications: [
      'Executive decision support systems',
      'Sales performance optimization',
      'Customer experience improvement',
      'Operational efficiency enhancement',
      'Market opportunity identification',
    ],
    exercises: [
      {
        title: 'Executive Dashboard Development',
        description: 'Create executive-level business intelligence dashboard với actionable insights',
        difficulty: 'Nâng cao',
        materials: [
          'Business intelligence software',
          'Company performance data',
          'Visualization design tools',
          'Stakeholder feedback systems',
        ],
        procedure: [
          'Understand executive information needs',
          'Design intuitive dashboard layouts',
          'Integrate multiple data sources',
          'Create meaningful KPI visualizations',
          'Implement interactive filtering options',
          'Add predictive analytics components',
          'Test usability với stakeholders',
          'Deploy và train users',
          'Establish maintenance procedures',
          'Gather feedback và iterate',
        ],
        expectedResults: 'Executive dashboard driving 50% faster decision-making',
        solution: 'User-centric business intelligence solution',
      },
    ],
    realWorldApplications: [
      'Corporate strategy development',
      'Performance management systems',
      'Risk assessment frameworks',
      'Market analysis platforms',
      'Operational optimization tools',
    ],
    caseStudies: [
      {
        title: 'Manufacturing Company BI Transformation',
        organization: 'Vietnamese Manufacturing Conglomerate',
        problem: 'Decisions based on outdated reports, slow response to market changes',
        solution: 'Real-time business intelligence platform với predictive capabilities',
        impact: 'Decision-making speed increased 300%, operational efficiency improved 25%',
        innovations: [
          'Real-time production monitoring',
          'Predictive maintenance analytics',
          'Market demand forecasting integration',
        ],
      },
    ],
    resources: [
      {
        title: 'Storytelling with Data',
        url: 'http://www.storytellingwithdata.com',
        type: 'Methodology Guide',
      },
    ],
    vietnamContext: {
      title: 'Kể chuyện bằng Dữ liệu trong bối cảnh Việt Nam',
      content: [
        'Các báo cáo kinh doanh tại Việt Nam thường bị chỉ trích là khô khan và đầy số liệu. Kỹ năng kể chuyện bằng dữ liệu giúp các nhà phân tích biến những con số đó thành những câu chuyện có ý nghĩa, thuyết phục được ban lãnh đạo.',
        'Trong các buổi thuyết trình gọi vốn (pitching), các startup Việt Nam thành công thường không chỉ trình bày số liệu mà còn kể một câu chuyện hấp dẫn về thị trường, vấn đề và giải pháp của họ bằng dữ liệu.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Phi Vân',
      title: 'Chuyên gia nhượng quyền thương hiệu, Tác giả sách',
      company: 'Retail & Franchise Asia',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-phi-van',
      quote:
        'Dữ liệu không biết nói dối, nhưng nó cũng không tự biết kể chuyện. Một nhà lãnh đạo giỏi phải là một người kể chuyện giỏi, người có thể thổi hồn vào những con số, biến chúng thành một tầm nhìn, một chiến lược mà mọi người đều muốn đi theo. Đừng chỉ cho tôi biểu đồ, hãy kể cho tôi nghe câu chuyện đằng sau nó.',
    },
    quizzes: [
      {
        question: 'Mục tiêu chính của "kể chuyện bằng dữ liệu" (data storytelling) là gì?',
        options: [
          'Làm cho báo cáo trông đẹp hơn',
          'Sử dụng càng nhiều biểu đồ phức tạp càng tốt',
          'Trình bày dữ liệu một cách nhàm chán',
          'Truyền đạt những hiểu biết sâu sắc từ dữ liệu một cách rõ ràng, hấp dẫn và đáng nhớ để thúc đẩy hành động.',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Kể chuyện bằng dữ liệu là sự kết hợp giữa khoa học (dữ liệu) và nghệ thuật (cách kể chuyện) để làm cho thông tin trở nên dễ hiểu, thuyết phục và có tác động mạnh mẽ đến người nghe.',
      },
    ],
    faqs: [
      {
        question: 'Business Intelligence (BI) là gì?',
        answer: 'Business Intelligence là quá trình sử dụng công nghệ để thu thập, tích hợp, phân tích và trình bày thông tin kinh doanh. Mục tiêu của BI là giúp các nhà lãnh đạo đưa ra các quyết định kinh doanh tốt hơn, nhanh hơn và dựa trên dữ liệu thực tế thay vì cảm tính.',
      },
      {
        question: 'Sự khác biệt giữa Power BI và Tableau là gì?',
        answer: 'Cả hai đều là công cụ BI hàng đầu. Power BI (của Microsoft) thường được đánh giá cao về khả năng tích hợp chặt chẽ với hệ sinh thái Microsoft (Excel, Azure), dễ sử dụng cho người mới bắt đầu và có giá cả cạnh tranh. Tableau thường được coi là mạnh hơn về khả năng trực quan hóa dữ liệu phức tạp và linh hoạt hơn cho các nhà phân tích chuyên sâu.',
      },
      {
        question: 'Dashboard là gì và một dashboard tốt cần những yếu tố nào?',
        answer: 'Dashboard là một giao diện trực quan cung cấp cái nhìn tổng quan về các chỉ số hiệu suất chính (KPIs) quan trọng nhất. Một dashboard tốt cần: rõ ràng (hiển thị đúng thông tin quan trọng), đơn giản (không làm người xem bị quá tải), và có tính hành động (giúp người xem biết cần phải làm gì tiếp theo).',
      },
      {
        question: 'Tại sao "kể chuyện" lại quan trọng khi làm việc với dữ liệu?',
        answer: 'Con người có xu hướng ghi nhớ và bị thuyết phục bởi những câu chuyện hơn là những con số khô khan. Kể chuyện giúp tạo ra ngữ cảnh, kết nối cảm xúc và làm cho các insight từ dữ liệu trở nên dễ hiểu và đáng nhớ, từ đó thúc đẩy sự thay đổi và hành động trong một tổ chức.',
      },
      {
        question: 'SQL có vai trò gì trong Business Intelligence?',
        answer: 'SQL (Structured Query Language) là ngôn ngữ tiêu chuẩn để truy vấn và lấy dữ liệu từ các cơ sở dữ liệu quan hệ. Đây là kỹ năng nền tảng cho bất kỳ chuyên gia BI nào, cho phép họ trích xuất chính xác dữ liệu cần thiết để phân tích và tạo báo cáo.',
      },
      {
        question: 'Self-service BI (BI tự phục vụ) là gì?',
        answer: 'Đây là một phương pháp cho phép người dùng cuối (ví dụ: nhân viên phòng marketing, bán hàng) tự tạo báo cáo và dashboard của riêng họ mà không cần sự can thiệp liên tục từ bộ phận IT hoặc các nhà phân tích dữ liệu. Các công cụ như Power BI và Tableau rất mạnh trong việc hỗ trợ self-service BI.',
      },
      {
        question: 'Làm thế nào để chọn đúng KPI (Key Performance Indicator)?',
        answer: 'Một KPI tốt phải trực tiếp liên quan đến mục tiêu kinh doanh của bạn. Thay vì theo dõi hàng chục chỉ số, hãy tập trung vào một vài chỉ số quan trọng nhất thực sự phản ánh sự thành công. Ví dụ, đối với một trang web thương mại điện tử, "Tỷ lệ chuyển đổi" quan trọng hơn nhiều so với "Số lượt xem trang".',
      },
      {
        question: 'DAX trong Power BI là gì?',
        answer: 'DAX (Data Analysis Expressions) là một ngôn ngữ công thức được sử dụng trong Power BI (và các công cụ khác của Microsoft) để tạo ra các cột tính toán và các thước đo (measures) tùy chỉnh. Nó cho phép bạn thực hiện các phép tính phức tạp trên dữ liệu của mình, vượt ra ngoài những gì có thể làm với các tổng hợp cơ bản.',
      },
      {
        question: 'Làm thế nào để tránh việc trình bày thông tin sai lệch bằng biểu đồ?',
        answer: 'Hãy luôn bắt đầu trục Y từ 0 để tránh phóng đại sự khác biệt. Sử dụng đúng loại biểu đồ cho dữ liệu của bạn. Đảm bảo rằng các nhãn và tiêu đề rõ ràng, không gây hiểu lầm. Tránh sử dụng các hiệu ứng 3D hoặc các yếu tố trang trí không cần thiết làm sai lệch nhận thức về tỷ lệ.',
      },
      {
        question: 'Xu hướng của ngành Business Intelligence trong tương lai là gì?',
        answer: 'Các xu hướng chính bao gồm sự tích hợp ngày càng sâu của AI và Machine Learning (để tự động tạo insight), phân tích tăng cường (augmented analytics), xử lý ngôn ngữ tự nhiên (cho phép người dùng đặt câu hỏi cho dữ liệu bằng ngôn ngữ thông thường), và sự tập trung mạnh mẽ hơn vào quản trị dữ liệu và bảo mật.',
      },
    ],
  },
];

const transformedLessons: BaseLessonData[] = lessons.map((lesson) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tools,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    programmingLanguages,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    analyticsTools,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dataTypes,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    machineLearningMethods,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    industryApplications,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    vietnamContext,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    careerConnect,
    ...baseLesson
  } = lesson;
  return {
    ...baseLesson,
    realWorldApplications: lesson.realWorldApplications || [],
  };
});

export const dataScienceAnalyticsModuleData: ModuleData = {
  id: K2Module.DataScienceAnalytics,
  title: 'Khoa học Dữ liệu & Phân tích',
  subtitle: 'Khai phá sức mạnh từ dữ liệu để đưa ra quyết định thông minh',
  description:
    'Trang bị kiến thức toàn diện về Khoa học Dữ liệu, từ các kỹ thuật cơ bản với Python đến xử lý Dữ liệu lớn và ứng dụng Học máy trong các bài toán thực tế.',
  category: 'Công nghệ thông tin',
  icon: '🔬',
  color: 'from-purple-500 to-indigo-500',
  level: 'Tổng hợp',
  duration: '25-30 giờ',
  features: [
    'Phân tích dữ liệu với Python (Pandas, NumPy)',
    'Trực quan hóa dữ liệu (Matplotlib, Seaborn)',
    'Xử lý Dữ liệu lớn với Spark',
    'Xây dựng và triển khai mô hình Học máy',
    'Kể chuyện bằng dữ liệu (Data Storytelling)',
  ],
  prerequisites: ['Kiến thức lập trình Python cơ bản', 'Tư duy toán học và thống kê', 'Tư duy logic'],
  objectives: [
    'Thành thạo quy trình làm việc của một nhà khoa học dữ liệu.',
    'Sử dụng thành thạo các thư viện Python cho khoa học dữ liệu.',
    'Hiểu và áp dụng các thuật toán học máy phổ biến.',
    'Có khả năng xử lý các tập dữ liệu lớn.',
    'Truyền đạt các insight từ dữ liệu một cách hiệu quả.',
  ],
  careerOutcomes: [
    'Nhà khoa học dữ liệu (Data Scientist)',
    'Kỹ sư dữ liệu (Data Engineer)',
    'Chuyên viên phân tích dữ liệu (Data Analyst)',
    'Kỹ sư học máy (Machine Learning Engineer)',
    'Chuyên viên phân tích kinh doanh (Business Analyst)',
  ],
  industryApplications: ['Thương mại điện tử', 'Tài chính - Ngân hàng (FinTech)', 'Y tế', 'Viễn thông', 'Sản xuất'],
  marketDemand: {
    averageSalary: '1.500 - 4.000 USD/tháng',
    jobGrowth: '30% mỗi năm',
    hireDemand: 'Cực kỳ cao',
  },
  relatedModules: [K2Module.Python, K2Module.AIApplications, K2Module.AdvancedAI, K2Module.DataDrivenAnalytics],
  lessons: transformedLessons,
};
