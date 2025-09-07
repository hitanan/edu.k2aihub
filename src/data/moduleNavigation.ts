import { ModuleNavigation } from '@/types';
import { advancedCreativeSkillsModuleData } from './advanced-creative-skills-module';
import { aiArtCreativeTechModuleData } from './ai-art-creative-tech-module';
import { aiForStudentsModuleData } from './ai-for-students-module';
import { aiMachineLearningModuleData } from './ai-machine-learning-module';
import { arduinoCircuitsModuleData } from './arduino-circuits-module';
import { arduinoModuleData } from './arduino-module';
import { blueEconomyModuleData } from './blue-economy-module';
import { businessMarketingModuleData } from './business-marketing-module';
import { careerDevelopmentModuleData } from './career-development-module';
import { circularEconomyModuleData } from './circular-economy-module';
import { climateScienceModuleData } from './climate-science-module';
import { communicationSkillsModuleData } from './communication-skills-module';
import { contentCreatorModuleData } from './content-creator-module';
import { creativeDesignModuleData } from './creative-design-module';
import { criticalThinkingModuleData } from './critical-thinking-module';
import { dailyLifeModuleData } from './daily-life-module';
import { dataScienceModuleData } from './data-science-module';
import { digitalArtsCreativeTechModuleData } from './digital-arts-creative-tech-module';
import { digitalCitizenshipAiEthicsModuleData } from './digital-citizenship-ai-ethics-module';
import { digitalCitizenshipOnlineSafetyModuleData } from './digital-citizenship-online-safety-module';
import { digitalMarketingModuleData } from './digital-marketing-module';
import { educationLearningModuleData } from './education-learning-module';
import { educationTechnologyModuleData } from './education-technology-module';
import { electricVehicleTechModuleData } from './electric-vehicle-tech-module';
import { energyManagementModuleData } from './energy-management-module';
import { energyManagementSmartGridModuleData } from './energy-management-smart-grid-module';
import { environmentalDataScienceModuleData } from './environmental-data-science-module';
import { environmentalScienceClimateModuleData } from './environmental-science-climate-module';
import { ethicalMarketingPurposeModuleData } from './ethical-marketing-purpose-module';
import { financialLiteracyModuleData } from './financial-literacy-module';
import { foodTechnologyModuleData } from './food-technology-module';
import { futureCareersModuleData } from './future-careers-ai-module';
import { futureThinkingModuleData } from './future-thinking-module';
import { futureThinkingModuleData as futureThinkingScenarioPlanningModuleData } from './future-thinking-scenario-planning-module';
import { gameDevelopmentModuleData } from './game-development-module';
import { genZMarketingModuleData } from './genz-marketing-module';
import { greenTechnologyModuleData } from './green-technology-module';
import { healthcareTechModuleData } from './healthcare-tech-module';
import { kitchenChemistryModuleData } from './kitchen-chemistry-module';
import { leadershipManagementModuleData } from './leadership-management-module';
import { legalTechnologyModuleData } from './legal-technology-module';
import { liveCommerceStreamingModuleData } from './live-commerce-streaming-module';
import { mentalHealthTechModuleData } from './mental-health-tech-module';
import { metaverseVREducationModuleData } from './metaverse-vr-education-module';
import { microInfluencerEconomyModuleData } from './micro-influencer-economy-module';
import { minecraftEduModuleData } from './minecraft-edu-module';
import { mobileAppDevelopmentModuleData } from './mobile-app-development-module';
import { nanotechnologyModuleData } from './nanotechnology-module';
import { officeWorkModuleData } from './office-work-module';
import { personalEnergyPerformanceManagementModuleData } from './personal-energy-performance-management-module';
import { physicsOfSportsModuleData } from './physics-of-sports-module';
import { professionalSkillsModuleData } from './professional-skills-module';
import { professionalSoftSkillsModuleData } from './professional-soft-skills-module';
import { programmingDevModuleData } from './programming-dev-module';
import { programmingRoboticsModuleData } from './programming-robotics-module';
import { psychologyBehavioralScienceModuleData } from './psychology-behavioral-science-module';
import { quantumComputingEducationModuleData } from './quantum-computing-education-module';
import { quantumComputingModuleData } from './quantum-computing-module';
import { realEstateTechnologyModuleData } from './real-estate-technology-module';
import { renewableEnergyModuleData } from './renewable-energy-module';
import { robloxGameDevModuleData } from './roblox-game-dev-module';
import { robosimModuleData } from './robosim-module';
import { roboticsModuleData } from './robotics-module';
import { scratchModuleData } from './scratch-module';
import { semiconductorTechnologyModuleData } from './semiconductor-technology-module';
import { shortVideoMasteryModuleData } from './short-video-mastery-module';
import { smartManufacturingModuleData } from './smart-manufacturing-module';
import { socialListeningCrisisModuleData } from './social-listening-crisis-module';
import { softSkillsModuleData } from './soft-skills-module';
import { spaceExplorationModuleData } from './space-exploration-module';
import { spaceTechnologyModuleData } from './space-technology-module';
import { stemModuleData } from './stem-module';
import { supplyChainLogisticsModuleData } from './supply-chain-logistics-module';
import { sustainableEnergyModuleData } from './sustainable-energy-green-tech-module';
import { teenWellnessModuleData } from './teen-wellness-module';
import { tiktokSocialCommerceModuleData } from './tiktok-social-commerce-module';
import { transportationTechnologyModuleData } from './transportation-technology-module';
import { uxUiDesignFundamentalsModuleData } from './ux-ui-design-fundamentals-module';
import { uxUiDesignModuleData } from './ux-ui-design-module';
import { vietnameseBusinessModuleData } from './vietnamese-business-module';
import { vietnameseCultureModuleData } from './vietnamese-culture-module';
import { vietnameseHealthcareModuleData } from './vietnamese-healthcare-module';
import { vietnameseLanguageTechModuleData } from './vietnamese-language-tech-module';
import { youngEntrepreneurModuleData } from './young-entrepreneur-module';
import { threeDPrintingModuleData } from './3d-printing-module';
import { blockchainTechnologyModuleData } from './blockchain-technology-module';
import { aiLearningModuleData } from './ai-learning-module';
import { sustainableAgricultureModuleData } from './sustainable-agriculture-module';

