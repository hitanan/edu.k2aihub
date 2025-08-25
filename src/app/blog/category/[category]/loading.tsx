export default function CategoryLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-800 to-slate-800">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="animate-pulse">
          <div className="h-6 bg-white/10 rounded w-32"></div>
        </div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 mb-12 max-w-6xl">
        <div className="text-center animate-pulse">
          <div className="text-6xl mb-4">📝</div>
          <div className="h-12 bg-white/10 rounded-xl mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-white/10 rounded-lg max-w-xs mx-auto"></div>
        </div>
      </div>

      {/* Posts */}
      <div className="container mx-auto px-4 pb-12 max-w-6xl">
        <div className="space-y-6 animate-pulse">
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
                  <div className="flex gap-2">
                    <div className="h-6 bg-white/10 rounded-full w-16"></div>
                    <div className="h-6 bg-white/10 rounded-full w-20"></div>
                    <div className="h-6 bg-white/10 rounded-full w-18"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}