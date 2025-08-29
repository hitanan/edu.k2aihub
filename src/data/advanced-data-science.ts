import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface AdvancedDataScienceLesson extends BaseLessonData {
  dataScienceDomain: 'machine-learning' | 'deep-learning' | 'nlp-processing' | 'computer-vision' | 'data-engineering';
  technicalComplexity: 'intermediate' | 'advanced' | 'expert';
  programmingLanguages: string[];
  vietnameseDataContext: string[];
  industryApplications: string[];
}

export const advancedDataScienceLessons: AdvancedDataScienceLesson[] = [
  {
    id: 'advanced-machine-learning-algorithms',
    title: 'Thuật Toán Machine Learning Nâng Cao',
    description: 'Master advanced ML algorithms including ensemble methods, advanced regression techniques, clustering algorithms, và dimensionality reduction cho real-world Vietnamese data problems.',
    duration: '240 phút',
    difficulty: 'Nâng cao',
videoUrl: 'https://www.youtube.com/watch?v=MDBpBE3B-b8', // Advanced Machine Learning Algorithms
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&h=600&fit=crop',
    dataScienceDomain: 'machine-learning',
    technicalComplexity: 'advanced',
    programmingLanguages: ['Python', 'R', 'Scikit-learn', 'XGBoost', 'LightGBM'],
    objectives: [
      'Implement advanced ensemble learning methods (Random Forest, Gradient Boosting, Stacking)',
      'Apply advanced regression techniques (Ridge, Lasso, Elastic Net, Polynomial)',
      'Master clustering algorithms (K-Means, DBSCAN, Hierarchical, GMM)',
      'Implement dimensionality reduction techniques (PCA, t-SNE, UMAP)',
      'Develop custom machine learning pipelines với hyperparameter optimization'
    ],
    prerequisites: [
      'Basic machine learning knowledge',
      'Python programming proficiency',
      'Statistics và linear algebra fundamentals'
    ],
    vietnameseDataContext: [
      'Vietnamese text classification for e-commerce reviews',
      'Economic forecasting using Vietnamese macroeconomic data',
      'Customer segmentation cho Vietnamese retail markets',
      'Agricultural yield prediction using Vietnamese climate data'
    ],
    industryApplications: [
      'Financial risk modeling cho Vietnamese banks',
      'Supply chain optimization cho manufacturing companies',
      'Healthcare diagnosis support systems',
      'Real estate price prediction models'
    ],
    exercises: [
      {
        title: 'Vietnamese E-commerce Recommendation System',
        description: 'Build advanced recommendation system cho Vietnamese e-commerce platform using collaborative filtering, content-based filtering, và hybrid approaches',
        difficulty: 'Nâng cao',
        materials: ['Vietnamese e-commerce dataset', 'Python ML libraries', 'Recommendation algorithms', 'Evaluation metrics'],
        procedure: [
          'Analyze Vietnamese consumer behavior patterns trong e-commerce data',
          'Implement collaborative filtering using matrix factorization',
          'Develop content-based filtering using Vietnamese product features',
          'Create hybrid recommendation model combining multiple approaches',
          'Evaluate system performance using precision, recall, và Vietnamese user preferences'
        ],
        expectedResults: 'High-performance recommendation system optimized cho Vietnamese market preferences',
        solution: 'Advanced ensemble recommendation system với culturally-adapted features và Vietnamese language processing'
      }
    ],
    realWorldApplications: [
      'Shopee product recommendation optimization',
      'Vingroup customer behavior analysis',
      'VPBank credit scoring model development',
      'Grab demand forecasting systems'
    ],
    caseStudies: [
      {
        title: 'VietinBank AI Credit Scoring System',
        organization: 'VietinBank',
        problem: 'Developing advanced credit risk assessment model cho Vietnamese borrowers với limited credit history',
        solution: 'Advanced ML ensemble model combining traditional financial data, alternative data sources, behavioral patterns',
        impact: 'Improved loan approval accuracy by 35%, reduced default rates by 28%, expanded lending to underserved segments',
        innovations: ['Vietnamese-specific risk factors', 'Alternative data integration', 'Explainable AI for regulatory compliance']
      }
    ],
    resources: [
      {
        title: 'Advanced Machine Learning Handbook',
        url: 'https://scikit-learn.org/stable/user_guide.html',
        type: 'Documentation'
      }
    ]
  },
  {
    id: 'deep-learning-neural-networks',
    title: 'Deep Learning & Mạng Nơ-ron Sâu',
    description: 'Comprehensive deep learning covering neural network architectures, CNN, RNN, LSTM, Transformer models, và advanced deep learning techniques.',
    duration: '260 phút',
    difficulty: 'Nâng cao',
videoUrl: 'https://www.youtube.com/watch?v=SsyMvejb-KU', // Deep Learning and Neural Networks
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop',
    dataScienceDomain: 'deep-learning',
    technicalComplexity: 'expert',
    programmingLanguages: ['Python', 'TensorFlow', 'PyTorch', 'Keras', 'JAX'],
    objectives: [
      'Master deep neural network architectures và training techniques',
      'Implement Convolutional Neural Networks (CNNs) cho image processing',
      'Develop Recurrent Neural Networks (RNNs) và LSTMs for sequence data',
      'Build Transformer models cho attention-based learning',
      'Apply advanced optimization techniques và regularization methods'
    ],
    prerequisites: [
      'Advanced machine learning knowledge',
      'Strong Python programming skills',
      'Calculus và linear algebra proficiency'
    ],
    vietnameseDataContext: [
      'Vietnamese handwriting recognition systems',
      'Vietnamese speech recognition và synthesis',
      'Vietnamese document classification và summarization',
      'Medical image analysis cho Vietnamese healthcare data'
    ],
    industryApplications: [
      'Autonomous driving systems cho Vietnamese traffic conditions',
      'Medical diagnosis AI cho Vietnamese hospitals',
      'Financial fraud detection systems',
      'Agricultural monitoring using satellite imagery'
    ],
    exercises: [
      {
        title: 'Vietnamese Document Classification System',
        description: 'Build deep learning system cho classifying Vietnamese legal documents into categories using advanced NLP techniques',
        difficulty: 'Nâng cao',
        materials: ['Vietnamese legal document corpus', 'Pre-trained Vietnamese language models', 'Deep learning frameworks', 'GPU computing resources'],
        procedure: [
          'Preprocess Vietnamese legal document corpus với text normalization',
          'Implement word embeddings trained on Vietnamese legal texts',
          'Design và train CNN-LSTM hybrid architecture',
          'Fine-tune pre-trained Vietnamese BERT model',
          'Evaluate model performance on Vietnamese legal document classification'
        ],
        expectedResults: 'High-accuracy document classification system handling Vietnamese legal language complexity',
        solution: 'Ensemble deep learning model combining CNN feature extraction, LSTM sequence modeling, và pre-trained transformer fine-tuning'
      }
    ],
    realWorldApplications: [
      'Zalo intelligent chatbot development',
      'VinAI computer vision applications',
      'FPT speech recognition systems',
      'Banking document processing automation'
    ],
    caseStudies: [
      {
        title: 'VinBrain Medical AI Diagnostics',
        organization: 'VinBrain (Vingroup AI subsidiary)',
        problem: 'Developing AI-powered medical imaging diagnosis system cho Vietnamese healthcare system',
        solution: 'Advanced CNN architectures, transfer learning from international datasets, Vietnamese medical data integration',
        impact: 'Achieved 95%+ accuracy on chest X-ray diagnosis, deployed in 50+ Vietnamese hospitals, reduced diagnosis time by 70%',
        innovations: ['Vietnamese-adapted medical AI', 'Multi-modal medical data fusion', 'Explainable AI for medical professionals']
      }
    ],
    resources: [
      {
        title: 'Deep Learning Specialization',
        url: 'https://www.deeplearning.ai/',
        type: 'Course'
      }
    ]
  },
  {
    id: 'natural-language-processing-vietnamese',
    title: 'Xử Lý Ngôn Ngữ Tự Nhiên Tiếng Việt',
    description: 'Specialized NLP techniques cho Vietnamese language including tokenization, named entity recognition, sentiment analysis, và machine translation.',
    duration: '225 phút',
    difficulty: 'Nâng cao',
videoUrl: 'https://www.youtube.com/watch?v=XNlNP75vyYc', // Natural Language Processing
    imageUrl: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1200&h=600&fit=crop',
    dataScienceDomain: 'nlp-processing',
    technicalComplexity: 'advanced',
    programmingLanguages: ['Python', 'spaCy', 'NLTK', 'Transformers', 'Underthesea'],
    objectives: [
      'Master Vietnamese text preprocessing và tokenization techniques',
      'Implement Vietnamese named entity recognition systems',
      'Develop sentiment analysis cho Vietnamese social media data',
      'Build Vietnamese question-answering systems',
      'Create Vietnamese-English machine translation models'
    ],
    prerequisites: [
      'NLP fundamentals',
      'Deep learning knowledge',
      'Vietnamese language understanding'
    ],
    vietnameseDataContext: [
      'Vietnamese social media sentiment analysis',
      'Vietnamese news article classification',
      'Vietnamese customer review processing',
      'Vietnamese government document analysis'
    ],
    industryApplications: [
      'Vietnamese customer service chatbots',
      'Vietnamese content moderation systems',
      'Vietnamese legal document processing',
      'Vietnamese educational content analysis'
    ],
    exercises: [
      {
        title: 'Vietnamese Social Media Sentiment Analysis System',
        description: 'Build comprehensive sentiment analysis system cho Vietnamese social media posts từ Facebook, Instagram, và TikTok',
        difficulty: 'Nâng cao',
        materials: ['Vietnamese social media datasets', 'Pre-trained Vietnamese embeddings', 'Sentiment annotation tools', 'Transformer models'],
        procedure: [
          'Collect và preprocess Vietnamese social media data với proper encoding',
          'Implement Vietnamese-specific tokenization và text normalization',
          'Train sentiment classification models using Vietnamese pre-trained embeddings',
          'Fine-tune Vietnamese BERT for sentiment analysis',
          'Evaluate model performance on different Vietnamese dialects và informal language'
        ],
        expectedResults: 'Robust sentiment analysis system handling Vietnamese language nuances và social media expressions',
        solution: 'Multi-model ensemble combining rule-based sentiment lexicons, traditional ML classifiers, và fine-tuned transformers'
      }
    ],
    realWorldApplications: [
      'Zalo news feed optimization',
      'Tiki product review analysis',
      'Government social media monitoring',
      'Vietnamese language learning apps'
    ],
    caseStudies: [
      {
        title: 'VCCorp Vietnamese Content Processing Platform',
        organization: 'VCCorp (VnExpress parent company)',
        problem: 'Automated content categorization và recommendation cho Vietnamese news và entertainment platforms',
        solution: 'Advanced Vietnamese NLP pipeline, topic modeling, content similarity detection, personalized recommendations',
        impact: 'Processed 100M+ Vietnamese articles, improved content discovery by 50%, increased user engagement by 35%',
        innovations: ['Vietnamese-specific NLP preprocessing', 'Cultural context understanding', 'Real-time content analysis']
      }
    ],
    resources: [
      {
        title: 'Vietnamese NLP Resources',
        url: 'https://github.com/undertheseanlp/underthesea',
        type: 'Tool'
      }
    ]
  },
  {
    id: 'computer-vision-image-processing',
    title: 'Computer Vision & Xử Lý Hình Ảnh',
    description: 'Advanced computer vision techniques including object detection, image segmentation, facial recognition, và applications trong Vietnamese context.',
    duration: '250 phút',
    difficulty: 'Nâng cao',
videoUrl: 'https://www.youtube.com/watch?v=Z8Napj0fza0', // Computer Vision and Image Processing
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    dataScienceDomain: 'computer-vision',
    technicalComplexity: 'expert',
    programmingLanguages: ['Python', 'OpenCV', 'TensorFlow', 'PyTorch', 'YOLO'],
    objectives: [
      'Implement advanced object detection algorithms (YOLO, R-CNN, SSD)',
      'Master image segmentation techniques (Semantic, Instance, Panoptic)',
      'Develop facial recognition systems với Vietnamese facial datasets',
      'Apply computer vision trong manufacturing quality control',
      'Build real-time video processing systems'
    ],
    prerequisites: [
      'Deep learning fundamentals',
      'Image processing basics',
      'Linear algebra và calculus'
    ],
    vietnameseDataContext: [
      'Vietnamese traffic monitoring và autonomous vehicles',
      'Vietnamese agricultural crop monitoring via drones',
      'Vietnamese manufacturing quality inspection',
      'Vietnamese cultural heritage digitization projects'
    ],
    industryApplications: [
      'Smart city surveillance systems',
      'Agricultural precision farming',
      'Manufacturing automation',
      'Healthcare medical imaging'
    ],
    exercises: [
      {
        title: 'Vietnamese Traffic Monitoring System',
        description: 'Develop computer vision system cho monitoring Vietnamese traffic patterns including vehicles, motorcycles, và pedestrian detection',
        difficulty: 'Nâng cao',
        materials: ['Vietnamese traffic video datasets', 'Pre-trained object detection models', 'Annotation tools', 'Real-time processing frameworks'],
        procedure: [
          'Collect và annotate Vietnamese traffic video data với diverse scenarios',
          'Fine-tune YOLO model cho Vietnamese vehicle types (xe máy, xe ôm, etc.)',
          'Implement real-time traffic flow analysis algorithms',
          'Develop violation detection system (wrong-way driving, red light violations)',
          'Create traffic analytics dashboard với Vietnamese traffic pattern insights'
        ],
        expectedResults: 'Real-time traffic monitoring system optimized cho Vietnamese urban traffic conditions',
        solution: 'Multi-model computer vision pipeline combining object detection, tracking, và behavioral analysis optimized for Vietnamese traffic patterns'
      }
    ],
    realWorldApplications: [
      'Grab driver behavior monitoring',
      'VinFast autonomous vehicle development',
      'Smart city traffic optimization',
      'Security surveillance systems'
    ],
    caseStudies: [
      {
        title: 'VinAI Computer Vision Platform',
        organization: 'VinAI Research',
        problem: 'Developing comprehensive computer vision solutions cho Vietnamese market applications',
        solution: 'Multi-domain computer vision platform, Vietnamese-specific datasets, optimized models for local conditions',
        impact: 'Deployed in 100+ applications across retail, automotive, healthcare sectors, achieved 97% accuracy on Vietnamese-specific tasks',
        innovations: ['Vietnamese cultural adaptation', 'Multi-domain vision models', 'Real-time optimization for Vietnamese hardware']
      }
    ],
    resources: [
      {
        title: 'Computer Vision Course',
        url: 'https://opencv.org/',
        type: 'Documentation'
      }
    ]
  },
  {
    id: 'big-data-engineering-analytics',
    title: 'Big Data Engineering & Analytics',
    description: 'Master big data technologies including distributed computing, data pipelines, real-time analytics, và cloud-based data processing.',
    duration: '230 phút',
    difficulty: 'Nâng cao',
videoUrl: 'https://www.youtube.com/watch?v=Pjx0AVg5lVY', // Big Data Engineering
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop',
    dataScienceDomain: 'data-engineering',
    technicalComplexity: 'advanced',
    programmingLanguages: ['Python', 'Scala', 'SQL', 'Apache Spark', 'Apache Kafka'],
    objectives: [
      'Design và implement scalable data pipelines',
      'Master distributed computing với Apache Spark',
      'Build real-time data streaming systems',
      'Implement data lakes và data warehousing solutions',
      'Develop cloud-based big data architectures'
    ],
    prerequisites: [
      'SQL database knowledge',
      'Programming experience (Python/Java)',
      'Distributed systems understanding'
    ],
    vietnameseDataContext: [
      'E-commerce transaction data processing',
      'Vietnamese financial market data analysis',
      'Telecommunications network data processing',
      'Government census và economic data analytics'
    ],
    industryApplications: [
      'Banking real-time fraud detection',
      'Telecommunications network optimization',
      'E-commerce recommendation engines',
      'Supply chain analytics systems'
    ],
    exercises: [
      {
        title: 'Vietnamese E-commerce Data Pipeline',
        description: 'Build end-to-end big data pipeline cho processing Vietnamese e-commerce transactions, user behavior, và product analytics',
        difficulty: 'Nâng cao',
        materials: ['Vietnamese e-commerce datasets', 'Apache Spark cluster', 'Kafka streaming', 'Cloud storage systems'],
        procedure: [
          'Design data architecture cho handling millions of Vietnamese e-commerce transactions',
          'Implement real-time data ingestion using Apache Kafka',
          'Build batch processing pipeline với Apache Spark cho daily analytics',
          'Develop real-time recommendation engine using streaming data',
          'Create analytics dashboard với insights on Vietnamese consumer behavior'
        ],
        expectedResults: 'Scalable data pipeline handling Vietnamese e-commerce data với real-time analytics capabilities',
        solution: 'Lambda architecture combining batch và stream processing với Vietnamese-specific business logic và cultural insights'
      }
    ],
    realWorldApplications: [
      'Shopee real-time analytics platform',
      'VietinBank fraud detection system',
      'Viettel network optimization',
      'Vietnam Airlines operational analytics'
    ],
    caseStudies: [
      {
        title: 'FPT Big Data Platform',
        organization: 'FPT Corporation',
        problem: 'Building unified big data platform cho multiple business units including telecommunications, banking, retail',
        solution: 'Distributed data lake architecture, real-time processing capabilities, AI/ML model serving infrastructure',
        impact: 'Processed 50TB+ daily data, improved decision-making speed by 80%, enabled real-time customer insights across all business units',
        innovations: ['Unified multi-tenant data platform', 'Vietnamese-optimized data processing', 'Auto-scaling cloud infrastructure']
      }
    ],
    resources: [
      {
        title: 'Apache Spark Documentation',
        url: 'https://spark.apache.org/docs/latest/',
        type: 'Documentation'
      }
    ]
  }
];