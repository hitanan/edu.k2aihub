import { ExternalGamePlatform } from '@/data/practice/gameDataExternalPlatforms';
import { ExternalLink, Star } from 'lucide-react';

// External Game Card Component
export default function ExternalGameCard({ platform }: { platform: ExternalGamePlatform }) {
  const getDifficultyColor = (ageRange: string) => {
    if (ageRange.includes('3-') || ageRange.includes('4-')) return 'bg-green-500/20 text-green-400';
    if (ageRange.includes('6-') || ageRange.includes('8-')) return 'bg-yellow-500/20 text-yellow-400';
    return 'bg-red-500/20 text-red-400';
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'programming':
        return 'from-blue-500/20 to-indigo-500/20 border-blue-400/30';
      case 'math':
        return 'from-green-500/20 to-emerald-500/20 border-green-400/30';
      case 'science':
        return 'from-purple-500/20 to-violet-500/20 border-purple-400/30';
      case 'language':
        return 'from-pink-500/20 to-rose-500/20 border-pink-400/30';
      case 'creativity':
        return 'from-orange-500/20 to-amber-500/20 border-orange-400/30';
      case 'logic':
        return 'from-cyan-500/20 to-teal-500/20 border-cyan-400/30';
      default:
        return 'from-gray-500/20 to-slate-500/20 border-gray-400/30';
    }
  };

  return (
    <div
      className={`bg-gradient-to-br ${getCategoryColor(platform.category)} backdrop-blur-sm rounded-2xl p-6 border hover:scale-105 transition-all duration-300 group`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{platform.icon}</span>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
              {platform.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(platform.ageRange)}`}>
                {platform.ageRange}
              </span>
              {!platform.isPremium && (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                  Miễn phí
                </span>
              )}
              {platform.isPremium && (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                  Premium
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="text-right">
          <div className="flex items-center gap-1 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{platform.rating}</span>
          </div>
          <div className="text-xs text-gray-400">{platform.reviews.toLocaleString()} đánh giá</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{platform.description}</p>

      {/* Subjects */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {platform.subjects.slice(0, 3).map((subject, index) => (
            <span key={index} className="bg-white/10 text-white px-2 py-1 rounded-lg text-xs">
              {subject}
            </span>
          ))}
          {platform.subjects.length > 3 && (
            <span className="bg-white/10 text-gray-300 px-2 py-1 rounded-lg text-xs">
              +{platform.subjects.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <div className="space-y-1">
          {platform.features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-300 text-xs">
              <span className="text-green-400">✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <a
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
      >
        <span>Truy cập ngay</span>
        <ExternalLink className="w-4 h-4" />
      </a>

      {/* Languages */}
      <div className="mt-3 text-center">
        <div className="text-xs text-gray-400">
          Ngôn ngữ: {platform.languages.slice(0, 2).join(', ')}
          {platform.languages.length > 2 && ` +${platform.languages.length - 2}`}
        </div>
      </div>
    </div>
  );
}
