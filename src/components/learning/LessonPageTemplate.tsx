import { ReactNode } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, Target, User, Play, ChevronLeft, ChevronRight, Book, ExternalLink, CheckCircle, Lightbulb, Users } from 'lucide-react'
import { createTitle, createDescription } from '@/utils/seo'

export interface BaseLessonData {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  videoUrl?: string;
  imageUrl?: string;
  objectives: string[];
  prerequisites: string[];
  tools?: string[];
  tags?: string[];
  category?: string;
  concepts?: string[];
  exercises: Array<{
    title: string;
    description: string;
    difficulty: string;
    materials?: string[];
    procedure?: string[];
    expectedResults?: string;
    solution?: string;
    hints?: string[];
  }>;
  realWorldApplications: string[];
  environmentalImpact?: string;
  caseStudies?: Array<{
    title: string;
    organization: string;
    problem: string;
    solution: string;
    impact: string;
    innovations: string[];
  }>;
  resources?: Array<{
    title: string;
    url: string;
    type: string;
  }>;
}

export interface LessonPageConfig<T extends BaseLessonData> {
  moduleName: string;
  moduleTitle: string;
  modulePath: string;
  lessons: T[];
  primaryColor: string;
  secondaryColor: string;
  gradientColors: string;
  getFieldIcon?: (field: string) => ReactNode;
  getFieldValue?: (lesson: T) => string;
  sidebarContent?: (lesson: T) => ReactNode;
}

export interface LessonPageTemplateProps<T extends BaseLessonData> {
  lessonId: string;
  config: LessonPageConfig<T>;
}

export function generateLessonMetadata<T extends BaseLessonData>(
  lessonId: string,
  lessons: T[]
): Metadata {
  const lesson = lessons.find(l => l.id === lessonId);
  
  if (!lesson) {
    return {
      title: 'Bài học không tìm thấy | K2AiHub',
      description: 'Không thể tìm thấy bài học yêu cầu.',
    }
  }

  return {
    title: createTitle(lesson.title),
    description: createDescription(lesson.description),
    openGraph: {
      title: lesson.title,
      description: lesson.description,
      images: lesson.imageUrl ? [{ url: lesson.imageUrl }] : [],
    },
  }
}

export function generateLessonStaticParams<T extends BaseLessonData>(
  lessons: T[]
) {
  return lessons.map((lesson) => ({
    lessonId: lesson.id,
  }))
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case 'cơ bản':
      return 'from-green-500 to-emerald-500'
    case 'trung bình':
      return 'from-yellow-500 to-orange-500'
    case 'nâng cao':
      return 'from-red-500 to-pink-500'
    case 'chuyên gia':
      return 'from-purple-500 to-violet-500'
    default:
      return 'from-blue-500 to-cyan-500'
  }
}

