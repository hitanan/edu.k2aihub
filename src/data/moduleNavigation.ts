export interface ModuleNavigation {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string[] | string; // Support both single and multiple categories
  icon: string;
  color: string;
  lessons: LessonNavigation[];
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

  // 2025 Trend-Based Modules
  ContentCreator: 'content-creator',
  TeenWellness: 'teen-wellness',
  YoungEntrepreneur: 'young-entrepreneur'
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
      'Cultural Information'
    ],
    tags: ['geography', 'vietnam', 'interactive', 'culture'],
    prerequisites: [],
    lessons: [],
    coreModule: true
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
      'Real-world Applications'
    ],
    tags: ['ai', 'practical', 'work', 'creativity'],
    prerequisites: [],
    lessons: [],
    coreModule: true
  },

  // AI Learning Modules (under /learning/ai/)
  {
    id: 'ai-office-work',
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
      'Quản lý thời gian'
    ],
    tags: ['office', 'productivity', 'email', 'automation'],
    prerequisites: ['Kỹ năng máy tính cơ bản', 'Hiểu biết về Microsoft Office'],
    lessons: [
      {
        id: 'email-automation',
        title: 'Tự động hóa Email với AI',
        duration: '45 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'excel-ai',
        title: 'Excel thông minh với AI',
        duration: '60 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'presentation-ai',
        title: 'Tạo bài thuyết trình với AI',
        duration: '50 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'time-management',
        title: 'Quản lý thời gian với AI',
        duration: '40 phút',
        difficulty: 'Cơ bản'
      }
    ]
  },
  {
    id: 'ai-creative-design',
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
      'Visual design'
    ],
    tags: ['design', 'creativity', 'art', 'visual'],
    prerequisites: [
      'Hiểu biết cơ bản về design',
      'Sử dụng máy tính thành thạo'
    ],
    lessons: [
      {
        id: 'midjourney-basics',
        title: 'Midjourney cơ bản',
        duration: '60 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'advanced-prompting',
        title: 'Prompt engineering nâng cao',
        duration: '75 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'canva-ai',
        title: 'Canva AI Magic Studio',
        duration: '50 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'content-creation',
        title: 'Tạo nội dung với AI',
        duration: '45 phút',
        difficulty: 'Trung bình'
      }
    ]
  },
  {
    id: 'ai-education-learning',
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
      'Document summarization'
    ],
    tags: ['education', 'learning', 'research', 'study'],
    prerequisites: ['Kỹ năng học tập cơ bản'],
    lessons: [
      {
        id: 'ai-tutor',
        title: 'AI như gia sư cá nhân',
        duration: '50 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'research-ai',
        title: 'Nghiên cứu với AI',
        duration: '60 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'language-learning',
        title: 'Học ngôn ngữ với AI',
        duration: '45 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'document-summary',
        title: 'Tóm tắt tài liệu với AI',
        duration: '40 phút',
        difficulty: 'Cơ bản'
      }
    ]
  },
  {
    id: 'ai-business-marketing',
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
      'SEO optimization'
    ],
    tags: ['marketing', 'business', 'analytics', 'automation'],
    prerequisites: ['Hiểu biết cơ bản về marketing', 'Kinh nghiệm kinh doanh'],
    lessons: [
      {
        id: 'marketing-automation',
        title: 'Tự động hóa Marketing',
        duration: '70 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'customer-analytics',
        title: 'Phân tích khách hàng với AI',
        duration: '80 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'chatbot-development',
        title: 'Phát triển Chatbot',
        duration: '60 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'seo-ai',
        title: 'SEO tối ưu với AI',
        duration: '50 phút',
        difficulty: 'Trung bình'
      }
    ]
  },
  {
    id: 'ai-daily-life',
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
      'Smart travel'
    ],
    tags: ['lifestyle', 'personal', 'health', 'finance'],
    prerequisites: ['Sử dụng smartphone/máy tính'],
    lessons: [
      {
        id: 'personal-assistant',
        title: 'Trợ lý AI cá nhân',
        duration: '45 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'financial-ai',
        title: 'Quản lý tài chính với AI',
        duration: '50 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'health-fitness',
        title: 'Sức khỏe & Fitness AI',
        duration: '40 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'travel-ai',
        title: 'Du lịch thông minh với AI',
        duration: '35 phút',
        difficulty: 'Cơ bản'
      }
    ]
  },
  {
    id: 'ai-programming-dev',
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
      'Documentation generation'
    ],
    tags: ['programming', 'coding', 'development', 'automation'],
    prerequisites: ['Kiến thức lập trình cơ bản', 'Sử dụng Git/GitHub'],
    lessons: [
      {
        id: 'github-copilot',
        title: 'GitHub Copilot mastery',
        duration: '90 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'ai-code-review',
        title: 'AI Code Review',
        duration: '70 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'automated-testing',
        title: 'Testing tự động với AI',
        duration: '60 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'documentation-ai',
        title: 'Tạo tài liệu với AI',
        duration: '50 phút',
        difficulty: 'Trung bình'
      }
    ]
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
      'E-commerce Strategy'
    ],
    tags: ['business', 'startup', 'vietnam', 'fintech'],
    prerequisites: [
      'Basic business understanding',
      'Vietnamese market knowledge',
      'Technology literacy'
    ],
    lessons: [
      {
        id: 'vietnamese-startup-ecosystem',
        title: 'Vietnamese Startup Ecosystem & Legal Framework',
        duration: '140 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'vietnamese-fintech-solutions',
        title: 'Vietnamese FinTech & Payment Solutions',
        duration: '140 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'vietnamese-ecommerce-platforms',
        title: 'Vietnamese E-commerce & Digital Marketplace Development',
        duration: '140 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Cultural Documentation'
    ],
    tags: ['culture', 'heritage', 'tourism', 'vietnam'],
    prerequisites: [
      'Vietnamese cultural knowledge',
      'Digital media understanding',
      'Basic web development'
    ],
    lessons: [
      {
        id: 'digital-heritage-preservation',
        title: 'Digital Heritage Preservation & Cultural Documentation',
        duration: '150 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'tourism-technology',
        title: 'Tourism Technology & Cultural Experience Platforms',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'EHR Systems'
    ],
    tags: ['healthcare', 'medical', 'ai', 'vietnam'],
    prerequisites: [
      'Healthcare system understanding',
      'Medical terminology knowledge',
      'Technology development experience'
    ],
    lessons: [
      {
        id: 'digital-health-vietnam',
        title: 'Digital Health Infrastructure cho Việt Nam',
        duration: '160 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'ai-medical-imaging',
        title: 'AI Medical Imaging cho Vietnamese Healthcare',
        duration: '200 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Speech Synthesis'
    ],
    tags: ['nlp', 'ai', 'chatbot', 'voice', 'vietnamese'],
    prerequisites: [
      'Programming fundamentals',
      'Understanding of Vietnamese language',
      'Basic machine learning concepts'
    ],
    lessons: [
      {
        id: 'vietnamese-nlp-fundamentals',
        title: 'Vietnamese NLP Fundamentals & PhoBERT Integration',
        duration: '150 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'vietnamese-chatbot-development',
        title: 'Vietnamese Chatbot Development & Conversational AI',
        duration: '150 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'vietnamese-voice-ai-systems',
        title: 'Vietnamese Voice AI & Speech Recognition Systems',
        duration: '150 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Creator Economy'
    ],
    tags: ['marketing', 'social media', 'content', 'creator'],
    prerequisites: [
      'Basic computer skills',
      'Understanding của internet và web browsers'
    ],
    lessons: [
      {
        id: 'seo-fundamentals',
        title: 'SEO Fundamentals & Keyword Research',
        duration: '120 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'content-marketing-strategy',
        title: 'Content Marketing & Strategy Development',
        duration: '120 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'social-media-marketing',
        title: 'Social Media Marketing & Influencer Partnerships',
        duration: '120 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'digital-advertising-analytics',
        title: 'Digital Advertising & Analytics Mastery',
        duration: '120 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Cryptocurrency'
    ],
    tags: ['finance', 'investment', 'fintech', 'money'],
    prerequisites: [
      'Basic math skills',
      'Understanding của money và banking',
      'Computer literacy'
    ],
    lessons: [
      {
        id: 'personal-finance-budgeting',
        title: 'Personal Finance & Smart Budgeting Strategies',
        duration: '150 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'investment-cryptocurrency-fintech',
        title: 'Investment Strategies & Cryptocurrency FinTech',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Environmental Tech'
    ],
    tags: ['green', 'renewable', 'sustainability', 'environment'],
    prerequisites: [
      'Basic science knowledge',
      'Environmental awareness',
      'Problem-solving mindset'
    ],
    lessons: [
      {
        id: 'renewable-energy-systems',
        title: 'Renewable Energy Systems & Solar Technology',
        duration: '120 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'sustainable-engineering-design',
        title: 'Sustainable Engineering & Green Building Design',
        duration: '120 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'environmental-monitoring-iot',
        title: 'Environmental Monitoring & IoT Solutions',
        duration: '120 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Publishing'
    ],
    tags: ['game', 'unity', 'unreal', 'design', 'animation'],
    prerequisites: [
      'Programming basics',
      'Creative thinking',
      'Problem-solving skills',
      'Design fundamentals'
    ],
    lessons: [
      {
        id: 'game-design-unity-basics',
        title: 'Game Design Fundamentals & Unity Engine Basics',
        duration: '180 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'advanced-game-development',
        title: 'Advanced Game Development & Publishing Strategies',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Commercial Use'
    ],
    tags: ['ai', 'art', 'midjourney', 'creative', 'design'],
    prerequisites: [
      'Basic computer skills',
      'Creative interest',
      'Understanding của digital media'
    ],
    lessons: [
      {
        id: 'ai-image-generation-fundamentals',
        title: 'AI Image Generation Fundamentals & Prompt Engineering',
        duration: '135 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'creative-video-ai-production',
        title: 'Creative Video AI Production & Advanced Workflows',
        duration: '135 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Threat Hunting'
    ],
    tags: ['security', 'hacking', 'penetration', 'network'],
    prerequisites: [
      'Network fundamentals',
      'Linux command line',
      'Understanding của security concepts'
    ],
    lessons: [
      {
        id: 'ethical-hacking-fundamentals',
        title: 'Ethical Hacking & Penetration Testing Fundamentals',
        duration: '180 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'cybersecurity-defense-strategies',
        title: 'Advanced Cybersecurity Defense & Incident Response',
        duration: '200 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Bioethics'
    ],
    tags: ['biotech', 'genetics', 'medical', 'crispr'],
    prerequisites: [
      'Biology fundamentals',
      'Chemistry basics',
      'Scientific method understanding'
    ],
    lessons: [
      {
        id: 'biotech-fundamentals-genetic-engineering',
        title: 'Biotechnology Fundamentals & Genetic Engineering',
        duration: '150 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'medical-biotechnology-drug-discovery',
        title: 'Medical Biotechnology & Drug Discovery Pipeline',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      }
    ]
  },

  // High-Demand University Modules (Tier 1 - Based on 2025 Market Analysis)
  {
    id: K2Module.SemiconductorTechnology,
    title: 'Semiconductor Technology',
    subtitle: 'Công nghệ bán dẫn tiên tiến',
    description:
      'Master semiconductor physics, IC design và fabrication technology. Essential cho Vietnam\'s growing electronics manufacturing và FDI from Samsung, Intel.',
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
      'Industry Applications'
    ],
    tags: ['semiconductor', 'ic design', 'vlsi', 'electronics', 'manufacturing'],
    prerequisites: [
      'Physics fundamentals: quantum mechanics, solid state',
      'Mathematics: calculus, linear algebra, statistics',
      'Electrical engineering basics',
      'Chemistry: materials science basics'
    ],
    lessons: [
      {
        id: 'semiconductor-fundamentals',
        title: 'Semiconductor Physics & Materials Fundamentals',
        duration: '180 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'ic-design-vlsi',
        title: 'Integrated Circuit Design & VLSI Technology',
        duration: '200 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'fabrication-cleanroom',
        title: 'Fabrication Process & Cleanroom Technology',
        duration: '190 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'advanced-nodes-ai-chips',
        title: 'Advanced Process Nodes & AI Chip Architecture',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'industry-career-vietnam',
        title: 'Industry Applications & Career Opportunities in Vietnam',
        duration: '150 phút',
        difficulty: 'Trung bình'
      }
    ]
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
      'Economics & Policy'
    ],
    tags: ['renewable energy', 'solar', 'wind', 'energy storage', 'smart grid'],
    prerequisites: [
      'Basic electrical engineering',
      'Physics principles: mechanics, thermodynamics',
      'Mathematics: algebra, basic calculus',
      'Environmental awareness'
    ],
    lessons: [
      {
        id: 'solar-energy-fundamentals',
        title: 'Solar Energy Systems & Photovoltaic Technology',
        duration: '180 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'wind-power-technology',
        title: 'Wind Power Systems & Turbine Technology',
        duration: '200 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'energy-storage-systems',
        title: 'Energy Storage & Smart Grid Integration',
        duration: '160 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'hydroelectric-systems',
        title: 'Hydroelectric Power & Small-Scale Hydro',
        duration: '170 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'renewable-economics-policy',
        title: 'Renewable Energy Economics & Policy in Vietnam',
        duration: '140 phút',
        difficulty: 'Trung bình'
      }
    ]
  },
  {
    id: K2Module.AdvancedAI,
    title: 'Advanced AI & Machine Learning',
    subtitle: 'Trí tuệ nhân tạo nâng cao',
    description:
      'Master cutting-edge AI technologies: Deep Learning, Computer Vision, NLP, Reinforcement Learning với focus trên Vietnamese market applications.',
    category: 'professional',
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
      'AI Ethics & Responsible Deployment'
    ],
    tags: ['ai', 'deep learning', 'computer vision', 'nlp', 'reinforcement learning'],
    prerequisites: [
      'Strong Python programming skills',
      'Linear algebra và calculus knowledge',
      'Machine learning fundamentals',
      'Cloud platforms experience (AWS/GCP)'
    ],
    lessons: [
      {
        id: 'deep-learning-foundations',
        title: 'Deep Learning & Neural Network Architectures',
        duration: '240 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'computer-vision-applications',
        title: 'Computer Vision & Image Processing Applications',
        duration: '220 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'nlp-language-models',
        title: 'Natural Language Processing & Large Language Models',
        duration: '200 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'reinforcement-learning-systems',
        title: 'Reinforcement Learning & Autonomous Systems',
        duration: '190 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'ai-ethics-deployment',
        title: 'AI Ethics, Bias & Production Deployment',
        duration: '170 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Manufacturing & Quality Control'
    ],
    tags: ['electric vehicle', 'ev', 'automotive', 'vinfast', 'battery technology'],
    prerequisites: [
      'Electrical engineering fundamentals',
      'Automotive systems knowledge',
      'Battery technology basics',
      'Control systems understanding'
    ],
    lessons: [
      {
        id: 'ev-powertrain-battery-systems',
        title: 'EV Powertrain & Battery Management Systems',
        duration: '220 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'autonomous-driving-vietnamese-roads',
        title: 'Autonomous Driving Technology for Vietnamese Roads',
        duration: '240 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'ev-charging-infrastructure-v2g',
        title: 'EV Charging Infrastructure & Vehicle-to-Grid Technology',
        duration: '200 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'ev-manufacturing-quality-control',
        title: 'EV Manufacturing & Quality Control Systems',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Regulatory Compliance'
    ],
    tags: ['blockchain', 'defi', 'smart contracts', 'cryptocurrency', 'nft', 'fintech'],
    prerequisites: [
      'Programming experience (Solidity, JavaScript)',
      'Cryptography basics',
      'Financial technology understanding',
      'Web3 development concepts'
    ],
    lessons: [
      {
        id: 'blockchain-fundamentals-cryptocurrency',
        title: 'Blockchain Fundamentals & Cryptocurrency Technology',
        duration: '200 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'smart-contracts-ethereum-development',
        title: 'Smart Contracts & Ethereum Development',
        duration: '240 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'defi-protocols-yield-farming',
        title: 'DeFi Protocols & Yield Farming Strategies',
        duration: '220 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'nft-metaverse-applications',
        title: 'NFT Development & Metaverse Applications',
        duration: '200 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'blockchain-regulatory-compliance',
        title: 'Blockchain Regulatory Compliance & Vietnamese Fintech',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Healthcare Technology'
    ],
    tags: ['biomedical engineering', 'medical devices', 'healthcare', 'biosignals', 'surgical robotics'],
    prerequisites: [
      'Engineering fundamentals',
      'Biology và anatomy knowledge',
      'Signal processing basics',
      'Medical device regulations understanding'
    ],
    lessons: [
      {
        id: 'medical-device-design-development',
        title: 'Medical Device Design & Development Process',
        duration: '240 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'biosignal-processing-analysis',
        title: 'Biosignal Processing & Medical Data Analysis',
        duration: '220 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'regenerative-medicine-tissue-engineering',
        title: 'Regenerative Medicine & Tissue Engineering',
        duration: '200 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'surgical-robotics-automation',
        title: 'Surgical Robotics & Medical Automation Systems',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Environmental Machine Learning'
    ],
    tags: ['environmental science', 'data science', 'climate', 'remote sensing', 'gis'],
    prerequisites: [
      'Data science fundamentals',
      'Python programming',
      'Statistics và machine learning',
      'Environmental science basics'
    ],
    lessons: [
      {
        id: 'climate-data-analysis-modeling',
        title: 'Climate Data Analysis & Environmental Modeling',
        duration: '200 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'air-water-quality-monitoring',
        title: 'Air & Water Quality Monitoring Systems',
        duration: '220 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'satellite-remote-sensing-gis',
        title: 'Satellite Remote Sensing & GIS Applications',
        duration: '200 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'environmental-machine-learning',
        title: 'Machine Learning for Environmental Prediction',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Sustainable Food Production'
    ],
    tags: ['food technology', 'food safety', 'fermentation', 'molecular gastronomy', 'sustainability'],
    prerequisites: [
      'Chemistry fundamentals',
      'Microbiology basics',
      'Food science knowledge',
      'Quality control understanding'
    ],
    lessons: [
      {
        id: 'food-safety-quality-control',
        title: 'Food Safety & Quality Control Systems',
        duration: '180 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'fermentation-technology-vietnamese-foods',
        title: 'Fermentation Technology & Traditional Vietnamese Foods',
        duration: '200 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'molecular-gastronomy-food-innovation',
        title: 'Molecular Gastronomy & Food Innovation',
        duration: '160 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'sustainable-food-production',
        title: 'Sustainable Food Production & Supply Chain',
        duration: '180 phút',
        difficulty: 'Trung bình'
      }
    ]
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
      'Avionics & Flight Control'
    ],
    tags: ['aerospace engineering', 'aviation', 'satellite', 'space', 'avionics'],
    prerequisites: [
      'Engineering fundamentals',
      'Physics và mathematics',
      'Fluid dynamics understanding',
      'Control systems knowledge'
    ],
    lessons: [
      {
        id: 'aircraft-design-aerodynamics',
        title: 'Aircraft Design & Aerodynamics Engineering',
        duration: '240 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'satellite-technology-communication',
        title: 'Satellite Technology & Communication Systems',
        duration: '220 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'space-mission-planning-systems',
        title: 'Space Mission Planning & Systems Engineering',
        duration: '200 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'avionics-flight-control-systems',
        title: 'Avionics & Flight Control Systems',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Environmental Applications'
    ],
    tags: ['nanotechnology', 'nanomaterials', 'quantum devices', 'nanoelectronics', 'biomedical'],
    prerequisites: [
      'Chemistry và physics fundamentals',
      'Materials science knowledge',
      'Quantum mechanics basics',
      'Laboratory safety protocols'
    ],
    lessons: [
      {
        id: 'nanomaterials-synthesis-characterization',
        title: 'Nanomaterials Synthesis & Characterization',
        duration: '195 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'nanoelectronics-quantum-devices',
        title: 'Nanoelectronics & Quantum Devices',
        duration: '210 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'biomedical-nanotechnology',
        title: 'Biomedical Nanotechnology & Drug Delivery',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'environmental-nanotechnology',
        title: 'Environmental Nanotechnology & Sustainable Applications',
        duration: '165 phút',
        difficulty: 'Trung bình'
      }
    ]
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
      'Problem-solving mindset'
    ],
    lessons: [
      {
        id: 'python-basics',
        title: 'Python Basics & Syntax Fundamentals',
        duration: '120 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'data-structures-algorithms',
        title: 'Data Structures & Algorithms in Python',
        duration: '180 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'web-development-flask',
        title: 'Web Development with Flask & Django',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'data-science-ai-applications',
        title: 'Data Science & AI Applications with Python',
        duration: '120 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Problem-solving interest'
    ],
    lessons: [
      {
        id: 'scratch-introduction',
        title: 'Scratch Introduction & Visual Programming Concepts',
        duration: '60 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'animation-storytelling',
        title: 'Animation & Interactive Storytelling',
        duration: '90 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'game-development-scratch',
        title: 'Game Development with Scratch',
        duration: '120 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'advanced-scratch-projects',
        title: 'Advanced Scratch Projects & Sharing',
        duration: '30 phút',
        difficulty: 'Trung bình'
      }
    ]
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
      'Problem-solving skills'
    ],
    lessons: [
      {
        id: 'arduino-setup',
        title: 'Arduino Setup & Development Environment',
        duration: '60 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'led-digital-outputs',
        title: 'LED Control & Digital Outputs',
        duration: '90 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'arduino-inputs',
        title: 'Arduino Inputs & Sensor Integration',
        duration: '90 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'arduino-sensors',
        title: 'Advanced Sensors & Data Processing',
        duration: '90 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'arduino-communication',
        title: 'Communication & Networking Protocols',
        duration: '90 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Autonomous Navigation'
    ],
    tags: ['robotics', 'ai', 'automation', 'control'],
    prerequisites: [
      'Programming fundamentals',
      'Basic electronics',
      'Mathematical thinking',
      'Problem-solving skills'
    ],
    lessons: [
      {
        id: 'robotics-fundamentals',
        title: 'Robotics Fundamentals & Components',
        duration: '120 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'robot-programming-control',
        title: 'Robot Programming & Motion Control',
        duration: '150 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'sensors-computer-vision',
        title: 'Sensors & Computer Vision in Robotics',
        duration: '150 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'autonomous-navigation-ai',
        title: 'Autonomous Navigation & AI Integration',
        duration: '120 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Science Projects'
    ],
    tags: ['stem', 'science', 'math', 'engineering'],
    prerequisites: [
      'Curiosity and interest in science',
      'Basic math skills',
      'Safety awareness'
    ],
    lessons: [
      {
        id: 'stem-introduction',
        title: 'STEM Introduction & Scientific Method',
        duration: '60 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'fun-physics-experiments',
        title: 'Fun Physics Experiments & Principles',
        duration: '120 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'coding-for-kids',
        title: 'Coding for Kids & Computational Thinking',
        duration: '90 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'engineering-challenges',
        title: 'Engineering Challenges & Design Thinking',
        duration: '120 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'math-in-real-life',
        title: 'Math in Real Life Applications',
        duration: '60 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'art-meets-science',
        title: 'Art Meets Science Creative Projects',
        duration: '60 phút',
        difficulty: 'Cơ bản'
      }
    ]
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
      'Analytics'
    ],
    tags: [
      'content creator',
      'social media',
      'youtube',
      'tiktok',
      'monetization'
    ],
    prerequisites: [
      'Smartphone với camera tốt',
      'Tư duy sáng tạo',
      'Khả năng storytelling',
      'Consistency mindset'
    ],
    lessons: [
      {
        id: 'social-media-personal-branding',
        title: 'Social Media Strategy & Personal Branding',
        duration: '180 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'video-production-editing-mastery',
        title: 'Video Production & Editing Mastery',
        duration: '240 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'livestreaming-community-building',
        title: 'Livestreaming & Community Building',
        duration: '200 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'monetization-strategies',
        title: 'Monetization Strategies (YouTube, TikTok, Facebook)',
        duration: '220 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'brand-partnerships-sponsorships',
        title: 'Brand Partnerships & Sponsorship Deals',
        duration: '180 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'content-calendar-consistency',
        title: 'Content Calendar & Consistency Systems',
        duration: '160 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'analytics-growth-optimization',
        title: 'Analytics & Growth Optimization',
        duration: '200 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'legal-business-content-creation',
        title: 'Legal & Business Aspects of Content Creation',
        duration: '150 phút',
        difficulty: 'Nâng cao'
      }
    ]
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
      'Crisis Support'
    ],
    tags: [
      'teen wellness',
      'mental health',
      'stress management',
      'mindfulness',
      'emotional intelligence'
    ],
    prerequisites: [
      'Sự cởi mở về cảm xúc',
      'Cam kết thực hành hàng ngày',
      'Hỗ trợ từ người lớn',
      'Môi trường an toàn'
    ],
    lessons: [
      {
        id: 'understanding-stress-anxiety',
        title: 'Understanding Stress & Anxiety Management',
        duration: '120 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'mindfulness-meditation-techniques',
        title: 'Mindfulness & Meditation Techniques',
        duration: '90 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'digital-wellness-screen-time',
        title: 'Digital Wellness & Screen Time Balance',
        duration: '100 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'building-healthy-relationships',
        title: 'Building Healthy Relationships',
        duration: '110 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'study-life-balance',
        title: 'Study-Life Balance Strategies',
        duration: '95 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'emotional-intelligence-development',
        title: 'Emotional Intelligence Development',
        duration: '105 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'crisis-support-help-seeking',
        title: 'Crisis Support & When to Seek Help',
        duration: '75 phút',
        difficulty: 'Nâng cao'
      }
    ]
  },

  // Young Entrepreneur Bootcamp - 2025 Trending
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
      'Legal Compliance'
    ],
    tags: [
      'startup',
      'entrepreneurship',
      'business model',
      'mvp',
      'fundraising',
      'young entrepreneur',
      'vietnam startup'
    ],
    prerequisites: [
      'Tư duy logic và sáng tạo',
      'Đam mê kinh doanh',
      'Kỹ năng học hỏi nhanh',
      'Tinh thần chấp nhận thử thách'
    ],
    lessons: [
      {
        id: 'startup-mindset-fundamentals',
        title: 'Tư Duy Khởi Nghiệp & Cơ Hội Thị Trường',
        duration: '180 phút',
        difficulty: 'Cơ bản'
      },
      {
        id: 'business-model-validation',
        title: 'Xây Dựng & Kiểm Chứng Business Model',
        duration: '210 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'digital-marketing-growth',
        title: 'Digital Marketing & Growth Hacking cho Startup',
        duration: '195 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'funding-investment-preparation',
        title: 'Gọi Vốn & Chuẩn Bị Đầu Tư',
        duration: '240 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'team-building-leadership',
        title: 'Xây Dựng Đội Ngũ & Leadership Skills',
        duration: '180 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'scaling-operations',
        title: 'Scale Operations & Business Growth',
        duration: '225 phút',
        difficulty: 'Nâng cao'
      },
      {
        id: 'startup-legal-compliance',
        title: 'Pháp Lý & Compliance cho Startup',
        duration: '165 phút',
        difficulty: 'Trung bình'
      }
    ]
  }
];

// Helper functions cho navigation
export function getModuleById(id: string): ModuleNavigation | undefined {
  return moduleNavigation.find((module) => module.id === id);
}

export function getLessonById(
  moduleId: string,
  lessonId: string
): LessonNavigation | undefined {
  const moduleData = getModuleById(moduleId);
  return moduleData?.lessons.find((lesson) => lesson.id === lessonId);
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
  currentLessonId: string
): LessonNavigation | undefined {
  const moduleData = getModuleById(moduleId);
  if (!moduleData) return undefined;

  const currentIndex = moduleData.lessons.findIndex(
    (lesson) => lesson.id === currentLessonId
  );
  if (currentIndex === -1 || currentIndex === moduleData.lessons.length - 1)
    return undefined;

  return moduleData.lessons[currentIndex + 1];
}

export function getPreviousLesson(
  moduleId: string,
  currentLessonId: string
): LessonNavigation | undefined {
  const moduleData = getModuleById(moduleId);
  if (!moduleData) return undefined;

  const currentIndex = moduleData.lessons.findIndex(
    (lesson) => lesson.id === currentLessonId
  );
  if (currentIndex <= 0) return undefined;

  return moduleData.lessons[currentIndex - 1];
}

export function calculateModuleProgress(moduleId: string): number {
  const moduleData = getModuleById(moduleId);
  if (!moduleData) return 0;

  const completedLessons = moduleData.lessons.filter(
    (lesson) => lesson.completed
  ).length;
  return Math.round((completedLessons / moduleData.lessons.length) * 100);
}
