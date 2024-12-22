import { useState, useMemo } from 'react';
import { Note, Branch, Year, Semester, Regulation } from '../types';
import { notes as allNotes } from '../data/notes';

const ITEMS_PER_PAGE = 12;

export const useNotes = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<Branch | ''>('');
  const [selectedYear, setSelectedYear] = useState<Year | ''>('');
  const [selectedSemester, setSelectedSemester] = useState<Semester | ''>('');
  const [selectedRegulation, setSelectedRegulation] = useState<Regulation | ''>('');

  const filteredNotes = useMemo(() => {
    return allNotes.filter((note) => {
      const matchesSearch = note.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          note.branch.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBranch = !selectedBranch || note.branch === selectedBranch;
      const matchesYear = !selectedYear || note.year === selectedYear;
      const matchesSemester = !selectedSemester || note.semester === selectedSemester;
      const matchesRegulation = !selectedRegulation || note.regulation === selectedRegulation;

      return matchesSearch && matchesBranch && matchesYear && matchesSemester && matchesRegulation;
    });
  }, [searchTerm, selectedBranch, selectedYear, selectedSemester, selectedRegulation]);

  const paginatedNotes = useMemo(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return filteredNotes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredNotes, page]);

  const totalPages = Math.ceil(filteredNotes.length / ITEMS_PER_PAGE);

  const handleFilterChange = (filter: 'branch' | 'year' | 'semester' | 'regulation', value: string) => {
    setPage(1); // Reset to first page when filter changes
    switch (filter) {
      case 'branch':
        setSelectedBranch(value as Branch | '');
        break;
      case 'year':
        setSelectedYear(value as Year | '');
        break;
      case 'semester':
        setSelectedSemester(value as Semester | '');
        break;
      case 'regulation':
        setSelectedRegulation(value as Regulation | '');
        break;
    }
  };

  return {
    notes: paginatedNotes,
    totalPages,
    currentPage: page,
    setPage,
    searchTerm,
    setSearchTerm,
    selectedBranch,
    selectedYear,
    selectedSemester,
    selectedRegulation,
    handleFilterChange,
  };
};