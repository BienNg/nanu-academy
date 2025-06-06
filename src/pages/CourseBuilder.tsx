
import { useState } from 'react';
import { Plus, Save, Eye, ArrowLeft, BookOpen, Video, Brain, Sparkles } from 'lucide-react';
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

  const totalContent = lessons.length + flashcards.length + exercises.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      {/* Modern Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-violet-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <Link to="/" className="flex items-center text-gray-600 hover:text-violet-600 transition-colors group">
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
              </Link>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-violet-500 to-indigo-500 p-2 rounded-xl">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Course Builder
                  </h1>
                  <p className="text-sm text-gray-500">Create engaging learning experiences</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right mr-4">
                <p className="text-sm font-medium text-gray-900">{totalContent} items</p>
                <p className="text-xs text-gray-500">Total content</p>
              </div>
              <Button variant="outline" className="border-violet-200 hover:bg-violet-50">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button onClick={handleSaveCourse} className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600">
                <Save className="h-4 w-4 mr-2" />
                Save Course
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Course Info Card */}
        <Card className="mb-10 border-0 shadow-xl bg-white/70 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-t-lg">
            <CardTitle className="text-xl text-gray-800 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-violet-600" />
              Course Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Course Title
                </label>
                <Input
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  placeholder="Enter an engaging course title..."
                  className="border-gray-200 focus:border-violet-300 focus:ring-violet-200 h-12"
                />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Course Description
                </label>
                <Textarea
                  value={courseDescription}
                  onChange={(e) => setCourseDescription(e.target.value)}
                  placeholder="Describe what students will learn..."
                  className="border-gray-200 focus:border-violet-300 focus:ring-violet-200 h-12 resize-none"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Builder with Modern Tabs */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border-0">
          <Tabs defaultValue="lessons" className="space-y-8">
            <div className="px-8 pt-8">
              <TabsList className="grid w-full grid-cols-3 bg-gray-100/80 p-1 h-14">
                <TabsTrigger 
                  value="lessons" 
                  className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm font-medium"
                >
                  <Video className="h-4 w-4" />
                  <span>Video Lessons</span>
                  <span className="bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full text-xs font-semibold">
                    {lessons.length}
                  </span>
                </TabsTrigger>
                <TabsTrigger 
                  value="flashcards"
                  className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm font-medium"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Flashcards</span>
                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-xs font-semibold">
                    {flashcards.length}
                  </span>
                </TabsTrigger>
                <TabsTrigger 
                  value="exercises"
                  className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm font-medium"
                >
                  <Brain className="h-4 w-4" />
                  <span>Exercises</span>
                  <span className="bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full text-xs font-semibold">
                    {exercises.length}
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="px-8 pb-8">
              <TabsContent value="lessons" className="mt-0">
                <LessonBuilder lessons={lessons} setLessons={setLessons} />
              </TabsContent>

              <TabsContent value="flashcards" className="mt-0">
                <FlashcardBuilder flashcards={flashcards} setFlashcards={setFlashcards} />
              </TabsContent>

              <TabsContent value="exercises" className="mt-0">
                <ExerciseBuilder exercises={exercises} setExercises={setExercises} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CourseBuilder;
