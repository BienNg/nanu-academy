import { courses } from '../courses/courses';
import { lessons } from '../courses/lessons';

type UserProgress = {
  userId: string;
  courses: {
    [courseId: string]: {
      completed: boolean;
      progress: number;
      completedLessons: string[];
      lastAccessed: string;
    };
  };
  streaks: {
    current: number;
    longest: number;
    lastActive: string;
  };
  achievements: string[];
};

export const userProgress: Record<string, UserProgress> = {
  'user_001': {
    userId: 'user_001',
    courses: {
      'course_001': {
        completed: false,
        progress: 35,
        completedLessons: ['lesson-1', 'lesson-2', 'lesson-3'],
        lastAccessed: new Date().toISOString()
      },
      'course_002': {
        completed: false,
        progress: 15,
        completedLessons: ['a2-lesson-1', 'a2-lesson-2'],
        lastAccessed: new Date(Date.now() - 86400000).toISOString() // Yesterday
      }
    },
    streaks: {
      current: 5,
      longest: 10,
      lastActive: new Date().toISOString()
    },
    achievements: ['first_lesson', 'fast_learner', 'week_streak']
  }
};

export const getUserProgress = (userId: string): UserProgress | undefined => {
  return userProgress[userId];
};

export const updateLessonCompletion = (
  userId: string, 
  courseId: string, 
  lessonId: string
): void => {
  const user = userProgress[userId];
  if (!user) return;
  
  if (!user.courses[courseId]) {
    user.courses[courseId] = {
      completed: false,
      progress: 0,
      completedLessons: [],
      lastAccessed: new Date().toISOString()
    };
  }
  
  const course = user.courses[courseId];
  
  // Add lesson to completed if not already there
  if (!course.completedLessons.includes(lessonId)) {
    course.completedLessons.push(lessonId);
    
    // Update progress percentage
    const courseLessons = lessons[courseId as keyof typeof lessons] || [];
    course.progress = Math.min(100, Math.round((course.completedLessons.length / courseLessons.length) * 100));
    
    // Update streak if this is a new day
    const lastActive = new Date(course.lastAccessed);
    const today = new Date();
    if (lastActive.toDateString() !== today.toDateString()) {
      user.streaks.current++;
      user.streaks.longest = Math.max(user.streaks.longest, user.streaks.current);
      course.lastAccessed = today.toISOString();
    }
  }
};
