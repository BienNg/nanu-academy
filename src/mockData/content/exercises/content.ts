import { ExerciseTypeName } from './types';

import { DifficultyLevel } from './types';

interface BaseExercise {
  id: string;
  type: ExerciseTypeName;
  question: string;
  explanation?: string;
  points: number;
  stage_id: string;
  difficulty: DifficultyLevel;
  level: number; // 1-4, represents the exercise level within the difficulty
}

interface MultipleChoiceExercise extends Omit<BaseExercise, 'type'> {
  type: 'multiple_choice';
  options: readonly string[];
  correctAnswer: string;
}

interface FillBlankExercise extends Omit<BaseExercise, 'type'> {
  type: 'fill_blank';
  correctAnswer: string;
  hint?: string;
}

interface MatchingExercise extends Omit<BaseExercise, 'type'> {
  type: 'matching';
  pairs: { left: string; right: string }[];
}

interface TrueFalseExercise extends Omit<BaseExercise, 'type'> {
  type: 'true_false';
  correctAnswer: boolean;
}

interface DerDieDasExercise extends Omit<BaseExercise, 'type'> {
  type: 'der_die_das';
  correctAnswer: 'der' | 'die' | 'das';
  word: string;
}

interface TypeAnswerExercise extends Omit<BaseExercise, 'type'> {
  type: 'type_answer';
  correctAnswer: string;
  hint?: string;
}

type Exercise = 
  | MultipleChoiceExercise 
  | FillBlankExercise 
  | MatchingExercise 
  | TrueFalseExercise 
  | DerDieDasExercise
  | TypeAnswerExercise;

