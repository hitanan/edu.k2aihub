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
