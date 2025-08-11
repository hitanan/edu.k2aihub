'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, BookOpen, Clock, TrendingUp, Star } from 'lucide-react';

// Learning progress types
export interface LearningProgress {
  userId: string;
  moduleName: string;
  lessonsCompleted: string[];
  totalLessons: number;
  completionPercentage: number;
  timeSpent: number; // in minutes
  lastAccessDate: string;
  streak: number; // consecutive days
  badges: Badge[];
  points: number;
  visits: number; // track visit count
  averageSessionTime: number; // average time per session
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
  category: 'completion' | 'streak' | 'time' | 'exploration' | 'achievement';
  points: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
  condition: (progress: LearningProgress[]) => boolean;
}

// Predefined achievements
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_lesson',
    title: 'Bước đầu tiên',
    description: 'Hoàn thành bài học đầu tiên',
    icon: '🎯',
    points: 10,
    condition: (progress) => progress.some((p) => p.lessonsCompleted.length > 0),
  },
  {
    id: 'module_master',
    title: 'Chuyên gia module',
    description: 'Hoàn thành 100% một module',
    icon: '🏆',
    points: 50,
    condition: (progress) => progress.some((p) => p.completionPercentage === 100),
  },
  {
    id: 'speed_learner',
    title: 'Học nhanh',
    description: 'Hoàn thành 3 bài học trong 1 ngày',
    icon: '⚡',
    points: 25,
    condition: (progress) => {
      const today = new Date().toDateString();
      return progress.some((p) => {
        const todayLessons = p.lessonsCompleted.filter((lesson) => {
          const lessonDate = new Date(lesson).toDateString();
          return lessonDate === today;
        });
        return todayLessons.length >= 3;
      });
    },
  },
  {
    id: 'consistent_learner',
    title: 'Học đều đặn',
    description: 'Học 7 ngày liên tiếp',
    icon: '📚',
    points: 30,
    condition: (progress) => progress.some((p) => p.streak >= 7),
  },
  {
    id: 'explorer',
    title: 'Nhà thám hiểm',
    description: 'Khám phá 5 module khác nhau',
    icon: '🗺️',
    points: 40,
    condition: (progress) => progress.length >= 5,
  },
];

// Custom hook for learning progress
export function useLearningProgress() {
  const [progress, setProgress] = useState<LearningProgress[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);

  // Load progress from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedProgress = localStorage.getItem('k2ai_learning_progress');
      const savedAchievements = localStorage.getItem('k2ai_achievements');

      if (savedProgress) {
        const parsedProgress = JSON.parse(savedProgress);
        setProgress(parsedProgress);
        setTotalPoints(parsedProgress.reduce((sum: number, p: LearningProgress) => sum + p.points, 0));
      }

      if (savedAchievements) {
        setAchievements(JSON.parse(savedAchievements));
      }
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (newProgress: LearningProgress[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('k2ai_learning_progress', JSON.stringify(newProgress));
      setProgress(newProgress);
      setTotalPoints(newProgress.reduce((sum, p) => sum + p.points, 0));
    }
  };

  // Track lesson completion
  const completLesson = (moduleName: string, lessonId: string, timeSpent: number) => {
    const userId = 'user_' + Date.now(); // Simple user ID for demo
    const now = new Date().toISOString();

    setProgress((prevProgress) => {
      const moduleProgress = prevProgress.find((p) => p.moduleName === moduleName);
      const newProgress = [...prevProgress];

      if (moduleProgress) {
        // Update existing module progress
        if (!moduleProgress.lessonsCompleted.includes(lessonId)) {
          moduleProgress.lessonsCompleted.push(lessonId);
          moduleProgress.completionPercentage = Math.round(
            (moduleProgress.lessonsCompleted.length / moduleProgress.totalLessons) * 100,
          );
          moduleProgress.points += 10; // Points per lesson
        }
        moduleProgress.timeSpent += timeSpent;
        moduleProgress.lastAccessDate = now;

        // Update streak
        const lastAccess = new Date(moduleProgress.lastAccessDate);
        const today = new Date();
        const daysDiff = Math.floor((today.getTime() - lastAccess.getTime()) / (1000 * 60 * 60 * 24));

        if (daysDiff === 1) {
          moduleProgress.streak += 1;
        } else if (daysDiff > 1) {
          moduleProgress.streak = 1;
        }
      } else {
        // Create new module progress
        newProgress.push({
          userId,
          moduleName,
          lessonsCompleted: [lessonId],
          totalLessons: 10, // Default, should be dynamic
          completionPercentage: 10,
          timeSpent,
          lastAccessDate: now,
          streak: 1,
          badges: [],
          points: 10,
          visits: 1,
          averageSessionTime: timeSpent,
        });
      }

      saveProgress(newProgress);
      checkAchievements(newProgress);
      return newProgress;
    });
  };

  // Check for new achievements
  const checkAchievements = (currentProgress: LearningProgress[]) => {
    const newAchievements = ACHIEVEMENTS.filter((achievement) => {
      return !achievements.some((a) => a.id === achievement.id) && achievement.condition(currentProgress);
    });

    if (newAchievements.length > 0) {
      setAchievements((prev) => [...prev, ...newAchievements]);
      localStorage.setItem('k2ai_achievements', JSON.stringify([...achievements, ...newAchievements]));

      // Show achievement notification
      newAchievements.forEach((achievement) => {
        showAchievementNotification(achievement);
      });
    }
  };

  // Show achievement notification
  const showAchievementNotification = (achievement: Achievement) => {
    if (Notification.permission === 'granted') {
      new Notification(`🎉 Thành tích mới: ${achievement.title}`, {
        body: achievement.description,
        icon: '/favicon.ico',
      });
    }
  };

  // Get module progress
  const getModuleProgress = (moduleName: string): LearningProgress | null => {
    return progress.find((p) => p.moduleName === moduleName) || null;
  };

  // Calculate total completion percentage
  const getTotalCompletionPercentage = (): number => {
    if (progress.length === 0) return 0;
    const totalPercentage = progress.reduce((sum, p) => sum + p.completionPercentage, 0);
    return Math.round(totalPercentage / progress.length);
  };

  // Track page visit (for integration with VisitTracker)
  const trackVisit = (moduleName: string, timeSpent: number = 5) => {
    setProgress((prevProgress) => {
      const moduleProgress = prevProgress.find((p) => p.moduleName === moduleName);
      const newProgress = [...prevProgress];

      if (moduleProgress) {
        moduleProgress.visits += 1;
        moduleProgress.timeSpent += timeSpent;
        moduleProgress.lastAccessDate = new Date().toISOString();
        moduleProgress.averageSessionTime = Math.round(moduleProgress.timeSpent / moduleProgress.visits);
      }

      saveProgress(newProgress);
      return newProgress;
    });
  };

  // Get learning stats
  const getLearningStats = () => {
    const totalTimeSpent = progress.reduce((sum, p) => sum + p.timeSpent, 0);
    const totalLessonsCompleted = progress.reduce((sum, p) => sum + p.lessonsCompleted.length, 0);
    const longestStreak = Math.max(...progress.map((p) => p.streak), 0);
    const totalVisits = progress.reduce((sum, p) => sum + p.visits, 0);

    return {
      totalTimeSpent,
      totalLessonsCompleted,
      longestStreak,
      modulesStarted: progress.length,
      completionPercentage: getTotalCompletionPercentage(),
      totalVisits,
      averageSessionTime: totalVisits > 0 ? Math.round(totalTimeSpent / totalVisits) : 0,
    };
  };

  // Get user level based on total points
  const getUserLevel = () => {
    const level = Math.floor(totalPoints / 1000) + 1;
    const nextLevelPoints = level * 1000;
    const progressToNext = ((totalPoints % 1000) / 1000) * 100;

    return {
      level,
      nextLevelPoints,
      progressToNext: Math.round(progressToNext),
      currentLevelPoints: totalPoints % 1000,
    };
  };

  return {
    progress,
    achievements,
    totalPoints,
    completLesson,
    trackVisit,
    getModuleProgress,
    getLearningStats,
    getTotalCompletionPercentage,
    getUserLevel,
  };
}

