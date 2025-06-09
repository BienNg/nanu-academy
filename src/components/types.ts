export type ExerciseType = 'multiple_choice' | 'fill_blank' | 'matching' | 'true_false' | 'der_die_das' | 'type_answer';

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  question: string;
  explanation?: string;
  points: number;
  stage_id: string;
  difficulty: number;
  level: number;
}

export interface MultipleChoiceExercise extends Omit<BaseExercise, 'type'> {
  type: 'multiple_choice';
  options: readonly string[];
  correctAnswer: string;
}

export interface FillBlankExercise extends Omit<BaseExercise, 'type'> {
  type: 'fill_blank';
  correctAnswer: string;
  hint?: string;
}

export interface MatchingExercise extends Omit<BaseExercise, 'type'> {
  type: 'matching';
  pairs: { left: string; right: string }[];
}

export interface TrueFalseExercise extends Omit<BaseExercise, 'type'> {
  type: 'true_false';
  correctAnswer: boolean;
}

export interface DerDieDasExercise extends Omit<BaseExercise, 'type'> {
  type: 'der_die_das';
  correctAnswer: 'der' | 'die' | 'das';
  word: string;
}

export interface TypeAnswerExercise extends Omit<BaseExercise, 'type'> {
  type: 'type_answer';
  correctAnswer: string;
  hint?: string;
}

export type Exercise = 
  | MultipleChoiceExercise 
  | FillBlankExercise 
  | MatchingExercise 
  | TrueFalseExercise 
  | DerDieDasExercise
  | TypeAnswerExercise;
