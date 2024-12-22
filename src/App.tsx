import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/layout/Hero';
import { FilterSection } from './components/filters/FilterSection';
import { NoteGrid } from './components/notes/NoteGrid';
import { Pagination } from './components/Pagination';
import { useNotes } from './hooks/useNotes';
import { initializeRazorpay } from './utils/payment';

function App() {
  const {
    notes,
    totalPages,
    currentPage,
    setPage,
    searchTerm,
    setSearchTerm,
    selectedBranch,
    selectedYear,
    selectedSemester,
    selectedRegulation,
    handleFilterChange,
  } = useNotes();

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
          selectedRegulation={selectedRegulation}
          onSearch={setSearchTerm}
          onFilterChange={handleFilterChange}
        />
        <div className="mt-8">
          <NoteGrid notes={notes} onBuyNow={initializeRazorpay} />
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        )}
      </main>
    </div>
  );
}

export default App;