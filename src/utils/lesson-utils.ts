import { BaseLessonData } from '@/types/lesson-base';

export const getLessonById = <T extends BaseLessonData>(lessons: T[], id: string): T | undefined => {
  return lessons.find((lesson) => lesson.id === id);
};
