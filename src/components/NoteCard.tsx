import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Note } from '../types';
import { downloadNote } from '../utils/download';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { PreviewModal } from './PreviewModal';

interface NoteCardProps {
  note: Note;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      await downloadNote(note);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
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
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
            disabled={isDownloading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-blue-500/20"
          >
            {isDownloading ? (
              <LoadingSpinner />
            ) : (
              <>
                <Download size={20} />
                Download PDF
              </>
            )}
          </button>
        </div>
      </div>

      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        note={note}
        onDownload={handleDownload}
        isDownloading={isDownloading}
      />
    </>
  );
};