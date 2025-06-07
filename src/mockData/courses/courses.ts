export const courses = {
  "course_001": {
    course_id: "course_001",
    course_name: "A1.1",
    course_title: "German Basics",
    course_description: "Master the fundamentals of German language",
    description: "Basic German - Beginners Level 1",
    course_order: 1,
    language_from: "Vietnamese",
    language_to: "German",
    published: true,
    progress: 35,
    total_lessons: 12,
    completed_count: 4,
    created_at: "2024-01-15T00:00:00Z",
    updated_at: "2024-01-15T00:00:00Z"
  },
  "course_002": {
    course_id: "course_002",
    course_name: "A1.2",
    course_title: "German A1.2",
    course_description: "Continue your German journey with intermediate concepts",
    description: "Elementary German - Level 2",
    course_order: 2,
    language_from: "Vietnamese",
    language_to: "German",
    published: true,
    progress: 15,
    total_lessons: 10,
    completed_count: 2,
    created_at: "2024-02-01T00:00:00Z",
    updated_at: "2024-02-01T00:00:00Z"
  }
} as const;

export type Course = typeof courses[keyof typeof courses];
