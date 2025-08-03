import { notFound } from 'next/navigation'
import { createTitle, createDescription } from '@/utils/seo'
import { scratchLessons } from '@/data/scratch'
import Link from 'next/link'
import { Clock, Target, User, Play, ChevronLeft, ChevronRight, Gamepad2, CheckCircle, Youtube } from 'lucide-react'
import { PageProps } from '@/types'

// Generate static params
export async function generateStaticParams() {
  return scratchLessons.map((lesson) => ({
    lessonId: lesson.id,
  }))
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  const lesson = scratchLessons.find((l) => l.id === lessonId)

  if (!lesson) {
    return {
      title: createTitle('Bài học không tìm thấy'),
      description: createDescription('Bài học Scratch này không tồn tại.')
    }
  }

  return {
    title: createTitle(lesson.title),
    description: createDescription(lesson.description),
    keywords: `Scratch, ${lesson.title}, visual programming, coding for kids, ${lesson.difficulty}`,
  }
}

// Page component
export default async function ScratchLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const lesson = scratchLessons.find((l) => l.id === lessonId)

  if (!lesson) {
    notFound()
  }

  const currentIndex = scratchLessons.findIndex((l) => l.id === lessonId)
  const previousLesson = currentIndex > 0 ? scratchLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < scratchLessons.length - 1 ? scratchLessons[currentIndex + 1] : null

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Dễ': return 'bg-green-500/20 text-green-200'
      case 'Trung bình': return 'bg-yellow-500/20 text-yellow-200'
      case 'Khó': return 'bg-red-500/20 text-red-200'
      default: return 'bg-gray-500/20 text-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-3 text-sm">
            <Link href="/" className="text-orange-400 hover:text-orange-300 transition-colors">
              Trang chủ
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/learning/scratch" className="text-orange-400 hover:text-orange-300 transition-colors">
              Scratch Programming
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-300">{lesson.title}</span>
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Lesson Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Lesson Header */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Gamepad2 className="w-6 h-6 text-orange-400" />
                <span className="text-orange-400 font-medium">Scratch Programming</span>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">{lesson.title}</h1>
              <p className="text-xl text-gray-200 mb-6">{lesson.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{lesson.duration}</div>
                  <div className="text-sm text-gray-300">Thời gian</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Target className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className={`text-sm font-semibold px-2 py-1 rounded ${getDifficultyColor(lesson.difficulty)}`}>
                    {lesson.difficulty}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">Độ khó</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <User className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{lesson.objectives.length}</div>
                  <div className="text-sm text-gray-300">Mục tiêu</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Play className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{lesson.exercises.length}</div>
                  <div className="text-sm text-gray-300">Bài tập</div>
                </div>
              </div>
            </div>

            {/* Video Tutorial */}
            {lesson.videoUrl && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Youtube className="w-6 h-6 text-red-400 mr-3" />
                  Video Tutorial
                </h2>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={lesson.videoUrl.replace('watch?v=', 'embed/')}
                    title={lesson.title}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Learning Objectives */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="w-6 h-6 text-orange-400 mr-3" />
                Mục tiêu học tập
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercises */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Bài tập thực hành</h2>
              <div className="space-y-6">
                {lesson.exercises.map((exercise, index) => (
                  <div key={index} className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{exercise.title}</h3>
                    <p className="text-gray-200 mb-4">{exercise.description}</p>
                    
                    {exercise.hints.length > 0 && (
                      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-4">
                        <h4 className="text-orange-300 font-semibold mb-2">💡 Gợi ý:</h4>
                        <ul className="space-y-1">
                          {exercise.hints.map((hint, hintIndex) => (
                            <li key={hintIndex} className="text-gray-300 text-sm">• {hint}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Real World Applications */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Ứng dụng thực tế</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson.realWorldApplications.map((application, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-200">{application}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Materials */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-orange-400 mr-2" />
                Vật liệu cần thiết
              </h3>
              <ul className="space-y-2">
                {lesson.materials.map((material, index) => (
                  <li key={index} className="text-gray-300 text-sm">• {material}</li>
                ))}
              </ul>
            </div>

            {/* Quick Tips */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">💡 Lời khuyên</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>• Khám phá từng khối lệnh</li>
                <li>• Thử nghiệm và sáng tạo</li>
                <li>• Chia sẻ dự án với bạn bè</li>
                <li>• Tham gia cộng đồng Scratch</li>
                <li>• Tự tạo câu chuyện riêng</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/20">
          {previousLesson ? (
            <Link 
              href={`/learning/scratch/${previousLesson.id}`}
              className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-orange-400" />
              <div>
                <div className="text-sm text-gray-400">Bài trước</div>
                <div className="text-white font-medium">{previousLesson.title}</div>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {nextLesson && (
            <Link 
              href={`/learning/scratch/${nextLesson.id}`}
              className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-200"
            >
              <div className="text-right">
                <div className="text-sm text-gray-400">Bài tiếp theo</div>
                <div className="text-white font-medium">{nextLesson.title}</div>
              </div>
              <ChevronRight className="w-5 h-5 text-orange-400" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
