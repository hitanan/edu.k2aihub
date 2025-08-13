export interface ModuleNavigation {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string[] | string; // Support both single and multiple categories
  icon: string;
  color: string;
  lessons?: LessonNavigation[]; // Make lessons optional for dynamic loading
  totalDuration: string;
  difficulty: string;
  level?: string;
  duration?: string;
  href?: string;
  features?: string[];
  tags?: string[];
  prerequisites: string[];
  coreModule?: boolean;
}

export interface LessonNavigation {
  id: string;
  title: string;
  duration: string;
  difficulty: string;
  completed?: boolean;
}

export const K2Module = {
  // Core Modules
  City: 'city',
  AI: 'ai',

  // Professional Learning Modules
  DigitalMarketing: 'digital-marketing',
  GreenTechnology: 'green-technology',
  MentalHealthTech: 'mental-health-tech',
  FinancialLiteracy: 'financial-literacy',
  GameDevelopment: 'game-development',
  AIArtCreativeTech: 'ai-art-creative-tech',
  Cybersecurity: 'cybersecurity',
  Biotechnology: 'biotechnology',
  MCP: 'mcp',
  AIApplications: 'ai-applications',

  // Programming & STEM Modules
  Python: 'python',
  Arduino: 'arduino',
  Scratch: 'scratch',
  STEM: 'stem',
  Robotics: 'robotics',

  // Vietnamese-Specific Modules
  VietnameseBusiness: 'vietnamese-business',
  DigitalGovernment: 'digital-government',
  VietnameseLanguageTech: 'vietnamese-language-tech',
  VietnameseCulture: 'vietnamese-culture',
  VietnameseHealthcare: 'vietnamese-healthcare',

  // 2025 High-Demand Modules (Tier 1)
  SemiconductorTechnology: 'semiconductor-technology',
  RenewableEnergy: 'renewable-energy',
  AdvancedAI: 'advanced-ai',

  // 2025 High-Demand Modules (Tier 2)
  ElectricVehicleTech: 'electric-vehicle-tech',
  BlockchainDeFi: 'blockchain-defi',
  BiomedicalEngineering: 'biomedical-engineering',

  // 2025 High-Demand Modules (Tier 3)
  EnvironmentalDataScience: 'environmental-data-science',
  FoodTechnology: 'food-technology',
  AerospaceEngineering: 'aerospace-engineering',
  Nanotechnology: 'nanotechnology',

  // 2025 Vietnam Niche Market Research Modules
  BlueEconomy: 'blue-economy',
  SmartManufacturing: 'smart-manufacturing',
  AgriTech: 'agritech',
  DigitalHealth: 'digital-health',
  EdTech: 'edtech',
  SmartCity: 'smart-city',
  PropTech: 'proptech',
  CircularEconomy: 'circular-economy',
  ElectricVehicle: 'electric-vehicle',

  // 2025 Trend-Based Modules
  ContentCreator: 'content-creator',
  TeenWellness: 'teen-wellness',
  YoungEntrepreneur: 'young-entrepreneur',

  // 2025 Social Media Trending Modules
  AIContentCreator: 'ai-content-creator',
  TikTokSocialCommerce: 'tiktok-social-commerce',
  GenZMarketing: 'genz-marketing',
  ShortVideoMastery: 'short-video-mastery',
  LiveCommerceStreaming: 'live-commerce-streaming',
  MicroInfluencerEconomy: 'micro-influencer-economy',
  SocialListeningCrisis: 'social-listening-crisis',
  EthicalMarketingPurpose: 'ethical-marketing-purpose',
  CrossPlatformStrategy: 'cross-platform-strategy',
  DataDrivenAnalytics: 'data-driven-analytics',

  // 2025 Academic Specialized Modules
  DataScienceAnalytics: 'data-science-analytics',
  EnvironmentalScienceClimate: 'environmental-science-climate',

  // 2025+ Trending Experimental Modules
  MetaverseVREducation: 'metaverse-vr-education',
  SpaceTechnology: 'space-technology',
  DigitalArtsCreativeTech: 'digital-arts-creative-tech',
};
export const moduleNavigation: ModuleNavigation[] = [
  // Core Modules (outside /learning/ folder)
  {
    id: K2Module.City,
    title: 'Địa Lý Việt Nam',
    description:
      'Khám phá 34 tỉnh thành Việt Nam qua bản đồ tương tác, tìm hiểu văn hóa, lịch sử và địa lý của từng vùng miền',
    category: 'foundation',
    icon: '🗺️',
    color: 'from-emerald-500 to-teal-500',
    totalDuration: 'Không giới hạn',
    difficulty: 'Tất cả mức độ',
    href: '/city',
    features: [
      'Interactive Map',
      'Province Search',
      'Historical Data',
      'Cultural Information',
    ],
    tags: ['geography', 'vietnam', 'interactive', 'culture'],
    prerequisites: [],
    lessons: [],
    coreModule: true,
  },
  {
    id: K2Module.AI,
    title: 'AI Của Tôi',
    subtitle: 'Hướng dẫn AI thực hành',
    description:
      'Hướng dẫn thực hành sử dụng AI trong công việc, học tập và cuộc sống hàng ngày với các AI tools phổ biến',
    category: 'foundation',
    icon: '🤖',
    color: 'from-blue-500 to-indigo-500',
    totalDuration: 'Không giới hạn',
    difficulty: 'Tất cả mức độ',
    href: '/ai',
    features: [
      'Featured AI Apps',
      'Practical Guides',
      'Step-by-step Tutorials',
      'Real-world Applications',
    ],
    tags: ['ai', 'practical', 'work', 'creativity'],
    prerequisites: [],
    lessons: [],
    coreModule: true,
  },

  // AI Learning Modules (under /learning/ai/)
  {
    id: 'ai',
    title: 'AI Của Tôi - Learning',
    subtitle: 'Khóa học AI thực tế',
    description:
      'Khóa học AI thực tế với 6 chuyên đề: Văn phòng, Sáng tạo, Giáo dục, Kinh doanh, Cuộc sống và Lập trình',
    category: 'artificial-intelligence',
    icon: '🤖',
    color: 'from-purple-600 to-pink-600',
    totalDuration: '25-30 giờ',
    difficulty: 'Trung bình',
    href: '/learning/ai',
    features: [
      'Hướng dẫn 6 lĩnh vực AI ứng dụng',
      'Thực hành với các tool AI hàng đầu',
      'Prompt engineering chuyên sâu',
      'Ứng dụng thực tế trong công việc',
    ],
    tags: ['ai', 'chatgpt', 'midjourney', 'practical', 'productivity'],
    prerequisites: [
      'Sử dụng máy tính và internet cơ bản',
      'Tiếng Anh đọc hiểu (để sử dụng AI tools)',
      'Tư duy sáng tạo và ham học hỏi',
    ],
    lessons: [
      {
        id: 'office-work',
        title: 'AI cho Văn Phòng & Công Việc',
        duration: '4 giờ',
        difficulty: 'Cơ bản',
      },
      {
        id: 'creative-design',
        title: 'AI cho Sáng Tạo & Thiết Kế',
        duration: '5 giờ',
        difficulty: 'Trung bình',
      },
      {
        id: 'education-learning',
        title: 'AI cho Giáo Dục & Học Tập',
        duration: '3 giờ',
        difficulty: 'Cơ bản',
      },
      {
        id: 'business-marketing',
        title: 'AI cho Kinh Doanh & Marketing',
        duration: '6 giờ',
        difficulty: 'Nâng cao',
      },
      {
        id: 'daily-life',
        title: 'AI cho Cuộc Sống Hàng Ngày',
        duration: '2 giờ',
        difficulty: 'Cơ bản',
      },
      {
        id: 'programming-dev',
        title: 'AI cho Lập Trình & Phát Triển',
        duration: '5 giờ',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: 'office-work',
    title: 'AI cho Văn Phòng & Công Việc',
    subtitle: 'Tăng hiệu suất với AI',
    description:
      'Học cách sử dụng AI để tự động hóa công việc văn phòng, viết email chuyên nghiệp và quản lý thời gian hiệu quả',
    category: ['professional', 'trending'], // Multiple categories
    icon: '💼',
    color: 'from-blue-600 to-indigo-600',
    totalDuration: '4-6 giờ',
    difficulty: 'Cơ bản đến Trung bình',
    href: '/learning/ai/office-work',
    features: [
      'ChatGPT cho Email',
      'Excel thông minh',
      'Thuyết trình AI',
      'Quản lý thời gian',
    ],
    tags: ['office', 'productivity', 'email', 'automation'],
    prerequisites: ['Kỹ năng máy tính cơ bản', 'Hiểu biết về Microsoft Office'],
    lessons: [
      {
        id: 'email-automation',
        title: 'Tự động hóa Email với AI',
        duration: '45 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'excel-ai',
        title: 'Excel thông minh với AI',
        duration: '60 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'presentation-ai',
        title: 'Tạo bài thuyết trình với AI',
        duration: '50 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'time-management',
        title: 'Quản lý thời gian với AI',
        duration: '40 phút',
        difficulty: 'Cơ bản',
      },
    ],
  },
  {
    id: 'creative-design',
    title: 'AI cho Sáng Tạo & Thiết Kế',
    subtitle: 'Sáng tạo nội dung với AI',
    description:
      'Khám phá cách sử dụng Midjourney, DALL-E, Canva AI để tạo ra nội dung sáng tạo và thiết kế chuyên nghiệp',
    category: ['creative', 'trending'], // Multiple categories
    icon: '🎨',
    color: 'from-purple-600 to-pink-600',
    totalDuration: '5-7 giờ',
    difficulty: 'Cơ bản đến Nâng cao',
    href: '/learning/ai/creative-design',
    features: [
      'Midjourney mastery',
      'Canva AI Studio',
      'Content creation',
      'Visual design',
    ],
    tags: ['design', 'creativity', 'art', 'visual'],
    prerequisites: [
      'Hiểu biết cơ bản về design',
      'Sử dụng máy tính thành thạo',
    ],
    lessons: [
      {
        id: 'midjourney-basics',
        title: 'Midjourney cơ bản',
        duration: '60 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'advanced-prompting',
        title: 'Prompt engineering nâng cao',
        duration: '75 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'canva-ai',
        title: 'Canva AI Magic Studio',
        duration: '50 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'content-creation',
        title: 'Tạo nội dung với AI',
        duration: '45 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: 'education-learning',
    title: 'AI cho Giáo Dục & Học Tập',
    subtitle: 'Học tập thông minh với AI',
    description:
      'Sử dụng AI như một gia sư cá nhân, hỗ trợ nghiên cứu, học ngôn ngữ và tóm tắt tài liệu hiệu quả',
    category: ['professional', 'stem'], // Multiple categories
    icon: '📚',
    color: 'from-green-600 to-teal-600',
    totalDuration: '4-5 giờ',
    difficulty: 'Cơ bản đến Trung bình',
    href: '/learning/ai/education-learning',
    features: [
      'AI Tutor',
      'Research assistance',
      'Language learning',
      'Document summarization',
    ],
    tags: ['education', 'learning', 'research', 'study'],
    prerequisites: ['Kỹ năng học tập cơ bản'],
    lessons: [
      {
        id: 'ai-tutor',
        title: 'AI như gia sư cá nhân',
        duration: '50 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'research-ai',
        title: 'Nghiên cứu với AI',
        duration: '60 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'language-learning',
        title: 'Học ngôn ngữ với AI',
        duration: '45 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'document-summary',
        title: 'Tóm tắt tài liệu với AI',
        duration: '40 phút',
        difficulty: 'Cơ bản',
      },
    ],
  },
  {
    id: 'business-marketing',
    title: 'AI cho Kinh Doanh & Marketing',
    subtitle: 'Marketing thông minh với AI',
    description:
      'Ứng dụng AI trong marketing, phân tích khách hàng, tạo chatbot và tối ưu hóa SEO cho doanh nghiệp',
    category: ['professional', 'trending'], // Multiple categories
    icon: '📈',
    color: 'from-orange-600 to-red-600',
    totalDuration: '6-8 giờ',
    difficulty: 'Trung bình đến Nâng cao',
    href: '/learning/ai/business-marketing',
    features: [
      'Marketing automation',
      'Customer analytics',
      'Chatbot development',
      'SEO optimization',
    ],
    tags: ['marketing', 'business', 'analytics', 'automation'],
    prerequisites: ['Hiểu biết cơ bản về marketing', 'Kinh nghiệm kinh doanh'],
    lessons: [
      {
        id: 'marketing-automation',
        title: 'Tự động hóa Marketing',
        duration: '70 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'customer-analytics',
        title: 'Phân tích khách hàng với AI',
        duration: '80 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'chatbot-development',
        title: 'Phát triển Chatbot',
        duration: '60 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'seo-ai',
        title: 'SEO tối ưu với AI',
        duration: '50 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: 'daily-life',
    title: 'AI cho Đời Sống Hàng Ngày',
    subtitle: 'AI trong cuộc sống',
    description:
      'Khám phá cách AI có thể hỗ trợ cuộc sống hàng ngày từ quản lý tài chính, sức khỏe đến du lịch thông minh',
    category: ['professional', 'trending'], // Multiple categories
    icon: '🏠',
    color: 'from-emerald-600 to-cyan-600',
    totalDuration: '3-4 giờ',
    difficulty: 'Cơ bản',
    href: '/learning/ai/daily-life',
    features: [
      'Personal AI assistant',
      'Financial management',
      'Health & fitness',
      'Smart travel',
    ],
    tags: ['lifestyle', 'personal', 'health', 'finance'],
    prerequisites: ['Sử dụng smartphone/máy tính'],
    lessons: [
      {
        id: 'personal-assistant',
        title: 'Trợ lý AI cá nhân',
        duration: '45 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'financial-ai',
        title: 'Quản lý tài chính với AI',
        duration: '50 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'health-fitness',
        title: 'Sức khỏe & Fitness AI',
        duration: '40 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'travel-ai',
        title: 'Du lịch thông minh với AI',
        duration: '35 phút',
        difficulty: 'Cơ bản',
      },
    ],
  },
  {
    id: 'programming-dev',
    title: 'AI cho Lập Trình & Phát Triển',
    subtitle: 'Code thông minh với AI',
    description:
      'Tìm hiểu GitHub Copilot, AI code review và các công cụ AI hỗ trợ lập trình để tăng hiệu suất coding',
    category: ['programming', 'trending'], // Multiple categories
    icon: '💻',
    color: 'from-slate-600 to-blue-600',
    totalDuration: '7-9 giờ',
    difficulty: 'Trung bình đến Nâng cao',
    href: '/learning/ai/programming-dev',
    features: [
      'GitHub Copilot',
      'AI code review',
      'Automated testing',
      'Documentation generation',
    ],
    tags: ['programming', 'coding', 'development', 'automation'],
    prerequisites: ['Kiến thức lập trình cơ bản', 'Sử dụng Git/GitHub'],
    lessons: [
      {
        id: 'github-copilot',
        title: 'GitHub Copilot mastery',
        duration: '90 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'ai-code-review',
        title: 'AI Code Review',
        duration: '70 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'automated-testing',
        title: 'Testing tự động với AI',
        duration: '60 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'documentation-ai',
        title: 'Tạo tài liệu với AI',
        duration: '50 phút',
        difficulty: 'Trung bình',
      },
    ],
  },

  // Vietnamese Market Modules
  {
    id: K2Module.VietnameseBusiness,
    title: 'Vietnamese Business & Entrepreneurship',
    subtitle: 'Kinh doanh và khởi nghiệp Việt Nam',
    description:
      'Navigate startup ecosystem, pháp luật doanh nghiệp và phát triển business trong thị trường Việt Nam',
    category: 'vietnamese',
    icon: '🏢',
    color: 'from-emerald-600 to-green-600',
    totalDuration: '12-15 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '12-15 giờ',
    href: '/learning/vietnamese-business',
    features: [
      'Startup Ecosystem',
      'Legal Compliance',
      'FinTech Development',
      'E-commerce Strategy',
    ],
    tags: ['business', 'startup', 'vietnam', 'fintech'],
    prerequisites: [
      'Basic business understanding',
      'Vietnamese market knowledge',
      'Technology literacy',
    ],
    lessons: [
      {
        id: 'vietnamese-startup-ecosystem',
        title: 'Vietnamese Startup Ecosystem & Legal Framework',
        duration: '140 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'vietnamese-fintech-solutions',
        title: 'Vietnamese FinTech & Payment Solutions',
        duration: '140 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'vietnamese-ecommerce-platforms',
        title: 'Vietnamese E-commerce & Digital Marketplace Development',
        duration: '140 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.VietnameseCulture,
    title: 'Vietnamese Culture & Heritage',
    subtitle: 'Văn hóa và di sản Việt Nam',
    description:
      'Số hóa và bảo tồn di sản văn hóa Việt Nam, phát triển tourism technology',
    category: 'vietnamese',
    icon: '🏛️',
    color: 'from-yellow-600 to-orange-600',
    totalDuration: '8-10 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '8-10 giờ',
    href: '/learning/vietnamese-culture',
    features: [
      'Digital Heritage',
      'VR Museums',
      'Tourism Tech',
      'Cultural Documentation',
    ],
    tags: ['culture', 'heritage', 'tourism', 'vietnam'],
    prerequisites: [
      'Vietnamese cultural knowledge',
      'Digital media understanding',
      'Basic web development',
    ],
    lessons: [
      {
        id: 'digital-heritage-preservation',
        title: 'Digital Heritage Preservation & Cultural Documentation',
        duration: '150 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'tourism-technology',
        title: 'Tourism Technology & Cultural Experience Platforms',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.VietnameseHealthcare,
    title: 'Vietnamese Healthcare Technology',
    subtitle: 'Công nghệ y tế Việt Nam',
    description:
      'Phát triển digital health systems, AI medical imaging cho healthcare Việt Nam',
    category: 'vietnamese',
    icon: '🏥',
    color: 'from-cyan-600 to-teal-600',
    totalDuration: '10-12 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '10-12 giờ',
    href: '/learning/vietnamese-healthcare',
    features: [
      'Digital Health',
      'AI Medical Imaging',
      'Telemedicine',
      'EHR Systems',
    ],
    tags: ['healthcare', 'medical', 'ai', 'vietnam'],
    prerequisites: [
      'Healthcare system understanding',
      'Medical terminology knowledge',
      'Technology development experience',
    ],
    lessons: [
      {
        id: 'digital-health-vietnam',
        title: 'Digital Health Infrastructure cho Việt Nam',
        duration: '160 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'ai-medical-imaging',
        title: 'AI Medical Imaging cho Vietnamese Healthcare',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.VietnameseLanguageTech,
    title: 'Vietnamese Language Technology',
    subtitle: 'Công nghệ ngôn ngữ Việt',
    description:
      'Phát triển NLP, chatbot AI và voice technology cho tiếng Việt',
    category: 'vietnamese',
    icon: '💬',
    color: 'from-violet-600 to-purple-600',
    totalDuration: '12-15 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '12-15 giờ',
    href: '/learning/vietnamese-language-tech',
    features: [
      'Vietnamese NLP',
      'AI Chatbot',
      'Voice Recognition',
      'Speech Synthesis',
    ],
    tags: ['nlp', 'ai', 'chatbot', 'voice', 'vietnamese'],
    prerequisites: [
      'Programming fundamentals',
      'Understanding of Vietnamese language',
      'Basic machine learning concepts',
    ],
    lessons: [
      {
        id: 'vietnamese-nlp-fundamentals',
        title: 'Vietnamese NLP Fundamentals & PhoBERT Integration',
        duration: '150 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'vietnamese-chatbot-development',
        title: 'Vietnamese Chatbot Development & Conversational AI',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'vietnamese-voice-ai-systems',
        title: 'Vietnamese Voice AI & Speech Recognition Systems',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },

  // Professional Skills Modules
  {
    id: K2Module.DigitalMarketing,
    title: 'Digital Marketing & Creator Economy',
    subtitle: 'Marketing và Creator Economy',
    description:
      'Học Digital Marketing toàn diện, từ Social Media đến Content Creation',
    category: 'professional',
    icon: '📱',
    color: 'from-pink-600 to-purple-600',
    totalDuration: '12-15 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '12-15 giờ',
    href: '/learning/digital-marketing',
    features: [
      'Social Media Marketing',
      'Content Strategy',
      'Analytics & ROI',
      'Creator Economy',
    ],
    tags: ['marketing', 'social media', 'content', 'creator'],
    prerequisites: [
      'Basic computer skills',
      'Understanding của internet và web browsers',
    ],
    lessons: [
      {
        id: 'seo-fundamentals',
        title: 'SEO Fundamentals & Keyword Research',
        duration: '120 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'content-marketing-strategy',
        title: 'Content Marketing & Strategy Development',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'social-media-marketing',
        title: 'Social Media Marketing & Influencer Partnerships',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'digital-advertising-analytics',
        title: 'Digital Advertising & Analytics Mastery',
        duration: '120 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.FinancialLiteracy,
    title: 'Financial Literacy & FinTech',
    subtitle: 'Quản lý tài chính thông minh',
    description: 'Master personal finance, investment và FinTech tools',
    category: 'professional',
    icon: '💰',
    color: 'from-amber-600 to-orange-600',
    totalDuration: '10-12 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '10-12 giờ',
    href: '/learning/financial-literacy',
    features: [
      'Personal Finance',
      'Investment Strategy',
      'FinTech Tools',
      'Cryptocurrency',
    ],
    tags: ['finance', 'investment', 'fintech', 'money'],
    prerequisites: [
      'Basic math skills',
      'Understanding của money và banking',
      'Computer literacy',
    ],
    lessons: [
      {
        id: 'personal-finance-budgeting',
        title: 'Personal Finance & Smart Budgeting Strategies',
        duration: '150 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'investment-cryptocurrency-fintech',
        title: 'Investment Strategies & Cryptocurrency FinTech',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.GreenTechnology,
    title: 'Green Technology & Sustainability',
    subtitle: 'Công nghệ xanh',
    description:
      'Khám phá renewable energy, smart cities và sustainable solutions',
    category: 'professional',
    icon: '🌱',
    color: 'from-green-600 to-emerald-600',
    totalDuration: '10-12 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '10-12 giờ',
    href: '/learning/green-technology',
    features: [
      'Renewable Energy',
      'Smart Cities',
      'Sustainability',
      'Environmental Tech',
    ],
    tags: ['green', 'renewable', 'sustainability', 'environment'],
    prerequisites: [
      'Basic science knowledge',
      'Environmental awareness',
      'Problem-solving mindset',
    ],
    lessons: [
      {
        id: 'renewable-energy-systems',
        title: 'Renewable Energy Systems & Solar Technology',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'sustainable-engineering-design',
        title: 'Sustainable Engineering & Green Building Design',
        duration: '120 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'environmental-monitoring-iot',
        title: 'Environmental Monitoring & IoT Solutions',
        duration: '120 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },

  // Creative & Technology Modules
  {
    id: K2Module.GameDevelopment,
    title: 'Game Development & Interactive Media',
    subtitle: 'Phát triển game',
    description:
      'Tạo game với Unity/Unreal, game design và interactive storytelling',
    category: 'creative',
    icon: '🎮',
    color: 'from-purple-600 to-pink-600',
    totalDuration: '15-18 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '15-18 giờ',
    href: '/learning/game-development',
    features: [
      'Unity & Unreal',
      'Game Design',
      '2D/3D Animation',
      'Publishing',
    ],
    tags: ['game', 'unity', 'unreal', 'design', 'animation'],
    prerequisites: [
      'Programming basics',
      'Creative thinking',
      'Problem-solving skills',
      'Design fundamentals',
    ],
    lessons: [
      {
        id: 'game-design-unity-basics',
        title: 'Game Design Fundamentals & Unity Engine Basics',
        duration: '180 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'advanced-game-development',
        title: 'Advanced Game Development & Publishing Strategies',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.AIArtCreativeTech,
    title: 'AI Art & Creative Technology',
    subtitle: 'AI sáng tạo',
    description: 'Master AI tools như Midjourney, DALL-E, Stable Diffusion',
    category: 'creative',
    icon: '🎨',
    color: 'from-pink-600 to-rose-600',
    totalDuration: '8-10 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '8-10 giờ',
    href: '/learning/ai-art-creative-tech',
    features: [
      'Midjourney Pro',
      'Video Generation',
      'Creative Workflows',
      'Commercial Use',
    ],
    tags: ['ai', 'art', 'midjourney', 'creative', 'design'],
    prerequisites: [
      'Basic computer skills',
      'Creative interest',
      'Understanding của digital media',
    ],
    lessons: [
      {
        id: 'ai-image-generation-fundamentals',
        title: 'AI Image Generation Fundamentals & Prompt Engineering',
        duration: '135 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'creative-video-ai-production',
        title: 'Creative Video AI Production & Advanced Workflows',
        duration: '135 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },

  // Security & Science Modules
  {
    id: K2Module.Cybersecurity,
    title: 'Cybersecurity & Ethical Hacking',
    subtitle: 'An ninh mạng',
    description:
      'Học penetration testing, incident response và defense strategies',
    category: 'security',
    icon: '🔒',
    color: 'from-red-600 to-orange-600',
    totalDuration: '20-25 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '20-25 giờ',
    href: '/learning/cybersecurity',
    features: [
      'Penetration Testing',
      'SIEM Systems',
      'Incident Response',
      'Threat Hunting',
    ],
    tags: ['security', 'hacking', 'penetration', 'network'],
    prerequisites: [
      'Network fundamentals',
      'Linux command line',
      'Understanding của security concepts',
    ],
    lessons: [
      {
        id: 'ethical-hacking-fundamentals',
        title: 'Ethical Hacking & Penetration Testing Fundamentals',
        duration: '180 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'cybersecurity-defense-strategies',
        title: 'Advanced Cybersecurity Defense & Incident Response',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.Biotechnology,
    title: 'Biotechnology & Life Sciences',
    subtitle: 'Công nghệ sinh học',
    description:
      'Khám phá genetic engineering, drug discovery và medical biotechnology',
    category: 'science',
    icon: '🧬',
    color: 'from-emerald-600 to-teal-600',
    totalDuration: '18-22 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '18-22 giờ',
    href: '/learning/biotechnology',
    features: [
      'CRISPR Technology',
      'Drug Discovery',
      'Medical Devices',
      'Bioethics',
    ],
    tags: ['biotech', 'genetics', 'medical', 'crispr'],
    prerequisites: [
      'Biology fundamentals',
      'Chemistry basics',
      'Scientific method understanding',
    ],
    lessons: [
      {
        id: 'biotech-fundamentals-genetic-engineering',
        title: 'Biotechnology Fundamentals & Genetic Engineering',
        duration: '150 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'medical-biotechnology-drug-discovery',
        title: 'Medical Biotechnology & Drug Discovery Pipeline',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.MCP,
    title: 'MCP - Model Context Protocol',
    subtitle: 'Tích hợp AI Tools với Enterprise Systems',
    description:
      'Học cách sử dụng Model Context Protocol để kết nối AI assistants với Atlassian Jira, Confluence và office productivity tools',
    category: 'professional',
    icon: '🔗',
    color: 'from-indigo-600 to-purple-600',
    totalDuration: '12-15 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '12-15 giờ',
    href: '/learning/mcp',
    features: [
      'Atlassian Integration',
      'VS Code Setup',
      'Office Automation',
      'Enterprise Security',
    ],
    tags: ['mcp', 'atlassian', 'jira', 'automation', 'ai-integration'],
    prerequisites: [
      'Kinh nghiệm với Jira/Confluence',
      'Basic programming knowledge',
      'Understanding của API và OAuth',
      'Familiarity với AI tools',
    ],
    lessons: [
      {
        id: 'mcp-fundamentals',
        title: 'MCP Fundamentals & Architecture',
        duration: '120 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'jira-integration-development',
        title: 'Jira Integration for Developers',
        duration: '180 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'office-productivity-integration',
        title: 'MCP for Office Productivity',
        duration: '150 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'advanced-mcp-automation',
        title: 'Advanced MCP Automation & Custom Solutions',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'mcp-troubleshooting-optimization',
        title: 'MCP Troubleshooting & Performance Optimization',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: K2Module.AIApplications,
    title: 'AI Applications',
    subtitle: 'Ứng dụng AI thực tế cho cuộc sống',
    description:
      'Khám phá cách áp dụng AI vào các tình huống thực tế: du học, business automation, content creation, healthcare và financial planning',
    category: 'professional',
    icon: '🤖',
    color: 'from-purple-600 to-blue-600',
    totalDuration: '15-18 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '15-18 giờ',
    href: '/learning/ai-applications',
    features: [
      'Study Abroad AI Coaching',
      'Business Automation',
      'Content Monetization',
      'Healthcare Optimization',
    ],
    tags: ['ai-applications', 'practical-ai', 'automation', 'real-world'],
    prerequisites: [
      'Basic AI tools familiarity',
      'Understanding of personal goals',
      'Access to AI platforms',
      'Willingness to experiment',
    ],
    lessons: [
      {
        id: 'ai-for-study-abroad',
        title: 'AI cho Du học - Chuẩn bị hồ sơ và IELTS',
        duration: '180 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'ai-business-automation',
        title: 'AI Business Automation - Tự động hóa quy trình kinh doanh',
        duration: '200 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'ai-content-creation-monetization',
        title: 'AI Content Creation & Monetization',
        duration: '220 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'ai-healthcare-wellness',
        title: 'AI for Healthcare & Personal Wellness',
        duration: '160 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'ai-financial-planning-investment',
        title: 'AI Financial Planning & Investment',
        duration: '190 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },

  // High-Demand University Modules (Tier 1 - Based on 2025 Market Analysis)
  {
    id: K2Module.SemiconductorTechnology,
    title: 'Semiconductor Technology',
    subtitle: 'Công nghệ bán dẫn tiên tiến',
    description:
      "Master semiconductor physics, IC design và fabrication technology. Essential cho Vietnam's growing electronics manufacturing và FDI from Samsung, Intel.",
    category: 'professional',
    icon: '💎',
    color: 'from-indigo-600 to-purple-600',
    totalDuration: '18-22 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '18-22 giờ',
    href: '/learning/semiconductor-technology',
    features: [
      'Silicon Physics & Doping',
      'IC Design & VLSI',
      'Fabrication Process',
      'Advanced Nodes (3nm, 5nm)',
      'Industry Applications',
    ],
    tags: [
      'semiconductor',
      'ic design',
      'vlsi',
      'electronics',
      'manufacturing',
    ],
    prerequisites: [
      'Physics fundamentals: quantum mechanics, solid state',
      'Mathematics: calculus, linear algebra, statistics',
      'Electrical engineering basics',
      'Chemistry: materials science basics',
    ],
    lessons: [
      {
        id: 'semiconductor-fundamentals',
        title: 'Semiconductor Physics & Materials Fundamentals',
        duration: '180 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'ic-design-vlsi',
        title: 'Integrated Circuit Design & VLSI Technology',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'fabrication-cleanroom',
        title: 'Fabrication Process & Cleanroom Technology',
        duration: '190 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'advanced-nodes-ai-chips',
        title: 'Advanced Process Nodes & AI Chip Architecture',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'industry-career-vietnam',
        title: 'Industry Applications & Career Opportunities in Vietnam',
        duration: '150 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: K2Module.RenewableEnergy,
    title: 'Renewable Energy Systems',
    subtitle: 'Hệ thống năng lượng tái tạo',
    description:
      'Comprehensive renewable energy education từ solar photovoltaics đến wind turbines và energy storage. Supporting Vietnam Net Zero 2050 commitment.',
    category: 'professional',
    icon: '⚡',
    color: 'from-green-600 to-emerald-600',
    totalDuration: '12-15 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '12-15 giờ',
    href: '/learning/renewable-energy',
    features: [
      'Solar PV Systems',
      'Wind Power Technology',
      'Energy Storage & Smart Grid',
      'Hydroelectric Systems',
      'Economics & Policy',
    ],
    tags: ['renewable energy', 'solar', 'wind', 'energy storage', 'smart grid'],
    prerequisites: [
      'Basic electrical engineering',
      'Physics principles: mechanics, thermodynamics',
      'Mathematics: algebra, basic calculus',
      'Environmental awareness',
    ],
    lessons: [
      {
        id: 'solar-energy-fundamentals',
        title: 'Solar Energy Systems & Photovoltaic Technology',
        duration: '180 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'wind-power-technology',
        title: 'Wind Power Systems & Turbine Technology',
        duration: '200 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'energy-storage-systems',
        title: 'Energy Storage & Smart Grid Integration',
        duration: '160 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'hydroelectric-systems',
        title: 'Hydroelectric Power & Small-Scale Hydro',
        duration: '170 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'renewable-economics-policy',
        title: 'Renewable Energy Economics & Policy in Vietnam',
        duration: '140 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: K2Module.AdvancedAI,
    title: 'Advanced AI & Machine Learning',
    subtitle: 'Trí tuệ nhân tạo nâng cao',
    description:
      'Master cutting-edge AI technologies: Deep Learning, Computer Vision, NLP, Reinforcement Learning với focus trên Vietnamese market applications.',
    category: ['professional', 'programming'],
    icon: '🧠',
    color: 'from-purple-600 to-indigo-600',
    totalDuration: '18-22 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '18-22 giờ',
    href: '/learning/advanced-ai',
    features: [
      'Deep Learning & Neural Networks',
      'Computer Vision Applications',
      'Vietnamese NLP & Language Models',
      'Reinforcement Learning Systems',
      'AI Ethics & Responsible Deployment',
    ],
    tags: [
      'ai',
      'deep learning',
      'computer vision',
      'nlp',
      'reinforcement learning',
    ],
    prerequisites: [
      'Strong Python programming skills',
      'Linear algebra và calculus knowledge',
      'Machine learning fundamentals',
      'Cloud platforms experience (AWS/GCP)',
    ],
    lessons: [
      {
        id: 'deep-learning-foundations',
        title: 'Deep Learning & Neural Network Architectures',
        duration: '240 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'computer-vision-applications',
        title: 'Computer Vision & Image Processing Applications',
        duration: '220 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'nlp-language-models',
        title: 'Natural Language Processing & Large Language Models',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'reinforcement-learning-systems',
        title: 'Reinforcement Learning & Autonomous Systems',
        duration: '190 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'ai-ethics-deployment',
        title: 'AI Ethics, Bias & Production Deployment',
        duration: '170 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },

  // 2025 High-Demand University Modules (Tier 2 - Triển khai Q2 2025)
  {
    id: K2Module.ElectricVehicleTech,
    title: 'Electric Vehicle Technology',
    subtitle: 'Công nghệ xe điện tiên tiến',
    description:
      'Comprehensive EV technology education với focus trên VinFast ecosystem. Cover powertrain systems, autonomous driving, charging infrastructure và manufacturing quality control.',
    category: 'professional',
    icon: '⚡',
    color: 'from-yellow-600 to-amber-600',
    totalDuration: '15-18 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '15-18 giờ',
    href: '/learning/electric-vehicle-tech',
    features: [
      'EV Powertrain Design',
      'Autonomous Driving Systems',
      'Charging Infrastructure',
      'Manufacturing & Quality Control',
    ],
    tags: [
      'electric vehicle',
      'ev',
      'automotive',
      'vinfast',
      'battery technology',
    ],
    prerequisites: [
      'Electrical engineering fundamentals',
      'Automotive systems knowledge',
      'Battery technology basics',
      'Control systems understanding',
    ],
    lessons: [
      {
        id: 'ev-powertrain-battery-systems',
        title: 'EV Powertrain & Battery Management Systems',
        duration: '220 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'autonomous-driving-vietnamese-roads',
        title: 'Autonomous Driving Technology for Vietnamese Roads',
        duration: '240 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'ev-charging-infrastructure-v2g',
        title: 'EV Charging Infrastructure & Vehicle-to-Grid Technology',
        duration: '200 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'ev-manufacturing-quality-control',
        title: 'EV Manufacturing & Quality Control Systems',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.BlockchainDeFi,
    title: 'Blockchain & DeFi Development',
    subtitle: 'Blockchain và tài chính phi tập trung',
    description:
      'Master blockchain technology từ fundamentals đến DeFi applications. Cover smart contracts, cryptocurrency, NFT và regulatory compliance cho Vietnamese fintech market.',
    category: 'professional',
    icon: '⛓️',
    color: 'from-orange-600 to-yellow-600',
    totalDuration: '18-22 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '18-22 giờ',
    href: '/learning/blockchain-defi',
    features: [
      'Blockchain Fundamentals',
      'Smart Contract Development',
      'DeFi Protocol Design',
      'NFT & Metaverse Applications',
      'Regulatory Compliance',
    ],
    tags: [
      'blockchain',
      'defi',
      'smart contracts',
      'cryptocurrency',
      'nft',
      'fintech',
    ],
    prerequisites: [
      'Programming experience (Solidity, JavaScript)',
      'Cryptography basics',
      'Financial technology understanding',
      'Web3 development concepts',
    ],
    lessons: [
      {
        id: 'blockchain-fundamentals-cryptocurrency',
        title: 'Blockchain Fundamentals & Cryptocurrency Technology',
        duration: '200 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'smart-contracts-ethereum-development',
        title: 'Smart Contracts & Ethereum Development',
        duration: '240 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'defi-protocols-yield-farming',
        title: 'DeFi Protocols & Yield Farming Strategies',
        duration: '220 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'nft-metaverse-applications',
        title: 'NFT Development & Metaverse Applications',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'blockchain-regulatory-compliance',
        title: 'Blockchain Regulatory Compliance & Vietnamese Fintech',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.BiomedicalEngineering,
    title: 'Biomedical Engineering & Medical Devices',
    subtitle: 'Kỹ thuật y sinh & thiết bị y tế',
    description:
      'Advanced biomedical engineering với focus trên medical device development, biosignal processing, regenerative medicine và surgical robotics cho Vietnamese healthcare.',
    category: 'professional',
    icon: '🫀',
    color: 'from-red-600 to-pink-600',
    totalDuration: '16-20 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '16-20 giờ',
    href: '/learning/biomedical-engineering',
    features: [
      'Medical Device Design',
      'Biosignal Processing',
      'Regenerative Medicine',
      'Surgical Robotics',
      'Healthcare Technology',
    ],
    tags: [
      'biomedical engineering',
      'medical devices',
      'healthcare',
      'biosignals',
      'surgical robotics',
    ],
    prerequisites: [
      'Engineering fundamentals',
      'Biology và anatomy knowledge',
      'Signal processing basics',
      'Medical device regulations understanding',
    ],
    lessons: [
      {
        id: 'medical-device-design-development',
        title: 'Medical Device Design & Development Process',
        duration: '240 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'biosignal-processing-analysis',
        title: 'Biosignal Processing & Medical Data Analysis',
        duration: '220 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'regenerative-medicine-tissue-engineering',
        title: 'Regenerative Medicine & Tissue Engineering',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'surgical-robotics-automation',
        title: 'Surgical Robotics & Medical Automation Systems',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },

  // 2025 High-Demand University Modules (Tier 3 - Triển khai Q3-Q4 2025)
  {
    id: K2Module.EnvironmentalDataScience,
    title: 'Environmental Data Science',
    subtitle: 'Khoa học dữ liệu môi trường',
    description:
      'Apply data science cho environmental challenges trong Vietnamese context. Cover climate data analysis, pollution monitoring, remote sensing và environmental modeling.',
    category: 'professional',
    icon: '🌍',
    color: 'from-green-600 to-emerald-600',
    totalDuration: '14-16 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '14-16 giờ',
    href: '/learning/environmental-data-science',
    features: [
      'Climate Data Analysis',
      'Environmental Monitoring',
      'Remote Sensing & GIS',
      'Environmental Machine Learning',
    ],
    tags: [
      'environmental science',
      'data science',
      'climate',
      'remote sensing',
      'gis',
    ],
    prerequisites: [
      'Data science fundamentals',
      'Python programming',
      'Statistics và machine learning',
      'Environmental science basics',
    ],
    lessons: [
      {
        id: 'climate-data-analysis-modeling',
        title: 'Climate Data Analysis & Environmental Modeling',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'air-water-quality-monitoring',
        title: 'Air & Water Quality Monitoring Systems',
        duration: '220 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'satellite-remote-sensing-gis',
        title: 'Satellite Remote Sensing & GIS Applications',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'environmental-machine-learning',
        title: 'Machine Learning for Environmental Prediction',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.FoodTechnology,
    title: 'Food Technology & Innovation',
    subtitle: 'Công nghệ thực phẩm và đổi mới',
    description:
      'Advanced food technology với focus trên Vietnamese food industry modernization. Cover food safety, fermentation technology, molecular gastronomy và sustainable food production.',
    category: 'professional',
    icon: '🍜',
    color: 'from-amber-600 to-orange-600',
    totalDuration: '12-15 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '12-15 giờ',
    href: '/learning/food-technology',
    features: [
      'Food Safety & Quality Control',
      'Fermentation Technology',
      'Molecular Gastronomy',
      'Sustainable Food Production',
    ],
    tags: [
      'food technology',
      'food safety',
      'fermentation',
      'molecular gastronomy',
      'sustainability',
    ],
    prerequisites: [
      'Chemistry fundamentals',
      'Microbiology basics',
      'Food science knowledge',
      'Quality control understanding',
    ],
    lessons: [
      {
        id: 'food-safety-quality-control',
        title: 'Food Safety & Quality Control Systems',
        duration: '180 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'fermentation-technology-vietnamese-foods',
        title: 'Fermentation Technology & Traditional Vietnamese Foods',
        duration: '200 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'molecular-gastronomy-food-innovation',
        title: 'Molecular Gastronomy & Food Innovation',
        duration: '160 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'sustainable-food-production',
        title: 'Sustainable Food Production & Supply Chain',
        duration: '180 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: K2Module.AerospaceEngineering,
    title: 'Aerospace Engineering & Avionics',
    subtitle: 'Kỹ thuật hàng không vũ trụ',
    description:
      'Comprehensive aerospace engineering education với focus trên Vietnamese aviation industry development. Cover aircraft design, satellite systems, space missions và avionics.',
    category: 'professional',
    icon: '✈️',
    color: 'from-sky-600 to-blue-600',
    totalDuration: '16-20 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '16-20 giờ',
    href: '/learning/aerospace-engineering',
    features: [
      'Aircraft Design & Aerodynamics',
      'Satellite Technology',
      'Space Mission Planning',
      'Avionics & Flight Control',
    ],
    tags: [
      'aerospace engineering',
      'aviation',
      'satellite',
      'space',
      'avionics',
    ],
    prerequisites: [
      'Engineering fundamentals',
      'Physics và mathematics',
      'Fluid dynamics understanding',
      'Control systems knowledge',
    ],
    lessons: [
      {
        id: 'aircraft-design-aerodynamics',
        title: 'Aircraft Design & Aerodynamics Engineering',
        duration: '240 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'satellite-technology-communication',
        title: 'Satellite Technology & Communication Systems',
        duration: '220 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'space-mission-planning-systems',
        title: 'Space Mission Planning & Systems Engineering',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'avionics-flight-control-systems',
        title: 'Avionics & Flight Control Systems',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.Nanotechnology,
    title: 'Công Nghệ Nano & Vật Liệu Tiên Tiến',
    subtitle: 'Nanotechnology và advanced materials',
    description:
      'Khám phá thế giới công nghệ nano với các ứng dụng tiên tiến trong y học, điện tử, môi trường và năng lượng. Học cách tổng hợp vật liệu nano, phát triển thiết bị quantum và tạo ra các giải pháp bền vững.',
    category: 'professional',
    icon: '⚛️',
    color: 'from-purple-600 to-violet-600',
    totalDuration: '18-22 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '18-22 giờ',
    href: '/learning/nanotechnology',
    features: [
      'Nanomaterials Synthesis',
      'Nanoelectronics & Quantum Devices',
      'Biomedical Nanotechnology',
      'Environmental Applications',
    ],
    tags: [
      'nanotechnology',
      'nanomaterials',
      'quantum devices',
      'nanoelectronics',
      'biomedical',
    ],
    prerequisites: [
      'Chemistry và physics fundamentals',
      'Materials science knowledge',
      'Quantum mechanics basics',
      'Laboratory safety protocols',
    ],
    lessons: [
      {
        id: 'nanomaterials-synthesis-characterization',
        title: 'Nanomaterials Synthesis & Characterization',
        duration: '195 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'nanoelectronics-quantum-devices',
        title: 'Nanoelectronics & Quantum Devices',
        duration: '210 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'biomedical-nanotechnology',
        title: 'Biomedical Nanotechnology & Drug Delivery',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'environmental-nanotechnology',
        title: 'Environmental Nanotechnology & Sustainable Applications',
        duration: '165 phút',
        difficulty: 'Trung bình',
      },
    ],
  },

  // Programming Modules
  {
    id: K2Module.Python,
    title: 'Python Programming',
    subtitle: 'Ngôn ngữ AI & Data',
    description:
      'Từ cơ bản đến nâng cao, làm chủ Python cho AI và data science',
    category: ['programming', 'stem'], // Multiple categories - programming and STEM
    icon: '🐍',
    color: 'from-blue-600 to-cyan-600',
    totalDuration: '15-20 giờ',
    difficulty: 'Cơ bản đến Nâng cao',
    level: 'Trung bình',
    duration: '15-20 giờ',
    href: '/learning/python',
    features: ['Syntax cơ bản', 'OOP', 'Data handling', 'AI libraries'],
    tags: ['python', 'programming', 'ai', 'data science'],
    prerequisites: [
      'Basic computer skills',
      'Logical thinking',
      'Problem-solving mindset',
    ],
    lessons: [
      {
        id: 'python-introduction',
        title: 'Giới thiệu Python',
        duration: '60 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'python-variables-operations',
        title: 'Biến và Phép tính',
        duration: '90 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'python-control-structures',
        title: 'Cấu trúc điều khiển',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'python-functions-modules',
        title: 'Functions và Modules',
        duration: '90 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'python-data-structures',
        title: 'Cấu trúc dữ liệu',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'python-file-exception-handling',
        title: 'File và Exception Handling',
        duration: '90 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'python-oop',
        title: 'Object-Oriented Programming',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'algorithms-data-structures',
        title: 'Thuật toán & Cấu trúc dữ liệu',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.Scratch,
    title: 'Scratch Programming',
    subtitle: 'Lập trình trực quan',
    description: 'Học lập trình với Scratch, tạo game và animation',
    category: ['programming', 'stem', 'creative'], // Multiple categories
    icon: '🎨',
    color: 'from-orange-600 to-red-600',
    totalDuration: '6-8 giờ',
    difficulty: 'Cơ bản',
    level: 'Cơ bản',
    duration: '6-8 giờ',
    href: '/learning/scratch',
    features: ['Drag & Drop', 'Game Creation', 'Animation', 'Logic Thinking'],
    tags: ['scratch', 'visual programming', 'kids', 'beginner'],
    prerequisites: [
      'Basic computer skills',
      'Creative thinking',
      'Problem-solving interest',
    ],
    lessons: [
      {
        id: 'scratch-introduction',
        title: 'Scratch Introduction & Visual Programming Concepts',
        duration: '60 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'animation-storytelling',
        title: 'Animation & Interactive Storytelling',
        duration: '90 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'game-development-scratch',
        title: 'Game Development with Scratch',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'advanced-scratch-projects',
        title: 'Advanced Scratch Projects & Sharing',
        duration: '30 phút',
        difficulty: 'Trung bình',
      },
    ],
  },

  // STEM & Hardware Modules
  {
    id: K2Module.Arduino,
    title: 'Arduino & IoT Programming',
    subtitle: 'Lập trình phần cứng',
    description: 'Xây dựng hệ thống IoT thông minh với Arduino',
    category: 'stem',
    icon: '⚡',
    color: 'from-cyan-600 to-blue-600',
    totalDuration: '12-15 giờ',
    difficulty: 'Trung bình',
    level: 'Nâng cao',
    duration: '12-15 giờ',
    href: '/learning/arduino',
    features: ['Arduino Programming', 'IoT Projects', 'Sensors', 'Smart Home'],
    tags: ['arduino', 'iot', 'hardware', 'sensors'],
    prerequisites: [
      'Basic electronics knowledge',
      'Programming fundamentals',
      'Problem-solving skills',
    ],
    lessons: [
      {
        id: 'arduino-setup',
        title: 'Arduino Setup & Development Environment',
        duration: '60 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'led-digital-outputs',
        title: 'LED Control & Digital Outputs',
        duration: '90 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'arduino-inputs',
        title: 'Arduino Inputs & Sensor Integration',
        duration: '90 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'arduino-sensors',
        title: 'Advanced Sensors & Data Processing',
        duration: '90 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'arduino-communication',
        title: 'Communication & Networking Protocols',
        duration: '90 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.Robotics,
    title: 'Robotics & Autonomous Systems',
    subtitle: 'Robot tự động',
    description: 'Thiết kế và lập trình robot từ cơ bản đến AI robotics',
    category: 'stem',
    icon: '🤖',
    color: 'from-purple-600 to-pink-600',
    totalDuration: '10-12 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '10-12 giờ',
    href: '/learning/robotics',
    features: [
      'Robot Design',
      'Motion Control',
      'AI Integration',
      'Autonomous Navigation',
    ],
    tags: ['robotics', 'ai', 'automation', 'control'],
    prerequisites: [
      'Programming fundamentals',
      'Basic electronics',
      'Mathematical thinking',
      'Problem-solving skills',
    ],
    lessons: [
      {
        id: 'robotics-fundamentals',
        title: 'Robotics Fundamentals & Components',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'robot-programming-control',
        title: 'Robot Programming & Motion Control',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'sensors-computer-vision',
        title: 'Sensors & Computer Vision in Robotics',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'autonomous-navigation-ai',
        title: 'Autonomous Navigation & AI Integration',
        duration: '120 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.STEM,
    title: 'STEM Education',
    subtitle: 'Khoa học ứng dụng',
    description: 'Thí nghiệm vật lý, toán học thực tế và engineering',
    category: 'stem',
    icon: '🔬',
    color: 'from-teal-600 to-green-600',
    totalDuration: '8-10 giờ',
    difficulty: 'Cơ bản đến Trung bình',
    level: 'Cơ bản',
    duration: '8-10 giờ',
    href: '/learning/stem',
    features: [
      'Physics Experiments',
      'Math Applications',
      'Engineering Design',
      'Science Projects',
    ],
    tags: ['stem', 'science', 'math', 'engineering'],
    prerequisites: [
      'Curiosity and interest in science',
      'Basic math skills',
      'Safety awareness',
    ],
    lessons: [
      {
        id: 'stem-introduction',
        title: 'STEM Introduction & Scientific Method',
        duration: '60 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'fun-physics-experiments',
        title: 'Fun Physics Experiments & Principles',
        duration: '120 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'coding-for-kids',
        title: 'Coding for Kids & Computational Thinking',
        duration: '90 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'engineering-challenges',
        title: 'Engineering Challenges & Design Thinking',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'math-in-real-life',
        title: 'Math in Real Life Applications',
        duration: '60 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'art-meets-science',
        title: 'Art Meets Science Creative Projects',
        duration: '60 phút',
        difficulty: 'Cơ bản',
      },
    ],
  },

  // 2025 Trend-Based Modules - High Priority
  {
    id: K2Module.ContentCreator,
    title: 'Content Creator Academy',
    subtitle: 'Thành công với Social Media',
    description:
      'Học từ A-Z cách trở thành content creator thành công trên TikTok, YouTube, Instagram. Từ xây dựng personal brand đến monetization.',
    category: 'trending',
    icon: '📱',
    color: 'from-pink-600 to-purple-600',
    totalDuration: '18-22 giờ',
    difficulty: 'Cơ bản đến Nâng cao',
    level: 'Trung bình',
    duration: '18-22 giờ',
    href: '/learning/content-creator',
    features: [
      'Personal Branding',
      'Video Production',
      'Live Streaming',
      'Monetization',
      'Analytics',
    ],
    tags: [
      'content creator',
      'social media',
      'youtube',
      'tiktok',
      'monetization',
    ],
    prerequisites: [
      'Smartphone với camera tốt',
      'Tư duy sáng tạo',
      'Khả năng storytelling',
      'Consistency mindset',
    ],
    lessons: [
      {
        id: 'social-media-personal-branding',
        title: 'Social Media Strategy & Personal Branding',
        duration: '180 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'video-production-editing-mastery',
        title: 'Video Production & Editing Mastery',
        duration: '240 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'livestreaming-community-building',
        title: 'Livestreaming & Community Building',
        duration: '200 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'monetization-strategies',
        title: 'Monetization Strategies (YouTube, TikTok, Facebook)',
        duration: '220 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'brand-partnerships-sponsorships',
        title: 'Brand Partnerships & Sponsorship Deals',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'content-calendar-consistency',
        title: 'Content Calendar & Consistency Systems',
        duration: '160 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'analytics-growth-optimization',
        title: 'Analytics & Growth Optimization',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'legal-business-content-creation',
        title: 'Legal & Business Aspects of Content Creation',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.TeenWellness,
    title: 'Teen Wellness & Mental Health',
    subtitle: 'Sức khỏe tinh thần tuổi teen',
    description:
      'Chương trình toàn diện về sức khỏe tinh thần cho teenagers. Học cách quản lý stress, anxiety, xây dựng mối quan hệ tích cực và phát triển emotional intelligence.',
    category: 'trending',
    icon: '🧘',
    color: 'from-green-600 to-teal-600',
    totalDuration: '12-15 giờ',
    difficulty: 'Cơ bản đến Nâng cao',
    level: 'Cơ bản',
    duration: '12-15 giờ',
    href: '/learning/teen-wellness',
    features: [
      'Stress & Anxiety Management',
      'Mindfulness & Meditation',
      'Digital Wellness',
      'Healthy Relationships',
      'Crisis Support',
    ],
    tags: [
      'teen wellness',
      'mental health',
      'stress management',
      'mindfulness',
      'emotional intelligence',
    ],
    prerequisites: [
      'Sự cởi mở về cảm xúc',
      'Cam kết thực hành hàng ngày',
      'Hỗ trợ từ người lớn',
      'Môi trường an toàn',
    ],
    lessons: [
      {
        id: 'understanding-stress-anxiety',
        title: 'Understanding Stress & Anxiety Management',
        duration: '120 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'mindfulness-meditation-techniques',
        title: 'Mindfulness & Meditation Techniques',
        duration: '90 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'digital-wellness-screen-time',
        title: 'Digital Wellness & Screen Time Balance',
        duration: '100 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'building-healthy-relationships',
        title: 'Building Healthy Relationships',
        duration: '110 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'study-life-balance',
        title: 'Study-Life Balance Strategies',
        duration: '95 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'emotional-intelligence-development',
        title: 'Emotional Intelligence Development',
        duration: '105 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'crisis-support-help-seeking',
        title: 'Crisis Support & When to Seek Help',
        duration: '75 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },

  // Recently Created High-Demand Learning Modules (2025)
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    subtitle: 'Trí tuệ nhân tạo và học máy',
    description:
      'Tìm hiểu AI/ML từ cơ bản đến nâng cao với TensorFlow, PyTorch và neural networks',
    category: ['professional', 'programming'],
    icon: '🧠',
    color: 'from-purple-600 to-indigo-600',
    totalDuration: '16-20 giờ',
    difficulty: 'Trung bình đến Nâng cao',
    level: 'Trung bình',
    duration: '16-20 giờ',
    href: '/learning/ai-machine-learning',
    features: [
      'Machine Learning Algorithms',
      'Neural Networks',
      'Computer Vision',
      'AI Ethics',
    ],
    tags: ['ai', 'machine learning', 'tensorflow', 'neural networks'],
    prerequisites: [
      'Python programming basics',
      'Statistics fundamentals',
      'Linear algebra knowledge',
      'Mathematical thinking',
    ],
    lessons: [
      {
        id: 'ai-ml-fundamentals',
        title: 'AI & Machine Learning Fundamentals',
        duration: '180 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'neural-networks-deep-learning',
        title: 'Neural Networks & Deep Learning',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'computer-vision-nlp',
        title: 'Computer Vision & Natural Language Processing',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'ai-ethics-future-trends',
        title: 'AI Ethics & Future Trends',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    subtitle: 'Máy tính lượng tử',
    description:
      'Khám phá thế giới quantum computing với Qiskit, quantum algorithms và cryptography',
    category: ['professional', 'programming'],
    icon: '⚛️',
    color: 'from-cyan-600 to-blue-600',
    totalDuration: '14-18 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '14-18 giờ',
    href: '/learning/quantum-computing',
    features: [
      'Quantum Fundamentals',
      'Qiskit Programming',
      'Quantum Algorithms',
      'Quantum Cryptography',
    ],
    tags: ['quantum', 'qiskit', 'cryptography', 'algorithms'],
    prerequisites: [
      'Linear algebra và complex numbers',
      'Python programming',
      'Basic physics knowledge',
      'Mathematical reasoning',
    ],
    lessons: [
      {
        id: 'quantum-fundamentals',
        title: 'Quantum Computing Fundamentals',
        duration: '160 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'quantum-algorithms',
        title: 'Quantum Algorithms & Implementations',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'quantum-cryptography',
        title: 'Quantum Cryptography & Security',
        duration: '160 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'quantum-future',
        title: 'Future of Quantum Computing',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: 'blockchain-technology',
    title: 'Blockchain Technology',
    subtitle: 'Công nghệ chuỗi khối',
    description:
      'Học blockchain từ fundamentals đến smart contracts và DeFi applications',
    category: ['professional', 'programming'],
    icon: '⛓️',
    color: 'from-orange-600 to-yellow-600',
    totalDuration: '16-20 giờ',
    difficulty: 'Trung bình đến Nâng cao',
    level: 'Trung bình',
    duration: '16-20 giờ',
    href: '/learning/blockchain-technology',
    features: [
      'Blockchain Fundamentals',
      'Smart Contracts',
      'DeFi Protocols',
      'Enterprise Applications',
    ],
    tags: ['blockchain', 'smart contracts', 'defi', 'ethereum'],
    prerequisites: [
      'Programming experience (JavaScript/Solidity)',
      'Basic cryptography understanding',
      'Web development knowledge',
      'Financial concepts awareness',
    ],
    lessons: [
      {
        id: 'blockchain-fundamentals',
        title: 'Blockchain Fundamentals & Architecture',
        duration: '180 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'smart-contracts-development',
        title: 'Smart Contracts Development',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'defi-protocols',
        title: 'DeFi Protocols & Applications',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'enterprise-blockchain',
        title: 'Enterprise Blockchain Solutions',
        duration: '160 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: 'climate-science',
    title: 'Climate Science & Environmental Solutions',
    subtitle: 'Khoa học khí hậu',
    description:
      'Tìm hiểu climate change, environmental modeling và green technology solutions',
    category: ['professional', 'science'],
    icon: '🌍',
    color: 'from-green-600 to-emerald-600',
    totalDuration: '12-15 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '12-15 giờ',
    href: '/learning/climate-science',
    features: [
      'Climate Fundamentals',
      'Data Analysis',
      'Green Technology',
      'Environmental Policy',
    ],
    tags: ['climate', 'environment', 'sustainability', 'green tech'],
    prerequisites: [
      'Basic science knowledge',
      'Data analysis skills',
      'Environmental awareness',
      'Statistical understanding',
    ],
    lessons: [
      {
        id: 'climate-science-fundamentals',
        title: 'Climate Science Fundamentals',
        duration: '160 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'climate-data-analysis',
        title: 'Climate Data Analysis & Modeling',
        duration: '180 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'green-technology-solutions',
        title: 'Green Technology Solutions',
        duration: '160 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'environmental-policy',
        title: 'Environmental Policy & Action',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    subtitle: 'Khoa học dữ liệu',
    description:
      'Master data science pipeline từ data collection đến machine learning và visualization',
    category: ['professional', 'programming'],
    icon: '📊',
    color: 'from-blue-600 to-purple-600',
    totalDuration: '18-22 giờ',
    difficulty: 'Trung bình đến Nâng cao',
    level: 'Trung bình',
    duration: '18-22 giờ',
    href: '/learning/data-science',
    features: [
      'Data Analysis',
      'Machine Learning',
      'Big Data',
      'Data Visualization',
    ],
    tags: ['data science', 'analytics', 'python', 'machine learning'],
    prerequisites: [
      'Python programming',
      'Statistics và probability',
      'SQL database knowledge',
      'Mathematical foundations',
    ],
    lessons: [
      {
        id: 'data-science-fundamentals',
        title: 'Data Science Fundamentals & Python Stack',
        duration: '200 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'machine-learning-algorithms',
        title: 'Machine Learning Algorithms & Implementation',
        duration: '220 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'big-data-technologies',
        title: 'Big Data Technologies & Distributed Computing',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'data-visualization-storytelling',
        title: 'Data Visualization & Storytelling',
        duration: '180 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: 'space-exploration',
    title: 'Space Exploration & Technology',
    subtitle: 'Khám phá vũ trụ',
    description:
      'Tìm hiểu space science, rocket engineering và satellite technology',
    category: ['science', 'professional'],
    icon: '🚀',
    color: 'from-indigo-600 to-purple-600',
    totalDuration: '12-15 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '12-15 giờ',
    href: '/learning/space-exploration',
    features: [
      'Space Fundamentals',
      'Rocket Science',
      'Satellite Technology',
      'Space Colonization',
    ],
    tags: ['space', 'rockets', 'satellites', 'astronomy'],
    prerequisites: [
      'Physics fundamentals',
      'Mathematics: calculus',
      'Engineering principles',
      'Scientific curiosity',
    ],
    lessons: [
      {
        id: 'space-exploration-fundamentals',
        title: 'Cơ bản về Khám phá Vũ trụ',
        duration: '160 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'rocket-science-propulsion',
        title: 'Rocket Science và Propulsion Systems',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'satellite-technology',
        title: 'Satellite Technology và Applications',
        duration: '150 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'space-colonization',
        title: 'Space Colonization và Future Missions',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: 'programming-robotics',
    title: 'Programming & Robotics',
    subtitle: 'Lập trình và robot học',
    description:
      'Kết hợp programming skills với robotics engineering để tạo autonomous systems',
    category: ['programming', 'stem'],
    icon: '🤖',
    color: 'from-gray-600 to-blue-600',
    totalDuration: '16-20 giờ',
    difficulty: 'Trung bình đến Nâng cao',
    level: 'Trung bình',
    duration: '16-20 giờ',
    href: '/learning/programming-robotics',
    features: [
      'Programming Fundamentals',
      'Robotics Engineering',
      'AI Integration',
      'Advanced Applications',
    ],
    tags: ['programming', 'robotics', 'ai', 'automation'],
    prerequisites: [
      'Programming fundamentals',
      'Basic electronics',
      'Mathematical thinking',
      'Problem-solving skills',
    ],
    lessons: [
      {
        id: 'programming-fundamentals',
        title: 'Programming Fundamentals cho Robotics',
        duration: '180 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'robotics-engineering',
        title: 'Robotics Engineering và Design',
        duration: '200 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'ai-robotics-integration',
        title: 'AI Integration trong Robotics',
        duration: '160 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'advanced-robotics-applications',
        title: 'Advanced Robotics Applications',
        duration: '140 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.YoungEntrepreneur,
    title: 'Young Entrepreneur Bootcamp',
    subtitle: 'Khởi nghiệp thành công từ tuổi teen',
    description:
      'Bootcamp toàn diện cho thế hệ GenZ muốn khởi nghiệp: từ ý tưởng, xây dựng MVP, gọi vốn đến scale business với focus đặc biệt vào thị trường Việt Nam',
    category: 'trending',
    icon: '🚀',
    color: 'from-orange-600 to-red-600',
    totalDuration: '25-30 giờ',
    difficulty: 'Cơ bản đến Nâng cao',
    level: 'Trung bình',
    duration: '25-30 giờ',
    href: '/learning/young-entrepreneur',
    features: [
      'Startup Mindset',
      'Business Model Design',
      'MVP Development',
      'Fundraising',
      'Team Building',
      'Growth Hacking',
      'Legal Compliance',
    ],
    tags: [
      'startup',
      'entrepreneurship',
      'business model',
      'mvp',
      'fundraising',
      'young entrepreneur',
      'vietnam startup',
    ],
    prerequisites: [
      'Tư duy logic và sáng tạo',
      'Đam mê kinh doanh',
      'Kỹ năng học hỏi nhanh',
      'Tinh thần chấp nhận thử thách',
    ],
    lessons: [
      {
        id: 'startup-mindset-fundamentals',
        title: 'Tư Duy Khởi Nghiệp & Cơ Hội Thị Trường',
        duration: '180 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'business-model-validation',
        title: 'Xây Dựng & Kiểm Chứng Business Model',
        duration: '210 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'digital-marketing-growth',
        title: 'Digital Marketing & Growth Hacking cho Startup',
        duration: '195 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'funding-investment-preparation',
        title: 'Gọi Vốn & Chuẩn Bị Đầu Tư',
        duration: '240 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'team-building-leadership',
        title: 'Xây Dựng Đội Ngũ & Leadership Skills',
        duration: '180 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'scaling-operations',
        title: 'Scale Operations & Business Growth',
        duration: '225 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'startup-legal-compliance',
        title: 'Pháp Lý & Compliance cho Startup',
        duration: '165 phút',
        difficulty: 'Trung bình',
      },
    ],
  },

  // 2025 Social Media Trending Modules
  {
    id: K2Module.AIContentCreator,
    title: 'AI Content Creator Academy',
    subtitle: 'Master AI tools cho content creation',
    description: 'Học cách sử dụng AI để tạo content viral trên TikTok, YouTube, Instagram với tools như ChatGPT, RunwayML, Midjourney.',
    category: 'trending',
    icon: '🎬',
    color: 'from-purple-600 to-pink-600',
    totalDuration: '8-10 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '8-10 giờ',
    href: '/learning/ai-content-creator',
    features: [
      'AI Video Creation với RunwayML',
      'Automated Social Media với AI',
      'Personal Branding với AI Tools',
      'Content Workflow Optimization',
    ],
    tags: [
      'ai content creation',
      'social media automation',
      'viral marketing',
      'content strategy',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về social media platforms',
      'Kỹ năng sử dụng máy tính và smartphone',
      'Tư duy sáng tạo và storytelling',
    ],
    lessons: [
      {
        id: 'ai-video-content-creation',
        title: 'AI Video Content Creation Mastery',
        duration: '180 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'ai-powered-social-media-automation',
        title: 'AI-Powered Social Media Automation',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'ai-personal-branding-strategy',
        title: 'AI Personal Branding & Authority Building',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: K2Module.TikTokSocialCommerce,
    title: 'TikTok Shop & Social Commerce',
    subtitle: 'Master live selling và e-commerce',
    description: 'Học cách setup và optimize TikTok Shop, livestream selling strategies và social commerce cho maximized revenue.',
    category: 'trending',
    icon: '🛒',
    color: 'from-pink-600 to-red-600',
    totalDuration: '8-9 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '8-9 giờ',
    href: '/learning/tiktok-social-commerce',
    features: [
      'TikTok Shop Setup & Optimization',
      'Livestream Selling Mastery',
      'Cross-Platform Commerce Strategy',
      'Social Commerce Analytics',
    ],
    tags: [
      'tiktok shop',
      'social commerce',
      'livestream selling',
      'e-commerce optimization',
    ],
    prerequisites: [
      'Business license và tax registration',
      'Products ready for online selling',
      'Basic understanding của e-commerce',
      'TikTok Creator Fund eligibility',
    ],
    lessons: [
      {
        id: 'tiktok-shop-setup-mastery',
        title: 'TikTok Shop Setup & Optimization Mastery',
        duration: '180 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'social-commerce-livestream-mastery',
        title: 'Social Commerce Livestream Selling Mastery',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'cross-platform-social-commerce',
        title: 'Cross-Platform Social Commerce Strategy',
        duration: '120 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.GenZMarketing,
    title: 'Gen Z Marketing & Authentic Branding',
    subtitle: 'Marketing cho thế hệ Gen Z',
    description: 'Hiểu sâu về tâm lý Gen Z và develop authentic marketing strategies resonate với thế hệ digital natives.',
    category: 'trending',
    icon: '🎯',
    color: 'from-cyan-600 to-blue-600',
    totalDuration: '8-9 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '8-9 giờ',
    href: '/learning/genz-marketing',
    features: [
      'Gen Z Psychology & Behavior Analysis',
      'Inclusive & Diverse Messaging',
      'Purpose-Driven Brand Activism',
      'Authenticity Framework Development',
    ],
    tags: [
      'gen z marketing',
      'authentic branding',
      'inclusive marketing',
      'brand activism',
    ],
    prerequisites: [
      'Basic marketing knowledge',
      'Understanding of social media platforms',
      'Cultural sensitivity awareness',
      'Commitment to ethical practices',
    ],
    lessons: [
      {
        id: 'genz-psychology-authentic-marketing',
        title: 'Gen Z Psychology & Authentic Marketing Principles',
        duration: '150 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'inclusive-diverse-brand-messaging',
        title: 'Inclusive & Diverse Brand Messaging',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'purpose-driven-brand-activism',
        title: 'Purpose-Driven Brand Activism & Social Impact',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.ShortVideoMastery,
    title: 'Short-form Video Mastery',
    subtitle: 'Viral video creation techniques',
    description: 'Master psychological triggers, advanced editing techniques và platform optimization cho viral short-form videos.',
    category: 'trending',
    icon: '📱',
    color: 'from-orange-600 to-yellow-600',
    totalDuration: '8-9 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '8-9 giờ',
    href: '/learning/short-video-mastery',
    features: [
      'Viral Psychology & Hook Creation',
      'Advanced Editing Techniques',
      'Platform Algorithm Optimization',
      'Trend Analysis & Adaptation',
    ],
    tags: [
      'short form video',
      'viral content',
      'video editing',
      'algorithm optimization',
    ],
    prerequisites: [
      'Basic video editing skills',
      'Understanding of social media platforms',
      'Creative mindset và storytelling interest',
    ],
    lessons: [
      {
        id: 'viral-video-psychology-hooks',
        title: 'Viral Video Psychology & Hook Mastery',
        duration: '150 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'advanced-video-editing-techniques',
        title: 'Advanced Video Editing & Visual Storytelling',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'platform-optimization-algorithm-mastery',
        title: 'Platform Optimization & Algorithm Mastery',
        duration: '120 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.LiveCommerceStreaming,
    title: 'Live Commerce & Streaming',
    subtitle: 'Live selling mastery',
    description: 'Master livestream selling, interactive technology setup và global expansion strategies cho live commerce success.',
    category: 'trending',
    icon: '📹',
    color: 'from-red-600 to-pink-600',
    totalDuration: '8-9 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '8-9 giờ',
    href: '/learning/live-commerce-streaming',
    features: [
      'Live Streaming Sales Techniques',
      'Professional Streaming Technology',
      'Global Expansion Strategies',
      'Community Building approaches',
    ],
    tags: [
      'live commerce',
      'streaming technology',
      'sales techniques',
      'global expansion',
    ],
    prerequisites: [
      'Comfortable speaking on camera',
      'Basic sales skills',
      'Technical aptitude với equipment',
      'Investment budget for equipment',
    ],
    lessons: [
      {
        id: 'live-streaming-sales-mastery',
        title: 'Live Streaming Sales Mastery',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'interactive-live-streaming-technology',
        title: 'Interactive Live Streaming Technology & Tools',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'global-live-commerce-expansion',
        title: 'Global Live Commerce & Cross-Cultural Strategies',
        duration: '120 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.MicroInfluencerEconomy,
    title: 'Micro-Influencer Economy',
    subtitle: 'Influencer partnerships & growth',
    description: 'Build authentic micro-influencer partnerships, develop personal influence và create win-win collaboration strategies.',
    category: 'trending',
    icon: '👥',
    color: 'from-teal-600 to-green-600',
    totalDuration: '6-7 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '6-7 giờ',
    href: '/learning/micro-influencer-economy',
    features: [
      'Micro-Influencer Partnership Strategies',
      'Authentic Influence Building',
      'Community Engagement Techniques',
      'Monetization Best Practices',
    ],
    tags: [
      'micro influencer',
      'partnership strategies',
      'authentic influence',
      'community building',
    ],
    prerequisites: [
      'Understanding of influencer marketing basics',
      'Brand partnership experience',
      'Clear personal values và mission',
      'Commitment to consistent content creation',
    ],
    lessons: [
      {
        id: 'micro-influencer-partnership-strategies',
        title: 'Micro-Influencer Partnership & Collaboration Strategies',
        duration: '150 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'authentic-influence-community-building',
        title: 'Authentic Influence & Community Building',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: K2Module.SocialListeningCrisis,
    title: 'Social Listening & Crisis Management',
    subtitle: 'Reputation monitoring & crisis response',
    description: 'Master social listening tools, crisis management protocols và reputation recovery strategies cho brand protection.',
    category: 'trending',
    icon: '🔍',
    color: 'from-blue-600 to-indigo-600',
    totalDuration: '7-8 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '7-8 giờ',
    href: '/learning/social-listening-crisis',
    features: [
      'Advanced Social Listening Setup',
      'Crisis Detection & Response',
      'Reputation Recovery Strategies',
      'Proactive Brand Protection',
    ],
    tags: [
      'social listening',
      'crisis management',
      'reputation monitoring',
      'brand protection',
    ],
    prerequisites: [
      'Understanding of social media platforms',
      'Basic analytics experience',
      'Understanding of brand reputation dynamics',
      'Crisis communication experience',
    ],
    lessons: [
      {
        id: 'advanced-social-listening-monitoring',
        title: 'Advanced Social Listening & Brand Monitoring',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'crisis-management-reputation-recovery',
        title: 'Crisis Management & Reputation Recovery Strategies',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.EthicalMarketingPurpose,
    title: 'Ethical Marketing & Brand Purpose',
    subtitle: 'Values-driven marketing',
    description: 'Develop ethical marketing principles, transparent brand communication và purpose-driven campaigns tạo social impact.',
    category: 'trending',
    icon: '💚',
    color: 'from-green-600 to-emerald-600',
    totalDuration: '7-8 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '7-8 giờ',
    href: '/learning/ethical-marketing-purpose',
    features: [
      'Ethical Marketing Framework',
      'Brand Transparency Strategies',
      'Purpose-Driven Campaign Development',
      'Social Impact Measurement',
    ],
    tags: [
      'ethical marketing',
      'brand purpose',
      'social impact',
      'transparent communication',
    ],
    prerequisites: [
      'Basic marketing knowledge',
      'Understanding of consumer rights',
      'Strong brand values foundation',
      'Commitment to ethical business practices',
    ],
    lessons: [
      {
        id: 'ethical-marketing-principles-transparency',
        title: 'Ethical Marketing Principles & Brand Transparency',
        duration: '150 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'purpose-driven-marketing-social-impact',
        title: 'Purpose-Driven Marketing & Social Impact Campaigns',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.CrossPlatformStrategy,
    title: 'Cross-Platform Content Strategy',
    subtitle: 'Multi-platform optimization',
    description: 'Develop unified brand messaging, advanced content repurposing và cross-platform optimization strategies.',
    category: 'trending',
    icon: '🌐',
    color: 'from-violet-600 to-purple-600',
    totalDuration: '6-7 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '6-7 giờ',
    href: '/learning/cross-platform-strategy',
    features: [
      'Unified Brand Messaging',
      'Content Repurposing Automation',
      'Platform-Specific Optimization',
      'Cross-Platform Analytics',
    ],
    tags: [
      'cross platform strategy',
      'content repurposing',
      'brand consistency',
      'multi platform optimization',
    ],
    prerequisites: [
      'Established brand identity',
      'Multi-platform presence',
      'Content creation experience',
      'Understanding of platform differences',
    ],
    lessons: [
      {
        id: 'unified-brand-messaging-strategy',
        title: 'Unified Brand Messaging Across Platforms',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'advanced-content-repurposing-distribution',
        title: 'Advanced Content Repurposing & Distribution',
        duration: '120 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.DataDrivenAnalytics,
    title: 'Data-driven Social Media Analytics',
    subtitle: 'Advanced analytics & insights',
    description: 'Master advanced analytics techniques, predictive modeling và data-driven optimization cho social media strategies.',
    category: 'trending',
    icon: '📊',
    color: 'from-slate-600 to-blue-600',
    totalDuration: '7-8 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '7-8 giờ',
    href: '/learning/data-driven-analytics',
    features: [
      'Advanced Analytics Techniques',
      'Predictive Trend Forecasting',
      'Data Visualization Mastery',
      'Strategic Decision Support',
    ],
    tags: [
      'data analytics',
      'predictive modeling',
      'social media insights',
      'performance optimization',
    ],
    prerequisites: [
      'Basic analytics experience',
      'Understanding of statistical concepts',
      'Advanced analytics experience',
      'Statistical modeling knowledge',
    ],
    lessons: [
      {
        id: 'advanced-social-media-analytics-insights',
        title: 'Advanced Social Media Analytics & Data Insights',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'predictive-analytics-trend-forecasting',
        title: 'Predictive Analytics & Social Media Trend Forecasting',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },

  // 2025 Academic Specialized Modules
  {
    id: K2Module.DataScienceAnalytics,
    title: 'Data Science & Big Data Analytics',
    subtitle: 'Advanced data analysis & ML',
    description: 'Master data science fundamentals với Python, big data processing, machine learning applications và business intelligence.',
    category: 'professional',
    icon: '📈',
    color: 'from-indigo-600 to-purple-600',
    totalDuration: '14-16 giờ',
    difficulty: 'Nâng cao',
    level: 'Nâng cao',
    duration: '14-16 giờ',
    href: '/learning/data-science-analytics',
    features: [
      'Python Data Science Mastery',
      'Big Data Processing với Spark',
      'Machine Learning Applications',
      'Business Intelligence & Storytelling',
    ],
    tags: [
      'data science',
      'machine learning',
      'big data',
      'business intelligence',
    ],
    prerequisites: [
      'Basic Python programming knowledge',
      'Understanding of mathematics and statistics',
      'Intermediate programming skills',
      'Database và cloud computing knowledge',
    ],
    lessons: [
      {
        id: 'data-science-fundamentals-python',
        title: 'Data Science Fundamentals với Python',
        duration: '240 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'big-data-machine-learning-applications',
        title: 'Big Data Processing & Machine Learning Applications',
        duration: '220 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'business-intelligence-data-storytelling',
        title: 'Business Intelligence & Data Storytelling',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: K2Module.EnvironmentalScienceClimate,
    title: 'Environmental Science & Climate Change',
    subtitle: 'Climate science & conservation',
    description: 'Understand climate change science, environmental monitoring, policy development và ecosystem restoration techniques.',
    category: 'professional',
    icon: '🌍',
    color: 'from-green-600 to-teal-600',
    totalDuration: '12-14 giờ',
    difficulty: 'Trung bình',
    level: 'Trung bình',
    duration: '12-14 giờ',
    href: '/learning/environmental-science-climate',
    features: [
      'Climate Change Science',
      'Environmental Monitoring',
      'Policy Development',
      'Ecosystem Restoration',
    ],
    tags: [
      'environmental science',
      'climate change',
      'conservation',
      'sustainability',
    ],
    prerequisites: [
      'Basic science knowledge (chemistry, physics)',
      'Understanding of data analysis',
      'Understanding of governance systems',
      'Environmental science knowledge',
    ],
    lessons: [
      {
        id: 'climate-change-environmental-monitoring',
        title: 'Climate Change Science & Environmental Monitoring',
        duration: '200 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'environmental-policy-sustainable-development',
        title: 'Environmental Policy & Sustainable Development',
        duration: '180 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'ecosystem-restoration-biodiversity-conservation',
        title: 'Ecosystem Restoration & Biodiversity Conservation',
        duration: '160 phút',
        difficulty: 'Nâng cao',
      },
    ],
  },

  // 2025+ Trending Experimental Modules for Vietnamese Students
  {
    id: K2Module.MetaverseVREducation,
    title: 'Metaverse & Giáo Dục VR',
    subtitle: 'Tương lai của học tập immersive',
    description:
      'Khám phá công nghệ Metaverse, VR/AR trong giáo dục và cơ hội nghề nghiệp trong kỷ nguyên thực tế ảo',
    category: ['experimental', 'technology', 'future-skills'],
    icon: '🥽',
    color: 'from-purple-500 to-pink-500',
    totalDuration: '8-10 giờ',
    difficulty: 'Trung bình',
    features: [
      'VR Content Creation',
      'Metaverse Business Models',
      'AR Mobile Apps',
      'Social VR Collaboration',
      'Virtual Economy',
    ],
    tags: ['metaverse', 'vr', 'ar', 'immersive', 'education', 'future'],
    prerequisites: [
      'Kiến thức cơ bản về technology',
      'Hiểu biết về internet và social media',
      'Không cần kinh nghiệm VR trước đó',
    ],
    lessons: [
      {
        id: 'metaverse-fundamentals',
        title: 'Cơ Bản Về Metaverse và Thực Tế Ảo',
        duration: '90 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'vr-content-creation',
        title: 'Tạo Nội Dung VR Giáo Dục',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'ar-mobile-applications',
        title: 'Ứng Dụng AR Trên Mobile',
        duration: '100 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'social-vr-collaboration',
        title: 'Hợp Tác Xã Hội Trong VR',
        duration: '80 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'metaverse-business-economics',
        title: 'Kinh Tế Metaverse & Cơ Hội Kinh Doanh',
        duration: '90 phút',
        difficulty: 'Trung bình',
      },
    ],
  },

  {
    id: K2Module.SpaceTechnology,
    title: 'Công Nghệ Vũ Trụ',
    subtitle: 'Khám phá không gian cho Việt Nam',
    description:
      'Tìm hiểu về space technology, satellite systems và cơ hội cho Việt Nam trong kỷ nguyên khám phá không gian',
    category: ['experimental', 'technology', 'engineering'],
    icon: '🚀',
    color: 'from-indigo-500 to-purple-500',
    totalDuration: '10-12 giờ',
    difficulty: 'Trung bình',
    features: [
      'Satellite Technology',
      'Space Mission Engineering',
      'CubeSat Development',
      'Space Entrepreneurship',
      'Vietnam Space Strategy',
    ],
    tags: ['space', 'satellite', 'aerospace', 'vietnam', 'engineering'],
    prerequisites: [
      'Kiến thức cơ bản về physics và mathematics',
      'Hiểu biết về technology và engineering',
      'Interest trong science và exploration',
    ],
    lessons: [
      {
        id: 'space-exploration-fundamentals',
        title: 'Cơ Bản Khám Phá Không Gian',
        duration: '100 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'satellite-technology-applications',
        title: 'Công Nghệ Vệ Tinh & Ứng Dụng',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'space-mission-engineering',
        title: 'Kỹ Thuật Sứ Mệnh Không Gian',
        duration: '150 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'space-entrepreneurship-economics',
        title: 'Kinh Doanh Không Gian & Kinh Tế Vũ Trụ',
        duration: '90 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'space-careers-future',
        title: 'Nghề Nghiệp Vũ Trụ & Tương Lai',
        duration: '75 phút',
        difficulty: 'Cơ bản',
      },
    ],
  },

  {
    id: K2Module.DigitalArtsCreativeTech,
    title: 'Nghệ Thuật Số & Công Nghệ Sáng Tạo',
    subtitle: 'Creative technology cho thế hệ mới',
    description:
      'Master digital art, motion graphics, AI art generation và immersive media cho creative careers',
    category: ['experimental', 'creative', 'technology'],
    icon: '🎨',
    color: 'from-pink-500 to-rose-500',
    totalDuration: '10-12 giờ',
    difficulty: 'Trung bình',
    features: [
      'Digital Art Mastery',
      'AI Art Generation',
      'Motion Graphics',
      'VR/AR Content',
      'Creative Business',
    ],
    tags: ['digital-art', 'ai-art', 'creative', 'design', 'technology'],
    prerequisites: [
      'Basic understanding của art principles',
      'Access to digital art software hoặc tablet',
      'Interest in visual arts và creativity',
    ],
    lessons: [
      {
        id: 'digital-art-fundamentals',
        title: 'Cơ Bản Nghệ Thuật Số',
        duration: '100 phút',
        difficulty: 'Cơ bản',
      },
      {
        id: 'motion-graphics-animation',
        title: 'Motion Graphics & Animation',
        duration: '120 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'generative-ai-art',
        title: 'Nghệ Thuật AI Tạo Sinh',
        duration: '90 phút',
        difficulty: 'Trung bình',
      },
      {
        id: 'immersive-media-production',
        title: 'Sản Xuất Media Nhập Vai',
        duration: '130 phút',
        difficulty: 'Nâng cao',
      },
      {
        id: 'creative-technology-business',
        title: 'Kinh Doanh Công Nghệ Sáng Tạo',
        duration: '100 phút',
        difficulty: 'Trung bình',
      },
    ],
  },

  // 2025 Vietnam Niche Market Research Modules
  {
    id: K2Module.BlueEconomy,
    title: 'Kinh Tế Biển Xanh & Công Nghệ Biển',
    subtitle: 'Khai thác tiềm năng 3.200km bờ biển Việt Nam',
    description: 'Phát triển kinh tế biển bền vững với công nghệ thông minh, từ nuôi trồng thủy sản đến năng lượng tái tạo biển',
    category: ['ocean-tech', 'sustainable-economy', 'marine-science'],
    icon: '🌊',
    color: 'from-blue-600 to-cyan-600',
    totalDuration: '8-12 giờ',
    difficulty: 'Trung bình',
    features: [
      'Smart Aquaculture với IoT & AI',
      'Marine Renewable Energy',
      'Ocean Data Analytics',
      'Sustainable Fisheries Management'
    ],
    tags: ['blue-economy', 'marine-tech', 'aquaculture', 'renewable-energy', 'sustainability'],
    prerequisites: [
      'Kiến thức cơ bản về kinh tế học',
      'Hiểu biết về môi trường biển',
      'IoT và cảm biến cơ bản'
    ]
  },

  {
    id: K2Module.SmartManufacturing,
    title: 'Sản Xuất Thông Minh & Công Nghiệp 4.0',
    subtitle: 'Chuyển đổi số trong sản xuất - Cơ hội từ China+1 strategy',
    description: 'Nắm vững công nghệ Công nghiệp 4.0 để tận dụng làn sóng chuyển dịch sản xuất từ Trung Quốc sang Việt Nam',
    category: ['industry-4.0', 'automation', 'smart-factory'],
    icon: '🏭',
    color: 'from-orange-600 to-red-600',
    totalDuration: '10-15 giờ',
    difficulty: 'Trung bình',
    features: [
      'Factory Automation Systems',
      'Predictive Maintenance AI',
      'Supply Chain Optimization',
      'Quality Control với Computer Vision'
    ],
    tags: ['industry-4.0', 'automation', 'iot', 'ai', 'manufacturing'],
    prerequisites: [
      'Kiến thức điện tử cơ bản',
      'Lập trình cơ bản',
      'Hiểu biết về quy trình sản xuất'
    ]
  },
];

// Helper functions cho navigation
export function getModuleById(id: string): ModuleNavigation | undefined {
  return moduleNavigation.find((module) => module.id === id);
}

export function getLessonById(
  moduleId: string,
  lessonId: string,
): LessonNavigation | undefined {
  const moduleData = getModuleById(moduleId);
  return moduleData?.lessons?.find((lesson) => lesson.id === lessonId);
}

export function getModulesByCategory(category: string): ModuleNavigation[] {
  return moduleNavigation.filter((moduleData) => {
    const moduleCategories = Array.isArray(moduleData.category)
      ? moduleData.category
      : [moduleData.category];
    return moduleCategories.includes(category);
  });
}

export function getAllCategories(): string[] {
  const categories: string[] = [];
  moduleNavigation.forEach((moduleData) => {
    if (Array.isArray(moduleData.category)) {
      categories.push(...moduleData.category);
    } else {
      categories.push(moduleData.category);
    }
  });
  return Array.from(new Set(categories));
}

export function getNextLesson(
  moduleId: string,
  currentLessonId: string,
): LessonNavigation | undefined {
  const moduleData = getModuleById(moduleId);
  if (!moduleData || !moduleData.lessons) return undefined;

  const currentIndex = moduleData.lessons.findIndex(
    (lesson) => lesson.id === currentLessonId,
  );
  if (currentIndex === -1 || currentIndex === moduleData.lessons.length - 1)
    return undefined;

  return moduleData.lessons[currentIndex + 1];
}

export function getPreviousLesson(
  moduleId: string,
  currentLessonId: string,
): LessonNavigation | undefined {
  const moduleData = getModuleById(moduleId);
  if (!moduleData || !moduleData.lessons) return undefined;

  const currentIndex = moduleData.lessons.findIndex(
    (lesson) => lesson.id === currentLessonId,
  );
  if (currentIndex <= 0) return undefined;

  return moduleData.lessons[currentIndex - 1];
}

export function calculateModuleProgress(moduleId: string): number {
  const moduleData = getModuleById(moduleId);
  if (!moduleData || !moduleData.lessons) return 0;

  const completedLessons = moduleData.lessons.filter(
    (lesson) => lesson.completed,
  ).length;
  return Math.round((completedLessons / moduleData.lessons.length) * 100);
}
