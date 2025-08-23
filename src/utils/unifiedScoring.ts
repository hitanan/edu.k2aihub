// Unified Score System Integration for K2AI Platform
// This module provides unified scoring across all educational components

import { Achievement, Progress } from '@/components/gamification/LearningProgress';

export interface UnifiedScoreSystem {
  // Convert various game scores to standard learning points
  convertGameScore: (gameScore: number, gameType: string) => number;
  // Update learning progress with normalized points
  updateLearningProgress: (moduleId: string, points: number) => void;
  // Calculate global user ranking
  calculateGlobalRank: (userId: string) => number;
  // Sync achievements across all systems
  syncAchievements: () => void;
  // Link game completion to lesson progress
  linkGameToLesson: (gameId: string, lessonId: string, score: number) => void;
}

// Score conversion rates for different game types
const SCORE_CONVERSION_RATES = {
  'mini-game': 0.1, // 100 game points = 10 learning points
  '3d-game': 0.05, // 200 game points = 10 learning points
  quiz: 0.2, // 50 game points = 10 learning points
  simulation: 0.08, // 125 game points = 10 learning points
  puzzle: 0.15, // 67 game points = 10 learning points
  default: 0.1, // Default conversion rate
} as const;

// Game to lesson mapping
const GAME_LESSON_MAPPING: Record<string, string[]> = {
  // Python Programming Games
  'python-coding-puzzle': ['python-basics', 'python-functions', 'python-data-structures'],
  'python-algorithm-challenge': ['python-algorithms', 'python-problem-solving'],

  // Arduino & IoT Games
  'arduino-circuit-builder-3d': ['arduino-setup', 'arduino-inputs', 'arduino-sensors'],
  'iot-sensor-simulator': ['arduino-communication', 'arduino-advanced-projects'],

  // STEM Games
  'virtual-chemistry-lab-3d': ['stem-introduction', 'fun-physics-experiments'],
  'physics-playground': ['fun-physics-experiments', 'math-in-real-life'],

  // Robotics Games
  'robot-navigation-3d': ['robotics-basics', 'robotics-programming', 'robotics-navigation'],
  'drone-crop-monitoring-3d': ['robotics-advanced', 'robotics-applications'],

  // AI & Machine Learning Games
  'neural-network-builder-3d': ['ai-introduction', 'machine-learning-basics'],
  'ai-prompt-challenge': ['ai-prompt-engineering', 'ai-applications'],

  // Biotechnology Games
  'biotech-lab-simulation-3d': ['biotechnology-basics', 'biotechnology-applications'],
  'genetic-engineering-simulator': ['biotechnology-advanced'],

  // General Educational Games
  'vietnam-geography-quiz': ['geography-vietnam'],
  'space-exploration-3d': ['stem-introduction', 'astronomy-basics'],
};

// Normalize scores across different game types
export function normalizeScore(rawScore: number, gameType: keyof typeof SCORE_CONVERSION_RATES): number {
  const conversionRate = SCORE_CONVERSION_RATES[gameType] || SCORE_CONVERSION_RATES.default;
  return Math.round(rawScore * conversionRate);
}

// Link game achievements to learning progress
export function triggerCrossSystemAchievement(gameId: string, score: number, gameType: string): void {
  // Find related lessons
  const relatedLessons = GAME_LESSON_MAPPING[gameId] || [];

  // Convert score to learning points
  const learningPoints = normalizeScore(score, gameType as keyof typeof SCORE_CONVERSION_RATES);

  // Award lesson progress points for each related lesson
  relatedLessons.forEach((lessonId) => {
    updateLessonProgress(lessonId, learningPoints);
  });

  // Trigger global achievement check
  checkGlobalAchievements(gameId, score, learningPoints);
}

