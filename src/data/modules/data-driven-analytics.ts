import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface DataDrivenAnalyticsLesson extends BaseLessonData {
  analyticsTools: string[];
  metricCategories: string[];
  reportingFrameworks: string[];
  optimizationMethods: string[];
  dataVisualization: string[];
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

export const dataDrivenAnalyticsLessons: DataDrivenAnalyticsLesson[] = [
  {
    id: 'advanced-social-media-analytics-insights',
    title: 'Advanced Social Media Analytics & Data Insights',
    description:
      'Master advanced analytics techniques để extract actionable insights từ social media data và drive strategic decisions.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=HjUJf5bKCpU',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
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
    faqs: [
      {
        question: 'Phân tích dữ liệu có thực sự cần thiết cho một doanh nghiệp nhỏ không?',
        answer:
          'Cực kỳ cần thiết. Đối với doanh nghiệp nhỏ, mỗi đồng chi cho marketing đều quý giá. Phân tích dữ liệu giúp bạn hiểu rõ kênh nào mang lại hiệu quả, khách hàng nào giá trị nhất, từ đó tối ưu hóa ngân sách và cạnh tranh hiệu quả hơn với các đối thủ lớn.',
      },
      {
        question: 'Tôi không giỏi toán, liệu tôi có thể học phân tích dữ liệu được không?',
        answer:
          'Hoàn toàn có thể. Phân tích dữ liệu marketing hiện đại không đòi hỏi bạn phải là một nhà toán học. Các công cụ ngày nay rất trực quan, tập trung vào việc diễn giải ý nghĩa đằng sau con số hơn là các công thức phức tạp. Tư duy logic và sự tò mò quan trọng hơn là khả năng tính toán cao siêu.',
      },
      {
        question: 'Insight là gì và nó khác gì với dữ liệu thông thường?',
        answer:
          'Dữ liệu là những con số thô (ví dụ: "70% người dùng rời khỏi trang thanh toán"). Insight là sự diễn giải có ý nghĩa và có tính hành động từ dữ liệu đó (ví dụ: "Người dùng đang gặp khó khăn ở bước thanh toán, có thể do quy trình quá phức tạp. Chúng ta nên đơn giản hóa nó.").',
      },
      {
        question: 'Làm thế nào để bắt đầu xây dựng văn hóa dựa trên dữ liệu trong một tổ chức?',
        answer:
          'Hãy bắt đầu từ những bước nhỏ. Thiết lập các báo cáo tự động đơn giản, dễ hiểu. Trong các cuộc họp, hãy tập thói quen hỏi "Dữ liệu nào cho thấy điều đó?". Tôn vinh những quyết định thành công dựa trên dữ liệu để khuyến khích mọi người. Quan trọng nhất là sự gương mẫu từ cấp lãnh đạo.',
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
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
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
    faqs: [
      {
        question: 'Phân tích dự báo có phải là "đoán mò" không?',
        answer:
          'Không hề. Phân tích dự báo không phải là đoán mò mà là một khoa học. Nó sử dụng các mô hình toán học và thống kê để tìm ra các quy luật và xu hướng từ dữ liệu quá khứ, từ đó đưa ra những dự đoán có xác suất cao về tương lai. Độ chính xác của dự báo phụ thuộc rất nhiều vào chất lượng và số lượng của dữ liệu đầu vào.',
      },
      {
        question: 'Tôi cần những kỹ năng gì để làm về phân tích dự báo?',
        answer:
          'Bạn sẽ cần kiến thức về thống kê, hiểu biết về các thuật toán machine learning (như hồi quy, cây quyết định), và kỹ năng lập trình (thường là Python hoặc R). Quan trọng không kém là tư duy kinh doanh để hiểu bối cảnh và đặt ra những câu hỏi đúng cho dữ liệu.',
      },
      {
        question: 'Một ví dụ đơn giản về phân tích dự báo trong marketing?',
        answer:
          'Một ví dụ kinh điển là "phân tích giỏ hàng". Bằng cách phân tích lịch sử mua hàng, siêu thị có thể dự báo rằng những khách hàng mua tã lót cũng có khả năng cao sẽ mua bia. Từ đó, họ có thể đặt hai sản phẩm này gần nhau để tăng doanh số. Đây là một dạng dự báo về hành vi mua sắm.',
      },
      {
        question: 'Làm thế nào để một doanh nghiệp có thể bắt đầu với phân tích dự báo khi có ít dữ liệu?',
        answer:
          'Hãy bắt đầu thu thập dữ liệu một cách có hệ thống ngay từ bây giờ. Ngay cả với dữ liệu nhỏ, bạn vẫn có thể bắt đầu với các mô hình đơn giản như phân tích xu hướng (trend analysis) trên Google Analytics. Khi lượng dữ liệu tăng lên, bạn có thể triển khai các mô hình phức tạp hơn. Đừng đợi có "dữ liệu lớn" mới hành động.',
      },
    ],
  },
];

const transformedLessons: BaseLessonData[] = dataDrivenAnalyticsLessons.map((lesson) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    analyticsTools,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    metricCategories,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reportingFrameworks,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    optimizationMethods,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dataVisualization,
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

export const dataDrivenAnalyticsModuleData: ModuleData = {
  id: K2Module.DataDrivenAnalytics,
  title: 'Phân tích Dữ liệu & Dự báo Xu hướng',
  subtitle: 'Biến dữ liệu mạng xã hội thành lợi thế cạnh tranh',
  description:
    'Trang bị kỹ năng phân tích dữ liệu mạng xã hội từ cơ bản đến nâng cao, sử dụng các mô hình dự báo để đón đầu xu hướng và đưa ra các quyết định marketing chiến lược.',
  category: 'Marketing & Phân tích',
  icon: '📊',
  color: 'from-blue-500 to-teal-400',
  level: 'Nâng cao',
  duration: '10-12 giờ',
  features: [
    'Phân tích dữ liệu mạng xã hội nâng cao',
    'Xây dựng hệ thống báo cáo và dashboard',
    'Sử dụng mô hình dự báo (predictive analytics)',
    'Nhận diện và đón đầu xu hướng (trend forecasting)',
    'Tối ưu hóa chiến lược dựa trên dữ liệu',
  ],
  prerequisites: ['Kiến thức cơ bản về marketing và mạng xã hội', 'Tư duy phân tích và logic'],
  objectives: [
    'Thành thạo các công cụ phân tích mạng xã hội.',
    'Biến dữ liệu thô thành các insight có giá trị hành động.',
    'Xây dựng các mô hình dự báo xu hướng và hành vi người dùng.',
    'Tối ưu hóa chiến dịch marketing dựa trên dữ liệu thực tế.',
    'Phát triển tư duy chiến lược dựa trên phân tích dự báo.',
  ],
  careerOutcomes: [
    'Chuyên viên Phân tích Dữ liệu Marketing (Marketing Data Analyst)',
    'Chuyên viên Social Listening',
    'Chuyên gia Nghiên cứu thị trường (Market Research Analyst)',
    'Giám đốc Marketing dựa trên dữ liệu (Data-Driven Marketing Manager)',
  ],
  industryApplications: [
    'Thương mại điện tử',
    'Agency Quảng cáo và Truyền thông',
    'Ngành hàng tiêu dùng nhanh (FMCG)',
    'Công nghệ và Phần mềm',
    'Truyền thông và Giải trí',
  ],
  marketDemand: {
    averageSalary: '800 - 2.500 USD/tháng',
    jobGrowth: '25% mỗi năm',
    hireDemand: 'Rất cao',
  },
  relatedModules: [
    K2Module.AISEOOptimization,
    K2Module.GenZMarketing,
    K2Module.TikTokSocialCommerce,
    K2Module.AIApplications,
  ],
  lessons: transformedLessons,
};
