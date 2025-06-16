
import { Course } from '@/types/course';
import CourseCard from './CourseCard';

interface CourseGridProps {
  courses: Course[];
  onEditCourse: (courseId: string) => void;
  loading?: boolean;
  error?: string | null;
}

const CourseGrid = ({ courses, onEditCourse, loading, error }: CourseGridProps) => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Your Courses</h2>
        <div className="text-sm text-gray-500">
          {!loading && `${courses.length} courses total`}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-lg p-6 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="h-16 bg-gray-100 rounded-xl"></div>
                <div className="h-16 bg-gray-100 rounded-xl"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-8 bg-gray-100 rounded-full w-full mb-4"></div>
              <div className="flex justify-end space-x-2 mt-4">
                <div className="h-8 bg-gray-200 rounded w-20"></div>
                <div className="h-8 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-red-800 mb-2">Unable to load courses</h3>
          <p className="text-red-600">{error}</p>
        </div>
      ) : courses.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses yet</h3>
          <p className="text-gray-600 mb-6">Create your first course to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEditCourse={onEditCourse}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseGrid;
