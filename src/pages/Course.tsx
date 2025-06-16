import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Flame, Play, BookOpen, Brain, Lock, CheckCircle, Star, Clock, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import VideoPlayer from '@/components/VideoPlayer';
import FlashCard from '@/components/FlashCard';
import QuizComponent from '@/components/QuizComponent';
import { allCourses, CourseLesson } from '@/mockData/courses/courseStructure';
import { vocabulary, getVocabularyForCourseAndStage } from '@/mockData/content/vocabulary';
import { getQuizForStage } from '@/mockData/quizzes';
import { getExercisesByLevel } from '@/mockData/content/exercises/content';

const Course = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState<'overview' | 'video' | 'flashcards' | 'quiz' | 'vocab'>('overview');
  const [currentLesson, setCurrentLesson] = useState<CourseLesson | null>(null);
  const [currentStageId, setCurrentStageId] = useState<string>('');
  const [selectedExerciseLevel, setSelectedExerciseLevel] = useState<number | null>(null);

  // Debug: Log the ID and available courses
  console.log('URL courseId:', courseId);
  console.log('Available courses:', allCourses.map(c => ({ id: c.id, title: c.title })));

  // Find the course by id from the URL
  const course = allCourses.find(c => c.id === courseId);

  // Fallback if course not found
  if (!course) {
    return (
      <div className="p-8 text-center">
        <div className="text-red-600 text-xl font-semibold mb-2">Course not found.</div>
        <div className="text-gray-700">ID: {courseId || 'undefined'}</div>
        <div className="mt-4">
          <p className="font-medium mb-2">Available courses:</p>
          <ul className="list-disc list-inside">
            {allCourses.map(c => (
              <li key={c.id}>
                <span className="font-mono">{c.id}</span>: {c.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Get vocabulary items for the current course and stage
  const getStageVocabulary = (stageId: string) => {
    if (!courseId) return [];
    return getVocabularyForCourseAndStage(courseId, stageId);
  };

  // Get vocabulary and quiz data for the current stage
  const currentStageVocab = currentStageId ? getStageVocabulary(currentStageId) : [];
  const flashcardsData = currentStageVocab.map(item => ({
    id: item.word_id,
    german: item.german,
    english: item.vietnamese,
    example: '' // Example sentences could be added to the vocabulary data if needed
  }));

  // Get quiz data for the current stage and filter by selected level if applicable
  const quizData = currentStageId ? getQuizForStage(currentStageId) : [];
  const exerciseData = selectedExerciseLevel && currentStageId
    ? getExercisesByLevel(currentStageId, selectedExerciseLevel)
    : [];
  
  // Log the data for debugging
  console.log('Quiz Data:', quizData);
  console.log('Exercise Data:', exerciseData);
  
  // Use exercise data if available, otherwise fall back to quiz data
  const filteredQuizData = exerciseData.length > 0 ? exerciseData : quizData;

  // Flatten all lessons from all stages for the vertical map
  const allLessons = course.stages.flatMap(stage => stage.lessons);

  const startLesson = (lesson: CourseLesson, exerciseLevel?: number) => {
    if (lesson.locked) return;
    
    // Find the stage that contains this lesson
    const stage = course.stages.find(stage => 
      stage.lessons.some(l => l.id === lesson.id)
    );
    
    if (stage) {
      setCurrentStageId(stage.id);
    }
    
    setCurrentLesson(lesson);
    
    // If it's an exercise and a level is provided, set the selected level
    if (lesson.type === 'exercises' && exerciseLevel) {
      setSelectedExerciseLevel(exerciseLevel);
    } else {
      setSelectedExerciseLevel(null);
    }
    
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
      case 'flashcards': return BookOpen;
      case 'exercises': return Brain;
      default: return Play;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-700';
      case 'vocab': return 'bg-blue-100 text-blue-700';
      case 'flashcards': return 'bg-green-100 text-green-700';
      case 'exercises': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'video':
        return (
          <VideoPlayer
            title={currentLesson?.title || "Video Lesson"}
            description="Learn through interactive video content"
            videoUrl={currentLesson?.url}
            videoSummary={currentLesson?.videoSummary}
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
            stageId={currentStageId}
            exercises={filteredQuizData}
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
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
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

      {/* Course Progress Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">COURSE OVERVIEW</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
          <p className="text-lg text-green-100 mb-6">{course.description}</p>
          
          {/* Overall Course Progress */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress: {course.completedStages}/{course.totalStages} stages</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4">
              <div 
                className="bg-white h-4 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid">
          {/* Center - Vertical Course Map */}
          <div>
            <div className="relative flex flex-col items-center">
              {/* Vertical Path Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2" />
              
              {/* Stages and Lessons */}
              <div className="space-y-16 relative w-full max-w-2xl">
                {course.stages.map((stage, stageIndex) => (
                  <div key={stage.id} className="space-y-8">
                    {/* Stage Checkpoint */}
                    <div className="flex justify-center">
                      <div className="bg-white rounded-2xl shadow-lg px-4 py-3 border-4 border-gray-200 relative z-20">
                        <div className="flex items-center justify-center">
                          <div className={`
                            w-12 h-12 rounded-full border-4 flex items-center justify-center
                            ${stage.locked ? 'bg-gray-300 border-gray-400' : 
                              stage.completed ? 'bg-green-500 border-green-600' : 'bg-blue-500 border-blue-600'}
                          `}>
                            {stage.locked ? (
                              <Lock className="h-6 w-6 text-white" />
                            ) : stage.completed ? (
                              <Crown className="h-6 w-6 text-white" />
                            ) : (
                              <span className="text-white text-lg font-bold">{stage.stageNumber}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stage Lessons - Each with its own card */}
                    <div className="space-y-6">
                      {stage.lessons.map((lesson, lessonIndex) => {
                        const Icon = getIcon(lesson.type);
                        const typeColor = getTypeColor(lesson.type);
                        
                        return (
                          <div key={lesson.id} className="relative py-12">
                            {/* Lesson Icon - Centered */}
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                              <div className="flex justify-center">
                                <div
                                  onClick={() => startLesson(lesson)}
                                  className={`
                                    w-16 h-16 rounded-full border-4 flex items-center justify-center
                                    cursor-pointer transition-all duration-300 transform hover:scale-110
                                    shadow-lg relative z-20
                                    ${lesson.locked ? 'bg-gray-300 border-gray-400 cursor-not-allowed' : 
                                      lesson.completed ? 'bg-green-500 border-green-600' : 'bg-blue-500 border-blue-600'}
                                  `}
                                >
                                  {lesson.locked ? (
                                    <Lock className="h-6 w-6 text-white" />
                                  ) : lesson.completed ? (
                                    <Star className="h-6 w-6 text-white fill-current" />
                                  ) : (
                                    <Icon className="h-6 w-6 text-white" />
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Lesson Card - Alternating Left/Right */}
                            <div 
                              className={`
                                p-4 rounded-xl border transition-all duration-200 cursor-pointer
                                max-w-xs /* Narrower card */
                                absolute top-1/2 transform -translate-y-1/2 z-10 /* Positioned & layered */
                                ${lessonIndex % 2 === 0 ? 'left-[calc(50%+3rem)]' : 'right-[calc(50%+3rem)]'} /* Snake pattern positioning */
                                ${lesson.locked ? 'cursor-not-allowed bg-gray-50' : 
                                  lesson.completed ? 'bg-green-50 border-green-200 hover:bg-green-100' : 
                                  'bg-white border-gray-200 hover:bg-gray-50 hover:shadow-md'}
                              `}
                              onClick={() => !lesson.locked && startLesson(lesson)}
                            >
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-semibold text-gray-900 text-sm leading-tight">{lesson.title}</h4>
                                {lesson.completed && (
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 ml-2" />
                                )}
                              </div>
                              
                              <div className="flex items-center text-xs text-gray-600 mb-2">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>{lesson.duration}</span>
                                <span className="ml-4 text-yellow-600 font-medium">+{lesson.xp} XP</span>
                              </div>

                              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${typeColor}`}>
                                {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}
                              </div>

                              {/* Exercise Levels for exercises */}
                              {lesson.type === 'exercises' && lesson.exerciseLevels && (
                                <div className="mt-3 flex space-x-2">
                                  {lesson.exerciseLevels.map((level) => (
                                    <button
                                      key={level.level}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        startLesson(lesson, level.level);
                                      }}
                                      className={`
                                        w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                                        transition-all duration-200 transform hover:scale-110
                                        ${level.completed ? 'bg-green-500 text-white' : 
                                          level.locked ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 
                                          'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'}
                                        ${selectedExerciseLevel === level.level ? 'ring-2 ring-offset-2 ring-blue-500' : ''}
                                      `}
                                      disabled={level.locked}
                                      aria-label={`Level ${level.level}${level.completed ? ' (completed)' : ''}${level.locked ? ' (locked)' : ''}`}
                                    >
                                      {level.level}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
