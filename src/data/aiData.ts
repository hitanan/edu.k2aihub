export interface AILessonType {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  category: string;
  videoUrl?: string;
  objectives: string[];
  prerequisites: string[];
  tools: string[];
  exercises: Array<{
    title: string;
    description: string;
    difficulty: string;
    steps: string[];
    expectedResults: string;
    tips?: string[];
  }>;
  realWorldApplications: string[];
  resources?: Array<{
    title: string;
    url: string;
    type: string;
  }>;
}

export const aiLessons: AILessonType[] = [
  {
    id: 'office-work',
    title: 'AI cho Văn Phòng & Công Việc',
    description:
      'Sử dụng AI để tối ưu hóa công việc văn phòng, từ viết email đến tạo báo cáo',
    duration: '4 giờ',
  videoUrl: 'https://www.youtube.com/watch?v=TXxuccRXo-k',
    difficulty: 'Cơ bản',
    category: 'Productivity',
    objectives: [
      'Sử dụng ChatGPT để viết email chuyên nghiệp',
      'Tự động hóa Excel với AI',
      'Tạo presentations ấn tượng',
      'Quản lý thời gian hiệu quả',
    ],
    prerequisites: [
      'Sử dụng máy tính cơ bản',
      'Microsoft Office hoặc Google Workspace',
    ],
    tools: [
      'ChatGPT',
      'Google Bard',
      'Microsoft Copilot',
      'Grammarly',
      'Notion AI',
    ],
    exercises: [
      {
        title: 'Viết email chuyên nghiệp với ChatGPT',
        description:
          'Học cách tạo email hiệu quả cho nhiều tình huống khác nhau',
        difficulty: 'Cơ bản',
        steps: [
          'Truy cập ChatGPT và đăng nhập',
          'Sử dụng prompt template cho email',
          'Tùy chỉnh tone và style phù hợp',
          'Review và chỉnh sửa kết quả',
          'Áp dụng vào email thực tế',
        ],
        expectedResults:
          'Email chuyên nghiệp, rõ ràng và phù hợp với từng đối tượng',
        tips: [
          'Luôn review và personalize nội dung AI tạo ra',
          'Cung cấp context chi tiết trong prompt',
          'Kiểm tra grammar và spelling cuối cùng',
        ],
      },
    ],
    realWorldApplications: [
      'Viết email marketing campaigns',
      'Tạo reports và presentations',
      'Phân tích dữ liệu Excel',
      'Lập kế hoạch dự án',
      'Quản lý customer support',
    ],
    resources: [
      {
        title: 'ChatGPT Official Guide',
        url: 'https://openai.com/chatgpt',
        type: 'Documentation',
      },
    ],
  },
  {
    id: 'creative-design',
    title: 'AI cho Sáng Tạo & Thiết Kế',
    description: 'Sử dụng AI để tạo nội dung sáng tạo, thiết kế và multimedia',
    duration: '5 giờ',
  videoUrl: 'https://www.youtube.com/watch?v=Lm7qG6pzvmA',
    difficulty: 'Trung bình',
    category: 'Creative',
    objectives: [
      'Tạo ảnh với Midjourney và DALL-E',
      'Viết content sáng tạo',
      'Thiết kế với Canva AI',
      'Chỉnh sửa ảnh với AI',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về thiết kế',
      'Tài khoản Discord (cho Midjourney)',
    ],
    tools: [
      'Midjourney',
      'DALL-E 3',
      'Canva AI Magic Studio',
      'Remove.bg',
      'Jasper AI',
    ],
    exercises: [
      {
        title: 'Tạo logo brand với Midjourney',
        description: 'Thiết kế logo chuyên nghiệp sử dụng AI',
        difficulty: 'Trung bình',
        steps: [
          'Nghiên cứu brand identity',
          'Viết prompt chi tiết cho logo',
          'Generate nhiều variations',
          'Chọn và refine kết quả tốt nhất',
          'Export và optimize cho sử dụng',
        ],
        expectedResults: 'Logo chuyên nghiệp phù hợp với brand identity',
      },
    ],
    realWorldApplications: [
      'Thiết kế marketing materials',
      'Tạo social media content',
      'Phát triển brand identity',
      'Product photography enhancement',
      'Content creation cho blog/website',
    ],
  },
  {
    id: 'education-learning',
    title: 'AI cho Giáo Dục & Học Tập',
    description: 'Áp dụng AI vào việc học tập, nghiên cứu và giảng dạy',
    duration: '3 giờ',
  videoUrl: 'https://www.youtube.com/watch?v=TXxuccRXo-k',
    difficulty: 'Cơ bản',
    category: 'Education',
    objectives: [
      'Sử dụng AI để học ngôn ngữ',
      'Nghiên cứu và tóm tắt tài liệu',
      'Tạo quiz và bài kiểm tra',
      'Personalized learning paths',
    ],
    prerequisites: ['Kiến thức cơ bản về chủ đề muốn học'],
    tools: ['ChatGPT', 'Claude', 'Perplexity AI', 'Quizlet AI', 'Speechify'],
    exercises: [
      {
        title: 'Tạo flashcards học từ vựng với AI',
        description: 'Sử dụng AI để tạo bộ flashcards hiệu quả',
        difficulty: 'Cơ bản',
        steps: [
          'Chọn chủ đề và mức độ',
          'Prompt AI tạo danh sách từ vựng',
          'Tạo câu ví dụ và ngữ cảnh',
          'Format thành flashcards',
          'Import vào app học tập',
        ],
        expectedResults: 'Bộ flashcards đầy đủ và có hệ thống',
      },
    ],
    realWorldApplications: [
      'Chuẩn bị bài giảng và curriculum',
      'Hỗ trợ học sinh cá nhân hóa',
      'Nghiên cứu academic papers',
      'Tạo assessment và evaluation',
      'Language learning và practice',
    ],
  },
  {
    id: 'business-marketing',
    title: 'AI cho Kinh Doanh & Marketing',
    description: 'Ứng dụng AI trong marketing, sales và phát triển kinh doanh',
    duration: '6 giờ',
  videoUrl: 'https://www.youtube.com/watch?v=Lm7qG6pzvmA',
    difficulty: 'Nâng cao',
    category: 'Business',
    objectives: [
      'Phân tích market insights với AI',
      'Tạo campaigns marketing tự động',
      'Customer segmentation và targeting',
      'Sales forecasting và optimization',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về marketing',
      'Kinh nghiệm business operations',
    ],
    tools: [
      'HubSpot AI',
      'Salesforce Einstein',
      'Google Analytics Intelligence',
      'Facebook Ads AI',
      'ChatGPT for Business',
    ],
    exercises: [
      {
        title: 'Tạo customer personas với AI',
        description: 'Phân tích và tạo customer personas chi tiết',
        difficulty: 'Nâng cao',
        steps: [
          'Thu thập data khách hàng hiện tại',
          'Sử dụng AI phân tích patterns',
          'Tạo detailed personas',
          'Validate với real data',
          'Implement vào marketing strategy',
        ],
        expectedResults: 'Customer personas chính xác và actionable',
      },
    ],
    realWorldApplications: [
      'Lead generation và qualification',
      'Content marketing automation',
      'Customer service chatbots',
      'Pricing optimization',
      'Competitive analysis',
    ],
  },
  {
    id: 'daily-life',
    title: 'AI cho Cuộc Sống Hàng Ngày',
    description:
      'Ứng dụng AI để cải thiện productivity và chất lượng cuộc sống',
    duration: '2 giờ',
  videoUrl: 'https://www.youtube.com/watch?v=M5xe04_4YrU',
    difficulty: 'Cơ bản',
    category: 'Lifestyle',
    objectives: [
      'Quản lý tài chính cá nhân với AI',
      'Planning và organization',
      'Health và fitness tracking',
      'Entertainment và hobbies',
    ],
    prerequisites: ['Smartphone hoặc computer cơ bản'],
    tools: [
      'Siri/Google Assistant',
      'IFTTT',
      'Mint AI',
      'MyFitnessPal AI',
      'Spotify AI DJ',
    ],
    exercises: [
      {
        title: 'Setup smart home automation',
        description: 'Tạo hệ thống smart home đơn giản với AI',
        difficulty: 'Cơ bản',
        steps: [
          'Audit current devices và needs',
          'Chọn AI assistant platform',
          'Setup basic automations',
          'Test và optimize workflows',
          'Expand với advanced features',
        ],
        expectedResults: 'Smart home system hoạt động mượt mà',
      },
    ],
    realWorldApplications: [
      'Personal finance management',
      'Travel planning và booking',
      'Health monitoring và advice',
      'Shopping recommendations',
      'Social media management',
    ],
  },
  {
    id: 'programming-dev',
    title: 'AI cho Lập Trình & Phát Triển',
    description: 'Sử dụng AI để coding, debugging và phát triển phần mềm',
    duration: '5 giờ',
  videoUrl: 'https://www.youtube.com/watch?v=CQqBQVH5PcI',
    difficulty: 'Nâng cao',
    category: 'Development',
    objectives: [
      'Code generation với GitHub Copilot',
      'Debugging và code review',
      'Documentation tự động',
      'Testing và optimization',
    ],
    prerequisites: [
      'Kiến thức lập trình cơ bản',
      'Hiểu biết về software development',
    ],
    tools: [
      'GitHub Copilot',
      'ChatGPT Code Interpreter',
      'Tabnine',
      'DeepCode',
      'Replit AI',
    ],
    exercises: [
      {
        title: 'Build web app với AI assistance',
        description: 'Tạo web application hoàn chỉnh với sự hỗ trợ của AI',
        difficulty: 'Nâng cao',
        steps: [
          'Define project requirements',
          'Generate boilerplate code',
          'Implement features với AI assistance',
          'Debug và optimize',
          'Deploy và monitor',
        ],
        expectedResults: 'Web application hoạt động đầy đủ tính năng',
      },
    ],
    realWorldApplications: [
      'Rapid prototyping',
      'Code review automation',
      'API documentation generation',
      'Performance optimization',
      'Security vulnerability detection',
    ],
  },
];
