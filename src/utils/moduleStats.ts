import { moduleNavigation } from '@/data/moduleNavigation';
import { isModuleData, isModuleNavigation } from './typeguards';
import { LessonNavigation } from '@/types';

export interface ModuleStats {
  totalModules: number;
  totalLessons: number;
  totalHours: number;
  categories: string[];
}

export function calculateModuleStats(): ModuleStats {
  let totalLessons = 0;
  let totalMinutes = 0;
  const categories = new Set<string>();

  moduleNavigation.forEach((module) => {
    if (isModuleNavigation(module)) {
      // Count lessons (estimate if not available)
      if (module.lessons && module.lessons.length > 0) {
        totalLessons += module.lessons.length;

        // Calculate total duration from lessons
        module.lessons.forEach((lesson: LessonNavigation) => {
          const duration = lesson.duration;
          const minutes = parseDuration(duration);
          totalMinutes += minutes;
        });
      } else {
        // Estimate lessons and duration from module totalDuration
        const moduleDuration = module.totalDuration || module.duration || '5-10 giờ';
        const minutes = parseDuration(moduleDuration);
        totalMinutes += minutes;

        // Estimate 5-8 lessons per module if not specified
        const estimatedLessons = Math.floor(minutes / 45); // Assume 45min per lesson average
        totalLessons += Math.max(5, Math.min(estimatedLessons, 12));
      }
    } else if (isModuleData(module)) {
      const moduleDuration = module.duration || '5-10 giờ';
      const minutes = parseDuration(moduleDuration);
      totalMinutes += minutes;
      const estimatedLessons = Math.floor(minutes / 45);
      totalLessons += Math.max(5, Math.min(estimatedLessons, 12));
    }

    // Add categories
    const moduleCategories = Array.isArray(module.category) ? module.category : [module.category];
    moduleCategories.forEach((cat) => categories.add(cat));
  });

  return {
    totalModules: moduleNavigation.length,
    totalLessons,
    totalHours: Math.round(totalMinutes / 60),
    categories: Array.from(categories),
  };
}

function parseDuration(duration: string): number {
  // Parse duration strings like "120 phút", "2-3 giờ", "15-20 giờ", etc.
  const cleanDuration = duration
    .toLowerCase()
    .replace(/[^\d-\s]/g, '') // Remove non-digit, non-dash, non-space characters
    .trim();

  // Extract numbers
  const numbers = cleanDuration.match(/\d+/g);
  if (!numbers) return 60; // Default 1 hour

  const firstNum = parseInt(numbers[0]);
  const secondNum = numbers[1] ? parseInt(numbers[1]) : firstNum;

  // Take average if range
  const avgValue = (firstNum + secondNum) / 2;

  // Convert to minutes based on original string
  if (duration.includes('giờ') || duration.includes('hour')) {
    return avgValue * 60; // Convert hours to minutes
  } else if (duration.includes('phút') || duration.includes('min')) {
    return avgValue; // Already in minutes
  } else {
    // Default assumption: if just numbers, assume minutes
    return avgValue;
  }
}

// Export individual stats for easy access
export const moduleStats = calculateModuleStats();
