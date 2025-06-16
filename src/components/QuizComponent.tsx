
import { useState, useEffect } from 'react';
import { Check, X, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { getExercisesByStage } from '@/mockData/content/exercises/content';
import type { Exercise } from '@/components/types';

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'type-answer' | 'der-die-das';
  question: string;
  correctAnswer: string;
  options?: string[];
  audio?: string;
  word?: string; // For der-die-das exercises
}

interface QuizComponentProps {
  stageId: string;
  exercises?: Exercise[] | QuizQuestion[];
  onComplete?: (score: number) => void;
}

const QuizComponent = ({ stageId, exercises, onComplete }: QuizComponentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Map exercise types to quiz question types
  const mapExerciseToQuestion = (exercise: Exercise | QuizQuestion): QuizQuestion | null => {
    try {
      console.log('Mapping exercise:', exercise);
      
      // If it's already a QuizQuestion, ensure it has the correct type and return it
      if ('type' in exercise && ['multiple-choice', 'type-answer', 'der-die-das'].includes(exercise.type)) {
        console.log('Already a QuizQuestion, returning as is');
        const quizQuestion = exercise as QuizQuestion;
        return {
          ...quizQuestion,
          question: quizQuestion.question || 'Answer the question:',
          type: quizQuestion.type as 'multiple-choice' | 'type-answer' | 'der-die-das',
        };
      }

      // Map Exercise type to QuizQuestion type - handle both snake_case and kebab-case
      const typeMap: Record<string, 'multiple-choice' | 'type-answer' | 'der-die-das'> = {
        // Handle snake_case
        'multiple_choice': 'multiple-choice',
        'type_answer': 'type-answer',
        'der_die_das': 'der-die-das',
        'fill_blank': 'type-answer',
        'matching': 'multiple-choice',
        'true_false': 'multiple-choice',
        // Handle kebab-case for consistency
        'multiple-choice': 'multiple-choice',
        'type-answer': 'type-answer',
        'der-die-das': 'der-die-das',
        'fill-blank': 'type-answer',
        'true-false': 'multiple-choice'
      };

      // Get the mapped type or default to 'multiple-choice'
      const questionType = typeMap[exercise.type as keyof typeof typeMap] || 'multiple-choice';
      console.log(`Mapped exercise type ${exercise.type} to ${questionType}`);

      // Base question with common fields
      const baseQuestion = {
        id: exercise.id,
        type: questionType,
        question: 'question' in exercise ? String(exercise.question) : 'Answer the question:',
        correctAnswer: 'correctAnswer' in exercise 
          ? String(exercise.correctAnswer) 
          : '',
      };

      // Handle different exercise types
      const exerciseType = exercise.type.toLowerCase();
      
      // Handle multiple choice and similar types
      if (exerciseType === 'multiple_choice' || exerciseType === 'multiple-choice' || 
          exerciseType === 'matching' || exerciseType === 'true_false' || exerciseType === 'true-false') {
        const typedExercise = exercise as any;
        return {
          ...baseQuestion,
          type: 'multiple-choice' as const,
          options: [...(typedExercise.options || [])],
        };
      }
      
      // Handle der/die/das questions
      if (exerciseType === 'der_die_das' || exerciseType === 'der-die-das') {
        const typedExercise = exercise as any;
        const word = typedExercise.word || '';
        return {
          ...baseQuestion,
          type: 'der-die-das' as const,
          question: `Select the correct article for: ${word}`,
          correctAnswer: String(typedExercise.correctAnswer || '').toLowerCase(),
          word: word,
        };
      }
      
      // Handle type answer and fill in the blank
      if (exerciseType === 'type_answer' || exerciseType === 'type-answer' || 
          exerciseType === 'fill_blank' || exerciseType === 'fill-blank') {
        return {
          ...baseQuestion,
          type: 'type-answer',
        };
      }
      
      console.warn(`Unhandled exercise type: ${exercise.type}`);
      return null;
    } catch (error) {
      console.error('Error mapping exercise to question:', error, exercise);
      return null;
    }
  };

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setIsLoading(true);
        
        // If exercises are provided via props, use them
        if (exercises && exercises.length > 0) {
          const mappedQuestions = exercises
            .map(mapExerciseToQuestion)
            .filter((q): q is QuizQuestion => q !== null);
          setQuestions(mappedQuestions);
        } else {
          // Fallback to fetching by stageId
          const exercisesByStage = getExercisesByStage(stageId);
          const mappedQuestions = exercisesByStage
            .map(mapExerciseToQuestion)
            .filter((q): q is QuizQuestion => q !== null);
          setQuestions(mappedQuestions);
        }
      } catch (error) {
        console.error('Error loading questions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, [stageId, exercises]);

  if (isLoading) {
    return <div className="text-center p-8">Loading questions...</div>;
  }

  if (questions.length === 0) {
    return <div className="text-center p-8">No questions available for this stage.</div>;
  }

  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) {
    return <div className="text-center p-8">Error: Question not found</div>;
  }

  const checkAnswer = () => {
    const userAnswer = currentQuestion.type === 'type-answer' 
      ? typedAnswer.trim().toLowerCase() 
      : selectedAnswer.toLowerCase();
      
    const correct = userAnswer === currentQuestion.correctAnswer.toLowerCase();
    
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer('');
      setTypedAnswer('');
      setShowResult(false);
    } else if (onComplete) {
      onComplete(score / questions.length * 100);
    }
  };

  const renderQuestion = () => {
    // Render the question text if it exists
    const questionText = currentQuestion.question && (
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {currentQuestion.question}
        </h3>
      </div>
    );

    switch (currentQuestion.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-4">
            {questionText}
            <div className="space-y-3">
              {currentQuestion.options?.map((option, index) => (
              <Button
                key={index}
                variant={showResult 
                  ? option === currentQuestion.correctAnswer
                    ? 'default'
                    : selectedAnswer === option
                      ? 'destructive'
                      : 'outline'
                  : selectedAnswer === option
                    ? 'secondary'
                    : 'outline'
                }
                className="w-full justify-start text-left"
                onClick={() => !showResult && setSelectedAnswer(option)}
                disabled={showResult}
              >
                {option}
              </Button>
            ))}
            </div>
          </div>
        );
        
      case 'type-answer':
        return (
          <div className="space-y-4">
            {questionText}
            <Input
              type="text"
              value={typedAnswer}
              onChange={(e) => setTypedAnswer(e.target.value)}
              placeholder="Type your answer..."
              disabled={showResult}
              className="text-lg py-6 px-4"
            />
            {showResult && (
              <div className={`p-4 rounded-lg ${
                isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {isCorrect ? 'Correct!' : `Incorrect. The answer is: ${currentQuestion.correctAnswer}`}
              </div>
            )}
          </div>
        );
        
      case 'der-die-das':
        return (
          <div className="space-y-6">
            {questionText}
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-2xl font-bold mb-4">{currentQuestion.word}</p>
              <p className="text-gray-600 dark:text-gray-300">
                Select the correct article:
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {['der', 'die', 'das'].map((article) => (
                <Button
                  key={article}
                  variant={
                    showResult
                      ? article === currentQuestion.correctAnswer
                        ? 'default'
                        : selectedAnswer === article
                          ? 'destructive'
                          : 'outline'
                      : selectedAnswer === article
                        ? 'secondary'
                        : 'outline'
                  }
                  className="py-6 text-lg"
                  onClick={() => !showResult && setSelectedAnswer(article)}
                  disabled={showResult}
                >
                  {article}
                </Button>
              ))}
            </div>
            {showResult && !isCorrect && (
              <div className="text-red-600 text-center">
                Correct answer: {currentQuestion.correctAnswer}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Question {currentIndex + 1} of {questions.length}
        </h2>
        <div className="text-lg font-medium">
          Score: {score}/{questions.length}
        </div>
      </div>
      
      <Card className="mb-6">
        <CardContent className="p-6">
          {renderQuestion()}
        </CardContent>
      </Card>

      {/* Result Feedback */}
      {showResult && (
        <div className={`text-center p-6 rounded-lg mb-6 ${
          isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          <div className="text-2xl mb-2">
            {isCorrect ? ' Correct!' : ' Incorrect'}
          </div>
          <p className="text-sm">
            {isCorrect 
              ? 'Great job! Keep up the excellent work!'
              : 'Keep trying! You can do it!'}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        {!showResult ? (
          <Button
            onClick={checkAnswer}
            disabled={
              (currentQuestion.type === 'type-answer' && !typedAnswer.trim()) ||
              (['multiple-choice', 'der-die-das'].includes(currentQuestion.type) && !selectedAnswer)
            }
            size="lg"
            className="px-8"
          >
            Check Answer
          </Button>
        ) : (
          <Button onClick={nextQuestion} className="ml-auto">
            {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
