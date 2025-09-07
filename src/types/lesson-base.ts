import { ReactNode } from 'react';

export interface StructuredContent {
  introduction: string;
  keyConcepts: Array<{
    title: string;
    description: string;
    examples: string[];
  }>;
  practicalApplications: Array<{
    area: string;
    description: string;
  }>;
  conclusion: string;
}

export interface SimpleContent {
  heading: string;
  details: string;
}

// Define the structure for a quiz question
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ToolDetail {
  name: string;
  category: string;
  description: string;
  difficulty: string;
}

export interface CareerProfile {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  quote: string;
  interviewUrl?: string;
}

export interface VietnamContext {
  title: string;
  content: string[];
}

export interface BaseLessonData {
  id: string;
  title: string;
  name?: string;
  description: string;
  duration: string;
  difficulty: string;
  videoUrl?: string | null;
  imageUrl?: string;
  objectives: string[];
  prerequisites?: string[];
  exercises: Array<{
    id?: string;
    title: string;
    description: string;
    difficulty: string;
    materials?: string[];
    procedure?: string[];
    steps?: string[];
    expectedResults?: string;
    expectedOutput?: string;
    solution?: string;
    hints?: string[];
    tips?: string[];
    videoUrl?: string;
    imageUrl?: string;
    tools?: string[];
    datasets?: string[];
    code?: string;
    troubleshooting?: string[];
    requirements?: string[];
  }>;
  realWorldApplications: string[];
  caseStudies?: Array<{
    title: string;
    organization: string;
    problem: string;
    solution: string;
    impact: string;
    innovations: string[];
    government?: string;
    challenge?: string;
  }>;
  resources?: Array<{
    title: string;
    url: string;
    type: string;
    description?: string;
  }>;
  vietnamContext?: VietnamContext;
  careerConnect?: CareerProfile;
  quizzes?: QuizQuestion[];
  environmentalImpact?: string;
  tools?: string[] | ToolDetail[];
  materials?: string[];
  codeExample?: string;
  circuitDiagram?: string;
  competitions?: string[];
  category?: string;
  aiDomain?: string;
  complexity?: string;
  frameworks?: string[];
  dataScienceDomain?: 'machine-learning' | 'deep-learning' | 'nlp-processing' | 'computer-vision' | 'data-engineering';
  technicalComplexity?: 'intermediate' | 'advanced' | 'expert';
  programmingLanguages?: string[];
  vietnameseDataContext?: string[];
  industryApplications?: string[];
  industries?: string[];
  skillLevel?: string;
  outcomes?: string[];
  mainContent?: SimpleContent[] | StructuredContent;
  relatedGames?: Array<{
    id?: string;
    name?: string;
    description?: string;
    gameId?: string;
    title?: string;
    connection?: string;
    difficulty?: string;
  }>;
  aiTools?: string[];
  practicalUses?: string[];
  platforms?: string[];
  techniques?: string[];
  costRange?: string;
  estimatedEarnings?: string;
  algorithmTypes?: string[];
  mlFrameworks?: string[];
  applications?: string[];
  programmingSkills?: string[];
  mathConcepts?: string[];
  platform?: 'Web' | 'Mobile' | 'Both';
  pricing?: 'Free' | 'Freemium' | 'Paid';
  features?: string[];
  bestFor?: string[];
  limitations?: string[];
  howToUse?: HowToUseStep[];
  websiteUrl?: string;
  rating?: number;
  downloads?: string;
  languages?: string[];
  ageGroup?: string;
  subjects?: string[];
  medicalApplications?: string[];
  regulatoryConsiderations?: string[];
  safetyCriteria?: string[];
  clinicalValidation?: {
    phase: string;
    description: string;
    requirements: string[];
  }[];
  biotechField?: string;
  labTechniques?: string[];
  blockchainType?: string;
  blockchainConcepts?: string[];
  cryptocurrencies?: string[];
  practicalProjects?: Array<{
    title: string;
    description: string;
    technology?: string[];
    complexity?: string;
    dataset?: string;
    techniques?: string[];
    deliverables?: string[];
  }>;
  climateConcepts?: string[];
  researchMethods?: string[];
  climateData?: Array<{
    source: string;
    type: string;
    description: string;
    accessibility: string;
  }>;
  communicationMethods?: string[];
  presentationTechniques?: string[];
  culturalContext?: string[];
  digitalPlatforms?: string[];
  assessmentCriteria?: string[];
  monetizationMethods?: string[];
  toolsRequired?: string[];
  averageIncome?: string;
  timeToMaster?: string;
  thinkingFrameworks?: string[];
  practicalExercises?: Array<{
    title: string;
    scenario: string;
    steps: string[];
    expectedOutcome: string;
    realWorldApplication: string;
  }>;
  cognitiveSkills?: string[];
  assessmentMethods?: string[];
  marketSize?: string;
  growthRate?: string;
  regulations?: string[];
  culturalDimensions?: string[];
  communicationPatterns?: Array<{
    culture: string;
    directness: string;
    contextLevel: string;
    timeOrientation: string;
    hierarchyStyle: string;
    examples: string[];
  }>;
  adaptationStrategies?: string[];
  globalCompetencies?: string[];
  platformFeatures?: string[];
  contentAdaptation?: string[];
  audienceSegmentation?: string[];
  analyticsIntegration?: string[];
  automationTools?: string[];
  securityDomains?: string[];
  threats?: string[];
  analyticsTools?: string[];
  metricCategories?: string[];
  reportingFrameworks?: string[];
  optimizationMethods?: string[];
  dataVisualization?: string[];
  dataTypes?: string[];
  machineLearningMethods?: string[];
  dataScienceConcepts?: string[];
  algorithms?: string[];
  artLevel?: string;
  technologies?: string[];
  creativeFocus?: string[];
  vietnamCulture?: string;
  ethicalFrameworks?: string[];
  practicalScenarios?: Array<{
    title: string;
    situation: string;
    ethicalDilemma: string;
    possibleActions: string[];
    recommendedApproach: string;
    reasoning: string;
  }>;
  digitalRights?: string[];
  aiEthicsPrinciples?: string[];
  privacyTools?: string[];
  govTechnologies?: string[];
  publicServices?: string[];
  scenarioMethods?: string[];
  futuringTechniques?: Array<{
    name: string;
    description: string;
    timeHorizon: string;
    bestUseCases: string[];
    steps: string[];
  }>;
  trendAnalysisFrameworks?: string[];
  uncertaintyFactors?: string[];
  gameDevMainContent?: {
    technologies: string[];
    gameGenres: string[];
    careerOpportunities: string[];
  };
  genZMarketingMainContent?: {
    generationalInsights: string[];
    authenticityPrinciples: string[];
    platformPreferences: string[];
    valueAlignment: string[];
    engagementTactics: string[];
  };
  governmentTechnologyMainContent?: {
    governmentDomain: 'digital-government' | 'public-service-tech' | 'civic-engagement' | 'smart-city' | 'policy-tech';
    technologyCategory: string[];
    vietnameseGovernmentContext: string[];
    publicServiceApplications: string[];
    digitalTransformationAspects: string[];
  };
  healthcareCategory?: string;
  regulatoryCompliance?: string[];
  techProficiencyLevel?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  targetAudience?: string[];
  keyConcept?: string;
}

export interface HowToUseStep {
  step: number;
  title: string;
  description: string;
  tips: string[];
  screenshot?: string;
}

export interface LessonPageConfig<T extends BaseLessonData> {
  moduleName: string;
  moduleTitle: string;
  modulePath: string;
  lessons: T[];
  primaryColor: string;
  secondaryColor: string;
  gradientColors: string;
  getFieldIcon?: (field: string) => ReactNode;
  getFieldValue?: (lesson: T) => string;
  sidebarContent?: (lesson: T) => ReactNode;
}

export interface LessonPageTemplateProps<T extends BaseLessonData> {
  lessonId: string;
  config: LessonPageConfig<T>;
}
