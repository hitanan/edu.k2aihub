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

export interface Exercise {
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
}

export interface CaseStudy {
  title: string;
  organization?: string;
  problem?: string;
  solution: string;
  impact?: string;
  innovations?: string[];
  government?: string;
  challenge?: string;
  artist?: string;
  results?: string;
  insights?: string[];
}

export interface Resource {
  title: string;
  url: string;
  type: string;
  description?: string;
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
  type?: string;
  videoUrl?: string | null;
  imageUrl?: string;
  objectives: string[];
  prerequisites?: string[];
  exercises?: Exercise[];
  realWorldApplications: string[];
  tags?: string[];
  caseStudies?: CaseStudy[];
  resources?: Resource[];
  vietnamContext?: VietnamContext;
  careerConnect?: CareerProfile;
  quizzes?: QuizQuestion[];
  faqs?: Array<{ question: string; answer: string }>;
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
  financialImpact?: string;
  relatedGames?: Array<{
    id?: string;
    name?: string;
    description?: string;
    gameId?: string;
    title?: string;
    connection?: string;
    difficulty?: string;
  }>;
  relatedLessons?: Array<{
    moduleId: string;
    lessonId: string;
    title: string;
    connection: string;
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

export type DigitalCitizenshipLesson = BaseLessonData;

export interface GenZMarketingLesson extends BaseLessonData {
  genZMarketingMainContent?: {
    generationalInsights: string[];
    authenticityPrinciples: string[];
    platformPreferences: string[];
    valueAlignment: string[];
    engagementTactics: string[];
  };
}

export interface GovernmentTechnologyLesson extends BaseLessonData {
  governmentTechnologyMainContent?: {
    governmentDomain: 'digital-government' | 'public-service-tech' | 'civic-engagement' | 'smart-city' | 'policy-tech';
    technologyCategory: string[];
    vietnameseGovernmentContext: string[];
    publicServiceApplications: string[];
    digitalTransformationAspects: string[];
  };
}

export interface HealthcareTechLesson extends BaseLessonData {
  healthcareCategory:
    | 'Telehealth'
    | 'Health Data Analytics'
    | 'Medical IoT'
    | 'HealthTech Business'
    | 'Mental Health Tech';
  regulatoryCompliance: string[];
  techProficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  targetAudience: string[];
}

export interface KitchenChemistryLesson extends BaseLessonData {
  keyConcept: string;
}

export interface LegalTechLesson extends BaseLessonData {
  legalArea: 'document-automation' | 'legal-research' | 'case-management' | 'regulatory-compliance' | 'ip-management';
  legalTechTools: string[];
  complianceRequirements?: string[];
  vietnameseLegalSystem?: string[];
  targetLegalProfessionals: string[];
}

export interface LiveCommerceLesson extends BaseLessonData {
  streamingPlatforms?: string[];
  liveCommerceContent?: {
    platformSpecifics: Array<{
      platform: string;
      features: string[];
      bestPractices: string[];
    }>;
    kpis: Array<{
      metric: string;
      description: string;
      benchmark: string;
    }>;
  };
}

export interface MentalHealthLesson extends BaseLessonData {
  technologies?: string[];
  wellnessImpact?: string;
}

export interface MetaverseVRLesson extends BaseLessonData {
  technologyLevel?: string;
  tools?: string[];
}

export interface MicroInfluencerLesson extends BaseLessonData {
  vietnamContext: {
    title: string;
    content: string[];
  };
  careerConnect: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
  quizzes: Array<{
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }>;
}

export interface MinecraftEduLesson extends BaseLessonData {
  skills: string[];
  gameVersion: string;
}

export type MobileAppDevelopmentLesson = BaseLessonData;

export interface NanotechnologyLesson extends BaseLessonData {
  nanotechApplications: string[];
  materialsProperties: string[];
  safetyConsiderations: string[];
}

export type EnergyManagementLesson = BaseLessonData;

export interface PhysicsOfSportsLesson extends BaseLessonData {
  keyConcept: string;
}

export type ProfessionalSoftSkillsLesson = BaseLessonData;

export interface ProgrammingRoboticsLesson extends BaseLessonData {
  programmingLanguages?: string[];
  roboticsPlatforms?: string[];
  projects?: Array<{
    name: string;
    difficulty: string;
    description: string;
    technologies: string[];
    estimatedTime: string;
  }>;
}

export type PsychologyBehavioralScienceLesson = BaseLessonData;

export type QuantumComputingEducationLesson = BaseLessonData;

export type QuantumComputingLesson = BaseLessonData;

export interface RealEstateTechLesson extends BaseLessonData {
  measurableROI?: {
    metric: string;
    value: string;
    description: string;
  }[];
}
