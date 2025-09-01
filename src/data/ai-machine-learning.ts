import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface AIMachineLearningLessonType extends BaseLessonData {
  algorithmTypes?: string[];
  mlFrameworks?: string[];
  applications?: string[];
  programmingSkills?: string[];
  mathConcepts?: string[];
}

export const aiMachineLearningLessons: AIMachineLearningLessonType[] = [
  {
    id: 'ai-ml-fundamentals',
    title: 'Nền Tảng AI Và Machine Learning',
    description:
      'Hiểu fundamental concepts của Artificial Intelligence và Machine Learning, từ basic algorithms đến practical applications trong real world.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=avgc1rigwec', // AI and ML basics
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu AI và ML fundamental concepts',
      'Phân biệt supervised, unsupervised và reinforcement learning',
      'Nắm vững data preprocessing techniques',
      'Understand model evaluation metrics',
      'Apply basic ML algorithms cho real problems',
      'Build first ML model từ scratch',
    ],
    prerequisites: [
      'Basic programming knowledge (Python preferred)',
      'High school mathematics',
      'Understanding của statistics basics',
    ],
    algorithmTypes: [
      'Linear Regression',
      'Decision Trees',
      'K-Means Clustering',
      'Neural Networks',
      'Support Vector Machines',
    ],
    mlFrameworks: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy'],
    applications: [
      'Predictive Analytics',
      'Image Recognition',
      'Natural Language Processing',
      'Recommendation Systems',
      'Fraud Detection',
    ],
    programmingSkills: [
      'Python Programming',
      'Data Manipulation',
      'Visualization',
      'Statistical Analysis',
      'Model Development',
    ],
    mathConcepts: ['Linear Algebra', 'Statistics', 'Probability', 'Calculus', 'Optimization'],
    exercises: [
      {
        title: 'First Machine Learning Model',
        description: 'Build complete ML pipeline from data collection to model deployment',
        difficulty: 'Trung bình',
        materials: ['Python Environment', 'Jupyter Notebook', 'Sample Dataset', 'ML Libraries'],
        procedure: [
          'Setup Python environment với ML libraries',
          'Load và explore sample dataset (house prices)',
          'Clean data và handle missing values',
          'Perform feature engineering và selection',
          'Split data into training và testing sets',
          'Train linear regression model',
          'Evaluate model performance using metrics',
          'Make predictions on new data',
          'Visualize results và interpret findings',
        ],
        expectedResults: 'Working ML model với 80%+ accuracy and clear understanding của process',
        solution: 'Complete Python notebook demonstrating end-to-end ML workflow',
      },
    ],
    realWorldApplications: [
      'E-commerce recommendation systems cho Vietnamese online stores',
      'Healthcare diagnostics using medical imaging',
      'Financial fraud detection cho Vietnamese banks',
      'Traffic prediction cho smart city initiatives',
      'Agricultural yield optimization using IoT data',
    ],
    caseStudies: [
      {
        title: 'Tiki - AI-Powered Product Recommendations',
        organization: 'Tiki Corporation',
        problem: 'Improving product discovery và increasing sales conversion',
        solution: 'Implemented collaborative filtering và content-based recommendation system',
        impact: '35% increase in conversion rate, 25% boost in average order value',
        innovations: ['Real-time Personalization', 'Multi-modal Recommendations', 'A/B Testing Framework'],
      },
    ],
    resources: [
      {
        title: 'Machine Learning Course by Andrew Ng',
        url: 'https://www.coursera.org/learn/machine-learning',
        type: 'Course',
      },
      {
        title: 'Hands-On Machine Learning with Python',
        url: 'https://github.com/ageron/handson-ml2',
        type: 'Book',
      },
    ],
  },

  {
    id: 'deep-learning-neural-networks',
    title: 'Deep Learning Và Neural Networks',
    description:
      'Deep dive vào neural networks architecture, backpropagation, và advanced deep learning techniques cho complex problem solving.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=7wvyLk_Xa9c', // NLP tutorial
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
    objectives: [
      'Understand neural network architecture và components',
      'Master backpropagation algorithm',
      'Implement convolutional neural networks (CNNs)',
      'Build recurrent neural networks (RNNs)',
      'Apply transfer learning techniques',
      'Optimize deep learning models cho performance',
    ],
    prerequisites: [
      'ML fundamentals knowledge',
      'Python programming proficiency',
      'Linear algebra và calculus understanding',
    ],
    algorithmTypes: [
      'Feedforward Networks',
      'Convolutional Networks',
      'Recurrent Networks',
      'Generative Adversarial Networks',
      'Transformer Models',
    ],
    mlFrameworks: ['TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'Hugging Face'],
    applications: [
      'Computer Vision',
      'Natural Language Processing',
      'Speech Recognition',
      'Autonomous Systems',
      'Generative AI',
    ],
    programmingSkills: ['Advanced Python', 'GPU Programming', 'Model Optimization', 'Distributed Training', 'MLOps'],
    mathConcepts: [
      'Matrix Operations',
      'Gradient Descent',
      'Backpropagation',
      'Activation Functions',
      'Loss Functions',
    ],
    exercises: [
      {
        title: 'Image Classification CNN',
        description: 'Build CNN model để classify Vietnamese street food images',
        difficulty: 'Nâng cao',
        materials: ['Vietnamese Food Dataset', 'GPU Environment', 'TensorFlow/Keras', 'Data Augmentation Tools'],
        procedure: [
          'Collect và preprocess Vietnamese food image dataset',
          'Design CNN architecture với convolutional layers',
          'Implement data augmentation techniques',
          'Train model với proper validation split',
          'Apply transfer learning using pre-trained models',
          'Fine-tune hyperparameters cho optimal performance',
          'Evaluate model performance và analyze errors',
          'Deploy model cho real-time predictions',
        ],
        expectedResults: 'CNN model achieving 90%+ accuracy on Vietnamese food classification',
        solution: 'Production-ready image classification system với web interface',
      },
    ],
    realWorldApplications: [
      'Medical image analysis cho Vietnamese healthcare systems',
      'Vietnamese language processing và chatbots',
      'Traffic monitoring và smart city applications',
      'Agricultural monitoring using satellite imagery',
      'Financial document processing và fraud detection',
    ],
    caseStudies: [
      {
        title: 'VinAI - Vietnamese Language Processing',
        organization: 'VinAI Research',
        problem: 'Developing advanced NLP capabilities cho Vietnamese language',
        solution: 'Created PhoBERT và other Vietnamese-specific language models',
        impact: 'State-of-the-art performance on Vietnamese NLP tasks',
        innovations: ['Vietnamese BERT Model', 'Large-scale Vietnamese Datasets', 'Open Source NLP Tools'],
      },
    ],
    resources: [
      {
        title: 'Deep Learning Specialization',
        url: 'https://www.coursera.org/specializations/deep-learning',
        type: 'Specialization',
      },
      {
        title: 'TensorFlow Developer Certificate',
        url: 'https://www.tensorflow.org/certificate',
        type: 'Certification',
      },
    ],
  },

  {
    id: 'computer-vision-applications',
    title: 'Computer Vision Và Image Processing',
    description:
      'Master computer vision techniques để analyze, process và understand visual content, từ basic image operations đến advanced object detection.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=pcxhj5KFI6M', // Computer vision tutorial
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    objectives: [
      'Master image preprocessing và enhancement techniques',
      'Implement object detection và recognition systems',
      'Apply face recognition và biometric systems',
      'Build real-time video analysis applications',
      'Understand medical imaging applications',
      'Deploy computer vision models in production',
    ],
    prerequisites: [
      'Deep learning fundamentals',
      'Python programming với OpenCV',
      'Understanding của image processing concepts',
    ],
    algorithmTypes: ['YOLO', 'R-CNN', 'SSD', 'Face Recognition', 'Optical Flow'],
    mlFrameworks: ['OpenCV', 'TensorFlow Object Detection', 'PyTorch Vision', 'Detectron2', 'MediaPipe'],
    applications: ['Autonomous Vehicles', 'Medical Imaging', 'Security Systems', 'Retail Analytics', 'Quality Control'],
    programmingSkills: [
      'Image Processing',
      'Real-time Systems',
      'Model Deployment',
      'Edge Computing',
      'Mobile Development',
    ],
    mathConcepts: [
      'Image Transformations',
      'Convolution',
      'Feature Extraction',
      'Pattern Recognition',
      'Signal Processing',
    ],
    exercises: [
      {
        title: 'Vietnamese License Plate Recognition System',
        description: 'Build end-to-end system để detect và recognize Vietnamese license plates',
        difficulty: 'Nâng cao',
        materials: ['Vietnamese License Plate Dataset', 'OpenCV', 'YOLO Model', 'OCR Libraries'],
        procedure: [
          'Collect Vietnamese license plate images dataset',
          'Train YOLO model cho license plate detection',
          'Implement image preprocessing để enhance plate visibility',
          'Apply OCR techniques cho character recognition',
          'Handle different plate formats và styles',
          'Optimize model cho real-time processing',
          'Build web interface cho testing và demo',
          'Deploy system cho production use',
        ],
        expectedResults: 'License plate recognition system với 95%+ accuracy for Vietnamese plates',
        solution: 'Complete ALPR system adapted for Vietnamese license plate standards',
      },
    ],
    realWorldApplications: [
      'Traffic monitoring systems cho Vietnamese cities',
      'Retail analytics và customer behavior analysis',
      'Medical imaging diagnosis cho Vietnamese hospitals',
      'Agricultural monitoring using drone imagery',
      'Manufacturing quality control systems',
    ],
    caseStudies: [
      {
        title: 'FPT - AI-Powered Security Systems',
        organization: 'FPT Corporation',
        problem: 'Developing intelligent security solutions cho Vietnamese market',
        solution: 'Integrated facial recognition và behavior analysis systems',
        impact: 'Deployed trong 500+ locations across Vietnam',
        innovations: ['Vietnamese Face Recognition', 'Behavior Analysis AI', 'Edge Computing Integration'],
      },
    ],
    resources: [
      {
        title: 'OpenCV Computer Vision Tutorials',
        url: 'https://opencv-python-tutroals.readthedocs.io/',
        type: 'Tutorial',
      },
      {
        title: 'Computer Vision: Algorithms and Applications',
        url: 'http://szeliski.org/Book/',
        type: 'Book',
      },
    ],
  },

  {
    id: 'natural-language-processing',
    title: 'Natural Language Processing Cho Tiếng Việt',
    description:
      'Master NLP techniques specifically designed cho Vietnamese language, từ text preprocessing đến advanced language models.',
    duration: '190 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=Y-I4pf6Bhas', // NLP fundamentals
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
    objectives: [
      'Master Vietnamese text preprocessing techniques',
      'Implement sentiment analysis cho Vietnamese content',
      'Build chatbots và conversational AI',
      'Apply named entity recognition cho Vietnamese',
      'Create text summarization systems',
      'Deploy Vietnamese language models',
    ],
    prerequisites: [
      'ML fundamentals knowledge',
      'Understanding của linguistic concepts',
      'Python programming với NLP libraries',
    ],
    algorithmTypes: ['BERT', 'GPT', 'Word2Vec', 'LSTM', 'Transformer'],
    mlFrameworks: ['Transformers', 'spaCy', 'NLTK', 'PhoBERT', 'VnCoreNLP'],
    applications: [
      'Chatbots',
      'Sentiment Analysis',
      'Machine Translation',
      'Text Summarization',
      'Information Extraction',
    ],
    programmingSkills: [
      'Text Processing',
      'Language Modeling',
      'API Development',
      'Cloud Deployment',
      'Model Fine-tuning',
    ],
    mathConcepts: [
      'Vector Spaces',
      'Attention Mechanisms',
      'Sequence Modeling',
      'Probability Distributions',
      'Information Theory',
    ],
    exercises: [
      {
        title: 'Vietnamese Sentiment Analysis System',
        description: 'Build sentiment analysis system để analyze Vietnamese social media posts',
        difficulty: 'Nâng cao',
        materials: ['Vietnamese Social Media Dataset', 'PhoBERT Model', 'Transformers Library', 'Vietnamese Tokenizer'],
        procedure: [
          'Collect Vietnamese social media data cho sentiment analysis',
          'Preprocess Vietnamese text handling diacritics và slang',
          'Fine-tune PhoBERT model cho sentiment classification',
          'Handle class imbalance trong Vietnamese sentiment data',
          'Evaluate model performance on Vietnamese text',
          'Build API endpoint cho real-time sentiment analysis',
          'Create web interface để test sentiment predictions',
          'Deploy model cho production use',
        ],
        expectedResults: 'Vietnamese sentiment analysis system với 88%+ accuracy',
        solution: 'Production-ready sentiment analysis API specifically tuned for Vietnamese',
      },
    ],
    realWorldApplications: [
      'Social media monitoring cho Vietnamese brands',
      'Customer service chatbots trong Vietnamese',
      'News analysis và summarization systems',
      'Vietnamese language learning applications',
      'Legal document processing và analysis',
    ],
    caseStudies: [
      {
        title: 'Zalo - Vietnamese Conversational AI',
        organization: 'Zalo (VNG Corporation)',
        problem: 'Building intelligent chat features cho Vietnamese users',
        solution: 'Developed Vietnamese-specific language models và conversational AI',
        impact: 'Improved user engagement by 40% through intelligent features',
        innovations: ['Vietnamese Language Model', 'Context-aware Chatbots', 'Multi-modal Conversations'],
      },
    ],
    resources: [
      {
        title: 'Vietnamese NLP Toolkit',
        url: 'https://github.com/vncorenlp/VnCoreNLP',
        type: 'Tool',
      },
      {
        title: 'PhoBERT Vietnamese Language Model',
        url: 'https://github.com/VinAIResearch/PhoBERT',
        type: 'Model',
      },
    ],
  },

  {
    id: 'reinforcement-learning',
    title: 'Reinforcement Learning Và Ứng Dụng',
    description:
      'Khám phá Reinforcement Learning, một lĩnh vực của Machine Learning, nơi các agent học cách đưa ra quyết định thông qua thử và sai để tối đa hóa phần thưởng. Tìm hiểu về các thuật toán cốt lõi và ứng dụng trong game, robot và tự động hóa.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=tFSvLbJCrq8', // Reinforcement learning tutorial
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    objectives: [
      'Understand RL fundamentals: agents, environments, rewards',
      'Implement Q-learning và policy gradient algorithms',
      'Build game-playing AI agents',
      'Apply RL cho optimization problems',
      'Understand deep reinforcement learning',
      'Deploy RL agents trong real-world scenarios',
    ],
    prerequisites: [
      'ML và deep learning knowledge',
      'Python programming proficiency',
      'Understanding của optimization concepts',
    ],
    algorithmTypes: ['Q-Learning', 'Deep Q-Networks', 'Policy Gradients', 'Actor-Critic', 'Multi-Agent RL'],
    mlFrameworks: ['OpenAI Gym', 'Stable Baselines3', 'Ray RLLib', 'TensorFlow Agents', 'Unity ML-Agents'],
    applications: ['Game AI', 'Robotics', 'Trading Systems', 'Resource Optimization', 'Autonomous Systems'],
    programmingSkills: [
      'Environment Design',
      'Agent Development',
      'Simulation',
      'Performance Optimization',
      'Distributed Computing',
    ],
    mathConcepts: [
      'Markov Decision Processes',
      'Bellman Equations',
      'Policy Optimization',
      'Value Functions',
      'Exploration vs Exploitation',
    ],
    exercises: [
      {
        title: 'Vietnamese Chess AI Agent',
        description: 'Build RL agent để play Vietnamese chess (Cờ Tướng) competitively',
        difficulty: 'Nâng cao',
        materials: ['Chess Environment', 'Deep RL Framework', 'Vietnamese Chess Rules', 'Training Infrastructure'],
        procedure: [
          'Implement Vietnamese chess game environment',
          'Design state representation cho chess positions',
          'Implement Deep Q-Network (DQN) algorithm',
          'Train agent using self-play techniques',
          'Apply advanced RL techniques (Double DQN, Dueling Networks)',
          'Evaluate agent performance against different skill levels',
          'Optimize training using distributed computing',
          'Deploy agent với user-friendly interface',
        ],
        expectedResults: 'Vietnamese chess AI achieving intermediate to advanced playing strength',
        solution: 'Complete chess AI system với web interface for human vs AI matches',
      },
    ],
    realWorldApplications: [
      'Stock trading algorithms cho Vietnamese markets',
      'Resource allocation trong smart city systems',
      'Autonomous vehicle navigation',
      'Game development và entertainment',
      'Industrial process optimization',
    ],
    caseStudies: [
      {
        title: 'VietStock - AI Trading Assistant',
        organization: 'VietStock',
        problem: 'Developing intelligent trading recommendations cho Vietnamese stock market',
        solution: 'Applied reinforcement learning cho portfolio optimization',
        impact: 'Improved investment returns by 15% compared to traditional methods',
        innovations: ['Market-specific RL Models', 'Risk-aware Trading Strategies', 'Real-time Adaptation'],
      },
    ],
    resources: [
      {
        title: 'Deep Reinforcement Learning Course',
        url: 'https://www.deepmind.com/learning-resources',
        type: 'Course',
      },
      {
        title: 'Reinforcement Learning: An Introduction',
        url: 'http://incompleteideas.net/book/the-book.html',
        type: 'Book',
      },
    ],
  },

  {
    id: 'mlops-production-deployment',
    title: 'MLOps Và Production Model Deployment',
    description:
      'Master MLOps practices để deploy, monitor và maintain ML models trong production environment efficiently và reliably.',
    duration: '175 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=t3KRhBANPbI', // MLOps introduction
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    objectives: [
      'Understand MLOps lifecycle và best practices',
      'Implement continuous integration cho ML models',
      'Setup model monitoring và alerting systems',
      'Deploy models using containerization',
      'Manage model versioning và rollbacks',
      'Scale ML systems cho high traffic',
    ],
    prerequisites: [
      'ML model development experience',
      'Basic DevOps và cloud computing knowledge',
      'Understanding của software engineering practices',
    ],
    algorithmTypes: ['Model Serving', 'A/B Testing', 'Model Monitoring', 'Continuous Training', 'Model Optimization'],
    mlFrameworks: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'TensorFlow Serving'],
    applications: ['Web APIs', 'Mobile Deployment', 'Edge Computing', 'Batch Processing', 'Real-time Inference'],
    programmingSkills: ['DevOps', 'Cloud Platforms', 'Containerization', 'API Development', 'Monitoring'],
    mathConcepts: [
      'Performance Metrics',
      'Statistical Testing',
      'Resource Optimization',
      'Load Balancing',
      'Scalability',
    ],
    exercises: [
      {
        title: 'End-to-End ML Pipeline Deployment',
        description: 'Build complete MLOps pipeline từ development đến production monitoring',
        difficulty: 'Nâng cao',
        materials: ['Cloud Platform Access', 'Docker', 'Kubernetes', 'MLflow', 'Monitoring Tools'],
        procedure: [
          'Setup ML experiment tracking với MLflow',
          'Containerize ML model using Docker',
          'Create model serving API với FastAPI',
          'Deploy model to Kubernetes cluster',
          'Implement model monitoring và logging',
          'Setup automated model retraining pipeline',
          'Configure A/B testing framework',
          'Monitor model performance và business metrics',
        ],
        expectedResults: 'Production-ready ML system với automated deployment và monitoring',
        solution: 'Complete MLOps infrastructure supporting continuous model improvement',
      },
    ],
    realWorldApplications: [
      'E-commerce recommendation systems at scale',
      'Banking fraud detection systems',
      'Healthcare diagnostic tools',
      'Transportation optimization systems',
      'Manufacturing quality control',
    ],
    caseStudies: [
      {
        title: 'Shopee - Large-scale Recommendation System',
        organization: 'Shopee Vietnam',
        problem: 'Deploying personalized recommendations cho millions của users',
        solution: 'Built robust MLOps infrastructure với real-time model serving',
        impact: 'Served 100M+ predictions daily với <100ms latency',
        innovations: ['Real-time Feature Engineering', 'Multi-armed Bandit A/B Testing', 'Automated Model Retraining'],
      },
    ],
    resources: [
      {
        title: 'MLOps Best Practices Guide',
        url: 'https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning',
        type: 'Guide',
      },
      {
        title: 'Building Machine Learning Pipelines',
        url: 'https://www.oreilly.com/library/view/building-machine-learning/9781492053187/',
        type: 'Book',
      },
    ],
  },

  {
    id: 'ai-ethics-bias-fairness',
    title: 'AI Ethics, Bias Detection Và Fairness',
    description:
      'Understand ethical considerations trong AI development, detect và mitigate bias, và build fair và responsible AI systems.',
    duration: '165 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=1RptHwfkx_k', // AI ethics and fairness
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
    objectives: [
      'Understand AI ethics principles và frameworks',
      'Identify và measure bias trong ML models',
      'Implement fairness-aware machine learning',
      'Design transparent và explainable AI systems',
      'Handle privacy và data protection concerns',
      'Create ethical AI governance frameworks',
    ],
    prerequisites: [
      'ML fundamentals knowledge',
      'Understanding của social và cultural contexts',
      'Basic statistics và data analysis',
    ],
    algorithmTypes: [
      'Fairness Metrics',
      'Bias Detection',
      'Explainable AI',
      'Privacy-preserving ML',
      'Adversarial Debiasing',
    ],
    mlFrameworks: ['Fairlearn', 'AI Fairness 360', 'LIME', 'SHAP', 'TensorFlow Privacy'],
    applications: ['Hiring Systems', 'Credit Scoring', 'Healthcare AI', 'Criminal Justice', 'Educational Technology'],
    programmingSkills: [
      'Bias Analysis',
      'Fairness Testing',
      'Model Interpretability',
      'Privacy Engineering',
      'Governance Frameworks',
    ],
    mathConcepts: [
      'Statistical Parity',
      'Equalized Odds',
      'Information Theory',
      'Differential Privacy',
      'Causal Inference',
    ],
    exercises: [
      {
        title: 'Vietnamese Hiring System Bias Audit',
        description: 'Audit hiring AI system cho bias against Vietnamese demographic groups',
        difficulty: 'Trung bình',
        materials: ['Hiring Dataset', 'Fairness Libraries', 'Bias Detection Tools', 'Vietnamese Demographic Data'],
        procedure: [
          'Analyze Vietnamese hiring dataset cho demographic representation',
          'Identify potential sources of bias trong recruitment process',
          'Implement multiple fairness metrics cho evaluation',
          'Detect bias against different Vietnamese ethnic groups',
          'Apply bias mitigation techniques',
          'Evaluate trade-offs between accuracy và fairness',
          'Create transparent reporting dashboard',
          'Develop recommendations cho fair hiring practices',
        ],
        expectedResults: 'Comprehensive bias audit report với actionable fairness improvements',
        solution: 'Fair và transparent hiring system adapted cho Vietnamese workplace diversity',
      },
    ],
    realWorldApplications: [
      'Fair lending systems cho Vietnamese financial institutions',
      'Unbiased healthcare AI trong diverse Vietnamese populations',
      'Equitable education technology systems',
      'Fair criminal justice risk assessment tools',
      'Inclusive recommendation systems',
    ],
    caseStudies: [
      {
        title: 'VPBank - Fair Credit Scoring System',
        organization: 'VP Bank Vietnam',
        problem: 'Ensuring fair credit access across diverse Vietnamese customer base',
        solution: 'Implemented bias detection và fairness-aware credit scoring',
        impact: 'Increased loan approval rates for underserved communities by 20%',
        innovations: [
          'Multi-objective Fairness Optimization',
          'Cultural Context Integration',
          'Transparent Decision Making',
        ],
      },
    ],
    resources: [
      {
        title: 'Partnership on AI Ethics Guidelines',
        url: 'https://www.partnershiponai.org/about/',
        type: 'Guidelines',
      },
      {
        title: 'Fairness and Machine Learning Book',
        url: 'https://fairmlbook.org/',
        type: 'Book',
      },
    ],
  },
];
