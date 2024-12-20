import React from 'react';
import { Download } from 'lucide-react';
import { Modal } from './Modal';
import { Note } from '../../types';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface PDFPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
  onPurchase: (note: Note) => void;
  isLoading?: boolean;
}

export const PDFPreviewModal: React.FC<PDFPreviewModalProps> = ({
  isOpen,
  onClose,
  note,
  onPurchase,
  isLoading = false,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={note.subject}>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="space-y-6 bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Replacing image with subject name */}
            <div className="w-full h-48 bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-white">{note.subject}</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-indigo-400">Details</h3>
                <dl className="mt-2 space-y-2">
                  <div>
                    <dt className="text-sm text-gray-400">Branch</dt>
                    <dd className="text-sm font-medium text-gray-200">{note.branch}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-400">Year & Semester</dt>
                    <dd className="text-sm font-medium text-gray-200">
                      {note.year} Year, {note.semester} Semester
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-400">Regulation</dt>
                    <dd className="text-sm font-medium text-gray-200">{note.regulation}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-400">Price</dt>
                    <dd className="text-xl font-bold text-green-400">₹{note.price}</dd>
                  </div>
                </dl>
              </div>
              <button
                onClick={() => onPurchase(note)}
                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all shadow-md"
              >
                <Download size={20} />
                Purchase Now
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-2">Description</h3>
            <p className="text-gray-300">{note.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-2">What's Included</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Complete subject notes</li>
              <li>Previous year questions</li>
              <li>Practice problems</li>
              <li>Important formulas and concepts</li>
            </ul>
          </div>
        </div>
      )}
    </Modal>
  );
};
