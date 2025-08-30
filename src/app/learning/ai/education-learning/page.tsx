import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { createModuleMetadata } from '@/utils/seo';
import { aiLearningApps, aiAppCategories, learningPathways } from '@/data/aiLearningApps';
import YouTubePlayer from '@/components/YouTubePlayer';

export const metadata: Metadata = createModuleMetadata(
  'AI Hỗ Trợ Học Tập - Ứng Dụng AI Cho Giáo Dục',
  'Khám phá các ứng dụng AI hỗ trợ học tập hiệu quả. Từ PhotoMath, Gauth đến Duolingo - công cụ AI giúp học tập thông minh hơn',
  ['AI học tập', 'PhotoMath', 'Gauth', 'Duolingo', 'AI education', 'study apps', 'learning AI tools'],
  'ai/education-learning',
);

export default function AIAppsModule() {
  const moduleInfo = {
    title: '🧠 AI Hỗ Trợ Học Tập',
    description: 'Khám phá các ứng dụng AI giúp học tập hiệu quả hơn. Từ giải toán đến học ngôn ngữ.',
    icon: '🧠',
    difficulty: 'Cho mọi đối tượng',
    duration: 'Tự học linh hoạt',
  };

  const studyTips = [
    {
      title: 'Kết Hợp Nhiều Công Cụ',
      description: 'Sử dụng PhotoMath cho toán, Duolingo cho ngoại ngữ, Grammarly cho viết',
      icon: '🔄',
    },
    {
      title: 'Đừng Phụ Thuộc Hoàn Toàn',
      description: 'AI là công cụ hỗ trợ, không thay thế việc tư duy và học hiểu',
      icon: '⚖️',
    },
    {
      title: 'Kiểm Tra Kết Quả',
      description: 'Luôn xem xét và hiểu logic đằng sau câu trả lời của AI',
      icon: '🔍',
    },
    {
      title: 'Học Từ Quá Trình',
      description: 'Tập trung vào cách giải thích và phương pháp, không chỉ kết quả',
      icon: '🎯',
    },
  ];

  const { title, description, icon, difficulty, duration } = moduleInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">{icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">{description}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="bg-white/10 px-3 py-1 rounded-full">🎯 {difficulty}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">⏱️ {duration}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">📱 {aiLearningApps.length} ứng dụng</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {aiAppCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <div className="text-2xl mb-2">{category.icon}</div>
              <h3 className="text-sm font-bold text-white mb-1">{category.name}</h3>
              <p className="text-xs text-gray-400">
                {aiLearningApps.filter((app) => app.category === category.id).length} ứng dụng
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Pathways */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🎯 Lộ Trình Học Tập</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Các combo ứng dụng AI được gợi ý cho từng mục tiêu học tập cụ thể
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningPathways.map((pathway, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">{pathway.title}</h3>
              <p className="text-gray-300 mb-4">{pathway.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-yellow-300 mb-2">📱 Ứng dụng trong combo:</h4>
                <div className="flex flex-wrap gap-2">
                  {pathway.apps.map((appId, appIndex) => {
                    const app = aiLearningApps.find((a) => a.id === appId);
                    return app ? (
                      <span key={appIndex} className="bg-purple-500/20 text-purple-200 text-xs px-2 py-1 rounded-full">
                        {app.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>

              <div className="text-xs text-gray-300">
                <p>
                  <strong className="text-green-300">👥 Phù hợp:</strong> {pathway.bestFor}
                </p>
                <p className="mt-1">
                  <strong className="text-blue-300">⏰ Thời gian:</strong> {pathway.estimatedTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Apps Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">📱 Ứng Dụng AI Học Tập</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Danh sách các ứng dụng AI hàng đầu giúp bạn học tập hiệu quả hơn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiLearningApps.map((app, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">
                  {app.category === 'math'
                    ? '🔢'
                    : app.category === 'language'
                      ? '🌍'
                      : app.category === 'writing'
                        ? '✍️'
                        : app.category === 'coding'
                          ? '💻'
                          : app.category === 'research'
                            ? '🔍'
                            : '🎓'}
                </div>
                <div className="text-right">
                  <div className="text-xs text-purple-300 font-semibold">
                    {aiAppCategories.find((cat) => cat.id === app.category)?.name || app.category}
                  </div>
                  <div className="text-xs text-gray-400">{app.rating}/5</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{app.name}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{app.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-yellow-300 mb-2">✨ Tính năng chính:</h4>
                <div className="flex flex-wrap gap-1">
                  {app.features.slice(0, 3).map((feature, featIndex) => (
                    <span key={featIndex} className="bg-purple-500/20 text-purple-200 text-xs px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-green-300 mb-2">🎯 Phù hợp cho:</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  {app.bestFor.slice(0, 2).map((useCase, caseIndex) => (
                    <li key={caseIndex} className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              {app.videoDemo && (
                <div className="mb-4">
                  <YouTubePlayer videoUrl={app.videoDemo} title={`${app.name} - Demo`} className="h-40" />
                </div>
              )}

              <div className="flex justify-between items-center text-xs">
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full">{app.platform}</span>
                </div>
                <span
                  className={`px-2 py-1 rounded-full ${
                    app.pricing === 'Free'
                      ? 'bg-green-500/20 text-green-200'
                      : app.pricing === 'Freemium'
                        ? 'bg-yellow-500/20 text-yellow-200'
                        : 'bg-red-500/20 text-red-200'
                  }`}
                >
                  {app.pricing}
                </span>
              </div>

              {app.websiteUrl && (
                <div className="mt-4">
                  <a
                    href={app.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    🌐 Truy cập website
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Study Tips */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">💡 Mẹo Sử Dụng AI Hiệu Quả</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cách sử dụng AI để hỗ trợ học tập một cách thông minh và hiệu quả
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
              >
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-300 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">🚀 Bắt Đầu Học Thông Minh</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Tải ngay những ứng dụng AI này và trải nghiệm cách học tập hiệu quả trong thời đại công nghệ!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/learning/ai"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              ← Quay Lại AI Learning
            </Link>
            <Link
              href="/learning/python"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              🐍 Python Learning →
            </Link>
            <Link
              href="/learning/arduino"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              🤖 Arduino Projects →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
