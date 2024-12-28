import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Note } from '../types';
import { Head } from '../components/SEO/Head';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { NoteCard } from '../components/NoteCard'; // Import NoteCard
import { AdUnit } from '../components/AdUnit';

export const NotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Note | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        setIsLoading(true);
        // Fetch notes data from the local JSON file in the public directory
        const response = await fetch('/notes.json');
        const notes: Note[] = await response.json();
        
        // Find the note with the matching ID
        const foundNote = notes.find((n) => n.id === id);
        
        if (foundNote) {
          setNote(foundNote);
        } else {
          setError('Note not found');
        }
      } catch (err) {
        setError('Failed to load note');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !note) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">{error || 'Note not found'}</h2>
          <p className="text-gray-400">The note you're looking for might have been removed or doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Head 
        title={`${note.subject} - JNTUH Notes PDF`}
        description={`Download ${note.subject} notes for ${note.branch} - ${note.regulation}`}
      />

      <AdUnit slot="2468013579" />

      <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
        {/* Use NoteCard to display the note */}
        <NoteCard note={note} />
      </div>

      <AdUnit slot="3579246801" format="horizontal" />
    </div>
  );
};