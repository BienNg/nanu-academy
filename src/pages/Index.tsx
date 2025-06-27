
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Trophy, Star, ChevronRight, Settings, ArrowRight, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { allCourses } from '@/mockData/courses/courseStructure';

const Index = () => {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [isLoading, setIsLoading] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Use the first course as the main CTA
  const mainCourse = allCourses[0];

  // Animate progress bar on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValue(mainCourse.progress);
    }, 300);
    return () => clearTimeout(timer);
  }, [mainCourse.progress]);

  const handleContinueLearning = () => {
    setIsLoading(true);
    // Simulate loading state before navigation
    setTimeout(() => {
      setIsLoading(false);
      // Navigation would happen here
    }, 1500);
  };

  const handleCardHover = (cardId: string) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600 animate-fade-in">LinguaLearn</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/admin/course-builder">
                <Button variant="ghost" size="sm" className="hover:scale-105 transition-all duration-200">
                  <Settings className="h-4 w-4 mr-2" />
                  Admin
                </Button>
              </Link>
              <div className="flex items-center space-x-2 bg-orange-100 px-3 py-1 rounded-full animate-pulse">
                <span className="text-orange-600 font-semibold">{currentStreak}</span>
                <span className="text-orange-600 text-sm">day streak</span>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section - Single Focus */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-8">
            <div className="text-6xl mb-4 animate-bounce">🇩🇪</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to continue learning German?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              You're on a <span className="text-orange-600 font-semibold animate-pulse">{currentStreak}-day streak</span>! Keep the momentum going with your next lesson.
            </p>
          </div>

          {/* Primary CTA with Enhanced Feedback */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-100 mb-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{mainCourse.title}</h3>
                <p className="text-gray-600">{mainCourse.description}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600 mb-1 animate-scale-in">{mainCourse.progress}%</div>
                <div className="text-sm text-gray-500">Complete</div>
              </div>
            </div>
            
            <div className="mb-6">
              <Progress 
                value={progressValue} 
                className="h-3 mb-2 transition-all duration-1000 ease-out" 
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{mainCourse.completedStages}/{mainCourse.totalStages} stages completed</span>
                <span className="animate-pulse">🔥</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-4 text-lg rounded-2xl hover:scale-105 transition-all duration-200 active:scale-95"
              onClick={handleContinueLearning}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader className="h-6 w-6 mr-3 animate-spin" />
                  Preparing your lesson...
                </>
              ) : (
                <>
                  <Play className="h-6 w-6 mr-3" />
                  Continue Learning
                  <ArrowRight className="h-6 w-6 ml-3" />
                </>
              )}
            </Button>

            {/* Loading Progress Indicator */}
            {isLoading && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-blue-500 h-1 rounded-full animate-pulse" style={{ width: '100%', animation: 'pulse 1.5s ease-in-out infinite' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2 animate-fade-in">Loading your personalized content...</p>
              </div>
            )}
          </div>
        </div>

        {/* Simplified Stats with Enhanced Feedback */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card 
            className="text-center border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => handleCardHover('streak')}
            onMouseLeave={handleCardLeave}
          >
            <CardContent className="p-6">
              <Trophy className={`h-8 w-8 text-orange-500 mx-auto mb-3 transition-all duration-200 ${hoveredCard === 'streak' ? 'animate-bounce' : ''}`} />
              <div className="text-2xl font-bold text-orange-600 mb-1">{currentStreak}</div>
              <div className="text-sm text-orange-700">Day Streak</div>
              {hoveredCard === 'streak' && (
                <div className="mt-2 flex justify-center">
                  <div className="w-1 h-1 bg-orange-500 rounded-full animate-ping"></div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card 
            className="text-center border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => handleCardHover('stages')}
            onMouseLeave={handleCardLeave}
          >
            <CardContent className="p-6">
              <BookOpen className={`h-8 w-8 text-green-500 mx-auto mb-3 transition-all duration-200 ${hoveredCard === 'stages' ? 'animate-bounce' : ''}`} />
              <div className="text-2xl font-bold text-green-600 mb-1">{mainCourse.completedStages}</div>
              <div className="text-sm text-green-700">Stages Complete</div>
              {hoveredCard === 'stages' && (
                <div className="mt-2 flex justify-center">
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card 
            className="text-center border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => handleCardHover('xp')}
            onMouseLeave={handleCardLeave}
          >
            <CardContent className="p-6">
              <Star className={`h-8 w-8 text-purple-500 mx-auto mb-3 transition-all duration-200 ${hoveredCard === 'xp' ? 'animate-bounce' : ''}`} />
              <div className="text-2xl font-bold text-purple-600 mb-1">1,250</div>
              <div className="text-sm text-purple-700">XP Earned</div>
              {hoveredCard === 'xp' && (
                <div className="mt-2 flex justify-center">
                  <div className="w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Secondary Options with Smart Responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 hover:scale-105 active:scale-95"
            onMouseEnter={() => handleCardHover('practice')}
            onMouseLeave={handleCardLeave}
          >
            <CardContent className="p-6 text-center">
              <BookOpen className={`h-10 w-10 mx-auto mb-4 text-blue-600 transition-all duration-200 ${hoveredCard === 'practice' ? 'animate-pulse' : ''}`} />
              <h3 className="font-bold mb-2 text-blue-900">Quick Practice</h3>
              <p className="text-sm mb-4 text-blue-700">Review vocabulary with flashcards</p>
              <Link to={`/course/${mainCourse.id}`}>
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:scale-105 transition-all duration-200">
                  Start Practice
                  {hoveredCard === 'practice' && <ChevronRight className="h-4 w-4 ml-1 animate-bounce" />}
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card 
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100 hover:scale-105 active:scale-95"
            onMouseEnter={() => handleCardHover('progress')}
            onMouseLeave={handleCardLeave}
          >
            <CardContent className="p-6 text-center">
              <Trophy className={`h-10 w-10 mx-auto mb-4 text-purple-600 transition-all duration-200 ${hoveredCard === 'progress' ? 'animate-pulse' : ''}`} />
              <h3 className="font-bold mb-2 text-purple-900">View Progress</h3>
              <p className="text-sm mb-4 text-purple-700">See your learning achievements</p>
              <Link to={`/course/${mainCourse.id}`}>
                <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:scale-105 transition-all duration-200">
                  View Stats
                  {hoveredCard === 'progress' && <ChevronRight className="h-4 w-4 ml-1 animate-bounce" />}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