export function LessonPageTemplate<T extends BaseLessonData>({ 
  lessonId, 
  config 
}: LessonPageTemplateProps<T>) {
  const lesson = config.lessons.find(l => l.id === lessonId);

  if (!lesson) {
    notFound()
  }

  const currentIndex = config.lessons.findIndex(l => l.id === lessonId)
  const previousLesson = currentIndex > 0 ? config.lessons[currentIndex - 1] : null
  const nextLesson = currentIndex < config.lessons.length - 1 ? config.lessons[currentIndex + 1] : null

  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.gradientColors}`}>
      {/* Navigation Header */}
      <div className="bg-black/20 border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={config.modulePath}
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Quay lại {config.moduleTitle}
            </Link>
            
            <div className="flex items-center space-x-4">
              {config.getFieldIcon && config.getFieldValue && (
                <div className={`flex items-center px-3 py-1 bg-gradient-to-r ${config.primaryColor} to-${config.secondaryColor} rounded-full text-white text-sm`}>
                  {config.getFieldIcon(config.getFieldValue(lesson))}
                  <span className="ml-2">{config.getFieldValue(lesson)}</span>
                </div>
              )}
              <div className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(lesson.difficulty)} rounded-full text-white text-sm font-medium`}>
                {lesson.difficulty}
              </div>
              {lesson.environmentalImpact  && (
                <div className={`flex items-center px-3 py-1 bg-gradient-to-r ${config.primaryColor} to-${config.secondaryColor} rounded-full text-white text-sm`}>
                  <span className="bg-teal-500/20 text-teal-200 px-4 py-2 rounded-full">
                  🌱 {lesson.environmentalImpact}
                </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Lesson Header */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {lesson.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {lesson.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Clock className={`w-5 h-5 mr-2 text-${config.primaryColor}-400`} />
                  <span>{lesson.duration}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Target className={`w-5 h-5 mr-2 text-${config.primaryColor}-400`} />
                  <span>{lesson.difficulty}</span>
                </div>
                {config.getFieldValue && (
                  <div className="flex items-center text-gray-300">
                    <User className={`w-5 h-5 mr-2 text-${config.primaryColor}-400`} />
                    <span>{config.getFieldValue(lesson)}</span>
                  </div>
                )}
              </div>

              {/* Video */}
              {lesson.videoUrl && (
                <div className="relative rounded-xl overflow-hidden mb-6 bg-black/20">
                  <iframe
                    src={lesson.videoUrl.replace('watch?v=', 'embed/')}
                    title={lesson.title}
                    className="w-full h-64 md:h-96"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* Learning Objectives */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className={`w-6 h-6 mr-3 text-${config.primaryColor}-400`} />
                Mục tiêu học tập
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Book className={`w-6 h-6 mr-3 text-${config.primaryColor}-400`} />
                Kiến thức cần có
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson.prerequisites.map((prereq, index) => (
                  <div key={index} className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10">
                    <Lightbulb className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{prereq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercises */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Play className={`w-6 h-6 mr-3 text-${config.primaryColor}-400`} />
                Bài tập thực hành
              </h2>
              <div className="space-y-6">
                {lesson.exercises.map((exercise, index) => (
                  <div key={index} className="border border-white/10 rounded-xl p-6 bg-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
                      <span className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(exercise.difficulty)} rounded-full text-white text-sm`}>
                        {exercise.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exercise.description}</p>
                    
                    {/* Materials */}
                    {exercise.materials && exercise.materials.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-white mb-2">Công cụ cần thiết:</h4>
                        <ul className="space-y-1">
                          {exercise.materials.map((material, matIndex) => (
                            <li key={matIndex} className="text-gray-300 text-sm flex items-start">
                              <span className={`w-2 h-2 bg-${config.primaryColor}-400 rounded-full mr-2 mt-2 flex-shrink-0`}></span>
                              {material}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Procedure */}
                    {exercise.procedure && exercise.procedure.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-white mb-2">Các bước thực hiện:</h4>
                        <ol className="space-y-1">
                          {exercise.procedure.map((step, stepIndex) => (
                            <li key={stepIndex} className="text-gray-300 text-sm flex items-start">
                              <span className={`w-6 h-6 bg-${config.primaryColor}-500/20 rounded-full flex items-center justify-center text-${config.primaryColor}-400 text-xs font-bold mr-2 mt-0.5 flex-shrink-0`}>
                                {stepIndex + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* Expected Results */}
                    {exercise.expectedResults && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-white mb-2">Kết quả mong đợi:</h4>
                        <p className={`text-gray-300 text-sm bg-${config.primaryColor}-500/10 p-3 rounded-lg border border-${config.primaryColor}-500/20`}>
                          {exercise.expectedResults}
                        </p>
                      </div>
                    )}

                    {/* Solution Toggle */}
                    {exercise.solution && (
                      <details className="mt-4">
                        <summary className={`cursor-pointer font-semibold text-${config.primaryColor}-400 hover:text-${config.primaryColor}-300 transition-colors`}>
                          Xem hướng dẫn chi tiết & phân tích
                        </summary>
                        <div className="mt-4 p-4 bg-black/20 rounded-lg border border-white/10">
                          <pre className="text-gray-300 text-sm whitespace-pre-wrap overflow-x-auto">
                            {exercise.solution}
                          </pre>
                        </div>
                      </details>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Real-world Applications */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className={`w-6 h-6 mr-3 text-${config.primaryColor}-400`} />
                Ứng dụng thực tế
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson.realWorldApplications.map((application, index) => (
                  <div key={index} className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className={`w-6 h-6 bg-gradient-to-r from-${config.primaryColor}-500 to-${config.secondaryColor}-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0`}>
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{application}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            {lesson.caseStudies && lesson.caseStudies.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Book className={`w-6 h-6 mr-3 text-${config.primaryColor}-400`} />
                  Nghiên cứu tình huống
                </h2>
                <div className="space-y-6">
                  {lesson.caseStudies.map((caseStudy, index) => (
                    <div key={index} className="border border-white/10 rounded-xl p-6 bg-white/5">
                      <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                      <p className={`text-${config.primaryColor}-400 font-medium mb-4`}>{caseStudy.organization}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Vấn đề:</h4>
                          <p className="text-gray-300">{caseStudy.problem}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Giải pháp:</h4>
                          <p className="text-gray-300">{caseStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Tác động:</h4>
                          <p className="text-gray-300">{caseStudy.impact}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Đổi mới chính:</h4>
                          <ul className="space-y-1">
                            {caseStudy.innovations.map((innovation, innovationIndex) => (
                              <li key={innovationIndex} className="text-gray-300 flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                {innovation}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center">
              {previousLesson ? (
                <Link
                  href={`${config.modulePath}/${previousLesson.id}`}
                  className="flex items-center px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Bài trước
                </Link>
              ) : (
                <div></div>
              )}

              {nextLesson && (
                <Link
                  href={`${config.modulePath}/${nextLesson.id}`}
                  className={`flex items-center px-6 py-3 bg-gradient-to-r from-${config.primaryColor}-500 to-${config.secondaryColor}-500 text-white rounded-xl hover:from-${config.primaryColor}-600 hover:to-${config.secondaryColor}-600 transition-all duration-300`}
                >
                  Bài tiếp theo
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Custom Sidebar Content */}
            {config.sidebarContent && config.sidebarContent(lesson)}

            {/* Resources */}
            {lesson.resources && lesson.resources.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
                <h4 className="font-semibold text-white mb-3">Tài nguyên bổ sung</h4>
                <div className="space-y-2">
                  {lesson.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/30 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          {resource.title}
                        </span>
                        <ExternalLink className={`w-4 h-4 text-gray-400 group-hover:text-${config.primaryColor}-400 transition-colors`} />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{resource.type}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Course Progress */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Tiến độ khóa học</h3>
              <div className="space-y-3">
                {config.lessons.map((lessonItem, index) => (
                  <Link
                    key={lessonItem.id}
                    href={`${config.modulePath}/${lessonItem.id}`}
                    className={`block p-3 rounded-lg border transition-all duration-300 ${
                      lessonItem.id === lesson.id
                        ? `bg-${config.primaryColor}-500/20 border-${config.primaryColor}-500/50 text-white`
                        : `bg-white/5 border-white/10 text-gray-300 hover:border-${config.primaryColor}-500/30 hover:text-white`
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${
                        lessonItem.id === lesson.id
                          ? `bg-${config.primaryColor}-500 text-white`
                          : 'bg-white/10 text-gray-400'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">
                          {lessonItem.title.replace(/^Bài \d+: /, '')}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {lessonItem.duration} • {lessonItem.difficulty}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
