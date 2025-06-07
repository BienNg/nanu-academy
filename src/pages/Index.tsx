import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Trophy, Star, ChevronRight, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { courseData } from '@/mockData/courses/courseStructure';

const Index = () => {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [totalXP, setTotalXP] = useState(1250);

  const recentActivity = [
    { lesson: "Articles: der, die, das", xp: 50, completed: true },
    { lesson: "Common Verbs", xp: 45, completed: true },
    { lesson: "Family Vocabulary", xp: 60, completed: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">LinguaLearn</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/admin/course-builder">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Course Builder
                </Button>
              </Link>
              <div className="flex items-center space-x-2 bg-orange-100 px-3 py-1 rounded-full">
                <span className="text-orange-600 font-semibold">🔥 {currentStreak}</span>
                <span className="text-orange-600 text-sm">day streak</span>
              </div>
              <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-yellow-600" />
                <span className="text-yellow-600 font-semibold">{totalXP} XP</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
              <p className="text-blue-100 mb-4">Ready to continue your German learning journey?</p>
              <Link to={`/course/${courseData.id}`}>
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  <Play className="h-4 w-4 mr-2" />
                  Continue Learning
                </Button>
              </Link>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Courses</h3>
              <div className="grid gap-6">
                <Card key={courseData.id} className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">🇩🇪</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900">{courseData.title}</h4>
                          <p className="text-gray-600 mb-3">{courseData.description}</p>
                          <div className="flex items-center space-x-4">
                            <div className="flex-1">
                              <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>{courseData.completedStages}/{courseData.totalStages} stages</span>
                                <span>{courseData.progress}%</span>
                              </div>
                              <Progress value={courseData.progress} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link to={`/course/${courseData.id}`}>
                          <Button>
                            Continue
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                  Daily Goal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">3/5</div>
                  <p className="text-gray-600 mb-4">lessons completed today</p>
                  <Progress value={60} className="mb-4" />
                  <p className="text-sm text-gray-500">2 more lessons to reach your daily goal!</p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${activity.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div>
                          <p className="text-sm font-medium">{activity.lesson}</p>
                          <p className="text-xs text-gray-500">+{activity.xp} XP</p>
                        </div>
                      </div>
                      {activity.completed && (
                        <div className="text-green-500">✓</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Practice */}
            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Quick Practice</h3>
                <p className="text-sm mb-4 text-purple-100">Review your vocab with flashcards</p>
                <Link to={`/course/${courseData.id}`}>
                  <Button variant="secondary" className="w-full">
                    Start Practice
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
