import React from 'react';
import { Plus, Calculator, RefreshCw } from 'lucide-react';
import { Semester } from '../../types';

interface CGPACalculatorProps {
  semesters: Semester[];
  onAddSemester: () => void;
  onSemesterChange: (index: number, field: keyof Semester, value: string) => void;
  onCalculate: () => void;
  onReset: () => void;
  cgpa: number | null;
}

export const CGPACalculator: React.FC<CGPACalculatorProps> = ({
  semesters,
  onAddSemester,
  onSemesterChange,
  onCalculate,
  onReset,
  cgpa
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-white">CGPA Calculator</h2>
      <p className="text-gray-400 mb-4">Calculate your CGPA based on semester SGPA and credits.</p>

      <div className="space-y-4">
        {semesters.map((semester, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-1">SGPA</label>
              <input
                type="number"
                className="w-full bg-gray-800 text-white border border-blue-500 rounded-lg p-2"
                placeholder="SGPA"
                value={semester.sgpa || ''}
                onChange={(e) => onSemesterChange(index, 'sgpa', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Credits</label>
              <input
                type="number"
                className="w-full bg-gray-800 text-white border border-blue-500 rounded-lg p-2"
                placeholder="Credits"
                value={semester.credits || ''}
                onChange={(e) => onSemesterChange(index, 'credits', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6 gap-4">
        <button 
          onClick={onAddSemester}
          className="btn bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-flex items-center"
        >
          <Plus className="mr-2" /> Add Semester
        </button>
        <button 
          onClick={onCalculate}
          className="btn bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-flex items-center"
        >
          <Calculator className="mr-2" /> Calculate
        </button>
        <button 
          onClick={onReset}
          className="btn bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-flex items-center"
        >
          <RefreshCw className="mr-2" /> Reset
        </button>
      </div>

      {cgpa !== null && (
        <div className="mt-6 text-white">
          <p>Your CGPA: {cgpa.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};