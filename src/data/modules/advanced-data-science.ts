import { BaseLessonData } from '@/types/lesson-base';

export const advancedDataScienceLessons: BaseLessonData[] = [
  {
    id: 'advanced-machine-learning-algorithms',
    title: 'Thuật Toán Machine Learning Nâng Cao',
    description:
      'Master advanced ML algorithms including ensemble methods, advanced regression techniques, clustering algorithms, và dimensionality reduction cho real-world Vietnamese data problems.',
    duration: '240 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=ULE78ME1ckQ', // Advanced Machine Learning Algorithms
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&h=600&fit=crop',
    dataScienceDomain: 'machine-learning',
    technicalComplexity: 'advanced',
    programmingLanguages: ['Python', 'R', 'Scikit-learn', 'XGBoost', 'LightGBM'],
    objectives: [
      'Implement advanced ensemble learning methods (Random Forest, Gradient Boosting, Stacking)',
      'Apply advanced regression techniques (Ridge, Lasso, Elastic Net, Polynomial)',
      'Master clustering algorithms (K-Means, DBSCAN, Hierarchical, GMM)',
      'Implement dimensionality reduction techniques (PCA, t-SNE, UMAP)',
      'Develop custom machine learning pipelines với hyperparameter optimization',
    ],
    prerequisites: [
      'Basic machine learning knowledge',
      'Python programming proficiency',
      'Statistics và linear algebra fundamentals',
    ],
    vietnameseDataContext: [
      'Vietnamese text classification for e-commerce reviews',
      'Economic forecasting using Vietnamese macroeconomic data',
      'Customer segmentation cho Vietnamese retail markets',
      'Agricultural yield prediction using Vietnamese climate data',
    ],
    industryApplications: [
      'Financial risk modeling cho Vietnamese banks',
      'Supply chain optimization cho manufacturing companies',
      'Healthcare diagnosis support systems',
      'Real estate price prediction models',
    ],
    exercises: [
      {
        title: 'Vietnamese E-commerce Recommendation System',
        description:
          'Build advanced recommendation system cho Vietnamese e-commerce platform using collaborative filtering, content-based filtering, và hybrid approaches',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese e-commerce dataset',
          'Python ML libraries',
          'Recommendation algorithms',
          'Evaluation metrics',
        ],
        procedure: [
          'Analyze Vietnamese consumer behavior patterns trong e-commerce data',
          'Implement collaborative filtering using matrix factorization',
          'Develop content-based filtering using Vietnamese product features',
          'Create hybrid recommendation model combining multiple approaches',
          'Evaluate system performance using precision, recall, và Vietnamese user preferences',
        ],
        expectedResults: 'High-performance recommendation system optimized cho Vietnamese market preferences',
        solution:
          'Advanced ensemble recommendation system với culturally-adapted features và Vietnamese language processing',
      },
    ],
    realWorldApplications: [
      'Shopee product recommendation optimization',
      'Vingroup customer behavior analysis',
      'VPBank credit scoring model development',
      'Grab demand forecasting systems',
    ],
    caseStudies: [
      {
        title: 'VietinBank AI Credit Scoring System',
        organization: 'VietinBank',
        problem: 'Developing advanced credit risk assessment model cho Vietnamese borrowers với limited credit history',
        solution:
          'Advanced ML ensemble model combining traditional financial data, alternative data sources, behavioral patterns',
        impact:
          'Improved loan approval accuracy by 35%, reduced default rates by 28%, expanded lending to underserved segments',
        innovations: [
          'Vietnamese-specific risk factors',
          'Alternative data integration',
          'Explainable AI for regulatory compliance',
        ],
      },
    ],
    resources: [
      {
        title: 'Advanced Machine Learning Handbook',
        url: 'https://scikit-learn.org/stable/user_guide.html',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Machine Learning giải quyết bài toán Việt Nam',
      content: [
        'Các ngân hàng Việt Nam như Techcombank, VPBank đang tiên phong áp dụng ML để chấm điểm tín dụng, giúp tiếp cận được nhiều khách hàng dưới chuẩn truyền thống.',
        'Trong nông nghiệp, các mô hình ML được dùng để dự báo sản lượng lúa ở Đồng bằng sông Cửu Long, dựa trên dữ liệu thời tiết và thổ nhưỡng.',
        'Các sàn thương mại điện tử như Tiki, Shopee sử dụng hệ thống khuyến nghị sản phẩm phức tạp để cá nhân hóa trải nghiệm mua sắm cho hàng triệu người dùng Việt.',
      ],
    },
    careerConnect: {
      name: 'TS. Nguyễn An Nguyên',
      title: 'Giám đốc Khoa học Dữ liệu',
      company: 'Tiki.vn',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyenannguyen',
      quote:
        'Dữ liệu ở Việt Nam rất độc đáo, từ hành vi mua sắm đến ngôn ngữ. Thách thức và cũng là cơ hội cho các nhà khoa học dữ liệu là xây dựng những mô hình "thuần Việt" thực sự hiệu quả.',
    },
    quizzes: [
      {
        question:
          'Phương pháp Ensemble Learning nào xây dựng các mô hình tuần tự, trong đó mô hình sau học từ lỗi của mô hình trước?',
        options: ['Random Forest', 'Bagging', 'Gradient Boosting', 'Stacking'],
        correctAnswerIndex: 2,
        explanation:
          'Gradient Boosting (như XGBoost, LightGBM) là một phương pháp ensemble tuần tự, nơi mỗi cây quyết định mới được huấn luyện để sửa các lỗi còn lại từ tập hợp các cây trước đó, giúp tạo ra một mô hình tổng thể rất mạnh.',
      },
    ],
  },
  {
    id: 'deep-learning-neural-networks',
    title: 'Deep Learning & Mạng Nơ-ron Sâu',
    description:
      'Comprehensive deep learning covering neural network architectures, CNN, RNN, LSTM, Transformer models, và advanced deep learning techniques.',
    duration: '260 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk', // Deep Learning and Neural Networks
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop',
    dataScienceDomain: 'deep-learning',
    technicalComplexity: 'expert',
    programmingLanguages: ['Python', 'TensorFlow', 'PyTorch', 'Keras', 'JAX'],
    objectives: [
      'Master deep neural network architectures và training techniques',
      'Implement Convolutional Neural Networks (CNNs) cho image processing',
      'Develop Recurrent Neural Networks (RNNs) và LSTMs for sequence data',
      'Build Transformer models cho attention-based learning',
      'Apply advanced optimization techniques và regularization methods',
    ],
    prerequisites: [
      'Advanced machine learning knowledge',
      'Strong Python programming skills',
      'Calculus và linear algebra proficiency',
    ],
    vietnameseDataContext: [
      'Vietnamese handwriting recognition systems',
      'Vietnamese speech recognition và synthesis',
      'Vietnamese document classification và summarization',
      'Medical image analysis cho Vietnamese healthcare data',
    ],
    industryApplications: [
      'Autonomous driving systems cho Vietnamese traffic conditions',
      'Medical diagnosis AI cho Vietnamese hospitals',
      'Financial fraud detection systems',
      'Agricultural monitoring using satellite imagery',
    ],
    exercises: [
      {
        title: 'Vietnamese Document Classification System',
        description:
          'Build deep learning system cho classifying Vietnamese legal documents into categories using advanced NLP techniques',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese legal document corpus',
          'Pre-trained Vietnamese language models',
          'Deep learning frameworks',
          'GPU computing resources',
        ],
        procedure: [
          'Preprocess Vietnamese legal document corpus với text normalization',
          'Implement word embeddings trained on Vietnamese legal texts',
          'Design và train CNN-LSTM hybrid architecture',
          'Fine-tune pre-trained Vietnamese BERT model',
          'Evaluate model performance on Vietnamese legal document classification',
        ],
        expectedResults: 'High-accuracy document classification system handling Vietnamese legal language complexity',
        solution:
          'Ensemble deep learning model combining CNN feature extraction, LSTM sequence modeling, và pre-trained transformer fine-tuning',
      },
    ],
    realWorldApplications: [
      'Zalo intelligent chatbot development',
      'VinAI computer vision applications',
      'FPT speech recognition systems',
      'Banking document processing automation',
    ],
    caseStudies: [
      {
        title: 'VinBrain Medical AI Diagnostics',
        organization: 'VinBrain (Vingroup AI subsidiary)',
        problem: 'Developing AI-powered medical imaging diagnosis system cho Vietnamese healthcare system',
        solution:
          'Advanced CNN architectures, transfer learning from international datasets, Vietnamese medical data integration',
        impact:
          'Achieved 95%+ accuracy on chest X-ray diagnosis, deployed in 50+ Vietnamese hospitals, reduced diagnosis time by 70%',
        innovations: [
          'Vietnamese-adapted medical AI',
          'Multi-modal medical data fusion',
          'Explainable AI for medical professionals',
        ],
      },
    ],
    resources: [
      {
        title: 'Deep Learning Specialization',
        url: 'https://www.deeplearning.ai/',
        type: 'Course',
      },
    ],
    vietnamContext: {
      title: 'Deep Learning và Tác động tại Việt Nam',
      content: [
        'VinBrain, một công ty của Vingroup, đã phát triển DrAid™ - một nền tảng AI chẩn đoán hình ảnh y tế, được triển khai rộng rãi và hỗ trợ đắc lực cho các bác sĩ Việt Nam.',
        'Các mô hình nhận dạng tiếng nói của Zalo AI, FPT.AI có khả năng phân biệt giọng ba miền Bắc-Trung-Nam, là một thành tựu quan trọng của Deep Learning ứng dụng.',
        'Xe tự lái của VinFast sử dụng các mô hình Deep Learning phức tạp để xử lý dữ liệu từ camera và cảm biến, thích ứng với điều kiện giao thông đặc thù của Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Trương Quốc Hùng',
      title: 'Tổng Giám đốc VinBrain',
      company: 'VinBrain',
      imageUrl: 'https://i.pravatar.cc/150?u=truongquochung',
      quote:
        'Deep Learning không chỉ là công nghệ, nó là công cụ để giải quyết những bài toán lớn của xã hội. Tại VinBrain, chúng tôi dùng nó để cải thiện chất lượng y tế cho người Việt.',
    },
    quizzes: [
      {
        question: 'Kiến trúc Transformer, nền tảng của các mô hình ngôn ngữ lớn hiện đại, dựa trên cơ chế chính nào?',
        options: ['Convolution (Tích chập)', 'Recurrence (Đệ quy)', 'Attention (Sự chú ý)', 'Pooling (Gộp)'],
        correctAnswerIndex: 2,
        explanation:
          'Cơ chế "Attention" cho phép mô hình cân nhắc tầm quan trọng của các từ khác nhau trong câu khi xử lý một từ cụ thể, giúp nó nắm bắt được các mối quan hệ ngữ nghĩa phức tạp và xa nhau, một bước đột phá so với RNN/LSTM.',
      },
    ],
  },
  {
    id: 'natural-language-processing-vietnamese',
    title: 'Xử Lý Ngôn Ngữ Tự Nhiên Tiếng Việt',
    description:
      'Specialized NLP techniques cho Vietnamese language including tokenization, named entity recognition, sentiment analysis, và machine translation.',
    duration: '225 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=QkSbtl8lU_o', // Natural Language Processing
    imageUrl: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1200&h=600&fit=crop',
    dataScienceDomain: 'nlp-processing',
    technicalComplexity: 'advanced',
    programmingLanguages: ['Python', 'spaCy', 'NLTK', 'Transformers', 'Underthesea'],
    objectives: [
      'Master Vietnamese text preprocessing và tokenization techniques',
      'Implement Vietnamese named entity recognition systems',
      'Develop sentiment analysis cho Vietnamese social media data',
      'Build Vietnamese question-answering systems',
      'Create Vietnamese-English machine translation models',
    ],
    prerequisites: ['NLP fundamentals', 'Deep learning knowledge', 'Vietnamese language understanding'],
    vietnameseDataContext: [
      'Vietnamese social media sentiment analysis',
      'Vietnamese news article classification',
      'Vietnamese customer review processing',
      'Vietnamese government document analysis',
    ],
    industryApplications: [
      'Vietnamese customer service chatbots',
      'Vietnamese content moderation systems',
      'Vietnamese legal document processing',
      'Vietnamese educational content analysis',
    ],
    exercises: [
      {
        title: 'Vietnamese Social Media Sentiment Analysis System',
        description:
          'Build comprehensive sentiment analysis system cho Vietnamese social media posts từ Facebook, Instagram, và TikTok',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese social media datasets',
          'Pre-trained Vietnamese embeddings',
          'Sentiment annotation tools',
          'Transformer models',
        ],
        procedure: [
          'Collect và preprocess Vietnamese social media data với proper encoding',
          'Implement Vietnamese-specific tokenization và text normalization',
          'Train sentiment classification models using Vietnamese pre-trained embeddings',
          'Fine-tune Vietnamese BERT for sentiment analysis',
          'Evaluate model performance on different Vietnamese dialects và informal language',
        ],
        expectedResults:
          'Robust sentiment analysis system handling Vietnamese language nuances và social media expressions',
        solution:
          'Multi-model ensemble combining rule-based sentiment lexicons, traditional ML classifiers, và fine-tuned transformers',
      },
    ],
    realWorldApplications: [
      'Zalo news feed optimization',
      'Tiki product review analysis',
      'Government social media monitoring',
      'Vietnamese language learning apps',
    ],
    caseStudies: [
      {
        title: 'VCCorp Vietnamese Content Processing Platform',
        organization: 'VCCorp (VnExpress parent company)',
        problem: 'Automated content categorization và recommendation cho Vietnamese news và entertainment platforms',
        solution:
          'Advanced Vietnamese NLP pipeline, topic modeling, content similarity detection, personalized recommendations',
        impact:
          'Processed 100M+ Vietnamese articles, improved content discovery by 50%, increased user engagement by 35%',
        innovations: [
          'Vietnamese-specific NLP preprocessing',
          'Cultural context understanding',
          'Real-time content analysis',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnamese NLP Resources',
        url: 'https://github.com/undertheseanlp/underthesea',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'NLP và Thách thức với Tiếng Việt',
      content: [
        'Tiếng Việt là một ngôn ngữ phức tạp với thanh điệu, từ đồng âm khác nghĩa và cấu trúc không có dấu phân cách từ rõ ràng, đòi hỏi các kỹ thuật NLP chuyên biệt.',
        'Các thư viện như "Underthesea" được cộng đồng phát triển riêng cho Tiếng Việt, cung cấp các công cụ tách từ, gán nhãn từ loại hiệu quả.',
        'Phân tích sắc thái trong bình luận của người Việt trên mạng xã hội là một bài toán khó, do sự phổ biến của ngôn ngữ teen, nói lái, và các biểu đạt mỉa mai, châm biếm.',
      ],
    },
    careerConnect: {
      name: 'Vũ Anh',
      title: 'Trưởng nhóm NLP',
      company: 'VCCorp',
      imageUrl: 'https://i.pravatar.cc/150?u=vuanh',
      quote:
        'Để xử lý được ngôn ngữ tự nhiên của người Việt, máy móc không chỉ cần học từ vựng, ngữ pháp, mà còn phải học cả văn hóa, thói quen và cách chúng ta nói chuyện hàng ngày.',
    },
    quizzes: [
      {
        question: 'Trong NLP, "Tokenization" (tách từ) cho Tiếng Việt khó hơn Tiếng Anh vì sao?',
        options: [
          'Tiếng Việt có bảng chữ cái phức tạp hơn',
          'Tiếng Việt không dùng khoảng trắng để phân tách các từ một cách rõ ràng',
          'Tiếng Việt có nhiều từ mượn',
          'Tiếng Việt không có quy tắc ngữ pháp',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong tiếng Anh, từ được ngăn cách bởi khoảng trắng. Nhưng trong tiếng Việt, một "từ" có thể gồm nhiều âm tiết (ví dụ: "khoa học dữ liệu"), và các âm tiết này cũng được ngăn cách bởi khoảng trắng. Điều này làm cho việc xác định đâu là một từ trở nên phức tạp.',
      },
    ],
  },
  {
    id: 'computer-vision-image-processing',
    title: 'Computer Vision & Xử Lý Hình Ảnh',
    description:
      'Advanced computer vision techniques including object detection, image segmentation, facial recognition, và applications trong Vietnamese context.',
    duration: '250 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=wVE8SFMSBJ0', // Computer Vision and Image Processing
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    dataScienceDomain: 'computer-vision',
    technicalComplexity: 'expert',
    programmingLanguages: ['Python', 'OpenCV', 'TensorFlow', 'PyTorch', 'YOLO'],
    objectives: [
      'Implement advanced object detection algorithms (YOLO, R-CNN, SSD)',
      'Master image segmentation techniques (Semantic, Instance, Panoptic)',
      'Develop facial recognition systems với Vietnamese facial datasets',
      'Apply computer vision trong manufacturing quality control',
      'Build real-time video processing systems',
    ],
    prerequisites: ['Deep learning fundamentals', 'Image processing basics', 'Linear algebra và calculus'],
    vietnameseDataContext: [
      'Vietnamese traffic monitoring và autonomous vehicles',
      'Vietnamese agricultural crop monitoring via drones',
      'Vietnamese manufacturing quality inspection',
      'Vietnamese cultural heritage digitization projects',
    ],
    industryApplications: [
      'Smart city surveillance systems',
      'Agricultural precision farming',
      'Manufacturing automation',
      'Healthcare medical imaging',
    ],
    exercises: [
      {
        title: 'Vietnamese Traffic Monitoring System',
        description:
          'Develop computer vision system cho monitoring Vietnamese traffic patterns including vehicles, motorcycles, và pedestrian detection',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese traffic video datasets',
          'Pre-trained object detection models',
          'Annotation tools',
          'Real-time processing frameworks',
        ],
        procedure: [
          'Collect và annotate Vietnamese traffic video data với diverse scenarios',
          'Fine-tune YOLO model cho Vietnamese vehicle types (xe máy, xe ôm, etc.)',
          'Implement real-time traffic flow analysis algorithms',
          'Develop violation detection system (wrong-way driving, red light violations)',
          'Create traffic analytics dashboard với Vietnamese traffic pattern insights',
        ],
        expectedResults: 'Real-time traffic monitoring system optimized cho Vietnamese urban traffic conditions',
        solution:
          'Multi-model computer vision pipeline combining object detection, tracking, và behavioral analysis optimized for Vietnamese traffic patterns',
      },
    ],
    realWorldApplications: [
      'Grab driver behavior monitoring',
      'VinFast autonomous vehicle development',
      'Smart city traffic optimization',
      'Security surveillance systems',
    ],
    caseStudies: [
      {
        title: 'VinAI Computer Vision Platform',
        organization: 'VinAI Research',
        problem: 'Developing comprehensive computer vision solutions cho Vietnamese market applications',
        solution:
          'Multi-domain computer vision platform, Vietnamese-specific datasets, optimized models for local conditions',
        impact:
          'Deployed in 100+ applications across retail, automotive, healthcare sectors, achieved 97% accuracy on Vietnamese-specific tasks',
        innovations: [
          'Vietnamese cultural adaptation',
          'Multi-domain vision models',
          'Real-time optimization for Vietnamese hardware',
        ],
      },
    ],
    resources: [
      {
        title: 'Computer Vision Course',
        url: 'https://opencv.org/',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Computer Vision và Bài toán Giao thông Việt Nam',
      content: [
        'Một trong những ứng dụng CV thách thức nhất tại Việt Nam là giám sát giao thông, do mật độ xe máy dày đặc và hành vi di chuyển phức tạp.',
        'Các mô hình phát hiện vật thể phải được huấn luyện lại với dữ liệu đặc thù của Việt Nam để có thể phân biệt được xe máy, xe ôm công nghệ, người đi bộ và các loại phương tiện khác.',
        'Công nghệ nhận dạng biển số xe được ứng dụng rộng rãi trong các bãi giữ xe thông minh tại các thành phố lớn, giúp tự động hóa và tăng cường an ninh.',
      ],
    },
    careerConnect: {
      name: 'Lê Viết Quốc',
      title: 'Nhà khoa học AI',
      company: 'Google DeepMind',
      imageUrl: 'https://i.pravatar.cc/150?u=levietquoc',
      quote:
        'Computer Vision có tiềm năng to lớn để giải quyết các vấn đề thực tiễn tại Việt Nam, từ y tế, nông nghiệp đến giao thông. Chìa khóa nằm ở việc xây dựng các bộ dữ liệu chất lượng và các mô hình phù hợp với bối cảnh địa phương.',
    },
    quizzes: [
      {
        question: 'Trong Computer Vision, "Image Segmentation" khác "Object Detection" ở điểm nào?',
        options: [
          'Image Segmentation chỉ hoạt động trên ảnh đen trắng',
          'Object Detection chỉ vẽ một hộp (bounding box) quanh vật thể, còn Image Segmentation phân loại từng pixel thuộc về vật thể nào',
          'Object Detection nhanh hơn Image Segmentation',
          'Image Segmentation chỉ dùng cho ảnh y tế',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Object Detection xác định vị trí và loại của vật thể bằng một hộp chữ nhật. Image Segmentation đi sâu hơn, nó tạo ra một "mặt nạ" (mask) cho từng vật thể, xác định chính xác ranh giới của vật thể ở cấp độ pixel.',
      },
    ],
  },
  {
    id: 'big-data-engineering-analytics',
    title: 'Big Data Engineering & Analytics',
    description:
      'Master big data technologies including distributed computing, data pipelines, real-time analytics, và cloud-based data processing.',
    duration: '230 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=hTjo-QVWcK0', // Big Data Engineering
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop',
    dataScienceDomain: 'data-engineering',
    technicalComplexity: 'advanced',
    programmingLanguages: ['Python', 'Scala', 'SQL', 'Apache Spark', 'Apache Kafka'],
    objectives: [
      'Design và implement scalable data pipelines',
      'Master distributed computing với Apache Spark',
      'Build real-time data streaming systems',
      'Implement data lakes và data warehousing solutions',
      'Develop cloud-based big data architectures',
    ],
    prerequisites: [
      'SQL database knowledge',
      'Programming experience (Python/Java)',
      'Distributed systems understanding',
    ],
    vietnameseDataContext: [
      'E-commerce transaction data processing',
      'Vietnamese financial market data analysis',
      'Telecommunications network data processing',
      'Government census và economic data analytics',
    ],
    industryApplications: [
      'Banking real-time fraud detection',
      'Telecommunications network optimization',
      'E-commerce recommendation engines',
      'Supply chain analytics systems',
    ],
    exercises: [
      {
        title: 'Vietnamese E-commerce Data Pipeline',
        description:
          'Build end-to-end big data pipeline cho processing Vietnamese e-commerce transactions, user behavior, và product analytics',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese e-commerce datasets',
          'Apache Spark cluster',
          'Kafka streaming',
          'Cloud storage systems',
        ],
        procedure: [
          'Design data architecture cho handling millions of Vietnamese e-commerce transactions',
          'Implement real-time data ingestion using Apache Kafka',
          'Build batch processing pipeline với Apache Spark cho daily analytics',
          'Develop real-time recommendation engine using streaming data',
          'Create analytics dashboard với insights on Vietnamese consumer behavior',
        ],
        expectedResults:
          'Scalable data pipeline handling Vietnamese e-commerce data với real-time analytics capabilities',
        solution:
          'Lambda architecture combining batch và stream processing với Vietnamese-specific business logic và cultural insights',
      },
    ],
    realWorldApplications: [
      'Shopee real-time analytics platform',
      'VietinBank fraud detection system',
      'Viettel network optimization',
      'Vietnam Airlines operational analytics',
    ],
    caseStudies: [
      {
        title: 'FPT Big Data Platform',
        organization: 'FPT Corporation',
        problem:
          'Building unified big data platform cho multiple business units including telecommunications, banking, retail',
        solution:
          'Distributed data lake architecture, real-time processing capabilities, AI/ML model serving infrastructure',
        impact:
          'Processed 50TB+ daily data, improved decision-making speed by 80%, enabled real-time customer insights across all business units',
        innovations: [
          'Unified multi-tenant data platform',
          'Vietnamese-optimized data processing',
          'Auto-scaling cloud infrastructure',
        ],
      },
    ],
    resources: [
      {
        title: 'Apache Spark Documentation',
        url: 'https://spark.apache.org/docs/latest/',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Kỹ thuật Dữ liệu lớn trong bối cảnh Việt Nam',
      content: [
        'Các công ty viễn thông như Viettel, Mobifone xử lý hàng petabyte dữ liệu mỗi ngày từ các cuộc gọi, tin nhắn và lưu lượng internet để tối ưu hóa mạng lưới.',
        'Sự bùng nổ của thanh toán không dùng tiền mặt qua các ví điện tử như MoMo, ZaloPay tạo ra một lượng lớn dữ liệu giao dịch, là nguồn tài nguyên quý giá cho việc phân tích và phát hiện gian lận.',
        'Nhu cầu về Kỹ sư dữ liệu (Data Engineer) tại Việt Nam đang tăng rất nhanh, thậm chí cao hơn cả Nhà khoa học dữ liệu, do các công ty cần xây dựng nền tảng dữ liệu vững chắc trước khi có thể khai thác.',
      ],
    },
    careerConnect: {
      name: 'Đặng Hoàng Vũ',
      title: 'Giám đốc Khoa học, Khối Công nghệ',
      company: 'Techcombank',
      imageUrl: 'https://i.pravatar.cc/150?u=danghoangvu',
      quote:
        'Dữ liệu là tài sản chiến lược. Một kỹ sư dữ liệu giỏi không chỉ xây dựng đường ống, họ xây dựng nền móng cho toàn bộ hoạt động kinh doanh dựa trên dữ liệu của tổ chức.',
    },
    quizzes: [
      {
        question:
          'Trong kiến trúc dữ liệu lớn, "Data Lake" (Hồ dữ liệu) khác với "Data Warehouse" (Kho dữ liệu) ở điểm nào cơ bản nhất?',
        options: [
          'Data Lake chỉ lưu trữ dữ liệu có cấu trúc',
          'Data Warehouse nhanh hơn Data Lake',
          'Data Lake lưu trữ dữ liệu thô ở mọi định dạng, trong khi Data Warehouse lưu trữ dữ liệu đã được xử lý và có cấu trúc',
          'Data Lake chỉ dùng trên cloud',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Data Lake theo nguyên tắc "lưu trữ tất cả", chấp nhận dữ liệu ở mọi định dạng (có cấu trúc, bán cấu trúc, phi cấu trúc). Ngược lại, Data Warehouse đòi hỏi dữ liệu phải được làm sạch, chuyển đổi và đưa về một cấu trúc (schema) xác định trước khi được nạp vào.',
      },
    ],
  },
];
