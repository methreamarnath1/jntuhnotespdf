import React from 'react';
import { Branch, Year, Semester } from '../types';

interface FiltersProps {
  selectedBranch: Branch | '';
  selectedYear: Year | '';
  selectedSemester: Semester | '';
  selectedRegulation: string | ''; // Added regulation state
  onFilterChange: (filter: 'branch' | 'year' | 'semester' | 'regulation', value: string) => void; // Added regulation to onFilterChange
}

export const Filters: React.FC<FiltersProps> = ({
  selectedBranch,
  selectedYear,
  selectedSemester,
  selectedRegulation, // Added regulation prop
  onFilterChange,
}) => {
  const branches: Branch[] = ['CSE', 'CSM','ECE', 'EEE', 'CIVIL', 'MECHANICAL'];
  const years: Year[] = ['1st', '2nd', '3rd', '4th'];
  const semesters: Semester[] = ['1st', '2nd'];
  const regulations: string[] = ['R22', 'R18', 'R16']; // Added available regulations

  const selectClass = "px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white w-full sm:w-auto";

  return (
    <div className="flex flex-wrap gap-4 justify-between">
      {/* Branch Filter */}
      <div className="w-full sm:w-auto">
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
      </div>

      {/* Year Filter */}
      <div className="w-full sm:w-auto">
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
      </div>

      {/* Semester Filter */}
      <div className="w-full sm:w-auto">
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

      {/* Regulation Filter */}
      <div className="w-full sm:w-auto">
        <select
          value={selectedRegulation}
          onChange={(e) => onFilterChange('regulation', e.target.value)} // Added regulation filter
          className={selectClass}
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
