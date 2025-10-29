/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import { useState, useEffect, useCallback } from 'react';
import { Trophy, Clock, X, ArrowLeft, RotateCcw, Play, Target, HelpCircle, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import FullscreenButton from './FullscreenButton';
import { splitIntoParagraphs } from '@/utils/textFormatting';
import {
  GAME_DATA,
  STEMExperimentLabGameData,
  AIEthicsDilemmaGameData,
  QuantumBasicsGameData,
  MathPuzzleGameData,
  GAME_PROGRESS,
} from '@/data/gameData';
import { EducationalGame } from '@/data/educationalGames';
import GameCompletionCelebration from './GameCompletionCelebration';
import {
  BiologyEcosystemGame,
  HistoryTimelineGame,
  ChemistryLabGame,
  RoboticsNavigationGame,
  TreasureHuntGame,
  NeuralNetworkBuilderGame,
  SpaceExplorationGame,
  DataVisualizationGame,
  GeographyQuizGame,
  AIPromptGame,
  PythonCodingGame,
  ArduinoCircuitGame,
  STEMExperimentGame,
  AIEthicsGame,
  MathPuzzleGame,
  QuantumBasicsGame,
  BlockchainExplorerGame,
  ClimateModelingGame,
  CybersecurityDefenseGame,
  ScratchAnimationStudioGame,
  GlobalMarketplaceSimulatorGame,
  AquacultureIoTManagerGame,
  SmartFarmingSimulatorGame,
  DroneCropMonitoringGame,
  FactoryAutomationSimulatorGame,
  SupplyChainOptimizationChallengeGame,
  OffshoreWindPlannerGame,
  BlueCarbonTrackerGame,
  TrafficManagementSimulatorGame,
  VirtualClassroomManagerGame,
  SmartParkingPuzzleGame,
  FoodTechInnovatorGame,
  DigitalMarketingCampaignGame,
  BiotechLabSimulationGame,
  EGovernmentPortalGame,
  MLModelBuilderGame,
  CulturalLocalizationChallengeGame,
  GameDevStudioGame,
  MedicalDeviceDesignerGame,
  NanoLabExplorerGame,
  EVChargingNetworkGame,
  MentalHealthAppGame,
  ClimateDataAnalystGame,
  AIResearchLabGame,
  ContentCreatorStudioGame,
  VietnameseHeritageExplorerGame,
  CurrencyExchangePuzzleGame,
  AILanguageTutorGame,
  SmartHomeDesignerGame,
  VirtualPropertyTourGame,
  RecyclingPlantManagerGame,
  WasteToEnergyPuzzleGame,
  AerospaceMissionControlGame,
  VirtualChemistryLab3D,
  SpaceExploration3DGame,
  RobotNavigation3DGame,
} from './individual';
import LogicalFallacyDetector from './LogicalFallacyDetector';
import PresentationMaster from './PresentationMaster';

// Import newly created game components
import DigitalCitizenshipEthicsSimulatorGame from './individual/DigitalCitizenshipEthicsSimulatorGame';
import PrivacyProtectionChallengeGame from './individual/PrivacyProtectionChallengeGame';
import AIArtCreationLabGame from './individual/AIArtCreationLabGame';
import FutureScenarioBuilder3DGame from './FutureScenarioBuilder3DGame';
import AgileDevelopmentSimulatorGame from './individual/AgileDevelopmentSimulatorGame';
import SEOOptimizationChallengeGame from './individual/SEOOptimizationChallengeGame';
import TrendAnalysisDetectiveGame from './individual/TrendAnalysisDetectiveGame';
import DigitalTransformationSimulatorGame from './individual/DigitalTransformationSimulatorGame';
import InformationSecurityTrainingGame from './individual/InformationSecurityTrainingGame';
import UXDesignStudio3DGame from './UXDesignStudio3DGame';
import InterfaceDesignChallengeGame from './individual/InterfaceDesignChallengeGame';
import EnergyOptimizationSimulatorGame from './individual/EnergyOptimizationSimulatorGame';
import StressResilienceTrainingGame from './individual/StressResilienceTrainingGame';
import CulturalIntelligenceNavigator3DGame from './CulturalIntelligenceNavigator3DGame';
import InternationalNetworkingChallengeGame from './individual/InternationalNetworkingChallengeGame';
import SocialMediaCampaignBuilderGame from './individual/SocialMediaCampaignBuilderGame';
import InvestmentPortfolioSimulatorGame from './individual/InvestmentPortfolioSimulatorGame';
import CryptoDeFiAdventureGame from './individual/CryptoDeFiAdventureGame';
import RenewableEnergyGridManagerGame from './individual/RenewableEnergyGridManagerGame';
import GameDesignStudio3DGame from './GameDesignStudio3DGame';
import EthicalHackingSimulatorGame from './individual/EthicalHackingSimulatorGame';
import GeneEditingLab3DGame from './GeneEditingLab3DGame';
import FutureSkillsIntegrationChallengeGame from './individual/FutureSkillsIntegrationChallengeGame';

// Import 3D game components that exist as separate components
import TrafficManagementSimulator3D from './TrafficManagementSimulator3D';
import EnhancedSpaceStationBuilder3D from './EnhancedSpaceStationBuilder3D';
import NeuralNetworkBuilder3D from './NeuralNetworkBuilder3D';
import SmartCityPlanner3D from './SmartCityPlanner3D';
import OceanConservation3D from './OceanConservation3D';
import AquacultureIoTManager3D from './AquacultureIoTManager3D';
import PhysicsExperimentLab3D from './PhysicsExperimentLab3D';
import IoTSmartCityBuilder3D from './IoTSmartCityBuilder3D';
import AIPythonCodingAssistantGame from './individual/AIPythonCodingAssistantGame';
import AutonomousRobotMission3D from './AutonomousRobotMission3D';

// Additional new game components for the missing games
import CircularEconomyResourceFlow3DGame from './CircularEconomyResourceFlow3DGame';
import CareerDevelopmentVirtualMentor3DGame from './CareerDevelopmentVirtualMentor3DGame';
import SemiconductorDesignPuzzleGame from './individual/SemiconductorDesignPuzzleGame';
import LogisticsNetworkSimGame from './individual/LogisticsNetworkSimGame';
import PsychologyPuzzleBoxGame from './individual/PsychologyPuzzleBoxGame';
import DataDetectiveGame from './individual/DataDetectiveGame';
import SoftSkillsScenarioGame from './individual/SoftSkillsScenarioGame';
import EventPlannerProGame from './individual/EventPlannerProGame';
import InternationalBusinessSimGame from './individual/InternationalBusinessSimGame';

interface MiniGameProps {
  game: EducationalGame;
  onComplete: (score: number) => void;
  onExit: () => void;
}

export function MiniGamePlayer({ game, onComplete, onExit }: MiniGameProps) {
  const [showGameInfo, setShowGameInfo] = useState<boolean>(true);
  const [expandedFAQs, setExpandedFAQs] = useState<Set<number>>(new Set());
  const [currentGameState, setCurrentGameState] = useState<string>('playing');
  const [timeLeft, setTimeLeft] = useState<number>(120); // 2 minutes per game
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
  const [showCelebration, setShowCelebration] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [completionTime, setCompletionTime] = useState<number>(0);
  const [achievements, setAchievements] = useState<string[]>([]);

  const getTimeBonus = useCallback(() => {
    const timeUsed = 120 - timeLeft;
    const timePercentage = timeUsed / 120;
    return Math.max(0, Math.round(50 * (1 - timePercentage))); // Up to 50 bonus points
  }, [timeLeft]);

  const toggleFAQ = (index: number) => {
    setExpandedFAQs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Cơ bản':
        return 'text-green-400 bg-green-500/20';
      case 'Trung bình':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'Nâng cao':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-blue-400 bg-blue-500/20';
    }
  };

  const handleStartGame = () => {
    setShowGameInfo(false);
  };

  // Enhanced timer with visual feedback
  useEffect(() => {
    if (currentGameState !== 'playing' || !isTimerActive) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up, show timeout message and return to menu
          setIsTimerActive(false);
          setCurrentGameState('timeout');
          return 0; // Set to 0 instead of resetting to 120
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentGameState, isTimerActive]); // Remove dependencies that change on every render
  const handleGameComplete = (score: number): void => endGame(true, score);

  const endGame = (success: boolean, rawScore: number = score) => {
    setIsTimerActive(false);
    const timeBonus = getTimeBonus();
    const streakBonus = maxStreak * 10;
    const perfectBonus = lives === 3 ? 25 : 0;
    const calculatedFinalScore = Math.round(rawScore + timeBonus + streakBonus + perfectBonus);
    const gameCompletionTime = 120 - timeLeft;

    // Calculate achievements
    const gameAchievements: string[] = [];
    if (lives === 3) gameAchievements.push('🏃 Hoàn hảo - Không mất mạng nào!');
    if (timeLeft > 60) gameAchievements.push('⚡ Tốc độ - Hoàn thành nhanh!');
    if (maxStreak >= 5) gameAchievements.push('🔥 Chuỗi thắng - ' + maxStreak + ' điểm liên tiếp!');
    if (calculatedFinalScore >= 100) gameAchievements.push('🏆 Điểm cao - Điểm số xuất sắc!');
    if (success && gameCompletionTime <= 30) gameAchievements.push('🚀 Siêu tốc - Hoàn thành trong 30 giây!');

    GAME_PROGRESS.saveProgress(game.id, {
      score: calculatedFinalScore,
      accuracy: success ? Math.min(100, rawScore) : Math.max(0, rawScore),
      timeMs: gameCompletionTime * 1000,
      completed: success || rawScore > 50,
      lastPlayed: Date.now(),
    });

    // Set celebration data
    setFinalScore(calculatedFinalScore);
    setCompletionTime(gameCompletionTime);
    setAchievements(gameAchievements);
    setShowCelebration(true);

    // Add delay before calling onComplete to let user see celebration
    setTimeout(() => {
      onComplete(calculatedFinalScore);
    }, 3000); // 3 second delay
  };

  const restartGame = () => {
    setCurrentGameState('playing');
    setTimeLeft(120); // Reset timer to 2 minutes
    setScore(0);
    setLives(3);
    setStreak(0);
    setIsTimerActive(true);
    setShowCelebration(false);
    setFinalScore(0);
    setCompletionTime(0);
    setAchievements([]);
  };

  const renderGameContent = () => {
    switch (game.id) {
      case 'vietnam-geography-quiz':
        return (
          <GeographyQuizGame
            gameData={GAME_DATA[game.id] as any}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={restartGame}
          />
        );
      case 'ai-prompt-challenge':
        return (
          <AIPromptGame
            gameData={GAME_DATA[game.id] as any}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={restartGame}
          />
        );
      case 'python-coding-puzzle':
        return (
          <PythonCodingGame
            gameData={GAME_DATA[game.id] as any}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={restartGame}
          />
        );
      case 'arduino-circuit-builder':
        return (
          <ArduinoCircuitGame
            gameData={GAME_DATA[game.id] as any}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={restartGame}
          />
        );
      case 'stem-experiment-lab':
        return (
          <STEMExperimentGame
            gameData={GAME_DATA[game.id] as STEMExperimentLabGameData}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={restartGame}
          />
        );
      case 'robotics-navigation':
        return <RoboticsNavigationGame onComplete={endGame} timeLeft={timeLeft} />;
      case 'robot-navigation-3d':
        return <RobotNavigation3DGame onComplete={endGame} timeLeft={timeLeft} />;
      case 'ai-ethics-dilemma':
        return (
          <AIEthicsGame
            gameData={GAME_DATA[game.id] as AIEthicsDilemmaGameData}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={restartGame}
          />
        );
      case 'quantum-basics':
        return (
          <QuantumBasicsGame
            gameData={GAME_DATA[game.id] as QuantumBasicsGameData}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={restartGame}
          />
        );
      case 'blockchain-explorer':
        return <BlockchainExplorerGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'climate-modeling':
        return <ClimateModelingGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'cybersecurity-defense':
        return <CybersecurityDefenseGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'data-visualization':
        return <DataVisualizationGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'space-exploration':
        return <SpaceExplorationGame onComplete={endGame} timeLeft={timeLeft} />;
      case 'neural-network-builder-3d':
        return <NeuralNetworkBuilderGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'math-puzzle':
        return (
          <MathPuzzleGame
            gameData={GAME_DATA[game.id] as MathPuzzleGameData}
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={restartGame}
          />
        );
      case 'chemistry-lab':
        return <ChemistryLabGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'biology-ecosystem':
        return <BiologyEcosystemGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'history-timeline':
        return <HistoryTimelineGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'treasure-hunt-adventure':
        return <TreasureHuntGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'scratch-animation-studio':
        return <ScratchAnimationStudioGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'global-marketplace-simulator':
        return <GlobalMarketplaceSimulatorGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'aquaculture-iot-manager':
        return <AquacultureIoTManagerGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'smart-farming-simulator':
        return <SmartFarmingSimulatorGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'drone-crop-monitoring-3d':
        return <DroneCropMonitoringGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'factory-automation-simulator-3d':
        return <FactoryAutomationSimulatorGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'supply-chain-optimization-challenge':
        return (
          <SupplyChainOptimizationChallengeGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />
        );
      case 'offshore-wind-planner':
        return <OffshoreWindPlannerGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'blue-carbon-tracker':
        return <BlueCarbonTrackerGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'traffic-management-simulator':
        return <TrafficManagementSimulatorGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'virtual-classroom-manager':
        return <VirtualClassroomManagerGame onComplete={endGame} />;
      case 'smart-parking-puzzle':
        return <SmartParkingPuzzleGame onComplete={endGame} />;
      case 'food-tech-innovator':
        return <FoodTechInnovatorGame onComplete={endGame} />;
      case 'digital-marketing-campaign':
        return <DigitalMarketingCampaignGame onComplete={handleGameComplete} />;
      case 'biotech-lab-simulation-3d':
        return <BiotechLabSimulationGame onComplete={handleGameComplete} />;
      case 'e-government-portal':
        return <EGovernmentPortalGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'ml-model-builder':
        return <MLModelBuilderGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'cultural-localization-challenge':
        return <CulturalLocalizationChallengeGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'game-dev-studio':
        return <GameDevStudioGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'medical-device-designer-3d':
        return <MedicalDeviceDesignerGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'nano-lab-explorer':
        return <NanoLabExplorerGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'ev-charging-network':
        return <EVChargingNetworkGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'mental-health-app':
        return <MentalHealthAppGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'climate-data-analyst':
        return <ClimateDataAnalystGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'ai-research-lab':
        return <AIResearchLabGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'content-creator-studio':
        return <ContentCreatorStudioGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'vietnamese-heritage-explorer':
        return <VietnameseHeritageExplorerGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'currency-exchange-puzzle':
        return <CurrencyExchangePuzzleGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'ai-language-tutor':
        return <AILanguageTutorGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'smart-home-designer':
        return <SmartHomeDesignerGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'virtual-property-tour':
        return <VirtualPropertyTourGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'recycling-plant-manager':
        return <RecyclingPlantManagerGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'waste-to-energy-puzzle':
        return <WasteToEnergyPuzzleGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'aerospace-mission-control':
        return <AerospaceMissionControlGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'virtual-chemistry-lab-3d':
        return <VirtualChemistryLab3D onComplete={(success, score) => endGame(success, score)} />;
      case 'space-exploration-3d':
        return (
          <SpaceExploration3DGame
            onComplete={(success, score) => endGame(success, score)}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'logical-fallacy-detector':
        return <LogicalFallacyDetector onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'presentation-master':
        return <PresentationMaster onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'traffic-management-simulator-3d':
        return <TrafficManagementSimulator3D />;
      case 'neural-network-builder-3d':
        return <NeuralNetworkBuilder3D onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'space-station-builder-3d':
        return <EnhancedSpaceStationBuilder3D onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'smart-city-planner-3d':
        return <SmartCityPlanner3D />;
      case 'ocean-conservation-3d':
        return <OceanConservation3D onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'aquaculture-iot-manager-3d':
        return <AquacultureIoTManager3D onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;

      // NEW GAMES FROM 5 MODULE INTEGRATION
      case 'digital-citizenship-ethics-simulator':
        return (
          <DigitalCitizenshipEthicsSimulatorGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'privacy-protection-challenge':
        return (
          <PrivacyProtectionChallengeGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'future-scenario-builder-3d':
        return (
          <FutureScenarioBuilder3DGame
            onComplete={() => endGame(true, score)}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'trend-analysis-detective':
        return <TrendAnalysisDetectiveGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'ux-design-studio-3d':
        return (
          <UXDesignStudio3DGame
            onComplete={() => endGame(true, score)}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'interface-design-challenge':
        return (
          <InterfaceDesignChallengeGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'energy-optimization-simulator':
        return (
          <EnergyOptimizationSimulatorGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'stress-resilience-training':
        return (
          <StressResilienceTrainingGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'cultural-intelligence-navigator-3d':
        return (
          <CulturalIntelligenceNavigator3DGame
            onComplete={() => endGame(true, score)}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'international-networking-challenge':
        return (
          <InternationalNetworkingChallengeGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'social-media-campaign-builder':
        return (
          <SocialMediaCampaignBuilderGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'seo-optimization-challenge':
        return (
          <SEOOptimizationChallengeGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'agile-development-simulator':
        return (
          <AgileDevelopmentSimulatorGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'digital-transformation-simulator':
        return (
          <DigitalTransformationSimulatorGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'information-security-training':
        return (
          <InformationSecurityTrainingGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );

      // ENHANCED EXISTING MODULE GAMES
      case 'investment-portfolio-simulator':
        return (
          <InvestmentPortfolioSimulatorGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'crypto-defi-adventure':
        return <CryptoDeFiAdventureGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'renewable-energy-grid-manager':
        return (
          <RenewableEnergyGridManagerGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'game-design-studio-3d':
        return (
          <GameDesignStudio3DGame
            onComplete={() => endGame(true, score)}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'ai-art-creation-lab':
        return <AIArtCreationLabGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'future-skills-integration-challenge':
        return (
          <FutureSkillsIntegrationChallengeGame
            onComplete={(score: number) => {
              // Determine success based on score
              const success = score > 50; // Adjust threshold as needed
              endGame(success, score);
            }}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'ethical-hacking-simulator':
        return <EthicalHackingSimulatorGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'gene-editing-lab-3d':
        return (
          <GeneEditingLab3DGame
            onComplete={() => endGame(true, score)}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'physics-experiment-lab-3d':
        return <PhysicsExperimentLab3D onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'iot-smart-city-builder-3d':
        return <IoTSmartCityBuilder3D onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'ai-python-coding-assistant':
        return <AIPythonCodingAssistantGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'autonomous-robot-mission-3d':
        return <AutonomousRobotMission3D onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;

      // New games implementation
      case 'circular-economy-resource-flow-3d':
        return (
          <CircularEconomyResourceFlow3DGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'career-development-virtual-mentor-3d':
        return (
          <CareerDevelopmentVirtualMentor3DGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'global-marketplace-manager':
        return (
          <GlobalMarketplaceSimulatorGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'precision-farm-manager':
        return <SmartFarmingSimulatorGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'sustainable-aquaculture-sim':
        return <AquacultureIoTManagerGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'semiconductor-design-puzzle':
        return (
          <SemiconductorDesignPuzzleGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'logistics-network-sim':
        return <LogisticsNetworkSimGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'interstellar-explorer-3d':
        return <SpaceExploration3DGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'psychology-puzzle-box':
        return <PsychologyPuzzleBoxGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'data-detective':
        return <DataDetectiveGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'ux-ui-design-challenge':
        return <UXDesignStudio3DGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'soft-skills-scenario':
        return <SoftSkillsScenarioGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'future-scenario-planner':
        return <FutureScenarioBuilder3DGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'digital-citizen-dilemma':
        return (
          <DigitalCitizenshipEthicsSimulatorGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'cross-cultural-negotiation':
        return (
          <CulturalIntelligenceNavigator3DGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'personal-energy-manager':
        return (
          <EnergyOptimizationSimulatorGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'event-planner-pro':
        return <EventPlannerProGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'gov-tech-service-designer':
        return <EGovernmentPortalGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;
      case 'international-business-sim':
        return (
          <InternationalBusinessSimGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />
        );
      case 'supply-chain-manager':
        return (
          <SupplyChainOptimizationChallengeGame
            onComplete={endGame}
            timeLeft={timeLeft}
            onRestart={() => restartGame()}
          />
        );
      case 'sustainable-farm-sim':
        return <SmartFarmingSimulatorGame onComplete={endGame} timeLeft={timeLeft} onRestart={() => restartGame()} />;

      default:
        return <div className="text-white">Game not implemented yet!</div>;
    }
  };

  // Show game information screen before starting the game
  if (showGameInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={onExit}
            className="inline-flex items-center text-purple-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại
          </button>

          {/* Game Hero */}
          <div className={`bg-gradient-to-r ${game.color} rounded-3xl p-1 mb-8`}>
            <div className="bg-slate-900/90 rounded-3xl p-6 md:p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-5xl md:text-6xl">{game.icon}</span>
                <div className="flex-1">
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{game.title}</h1>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(game.difficulty)}`}>
                      {game.difficulty}
                    </span>
                    <span className="text-gray-300 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {game.estimatedTime}
                    </span>
                    <span className="text-yellow-400 text-sm flex items-center">
                      <Trophy className="w-4 h-4 mr-1" />
                      {game.points} điểm
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="text-gray-300 text-base md:text-lg mb-6 space-y-3">
                {splitIntoParagraphs(game.description, 3).map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">Kỹ năng phát triển:</h3>
                <div className="flex flex-wrap gap-2">
                  {game.skills?.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Start Game Button */}
              <button
                onClick={handleStartGame}
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-3" />
                Bắt đầu Practice
              </button>
            </div>
          </div>

          {/* Learning Objectives */}
          {game.learningObjectives && game.learningObjectives.length > 0 && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-green-400" />
                Mục tiêu học tập chi tiết
              </h2>
              <div className="space-y-4">
                {game.learningObjectives.map((objective, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 md:p-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-300 font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 text-gray-300 text-sm md:text-base space-y-2">
                        {splitIntoParagraphs(objective, 2).map((paragraph, pIdx) => (
                          <p key={pIdx} className="leading-relaxed">{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {game.faqs && game.faqs.length > 0 && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                <HelpCircle className="w-6 h-6 mr-3 text-yellow-400" />
                Câu hỏi thường gặp (FAQs)
              </h2>
              <div className="space-y-4">
                {game.faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-4 md:p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-start space-x-3 md:space-x-4 flex-1">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-300 font-bold text-sm">
                            Q{index + 1}
                          </div>
                        </div>
                        <h3 className="text-white font-semibold text-base md:text-lg pr-4">{faq.question}</h3>
                      </div>
                      <div className="flex-shrink-0">
                        {expandedFAQs.has(index) ? (
                          <ChevronUp className="w-5 h-5 text-yellow-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-yellow-400" />
                        )}
                      </div>
                    </button>
                    {expandedFAQs.has(index) && (
                      <div className="px-4 md:px-6 pb-4 md:pb-6 md:pl-[72px] pl-14">
                        <div className="text-gray-300 text-sm md:text-base space-y-3 border-l-2 border-yellow-500/30 pl-4 md:pl-6">
                          {splitIntoParagraphs(faq.answer, 2).map((paragraph, pIdx) => (
                            <p key={pIdx} className="leading-relaxed">{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Game Instructions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-purple-400" />
              Hướng dẫn chơi
            </h2>
            <div className="text-gray-300 space-y-2 text-sm md:text-base">
              {game.category.includes('quiz') && (
                <>
                  <p>• Đọc câu hỏi và chọn đáp án đúng</p>
                  <p>• Mỗi câu hỏi có 4 lựa chọn</p>
                  <p>• Hoàn thành tất cả câu hỏi để nhận điểm</p>
                </>
              )}
              {game.category.includes('puzzle') && (
                <>
                  <p>• Sử dụng logic để giải các bài toán</p>
                  <p>• Kéo thả để sắp xếp các phần tử</p>
                  <p>• Hoàn thành càng nhanh càng nhiều điểm</p>
                </>
              )}
              {game.category.includes('simulation') && (
                <>
                  <p>• Tương tác với giao diện mô phỏng</p>
                  <p>• Thực hiện các thí nghiệm ảo</p>
                  <p>• Quan sát và ghi nhận kết quả</p>
                </>
              )}
              {game.category.includes('coding') && (
                <>
                  <p>• Viết code để giải quyết bài toán</p>
                  <p>• Kiểm tra và sửa lỗi syntax</p>
                  <p>• Chạy thử và xem kết quả</p>
                </>
              )}
              {game.category.includes('3D') && (
                <>
                  <p>• Khám phá môi trường 3D tương tác</p>
                  <p>• Sử dụng chuột/bàn phím để điều khiển</p>
                  <p>• Hoàn thành các nhiệm vụ trong game</p>
                </>
              )}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <button
              onClick={handleStartGame}
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-12 rounded-2xl font-bold text-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Play className="w-6 h-6 mr-3" />
              Bắt đầu Practice ngay
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentGameState === 'timeout') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-red-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-red-500/20">
          <div className="text-center">
            <Clock className="w-16 h-16 mx-auto mb-4 text-red-400" />
            <h2 className="text-2xl font-bold text-white mb-2">Hết thời gian!</h2>
            <p className="text-gray-300 mb-2">Thời gian chơi đã kết thúc.</p>
            <p className="text-sm text-gray-400 mb-6">Điểm số hiện tại: {score} điểm</p>

            <div className="space-y-3">
              <button
                onClick={onExit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Practice again
              </button>

              <button
                onClick={onExit}
                className="w-full bg-white/10 text-white py-3 px-6 rounded-xl font-medium hover:bg-white/20 transition-all duration-200"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentGameState === 'failed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-red-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-red-500/20">
          <div className="text-center">
            <X className="w-16 h-16 mx-auto mb-4 text-red-400" />
            <h2 className="text-2xl font-bold text-white mb-2">Hết thời gian!</h2>
            <p className="text-gray-300 mb-6">Đừng lo, hãy thử lại!</p>

            <div className="space-y-3">
              <button
                onClick={onExit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Practice again
              </button>

              <button
                onClick={onExit}
                className="w-full bg-white/10 text-white py-3 px-6 rounded-xl font-medium hover:bg-white/20 transition-all duration-200"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      {/* Game Header */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10 relative overflow-hidden">
          {/* Streak effect */}
          {streak > 0 && (
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onExit}
                className="text-white hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">{game.title}</h1>
                <p className="text-sm text-gray-400">
                  {game.difficulty} • {game.category.join(', ')}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {/* Fullscreen Button for 3D Games */}
              {game.category.includes('3D') && (
                <FullscreenButton
                  targetElementId="game-container"
                  size="small"
                  position="relative"
                  showIcon={true}
                  buttonText="Toàn màn hình"
                  className="hidden md:flex"
                />
              )}

              {/* Timer with visual warning */}
              <div
                className={`flex items-center space-x-1 ${timeLeft <= 30 ? 'text-red-400 animate-pulse' : timeLeft <= 60 ? 'text-yellow-400' : 'text-emerald-400'}`}
              >
                <Clock className="w-5 h-5" />
                <span className="font-bold text-lg">
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Score with animation */}
              <div className="flex items-center space-x-1 text-yellow-400">
                <Trophy className="w-5 h-5" />
                <span className="font-bold text-lg">{score}</span>
              </div>

              {/* Streak counter */}
              {streak > 0 && (
                <div className="flex items-center space-x-1 text-orange-400 animate-bounce">
                  <span className="text-lg">🔥</span>
                  <span className="font-bold text-lg">{streak}x</span>
                </div>
              )}

              {/* Lives with hearts */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: 3 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${i < lives ? 'text-red-500' : 'text-gray-600'} transition-all duration-300`}
                  >
                    ❤️
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced progress bar with segments */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <span>Tiến độ thời gian</span>
              <span>{Math.round((timeLeft / 120) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-3 relative overflow-hidden">
              <div
                className={`h-3 rounded-full transition-all duration-1000 ${
                  timeLeft <= 30
                    ? 'bg-gradient-to-r from-red-500 to-orange-500'
                    : timeLeft <= 60
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                      : 'bg-gradient-to-r from-emerald-500 to-blue-500'
                }`}
                style={{ width: `${(timeLeft / 120) * 100}%` }}
              />
              {/* Pulse effect for low time */}
              {timeLeft <= 30 && <div className="absolute inset-0 bg-red-400/30 animate-pulse rounded-full"></div>}
            </div>
          </div>

          {/* Bonus indicators */}
          {(streak > 2 || timeLeft > 90) && (
            <div className="mt-3 flex justify-center space-x-4 text-xs">
              {streak > 2 && (
                <div className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full border border-orange-500/30">
                  🔥 Streak x{streak}
                </div>
              )}
              {timeLeft > 90 && (
                <div className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full border border-blue-500/30">
                  ⚡ Speed Bonus
                </div>
              )}
              {lives === 3 && score > 30 && (
                <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                  💎 Perfect Run
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Game Content */}
      <div id="game-container" data-game-container className="max-w-4xl mx-auto">
        {renderGameContent()}
      </div>

      {/* Game Completion Celebration */}
      <GameCompletionCelebration
        isVisible={showCelebration}
        gameName={game.title}
        finalScore={finalScore}
        achievements={achievements}
        completionTime={completionTime}
        onClose={() => {
          setShowCelebration(false);
          onExit();
        }}
        onPlayAgain={() => {
          setShowCelebration(false);
          // Reset game state
          setCurrentGameState('playing');
          setTimeLeft(120);
          setScore(0);
          setLives(3);
          setStreak(0);
          setMaxStreak(0);
          setIsTimerActive(true);
        }}
        onNextGame={() => {
          setShowCelebration(false);
          onExit(); // This should trigger navigation to next game
        }}
      />
    </div>
  );
}
