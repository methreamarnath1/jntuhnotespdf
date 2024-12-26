import React from 'react';
import { Plus, Calculator, RefreshCw } from 'lucide-react';
import { Subject } from '../../types';
import { SubjectInput } from './SubjectInput';

interface SGPACalculatorProps {
  subjects: Subject[];
  onAddSubject: () => void;
  onRemoveSubject: (index: number) => void;
  onSubjectChange: (index: number, field: keyof Subject, value: string) => void;
  onCalculate: () => void;
  onReset: () => void;
  sgpa: number | null;
  percentage: number | null;
}

export const SGPACalculator: React.FC<SGPACalculatorProps> = ({
  subjects,
  onAddSubject,
  onRemoveSubject,
  onSubjectChange,
  onCalculate,
  onReset,
  sgpa,
  percentage
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-white">SGPA Calculator</h2>
      <p className="text-gray-400 mb-4">Calculate your SGPA based on credits and expected grade.</p>
      
      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <div key={index} className="flex items-center gap-4">
            <SubjectInput
              credits={subject.credits}
              grade={subject.grade}
              onChange={(field, value) => onSubjectChange(index, field as keyof Subject, value)}
            />
            {index > 0 && (
              <button
                onClick={() => onRemoveSubject(index)}
                className="text-red-400 hover:text-red-300"
              >
                &times;
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6 gap-4">
        <button 
          onClick={onAddSubject}
          className="btn bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-flex items-center"
        >
          <Plus className="mr-2" /> Add Subject
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

      {sgpa !== null && percentage !== null && (
        <div className="mt-6 text-white">
          <p>Your SGPA: {sgpa.toFixed(2)}</p>
          <p>Percentage: {percentage.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};