import React from 'react';
import { Note } from '../../types';
import { NoteCard } from '../NoteCard';
import { AdUnit } from '../AdUnit';

interface NoteGridProps {
  notes: Note[];
  onBuyNow: (note: Note) => void;
}

export const NoteGrid: React.FC<NoteGridProps> = ({ notes, onBuyNow }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note, index) => (
          <React.Fragment key={note.id}>
            <NoteCard note={note} onBuyNow={onBuyNow} />
            {/* Insert ad unit after every 6th card */}
            {(index + 1) % 6 === 0 && (
              <div className="col-span-full">
                <AdUnit slot="1234567890" /> {/* Replace with your actual ad slot ID */}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Bottom ad unit */}
      <AdUnit slot="9876543210" format="horizontal" /> {/* Replace with your actual ad slot ID */}
    </div>
  );
};