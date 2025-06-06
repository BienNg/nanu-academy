
import { useState } from 'react';
import { Plus, Save, Eye, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LessonBuilder } from '@/components/course-builder/LessonBuilder';
import { FlashcardBuilder } from '@/components/course-builder/FlashcardBuilder';
import { ExerciseBuilder } from '@/components/course-builder/ExerciseBuilder';

const CourseBuilder = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [lessons, setLessons] = useState([]);
  const [flashcards, setFlashcards] = useState([]);
  const [exercises, setExercises] = useState([]);

  const handleSaveCourse = () => {
    const courseData = {
      title: courseTitle,
      description: courseDescription,
      lessons,
      flashcards,
      exercises,
      createdAt: new Date().toISOString()
    };
    console.log('Saving course:', courseData);
    // Here you would typically save to a backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-blue-600">Course Builder</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button onClick={handleSaveCourse}>
                <Save className="h-4 w-4 mr-2" />
                Save Course
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Course Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Title
              </label>
              <Input
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                placeholder="Enter course title..."
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Description
              </label>
              <Textarea
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
                placeholder="Describe your course..."
                className="w-full h-24"
              />
            </div>
          </CardContent>
        </Card>

        {/* Content Builder */}
        <Tabs defaultValue="lessons" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="lessons">Video Lessons</TabsTrigger>
            <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
            <TabsTrigger value="exercises">Exercises</TabsTrigger>
          </TabsList>

          <TabsContent value="lessons">
            <LessonBuilder lessons={lessons} setLessons={setLessons} />
          </TabsContent>

          <TabsContent value="flashcards">
            <FlashcardBuilder flashcards={flashcards} setFlashcards={setFlashcards} />
          </TabsContent>

          <TabsContent value="exercises">
            <ExerciseBuilder exercises={exercises} setExercises={setExercises} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseBuilder;
