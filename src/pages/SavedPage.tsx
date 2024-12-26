import React, { useState, useEffect } from 'react';
import { Head } from '../components/SEO/Head';
import { NoteCard } from '../components/NoteCard';
import { Note } from '../types';

export const SavedPage: React.FC = () => {
  const [savedNotes, setSavedNotes] = useState<Note[]>([]);
  const [savedCourses, setSavedCourses] = useState<any[]>([]);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('savedNotes') || '[]');
    const courses = JSON.parse(localStorage.getItem('savedCourses') || '[]');
    setSavedNotes(notes);
    setSavedCourses(courses);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Head 
        title="Saved Items - JNTUH Notes PDF"
        description="View your saved notes and courses"
      />
      
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Saved Items</h1>
      
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white">Saved Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">Saved Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedCourses.map((course, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">{course.title}</h3>
              <p className="text-gray-400">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};