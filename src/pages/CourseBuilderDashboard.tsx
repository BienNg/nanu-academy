import { useState } from 'react';
import { Plus, Edit, Eye, Users, BookOpen, Clock, Trophy, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CourseBuilderDashboard = () => {
  const navigate = useNavigate();
  
  // Sample courses data
  const [courses] = useState([
    {
      id: '1',
      title: 'German Basics',
      description: 'Learn fundamental German vocabulary and grammar',
      students: 1234,
      lessons: 24,
      flashcards: 156,
      exercises: 48,
      status: 'published',
      lastUpdated: '2 days ago',
      completion: 85,
      rating: 4.8
    },
    {
      id: '2',
      title: 'Spanish Conversations',
      description: 'Practice everyday Spanish conversations',
      students: 892,
      lessons: 18,
      flashcards: 124,
      exercises: 32,
      status: 'published',
      lastUpdated: '1 week ago',
      completion: 92,
      rating: 4.9
    },
    {
      id: '3',
      title: 'French Grammar Mastery',
      description: 'Master complex French grammar rules',
      students: 567,
      lessons: 32,
      flashcards: 203,
      exercises: 67,
      status: 'draft',
      lastUpdated: '3 days ago',
      completion: 45,
      rating: 4.6
    },
    {
      id: '4',
      title: 'Italian Culture & Language',
      description: 'Explore Italian culture through language learning',
      students: 345,
      lessons: 16,
      flashcards: 89,
      exercises: 28,
      status: 'published',
      lastUpdated: '5 days ago',
      completion: 78,
      rating: 4.7
    }
  ]);

  const handleCreateCourse = () => {
    navigate('/admin/course-builder/new');
  };

  const handleEditCourse = (courseId: string) => {
    navigate(`/admin/course-builder/edit/${courseId}`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Published
          </span>
        );
      case 'draft':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Draft
          </span>
        );
      default:
        return null;
    }
  };

  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);
  const totalCourses = courses.length;
  const publishedCourses = courses.filter(course => course.status === 'published').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">
                ← Back to Dashboard
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Course Creator Hub</h1>
                  <p className="text-sm text-gray-500">Manage and create engaging courses</p>
                </div>
              </div>
            </div>
            <Button 
              onClick={handleCreateCourse}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create New Course
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Total Students</p>
                  <p className="text-3xl font-bold">{totalStudents.toLocaleString()}</p>
                </div>
                <Users className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Published Courses</p>
                  <p className="text-3xl font-bold">{publishedCourses}/{totalCourses}</p>
                </div>
                <Trophy className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Avg. Rating</p>
                  <p className="text-3xl font-bold">4.8</p>
                </div>
                <Star className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Courses Grid */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Your Courses</h2>
          <div className="text-sm text-gray-500">
            {courses.length} courses total
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                      {course.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {course.description}
                    </p>
                  </div>
                  {getStatusBadge(course.status)}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-green-50 rounded-xl">
                    <Users className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Students</p>
                    <p className="font-bold text-green-600">{course.students}</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-xl">
                    <BookOpen className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Lessons</p>
                    <p className="font-bold text-blue-600">{course.lessons}</p>
                  </div>
                </div>

                {/* Content Summary */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{course.flashcards} flashcards</span>
                  <span>{course.exercises} exercises</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                    <span>Content completion</span>
                    <span>{course.completion}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.completion}%` }}
                    />
                  </div>
                </div>

                {/* Rating and Last Updated */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{course.lastUpdated}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    onClick={() => handleEditCourse(course.id)}
                    variant="outline"
                    size="sm"
                    className="flex-1 border-green-200 hover:bg-green-50 hover:text-green-700"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseBuilderDashboard;
