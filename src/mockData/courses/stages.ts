import { Course } from './courses';

/**
 * Stage structure for the course system
 * Each stage contains lessons that are defined in courseStructure.ts
 * This data would typically come from an API in a real implementation
 */
export const stages = {
  "stage_001": {
    stage_id: "stage_001",
    course_id: "course_001",
    stage_number: 1,
    stage_name: "Greetings and Basic Phrases",
    stage_order: 1,
    description: "Learn basic German greetings and common phrases",
    progress: 100,
    locked: false,
    completed: true,
    xp_reward: 100,
    lesson_count: 4,
    completed_lessons: 4,
    thumbnail_url: "/images/stages/greetings.webp",
    created_at: "2024-01-15T00:00:00Z",
    updated_at: "2024-01-20T14:30:00Z"
  },
  "stage_002": {
    stage_id: "stage_002",
    course_id: "course_001",
    stage_number: 2,
    stage_name: "Numbers and Time",
    stage_order: 2,
    description: "Learn to count and tell time in German",
    progress: 75,
    locked: false,
    completed: false,
    xp_reward: 120,
    lesson_count: 4,
    completed_lessons: 3,
    thumbnail_url: "/images/stages/numbers.webp",
    created_at: "2024-01-16T00:00:00Z",
    updated_at: "2024-05-25T09:15:00Z"
  },
  "stage_003": {
    stage_id: "stage_003",
    course_id: "course_001",
    stage_number: 3,
    stage_name: "Everyday Objects",
    stage_order: 3,
    description: "Common objects and articles",
    progress: 0,
    locked: false,
    completed: false,
    xp_reward: 150,
    lesson_count: 4,
    completed_lessons: 0,
    thumbnail_url: "/images/stages/objects.webp",
    created_at: "2024-01-17T00:00:00Z",
    updated_at: "2024-01-17T00:00:00Z"
  },
  "stage_004": {
    stage_id: "stage_004",
    course_id: "course_001",
    stage_number: 4,
    stage_name: "Food and Drinks",
    stage_order: 4,
    description: "Food items and ordering at restaurants",
    progress: 0,
    locked: true,
    completed: false,
    xp_reward: 180,
    lesson_count: 4,
    completed_lessons: 0,
    thumbnail_url: "/images/stages/food.webp",
    prerequisite_stages: ["stage_003"],
    created_at: "2024-01-18T00:00:00Z",
    updated_at: "2024-01-18T00:00:00Z"
  },
  "stage_005": {
    stage_id: "stage_005",
    course_id: "course_001",
    stage_number: 5,
    stage_name: "Colors and Descriptions",
    stage_order: 5,
    description: "Colors and basic adjectives",
    progress: 0,
    locked: true,
    completed: false,
    xp_reward: 200,
    lesson_count: 4,
    completed_lessons: 0,
    thumbnail_url: "/images/stages/colors.webp",
    prerequisite_stages: ["stage_004"],
    created_at: "2024-01-19T00:00:00Z",
    updated_at: "2024-01-19T00:00:00Z"
  },
  // Added more stages to demonstrate a more complete course
  "stage_006": {
    stage_id: "stage_006",
    course_id: "course_001",
    stage_number: 6,
    stage_name: "Family Members",
    stage_order: 6,
    description: "Learn vocabulary for family relationships",
    progress: 0,
    locked: true,
    completed: false,
    xp_reward: 220,
    lesson_count: 5,
    completed_lessons: 0,
    thumbnail_url: "/images/stages/family.webp",
    prerequisite_stages: ["stage_005"],
    created_at: "2024-01-20T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z"
  },
  "stage_007": {
    stage_id: "stage_007",
    course_id: "course_001",
    stage_number: 7,
    stage_name: "Travel Phrases",
    stage_order: 7,
    description: "Essential phrases for traveling in German-speaking countries",
    progress: 0,
    locked: true,
    completed: false,
    xp_reward: 250,
    lesson_count: 6,
    completed_lessons: 0,
    thumbnail_url: "/images/stages/travel.webp",
    prerequisite_stages: ["stage_006"],
    created_at: "2024-01-21T00:00:00Z",
    updated_at: "2024-01-21T00:00:00Z"
  },
  // Course A1.2 stages
  "stage_008": {
    stage_id: "stage_008",
    course_id: "course_002",
    stage_number: 1,
    stage_name: "Past Tense Introduction",
    stage_order: 1,
    description: "Learn the basics of German past tense",
    progress: 50,
    locked: false,
    completed: false,
    xp_reward: 180,
    lesson_count: 4,
    completed_lessons: 2,
    thumbnail_url: "/images/stages/past-tense.webp",
    created_at: "2024-02-01T00:00:00Z",
    updated_at: "2024-05-28T16:45:00Z"
  },
  "stage_009": {
    stage_id: "stage_009",
    course_id: "course_002",
    stage_number: 2,
    stage_name: "Daily Activities",
    stage_order: 2,
    description: "Vocabulary and phrases for everyday activities",
    progress: 0,
    locked: false,
    completed: false,
    xp_reward: 200,
    lesson_count: 5,
    completed_lessons: 0,
    thumbnail_url: "/images/stages/activities.webp",
    created_at: "2024-02-02T00:00:00Z",
    updated_at: "2024-02-02T00:00:00Z"
  }
} as const;

export type Stage = typeof stages[keyof typeof stages];

/**
 * Utility functions for working with stage data
 */
export const getStagesByCourseId = (courseId: string): Stage[] => {
  return Object.values(stages).filter(
    (stage) => stage.course_id === courseId
  ).sort((a, b) => a.stage_order - b.stage_order);
};

export const calculateCourseProgress = (courseId: string): number => {
  const courseStages = getStagesByCourseId(courseId);
  if (courseStages.length === 0) return 0;
  
  const totalProgress = courseStages.reduce(
    (sum, stage) => sum + stage.progress, 0
  );
  
  return Math.round(totalProgress / courseStages.length);
};
