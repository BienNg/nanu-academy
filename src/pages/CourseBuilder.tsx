
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

  const handleSaveCourse = () => {
    const courseData = {
      title: courseTitle,
      description: courseDescription,
      createdAt: new Date().toISOString()
    };
    console.log('Saving course:', courseData);
    // Here you would typically save to a backend
  };



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
                <p className="text-sm font-medium text-gray-900">Course Details</p>
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

      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-10 space-y-8">
        {/* Course Info */}
        <div className="space-y-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">
              Course Title
            </label>
            <Input
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              placeholder="Enter an engaging course title..."
              className="border-gray-200 focus:border-violet-300 focus:ring-violet-200 h-12 text-lg"
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
              className="border-gray-200 focus:border-violet-300 focus:ring-violet-200 min-h-32"
              rows={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBuilder;
