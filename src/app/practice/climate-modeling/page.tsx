import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import ClimateModelingGameComponent from '@/components/games/ClimateModelingGame';
import { climateModelingGame } from '@/data/climateModelingGame';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Lightbulb } from 'lucide-react';

export const metadata: Metadata = createGameMetadata('climate-modeling');

export default function ClimateModelingGamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Navigation Header */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/practice" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Quay lại Games</span>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/learning/green-technology"
                className="flex items-center gap-2 bg-green-600/20 text-green-300 px-4 py-2 rounded-lg hover:bg-green-600/30 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Green Technology Lessons</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Game Component */}
      <ClimateModelingGameComponent />

      {/* Educational Context */}
      <div className="bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">🎓 Kết nối với Curriculum</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Game này kết nối với nhiều modules học tập khác để tạo ra trải nghiệm giáo dục toàn diện.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {climateModelingGame.relatedLessons?.map((lesson, index) => (
              <Link
                key={index}
                href={`/learning/${lesson.moduleId}/${lesson.lessonId}`}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/10"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-green-300 transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-green-400 capitalize">{lesson.moduleId.replace('-', ' ')}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{lesson.connection}</p>
              </Link>
            ))}
          </div>

          {/* Science Topics */}
          <div className="mt-12 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🔬 Science Topics Covered</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-400">Climate Science</h4>
                <ul className="space-y-2 text-gray-300">
                  {climateModelingGame.scienceTopics.slice(0, 4).map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-400">Real-world Applications</h4>
                <ul className="space-y-2 text-gray-300">
                  {climateModelingGame.realWorldConnections.slice(0, 4).map((connection, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{connection}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Game Instructions */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">🎮 How to Play</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-semibold text-white mb-2">Start Simulation</h4>
                <p className="text-gray-300 text-sm">
                  Click &ldquo;Start Simulation&rdquo; để bắt đầu 20-year climate journey
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">🌱</div>
                <h4 className="font-semibold text-white mb-2">Take Actions</h4>
                <p className="text-gray-300 text-sm">Implement green solutions với budget hạn chế mỗi năm</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-semibold text-white mb-2">Monitor Impact</h4>
                <p className="text-gray-300 text-sm">Track temperature, CO2, và environmental indicators</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-semibold text-white mb-2">Achieve Goals</h4>
                <p className="text-gray-300 text-sm">Aim for high climate score và sustainable future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
