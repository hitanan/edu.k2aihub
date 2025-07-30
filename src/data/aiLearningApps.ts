// AI Learning Apps Module Data
// Comprehensive AI learning applications for K2AiHub education platform

export interface AILearningApp {
  id: string;
  name: string;
  description: string;
  category: 'math' | 'language' | 'writing' | 'coding' | 'research' | 'general';
  platform: 'Web' | 'Mobile' | 'Both';
  pricing: 'Free' | 'Freemium' | 'Paid';
  features: string[];
  bestFor: string[];
  limitations: string[];
  howToUse: HowToUseStep[];
  videoDemo?: string;
  websiteUrl: string;
  imageUrl: string;
  rating: number;
  downloads?: string;
  languages: string[];
  ageGroup: string;
  subjects: string[];
}

export interface HowToUseStep {
  step: number;
  title: string;
  description: string;
  tips: string[];
  screenshot?: string;
}

export const aiLearningApps: AILearningApp[] = [
  {
    id: 'photomath',
    name: 'PhotoMath',
    description:
      'Ứng dụng AI giải toán bằng cách chụp ảnh, có thể giải từ số học cơ bản đến giải tích nâng cao với lời giải chi tiết từng bước.',
    category: 'math',
    platform: 'Both',
    pricing: 'Freemium',
    features: [
      'Giải toán bằng camera AI',
      'Lời giải từng bước chi tiết',
      'Đồ thị tương tác',
      'Lịch sử bài giải',
      'Calculator khoa học',
      'Word problems solver',
      'Geometry solver',
      'Statistics và probability'
    ],
    bestFor: [
      'Học sinh THCS, THPT',
      'Sinh viên đại học',
      'Ôn tập kiểm tra',
      'Làm bài tập về nhà',
      'Hiểu phương pháp giải',
      'Kiểm tra đáp án'
    ],
    limitations: [
      'Phiên bản miễn phí giới hạn lời giải',
      'Không thay thế việc học hiểu bản chất',
      'Đôi khi nhận dạng chữ viết tay kém',
      'Cần kết nối internet cho tính năng cao cấp'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Tải và Cài Đặt App',
        description:
          'Download PhotoMath từ App Store hoặc Google Play Store, tạo tài khoản miễn phí',
        tips: [
          'Cho phép quyền truy cập camera',
          'Đăng ký tài khoản để sync dữ liệu',
          'Chọn ngôn ngữ tiếng Việt nếu có'
        ]
      },
      {
        step: 2,
        title: 'Chụp Ảnh Bài Toán',
        description:
          'Đưa camera đến phương trình cần giải, đảm bảo ảnh rõ nét và đúng focus',
        tips: [
          'Giữ camera ổn định',
          'Đảm bảo ánh sáng đủ',
          'Khung hình chỉ chứa một phương trình',
          'Viết số rõ ràng, tránh nét mờ'
        ]
      },
      {
        step: 3,
        title: 'Xem Kết Quả và Lời Giải',
        description:
          'App sẽ hiển thị đáp án ngay lập tức, tap vào "Steps" để xem lời giải chi tiết',
        tips: [
          'Đọc kỹ từng bước giải',
          'Hiểu logic đằng sau mỗi bước',
          'Ghi chép lại phương pháp',
          'Thử làm bài tương tự để kiểm tra hiểu bài'
        ]
      },
      {
        step: 4,
        title: 'Sử Dụng Tính Năng Nâng Cao',
        description:
          'Khám phá đồ thị tương tác, calculator và lịch sử bài giải',
        tips: [
          'Sử dụng đồ thị để hiểu hàm số',
          'Lưu bài giải quan trọng',
          'Ôn tập qua lịch sử',
          'Thử calculator cho tính toán nhanh'
        ]
      }
    ],
    videoDemo: 'https://www.youtube.com/watch?v=pyjZ58tTWUI',
    websiteUrl: 'https://photomath.com/',
    imageUrl:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.8,
    downloads: '100M+',
    languages: ['Tiếng Việt', 'English', '60+ languages'],
    ageGroup: '12-25 tuổi',
    subjects: ['Toán học', 'Đại số', 'Hình học', 'Giải tích', 'Thống kê']
  },
  {
    id: 'gauth',
    name: 'Gauth (Gauthmath)',
    description:
      'AI tutor giải toán 24/7 với camera và kết nối với giáo viên thật. Hỗ trợ từ toán cơ bản đến toán đại học.',
    category: 'math',
    platform: 'Both',
    pricing: 'Freemium',
    features: [
      'AI solver với camera',
      'Kết nối giáo viên thật',
      'Giải thích bằng video',
      'Q&A community',
      'Live tutoring sessions',
      'Step-by-step solutions',
      'Graphing calculator',
      'Homework help 24/7'
    ],
    bestFor: [
      'Học sinh cần trợ giúp tức thì',
      'Các bài toán phức tạp',
      'Học 1-on-1 với tutor',
      'Chuẩn bị thi đại học',
      'International math competitions',
      'AP và IB programs'
    ],
    limitations: [
      'Cần credits cho live tutoring',
      'Giáo viên chủ yếu nói tiếng Anh',
      'Một số tính năng cần trả phí',
      'Chất lượng tùy thuộc tutor'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Đăng Ký Tài Khoản',
        description: 'Tạo tài khoản Gauth và chọn level toán học phù hợp',
        tips: [
          'Chọn đúng grade level',
          'Complete profile để có recommendations tốt hơn',
          'Link với Google/Facebook để dễ login',
          'Set notification preferences'
        ]
      },
      {
        step: 2,
        title: 'Chụp Ảnh Hoặc Nhập Câu Hỏi',
        description:
          'Sử dụng camera để chụp bài toán hoặc type câu hỏi trực tiếp',
        tips: [
          'Ensure good lighting cho camera',
          'Crop ảnh chỉ chứa question cần thiết',
          'Type equation nếu handwriting unclear',
          'Add context nếu cần thiết'
        ]
      },
      {
        step: 3,
        title: 'Nhận AI Solution',
        description:
          'AI sẽ analyze và provide detailed solution trong vài giây',
        tips: [
          'Review step-by-step carefully',
          'Understand reasoning behind each step',
          'Try similar problems để practice',
          'Rate solution quality để improve AI'
        ]
      },
      {
        step: 4,
        title: 'Kết Nối Với Tutor (Nếu Cần)',
        description:
          'Nếu AI solution không đủ, connect với live tutor để giải thích chi tiết',
        tips: [
          'Prepare specific questions',
          'Be ready với pen và paper',
          'Ask for alternative methods',
          'Request practice problems'
        ]
      }
    ],
    videoDemo: 'https://www.youtube.com/watch?v=Slqw4wC_ZN4',
    websiteUrl: 'https://www.gauthmath.com/',
    imageUrl:
      'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.6,
    downloads: '50M+',
    languages: ['English', 'Español', 'Português', 'हिन्दी'],
    ageGroup: '13-22 tuổi',
    subjects: ['Mathematics', 'Calculus', 'Statistics', 'Physics', 'Chemistry']
  },
  {
    id: 'socratic',
    name: 'Socratic by Google',
    description:
      'AI-powered homework helper cho nhiều môn học. Sử dụng camera và voice để giải thích concepts bằng cách dễ hiểu.',
    category: 'general',
    platform: 'Mobile',
    pricing: 'Free',
    features: [
      'Multi-subject support',
      'Visual explanations',
      'Speech recognition',
      'Curated learning resources',
      'Step-by-step guides',
      'Video tutorials',
      'Expert-written explanations',
      'Related topics suggestions'
    ],
    bestFor: [
      'Học sinh THCS, THPT',
      'Multiple subjects cùng lúc',
      'Visual learners',
      'Hiểu concepts phức tạp',
      'Quick homework help',
      'Study groups'
    ],
    limitations: [
      'Chỉ có trên mobile',
      'Không có advanced math như PhotoMath',
      'Limited language support',
      'Cần Google account'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Install và Setup',
        description:
          'Download Socratic từ App Store/Play Store và đăng nhập bằng Google account',
        tips: [
          'Allow camera và microphone permissions',
          'Choose subjects bạn đang học',
          'Set grade level appropriately',
          'Enable notifications for tips'
        ]
      },
      {
        step: 2,
        title: 'Ask Your Question',
        description: 'Chụp ảnh câu hỏi, nói câu hỏi, hoặc type trực tiếp',
        tips: [
          'Make sure text is clear and readable',
          'Speak clearly nếu dùng voice',
          'Include context nếu necessary',
          'Try rephrasing nếu no results'
        ]
      },
      {
        step: 3,
        title: 'Explore Results',
        description:
          'Browse through explanations, videos, và related resources',
        tips: [
          'Start với overview explanation',
          'Watch videos for complex topics',
          'Explore related concepts',
          'Bookmark useful resources'
        ]
      },
      {
        step: 4,
        title: 'Deepen Understanding',
        description: 'Sử dụng suggested resources để học deeper về topic',
        tips: [
          'Practice với similar problems',
          'Read expert-written guides',
          'Connect concepts to real world',
          'Share findings với classmates'
        ]
      }
    ],
    videoDemo: 'https://www.youtube.com/watch?v=vZ1tQZ8glXg',
    websiteUrl: 'https://socratic.org/',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.5,
    downloads: '10M+',
    languages: ['English'],
    ageGroup: '13-18 tuổi',
    subjects: [
      'Math',
      'Science',
      'History',
      'English',
      'Chemistry',
      'Biology',
      'Physics',
      'Literature'
    ]
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description:
      'AI writing assistant giúp cải thiện grammar, spelling, style và tone. Essential tool cho academic writing và professional communication.',
    category: 'writing',
    platform: 'Both',
    pricing: 'Freemium',
    features: [
      'Real-time grammar checking',
      'Spelling và punctuation correction',
      'Style và tone suggestions',
      'Plagiarism detection (Premium)',
      'Vocabulary enhancement',
      'Clarity improvements',
      'Writing goals setting',
      'Performance insights'
    ],
    bestFor: [
      'Academic essay writing',
      'Professional emails',
      'Research papers',
      'Creative writing',
      'Non-native English speakers',
      'Business communications'
    ],
    limitations: [
      'Premium features cần subscription',
      'Chủ yếu support English',
      'Đôi khi suggest changes không cần thiết',
      'Không thay thế human proofreading hoàn toàn'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Sign Up và Install',
        description:
          'Tạo Grammarly account và install browser extension hoặc mobile app',
        tips: [
          'Install browser extension for seamless integration',
          'Download desktop app for offline use',
          'Set up mobile keyboard',
          'Connect với các platforms you use (Google Docs, etc.)'
        ]
      },
      {
        step: 2,
        title: 'Set Writing Goals',
        description:
          'Configure audience, formality, domain, và intent cho writing project',
        tips: [
          'Choose appropriate audience (general, knowledgeable, expert)',
          'Set formality level (informal, neutral, formal)',
          'Select domain (academic, business, creative, etc.)',
          'Define intent (inform, describe, convince, tell a story)'
        ]
      },
      {
        step: 3,
        title: 'Write và Review Suggestions',
        description:
          'Viết content và review real-time suggestions từ Grammarly AI',
        tips: [
          "Don't accept all suggestions blindly",
          'Understand WHY each correction is suggested',
          'Learn from explanations để improve',
          'Keep your unique voice và style'
        ]
      },
      {
        step: 4,
        title: 'Analyze Performance',
        description:
          'Review writing performance insights và track improvement over time',
        tips: [
          'Check weekly writing reports',
          'Monitor accuracy trends',
          'Identify common mistake patterns',
          'Set goals for improvement'
        ]
      }
    ],
    videoDemo: 'https://www.youtube.com/watch?v=FJ_ZWAUO78s',
    websiteUrl: 'https://www.grammarly.com/',
    imageUrl:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.6,
    downloads: '50M+',
    languages: ['English'],
    ageGroup: '16+ tuổi',
    subjects: [
      'English Writing',
      'Academic Writing',
      'Business Communication',
      'Creative Writing'
    ]
  },
  {
    id: 'questionai',
    name: 'Question.AI',
    description:
      'AI-powered homework solver và tutor cho tất cả subjects. Upload ảnh câu hỏi và nhận detailed explanations với multiple solution methods.',
    category: 'general',
    platform: 'Both',
    pricing: 'Freemium',
    features: [
      'Multi-subject AI solver',
      'Image recognition technology',
      'Step-by-step explanations',
      'Multiple solution methods',
      '24/7 availability',
      'Fast response time',
      'Essay writing assistance',
      'Exam preparation tools'
    ],
    bestFor: [
      'Cross-subject homework help',
      'Quick answer verification',
      'Learning different approaches',
      'Time-sensitive assignments',
      'Self-study sessions',
      'Exam preparation'
    ],
    limitations: [
      'Quality varies by subject',
      'Limited free queries per day',
      'Explanations sometimes too brief',
      'May not cover very specialized topics'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Create Account',
        description: 'Sign up for Question.AI account và verify email address',
        tips: [
          'Use school email nếu có student discount',
          'Complete profile for better recommendations',
          "Choose subjects you're studying",
          'Set notification preferences'
        ]
      },
      {
        step: 2,
        title: 'Upload Question',
        description: 'Chụp ảnh hoặc type câu hỏi cần giải đáp',
        tips: [
          'Ensure question is clearly visible',
          'Include all relevant context',
          'Specify subject nếu ambiguous',
          'Add any special requirements'
        ]
      },
      {
        step: 3,
        title: 'Review AI Response',
        description: 'Đọc kỹ explanation và solution methods provided by AI',
        tips: [
          'Compare different solution approaches',
          'Understand logic behind each step',
          'Note key concepts và formulas',
          'Practice similar problems'
        ]
      },
      {
        step: 4,
        title: 'Follow Up Learning',
        description: 'Use provided resources để deepen understanding of topic',
        tips: [
          'Explore related topics',
          'Practice with variations',
          'Create study notes',
          'Teach concept to someone else'
        ]
      }
    ],
    videoDemo: 'https://www.youtube.com/shorts/EJxCDJmuMYY',
    websiteUrl: 'https://www.question.ai/',
    imageUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.3,
    downloads: '5M+',
    languages: ['English', 'Español', 'Français'],
    ageGroup: '14-25 tuổi',
    subjects: ['All academic subjects', 'STEM', 'Liberal Arts', 'Test Prep']
  },
  {
    id: 'duolingo',
    name: 'Duolingo',
    description:
      "AI-powered language learning platform với personalized lessons, speech recognition, và gamification. World's most popular language learning app.",
    category: 'language',
    platform: 'Both',
    pricing: 'Freemium',
    features: [
      'AI-powered personalization',
      'Speech recognition technology',
      'Gamified learning experience',
      'Stories và podcasts',
      'Offline mode',
      'Progress tracking',
      'Social learning features',
      'Adaptive difficulty'
    ],
    bestFor: [
      'Beginners learning new languages',
      'Maintaining language skills',
      'Daily practice routine',
      'Visual và auditory learners',
      'Busy schedule learners',
      'Competitive learners'
    ],
    limitations: [
      'Limited conversation practice',
      'Ads trong free version',
      'Pronunciation feedback có thể cải thiện',
      'Không phù hợp advanced learners hoàn toàn'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Choose Language và Goal',
        description: 'Select ngôn ngữ muốn học và set daily time commitment',
        tips: [
          'Start with realistic daily goals (5-15 minutes)',
          'Take placement test nếu có prior knowledge',
          'Choose learning path phù hợp với needs',
          'Set reminder notifications'
        ]
      },
      {
        step: 2,
        title: 'Complete Daily Lessons',
        description:
          'Practice với varied exercise types: matching, speaking, listening',
        tips: [
          'Focus on pronunciation exercises',
          'Use hints sparingly để challenge yourself',
          'Review mistakes trong practice section',
          'Maintain streak để build habit'
        ]
      },
      {
        step: 3,
        title: 'Engage With Stories',
        description:
          'Read interactive stories để improve comprehension và vocabulary',
        tips: [
          'Read stories aloud pentru pronunciation',
          'Look up unfamiliar words',
          'Discuss stories với other learners',
          'Apply new vocabulary trong conversations'
        ]
      },
      {
        step: 4,
        title: 'Practice Speaking',
        description:
          'Use speaking exercises và conversation features để improve fluency',
        tips: [
          'Practice într-un quiet environment',
          'Repeat sentences multiple times',
          'Record yourself để compare pronunciation',
          'Join Duolingo events pentru real conversation'
        ]
      }
    ],
    videoDemo: 'https://www.youtube.com/watch?v=P3ZTxke4AOU',
    websiteUrl: 'https://www.duolingo.com/',
    imageUrl:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.7,
    downloads: '500M+',
    languages: ['40+ languages including Vietnamese'],
    ageGroup: '8+ tuổi',
    subjects: [
      'Foreign Languages',
      'English',
      'Spanish',
      'French',
      'German',
      'Japanese',
      'Korean',
      'Chinese'
    ]
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description:
      'AI pair programmer powered by OpenAI Codex. Provides code suggestions, completes functions, và explains code trong real-time.',
    category: 'coding',
    platform: 'Web',
    pricing: 'Paid',
    features: [
      'Code completion và suggestions',
      'Multi-language support',
      'Context-aware recommendations',
      'Code explanation',
      'Test generation',
      'Documentation writing',
      'Refactoring assistance',
      'IDE integration'
    ],
    bestFor: [
      'Programming students',
      'Software developers',
      'Code learning và understanding',
      'Rapid prototyping',
      'Learning new frameworks',
      'Code documentation'
    ],
    limitations: [
      'Requires subscription after trial',
      'Cần GitHub account',
      'Sometimes suggests inefficient code',
      'Privacy concerns với proprietary code'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Setup GitHub Copilot',
        description:
          'Install extension trong preferred IDE và authenticate với GitHub account',
        tips: [
          'Available pentru VS Code, Visual Studio, Neovim, JetBrains',
          'Sign up for student discount nếu eligible',
          'Configure suggestion settings',
          'Read privacy policy pentru code usage'
        ]
      },
      {
        step: 2,
        title: 'Write Code Comments',
        description:
          'Describe what you want to achieve trong natural language comments',
        tips: [
          'Be specific despre function requirements',
          'Include input/output examples',
          'Mention edge cases',
          'Use clear, descriptive language'
        ]
      },
      {
        step: 3,
        title: 'Review Suggestions',
        description:
          "Examine Copilot's code suggestions và choose appropriate ones",
        tips: [
          "Don't accept suggestions blindly",
          'Understand what the code does',
          'Test suggested code thoroughly',
          'Modify suggestions to fit your needs'
        ]
      },
      {
        step: 4,
        title: 'Learn From Code',
        description:
          'Study generated code để understand patterns và improve skills',
        tips: [
          'Ask Copilot to explain complex code',
          'Learn new language features',
          'Understand best practices',
          'Compare multiple solution approaches'
        ]
      }
    ],
    videoDemo: 'https://www.youtube.com/watch?v=EPyyyB23NUU',
    websiteUrl: 'https://github.com/features/copilot',
    imageUrl:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.5,
    downloads: 'N/A (Extension)',
    languages: ['All programming languages'],
    ageGroup: '16+ tuổi',
    subjects: [
      'Computer Science',
      'Software Engineering',
      'Web Development',
      'Data Science',
      'Machine Learning'
    ]
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    description:
      'AI-powered paraphrasing tool và writing assistant. Helps improve clarity, avoid plagiarism, và enhance academic writing style.',
    category: 'writing',
    platform: 'Both',
    pricing: 'Freemium',
    features: [
      'Advanced paraphrasing modes',
      'Grammar và spelling checker',
      'Plagiarism detection',
      'Citation generator',
      'Summarizer tool',
      'Co-Writer feature',
      'Translator (30+ languages)',
      'Chrome extension'
    ],
    bestFor: [
      'Academic paper writing',
      'Content creation',
      'ESL students',
      'Research summarization',
      'Avoiding plagiarism',
      'Improving writing style'
    ],
    limitations: [
      'Limited words in free version',
      'Some paraphrases sound unnatural',
      'May change original meaning',
      'Premium features require subscription'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Select Paraphrasing Mode',
        description:
          'Choose appropriate mode: Standard, Fluency, Formal, Simple, Creative, Expand, Shorten',
        tips: [
          'Standard: balanced changes',
          'Formal: academic tone',
          'Creative: maximum variation',
          'Simple: easier vocabulary',
          'Expand: more detailed',
          'Shorten: concise version'
        ]
      },
      {
        step: 2,
        title: 'Input Text',
        description:
          'Paste or type text you want to paraphrase (up to word limit)',
        tips: [
          'Break long texts into smaller chunks',
          'Ensure original text is grammatically correct',
          'Include context pentru better results',
          'Keep important keywords frozen'
        ]
      },
      {
        step: 3,
        title: 'Review Results',
        description:
          'Examine paraphrased text và make manual adjustments nếu needed',
        tips: [
          'Compare cu original meaning',
          'Check for factual accuracy',
          'Ensure proper citation stil',
          'Verify tone consistency'
        ]
      },
      {
        step: 4,
        title: 'Use Additional Tools',
        description:
          'Leverage Grammar Checker, Plagiarism Detector, và Citation Generator',
        tips: [
          'Run grammar check after paraphrasing',
          'Verify originality cu plagiarism detector',
          'Generate proper citations',
          'Use summarizer pentru long documents'
        ]
      }
    ],
    videoDemo: 'https://www.youtube.com/watch?v=jasrI4XUcNU',
    websiteUrl: 'https://quillbot.com/',
    imageUrl:
      'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    rating: 4.4,
    downloads: '10M+',
    languages: ['English (primary)', '30+ languages for translation'],
    ageGroup: '16+ tuổi',
    subjects: [
      'Academic Writing',
      'Content Creation',
      'Research',
      'English Language Learning'
    ]
  }
];

