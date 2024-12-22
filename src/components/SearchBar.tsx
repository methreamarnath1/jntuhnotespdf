import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
  isSearching?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  onSearch,
  isSearching = false 
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search subjects, branches..."
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
      />
      <Search 
        className={`absolute left-3 top-2.5 text-gray-400 ${isSearching ? 'animate-spin' : ''}`} 
        size={20} 
      />
    </div>
  );
};