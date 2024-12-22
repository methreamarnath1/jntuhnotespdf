import React from 'react';
import { X, Download, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import { Note } from '../types';
import { LoadingSpinner } from './ui/LoadingSpinner';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
  onDownload: () => void;
  isDownloading: boolean;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  onClose,
  note,
  onDownload,
  isDownloading
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl max-w-2xl w-full m-4 border border-gray-700"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <BookOpen className="text-blue-400" />
            {note.subject}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <GraduationCap className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Branch</p>
                <p className="font-medium">{note.branch}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <Calendar className="text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Year & Semester</p>
                <p className="font-medium">{note.year} Year, {note.semester} Semester</p>
              </div>
            </div>

            <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
              <h3 className="text-blue-400 font-medium mb-2">Description</h3>
              <p className="text-gray-300 text-sm">{note.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg p-6 border border-indigo-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  Complete subject notes
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  Previous year questions
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  Important formulas
                </li>
              </ul>
            </div>

            <button
              onClick={onDownload}
              disabled={isDownloading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-lg flex items-center justify-center gap-3 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-blue-500/20"
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
      </div>
    </div>
  );
};