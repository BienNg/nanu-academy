import { Course } from './courses';

export const stages = {
  "stage_001": {
    stage_id: "stage_001",
    course_id: "course_001",
    stage_number: 1,
    stage_name: "Greetings and Basic Phrases",
    stage_order: 1,
    description: "Learn basic German greetings and common phrases"
  },
  "stage_002": {
    stage_id: "stage_002",
    course_id: "course_001",
    stage_number: 2,
    stage_name: "Numbers and Time",
    stage_order: 2,
    description: "Learn to count and tell time in German"
  },
  "stage_003": {
    stage_id: "stage_003",
    course_id: "course_001",
    stage_number: 3,
    stage_name: "Everyday Objects",
    stage_order: 3,
    description: "Common objects and articles"
  },
  "stage_004": {
    stage_id: "stage_004",
    course_id: "course_001",
    stage_number: 4,
    stage_name: "Food and Drinks",
    stage_order: 4,
    description: "Food items and ordering at restaurants"
  },
  "stage_005": {
    stage_id: "stage_005",
    course_id: "course_001",
    stage_number: 5,
    stage_name: "Colors and Descriptions",
    stage_order: 5,
    description: "Colors and basic adjectives"
  }
} as const;

export type Stage = typeof stages[keyof typeof stages];