// Update lesson progress with game-derived points
function updateLessonProgress(lessonId: string, points: number): void {
  if (typeof window === 'undefined') return;

  try {
    // Get current learning progress
    const savedProgress = localStorage.getItem('k2ai_learning_progress');
    const progress = savedProgress ? JSON.parse(savedProgress) : [];

    // Find or create progress entry for the lesson's module
    const moduleId = extractModuleFromLesson(lessonId);
    let moduleProgress = progress.find((p: Progress) => p.moduleName === moduleId);

    if (!moduleProgress) {
      moduleProgress = {
        userId: 'user_' + Date.now(),
        moduleName: moduleId,
        lessonsCompleted: [],
        totalLessons: 10, // Default, should be dynamic
        completionPercentage: 0,
        timeSpent: 0,
        lastAccessDate: new Date().toISOString(),
        streak: 1,
        badges: [],
        points: 0,
        visits: 1,
        averageSessionTime: 0,
      };
      progress.push(moduleProgress);
    }

    // Add game-derived points to module progress
    moduleProgress.points += points;
    moduleProgress.lastAccessDate = new Date().toISOString();

    // Save updated progress
    localStorage.setItem('k2ai_learning_progress', JSON.stringify(progress));

    // Dispatch custom event for UI updates
    window.dispatchEvent(
      new CustomEvent('learningProgressUpdated', {
        detail: { moduleId, points, source: 'game' },
      }),
    );
  } catch (error) {
    console.error('Error updating lesson progress from game:', error);
  }
}

// Extract module ID from lesson ID
function extractModuleFromLesson(lessonId: string): string {
  // Extract module name from lesson ID pattern
  // e.g., 'python-basics' -> 'python', 'arduino-setup' -> 'arduino'
  const parts = lessonId.split('-');
  return parts[0] || 'general';
}

// Check for global achievements that span multiple systems
function checkGlobalAchievements(gameId: string, gameScore: number, learningPoints: number): void {
  if (typeof window === 'undefined') return;

  try {
    // Get current achievements
    const savedAchievements = localStorage.getItem('k2ai_achievements');
    const achievements = savedAchievements ? JSON.parse(savedAchievements) : [];

    // Check for cross-system achievements
    const newAchievements = [];

    // Game Master Achievement - Complete games in multiple categories
    if (!achievements.some((a: Achievement) => a.id === 'game_master')) {
      const gameProgress = JSON.parse(localStorage.getItem('k2ai_game_progress') || '{}');
      const completedGames = Object.keys(gameProgress).filter((id) => gameProgress[id].completed === true);

      if (completedGames.length >= 5) {
        newAchievements.push({
          id: 'game_master',
          title: 'Bậc thầy trò chơi',
          description: 'Hoàn thành 5 trò chơi giáo dục khác nhau',
          icon: '🎮',
          points: 100,
          unlockedAt: new Date().toISOString(),
          category: 'achievement',
        });
      }
    }

    // Learning Explorer Achievement - Earn points across multiple modules
    if (!achievements.some((a: Achievement) => a.id === 'learning_explorer')) {
      const learningProgress = JSON.parse(localStorage.getItem('k2ai_learning_progress') || '[]');
      const modulesWithProgress = learningProgress.filter((p: Progress) => p.points > 0);

      if (modulesWithProgress.length >= 3) {
        newAchievements.push({
          id: 'learning_explorer',
          title: 'Nhà thám hiểm học tập',
          description: 'Tích lũy điểm từ ít nhất 3 module khác nhau',
          icon: '🗺️',
          points: 75,
          unlockedAt: new Date().toISOString(),
          category: 'exploration',
        });
      }
    }

    // High Achiever - Reach high score in any game
    if (!achievements.some((a: Achievement) => a.id === 'high_achiever') && gameScore >= 500) {
      newAchievements.push({
        id: 'high_achiever',
        title: 'Thành tựu cao',
        description: 'Đạt điểm số 500+ trong một trò chơi',
        icon: '🏆',
        points: 50,
        unlockedAt: new Date().toISOString(),
        category: 'achievement',
      });
    }

    // Save new achievements
    if (newAchievements.length > 0) {
      const updatedAchievements = [...achievements, ...newAchievements];
      localStorage.setItem('k2ai_achievements', JSON.stringify(updatedAchievements));

      // Show achievement notifications
      newAchievements.forEach((achievement) => {
        showAchievementNotification(achievement);
      });
    }
  } catch (error) {
    console.error('Error checking global achievements:', error);
  }
}

