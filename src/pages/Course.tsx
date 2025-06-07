import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

  // Flatten all lessons from all stages for the map display
  const allLessons = courseData.stages.flatMap(stage => stage.lessons);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-green-50 to-yellow-50">
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

      {/* Course Progress Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">COURSE OVERVIEW</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">{courseData.title}</h2>
          <p className="text-lg text-green-100 mb-6">{courseData.description}</p>
          
          {/* Course Progress */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress: {courseData.completedStages}/{courseData.totalStages} stages</span>
              <span>{courseData.progress}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4">
              <div 
                className="bg-white h-4 rounded-full transition-all duration-300"
                style={{ width: `${courseData.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Map */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="relative">
          {/* Path line connecting lessons */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: '#3B82F6', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            {allLessons.map((_, index) => {
              if (index === allLessons.length - 1) return null;
              
              const startX = (index % 4) * 280 + 140;
              const startY = Math.floor(index / 4) * 300 + 150;
              const endX = ((index + 1) % 4) * 280 + 140;
              const endY = Math.floor((index + 1) / 4) * 300 + 150;
              
              return (
                <line
                  key={`path-${index}`}
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke="url(#pathGradient)"
                  strokeWidth="4"
                  strokeDasharray={allLessons[index + 1].locked ? "10,5" : "none"}
                />
              );
            })}
          </svg>

          {/* Lesson nodes */}
          <div className="relative grid grid-cols-4 gap-8" style={{ zIndex: 2 }}>
            {allLessons.map((lesson, index) => {
              const stageIndex = Math.floor(index / 4);
              const lessonInStage = index % 4;
              const stage = courseData.stages[stageIndex];
              
              return (
                <div key={lesson.id} className="flex flex-col items-center">
                  {/* Stage header (shown only for first lesson of each stage) */}
                  {lessonInStage === 0 && (
                    <div className="mb-6 text-center">
                      <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Stage {stage.stageNumber}: {stage.title}
                      </div>
                      <div className="mt-2 text-sm text-gray-600">{stage.description}</div>
                      <div className="mt-2">
                        <div className="w-48 bg-gray-200 rounded-full h-2 mx-auto">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${stage.progress}%` }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{Math.round(stage.progress)}% complete</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Lesson node */}
                  <div
                    onClick={() => startLesson(lesson)}
                    className={`
                      relative w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center
                      cursor-pointer transition-all duration-300 transform hover:scale-110 shadow-lg
                      ${lesson.locked 
                        ? 'bg-gray-300 border-gray-400 cursor-not-allowed' 
                        : lesson.completed 
                          ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-500 shadow-green-200' 
                          : 'bg-gradient-to-br from-blue-400 to-blue-600 border-blue-500 shadow-blue-200'
                      }
                    `}
                  >
                    {/* Lesson type icon */}
                    <div className="text-white text-2xl mb-1">
                      {lesson.type === 'video' && '🎥'}
                      {lesson.type === 'vocab' && '📚'}
                      {lesson.type === 'flashcards' && '🃏'}
                      {lesson.type === 'exercises' && '🧠'}
                    </div>
                    
                    {/* XP badge */}
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                      +{lesson.xp}
                    </div>
                    
                    {/* Completion indicator */}
                    {lesson.completed && (
                      <div className="absolute -bottom-2 bg-white rounded-full p-1">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Lock indicator */}
                    {lesson.locked && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-600 text-2xl">🔒</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Lesson info */}
                  <div className="mt-4 text-center max-w-36">
                    <h3 className="font-semibold text-sm text-gray-900 mb-1">{lesson.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{lesson.duration}</p>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      lesson.type === 'video' ? 'bg-red-100 text-red-700' :
                      lesson.type === 'vocab' ? 'bg-blue-100 text-blue-700' :
                      lesson.type === 'flashcards' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}
                    </div>
                    
                    {/* Exercise levels indicator */}
                    {lesson.type === 'exercises' && lesson.exerciseLevels && (
                      <div className="mt-2 flex justify-center space-x-1">
                        {lesson.exerciseLevels.map((level) => (
                          <div
                            key={level.level}
                            className={`w-2 h-2 rounded-full ${
                              level.completed ? 'bg-green-500' : 
                              level.locked ? 'bg-gray-300' : 'bg-blue-500'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