// Progress Dashboard Component
export function ProgressDashboard() {
  const { progress, achievements, totalPoints, getLearningStats } = useLearningProgress();

  const stats = getLearningStats();

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Trophy className="w-6 h-6 mr-3 text-yellow-400" />
        Thống kê học tập
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-500/20 rounded-xl p-4 text-center">
          <BookOpen className="w-8 h-8 mx-auto mb-2 text-blue-400" />
          <div className="text-2xl font-bold text-white">{stats.totalLessonsCompleted}</div>
          <div className="text-xs text-gray-300">Bài học</div>
        </div>

        <div className="bg-green-500/20 rounded-xl p-4 text-center">
          <Clock className="w-8 h-8 mx-auto mb-2 text-green-400" />
          <div className="text-2xl font-bold text-white">{Math.round(stats.totalTimeSpent / 60)}h</div>
          <div className="text-xs text-gray-300">Thời gian</div>
        </div>

        <div className="bg-purple-500/20 rounded-xl p-4 text-center">
          <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-400" />
          <div className="text-2xl font-bold text-white">{stats.longestStreak}</div>
          <div className="text-xs text-gray-300">Chuỗi ngày</div>
        </div>

        <div className="bg-yellow-500/20 rounded-xl p-4 text-center">
          <Star className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
          <div className="text-2xl font-bold text-white">{totalPoints}</div>
          <div className="text-xs text-gray-300">Điểm</div>
        </div>
      </div>

      {/* Recent Achievements */}
      {achievements.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Thành tích gần đây</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {achievements.slice(-4).map((achievement) => (
              <div
                key={achievement.id}
                className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-3 border border-yellow-500/30"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{achievement.icon}</span>
                  <div>
                    <div className="font-semibold text-white text-sm">{achievement.title}</div>
                    <div className="text-xs text-gray-300">{achievement.description}</div>
                  </div>
                  <div className="ml-auto bg-yellow-500/30 text-yellow-200 px-2 py-1 rounded text-xs">
                    +{achievement.points}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Module Progress */}
      {progress.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Tiến độ modules</h4>
          <div className="space-y-3">
            {progress.map((moduleProgress) => (
              <div key={moduleProgress.moduleName} className="bg-white/5 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{moduleProgress.moduleName}</span>
                  <span className="text-gray-300 text-sm">{Math.min(100, moduleProgress.completionPercentage)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, moduleProgress.completionPercentage)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {moduleProgress.lessonsCompleted.length}/{moduleProgress.totalLessons} bài học
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
