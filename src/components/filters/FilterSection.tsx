import React from 'react';
import { Branch, Year, Semester, Regulation } from '../../types';
import { SearchBar } from '../SearchBar';
import { Filters } from './Filters';

interface FilterSectionProps {
  searchTerm: string;
  selectedBranch: Branch | '';
  selectedYear: Year | '';
  selectedSemester: Semester | '';
  selectedRegulation: Regulation | '';
  onSearch: (term: string) => void;
  onFilterChange: (filter: 'branch' | 'year' | 'semester' | 'regulation', value: string) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  searchTerm,
  selectedBranch,
  selectedYear,
  selectedSemester,
  selectedRegulation,
  onSearch,
  onFilterChange,
}) => {
  return (
    <div className="space-y-6">
      <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
      <Filters
        selectedBranch={selectedBranch}
        selectedYear={selectedYear}
        selectedSemester={selectedSemester}
        selectedRegulation={selectedRegulation}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};