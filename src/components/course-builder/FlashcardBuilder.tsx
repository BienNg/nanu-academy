
import { useState } from 'react';
import { Plus, BookOpen, Trash2, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface Flashcard {
  id: string;
  german: string;
  english: string;
  pronunciation: string;
  example: string;
  category: string;
}

interface FlashcardBuilderProps {
  flashcards: Flashcard[];
  setFlashcards: (flashcards: Flashcard[]) => void;
}

export const FlashcardBuilder = ({ flashcards, setFlashcards }: FlashcardBuilderProps) => {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [editingCard, setEditingCard] = useState<Flashcard | null>(null);
  const [formData, setFormData] = useState({
    german: '',
    english: '',
    pronunciation: '',
    example: '',
    category: ''
  });

  const handleAddFlashcard = () => {
    const newCard: Flashcard = {
      id: Date.now().toString(),
      ...formData
    };
    setFlashcards([...flashcards, newCard]);
    setFormData({ german: '', english: '', pronunciation: '', example: '', category: '' });
    setIsAddingCard(false);
  };

  const handleEditFlashcard = () => {
    if (!editingCard) return;
    const updatedCards = flashcards.map(card =>
      card.id === editingCard.id ? { ...card, ...formData } : card
    );
    setFlashcards(updatedCards);
    setEditingCard(null);
    setFormData({ german: '', english: '', pronunciation: '', example: '', category: '' });
  };

  const handleDeleteFlashcard = (id: string) => {
    setFlashcards(flashcards.filter(card => card.id !== id));
  };

  const openEditDialog = (card: Flashcard) => {
    setEditingCard(card);
    setFormData({
      german: card.german,
      english: card.english,
      pronunciation: card.pronunciation,
      example: card.example,
      category: card.category
    });
  };

  const FlashcardForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          German Word
        </label>
        <Input
          value={formData.german}
          onChange={(e) => setFormData({ ...formData, german: e.target.value })}
          placeholder="das Haus"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          English Translation
        </label>
        <Input
          value={formData.english}
          onChange={(e) => setFormData({ ...formData, english: e.target.value })}
          placeholder="the house"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pronunciation
        </label>
        <Input
          value={formData.pronunciation}
          onChange={(e) => setFormData({ ...formData, pronunciation: e.target.value })}
          placeholder="[das haʊs]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Example Sentence
        </label>
        <Textarea
          value={formData.example}
          onChange={(e) => setFormData({ ...formData, example: e.target.value })}
          placeholder="Das Haus ist groß."
          className="h-20"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <Input
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          placeholder="Nouns, Verbs, Adjectives..."
        />
      </div>
      <Button 
        onClick={editingCard ? handleEditFlashcard : handleAddFlashcard}
        className="w-full"
      >
        {editingCard ? 'Update Flashcard' : 'Add Flashcard'}
      </Button>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Flashcards ({flashcards.length})</h3>
        <Sheet open={isAddingCard} onOpenChange={setIsAddingCard}>
          <SheetTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Flashcard
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Flashcard</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FlashcardForm />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid gap-4">
        {flashcards.map((card) => (
          <Card key={card.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{card.german}</h4>
                    <p className="text-sm text-gray-600">{card.english}</p>
                    <p className="text-xs text-gray-500 mt-1">{card.pronunciation}</p>
                    {card.category && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-2">
                        {card.category}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Sheet open={editingCard?.id === card.id} onOpenChange={(open) => !open && setEditingCard(null)}>
                    <SheetTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(card)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Edit Flashcard</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <FlashcardForm />
                      </div>
                    </SheetContent>
                  </Sheet>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteFlashcard(card.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {flashcards.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="p-8 text-center">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No flashcards added yet</p>
              <p className="text-sm text-gray-500 mt-1">Click "Add Flashcard" to create your first vocabulary card</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
