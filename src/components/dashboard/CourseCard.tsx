
import { Edit, Eye, Users, BookOpen, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Course } from '@/types/course';

interface CourseCardProps {
  course: Course;
  onEditCourse: (courseId: string) => void;
}

const CourseCard = ({ course, onEditCourse }: CourseCardProps) => {
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

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
            onClick={() => onEditCourse(course.id)}
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
  );
};

export default CourseCard;
