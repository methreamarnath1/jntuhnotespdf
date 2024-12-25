import React from 'react';
import { Head } from '../components/SEO/Head';
import { Hero } from '../components/layout/Hero';
import { FilterSection } from '../components/filters/FilterSection';
import { NoteGrid } from '../components/notes/NoteGrid';
import { Pagination } from '../components/Pagination';
import { useNotes } from '../hooks/useNotes';
import { initializeRazorpay } from '../utils/payment';

export const NotesPage = () => {
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
    <div>
      <Head 
        title="JNTUH Engineering Notes - Download PDF Materials"
        description="Access and download comprehensive engineering notes for all JNTUH subjects"
      />
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
};