// Categories for easy filtering
export const aiAppCategories = [
  {
    id: 'math',
    name: 'Toán Học',
    description: 'Ứng dụng AI giải toán, từ cơ bản đến nâng cao',
    icon: '🔢',
    color: 'blue'
  },
  {
    id: 'language',
    name: 'Ngôn Ngữ',
    description: 'Học ngoại ngữ với AI tutor và speech recognition',
    icon: '🗣️',
    color: 'green'
  },
  {
    id: 'writing',
    name: 'Viết & Biên Tập',
    description: 'AI assistant cho writing, grammar, và style improvement',
    icon: '✍️',
    color: 'purple'
  },
  {
    id: 'coding',
    name: 'Lập Trình',
    description: 'AI-powered coding assistance và learning tools',
    icon: '💻',
    color: 'orange'
  },
  {
    id: 'research',
    name: 'Nghiên Cứu',
    description: 'Tools để research, summarize, và analyze information',
    icon: '🔍',
    color: 'teal'
  },
  {
    id: 'general',
    name: 'Tổng Hợp',
    description: 'Multi-subject homework helpers và general AI tutors',
    icon: '🎓',
    color: 'indigo'
  }
];

// Popular app combinations for different learning goals
export const learningPathways = [
  {
    id: 'stem-pathway',
    title: 'STEM Learning Stack',
    description: 'Complete toolkit cho STEM subjects',
    apps: ['photomath', 'gauth', 'socratic', 'github-copilot'],
    bestFor: 'STEM students và computer science learners',
    estimatedTime: 'Daily use, 30-60 minutes combined'
  },
  {
    id: 'language-pathway',
    title: 'Language Mastery Combo',
    description: 'Comprehensive language learning solution',
    apps: ['duolingo', 'grammarly', 'quillbot'],
    bestFor: 'Language learners và international students',
    estimatedTime: 'Daily use, 45-90 minutes combined'
  },
  {
    id: 'academic-writing-pathway',
    title: 'Academic Writing Excellence',
    description: 'Tools pentru high-quality academic writing',
    apps: ['grammarly', 'quillbot', 'questionai'],
    bestFor: 'College students và researchers',
    estimatedTime: 'Project-based, 1-3 hours per assignment'
  },
  {
    id: 'quick-homework-pathway',
    title: 'Quick Homework Helper',
    description: 'Fast solutions pentru daily homework',
    apps: ['photomath', 'socratic', 'questionai'],
    bestFor: 'Middle và high school students',
    estimatedTime: '15-30 minutes per subject'
  }
];

const aiLearningData = {
  aiLearningApps,
  aiAppCategories,
  learningPathways
};

export default aiLearningData;
