export interface ModuleNavigation {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  color: string;
  lessons: LessonNavigation[];
  totalDuration: string;
  difficulty: string;
  prerequisites: string[];
}

export interface LessonNavigation {
  id: string;
  title: string;
  duration: string;
  difficulty: string;
  completed?: boolean;
}

export const moduleNavigation: ModuleNavigation[] = [
  // Core Modules (outside /learning/ folder)
  {
    id: 'city',
    title: 'Địa Lý Việt Nam',
    description:
      'Khám phá 34 tỉnh thành Việt Nam qua bản đồ tương tác, tìm hiểu văn hóa, lịch sử và địa lý của từng vùng miền',
    category: 'Địa Lý & Văn Hóa',
    icon: 'MapPin',
    color: 'from-emerald-500 to-teal-500',
    totalDuration: 'Không giới hạn',
    difficulty: 'Tất cả mức độ',
    prerequisites: [],
    lessons: []
  },
  {
    id: 'ai',
    title: 'AI Của Tôi',
    description:
      'Hướng dẫn thực hành sử dụng AI trong công việc, học tập và cuộc sống hàng ngày với 6 danh mục chính',
    category: 'Trí Tuệ Nhân Tạo',
    icon: 'Brain',
    color: 'from-blue-500 to-indigo-500',
    totalDuration: 'Không giới hạn',
    difficulty: 'Tất cả mức độ',
    prerequisites: [],
    lessons: []
  },
  
  // Professional Learning Modules (in /learning/ folder)
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    description:
      'Master digital marketing strategies, SEO optimization, social media marketing, và content creation cho modern businesses',
    category: 'Business & Marketing',
    icon: 'TrendingUp',
    color: 'from-blue-500 to-indigo-500',
    totalDuration: '480 phút',
    difficulty: 'Trung bình',
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
    id: 'green-technology',
    title: 'Green Technology & Sustainability',
    description:
      'Explore sustainable technology solutions, renewable energy systems, environmental engineering, và clean tech innovations',
    category: 'Technology & Environment',
    icon: 'Leaf',
    color: 'from-green-500 to-emerald-500',
    totalDuration: '360 phút',
    difficulty: 'Trung bình',
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
  {
    id: 'mental-health-tech',
    title: 'Mental Health Technology',
    description:
      'Digital mental health solutions, therapeutic apps, AI-powered wellness platforms, và technology-assisted therapy approaches',
    category: 'Healthcare Technology',
    icon: 'Brain',
    color: 'from-purple-500 to-pink-500',
    totalDuration: '300 phút',
    difficulty: 'Trung bình',
    prerequisites: [
      'Basic psychology understanding',
      'Technology literacy',
      'Empathy và communication skills'
    ],
    lessons: [
      {
        id: 'digital-therapy-platforms',
        title: 'Digital Therapy Platforms & Teletherapy Solutions',
        duration: '150 phút',
        difficulty: 'Trung bình'
      },
      {
        id: 'ai-mental-health-applications',
        title: 'AI Mental Health Applications & Wellness Tech',
        duration: '150 phút',
        difficulty: 'Nâng cao'
      }
    ]
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy & FinTech',
    description:
      'Personal finance management, investment strategies, cryptocurrency understanding, và modern financial technology applications',
    category: 'Finance & Technology',
    icon: 'DollarSign',
    color: 'from-amber-500 to-orange-500',
    totalDuration: '330 phút',
    difficulty: 'Trung bình',
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
    id: 'game-development',
    title: 'Game Development & Interactive Media',
    description:
      'Game design principles, development frameworks, interactive storytelling, và modern game development technologies',
    category: 'Creative Technology',
    icon: 'Gamepad2',
    color: 'from-purple-500 to-indigo-500',
    totalDuration: '360 phút',
    difficulty: 'Nâng cao',
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
    id: 'ai-art-creative-tech',
    title: 'AI Art & Creative Technology',
    description:
      'AI-powered creative tools, digital art generation, creative workflows, và emerging technologies trong art và design',
    category: 'Creative Technology',
    icon: 'Palette',
    color: 'from-pink-500 to-purple-500',
    totalDuration: '270 phút',
    difficulty: 'Trung bình',
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
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    description:
      'Cybersecurity fundamentals, ethical hacking techniques, penetration testing, và advanced security defense strategies',
    category: 'Security & Technology',
    icon: 'Shield',
    color: 'from-red-500 to-orange-500',
    totalDuration: '380 phút',
    difficulty: 'Nâng cao',
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
    id: 'biotechnology',
    title: 'Biotechnology & Life Sciences',
    description:
      'Genetic engineering, medical biotechnology, drug discovery, và cutting-edge life sciences applications',
    category: 'Life Sciences & Technology',
    icon: 'Dna',
    color: 'from-emerald-500 to-teal-500',
    totalDuration: '330 phút',
    difficulty: 'Nâng cao',
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
  
  // Programming & STEM Modules (in /learning/ folder)
  {
    id: 'python',
    title: 'Python Programming',
    description:
      'Học lập trình Python từ cơ bản đến nâng cao, ứng dụng trong data science, web development và AI',
    category: 'Programming & Development',
    icon: 'Code',
    color: 'from-yellow-500 to-green-500',
    totalDuration: '600 phút',
    difficulty: 'Cơ bản đến Nâng cao',
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
    id: 'arduino',
    title: 'Arduino & IoT Programming',
    description:
      'Lập trình Arduino và phát triển hệ thống IoT, từ cơ bản đến các dự án thông minh phức tạp',
    category: 'Programming & Development',
    icon: 'Cpu',
    color: 'from-cyan-500 to-blue-500',
    totalDuration: '420 phút',
    difficulty: 'Trung bình',
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
    id: 'scratch',
    title: 'Scratch Programming',
    description:
      'Lập trình trực quan với Scratch, tạo game và ứng dụng tương tác cho người mới bắt đầu',
    category: 'Programming & Development',
    icon: 'Blocks',
    color: 'from-orange-500 to-red-500',
    totalDuration: '300 phút',
    difficulty: 'Cơ bản',
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
  {
    id: 'stem',
    title: 'STEM Education',
    description:
      'Khoa học, Công nghệ, Kỹ thuật và Toán học thông qua các thí nghiệm thực hành và dự án sáng tạo',
    category: 'STEM & Science',
    icon: 'TestTube',
    color: 'from-purple-500 to-pink-500',
    totalDuration: '480 phút',
    difficulty: 'Cơ bản đến Trung bình',
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
  {
    id: 'robotics',
    title: 'Robotics',
    description:
      'Thiết kế và lập trình robot, từ robot đơn giản đến hệ thống robot thông minh và tự động',
    category: 'Programming & Development',
    icon: 'Bot',
    color: 'from-indigo-500 to-purple-500',
    totalDuration: '540 phút',
    difficulty: 'Nâng cao',
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
  return moduleNavigation.filter(
    (moduleData) => moduleData.category === category
  );
}

export function getAllCategories(): string[] {
  const categories = moduleNavigation.map((moduleData) => moduleData.category);
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
