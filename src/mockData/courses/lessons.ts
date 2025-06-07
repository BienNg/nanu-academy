export const lessons = {
  // Course 001 - German Basics
  'course_001': [
    {
      id: 'lesson-1',
      title: 'Hello & Greetings',
      type: 'video',
      duration: '10 min',
      completed: true,
      locked: false,
      xp: 15,
      position: 'left'
    },
    {
      id: 'lesson-2',
      title: 'Basic Words',
      type: 'flashcards',
      duration: '15 min',
      completed: true,
      locked: false,
      xp: 20,
      position: 'right'
    },
    {
      id: 'lesson-3',
      title: 'Articles Quiz',
      type: 'quiz',
      duration: '5 min',
      completed: true,
      locked: false,
      xp: 25,
      position: 'left'
    },
    {
      id: 'lesson-4',
      title: 'Common Phrases',
      type: 'video',
      duration: '12 min',
      completed: false,
      locked: false,
      xp: 30,
      position: 'center'
    },
    {
      id: 'lesson-5',
      title: 'Numbers & Colors',
      type: 'flashcards',
      duration: '10 min',
      completed: false,
      locked: true,
      xp: 25,
      position: 'right'
    },
    {
      id: 'lesson-6',
      title: 'Grammar Basics',
      type: 'quiz',
      duration: '8 min',
      completed: false,
      locked: true,
      xp: 35,
      position: 'left'
    },
    {
      id: 'lesson-7',
      title: 'Checkpoint',
      type: 'quiz',
      duration: '15 min',
      completed: false,
      locked: true,
      xp: 50,
      position: 'center',
      isCheckpoint: true
    }
  ],
  
  // Course 002 - German A1.2
  'course_002': [
    {
      id: 'a2-lesson-1',
      title: 'Past Tense',
      type: 'video',
      duration: '12 min',
      completed: true,
      locked: false,
      xp: 20,
      position: 'left'
    },
    {
      id: 'a2-lesson-2',
      title: 'Modal Verbs',
      type: 'flashcards',
      duration: '10 min',
      completed: true,
      locked: false,
      xp: 25,
      position: 'right'
    },
    {
      id: 'a2-lesson-3',
      title: 'Question Forms',
      type: 'quiz',
      duration: '8 min',
      completed: false,
      locked: false,
      xp: 30,
      position: 'left'
    }
  ]
} as const;

export type Lesson = typeof lessons[keyof typeof lessons][number];
