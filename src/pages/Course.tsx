import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Flame, Play, BookOpen, Brain, Lock, CheckCircle, Star, Clock, BarChart3, MessageCircle, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import VideoPlayer from '@/components/VideoPlayer';
import FlashCard from '@/components/FlashCard';
import QuizComponent from '@/components/QuizComponent';
import { courseData, CourseLesson } from '@/mockData/courses/courseStructure';

const Course = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState<'overview' | 'video' | 'flashcards' | 'quiz' | 'vocab'>('overview');
  const [currentLesson, setCurrentLesson] = useState<CourseLesson | null>(null);

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

  const startLesson = (lesson: CourseLesson) => {
    if (lesson.locked) return;
    
    setCurrentLesson(lesson);
    switch (lesson.type) {
      case 'video':
        setCurrentSection('video');
        break;
      case 'vocab':
        setCurrentSection('vocab');
        break;
      case 'flashcards':
        setCurrentSection('flashcards');
        break;
      case 'exercises':
        setCurrentSection('quiz');
        break;
    }
  };

  const completeLesson = () => {
    setCurrentSection('overview');
    setCurrentLesson(null);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'vocab': return BookOpen;
      case 'flashcards': return Star;
      case 'exercises': return Brain;
      default: return Play;
    }
  };

  const getLessonColor = (lesson: CourseLesson) => {
    if (lesson.locked) return 'bg-gray-300 border-gray-400';
    if (lesson.completed) return 'bg-green-500 border-green-600 shadow-lg shadow-green-200';
    return 'bg-blue-500 border-blue-600 shadow-lg shadow-blue-200';
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'video':
        return (
          <VideoPlayer
            title={currentLesson?.title || "Video Lesson"}
            description="Learn through interactive video content"
            onComplete={completeLesson}
          />
        );
      case 'vocab':
        return (
          <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentLesson?.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {flashcardsData.map((item) => (
                  <div key={item.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="text-xl font-bold text-blue-600 mb-2">{item.german}</div>
                    <div className="text-lg text-gray-700 mb-2">{item.english}</div>
                    <div className="text-sm text-gray-500 italic">{item.example}</div>
                  </div>
                ))}
              </div>
              <Button onClick={completeLesson} className="mt-6 bg-green-500 hover:bg-green-600">
                Mark as Complete
              </Button>
            </div>
          </div>
        );
      case 'flashcards':
        return (
          <FlashCard
            cards={flashcardsData}
            onComplete={completeLesson}
          />
        );
      case 'quiz':
        return (
          <QuizComponent
            questions={quizData}
            onComplete={(score) => {
              console.log('Quiz completed with score:', score);
              completeLesson();
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
              <h1 className="text-xl font-semibold">{currentLesson?.title}</h1>
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
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                className="mr-4"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Courses
              </Button>
              <h1 className="text-xl font-bold text-gray-900">{courseData.title}</h1>
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

      {/* Stage Header Section */}
      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">SECTION 2, UNIT 1 ▼</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Check and Mate</h2>
          
          {/* Overall Course Progress */}
          <div className="max-w-md mx-auto">
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-300"
                style={{ width: `${courseData.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Map */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="relative">
          {/* Vertical connecting lines */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2" />
          
          {/* Lessons */}
          <div className="space-y-8">
            {courseData.stages.map((stage) =>
              stage.lessons.map((lesson, lessonIndex) => {
                const Icon = getIcon(lesson.type);
                const lessonColor = getLessonColor(lesson);
                
                return (
                  <div key={lesson.id} className="relative flex items-center justify-center">
                    {/* Lesson Node */}
                    <div
                      onClick={() => startLesson(lesson)}
                      className={`
                        relative w-20 h-20 rounded-full border-4 flex items-center justify-center
                        cursor-pointer transition-all duration-300 transform hover:scale-110
                        ${lessonColor} z-10
                        ${lesson.locked ? 'cursor-not-allowed' : ''}
                      `}
                    >
                      {lesson.locked ? (
                        <Lock className="h-8 w-8 text-white" />
                      ) : lesson.completed ? (
                        <Star className="h-8 w-8 text-white fill-current" />
                      ) : (
                        <Icon className="h-8 w-8 text-white" />
                      )}
                    </div>

                    {/* Lesson Info Card */}
                    <div className={`
                      absolute left-full ml-6 bg-white rounded-xl shadow-lg p-4 min-w-[300px]
                      ${lessonIndex % 2 === 1 ? 'left-auto right-full mr-6' : ''}
                    `}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900">{lesson.title}</h3>
                        {lesson.completed && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{lesson.duration}</span>
                        <span className="ml-4 text-yellow-600 font-medium">+{lesson.xp} XP</span>
                      </div>

                      {/* Exercise Levels (if applicable) */}
                      {lesson.type === 'exercises' && lesson.exerciseLevels && (
                        <div className="flex space-x-2 mt-3">
                          {lesson.exerciseLevels.map((level) => (
                            <div
                              key={level.level}
                              className={`
                                w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                                ${level.completed ? 'bg-green-500 text-white' : 
                                  level.locked ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white'}
                              `}
                            >
                              {level.level}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Lesson Type Badge */}
                      <div className={`
                        inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2
                        ${lesson.type === 'video' ? 'bg-red-100 text-red-700' :
                          lesson.type === 'vocab' ? 'bg-blue-100 text-blue-700' :
                          lesson.type === 'flashcards' ? 'bg-green-100 text-green-700' :
                          'bg-purple-100 text-purple-700'}
                      `}>
                        {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}
                      </div>
                    </div>

                    {/* Arrow pointing to lesson info */}
                    <div className={`
                      absolute w-0 h-0 z-20
                      ${lessonIndex % 2 === 1 
                        ? 'right-full mr-6 border-l-8 border-l-white border-t-8 border-t-transparent border-b-8 border-b-transparent'
                        : 'left-full ml-6 border-r-8 border-r-white border-t-8 border-t-transparent border-b-8 border-b-transparent'
                      }
                    `} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center text-gray-600">
              <BookOpen className="h-5 w-5 mb-1" />
              <span className="text-xs">Learn</span>
            </div>
            <div className="flex flex-col items-center text-gray-600">
              <Brain className="h-5 w-5 mb-1" />
              <span className="text-xs">Practice</span>
            </div>
            <div className="flex flex-col items-center text-gray-600">
              <BarChart3 className="h-5 w-5 mb-1" />
              <span className="text-xs">Leaderboard</span>
            </div>
            <div className="flex flex-col items-center text-gray-600">
              <Users className="h-5 w-5 mb-1" />
              <span className="text-xs">Profile</span>
            </div>
            <div className="flex flex-col items-center text-gray-600">
              <MessageCircle className="h-5 w-5 mb-1" />
              <span className="text-xs">More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
