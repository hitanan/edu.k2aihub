import { BaseLessonData } from '@/types/lesson-base';
import { createDescription, createLessonMetadata, createTitle } from '@/utils/seo';
import {
  Book,
  BookOpen,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  HelpCircle,
  Lightbulb,
  ListChecks,
  Play,
  Target,
  User,
  Users,
} from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { YoutubePlayer } from '@/components/media/YoutubePlayer';
import { CareerConnectSection } from './CareerConnectSection';
import { EducationalGamesShowcase } from '../games/EducationalGames';
import { InteractiveQuiz } from './InteractiveQuiz';
import { LessonAnalytics } from './LessonAnalytics';
import { VietnamContextBox } from './VietnamContextBox';

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
  lessonId: string | undefined;
  config: LessonPageConfig<T>;
}

export function generateLessonMetadata<T extends BaseLessonData>(
  lessonId: string,
  lessons: T[],
  moduleType: string = '',
): Metadata {
  const lesson = lessons.find((l) => l.id === lessonId);

  if (!lesson) {
    return createLessonMetadata('Bài học không tìm thấy', 'Không thể tìm thấy bài học yêu cầu', moduleType, lessonId, [
      'not found',
      'error',
    ]);
  }
  if (!moduleType) {
    return {
      title: createTitle(lesson.title),
      description: createDescription(lesson.description),
      openGraph: {
        title: lesson.title,
        description: lesson.description,
        images: lesson.imageUrl ? [{ url: lesson.imageUrl }] : [],
      },
    };
  }

  return createLessonMetadata(lesson.title, lesson.description, moduleType, lessonId, lesson.objectives || []);
}

export function generateLessonStaticParams<T extends BaseLessonData>(lessons: T[]) {
  return lessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case 'cơ bản':
      return 'from-green-500 to-emerald-500';
    case 'trung bình':
      return 'from-yellow-500 to-orange-500';
    case 'nâng cao':
      return 'from-red-500 to-pink-500';
    case 'chuyên gia':
      return 'from-purple-500 to-violet-500';
    default:
      return 'from-blue-500 to-cyan-500';
  }
}

