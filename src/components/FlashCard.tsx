
import { useState } from 'react';
import { RotateCcw, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface FlashCardData {
  id: string;
  german: string;
  english: string;
  audio?: string;
  example?: string;
}

interface FlashCardProps {
  cards: FlashCardData[];
  onComplete?: () => void;
}

const FlashCard = ({ cards, onComplete }: FlashCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<string>>(new Set());

  const currentCard = cards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else if (onComplete) {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const markAsStudied = (difficulty: 'easy' | 'medium' | 'hard') => {
    setStudiedCards(prev => new Set(prev).add(currentCard.id));
    handleNext();
  };

  const playAudio = () => {
    // In a real app, this would play the audio file
    console.log('Playing audio for:', currentCard.german);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Card {currentIndex + 1} of {cards.length}</span>
          <span>{studiedCards.size} studied</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Flash Card */}
      <div className="perspective-1000 mb-6">
        <Card
          className={`transition-transform duration-500 cursor-pointer hover:shadow-lg ${
            isFlipped ? 'transform rotateY-180' : ''
          }`}
          style={{ transformStyle: 'preserve-3d', minHeight: '300px' }}
          onClick={handleFlip}
        >
          <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center relative">
            {!isFlipped ? (
              // Front of card - German word
              <div className="space-y-4">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {currentCard.german}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio();
                  }}
                  className="mb-4"
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  Listen
                </Button>
                <p className="text-gray-500">Click to reveal translation</p>
              </div>
            ) : (
              // Back of card - English translation
              <div className="space-y-4">
                <div className="text-3xl font-bold text-green-600 mb-4">
                  {currentCard.english}
                </div>
                {currentCard.example && (
                  <div className="text-gray-600 italic">
                    <p className="text-sm mb-2">Example:</p>
                    <p>"{currentCard.example}"</p>
                  </div>
                )}
                <p className="text-gray-500">How well did you know this?</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        <Button
          variant="outline"
          onClick={() => {
            setCurrentIndex(0);
            setIsFlipped(false);
            setStudiedCards(new Set());
          }}
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Restart
        </Button>

        <Button
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1 && !isFlipped}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Difficulty Buttons (shown when card is flipped) */}
      {isFlipped && (
        <div className="grid grid-cols-3 gap-4">
          <Button
            variant="outline"
            className="border-red-300 text-red-600 hover:bg-red-50"
            onClick={() => markAsStudied('hard')}
          >
            😰 Hard
          </Button>
          <Button
            variant="outline"
            className="border-yellow-300 text-yellow-600 hover:bg-yellow-50"
            onClick={() => markAsStudied('medium')}
          >
            🤔 Medium
          </Button>
          <Button
            variant="outline"
            className="border-green-300 text-green-600 hover:bg-green-50"
            onClick={() => markAsStudied('easy')}
          >
            😊 Easy
          </Button>
        </div>
      )}
    </div>
  );
};

export default FlashCard;
