
import { useState } from 'react';
import { Plus, Brain, Trash2, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Exercise {
  id: string;
  type: 'multiple-choice' | 'type-answer' | 'der-die-das';
  question: string;
  correctAnswer: string;
  options?: string[];
  category: string;
}

interface ExerciseBuilderProps {
  exercises: Exercise[];
  setExercises: (exercises: Exercise[]) => void;
}

export const ExerciseBuilder = ({ exercises, setExercises }: ExerciseBuilderProps) => {
  const [isAddingExercise, setIsAddingExercise] = useState(false);
  const [editingExercise, setEditingExercise] = useState<Exercise | null>(null);
  const [formData, setFormData] = useState({
    type: 'multiple-choice' as Exercise['type'],
    question: '',
    correctAnswer: '',
    options: ['', '', '', ''],
    category: ''
  });

  const handleAddExercise = () => {
    const newExercise: Exercise = {
      id: Date.now().toString(),
      type: formData.type,
      question: formData.question,
      correctAnswer: formData.correctAnswer,
      options: formData.type === 'multiple-choice' ? formData.options.filter(opt => opt.trim()) : undefined,
      category: formData.category
    };
    setExercises([...exercises, newExercise]);
    setFormData({ type: 'multiple-choice', question: '', correctAnswer: '', options: ['', '', '', ''], category: '' });
    setIsAddingExercise(false);
  };

  const handleEditExercise = () => {
    if (!editingExercise) return;
    const updatedExercises = exercises.map(exercise =>
      exercise.id === editingExercise.id
        ? { ...exercise, ...formData, options: formData.type === 'multiple-choice' ? formData.options : undefined }
        : exercise
    );
    setExercises(updatedExercises);
    setEditingExercise(null);
    setFormData({ type: 'multiple-choice', question: '', correctAnswer: '', options: ['', '', '', ''], category: '' });
  };

  const handleDeleteExercise = (id: string) => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
  };

  const openEditDialog = (exercise: Exercise) => {
    setEditingExercise(exercise);
    setFormData({
      type: exercise.type,
      question: exercise.question,
      correctAnswer: exercise.correctAnswer,
      options: exercise.options || ['', '', '', ''],
      category: exercise.category
    });
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData({ ...formData, options: newOptions });
  };

  const ExerciseForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Exercise Type
        </label>
        <Select
          value={formData.type}
          onValueChange={(value: Exercise['type']) => setFormData({ ...formData, type: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select exercise type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
            <SelectItem value="type-answer">Type Answer</SelectItem>
            <SelectItem value="der-die-das">Der/Die/Das Quiz</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Question
        </label>
        <Textarea
          value={formData.question}
          onChange={(e) => setFormData({ ...formData, question: e.target.value })}
          placeholder="What is the German word for 'house'?"
          className="h-20"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Correct Answer
        </label>
        <Input
          value={formData.correctAnswer}
          onChange={(e) => setFormData({ ...formData, correctAnswer: e.target.value })}
          placeholder="das Haus"
        />
      </div>

      {formData.type === 'multiple-choice' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Answer Options
          </label>
          <div className="space-y-2">
            {formData.options.map((option, index) => (
              <Input
                key={index}
                value={option}
                onChange={(e) => updateOption(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <Input
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          placeholder="Vocabulary, Grammar, etc."
        />
      </div>

      <Button 
        onClick={editingExercise ? handleEditExercise : handleAddExercise}
        className="w-full"
      >
        {editingExercise ? 'Update Exercise' : 'Add Exercise'}
      </Button>
    </div>
  );

  const getExerciseTypeLabel = (type: Exercise['type']) => {
    switch (type) {
      case 'multiple-choice': return 'Multiple Choice';
      case 'type-answer': return 'Type Answer';
      case 'der-die-das': return 'Der/Die/Das Quiz';
      default: return type;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Exercises ({exercises.length})</h3>
        <Sheet open={isAddingExercise} onOpenChange={setIsAddingExercise}>
          <SheetTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Exercise
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Exercise</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <ExerciseForm />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid gap-4">
        {exercises.map((exercise) => (
          <Card key={exercise.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Brain className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{exercise.question}</h4>
                    <p className="text-sm text-gray-600">Answer: {exercise.correctAnswer}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                        {getExerciseTypeLabel(exercise.type)}
                      </span>
                      {exercise.category && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {exercise.category}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Sheet open={editingExercise?.id === exercise.id} onOpenChange={(open) => !open && setEditingExercise(null)}>
                    <SheetTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(exercise)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Edit Exercise</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <ExerciseForm />
                      </div>
                    </SheetContent>
                  </Sheet>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteExercise(exercise.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {exercises.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="p-8 text-center">
              <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No exercises added yet</p>
              <p className="text-sm text-gray-500 mt-1">Click "Add Exercise" to create your first exercise</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
