
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatsOverview from '@/components/dashboard/StatsOverview';
import CourseGrid from '@/components/dashboard/CourseGrid';
import { useCourseData } from '@/hooks/useCourseData';

const CourseBuilderDashboard = () => {
  const navigate = useNavigate();
  const { courses } = useCourseData();

  const handleCreateCourse = () => {
    navigate('/admin/course-builder/new');
  };

  const handleEditCourse = (courseId: string) => {
    navigate(`/admin/course-builder/edit/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <DashboardHeader onCreateCourse={handleCreateCourse} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <StatsOverview courses={courses} />
        <CourseGrid courses={courses} onEditCourse={handleEditCourse} />
      </div>
    </div>
  );
};

export default CourseBuilderDashboard;
