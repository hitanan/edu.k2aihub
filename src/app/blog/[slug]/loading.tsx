export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-800 to-slate-800">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-6 bg-white/10 rounded w-32 mb-6"></div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center animate-pulse">
            {/* Category and Featured Badge */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-8 bg-white/20 rounded-full w-20"></div>
            </div>

            {/* Title */}
            <div className="h-12 bg-white/20 rounded-xl mb-6 max-w-3xl mx-auto"></div>
            <div className="h-8 bg-white/20 rounded-lg mb-6 max-w-2xl mx-auto"></div>

            {/* Description */}
            <div className="h-6 bg-white/10 rounded-lg mb-8 max-w-3xl mx-auto"></div>

            {/* Metadata */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
              <div className="h-4 bg-white/10 rounded w-24"></div>
              <div className="h-4 bg-white/10 rounded w-20"></div>
              <div className="h-4 bg-white/10 rounded w-16"></div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              <div className="h-6 bg-white/10 rounded-full w-16"></div>
              <div className="h-6 bg-white/10 rounded-full w-20"></div>
              <div className="h-6 bg-white/10 rounded-full w-18"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="animate-pulse space-y-6">
          <div className="prose prose-invert max-w-none">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-4 mb-8">
                <div className="h-6 bg-white/10 rounded w-1/3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-white/10 rounded"></div>
                  <div className="h-4 bg-white/10 rounded w-5/6"></div>
                  <div className="h-4 bg-white/10 rounded w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-white/5 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="animate-pulse">
            <div className="h-8 bg-white/10 rounded-lg mb-8 max-w-xs mx-auto"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="space-y-4">
                    <div className="h-4 bg-white/10 rounded w-20"></div>
                    <div className="h-6 bg-white/10 rounded"></div>
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    <div className="flex justify-between">
                      <div className="h-3 bg-white/10 rounded w-16"></div>
                      <div className="h-3 bg-white/10 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}