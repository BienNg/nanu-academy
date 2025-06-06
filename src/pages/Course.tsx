
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, BookOpen, Brain, Lock, CheckCircle, Star, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import VideoPlayer from '@/components/VideoPlayer';
import FlashCard from '@/components/FlashCard';
import QuizComponent from '@/components/QuizComponent';

const Course = () => {
  const { courseId } = useParams();
  const [currentSection, setCurrentSection] = useState<'overview' | 'video' | 'flashcards' | 'quiz'>('overview');
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set(['lesson-1']));

  // Sample course data
  const course = {
    id: courseId,
    title: "German Basics",
    description: "Master the fundamentals of German language",
    progress: 35,
    totalLessons: 12,
    completedCount: 4
  };

  const lessons = [
    {
      id: 'lesson-1',
      title: 'Introduction to German',
      type: 'video' as const,
      duration: '10 min',
      completed: true,
      locked: false,
      description: 'Basic greetings and pronunciation'
    },
    {
      id: 'lesson-2',
      title: 'Basic Vocabulary',
      type: 'flashcards' as const,
      duration: '15 min',
      completed: true,
      locked: false,
      description: 'Essential words for daily conversation'
    },
    {
      id: 'lesson-3',
      title: 'Articles Quiz',
      type: 'quiz' as const,
      duration: '5 min',
      completed: true,
      locked: false,
      description: 'Practice der, die, das'
    },
    {
      id: 'lesson-4',
      title: 'Common Phrases',
      type: 'video' as const,
      duration: '12 min',
      completed: true,
      locked: false,
      description: 'Useful expressions for beginners'
    },
    {
      id: 'lesson-5',
      title: 'Numbers & Colors',
      type: 'flashcards' as const,
      duration: '10 min',
      completed: false,
      locked: false,
      description: 'Learn numbers 1-100 and color vocabulary'
    },
    {
      id: 'lesson-6',
      title: 'Grammar Basics',
      type: 'quiz' as const,
      duration: '8 min',
      completed: false,
      locked: true,
      description: 'Present tense verb conjugation'
    }
  ];

  const flashcardsData = [
    { id: '1', german: 'Hallo', english: 'Hello', example: 'Hallo, wie geht es dir?' },
    { id: '2', german: 'Danke', english: 'Thank you', example: 'Danke für deine Hilfe!' },
    { id: '3', german: 'Bitte', english: 'Please/You\'re welcome', example: 'Bitte schön!' },
    { id: '4', german: 'Entschuldigung', english: 'Excuse me', example: 'Entschuldigung, wo ist der Bahnhof?' }
  ];

  const quizData = [
    {
      id: '1',
      type: 'der-die-das' as const,
      question: 'Haus',
      correctAnswer: 'das'
    },
    {
      id: '2',
      type: 'multiple-choice' as const,
      question: 'What does "Guten Tag" mean?',
      correctAnswer: 'good afternoon',
      options: ['good morning', 'good afternoon', 'good night', 'goodbye']
    },
    {
      id: '3',
      type: 'type-answer' as const,
      question: 'How do you say "water" in German?',
      correctAnswer: 'wasser'
    }
  ];

  const startLesson = (lesson: typeof lessons[0]) => {
    if (lesson.locked) return;
    
    switch (lesson.type) {
      case 'video':
        setCurrentSection('video');
        break;
      case 'flashcards':
        setCurrentSection('flashcards');
        break;
      case 'quiz':
        setCurrentSection('quiz');
        break;
    }
  };

  const completeLesson = (lessonId: string) => {
    setCompletedLessons(prev => new Set(prev).add(lessonId));
    setCurrentSection('overview');
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'flashcards': return BookOpen;
      case 'quiz': return Brain;
      default: return Play;
    }
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'video':
        return (
          <VideoPlayer
            title="Introduction to German"
            description="Learn basic greetings and pronunciation fundamentals"
            onComplete={() => completeLesson('lesson-1')}
          />
        );
      case 'flashcards':
        return (
          <FlashCard
            cards={flashcardsData}
            onComplete={() => completeLesson('lesson-2')}
          />
        );
      case 'quiz':
        return (
          <QuizComponent
            questions={quizData}
            onComplete={(score) => {
              console.log('Quiz completed with score:', score);
              completeLesson('lesson-3');
            }}
          />
        );
      default:
        return null;
    }
  };

  if (currentSection !== 'overview') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <Button
                variant="ghost"
                onClick={() => setCurrentSection('overview')}
                className="mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Course
              </Button>
              <h1 className="text-xl font-semibold">{course.title}</h1>
            </div>
          </div>
        </div>
        <div className="py-8">
          {renderContent()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Courses
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                {course.completedCount}/{course.totalLessons} lessons completed
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Info */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Lessons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Lessons</h3>
              {lessons.map((lesson, index) => {
                const Icon = getIcon(lesson.type);
                const isCompleted = completedLessons.has(lesson.id);
                
                return (
                  <Card 
                    key={lesson.id}
                    className={`transition-all duration-200 ${
                      lesson.locked 
                        ? 'opacity-60 cursor-not-allowed' 
                        : 'hover:shadow-md cursor-pointer'
                    } ${isCompleted ? 'bg-green-50 border-green-200' : ''}`}
                    onClick={() => startLesson(lesson)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-full ${
                            lesson.locked 
                              ? 'bg-gray-200' 
                              : lesson.type === 'video' 
                                ? 'bg-blue-100' 
                                : lesson.type === 'flashcards'
                                  ? 'bg-purple-100'
                                  : 'bg-orange-100'
                          }`}>
                            {lesson.locked ? (
                              <Lock className="h-5 w-5 text-gray-500" />
                            ) : (
                              <Icon className={`h-5 w-5 ${
                                lesson.type === 'video' 
                                  ? 'text-blue-600' 
                                  : lesson.type === 'flashcards'
                                    ? 'text-purple-600'
                                    : 'text-orange-600'
                              }`} />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold">{lesson.title}</h4>
                              {isCompleted && (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{lesson.description}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-xs text-gray-500">{lesson.duration}</span>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                lesson.type === 'video' 
                                  ? 'bg-blue-100 text-blue-700' 
                                  : lesson.type === 'flashcards'
                                    ? 'bg-purple-100 text-purple-700'
                                    : 'bg-orange-100 text-orange-700'
                              }`}>
                                {lesson.type === 'flashcards' ? 'Flash Cards' : 
                                 lesson.type === 'video' ? 'Video' : 'Quiz'}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl">
                          {index + 1}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {course.completedCount}
                    </div>
                    <p className="text-sm text-gray-600">lessons completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {course.progress}%
                    </div>
                    <p className="text-sm text-gray-600">course progress</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Lesson */}
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Continue Learning</h3>
                <p className="text-sm mb-4 text-blue-100">
                  Keep up the momentum with your next lesson
                </p>
                <Button 
                  className="w-full bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => startLesson(lessons[4])}
                >
                  Start Next Lesson
                </Button>
              </CardContent>
            </Card>

            {/* Course Tools */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setCurrentSection('flashcards')}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Practice Flashcards
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setCurrentSection('quiz')}
                >
                  <Brain className="h-4 w-4 mr-2" />
                  Take Practice Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
