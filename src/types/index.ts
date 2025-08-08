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

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PageProps {
  params: Promise<{ lessonId: string; gameId?: string }>;
}
