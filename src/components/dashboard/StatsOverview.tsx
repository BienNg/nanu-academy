
import { Users, Trophy, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Course } from '@/types/course';

interface StatsOverviewProps {
  courses: Course[];
}

const StatsOverview = ({ courses }: StatsOverviewProps) => {
  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);
  const totalCourses = courses.length;
  const publishedCourses = courses.filter(course => course.status === 'published').length;

  return (
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
  );
};

export default StatsOverview;
