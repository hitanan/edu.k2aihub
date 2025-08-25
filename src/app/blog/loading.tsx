export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-800 to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-white/20 rounded-xl mb-4 max-w-md mx-auto"></div>
              <div className="h-8 bg-white/10 rounded-lg mb-6 max-w-2xl mx-auto"></div>
              <div className="flex justify-center gap-4">
                <div className="h-6 w-20 bg-white/10 rounded-full"></div>
                <div className="h-6 w-20 bg-white/10 rounded-full"></div>
                <div className="h-6 w-20 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Featured Posts Skeleton */}
        <section className="mb-16">
          <div className="animate-pulse">
            <div className="h-8 bg-white/10 rounded-lg mb-8 max-w-xs"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                  <div className="aspect-video bg-gradient-to-br from-gray-500 to-gray-600"></div>
                  <div className="p-6 space-y-4">
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
        </section>

        {/* All Posts Skeleton */}
        <section>
          <div className="animate-pulse">
            <div className="h-8 bg-white/10 rounded-lg mb-8 max-w-xs"></div>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-32 h-20 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-white/10 rounded w-24"></div>
                      <div className="h-6 bg-white/10 rounded w-3/4"></div>
                      <div className="h-4 bg-white/10 rounded"></div>
                      <div className="flex justify-between">
                        <div className="flex gap-4">
                          <div className="h-3 bg-white/10 rounded w-16"></div>
                          <div className="h-3 bg-white/10 rounded w-20"></div>
                        </div>
                        <div className="h-3 bg-white/10 rounded w-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}