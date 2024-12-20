import React, { useState } from 'react';
import { Note } from '../types';
import { Download } from 'lucide-react';
import { PDFPreviewModal } from './modal/PDFPreviewModal';

interface NoteCardProps {
  note: Note;
  onBuyNow: (note: Note) => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onBuyNow }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105 border border-gray-700 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsModalOpen(true);
          }
        }}
      >
        {/* Replacing image with subject name */}
        <div className="w-full h-48 bg-dark-blue flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold">{note.subject}</h2>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-white">{note.subject}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-900 text-blue-100 text-xs rounded-full">
                {note.branch}
              </span>
              <span className="px-2 py-1 bg-green-900 text-green-100 text-xs rounded-full">
                {note.year} Year
              </span>
              <span className="px-2 py-1 bg-purple-900 text-purple-100 text-xs rounded-full">
                {note.regulation}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-400">{note.semester} Semester</p>
          <p className="text-sm text-gray-500 mt-2">{note.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-white">₹{note.price}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onBuyNow(note);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <Download size={20} />
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <PDFPreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        note={note}
        onPurchase={onBuyNow}
      />
    </>
  );
};
