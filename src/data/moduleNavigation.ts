import { ModuleNavigation, ModuleData } from '@/types';
import { advancedCreativeSkillsModuleData } from './advanced-creative-skills-module';
import { aiForStudentsModuleData } from './ai-for-students-module';
import { aiMachineLearningModuleData } from './ai-machine-learning-module';
import { aiLearningModuleData } from './ai-learning-module';
import { aiSeoOptimizationModuleData } from './ai-seo-optimization-module';
import { arduinoCircuitsModuleData } from './arduino-circuits-module';
import { blueEconomyModuleData } from '@/data/modules/blue-economy';
import { businessMarketingModuleData } from '@/data/modules/business-marketing';
import { careerDevelopmentModuleData } from '@/data/modules/career-development';
import { circularEconomyModuleData } from '@/data/modules/circular-economy';
import { climateScienceModuleData } from '@/data/modules/climate-science';
import { communicationSkillsModuleData } from '@/data/modules/communication-skills';
import { contentCreatorModuleData } from '@/data/modules/content-creator';
import { creativeDesignModuleData } from '@/data/modules/creative-design';
import { criticalThinkingModuleData } from '@/data/modules/critical-thinking';
import { dailyLifeModuleData } from '@/data/modules/daily-life';
import { dataScienceModuleData } from '@/data/modules/data-science';
import { digitalArtsCreativeTechModuleData } from '@/data/modules/digital-arts-creative-tech';
import { digitalCitizenshipAiEthicsModuleData } from '@/data/modules/digital-citizenship-ai-ethics';
import { digitalCitizenshipOnlineSafetyModuleData } from '@/data/modules/digital-citizenship-online-safety';
import { educationLearningModuleData } from '@/data/modules/education-learning';
import { educationTechnologyModuleData } from '@/data/modules/education-technology';
import { electricVehicleTechModuleData } from '@/data/modules/electric-vehicle-tech';
import { energyManagementModuleData } from './energy-management-module';
import { ethicalMarketingPurposeModuleData } from './ethical-marketing-purpose-module';
import { genZMarketingModuleData } from './genz-marketing-module';
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
import { semiconductorTechnologyModuleData } from './semiconductor-technology-module';
import { shortVideoMasteryModuleData } from './short-video-mastery-module';
import { smartManufacturingModuleData } from './smart-manufacturing-module';
import { socialListeningCrisisModuleData } from './social-listening-crisis-module';
import { softSkillsModuleData } from './soft-skills-module';
import { spaceExplorationModuleData } from './space-exploration-module';
import { spaceTechnologyModuleData } from './space-technology-module';
import { K2Module } from './k2-modules';

// Migrated Modules
import { aiArtCreativeTechModuleData } from '@/data/modules/ai-art-creative-tech';
import { arduinoModuleData } from '@/data/modules/arduino';
import { biotechnologyModuleData } from '@/data/modules/biotechnology';
import { cybersecurityModuleData } from '@/data/modules/cybersecurity';
import { digitalMarketingModuleData } from '@/data/modules/digital-marketing';
import { energyManagementSmartGridModuleData } from '@/data/modules/energy-management';
import { environmentalDataScienceModuleData } from '@/data/modules/environmental-data-science';
import { environmentalScienceClimateModuleData } from '@/data/modules/environmental-science-climate';
import { financialLiteracyModuleData } from '@/data/modules/financial-literacy';
import { foodTechnologyModuleData } from '@/data/modules/food-technology';
import { futureCareersModuleData } from '@/data/modules/future-careers-ai';
import { futureThinkingScenarioPlanningModule } from '@/data/modules/future-thinking-scenario-planning';
import { gameDevelopmentModuleData } from '@/data/modules/game-development';
import { greenTechnologyModuleData } from '@/data/modules/green-technology';
import { pythonModuleData } from '@/data/modules/python';
import { roboticsModuleData } from '@/data/modules/robotics';
import { scratchModuleData } from '@/data/modules/scratch';
import { stemModuleData } from '@/data/modules/stem';

export const moduleNavigation: (ModuleNavigation | ModuleData)[] = [
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
  aiSeoOptimizationModuleData,
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
  cybersecurityModuleData,
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
  futureThinkingScenarioPlanningModule,
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
  pythonModuleData,
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
  biotechnologyModuleData,
];