export const K2Module = {
  // Core Modules
  City: 'city',
  AI: 'ai',

  // Professional Learning Modules
  DigitalMarketing: 'digital-marketing',
  GreenTechnology: 'green-technology',
  MentalHealthTech: 'mental-health-tech',
  FinancialLiteracy: 'financial-literacy',
  GameDevelopment: 'game-development',
  AIArtCreativeTech: 'ai-art-creative-tech',
  Cybersecurity: 'cybersecurity',
  Biotechnology: 'biotechnology',
  MCP: 'mcp',
  AIApplications: 'ai-applications',
  AIForStudents: 'ai-for-students',
  AdvancedAI: 'advanced-ai',
  SemiconductorTechnology: 'semiconductor-technology',
  RenewableEnergy: 'renewable-energy',
  BlockchainDeFi: 'blockchain-defi',
  EnvironmentalDataScience: 'environmental-data-science',
  Nanotechnology: 'nanotechnology',
  AerospaceEngineering: 'aerospace-engineering',
  ElectricVehicleTech: 'electric-vehicle-tech',
  DigitalGovernment: 'digital-government',
  CircularEconomy: 'circular-economy',
  EmotionalIntelligence: 'emotional-intelligence',
  PublicSpeaking: 'public-speaking',
  Leadership: 'leadership',

  // Programming & STEM Modules
  Python: 'python',
  Arduino: 'arduino',
  Robotics: 'robotics',
  Scratch: 'scratch',
  Stem: 'stem',
  PhysicsOfSports: 'physics-of-sports',
  KitchenChemistry: 'kitchen-chemistry',
  DigitalCitizenshipOnlineSafety: 'digital-citizenship-online-safety',
  VietnameseBusiness: 'vietnamese-business',
  VietnameseCulture: 'vietnamese-culture',
  VietnameseHealthcare: 'vietnamese-healthcare',
  VietnameseLanguageTech: 'vietnamese-language-tech',
  CriticalThinking: 'critical-thinking',
  CommunicationSkills: 'communication-skills',
  ProfessionalSkills: 'professional-skills',
  HealthcareTech: 'healthcare-tech',
  MobileAppDevelopment: 'mobile-app-development',
  AdvancedCreativeSkills: 'advanced-creative-skills',
  LegalTechnology: 'legal-technology',
  EducationTechnology: 'education-technology',
  RealEstateTechnology: 'real-estate-technology',
  Robosim: 'robosim',
  RobloxGameDev: 'roblox-game-dev',
  MinecraftEdu: 'minecraft-edu',
  ArduinoCircuits: 'arduino-circuits',
  ThreeDPrinting: '3d-printing',
  CrossCultural: 'cross-cultural',
  QuantumComputingEducation: 'quantum-computing-education',
  DataScienceAnalytics: 'data-science-analytics',
  FoodTechnology: 'food-technology',
  ContentCreator: 'content-creator',
  TeenWellness: 'teen-wellness',
  YoungEntrepreneur: 'young-entrepreneur',
  AIContentCreator: 'ai-content-creator',
  TikTokSocialCommerce: 'tiktok-social-commerce',
  GenZMarketing: 'genz-marketing',
  ShortVideoMastery: 'short-video-mastery',
  LiveCommerceStreaming: 'live-commerce-streaming',
  MicroInfluencerEconomy: 'micro-influencer-economy',
  SocialListeningCrisis: 'social-listening-crisis',
  EthicalMarketingPurpose: 'ethical-marketing-purpose',
  CrossPlatformStrategy: 'cross-platform-strategy',
  DataDrivenAnalytics: 'data-driven-analytics',
  EnvironmentalScienceClimate: 'environmental-science-climate',
  MetaverseVREducation: 'metaverse-vr-education',
  SpaceTechnology: 'space-technology',
  DigitalArtsCreativeTech: 'digital-arts-creative-tech',
  BlueEconomy: 'blue-economy',
  SmartManufacturing: 'smart-manufacturing',
  DigitalCitizenship: 'digital-citizenship',
  FutureThinking: 'future-thinking',
  UXUIDesign: 'ux-ui-design',
  EnergyManagement: 'energy-management',
};

