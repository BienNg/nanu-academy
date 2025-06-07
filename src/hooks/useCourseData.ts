import { useState } from 'react';
import { Course } from '@/types/course';

export const useCourseData = () => {
  const [courses] = useState<Course[]>([
    {
      id: 'a1-1',
      title: 'German A1.1',
      description: 'Start your German journey with essential vocabulary, basic greetings, and fundamental grammar concepts. Perfect for absolute beginners.',
      students: 234,
      lessons: 20,
      flashcards: 200,
      exercises: 100,
      status: 'published',
      lastUpdated: '2 days ago',
      completion: 100,
      rating: 4.8
    },
    {
      id: 'a1-2',
      title: 'German A1.2',
      description: 'Build on your basic German skills with expanded vocabulary, daily conversations, and essential grammar patterns.',
      students: 156,
      lessons: 20,
      flashcards: 250,
      exercises: 120,
      status: 'published',
      lastUpdated: '1 week ago',
      completion: 100,
      rating: 4.7
    },
    {
      id: 'b1-1',
      title: 'German B1.1',
      description: 'Advance your German proficiency with complex grammar structures, business vocabulary, and intermediate conversation skills.',
      students: 89,
      lessons: 20,
      flashcards: 300,
      exercises: 150,
      status: 'draft',
      lastUpdated: '1 day ago',
      completion: 45,
      rating: 0
    },
    {
      id: 'b1-2',
      title: 'German B1.2',
      description: 'Master advanced German concepts with focus on fluency, professional communication, and cultural understanding.',
      students: 0,
      lessons: 20,
      flashcards: 280,
      exercises: 140,
      status: 'draft',
      lastUpdated: 'Just now',
      completion: 15,
      rating: 0
    }
  ]);

  return { courses };
};
