'use client';

import { useEffect } from 'react';
import { useGoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { PageTracker } from '@/components/gamification/VisitTracker';
import { useLearningProgress } from '@/components/gamification/LearningProgress';
import { BaseLessonData } from './LessonPageTemplate';

interface LessonAnalyticsProps {
  lesson: BaseLessonData;
  moduleName: string;
  moduleTitle: string;
}

export function LessonAnalytics({
  lesson,
  moduleName,
  moduleTitle,
}: LessonAnalyticsProps) {
  const {
    trackLessonStart,
    trackVideoPlay,
    trackExerciseStart,
    trackSolutionView,
    trackResourceClick,
  } = useGoogleAnalytics();
  const { completLesson } = useLearningProgress();

  useEffect(() => {
    // Track lesson start
    trackLessonStart(moduleName, lesson.id, lesson.title);

    // Track time spent on lesson for progress
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60); // minutes
      if (timeSpent > 1) {
        // Only count if spent more than 1 minute
        completLesson(moduleName, lesson.id, timeSpent);
      }
    };
  }, [lesson.id, lesson.title, moduleName, trackLessonStart, completLesson]);

  // Video play tracking
  useEffect(() => {
    if (lesson.videoUrl) {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.addEventListener('load', () => {
          trackVideoPlay(lesson.title, moduleName, lesson.id);
        });
      }
    }
  }, [lesson.videoUrl, lesson.title, lesson.id, moduleName, trackVideoPlay]);

  // Exercise interaction tracking
  useEffect(() => {
    const exerciseButtons = document.querySelectorAll('[data-exercise-title]');
    const solutionButtons = document.querySelectorAll(
      '[data-solution-exercise]',
    );
    const resourceLinks = document.querySelectorAll('[data-resource-title]');

    exerciseButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const exerciseTitle = button.getAttribute('data-exercise-title');
        if (exerciseTitle) {
          trackExerciseStart(exerciseTitle, moduleName, lesson.id);
        }
      });
    });

    solutionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const exerciseTitle = button.getAttribute('data-solution-exercise');
        if (exerciseTitle) {
          trackSolutionView(exerciseTitle, moduleName, lesson.id);
        }
      });
    });

    resourceLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const resourceTitle = link.getAttribute('data-resource-title');
        const resourceType = link.getAttribute('data-resource-type');
        if (resourceTitle && resourceType) {
          trackResourceClick(resourceType, resourceTitle, moduleName);
        }
      });
    });

    return () => {
      exerciseButtons.forEach((button) => {
        button.removeEventListener('click', () => {});
      });
      solutionButtons.forEach((button) => {
        button.removeEventListener('click', () => {});
      });
      resourceLinks.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, [
    lesson.exercises,
    lesson.resources,
    trackExerciseStart,
    trackSolutionView,
    trackResourceClick,
    moduleName,
    lesson.id,
  ]);

  return (
    <PageTracker
      path={`/learning/${moduleName}/${lesson.id}`}
      title={`${moduleTitle} - ${lesson.title}`}
      moduleType="learning"
      progress={0} // This could be calculated based on lesson completion
    />
  );
}
