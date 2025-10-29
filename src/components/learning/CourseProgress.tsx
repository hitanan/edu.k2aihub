'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle, Circle, Clock, Award } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  difficulty?: string;
}

interface CourseProgressProps {
  lessons: Lesson[];
  currentLessonId: string;
  moduleSlug: string;
  moduleTitle: string;
  primaryColor?: string;
}

export default function CourseProgress({
  lessons,
  currentLessonId,
  moduleSlug,
  moduleTitle,
  primaryColor = 'purple'
}: CourseProgressProps) {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  // Load completed lessons from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`course-progress-${moduleSlug}`);
    if (saved) {
      try {
        const savedLessons = JSON.parse(saved);
        setCompletedLessons(new Set(savedLessons));
      } catch (error) {
        console.error('Error loading course progress:', error);
      }
    }
  }, [moduleSlug]);

  // Save progress to localStorage
  const saveProgress = (lessonIds: string[]) => {
    localStorage.setItem(`course-progress-${moduleSlug}`, JSON.stringify(lessonIds));
  };

  // Toggle lesson completion
  const toggleLessonCompletion = (lessonId: string) => {
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(lessonId)) {
      newCompleted.delete(lessonId);
    } else {
      newCompleted.add(lessonId);
    }
    setCompletedLessons(newCompleted);
    saveProgress(Array.from(newCompleted));
  };

  const completionPercentage = Math.round((completedLessons.size / lessons.length) * 100);
  const currentLessonIndex = lessons.findIndex(lesson => lesson.id === currentLessonId);

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Dễ':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Trung bình':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Khó':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'text-purple-400 border-purple-400 bg-purple-400',
      blue: 'text-blue-400 border-blue-400 bg-blue-400',
      green: 'text-green-400 border-green-400 bg-green-400',
      orange: 'text-orange-400 border-orange-400 bg-orange-400',
      red: 'text-red-400 border-red-400 bg-red-400',
      teal: 'text-teal-400 border-teal-400 bg-teal-400',
      pink: 'text-pink-400 border-pink-400 bg-pink-400',
      indigo: 'text-indigo-400 border-indigo-400 bg-indigo-400',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  const colorClasses = getColorClasses(primaryColor);
  const [textColor, , bgColor] = colorClasses.split(' ');

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold text-white flex items-center`}>
          <BookOpen className={`w-5 h-5 ${textColor} mr-2`} />
          Tiến độ khóa học
        </h3>
        <div className="flex items-center space-x-2">
          <Award className={`w-4 h-4 ${textColor}`} />
          <span className="text-white font-semibold">{completionPercentage}%</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-300 mb-2">
          <span>Hoàn thành</span>
          <span>{completedLessons.size}/{lessons.length} bài</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-3">
          <div
            className={`h-3 ${bgColor}/70 rounded-full transition-all duration-300`}
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <div className="text-white font-semibold">{lessons.length}</div>
          <div className="text-xs text-gray-300">Tổng bài</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <div className="text-white font-semibold">{currentLessonIndex + 1}</div>
          <div className="text-xs text-gray-300">Bài hiện tại</div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-gray-300 mb-3">Danh sách bài học</h4>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {lessons.map((lesson, index) => {
            const isCompleted = completedLessons.has(lesson.id);
            const isCurrent = lesson.id === currentLessonId;

            return (
              <div
                key={lesson.id}
                className={`relative flex items-start space-x-3 p-3 rounded-lg transition-all duration-200 ${
                  isCurrent
                    ? `bg-${primaryColor}-500/20 border border-${primaryColor}-400/30`
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                {/* Completion Toggle */}
                <button
                  onClick={() => toggleLessonCompletion(lesson.id)}
                  className={`flex-shrink-0 mt-0.5 transition-colors ${
                    isCompleted ? textColor : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </button>

                {/* Lesson Content */}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/learning/${moduleSlug}/${lesson.id}`}
                    className={`block group ${
                      isCurrent ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium mb-1 group-hover:underline">
                          Bài {index + 1}: {lesson.title.replace(/^Bài \d+:\s*/, '')}
                        </div>
                        
                        <div className="flex items-center space-x-2 text-xs">
                          <div className="flex items-center text-gray-400">
                            <Clock className="w-3 h-3 mr-1" />
                            {lesson.duration}
                          </div>
                          {lesson.difficulty && (
                            <span className={`px-2 py-0.5 rounded-full text-xs border ${getDifficultyColor(lesson.difficulty)}`}>
                              {lesson.difficulty}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {isCurrent && (
                        <div className={`w-2 h-2 ${bgColor} rounded-full ml-2 mt-1`} />
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Completion Message */}
      {completionPercentage === 100 && (
        <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">Chúc mừng!</span>
          </div>
          <p className="text-sm text-green-200 mt-1">
            Bạn đã hoàn thành 100% khóa học {moduleTitle}
          </p>
        </div>
      )}

      {/* Quick Navigation */}
      {lessons.length > 1 && (
        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="flex justify-between space-x-2">
            {currentLessonIndex > 0 && (
              <Link
                href={`/learning/${moduleSlug}/${lessons[currentLessonIndex - 1].id}`}
                className={`flex-1 text-center py-2 px-3 bg-white/10 hover:bg-white/20 ${textColor} text-sm rounded-lg transition-colors`}
              >
                ← Previous Lesson
              </Link>
            )}
            {currentLessonIndex < lessons.length - 1 && (
              <Link
                href={`/learning/${moduleSlug}/${lessons[currentLessonIndex + 1].id}`}
                className={`flex-1 text-center py-2 px-3 bg-white/10 hover:bg-white/20 ${textColor} text-sm rounded-lg transition-colors`}
              >
                Bài tiếp →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}