// Stage 1 Exercises - Greetings and Basic Phrases
// Type-safe exercises with proper typing
const _exercises: Record<string, Exercise> = {
  // ===== LEVEL 1 - BASIC GREETINGS =====
  // Multiple Choice - Basic Greetings
  'ex_101': {
    id: 'ex_101',
    type: 'multiple_choice',
    question: 'What does "Guten Tag" mean?',
    options: ['Good morning', 'Good afternoon', 'Good night', 'Goodbye'] as const,
    correctAnswer: 'Good afternoon',
    points: 10,
    stage_id: 'stage_001',
    difficulty: 1,
    level: 1
  },
  'ex_102': {
    id: 'ex_102',
    type: 'multiple_choice',
    question: 'Which is the correct response to "Wie geht\'s?"',
    options: ['Guten Tag!', 'Danke, gut!', 'Auf Wiedersehen!', 'Ja, bitte!'] as const,
    correctAnswer: 'Danke, gut!',
    points: 10,
    stage_id: 'stage_001',
    difficulty: 1,
    level: 1
  },
  'ex_103': {
    id: 'ex_103',
    type: 'multiple_choice',
    question: 'What does "Tschüss" mean?',
    options: ['Hello', 'Thank you', 'Goodbye', 'Please'] as const,
    correctAnswer: 'Goodbye',
    points: 10,
    stage_id: 'stage_001',
    difficulty: 1,
    level: 1
  },
  
  // ===== LEVEL 2 - FORMAL VS INFORMAL =====
  // Multiple Choice - Formal/Informal Contexts
  'ex_201': {
    id: 'ex_201',
    type: 'multiple_choice',
    question: 'Which greeting would you use with your professor?',
    options: ['Hallo!', 'Tschüss!', 'Guten Tag!', 'Tschau!'] as const,
    correctAnswer: 'Guten Tag!',
    points: 15,
    stage_id: 'stage_001',
    difficulty: 2,
    level: 1
  },
  'ex_202': {
    id: 'ex_202',
    type: 'multiple_choice',
    question: 'Which is the most formal way to say goodbye?',
    options: ['Tschüss!', 'Tschau!', 'Bis später!', 'Auf Wiedersehen!'] as const,
    correctAnswer: 'Auf Wiedersehen!',
    points: 15,
    stage_id: 'stage_001',
    difficulty: 2,
    level: 2
  },
  
  // ===== LEVEL 3 - DER/DIE/DAS =====
  // Der/Die/Das Exercises
  'ex_301': {
    id: 'ex_301',
    type: 'der_die_das',
    question: 'Haus',
    word: 'Haus',
    correctAnswer: 'das',
    points: 20,
    stage_id: 'stage_001',
    difficulty: 3,
    level: 1,
    explanation: 'The word "Haus" (house) is neuter in German, so it takes the article "das".'
  },
  'ex_302': {
    id: 'ex_302',
    type: 'der_die_das',
    question: 'Tür',
    word: 'Tür',
    correctAnswer: 'die',
    points: 20,
    stage_id: 'stage_001',
    difficulty: 3,
    level: 2,
    explanation: 'The word "Tür" (door) is feminine in German, so it takes the article "die".'
  },
  
  // ===== LEVEL 4 - TYPE ANSWER =====
  // Type Answer Exercises
  'ex_401': {
    id: 'ex_401',
    type: 'type_answer',
    question: 'How do you say "Good morning" in German?',
    correctAnswer: 'Guten Morgen',
    points: 25,
    stage_id: 'stage_001',
    difficulty: 4,
    level: 1,
    hint: 'Remember to capitalize nouns in German!'
  },
  'ex_402': {
    id: 'ex_402',
    type: 'type_answer',
    question: 'Write the German phrase for "Good night":',
    correctAnswer: 'Gute Nacht',
    points: 25,
    stage_id: 'stage_001',
    difficulty: 4,
    level: 2,
    hint: 'Think about how you say good night to someone.'
  },
  
  // ===== MIXED EXERCISES =====
  // Multiple Choice - Mixed Difficulty
  'ex_501': {
    id: 'ex_501',
    type: 'multiple_choice',
    question: 'Which phrase would you use to greet someone in the evening?',
    options: ['Guten Morgen', 'Guten Tag', 'Guten Abend', 'Gute Nacht'] as const,
    correctAnswer: 'Guten Abend',
    points: 15,
    stage_id: 'stage_001',
    difficulty: 2,
    level: 3
  },
  'ex_502': {
    id: 'ex_502',
    type: 'multiple_choice',
    question: 'What is the correct response to "Danke"?',
    options: ['Bitte', 'Tschüss', 'Hallo', 'Entschuldigung'] as const,
    correctAnswer: 'Bitte',
    points: 15,
    stage_id: 'stage_001',
    difficulty: 2,
    level: 4
  },
  
  // Der/Die/Das - Mixed Difficulty
  'ex_503': {
    id: 'ex_503',
    type: 'der_die_das',
    question: 'Freund',
    word: 'Freund',
    correctAnswer: 'der',
    points: 20,
    stage_id: 'stage_001',
    difficulty: 3,
    level: 3,
    explanation: 'The word "Freund" (friend, male) is masculine in German, so it takes the article "der".'
  },
  
  // Type Answer - Mixed Difficulty
  'ex_504': {
    id: 'ex_504',
    type: 'type_answer',
    question: 'How do you say "See you later" in German?',
    correctAnswer: 'Bis später',
    points: 25,
    stage_id: 'stage_001',
    difficulty: 4,
    level: 3,
    hint: 'This is a common informal way to say goodbye.'
  },
  'ex_001': {
    id: 'ex_001',
    type: 'multiple_choice',
    question: 'What does "Guten Tag" mean?',
    options: ['Good morning', 'Good afternoon', 'Good night', 'Goodbye'] as const,
    correctAnswer: 'Good afternoon',
    points: 10,
    stage_id: 'stage_001',
    difficulty: 1,
    level: 1
  },
  'ex_002': {
    id: 'ex_002',
    type: 'multiple_choice',
    question: 'Which is the correct translation of "My name is..."?',
    options: ['Ich bin...', 'Ich heiße...', 'Mein Name...', 'Wie heißt du?'] as const,
    correctAnswer: 'Ich heiße...',
    points: 10,
    stage_id: 'stage_001',
    difficulty: 1,
    level: 2
  },
  
  // Level 2 - Der/Die/Das Basics
  'ex_003': {
    id: 'ex_003',
    type: 'der_die_das',
    question: 'Haus',
    word: 'Haus',
    correctAnswer: 'das',
    points: 15,
    stage_id: 'stage_001',
    difficulty: 2,
    level: 1
  },
  'ex_004': {
    id: 'ex_004',
    type: 'der_die_das',
    question: 'Mann',
    word: 'Mann',
    correctAnswer: 'der',
    points: 15,
    stage_id: 'stage_001',
    difficulty: 2,
    level: 2
  },
  'ex_005': {
    id: 'ex_005',
    type: 'der_die_das',
    question: 'Frau',
    word: 'Frau',
    correctAnswer: 'die',
    points: 15,
    stage_id: 'stage_001',
    difficulty: 2,
    level: 3
  },
  
  // Level 3 - Type Answer
  'ex_006': {
    id: 'ex_006',
    type: 'type_answer',
    question: 'Translate "Hello" to German',
    correctAnswer: 'Hallo',
    points: 20,
    stage_id: 'stage_001',
    difficulty: 3,
    level: 1
  },
  
  // More exercises for stage 1
  'ex_007': {
    id: 'ex_007',
    type: 'multiple_choice',
    question: 'What is the German word for "five"?',
    options: ['Fünf', 'Vier', 'Sechs', 'Sieben'] as const,
    correctAnswer: 'Fünf',
    points: 10,
    stage_id: 'stage_001',
    difficulty: 1,
    level: 3
  },
  
  // Add more exercises for other stages as needed
};

// Export the typed exercises
export const exercises = _exercises;

export const getExercisesByStage = (stageId: string): Exercise[] => {
  return Object.values(_exercises).filter(ex => ex.stage_id === stageId);
};

export const getExercisesByLevel = (stageId: string, level: number): Exercise[] => {
  // Get all exercises for this stage with difficulty <= level
  // and level within the difficulty
  return Object.values(_exercises).filter(ex => 
    ex.stage_id === stageId && 
    ex.difficulty <= level &&
    (ex.difficulty === level || ex.level <= level)
  );
};

export const getExerciseById = (id: string): Exercise | undefined => {
  return exercises[id];
};
