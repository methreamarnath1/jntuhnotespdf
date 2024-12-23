import React from 'react';
import { X, BookOpen, GraduationCap, Calendar, FileText } from 'lucide-react';
import { Note } from '../types';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  onClose,
  note,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 border border-gray-700"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3 animate-slide-in">
            <BookOpen className="text-blue-400" />
            {note.subject}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close Preview"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Information Section */}
          <div className="space-y-6">
            {/* Branch */}
            <div className="flex items-center gap-3 text-gray-300 animate-fade-in">
              <GraduationCap className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Branch</p>
                <p className="font-medium">{note.branch}</p>
              </div>
            </div>

            {/* Year & Semester */}
            <div className="flex items-center gap-3 text-gray-300 animate-fade-in delay-100">
              <Calendar className="text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Year & Semester</p>
                <p className="font-medium">{note.year} Year, {note.semester} Semester</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-blue-500/10 rounded-lg p-5 border border-blue-500/20 animate-fade-in delay-200">
              <h3 className="text-blue-400 font-medium mb-2">Description</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {note.description}
              </p>
            </div>
          </div>

          {/* Included Items Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 border border-blue-500/20 animate-fade-in delay-300">
              <h3 className="text-xl font-semibold text-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <FileText className="text-blue-400" size={20} />
                  Complete subject notes
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <FileText className="text-blue-400" size={20} />
                  Previous year questions
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <FileText className="text-blue-400" size={20} />
                  Important formulas
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center lg:justify-end mt-8">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all animate-bounce-once"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
