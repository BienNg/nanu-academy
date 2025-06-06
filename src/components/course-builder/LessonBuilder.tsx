
import { useState } from 'react';
import { Plus, Video, Trash2, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  order: number;
}

interface LessonBuilderProps {
  lessons: Lesson[];
  setLessons: (lessons: Lesson[]) => void;
}

export const LessonBuilder = ({ lessons, setLessons }: LessonBuilderProps) => {
  const [isAddingLesson, setIsAddingLesson] = useState(false);
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: '',
    duration: ''
  });

  const handleAddLesson = () => {
    const newLesson: Lesson = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      videoUrl: formData.videoUrl,
      duration: formData.duration,
      order: lessons.length + 1
    };
    setLessons([...lessons, newLesson]);
    setFormData({ title: '', description: '', videoUrl: '', duration: '' });
    setIsAddingLesson(false);
  };

  const handleEditLesson = () => {
    if (!editingLesson) return;
    const updatedLessons = lessons.map(lesson =>
      lesson.id === editingLesson.id
        ? { ...lesson, ...formData }
        : lesson
    );
    setLessons(updatedLessons);
    setEditingLesson(null);
    setFormData({ title: '', description: '', videoUrl: '', duration: '' });
  };

  const handleDeleteLesson = (id: string) => {
    setLessons(lessons.filter(lesson => lesson.id !== id));
  };

  const openEditDialog = (lesson: Lesson) => {
    setEditingLesson(lesson);
    setFormData({
      title: lesson.title,
      description: lesson.description,
      videoUrl: lesson.videoUrl,
      duration: lesson.duration
    });
  };

  const LessonForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Lesson Title
        </label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter lesson title..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <Textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe this lesson..."
          className="h-20"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Video URL
        </label>
        <Input
          value={formData.videoUrl}
          onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
          placeholder="https://youtube.com/watch?v=..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Duration
        </label>
        <Input
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          placeholder="e.g., 10 minutes"
        />
      </div>
      <Button 
        onClick={editingLesson ? handleEditLesson : handleAddLesson}
        className="w-full"
      >
        {editingLesson ? 'Update Lesson' : 'Add Lesson'}
      </Button>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Video Lessons ({lessons.length})</h3>
        <Sheet open={isAddingLesson} onOpenChange={setIsAddingLesson}>
          <SheetTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Lesson
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Lesson</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <LessonForm />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid gap-4">
        {lessons.map((lesson, index) => (
          <Card key={lesson.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Video className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                    <p className="text-sm text-gray-600">{lesson.description}</p>
                    <p className="text-xs text-gray-500 mt-1">Duration: {lesson.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Sheet open={editingLesson?.id === lesson.id} onOpenChange={(open) => !open && setEditingLesson(null)}>
                    <SheetTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(lesson)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Edit Lesson</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <LessonForm />
                      </div>
                    </SheetContent>
                  </Sheet>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteLesson(lesson.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {lessons.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="p-8 text-center">
              <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No lessons added yet</p>
              <p className="text-sm text-gray-500 mt-1">Click "Add Lesson" to create your first video lesson</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
