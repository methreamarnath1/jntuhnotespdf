import { Note } from '../types';

export const filterNotes = (
  notes: Note[],
  searchTerm: string,
  selectedBranch: string,
  selectedYear: string,
  selectedSemester: string
): Note[] => {
  return notes.filter((note) => {
    const matchesSearch = note.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.branch.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = !selectedBranch || note.branch === selectedBranch;
    const matchesYear = !selectedYear || note.year === selectedYear;
    const matchesSemester = !selectedSemester || note.semester === selectedSemester;

    return matchesSearch && matchesBranch && matchesYear && matchesSemester;
  });
};