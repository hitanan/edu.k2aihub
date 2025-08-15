'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  User,
  Trophy,
  Clock,
  BookOpen,
  Target,
  Star,
  TrendingUp,
  Award,
  Badge as BadgeIcon,
  Settings,
  Share2,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Crown,
} from 'lucide-react';
import {
  useLearningProgress,
  ACHIEVEMENTS,
} from '@/components/gamification/LearningProgress';
import { useVisitTracker } from '@/components/gamification/VisitTracker';
import { PageTracker } from '@/components/gamification/VisitTracker';

// Generate a unique user ID if not exists
function generateUserId(): string {
  if (typeof window !== 'undefined') {
    let userId = localStorage.getItem('k2ai_user_id');
    if (!userId) {
      userId =
        'user_' +
        Math.random().toString(36).substr(2, 9) +
        '_' +
        Date.now().toString(36);
      localStorage.setItem('k2ai_user_id', userId);
    }
    return userId;
  }
  return 'user_demo';
}

export default function ProfilePageClient() {
  const [userId, setUserId] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'overview' | 'achievements' | 'progress' | 'stats'
  >('overview');

  const {
    progress,
    achievements,
    totalPoints,
    getLearningStats,
    getUserLevel,
    getTotalCompletionPercentage,
  } = useLearningProgress();

  const { getVisitHistory } = useVisitTracker();

  useEffect(() => {
    setIsClient(true);
    setUserId(generateUserId());
  }, []);

  // Prevent hydration mismatch by showing loading state on server
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Đang tải hồ sơ...</p>
        </div>
      </div>
    );
  }

  const stats = getLearningStats();
  const userLevel = getUserLevel();
  const visitHistory = getVisitHistory();
  const completionPercentage = getTotalCompletionPercentage();

  const getRankTitle = (level: number): string => {
    if (level >= 10) return '🏆 Bậc Thầy Học Tập';
    if (level >= 7) return '👑 Chuyên Gia';
    if (level >= 5) return '🥇 Học Viên Xuất Sắc';
    if (level >= 3) return '🥈 Học Viên Giỏi';
    if (level >= 2) return '🥉 Học Viên Khá';
    return '🌟 Học Viên Mới';
  };

  const getStreakColor = (streak: number): string => {
    if (streak >= 30) return 'text-purple-400 bg-purple-500/20';
    if (streak >= 14) return 'text-yellow-400 bg-yellow-500/20';
    if (streak >= 7) return 'text-green-400 bg-green-500/20';
    if (streak >= 3) return 'text-blue-400 bg-blue-500/20';
    return 'text-gray-400 bg-gray-500/20';
  };

  const shareProfile = async () => {
    const shareData = {
      title: `Hồ sơ học tập K2AiHub của tôi`,
      text: `Tôi đã đạt được Level ${userLevel.level} với ${totalPoints} điểm trên K2AiHub! 🚀`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Share cancelled or error
      }
    } else {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      alert('Đã sao chép thông tin profile vào clipboard!');
    }
  };

  const TabButton = ({
    id,
    label,
    icon,
  }: {
    id: typeof activeTab;
    label: string;
    icon: React.ReactNode;
  }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
        activeTab === id
          ? 'bg-blue-600 text-white shadow-lg'
          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <PageTracker
        path="/profile"
        title="Hồ Sơ Học Tập"
        moduleType="learning"
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <User className="w-12 h-12 text-white" />
              </div>

              {/* User Info */}
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold text-white">
                    K2AI Learner
                  </h1>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStreakColor(stats.longestStreak)}`}
                  >
                    Level {userLevel.level}
                  </span>
                </div>
                <p className="text-blue-300 text-lg font-medium mb-1">
                  {getRankTitle(userLevel.level)}
                </p>
                <p className="text-gray-400 text-sm">ID: {userId}</p>

                {/* Level Progress */}
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-300">
                      Tiến độ Level {userLevel.level}
                    </span>
                    <span className="text-sm text-gray-300">
                      {userLevel.currentLevelPoints}/{1000}
                    </span>
                  </div>
                  <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                      style={{ width: `${userLevel.progressToNext}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={shareProfile}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Chia sẻ</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors">
                <Settings className="w-4 h-4" />
                <span>Cài đặt</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <span className="text-2xl font-bold text-white">
                {totalPoints}
              </span>
            </div>
            <p className="text-sm text-gray-300">Tổng điểm</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <span className="text-2xl font-bold text-white">
                {stats.totalLessonsCompleted}
              </span>
            </div>
            <p className="text-sm text-gray-300">Bài học</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-6 h-6 text-green-400" />
              <span className="text-2xl font-bold text-white">
                {Math.round(stats.totalTimeSpent / 60)}h
              </span>
            </div>
            <p className="text-sm text-gray-300">Thời gian</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-6 h-6 text-orange-400" />
              <span className="text-2xl font-bold text-white">
                {stats.longestStreak}
              </span>
            </div>
            <p className="text-sm text-gray-300">Chuỗi ngày</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-6 h-6 text-purple-400" />
              <span className="text-2xl font-bold text-white">
                {completionPercentage}%
              </span>
            </div>
            <p className="text-sm text-gray-300">Hoàn thành</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-6 h-6 text-pink-400" />
              <span className="text-2xl font-bold text-white">
                {achievements.length}
              </span>
            </div>
            <p className="text-sm text-gray-300">Thành tích</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          <TabButton
            id="overview"
            label="Tổng quan"
            icon={<BarChart3 className="w-4 h-4" />}
          />
          <TabButton
            id="achievements"
            label="Thành tích"
            icon={<Trophy className="w-4 h-4" />}
          />
          <TabButton
            id="progress"
            label="Tiến độ"
            icon={<TrendingUp className="w-4 h-4" />}
          />
          <TabButton
            id="stats"
            label="Thống kê"
            icon={<PieChart className="w-4 h-4" />}
          />
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Activity className="w-6 h-6 mr-3 text-blue-400" />
                Hoạt động gần đây
              </h3>
              <div className="space-y-3">
                {visitHistory.slice(0, 5).map((visit, index) => (
                  <Link
                    key={index}
                    href={visit.path}
                    className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <span className="text-lg mr-3">📚</span>
                    <div className="flex-1">
                      <div className="font-medium text-white text-sm">
                        {visit.title}
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(visit.timestamp).toLocaleString('vi-VN')}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Star className="w-6 h-6 mr-3 text-yellow-400" />
                Thành tích mới nhất
              </h3>
              <div className="space-y-3">
                {achievements.slice(-5).map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30"
                  >
                    <span className="text-2xl mr-3">{achievement.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">
                        {achievement.title}
                      </div>
                      <div className="text-xs text-gray-300">
                        {achievement.description}
                      </div>
                    </div>
                    <div className="bg-yellow-500/30 text-yellow-200 px-2 py-1 rounded text-xs">
                      +{achievement.points}
                    </div>
                  </div>
                ))}
                {achievements.length === 0 && (
                  <div className="text-center text-gray-400 py-8">
                    <Trophy className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Chưa có thành tích nào</p>
                    <p className="text-sm">
                      Hãy bắt đầu học để mở khóa thành tích đầu tiên!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Trophy className="w-7 h-7 mr-3 text-yellow-400" />
              Tất cả thành tích ({achievements.length}/{ACHIEVEMENTS.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ACHIEVEMENTS.map((achievement) => {
                const isUnlocked = achievements.some(
                  (a) => a.id === achievement.id,
                );
                return (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      isUnlocked
                        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/50'
                        : 'bg-gray-800/50 border-gray-600/50 opacity-60'
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <span
                        className={`text-3xl mr-3 ${isUnlocked ? '' : 'grayscale'}`}
                      >
                        {achievement.icon}
                      </span>
                      <div className="flex-1">
                        <h4
                          className={`font-semibold ${isUnlocked ? 'text-white' : 'text-gray-400'}`}
                        >
                          {achievement.title}
                        </h4>
                        <div
                          className={`text-xs px-2 py-1 rounded ${isUnlocked ? 'bg-yellow-500/30 text-yellow-200' : 'bg-gray-600/30 text-gray-400'}`}
                        >
                          +{achievement.points} điểm
                        </div>
                      </div>
                    </div>
                    <p
                      className={`text-sm ${isUnlocked ? 'text-gray-300' : 'text-gray-500'}`}
                    >
                      {achievement.description}
                    </p>
                    {isUnlocked && (
                      <div className="mt-2 flex items-center text-green-400 text-xs">
                        <BadgeIcon className="w-3 h-3 mr-1" />
                        Đã mở khóa
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="w-7 h-7 mr-3 text-green-400" />
              Tiến độ các module
            </h3>
            <div className="space-y-4">
              {progress.map((moduleProgress) => (
                <div
                  key={moduleProgress.moduleName}
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">
                      {moduleProgress.moduleName}
                    </h4>
                    <span className="text-sm text-gray-300">
                      {moduleProgress.lessonsCompleted.length}/
                      {moduleProgress.totalLessons} bài
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-300">
                        Tiến độ hoàn thành
                      </span>
                      <span className="text-sm text-gray-300">
                        {moduleProgress.completionPercentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300"
                        style={{
                          width: `${moduleProgress.completionPercentage}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Thời gian:</span>
                      <div className="font-medium text-white">
                        {Math.round(moduleProgress.timeSpent / 60)}h
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Chuỗi ngày:</span>
                      <div className="font-medium text-white">
                        {moduleProgress.streak} ngày
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Điểm:</span>
                      <div className="font-medium text-white">
                        {moduleProgress.points}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {progress.length === 0 && (
                <div className="text-center text-gray-400 py-12">
                  <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Chưa có tiến độ nào</p>
                  <p>Hãy bắt đầu học để theo dõi tiến độ của bạn!</p>
                  <Link
                    href="/learning"
                    className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
                  >
                    Khám phá khóa học
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Detailed Stats */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-purple-400" />
                Thống kê chi tiết
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">Tổng thời gian học</span>
                  <span className="text-white font-medium">
                    {Math.round(stats.totalTimeSpent / 60)} giờ{' '}
                    {stats.totalTimeSpent % 60} phút
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">
                    Thời gian trung bình/phiên
                  </span>
                  <span className="text-white font-medium">
                    {stats.averageSessionTime} phút
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">Tổng số lượt truy cập</span>
                  <span className="text-white font-medium">
                    {stats.totalVisits}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">Modules đã bắt đầu</span>
                  <span className="text-white font-medium">
                    {stats.modulesStarted}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">
                    Tỷ lệ hoàn thành trung bình
                  </span>
                  <span className="text-white font-medium">
                    {completionPercentage}%
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Chuỗi ngày dài nhất</span>
                  <span className="text-white font-medium">
                    {stats.longestStreak} ngày
                  </span>
                </div>
              </div>
            </div>

            {/* Level Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Crown className="w-6 h-6 mr-3 text-yellow-400" />
                Thông tin cấp bậc
              </h3>
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Level {userLevel.level}
                </h4>
                <p className="text-yellow-300 text-lg">
                  {getRankTitle(userLevel.level)}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">
                      Tiến độ Level {userLevel.level}
                    </span>
                    <span className="text-gray-300">
                      {userLevel.currentLevelPoints}/1000
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300"
                      style={{ width: `${userLevel.progressToNext}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Còn{' '}
                    {userLevel.nextLevelPoints - userLevel.currentLevelPoints}{' '}
                    điểm để lên Level {userLevel.level + 1}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">
                    Phần thưởng Level {userLevel.level + 1}
                  </h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Badge đặc biệt Level {userLevel.level + 1}</li>
                    <li>• Tăng 25% điểm thưởng</li>
                    <li>• Mở khóa tính năng mới</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
