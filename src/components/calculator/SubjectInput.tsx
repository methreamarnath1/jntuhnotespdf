import React from 'react';

interface SubjectInputProps {
  credits: number;
  grade: number;
  onChange: (field: 'credits' | 'grade', value: string) => void;
}

export const SubjectInput: React.FC<SubjectInputProps> = ({ credits, grade, onChange }) => {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="number"
        placeholder="Credits"
        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
        value={credits || ''}
        onChange={(e) => onChange('credits', e.target.value)}
      />
      <select
        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
        value={grade}
        onChange={(e) => onChange('grade', e.target.value)}
      >
        <option value="10">O - 10</option>
        <option value="9">A+ - 9</option>
        <option value="8">A - 8</option>
        <option value="7">B+ - 7</option>
        <option value="6">B - 6</option>
        <option value="5">C - 5</option>
        <option value="0">F - 0</option>
      </select>
    </div>
  );
};