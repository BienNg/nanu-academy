
import { Course } from '@/types/course';
import CourseCard from './CourseCard';

interface CourseGridProps {
  courses: Course[];
  onEditCourse: (courseId: string) => void;
}

const CourseGrid = ({ courses, onEditCourse }: CourseGridProps) => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Your Courses</h2>
        <div className="text-sm text-gray-500">
          {courses.length} courses total
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEditCourse={onEditCourse}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
