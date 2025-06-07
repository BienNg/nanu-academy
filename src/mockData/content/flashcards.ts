import { vocabulary } from './vocabulary';

// Extract flashcard data from vocabulary
const vocabularyFlashcards = Object.values(vocabulary).map(vocab => ({
  id: vocab.word_id,
  german: vocab.german,
  english: vocab.vietnamese,
  example: `Example sentence with ${vocab.german}`
}));

// Additional flashcards
const additionalFlashcards = [
  { id: 'f1', german: 'Hallo', english: 'Hello', example: 'Hallo, wie geht es dir?' },
  { id: 'f2', german: 'Danke', english: 'Thank you', example: 'Danke für deine Hilfe!' },
  { id: 'f3', german: 'Bitte', english: 'Please/You\'re welcome', example: 'Bitte schön!' },
  { id: 'f4', german: 'Entschuldigung', english: 'Excuse me', example: 'Entschuldigung, wo ist der Bahnhof?' },
  { id: 'f5', german: 'Guten Tag', english: 'Good day', example: 'Guten Tag, Herr Schmidt!' },
  { id: 'f6', german: 'Auf Wiedersehen', english: 'Goodbye', example: 'Auf Wiedersehen, bis morgen!' }
];

export const flashcards = [...vocabularyFlashcards, ...additionalFlashcards];

export type Flashcard = typeof flashcards[number];

// Group flashcards by category for easier access
export const flashcardsByCategory = {
  greetings: additionalFlashcards.filter(card => 
    ['Hallo', 'Guten Tag', 'Auf Wiedersehen'].includes(card.german)
  ),
  commonPhrases: additionalFlashcards.filter(card => 
    ['Danke', 'Bitte', 'Entschuldigung'].includes(card.german)
  ),
  numbers: vocabularyFlashcards.filter(card => 
    card.id.startsWith('vocab_01') || card.id.startsWith('vocab_02')
  )
};
