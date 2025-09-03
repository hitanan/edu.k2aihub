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

export interface DataDrivenAnalyticsLessonType extends BaseLessonData {
  analyticsTools: string[];
  metricCategories: string[];
  reportingFrameworks: string[];
  optimizationMethods: string[];
  dataVisualization: string[];
  vietnamContext?: VietnamContext;
  careerConnect?: CareerConnect;
  quizzes?: Quiz[];
}

export const dataDrivenAnalyticsLessons: DataDrivenAnalyticsLessonType[] = [
  {
    id: 'advanced-social-media-analytics-insights',
    title: 'Advanced Social Media Analytics & Data Insights',
    description:
      'Master advanced analytics techniques để extract actionable insights từ social media data và drive strategic decisions.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=HjUJf5bKCpU',
    imageUrl: '/images/lessons/advanced-analytics.jpg',
    objectives: [
      'Master advanced analytics tools và techniques',
      'Extract actionable insights từ complex data',
      'Create comprehensive reporting systems',
      'Implement data-driven optimization strategies',
      'Predict trends và opportunities',
    ],
    prerequisites: [
      'Basic analytics experience',
      'Understanding of statistical concepts',
      'Access to analytics tools',
      'Strategic thinking capabilities',
    ],
    analyticsTools: [
      'Google Analytics 4 Advanced',
      'Facebook Analytics Pro',
      'Sprout Social Advanced Analytics',
      'Hootsuite Impact',
      'Custom dashboard solutions',
    ],
    metricCategories: [
      'Engagement quality indicators',
      'Conversion attribution metrics',
      'Audience behavior patterns',
      'Content performance analytics',
      'ROI measurement frameworks',
    ],
    reportingFrameworks: [
      'Executive summary dashboards',
      'Tactical performance reports',
      'Trend analysis presentations',
      'Predictive modeling outputs',
      'Optimization recommendation reports',
    ],
    optimizationMethods: [
      'A/B testing frameworks',
      'Multivariate analysis techniques',
      'Predictive modeling applications',
      'Machine learning insights',
      'Behavioral pattern recognition',
    ],
    dataVisualization: [
      'Interactive dashboard creation',
      'Storytelling với data visualization',
      'Real-time monitoring displays',
      'Trend visualization techniques',
      'Executive presentation formats',
    ],
    exercises: [
      {
        title: 'Comprehensive Analytics System Setup',
        description: 'Build advanced analytics system providing actionable insights',
        difficulty: 'Nâng cao',
        materials: [
          'Advanced analytics tool access',
          'Data integration platforms',
          'Visualization software licenses',
          'Statistical analysis tools',
        ],
        procedure: [
          'Setup comprehensive data tracking across platforms',
          'Integrate multiple data sources',
          'Create custom metrics và KPIs',
          'Build automated reporting dashboards',
          'Implement predictive analytics models',
          'Setup alert systems cho key metrics',
          'Train team on data interpretation',
          'Establish optimization workflows',
        ],
        expectedResults: 'Advanced analytics system driving 50%+ improvement trong decision making',
        solution: 'Data-driven approach to social media optimization',
      },
    ],
    realWorldApplications: [
      'Enterprise social media management',
      'Agency client reporting',
      'E-commerce conversion optimization',
      'Brand performance monitoring',
    ],
    caseStudies: [
      {
        title: 'E-commerce Analytics Transformation',
        organization: 'Vietnamese Fashion E-commerce',
        problem: 'Unable to connect social media efforts to sales results',
        solution: 'Advanced attribution modeling và customer journey analytics',
        impact: 'ROI clarity led to 300% increase trong social media marketing budget',
        innovations: [
          'Cross-platform customer journey mapping',
          'Predictive lifetime value modeling',
          'Real-time optimization algorithms',
        ],
      },
    ],
    resources: [
      {
        title: 'Advanced Social Analytics Guide',
        url: 'https://www.google.com/analytics/learn',
        type: 'Educational Resource',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Phân tích dữ liệu Mạng xã hội tại Việt Nam',
      content: [
        'Các sàn thương mại điện tử lớn như Shopee, Tiki, Lazada là những đơn vị đi đầu trong việc sử dụng phân tích dữ liệu để cá nhân hóa trải nghiệm người dùng và tối ưu hóa chiến dịch.',
        'Các agency marketing tại Việt Nam đang ngày càng phụ thuộc vào các công cụ như YouNet Media, Buzzmetrics để thực hiện "social listening" - theo dõi và phân tích các thảo luận trên mạng xã hội về thương hiệu và ngành hàng.',
        'Thách thức lớn nhất là xử lý ngôn ngữ tự nhiên tiếng Việt với các biến thể vùng miền, tiếng lóng, và "teen code", đòi hỏi các mô hình AI phải được huấn luyện chuyên sâu.',
        'Việc phân tích hành vi người dùng trên Zalo, một nền tảng đóng, vẫn là một "hộp đen" lớn đối với nhiều nhà phân tích dữ liệu tại Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Ông Nguyễn Hải Triều',
      title: 'CEO',
      company: 'YouNet Media',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hai-trieu',
      quote:
        'Dữ liệu trên mạng xã hội là một mỏ vàng. Nó cho bạn biết người tiêu dùng đang thực sự nghĩ gì, yêu gì, ghét gì về sản phẩm của bạn. Công việc của chúng tôi là cung cấp cho các thương hiệu chiếc xẻng và bản đồ để khai thác mỏ vàng đó một cách hiệu quả.',
    },
    quizzes: [
      {
        question: '"Social Listening" là gì?',
        options: [
          'Nghe các cuộc gọi điện thoại của người dùng.',
          'Quá trình theo dõi và phân tích các cuộc trò chuyện và thảo luận trên mạng xã hội về một thương hiệu, chủ đề hoặc đối thủ cạnh tranh.',
          'Chỉ đọc các bình luận trên Facebook.',
          'Tạo ra các cuộc thảo luận giả.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Social Listening là một công cụ nghiên cứu thị trường mạnh mẽ, giúp các thương hiệu nắm bắt được tâm tư, tình cảm của công chúng và phản ứng nhanh chóng với các khủng hoảng hoặc cơ hội.',
      },
      {
        question: 'Tại sao việc phân tích dữ liệu tiếng Việt lại có những thách thức riêng?',
        options: [
          'Vì tiếng Việt không có nhiều người sử dụng.',
          'Vì tiếng Việt là một ngôn ngữ đơn giản.',
          'Vì sự đa dạng của tiếng lóng, mã tuổi teen, biến thể vùng miền và việc không gõ dấu khiến máy tính khó hiểu chính xác.',
          'Vì không có công cụ nào hỗ trợ tiếng Việt.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Sự phong phú và phức tạp của ngôn ngữ tự nhiên tiếng Việt đòi hỏi các hệ thống phân tích phải được xây dựng và huấn luyện đặc thù, thay vì chỉ sử dụng các mô hình sẵn có cho tiếng Anh.',
      },
    ],
  },
  {
    id: 'predictive-analytics-trend-forecasting',
    title: 'Predictive Analytics & Social Media Trend Forecasting',
    description:
      'Use predictive analytics để forecast social media trends, audience behavior và optimize content strategies proactively.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=481lC6AeLIg',
    imageUrl: '/images/lessons/predictive-analytics.jpg',
    objectives: [
      'Implement predictive analytics models',
      'Forecast content performance',
      'Predict audience behavior changes',
      'Identify emerging trends early',
      'Optimize content strategy proactively',
    ],
    prerequisites: [
      'Advanced analytics experience',
      'Statistical modeling knowledge',
      'Machine learning basics',
      'Historical data access',
    ],
    analyticsTools: [
      'Google Analytics Intelligence',
      'Facebook Audience Insights',
      'TrendScope Analytics',
      'Python/R analytics tools',
      'Machine learning platforms',
    ],
    metricCategories: [
      'Trend emergence indicators',
      'Audience behavior predictors',
      'Content performance forecasts',
      'Engagement pattern predictions',
      'Market opportunity indicators',
    ],
    reportingFrameworks: [
      'Trend forecasting reports',
      'Predictive performance dashboards',
      'Risk assessment analytics',
      'Opportunity identification reports',
      'Strategic recommendation frameworks',
    ],
    optimizationMethods: [
      'Predictive content optimization',
      'Proactive audience targeting',
      'Trend-based content planning',
      'Risk mitigation strategies',
      'Opportunity maximization tactics',
    ],
    dataVisualization: [
      'Trend prediction visualizations',
      'Probability distribution charts',
      'Scenario modeling displays',
      'Risk-opportunity matrices',
      'Predictive timeline presentations',
    ],
    exercises: [
      {
        title: 'Predictive Model Development',
        description: 'Build predictive models cho content performance và trend forecasting',
        difficulty: 'Nâng cao',
        materials: [
          'Historical performance data',
          'Machine learning tools',
          'Statistical software access',
          'Trend analysis platforms',
        ],
        procedure: [
          'Collect comprehensive historical data',
          'Identify predictive variables và patterns',
          'Build baseline predictive models',
          'Validate model accuracy với historical data',
          'Implement real-time prediction systems',
          'Create trend alert mechanisms',
          'Test predictions với actual outcomes',
          'Refine models based on results',
        ],
        expectedResults: 'Predictive models với 80%+ accuracy trong trend identification',
        solution: 'Proactive strategy development based on data predictions',
      },
    ],
    realWorldApplications: [
      'Brand strategy planning',
      'Content calendar optimization',
      'Market trend analysis',
      'Competitive intelligence gathering',
    ],
    caseStudies: [
      {
        title: 'Trend Prediction Success',
        organization: 'Vietnamese Marketing Agency',
        problem: 'Always reacting to trends instead of leading them',
        solution: 'Predictive analytics system identifying trends 2-3 weeks early',
        impact: 'Client campaigns consistently ahead of trends, 400% engagement increase',
        innovations: [
          'Social listening predictive algorithms',
          'Cultural trend pattern recognition',
          'Early adopter behavior modeling',
        ],
      },
    ],
    resources: [
      {
        title: 'Predictive Analytics in Marketing',
        url: 'https://www.salesforce.com/resources/articles/predictive-analytics',
        type: 'Technical Guide',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Phân tích dự báo và Xu hướng tại Việt Nam',
      content: [
        'Các "trend" trên mạng xã hội Việt Nam, đặc biệt là TikTok, có tốc độ lan truyền và biến mất cực kỳ nhanh, đòi hỏi các thương hiệu phải có khả năng dự báo và phản ứng tức thời.',
        'Ví dụ về các trend được dự báo và khai thác thành công: trào lưu "trà chanh giã tay", "gỏi gà măng cụt". Các thương hiệu nhanh nhạy đã nhanh chóng đưa các yếu tố này vào sản phẩm hoặc chiến dịch marketing của mình.',
        'Các công ty nghiên cứu thị trường như Kantar, Nielsen tại Việt Nam đang sử dụng phân tích dự báo để tư vấn cho các thương hiệu lớn về xu hướng tiêu dùng trong tương lai.',
        'Thách thức: Dữ liệu để xây dựng mô hình dự báo ở Việt Nam thường phân mảnh và không đầy đủ, đặc biệt là dữ liệu về hành vi tiêu dùng ở các khu vực nông thôn.',
      ],
    },
    careerConnect: {
      name: 'Bà Đặng Thúy Hà',
      title: 'Giám đốc Nghiên cứu Hành vi Người tiêu dùng',
      company: 'NielsenIQ Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=dang-thuy-ha',
      quote:
        'Công việc của chúng tôi không phải là nhìn vào gương chiếu hậu để xem chuyện gì đã xảy ra. Chúng tôi phải nhìn vào kính thiên văn để dự báo những vì sao sắp tỏa sáng. Bằng cách phân tích hàng triệu điểm dữ liệu, chúng tôi có thể giúp các thương hiệu không chỉ bắt kịp xu hướng, mà còn tạo ra xu hướng.',
    },
    quizzes: [
      {
        question: 'Mục đích chính của phân tích dự báo (predictive analytics) trong marketing là gì?',
        options: [
          'Chỉ để báo cáo về các hoạt động trong quá khứ.',
          'Sử dụng dữ liệu lịch sử để dự đoán các sự kiện, hành vi và xu hướng trong tương lai.',
          'Để chứng minh rằng các quyết định trong quá khứ là đúng.',
          'Để tạo ra các biểu đồ đẹp mắt.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Phân tích dự báo giúp các doanh nghiệp chuyển từ thế bị động (phản ứng với quá khứ) sang thế chủ động (định hình tương lai), bằng cách đưa ra các quyết định chiến lược dựa trên các dự báo có cơ sở dữ liệu.',
      },
      {
        question:
          'Tại sao việc dự báo xu hướng trên TikTok lại đặc biệt quan trọng đối với các nhà marketing tại Việt Nam?',
        options: [
          'Vì TikTok không phổ biến ở Việt Nam.',
          'Vì các xu hướng trên TikTok tồn tại rất lâu.',
          'Vì TikTok là nền tảng tạo ra và lan truyền các xu hướng văn hóa đại chúng với tốc độ cực nhanh, ảnh hưởng lớn đến giới trẻ.',
          'Vì chỉ có các thương hiệu lớn mới có thể tham gia vào các xu hướng trên TikTok.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Với lượng người dùng trẻ khổng lồ và thuật toán ưu tiên sự lan truyền, TikTok đã trở thành "cỗ máy tạo trend" chính trong văn hóa số Việt Nam. Việc nắm bắt và dự báo các xu hướng này là chìa khóa để tiếp cận đối tượng khách hàng trẻ.',
      },
    ],
  },
];
