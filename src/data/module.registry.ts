import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

// --- Helper function to create minimal ModuleData from lesson arrays ---
function createModuleDataFromLessons(
  id: string,
  title: string,
  lessons: BaseLessonData[],
  description?: string,
): ModuleData {
  return {
    id,
    title,
    subtitle: `Khám phá ${title} từ cơ bản đến nâng cao.`,
    description: description || `Khám phá các bài học chuyên sâu về ${title}.`,
    lessons,
    // Populate with default empty values to satisfy the type
    objectives: [],
    prerequisites: [],
    careerOutcomes: [],
    industryApplications: [],
    level: 'N/A',
    duration: 'N/A',
    category: 'N/A',
    features: [],
    icon: '📘',
    color: 'from-gray-500 to-gray-700',
    marketDemand: {
      averageSalary: 'N/A',
      jobGrowth: 'N/A',
      hireDemand: 'N/A',
    },
    relatedModules: [],
  };
}

// --- Import all module data sources ---

// Group 1: Modules exporting a `...ModuleData` object
import { pythonModuleData } from '@/data/modules/python';
import { arduinoModuleData } from '@/data/modules/arduino';
import { roboticsModuleData } from '@/data/modules/robotics';
import { scratchModuleData } from '@/data/modules/scratch';
import { stemModuleData } from '@/data/modules/stem';
import { digitalMarketingModuleData } from '@/data/modules/digital-marketing';
import { greenTechnologyModuleData } from '@/data/modules/green-technology';
import { financialLiteracyModuleData } from '@/data/modules/financial-literacy';
import { gameDevelopmentModuleData } from '@/data/modules/game-development';
import { aiArtCreativeTechModuleData } from '@/data/modules/ai-art-creative-tech';
import { biotechnologyModuleData } from '@/data/modules/biotechnology';
import { environmentalScienceClimateModuleData } from '@/data/modules/environmental-science-climate';
import { blockchainModuleData } from '@/data/modules/blockchain-technology';
import { climateScienceModuleData } from '@/data/modules/climate-science';
import { cybersecurityModuleData } from '@/data/modules/cybersecurity';
import { blueEconomyModuleData } from '@/data/modules/blue-economy';
import { biomedicalEngineeringModuleData } from '@/data/modules/biomedical-engineering';
import { foodTechnologyModuleData } from '@/data/modules/food-technology';
import { electricVehicleTechModuleData } from '@/data/modules/electric-vehicle-tech';
import { digitalGovernmentModuleData } from '@/data/modules/digital-government';
import { environmentalDataScienceModuleData } from '@/data/modules/environmental-data-science';
import { contentCreatorModuleData } from '@/data/modules/content-creator';
import { crossBorderEcommerceModuleData } from '@/data/modules/cross-border-ecommerce';
import { crossPlatformStrategyModuleData } from '@/data/modules/cross-platform-strategy';
import { dataDrivenAnalyticsModuleData } from '@/data/modules/data-driven-analytics';
import { dataScienceAnalyticsModuleData } from '@/data/modules/data-science-analytics';
import { criticalThinkingModuleData } from '@/data/modules/critical-thinking';
import { digitalCitizenshipOnlineSafetyModuleData } from '@/data/modules/digital-citizenship-online-safety';
import { energyManagementModule } from '@/data/modules/energy-management';
import { mentalHealthTechModule } from '@/data/modules/mental-health-tech';
import { nanotechnologyModule } from '@/data/modules/nanotechnology';
import { programmingRoboticsModule } from '@/data/modules/programming-robotics';
import { realEstateTechnologyModuleData } from '@/data/modules/real-estate-technology';
import { quantumComputingModule } from '@/data/modules/quantum-computing';
import { arduinoCircuitsModuleData } from '@/data/modules/arduino-circuits';
import { appliedMathematicsLogicModuleData } from '@/data/modules/applied-mathematics-logic';
import { artHistoryAppreciationModuleData } from '@/data/modules/art-history-appreciation';
import { biologyHealthModuleData } from '@/data/modules/biology-health';
import { careerGuidanceDevelopmentModuleData } from '@/data/modules/career-guidance-development';
import { chemistryEnvironmentModuleData } from '@/data/modules/chemistry-environment';
import { civicEducationLifeSkillsModuleData } from '@/data/modules/civic-education-life-skills';
import { cyberSafetyDigitalEthicsModuleData } from '@/data/modules/cyber-safety-digital-ethics';
import { economicGeographyVietnamModuleData } from '@/data/modules/economic-geography-vietnam';
import { genderEducationMentalHealthModuleData } from '@/data/modules/gender-education-mental-health';
import { literatureReadingSkillsModuleData } from '@/data/modules/literature-reading-skills';
import { modernVietnameseHistoryModuleData } from '@/data/modules/modern-vietnamese-history';
import { musicAppreciationModuleData } from '@/data/modules/music-appreciation';
import { physicalEducationSportsScienceModuleData } from '@/data/modules/physical-education-sports-science';
import { physicsInLifeModuleData } from '@/data/modules/physics-in-life';
import { appliedEnglishModuleData } from '@/data/modules/applied-english';
import { criticalThinkingProblemSolvingModuleData } from '@/data/modules/critical-thinking-problem-solving';
import { entrepreneurshipAndInnovationModuleData } from '@/data/modules/entrepreneurship-and-innovation';
import { introductionToPhilosophyModuleData } from '@/data/modules/introduction-to-philosophy';
import { personalFinanceForBeginnersModuleData } from '@/data/modules/personal-finance-for-beginners';
import { scientificResearchSkillsModuleData } from '@/data/modules/scientific-research-skills';

