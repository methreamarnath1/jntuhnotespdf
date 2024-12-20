import React from 'react';
import { Branch, Year, Semester } from '../../types';
import { SearchBar } from '../SearchBar';
import { Filters } from '../Filters';

interface FilterSectionProps {
  searchTerm: string;
  selectedBranch: Branch | '';
  selectedYear: Year | '';
  selectedSemester: Semester | '';
  onSearch: (term: string) => void;
  onFilterChange: (filter: 'branch' | 'year' | 'semester', value: string) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  searchTerm,
  selectedBranch,
  selectedYear,
  selectedSemester,
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
        onFilterChange={onFilterChange}
      />
    </div>
  );
};