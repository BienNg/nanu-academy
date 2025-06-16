import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { firestore, collection, addDoc } from '@/firebase';

// Components
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatsOverview from '@/components/dashboard/StatsOverview';
import CourseGrid from '@/components/dashboard/CourseGrid';

// Hooks
import { useCourseData } from '@/hooks/useCourseData';
import { useMockCourseData } from '@/hooks/useMockCourseData';

// UI Components
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CourseBuilderDashboard = () => {
  const navigate = useNavigate();
  const { courses: realCourses, loading: realLoading, error: realError } = useCourseData();
  const { courses: mockCourses, loading: mockLoading, error: mockError } = useMockCourseData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreateCourse = () => {
    setIsModalOpen(true);
  };

  const handleSubmitCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create a new course object
      const newCourse = {
        title: courseTitle,
        description: courseDescription,
        students: 0,
        lessons: 0,
        flashcards: 0,
        exercises: 0,
        status: 'draft',
        lastUpdated: 'Just now',
        createdAt: new Date()
      };
      
      // Add the course to Firestore
      const coursesCollection = collection(firestore, 'courses');
      const courseRef = await addDoc(coursesCollection, newCourse);
      console.log('Course created with ID:', courseRef.id);
      
      // Show success toast and close modal
      toast.success('Course created successfully!', {
        description: `${courseTitle} has been created.`,
        icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
        position: 'top-right',
        duration: 3000,
        className: 'bg-white border border-gray-200 shadow-lg',
      });
      handleCloseModal();
      
      // Refresh the course list to show the new course
      // The useCourseData hook will automatically refetch the data
      // No need to navigate away, we'll stay on the dashboard
    } catch (error) {
      console.error('Error creating course:', error);
      alert('Failed to create course. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        <StatsOverview courses={realCourses} />
        
        {/* Mock Courses List */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">All Courses in Database</h2>
            <div className="text-sm text-gray-500">
              {!mockLoading && `${mockCourses.length} courses in database`}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              {mockLoading ? (
                <div className="p-8 text-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                  <p className="mt-4 text-gray-600">Loading courses...</p>
                </div>
              ) : mockError ? (
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <p className="text-red-600 font-medium mb-2">Error loading courses</p>
                  <p className="text-gray-600">{mockError}</p>
                </div>
              ) : (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Students
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Updated
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockCourses.map((course) => (
                      <tr key={course.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-0">
                              <div className="text-sm font-medium text-gray-900">{course.title}</div>
                              <div className="text-sm text-gray-500 line-clamp-1">{course.description || 'No description'}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            course.status === 'published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {course.status?.charAt(0).toUpperCase() + course.status?.slice(1) || 'Draft'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {course.students || 0}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {course.lastUpdated || 'Just now'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleEditCourse(course.id)}
                            className="text-indigo-600 hover:text-indigo-900 mr-4"
                          >
                            Edit
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                    {mockCourses.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                          No courses found. Create your first course to get started.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        
        {/* Real Courses Grid */}
        <CourseGrid courses={realCourses} onEditCourse={handleEditCourse} loading={realLoading} error={realError} />
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
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating...
                  </span>
                ) : (
                  <>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Course
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseBuilderDashboard;
