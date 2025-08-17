import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface DataScienceLessonType extends BaseLessonData {
  programmingLanguages: string[];
  analyticsTools: string[];
  dataTypes: string[];
  machineLearningMethods: string[];
  industryApplications: string[];
}

export const dataScienceLessons: DataScienceLessonType[] = [
  {
    id: 'data-science-fundamentals-python',
    title: 'Data Science Fundamentals với Python',
    description: 'Master data science fundamentals sử dụng Python, từ data manipulation đến statistical analysis và visualization.',
    duration: '240 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: '/images/lessons/data-science-python.jpg',
    objectives: [
      'Master Python cho data science workflows',
      'Understand statistical analysis fundamentals',
      'Create compelling data visualizations',
      'Perform exploratory data analysis effectively',
      'Implement basic machine learning models'
    ],
    prerequisites: [
      'Basic Python programming knowledge',
      'Understanding of mathematics and statistics',
      'Logical thinking và problem-solving skills',
      'Willingness to work với large datasets'
    ],
    programmingLanguages: [
      'Python (pandas, numpy, scipy)',
      'SQL cho database operations',
      'R for statistical computing',
      'Jupyter Notebooks for analysis',
      'Git for version control'
    ],
    analyticsTools: [
      'Pandas for data manipulation',
      'NumPy for numerical computing',
      'Matplotlib/Seaborn for visualization',
      'Scikit-learn for machine learning',
      'Jupyter Lab for development'
    ],
    dataTypes: [
      'Structured data (CSV, databases)',
      'Semi-structured data (JSON, XML)',
      'Unstructured data (text, images)',
      'Time series data',
      'Geospatial data'
    ],
    machineLearningMethods: [
      'Supervised learning algorithms',
      'Unsupervised learning techniques',
      'Feature engineering methods',
      'Model evaluation frameworks',
      'Cross-validation strategies'
    ],
    industryApplications: [
      'Business intelligence và analytics',
      'Customer behavior analysis',
      'Financial risk modeling',
      'Healthcare data analysis',
      'Marketing optimization'
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
          'Statistical analysis libraries'
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
          'Document methodology và code'
        ],
        expectedResults: 'Professional data science project demonstrating statistical insights',
        solution: 'Systematic approach to data-driven decision making'
      },
      {
        title: 'Vietnamese Market Analysis Project',
        description: 'Analyze Vietnamese consumer behavior data để identify market trends',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese consumer survey data',
          'Economic indicators dataset',
          'Social media sentiment data',
          'Advanced analytics tools'
        ],
        procedure: [
          'Gather multi-source Vietnamese market data',
          'Integrate disparate data sources effectively',
          'Apply advanced statistical techniques',
          'Identify consumer behavior patterns',
          'Segment customers based on behavior',
          'Predict market trends using forecasting',
          'Validate insights với domain experts',
          'Create actionable business recommendations'
        ],
        expectedResults: 'Market insights report với actionable recommendations for Vietnamese businesses',
        solution: 'Data-driven understanding of Vietnamese consumer landscape'
      }
    ],
    realWorldApplications: [
      'E-commerce personalization systems',
      'Financial fraud detection models',
      'Healthcare outcome prediction',
      'Supply chain optimization',
      'Marketing campaign effectiveness analysis'
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
          'Weather impact factor integration'
        ]
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
          'Transaction history deep learning'
        ]
      }
    ],
    resources: [
      {
        title: 'Python for Data Science Handbook',
        url: 'https://jakevdp.github.io/PythonDataScienceHandbook',
        type: 'Educational Resource'
      },
      {
        title: 'Kaggle Learn Data Science',
        url: 'https://www.kaggle.com/learn',
        type: 'Interactive Course'
      },
      {
        title: 'Pandas Documentation',
        url: 'https://pandas.pydata.org/docs',
        type: 'Technical Documentation'
      }
    ]
  },
  {
    id: 'big-data-machine-learning-applications',
    title: 'Big Data Processing & Machine Learning Applications',
    description: 'Master big data processing techniques và advanced machine learning applications cho enterprise-scale solutions.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: '/images/lessons/big-data-ml.jpg',
    objectives: [
      'Understand big data processing architectures',
      'Implement distributed computing solutions',
      'Build scalable machine learning pipelines',
      'Deploy models to production environments',
      'Monitor và maintain ML systems'
    ],
    prerequisites: [
      'Intermediate programming skills',
      'Understanding of machine learning concepts',
      'Database và cloud computing knowledge',
      'Statistical modeling experience'
    ],
    programmingLanguages: [
      'Python (advanced libraries)',
      'Scala for Spark development',
      'SQL for data querying',
      'Docker for containerization',
      'Kubernetes for orchestration'
    ],
    analyticsTools: [
      'Apache Spark for distributed computing',
      'Hadoop ecosystem tools',
      'TensorFlow/PyTorch for deep learning',
      'MLflow for model management',
      'Apache Kafka for streaming'
    ],
    dataTypes: [
      'Streaming data (real-time)',
      'Distributed datasets (petabyte scale)',
      'Multi-modal data (text, image, audio)',
      'Graph data structures',
      'High-frequency time series'
    ],
    machineLearningMethods: [
      'Deep learning architectures',
      'Ensemble methods',
      'Reinforcement learning',
      'Transfer learning techniques',
      'Automated machine learning (AutoML)'
    ],
    industryApplications: [
      'Real-time recommendation systems',
      'Fraud detection at scale',
      'Computer vision applications',
      'Natural language processing',
      'IoT sensor data analysis'
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
          'Monitoring và logging tools'
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
          'Monitor và maintain system health'
        ],
        expectedResults: 'Production ML system processing 1M+ records daily với 99% uptime',
        solution: 'Enterprise-grade machine learning infrastructure'
      }
    ],
    realWorldApplications: [
      'Social media recommendation engines',
      'Autonomous vehicle systems',
      'Smart city infrastructure',
      'Financial trading algorithms',
      'Healthcare diagnostic systems'
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
          'Real-time personalization at scale'
        ]
      }
    ],
    resources: [
      {
        title: 'Spark: The Definitive Guide',
        url: 'https://spark.apache.org/docs/latest',
        type: 'Technical Documentation'
      },
      {
        title: 'MLOps Best Practices',
        url: 'https://ml-ops.org',
        type: 'Industry Standards'
      }
    ]
  },
  {
    id: 'business-intelligence-data-storytelling',
    title: 'Business Intelligence & Data Storytelling',
    description: 'Transform data insights thành compelling business stories và drive strategic decision-making trong organizations.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: '/images/lessons/data-storytelling.jpg',
    objectives: [
      'Master data storytelling techniques',
      'Create compelling business intelligence dashboards',
      'Communicate insights to stakeholders effectively',
      'Build data-driven organizational culture',
      'Implement self-service analytics solutions'
    ],
    prerequisites: [
      'Data analysis experience',
      'Understanding of business operations',
      'Presentation và communication skills',
      'Stakeholder management experience'
    ],
    programmingLanguages: [
      'SQL for data extraction',
      'Python for analysis automation',
      'DAX for Power BI calculations',
      'JavaScript for custom visualizations',
      'R for statistical reporting'
    ],
    analyticsTools: [
      'Power BI for business intelligence',
      'Tableau for advanced visualization',
      'Excel for rapid prototyping',
      'Google Data Studio for web analytics',
      'Looker for self-service BI'
    ],
    dataTypes: [
      'Business performance metrics',
      'Financial và operational data',
      'Customer journey analytics',
      'Market research insights',
      'Competitive intelligence data'
    ],
    machineLearningMethods: [
      'Predictive business modeling',
      'Customer segmentation analysis',
      'Forecast accuracy optimization',
      'Anomaly detection for business metrics',
      'A/B testing statistical analysis'
    ],
    industryApplications: [
      'Executive decision support systems',
      'Sales performance optimization',
      'Customer experience improvement',
      'Operational efficiency enhancement',
      'Market opportunity identification'
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
          'Stakeholder feedback systems'
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
          'Gather feedback và iterate'
        ],
        expectedResults: 'Executive dashboard driving 50% faster decision-making',
        solution: 'User-centric business intelligence solution'
      }
    ],
    realWorldApplications: [
      'Corporate strategy development',
      'Performance management systems',
      'Risk assessment frameworks',
      'Market analysis platforms',
      'Operational optimization tools'
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
          'Market demand forecasting integration'
        ]
      }
    ],
    resources: [
      {
        title: 'Storytelling with Data',
        url: 'http://www.storytellingwithdata.com',
        type: 'Methodology Guide'
      },
      {
        title: 'Power BI Learning Path',
        url: 'https://docs.microsoft.com/en-us/learn/powerplatform/power-bi',
        type: 'Educational Platform'
      }
    ]
  }
];
