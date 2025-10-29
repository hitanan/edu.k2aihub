import { notFound } from 'next/navigation';
import { createTitle, createDescription } from '@/utils/seo';
import { pythonLessons } from '@/data/modules/python';
import Link from 'next/link';
import { Clock, Target, User, Play, ChevronLeft, ChevronRight, Code, CheckCircle, Youtube } from 'lucide-react';
import { Exercise } from '@/types/lesson-base';

// Generate static params
export async function generateStaticParams() {
  return pythonLessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = pythonLessons.find((l) => l.id === lessonId);

  if (!lesson) {
    return {
      title: createTitle('Bài học không tìm thấy'),
      description: createDescription('Bài học Python này không tồn tại.'),
    };
  }

  return {
    title: createTitle(lesson.title),
    description: createDescription(lesson.description),
    keywords: `Python, ${lesson.title}, programming, ${lesson.difficulty}, coding, development`,
  };
}

// Page component
export default async function PythonLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = pythonLessons.find((l) => l.id === lessonId);

  if (!lesson) {
    notFound();
  }

  const currentIndex = pythonLessons.findIndex((l) => l.id === lessonId);
  const previousLesson = currentIndex > 0 ? pythonLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < pythonLessons.length - 1 ? pythonLessons[currentIndex + 1] : null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Dễ':
        return 'bg-green-500/20 text-green-200';
      case 'Trung bình':
        return 'bg-yellow-500/20 text-yellow-200';
      case 'Khó':
        return 'bg-red-500/20 text-red-200';
      default:
        return 'bg-gray-500/20 text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-3 text-sm">
            <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
              Trang chủ
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/learning/python" className="text-green-400 hover:text-green-300 transition-colors">
              Python Programming
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
                <Code className="w-6 h-6 text-green-400" />
                <span className="text-green-400 font-medium">Python Programming</span>
              </div>

              <h1 className="text-4xl font-bold text-white mb-4">{lesson.title}</h1>
              <p className="text-xl text-gray-200 mb-6">{lesson.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{lesson.duration}</div>
                  <div className="text-sm text-gray-300">Thời gian</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Target className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className={`text-sm font-semibold px-2 py-1 rounded ${getDifficultyColor(lesson.difficulty)}`}>
                    {lesson.difficulty}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">Độ khó</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <User className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{lesson.objectives.length}</div>
                  <div className="text-sm text-gray-300">Mục tiêu</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Play className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{lesson.exercises?.length || 0}</div>
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
                <Target className="w-6 h-6 text-green-400 mr-3" />
                Mục tiêu học tập
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson.objectives.map((objective: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercises */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Bài tập thực hành</h2>
              <div className="space-y-6">
                {lesson.exercises &&
                  lesson.exercises.map((exercise: Exercise, index: number) => (
                    <div key={index} className="border border-white/20 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white">{exercise.title}</h3>
                        <span
                          className={`text-sm font-semibold px-3 py-1 rounded ${getDifficultyColor(exercise.difficulty)}`}
                        >
                          {exercise.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-200 mb-4">{exercise.description}</p>

                      {exercise.procedure && exercise.procedure.length > 0 && (
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
                          <h4 className="text-blue-300 font-semibold mb-2">📋 Các bước thực hiện:</h4>
                          <ul className="space-y-1">
                            {exercise.procedure.map((step: string, stepIndex: number) => (
                              <li key={stepIndex} className="text-gray-300 text-sm">
                                • {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exercise.expectedResults && (
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-4">
                          <h4 className="text-yellow-300 font-semibold mb-2">Kết quả mong đợi:</h4>
                          <p className="text-gray-300 text-sm">{exercise.expectedResults}</p>
                        </div>
                      )}

                      {exercise.solution && (
                        <div className="bg-black/50 rounded-lg p-4">
                          <h4 className="text-gray-300 font-semibold mb-2">💡 Giải pháp:</h4>
                          <pre className="text-green-400 text-sm overflow-x-auto">
                            <code>{exercise.solution}</code>
                          </pre>
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
                {lesson.realWorldApplications.map((application: string, index: number) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-200">{application}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Prerequisites */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Kiến thức cần thiết
              </h3>
              <ul className="space-y-2">
                {lesson.prerequisites &&
                  lesson.prerequisites.map((prerequisite: string, index: number) => (
                    <li key={index} className="text-gray-300 text-sm">
                      • {prerequisite}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Quick Tips */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">💡 Lời khuyên</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>• Thực hành code mỗi ngày</li>
                <li>• Đọc lỗi cẩn thận</li>
                <li>• Sử dụng print() để debug</li>
                <li>• Tham gia cộng đồng Python</li>
                <li>• Xây dựng dự án thực tế</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/20">
          {previousLesson ? (
            <Link
              href={`/learning/python/${previousLesson.id}`}
              className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-green-400" />
              <div>
                <div className="text-sm text-gray-400">Previous Lesson</div>
                <div className="text-white font-medium">{previousLesson.title}</div>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {nextLesson && (
            <Link
              href={`/learning/python/${nextLesson.id}`}
              className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-200"
            >
              <div className="text-right">
                <div className="text-sm text-gray-400">Bài tiếp theo</div>
                <div className="text-white font-medium">{nextLesson.title}</div>
              </div>
              <ChevronRight className="w-5 h-5 text-green-400" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
