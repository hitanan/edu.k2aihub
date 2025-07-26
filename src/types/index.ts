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
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