// Group 2: Modules exporting a `...Lessons` array directly
import { aiMachineLearningLessons } from '@/data/modules/ai-machine-learning';
// import { DataScienceLessons } from '@/data/data-science';
import { spaceLessons } from '@/data/modules/space-exploration';
import { smartManufacturingLessons } from '@/data/modules/smart-manufacturing';
import { aerospaceEngineeringLessons } from '@/data/modules/aerospace-engineering';
import { advancedAILessons } from '@/data/modules/advanced-ai';
import { vietnameseCultureLessons } from '@/data/modules/vietnamese-culture';
import { aiContentCreatorLessons } from '@/data/modules/ai-content-creator';
import { tiktokSocialCommerceLessons } from '@/data/modules/tiktok-social-commerce';
// import { genZMarketingLessons } from '@/data/genz-marketing';
import { shortVideoMasteryLessons } from '@/data/modules/short-video-mastery';
// import { liveCommerceLessons } from '@/data/live-commerce-streaming';
import { microInfluencerEconomyModule } from '@/data/modules/micro-influencer-economy';
import { socialListeningLessons } from '@/data/modules/social-listening-crisis';
import { ethicalMarketingPurposeModule } from '@/data/modules/ethical-marketing-purpose';

// --- Consolidate all modules into a single array ---