// Show achievement notification
function showAchievementNotification(achievement: Achievement): void {
  // Create achievement notification element
  const notification = document.createElement('div');
  notification.className =
    'fixed top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-lg shadow-lg z-50 transform transition-all duration-300';
  notification.style.transform = 'translateX(100%)';

  notification.innerHTML = `
    <div class="flex items-center space-x-3">
      <div class="text-2xl">${achievement.icon}</div>
      <div>
        <div class="font-bold">${achievement.title}</div>
        <div class="text-sm opacity-90">${achievement.description}</div>
        <div class="text-xs opacity-75">+${achievement.points} điểm</div>
      </div>
    </div>
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  // Animate out and remove
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 4000);
}

// Calculate global user ranking based on total points across all systems
export function calculateGlobalRank(): { totalPoints: number; rank: string; percentile: number } {
  if (typeof window === 'undefined') {
    return { totalPoints: 0, rank: 'Tân binh', percentile: 0 };
  }

  try {
    // Get points from learning progress
    const learningProgress = JSON.parse(localStorage.getItem('k2ai_learning_progress') || '[]');
    const learningPoints = learningProgress.reduce((sum: number, p: Progress) => sum + (p.points || 0), 0);

    // Get points from achievements
    const achievements = JSON.parse(localStorage.getItem('k2ai_achievements') || '[]');
    const achievementPoints = achievements.reduce((sum: number, a: Achievement) => sum + (a.points || 0), 0);

    // Get normalized points from games
    const gameProgress = JSON.parse(localStorage.getItem('k2ai_game_progress') || '{}');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gamePoints = Object.values(gameProgress).reduce((sum: number, game: any) => {
      return sum + normalizeScore(game.score || 0, 'default');
    }, 0);

    const totalPoints = learningPoints + achievementPoints + gamePoints;

    // Determine rank based on total points
    let rank = 'Tân binh';
    let percentile = 0;

    if (totalPoints >= 1000) {
      rank = 'Chuyên gia';
      percentile = 90;
    } else if (totalPoints >= 500) {
      rank = 'Thành thạo';
      percentile = 75;
    } else if (totalPoints >= 250) {
      rank = 'Tiến bộ';
      percentile = 50;
    } else if (totalPoints >= 100) {
      rank = 'Học viên';
      percentile = 25;
    }

    return { totalPoints, rank, percentile };
  } catch (error) {
    console.error('Error calculating global rank:', error);
    return { totalPoints: 0, rank: 'Tân binh', percentile: 0 };
  }
}

// Export the unified score system
export const UNIFIED_SCORE_SYSTEM: UnifiedScoreSystem = {
  convertGameScore: (gameScore: number, gameType: string) => {
    return normalizeScore(gameScore, gameType as keyof typeof SCORE_CONVERSION_RATES);
  },

  updateLearningProgress: (moduleId: string, points: number) => {
    updateLessonProgress(moduleId, points);
  },

  calculateGlobalRank: () => {
    const result = calculateGlobalRank();
    return result.totalPoints;
  },

  syncAchievements: () => {
    // Trigger achievement sync across all systems
    checkGlobalAchievements('sync', 0, 0);
  },

  linkGameToLesson: (gameId: string, lessonId: string, score: number) => {
    const learningPoints = normalizeScore(score, 'default');
    updateLessonProgress(lessonId, learningPoints);
    triggerCrossSystemAchievement(gameId, score, 'default');
  },
};

// Global integration hook for games to use
export function useUnifiedScoring() {
  const recordGameScore = (gameId: string, score: number, gameType: string = 'default') => {
    // Record in game progress system
    if (typeof window !== 'undefined') {
      const gameProgress = JSON.parse(localStorage.getItem('k2ai_game_progress') || '{}');
      gameProgress[gameId] = {
        ...gameProgress[gameId],
        score: Math.max(gameProgress[gameId]?.score || 0, score),
        lastPlayed: Date.now(),
        completed: score > 50, // Consider completed if score > 50
      };
      localStorage.setItem('k2ai_game_progress', JSON.stringify(gameProgress));
    }

    // Trigger cross-system integration
    triggerCrossSystemAchievement(gameId, score, gameType);
  };

  const getGlobalStats = () => calculateGlobalRank();

  return {
    recordGameScore,
    getGlobalStats,
    normalizeScore: (score: number, type: string) => normalizeScore(score, type as keyof typeof SCORE_CONVERSION_RATES),
  };
}
