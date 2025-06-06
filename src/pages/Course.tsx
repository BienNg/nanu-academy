
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, BookOpen, Brain, Lock, CheckCircle, Star, ArrowLeft, Home, Award, Flame, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import VideoPlayer from '@/components/VideoPlayer';
import FlashCard from '@/components/FlashCard';
import QuizComponent from '@/components/QuizComponent';

const Course = () => {
  const { courseId } = useParams();
  const [currentSection, setCurrentSection] = useState<'overview' | 'video' | 'flashcards' | 'quiz'>('overview');
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set(['lesson-1', 'lesson-2', 'lesson-3']));

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
      title: 'Hello & Greetings',
      type: 'video' as const,
      duration: '10 min',
      completed: true,
      locked: false,
      xp: 15,
      position: 'left'
    },
    {
      id: 'lesson-2',
      title: 'Basic Words',
      type: 'flashcards' as const,
      duration: '15 min',
      completed: true,
      locked: false,
      xp: 20,
      position: 'right'
    },
    {
      id: 'lesson-3',
      title: 'Articles Quiz',
      type: 'quiz' as const,
      duration: '5 min',
      completed: true,
      locked: false,
      xp: 25,
      position: 'left'
    },
    {
      id: 'lesson-4',
      title: 'Common Phrases',
      type: 'video' as const,
      duration: '12 min',
      completed: false,
      locked: false,
      xp: 30,
      position: 'center'
    },
    {
      id: 'lesson-5',
      title: 'Numbers & Colors',
      type: 'flashcards' as const,
      duration: '10 min',
      completed: false,
      locked: true,
      xp: 25,
      position: 'right'
    },
    {
      id: 'lesson-6',
      title: 'Grammar Basics',
      type: 'quiz' as const,
      duration: '8 min',
      completed: false,
      locked: true,
      xp: 35,
      position: 'left'
    },
    {
      id: 'lesson-7',
      title: 'Checkpoint',
      type: 'quiz' as const,
      duration: '15 min',
      completed: false,
      locked: true,
      xp: 50,
      position: 'center',
      isCheckpoint: true
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

  const getNodeColor = (lesson: any) => {
    if (lesson.locked) return 'bg-gray-300 border-gray-400';
    if (completedLessons.has(lesson.id)) return 'bg-green-500 border-green-600 shadow-green-200';
    return 'bg-blue-500 border-blue-600 shadow-blue-200';
  };

  const getNodePosition = (position: string) => {
    switch (position) {
      case 'left': return 'ml-8';
      case 'right': return 'ml-auto mr-8';
      case 'center': return 'mx-auto';
      default: return 'mx-auto';
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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-green-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Courses
              </Button>
              <h1 className="text-xl font-bold text-gray-900">{course.title}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-orange-100 px-3 py-1 rounded-full">
                <Flame className="h-4 w-4 text-orange-600" />
                <span className="text-orange-600 font-semibold">7</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full">
                <Award className="h-4 w-4 text-blue-600" />
                <span className="text-blue-600 font-semibold">500</span>
              </div>
              <div className="flex items-center space-x-2 bg-red-100 px-3 py-1 rounded-full">
                <span className="text-red-600 font-semibold">❤️ 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Header Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">SECTION 2, UNIT 1</span>
            <span className="ml-2">▼</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Check and Mate</h2>
          <div className="w-full max-w-md mx-auto bg-white/20 rounded-full h-3">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-300"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Learning Map */}
      <div className="max-w-md mx-auto px-4 py-8 relative">
        {/* Path Line */}
        <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gray-300 h-full"></div>
        
        <div className="space-y-16 relative z-10">
          {lessons.map((lesson, index) => {
            const Icon = getIcon(lesson.type);
            const isCompleted = completedLessons.has(lesson.id);
            const nodeColor = getNodeColor(lesson);
            const positionClass = getNodePosition(lesson.position);
            
            return (
              <div key={lesson.id} className={`relative ${positionClass}`}>
                {/* Lesson Node */}
                <div 
                  className={`
                    w-20 h-20 rounded-full border-4 flex items-center justify-center
                    cursor-pointer transition-all duration-300 hover:scale-110
                    ${nodeColor} shadow-lg
                    ${lesson.locked ? 'cursor-not-allowed' : 'hover:shadow-xl'}
                    ${lesson.isCheckpoint ? 'w-24 h-24 border-8' : ''}
                  `}
                  onClick={() => startLesson(lesson)}
                >
                  {lesson.locked ? (
                    <Lock className="h-8 w-8 text-white" />
                  ) : lesson.isCheckpoint ? (
                    <Crown className="h-10 w-10 text-white" />
                  ) : isCompleted ? (
                    <Star className="h-8 w-8 text-white fill-current" />
                  ) : (
                    <Icon className="h-8 w-8 text-white" />
                  )}
                </div>

                {/* Lesson Info Card */}
                {lesson.position !== 'center' && (
                  <div className={`
                    absolute top-1/2 transform -translate-y-1/2
                    ${lesson.position === 'left' ? 'left-24' : 'right-24'}
                    w-48
                  `}>
                    <Card className={`
                      ${lesson.locked ? 'opacity-60' : 'hover:shadow-lg cursor-pointer'}
                      transition-all duration-200
                    `}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm">{lesson.title}</h4>
                          {isCompleted && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{lesson.duration}</span>
                          <span className="text-yellow-600 font-medium">+{lesson.xp} XP</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Center lesson title */}
                {lesson.position === 'center' && (
                  <div className="mt-4 text-center">
                    <h4 className="font-bold text-gray-800">{lesson.title}</h4>
                    <p className="text-sm text-gray-600">{lesson.duration} • +{lesson.xp} XP</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mascot Character */}
        <div className="absolute bottom-20 right-4">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">🦜</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex justify-around">
            <Button variant="ghost" size="sm" className="flex flex-col items-center">
              <Home className="h-5 w-5 text-blue-500" />
              <span className="text-xs mt-1 text-blue-500">Learn</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center">
              <BookOpen className="h-5 w-5 text-gray-400" />
              <span className="text-xs mt-1 text-gray-400">Practice</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center">
              <Award className="h-5 w-5 text-gray-400" />
              <span className="text-xs mt-1 text-gray-400">Leaderboard</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center">
              <span className="text-lg">📊</span>
              <span className="text-xs mt-1 text-gray-400">Profile</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center">
              <span className="text-lg">💬</span>
              <span className="text-xs mt-1 text-gray-400">More</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
