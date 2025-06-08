import { QuizQuestion } from '@/components/QuizComponent';

export const quizzes: Record<string, QuizQuestion[]> = {
  // Quiz for stage_001 (Sich begrüßen)
  stage_001: [
    {
      id: '1',
      type: 'der-die-das',
      question: 'Haus',
      correctAnswer: 'das'
    },
    {
      id: '2',
      type: 'multiple-choice',
      question: 'What does "Guten Tag" mean?',
      correctAnswer: 'good afternoon',
      options: ['good morning', 'good afternoon', 'good night', 'goodbye']
    },
    {
      id: '3',
      type: 'type-answer',
      question: 'How do you say "water" in German?',
      correctAnswer: 'wasser'
    }
  ],
  
  // Add more quizzes for other stages as needed
  // stage_002: [...],
  // stage_003: [...],
};

export const getQuizForStage = (stageId: string): QuizQuestion[] => {
  return quizzes[stageId] || [];
};