export function LessonPageTemplate<T extends BaseLessonData>({ lessonId, config }: LessonPageTemplateProps<T>) {
  const lesson = config.lessons.find((l) => l.id === lessonId);

  if (!lesson) {
    notFound();
  }

  const currentIndex = config.lessons.findIndex((l) => l.id === lessonId);
  const previousLesson = currentIndex > 0 ? config.lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < config.lessons.length - 1 ? config.lessons[currentIndex + 1] : null;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.gradientColors}`}>
      {/* Analytics and Progress Tracking */}
      <LessonAnalytics lesson={lesson} moduleName={config.moduleName} moduleTitle={config.moduleTitle} />

      {/* Navigation Header */}
      <div className="bg-black/20 border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <Link
              href={config.modulePath}
              className="flex items-center text-gray-300 hover:text-white transition-colors min-w-0"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
              <span className="truncate">Quay lại {config.moduleTitle}</span>
            </Link>{' '}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {config.getFieldIcon && config.getFieldValue && (
                <div
                  className={`flex items-center px-2 sm:px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-white text-xs sm:text-sm`}
                >
                  {config.getFieldIcon(config.getFieldValue(lesson))}
                  <span className="ml-1 sm:ml-2">{config.getFieldValue(lesson)}</span>
                </div>
              )}
              <div
                className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${getDifficultyColor(lesson.difficulty)} rounded-full text-white text-xs sm:text-sm font-medium`}
              >
                {lesson.difficulty}
              </div>
              {lesson.environmentalImpact && (
                <div className="bg-teal-500/20 text-teal-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  🌱 <span className="hidden sm:inline">{lesson.environmentalImpact}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="xl:col-span-3 order-2 xl:order-1">
            {/* Lesson Header */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                {lesson.title}
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed">{lesson.description}</p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Clock className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-400 flex-shrink-0`} />
                  <span>{lesson.duration}</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Target className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-400 flex-shrink-0`} />
                  <span>{lesson.difficulty}</span>
                </div>
                {config.getFieldValue && lesson && (
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <User className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-400 flex-shrink-0`} />
                    <span>{config.getFieldValue(lesson)}</span>
                  </div>
                )}
              </div>

              {lesson.videoUrl && (
                <div className="relative rounded-xl overflow-hidden mb-4 sm:mb-6 bg-black/20">
                  <YoutubePlayer videoId={lesson.videoUrl.split('v=')[1]} />
                </div>
              )}
            </div>

            {/* Learning Objectives & Prerequisites */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
                  <Target className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-400 flex-shrink-0`} />
                  Mục tiêu
                </h2>
                <ul className="space-y-3">
                  {lesson.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm sm:text-base">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
                  <Book className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-400 flex-shrink-0`} />
                  Yêu cầu
                </h2>
                <ul className="space-y-3">
                  {lesson.prerequisites &&
                    lesson.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start">
                        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm sm:text-base">{prereq}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Vietnam Context */}
            {lesson.vietnamContext && (
              <div className="mb-6 sm:mb-8">
                <VietnamContextBox title={lesson.vietnamContext.title} content={lesson.vietnamContext.content} />
              </div>
            )}

            {/* Interactive Quizzes */}
            {lesson.quizzes && lesson.quizzes.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  <HelpCircle className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-400 flex-shrink-0`} />
                  Kiểm tra kiến thức
                </h2>
                <div className="space-y-4">
                  {lesson.quizzes.map((quiz, index) => (
                    <InteractiveQuiz key={index} quiz={quiz} primaryColor={config.primaryColor} />
                  ))}
                </div>
              </div>
            )}

            {/* Exercises */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                <Play className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-400 flex-shrink-0`} />
                Bài tập thực hành
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {lesson.exercises &&
                  lesson.exercises.map((exercise, index) => (
                    <details
                      key={index}
                      className="border border-white/10 rounded-xl p-4 sm:p-6 bg-white/5 group"
                      open={index === 0}
                    >
                      <summary className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 cursor-pointer">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                          {exercise.title}
                        </h3>
                        <span
                          className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(exercise.difficulty)} rounded-full text-white text-sm font-medium self-start`}
                        >
                          {exercise.difficulty}
                        </span>
                      </summary>

                      <div className="mt-4">
                        <p className="text-gray-300 mb-4 text-sm sm:text-base">{exercise.description}</p>

                        {/* Materials */}
                        {exercise.materials && exercise.materials.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Công cụ cần thiết:</h4>
                            <ul className="space-y-1">
                              {exercise.materials.map((material, matIndex) => (
                                <li key={matIndex} className="text-gray-300 text-xs sm:text-sm flex items-start">
                                  <span
                                    className={`w-2 h-2 bg-primary-400 rounded-full mr-2 mt-1.5 sm:mt-2 flex-shrink-0`}
                                  ></span>
                                  {material}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Procedure */}
                        {exercise.procedure && exercise.procedure.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Các bước thực hiện:</h4>
                            <ol className="space-y-2">
                              {exercise.procedure.map((step, stepIndex) => (
                                <li key={stepIndex} className="text-gray-300 text-xs sm:text-sm flex items-start">
                                  <span
                                    className={`w-5 h-5 sm:w-6 sm:h-6 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 text-xs font-bold mr-2 mt-0.5 flex-shrink-0`}
                                  >
                                    {stepIndex + 1}
                                  </span>
                                  <span className="leading-relaxed">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}

                        {/* Expected Results */}
                        {exercise.expectedResults && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Kết quả mong đợi:</h4>
                            <p
                              className={`text-gray-300 text-xs sm:text-sm bg-primary-500/10 p-3 rounded-lg border border-primary-500/20`}
                            >
                              {exercise.expectedResults}
                            </p>
                          </div>
                        )}

                        {/* Video for exercise */}
                        {exercise.videoUrl && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Video hướng dẫn:</h4>
                            <div className="relative rounded-xl overflow-hidden bg-black/20">
                              <YoutubePlayer videoId={exercise.videoUrl.split('v=')[1]} />
                            </div>
                          </div>
                        )}

                        {/* Solution Toggle */}
                        {exercise.solution && (
                          <details className="mt-4">
                            <summary
                              className={`cursor-pointer font-semibold text-primary-400 hover:text-primary-300 transition-colors text-sm sm:text-base`}
                              data-solution-exercise={exercise.title}
                            >
                              Xem hướng dẫn chi tiết & phân tích
                            </summary>
                            <div className="mt-4 p-3 sm:p-4 bg-black/20 rounded-lg border border-white/10">
                              <pre className="text-gray-300 text-xs sm:text-sm whitespace-pre-wrap overflow-x-auto">
                                {exercise.solution}
                              </pre>
                            </div>
                          </details>
                        )}
                      </div>
                    </details>
                  ))}
              </div>
            </div>

            {/* Real-world Applications */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                <Users className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-400 flex-shrink-0`} />
                Ứng dụng thực tế
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lesson.realWorldApplications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10 transform hover:scale-105 hover:border-primary-500/50 transition-all duration-300"
                  >
                    <div className={`p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mr-4`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{application}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Educational Games Section */}
            <div className="mb-6 sm:mb-8">
              <EducationalGamesShowcase moduleType={config.moduleName} limit={3} />
            </div>

            {/* Career Connect */}
            {lesson.careerConnect && (
              <div className="mb-6 sm:mb-8">
                <CareerConnectSection {...lesson.careerConnect} />
              </div>
            )}

            {/* Case Studies */}
            {lesson.caseStudies && lesson.caseStudies.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  <Book className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-400 flex-shrink-0`} />
                  Nghiên cứu tình huống
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {lesson.caseStudies.map((caseStudy, index) => (
                    <div key={index} className="border border-white/10 rounded-xl p-4 sm:p-6 bg-white/5">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                      <p className={`text-primary-400 font-medium mb-3 sm:mb-4 text-sm sm:text-base`}>
                        {caseStudy.organization}
                      </p>

                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Vấn đề:</h4>
                          <p className="text-gray-300 text-sm sm:text-base">{caseStudy.problem}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Giải pháp:</h4>
                          <p className="text-gray-300 text-sm sm:text-base">{caseStudy.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Tác động:</h4>
                          <p className="text-gray-300 text-sm sm:text-base">{caseStudy.impact}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Đổi mới chính:</h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {caseStudy.innovations.map((innovation, innovationIndex) => (
                              <li key={innovationIndex} className="text-gray-300 flex items-start text-sm sm:text-base">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">{innovation}</span>
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
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4">
              {previousLesson ? (
                <Link
                  href={`${config.modulePath}/${previousLesson.id}`}
                  className="flex items-center justify-center sm:justify-start px-4 sm:px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 text-sm sm:text-base min-h-[44px]"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                  <span className="truncate">Bài trước</span>
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}

              {nextLesson && (
                <Link
                  href={`${config.modulePath}/${nextLesson.id}`}
                  className={`flex items-center justify-center sm:justify-start px-4 sm:px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 text-sm sm:text-base min-h-[44px]`}
                >
                  <span className="truncate">Bài tiếp theo</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-1 order-1 xl:order-2">
            <div className="sticky top-24 space-y-6 sm:space-y-8">
              {/* Custom Sidebar Content */}
              {config.sidebarContent && lesson && (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                  {config.sidebarContent(lesson)}
                </div>
              )}

              {/* Resources */}
              {lesson.resources && lesson.resources.length > 0 && (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
                    <BookOpen className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-400 flex-shrink-0`} />
                    Tài nguyên
                  </h2>
                  <ul className="space-y-3">
                    {lesson.resources.map((resource, index) => (
                      <li key={index}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-300 hover:text-white transition-colors group"
                        >
                          <span
                            className={`w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform`}
                          ></span>
                          <span className="flex-grow truncate text-sm sm:text-base">{resource.title}</span>
                          <span
                            className={`ml-2 text-xs text-gray-400 border border-gray-600 px-1.5 py-0.5 rounded-md bg-gray-700/50`}
                          >
                            {resource.type}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Module Lessons */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
                  <ListChecks className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-400 flex-shrink-0`} />
                  Các bài học
                </h2>
                <ul className="space-y-2">
                  {config.lessons.map((l, index) => (
                    <li key={l.id}>
                      <Link
                        href={`${config.modulePath}/${l.id}`}
                        className={`flex items-center p-3 rounded-lg transition-colors text-sm sm:text-base ${
                          l.id === lessonId
                            ? `bg-gradient-to-r from-primary-500/30 to-secondary-500/30 text-white font-semibold`
                            : 'text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 ${
                            l.id === lessonId
                              ? `bg-gradient-to-r from-primary-500 to-secondary-500 text-white`
                              : 'bg-gray-700 text-gray-300'
                          }`}
                        >
                          {index + 1}
                        </span>
                        <span className="truncate">{l.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
