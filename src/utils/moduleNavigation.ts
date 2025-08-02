// Dynamic Navigation Utility for Module Sub-pages
// Generates navigation based on lesson index in data array

import { arduinoLessons } from '@/data/arduino';
import { roboticsLessons } from '@/data/robotics';
import { scratchLessons } from '@/data/scratch';
import { stemLessons } from '@/data/stem';
import { digitalMarketingLessons } from '@/data/digital-marketing';
import { greenTechLessons } from '@/data/green-technology';

export interface NavigationLink {
  href: string;
  title: string;
  isNext: boolean;
  isPrevious: boolean;
}

export interface ModuleNavigation {
  previous?: NavigationLink;
  next?: NavigationLink;
  current: {
    index: number;
    total: number;
    title: string;
  };
}

// Map lesson IDs to actual page paths
const pageMapping = {
  // Arduino mappings
  'arduino-setup': '/arduino/arduino-setup',
  'led-digital-outputs': '/arduino/led-digital-outputs',
  'arduino-inputs': '/arduino/arduino-inputs',
  'arduino-sensors': '/arduino/arduino-sensors',
  'arduino-communication': '/arduino/arduino-communication',
  'arduino-advanced-projects': '/arduino/arduino-advanced-projects',
  'arduino-basics': '/arduino/arduino-basics',

  // Robotics mappings
  'basic-robotics-intro': '/robotics/robotics-intro',
  'basic-electronics': '/robotics/basic-electronics',
  'microcontroller-basics': '/robotics/microcontroller-basics',
  'sensors-actuators': '/robotics/sensors-actuators',
  'mobile-robots': '/robotics/mobile-robots',
  'iot-robotics': '/robotics/iot-robotics',

  // Scratch mappings
  'scratch-introduction': '/scratch/scratch-intro',
  'scratch-sprites-sounds': '/scratch/scratch-sprites-sounds',
  'scratch-variables-logic': '/scratch/scratch-variables-logic',
  'scratch-game-development': '/scratch/scratch-game-development',
  'scratch-advanced-features': '/scratch/scratch-advanced-features',

  // STEM mappings
  'stem-introduction': '/stem/stem-introduction',
  'fun-physics-experiments': '/stem/fun-physics-experiments',
  'coding-for-kids': '/stem/coding-for-kids',
  'engineering-challenges': '/stem/engineering-challenges',
  'math-in-real-life': '/stem/math-in-real-life',
  'art-meets-science': '/stem/art-meets-science',
  'environmental-solutions': '/stem/environmental-solutions',

  // Digital Marketing mappings
  'digital-marketing-fundamentals': '/digital-marketing/digital-marketing-fundamentals',
  'social-media-marketing': '/digital-marketing/social-media-marketing',
  'content-marketing-strategy': '/digital-marketing/content-marketing-strategy',
  'seo-search-marketing': '/digital-marketing/seo-search-marketing',
  'paid-advertising': '/digital-marketing/paid-advertising',
  'email-marketing-automation': '/digital-marketing/email-marketing-automation',
  'analytics-data-driven-marketing': '/digital-marketing/analytics-data-driven-marketing',
  'creator-economy-monetization': '/digital-marketing/creator-economy-monetization',

  // Green Technology mappings
  'renewable-energy-basics': '/green-technology/renewable-energy-basics',
  'smart-city-iot-solutions': '/green-technology/smart-city-iot-solutions'
};

export function getModuleNavigation(
  module: 'arduino' | 'robotics' | 'scratch' | 'stem' | 'digital-marketing' | 'green-technology',
  currentLessonId: string
): ModuleNavigation | null {
  let lessons;
  let moduleBasePath;

  switch (module) {
    case 'arduino':
      lessons = arduinoLessons;
      moduleBasePath = '/arduino';
      break;
    case 'robotics':
      lessons = roboticsLessons;
      moduleBasePath = '/robotics';
      break;
    case 'scratch':
      lessons = scratchLessons;
      moduleBasePath = '/scratch';
      break;
    case 'stem':
      lessons = stemLessons;
      moduleBasePath = '/stem';
      break;
    case 'digital-marketing':
      lessons = digitalMarketingLessons;
      moduleBasePath = '/digital-marketing';
      break;
    case 'green-technology':
      lessons = greenTechLessons;
      moduleBasePath = '/green-technology';
      break;
    default:
      return null;
  }

  const currentIndex = lessons.findIndex(
    (lesson) => lesson.id === currentLessonId
  );

  if (currentIndex === -1) {
    return null;
  }

  const navigation: ModuleNavigation = {
    current: {
      index: currentIndex + 1,
      total: lessons.length,
      title: lessons[currentIndex].title
    }
  };

  // Previous lesson
  if (currentIndex > 0) {
    const previousLesson = lessons[currentIndex - 1];
    const previousPath =
      pageMapping[previousLesson.id as keyof typeof pageMapping] ||
      `${moduleBasePath}/${previousLesson.id}`;

    navigation.previous = {
      href: previousPath,
      title: previousLesson.title,
      isPrevious: true,
      isNext: false
    };
  }

  // Next lesson
  if (currentIndex < lessons.length - 1) {
    const nextLesson = lessons[currentIndex + 1];
    const nextPath =
      pageMapping[nextLesson.id as keyof typeof pageMapping] ||
      `${moduleBasePath}/${nextLesson.id}`;

    navigation.next = {
      href: nextPath,
      title: nextLesson.title,
      isPrevious: false,
      isNext: true
    };
  }

  return navigation;
}

// Helper function to get lesson by ID
export function getLessonById(
  module: 'arduino' | 'robotics' | 'scratch' | 'stem',
  lessonId: string
) {
  let lessons;

  switch (module) {
    case 'arduino':
      lessons = arduinoLessons;
      break;
    case 'robotics':
      lessons = roboticsLessons;
      break;
    case 'scratch':
      lessons = scratchLessons;
      break;
    case 'stem':
      lessons = stemLessons;
      break;
    default:
      return null;
  }

  return lessons.find((lesson) => lesson.id === lessonId);
}

// Generate navigation object for components to use
export function getNavigationConfig(
  navigation: ModuleNavigation,
  moduleBasePath: string
) {
  return {
    previous: navigation.previous
      ? {
          href: navigation.previous.href,
          title: navigation.previous.title,
          label: `← Bài trước: ${navigation.previous.title}`
        }
      : {
          href: moduleBasePath,
          title: 'Module',
          label: '← Quay lại Module'
        },
    next: navigation.next
      ? {
          href: navigation.next.href,
          title: navigation.next.title,
          label: `Bài tiếp theo: ${navigation.next.title} →`
        }
      : {
          href: moduleBasePath,
          title: 'Module',
          label: 'Hoàn thành Module →'
        },
    progress: {
      current: navigation.current.index,
      total: navigation.current.total,
      percentage: Math.round(
        (navigation.current.index / navigation.current.total) * 100
      )
    }
  };
}