const modulesWithFullData: ModuleData[] = [
  pythonModuleData,
  arduinoModuleData,
  arduinoCircuitsModuleData,
  roboticsModuleData,
  scratchModuleData,
  stemModuleData,
  digitalMarketingModuleData,
  greenTechnologyModuleData,
  financialLiteracyModuleData,
  gameDevelopmentModuleData,
  aiArtCreativeTechModuleData,
  biotechnologyModuleData,
  environmentalScienceClimateModuleData,
  blockchainModuleData,
  climateScienceModuleData,
  cybersecurityModuleData,
  blueEconomyModuleData,
  biomedicalEngineeringModuleData,
  foodTechnologyModuleData,
  electricVehicleTechModuleData,
  digitalGovernmentModuleData,
  environmentalDataScienceModuleData,
  contentCreatorModuleData,
  crossBorderEcommerceModuleData,
  crossPlatformStrategyModuleData,
  dataDrivenAnalyticsModuleData,
  dataScienceAnalyticsModuleData,
  criticalThinkingModuleData,
  digitalCitizenshipOnlineSafetyModuleData,
  energyManagementModule,
  quantumComputingModule,
  realEstateTechnologyModuleData,
  programmingRoboticsModule,
  nanotechnologyModule,
  mentalHealthTechModule,
  microInfluencerEconomyModule,
  ethicalMarketingPurposeModule,
  appliedMathematicsLogicModuleData,
  artHistoryAppreciationModuleData,
  biologyHealthModuleData,
  careerGuidanceDevelopmentModuleData,
  chemistryEnvironmentModuleData,
  civicEducationLifeSkillsModuleData,
  cyberSafetyDigitalEthicsModuleData,
  economicGeographyVietnamModuleData,
  genderEducationMentalHealthModuleData,
  literatureReadingSkillsModuleData,
  modernVietnameseHistoryModuleData,
  musicAppreciationModuleData,
  physicalEducationSportsScienceModuleData,
  physicsInLifeModuleData,
  appliedEnglishModuleData,
  criticalThinkingProblemSolvingModuleData,
  entrepreneurshipAndInnovationModuleData,
  introductionToPhilosophyModuleData,
  personalFinanceForBeginnersModuleData,
  scientificResearchSkillsModuleData,
];

const modulesFromLessons: ModuleData[] = [
  createModuleDataFromLessons('ai-machine-learning', 'AI & Machine Learning', aiMachineLearningLessons),
  // createModuleDataFromLessons('data-science', 'Data Science', DataScienceLessons),
  createModuleDataFromLessons('space-exploration', 'Space Exploration', spaceLessons),
  createModuleDataFromLessons('smart-manufacturing', 'Smart Manufacturing', smartManufacturingLessons),
  createModuleDataFromLessons('aerospace-engineering', 'Aerospace Engineering', aerospaceEngineeringLessons),
  createModuleDataFromLessons('advanced-ai', 'Advanced AI', advancedAILessons),
  createModuleDataFromLessons('vietnamese-culture', 'Vietnamese Culture', vietnameseCultureLessons),
  createModuleDataFromLessons('ai-content-creator', 'AI Content Creator', aiContentCreatorLessons),
  createModuleDataFromLessons('tiktok-social-commerce', 'TikTok Social Commerce', tiktokSocialCommerceLessons),
  // createModuleDataFromLessons('genz-marketing', 'GenZ Marketing', genZMarketingLessons),
  createModuleDataFromLessons('short-video-mastery', 'Short Video Mastery', shortVideoMasteryLessons),
  // createModuleDataFromLessons('live-commerce-streaming', 'Live Commerce Streaming', liveCommerceLessons),
  createModuleDataFromLessons('social-listening-crisis', 'Social Listening & Crisis', socialListeningLessons),
];

export const allModules: ModuleData[] = [...modulesWithFullData, ...modulesFromLessons];

const modulesById = new Map(allModules.map((module) => [module.id, module]));

// --- Public API for accessing module data ---

/**
 * Returns an array of all module data.
 */
export function getAllModules(): ModuleData[] {
  return allModules;
}

/**
 * Retrieves a single module by its ID.
 * @param id The kebab-case ID of the module.
 * @returns The module data or undefined if not found.
 */
export function getModuleById(id: string): ModuleData | undefined {
  return modulesById.get(id);
}

/**
 * Retrieves all lessons for a given module ID.
 * @param id The kebab-case ID of the module.
 * @returns An array of lessons or an empty array if the module is not found.
 */
export function getLessonsByModuleId(id: string): BaseLessonData[] {
  const moduleLearning = getModuleById(id);
  return moduleLearning?.lessons || [];
}