export const moduleNavigation: ModuleNavigation[] = [
  // Core Modules (outside /learning/ folder)
  {
    id: K2Module.City,
    title: 'Địa Lý Việt Nam',
    description:
      'Khám phá 34 tỉnh thành Việt Nam qua bản đồ tương tác, tìm hiểu văn hóa, lịch sử và địa lý của từng vùng miền',
    category: 'foundation',
    icon: '🗺️',
    color: 'from-emerald-500 to-teal-500',
    totalDuration: 'Không giới hạn',
    difficulty: 'Tất cả mức độ',
    href: '/city',
    features: ['Interactive Map', 'Province Search', 'Historical Data', 'Cultural Information'],
    tags: ['geography', 'vietnam', 'interactive', 'culture'],
    prerequisites: [],
    lessons: [],
    coreModule: true,
  },
  {
    id: K2Module.AI,
    title: 'AI Của Tôi',
    subtitle: 'Hướng dẫn AI thực hành',
    description:
      'Hướng dẫn thực hành sử dụng AI trong công việc, học tập và cuộc sống hàng ngày với các AI tools phổ biến',
    category: 'foundation',
    icon: '🤖',
    color: 'from-blue-500 to-indigo-500',
    totalDuration: 'Không giới hạn',
    difficulty: 'Tất cả mức độ',
    href: '/ai',
    features: ['Featured AI Apps', 'Practical Guides', 'Step-by-step Tutorials', 'Real-world Applications'],
    tags: ['ai', 'practical', 'work', 'creativity'],
    prerequisites: [],
    lessons: [],
    coreModule: true,
  },
  advancedCreativeSkillsModuleData,
  aiArtCreativeTechModuleData,
  aiForStudentsModuleData,
  aiMachineLearningModuleData,
  aiLearningModuleData,
  arduinoCircuitsModuleData,
  arduinoModuleData,
  blueEconomyModuleData,
  businessMarketingModuleData,
  careerDevelopmentModuleData,
  circularEconomyModuleData,
  climateScienceModuleData,
  communicationSkillsModuleData,
  contentCreatorModuleData,
  creativeDesignModuleData,
  criticalThinkingModuleData,
  dailyLifeModuleData,
  dataScienceModuleData,
  digitalArtsCreativeTechModuleData,
  digitalCitizenshipAiEthicsModuleData,
  digitalCitizenshipOnlineSafetyModuleData,
  digitalMarketingModuleData,
  educationLearningModuleData,
  educationTechnologyModuleData,
  electricVehicleTechModuleData,
  energyManagementModuleData,
  energyManagementSmartGridModuleData,
  environmentalDataScienceModuleData,
  environmentalScienceClimateModuleData,
  ethicalMarketingPurposeModuleData,
  financialLiteracyModuleData,
  foodTechnologyModuleData,
  futureCareersModuleData,
  futureThinkingModuleData,
  futureThinkingScenarioPlanningModuleData,
  gameDevelopmentModuleData,
  genZMarketingModuleData,
  greenTechnologyModuleData,
  healthcareTechModuleData,
  kitchenChemistryModuleData,
  leadershipManagementModuleData,
  legalTechnologyModuleData,
  liveCommerceStreamingModuleData,
  mentalHealthTechModuleData,
  metaverseVREducationModuleData,
  microInfluencerEconomyModuleData,
  minecraftEduModuleData,
  mobileAppDevelopmentModuleData,
  nanotechnologyModuleData,
  officeWorkModuleData,
  personalEnergyPerformanceManagementModuleData,
  physicsOfSportsModuleData,
  professionalSkillsModuleData,
  professionalSoftSkillsModuleData,
  programmingDevModuleData,
  programmingRoboticsModuleData,
  psychologyBehavioralScienceModuleData,
  quantumComputingEducationModuleData,
  quantumComputingModuleData,
  realEstateTechnologyModuleData,
  renewableEnergyModuleData,
  robloxGameDevModuleData,
  robosimModuleData,
  roboticsModuleData,
  scratchModuleData,
  semiconductorTechnologyModuleData,
  shortVideoMasteryModuleData,
  smartManufacturingModuleData,
  socialListeningCrisisModuleData,
  softSkillsModuleData,
  spaceExplorationModuleData,
  spaceTechnologyModuleData,
  stemModuleData,
  supplyChainLogisticsModuleData,
  sustainableEnergyModuleData,
  teenWellnessModuleData,
  tiktokSocialCommerceModuleData,
  transportationTechnologyModuleData,
  uxUiDesignFundamentalsModuleData,
  uxUiDesignModuleData,
  vietnameseBusinessModuleData,
  vietnameseCultureModuleData,
  vietnameseHealthcareModuleData,
  vietnameseLanguageTechModuleData,
  youngEntrepreneurModuleData,
  threeDPrintingModuleData,
  blockchainTechnologyModuleData,
  sustainableAgricultureModuleData,
  kitchenChemistryModuleData,
];
