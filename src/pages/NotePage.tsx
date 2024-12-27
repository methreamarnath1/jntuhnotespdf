import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Note } from '../types';

export const NotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    // Fetch the note by ID from your backend or state management
    fetch(`/api/notes/${id}`)
      .then(response => response.json())
      .then(data => setNote(data))
      .catch(error => console.error('Error fetching note:', error));
  }, [id]);

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white">{note.subject}</h1>
      <p className="text-gray-400">{note.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
          {note.branch}
        </span>
        <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
          {note.year} Year
        </span>
        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full border border-purple-500/20">
          {note.regulation}
        </span>
      </div>
    </div>
  );
};