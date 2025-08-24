/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import { useState, useEffect, useCallback } from 'react';
import { Trophy, Clock, X, ArrowLeft, RotateCcw } from 'lucide-react';
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

interface MiniGameProps {
  game: EducationalGame;
  onComplete: (score: number) => void;
  onExit: () => void;
}

export function MiniGamePlayer({ game, onComplete, onExit }: MiniGameProps) {
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
      case 'neural-network-builder':
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
      case 'drone-crop-monitoring':
        return <DroneCropMonitoringGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'factory-automation-simulator':
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
      case 'biotech-lab-simulation':
        return <BiotechLabSimulationGame onComplete={handleGameComplete} />;
      case 'e-government-portal':
        return <EGovernmentPortalGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'ml-model-builder':
        return <MLModelBuilderGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'cultural-localization-challenge':
        return <CulturalLocalizationChallengeGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'game-dev-studio':
        return <GameDevStudioGame onComplete={endGame} timeLeft={timeLeft} onRestart={restartGame} />;
      case 'medical-device-designer':
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
        return <SpaceExploration3DGame onComplete={(success, score) => endGame(success, score)} timeLeft={timeLeft} />;
      case 'logical-fallacy-detector':
        return <LogicalFallacyDetector />;
      case 'presentation-master':
        return <PresentationMaster />;
      default:
        return <div className="text-white">Game not implemented yet!</div>;
    }
  };

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
                Chơi lại
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
                Chơi lại
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
                  {game.difficulty} • {game.category}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
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
      <div className="max-w-4xl mx-auto">{renderGameContent()}</div>

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
