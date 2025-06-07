
export interface CourseLesson {
  id: string;
  title: string;
  type: 'video' | 'vocab' | 'flashcards' | 'exercises';
  duration: string;
  completed: boolean;
  locked: boolean;
  xp: number;
  exerciseLevels?: {
    level: number;
    title: string;
    completed: boolean;
    locked: boolean;
  }[];
}

export interface CourseStage {
  id: string;
  title: string;
  description: string;
  stageNumber: number;
  progress: number;
  lessons: CourseLesson[];
  locked: boolean;
  completed: boolean;
}

export interface CourseStructure {
  id: string;
  title: string;
  description: string;
  progress: number;
  totalStages: number;
  completedStages: number;
  stages: CourseStage[];
}

export const courseData: CourseStructure = {
  id: "course_001",
  title: "Deutsch A1.1",
  description: "Master the fundamentals of German language",
  progress: 35,
  totalStages: 5,
  completedStages: 1,
  stages: [
    {
      id: "stage_001",
      title: "Greetings and Basic Phrases",
      description: "Learn basic German greetings and common phrases",
      stageNumber: 1,
      progress: 100,
      locked: false,
      completed: true,
      lessons: [
        {
          id: "lesson_001_01",
          title: "Video Lecture: Hello & Greetings",
          type: "video",
          duration: "10 min",
          completed: true,
          locked: false,
          xp: 15
        },
        {
          id: "lesson_001_02",
          title: "Vocab List: Basic Greetings",
          type: "vocab",
          duration: "5 min",
          completed: true,
          locked: false,
          xp: 10
        },
        {
          id: "lesson_001_03",
          title: "Flash Cards: Practice Greetings",
          type: "flashcards",
          duration: "15 min",
          completed: true,
          locked: false,
          xp: 20
        },
        {
          id: "lesson_001_04",
          title: "Exercises: Greeting Scenarios",
          type: "exercises",
          duration: "20 min",
          completed: true,
          locked: false,
          xp: 25,
          exerciseLevels: [
            { level: 1, title: "Basic Recognition", completed: true, locked: false },
            { level: 2, title: "Fill in the Blanks", completed: true, locked: false },
            { level: 3, title: "Multiple Choice", completed: true, locked: false },
            { level: 4, title: "Free Response", completed: true, locked: false }
          ]
        }
      ]
    },
    {
      id: "stage_002",
      title: "Numbers and Time",
      description: "Learn to count and tell time in German",
      stageNumber: 2,
      progress: 75,
      locked: false,
      completed: false,
      lessons: [
        {
          id: "lesson_002_01",
          title: "Video Lecture: Numbers 1-100",
          type: "video",
          duration: "12 min",
          completed: true,
          locked: false,
          xp: 15
        },
        {
          id: "lesson_002_02",
          title: "Vocab List: Numbers & Time",
          type: "vocab",
          duration: "8 min",
          completed: true,
          locked: false,
          xp: 10
        },
        {
          id: "lesson_002_03",
          title: "Flash Cards: Number Practice",
          type: "flashcards",
          duration: "12 min",
          completed: true,
          locked: false,
          xp: 20
        },
        {
          id: "lesson_002_04",
          title: "Exercises: Time & Numbers",
          type: "exercises",
          duration: "18 min",
          completed: false,
          locked: false,
          xp: 30,
          exerciseLevels: [
            { level: 1, title: "Number Recognition", completed: true, locked: false },
            { level: 2, title: "Time Telling", completed: true, locked: false },
            { level: 3, title: "Math Problems", completed: true, locked: false },
            { level: 4, title: "Real Scenarios", completed: false, locked: false }
          ]
        }
      ]
    },
    {
      id: "stage_003",
      title: "Everyday Objects",
      description: "Common objects and articles",
      stageNumber: 3,
      progress: 0,
      locked: false,
      completed: false,
      lessons: [
        {
          id: "lesson_003_01",
          title: "Video Lecture: Articles & Objects",
          type: "video",
          duration: "14 min",
          completed: false,
          locked: false,
          xp: 15
        },
        {
          id: "lesson_003_02",
          title: "Vocab List: Household Items",
          type: "vocab",
          duration: "6 min",
          completed: false,
          locked: true,
          xp: 10
        },
        {
          id: "lesson_003_03",
          title: "Flash Cards: Object Practice",
          type: "flashcards",
          duration: "15 min",
          completed: false,
          locked: true,
          xp: 20
        },
        {
          id: "lesson_003_04",
          title: "Exercises: Articles Quiz",
          type: "exercises",
          duration: "25 min",
          completed: false,
          locked: true,
          xp: 35,
          exerciseLevels: [
            { level: 1, title: "Object Recognition", completed: false, locked: true },
            { level: 2, title: "Article Practice", completed: false, locked: true },
            { level: 3, title: "Sentence Building", completed: false, locked: true },
            { level: 4, title: "Description Tasks", completed: false, locked: true }
          ]
        }
      ]
    },
    {
      id: "stage_004",
      title: "Food and Drinks",
      description: "Food items and ordering at restaurants",
      stageNumber: 4,
      progress: 0,
      locked: true,
      completed: false,
      lessons: [
        {
          id: "lesson_004_01",
          title: "Video Lecture: Food Vocabulary",
          type: "video",
          duration: "16 min",
          completed: false,
          locked: true,
          xp: 20
        },
        {
          id: "lesson_004_02",
          title: "Vocab List: Meals & Drinks",
          type: "vocab",
          duration: "8 min",
          completed: false,
          locked: true,
          xp: 12
        },
        {
          id: "lesson_004_03",
          title: "Flash Cards: Food Practice",
          type: "flashcards",
          duration: "18 min",
          completed: false,
          locked: true,
          xp: 25
        },
        {
          id: "lesson_004_04",
          title: "Exercises: Restaurant Scenarios",
          type: "exercises",
          duration: "30 min",
          completed: false,
          locked: true,
          xp: 40,
          exerciseLevels: [
            { level: 1, title: "Menu Reading", completed: false, locked: true },
            { level: 2, title: "Ordering Practice", completed: false, locked: true },
            { level: 3, title: "Conversation Drills", completed: false, locked: true },
            { level: 4, title: "Role Play", completed: false, locked: true }
          ]
        }
      ]
    },
    {
      id: "stage_005",
      title: "Colors and Descriptions",
      description: "Colors and basic adjectives",
      stageNumber: 5,
      progress: 0,
      locked: true,
      completed: false,
      lessons: [
        {
          id: "lesson_005_01",
          title: "Video Lecture: Colors & Adjectives",
          type: "video",
          duration: "11 min",
          completed: false,
          locked: true,
          xp: 15
        },
        {
          id: "lesson_005_02",
          title: "Vocab List: Descriptive Words",
          type: "vocab",
          duration: "7 min",
          completed: false,
          locked: true,
          xp: 10
        },
        {
          id: "lesson_005_03",
          title: "Flash Cards: Color & Description Practice",
          type: "flashcards",
          duration: "16 min",
          completed: false,
          locked: true,
          xp: 22
        },
        {
          id: "lesson_005_04",
          title: "Exercises: Description Challenges",
          type: "exercises",
          duration: "22 min",
          completed: false,
          locked: true,
          xp: 35,
          exerciseLevels: [
            { level: 1, title: "Color Matching", completed: false, locked: true },
            { level: 2, title: "Adjective Agreement", completed: false, locked: true },
            { level: 3, title: "Description Writing", completed: false, locked: true },
            { level: 4, title: "Creative Descriptions", completed: false, locked: true }
          ]
        }
      ]
    }
  ]
};
