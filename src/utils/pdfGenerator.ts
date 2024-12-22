import { Note } from '../types';
import jsPDF from 'jspdf';

export const generatePDF = (note: Note): Blob => {
  const doc = new jsPDF();
  
  // Add header with gradient-like effect
  doc.setFillColor(37, 99, 235); // Blue-600
  doc.rect(0, 0, 220, 40, 'F');
  
  // Add title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text(note.subject, 20, 25);
  
  // Reset text color for body
  doc.setTextColor(0, 0, 0);
  
  // Add metadata
  doc.setFontSize(12);
  doc.text(`Branch: ${note.branch}`, 20, 50);
  doc.text(`Year: ${note.year}`, 20, 60);
  doc.text(`Semester: ${note.semester}`, 20, 70);
  doc.text(`Regulation: ${note.regulation}`, 20, 80);
  
  // Add description
  doc.text('Description:', 20, 100);
  const splitDescription = doc.splitTextToSize(note.description, 170);
  doc.text(splitDescription, 20, 110);

  return doc.output('blob');
};

export const downloadPDF = (note: Note) => {
  const pdfBlob = generatePDF(note);
  const url = URL.createObjectURL(pdfBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${note.subject}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};