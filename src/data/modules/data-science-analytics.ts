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
    imageUrl: '/images/lessons/data-science-python.jpg',
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
    imageUrl: '/images/lessons/big-data-ml.jpg',
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
  },
  {
    id: 'business-intelligence-data-storytelling',
    title: 'Business Intelligence & Data Storytelling',
    description:
      'Transform data insights thành compelling business stories và drive strategic decision-making trong organizations.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=8EMW7io4rSI',
    imageUrl: '/images/lessons/data-storytelling.jpg',
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
