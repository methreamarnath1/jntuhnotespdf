import React, { useState, useEffect } from 'react';
import { Head } from '../components/SEO/Head';
import { NoteCard } from '../components/NoteCard';
import { CourseCard } from '../components/courses/CourseCard';
import { Note, Course } from '../types';
import { courseData } from '../data/courseData';
import { AdUnit } from '../components/AdUnit';

export const SavedPage: React.FC = () => {
  const [savedNotes, setSavedNotes] = useState<Note[]>([]);
  const [savedCourses, setSavedCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Load saved notes
    const notes = JSON.parse(localStorage.getItem('savedNotes') || '[]');
    setSavedNotes(notes);

    // Load saved courses
    const savedCourseTitles = JSON.parse(localStorage.getItem('savedCourses') || '[]');
    const courses = courseData.filter(course => 
      savedCourseTitles.includes(course.title)
    );
    setSavedCourses(courses);
  }, []);

  const handleUnsaveCourse = (courseTitle: string) => {
    const savedCourseTitles = JSON.parse(localStorage.getItem('savedCourses') || '[]');
    const newSavedTitles = savedCourseTitles.filter((title: string) => title !== courseTitle);
    localStorage.setItem('savedCourses', JSON.stringify(newSavedTitles));
    
    setSavedCourses(prev => prev.filter(course => course.title !== courseTitle));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Head 
        title="Saved Items - JNTUH Notes PDF"
        description="View your saved notes and courses"
      />
      
      {/* Top Ad */}
      <AdUnit slot="2468013579" />
      
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Saved Items</h1>
      
      {/* Saved Notes Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Saved Notes</h2>
        {savedNotes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center py-8">No saved notes yet</p>
        )}
      </div>

      {/* Middle Ad */}
      <div className="my-8">
        <AdUnit slot="1357924680" />
      </div>
      
      {/* Saved Courses Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-white">Saved Courses</h2>
        {savedCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedCourses.map((course) => (
              <CourseCard
                key={course.title}
                title={course.title}
                description={course.text}
                link={course.link}
                imgSrc={course.imgSrc}
                isSaved={true}
                onSave={() => handleUnsaveCourse(course.title)}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center py-8">No saved courses yet</p>
        )}
      </div>

      {/* Bottom Ad */}
      <div className="mt-12">
        <AdUnit slot="3579246801" format="horizontal" />
      </div>
    </div>
  );
};