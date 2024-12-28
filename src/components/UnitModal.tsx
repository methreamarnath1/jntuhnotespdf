import React, { useState } from 'react';
import { X, Book } from 'lucide-react';
import { Note } from '../types';
import { AdModal } from './AdModal'; // Import the AdModal component

interface UnitModalProps {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
}

export const UnitModal: React.FC<UnitModalProps> = ({ isOpen, onClose, note }) => {
  const [isAdOpen, setIsAdOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const units = [
    { id: '1', title: 'Unit 1', pdfUrl: note.unit1, description: 'Introduction and Fundamentals' },
    { id: '2', title: 'Unit 2', pdfUrl: note.unit2, description: 'Core Concepts and Principles' },
    { id: '3', title: 'Unit 3', pdfUrl: note.unit3, description: 'Advanced Topics' },
    { id: '4', title: 'Unit 4', pdfUrl: note.unit4, description: 'Applications and Case Studies' },
    { id: '5', title: 'Unit 5', pdfUrl: note.unit5, description: 'Modern Trends and Future Scope' }
  ].filter(unit => unit.pdfUrl);

  if (!isOpen) return null;

  const handleUnitClick = (url: string) => {
    setPdfUrl(url);
    setIsAdOpen(true);
  };

  const handleAdClose = () => {
    setIsAdOpen(false);
  };

  const handleAdComplete = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
    setIsAdOpen(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl max-w-2xl w-full m-4 border border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">{note.subject} - Units</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {units.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {units.map((unit) => (
                <div
                  key={unit.id}
                  onClick={() => handleUnitClick(unit.pdfUrl)}
                  className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                      <Book size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {unit.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {unit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">
              No units available for this subject yet.
            </div>
          )}
        </div>
      </div>

      {/* Ad Modal */}
      <AdModal isOpen={isAdOpen} onClose={handleAdClose} onComplete={handleAdComplete} />
    </>
  );
};