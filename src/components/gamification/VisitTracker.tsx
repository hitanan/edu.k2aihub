'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

// Types for visit tracking
export interface LastVisit {
  path: string;
  title: string;
  timestamp: string;
  moduleType:
    | 'geography'
    | 'ai'
    | 'learning'
    | 'stem'
    | 'arduino'
    | 'python'
    | 'robotics'
    | 'scratch';
  progress?: number;
}

// Custom hook for visit tracking
export function useVisitTracker() {
  const router = useRouter();

  // Save current page visit
  const trackVisit = (
    path: string,
    title: string,
    moduleType: LastVisit['moduleType'],
    progress?: number,
  ) => {
    if (typeof window === 'undefined') return;

    const visit: LastVisit = {
      path,
      title,
      timestamp: new Date().toISOString(),
      moduleType,
      progress,
    };

    // Save to localStorage
    localStorage.setItem('k2ai_last_visit', JSON.stringify(visit));

    // Also save to visit history (last 10 visits)
    const historyKey = 'k2ai_visit_history';
    const existingHistory = localStorage.getItem(historyKey);
    let history: LastVisit[] = existingHistory
      ? JSON.parse(existingHistory)
      : [];

    // Remove duplicates and add new visit
    history = history.filter((v) => v.path !== path);
    history.unshift(visit);

    // Keep only last 10 visits
    if (history.length > 10) {
      history = history.slice(0, 10);
    }

    localStorage.setItem(historyKey, JSON.stringify(history));
  };

  // Get last visit
  const getLastVisit = (): LastVisit | null => {
    if (typeof window === 'undefined') return null;

    const lastVisit = localStorage.getItem('k2ai_last_visit');
    return lastVisit ? JSON.parse(lastVisit) : null;
  };

  // Get visit history
  const getVisitHistory = (): LastVisit[] => {
    if (typeof window === 'undefined') return [];

    const history = localStorage.getItem('k2ai_visit_history');
    return history ? JSON.parse(history) : [];
  };

  // Navigate to last visit
  const goToLastVisit = () => {
    const lastVisit = getLastVisit();
    if (lastVisit && lastVisit.path !== '/') {
      router.push(lastVisit.path);
    }
  };

  return {
    trackVisit,
    getLastVisit,
    getVisitHistory,
    goToLastVisit,
  };
}

