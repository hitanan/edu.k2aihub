import { GameDevLesson, gameDevLessons } from '../modules/game-development';

export const lessons = gameDevLessons;
export const mainContent = (lesson: GameDevLesson) => lesson.gameDevMainContent;
export const vietnamContext = (lesson: GameDevLesson) => lesson.vietnamContext;
export const careerConnect = (lesson: GameDevLesson) => lesson.careerConnect;
