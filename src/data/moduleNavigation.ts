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
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    description: 'Master digital marketing strategies, SEO optimization, social media marketing, và content creation cho modern businesses',
    category: 'Business & Marketing',
    icon: 'TrendingUp',
    color: 'from-blue-500 to-indigo-500',
    totalDuration: '480 phút',
    difficulty: 'Trung bình',
    prerequisites: ['Basic computer skills', 'Understanding của internet và web browsers'],
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
    description: 'Explore sustainable technology solutions, renewable energy systems, environmental engineering, và clean tech innovations',
    category: 'Technology & Environment',
    icon: 'Leaf',
    color: 'from-green-500 to-emerald-500',
    totalDuration: '360 phút',
    difficulty: 'Trung bình',
    prerequisites: ['Basic science knowledge', 'Environmental awareness', 'Problem-solving mindset'],
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
    description: 'Digital mental health solutions, therapeutic apps, AI-powered wellness platforms, và technology-assisted therapy approaches',
    category: 'Healthcare Technology',
    icon: 'Brain',
    color: 'from-purple-500 to-pink-500',
    totalDuration: '300 phút',
    difficulty: 'Trung bình',
    prerequisites: ['Basic psychology understanding', 'Technology literacy', 'Empathy và communication skills'],
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
    description: 'Personal finance management, investment strategies, cryptocurrency understanding, và modern financial technology applications',
    category: 'Finance & Technology',
    icon: 'DollarSign',
    color: 'from-amber-500 to-orange-500',
    totalDuration: '330 phút',
    difficulty: 'Trung bình',
    prerequisites: ['Basic math skills', 'Understanding của money và banking', 'Computer literacy'],
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
    description: 'Game design principles, development frameworks, interactive storytelling, và modern game development technologies',
    category: 'Creative Technology',
    icon: 'Gamepad2',
    color: 'from-purple-500 to-indigo-500',
    totalDuration: '360 phút',
    difficulty: 'Nâng cao',
    prerequisites: ['Programming basics', 'Creative thinking', 'Problem-solving skills', 'Design fundamentals'],
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
    description: 'AI-powered creative tools, digital art generation, creative workflows, và emerging technologies trong art và design',
    category: 'Creative Technology',
    icon: 'Palette',
    color: 'from-pink-500 to-purple-500',
    totalDuration: '270 phút',
    difficulty: 'Trung bình',
    prerequisites: ['Basic computer skills', 'Creative interest', 'Understanding của digital media'],
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
    description: 'Cybersecurity fundamentals, ethical hacking techniques, penetration testing, và advanced security defense strategies',
    category: 'Security & Technology',
    icon: 'Shield',
    color: 'from-red-500 to-orange-500',
    totalDuration: '380 phút',
    difficulty: 'Nâng cao',
    prerequisites: ['Network fundamentals', 'Linux command line', 'Understanding của security concepts'],
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
    description: 'Genetic engineering, medical biotechnology, drug discovery, và cutting-edge life sciences applications',
    category: 'Life Sciences & Technology',
    icon: 'Dna',
    color: 'from-emerald-500 to-teal-500',
    totalDuration: '330 phút',
    difficulty: 'Nâng cao',
    prerequisites: ['Biology fundamentals', 'Chemistry basics', 'Scientific method understanding'],
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
  }
];

// Helper functions cho navigation
export function getModuleById(id: string): ModuleNavigation | undefined {
  return moduleNavigation.find(module => module.id === id);
}

export function getLessonById(moduleId: string, lessonId: string): LessonNavigation | undefined {
  const moduleData = getModuleById(moduleId);
  return moduleData?.lessons.find(lesson => lesson.id === lessonId);
}

export function getModulesByCategory(category: string): ModuleNavigation[] {
  return moduleNavigation.filter(moduleData => moduleData.category === category);
}

export function getAllCategories(): string[] {
  const categories = moduleNavigation.map(moduleData => moduleData.category);
  return Array.from(new Set(categories));
}

export function getNextLesson(moduleId: string, currentLessonId: string): LessonNavigation | undefined {
  const moduleData = getModuleById(moduleId);
  if (!moduleData) return undefined;
  
  const currentIndex = moduleData.lessons.findIndex(lesson => lesson.id === currentLessonId);
  if (currentIndex === -1 || currentIndex === moduleData.lessons.length - 1) return undefined;
  
  return moduleData.lessons[currentIndex + 1];
}

export function getPreviousLesson(moduleId: string, currentLessonId: string): LessonNavigation | undefined {
  const moduleData = getModuleById(moduleId);
  if (!moduleData) return undefined;
  
  const currentIndex = moduleData.lessons.findIndex(lesson => lesson.id === currentLessonId);
  if (currentIndex <= 0) return undefined;
  
  return moduleData.lessons[currentIndex - 1];
}

export function calculateModuleProgress(moduleId: string): number {
  const moduleData = getModuleById(moduleId);
  if (!moduleData) return 0;
  
  const completedLessons = moduleData.lessons.filter(lesson => lesson.completed).length;
  return Math.round((completedLessons / moduleData.lessons.length) * 100);
}
