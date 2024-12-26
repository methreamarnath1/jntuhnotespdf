import React, { useState, useEffect } from 'react';
import { Eye, Bookmark } from 'lucide-react';
import { Note } from '../types';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { PreviewModal } from './PreviewModal';
import { UnitModal } from './UnitModal';

interface NoteCardProps {
  note: Note;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [showUnits, setShowUnits] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes') || '[]');
    if (savedNotes.some((savedNote: Note) => savedNote.subject === note.subject)) {
      setIsSaved(true);
    }
  }, [note]);

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes') || '[]');
    if (!isSaved) {
      localStorage.setItem('savedNotes', JSON.stringify([...savedNotes, note]));
      setIsSaved(true);
    } else {
      const newSavedNotes = savedNotes.filter((savedNote: Note) => savedNote.subject !== note.subject);
      localStorage.setItem('savedNotes', JSON.stringify(newSavedNotes));
      setIsSaved(false);
    }
  };

  const handleViewUnits = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => {
      setShowUnits(true);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <div 
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 border border-gray-700 cursor-pointer"
        onClick={() => setShowPreview(true)}
      >
        <div className="w-full h-48 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <h2 className="text-white text-2xl font-bold text-center relative z-10 line-clamp-3">{note.subject}</h2>
          <button
            className="absolute top-4 right-4 text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-all duration-300"
            onClick={handleSave}
          >
            <Bookmark size={20} fill={isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
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
          
          <p className="text-gray-300 text-sm mb-6 line-clamp-3">{note.description}</p>
          
          <button
            onClick={handleViewUnits}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-blue-500/20"
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <Eye size={20} />
                View Notes
              </>
            )}
          </button>
        </div>
      </div>

      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        note={note}
      />

      <UnitModal
        isOpen={showUnits}
        onClose={() => setShowUnits(false)}
        note={note}
      />
    </>
  );
};