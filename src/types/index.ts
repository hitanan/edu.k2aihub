import { BaseLessonData } from './lesson-base';
export * from './blog';

export type { BaseLessonData };

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

export interface BlogTag {
  slug: string;
  name: string;
  description: string;
}

export interface ModuleData<T extends BaseLessonData = BaseLessonData> {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
  level?: string;
  duration?: string;
  category: string | string[];
  primaryColor?: string;
  features?: string[];
  icon?: string;
  color?: string;
  heroImageUrl?: string;
  objectives?: string[];
  prerequisites?: string[];
  careerOpportunities?: string[];
  careerOutcomes?: string[];
  industryApplications?: (string | { name: string; description: string; url?: string })[];
  marketDemand?: {
    averageSalary: string;
    jobGrowth: string;
    hireDemand: string;
  };
  relatedModules?: string[];
  gradientColors?: string;
  basePath?: string;
  statsConfig?: {
    lessons: string;
    duration: string;
    level: string;
    projects: string;
  };
  marketData?: {
    marketSize: string;
    marketNote: string;
    jobGrowth: string;
    jobNote: string;
    reduction: string;
    reductionNote: string;
    startups: string;
    startupsNote: string;
  };
  careerPaths?: string[];
  technicalHighlights?: Array<{
    title: string;
    icon: string;
    items: string[];
  }>;
  lessons?: T[];
  totalDuration?: string;
  tags?: string[];
  difficulty?: string;
  learningObjectives?: string[];
  href?: string;
  practicalApplications?: Array<{
    name: string;
    description: string;
    steps?: string[];
    imageUrl?: string;
  }>;
  careerProspects?: string | string[];
  targetAudience?: string | { level: string[]; description: string };
  imageUrl?: string;
  image?: string;
  version?: string;
  lastUpdated?: string;
  author?: string;
  isNew?: boolean;
  isComingSoon?: boolean;
  isPremium?: boolean;
  isUnlocked?: boolean;
  learningGoals?: string[];
  projectIdeas?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  active?: boolean;
  learningTime?: string;
  resources?: Array<{ title: string; url: string }>;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EducationalGame {
  id: string;
  title: string;
  description: string;
  category: string[];
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  estimatedTime?: string;
  skills?: string[];
  moduleType?: string;
  isInternal?: boolean;
  points?: number;
  icon?: string;
  color?: string;
  imageUrl?: string;
  tags?: string[];
  isNew?: boolean;
  gameFeatures?: string[];
  educationalObjectives?: string[];
  relatedLessons: Array<{
    moduleId: string;
    lessonId: string;
    title: string;
    connection: string;
  }>;
  gameUrl?: string;
  is3D?: boolean;
}

export type PageProps = {
  params: Promise<{ lessonId: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export interface ModuleNavigation {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string[] | string; // Support both single and multiple categories
  icon?: string;
  color?: string;
  lessons?: LessonNavigation[]; // Make lessons optional for dynamic loading
  totalDuration?: string;
  difficulty?: string;
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

export interface Contributor {
  name: string;
  bio: string;
  avatarUrl: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}
