import { useState, useCallback, useMemo } from 'react';
import { Note } from '../types';
import debounce from 'lodash/debounce';

export const useSearch = (notes: Note[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setSearchTerm(term);
      setIsSearching(false);
    }, 300),
    []
  );

  const handleSearch = useCallback((term: string) => {
    setIsSearching(true);
    debouncedSearch(term);
  }, [debouncedSearch]);

  const searchResults = useMemo(() => {
    if (!searchTerm) return notes;

    const searchLower = searchTerm.toLowerCase();
    return notes.filter((note) => {
      return (
        note.subject.toLowerCase().includes(searchLower) ||
        note.branch.toLowerCase().includes(searchLower) ||
        note.regulation.toLowerCase().includes(searchLower)
      );
    });
  }, [notes, searchTerm]);

  return {
    searchTerm,
    isSearching,
    searchResults,
    handleSearch
  };
};