
import { useState, useEffect } from 'react';
import { Check, X, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { getExercisesByStage } from '@/mockData/content/exercises/content';

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
  onComplete?: (score: number) => void;
}

const QuizComponent = ({ stageId, onComplete }: QuizComponentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadQuestions = () => {
      try {
        const exercises = getExercisesByStage(stageId);
        const mappedQuestions = exercises.map(exercise => {
          // Create base question with common properties
          const baseQuestion = {
            id: exercise.id,
            question: 'question' in exercise ? (exercise as any).question : '',
            correctAnswer: 'correctAnswer' in exercise 
              ? String((exercise as any).correctAnswer) 
              : '',
          };

          // Handle different exercise types
          if (exercise.type === 'multiple_choice' && 'options' in exercise) {
            return {
              ...baseQuestion,
              type: 'multiple-choice' as const,
              options: [...(exercise as any).options],
            } as QuizQuestion;
          } else if (exercise.type === 'der_die_das' && 'word' in exercise) {
            return {
              ...baseQuestion,
              type: 'der-die-das' as const,
              question: (exercise as any).word,
              correctAnswer: (exercise as any).correctAnswer,
              word: (exercise as any).word,
            } as QuizQuestion;
          } else if (exercise.type === 'type_answer') {
            return {
              ...baseQuestion,
              type: 'type-answer' as const,
            } as QuizQuestion;
          }
          return null;
        }).filter((q): q is QuizQuestion => q !== null);

        setQuestions(mappedQuestions);
      } catch (error) {
        console.error('Error loading questions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, [stageId]);

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
    const userAnswer = currentQuestion.type === 'type-answer' ? typedAnswer.trim().toLowerCase() : selectedAnswer;
    const correct = userAnswer === currentQuestion.correctAnswer.toLowerCase();
    
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer('');
      setTypedAnswer('');
      setShowResult(false);
    } else {
      if (onComplete) {
        onComplete((score / questions.length) * 100);
      }
    }
  };

  const playAudio = () => {
    console.log('Playing audio for question:', currentQuestion.question);
  };

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center mb-6">{currentQuestion.question}</h3>
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options?.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === option ? "default" : "outline"}
                  className={`p-4 h-auto text-left justify-start ${
                    showResult
                      ? option === currentQuestion.correctAnswer
                        ? 'bg-green-500 text-white border-green-500'
                        : selectedAnswer === option && !isCorrect
                        ? 'bg-red-500 text-white border-red-500'
                        : 'opacity-50'
                      : selectedAnswer === option
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => !showResult && setSelectedAnswer(option)}
                  disabled={showResult}
                >
                  {option}
                  {showResult && option === currentQuestion.correctAnswer && (
                    <Check className="h-5 w-5 ml-auto" />
                  )}
                  {showResult && selectedAnswer === option && !isCorrect && (
                    <X className="h-5 w-5 ml-auto" />
                  )}
                </Button>
              ))}
            </div>
          </div>
        );

      case 'type-answer':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center">{currentQuestion.question}</h3>
            <div className="max-w-md mx-auto">
              <Input
                value={typedAnswer}
                onChange={(e) => setTypedAnswer(e.target.value)}
                placeholder="Type your answer..."
                className={`text-center text-lg ${
                  showResult
                    ? isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : ''
                }`}
                disabled={showResult}
                onKeyPress={(e) => e.key === 'Enter' && !showResult && typedAnswer.trim() && checkAnswer()}
              />
              {showResult && !isCorrect && (
                <p className="text-center text-green-600 mt-2">
                  Correct answer: <strong>{currentQuestion.correctAnswer}</strong>
                </p>
              )}
            </div>
          </div>
        );

      case 'der-die-das':
        const articles = ['der', 'die', 'das'];
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center">
              Choose the correct article for: <span className="text-blue-600">{currentQuestion.question}</span>
            </h3>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {articles.map((article) => (
                <Button
                  key={article}
                  variant={selectedAnswer === article ? "default" : "outline"}
                  className={`p-6 text-lg font-bold ${
                    showResult
                      ? article === currentQuestion.correctAnswer
                        ? 'bg-green-500 text-white border-green-500'
                        : selectedAnswer === article && !isCorrect
                        ? 'bg-red-500 text-white border-red-500'
                        : 'opacity-50'
                      : selectedAnswer === article
                      ? 'bg-blue-500 text-white'
                      : ''
                  }`}
                  onClick={() => !showResult && setSelectedAnswer(article)}
                  disabled={showResult}
                >
                  {article}
                </Button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-600">
            Question {currentIndex + 1} of {questions.length}
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Score: {score}/{questions.length}
            </div>
            {streak > 0 && (
              <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                🔥 {streak} streak
              </div>
            )}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card className="mb-8">
        <CardContent className="p-8">
          {renderQuestion()}
          
          {currentQuestion.audio && (
            <div className="flex justify-center mt-6">
              <Button variant="outline" onClick={playAudio}>
                <Volume2 className="h-4 w-4 mr-2" />
                Play Audio
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Result Feedback */}
      {showResult && (
        <div className={`text-center p-6 rounded-lg mb-6 ${
          isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          <div className="text-2xl mb-2">
            {isCorrect ? '🎉 Correct!' : '❌ Incorrect'}
          </div>
          <p className="text-sm">
            {isCorrect 
              ? 'Great job! Keep up the excellent work!' 
              : 'Don\'t worry, you\'ll get it next time!'
            }
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
              (currentQuestion.type !== 'type-answer' && !selectedAnswer)
            }
            size="lg"
            className="px-8"
          >
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNext} size="lg" className="px-8">
            {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
