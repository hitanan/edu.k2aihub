import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface VietnamContext {
  title: string;
  content: string[];
}

export interface CareerConnect {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  quote: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface DataScienceLessonType extends BaseLessonData {
  programmingLanguages: string[];
  tools: string[];
  analyticsTools: string[];
  dataTypes: string[];
  machineLearningMethods: string[];
  industryApplications: string[];
  vietnamContext?: VietnamContext;
  careerConnect?: CareerConnect;
  quizzes?: Quiz[];
}

export const dataScienceLessons: DataScienceLessonType[] = [
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
      {
        title: 'Vietnamese Market Analysis Project',
        description: 'Analyze Vietnamese consumer behavior data để identify market trends',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese consumer survey data',
          'Economic indicators dataset',
          'Social media sentiment data',
          'Advanced analytics tools',
        ],
        procedure: [
          'Gather multi-source Vietnamese market data',
          'Integrate disparate data sources effectively',
          'Apply advanced statistical techniques',
          'Identify consumer behavior patterns',
          'Segment customers based on behavior',
          'Predict market trends using forecasting',
          'Validate insights với domain experts',
          'Create actionable business recommendations',
        ],
        expectedResults: 'Market insights report với actionable recommendations for Vietnamese businesses',
        solution: 'Data-driven understanding of Vietnamese consumer landscape',
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
      {
        title: 'FinTech Risk Assessment Model',
        organization: 'Vietnamese Digital Bank',
        problem: 'High default rates on personal loans',
        solution: 'Machine learning model using alternative data sources',
        impact: '40% reduction trong default rates, 25% increase trong loan approvals',
        innovations: [
          'Social media behavior analysis',
          'Mobile usage pattern evaluation',
          'Transaction history deep learning',
        ],
      },
    ],
    resources: [
      {
        title: 'Python for Data Science Handbook',
        url: 'https://jakevdp.github.io/PythonDataScienceHandbook',
        type: 'Educational Resource',
      },
      {
        title: 'Kaggle Learn Data Science',
        url: 'https://www.kaggle.com/learn',
        type: 'Interactive Course',
      },
      {
        title: 'Pandas Documentation',
        url: 'https://pandas.pydata.org/docs',
        type: 'Technical Documentation',
      },
    ],
    vietnamContext: {
      title: 'Khoa học Dữ liệu tại Việt Nam: Cơ hội và Thách thức',
      content: [
        'Nhu cầu nhân lực Khoa học Dữ liệu tại Việt Nam đang bùng nổ, đặc biệt trong các lĩnh vực như E-commerce (Tiki, Shopee), FinTech (MoMo, VNPay), và Viễn thông (Viettel, FPT).',
        'FPT Software và Viettel AI là hai trong số các đơn vị tiên phong tại Việt Nam trong việc nghiên cứu và ứng dụng AI và Khoa học Dữ liệu, đặc biệt là trong xử lý ngôn ngữ tự nhiên tiếng Việt và nhận dạng hình ảnh.',
        'Các cuộc thi về Khoa học Dữ liệu như Zalo AI Challenge thu hút hàng ngàn sinh viên và kỹ sư tham gia, thúc đẩy cộng đồng và tìm kiếm tài năng.',
        'Thách thức lớn nhất là chất lượng và sự sẵn có của dữ liệu. Nhiều doanh nghiệp Việt Nam vẫn đang trong giai đoạn đầu của việc số hóa, khiến dữ liệu bị phân mảnh và thiếu nhất quán.',
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
      {
        question:
          'Học máy có giám sát (Supervised Learning) khác với học máy không giám sát (Unsupervised Learning) ở điểm nào?',
        options: [
          'Học có giám sát cần có người giám sát ngồi cạnh',
          'Học không giám sát không cần máy tính',
          'Học có giám sát sử dụng dữ liệu đã được gán nhãn (biết trước kết quả), trong khi học không giám sát tự tìm ra cấu trúc trong dữ liệu chưa được gán nhãn.',
          'Học không giám sát luôn cho kết quả tốt hơn.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Ví dụ của học có giám sát là dự đoán giá nhà (biết giá nhà trong quá khứ). Ví dụ của học không giám sát là phân nhóm khách hàng dựa trên hành vi mua sắm (chưa biết trước có những nhóm nào).',
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
      {
        title: 'MLOps Best Practices',
        url: 'https://ml-ops.org',
        type: 'Industry Standards',
      },
    ],
    vietnamContext: {
      title: 'Dữ liệu lớn (Big Data) tại Việt Nam',
      content: [
        'Các công ty viễn thông như Viettel, Mobifone, Vinaphone đang quản lý những tập dữ liệu khổng lồ về thông tin thuê bao và lưu lượng mạng, là nguồn tài nguyên quý giá cho việc phân tích hành vi người dùng và quy hoạch hạ tầng.',
        'Thương mại điện tử và các siêu ứng dụng (super-apps) như Grab, Gojek tạo ra một lượng dữ liệu giao dịch và di chuyển khổng lồ mỗi ngày, được sử dụng để tối ưu hóa logistics, giá cả và gợi ý dịch vụ.',
        'VNG Cloud, Viettel IDC là những nhà cung cấp dịch vụ điện toán đám mây "made in Vietnam", cung cấp hạ tầng để các doanh nghiệp trong nước xử lý dữ liệu lớn mà không cần phụ thuộc vào các gã khổng lồ quốc tế.',
        'Thách thức: Việc đảm bảo an ninh, chủ quyền dữ liệu và tuân thủ Luật An ninh mạng là một bài toán phức tạp khi làm việc với dữ liệu lớn tại Việt Nam.',
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
      {
        question: 'MLOps (Machine Learning Operations) là gì?',
        options: [
          'Một loại thuật toán học máy mới',
          'Một bộ các thực hành nhằm mục đích triển khai và duy trì các mô hình học máy trong môi trường sản xuất một cách đáng tin cậy và hiệu quả.',
          'Tên của một công ty phần mềm',
          'Một ngôn ngữ lập trình',
        ],
        correctAnswerIndex: 1,
        explanation:
          'MLOps kết hợp Machine Learning, DevOps và Data Engineering để tự động hóa và quản lý vòng đời của mô hình học máy, từ việc xây dựng, triển khai đến giám sát và bảo trì.',
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
      {
        title: 'Power BI Learning Path',
        url: 'https://docs.microsoft.com/en-us/learn/powerplatform/power-bi',
        type: 'Educational Platform',
      },
    ],
    vietnamContext: {
      title: 'Kể chuyện bằng Dữ liệu trong bối cảnh Việt Nam',
      content: [
        'Các báo cáo kinh doanh tại Việt Nam thường bị chỉ trích là khô khan và đầy số liệu. Kỹ năng kể chuyện bằng dữ liệu giúp các nhà phân tích biến những con số đó thành những câu chuyện có ý nghĩa, thuyết phục được ban lãnh đạo.',
        'Trong các buổi thuyết trình gọi vốn (pitching), các startup Việt Nam thành công thường không chỉ trình bày số liệu mà còn kể một câu chuyện hấp dẫn về thị trường, vấn đề và giải pháp của họ bằng dữ liệu.',
        'Các công cụ như Power BI và Tableau đang ngày càng được ưa chuộng trong các doanh nghiệp Việt Nam, thay thế dần cho các báo cáo Excel truyền thống.',
        'Thách thức: Nhiều nhà quản lý ở Việt Nam vẫn quen với việc ra quyết định dựa trên kinh nghiệm và "cảm tính", đòi hỏi người trình bày phải có kỹ năng kể chuyện bằng dữ liệu cực kỳ thuyết phục để thay đổi văn hóa này.',
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
      {
        question: 'Tại sao việc trực quan hóa dữ liệu (data visualization) lại quan trọng?',
        options: [
          'Vì nó làm cho báo cáo dài hơn',
          'Vì bộ não con người xử lý thông tin hình ảnh nhanh hơn và hiệu quả hơn nhiều so với văn bản hoặc bảng số liệu thô.',
          'Vì sếp yêu cầu phải có màu sắc',
          'Vì nó không cần thiết',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Một biểu đồ tốt có thể truyền tải một xu hướng hoặc một sự so sánh phức tạp chỉ trong vài giây, điều mà có thể mất vài đoạn văn để giải thích bằng lời.',
      },
    ],
  },
];
