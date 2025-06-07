import { ExerciseTypeName } from './types';

interface BaseExercise {
  id: string;
  type: ExerciseTypeName;
  question: string;
  explanation?: string;
  points: number;
  stage_id: string;
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
  // Multiple Choice
  'ex_001': {
    id: 'ex_001',
    type: 'multiple_choice',
    question: 'What does "Guten Tag" mean?',
    options: ['Good morning', 'Good afternoon', 'Good night', 'Goodbye'] as const,
    correctAnswer: 'Good afternoon',
    points: 10,
    stage_id: 'stage_001'
  },
  'ex_002': {
    id: 'ex_002',
    type: 'multiple_choice',
    question: 'Which is the correct translation of "My name is..."?',
    options: ['Ich bin...', 'Ich heiße...', 'Mein Name...', 'Wie heißt du?'] as const,
    correctAnswer: 'Ich heiße...',
    points: 10,
    stage_id: 'stage_001'
  },
  
  // Der/Die/Das
  'ex_003': {
    id: 'ex_003',
    type: 'der_die_das',
    question: 'Haus',
    word: 'Haus',
    correctAnswer: 'das',
    points: 15,
    stage_id: 'stage_001'
  },
  'ex_004': {
    id: 'ex_004',
    type: 'der_die_das',
    question: 'Mann',
    word: 'Mann',
    correctAnswer: 'der',
    points: 15,
    stage_id: 'stage_001'
  },
  'ex_005': {
    id: 'ex_005',
    type: 'der_die_das',
    question: 'Frau',
    word: 'Frau',
    correctAnswer: 'die',
    points: 15,
    stage_id: 'stage_001'
  },
  
  // Type Answer
  'ex_006': {
    id: 'ex_006',
    type: 'type_answer',
    question: 'How do you say "water" in German?',
    correctAnswer: 'Wasser',
    points: 20,
    stage_id: 'stage_001'
  },
  
  // Stage 2 Exercises - Numbers and Time
  'ex_007': {
    id: 'ex_007',
    type: 'multiple_choice',
    question: 'What is the German word for "five"?',
    options: ['Fünf', 'Vier', 'Sechs', 'Sieben'] as const,
    correctAnswer: 'Fünf',
    points: 10,
    stage_id: 'stage_002'
  },
  
  // Add more exercises for other stages as needed
};

// Export the typed exercises
export const exercises = _exercises;

export const getExercisesByStage = (stageId: string): Exercise[] => {
  return Object.values(exercises).filter(ex => ex.stage_id === stageId);
};

export const getExerciseById = (id: string): Exercise | undefined => {
  return exercises[id];
};
