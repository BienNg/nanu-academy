
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoPlayer from '@/components/VideoPlayer';
import FlashCard from '@/components/FlashCard';
import QuizComponent from '@/components/QuizComponent';
import StageCard from '@/components/StageCard';
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

      {/* Course Header Section */}
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

      {/* Course Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Course Stages</h3>
          <p className="text-gray-600">Complete each stage to unlock the next. Each stage contains 4 structured lessons.</p>
        </div>

        {/* Stages */}
        <div className="space-y-6">
          {courseData.stages.map((stage) => (
            <StageCard
              key={stage.id}
              stage={stage}
              onLessonStart={startLesson}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
