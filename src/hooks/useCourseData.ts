import { useState, useEffect } from 'react';
import { Course } from '@/types/course';
import { firestore, collection } from '@/firebase';
import { getDocs, query, orderBy, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export const useCourseData = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const coursesCollection = collection(firestore, 'courses');
        const coursesQuery = query(coursesCollection, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(coursesQuery);
        
        const coursesData: Course[] = [];
        querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
          const data = doc.data();
          coursesData.push({
            id: doc.id,
            title: data.title || '',
            description: data.description || '',
            students: data.students || 0,
            lessons: data.lessons || 0,
            flashcards: data.flashcards || 0,
            exercises: data.exercises || 0,
            status: data.status || 'draft',
            lastUpdated: data.lastUpdated || 'Just now',
            createdAt: data.createdAt?.toDate() || new Date(),
            // Optional fields
            completion: data.completion,
            rating: data.rating
          });
        });
        
        setCourses(coursesData);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
};