// Component for displaying last visit
export function LastVisitCard() {
  const { getLastVisit, getVisitHistory } = useVisitTracker();
  const lastVisit = getLastVisit();
  const history = getVisitHistory();

  if (!lastVisit || lastVisit.path === '/') {
    return null;
  }

  const getModuleIcon = (moduleType: LastVisit['moduleType']) => {
    switch (moduleType) {
      case 'geography':
        return '🗺️';
      case 'ai':
        return '🤖';
      case 'learning':
        return '📚';
      case 'stem':
        return '🔬';
      case 'arduino':
        return '🔌';
      case 'python':
        return '🐍';
      case 'robotics':
        return '🤖';
      case 'scratch':
        return '🎨';
      default:
        return '📖';
    }
  };

  const getModuleColor = (moduleType: LastVisit['moduleType']) => {
    switch (moduleType) {
      case 'geography':
        return 'from-green-500 to-emerald-500';
      case 'ai':
        return 'from-blue-500 to-cyan-500';
      case 'learning':
        return 'from-purple-500 to-pink-500';
      case 'stem':
        return 'from-orange-500 to-red-500';
      case 'arduino':
        return 'from-yellow-500 to-orange-500';
      case 'python':
        return 'from-green-500 to-blue-500';
      case 'robotics':
        return 'from-gray-500 to-slate-500';
      case 'scratch':
        return 'from-pink-500 to-purple-500';
      default:
        return 'from-blue-500 to-purple-500';
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const visitTime = new Date(timestamp);
    const diffInMinutes = Math.floor(
      (now.getTime() - visitTime.getTime()) / (1000 * 60),
    );

    if (diffInMinutes < 60) {
      return `${diffInMinutes} phút trước`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)} giờ trước`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)} ngày trước`;
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Clock className="w-6 h-6 mr-3 text-blue-400" />
        Tiếp tục học tập
      </h3>

      {/* Last Visit */}
      <Link
        href={lastVisit.path}
        className={`block p-4 bg-gradient-to-r ${getModuleColor(lastVisit.moduleType)} rounded-xl mb-4 hover:scale-105 transition-transform duration-200`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl mr-3">
              {getModuleIcon(lastVisit.moduleType)}
            </span>
            <div>
              <div className="font-semibold text-white">{lastVisit.title}</div>
              <div className="text-sm text-white/80">
                Lần cuối: {formatTimeAgo(lastVisit.timestamp)}
              </div>
              {lastVisit.progress && (
                <div className="text-xs text-white/60">
                  Tiến độ: {lastVisit.progress}%
                </div>
              )}
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-white/80" />
        </div>
      </Link>

      {/* Recent History */}
      {history.length > 1 && (
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Đã xem gần đây
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {history.slice(1, 5).map((visit, index) => (
              <Link
                key={`${visit.path}-${index}`}
                href={visit.path}
                className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <span className="text-lg mr-3">
                  {getModuleIcon(visit.moduleType)}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white text-sm truncate group-hover:text-blue-300 transition-colors">
                    {visit.title}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTimeAgo(visit.timestamp)}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Page tracker component to automatically track visits
export function PageTracker({
  path,
  title,
  moduleType,
  progress,
}: {
  path: string;
  title: string;
  moduleType: LastVisit['moduleType'];
  progress?: number;
}) {
  const { trackVisit } = useVisitTracker();

  useEffect(() => {
    // Track the visit when component mounts
    trackVisit(path, title, moduleType, progress);
  }, [path, title, moduleType, progress, trackVisit]);

  return null; // This component doesn't render anything
}

// Learning recommendation component
export function LearningRecommendations() {
  const { getVisitHistory } = useVisitTracker();
  const history = getVisitHistory();

  if (history.length === 0) {
    return null;
  }

  // Analyze user preferences
  const moduleTypes = history.map((h) => h.moduleType);
  const mostVisited = moduleTypes.reduce(
    (acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const topModule = Object.entries(mostVisited).sort(
    ([, a], [, b]) => b - a,
  )[0]?.[0] as LastVisit['moduleType'];

  const recommendations = getRecommendationsForModule(topModule);

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <BookOpen className="w-6 h-6 mr-3 text-purple-400" />
        Gợi ý học tập
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((rec, index) => (
          <Link
            key={index}
            href={rec.path}
            className="flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/10 group"
          >
            <span className="text-2xl mr-3">{rec.icon}</span>
            <div className="flex-1">
              <div className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                {rec.title}
              </div>
              <div className="text-sm text-gray-300">{rec.description}</div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}

// Helper function to get recommendations based on module type
function getRecommendationsForModule(moduleType: LastVisit['moduleType']) {
  const allRecommendations = {
    geography: [
      {
        path: '/learning/environmental-data-science',
        title: 'Khoa học dữ liệu môi trường',
        description: 'Phân tích dữ liệu địa lý và môi trường',
        icon: '🌍',
      },
      {
        path: '/learning/green-technology',
        title: 'Công nghệ xanh',
        description: 'Giải pháp bền vững cho môi trường',
        icon: '🌱',
      },
    ],
    ai: [
      {
        path: '/learning/ai-art-creative-tech',
        title: 'AI Art & Creative Technology',
        description: 'Sáng tạo nghệ thuật với AI',
        icon: '🎨',
      },
      {
        path: '/learning/python',
        title: 'Lập trình Python',
        description: 'Ngôn ngữ lập trình cho AI',
        icon: '🐍',
      },
    ],
    learning: [
      {
        path: '/learning/stem',
        title: 'STEM Education',
        description: 'Khoa học, công nghệ, kỹ thuật, toán học',
        icon: '🔬',
      },
      {
        path: '/learning/arduino',
        title: 'Arduino & IoT',
        description: 'Lập trình phần cứng và IoT',
        icon: '🔌',
      },
    ],
    stem: [
      {
        path: '/learning/python',
        title: 'Lập trình Python',
        description: 'Ngôn ngữ lập trình khoa học',
        icon: '🐍',
      },
      {
        path: '/learning/robotics',
        title: 'Robotics',
        description: 'Robot và hệ thống tự động',
        icon: '🤖',
      },
    ],
    arduino: [
      {
        path: '/learning/robotics',
        title: 'Robotics',
        description: 'Ứng dụng Arduino trong robot',
        icon: '🤖',
      },
      {
        path: '/learning/green-technology',
        title: 'Công nghệ xanh',
        description: 'IoT cho môi trường',
        icon: '🌱',
      },
    ],
    python: [
      {
        path: '/learning/ai-art-creative-tech',
        title: 'AI Art',
        description: 'Python cho AI sáng tạo',
        icon: '🎨',
      },
      {
        path: '/learning/environmental-data-science',
        title: 'Khoa học dữ liệu',
        description: 'Python cho phân tích dữ liệu',
        icon: '📊',
      },
    ],
    robotics: [
      {
        path: '/learning/arduino',
        title: 'Arduino & IoT',
        description: 'Nền tảng cho robotics',
        icon: '🔌',
      },
      {
        path: '/learning/python',
        title: 'Lập trình Python',
        description: 'AI cho robot',
        icon: '🐍',
      },
    ],
    scratch: [
      {
        path: '/learning/python',
        title: 'Lập trình Python',
        description: 'Tiếp tục với ngôn ngữ chuyên nghiệp',
        icon: '🐍',
      },
      {
        path: '/learning/game-development',
        title: 'Game Development',
        description: 'Phát triển game chuyên nghiệp',
        icon: '🎮',
      },
    ],
  };

  return allRecommendations[moduleType] || [];
}
