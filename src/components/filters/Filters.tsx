import React from 'react';
import { Branch, Year, Semester, Regulation } from '../../types';

interface FiltersProps {
  selectedBranch: Branch | '';
  selectedYear: Year | '';
  selectedSemester: Semester | '';
  selectedRegulation: Regulation | '';
  onFilterChange: (
    filter: 'branch' | 'year' | 'semester' | 'regulation',
    value: string
  ) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  selectedBranch,
  selectedYear,
  selectedSemester,
  selectedRegulation,
  onFilterChange,
}) => {
  const branches: Branch[] = ['CSE', 'CSM', 'ECE', 'EEE', 'CIVIL', 'MECHANICAL'];
  const years: Year[] = ['1st', '2nd', '3rd', '4th'];
  const semesters: Semester[] = ['1st', '2nd'];
  const regulations: Regulation[] = ['R22', 'R18', 'R16'];

  const selectClass = "px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white w-full sm:w-auto";

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <select
          value={selectedBranch}
          onChange={(e) => onFilterChange('branch', e.target.value)}
          className={selectClass}
        >
          <option value="">Select Branch</option>
          {branches.map((branch) => (
            <option key={branch} value={branch}>{branch}</option>
          ))}
        </select>

        <select
          value={selectedYear}
          onChange={(e) => onFilterChange('year', e.target.value)}
          className={selectClass}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year} Year</option>
          ))}
        </select>

        <select
          value={selectedSemester}
          onChange={(e) => onFilterChange('semester', e.target.value)}
          className={selectClass}
        >
          <option value="">Select Semester</option>
          {semesters.map((semester) => (
            <option key={semester} value={semester}>{semester} Semester</option>
          ))}
        </select>
      </div>

      <div className="w-full sm:w-auto">
        <select
          value={selectedRegulation}
          onChange={(e) => onFilterChange('regulation', e.target.value)}
          className={`${selectClass} bg-blue-600 hover:bg-blue-700 transition-colors`}
        >
          <option value="">Select Regulation</option>
          {regulations.map((regulation) => (
            <option key={regulation} value={regulation}>{regulation}</option>
          ))}
        </select>
      </div>
    </div>
  );
};