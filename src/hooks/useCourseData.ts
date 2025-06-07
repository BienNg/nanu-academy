
import { useState } from 'react';
import { Course } from '@/types/course';

export const useCourseData = () => {
  const [courses] = useState<Course[]>([
    {
      id: '1',
      title: 'German Basics',
      description: 'Learn fundamental German vocabulary and grammar',
      students: 1234,
      lessons: 24,
      flashcards: 156,
      exercises: 48,
      status: 'published',
      lastUpdated: '2 days ago',
      completion: 85,
      rating: 4.8
    },
    {
      id: '2',
      title: 'Spanish Conversations',
      description: 'Practice everyday Spanish conversations',
      students: 892,
      lessons: 18,
      flashcards: 124,
      exercises: 32,
      status: 'published',
      lastUpdated: '1 week ago',
      completion: 92,
      rating: 4.9
    },
    {
      id: '3',
      title: 'French Grammar Mastery',
      description: 'Master complex French grammar rules',
      students: 567,
      lessons: 32,
      flashcards: 203,
      exercises: 67,
      status: 'draft',
      lastUpdated: '3 days ago',
      completion: 45,
      rating: 4.6
    },
    {
      id: '4',
      title: 'Italian Culture & Language',
      description: 'Explore Italian culture through language learning',
      students: 345,
      lessons: 16,
      flashcards: 89,
      exercises: 28,
      status: 'published',
      lastUpdated: '5 days ago',
      completion: 78,
      rating: 4.7
    }
  ]);

  return { courses };
};
