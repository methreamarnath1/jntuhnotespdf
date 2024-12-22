import { Note } from '../types';
import { generatePDF } from './pdfGenerator';

// Simulate ad display and track view
const showAd = async (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Ad displayed for 3 seconds.');
      resolve();
    }, 3000);
  });
};

// Utility function for downloading blobs
const downloadBlob = (blob: Blob, filename: string): void => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export const downloadNote = async (note: Note): Promise<void> => {
  try {
    // Simulate ad display
    await showAd();
    
    // Generate PDF
    const blob = generatePDF(note);
    const filename = `${note.subject}_${note.regulation}_${note.branch}.pdf`;
    downloadBlob(blob, filename);
    
    // Show success message
    alert(`Successfully downloaded:\n\n` +
      `${note.subject}\n` +
      `Branch: ${note.branch}\n` +
      `Year: ${note.year}, Semester: ${note.semester}\n` +
      `Regulation: ${note.regulation}`);
  } catch (error) {
    console.error('Download failed:', error);
    alert('An error occurred while generating the PDF. Please try again.');
  }
};
