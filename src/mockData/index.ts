// Courses
export * from './courses/courses';
export * from './courses/stages';
export * from './courses/lessons';

export * from './quizzes';

// Content
export * from './content/vocabulary';
export * from './content/flashcards';
export * from './content/exercises/types';
export * from './content/exercises/content';

// Users
export * from './users/progress';

// Combined mock data object for backward compatibility
import { courses } from './courses/courses';
import { stages } from './courses/stages';
import { lessons } from './courses/lessons';
import { vocabulary } from './content/vocabulary';
import { exercises } from './content/exercises/content';
import { exerciseTypes } from './content/exercises/types';

export const mockData = {
  // Dashboard courses with nested structure
  dashboardCourses: Object.values(courses).map(course => ({
    ...course,
    lessons: lessons[course.course_id as keyof typeof lessons] || [],
    flashcards: [], // Will be populated by the flashcards service
    quizzes: []     // Will be populated by the exercises service
  })),
  
  // Original flat structure
  courses,
  stages,
  courseContent: {}, // Will be populated by the content service
  exerciseTypes,
  vocabularyData: vocabulary,
  exerciseContent: exercises,
  
  // Add other data as needed
};

export default mockData;
