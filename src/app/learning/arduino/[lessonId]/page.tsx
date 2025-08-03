import { notFound } from 'next/navigation'
import { createTitle, createDescription } from '@/utils/seo'
import { arduinoLessons } from '@/data/arduino'
import Link from 'next/link'
import { Clock, Target, User, Play, ChevronLeft, ChevronRight, Cpu, Zap, Wifi, Wrench, BarChart3, Rocket, CheckCircle } from 'lucide-react'
import { PageProps } from '@/types'

// Generate static params
export async function generateStaticParams() {
  return arduinoLessons.map((lesson) => ({
    lessonId: lesson.id,
  }))
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  const lesson = arduinoLessons.find((l) => l.id === lessonId);

  if (!lesson) {
    return {
      title: createTitle('Bài học không tìm thấy'),
      description: createDescription('Bài học Arduino này không tồn tại.')
    }
  }

  return {
    title: createTitle(lesson.title),
    description: createDescription(lesson.description),
    keywords: `Arduino, ${lesson.title}, IoT, programming, electronics, ${lesson.difficulty}, ${lesson.category}`,
  }
}

// Page component
export default async function ArduinoLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const lesson = arduinoLessons.find((l) => l.id === lessonId);

  if (!lesson) {
    notFound()
  }

  const currentIndex = arduinoLessons.findIndex((l) => l.id === lessonId)
  const previousLesson = currentIndex > 0 ? arduinoLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < arduinoLessons.length - 1 ? arduinoLessons[currentIndex + 1] : null

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'basics': return <Wrench className="w-5 h-5" />
      case 'sensors': return <Cpu className="w-5 h-5" />
      case 'communication': return <Wifi className="w-5 h-5" />
      case 'projects': return <Rocket className="w-5 h-5" />
      case 'iot': return <BarChart3 className="w-5 h-5" />
      default: return <Zap className="w-5 h-5" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Cơ bản': return 'bg-green-500/20 text-green-200'
      case 'Trung bình': return 'bg-yellow-500/20 text-yellow-200'
      case 'Nâng cao': return 'bg-red-500/20 text-red-200'
      default: return 'bg-gray-500/20 text-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-3 text-sm">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Trang chủ
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/learning/arduino" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Arduino & IoT Programming
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
                {getCategoryIcon(lesson.category)}
                <span className="text-cyan-400 font-medium capitalize">{lesson.category}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">{lesson.title}</h1>
              <p className="text-xl text-gray-200 mb-6">{lesson.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{lesson.duration}</div>
                  <div className="text-sm text-gray-300">Thời gian</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Target className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className={`text-sm font-semibold px-2 py-1 rounded ${getDifficultyColor(lesson.difficulty)}`}>
                    {lesson.difficulty}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">Độ khó</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <User className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{lesson.objectives.length}</div>
                  <div className="text-sm text-gray-300">Mục tiêu</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Play className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{lesson.exercises.length}</div>
                  <div className="text-sm text-gray-300">Bài tập</div>
                </div>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="w-6 h-6 text-cyan-400 mr-3" />
                Mục tiêu học tập
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Example */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Code Example</h2>
              <div className="bg-black/50 rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  <code>{lesson.codeExample}</code>
                </pre>
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
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
                        <h4 className="text-blue-300 font-semibold mb-2">💡 Gợi ý:</h4>
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
            
            {/* Materials Needed */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Wrench className="w-5 h-5 text-cyan-400 mr-2" />
                Vật liệu cần thiết
              </h3>
              <ul className="space-y-2">
                {lesson.materials.map((material, index) => (
                  <li key={index} className="text-gray-300 text-sm">• {material}</li>
                ))}
              </ul>
            </div>

            {/* Competition Info */}
            {lesson.competitions.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">🏆 Cuộc thi liên quan</h3>
                <ul className="space-y-2">
                  {lesson.competitions.map((competition, index) => (
                    <li key={index} className="text-gray-300 text-sm">• {competition}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/20">
          {previousLesson ? (
            <Link 
              href={`/learning/arduino/${previousLesson.id}`}
              className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-cyan-400" />
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
              href={`/learning/arduino/${nextLesson.id}`}
              className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-200"
            >
              <div className="text-right">
                <div className="text-sm text-gray-400">Bài tiếp theo</div>
                <div className="text-white font-medium">{nextLesson.title}</div>
              </div>
              <ChevronRight className="w-5 h-5 text-cyan-400" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
