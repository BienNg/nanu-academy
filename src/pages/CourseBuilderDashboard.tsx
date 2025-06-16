import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

// Components
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatsOverview from '@/components/dashboard/StatsOverview';
import CourseGrid from '@/components/dashboard/CourseGrid';

// Hooks
import { useCourseData } from '@/hooks/useCourseData';

// UI Components
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CourseBuilderDashboard = () => {
  const navigate = useNavigate();
  const { courses } = useCourseData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const handleCreateCourse = () => {
    setIsModalOpen(true);
  };

  const handleSubmitCourse = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating course:', { courseTitle, courseDescription });
    navigate('/admin/course-builder/new', { 
      state: { 
        title: courseTitle,
        description: courseDescription 
      } 
    });
  };

  const handleEditCourse = (courseId: string) => {
    console.log('Editing course:', courseId);
    navigate(`/admin/course-builder/${courseId}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCourseTitle('');
    setCourseDescription('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <DashboardHeader onCreateCourse={handleCreateCourse} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <StatsOverview courses={courses} />
        <CourseGrid courses={courses} onEditCourse={handleEditCourse} />
      </div>

      {/* Create Course Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Create New Course</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmitCourse} className="space-y-6 mt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="courseTitle" className="block text-sm font-medium text-gray-700">
                  Course Title
                </label>
                <Input
                  id="courseTitle"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  placeholder="Enter course title"
                  className="w-full"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="courseDescription" className="block text-sm font-medium text-gray-700">
                  Description (Optional)
                </label>
                <Textarea
                  id="courseDescription"
                  value={courseDescription}
                  onChange={(e) => setCourseDescription(e.target.value)}
                  placeholder="Enter a brief description of the course"
                  className="min-h-[100px]"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleCloseModal}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Course
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseBuilderDashboard;
