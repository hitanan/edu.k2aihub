// Centralized export for all game data interfaces and data
export type { GeographyQuizGameData } from './geographyQuizData';
export type { AIPromptChallengeGameData } from './aiPromptChallengeData';
export type { PythonCodingPuzzleGameData } from './pythonCodingPuzzleData';
export type { ArduinoCircuitBuilderGameData } from './arduinoCircuitBuilderData';
export type { STEMExperimentLabGameData } from './stemExperimentLabData';
export type { RoboticsNavigationGameData } from './roboticsNavigationData';
export type { MemoryMatchGameData } from './memoryMatchData';
export type { MathPuzzleSolverGameData } from './mathPuzzleSolverData';

export { geographyQuizData } from './geographyQuizData';
export { aiPromptChallengeData } from './aiPromptChallengeData';
export { pythonCodingPuzzleData } from './pythonCodingPuzzleData';
export { ARDUINO_CIRCUIT_BUILDER_DATA } from './arduinoCircuitBuilderData';
export { STEM_EXPERIMENT_LAB_DATA } from './stemExperimentLabData';
export { ROBOTICS_NAVIGATION_DATA } from './roboticsNavigationData';
export { MEMORY_MATCH_DATA } from './memoryMatchData';
export { MATH_PUZZLE_SOLVER_DATA } from './mathPuzzleSolverData';

// Re-export everything from original gameData for backward compatibility
export * from '../gameData';
