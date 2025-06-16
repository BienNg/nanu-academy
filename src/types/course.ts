
export interface Course {
  id: string;
  title: string;
  description: string;
  students: number;
  lessons: number;
  flashcards: number;
  exercises: number;
  status: 'published' | 'draft';
  lastUpdated: string;
  completion?: number;
  rating?: number;
  createdAt?: Date;
}
