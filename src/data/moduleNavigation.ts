import { ModuleNavigation, ModuleData } from '@/types';
import { advancedCreativeSkillsModuleData } from '@/data/modules/advanced-creative-skills';
import { aiForStudentsModuleData } from '@/data/modules/ai-for-students';
import { aiMachineLearningModuleData } from '@/data/modules/ai-machine-learning';
import { aiLearningModule } from '@/data/modules/ai-learning';
import { aiSeoOptimizationModuleData } from '@/data/modules/ai-seo-optimization';
import { arduinoCircuitsModuleData } from '@/data/modules/arduino-circuits';
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
import { energyManagementModule } from '@/data/modules/energy-management';
import { ethicalMarketingPurposeModule } from '@/data/modules/ethical-marketing-purpose';
import { genZMarketingModuleData } from '@/data/modules/genz-marketing';
import { healthcareTechModuleData } from '@/data/modules/healthcare-tech';
import { kitchenChemistryModuleData } from '@/data/modules/kitchen-chemistry';
import { leadershipManagementModule } from '@/data/modules/leadership-management';
import { legalTechnologyModuleData } from '@/data/modules/legal-technology';
import { liveCommerceStreamingModuleData } from '@/data/modules/live-commerce-streaming';
import { mentalHealthTechModule } from '@/data/modules/mental-health-tech';
import { metaverseVREducationModule } from '@/data/modules/metaverse-vr-education';
import { microInfluencerEconomyModule } from '@/data/modules/micro-influencer-economy';
import { minecraftEduModule } from '@/data/modules/minecraft-edu';
import { mobileAppDevelopmentModule } from '@/data/modules/mobile-app-development';
import { nanotechnologyModule } from '@/data/modules/nanotechnology';
import { officeWorkModule } from '@/data/modules/office-work';
import { personalEnergyPerformanceManagementModule } from '@/data/modules/personal-energy-performance-management';
import { physicsOfSportsModule } from '@/data/modules/physics-of-sports';
import { professionalSkillsModule } from '@/data/modules/professional-skills';
import { professionalSoftSkillsModule } from '@/data/modules/professional-soft-skills';
import { programmingDevModule } from '@/data/modules/programming-dev';
import { programmingRoboticsModule } from '@/data/modules/programming-robotics';
import { psychologyBehavioralScienceModule } from '@/data/modules/psychology-behavioral-science';
import { quantumComputingEducationModule } from '@/data/modules/quantum-computing-education';
import { quantumComputingModule } from '@/data/modules/quantum-computing';
import { realEstateTechnologyModuleData } from '@/data/modules/real-estate-technology';
import { renewableEnergyModuleData as renewableEnergyModule } from '@/data/modules/renewable-energy';
import { robloxGameDevModuleData as robloxGameDevModule } from '@/data/modules/roblox-game-dev';
import { robosimModuleData } from '@/data/modules/robosim';
import { semiconductorTechnologyModuleData } from '@/data/modules/semiconductor-technology';
import { shortVideoMasteryModuleData } from '@/data/modules/short-video-mastery';
import { smartManufacturingModuleData } from '@/data/modules/smart-manufacturing';
import { socialListeningCrisisModuleData } from '@/data/modules/social-listening-crisis';
import { softSkillsModuleData } from '@/data/modules/soft-skills';
import { spaceExplorationModuleData } from '@/data/modules/space-exploration';
import { spaceTechnologyModuleData } from '@/data/modules/space-technology';
import { K2Module } from './k2-modules';

// Migrated Modules
import { aiArtCreativeTechModuleData } from '@/data/modules/ai-art-creative-tech';
import { arduinoModuleData } from '@/data/modules/arduino';
import { biotechnologyModuleData } from '@/data/modules/biotechnology';
import { cybersecurityModuleData } from '@/data/modules/cybersecurity';
import { digitalMarketingModuleData } from '@/data/modules/digital-marketing';
import { energyManagementSmartGridModule } from '@/data/modules/energy-management-smart-grid';
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
  aiLearningModule,
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
  energyManagementModule,
  energyManagementSmartGridModule,
  environmentalDataScienceModuleData,
  environmentalScienceClimateModuleData,
  ethicalMarketingPurposeModule,
  financialLiteracyModuleData,
  foodTechnologyModuleData,
  futureCareersModuleData,
  futureThinkingScenarioPlanningModule,
  gameDevelopmentModuleData,
  genZMarketingModuleData,
  greenTechnologyModuleData,
  healthcareTechModuleData,
  kitchenChemistryModuleData,
  leadershipManagementModule,
  legalTechnologyModuleData,
  liveCommerceStreamingModuleData,
  mentalHealthTechModule,
  metaverseVREducationModule,
  microInfluencerEconomyModule,
  minecraftEduModule,
  mobileAppDevelopmentModule,
  nanotechnologyModule,
  officeWorkModule,
  personalEnergyPerformanceManagementModule,
  physicsOfSportsModule,
  professionalSkillsModule,
  professionalSoftSkillsModule,
  programmingDevModule,
  programmingRoboticsModule,
  psychologyBehavioralScienceModule,
  pythonModuleData,
  quantumComputingEducationModule,
  quantumComputingModule,
  realEstateTechnologyModuleData,
  renewableEnergyModule,
  robloxGameDevModule,
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
