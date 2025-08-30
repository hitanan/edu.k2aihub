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
  features: string[];
  icon: string;
  color: string;
  heroImageUrl?: string;
  objectives: string[];
  prerequisites: string[];
  careerOutcomes: string[];
  industryApplications: string[];
  marketDemand: {
    averageSalary: string;
    jobGrowth: string;
    hireDemand: string;
  };
  relatedModules: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PageProps {
  params: Promise<{ lessonId: string; gameId?: string; slug: string; category: string }>;
}
