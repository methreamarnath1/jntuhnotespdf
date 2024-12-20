import React, { useState, useEffect } from 'react';
import { Note, Branch, Year, Semester } from './types';
import { notes } from './data/notes';
import { Header } from './components/layout/Header';
import { Hero } from './components/layout/Hero';
import { FilterSection } from './components/filters/FilterSection';
import { NoteGrid } from './components/notes/NoteGrid';
import { initializeRazorpay } from './utils/payment';
import { filterNotes } from './utils/filterNotes';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<Branch | ''>('');
  const [selectedYear, setSelectedYear] = useState<Year | ''>('');
  const [selectedSemester, setSelectedSemester] = useState<Semester | ''>('');

  const handleFilterChange = (filter: 'branch' | 'year' | 'semester', value: string) => {
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
    }
  };

  const filteredNotesList = filterNotes(
    notes,
    searchTerm,
    selectedBranch,
    selectedYear,
    selectedSemester
  );

  const handleBuyNow = (note: Note) => {
    initializeRazorpay(note);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <FilterSection
          searchTerm={searchTerm}
          selectedBranch={selectedBranch}
          selectedYear={selectedYear}
          selectedSemester={selectedSemester}
          onSearch={setSearchTerm}
          onFilterChange={handleFilterChange}
        />
        <div className="mt-8">
          <NoteGrid notes={filteredNotesList} onBuyNow={handleBuyNow} />
        </div>
      </main>
    </div>
  );
}

export default App;