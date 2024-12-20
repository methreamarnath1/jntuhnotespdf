import React from 'react';
import { Note } from '../../types';
import { NoteCard } from '../NoteCard';

interface NoteGridProps {
  notes: Note[];
  onBuyNow: (note: Note) => void;
}

export const NoteGrid: React.FC<NoteGridProps> = ({ notes, onBuyNow }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onBuyNow={onBuyNow} />
      ))}
    </div>
  );
};