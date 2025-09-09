export interface TouristAttraction {
  name: string;
  description: string;
  imageUrl: string;
  location?: string;
  url?: string;
}

export interface City {
  id: number;
  code: string;
  name: string;
  slug: string;
  oldNames: string[];
  region: string;
  coordinates: {
    x: number;
    y: number;
  };
  color: string;
  population: string;
  area: string;
  description: string;
  fullPageContent?: string;
  touristAttractions?: TouristAttraction[];
}

export interface ModuleData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  level: string;
  duration: string;
  category: string;
  primaryColor?: string;
  features: string[];
  icon: string;
  color: string;
  heroImageUrl?: string;
  objectives: string[];
  prerequisites: string[];
  careerOutcomes: string[];
  industryApplications: (string | { name: string; description: string })[];
  marketDemand: {
    averageSalary: string;
    jobGrowth: string;
    hireDemand: string;
  };
  relatedModules: string[];
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
  relatedLessons: Array<{
    moduleId: string;
    lessonId: string;
    title: string;
    connection: string;
  }>;
  gameUrl?: string;
  is3D?: boolean;
}

export interface ModuleNavigation {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string[] | string; // Support both single and multiple categories
  icon: string;
  color: string;
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
