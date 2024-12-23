import React from 'react';
import { X, Book } from 'lucide-react';
import { Note } from '../types';
import { PDFViewer } from './PDFViewer';

interface UnitModalProps {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
}

const UNITS = [
  {
    id: '1',
    title: 'Unit 1',
    description: 'Introduction and Fundamentals',
    pdfUrl: 'https://drive.google.com/file/d/15V1HGZwFiydSIYp5Aa3FLwOb5Cyks6gm/view?usp=sharing'
  },
  {
    id: '2',
    title: 'Unit 2',
    description: 'Core Concepts and Principles',
    pdfUrl: 'https://drive.google.com/file/d/15V1HGZwFiydSIYp5Aa3FLwOb5Cyks6gm/view?usp=sharing'
  },
  {
    id: '3',
    title: 'Unit 3',
    description: 'Advanced Topics',
    pdfUrl: 'https://drive.google.com/file/d/15V1HGZwFiydSIYp5Aa3FLwOb5Cyks6gm/view?usp=sharing'
  },
  {
    id: '4',
    title: 'Unit 4',
    description: 'Applications and Case Studies',
    pdfUrl: 'https://drive.google.com/file/d/15V1HGZwFiydSIYp5Aa3FLwOb5Cyks6gm/view?usp=sharing'
  },
  {
    id: '5',
    title: 'Unit 5',
    description: 'Modern Trends and Future Scope',
    pdfUrl: 'https://drive.google.com/file/d/15V1HGZwFiydSIYp5Aa3FLwOb5Cyks6gm/view?usp=sharing'
  }
];

export const UnitModal: React.FC<UnitModalProps> = ({ isOpen, onClose, note }) => {
  const [selectedUnit, setSelectedUnit] = React.useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl max-w-2xl w-full m-4 border border-gray-700">
        {selectedUnit ? (
          <PDFViewer
            url={UNITS.find(u => u.id === selectedUnit)?.pdfUrl || ''}
            onClose={() => setSelectedUnit(null)}
          />
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">{note.subject} - Units</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {UNITS.map((unit) => (
                <div
                  key={unit.id}
                  onClick={() => setSelectedUnit(unit.id)}
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

            {/* Ad Section */}
            <div className="mt-6 bg-gradient-to-r from-gray-700/30 to-gray-800/30 p-4 rounded-lg border border-blue-500/10">
              <div className="h-20 flex items-center justify-center text-gray-500">
                Advertisement
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};